export interface MarriageRequestFormData {
  applicant: "male" | "female" | "guardian";
  fullName: string;
  email: string;
  phoneNumber: string;
  contactMethod: string;
  nationality: string;
  city: string;
  targetDay: string;
  targetMonth: string;
  targetYear: string;
  country: string;
  marriageType: string;
  marriageRequirement: string;

  education: string;
  jobStability: string;
  housingState: string;
  monthlyIncome: string;
  dowry: string;
  gold: string;
  maritalStatus: string;
  religiousLevel: string;
  personalTraits: string;
  partnerTraits: string;

  minimumAge: string;
  maximumAge: string;
  preferredNationalities: string;
  partnersCountry: string;
  preferredMaritalStatuses: string;
  preferredReligiousStatuses: string;
  preferredEducationLevels: string;
  preferredJobGrades: string;
}

export type MarriageRequestStep = 1 | 2 | 3;

export type SetMarriageRequestField = <K extends keyof MarriageRequestFormData>(
  key: K,
  value: MarriageRequestFormData[K],
) => void;
