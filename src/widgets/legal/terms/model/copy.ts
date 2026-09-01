// Terms & Conditions copy lives here rather than in `messages/*.json` because
// those 33 locale files are kept namespace-identical — adding a `terms`
// namespace to only `en`/`ar` would make next-intl throw MISSING_MESSAGE for
// the other 31. Same approach as the About and VIP widgets: Arabic + English
// now, and the block moves into `messages/` once the other locales are
// translated.

export type TermsSection = {
  title: string;
  intro?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  outro?: string;
};

export type TermsCopy = {
  hero: {
    title: string;
    imageAlt: string;
  };
  meta: {
    lastUpdated: string;
    committee: string;
  };
  sections: readonly TermsSection[];
  conclusion: {
    title: string;
    committee: { name: string; lines: readonly string[] };
    platform: { name: string; lines: readonly string[] };
  };
};

const en: TermsCopy = {
  hero: {
    title: "Terms & Conditions",
    imageAlt: "A hand writing on paper with a pen, symbolizing a marriage agreement",
  },
  meta: {
    lastUpdated: "Last Updated: September 10, 2025",
    committee: "Sharia Committee of the Zefaaf Platform",
  },
  sections: [
    {
      title: "First: Notice from the Sharia Committee",
      paragraphs: [
        "The Islamic Sharia Committee urges members to carefully read these terms before creating an account.",
        "These terms are binding for all members (whether on free or paid plans).",
        "The platform reserves the right to amend these terms at any time, and continued use constitutes implicit agreement.",
      ],
    },
    {
      title: "Second: Registration and Membership Conditions",
      bullets: [
        "The member must be an adult eligible for marriage.",
        "Each person is entitled to only one account.",
        "The platform is not responsible for the accuracy of data and reserves the right to delete any false or misleading information.",
        "Transferring money between members for any reason is prohibited.",
        "The platform reserves the right to delete any non-compliant account without prior notice and without refunding fees.",
      ],
    },
    {
      title: "Third: Prohibited Objectives",
      intro:
        "The Zefaaf platform is dedicated exclusively to lawful marriage. Registration or use for any unlawful purpose is prohibited, including:",
      bullets: [
        "Temporary marriage (mut'ah)",
        "Short-term marriage",
        "Customary marriage",
        "Any practice that violates Islamic Sharia or applicable laws",
      ],
      outro:
        "The platform reserves the right to suspend or cancel any non-compliant account, take necessary legal action, and claim compensation for damages.",
    },
    {
      title: "Data Sharing",
      intro: "We may share your data only in the following cases:",
      bullets: [
        "For legal purposes: If required by applicable laws.",
        "With user consent: If you choose to share your data with another member via the Platform.",
      ],
    },
    {
      title: "Data Protection",
      paragraphs: [
        "We use advanced security protocols (SSL encryption) to protect data during transmission and storage. Access to your data is restricted to employees or partners with a legitimate need only.",
      ],
    },
    {
      title: "Children's Privacy",
      paragraphs: ["The Platform is not permitted for use by individuals under 18 years of age."],
    },
    {
      title: "Changes to the Privacy Policy",
      paragraphs: [
        "We may update this policy from time to time. Users will be notified of any material changes via email or through an in-app notification.",
      ],
    },
  ],
  conclusion: {
    title: "Conclusion",
    committee: {
      name: "Zefaaf's Sharia Committee",
      lines: ["Wishes you success and guidance,", "And we ask Allah to bless you with a righteous and blessed marriage."],
    },
    platform: {
      name: "Zefaaf Platform",
      lines: ["Plan your marriage with Islamic ethics"],
    },
  },
};

const ar: TermsCopy = {
  hero: {
    title: "الشروط والأحكام",
    imageAlt: "يد تكتب على ورقة بقلم، رمزاً لعقد الزواج",
  },
  meta: {
    lastUpdated: "آخر تحديث: 10 سبتمبر 2025",
    committee: "اللجنة الشرعية لمنصة زفاف",
  },
  sections: [
    {
      title: "أولاً: كلمة من اللجنة الشرعية",
      paragraphs: [
        "تحث اللجنة الشرعية الإسلامية الأعضاء على قراءة هذه الشروط بعناية قبل إنشاء حساب.",
        "هذه الشروط ملزمة لجميع الأعضاء (سواء في الخطط المجانية أو المدفوعة).",
        "تحتفظ المنصة بالحق في تعديل هذه الشروط في أي وقت، ويُعد الاستمرار في استخدامها موافقة ضمنية عليها.",
      ],
    },
    {
      title: "ثانياً: شروط التسجيل والعضوية",
      bullets: [
        "يجب أن يكون العضو بالغاً ومؤهلاً للزواج.",
        "يحق لكل شخص امتلاك حساب واحد فقط.",
        "لا تتحمل المنصة مسؤولية دقة البيانات، وتحتفظ بالحق في حذف أي معلومات خاطئة أو مضللة.",
        "يُحظر تحويل الأموال بين الأعضاء لأي سبب.",
        "تحتفظ المنصة بالحق في حذف أي حساب غير ملتزم دون إشعار مسبق ودون استرداد الرسوم.",
      ],
    },
    {
      title: "ثالثاً: الأهداف المحظورة",
      intro: "منصة زفاف مخصصة حصرياً للزواج الشرعي، ويُحظر التسجيل أو الاستخدام لأي غرض غير مشروع، بما في ذلك:",
      bullets: [
        "زواج المتعة",
        "الزواج المؤقت",
        "الزواج العرفي",
        "أي ممارسة تخالف الشريعة الإسلامية أو الأنظمة المعمول بها",
      ],
      outro:
        "تحتفظ المنصة بالحق في تعليق أو إلغاء أي حساب غير ملتزم، واتخاذ الإجراءات القانونية اللازمة، والمطالبة بالتعويض عن الأضرار.",
    },
    {
      title: "مشاركة البيانات",
      intro: "قد نشارك بياناتك فقط في الحالات التالية:",
      bullets: [
        "لأغراض قانونية: إذا تطلب ذلك القانون المعمول به.",
        "بموافقة المستخدم: إذا اخترت مشاركة بياناتك مع عضو آخر عبر المنصة.",
      ],
    },
    {
      title: "حماية البيانات",
      paragraphs: [
        "نستخدم بروتوكولات أمان متقدمة (تشفير SSL) لحماية البيانات أثناء النقل والتخزين، ويقتصر الوصول إليها على الموظفين أو الشركاء الذين لديهم حاجة فعلية لذلك فقط.",
      ],
    },
    {
      title: "خصوصية الأطفال",
      paragraphs: ["لا يُسمح باستخدام المنصة لمن هم دون 18 عاماً."],
    },
    {
      title: "التغييرات على سياسة الخصوصية",
      paragraphs: [
        "قد نقوم بتحديث هذه السياسة من وقت لآخر، وسيتم إشعار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار داخل التطبيق.",
      ],
    },
  ],
  conclusion: {
    title: "الخاتمة",
    committee: {
      name: "اللجنة الشرعية لزفاف",
      lines: ["تتمنى لكم التوفيق والسداد،", "ونسأل الله أن يرزقكم زواجاً صالحاً مباركاً."],
    },
    platform: {
      name: "منصة زفاف",
      lines: ["خطط لزواجك وفق الأخلاق الإسلامية"],
    },
  },
};

export function getTermsCopy(locale: string): TermsCopy {
  return locale === "ar" ? ar : en;
}
