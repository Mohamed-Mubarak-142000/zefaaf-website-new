"use client";

import { useTranslations } from "next-intl";

import { COUNTRIES, EDUCATION_LEVELS, JOB_GRADES, MARITAL_STATUSES, NATIONALITIES, RELIGIOUS_LEVELS } from "../model/options";
import type { MarriageRequestFormData, SetMarriageRequestField } from "../model/types";
import type { MarriageLookups } from "../model/use-marriage-lookups";
import { MultiSelectField, TextField } from "./form-fields";

const ROW_CLASS = "grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-(--space-fluid-md)";

export function StepPartnerSpecifications({
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
        <TextField id="mr-min-age" label={t("step3.minimumAge")} type="number" value={data.minimumAge} onChange={(v) => setField("minimumAge", v)} required />
        <TextField id="mr-max-age" label={t("step3.maximumAge")} type="number" value={data.maximumAge} onChange={(v) => setField("maximumAge", v)} required />
      </div>

      <div className={ROW_CLASS}>
        <MultiSelectField
          id="mr-pref-nationalities"
          label={t("step3.preferredNationalities")}
          values={data.preferredNationalities}
          onChange={(values) => setField("preferredNationalities", values)}
          options={lookups.nationalities.length ? lookups.nationalities : NATIONALITIES}
          required
        />
        <MultiSelectField
          id="mr-partners-country"
          label={t("step3.partnersCountry")}
          values={data.partnersCountry}
          onChange={(values) => setField("partnersCountry", values)}
          options={lookups.countries.length ? lookups.countries : COUNTRIES}
          required
        />
      </div>

      <div className={ROW_CLASS}>
        <MultiSelectField
          id="mr-pref-marital"
          label={t("step3.preferredMaritalStatuses")}
          values={data.preferredMaritalStatuses}
          onChange={(values) => setField("preferredMaritalStatuses", values)}
          options={lookups.partnerMaritalStatuses.length ? lookups.partnerMaritalStatuses : MARITAL_STATUSES}
        />
        <MultiSelectField
          id="mr-pref-religious"
          label={t("step3.preferredReligiousStatuses")}
          values={data.preferredReligiousStatuses}
          onChange={(values) => setField("preferredReligiousStatuses", values)}
          options={lookups.partnerReligiousStatuses.length ? lookups.partnerReligiousStatuses : RELIGIOUS_LEVELS}
        />
      </div>

      <div className={ROW_CLASS}>
        <MultiSelectField
          id="mr-pref-education"
          label={t("step3.preferredEducationLevels")}
          values={data.preferredEducationLevels}
          onChange={(values) => setField("preferredEducationLevels", values)}
          options={lookups.partnerEducationLevels.length ? lookups.partnerEducationLevels : EDUCATION_LEVELS}
          required={data.applicant !== "male"}
        />
        <MultiSelectField
          id="mr-pref-job-grades"
          label={t("step3.preferredJobGrades")}
          values={data.preferredJobGrades}
          onChange={(values) => setField("preferredJobGrades", values)}
          options={lookups.partnerJobGrades.length ? lookups.partnerJobGrades : JOB_GRADES}
        />
      </div>
    </div>
  );
}
