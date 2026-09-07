"use client";

import { useEffect, useMemo, useState } from "react";

import { getBadWords, getCountries, getGovernorates, getNationalities, getUserOptions, readOptions } from "@/shared/api";
import type { Country, LookupOption } from "@/shared/api";

export function useMarriageLookups(countryId: string, applicant: "male" | "female" | "guardian") {
  const [countries, setCountries] = useState<LookupOption[]>([]);
  const [countryDetails, setCountryDetails] = useState<Country[]>([]);
  const [nationalities, setNationalities] = useState<LookupOption[]>([]);
  const [governorates, setGovernorates] = useState<LookupOption[]>([]);
  const [governoratesCountryId, setGovernoratesCountryId] = useState("");
  const [raw, setRaw] = useState<Record<string, unknown> | null>(null);
  const [badWords, setBadWords] = useState<string[]>([]);
  const [lookupsError, setLookupsError] = useState<string | null>(null);
  // Holds the country id whose governorates fetch last failed, so a
  // country change invalidates a stale error just by comparison below —
  // no need to reset it imperatively.
  const [governoratesErrorCountryId, setGovernoratesErrorCountryId] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void Promise.allSettled([getCountries(), getNationalities(), getUserOptions(), getBadWords()])
      .then(([countryResult, nationalityResult, optionsResult, blockedWordsResult]) => {
        if (!active) return;
        if (countryResult.status === "fulfilled") {
          const countryItems = countryResult.value;
          setCountryDetails(countryItems);
          setCountries(countryItems.map((item) => ({
            value: String(item.id),
            label: item.name,
            flagUrl: item.flagUrl,
            isoCode: item.isoCode,
          })));
        }
        if (nationalityResult.status === "fulfilled") setNationalities(nationalityResult.value);
        if (optionsResult.status === "fulfilled") {
          const options = optionsResult.value;
          setRaw(options && typeof options === "object" ? options as Record<string, unknown> : null);
        }
        if (blockedWordsResult.status === "fulfilled") setBadWords(blockedWordsResult.value);
        const anyRejected = [countryResult, nationalityResult, optionsResult, blockedWordsResult]
          .some((result) => result.status === "rejected");
        setLookupsError(anyRejected ? "تعذر تحميل بيانات الفورم. حاول تحديث الصفحة." : null);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!countryId) return;
    let active = true;
    void getGovernorates(countryId)
      .then((items) => {
        if (active) {
          setGovernorates(items);
          setGovernoratesCountryId(countryId);
        }
      })
      .catch(() => {
        if (active) setGovernoratesErrorCountryId(countryId);
      });
    return () => {
      active = false;
    };
  }, [countryId]);

  const gender = applicant === "male" ? "male" : "female";
  const partnerGender = gender === "male" ? "female" : "male";
  return useMemo(() => ({
    countries,
    countryDetails,
    badWords,
    nationalities,
    governorates: governoratesCountryId === countryId ? governorates : [],
    lookupsError,
    governoratesError: governoratesErrorCountryId === countryId ? "تعذر تحميل قائمة المدن لهذه الدولة." : null,
    marriageTypes: readOptions(raw, ["marriage_types"]),
    marriageRequirements: readOptions(raw, ["marriage_requirements"]),
    educationLevels: readOptions(raw, ["education_levels", "education_level"], gender),
    jobStability: readOptions(raw, ["job_stability"]),
    housingStatuses: readOptions(raw, ["housing_status", "housing"]),
    monthlyIncome: readOptions(raw, ["monthly_income"]),
    dowry: readOptions(raw, ["dowry"]),
    gold: readOptions(raw, ["gold"]),
    maritalStatuses: readOptions(raw, ["marital_statuses", "marital_status"], gender),
    religiousStatuses: readOptions(raw, ["religious_status", "religious_statuses"], gender),
    jobGrades: readOptions(raw, ["job_grades", "job_grade"], gender),
    partnerEducationLevels: readOptions(raw, ["education_levels", "education_level"], partnerGender),
    partnerMaritalStatuses: readOptions(raw, ["marital_statuses", "marital_status"], partnerGender),
    partnerReligiousStatuses: readOptions(raw, ["religious_status", "religious_statuses"], partnerGender),
    partnerJobGrades: readOptions(raw, ["job_grades", "job_grade"], partnerGender),
  }), [countries, countryDetails, nationalities, governorates, governoratesCountryId, countryId, raw, gender, partnerGender, badWords, lookupsError, governoratesErrorCountryId]);
}

export type MarriageLookups = ReturnType<typeof useMarriageLookups>;
