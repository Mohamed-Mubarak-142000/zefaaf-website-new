// Copy lives here rather than in `messages/*.json` because those 33 locale
// files are kept namespace-identical, and adding a namespace for this one-off
// flow to only some of them would make next-intl throw MISSING_MESSAGE for
// the rest. Same approach as the VIP, Bosnia Tour and Event Details widgets.
// Only `ar` (site default) and `en` are translated below; every other locale
// falls back to `en` via `getStartNowCopy`.

export type StartNowCopy = {
  gender: {
    title: string;
    heading: string;
    description: string;
    woman: string;
    man: string;
  };
  details: {
    title: string;
    fullNameLabel: string;
    emailLabel: string;
    countryLabel: string;
    countryPlaceholder: string;
    genderLabel: string;
    genderPlaceholder: string;
    genderFemale: string;
    genderMale: string;
    phoneLabel: string;
    phonePlaceholder: string;
    agreePrefix: string;
    agreeLink: string;
  };
  verification: { title: string; heading: string; description: string };
  location: {
    title: string;
    heading: string;
    description: string;
    skip: string;
    allow: string;
  };
  actions: {
    back: string;
    next: string;
  };
};

const en: StartNowCopy = {
  gender: {
    title: "Personalisations",
    heading: "How do you identify?",
    description: "So we can show you the right VIP service details.",
    woman: "I'm a woman",
    man: "I'm a man",
  },
  details: {
    title: "Enter your details",
    fullNameLabel: "Full name",
    emailLabel: "Email address",
    countryLabel: "Country",
    countryPlaceholder: "Select your country",
    genderLabel: "Gender",
    genderPlaceholder: "Select your gender",
    genderFemale: "Female",
    genderMale: "Man",
    phoneLabel: "Phone",
    phonePlaceholder: "Phone number",
    agreePrefix: "I agree to the",
    agreeLink: "terms and conditions",
  },
  verification: { title: "Verification", heading: "Transfer proof received", description: "Your transfer proof was submitted successfully and is waiting for review." },
  location: {
    title: "Location info",
    heading: "Activate your website",
    description: "For more accurate recommendations and faster access to the right life partner near you.",
    skip: "Skip",
    allow: "Allow",
  },
  actions: {
    back: "Back",
    next: "Next",
  },
};

const ar: StartNowCopy = {
  gender: {
    title: "التخصيص",
    heading: "كيف تُعرّف نفسك؟",
    description: "لنعرض لك تفاصيل خدمة VIP المناسبة لك.",
    woman: "أنا امرأة",
    man: "أنا رجل",
  },
  details: {
    title: "أدخل بياناتك",
    fullNameLabel: "الاسم الكامل",
    emailLabel: "البريد الإلكتروني",
    countryLabel: "الدولة",
    countryPlaceholder: "اختر دولتك",
    genderLabel: "الجنس",
    genderPlaceholder: "اختر جنسك",
    genderFemale: "أنثى",
    genderMale: "ذكر",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "رقم الهاتف",
    agreePrefix: "أوافق على",
    agreeLink: "الشروط والأحكام",
  },
  verification: { title: "التحقق", heading: "تم استلام إثبات التحويل", description: "تم إرسال إثبات التحويل بنجاح وهو الآن بانتظار المراجعة." },
  location: {
    title: "معلومات الموقع",
    heading: "فعّل موقعك الجغرافي",
    description: "لتوصيات أدق ووصول أسرع لشريك الحياة المناسب بالقرب منك.",
    skip: "تخطي",
    allow: "سماح",
  },
  actions: {
    back: "رجوع",
    next: "التالي",
  },
};

const copyByLocale: Record<string, StartNowCopy> = { ar, en };

export function getStartNowCopy(locale: string): StartNowCopy {
  return copyByLocale[locale] ?? en;
}
