"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";

import { getStartNowCopy } from "../model/copy";
import { useStartNow } from "../model/use-start-now";
import { DetailsStep, isDetailsStepValid } from "./steps/details-step";
import { GenderStep } from "./steps/gender-step";
import { LocationStep } from "./steps/location-step";
import { PaymentStep } from "./steps/payment-step";
import { VerificationStep } from "./steps/verification-step";
import { getCountries, getVipPrice, getVipWhatsappLink, hasValidVipPaymentDetails, submitVipTransferProof, type Country, type VipPrice } from "@/shared/api";
import { detectCountryFromCoordinates, detectCountryFromDevice } from "../model/detect-country";
import { getVipPaymentMethod } from "../model/payment-method";

export function StartNowDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const locale = useLocale();
  const copy = getStartNowCopy(locale);
  const tPayment = useTranslations("vipPayment");
  const { step, gender, setGender, details, patchDetails, goNext, goBack, reset } = useStartNow();
  const [requestingLocation, setRequestingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [price, setPrice] = useState<VipPrice | null>(null);
  const [priceLoading, setPriceLoading] = useState(false);
  const [proof, setProof] = useState<File | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSubmitting, setPaymentSubmitting] = useState(false);
  const [transferReference, setTransferReference] = useState("");
  const [showAgentDetails, setShowAgentDetails] = useState(false);

  useEffect(() => {
    if (open) void getCountries().then(setCountries).catch(() => undefined);
  }, [open]);

  useEffect(() => {
    if (step !== "payment") return;
    const country = countries.find((item) => item.isoCode.toLowerCase() === details.countryIso2.toLowerCase());
    if (!country || !details.gender) {
      queueMicrotask(() => setPriceLoading(false));
      return;
    }
    let cancelled = false;
    void getVipPrice(country.id, details.gender)
      .then((value) => { if (!cancelled) setPrice(value); })
      .catch(() => { if (!cancelled) setPrice(null); })
      .finally(() => { if (!cancelled) setPriceLoading(false); });
    return () => { cancelled = true; };
  }, [step, countries, details.countryIso2, details.gender]);

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) {
      reset();
      setRequestingLocation(false);
      setLocationError(null);
      setPriceLoading(false);
      setPaymentSubmitting(false);
      setShowAgentDetails(false);
    }
  }

  const title = step === "payment" ? tPayment("title") : copy[step].title;
  const canGoNext =
    step === "gender" ? gender !== null : step === "details" ? isDetailsStepValid(details) : step === "payment" ? !priceLoading : true;
  const paymentMethod = getVipPaymentMethod(price, details.countryIso2);

  async function handleNext() {
    if (step === "verification") {
      handleOpenChange(false);
      return;
    }
    if (step === "location") {
      if (!navigator.geolocation) {
        setLocationError("Location services are not supported by this browser.");
        return;
      }

      setRequestingLocation(true);
      setLocationError(null);
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          sessionStorage.setItem(
            "zefaaf-user-location",
            JSON.stringify({
              latitude: coords.latitude,
              longitude: coords.longitude,
              accuracy: coords.accuracy,
            })
          );
          const detectedIso2 = await detectCountryFromCoordinates(coords.latitude, coords.longitude) ?? detectCountryFromDevice();
          if (detectedIso2) patchDetails({ countryIso2: detectedIso2, phoneDialIso2: detectedIso2 });
          setRequestingLocation(false);
          goNext();
        },
        (error) => {
          setRequestingLocation(false);
          setLocationError(error.message);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
      );
      return;
    }

    if (step === "payment") {
      if (priceLoading || paymentSubmitting) return;
      const hasTransferDetails = paymentMethod === "agent" && hasValidVipPaymentDetails(price);
      if (hasTransferDetails) {
        if (!showAgentDetails) {
          setShowAgentDetails(true);
          return;
        }
        if (!proof || !["image/jpeg", "image/png", "image/webp"].includes(proof.type) || proof.size > 5 * 1024 * 1024) {
          setPaymentError(`${tPayment("uploadProof")} — 5 MB`);
          return;
        }
        const country = countries.find((item) => item.isoCode.toLowerCase() === details.countryIso2.toLowerCase());
        const dialCountry = countries.find((item) => item.isoCode.toLowerCase() === details.phoneDialIso2.toLowerCase());
        if (!country || !details.gender) return;
        const formData = new FormData();
        formData.append("full_name", details.fullName.trim());
        formData.append("email", details.email.trim());
        formData.append("phone", details.phoneNumber.replace(/\D/g, ""));
        formData.append("dialing_code", dialCountry?.dialingCode ? `+${dialCountry.dialingCode}` : "");
        formData.append("gender", details.gender);
        formData.append("country_id", String(country.id));
        if (transferReference.trim()) formData.append("transfer_reference", transferReference.trim());
        formData.append("transfer_proof", proof);
        setPaymentSubmitting(true);
        setPaymentError(null);
        try {
          const response = await submitVipTransferProof(formData);
          if (response.status < 200 || response.status >= 300 || response.data?.success === false) {
            setPaymentError(response.data?.message ?? tPayment("submitError"));
            return;
          }
          goNext();
        } catch {
          setPaymentError(tPayment("submitError"));
        } finally {
          setPaymentSubmitting(false);
        }
        return;
      }
      // No live WhatsApp destination or geolocation backend exists yet —
      // same placeholder convention as the header/footer/VIP CTAs — so the
      // flow simply completes and closes.
      setPaymentSubmitting(true);
      try {
        const link = paymentMethod === "telegram"
          ? "https://t.me/zefaaf"
          : await getVipWhatsappLink().catch(() => null) ?? "https://wa.me/31683834839";
        window.open(link, "_blank", "noopener,noreferrer");
        handleOpenChange(false);
      } finally {
        setPaymentSubmitting(false);
      }
      return;
    }
    if (step === "details") {
      const country = countries.find((item) => item.isoCode.toLowerCase() === details.countryIso2.toLowerCase());
      if (country && details.gender) {
        setPrice(null);
        setPriceLoading(true);
        setShowAgentDetails(false);
        const url = new URL(window.location.href);
        url.searchParams.set("country_id", String(country.id));
        url.searchParams.set("gender", details.gender);
        window.history.replaceState(null, "", url);
      }
    }
    goNext();
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {step === "gender" && <GenderStep copy={copy.gender} value={gender} onChange={(value) => { setGender(value); patchDetails({ gender: value === "woman" ? "female" : "male" }); }} />}
        {step === "details" && <DetailsStep copy={copy.details} values={details} onChange={patchDetails} countries={countries} />}
        {step === "payment" && priceLoading && (
          <div className="flex min-h-44 items-center justify-center p-6">
            <span className="size-8 animate-spin rounded-full border-2 border-brand/25 border-t-brand" aria-label="Loading payment options" />
          </div>
        )}
        {step === "payment" && !priceLoading && <PaymentStep price={price} method={paymentMethod} showAgentDetails={showAgentDetails} proof={proof} reference={transferReference} onReferenceChange={setTransferReference} onProofChange={(file) => { setProof(file); setPaymentError(null); }} error={paymentError} />}
        {step === "verification" && <VerificationStep copy={copy.verification} />}
        {step === "location" && <LocationStep copy={copy.location} />}
        {step === "location" && locationError && (
          <p role="alert" className="px-4 pb-2 font-alexandria text-sm text-destructive">
            {locationError}
          </p>
        )}

        <DialogFooter className={step === "gender" ? "justify-end" : "justify-between"}>
          {step === "location" ? (
            <button
              type="button"
              onClick={() => {
                const detectedIso2 = detectCountryFromDevice();
                if (detectedIso2) patchDetails({ countryIso2: detectedIso2, phoneDialIso2: detectedIso2 });
                goNext();
              }}
              className="font-alexandria text-sm text-brand"
            >
              {copy.location.skip}
            </button>
          ) : (
            step !== "gender" && (
              <button type="button" onClick={() => {
                if (step === "payment" && showAgentDetails) {
                  setShowAgentDetails(false);
                  setPaymentError(null);
                  return;
                }
                goBack();
              }} className="font-alexandria text-sm text-brand">
                {step === "payment" ? tPayment("back") : copy.actions.back}
              </button>
            )
          )}

          <Button
            type="button"
            disabled={!canGoNext || requestingLocation || paymentSubmitting}
            onClick={handleNext}
            className="h-10 min-w-[64px] rounded-lg px-5 font-alexandria text-xs"
          >
            {step === "payment" && (priceLoading || paymentSubmitting)
              ? <Loader2 className="size-5 animate-spin" aria-label={tPayment("title")} />
              : step === "verification"
              ? "OK"
              : step === "location" && requestingLocation
              ? <Loader2 className="size-5 animate-spin" aria-label="Loading" />
              : step === "location"
                ? copy.location.allow
                : step === "payment" ? tPayment("next") : copy.actions.next}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
