"use client";

import { useTranslations } from "next-intl";

import type { MarriageRequestFormData, SetMarriageRequestField } from "../model/types";
import type { MarriageLookups } from "../model/use-marriage-lookups";
import { MultiSelectField, SelectField, TextareaField } from "./form-fields";

const ROW_CLASS = "grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-(--space-fluid-md)";

export function StepFinancialLifestyle({
  data,
  setField,
  lookups,
}: {
  data: MarriageRequestFormData;
  setField: SetMarriageRequestField;
  lookups: MarriageLookups;
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
          options={lookups.educationLevels}
          required
        />
        <SelectField
          id="mr-job-grade"
          label={t("step3.preferredJobGrades")}
          value={data.jobGrade}
          onChange={(v) => setField("jobGrade", v)}
          options={lookups.jobGrades}
          required
        />
      </div>

      <div className={ROW_CLASS}>
        {data.applicant === "male" ? (
          <SelectField id="mr-job-stability" label={t("step2.jobStability")} value={data.jobStability} onChange={(value) => setField("jobStability", value)} options={lookups.jobStability} />
        ) : (
          <MultiSelectField id="mr-job-stability" label={t("step2.jobStability")} values={data.preferredJobStability} onChange={(values) => setField("preferredJobStability", values)} options={lookups.jobStability} required />
        )}
      </div>

      <div className={ROW_CLASS}>
        {data.applicant === "male" ? (
          <SelectField id="mr-housing-state" label={t("step2.housingState")} value={data.housingState} onChange={(value) => setField("housingState", value)} options={lookups.housingStatuses} />
        ) : (
          <MultiSelectField id="mr-housing-state" label={t("step2.housingState")} values={data.preferredHousingStates} onChange={(values) => setField("preferredHousingStates", values)} options={lookups.housingStatuses} required />
        )}
        {data.applicant === "male" ? (
          <SelectField id="mr-monthly-income" label={t("step2.monthlyIncome")} value={data.monthlyIncome} onChange={(value) => setField("monthlyIncome", value)} options={lookups.monthlyIncome} />
        ) : (
          <MultiSelectField id="mr-monthly-income" label={t("step2.monthlyIncome")} values={data.preferredMonthlyIncome} onChange={(values) => setField("preferredMonthlyIncome", values)} options={lookups.monthlyIncome} required />
        )}
      </div>

      <div className={ROW_CLASS}>
        {data.applicant === "male" ? (
          <SelectField id="mr-dowry" label={t("step2.dowry")} value={data.dowry} onChange={(value) => setField("dowry", value)} options={lookups.dowry} />
        ) : (
          <MultiSelectField id="mr-dowry" label={t("step2.dowry")} values={data.preferredDowry} onChange={(values) => setField("preferredDowry", values)} options={lookups.dowry} required />
        )}
        {data.applicant === "male" ? (
          <SelectField id="mr-gold" label={t("step2.gold")} value={data.gold} onChange={(value) => setField("gold", value)} options={lookups.gold} />
        ) : (
          <MultiSelectField id="mr-gold" label={t("step2.gold")} values={data.preferredGold} onChange={(values) => setField("preferredGold", values)} options={lookups.gold} required />
        )}
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-marital-status"
          label={t("step2.maritalStatus")}
          value={data.maritalStatus}
          onChange={(v) => setField("maritalStatus", v)}
          options={lookups.maritalStatuses}
          required
        />
        <SelectField
          id="mr-religious-level"
          label={t("step2.religiousLevel")}
          value={data.religiousLevel}
          onChange={(v) => setField("religiousLevel", v)}
          options={lookups.religiousStatuses}
          required
        />
      </div>

      <div className={ROW_CLASS}>
        <TextareaField
          id="mr-personal-traits"
          label={t("step2.personalTraits")}
          value={data.personalTraits}
          onChange={(v) => setField("personalTraits", v)}
          required
        />
        <TextareaField
          id="mr-partner-traits"
          label={t("step2.partnerTraits")}
          value={data.partnerTraits}
          onChange={(v) => setField("partnerTraits", v)}
          required
        />
      </div>
    </div>
  );
}
