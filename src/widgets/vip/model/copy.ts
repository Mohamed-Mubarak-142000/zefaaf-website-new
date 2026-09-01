// The VIP page copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical — adding a `vip` namespace to
// only `en`/`ar` would make next-intl throw MISSING_MESSAGE for the other 31.
// Same approach as the Influential Figures widget: Arabic + English now, and
// the block moves into `messages/` once the other locales are translated.

export type VipDetail = {
  title: string;
  bullets: readonly string[];
  paragraphs: readonly string[];
  imageAlt: string;
};

export type VipAdvantage = {
  title: string;
  description: string;
};

export type VipCopy = {
  hero: {
    badge: string;
    titleBefore: string;
    titleSecondBefore: string;
    titleHighlight: string;
    titleAfter: string;
    description: string;
    feeLabel: string;
    price: string;
    cta: string;
    imageAlt: string;
  };
  intro: {
    title: string;
    description: string;
  };
  details: readonly VipDetail[];
  advantages: {
    title: string;
    items: readonly VipAdvantage[];
    note: {
      title: string;
      description: string;
    };
    advisorAlt: string;
    coupleAlt: string;
  };
  europe: {
    title: string;
    description: string;
    cta: string;
    galleryLabel: string;
    memberAlt: string;
  };
};

const en: VipCopy = {
  hero: {
    badge: "With VIP via WhatsApp Saves you effort and time",
    titleBefore: "Personal Search",
    titleSecondBefore: "Service ",
    titleHighlight: "VIP",
    titleAfter: " via WhatsApp",
    description:
      "Are you looking for the right life partner but need real personal help instead of searching alone? The Personal Search Service via WhatsApp from Zefaaf is designed for those who want a more comfortable and private experience — our specialized team handles the search on your behalf and communicates with you directly over WhatsApp at every step of the journey.",
    feeLabel: "Service Fee",
    price: "EUR 99",
    cta: "Start Now via WhatsApp",
    imageAlt: "A couple walking down a quiet European street",
  },
  intro: {
    title: "Why choose the Personal Search Service via WhatsApp?",
    description:
      "Some people are serious about marriage but don't have enough time, feel uncomfortable browsing profiles themselves, or simply need a trusted guide by their side on this important journey.",
  },
  details: [
    {
      title: "Your Match Search",
      bullets: [
        "Direct, instant communication that saves you time and effort.",
        "Real, thoughtfully considered recommendations tailored to you.",
      ],
      paragraphs: [
        "Every step happens seamlessly through WhatsApp, with no complicated apps or unnecessary steps. Our team handles the entire search for you, so you don't have to browse thousands of profiles or wait endlessly. It's not just automated matching — our specialized team carefully reviews your profile and presents the best options truly suited to you.",
      ],
      imageAlt: "A newly married couple standing together outside a mosque",
    },
    {
      title: "Your Match Search",
      bullets: [
        "Complete Privacy & A Better Understanding Between Both Sides",
        "Complete Your Profile & Start Your Search",
      ],
      paragraphs: [
        "Your data and profile are handled with complete confidentiality. We go beyond introductions by supporting you throughout the process and helping both sides build genuine understanding and compatibility, God willing.",
        "Simply add your details and preferences, securely upload your ID and photos, and once your profile is reviewed and activated, start your journey through your personal dashboard.",
      ],
      imageAlt: "A bride and groom on their wedding day",
    },
  ],
  advantages: {
    title: "What sets the Personal Search Service via WhatsApp apart",
    items: [
      {
        title: "Personal search on your behalf",
        description:
          "Don't waste your time browsing thousands of profiles — our team handles the entire search process for you with the highest level of care and precision.",
      },
      {
        title: "Exclusive, unpublished recommendations",
        description:
          "We reach private profiles that aren't visible to the public on the platform, giving you wider and more compatible options.",
      },
      {
        title: "Continuous follow-up until you find a match",
        description:
          "Our role doesn't end at the recommendation — we stay with you and follow up at every step until you reach the right decision, God willing.",
      },
      {
        title: "Complete privacy and confidentiality",
        description:
          "All your data and profile details are handled with absolute confidentiality throughout the service, with no compromise.",
      },
    ],
    note: {
      title: "Personalized Matching & Support",
      description:
        "Our advisors carefully communicate with you over WhatsApp, study your profile closely, then search for the best matches from an extensive database and exclusive profiles. The team also handles communication with the other side and bridges perspectives to reach the best possible match, God willing.",
    },
    advisorAlt: "A Zefaaf advisor praying alongside a member",
    coupleAlt: "A couple standing in front of a mosque",
  },
  europe: {
    title: "A special feature for residents of Europe",
    description:
      "The VIP service also includes the option of direct, Sharia-compliant meetings at the Zefaaf office in Amsterdam, in a safe and respectful environment that reinforces seriousness and increases the chances of a genuine match.",
    cta: "Book the VIP service via WhatsApp",
    galleryLabel: "Zefaaf members across Europe",
    memberAlt: "Zefaaf members in Europe",
  },
};

const ar: VipCopy = {
  hero: {
    badge: "مع خدمة VIP عبر واتساب توفّر عليك الجهد والوقت",
    titleBefore: "خدمة البحث الشخصي",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " عبر واتساب",
    description:
      "هل تبحث عن شريك الحياة المناسب لكنك تحتاج إلى مساعدة شخصية حقيقية بدلًا من البحث وحدك؟ خدمة البحث الشخصي عبر واتساب من زفاف مخصّصة لمن يريد تجربة أكثر راحة وخصوصية — فريقنا المتخصّص يتولّى البحث عنك ويتواصل معك مباشرة عبر واتساب في كل خطوة من الرحلة.",
    feeLabel: "قيمة الخدمة",
    price: "٩٩ يورو",
    cta: "ابدأ الآن عبر واتساب",
    imageAlt: "زوجان يسيران في شارع أوروبي هادئ",
  },
  intro: {
    title: "لماذا تختار خدمة البحث الشخصي عبر واتساب؟",
    description:
      "بعض الأشخاص جادّون في الزواج لكن لا يتوفّر لديهم وقت كافٍ، أو لا يشعرون بالراحة في تصفّح الملفات بأنفسهم، أو يحتاجون ببساطة إلى دليل موثوق يرافقهم في هذه الرحلة المهمة.",
  },
  details: [
    {
      title: "البحث عن شريكك المناسب",
      bullets: [
        "تواصل مباشر وفوري يوفّر عليك الوقت والجهد.",
        "توصيات حقيقية مدروسة بعناية ومصمّمة لك.",
      ],
      paragraphs: [
        "كل خطوة تحدث بسلاسة عبر واتساب، بدون تطبيقات معقّدة أو خطوات زائدة. فريقنا يتولّى البحث بالكامل نيابة عنك، فلا تحتاج إلى تصفّح آلاف الملفات أو الانتظار طويلًا. الأمر ليس مطابقة آلية — بل فريق متخصّص يراجع ملفك بعناية ويعرض عليك أفضل الخيارات المناسبة لك فعلًا.",
      ],
      imageAlt: "زوجان حديثا الزواج يقفان أمام أحد المساجد",
    },
    {
      title: "البحث عن شريكك المناسب",
      bullets: [
        "خصوصية كاملة وتفاهم أفضل بين الطرفين",
        "أكمل ملفك وابدأ رحلة البحث",
      ],
      paragraphs: [
        "بياناتك وملفك يُتعامل معهما بسرّية تامة. ولا نتوقف عند التعريف فقط، بل نرافقك خلال العملية ونساعد الطرفين على بناء تفاهم وتوافق حقيقي بإذن الله.",
        "أضف بياناتك وتفضيلاتك، وارفع هويتك وصورك بشكل آمن، وبعد مراجعة ملفك وتنشيطه ابدأ رحلتك من لوحة التحكم الخاصة بك.",
      ],
      imageAlt: "عروسان في يوم زفافهما",
    },
  ],
  advantages: {
    title: "ما يميّز خدمة البحث الشخصي عبر واتساب",
    items: [
      {
        title: "بحث شخصي نيابة عنك",
        description:
          "لا تضيّع وقتك في تصفّح آلاف الملفات — فريقنا يتولّى عملية البحث بالكامل نيابة عنك بأعلى درجات العناية والدقة.",
      },
      {
        title: "توصيات حصرية غير منشورة",
        description:
          "نصل إلى ملفات خاصة غير ظاهرة للعامة على المنصّة، مما يمنحك خيارات أوسع وأكثر توافقًا.",
      },
      {
        title: "متابعة مستمرة حتى تجد شريكك",
        description:
          "دورنا لا ينتهي عند التوصية — نبقى معك ونتابع كل خطوة حتى تصل إلى القرار الصحيح بإذن الله.",
      },
      {
        title: "خصوصية وسرّية كاملة",
        description:
          "جميع بياناتك وتفاصيل ملفك يُتعامل معها بسرّية مطلقة خلال الخدمة، بلا أي تهاون.",
      },
    ],
    note: {
      title: "مطابقة ودعم شخصي",
      description:
        "مستشارونا يتواصلون معك بعناية عبر واتساب، ويدرسون ملفك بدقة، ثم يبحثون عن أفضل المرشّحين من قاعدة بيانات واسعة وملفات حصرية. كما يتولّى الفريق التواصل مع الطرف الآخر وتقريب وجهات النظر للوصول إلى أفضل مطابقة ممكنة بإذن الله.",
    },
    advisorAlt: "مستشار زفاف يصلّي مع أحد الأعضاء",
    coupleAlt: "زوجان يقفان أمام أحد المساجد",
  },
  europe: {
    title: "ميزة خاصة لسكّان أوروبا",
    description:
      "تتضمّن خدمة VIP أيضًا إمكانية اللقاءات المباشرة الموافقة للشريعة في مكتب زفاف بأمستردام، في بيئة آمنة ومحترمة تعزّز الجدية وترفع فرص المطابقة الحقيقية.",
    cta: "احجز خدمة VIP عبر واتساب",
    galleryLabel: "أعضاء زفاف في أوروبا",
    memberAlt: "أعضاء زفاف في أوروبا",
  },
};

export function getVipCopy(locale: string): VipCopy {
  return locale === "ar" ? ar : en;
}
