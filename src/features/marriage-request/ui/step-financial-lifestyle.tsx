"use client";

import { useTranslations } from "next-intl";

import {
  DOWRY_RANGES,
  EDUCATION_LEVELS,
  GOLD_OPTIONS,
  HOUSING_STATES,
  JOB_STABILITY_OPTIONS,
  MARITAL_STATUSES,
  MONTHLY_INCOME_RANGES,
  RELIGIOUS_LEVELS,
} from "../model/options";
import type { MarriageRequestFormData, SetMarriageRequestField } from "../model/types";
import { SelectField, TextareaField } from "./form-fields";

const ROW_CLASS = "grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-(--space-fluid-md)";

export function StepFinancialLifestyle({
  data,
  setField,
}: {
  data: MarriageRequestFormData;
  setField: SetMarriageRequestField;
}) {
  const t = useTranslations("marriageRequest");

  return (
    <div className="flex w-full flex-col gap-(--space-fluid-md)">
      <div className={ROW_CLASS}>
        <SelectField
          id="mr-education"
          label={t("step2.education")}
          value={data.education}
          onChange={(v) => setField("education", v)}
          options={EDUCATION_LEVELS}
        />
        <SelectField
          id="mr-job-stability"
          label={t("step2.jobStability")}
          value={data.jobStability}
          onChange={(v) => setField("jobStability", v)}
          options={JOB_STABILITY_OPTIONS}
        />
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-housing-state"
          label={t("step2.housingState")}
          value={data.housingState}
          onChange={(v) => setField("housingState", v)}
          options={HOUSING_STATES}
        />
        <SelectField
          id="mr-monthly-income"
          label={t("step2.monthlyIncome")}
          value={data.monthlyIncome}
          onChange={(v) => setField("monthlyIncome", v)}
          options={MONTHLY_INCOME_RANGES}
        />
      </div>

      <div className={ROW_CLASS}>
        <SelectField id="mr-dowry" label={t("step2.dowry")} value={data.dowry} onChange={(v) => setField("dowry", v)} options={DOWRY_RANGES} />
        <SelectField id="mr-gold" label={t("step2.gold")} value={data.gold} onChange={(v) => setField("gold", v)} options={GOLD_OPTIONS} />
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-marital-status"
          label={t("step2.maritalStatus")}
          value={data.maritalStatus}
          onChange={(v) => setField("maritalStatus", v)}
          options={MARITAL_STATUSES}
        />
        <SelectField
          id="mr-religious-level"
          label={t("step2.religiousLevel")}
          value={data.religiousLevel}
          onChange={(v) => setField("religiousLevel", v)}
          options={RELIGIOUS_LEVELS}
        />
      </div>

      <div className={ROW_CLASS}>
        <TextareaField
          id="mr-personal-traits"
          label={t("step2.personalTraits")}
          value={data.personalTraits}
          onChange={(v) => setField("personalTraits", v)}
        />
        <TextareaField
          id="mr-partner-traits"
          label={t("step2.partnerTraits")}
          value={data.partnerTraits}
          onChange={(v) => setField("partnerTraits", v)}
        />
      </div>
    </div>
  );
}
