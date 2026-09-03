"use client";

import { useTranslations } from "next-intl";

import { COUNTRIES, EDUCATION_LEVELS, JOB_GRADES, MARITAL_STATUSES, NATIONALITIES, RELIGIOUS_LEVELS } from "../model/options";
import type { MarriageRequestFormData, SetMarriageRequestField } from "../model/types";
import { SelectField, TextField } from "./form-fields";

const ROW_CLASS = "grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-(--space-fluid-md)";

export function StepPartnerSpecifications({
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
        <TextField id="mr-min-age" label={t("step3.minimumAge")} type="number" value={data.minimumAge} onChange={(v) => setField("minimumAge", v)} />
        <TextField id="mr-max-age" label={t("step3.maximumAge")} type="number" value={data.maximumAge} onChange={(v) => setField("maximumAge", v)} />
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-pref-nationalities"
          label={t("step3.preferredNationalities")}
          value={data.preferredNationalities}
          onChange={(v) => setField("preferredNationalities", v)}
          options={NATIONALITIES}
        />
        <SelectField
          id="mr-partners-country"
          label={t("step3.partnersCountry")}
          value={data.partnersCountry}
          onChange={(v) => setField("partnersCountry", v)}
          options={COUNTRIES}
        />
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-pref-marital"
          label={t("step3.preferredMaritalStatuses")}
          value={data.preferredMaritalStatuses}
          onChange={(v) => setField("preferredMaritalStatuses", v)}
          options={MARITAL_STATUSES}
        />
        <SelectField
          id="mr-pref-religious"
          label={t("step3.preferredReligiousStatuses")}
          value={data.preferredReligiousStatuses}
          onChange={(v) => setField("preferredReligiousStatuses", v)}
          options={RELIGIOUS_LEVELS}
        />
      </div>

      <div className={ROW_CLASS}>
        <SelectField
          id="mr-pref-education"
          label={t("step3.preferredEducationLevels")}
          value={data.preferredEducationLevels}
          onChange={(v) => setField("preferredEducationLevels", v)}
          options={EDUCATION_LEVELS}
        />
        <SelectField
          id="mr-pref-job-grades"
          label={t("step3.preferredJobGrades")}
          value={data.preferredJobGrades}
          onChange={(v) => setField("preferredJobGrades", v)}
          options={JOB_GRADES}
        />
      </div>
    </div>
  );
}
