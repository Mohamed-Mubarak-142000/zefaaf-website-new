// The applicant's whole request, rendered as one readable message so it
// arrives in the WhatsApp/Telegram chat that opens on submit instead of the
// team having to look the record up. The backend still receives the request
// in full — this is a notification copy, which is why trimming it is safe.

import type { LookupOption } from "@/shared/api";

import type { SmartMarriagePaymentMethod } from "./payment-flow";
import type { MarriageRequestFormData } from "./types";
import type { MarriageLookups } from "./use-marriage-lookups";

/**
 * The option lists the summary resolves the form's stored ids and values
 * against — a subset of the wizard's lookups, so this stays a pure function
 * the tests can call with a handful of options instead of the whole hook.
 */
export type MarriageRequestOptionLists = Pick<
  MarriageLookups,
  | "countries"
  | "nationalities"
  | "governorates"
  | "marriageTypes"
  | "marriageRequirements"
  | "educationLevels"
  | "jobGrades"
  | "jobStability"
  | "housingStatuses"
  | "monthlyIncome"
  | "dowry"
  | "gold"
  | "maritalStatuses"
  | "religiousStatuses"
  | "partnerEducationLevels"
  | "partnerMaritalStatuses"
  | "partnerReligiousStatuses"
  | "partnerJobGrades"
>;

export interface MarriageRequestSummaryInput {
  data: MarriageRequestFormData;
  options: MarriageRequestOptionLists;
  /** The resolved contact channel, once the payment dialog has picked one. */
  channel: SmartMarriagePaymentMethod | null;
  /** The applicant's phone in international form; empty on email/Telegram. */
  phone?: string;
  agentCode?: string;
}

/**
 * The message rides in the chat link's `text=`, and an unbounded URL gets
 * truncated — or dropped outright — by the chat clients. Cutting the tail off
 * a notification is far better than losing the whole prefill.
 */
export const MAX_CHAT_MESSAGE_LENGTH = 1800;

const APPLICANT_LABELS: Record<MarriageRequestFormData["applicant"], string> = {
  male: "الزوج",
  female: "الزوجة",
  guardian: "ولي الأمر",
};

const CONTACT_METHOD_LABELS: Record<string, string> = {
  whatsapp: "واتساب",
  telegram: "تيليجرام",
  email: "البريد الإلكتروني",
};

const CHANNEL_LABELS: Record<SmartMarriagePaymentMethod, string> = {
  local_agent: "وكيل محلي",
  whatsapp: "واتساب",
  telegram: "تيليجرام",
};

/**
 * The option's own label, falling back to the raw stored value: a lookup list
 * that failed to load must not turn a field the applicant filled in into a
 * blank line, and the raw value is still something the team can act on.
 */
function labelFor(options: LookupOption[], value: string): string {
  if (!value) return "";
  return options.find((option) => option.value === value)?.label ?? value;
}

function labelsFor(options: LookupOption[], values: string[]): string {
  return values.map((value) => labelFor(options, value)).filter(Boolean).join("، ");
}

type SummarySection = { title: string; rows: [label: string, value: string][] };

/** Renders the filled rows only — an empty section disappears with them. */
function renderSections(sections: SummarySection[]): string {
  return sections
    .map(({ title, rows }) => {
      const filled = rows.filter(([, value]) => value.trim());
      if (!filled.length) return "";
      return [`— ${title} —`, ...filled.map(([label, value]) => `${label}: ${value.trim()}`)].join("\n");
    })
    .filter(Boolean)
    .join("\n\n");
}

function truncate(message: string): string {
  if (message.length <= MAX_CHAT_MESSAGE_LENGTH) return message;
  return `${message.slice(0, MAX_CHAT_MESSAGE_LENGTH - 1).trimEnd()}…`;
}

export function buildMarriageRequestMessage({
  data,
  options,
  channel,
  phone = "",
  agentCode = "",
}: MarriageRequestSummaryInput): string {
  // A male applicant states his own financial situation as single values; a
  // female or guardian applicant states the same things as requirements of
  // the partner, in multi-selects — the split step 2 of the wizard renders.
  const isMale = data.applicant === "male";
  const birthDate = data.targetYear && data.targetMonth && data.targetDay
    ? `${data.targetYear}-${data.targetMonth.padStart(2, "0")}-${data.targetDay.padStart(2, "0")}`
    : "";
  const ageRange = data.minimumAge && data.maximumAge ? `${data.minimumAge} - ${data.maximumAge}` : "";

  const body = renderSections([
    {
      title: "بيانات مقدم الطلب",
      rows: [
        ["مقدم الطلب", APPLICANT_LABELS[data.applicant]],
        ["الاسم", data.fullName],
        ["البريد الإلكتروني", data.email],
        ["طريقة التواصل", CONTACT_METHOD_LABELS[data.contactMethod] ?? data.contactMethod],
        ["الهاتف", phone],
        ["Telegram", data.telegramUsername],
        ["تاريخ الميلاد", birthDate],
        ["الجنسية", labelFor(options.nationalities, data.nationality)],
        ["الدولة", labelFor(options.countries, data.country)],
        ["المحافظة", labelFor(options.governorates, data.city)],
        ["نوع الزواج", labelFor(options.marriageTypes, data.marriageType)],
        ["متطلبات الزواج", labelsFor(options.marriageRequirements, data.marriageRequirement)],
      ],
    },
    {
      title: "الحالة الاجتماعية والمادية",
      rows: [
        ["المستوى التعليمي", labelFor(options.educationLevels, data.education)],
        ["الدرجة الوظيفية", labelFor(options.jobGrades, data.jobGrade)],
        ["الحالة الاجتماعية", labelFor(options.maritalStatuses, data.maritalStatus)],
        ["المستوى الديني", labelFor(options.religiousStatuses, data.religiousLevel)],
        [
          "الاستقرار الوظيفي",
          isMale
            ? labelFor(options.jobStability, data.jobStability)
            : labelsFor(options.jobStability, data.preferredJobStability),
        ],
        [
          "حالة السكن",
          isMale
            ? labelFor(options.housingStatuses, data.housingState)
            : labelsFor(options.housingStatuses, data.preferredHousingStates),
        ],
        [
          "الدخل الشهري",
          isMale
            ? labelFor(options.monthlyIncome, data.monthlyIncome)
            : labelsFor(options.monthlyIncome, data.preferredMonthlyIncome),
        ],
        [
          "المهر",
          isMale ? labelFor(options.dowry, data.dowry) : labelsFor(options.dowry, data.preferredDowry),
        ],
        [
          "الشبكة",
          isMale ? labelFor(options.gold, data.gold) : labelsFor(options.gold, data.preferredGold),
        ],
        ["الصفات الشخصية", data.personalTraits],
        ["الصفات المطلوبة في الشريك", data.partnerTraits],
      ],
    },
    {
      title: "مواصفات الشريك",
      rows: [
        ["العمر", ageRange],
        ["دولة الشريك", labelsFor(options.countries, data.partnersCountry)],
        ["الجنسية", labelsFor(options.nationalities, data.preferredNationalities)],
        ["الحالة الاجتماعية", labelsFor(options.partnerMaritalStatuses, data.preferredMaritalStatuses)],
        ["المستوى الديني", labelsFor(options.partnerReligiousStatuses, data.preferredReligiousStatuses)],
        ["المستوى التعليمي", labelsFor(options.partnerEducationLevels, data.preferredEducationLevels)],
        ["الدرجة الوظيفية", labelsFor(options.partnerJobGrades, data.preferredJobGrades)],
      ],
    },
    {
      title: "الدفع",
      rows: [
        ["الطريقة", channel ? CHANNEL_LABELS[channel] : ""],
        ["كود الوكيل", agentCode],
      ],
    },
  ]);

  return truncate(`طلب زواج ذكي جديد\n\n${body}`);
}
