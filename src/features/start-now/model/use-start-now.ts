import { useState } from "react";

import type { DetailsFormValues, Gender, StartNowStep } from "./types";
import { STEP_ORDER } from "./types";

const INITIAL_DETAILS: DetailsFormValues = {
  fullName: "",
  email: "",
  countryIso2: "",
  gender: "",
  phoneDialIso2: "AE",
  phoneNumber: "",
  agreeToTerms: false,
};

export function useStartNow() {
  const [step, setStep] = useState<StartNowStep>("location");
  const [gender, setGender] = useState<Gender | null>(null);
  const [details, setDetails] = useState<DetailsFormValues>(INITIAL_DETAILS);

  function reset() {
    setStep("location");
    setGender(null);
    setDetails(INITIAL_DETAILS);
  }

  function goNext() {
    const index = STEP_ORDER.indexOf(step);
    const next = STEP_ORDER[index + 1];
    if (next) setStep(next);
  }

  function goBack() {
    const index = STEP_ORDER.indexOf(step);
    const previous = STEP_ORDER[index - 1];
    if (previous) setStep(previous);
  }

  function patchDetails(patch: Partial<DetailsFormValues>) {
    setDetails((current) => ({ ...current, ...patch }));
  }

  return { step, setStep, gender, setGender, details, patchDetails, goNext, goBack, reset };
}
