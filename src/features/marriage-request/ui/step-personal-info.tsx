"use client";

import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";

import { CITIES, CONTACT_METHODS, COUNTRIES, MARRIAGE_REQUIREMENT_OPTIONS, MARRIAGE_TYPES, NATIONALITIES } from "../model/options";
import type { MarriageRequestFormData, SetMarriageRequestField } from "../model/types";
import { PhoneField, SelectField, TextField } from "./form-fields";

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
}: {
  data: MarriageRequestFormData;
  setField: SetMarriageRequestField;
  emailError: string | null;
}) {
  const t = useTranslations("marriageRequest");

  return (
    <div className="flex w-full flex-col gap-(--space-fluid-md)">
      <div className="flex flex-col gap-(--space-fluid-sm)">
        <Label className="font-alexandria text-(length:--text-fluid-nav) font-normal text-foreground">
          {t("step1.applicant")}
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
        <TextField id="mr-full-name" label={t("step1.fullName")} value={data.fullName} onChange={(v) => setField("fullName", v)} />
        <TextField
          id="mr-email"
          label={t("step1.email")}
          type="email"
          value={data.email}
          onChange={(v) => setField("email", v)}
          error={emailError ?? undefined}
        />
      </div>

      <div className={ROW_CLASS}>
        <PhoneField
          id="mr-phone"
          label={t("step1.phone")}
          value={data.phoneNumber}
          onChange={(v) => setField("phoneNumber", v)}
          placeholder={t("step1.phoneNumberPlaceholder")}
        />
        <SelectField
          id="mr-contact-method"
          label={t("step1.contactMethods")}
          value={data.contactMethod}
          onChange={(v) => setField("contactMethod", v)}
          options={CONTACT_METHODS}
        />
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-nationality"
          label={t("step1.nationality")}
          value={data.nationality}
          onChange={(v) => setField("nationality", v)}
          options={NATIONALITIES}
        />
        <SelectField id="mr-city" label={t("step1.city")} value={data.city} onChange={(v) => setField("city", v)} options={CITIES} />
      </div>

      <div className={ROW_CLASS}>
        <div className="flex min-w-0 flex-1 flex-col gap-(--space-fluid-xs)">
          <Label className="font-alexandria text-(length:--text-fluid-nav) font-normal text-foreground">
            {t("step1.marriageRequirements")}
          </Label>
          <div className="flex gap-(--space-fluid-2xs)">
            <Input
              placeholder={t("step1.day")}
              value={data.targetDay}
              onChange={(event) => setField("targetDay", event.target.value)}
              className="h-(--size-fluid-field-h) rounded-xl text-center"
            />
            <Input
              placeholder={t("step1.month")}
              value={data.targetMonth}
              onChange={(event) => setField("targetMonth", event.target.value)}
              className="h-(--size-fluid-field-h) rounded-xl text-center"
            />
            <Input
              placeholder={t("step1.year")}
              value={data.targetYear}
              onChange={(event) => setField("targetYear", event.target.value)}
              className="h-(--size-fluid-field-h) rounded-xl text-center"
            />
          </div>
        </div>
        <SelectField
          id="mr-country"
          label={t("step1.country")}
          value={data.country}
          onChange={(v) => setField("country", v)}
          options={COUNTRIES}
        />
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-marriage-type"
          label={t("step1.marriageType")}
          value={data.marriageType}
          onChange={(v) => setField("marriageType", v)}
          options={MARRIAGE_TYPES}
        />
        <SelectField
          id="mr-marriage-requirement"
          label={t("step1.marriageRequirement")}
          value={data.marriageRequirement}
          onChange={(v) => setField("marriageRequirement", v)}
          options={MARRIAGE_REQUIREMENT_OPTIONS}
        />
      </div>
    </div>
  );
}
