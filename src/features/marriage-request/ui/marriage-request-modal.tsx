"use client";

import * as React from "react";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog";

import { useMarriageRequestForm } from "../model/use-marriage-request-form";
import { useMarriageLookups } from "../model/use-marriage-lookups";
import { createSmartMarriage } from "@/shared/api";
import { detectCountryFromDevice, detectLocationFromCoordinates } from "@/shared/lib/detect-country";
import { toInternationalPhone } from "@/shared/lib/phone";
import { StepFinancialLifestyle } from "./step-financial-lifestyle";
import { StepPartnerSpecifications } from "./step-partner-specifications";
import { StepPersonalInfo } from "./step-personal-info";
import { MarriageRequestStepper } from "./stepper";
import {
  getAgentPaymentFields,
  isMissingAgentDetails,
  toPaymentMethod,
  type SmartMarriagePaymentMethod,
} from "../model/payment-flow";
import { buildMarriageRequestMessage } from "../model/request-summary";
import { PaymentMethodDialog } from "./payment-method-dialog";

export interface MarriageRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MarriageRequestModal({ open, onOpenChange }: MarriageRequestModalProps) {
  const t = useTranslations("marriageRequest");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        closeLabel={t("close")}
        className="grid w-[min(94vw,55rem)] max-h-[90vh] grid-rows-[auto_1fr_auto] gap-0"
      >
        <DialogHeader className="border-b border-border">
          <DialogTitle className="flex-1 font-alexandria text-(length:--text-fluid-lg) font-semibold text-foreground">
            {t("modalTitle")}
          </DialogTitle>
        </DialogHeader>

        {/* A separate component so its wizard state (from useMarriageRequestForm)
            lives inside the subtree Radix unmounts on close — every reopen
            starts fresh without any manual reset logic. */}
        <MarriageRequestWizard onSubmitted={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}

function MarriageRequestWizard({ onSubmitted }: { onSubmitted: () => void }) {
  const t = useTranslations("marriageRequest");
  const locale = useLocale();
  const { step, data, setField, goNext, goBack, goToStep } = useMarriageRequestForm();
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState<SmartMarriagePaymentMethod | null>(null);
  const [agentId, setAgentId] = React.useState<number | null>(null);
  const [agentCode, setAgentCode] = React.useState("");
  const [paymentError, setPaymentError] = React.useState<string | null>(null);
  const [detectedCountryIso, setDetectedCountryIso] = React.useState<string | null>(null);
  const [detectedRegion, setDetectedRegion] = React.useState<string | null>(null);
  const [coordinates, setCoordinates] = React.useState<{ latitude: number; longitude: number } | null>(null);
  const lookups = useMarriageLookups(data.country, data.applicant);

  const selectedCountry = lookups.countryDetails.find((country) => String(country.id) === data.country);
  const internationalPhone = toInternationalPhone(data.phoneNumber, selectedCountry?.dialingCode);
  // The whole request as one message, ready for the chat the payment dialog
  // opens on submit. Built here rather than inside that dialog so it sees the
  // wizard's data and the same lookups the fields were filled from.
  const chatMessage = buildMarriageRequestMessage({
    data,
    options: lookups,
    channel: paymentMethod,
    phone: ["email", "telegram"].includes(data.contactMethod) ? "" : internationalPhone,
    agentCode,
  });

  React.useEffect(() => {
    if (!navigator.geolocation) {
      queueMicrotask(() => setDetectedCountryIso(detectCountryFromDevice()));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates({ latitude: coords.latitude, longitude: coords.longitude });
        void detectLocationFromCoordinates(coords.latitude, coords.longitude, locale)
          .then((location) => {
            setDetectedCountryIso(location?.countryCode ?? detectCountryFromDevice());
            setDetectedRegion(location?.region ?? location?.city ?? null);
          });
      },
      () => setDetectedCountryIso(detectCountryFromDevice()),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  }, [locale]);

  React.useEffect(() => {
    if (data.country || !detectedCountryIso) return;
    const detectedCountry = lookups.countryDetails.find(
      (country) => country.isoCode.toUpperCase() === detectedCountryIso,
    );
    if (detectedCountry) setField("country", String(detectedCountry.id));
  }, [data.country, detectedCountryIso, lookups.countryDetails, setField]);

  React.useEffect(() => {
    if (data.city || !detectedRegion || !detectedCountryIso) return;
    const selectedCountry = lookups.countryDetails.find((country) => String(country.id) === data.country);
    if (selectedCountry?.isoCode.toUpperCase() !== detectedCountryIso) return;
    const normalize = (value: string) => value.toLocaleLowerCase().replace(/[\s\-_،,.'’]/g, "");
    const detected = normalize(detectedRegion);
    const governorate = lookups.governorates.find((option) => {
      const name = normalize(option.label);
      return name === detected || name.includes(detected) || detected.includes(name);
    });
    if (governorate) setField("city", governorate.value);
  }, [data.city, data.country, detectedCountryIso, detectedRegion, lookups.countryDetails, lookups.governorates, setField]);

  function getStepError(currentStep: 1 | 2 | 3): string | null {
    if (currentStep === 1) {
      const required = [
        data.fullName, data.email, data.nationality, data.country, data.city,
        data.targetDay, data.targetMonth, data.targetYear, data.marriageType,
      ];
      if (required.some((value) => !value.trim())) return "يرجى إكمال جميع الحقول المطلوبة.";
      if (data.applicant !== "male" && !data.marriageRequirement.length) return "يرجى اختيار متطلبات الزواج.";
      if (data.fullName.trim().split(/\s+/).length < 2) return "يرجى كتابة الاسم كاملًا من كلمتين على الأقل.";
      if (!/^\S+@\S+\.\S+$/.test(data.email.trim())) return "يرجى إدخال بريد إلكتروني صحيح.";
      if (!["email", "telegram"].includes(data.contactMethod) && data.phoneNumber.replace(/\D/g, "").length < 7) {
        return "يرجى إدخال رقم هاتف صحيح يحتوي على 7 أرقام على الأقل.";
      }
      if (data.contactMethod === "telegram" && !/^@?[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(data.telegramUsername.trim())) {
        return "يرجى إدخال اسم مستخدم صحيح على Telegram.";
      }

      const year = Number(data.targetYear);
      const month = Number(data.targetMonth);
      const day = Number(data.targetDay);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      let age = today.getFullYear() - year;
      if (today.getMonth() < month - 1 || (today.getMonth() === month - 1 && today.getDate() < day)) age -= 1;
      if (
        birthDate.getFullYear() !== year || birthDate.getMonth() !== month - 1 || birthDate.getDate() !== day ||
        age < 18 || age > 100
      ) return "يرجى إدخال تاريخ ميلاد صحيح لعمر بين 18 و100 عام.";
    }

    if (currentStep === 2) {
      const commonRequired = [
        data.education, data.jobGrade, data.maritalStatus, data.religiousLevel,
        data.personalTraits, data.partnerTraits,
      ];
      const femaleRequired = [
        data.preferredJobStability, data.preferredHousingStates,
        data.preferredMonthlyIncome, data.preferredDowry, data.preferredGold,
      ];
      if (
        commonRequired.some((value) => !value.trim()) ||
        (data.applicant !== "male" && femaleRequired.some((value) => !value.length))
      ) return "يرجى إكمال جميع الحقول المطلوبة.";

      const forbiddenContact = /(https?:\/\/|www\.|\b\S+@\S+\.\S+\b|(?:\+?\d[\s().-]*){7,})/i;
      if (forbiddenContact.test(data.personalTraits) || forbiddenContact.test(data.partnerTraits)) {
        return "لا يُسمح بكتابة أرقام هاتف أو بريد إلكتروني أو روابط داخل الوصف.";
      }
      const descriptions = `${data.personalTraits} ${data.partnerTraits}`.toLowerCase();
      if (lookups.badWords.some((word) => descriptions.includes(word))) {
        return "الوصف يحتوي على كلمات غير مسموح بها.";
      }
    }

    if (currentStep === 3) {
      const minimumAge = Number(data.minimumAge);
      const maximumAge = Number(data.maximumAge);
      if (!data.partnersCountry.length || !data.preferredNationalities.length) return "يرجى اختيار دولة وجنسية الشريك.";
      if (data.applicant !== "male" && !data.preferredEducationLevels.length) {
        return "يرجى اختيار المستوى التعليمي المطلوب للشريك.";
      }
      if (!Number.isInteger(minimumAge) || !Number.isInteger(maximumAge) || minimumAge < 18 || maximumAge > 120 || maximumAge < minimumAge) {
        return "يرجى إدخال نطاق عمر صحيح بين 18 و120 عامًا.";
      }
    }

    return null;
  }

  function handleNext() {
    const error = getStepError(step);
    if (error) {
      setEmailError(step === 1 && !data.email.trim() ? t("step1.emailRequired") : null);
      setSubmitError(error);
      return;
    }
    setEmailError(null);
    setSubmitError(null);
    goNext();
  }

  function handleBack() {
    setEmailError(null);
    goBack();
  }

  // Both actions are plain type="button" handlers rather than a native
  // form submit: the button in this slot switches from "Next" to "Submit"
  // as `step` advances, and mutating a live button's type to "submit"
  // from inside its own click handler lets the browser's default action
  // fire on the just-mutated node — submitting (and closing) the dialog
  // one step early. Explicit handlers sidestep that entirely.
  function handleFinish() {
    for (const checkedStep of [1, 2, 3] as const) {
      const error = getStepError(checkedStep);
      if (error) {
        setSubmitError(error);
        goToStep(checkedStep);
        return;
      }
    }
    setSubmitError(null);
    setPaymentError(null);
    setPaymentMethod(null);
    setAgentId(null);
    setAgentCode("");
    setPaymentDialogOpen(true);
  }

  async function handlePaymentContinue() {
    if (!paymentMethod) return;
    if (isMissingAgentDetails(paymentMethod, agentId, agentCode)) {
      setPaymentError(locale.startsWith("ar") ? "يرجى إدخال رقم الوكيل وكوده." : "Enter the agent ID and code.");
      return;
    }
    setSubmitting(true);
    setPaymentError(null);
    try {
      const gender = data.applicant === "male" ? "male" : "female";
      const communicationMethod = data.contactMethod === "whatsapp" ? "phone" : data.contactMethod;
      const payload: Record<string, unknown> = {
        full_name: data.fullName.trim(), email: data.email.trim(),
        communication_method: communicationMethod,
        phone: ["email", "telegram"].includes(communicationMethod) ? null : internationalPhone,
        whatsapp: data.contactMethod === "whatsapp" ? internationalPhone : null,
        telegram_username: communicationMethod === "telegram" ? data.telegramUsername.trim() : null,
        birth_date: `${data.targetYear}-${data.targetMonth.padStart(2, "0")}-${data.targetDay.padStart(2, "0")}`,
        gender, country_id: Number(data.country), nationality_id: Number(data.nationality),
        marriage_type: data.marriageType, marital_status: data.maritalStatus,
        religious_status: data.religiousLevel, education_level: data.education,
        job_grade: data.jobGrade, personality_traits: data.personalTraits,
        partner_traits: data.partnerTraits,
        payment_method: toPaymentMethod(paymentMethod),
        pref_min_age: Number(data.minimumAge), pref_max_age: Number(data.maximumAge),
        pref_country_ids: data.partnersCountry.map(Number),
        pref_nationality_ids: data.preferredNationalities.map(Number),
        pref_marital_statuses: data.preferredMaritalStatuses,
        pref_religious_statuses: data.preferredReligiousStatuses,
        pref_education_levels: data.preferredEducationLevels,
        pref_job_grades: data.preferredJobGrades,
      };
      if (data.city) payload.governorate_id = Number(data.city);
      if (coordinates) {
        payload.latitude = coordinates.latitude;
        payload.longitude = coordinates.longitude;
      }
      Object.assign(payload, getAgentPaymentFields(paymentMethod, agentId, agentCode));
      if (gender === "male") {
        const optionalMaleFields: Record<string, unknown> = {
          dowry: data.dowry,
          housing_status: data.housingState,
          monthly_income: data.monthlyIncome,
          gold: data.gold,
          marriage_requirements: data.marriageRequirement.length ? data.marriageRequirement : null,
          job_stability: data.jobStability,
        };
        for (const [key, value] of Object.entries(optionalMaleFields)) {
          if (value !== "" && value !== null) payload[key] = value;
        }
      } else Object.assign(payload, {
        pref_dowry: data.preferredDowry,
        pref_housing_status: data.preferredHousingStates,
        pref_monthly_income: data.preferredMonthlyIncome,
        pref_gold: data.preferredGold,
        pref_marriage_requirements: data.marriageRequirement,
        pref_job_stability: data.preferredJobStability,
      });
      const response = await createSmartMarriage(payload);
      if (response?.success === false) {
        throw new Error(response.message ?? response.error ?? "تعذر إرسال الطلب. حاول مرة أخرى.");
      }
      // The WhatsApp/Telegram tab is already open — the dialog opens it inside
      // the click that calls this, so the chat and the request go out
      // together rather than the tab waiting on the response.
      setPaymentDialogOpen(false);
      onSubmitted();
    } catch (error) {
      const response = axios.isAxiosError(error) ? error.response?.data as { message?: string; error?: string } | undefined : undefined;
      setPaymentError(response?.message ?? response?.error ?? (error instanceof Error ? error.message : null) ?? "تعذر إرسال الطلب. حاول مرة أخرى.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="contents">
      <div className="flex min-h-0 flex-col items-center gap-(--space-fluid-lg) overflow-y-auto p-(--space-fluid-md)">
        <MarriageRequestStepper currentStep={step} />

        {step === 1 && <StepPersonalInfo data={data} setField={setField} emailError={emailError} lookups={lookups} />}
        {step === 2 && <StepFinancialLifestyle data={data} setField={setField} lookups={lookups} />}
        {step === 3 && <StepPartnerSpecifications data={data} setField={setField} lookups={lookups} />}
      </div>

      <div className="flex items-center justify-between gap-(--space-fluid-xs) border-t border-border px-(--space-fluid-md) py-(--space-fluid-sm)">
        {submitError && <p className="text-sm text-destructive">{submitError}</p>}
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="cursor-pointer font-alexandria text-(length:--text-fluid-nav) text-grey-primary transition-colors hover:text-foreground"
          >
            {t("actions.back")}
          </button>
        ) : (
          <span aria-hidden />
        )}

        {step < 3 ? (
          <Button type="button" onClick={handleNext} className="h-10 min-w-20 px-5 font-alexandria text-sm">
            {t("actions.next")}
          </Button>
        ) : (
          <Button type="button" disabled={submitting} onClick={handleFinish} className="h-10 min-w-20 px-5 font-alexandria text-sm">
            {submitting ? <Loader2 className="size-5 animate-spin" aria-label="Submitting" /> : t("actions.submit")}
          </Button>
        )}
      </div>
      <PaymentMethodDialog
        open={paymentDialogOpen}
        onOpenChange={(nextOpen) => {
          if (!submitting) setPaymentDialogOpen(nextOpen);
        }}
        locale={locale}
        countryCode={selectedCountry?.isoCode ?? ""}
        method={paymentMethod}
        onMethodChange={(method, selectedAgentId) => {
          setPaymentMethod(method);
          setAgentId(selectedAgentId ?? null);
          setPaymentError(null);
        }}
        agentCode={agentCode}
        onAgentCodeChange={setAgentCode}
        chatMessage={chatMessage}
        submitting={submitting}
        error={paymentError}
        onContinue={handlePaymentContinue}
      />
    </div>
  );
}
