export type StartNowStep = "gender" | "details" | "payment" | "location";

export type Gender = "woman" | "man";

export type DetailsFormValues = {
  fullName: string;
  email: string;
  countryIso2: string;
  gender: "female" | "male" | "";
  phoneDialIso2: string;
  phoneNumber: string;
  agreeToTerms: boolean;
};

export const STEP_ORDER: readonly StartNowStep[] = ["location", "gender", "details", "payment"];
