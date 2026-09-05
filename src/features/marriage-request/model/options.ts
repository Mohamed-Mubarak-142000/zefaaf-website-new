// Demo option lists for the marriage-request wizard's select fields. Figma
// didn't specify real enumerations for these, so — like ContactForm's
// hardcoded SOCIAL_LINKS labels — these are static, representative data
// values rather than translated UI chrome, and are intentionally kept in
// English only.

export const NATIONALITIES = [
  "Egyptian",
  "Saudi Arabian",
  "Emirati",
  "Jordanian",
  "Moroccan",
  "Turkish",
  "Pakistani",
  "Indonesian",
  "Other",
] as const;

export const COUNTRIES = [
  "Egypt",
  "Saudi Arabia",
  "United Arab Emirates",
  "Jordan",
  "Morocco",
  "Turkey",
  "Pakistan",
  "Indonesia",
  "Other",
] as const;

export const CITIES = [
  "Cairo",
  "Riyadh",
  "Dubai",
  "Istanbul",
  "Amman",
  "Casablanca",
  "Other",
] as const;

export const MARRIAGE_TYPES = [
  "First marriage",
  "Polygyny (second marriage)",
  "Remarriage after divorce",
  "Remarriage after widowhood",
] as const;

export const MARRIAGE_REQUIREMENT_OPTIONS = [
  "Traditional (family-arranged)",
  "Independent search",
  "Both",
] as const;

export const CONTACT_METHODS = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "telegram", label: "Telegram" },
  { value: "email", label: "Email" },
] as const;

export const EDUCATION_LEVELS = [
  "High school",
  "Diploma",
  "Bachelor's degree",
  "Master's degree",
  "Doctorate",
] as const;

export const JOB_STABILITY_OPTIONS = [
  "Stable employment",
  "Freelance / self-employed",
  "Seeking employment",
  "Student",
] as const;

export const HOUSING_STATES = [
  "Owns housing",
  "Rents housing",
  "Lives with family",
  "Housing not yet secured",
] as const;

export const MONTHLY_INCOME_RANGES = [
  "Less than $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "More than $5,000",
] as const;

export const DOWRY_RANGES = [
  "Not yet determined",
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "More than $10,000",
] as const;

export const GOLD_OPTIONS = [
  "Not required",
  "Symbolic amount",
  "Moderate amount",
  "Full amount as agreed",
] as const;

export const MARITAL_STATUSES = ["Single", "Divorced", "Widowed"] as const;

export const RELIGIOUS_LEVELS = [
  "Practicing",
  "Moderately practicing",
  "Learning and growing",
] as const;

export const JOB_GRADES = [
  "Any",
  "Stable employment",
  "Business owner",
  "Government sector",
  "Private sector",
] as const;
