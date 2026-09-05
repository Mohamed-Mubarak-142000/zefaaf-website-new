"use client";

import * as React from "react";

import type { MarriageRequestFormData, MarriageRequestStep } from "./types";

const INITIAL_DATA: MarriageRequestFormData = {
  applicant: "male",
  fullName: "",
  email: "",
  phoneNumber: "",
  telegramUsername: "",
  contactMethod: "whatsapp",
  nationality: "",
  city: "",
  targetDay: "",
  targetMonth: "",
  targetYear: "",
  country: "",
  marriageType: "",
  marriageRequirement: [],

  education: "",
  jobGrade: "",
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
  preferredNationalities: [],
  partnersCountry: [],
  preferredMaritalStatuses: [],
  preferredReligiousStatuses: [],
  preferredEducationLevels: [],
  preferredJobGrades: [],
  preferredJobStability: [],
  preferredHousingStates: [],
  preferredMonthlyIncome: [],
  preferredDowry: [],
  preferredGold: [],
};

// Intentionally takes no `open` prop: the caller only mounts this hook from
// inside <DialogContent>, which Radix unmounts on close, so every reopen
// naturally starts from these defaults without any manual reset.
export function useMarriageRequestForm() {
  const [step, setStep] = React.useState<MarriageRequestStep>(1);
  const [data, setData] = React.useState<MarriageRequestFormData>(INITIAL_DATA);

  const setField = React.useCallback(
    <K extends keyof MarriageRequestFormData>(key: K, value: MarriageRequestFormData[K]) => {
      setData((prev) => {
        const next = { ...prev, [key]: value };

        if (key === "country" && value !== prev.country) next.city = "";
        if (key === "contactMethod" && value !== prev.contactMethod) {
          if (value === "telegram" || value === "email") next.phoneNumber = "";
          else next.telegramUsername = "";
        }
        if (key === "applicant" && value !== prev.applicant) {
          next.marriageRequirement = [];
          next.jobStability = "";
          next.housingState = "";
          next.monthlyIncome = "";
          next.dowry = "";
          next.gold = "";
          next.preferredJobStability = [];
          next.preferredHousingStates = [];
          next.preferredMonthlyIncome = [];
          next.preferredDowry = [];
          next.preferredGold = [];
        }

        return next;
      });
    },
    [],
  );

  const goNext = React.useCallback(() => {
    setStep((current) => (current < 3 ? ((current + 1) as MarriageRequestStep) : current));
  }, []);

  const goBack = React.useCallback(() => {
    setStep((current) => (current > 1 ? ((current - 1) as MarriageRequestStep) : current));
  }, []);

  const goToStep = React.useCallback((nextStep: MarriageRequestStep) => {
    setStep(nextStep);
  }, []);

  return { step, data, setField, goNext, goBack, goToStep };
}
