// This page's copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical — adding a `meetingInCountry`
// namespace to only `en`/`ar` would make next-intl throw MISSING_MESSAGE for
// the other 31. Same approach as the VIP and About widgets: Arabic + English
// now, and the block moves into `messages/` once the other locales are
// translated.

export type MeetingBullet = {
  title: string;
  description: string;
};

export type MeetingCard = {
  title: string;
  description: string;
};

export type MeetingCopy = {
  hero: {
    cta: string;
    title: string;
    paragraphs: readonly string[];
    imageAlt: {
      street: string;
      canal: string;
      tulips: string;
    };
  };
  why: {
    title: string;
    description: string;
    leftBullets: readonly MeetingBullet[];
    rightBullets: readonly MeetingBullet[];
    cta: string;
    badge: string;
    photoAlt: string;
  };
  unique: {
    title: string;
    cards: readonly MeetingCard[];
  };
  benefits: {
    title: string;
    items: readonly MeetingBullet[];
    imageAlt: string;
  };
  how: {
    title: string;
    description: string;
    imageAlt: string;
  };
};

const en: MeetingCopy = {
  hero: {
    cta: "Subscribe to the service",
    title: "Direct Sharia-Compliant Meetings",
    paragraphs: [
      "Direct Sharia-compliant meetings — a unique marriage service that combines Islamic values with easy, meaningful communication, helping those seeking marriage find the right life partner.",
      "Meet directly at our office in Amsterdam, or online if you're outside Europe. Every meeting is fully supervised, with family members present and clear Sharia guidelines that preserve modesty and dignity, wherever you are.",
    ],
    imageAlt: {
      street: "A quiet Amsterdam street with a bicycle and lantern at dusk",
      canal: "Historic canal houses along an Amsterdam waterway",
      tulips: "Tulips in bloom along an Amsterdam canal",
    },
  },
  why: {
    title: "Why Choose Direct Sharia-Compliant Meetings?",
    description:
      "At Zefaaf, we understand the challenges of finding a life partner who truly shares your values and principles. That's why we created a safe and trusted experience for you, wherever you are in the world.",
    leftBullets: [
      {
        title: "Simple & Instant Communication",
        description: "No complications — our supportive team guides you every step of the way.",
      },
      {
        title: "Real Meetings at Our Netherlands Office",
        description: "Get to know each other clearly and openly, face to face.",
      },
      {
        title: "Online Meetings Outside the Netherlands",
        description: "The same seriousness and Sharia guidelines, without geographical limits.",
      },
    ],
    rightBullets: [
      {
        title: "Full Supervision & Family Presence",
        description: "Greater safety, comfort, and peace of mind for you and your family.",
      },
      {
        title: "A Genuine Understanding of Your Needs",
        description: "We listen carefully to help you find meaningful compatibility.",
      },
      {
        title: "Complete Privacy & Confidentiality",
        description: "Your information is kept secure and only shared with serious marriage intentions.",
      },
    ],
    cta: "Subscribe to the service",
    badge: "make your journey to marriage easier and faster.",
    photoAlt: "A newly married couple facing each other in a sunflower field",
  },
  unique: {
    title: "What Makes Our Sharia Compliant Meetings Unique",
    cards: [
      {
        title: "Real Locations in Europe",
        description: "Meet men and women with their families face-to-face in a private and respectful environment.",
      },
      {
        title: "Online with the Same Commitment",
        description: "Ideal if you're outside Europe, with the same standards as in-person meetings.",
      },
      {
        title: "Simple Process",
        description: "Share your partner preferences with us, and we'll take care of the rest on your behalf.",
      },
    ],
  },
  benefits: {
    title: "Benefits of the Service",
    items: [
      {
        title: "Save Time & Effort",
        description: "Fast, direct coordination based on clear criteria, wherever you are.",
      },
      {
        title: "Safe & Trusted Environment",
        description: "Full supervision that respects Islamic values, whether in person or online.",
      },
      {
        title: "Ongoing Support",
        description: "We're with you at every stage to answer your questions and provide guidance.",
      },
      {
        title: "Complete Privacy",
        description: "Your information is kept secure and used only for the purpose of the service.",
      },
      {
        title: "Real Office + Online Option",
        description:
          "Our physical office in Amsterdam gives you greater confidence, while online meetings make the service accessible wherever you are.",
      },
    ],
    imageAlt: "A canal in Amsterdam lined with historic houses at dusk",
  },
  how: {
    title: "How Does the Service Work?",
    description:
      "All you need to do is contact us, share your profile and partner preferences, and we'll take care of the search. We'll then arrange a meeting at a time that works for both of you — either in person at our Amsterdam office or online.",
    imageAlt: "A traditional Dutch windmill beside a canal",
  },
};

const ar: MeetingCopy = {
  hero: {
    cta: "اشترك في الخدمة",
    title: "لقاءات شرعية مباشرة",
    paragraphs: [
      "لقاءات شرعية مباشرة — خدمة زواج فريدة تجمع بين القيم الإسلامية والتواصل السهل الهادف، لمساعدة الباحثين عن الزواج في إيجاد شريك الحياة المناسب.",
      "التقِ مباشرة في مكتبنا بأمستردام، أو عبر الإنترنت إذا كنت خارج أوروبا. كل لقاء يتم بإشراف كامل، بحضور أفراد العائلة ووفق ضوابط شرعية واضحة تحافظ على الحشمة والكرامة أينما كنت.",
    ],
    imageAlt: {
      street: "شارع هادئ في أمستردام مع دراجة وفانوس عند الغروب",
      canal: "منازل تاريخية على أحد قنوات أمستردام",
      tulips: "زهور التوليب المتفتحة على أحد قنوات أمستردام",
    },
  },
  why: {
    title: "لماذا تختار اللقاءات الشرعية المباشرة؟",
    description:
      "في زفاف، ندرك التحديات التي تواجه إيجاد شريك حياة يشاركك قيمك ومبادئك فعلًا. لهذا صممنا تجربة آمنة وموثوقة لك أينما كنت في العالم.",
    leftBullets: [
      {
        title: "تواصل بسيط وفوري",
        description: "بلا تعقيدات — فريقنا الداعم يرافقك في كل خطوة.",
      },
      {
        title: "لقاءات حقيقية في مكتبنا بهولندا",
        description: "تعرّفا على بعضكما بوضوح وانفتاح، وجهًا لوجه.",
      },
      {
        title: "لقاءات عبر الإنترنت خارج هولندا",
        description: "نفس الجدية والضوابط الشرعية، دون حدود جغرافية.",
      },
    ],
    rightBullets: [
      {
        title: "إشراف كامل وحضور الأسرة",
        description: "أمان وراحة وطمأنينة أكبر لك ولعائلتك.",
      },
      {
        title: "فهم حقيقي لاحتياجاتك",
        description: "نستمع بعناية لمساعدتك في إيجاد توافق حقيقي.",
      },
      {
        title: "خصوصية وسرية تامة",
        description: "بياناتك محفوظة بأمان ولا تُشارك إلا مع أصحاب النية الجادة للزواج.",
      },
    ],
    cta: "اشترك في الخدمة",
    badge: "نجعل رحلتك نحو الزواج أسهل وأسرع.",
    photoAlt: "عروسان حديثا الزواج يتقابلان في حقل عبّاد الشمس",
  },
  unique: {
    title: "ما يميز لقاءاتنا الشرعية",
    cards: [
      {
        title: "مواقع حقيقية في أوروبا",
        description: "التقِ بالرجال والنساء وعائلاتهم وجهًا لوجه في بيئة خاصة ومحترمة.",
      },
      {
        title: "عبر الإنترنت بنفس الالتزام",
        description: "مثالية إذا كنت خارج أوروبا، بنفس معايير اللقاءات الحضورية.",
      },
      {
        title: "إجراء بسيط",
        description: "شاركنا تفضيلات شريكك، ونحن نتكفل بالباقي نيابة عنك.",
      },
    ],
  },
  benefits: {
    title: "مزايا الخدمة",
    items: [
      {
        title: "توفير الوقت والجهد",
        description: "تنسيق مباشر وسريع بناءً على معايير واضحة، أينما كنت.",
      },
      {
        title: "بيئة آمنة وموثوقة",
        description: "إشراف كامل يحترم القيم الإسلامية، سواء حضوريًا أو عبر الإنترنت.",
      },
      {
        title: "دعم مستمر",
        description: "نرافقك في كل مرحلة للإجابة عن استفساراتك وتقديم التوجيه.",
      },
      {
        title: "خصوصية تامة",
        description: "بياناتك محفوظة بأمان وتُستخدم فقط لغرض الخدمة.",
      },
      {
        title: "مكتب حقيقي + خيار عبر الإنترنت",
        description:
          "مكتبنا الفعلي في أمستردام يمنحك ثقة أكبر، بينما تتيح اللقاءات عبر الإنترنت الخدمة أينما كنت.",
      },
    ],
    imageAlt: "قناة مائية في أمستردام تصطف على جانبيها منازل تاريخية عند الغروب",
  },
  how: {
    title: "كيف تعمل الخدمة؟",
    description:
      "كل ما عليك فعله هو التواصل معنا، ومشاركة ملفك الشخصي وتفضيلات شريكك، وسنتولى نحن عملية البحث. بعدها سننظّم لقاءً في وقت يناسبكما — إما حضوريًا في مكتبنا بأمستردام أو عبر الإنترنت.",
    imageAlt: "طاحونة هواء هولندية تقليدية بجانب قناة مائية",
  },
};

export function getMeetingCopy(locale: string): MeetingCopy {
  return locale === "ar" ? ar : en;
}
