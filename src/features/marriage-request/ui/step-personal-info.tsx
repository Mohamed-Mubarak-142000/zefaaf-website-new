"use client";

import { useLocale, useTranslations } from "next-intl";

import { cn } from "@/shared/lib/utils";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

import { CONTACT_METHODS, COUNTRIES, MARRIAGE_REQUIREMENT_OPTIONS, MARRIAGE_TYPES, NATIONALITIES } from "../model/options";
import type { MarriageRequestFormData, SetMarriageRequestField } from "../model/types";
import type { MarriageLookups } from "../model/use-marriage-lookups";
import { MultiSelectField, PhoneField, SelectField, TextField } from "./form-fields";

const GENDER_OPTIONS = [
  { value: "male", labelKey: "step1.male" },
  { value: "female", labelKey: "step1.female" },
  { value: "guardian", labelKey: "step1.guardian" },
] as const;

const ROW_CLASS = "grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-(--space-fluid-md)";

export function StepPersonalInfo({
  data,
  setField,
  emailError,
  lookups,
}: {
  data: MarriageRequestFormData;
  setField: SetMarriageRequestField;
  emailError: string | null;
  lookups: MarriageLookups;
}) {
  const t = useTranslations("marriageRequest");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 83 }, (_, index) => String(currentYear - 18 - index));
  const months = Array.from({ length: 12 }, (_, index) => ({
    value: String(index + 1).padStart(2, "0"),
    label: new Intl.DateTimeFormat(locale, { month: "long" }).format(new Date(2000, index, 1)),
  }));
  const daysInMonth = data.targetMonth
    ? new Date(Number(data.targetYear) || 2000, Number(data.targetMonth), 0).getDate()
    : 31;
  const days = Array.from({ length: daysInMonth }, (_, index) => String(index + 1).padStart(2, "0"));

  function updateMonthOrYear(field: "targetMonth" | "targetYear", value: string) {
    setField(field, value);
    const year = field === "targetYear" ? value : data.targetYear;
    const month = field === "targetMonth" ? value : data.targetMonth;
    if (!data.targetDay || !month) return;
    const maximumDay = new Date(Number(year) || 2000, Number(month), 0).getDate();
    if (Number(data.targetDay) > maximumDay) setField("targetDay", String(maximumDay).padStart(2, "0"));
  }

  return (
    <div className="flex w-full flex-col gap-(--space-fluid-md)">
      <div className="flex flex-col gap-(--space-fluid-sm)">
        <Label className="gap-0 font-alexandria text-(length:--text-fluid-nav) font-normal text-foreground">
          {t("step1.applicant")}<span aria-hidden className="ms-0.5 text-lg leading-none text-destructive">*</span>
        </Label>
        <RadioGroup
          value={data.applicant}
          onValueChange={(value) => setField("applicant", value as MarriageRequestFormData["applicant"])}
        >
          {GENDER_OPTIONS.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-(--space-fluid-2xs)">
              <RadioGroupItem value={option.value} id={`mr-gender-${option.value}`} />
              <span
                className={cn(
                  "font-alexandria text-(length:--text-fluid-nav)",
                  data.applicant === option.value ? "text-primary" : "text-foreground",
                )}
              >
                {t(option.labelKey)}
              </span>
            </label>
          ))}
        </RadioGroup>
      </div>

      <div className={ROW_CLASS}>
        <TextField id="mr-full-name" label={t("step1.fullName")} value={data.fullName} onChange={(v) => setField("fullName", v)} required />
        <TextField
          id="mr-email"
          label={t("step1.email")}
          type="email"
          value={data.email}
          onChange={(v) => setField("email", v)}
          error={emailError ?? undefined}
          required
        />
      </div>

      <div className={ROW_CLASS}>
        {data.contactMethod === "telegram" ? (
          <TextField
            id="mr-telegram"
            label="Telegram"
            value={data.telegramUsername}
            onChange={(value) => setField("telegramUsername", value)}
            placeholder="@username"
            required
          />
        ) : (
          <PhoneField
            id="mr-phone"
            label={t("step1.phone")}
            value={data.phoneNumber}
            onChange={(v) => setField("phoneNumber", v)}
            placeholder={t("step1.phoneNumberPlaceholder")}
            countries={lookups.countryDetails}
            countryId={data.country}
            onCountryChange={(value) => setField("country", value)}
            required={data.contactMethod !== "email"}
          />
        )}
        <SelectField
          id="mr-contact-method"
          label={t("step1.contactMethods")}
          value={data.contactMethod}
          onChange={(v) => setField("contactMethod", v)}
          options={CONTACT_METHODS}
          required
        />
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-nationality"
          label={t("step1.nationality")}
          value={data.nationality}
          onChange={(v) => setField("nationality", v)}
          options={lookups.nationalities.length ? lookups.nationalities : NATIONALITIES}
          required
        />
        <SelectField
          id="mr-country"
          label={t("step1.country")}
          value={data.country}
          onChange={(v) => setField("country", v)}
          options={lookups.countries.length ? lookups.countries : COUNTRIES}
          required
        />
      </div>

      <div className={ROW_CLASS}>
        <div className="flex min-w-0 flex-1 flex-col gap-(--space-fluid-xs)">
          <Label className="gap-0 font-alexandria text-(length:--text-fluid-nav) font-normal text-foreground">
            {t("step1.marriageRequirements")}<span aria-hidden className="ms-0.5 text-lg leading-none text-destructive">*</span>
          </Label>
          <div className="flex gap-(--space-fluid-2xs)">
            <Select value={data.targetDay || undefined} onValueChange={(value) => setField("targetDay", value)}>
              <SelectTrigger aria-label={t("step1.day")} className="min-w-0 flex-1 justify-center px-2"><SelectValue placeholder={t("step1.day")} /></SelectTrigger>
              <SelectContent className="min-w-[var(--radix-select-trigger-width)]">{days.map((day) => <SelectItem key={day} value={day}>{day}</SelectItem>)}</SelectContent>
            </Select>
            <Select value={data.targetMonth || undefined} onValueChange={(value) => updateMonthOrYear("targetMonth", value)}>
              <SelectTrigger aria-label={t("step1.month")} className="min-w-0 flex-1 justify-center px-2"><SelectValue placeholder={t("step1.month")} /></SelectTrigger>
              <SelectContent className="min-w-[var(--radix-select-trigger-width)]">{months.map((month) => <SelectItem key={month.value} value={month.value}>{month.label}</SelectItem>)}</SelectContent>
            </Select>
            <Select value={data.targetYear || undefined} onValueChange={(value) => updateMonthOrYear("targetYear", value)}>
              <SelectTrigger aria-label={t("step1.year")} className="min-w-0 flex-1 justify-center px-2"><SelectValue placeholder={t("step1.year")} /></SelectTrigger>
              <SelectContent className="min-w-[var(--radix-select-trigger-width)]">{years.map((year) => <SelectItem key={year} value={year}>{year}</SelectItem>)}</SelectContent>
            </Select>
          </div>
        </div>
        <SelectField
          id="mr-city"
          label={t("step1.city")}
          value={data.city}
          onChange={(v) => setField("city", v)}
          options={lookups.governorates}
          disabled={!data.country || !lookups.governorates.length}
          required
        />
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-marriage-type"
          label={t("step1.marriageType")}
          value={data.marriageType}
          onChange={(v) => setField("marriageType", v)}
          options={lookups.marriageTypes.length ? lookups.marriageTypes : MARRIAGE_TYPES}
          required
        />
        <MultiSelectField
          id="mr-marriage-requirement"
          label={t("step1.marriageRequirement")}
          values={data.marriageRequirement}
          onChange={(values) => setField("marriageRequirement", values)}
          options={lookups.marriageRequirements.length ? lookups.marriageRequirements : MARRIAGE_REQUIREMENT_OPTIONS}
          required={data.applicant !== "male"}
        />
      </div>
    </div>
  );
}
