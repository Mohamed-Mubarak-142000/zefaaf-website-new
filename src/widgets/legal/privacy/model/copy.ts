// Privacy Policy copy lives here rather than in `messages/*.json` for the
// same reason as the Terms widget: those 33 locale files are kept
// namespace-identical, so adding a `privacy` namespace to only `en`/`ar`
// would make next-intl throw MISSING_MESSAGE for the other 31. Arabic +
// English now; the block moves into `messages/` once the other locales are
// translated. See src/widgets/terms/model/copy.ts for the sibling page.

export type PrivacySection = {
  title: string;
  intro?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  outro?: string;
};

export type PrivacyContact = {
  label: string;
  href: string;
  icon: "mail" | "globe";
};

export type PrivacyCopy = {
  hero: {
    title: string;
    imageAlt: string;
  };
  meta: {
    lastUpdated: string;
    tagline: string;
  };
  sections: readonly PrivacySection[];
  contact: {
    title: string;
    intro: string;
    items: readonly PrivacyContact[];
  };
};

const en: PrivacyCopy = {
  hero: {
    title: "Privacy Policy",
    imageAlt: "A hand signing a paperless electronic document, symbolizing data protection",
  },
  meta: {
    lastUpdated: "Last Updated: September 10, 2025",
    tagline: "With Zefaaf Platform, You Are Safe",
  },
  sections: [
    {
      title: "Introduction",
      paragraphs: [
        "Zefaaf Platform ('we', 'the Platform') is committed to protecting the privacy of its users. This policy outlines how we collect, use, and protect personal data when you use the Zefaaf application or website.",
      ],
    },
    {
      title: "Data We Collect",
      bullets: [
        "Registration Data: Name, email address, phone number, country, and date of birth.",
        "Account Information: Profile pictures, search preferences, marital status, and preferred language.",
        "Usage Data: Login records, interactions with other members, and communications.",
        "Content You Share: Messages, audio files, photos, or videos.",
        "Technical Information: Device type, operating system, IP address, and language.",
      ],
    },
    {
      title: "How We Use the Data",
      bullets: [
        "To create and manage accounts.",
        "To facilitate search and matching between members.",
        "To enable communication services (messages, voice, and video calls).",
        "To improve services and user experience.",
        "To ensure security and prevent unauthorized use or fraud.",
      ],
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
      title: "User Rights (GDPR)",
      bullets: [
        "Access to your personal data.",
        "Request correction or update of your data.",
        "Request deletion of your account and data permanently.",
        "Object to certain processing activities.",
        "Obtain a copy of your data in a portable format.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "We may use cookies to enhance the browsing experience and analyze app usage. You can adjust browser settings to disable them, but this may affect some features.",
      ],
    },
    {
      title: "Children's Privacy",
      paragraphs: ["The Platform is not permitted for use by individuals under 18 years of age."],
    },
    {
      title: "Content Supervision and Communication",
      paragraphs: [
        "To maintain seriousness and Sharia compliance, Zefaaf platform reserves the right to supervise conversations and content within the platform when necessary, including images and voice introductions, to ensure a safe and conservative environment and prevent any violations or manipulation.",
      ],
    },
    {
      title: "Changes to the Privacy Policy",
      paragraphs: [
        "We may update this policy from time to time. Users will be notified of any material changes via email or through an in-app notification.",
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    intro: "If you have any inquiries about this policy or your data, you can contact us at:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const ar: PrivacyCopy = {
  hero: {
    title: "سياسة الخصوصية",
    imageAlt: "يد توقّع على مستند إلكتروني، رمزاً لحماية البيانات",
  },
  meta: {
    lastUpdated: "آخر تحديث: 10 سبتمبر 2025",
    tagline: "مع منصة زفاف، أنت في أمان",
  },
  sections: [
    {
      title: "مقدمة",
      paragraphs: [
        "تلتزم منصة زفاف ('نحن'، 'المنصة') بحماية خصوصية مستخدميها. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا للبيانات الشخصية عند استخدامك لتطبيق أو موقع زفاف.",
      ],
    },
    {
      title: "البيانات التي نجمعها",
      bullets: [
        "بيانات التسجيل: الاسم، البريد الإلكتروني، رقم الهاتف، الدولة، وتاريخ الميلاد.",
        "معلومات الحساب: الصور الشخصية، تفضيلات البحث، الحالة الاجتماعية، واللغة المفضلة.",
        "بيانات الاستخدام: سجلات الدخول، التفاعلات مع الأعضاء الآخرين، والمراسلات.",
        "المحتوى الذي تشاركه: الرسائل، الملفات الصوتية، الصور، أو الفيديوهات.",
        "المعلومات التقنية: نوع الجهاز، نظام التشغيل، عنوان IP، واللغة.",
      ],
    },
    {
      title: "كيفية استخدامنا للبيانات",
      bullets: [
        "لإنشاء الحسابات وإدارتها.",
        "لتسهيل عمليات البحث والمطابقة بين الأعضاء.",
        "لتفعيل خدمات التواصل (الرسائل، المكالمات الصوتية والمرئية).",
        "لتحسين الخدمات وتجربة المستخدم.",
        "لضمان الأمان ومنع الاستخدام غير المصرح به أو الاحتيال.",
      ],
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
      title: "حقوق المستخدم (GDPR)",
      bullets: [
        "الوصول إلى بياناتك الشخصية.",
        "طلب تصحيح أو تحديث بياناتك.",
        "طلب حذف حسابك وبياناتك بشكل نهائي.",
        "الاعتراض على بعض عمليات المعالجة.",
        "الحصول على نسخة من بياناتك بصيغة قابلة للنقل.",
      ],
    },
    {
      title: "ملفات تعريف الارتباط (Cookies)",
      paragraphs: [
        "قد نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل استخدام التطبيق. يمكنك ضبط إعدادات المتصفح لتعطيلها، لكن هذا قد يؤثر على بعض الميزات.",
      ],
    },
    {
      title: "خصوصية الأطفال",
      paragraphs: ["لا يُسمح باستخدام المنصة لمن هم دون 18 عاماً."],
    },
    {
      title: "الإشراف على المحتوى والتواصل",
      paragraphs: [
        "للحفاظ على الجدية والالتزام بالشريعة الإسلامية، تحتفظ منصة زفاف بالحق في الإشراف على المحادثات والمحتوى داخل المنصة عند الضرورة، بما في ذلك الصور والتعريفات الصوتية، لضمان بيئة آمنة ومحافظة ومنع أي مخالفات أو تلاعب.",
      ],
    },
    {
      title: "التغييرات على سياسة الخصوصية",
      paragraphs: [
        "قد نقوم بتحديث هذه السياسة من وقت لآخر، وسيتم إشعار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار داخل التطبيق.",
      ],
    },
  ],
  contact: {
    title: "تواصل معنا",
    intro: "إذا كانت لديك أي استفسارات حول هذه السياسة أو بياناتك، يمكنك التواصل معنا عبر:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

export function getPrivacyCopy(locale: string): PrivacyCopy {
  return locale === "ar" ? ar : en;
}
