// The About page copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical — adding an `about` namespace to
// only `en`/`ar` would make next-intl throw MISSING_MESSAGE for the other 31.
// Same approach as the VIP and Influential Figures widgets: Arabic + English
// now, and the block moves into `messages/` once the other locales are
// translated.

export type AboutFeatureCard = {
  title: string;
  description: string;
};

export type AboutCopy = {
  hero: {
    title: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  intro: {
    headingLine1: string;
    headingLine2: string;
    description: string;
  };
  policy: {
    label: string;
    title: string;
    description: string;
    bullets: readonly string[];
  };
  gateway: {
    label: string;
    title: string;
    description: string;
    videoAlt: string;
  };
  features: {
    heading: string;
    description: string;
    cards: readonly AboutFeatureCard[];
  };
  stats: {
    number: string;
    label: string;
    avatarAlt: string;
  };
  testimonial: {
    label: string;
    title: string;
    subtitle: string;
    quote: string;
    names: readonly string[];
    photoAlt: string;
  };
};

const en: AboutCopy = {
  hero: {
    title: "About us",
    description:
      "providing Muslims with a safe environment that preserves values and family cohesion. We help you find a suitable life partner through smart tools and a transparent experience that gives you peace of mind at every step.",
    ctaPrimary: "Explore Zefaaf platform",
    ctaSecondary: "Create free account",
    imageAlt: "A married woman's hand resting gently, wearing her wedding ring",
  },
  intro: {
    headingLine1: "Zefaaf... a global Islamic marriage platform",
    headingLine2: "Upholding Sharia values and preserving chastity,",
    description:
      "combining artificial intelligence and modern technologies to connect hearts in a safe and pure environment, with full support to build a happy family based on love and compassion.",
  },
  policy: {
    label: "Our Policy and Approach",
    title: "Zefaaf... Sharia commitment and absolute trust",
    description:
      "combining artificial intelligence and modern technologies to connect hearts in a safe and pure environment, with full support to build a happy family based on love and compassion.",
    bullets: [
      "We adhere to Sharia guidelines in all our dealings to ensure a pure and safe environment for users.",
      "We strictly follow Sharia policies and do not tolerate any ethical or religious violations.",
      "All platform operators are Muslims committed to Sharia teachings.",
      "Registration is free and open to everyone.",
      "There is no room for casual relationships, friendships, or temporary marriages.",
    ],
  },
  gateway: {
    label: "Zefaaf – Your gateway to lawful and safe marriage",
    title: "Zefaaf is a legitimate Islamic marriage platform aimed at mending the hearts of Muslims",
    description:
      "We believe that marriage is a great responsibility, so we provide a safe and confidential environment, compliant with Sharia guidelines, covering all countries worldwide, to help you plan your marriage with Islamic ethics.",
    videoAlt: "A newlywed couple holding hands",
  },
  features: {
    heading: "Zefaaf… more than just a marriage platform!",
    description:
      "Your companion on the path to halal love. We provide a safe environment and heartfelt support to help you start a marital journey that pleases Allah, filled with love and compassion",
    cards: [
      {
        title: "Valuable tips for your marital life",
        description:
          "We offer practical guidance based on Islamic values and life experiences to help you build a happy and sustainable marriage.",
      },
      {
        title: "24/7 Continuous Support",
        description:
          "Our team is always available to answer your questions and provide the necessary guidance to ensure a safe and reliable experience.",
      },
      {
        title: "Solid foundations for successful relationships",
        description:
          "Since marriage is a partnership based on love and compassion, we provide tips to build a strong relationship that brings happiness and stability.",
      },
      {
        title: "Authentic Islamic values",
        description:
          "We help you establish your marriage according to Islamic teachings, emphasizing ethics and commitment at every step.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "From happy clients",
    avatarAlt: "A happy Zefaaf member",
  },
  testimonial: {
    label: "Our Policy and Approach",
    title: "What do our users say about Zefaaf?",
    subtitle: "Real experiences from people who found their life partners through Zefaaf!",
    quote:
      "I'm from Syria and based in Europe — the platform brought us closer and made communication easier, with privacy and respect. Thank you.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Hands holding wheat grains, a symbol of a blessed new beginning",
  },
};

const ar: AboutCopy = {
  hero: {
    title: "من نحن",
    description:
      "نوفر للمسلمين بيئة آمنة تحافظ على القيم والترابط الأسري. نساعدك على إيجاد شريك الحياة المناسب من خلال أدوات ذكية وتجربة شفافة تمنحك راحة البال في كل خطوة.",
    ctaPrimary: "استكشف منصة زفاف",
    ctaSecondary: "أنشئ حساباً مجانياً",
    imageAlt: "يد امرأة متزوجة ترتدي خاتم زواجها",
  },
  intro: {
    headingLine1: "زفاف... منصة زواج إسلامية عالمية",
    headingLine2: "تصون قيم الشريعة وتحافظ على العفة،",
    description:
      "من خلال دمج الذكاء الاصطناعي والتقنيات الحديثة لربط القلوب في بيئة آمنة ونقية، مع دعم كامل لبناء أسرة سعيدة قائمة على الحب والتراحم.",
  },
  policy: {
    label: "سياستنا ونهجنا",
    title: "زفاف... التزام شرعي وثقة مطلقة",
    description:
      "من خلال دمج الذكاء الاصطناعي والتقنيات الحديثة لربط القلوب في بيئة آمنة ونقية، مع دعم كامل لبناء أسرة سعيدة قائمة على الحب والتراحم.",
    bullets: [
      "نلتزم بضوابط الشريعة الإسلامية في جميع تعاملاتنا لضمان بيئة نقية وآمنة للمستخدمين.",
      "نطبّق سياسات الشريعة بدقة ولا نتهاون مع أي مخالفة أخلاقية أو دينية.",
      "جميع القائمين على المنصة مسلمون ملتزمون بتعاليم الشريعة.",
      "التسجيل مجاني ومتاح للجميع.",
      "لا مكان للعلاقات العابرة أو الصداقات أو الزواج المؤقت.",
    ],
  },
  gateway: {
    label: "زفاف – بوابتك إلى زواج حلال وآمن",
    title: "زفاف منصة زواج إسلامية شرعية تهدف إلى جبر قلوب المسلمين",
    description:
      "نؤمن بأن الزواج مسؤولية عظيمة، لذا نوفر بيئة آمنة وسرّية، متوافقة مع الضوابط الشرعية، تغطي جميع دول العالم، لمساعدتك على تخطيط زواجك وفق الأخلاق الإسلامية.",
    videoAlt: "عروسان حديثا الزواج يتشابكان بالأيدي",
  },
  features: {
    heading: "زفاف... أكثر من مجرد منصة زواج!",
    description:
      "رفيقك في طريق الحب الحلال. نوفر لك بيئة آمنة ودعماً صادقاً لتبدأ رحلة زواج ترضي الله، مليئة بالحب والتراحم",
    cards: [
      {
        title: "نصائح قيّمة لحياتك الزوجية",
        description:
          "نقدّم إرشادات عملية مستمدة من القيم الإسلامية وخبرات الحياة لمساعدتك على بناء زواج سعيد ومستدام.",
      },
      {
        title: "دعم متواصل على مدار الساعة",
        description:
          "فريقنا متاح دائماً للإجابة عن استفساراتك وتقديم الإرشاد اللازم لضمان تجربة آمنة وموثوقة.",
      },
      {
        title: "أسس متينة لعلاقات ناجحة",
        description:
          "بما أن الزواج شراكة قائمة على الحب والتراحم، نقدّم لك نصائح لبناء علاقة قوية تجلب السعادة والاستقرار.",
      },
      {
        title: "قيم إسلامية أصيلة",
        description:
          "نساعدك على تأسيس زواجك وفق التعاليم الإسلامية، مع التركيز على الأخلاق والالتزام في كل خطوة.",
      },
    ],
  },
  stats: {
    number: "٨٧٬٤٣٧",
    label: "من عملائنا السعداء",
    avatarAlt: "أحد أعضاء زفاف السعداء",
  },
  testimonial: {
    label: "سياستنا ونهجنا",
    title: "ماذا يقول مستخدمونا عن زفاف؟",
    subtitle: "تجارب حقيقية من أشخاص وجدوا شريك حياتهم عبر زفاف!",
    quote: "أنا من سوريا ومقيم بأوروبا والمنصة قرّبت المسافات وسهّلت التواصل بخصوصية واحترام. شكراً لكم.",
    names: ["نورا زريق", "أنس حمدان"],
    photoAlt: "يدان تحملان حبات القمح، رمزاً لبداية جديدة مباركة",
  },
};

export function getAboutCopy(locale: string): AboutCopy {
  return locale === "ar" ? ar : en;
}
