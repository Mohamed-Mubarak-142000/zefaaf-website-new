import { describe, expect, it } from "vitest";

import {
  buildMarriageRequestMessage,
  MAX_CHAT_MESSAGE_LENGTH,
  type MarriageRequestOptionLists,
} from "./request-summary";
import type { MarriageRequestFormData } from "./types";

const OPTIONS: MarriageRequestOptionLists = {
  countries: [
    { value: "1", label: "مصر" },
    { value: "2", label: "هولندا" },
  ],
  nationalities: [
    { value: "10", label: "مصري" },
    { value: "11", label: "مغربي" },
  ],
  governorates: [{ value: "5", label: "القاهرة" }],
  marriageTypes: [{ value: "traditional", label: "زواج تقليدي" }],
  marriageRequirements: [{ value: "housing", label: "سكن مستقل" }],
  educationLevels: [{ value: "bachelor", label: "بكالوريوس" }],
  jobGrades: [{ value: "engineer", label: "مهندس" }],
  jobStability: [
    { value: "stable", label: "وظيفة مستقرة" },
    { value: "freelance", label: "عمل حر" },
  ],
  housingStatuses: [{ value: "owned", label: "سكن ملك" }],
  monthlyIncome: [{ value: "high", label: "دخل مرتفع" }],
  dowry: [{ value: "modest", label: "مهر بسيط" }],
  gold: [{ value: "none", label: "بدون شبكة" }],
  maritalStatuses: [{ value: "single", label: "أعزب" }],
  religiousStatuses: [{ value: "committed", label: "ملتزم" }],
  partnerEducationLevels: [{ value: "bachelor", label: "بكالوريوس شريك" }],
  partnerMaritalStatuses: [{ value: "single", label: "عزباء" }],
  partnerReligiousStatuses: [{ value: "committed", label: "ملتزمة" }],
  partnerJobGrades: [{ value: "teacher", label: "مدرّسة" }],
};

function formData(overrides: Partial<MarriageRequestFormData> = {}): MarriageRequestFormData {
  return {
    applicant: "male",
    fullName: "أحمد محمد",
    email: "ahmed@example.com",
    phoneNumber: "01012345678",
    telegramUsername: "",
    contactMethod: "whatsapp",
    nationality: "10",
    city: "5",
    targetDay: "7",
    targetMonth: "3",
    targetYear: "1994",
    country: "1",
    marriageType: "traditional",
    marriageRequirement: ["housing"],

    education: "bachelor",
    jobGrade: "engineer",
    jobStability: "stable",
    housingState: "owned",
    monthlyIncome: "high",
    dowry: "modest",
    gold: "none",
    maritalStatus: "single",
    religiousLevel: "committed",
    personalTraits: "هادئ وملتزم",
    partnerTraits: "متفهمة ومتدينة",

    minimumAge: "22",
    maximumAge: "30",
    preferredNationalities: ["10", "11"],
    partnersCountry: ["1", "2"],
    preferredMaritalStatuses: ["single"],
    preferredReligiousStatuses: ["committed"],
    preferredEducationLevels: ["bachelor"],
    preferredJobGrades: ["teacher"],
    preferredJobStability: [],
    preferredHousingStates: [],
    preferredMonthlyIncome: [],
    preferredDowry: [],
    preferredGold: [],
    ...overrides,
  };
}

describe("buildMarriageRequestMessage", () => {
  it("reports every filled field by its label, not the id the form stores", () => {
    const message = buildMarriageRequestMessage({
      data: formData(),
      options: OPTIONS,
      channel: "whatsapp",
      phone: "+201012345678",
    });

    expect(message).toContain("الاسم: أحمد محمد");
    expect(message).toContain("البريد الإلكتروني: ahmed@example.com");
    expect(message).toContain("الهاتف: +201012345678");
    expect(message).toContain("تاريخ الميلاد: 1994-03-07");
    expect(message).toContain("الدولة: مصر");
    expect(message).toContain("المحافظة: القاهرة");
    expect(message).toContain("الجنسية: مصري");
    expect(message).toContain("نوع الزواج: زواج تقليدي");
    expect(message).toContain("الاستقرار الوظيفي: وظيفة مستقرة");
    expect(message).toContain("العمر: 22 - 30");
    expect(message).toContain("دولة الشريك: مصر، هولندا");
    expect(message).toContain("الطريقة: واتساب");
    // No raw ids or option keys anywhere — every one resolved to a label.
    expect(message).not.toContain("الدولة: 1");
    expect(message).not.toContain("bachelor");
    expect(message).not.toContain("traditional");
  });

  it("reads a female applicant's financial fields as partner requirements", () => {
    const message = buildMarriageRequestMessage({
      data: formData({
        applicant: "female",
        jobStability: "",
        housingState: "",
        monthlyIncome: "",
        dowry: "",
        gold: "",
        preferredJobStability: ["stable", "freelance"],
        preferredHousingStates: ["owned"],
        preferredMonthlyIncome: ["high"],
        preferredDowry: ["modest"],
        preferredGold: ["none"],
      }),
      options: OPTIONS,
      channel: "telegram",
      phone: "+201012345678",
    });

    expect(message).toContain("مقدم الطلب: الزوجة");
    expect(message).toContain("الاستقرار الوظيفي: وظيفة مستقرة، عمل حر");
    expect(message).toContain("حالة السكن: سكن ملك");
    expect(message).toContain("المهر: مهر بسيط");
    expect(message).toContain("الطريقة: تيليجرام");
  });

  it("leaves out the fields — and whole sections — that were never filled", () => {
    const message = buildMarriageRequestMessage({
      data: formData({
        contactMethod: "telegram",
        telegramUsername: "@ahmed",
        minimumAge: "",
        maximumAge: "",
        partnersCountry: [],
        preferredNationalities: [],
        preferredMaritalStatuses: [],
        preferredReligiousStatuses: [],
        preferredEducationLevels: [],
        preferredJobGrades: [],
      }),
      options: OPTIONS,
      channel: "whatsapp",
      phone: "",
    });

    expect(message).toContain("Telegram: @ahmed");
    expect(message).not.toContain("الهاتف:");
    expect(message).not.toContain("العمر:");
    expect(message).not.toContain("مواصفات الشريك");
    expect(message).not.toContain("كود الوكيل");
  });

  it("includes the agent's code when the request is paid through one", () => {
    const message = buildMarriageRequestMessage({
      data: formData(),
      options: OPTIONS,
      channel: "local_agent",
      agentCode: " ABC123 ",
    });

    expect(message).toContain("الطريقة: وكيل محلي");
    expect(message).toContain("كود الوكيل: ABC123");
  });

  it("falls back to the stored value when a lookup list failed to load", () => {
    const message = buildMarriageRequestMessage({
      data: formData(),
      options: { ...OPTIONS, countries: [], marriageTypes: [] },
      channel: "whatsapp",
    });

    // Better a raw id the team can look up than a field that silently vanishes.
    expect(message).toContain("الدولة: 1");
    expect(message).toContain("نوع الزواج: traditional");
  });

  it("trims a runaway message so the chat link stays openable", () => {
    const message = buildMarriageRequestMessage({
      data: formData({ personalTraits: "ص".repeat(4000) }),
      options: OPTIONS,
      channel: "whatsapp",
    });

    expect(message).toHaveLength(MAX_CHAT_MESSAGE_LENGTH);
    expect(message.endsWith("…")).toBe(true);
  });
});
