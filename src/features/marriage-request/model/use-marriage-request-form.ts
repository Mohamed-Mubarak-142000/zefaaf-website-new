"use client";

import * as React from "react";

import type { MarriageRequestFormData, MarriageRequestStep } from "./types";

const INITIAL_DATA: MarriageRequestFormData = {
  applicant: "male",
  fullName: "",
  email: "",
  phoneNumber: "",
  contactMethod: "",
  nationality: "",
  city: "",
  targetDay: "",
  targetMonth: "",
  targetYear: "",
  country: "",
  marriageType: "",
  marriageRequirement: "",

  education: "",
  jobStability: "",
  housingState: "",
  monthlyIncome: "",
  dowry: "",
  gold: "",
  maritalStatus: "",
  religiousLevel: "",
  personalTraits: "",
  partnerTraits: "",

  minimumAge: "",
  maximumAge: "",
  preferredNationalities: "",
  partnersCountry: "",
  preferredMaritalStatuses: "",
  preferredReligiousStatuses: "",
  preferredEducationLevels: "",
  preferredJobGrades: "",
};

// Intentionally takes no `open` prop: the caller only mounts this hook from
// inside <DialogContent>, which Radix unmounts on close, so every reopen
// naturally starts from these defaults without any manual reset.
export function useMarriageRequestForm() {
  const [step, setStep] = React.useState<MarriageRequestStep>(1);
  const [data, setData] = React.useState<MarriageRequestFormData>(INITIAL_DATA);

  const setField = React.useCallback(
    <K extends keyof MarriageRequestFormData>(key: K, value: MarriageRequestFormData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const goNext = React.useCallback(() => {
    setStep((current) => (current < 3 ? ((current + 1) as MarriageRequestStep) : current));
  }, []);

  const goBack = React.useCallback(() => {
    setStep((current) => (current > 1 ? ((current - 1) as MarriageRequestStep) : current));
  }, []);

  return { step, data, setField, goNext, goBack };
}
