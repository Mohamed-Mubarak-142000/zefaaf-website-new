// This page's copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical — adding a `smartMarriage`
// namespace to only some of them would make next-intl throw MISSING_MESSAGE
// for the rest. Same approach as the About, Events, VIP, and Meeting in
// Country widgets. All 33 locales are translated directly in this file below.

import type { Locale } from "@/shared/i18n";

// Stable, untranslated anchor ids for the in-page tab nav — index-aligned
// with `nav.items` in every locale below.
export const SMART_MARRIAGE_SECTION_IDS = [
  "what-is-the-initiative",
  "why-smart-marriage",
  "islamic-foundation",
  "initiative-messages",
  "initiative-charter",
  "about-zefaaf",
] as const;

export type SmartMarriageReason = {
  title: string;
  description: string;
};

export type SmartMarriageWhyCard = {
  title: string;
  paragraphs: readonly string[];
};

export type SmartMarriageCitation = {
  quote: string;
  attribution: string;
};

export type SmartMarriageMessageCard = {
  title: string;
  description: string;
};

export type SmartMarriageFeature = {
  title: string;
  description: string;
};

export type SmartMarriageCopy = {
  hero: {
    title: string;
    description: string;
    cta: string;
    photoAlts: {
      cliff: string;
      lake: string;
      blossom: string;
    };
  };
  nav: {
    items: readonly string[];
  };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    photoAlt: string;
  };
  why: {
    eyebrow: string;
    description: string;
    cards: readonly SmartMarriageWhyCard[];
  };
  banner: {
    title: string;
    description: string;
    photoAlt: string;
  };
  foundation: {
    eyebrow: string;
    title: string;
    citations: readonly SmartMarriageCitation[];
    reasons: readonly SmartMarriageReason[];
  };
  messages: {
    eyebrow: string;
    title: string;
    description: string;
    cards: readonly SmartMarriageMessageCard[];
  };
  charter: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly string[];
    photoAlt: string;
  };
  companion: {
    eyebrow: string;
    title: string;
    description: string;
    features: readonly SmartMarriageFeature[];
    photoAlts: {
      mosque: string;
      car: string;
    };
  };
};

const en: SmartMarriageCopy = {
  hero: {
    title: "Smart Marriage Initiative",
    description:
      "Marriage in Islam is about virtue and tranquility, not extravagance and expenses. If you wait until your hands are full before building a home, you may be waiting a long time.",
    cta: "Start Your Marriage Journey",
    photoAlts: {
      cliff: "A couple posing on a rocky cliff overlooking a turquoise sea and mountains, the man carrying the woman as her long white skirt flows in the wind.",
      lake: "A couple standing face to face beside a turquoise alpine lake surrounded by pine trees and mountains.",
      blossom: "A couple embracing under a blooming pink cherry blossom tree in a park.",
    },
  },
  nav: {
    items: [
      "What Is the Initiative",
      "Why Smart Marriage",
      "The Islamic Foundation of the Smart Marriage Initiative",
      "Initiative Messages",
      "Initiative Charter",
      "About Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Why You Choose Zefaaf",
    title: "Smart Marriage: A New Equation for Life",
    description:
      "The Smart Marriage Initiative is a conscious call from the Zefaaf platform to reorder priorities. Instead of spending money on lavish wedding halls, excessive dowries, and extravagant jewelry, invest it in building a real home and a shared life filled with love and mercy.",
    photoAlt:
      "A couple photographed from behind on a beach, the man holding a white bouquet, the woman in a flowing blush gown and hijab, a misty rocky headland in the background.",
  },
  why: {
    eyebrow: "Why Smart Marriage",
    description:
      "Because society has burdened marriage with conditions not imposed by faith, and endless expectations, until it became an unattainable dream for millions of young people. The Smart Marriage Initiative brings back the real questions: Why do we marry? And how should we marry?",
    cards: [
      {
        title: "Because Faith Set the Right Standard",
        paragraphs: [
          'The Prophet ﷺ did not say look at his wealth, but said: "If someone comes to you whose religion and character please you, then marry him." This standard has not changed, and homes built upon it are the most stable and enduring.',
        ],
      },
      {
        title: "Because Appearances Don't Build a Home",
        paragraphs: [
          "The wedding night ends, but life begins after it. What is spent on venues and appearances in a single night could establish a real home that lasts for years.",
        ],
      },
      {
        title: "Because Waiting Has a Price",
        paragraphs: [
          'Every year you wait for "the right time" is a year of life passing by, stability delayed, and blessings missed. Making things easy today is better than perfection that never comes.',
        ],
      },
      {
        title: "Because God Promised to Help Those Seeking Virtue",
        paragraphs: [
          '"Three people have a right to God\'s help: the one who marries seeking chastity." This divine promise does not require a bank balance — it requires a sincere intention and a pure heart.',
        ],
      },
      {
        title: "Because a Humble Beginning Is Not a Shame",
        paragraphs: [
          "The happiest homes did not start with material wealth, but with honesty.",
          "Abilities develop over time, and provision expands, but character and intention are what remain constant.",
        ],
      },
    ],
  },
  banner: {
    title: "Smart Marriage",
    description:
      "An investment in the foundation of married life, while traditional marriage is excessive spending on appearances.",
    photoAlt: "A couple praying together in a sunlit mosque with an ornate wooden minbar.",
  },
  foundation: {
    eyebrow: "The Islamic Foundation of the Smart Marriage Initiative",
    title: "Smart marriage is not a modern idea — it is what Islam has encouraged for over 1,400 years.",
    citations: [
      {
        quote:
          "And marry the unmarried among you and the righteous among your male slaves and female slaves. If they should be poor, Allah will enrich them from His bounty. And Allah is all-Encompassing and Knowing.",
        attribution: "Surah An-Nur — Verse 32",
      },
      {
        quote:
          "If someone comes to you whose religion and character please you, then marry him. If you do not, there will be turmoil on earth and great corruption.",
        attribution: "Narrated by Al-Tirmidhi",
      },
      {
        quote: "Three people have a right to God's help: the one who marries seeking chastity.",
        attribution: "Narrated by Al-Tirmidhi, authenticated by Al-Albani",
      },
    ],
    reasons: [
      {
        title: "Poverty Does Not Prevent Marriage",
        description:
          "God did not require wealth for marriage. Rather, He explicitly promised to enrich those who pursue marriage seeking virtue. Whoever delays marriage waiting for financial perfection has delayed a blessing that God Himself guaranteed.",
      },
      {
        title: "Faith and Character Are the Foundation",
        description:
          "Wealth comes and goes, and status rises and falls, but faith and character are what build a home. Whoever chooses a partner by worldly standards alone builds on sand; whoever chooses by faith builds on rock.",
      },
      {
        title: "Simplicity Is the Source of Blessing",
        description:
          "The more you ease the path to a halal marriage, the more doors you never expected will open before you. A humble beginning is not a deficiency — it is fertile ground where love and mercy grow.",
      },
      {
        title: "Marriage Is Not a Financial Project",
        description:
          "We turned marriage from an easy tradition into a project that exhausts people before it even begins. The Smart Marriage Initiative returns marriage to its essence: a bond between two people seeking virtue and stability, not a party to measure social status.",
      },
      {
        title: "Start with What You Can, and God Will Complete the Rest",
        description:
          "Don't wait to have everything before starting your life. Many of the happiest homes began with the simplest means, and many of the most glamorous homes collapsed from within. The difference lies in intention and character.",
      },
    ],
  },
  messages: {
    eyebrow: "Initiative Messages",
    title: "A Word for Each of You",
    description: "A simple message for everyone seeking a fresh start in life and stability.",
    cards: [
      {
        title: "A Message to Young Men",
        description:
          "Don't postpone marriage because you're not financially complete. Start with what you can, be honest, strive to improve your situation, and you'll find that doors of goodness open for you — because marriage is the beginning of stability and blessing.",
      },
      {
        title: "A Message to Fathers",
        description:
          "Your daughter needs a man who fears God in how he treats her, who preserves her dignity and guards her heart. Money comes and goes, but character and faith build a stable home. Choose for her someone who will treat her with kindness — that is the true guarantee of her happiness.",
      },
      {
        title: "A Message to Young Women",
        description:
          "Don't make marriage a long list of material conditions. Ask yourself: Is he honest? Will he respect me? Can I build a stable life with him? A righteous man may start from nothing.",
      },
    ],
  },
  charter: {
    eyebrow: "Initiative Charter",
    title: "Pledge with us and join the Smart Marriage Initiative by agreeing to this charter.",
    subtitle: "Smart Marriage Charter",
    items: [
      "I strive to build a life based on respect and understanding.",
      "I accept marriage with simple means and a realistic beginning.",
      "I commit to honesty in all my information and statements.",
      "I pledge that my goal in marriage is virtue and stability.",
      "I believe that faith and character matter more than wealth and appearances.",
    ],
    photoAlt: "A bride and groom embracing at golden hour in a grassy wetland, her veil flowing in the wind.",
  },
  companion: {
    eyebrow: "About Zefaaf Platform",
    title: "Your Companion on the Path to Halal Marriage",
    description:
      "Zefaaf is a trusted Islamic marriage platform that provides Muslims with a safe environment that preserves values and strengthens families, helping you find the right life partner through smart tools and a transparent experience.",
    features: [
      {
        title: "Safe and Sharia-Compliant Environment",
        description:
          "We are committed to Islamic guidelines in all interactions — no casual acquaintances or friendships.",
      },
      {
        title: "24/7 Continuous Support",
        description: "Our team is always available to answer your questions and provide the guidance you need.",
      },
      {
        title: "Specialized Marriage Advice",
        description: "Practical guidance based on Islamic values for establishing a happy and lasting marriage.",
      },
      {
        title: "Global Coverage",
        description: "Covering all countries worldwide to help you find a life partner wherever you are.",
      },
      {
        title: "Start Your Journey Now with Zefaaf",
        description: "Register for free and join the Smart Marriage Initiative. Registration is free, and messaging is always free.",
      },
    ],
    photoAlts: {
      mosque: "A bride in a white hijab and gown and a groom in a black tuxedo making dua together inside an ornate mosque.",
      car: "A bride in a white gown and veil embracing a groom in a black tuxedo beside a vintage classic car.",
    },
  },
};

const ar: SmartMarriageCopy = {
  hero: {
    title: "مبادرة الزواج الذكي",
    description:
      "الزواج في الإسلام قوامه العفاف والسكينة، لا البذخ والتكاليف. فإن انتظرت حتى تمتلئ يداك قبل بناء بيتك، فقد تنتظر طويلاً.",
    cta: "ابدأ رحلة زواجك",
    photoAlts: {
      cliff: "زوجان يقفان على منحدر صخري يطل على بحر فيروزي وجبال، والزوج يحمل زوجته بينما يتطاير تنورتها البيضاء الطويلة مع الريح.",
      lake: "زوجان يقفان وجهاً لوجه بجانب بحيرة جبلية فيروزية تحيط بها أشجار الصنوبر والجبال.",
      blossom: "زوجان يتعانقان تحت شجرة كرز مزهرة بالورد الوردي في حديقة.",
    },
  },
  nav: {
    items: [
      "ما هي المبادرة",
      "لماذا الزواج الذكي",
      "الأساس الإسلامي لمبادرة الزواج الذكي",
      "رسائل المبادرة",
      "ميثاق المبادرة",
      "عن زفاف",
    ],
  },
  intro: {
    eyebrow: "لماذا تختار زفاف",
    title: "الزواج الذكي: معادلة جديدة للحياة",
    description:
      "مبادرة الزواج الذكي دعوة واعية من منصة زفاف لإعادة ترتيب الأولويات. فبدلاً من إنفاق المال على قاعات الأفراح الفخمة والمهور الباهظة والمجوهرات الثمينة، استثمره في بناء بيت حقيقي وحياة مشتركة مليئة بالمودة والرحمة.",
    photoAlt: "زوجان مصوَّران من الخلف على شاطئ، الزوج يحمل باقة ورد بيضاء، والزوجة ترتدي فستاناً ورديّاً فاتحاً وحجاباً، وفي الخلفية شبه جزيرة صخرية ضبابية.",
  },
  why: {
    eyebrow: "لماذا الزواج الذكي",
    description:
      "لأن المجتمع أثقل كاهل الزواج بشروط لم يفرضها الدين، وتوقعات لا تنتهي، حتى صار حلماً بعيد المنال لملايين الشباب. مبادرة الزواج الذكي تعيد طرح السؤال الحقيقي: لماذا نتزوج؟ وكيف ينبغي أن نتزوج؟",
    cards: [
      {
        title: "لأن الدين وضع المعيار الصحيح",
        paragraphs: [
          "لم يقل النبي ﷺ: انظر إلى ماله، بل قال: «إذا جاءكم من ترضون دينه وخلقه فزوّجوه». هذا المعيار لم يتغيّر، والبيوت التي تُبنى عليه هي الأكثر ثباتاً ودواماً.",
        ],
      },
      {
        title: "لأن المظاهر لا تبني بيتاً",
        paragraphs: [
          "تنتهي ليلة الزفاف، لكن الحياة تبدأ بعدها. وما يُنفق على القاعات والمظاهر في ليلة واحدة قد يؤسس بيتاً حقيقياً يدوم سنوات.",
        ],
      },
      {
        title: "لأن الانتظار له ثمن",
        paragraphs: [
          "كل عام تنتظر فيه «الوقت المناسب» هو عام من العمر يمضي، واستقرار يتأخر، وبركة تفوتك. تيسير الأمور اليوم خير من كمال لن يأتي أبداً.",
        ],
      },
      {
        title: "لأن الله وعد بمعونة طالبي العفاف",
        paragraphs: [
          "«ثلاثة حقٌّ على الله عونهم: الناكح الذي يريد العفاف». هذا الوعد الإلهي لا يشترط رصيداً في البنك، بل يشترط نية صادقة وقلباً نقياً.",
        ],
      },
      {
        title: "لأن البداية المتواضعة ليست عيباً",
        paragraphs: [
          "أسعد البيوت لم تبدأ بثراء مادي، بل بصدق.",
          "القدرات تتطور مع الوقت، والرزق يتوسع، لكن الخُلُق والنية هما الثابتان.",
        ],
      },
    ],
  },
  banner: {
    title: "الزواج الذكي",
    description: "استثمار في أساس الحياة الزوجية، بينما الزواج التقليدي إنفاق مبالغ فيه على المظاهر.",
    photoAlt: "زوجان يصليان معاً في مسجد مضاء بنور الشمس، ومنبر خشبي مزخرف.",
  },
  foundation: {
    eyebrow: "الأساس الإسلامي لمبادرة الزواج الذكي",
    title: "الزواج الذكي ليس فكرة حديثة، بل هو ما حثّ عليه الإسلام منذ أكثر من 1400 عام.",
    citations: [
      {
        quote:
          "وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ وَالصَّالِحِينَ مِنْ عِبَادِكُمْ وَإِمَائِكُمْ ۚ إِن يَكُونُوا فُقَرَاءَ يُغْنِهِمُ اللَّهُ مِن فَضْلِهِ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ",
        attribution: "سورة النور — الآية 32",
      },
      {
        quote: "إِذَا جَاءَكُمْ مَنْ تَرْضَوْنَ دِينَهُ وَخُلُقَهُ فَزَوِّجُوهُ، إِلَّا تَفْعَلُوا تَكُنْ فِتْنَةٌ فِي الْأَرْضِ وَفَسَادٌ عَرِيضٌ",
        attribution: "رواه الترمذي",
      },
      {
        quote: "ثَلَاثَةٌ حَقٌّ عَلَى اللَّهِ عَوْنُهُمْ: النَّاكِحُ الَّذِي يُرِيدُ الْعَفَافَ",
        attribution: "رواه الترمذي، وصححه الألباني",
      },
    ],
    reasons: [
      {
        title: "الفقر لا يمنع الزواج",
        description:
          "لم يشترط الله المال للزواج، بل وعد صراحة بإغناء من يطلبه ابتغاء العفاف. ومن أجّل زواجه انتظاراً لكمال مادي، يكون قد أجّل بركة ضمنها الله بنفسه.",
      },
      {
        title: "الدين والخُلُق هما الأساس",
        description:
          "المال يأتي ويذهب، والمكانة تعلو وتنخفض، لكن الدين والخُلُق هما ما يبني بيتاً. من اختار شريكه بمعايير الدنيا وحدها بنى على رمل؛ ومن اختاره بالدين بنى على صخر.",
      },
      {
        title: "البساطة مصدر البركة",
        description:
          "كلما يسّرت طريق الزواج الحلال، انفتحت أمامك أبواب لم تكن تتوقعها. البداية المتواضعة ليست نقصاً، بل أرض خصبة تنمو فيها المودة والرحمة.",
      },
      {
        title: "الزواج ليس مشروعاً مالياً",
        description:
          "حوّلنا الزواج من سنّة ميسّرة إلى مشروع يُنهك الناس قبل أن يبدأ. مبادرة الزواج الذكي تعيد الزواج إلى جوهره: رابطة بين شخصين يطلبان العفاف والاستقرار، لا مناسبة لقياس المكانة الاجتماعية.",
      },
      {
        title: "ابدأ بما تستطيع، والله يُتمّم الباقي",
        description:
          "لا تنتظر أن تملك كل شيء قبل أن تبدأ حياتك. كثير من أسعد البيوت بدأت بأبسط الإمكانات، وكثير من أفخم البيوت انهارت من الداخل. الفرق يكمن في النية والخُلُق.",
      },
    ],
  },
  messages: {
    eyebrow: "رسائل المبادرة",
    title: "كلمة لكل واحد منكم",
    description: "رسالة بسيطة لكل من يبحث عن بداية جديدة في حياته واستقرار.",
    cards: [
      {
        title: "رسالة إلى الشباب",
        description:
          "لا تؤجل الزواج لأنك لست مكتمل الإمكانات المادية. ابدأ بما تستطيع، وكن صادقاً، واسعَ لتحسين وضعك، وستجد أن أبواب الخير تُفتح لك — فالزواج بداية الاستقرار والبركة.",
      },
      {
        title: "رسالة إلى الآباء",
        description:
          "ابنتك تحتاج إلى رجل يخاف الله في معاملتها، يصون كرامتها ويحفظ قلبها. المال يأتي ويذهب، لكن الخُلُق والدين هما ما يبني بيتاً مستقراً. اختر لها من يعاملها بلطف — فهذا هو الضمان الحقيقي لسعادتها.",
      },
      {
        title: "رسالة إلى الفتيات",
        description:
          "لا تجعلي الزواج قائمة طويلة من الشروط المادية. اسألي نفسك: هل هو صادق؟ هل سيحترمني؟ هل أستطيع بناء حياة مستقرة معه؟ فالرجل الصالح قد يبدأ من لا شيء.",
      },
    ],
  },
  charter: {
    eyebrow: "ميثاق المبادرة",
    title: "انضم إلينا في مبادرة الزواج الذكي بالموافقة على هذا الميثاق.",
    subtitle: "ميثاق الزواج الذكي",
    items: [
      "أسعى لبناء حياة قائمة على الاحترام والتفاهم.",
      "أقبل بالزواج بإمكانات بسيطة وبداية واقعية.",
      "ألتزم بالصدق في جميع معلوماتي وأقوالي.",
      "أتعهد بأن هدفي من الزواج هو العفاف والاستقرار.",
      "أؤمن بأن الدين والخُلُق أهم من المال والمظاهر.",
    ],
    photoAlt: "عروسان يتعانقان عند غروب الشمس في أرض خضراء رطبة، وحجاب العروس يتطاير مع الريح.",
  },
  companion: {
    eyebrow: "عن منصة زفاف",
    title: "رفيقك في طريق الزواج الحلال",
    description:
      "زفاف منصة زواج إسلامية موثوقة توفر للمسلمين بيئة آمنة تحافظ على القيم وتقوّي الأسر، وتساعدك على إيجاد شريك الحياة المناسب من خلال أدوات ذكية وتجربة شفافة.",
    features: [
      {
        title: "بيئة آمنة ومتوافقة مع الشريعة",
        description: "نلتزم بالضوابط الإسلامية في جميع التفاعلات — لا معارف عابرة ولا صداقات.",
      },
      {
        title: "دعم مستمر على مدار الساعة",
        description: "فريقنا متاح دائماً للإجابة عن استفساراتك وتقديم الإرشاد الذي تحتاجه.",
      },
      {
        title: "استشارات زواج متخصصة",
        description: "إرشاد عملي مبني على القيم الإسلامية لبناء زواج سعيد ودائم.",
      },
      {
        title: "تغطية عالمية",
        description: "تغطية لجميع دول العالم لمساعدتك على إيجاد شريك الحياة أينما كنت.",
      },
      {
        title: "ابدأ رحلتك الآن مع زفاف",
        description: "سجّل مجاناً وانضم إلى مبادرة الزواج الذكي. التسجيل مجاني، والمراسلة مجانية دائماً.",
      },
    ],
    photoAlts: {
      mosque: "عروس بحجاب وفستان أبيض وعريس ببدلة سوداء يدعوان الله معاً داخل مسجد مزخرف.",
      car: "عروس بفستان أبيض وطرحة تعانق عريساً ببدلة سوداء بجانب سيارة كلاسيكية قديمة.",
    },
  },
};

const nl: SmartMarriageCopy = {
  hero: {
    title: "Slim Huwelijk Initiatief",
    description:
      "In de islam draait het huwelijk om deugd en rust, niet om uiterlijk vertoon en kosten. Als je wacht tot je handen vol zijn voordat je een thuis bouwt, kun je heel lang wachten.",
    cta: "Begin Je Huwelijksreis",
    photoAlts: {
      cliff: "Een stel poseert op een rotsachtige klif met uitzicht op een turkooizen zee en bergen, de man draagt de vrouw terwijl haar lange witte rok in de wind waait.",
      lake: "Een stel staat oog in oog naast een turkooizen alpenmeer, omringd door dennenbomen en bergen.",
      blossom: "Een stel omhelst elkaar onder een bloeiende roze kersenbloesemboom in een park.",
    },
  },
  nav: {
    items: [
      "Wat Is Het Initiatief",
      "Waarom Slim Huwen",
      "De Islamitische Basis van het Slim Huwelijk Initiatief",
      "Boodschappen van het Initiatief",
      "Handvest van het Initiatief",
      "Over Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Waarom Je Voor Zefaaf Kiest",
    title: "Slim Huwen: Een Nieuwe Vergelijking voor het Leven",
    description:
      "Het Slim Huwelijk Initiatief is een bewuste oproep van het Zefaaf-platform om prioriteiten opnieuw te ordenen. In plaats van geld uit te geven aan luxueuze trouwzalen, buitensporige bruidsschatten en overdadige sieraden, investeer het in het bouwen van een echt thuis en een gedeeld leven vol liefde en genade.",
    photoAlt:
      "Een stel gefotografeerd van achteren op een strand, de man houdt een witte bloemenboeket vast, de vrouw draagt een vloeiende roze jurk en hijab, met een mistige rotsachtige landtong op de achtergrond.",
  },
  why: {
    eyebrow: "Waarom Slim Huwen",
    description:
      "Omdat de maatschappij het huwelijk heeft belast met voorwaarden die het geloof niet oplegt, en met eindeloze verwachtingen, totdat het voor miljoenen jonge mensen een onbereikbare droom werd. Het Slim Huwelijk Initiatief brengt de echte vragen terug: Waarom trouwen we? En hoe moeten we trouwen?",
    cards: [
      {
        title: "Omdat Het Geloof de Juiste Norm Stelde",
        paragraphs: [
          'De Profeet ﷺ zei niet: kijk naar zijn rijkdom, maar zei: "Als er iemand naar je toe komt wiens geloof en karakter je bevallen, trouw hem dan." Deze norm is niet veranderd, en huizen die hierop zijn gebouwd, zijn de stabielste en meest duurzame.',
        ],
      },
      {
        title: "Omdat Uiterlijk Geen Thuis Bouwt",
        paragraphs: [
          "De trouwnacht eindigt, maar het leven begint erna pas echt. Wat in één nacht wordt uitgegeven aan locaties en uiterlijk vertoon, zou een echt thuis kunnen vestigen dat jarenlang standhoudt.",
        ],
      },
      {
        title: "Omdat Wachten een Prijs Heeft",
        paragraphs: [
          'Elk jaar dat je wacht op "het juiste moment" is een jaar leven dat voorbijgaat, stabiliteit die wordt uitgesteld en zegeningen die worden gemist. Iets vandaag makkelijk maken is beter dan een perfectie die nooit komt.',
        ],
      },
      {
        title: "Omdat God Beloofde Wie Deugdzaamheid Zoekt te Helpen",
        paragraphs: [
          '"Drie mensen hebben recht op Gods hulp: degene die trouwt om kuisheid te bewaren." Deze goddelijke belofte vereist geen banksaldo — ze vereist een oprechte intentie en een zuiver hart.',
        ],
      },
      {
        title: "Omdat een Bescheiden Begin Geen Schande Is",
        paragraphs: [
          "De gelukkigste huizen begonnen niet met materiële rijkdom, maar met oprechtheid.",
          "Mogelijkheden ontwikkelen zich met de tijd, en levensonderhoud breidt zich uit, maar karakter en intentie zijn wat constant blijft.",
        ],
      },
    ],
  },
  banner: {
    title: "Slim Huwen",
    description:
      "Een investering in de basis van het huwelijksleven, terwijl het traditionele huwelijk overdadige uitgaven aan uiterlijk vertoon is.",
    photoAlt:
      "Een stel bidt samen in een zonovergoten moskee met een sierlijke houten minbar.",
  },
  foundation: {
    eyebrow: "De Islamitische Basis van het Slim Huwelijk Initiatief",
    title:
      "Slim huwen is geen modern idee — het is wat de islam al meer dan 1.400 jaar aanmoedigt.",
    citations: [
      {
        quote:
          "En laat degenen onder u die niet gehuwd zijn en de rechtschapenen onder uw slaven en slavinnen huwen. Als zij arm zijn, zal Allah hen verrijken uit Zijn overvloed. En Allah is Alomvattend, Alwetend.",
        attribution: "Soera An-Noer — Vers 32",
      },
      {
        quote:
          'Als er iemand naar je toe komt wiens geloof en karakter je bevallen, trouw hem dan. Doe je dat niet, dan zal er onrust op aarde zijn en grote verdorvenheid.',
        attribution: "Overgeleverd door Al-Tirmidhi",
      },
      {
        quote:
          "Drie mensen hebben recht op Gods hulp: degene die trouwt om kuisheid te bewaren.",
        attribution: "Overgeleverd door Al-Tirmidhi, authentiek verklaard door Al-Albani",
      },
    ],
    reasons: [
      {
        title: "Armoede Verhindert Het Huwelijk Niet",
        description:
          "God heeft geen rijkdom als voorwaarde voor het huwelijk gesteld. Integendeel, Hij beloofde uitdrukkelijk degenen te verrijken die het huwelijk nastreven uit deugdzaamheid. Wie het huwelijk uitstelt in afwachting van financiële perfectie, stelt een zegen uit die God Zelf heeft gegarandeerd.",
      },
      {
        title: "Geloof en Karakter Zijn de Basis",
        description:
          "Rijkdom komt en gaat, en status stijgt en daalt, maar geloof en karakter zijn wat een thuis bouwt. Wie een partner kiest op puur wereldse maatstaven, bouwt op zand; wie kiest op basis van geloof, bouwt op rots.",
      },
      {
        title: "Eenvoud Is de Bron van Zegen",
        description:
          "Hoe meer je de weg naar een halal huwelijk vergemakkelijkt, hoe meer deuren die je nooit had verwacht voor je opengaan. Een bescheiden begin is geen tekortkoming — het is vruchtbare grond waarop liefde en genade groeien.",
      },
      {
        title: "Het Huwelijk Is Geen Financieel Project",
        description:
          "We hebben van het huwelijk, ooit een eenvoudige traditie, een project gemaakt dat mensen uitput nog voordat het begint. Het Slim Huwelijk Initiatief brengt het huwelijk terug naar zijn essentie: een band tussen twee mensen die deugd en stabiliteit zoeken, geen feest om sociale status af te meten.",
      },
      {
        title: "Begin met Wat Je Kunt, en God Zal de Rest Voltooien",
        description:
          "Wacht niet tot je alles hebt voordat je je leven begint. Veel van de gelukkigste huizen begonnen met de eenvoudigste middelen, en veel van de meest glamoureuze huizen stortten van binnenuit in. Het verschil zit in intentie en karakter.",
      },
    ],
  },
  messages: {
    eyebrow: "Boodschappen van het Initiatief",
    title: "Een Woord voor Ieder van Jullie",
    description:
      "Een eenvoudige boodschap voor iedereen die op zoek is naar een nieuw begin in het leven en naar stabiliteit.",
    cards: [
      {
        title: "Een Boodschap aan Jonge Mannen",
        description:
          "Stel het huwelijk niet uit omdat je financieel nog niet compleet bent. Begin met wat je kunt, wees eerlijk, streef ernaar je situatie te verbeteren, en je zult merken dat er deuren van goedheid voor je opengaan — want het huwelijk is het begin van stabiliteit en zegen.",
      },
      {
        title: "Een Boodschap aan Vaders",
        description:
          "Je dochter heeft een man nodig die God vreest in hoe hij haar behandelt, die haar waardigheid beschermt en haar hart bewaakt. Geld komt en gaat, maar karakter en geloof bouwen een stabiel thuis. Kies voor haar iemand die haar met vriendelijkheid zal behandelen — dat is de echte garantie voor haar geluk.",
      },
      {
        title: "Een Boodschap aan Jonge Vrouwen",
        description:
          "Maak van het huwelijk geen lange lijst met materiële voorwaarden. Vraag jezelf af: Is hij eerlijk? Zal hij mij respecteren? Kan ik met hem een stabiel leven opbouwen? Een oprechte man kan vanuit het niets beginnen.",
      },
    ],
  },
  charter: {
    eyebrow: "Handvest van het Initiatief",
    title:
      "Doe met ons de belofte en sluit je aan bij het Slim Huwelijk Initiatief door dit handvest te onderschrijven.",
    subtitle: "Handvest van Slim Huwen",
    items: [
      "Ik streef ernaar een leven op te bouwen dat gebaseerd is op respect en begrip.",
      "Ik aanvaard het huwelijk met eenvoudige middelen en een realistisch begin.",
      "Ik verplicht mij tot eerlijkheid in al mijn informatie en verklaringen.",
      "Ik beloof dat mijn doel bij het huwelijk deugd en stabiliteit is.",
      "Ik geloof dat geloof en karakter belangrijker zijn dan rijkdom en uiterlijk vertoon.",
    ],
    photoAlt:
      "Een bruid en bruidegom omhelzen elkaar tijdens het gouden uur in een grazig moerasgebied, haar sluier waait in de wind.",
  },
  companion: {
    eyebrow: "Over het Zefaaf-Platform",
    title: "Jouw Metgezel op de Weg naar een Halal Huwelijk",
    description:
      "Zefaaf is een vertrouwd islamitisch huwelijksplatform dat moslims een veilige omgeving biedt die waarden bewaart en gezinnen versterkt, en je helpt de juiste levenspartner te vinden via slimme tools en een transparante ervaring.",
    features: [
      {
        title: "Veilige en Sharia-Conforme Omgeving",
        description:
          "We houden ons in alle interacties aan islamitische richtlijnen — geen vrijblijvende kennismakingen of vriendschappen.",
      },
      {
        title: "Continue Ondersteuning, 24/7",
        description:
          "Ons team staat altijd klaar om je vragen te beantwoorden en de begeleiding te bieden die je nodig hebt.",
      },
      {
        title: "Gespecialiseerd Huwelijksadvies",
        description:
          "Praktische begeleiding gebaseerd op islamitische waarden voor het opbouwen van een gelukkig en duurzaam huwelijk.",
      },
      {
        title: "Wereldwijde Dekking",
        description:
          "We bestrijken alle landen wereldwijd om je te helpen een levenspartner te vinden, waar je ook bent.",
      },
      {
        title: "Begin Nu Je Reis met Zefaaf",
        description:
          "Registreer je gratis en sluit je aan bij het Slim Huwelijk Initiatief. Registratie is gratis, en berichten sturen is altijd gratis.",
      },
    ],
    photoAlts: {
      mosque:
        "Een bruid in een witte hijab en jurk en een bruidegom in een zwart smoking doen samen dua in een sierlijke moskee.",
      car: "Een bruid in een witte jurk en sluier omhelst een bruidegom in een zwart smoking naast een klassieke oldtimer.",
    },
  },
};

const fr: SmartMarriageCopy = {
  hero: {
    title: "Initiative du Mariage Intelligent",
    description:
      "Le mariage en Islam est une question de vertu et de tranquillité, non d'extravagance et de dépenses. Si vous attendez d'avoir les mains pleines pour bâtir un foyer, vous risquez d'attendre longtemps.",
    cta: "Commencez Votre Parcours Marital",
    photoAlts: {
      cliff: "Un couple posant sur une falaise rocheuse surplombant une mer turquoise et des montagnes, l'homme portant la femme tandis que sa longue jupe blanche flotte au vent.",
      lake: "Un couple se tenant face à face au bord d'un lac alpin turquoise entouré de pins et de montagnes.",
      blossom: "Un couple s'enlaçant sous un cerisier en fleurs roses dans un parc.",
    },
  },
  nav: {
    items: [
      "Qu'est-ce que l'Initiative",
      "Pourquoi le Mariage Intelligent",
      "Le Fondement Islamique de l'Initiative du Mariage Intelligent",
      "Messages de l'Initiative",
      "Charte de l'Initiative",
      "À Propos de Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Pourquoi Choisir Zefaaf",
    title: "Le Mariage Intelligent : Une Nouvelle Équation pour la Vie",
    description:
      "L'Initiative du Mariage Intelligent est un appel conscient de la plateforme Zefaaf à réordonner les priorités. Plutôt que de dépenser de l'argent dans des salles de mariage fastueuses, des dots excessives et des bijoux somptueux, investissez-le dans la construction d'un vrai foyer et d'une vie partagée empreinte d'amour et de miséricorde.",
    photoAlt:
      "Un couple photographié de dos sur une plage, l'homme tenant un bouquet blanc, la femme portant une robe rose pâle fluide et un hijab, avec un promontoire rocheux embrumé en arrière-plan.",
  },
  why: {
    eyebrow: "Pourquoi le Mariage Intelligent",
    description:
      "Parce que la société a alourdi le mariage de conditions que la foi n'impose pas, et d'attentes sans fin, jusqu'à en faire un rêve inaccessible pour des millions de jeunes. L'Initiative du Mariage Intelligent ramène les vraies questions : Pourquoi se marie-t-on ? Et comment devrait-on se marier ?",
    cards: [
      {
        title: "Parce que la Foi a Fixé le Bon Critère",
        paragraphs: [
          'Le Prophète ﷺ n\'a pas dit de regarder sa fortune, mais a dit : « Si quelqu\'un vient à vous dont la religion et le caractère vous satisfont, mariez-le. » Ce critère n\'a pas changé, et les foyers bâtis sur cette base sont les plus stables et les plus durables.',
        ],
      },
      {
        title: "Parce que les Apparences ne Bâtissent pas un Foyer",
        paragraphs: [
          "La nuit de noces se termine, mais la vie commence après elle. Ce qui est dépensé en une seule nuit pour des salles et des apparences pourrait fonder un vrai foyer qui dure des années.",
        ],
      },
      {
        title: "Parce que l'Attente a un Prix",
        paragraphs: [
          'Chaque année passée à attendre « le bon moment » est une année de vie qui s\'écoule, une stabilité retardée et des bénédictions manquées. Faciliter les choses aujourd\'hui vaut mieux qu\'une perfection qui ne vient jamais.',
        ],
      },
      {
        title: "Parce que Dieu a Promis d'Aider Ceux qui Recherchent la Vertu",
        paragraphs: [
          '« Trois personnes ont droit à l\'aide de Dieu : celui qui se marie en recherchant la chasteté. » Cette promesse divine n\'exige pas un solde bancaire — elle exige une intention sincère et un cœur pur.',
        ],
      },
      {
        title: "Parce qu'un Début Modeste n'est pas une Honte",
        paragraphs: [
          "Les foyers les plus heureux n'ont pas commencé par la richesse matérielle, mais par l'honnêteté.",
          "Les capacités se développent avec le temps, et les moyens s'élargissent, mais le caractère et l'intention sont ce qui demeure constant.",
        ],
      },
    ],
  },
  banner: {
    title: "Mariage Intelligent",
    description:
      "Un investissement dans les fondations de la vie conjugale, tandis que le mariage traditionnel est une dépense excessive dans les apparences.",
    photoAlt:
      "Un couple priant ensemble dans une mosquée baignée de lumière, avec un minbar en bois orné.",
  },
  foundation: {
    eyebrow: "Le Fondement Islamique de l'Initiative du Mariage Intelligent",
    title:
      "Le mariage intelligent n'est pas une idée moderne — c'est ce que l'Islam encourage depuis plus de 1 400 ans.",
    citations: [
      {
        quote:
          "Mariez les célibataires parmi vous, et les vertueux parmi vos esclaves, hommes et femmes. S'ils sont pauvres, Allah les enrichira par Sa grâce. Allah est Immense et Omniscient.",
        attribution: "Sourate An-Nour — Verset 32",
      },
      {
        quote:
          "Si quelqu'un vient à vous dont la religion et le caractère vous satisfont, mariez-le. Si vous ne le faites pas, il y aura du désordre sur terre et une grande corruption.",
        attribution: "Rapporté par Al-Tirmidhi",
      },
      {
        quote:
          "Trois personnes ont droit à l'aide de Dieu : celui qui se marie en recherchant la chasteté.",
        attribution: "Rapporté par Al-Tirmidhi, authentifié par Al-Albani",
      },
    ],
    reasons: [
      {
        title: "La Pauvreté n'Empêche pas le Mariage",
        description:
          "Dieu n'a pas exigé la richesse pour le mariage. Il a au contraire explicitement promis d'enrichir ceux qui recherchent le mariage par vertu. Celui qui retarde le mariage en attendant une perfection financière retarde une bénédiction que Dieu Lui-même a garantie.",
      },
      {
        title: "La Foi et le Caractère Sont le Fondement",
        description:
          "La richesse va et vient, le statut monte et descend, mais la foi et le caractère sont ce qui bâtit un foyer. Celui qui choisit un partenaire selon les seuls critères matériels bâtit sur du sable ; celui qui choisit selon la foi bâtit sur du roc.",
      },
      {
        title: "La Simplicité Est la Source de la Bénédiction",
        description:
          "Plus vous facilitez le chemin vers un mariage halal, plus des portes que vous n'attendiez pas s'ouvriront devant vous. Un début modeste n'est pas une lacune — c'est un terrain fertile où l'amour et la miséricorde grandissent.",
      },
      {
        title: "Le Mariage n'est pas un Projet Financier",
        description:
          "Nous avons transformé le mariage d'une tradition simple en un projet qui épuise les gens avant même de commencer. L'Initiative du Mariage Intelligent ramène le mariage à son essence : un lien entre deux personnes en quête de vertu et de stabilité, non une fête pour mesurer le statut social.",
      },
      {
        title: "Commencez avec Ce que Vous Avez, et Dieu Complétera le Reste",
        description:
          "N'attendez pas d'avoir tout pour commencer votre vie. Beaucoup des foyers les plus heureux ont commencé avec les moyens les plus simples, et beaucoup des foyers les plus fastueux se sont effondrés de l'intérieur. La différence réside dans l'intention et le caractère.",
      },
    ],
  },
  messages: {
    eyebrow: "Messages de l'Initiative",
    title: "Un Mot pour Chacun d'Entre Vous",
    description:
      "Un message simple pour tous ceux qui recherchent un nouveau départ dans la vie et la stabilité.",
    cards: [
      {
        title: "Un Message aux Jeunes Hommes",
        description:
          "Ne remettez pas le mariage à plus tard sous prétexte que vous n'êtes pas financièrement au complet. Commencez avec ce que vous avez, soyez honnête, efforcez-vous d'améliorer votre situation, et vous verrez s'ouvrir devant vous des portes de bien — car le mariage est le début de la stabilité et de la bénédiction.",
      },
      {
        title: "Un Message aux Pères",
        description:
          "Votre fille a besoin d'un homme qui craint Dieu dans la façon dont il la traite, qui préserve sa dignité et veille sur son cœur. L'argent va et vient, mais le caractère et la foi bâtissent un foyer stable. Choisissez pour elle quelqu'un qui la traitera avec bonté — c'est la véritable garantie de son bonheur.",
      },
      {
        title: "Un Message aux Jeunes Femmes",
        description:
          "Ne faites pas du mariage une longue liste de conditions matérielles. Demandez-vous : Est-il honnête ? Me respectera-t-il ? Puis-je bâtir avec lui une vie stable ? Un homme vertueux peut partir de rien.",
      },
    ],
  },
  charter: {
    eyebrow: "Charte de l'Initiative",
    title:
      "Engagez-vous avec nous et rejoignez l'Initiative du Mariage Intelligent en adhérant à cette charte.",
    subtitle: "Charte du Mariage Intelligent",
    items: [
      "Je m'efforce de bâtir une vie fondée sur le respect et la compréhension.",
      "J'accepte le mariage avec des moyens simples et un début réaliste.",
      "Je m'engage à l'honnêteté dans toutes mes informations et déclarations.",
      "Je m'engage à ce que mon but dans le mariage soit la vertu et la stabilité.",
      "Je crois que la foi et le caractère comptent plus que la richesse et les apparences.",
    ],
    photoAlt:
      "Un marié et une mariée s'enlaçant à l'heure dorée dans une zone humide herbeuse, son voile flottant au vent.",
  },
  companion: {
    eyebrow: "À Propos de la Plateforme Zefaaf",
    title: "Votre Compagnon sur le Chemin du Mariage Halal",
    description:
      "Zefaaf est une plateforme de mariage islamique de confiance qui offre aux musulmans un environnement sûr préservant les valeurs et renforçant les familles, vous aidant à trouver le bon partenaire de vie grâce à des outils intelligents et une expérience transparente.",
    features: [
      {
        title: "Un Environnement Sûr et Conforme à la Charia",
        description:
          "Nous nous engageons à respecter les directives islamiques dans toutes les interactions — aucune fréquentation ni amitié informelle.",
      },
      {
        title: "Un Soutien Continu, 24h/24 et 7j/7",
        description:
          "Notre équipe est toujours disponible pour répondre à vos questions et vous apporter l'accompagnement dont vous avez besoin.",
      },
      {
        title: "Des Conseils Spécialisés en Mariage",
        description:
          "Des conseils pratiques fondés sur les valeurs islamiques pour bâtir un mariage heureux et durable.",
      },
      {
        title: "Une Couverture Mondiale",
        description:
          "Une couverture de tous les pays du monde pour vous aider à trouver un partenaire de vie où que vous soyez.",
      },
      {
        title: "Commencez Votre Parcours Dès Maintenant avec Zefaaf",
        description:
          "Inscrivez-vous gratuitement et rejoignez l'Initiative du Mariage Intelligent. L'inscription est gratuite, et la messagerie l'est toujours aussi.",
      },
    ],
    photoAlts: {
      mosque:
        "Une mariée en hijab et robe blancs et un marié en smoking noir faisant une dua ensemble dans une mosquée ornée.",
      car: "Une mariée en robe blanche et voile enlaçant un marié en smoking noir à côté d'une voiture ancienne de collection.",
    },
  },
};

const de: SmartMarriageCopy = {
  hero: {
    title: "Initiative für Kluge Eheschließung",
    description:
      "Im Islam geht es bei der Ehe um Tugend und Ruhe, nicht um Prunk und Ausgaben. Wer wartet, bis seine Hände voll sind, bevor er ein Zuhause aufbaut, wartet womöglich sehr lange.",
    cta: "Beginne Deine Ehereise",
    photoAlts: {
      cliff: "Ein Paar posiert auf einer felsigen Klippe mit Blick auf ein türkisfarbenes Meer und Berge, der Mann trägt die Frau, während ihr langer weißer Rock im Wind weht.",
      lake: "Ein Paar steht sich an einem türkisfarbenen Alpensee gegenüber, umgeben von Kiefern und Bergen.",
      blossom: "Ein Paar umarmt sich unter einem blühenden rosa Kirschbaum in einem Park.",
    },
  },
  nav: {
    items: [
      "Was Ist die Initiative",
      "Warum Kluge Eheschließung",
      "Die Islamische Grundlage der Initiative für Kluge Eheschließung",
      "Botschaften der Initiative",
      "Charta der Initiative",
      "Über Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Warum Du Dich für Zefaaf Entscheidest",
    title: "Kluge Eheschließung: Eine Neue Gleichung fürs Leben",
    description:
      "Die Initiative für Kluge Eheschließung ist ein bewusster Aufruf der Plattform Zefaaf, Prioritäten neu zu ordnen. Statt Geld für prunkvolle Hochzeitssäle, übermäßige Brautgaben und aufwendigen Schmuck auszugeben, investiere es in den Aufbau eines echten Zuhauses und eines gemeinsamen Lebens voller Liebe und Barmherzigkeit.",
    photoAlt:
      "Ein Paar von hinten fotografiert am Strand, der Mann hält einen weißen Blumenstrauß, die Frau trägt ein fließendes altrosa Kleid und Hijab, im Hintergrund ein nebliges felsiges Kap.",
  },
  why: {
    eyebrow: "Warum Kluge Eheschließung",
    description:
      "Weil die Gesellschaft die Ehe mit Bedingungen belastet hat, die der Glaube nicht auferlegt, und mit endlosen Erwartungen, bis sie für Millionen junger Menschen zu einem unerreichbaren Traum wurde. Die Initiative für Kluge Eheschließung bringt die wirklichen Fragen zurück: Warum heiraten wir? Und wie sollten wir heiraten?",
    cards: [
      {
        title: "Weil der Glaube den Richtigen Maßstab Setzte",
        paragraphs: [
          'Der Prophet ﷺ sagte nicht, schau auf seinen Reichtum, sondern sagte: „Wenn jemand zu euch kommt, dessen Glaube und Charakter euch gefallen, dann verheiratet ihn." Dieser Maßstab hat sich nicht geändert, und die darauf gebauten Häuser sind die stabilsten und beständigsten.',
        ],
      },
      {
        title: "Weil Äußerlichkeiten Kein Zuhause Bauen",
        paragraphs: [
          "Die Hochzeitsnacht endet, doch das Leben beginnt erst danach. Was in einer einzigen Nacht für Säle und Äußerlichkeiten ausgegeben wird, könnte ein echtes Zuhause errichten, das jahrelang Bestand hat.",
        ],
      },
      {
        title: "Weil Warten Seinen Preis Hat",
        paragraphs: [
          'Jedes Jahr, das man auf „den richtigen Zeitpunkt" wartet, ist ein Jahr vergehendes Leben, verzögerte Stabilität und verpasste Segnungen. Es sich heute leicht zu machen, ist besser als eine Perfektion, die niemals kommt.',
        ],
      },
      {
        title: "Weil Gott Versprochen Hat, Denen zu Helfen, die Tugend Suchen",
        paragraphs: [
          '„Drei Menschen haben ein Anrecht auf Gottes Hilfe: derjenige, der heiratet, um Keuschheit zu bewahren." Dieses göttliche Versprechen erfordert kein Bankguthaben — es erfordert eine aufrichtige Absicht und ein reines Herz.',
        ],
      },
      {
        title: "Weil ein Bescheidener Anfang Keine Schande Ist",
        paragraphs: [
          "Die glücklichsten Häuser begannen nicht mit materiellem Reichtum, sondern mit Ehrlichkeit.",
          "Fähigkeiten entwickeln sich mit der Zeit, und der Lebensunterhalt wächst, doch Charakter und Absicht sind das, was konstant bleibt.",
        ],
      },
    ],
  },
  banner: {
    title: "Kluge Eheschließung",
    description:
      "Eine Investition in das Fundament des Ehelebens, während die traditionelle Eheschließung übermäßige Ausgaben für Äußerlichkeiten bedeutet.",
    photoAlt:
      "Ein Paar betet gemeinsam in einer sonnendurchfluteten Moschee mit einem kunstvoll verzierten hölzernen Minbar.",
  },
  foundation: {
    eyebrow: "Die Islamische Grundlage der Initiative für Kluge Eheschließung",
    title:
      "Kluge Eheschließung ist keine moderne Idee — es ist das, wozu der Islam seit über 1.400 Jahren ermutigt.",
    citations: [
      {
        quote:
          "Und verheiratet die Unverheirateten unter euch und die Rechtschaffenen unter euren Sklaven und Sklavinnen. Wenn sie arm sind, wird Allah sie aus Seiner Gnadenfülle reich machen. Und Allah ist Allumfassend und Allwissend.",
        attribution: "Sure An-Nur — Vers 32",
      },
      {
        quote:
          "Wenn jemand zu euch kommt, dessen Glaube und Charakter euch gefallen, dann verheiratet ihn. Tut ihr das nicht, wird es Unruhe auf der Erde und große Verderbnis geben.",
        attribution: "Überliefert von Al-Tirmidhi",
      },
      {
        quote:
          "Drei Menschen haben ein Anrecht auf Gottes Hilfe: derjenige, der heiratet, um Keuschheit zu bewahren.",
        attribution: "Überliefert von Al-Tirmidhi, für authentisch erklärt von Al-Albani",
      },
    ],
    reasons: [
      {
        title: "Armut Verhindert die Ehe Nicht",
        description:
          "Gott hat für die Ehe keinen Reichtum verlangt. Vielmehr hat Er ausdrücklich versprochen, diejenigen zu bereichern, die die Ehe aus Tugend anstreben. Wer die Ehe hinauszögert und auf finanzielle Perfektion wartet, verzögert einen Segen, den Gott selbst garantiert hat.",
      },
      {
        title: "Glaube und Charakter Sind das Fundament",
        description:
          "Reichtum kommt und geht, und Status steigt und fällt, doch Glaube und Charakter sind es, die ein Zuhause bauen. Wer einen Partner allein nach weltlichen Maßstäben wählt, baut auf Sand; wer nach dem Glauben wählt, baut auf Fels.",
      },
      {
        title: "Einfachheit Ist die Quelle des Segens",
        description:
          "Je mehr du den Weg zu einer halal-konformen Ehe erleichterst, desto mehr Türen, die du nie erwartet hättest, öffnen sich vor dir. Ein bescheidener Anfang ist kein Mangel — er ist fruchtbarer Boden, auf dem Liebe und Barmherzigkeit wachsen.",
      },
      {
        title: "Die Ehe Ist Kein Finanzprojekt",
        description:
          "Wir haben die Ehe von einer einfachen Tradition zu einem Projekt gemacht, das Menschen erschöpft, noch bevor es beginnt. Die Initiative für Kluge Eheschließung bringt die Ehe zu ihrem Wesenskern zurück: eine Verbindung zwischen zwei Menschen, die Tugend und Stabilität suchen, kein Fest zur Bemessung des sozialen Status.",
      },
      {
        title: "Beginne mit Dem, Was Du Kannst, und Gott Wird den Rest Vollenden",
        description:
          "Warte nicht, bis du alles hast, bevor du dein Leben beginnst. Viele der glücklichsten Häuser begannen mit den einfachsten Mitteln, und viele der prunkvollsten Häuser sind von innen zusammengebrochen. Der Unterschied liegt in Absicht und Charakter.",
      },
    ],
  },
  messages: {
    eyebrow: "Botschaften der Initiative",
    title: "Ein Wort für Jeden von Euch",
    description:
      "Eine einfache Botschaft für alle, die einen Neuanfang im Leben und Stabilität suchen.",
    cards: [
      {
        title: "Eine Botschaft an Junge Männer",
        description:
          "Verschiebe die Ehe nicht, weil du finanziell noch nicht komplett bist. Beginne mit dem, was du kannst, sei ehrlich, bemühe dich, deine Situation zu verbessern, und du wirst feststellen, dass sich Türen des Guten für dich öffnen — denn die Ehe ist der Anfang von Stabilität und Segen.",
      },
      {
        title: "Eine Botschaft an Väter",
        description:
          "Deine Tochter braucht einen Mann, der Gott fürchtet in der Art, wie er sie behandelt, der ihre Würde bewahrt und über ihr Herz wacht. Geld kommt und geht, doch Charakter und Glaube bauen ein stabiles Zuhause. Wähle für sie jemanden, der sie mit Güte behandeln wird — das ist die wahre Garantie für ihr Glück.",
      },
      {
        title: "Eine Botschaft an Junge Frauen",
        description:
          "Mache aus der Ehe keine lange Liste materieller Bedingungen. Frage dich: Ist er ehrlich? Wird er mich respektieren? Kann ich mit ihm ein stabiles Leben aufbauen? Ein rechtschaffener Mann kann aus dem Nichts beginnen.",
      },
    ],
  },
  charter: {
    eyebrow: "Charta der Initiative",
    title:
      "Legt gemeinsam mit uns das Gelöbnis ab und schließt euch der Initiative für Kluge Eheschließung an, indem ihr dieser Charta zustimmt.",
    subtitle: "Charta der Klugen Eheschließung",
    items: [
      "Ich strebe danach, ein Leben aufzubauen, das auf Respekt und Verständnis beruht.",
      "Ich akzeptiere die Ehe mit einfachen Mitteln und einem realistischen Anfang.",
      "Ich verpflichte mich zur Ehrlichkeit in all meinen Angaben und Aussagen.",
      "Ich gelobe, dass mein Ziel in der Ehe Tugend und Stabilität ist.",
      "Ich glaube, dass Glaube und Charakter mehr zählen als Reichtum und Äußerlichkeiten.",
    ],
    photoAlt:
      "Braut und Bräutigam umarmen sich zur goldenen Stunde in einem grasbewachsenen Feuchtgebiet, ihr Schleier weht im Wind.",
  },
  companion: {
    eyebrow: "Über die Plattform Zefaaf",
    title: "Dein Begleiter auf dem Weg zur Halal-Eheschließung",
    description:
      "Zefaaf ist eine vertrauenswürdige islamische Heiratsplattform, die Muslimen ein sicheres Umfeld bietet, das Werte bewahrt und Familien stärkt, und dir hilft, mit smarten Tools und einer transparenten Erfahrung den richtigen Lebenspartner zu finden.",
    features: [
      {
        title: "Sicheres und Scharia-Konformes Umfeld",
        description:
          "Wir halten uns bei allen Interaktionen an islamische Richtlinien — keine beiläufigen Bekanntschaften oder Freundschaften.",
      },
      {
        title: "Durchgehende Unterstützung, 24/7",
        description:
          "Unser Team steht jederzeit zur Verfügung, um deine Fragen zu beantworten und dir die Begleitung zu bieten, die du brauchst.",
      },
      {
        title: "Spezialisierte Eheberatung",
        description:
          "Praktische Anleitung auf Grundlage islamischer Werte für den Aufbau einer glücklichen und dauerhaften Ehe.",
      },
      {
        title: "Weltweite Abdeckung",
        description:
          "Abdeckung aller Länder weltweit, um dir zu helfen, einen Lebenspartner zu finden, wo immer du bist.",
      },
      {
        title: "Beginne Jetzt Deine Reise mit Zefaaf",
        description:
          "Registriere dich kostenlos und schließe dich der Initiative für Kluge Eheschließung an. Die Registrierung ist kostenlos, und Nachrichten schreiben ist immer kostenlos.",
      },
    ],
    photoAlts: {
      mosque:
        "Eine Braut in weißem Hijab und Kleid und ein Bräutigam im schwarzen Smoking verrichten gemeinsam ein Dua in einer kunstvoll verzierten Moschee.",
      car: "Eine Braut in weißem Kleid und Schleier umarmt einen Bräutigam im schwarzen Smoking neben einem klassischen Oldtimer.",
    },
  },
};

const tr: SmartMarriageCopy = {
  hero: {
    title: "Akıllı Evlilik Girişimi",
    description:
      "İslam'da evlilik, israf ve masraf değil; fazilet ve huzur meselesidir. Eller dolana kadar bir yuva kurmayı beklerseniz, uzun süre bekleyebilirsiniz.",
    cta: "Evlilik Yolculuğunuza Başlayın",
    photoAlts: {
      cliff: "Turkuaz bir deniz ve dağlara bakan kayalık bir uçurumda poz veren bir çift; uzun beyaz eteği rüzgârda dalgalanırken adam kadını taşıyor.",
      lake: "Çam ağaçları ve dağlarla çevrili turkuaz bir dağ gölünün kenarında yüz yüze duran bir çift.",
      blossom: "Bir parkta çiçek açmış pembe bir kiraz ağacının altında sarılan bir çift.",
    },
  },
  nav: {
    items: [
      "Girişim Nedir",
      "Neden Akıllı Evlilik",
      "Akıllı Evlilik Girişiminin İslami Temeli",
      "Girişim Mesajları",
      "Girişim Şartı",
      "Zefaaf Hakkında",
    ],
  },
  intro: {
    eyebrow: "Neden Zefaaf'ı Seçiyorsunuz",
    title: "Akıllı Evlilik: Hayat İçin Yeni Bir Denklem",
    description:
      "Akıllı Evlilik Girişimi, Zefaaf platformunun önceliklerin yeniden sıralanması için yaptığı bilinçli bir çağrıdır. Görkemli düğün salonlarına, aşırı mehirlere ve gösterişli mücevherlere para harcamak yerine, bunu gerçek bir yuva ve sevgi ile merhametle dolu ortak bir hayat kurmaya yatırın.",
    photoAlt:
      "Bir sahilde arkadan fotoğraflanan bir çift; adam beyaz bir buket tutuyor, kadın akıcı pembemsi bir elbise ve başörtüsü takıyor, arka planda sisli kayalık bir burun var.",
  },
  why: {
    eyebrow: "Neden Akıllı Evlilik",
    description:
      "Çünkü toplum evliliği, dinin yüklemediği şartlarla ve bitmek bilmeyen beklentilerle öyle ağırlaştırdı ki milyonlarca genç için ulaşılmaz bir hayale dönüştü. Akıllı Evlilik Girişimi asıl soruları geri getiriyor: Neden evleniyoruz? Ve nasıl evlenmeliyiz?",
    cards: [
      {
        title: "Çünkü Doğru Ölçütü Din Koydu",
        paragraphs: [
          'Peygamber ﷺ "malına bakın" demedi, şöyle buyurdu: "Size dini ve ahlakından razı olduğunuz biri gelirse, onu evlendirin." Bu ölçüt değişmedi ve bunun üzerine kurulan yuvalar en sağlam ve en kalıcı olanlardır.',
        ],
      },
      {
        title: "Çünkü Görüntü Bir Yuva Kurmaz",
        paragraphs: [
          "Düğün gecesi biter, ama hayat ondan sonra başlar. Bir tek gecede mekânlara ve görünüşe harcanan, yıllarca sürecek gerçek bir yuvanın temelini atabilirdi.",
        ],
      },
      {
        title: "Çünkü Beklemenin Bir Bedeli Var",
        paragraphs: [
          '"Doğru zamanı" beklediğiniz her yıl, geçip giden bir hayat, ertelenen bir istikrar ve kaçırılan nimetlerdir. Bugün kolaylaştırmak, hiç gelmeyecek bir mükemmelliği beklemekten daha hayırlıdır.',
        ],
      },
      {
        title: "Çünkü Allah İffet Arayanlara Yardım Etmeyi Vadetti",
        paragraphs: [
          '"Üç kişinin yardımı Allah üzerine bir haktır: İffetini korumak isteyerek evlenen kişi." Bu ilahi vaat banka hesabı istemez — samimi bir niyet ve temiz bir kalp ister.',
        ],
      },
      {
        title: "Çünkü Mütevazı Bir Başlangıç Utanç Değildir",
        paragraphs: [
          "En mutlu yuvalar maddi zenginlikle değil, dürüstlükle başladı.",
          "İmkânlar zamanla gelişir ve rızık genişler, ama sabit kalan şey ahlak ve niyettir.",
        ],
      },
    ],
  },
  banner: {
    title: "Akıllı Evlilik",
    description:
      "Evlilik hayatının temeline yapılan bir yatırımdır; geleneksel evlilik ise görünüşe yapılan aşırı harcamadır.",
    photoAlt:
      "Işık dolu bir camide, süslü ahşap bir minberin yanında birlikte namaz kılan bir çift.",
  },
  foundation: {
    eyebrow: "Akıllı Evlilik Girişiminin İslami Temeli",
    title:
      "Akıllı evlilik modern bir fikir değildir — İslam'ın 1.400 yılı aşkın süredir teşvik ettiği şeydir.",
    citations: [
      {
        quote:
          "İçinizden bekârları, kölelerinizden ve cariyelerinizden salih olanları evlendirin. Eğer fakir iseler, Allah onları kendi lütfundan zengin kılar. Allah, lütfu geniş olandır, hakkıyla bilendir.",
        attribution: "Nur Suresi — 32. Ayet",
      },
      {
        quote:
          "Size dini ve ahlakından razı olduğunuz biri gelirse, onu evlendirin. Eğer böyle yapmazsanız, yeryüzünde fitne ve büyük bir bozulma olur.",
        attribution: "Tirmizi'nin rivayeti",
      },
      {
        quote:
          "Üç kişinin yardımı Allah üzerine bir haktır: İffetini korumak isteyerek evlenen kişi.",
        attribution: "Tirmizi'nin rivayeti, Albani tarafından sahih kabul edilmiştir",
      },
    ],
    reasons: [
      {
        title: "Fakirlik Evliliğe Engel Değildir",
        description:
          "Allah evlilik için zenginlik şartı koşmadı. Aksine, iffetini korumak amacıyla evliliği arayanları zengin kılacağını açıkça vadetti. Mali mükemmelliği bekleyerek evliliği erteleyen kişi, bizzat Allah'ın garanti ettiği bir nimeti ertelemiş olur.",
      },
      {
        title: "Din ve Ahlak Temeldir",
        description:
          "Zenginlik gelir gider, statü yükselir düşer, ama bir yuvayı kuran şey din ve ahlaktır. Eşini yalnızca dünyevi ölçütlerle seçen kum üzerine, dinini esas alarak seçen ise kaya üzerine inşa eder.",
      },
      {
        title: "Sadelik Bereketin Kaynağıdır",
        description:
          "Helal bir evliliğin yolunu ne kadar kolaylaştırırsanız, hiç beklemediğiniz o kadar çok kapı önünüzde açılır. Mütevazı bir başlangıç bir eksiklik değildir — sevgi ve merhametin yeşerdiği verimli bir topraktır.",
      },
      {
        title: "Evlilik Mali Bir Proje Değildir",
        description:
          "Evliliği kolay bir gelenek olmaktan çıkarıp, daha başlamadan insanları tüketen bir projeye dönüştürdük. Akıllı Evlilik Girişimi, evliliği özüne geri döndürür: sosyal statüyü ölçen bir tören değil, fazilet ve istikrar arayan iki kişi arasındaki bir bağ.",
      },
      {
        title: "Elinizdekiyle Başlayın, Gerisini Allah Tamamlar",
        description:
          "Hayatınıza başlamak için her şeye sahip olmayı beklemeyin. En mutlu yuvaların birçoğu en sade imkânlarla başladı ve en gösterişli yuvaların birçoğu içeriden çöktü. Fark, niyette ve ahlaktadır.",
      },
    ],
  },
  messages: {
    eyebrow: "Girişim Mesajları",
    title: "Her Birinize Bir Söz",
    description:
      "Hayatta yeni bir başlangıç ve istikrar arayan herkese basit bir mesaj.",
    cards: [
      {
        title: "Genç Erkeklere Mesaj",
        description:
          "Maddi olarak tam anlamıyla hazır değilsiniz diye evliliği ertelemeyin. Elinizdekiyle başlayın, dürüst olun, durumunuzu iyileştirmek için çabalayın; göreceksiniz ki hayır kapıları önünüze açılacak — çünkü evlilik, istikrarın ve bereketin başlangıcıdır.",
      },
      {
        title: "Babalara Mesaj",
        description:
          "Kızınızın, ona davranışında Allah'tan korkan, onurunu koruyan ve kalbini gözeten bir erkeğe ihtiyacı var. Para gelir gider, ama ahlak ve din istikrarlı bir yuva kurar. Onun için ona iyi davranacak birini seçin — mutluluğunun gerçek güvencesi budur.",
      },
      {
        title: "Genç Kadınlara Mesaj",
        description:
          "Evliliği maddi şartların uzun bir listesine dönüştürmeyin. Kendinize sorun: Dürüst mü? Bana saygı duyacak mı? Onunla istikrarlı bir hayat kurabilir miyim? Salih bir erkek hiçbir şeyden başlayabilir.",
      },
    ],
  },
  charter: {
    eyebrow: "Girişim Şartı",
    title:
      "Bizimle söz verin ve bu şarta uyarak Akıllı Evlilik Girişimi'ne katılın.",
    subtitle: "Akıllı Evlilik Şartı",
    items: [
      "Saygı ve anlayışa dayalı bir hayat kurmaya çalışıyorum.",
      "Sade imkânlarla ve gerçekçi bir başlangıçla evliliği kabul ediyorum.",
      "Tüm bilgi ve beyanlarımda dürüst olmayı taahhüt ediyorum.",
      "Evlilikteki amacımın fazilet ve istikrar olduğuna söz veriyorum.",
      "Din ve ahlakın, zenginlik ve görünüşten daha önemli olduğuna inanıyorum.",
    ],
    photoAlt:
      "Altın saatte otlu bir sulak alanda sarılan bir gelin ve damat; gelinin duvağı rüzgârda dalgalanıyor.",
  },
  companion: {
    eyebrow: "Zefaaf Platformu Hakkında",
    title: "Helal Evlilik Yolunda Yol Arkadaşınız",
    description:
      "Zefaaf, Müslümanlara değerleri koruyan ve aileleri güçlendiren güvenli bir ortam sunan, akıllı araçlar ve şeffaf bir deneyimle doğru hayat arkadaşını bulmanıza yardımcı olan güvenilir bir İslami evlilik platformudur.",
    features: [
      {
        title: "Güvenli ve Şeriata Uygun Ortam",
        description:
          "Tüm etkileşimlerde İslami ilkelere bağlıyız — gündelik tanışıklık veya arkadaşlık yoktur.",
      },
      {
        title: "7/24 Kesintisiz Destek",
        description:
          "Ekibimiz sorularınızı yanıtlamak ve ihtiyacınız olan rehberliği sağlamak için her zaman hazır.",
      },
      {
        title: "Uzman Evlilik Danışmanlığı",
        description:
          "Mutlu ve kalıcı bir evlilik kurmak için İslami değerlere dayalı pratik rehberlik.",
      },
      {
        title: "Küresel Kapsama",
        description:
          "Nerede olursanız olun hayat arkadaşınızı bulmanıza yardımcı olmak için dünya çapında tüm ülkeleri kapsıyoruz.",
      },
      {
        title: "Yolculuğunuza Zefaaf ile Şimdi Başlayın",
        description:
          "Ücretsiz kaydolun ve Akıllı Evlilik Girişimi'ne katılın. Kayıt ücretsizdir ve mesajlaşma her zaman ücretsizdir.",
      },
    ],
    photoAlts: {
      mosque:
        "Beyaz başörtülü ve gelinlikli bir gelin ile siyah smokinli bir damadın süslü bir camide birlikte dua etmesi.",
      car: "Beyaz gelinlik ve duvaklı bir gelinin, klasik bir antika arabanın yanında siyah smokinli bir damada sarılması.",
    },
  },
};

const ru: SmartMarriageCopy = {
  hero: {
    title: "Инициатива «Разумный Брак»",
    description:
      "Брак в исламе — это добродетель и спокойствие, а не роскошь и расходы. Если вы ждёте, пока ваши руки не наполнятся, чтобы построить дом, ждать можно очень долго.",
    cta: "Начните Свой Путь к Браку",
    photoAlts: {
      cliff: "Пара позирует на скалистом утёсе с видом на бирюзовое море и горы, мужчина держит на руках женщину, а её длинная белая юбка развевается на ветру.",
      lake: "Пара стоит лицом к лицу у бирюзового горного озера, окружённого соснами и горами.",
      blossom: "Пара обнимается под цветущей розовой сакурой в парке.",
    },
  },
  nav: {
    items: [
      "Что Такое Инициатива",
      "Почему Разумный Брак",
      "Исламская Основа Инициативы «Разумный Брак»",
      "Послания Инициативы",
      "Хартия Инициативы",
      "О Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Почему Вы Выбираете Zefaaf",
    title: "Разумный Брак: Новое Уравнение для Жизни",
    description:
      "Инициатива «Разумный Брак» — это осознанный призыв платформы Zefaaf пересмотреть приоритеты. Вместо того чтобы тратить деньги на роскошные банкетные залы, чрезмерный махр и дорогие украшения, вложите их в создание настоящего дома и совместной жизни, полной любви и милосердия.",
    photoAlt:
      "Пара сфотографирована со спины на пляже: мужчина держит белый букет, женщина в развевающемся розовом платье и хиджабе, на фоне туманный скалистый мыс.",
  },
  why: {
    eyebrow: "Почему Разумный Брак",
    description:
      "Потому что общество обременило брак условиями, которых не требует вера, и бесконечными ожиданиями, пока он не превратился для миллионов молодых людей в недостижимую мечту. Инициатива «Разумный Брак» возвращает главные вопросы: зачем мы вступаем в брак? И как нам следует это делать?",
    cards: [
      {
        title: "Потому что Вера Установила Правильный Критерий",
        paragraphs: [
          'Пророк ﷺ не сказал смотреть на его богатство, а сказал: «Если к вам придёт тот, чья религиозность и нрав вас устраивают, выдайте её за него замуж». Этот критерий не изменился, и дома, построенные на нём, самые прочные и долговечные.',
        ],
      },
      {
        title: "Потому что Внешний Блеск Не Строит Дом",
        paragraphs: [
          "Брачная ночь заканчивается, но жизнь начинается после неё. То, что тратится за одну ночь на залы и внешний блеск, могло бы заложить основу настоящего дома на долгие годы.",
        ],
      },
      {
        title: "Потому что у Ожидания Есть Цена",
        paragraphs: [
          'Каждый год ожидания «подходящего момента» — это год уходящей жизни, отложенной стабильности и упущенных благ. Облегчить путь сегодня лучше, чем ждать совершенства, которое никогда не наступит.',
        ],
      },
      {
        title: "Потому что Аллах Обещал Помочь Ищущим Добродетель",
        paragraphs: [
          '«Трое имеют право на помощь Аллаха: тот, кто вступает в брак, стремясь сохранить целомудрие». Это божественное обещание не требует банковского счёта — оно требует искреннего намерения и чистого сердца.',
        ],
      },
      {
        title: "Потому что Скромное Начало — Не Позор",
        paragraphs: [
          "Самые счастливые семьи начинались не с материального богатства, а с честности.",
          "Возможности развиваются со временем, и удел расширяется, но неизменными остаются нрав и намерение.",
        ],
      },
    ],
  },
  banner: {
    title: "Разумный Брак",
    description:
      "Это вложение в основу семейной жизни, тогда как традиционный брак — чрезмерные траты на внешний блеск.",
    photoAlt:
      "Пара молится вместе в залитой солнцем мечети с резным деревянным минбаром.",
  },
  foundation: {
    eyebrow: "Исламская Основа Инициативы «Разумный Брак»",
    title:
      "Разумный брак — это не современная идея, а то, к чему ислам призывает уже более 1400 лет.",
    citations: [
      {
        quote:
          "Устраивайте браки одиноких из вас и праведных из числа ваших рабов и рабынь. Если они бедны, то Аллах обогатит их из Своей милости. Аллах — Объемлющий, Знающий.",
        attribution: "Сура «Ан-Нур» — Аят 32",
      },
      {
        quote:
          "Если к вам придёт тот, чья религиозность и нрав вас устраивают, выдайте её за него замуж. Если вы не сделаете этого, на земле возникнут смута и великий разврат.",
        attribution: "Передано Ат-Тирмизи",
      },
      {
        quote:
          "Трое имеют право на помощь Аллаха: тот, кто вступает в брак, стремясь сохранить целомудрие.",
        attribution: "Передано Ат-Тирмизи, признано достоверным Аль-Албани",
      },
    ],
    reasons: [
      {
        title: "Бедность Не Препятствует Браку",
        description:
          "Аллах не требовал богатства для вступления в брак. Напротив, Он ясно обещал обогатить тех, кто стремится к браку ради добродетели. Тот, кто откладывает брак в ожидании финансового совершенства, откладывает благо, которое гарантировал Сам Аллах.",
      },
      {
        title: "Вера и Нрав — Это Основа",
        description:
          "Богатство приходит и уходит, положение растёт и падает, но именно вера и нрав строят дом. Кто выбирает спутника лишь по мирским меркам, строит на песке; кто выбирает по вере — строит на камне.",
      },
      {
        title: "Простота — Источник Благодати",
        description:
          "Чем больше вы облегчаете путь к дозволенному браку, тем больше дверей, которых вы никогда не ожидали, откроется перед вами. Скромное начало — не изъян, а плодородная почва, на которой прорастают любовь и милосердие.",
      },
      {
        title: "Брак — Это Не Финансовый Проект",
        description:
          "Мы превратили брак из простой традиции в проект, изматывающий людей ещё до его начала. Инициатива «Разумный Брак» возвращает браку его суть: связь между двумя людьми, ищущими добродетель и стабильность, а не торжество для измерения социального статуса.",
      },
      {
        title: "Начните с Того, Что у Вас Есть, а Остальное Довершит Аллах",
        description:
          "Не ждите, пока у вас будет всё, чтобы начать свою жизнь. Многие из самых счастливых семей начинали с самых простых средств, а многие из самых роскошных рушились изнутри. Разница заключается в намерении и нраве.",
      },
    ],
  },
  messages: {
    eyebrow: "Послания Инициативы",
    title: "Слово для Каждого из Вас",
    description:
      "Простое послание для всех, кто ищет новое начало в жизни и стабильность.",
    cards: [
      {
        title: "Послание Юношам",
        description:
          "Не откладывайте брак только потому, что вы ещё не обеспечены материально. Начните с того, что у вас есть, будьте честны, стремитесь улучшить своё положение — и вы увидите, как перед вами открываются двери блага, ведь брак — это начало стабильности и благодати.",
      },
      {
        title: "Послание Отцам",
        description:
          "Вашей дочери нужен мужчина, который боится Аллаха в том, как он с ней обращается, сохраняет её достоинство и оберегает её сердце. Деньги приходят и уходят, но именно нрав и вера строят стабильный дом. Выберите для неё того, кто будет обращаться с ней с добротой, — это истинная гарантия её счастья.",
      },
      {
        title: "Послание Девушкам",
        description:
          "Не превращайте брак в длинный список материальных условий. Спросите себя: честен ли он? Будет ли он уважать меня? Смогу ли я построить с ним стабильную жизнь? Праведный мужчина может начать с нуля.",
      },
    ],
  },
  charter: {
    eyebrow: "Хартия Инициативы",
    title:
      "Дайте обещание вместе с нами и присоединитесь к Инициативе «Разумный Брак», согласившись с этой хартией.",
    subtitle: "Хартия Разумного Брака",
    items: [
      "Я стремлюсь построить жизнь, основанную на уважении и понимании.",
      "Я принимаю брак со скромными средствами и реалистичным началом.",
      "Я обязуюсь быть честным во всех своих сведениях и заявлениях.",
      "Я обещаю, что моя цель в браке — добродетель и стабильность.",
      "Я верю, что вера и нрав важнее богатства и внешнего блеска.",
    ],
    photoAlt:
      "Жених и невеста обнимаются в золотой час на травянистом заболоченном лугу, её фата развевается на ветру.",
  },
  companion: {
    eyebrow: "О Платформе Zefaaf",
    title: "Ваш Спутник на Пути к Дозволенному Браку",
    description:
      "Zefaaf — это надёжная исламская платформа для заключения брака, предоставляющая мусульманам безопасную среду, сохраняющую ценности и укрепляющую семьи, помогая вам найти подходящего спутника жизни с помощью умных инструментов и прозрачного опыта.",
    features: [
      {
        title: "Безопасная и Соответствующая Шариату Среда",
        description:
          "Мы придерживаемся исламских принципов во всех взаимодействиях — никаких случайных знакомств и дружеских отношений.",
      },
      {
        title: "Круглосуточная Поддержка",
        description:
          "Наша команда всегда готова ответить на ваши вопросы и предоставить необходимое руководство.",
      },
      {
        title: "Специализированные Консультации по Браку",
        description:
          "Практическое руководство, основанное на исламских ценностях, для построения счастливого и прочного брака.",
      },
      {
        title: "Глобальный Охват",
        description:
          "Мы охватываем все страны мира, помогая вам найти спутника жизни, где бы вы ни находились.",
      },
      {
        title: "Начните Свой Путь с Zefaaf Прямо Сейчас",
        description:
          "Зарегистрируйтесь бесплатно и присоединяйтесь к Инициативе «Разумный Брак». Регистрация бесплатна, а переписка всегда бесплатна.",
      },
    ],
    photoAlts: {
      mosque:
        "Невеста в белом хиджабе и платье и жених в чёрном смокинге вместе читают дуа в богато украшенной мечети.",
      car: "Невеста в белом платье и фате обнимает жениха в чёрном смокинге рядом с классическим ретро-автомобилем.",
    },
  },
};

const id: SmartMarriageCopy = {
  hero: {
    title: "Inisiatif Pernikahan Cerdas",
    description:
      "Pernikahan dalam Islam adalah tentang kebajikan dan ketenteraman, bukan kemewahan dan biaya besar. Jika Anda menunggu hingga tangan penuh sebelum membangun rumah tangga, Anda mungkin akan menunggu sangat lama.",
    cta: "Mulai Perjalanan Pernikahan Anda",
    photoAlts: {
      cliff: "Sepasang kekasih berpose di tebing berbatu menghadap laut toska dan pegunungan, sang pria menggendong sang wanita sementara rok putihnya yang panjang berkibar tertiup angin.",
      lake: "Sepasang kekasih berdiri berhadapan di tepi danau alpine toska yang dikelilingi pohon pinus dan pegunungan.",
      blossom: "Sepasang kekasih berpelukan di bawah pohon sakura merah muda yang sedang mekar di sebuah taman.",
    },
  },
  nav: {
    items: [
      "Apa Itu Inisiatif Ini",
      "Mengapa Pernikahan Cerdas",
      "Landasan Islam dari Inisiatif Pernikahan Cerdas",
      "Pesan-Pesan Inisiatif",
      "Piagam Inisiatif",
      "Tentang Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Mengapa Anda Memilih Zefaaf",
    title: "Pernikahan Cerdas: Persamaan Baru untuk Kehidupan",
    description:
      "Inisiatif Pernikahan Cerdas adalah seruan yang disadari dari platform Zefaaf untuk menata ulang prioritas. Alih-alih menghabiskan uang untuk gedung pernikahan yang mewah, mahar yang berlebihan, dan perhiasan yang mencolok, investasikan itu untuk membangun rumah tangga yang sesungguhnya dan kehidupan bersama yang penuh cinta dan kasih sayang.",
    photoAlt:
      "Sepasang kekasih difoto dari belakang di pantai, sang pria membawa buket bunga putih, sang wanita mengenakan gaun merah muda pucat yang mengalir dan hijab, dengan tanjung berbatu berkabut di latar belakang.",
  },
  why: {
    eyebrow: "Mengapa Pernikahan Cerdas",
    description:
      "Karena masyarakat telah membebani pernikahan dengan syarat-syarat yang tidak diwajibkan oleh agama, serta ekspektasi tanpa akhir, hingga pernikahan menjadi impian yang tak terjangkau bagi jutaan anak muda. Inisiatif Pernikahan Cerdas mengembalikan pertanyaan yang sesungguhnya: Mengapa kita menikah? Dan bagaimana seharusnya kita menikah?",
    cards: [
      {
        title: "Karena Agama Telah Menetapkan Standar yang Benar",
        paragraphs: [
          'Nabi ﷺ tidak bersabda untuk melihat hartanya, melainkan bersabda: "Jika datang kepadamu seseorang yang engkau ridai agama dan akhlaknya, maka nikahkanlah dia." Standar ini tidak berubah, dan rumah tangga yang dibangun di atasnya adalah yang paling kokoh dan langgeng.',
        ],
      },
      {
        title: "Karena Penampilan Tidak Membangun Rumah Tangga",
        paragraphs: [
          "Malam pernikahan berakhir, tetapi kehidupan justru dimulai setelahnya. Apa yang dihabiskan dalam satu malam untuk tempat dan penampilan bisa saja membangun rumah tangga sesungguhnya yang bertahan selama bertahun-tahun.",
        ],
      },
      {
        title: "Karena Menunggu Ada Harganya",
        paragraphs: [
          'Setiap tahun Anda menunggu "waktu yang tepat" adalah setahun kehidupan yang berlalu, kestabilan yang tertunda, dan keberkahan yang terlewat. Memudahkan sesuatu hari ini lebih baik daripada kesempurnaan yang tak pernah datang.',
        ],
      },
      {
        title: "Karena Allah Berjanji Menolong Mereka yang Mencari Kebajikan",
        paragraphs: [
          '"Ada tiga golongan yang berhak mendapat pertolongan Allah: orang yang menikah karena ingin menjaga kesucian dirinya." Janji ilahi ini tidak menuntut saldo bank — ia menuntut niat yang tulus dan hati yang bersih.',
        ],
      },
      {
        title: "Karena Awal yang Sederhana Bukanlah Aib",
        paragraphs: [
          "Rumah tangga paling bahagia tidak dimulai dengan kekayaan materi, melainkan dengan kejujuran.",
          "Kemampuan berkembang seiring waktu, dan rezeki pun meluas, tetapi akhlak dan niatlah yang tetap konstan.",
        ],
      },
    ],
  },
  banner: {
    title: "Pernikahan Cerdas",
    description:
      "Sebuah investasi dalam fondasi kehidupan berumah tangga, sementara pernikahan tradisional adalah pengeluaran berlebihan untuk penampilan.",
    photoAlt:
      "Sepasang kekasih berdoa bersama di masjid yang disinari cahaya matahari dengan mimbar kayu berukir indah.",
  },
  foundation: {
    eyebrow: "Landasan Islam dari Inisiatif Pernikahan Cerdas",
    title:
      "Pernikahan cerdas bukanlah gagasan modern — ini adalah apa yang telah dianjurkan Islam selama lebih dari 1.400 tahun.",
    citations: [
      {
        quote:
          "Dan nikahkanlah orang-orang yang masih membujang di antara kamu, dan juga orang-orang yang layak (menikah) dari hamba sahayamu yang laki-laki dan perempuan. Jika mereka miskin, Allah akan memberi kemampuan kepada mereka dengan karunia-Nya. Dan Allah Mahaluas (pemberian-Nya), Maha Mengetahui.",
        attribution: "Surah An-Nur — Ayat 32",
      },
      {
        quote:
          "Jika datang kepadamu seseorang yang engkau ridai agama dan akhlaknya, maka nikahkanlah dia. Jika tidak kamu lakukan, akan terjadi fitnah di muka bumi dan kerusakan yang besar.",
        attribution: "Diriwayatkan oleh Al-Tirmidzi",
      },
      {
        quote:
          "Ada tiga golongan yang berhak mendapat pertolongan Allah: orang yang menikah karena ingin menjaga kesucian dirinya.",
        attribution: "Diriwayatkan oleh Al-Tirmidzi, dinilai sahih oleh Al-Albani",
      },
    ],
    reasons: [
      {
        title: "Kemiskinan Tidak Menghalangi Pernikahan",
        description:
          "Allah tidak mensyaratkan kekayaan untuk menikah. Sebaliknya, Dia dengan tegas berjanji akan mengaruniai kekayaan kepada mereka yang menikah demi menjaga kebajikan. Siapa yang menunda pernikahan sambil menunggu kesempurnaan finansial, ia telah menunda berkah yang telah dijamin sendiri oleh Allah.",
      },
      {
        title: "Agama dan Akhlak adalah Fondasinya",
        description:
          "Harta datang dan pergi, kedudukan naik dan turun, tetapi agama dan akhlaklah yang membangun rumah tangga. Siapa yang memilih pasangan hanya berdasarkan standar duniawi, ia membangun di atas pasir; siapa yang memilih berdasarkan agama, ia membangun di atas batu karang.",
      },
      {
        title: "Kesederhanaan adalah Sumber Keberkahan",
        description:
          "Semakin Anda memudahkan jalan menuju pernikahan yang halal, semakin banyak pintu yang tidak pernah Anda duga akan terbuka di hadapan Anda. Awal yang sederhana bukanlah kekurangan — itu adalah tanah subur tempat cinta dan kasih sayang tumbuh.",
      },
      {
        title: "Pernikahan Bukanlah Proyek Finansial",
        description:
          "Kita telah mengubah pernikahan dari tradisi yang mudah menjadi proyek yang melelahkan orang bahkan sebelum dimulai. Inisiatif Pernikahan Cerdas mengembalikan pernikahan kepada hakikatnya: ikatan antara dua orang yang mencari kebajikan dan kestabilan, bukan pesta untuk mengukur status sosial.",
      },
      {
        title: "Mulailah dengan Apa yang Anda Mampu, dan Allah akan Menyempurnakan Sisanya",
        description:
          "Jangan menunggu memiliki segalanya sebelum memulai hidup Anda. Banyak rumah tangga paling bahagia dimulai dengan sarana paling sederhana, dan banyak rumah tangga paling gemerlap runtuh dari dalam. Perbedaannya terletak pada niat dan akhlak.",
      },
    ],
  },
  messages: {
    eyebrow: "Pesan-Pesan Inisiatif",
    title: "Sepatah Kata untuk Kalian Semua",
    description:
      "Sebuah pesan sederhana bagi setiap orang yang mencari awal baru dalam hidup dan kestabilan.",
    cards: [
      {
        title: "Pesan untuk Para Pemuda",
        description:
          "Jangan menunda pernikahan hanya karena Anda belum mapan secara finansial. Mulailah dengan apa yang Anda mampu, jujurlah, berusahalah memperbaiki keadaan Anda, dan Anda akan mendapati pintu-pintu kebaikan terbuka bagi Anda — karena pernikahan adalah awal dari kestabilan dan keberkahan.",
      },
      {
        title: "Pesan untuk Para Ayah",
        description:
          "Putri Anda membutuhkan seorang pria yang takut kepada Allah dalam caranya memperlakukannya, yang menjaga kehormatannya dan merawat hatinya. Uang datang dan pergi, tetapi akhlak dan agamalah yang membangun rumah tangga yang stabil. Pilihkan untuknya seseorang yang akan memperlakukannya dengan penuh kebaikan — itulah jaminan sesungguhnya bagi kebahagiaannya.",
      },
      {
        title: "Pesan untuk Para Pemudi",
        description:
          "Jangan menjadikan pernikahan sebagai daftar panjang syarat materi. Tanyakan pada diri sendiri: Apakah dia jujur? Akankah dia menghormati saya? Bisakah saya membangun kehidupan yang stabil bersamanya? Pria yang saleh bisa memulai dari nol.",
      },
    ],
  },
  charter: {
    eyebrow: "Piagam Inisiatif",
    title:
      "Berikrarlah bersama kami dan bergabunglah dengan Inisiatif Pernikahan Cerdas dengan menyetujui piagam ini.",
    subtitle: "Piagam Pernikahan Cerdas",
    items: [
      "Saya berusaha membangun kehidupan yang berlandaskan rasa hormat dan saling pengertian.",
      "Saya menerima pernikahan dengan sarana yang sederhana dan awal yang realistis.",
      "Saya berkomitmen untuk jujur dalam semua informasi dan pernyataan saya.",
      "Saya berikrar bahwa tujuan saya dalam menikah adalah kebajikan dan kestabilan.",
      "Saya percaya bahwa agama dan akhlak lebih berarti daripada kekayaan dan penampilan.",
    ],
    photoAlt:
      "Pengantin pria dan wanita berpelukan di saat golden hour di lahan basah berumput, kerudungnya berkibar tertiup angin.",
  },
  companion: {
    eyebrow: "Tentang Platform Zefaaf",
    title: "Pendamping Anda di Jalan Menuju Pernikahan Halal",
    description:
      "Zefaaf adalah platform pernikahan Islami tepercaya yang menyediakan lingkungan aman bagi umat Muslim, yang menjaga nilai-nilai dan memperkuat keluarga, membantu Anda menemukan pasangan hidup yang tepat melalui alat yang cerdas dan pengalaman yang transparan.",
    features: [
      {
        title: "Lingkungan yang Aman dan Sesuai Syariat",
        description:
          "Kami berkomitmen pada pedoman Islami dalam setiap interaksi — tidak ada perkenalan atau pertemanan yang bersifat santai.",
      },
      {
        title: "Dukungan Berkelanjutan 24/7",
        description:
          "Tim kami selalu siap menjawab pertanyaan Anda dan memberikan bimbingan yang Anda butuhkan.",
      },
      {
        title: "Konsultasi Pernikahan Khusus",
        description:
          "Bimbingan praktis berdasarkan nilai-nilai Islam untuk membangun pernikahan yang bahagia dan langgeng.",
      },
      {
        title: "Jangkauan Global",
        description:
          "Menjangkau seluruh negara di dunia untuk membantu Anda menemukan pasangan hidup di mana pun Anda berada.",
      },
      {
        title: "Mulai Perjalanan Anda Sekarang Bersama Zefaaf",
        description:
          "Daftar secara gratis dan bergabunglah dengan Inisiatif Pernikahan Cerdas. Pendaftaran gratis, dan pengiriman pesan selalu gratis.",
      },
    ],
    photoAlts: {
      mosque:
        "Seorang pengantin wanita berhijab dan bergaun putih serta pengantin pria bertuksedo hitam berdoa bersama di dalam masjid yang berhiaskan indah.",
      car: "Seorang pengantin wanita bergaun putih dan berkerudung memeluk pengantin pria bertuksedo hitam di samping mobil klasik antik.",
    },
  },
};

const zh: SmartMarriageCopy = {
  hero: {
    title: "智慧婚姻倡议",
    description:
      "伊斯兰教中的婚姻关乎美德与安宁，而非奢华与花费。如果你要等到双手满载之后才建立家庭，恐怕要等待很久。",
    cta: "开启你的婚姻之旅",
    photoAlts: {
      cliff: "一对情侣站在俯瞰绿松石色大海与群山的岩石悬崖上摆拍，男子抱着女子，她飘逸的白色长裙在风中飞扬。",
      lake: "一对情侣在被松树和群山环绕的绿松石色高山湖畔相对而立。",
      blossom: "一对情侣在公园里盛开的粉色樱花树下拥抱。",
    },
  },
  nav: {
    items: [
      "倡议简介",
      "为何选择智慧婚姻",
      "智慧婚姻倡议的伊斯兰根基",
      "倡议寄语",
      "倡议宪章",
      "关于 Zefaaf",
    ],
  },
  intro: {
    eyebrow: "你为何选择 Zefaaf",
    title: "智慧婚姻：人生的全新方程式",
    description:
      "智慧婚姻倡议是 Zefaaf 平台发出的一项自觉呼吁，旨在重新排列人生的优先次序。与其将金钱花在奢华的婚礼宴会厅、过度的聘礼和铺张的珠宝上，不如将其投入到建立一个真正的家庭，以及一段充满爱与慈悯的共同生活之中。",
    photoAlt:
      "一对情侣在海滩上被从背后拍摄，男子手持一束白色花束，女子身着飘逸的浅粉色礼服并佩戴头巾，背景是雾气缭绕的岩石海角。",
  },
  why: {
    eyebrow: "为何选择智慧婚姻",
    description:
      "因为社会给婚姻附加了信仰并未要求的条件，以及无止境的期望，以至于对数百万年轻人而言，婚姻已成为遥不可及的梦想。智慧婚姻倡议重新唤起了真正的问题：我们为何结婚？我们又应当如何结婚？",
    cards: [
      {
        title: "因为信仰确立了正确的标准",
        paragraphs: [
          "先知（愿主福安之）并未说要看他的财富，而是说：「若有人前来求婚，其宗教信仰与品行使你满意，那就应当将女儿嫁给他。」这一标准从未改变，建立在其上的家庭最为稳固持久。",
        ],
      },
      {
        title: "因为外在排场无法建立家庭",
        paragraphs: [
          "婚礼之夜终会落幕，而生活却从此刻真正开始。在一夜之间花在场地与排场上的钱，本可以为一个持续数年的真正家庭奠定基础。",
        ],
      },
      {
        title: "因为等待是有代价的",
        paragraphs: [
          "每一年为等待「合适的时机」而蹉跎，都是流逝的生命、被推迟的安稳与错失的福泽。今日的从简，胜过永远不会到来的完美。",
        ],
      },
      {
        title: "因为真主承诺帮助寻求贞洁之人",
        paragraphs: [
          "「有三种人理应得到真主的援助：为保持贞洁而结婚的人。」这一神圣的应许并不要求殷实的银行存款——它所要求的，是真诚的意念与纯洁的心。",
        ],
      },
      {
        title: "因为简朴的开始并非耻辱",
        paragraphs: [
          "最幸福的家庭并非始于物质的富足，而是始于诚实。",
          "能力会随时间发展，生计也会随之拓展，但品行与意念才是恒久不变的。",
        ],
      },
    ],
  },
  banner: {
    title: "智慧婚姻",
    description:
      "这是对婚姻生活根基的投资，而传统婚姻则是在外在排场上的过度花费。",
    photoAlt: "一对情侣在阳光洒满的清真寺内，于一座雕饰精美的木质敏拜尔旁一同礼拜。",
  },
  foundation: {
    eyebrow: "智慧婚姻倡议的伊斯兰根基",
    title: "智慧婚姻并非现代的理念——这是伊斯兰教一千四百多年来始终倡导的做法。",
    citations: [
      {
        quote:
          "你们当为你们中的独身男女主持婚礼，也当为你们的善良的奴婢主持婚礼。如果他们是贫穷的，真主将以他的恩惠使他们富裕。真主是宽宏的，是全知的。",
        attribution: "《光明》章 — 第32节",
      },
      {
        quote:
          "若有人前来求婚，其宗教信仰与品行使你满意，那就应当将女儿嫁给他。若不这样做，大地上将会出现纷乱与严重的败坏。",
        attribution: "提尔米济传述",
      },
      {
        quote: "有三种人理应得到真主的援助：为保持贞洁而结婚的人。",
        attribution: "提尔米济传述，艾勒巴尼判定为可信",
      },
    ],
    reasons: [
      {
        title: "贫穷并不妨碍婚姻",
        description:
          "真主并未要求结婚必须先有财富。相反，祂明确应许要使那些为追求美德而寻求婚姻的人变得富裕。凡是为等待财务上的完美而推迟婚姻者，实际上是在推迟一份真主亲自担保的恩惠。",
      },
      {
        title: "信仰与品行才是根基",
        description:
          "财富来来去去，地位起起落落，而真正建立起一个家庭的，是信仰与品行。仅凭世俗标准选择伴侣的人，是建立在沙土之上；凭信仰选择的人，则是建立在磐石之上。",
      },
      {
        title: "简朴是恩泽的源泉",
        description:
          "你越是为通往合法（哈拉勒）婚姻的道路提供便利，就有越多你从未预料到的大门会为你敞开。简朴的开始并非缺陷，而是让爱与慈悯得以生长的沃土。",
      },
      {
        title: "婚姻不是一项财务工程",
        description:
          "我们把婚姻从一项简单的传统变成了一个尚未开始就让人身心俱疲的工程。智慧婚姻倡议让婚姻回归其本质：两个寻求美德与安稳之人之间的结合，而非用来衡量社会地位的一场宴席。",
      },
      {
        title: "以你所能拥有的开始，其余的交由真主成全",
        description:
          "不要等到拥有一切之后才开始你的生活。许多最幸福的家庭都是以最简朴的条件起步的，而许多最风光的家庭却在内部悄然崩塌。差别就在于意念与品行。",
      },
    ],
  },
  messages: {
    eyebrow: "倡议寄语",
    title: "写给你们每一个人的话",
    description: "献给每一位在生活中寻求全新开始与安稳的人的一句简单寄语。",
    cards: [
      {
        title: "致青年男子",
        description:
          "不要因为经济上尚未完全充裕就推迟婚姻。以你所能拥有的开始，做到诚实，努力改善自己的处境，你会发现善的大门为你敞开——因为婚姻正是安稳与恩泽的开端。",
      },
      {
        title: "致为人父者",
        description:
          "你的女儿需要一个在对待她时敬畏真主的男子，一个维护她尊严、守护她心灵的人。金钱来去无常，唯有品行与信仰才能建立一个稳固的家庭。为她选择一个会善待她的人——这才是她幸福的真正保障。",
      },
      {
        title: "致青年女子",
        description:
          "不要把婚姻变成一长串物质条件的清单。问问自己：他诚实吗？他会尊重我吗？我能与他一起建立稳定的生活吗？一个正直的男子，即便一无所有，也可以从零开始。",
      },
    ],
  },
  charter: {
    eyebrow: "倡议宪章",
    title: "与我们一同许下承诺，通过认同这份宪章加入智慧婚姻倡议。",
    subtitle: "智慧婚姻宪章",
    items: [
      "我努力建立一段以尊重与理解为基础的生活。",
      "我接受以简朴的条件和务实的开端步入婚姻。",
      "我承诺在我提供的所有信息与陈述中做到诚实。",
      "我承诺我结婚的目的是追求美德与安稳。",
      "我相信信仰与品行比财富与外在排场更为重要。",
    ],
    photoAlt: "一对新人在黄昏时分的一片长满青草的湿地中拥抱，新娘的头纱在风中飘扬。",
  },
  companion: {
    eyebrow: "关于 Zefaaf 平台",
    title: "你通往合法婚姻之路上的同伴",
    description:
      "Zefaaf 是一个值得信赖的伊斯兰婚姻平台，为穆斯林提供一个维护价值观、巩固家庭的安全环境，通过智能工具与透明的体验，帮助你找到合适的人生伴侣。",
    features: [
      {
        title: "安全且符合伊斯兰教法的环境",
        description: "我们在所有互动中坚守伊斯兰准则——不存在随意的相识或交友关系。",
      },
      {
        title: "全天候持续支持",
        description: "我们的团队随时待命，为你解答问题并提供所需的指导。",
      },
      {
        title: "专业的婚姻建议",
        description: "基于伊斯兰价值观的实用指导，助你建立幸福持久的婚姻。",
      },
      {
        title: "全球覆盖",
        description: "服务遍及全球各国，无论你身处何地，都能帮助你找到人生伴侣。",
      },
      {
        title: "现在就与 Zefaaf 一同启程",
        description: "免费注册，加入智慧婚姻倡议。注册免费，发送消息也始终免费。",
      },
    ],
    photoAlts: {
      mosque: "一位身着白色头巾与礼服的新娘与一位身穿黑色礼服的新郎，在一座装饰精美的清真寺内一同做都阿。",
      car: "一位身穿白色礼服并佩戴头纱的新娘，在一辆经典老爷车旁拥抱身穿黑色礼服的新郎。",
    },
  },
};

const bn: SmartMarriageCopy = {
  hero: {
    title: "স্মার্ট বিবাহ উদ্যোগ",
    description:
      "ইসলামে বিবাহ হলো পবিত্রতা ও প্রশান্তির বিষয়, বিলাসিতা ও ব্যয়ের নয়। যদি আপনি হাত পূর্ণ না হওয়া পর্যন্ত সংসার গড়ার অপেক্ষা করেন, তবে হয়তো দীর্ঘকাল অপেক্ষা করতে হতে পারে।",
    cta: "আপনার বিবাহযাত্রা শুরু করুন",
    photoAlts: {
      cliff: "একটি দম্পতি ফিরোজা রঙের সমুদ্র ও পাহাড়ের দৃশ্যমান একটি পাথুরে পাহাড়ের কিনারায় ছবি তুলছেন, পুরুষটি নারীটিকে কোলে তুলে ধরেছেন এবং তার লম্বা সাদা স্কার্ট বাতাসে উড়ছে।",
      lake: "পাইন গাছ ও পাহাড়ে ঘেরা একটি ফিরোজা রঙের আল্পাইন হ্রদের পাশে একটি দম্পতি মুখোমুখি দাঁড়িয়ে আছেন।",
      blossom: "একটি পার্কে ফুটে থাকা গোলাপি চেরি ব্লসম গাছের নিচে একটি দম্পতি আলিঙ্গনরত।",
    },
  },
  nav: {
    items: [
      "উদ্যোগটি কী",
      "কেন স্মার্ট বিবাহ",
      "স্মার্ট বিবাহ উদ্যোগের ইসলামি ভিত্তি",
      "উদ্যোগের বার্তা",
      "উদ্যোগের সনদ",
      "জেফাফ সম্পর্কে",
    ],
  },
  intro: {
    eyebrow: "কেন আপনি জেফাফ বেছে নেবেন",
    title: "স্মার্ট বিবাহ: জীবনের জন্য এক নতুন সমীকরণ",
    description:
      "স্মার্ট বিবাহ উদ্যোগ হলো জেফাফ প্ল্যাটফর্মের একটি সচেতন আহ্বান, যা অগ্রাধিকারগুলো নতুন করে সাজাতে চায়। জাঁকজমকপূর্ণ বিবাহ হল, অতিরিক্ত মোহরানা এবং বাহুল্যপূর্ণ গয়নার পেছনে অর্থ ব্যয় করার পরিবর্তে, তা একটি প্রকৃত সংসার এবং ভালোবাসা ও দয়ায় পূর্ণ একসাথে জীবনযাপনে বিনিয়োগ করুন।",
    photoAlt:
      "একটি সৈকতে পেছন থেকে তোলা একটি দম্পতির ছবি, পুরুষটি একগুচ্ছ সাদা ফুল হাতে ধরে আছেন, নারীটি একটি প্রবাহিত হালকা গোলাপি গাউন ও হিজাব পরিহিত, পটভূমিতে কুয়াশাচ্ছন্ন পাথুরে অন্তরীপ।",
  },
  why: {
    eyebrow: "কেন স্মার্ট বিবাহ",
    description:
      "কারণ সমাজ বিবাহের উপর এমন সব শর্ত ও অন্তহীন প্রত্যাশা চাপিয়ে দিয়েছে, যা দ্বীন কখনো আরোপ করেনি, ফলে লক্ষ লক্ষ তরুণ-তরুণীর কাছে তা এক অধরা স্বপ্নে পরিণত হয়েছে। স্মার্ট বিবাহ উদ্যোগ প্রকৃত প্রশ্নগুলো ফিরিয়ে আনে: আমরা কেন বিবাহ করি? এবং কীভাবে বিবাহ করা উচিত?",
    cards: [
      {
        title: "কারণ দ্বীন সঠিক মানদণ্ড নির্ধারণ করেছে",
        paragraphs: [
          "নবী ﷺ বলেননি যে তার সম্পদের দিকে দেখো, বরং বলেছেন: \"যদি এমন কেউ তোমাদের কাছে বিবাহের প্রস্তাব নিয়ে আসে যার দ্বীনদারি ও চরিত্রে তোমরা সন্তুষ্ট, তবে তার সাথে বিবাহ দাও।\" এই মানদণ্ড কখনো বদলায়নি, এবং এর ভিত্তিতে গড়া সংসারই সবচেয়ে স্থিতিশীল ও দীর্ঘস্থায়ী।",
        ],
      },
      {
        title: "কারণ বাহ্যিক জাঁকজমক সংসার গড়ে না",
        paragraphs: [
          "বাসর রাত শেষ হয়ে যায়, কিন্তু জীবন শুরু হয় তার পরেই। একটি মাত্র রাতে ভেন্যু ও জাঁকজমকের পেছনে যা ব্যয় হয়, তা দিয়ে বছরের পর বছর টিকে থাকা একটি প্রকৃত সংসারের ভিত্তি স্থাপন করা যেত।",
        ],
      },
      {
        title: "কারণ অপেক্ষার একটা মূল্য আছে",
        paragraphs: [
          "\"সঠিক সময়ের\" জন্য অপেক্ষা করা প্রতিটি বছর মানে জীবনের একটি বছর হারিয়ে যাওয়া, স্থিতিশীলতা বিলম্বিত হওয়া, এবং বরকত হাতছাড়া হওয়া। আজ বিষয়টি সহজ করে ফেলা এমন এক পরিপূর্ণতার চেয়ে ভালো, যা কখনো আসে না।",
        ],
      },
      {
        title: "কারণ আল্লাহ পবিত্রতা অন্বেষণকারীদের সাহায্যের প্রতিশ্রুতি দিয়েছেন",
        paragraphs: [
          "\"তিন ব্যক্তির আল্লাহর সাহায্য পাওয়ার অধিকার রয়েছে: যে ব্যক্তি নিজেকে পবিত্র রাখার উদ্দেশ্যে বিবাহ করে।\" এই ঐশী প্রতিশ্রুতির জন্য ব্যাংক ব্যালেন্স প্রয়োজন হয় না — প্রয়োজন হয় একনিষ্ঠ নিয়ত ও পবিত্র হৃদয়ের।",
        ],
      },
      {
        title: "কারণ সাধারণ সূচনা কোনো লজ্জার বিষয় নয়",
        paragraphs: [
          "সবচেয়ে সুখী সংসারগুলো বস্তুগত সম্পদ দিয়ে শুরু হয়নি, বরং সততা দিয়ে শুরু হয়েছিল।",
          "সময়ের সাথে সাথে সামর্থ্য বিকশিত হয় এবং রিজিক প্রসারিত হয়, কিন্তু চরিত্র ও নিয়তই হলো তা যা অপরিবর্তিত থাকে।",
        ],
      },
    ],
  },
  banner: {
    title: "স্মার্ট বিবাহ",
    description:
      "এটি দাম্পত্য জীবনের ভিত্তিতে একটি বিনিয়োগ, যেখানে প্রচলিত বিবাহ হলো বাহ্যিক জাঁকজমকে অতিরিক্ত ব্যয়।",
    photoAlt: "সূর্যালোকিত একটি মসজিদে অলংকৃত কাঠের মিম্বারের পাশে একসাথে নামাজ পড়ছেন একটি দম্পতি।",
  },
  foundation: {
    eyebrow: "স্মার্ট বিবাহ উদ্যোগের ইসলামি ভিত্তি",
    title:
      "স্মার্ট বিবাহ কোনো আধুনিক ধারণা নয় — এটি এমন কিছু যা ইসলাম ১,৪০০ বছরেরও বেশি সময় ধরে উৎসাহিত করে আসছে।",
    citations: [
      {
        quote:
          "আর তোমরা তোমাদের মধ্যকার অবিবাহিতদের এবং তোমাদের দাস-দাসীদের মধ্যে যোগ্যদের বিবাহ দাও। তারা দরিদ্র হলে আল্লাহ তাঁর অনুগ্রহে তাদের অভাবমুক্ত করে দেবেন। আর আল্লাহ প্রাচুর্যময়, সর্বজ্ঞ।",
        attribution: "সূরা আন-নূর — আয়াত ৩২",
      },
      {
        quote:
          "যদি এমন কেউ তোমাদের কাছে বিবাহের প্রস্তাব নিয়ে আসে যার দ্বীনদারি ও চরিত্রে তোমরা সন্তুষ্ট, তবে তার সাথে বিবাহ দাও। যদি তা না করো, তবে পৃথিবীতে ফিতনা ও বিরাট বিপর্যয় দেখা দেবে।",
        attribution: "বর্ণনায় আত-তিরমিযি",
      },
      {
        quote: "তিন ব্যক্তির আল্লাহর সাহায্য পাওয়ার অধিকার রয়েছে: যে ব্যক্তি নিজেকে পবিত্র রাখার উদ্দেশ্যে বিবাহ করে।",
        attribution: "বর্ণনায় আত-তিরমিযি, আল-আলবানি কর্তৃক সহীহ বলে সাব্যস্ত",
      },
    ],
    reasons: [
      {
        title: "দারিদ্র্য বিবাহে বাধা নয়",
        description:
          "আল্লাহ বিবাহের জন্য সম্পদের শর্ত রাখেননি। বরং তিনি স্পষ্টভাবে প্রতিশ্রুতি দিয়েছেন যে, যারা পবিত্রতা অন্বেষণ করে বিবাহ করে, তিনি তাদের সচ্ছল করে দেবেন। যে ব্যক্তি আর্থিক পরিপূর্ণতার অপেক্ষায় বিবাহ পিছিয়ে দেয়, সে এমন এক বরকত পিছিয়ে দেয় যা খোদ আল্লাহ নিশ্চিত করেছেন।",
      },
      {
        title: "দ্বীন ও চরিত্রই মূল ভিত্তি",
        description:
          "সম্পদ আসে ও যায়, মর্যাদা উঠে ও নামে, কিন্তু দ্বীন ও চরিত্রই একটি সংসার গড়ে তোলে। যে শুধু জাগতিক মানদণ্ডে সঙ্গী নির্বাচন করে, সে বালুর উপর গড়ে তোলে; যে দ্বীনের ভিত্তিতে নির্বাচন করে, সে পাথরের উপর গড়ে তোলে।",
      },
      {
        title: "সরলতাই বরকতের উৎস",
        description:
          "আপনি হালাল বিবাহের পথ যত সহজ করবেন, ততই এমন সব দুয়ার আপনার সামনে খুলে যাবে যা আপনি কখনো প্রত্যাশা করেননি। সাধারণ সূচনা কোনো ঘাটতি নয় — এটি এমন উর্বর ভূমি যেখানে ভালোবাসা ও দয়া বেড়ে ওঠে।",
      },
      {
        title: "বিবাহ কোনো আর্থিক প্রকল্প নয়",
        description:
          "আমরা বিবাহকে একটি সহজ ঐতিহ্য থেকে এমন এক প্রকল্পে পরিণত করেছি, যা শুরু হওয়ার আগেই মানুষকে ক্লান্ত করে ফেলে। স্মার্ট বিবাহ উদ্যোগ বিবাহকে তার প্রকৃত সারবস্তুতে ফিরিয়ে আনে: পবিত্রতা ও স্থিতিশীলতা অন্বেষণকারী দুই মানুষের মধ্যকার বন্ধন, সামাজিক মর্যাদা পরিমাপের কোনো অনুষ্ঠান নয়।",
      },
      {
        title: "যা আছে তা দিয়েই শুরু করুন, বাকিটা আল্লাহ পূর্ণ করবেন",
        description:
          "জীবন শুরু করার আগে সবকিছু থাকার অপেক্ষা করবেন না। সবচেয়ে সুখী সংসারগুলোর অনেকই শুরু হয়েছিল সবচেয়ে সাধারণ উপকরণ দিয়ে, আর সবচেয়ে জাঁকজমকপূর্ণ অনেক সংসার ভেতর থেকেই ভেঙে পড়েছে। পার্থক্যটা নিহিত রয়েছে নিয়ত ও চরিত্রে।",
      },
    ],
  },
  messages: {
    eyebrow: "উদ্যোগের বার্তা",
    title: "তোমাদের প্রত্যেকের জন্য একটি কথা",
    description: "জীবনে নতুন শুরু ও স্থিতিশীলতা অন্বেষণকারী প্রত্যেকের জন্য একটি সাধারণ বার্তা।",
    cards: [
      {
        title: "যুবকদের প্রতি বার্তা",
        description:
          "আর্থিকভাবে সম্পূর্ণ প্রস্তুত নও বলে বিবাহ পিছিয়ে দিও না। যা আছে তা দিয়েই শুরু করো, সৎ থাকো, নিজের অবস্থার উন্নতির চেষ্টা করো, তাহলে দেখবে কল্যাণের দুয়ার তোমার সামনে খুলে যাচ্ছে — কারণ বিবাহ হলো স্থিতিশীলতা ও বরকতের সূচনা।",
      },
      {
        title: "পিতাদের প্রতি বার্তা",
        description:
          "আপনার কন্যার এমন একজন পুরুষ প্রয়োজন, যে তার সাথে আচরণে আল্লাহকে ভয় করে, যে তার মর্যাদা রক্ষা করে ও তার হৃদয়ের যত্ন নেয়। অর্থ আসে ও যায়, কিন্তু চরিত্র ও দ্বীনই একটি স্থিতিশীল সংসার গড়ে তোলে। তার জন্য এমন কাউকে বেছে নিন যে তার সাথে দয়া ও সদাচার করবে — এটাই তার সুখের প্রকৃত নিশ্চয়তা।",
      },
      {
        title: "যুবতীদের প্রতি বার্তা",
        description:
          "বিবাহকে বস্তুগত শর্তের এক দীর্ঘ তালিকায় পরিণত করো না। নিজেকে জিজ্ঞাসা করো: সে কি সৎ? সে কি আমাকে সম্মান করবে? আমি কি তার সাথে একটি স্থিতিশীল জীবন গড়তে পারব? একজন সৎ পুরুষ শূন্য থেকেই শুরু করতে পারে।",
      },
    ],
  },
  charter: {
    eyebrow: "উদ্যোগের সনদ",
    title: "আমাদের সাথে অঙ্গীকার করুন এবং এই সনদে সম্মত হয়ে স্মার্ট বিবাহ উদ্যোগে যোগ দিন।",
    subtitle: "স্মার্ট বিবাহ সনদ",
    items: [
      "আমি সম্মান ও পারস্পরিক বোঝাপড়ার ভিত্তিতে একটি জীবন গড়ার চেষ্টা করি।",
      "আমি সাধারণ উপকরণ ও বাস্তবসম্মত সূচনা নিয়ে বিবাহকে গ্রহণ করি।",
      "আমি আমার সকল তথ্য ও বিবৃতিতে সততা বজায় রাখার অঙ্গীকার করি।",
      "আমি অঙ্গীকার করি যে, বিবাহে আমার লক্ষ্য হলো পবিত্রতা ও স্থিতিশীলতা।",
      "আমি বিশ্বাস করি যে, দ্বীন ও চরিত্র সম্পদ ও বাহ্যিক জাঁকজমকের চেয়ে বেশি গুরুত্বপূর্ণ।",
    ],
    photoAlt:
      "সোনালি আলোর সময়ে একটি ঘাসেভরা জলাভূমিতে আলিঙ্গনরত একজন বর ও কনে, তার ওড়না বাতাসে উড়ছে।",
  },
  companion: {
    eyebrow: "জেফাফ প্ল্যাটফর্ম সম্পর্কে",
    title: "হালাল বিবাহের পথে আপনার সঙ্গী",
    description:
      "জেফাফ একটি বিশ্বস্ত ইসলামি বিবাহ প্ল্যাটফর্ম, যা মুসলিমদের একটি নিরাপদ পরিবেশ প্রদান করে যা মূল্যবোধ রক্ষা করে ও পরিবারকে শক্তিশালী করে, এবং স্মার্ট টুল ও স্বচ্ছ অভিজ্ঞতার মাধ্যমে আপনাকে সঠিক জীবনসঙ্গী খুঁজে পেতে সাহায্য করে।",
    features: [
      {
        title: "নিরাপদ ও শরিয়াসম্মত পরিবেশ",
        description: "আমরা সকল যোগাযোগে ইসলামি নির্দেশনা মেনে চলি — কোনো অনানুষ্ঠানিক পরিচয় বা বন্ধুত্ব নেই।",
      },
      {
        title: "২৪/৭ নিরবচ্ছিন্ন সহায়তা",
        description: "আমাদের দল সর্বদা আপনার প্রশ্নের উত্তর দিতে ও প্রয়োজনীয় দিকনির্দেশনা দিতে প্রস্তুত।",
      },
      {
        title: "বিশেষায়িত বিবাহ পরামর্শ",
        description: "একটি সুখী ও দীর্ঘস্থায়ী বিবাহ গড়ে তোলার জন্য ইসলামি মূল্যবোধের উপর ভিত্তি করে ব্যবহারিক দিকনির্দেশনা।",
      },
      {
        title: "বৈশ্বিক সংযোগ",
        description: "আপনি যেখানেই থাকুন না কেন, জীবনসঙ্গী খুঁজে পেতে সাহায্য করতে বিশ্বের সকল দেশ জুড়ে আমাদের সেবা বিস্তৃত।",
      },
      {
        title: "এখনই জেফাফের সাথে আপনার যাত্রা শুরু করুন",
        description: "বিনামূল্যে নিবন্ধন করুন এবং স্মার্ট বিবাহ উদ্যোগে যোগ দিন। নিবন্ধন বিনামূল্যে, এবং বার্তা প্রেরণ সবসময় বিনামূল্যে।",
      },
    ],
    photoAlts: {
      mosque:
        "সাদা হিজাব ও গাউন পরিহিত একজন কনে এবং কালো টাক্সিডো পরিহিত একজন বর একটি অলংকৃত মসজিদের ভেতরে একসাথে দুআ করছেন।",
      car: "সাদা গাউন ও ওড়না পরিহিত একজন কনে একটি ক্লাসিক পুরনো গাড়ির পাশে কালো টাক্সিডো পরিহিত বরকে আলিঙ্গন করছেন।",
    },
  },
};

const ta: SmartMarriageCopy = {
  hero: {
    title: "புத்திசாலித்தனமான திருமண முன்முயற்சி",
    description:
      "இஸ்லாத்தில் திருமணம் என்பது நல்லொழுக்கம் மற்றும் மன அமைதியைப் பற்றியதே தவிர, ஆடம்பரம் மற்றும் செலவுகளைப் பற்றியது அல்ல. ஒரு வீடு கட்டுவதற்கு முன் உங்கள் கைகள் நிரம்பும் வரை காத்திருந்தால், நீங்கள் நீண்ட காலம் காத்திருக்க நேரிடலாம்.",
    cta: "உங்கள் திருமண பயணத்தைத் தொடங்குங்கள்",
    photoAlts: {
      cliff:
        "ஒரு பாறை மலைமீது நீலப்பச்சை கடலையும் மலைகளையும் பார்த்தவாறு நிற்கும் ஜோடி, காற்றில் பறக்கும் நீண்ட வெள்ளை பாவாடையுடன் இருக்கும் பெண்ணை ஆண் தூக்கிக் கொண்டிருக்கிறார்.",
      lake: "தேவதாரு மரங்களும் மலைகளும் சூழ்ந்த நீலப்பச்சை மலை ஏரிக்கு அருகில் ஒருவரையொருவர் நேருக்கு நேர் பார்த்து நிற்கும் ஜோடி.",
      blossom: "பூங்காவில் மலர்ந்த இளஞ்சிவப்பு செர்ரி மலர் மரத்தடியில் கட்டியணைத்திருக்கும் ஜோடி.",
    },
  },
  nav: {
    items: [
      "முன்முயற்சி என்றால் என்ன",
      "ஏன் புத்திசாலித்தனமான திருமணம்",
      "புத்திசாலித்தனமான திருமண முன்முயற்சியின் இஸ்லாமிய அடிப்படை",
      "முன்முயற்சியின் செய்திகள்",
      "முன்முயற்சியின் சாசனம்",
      "Zefaaf பற்றி",
    ],
  },
  intro: {
    eyebrow: "நீங்கள் ஏன் Zefaaf-ஐ தேர்ந்தெடுக்கிறீர்கள்",
    title: "புத்திசாலித்தனமான திருமணம்: வாழ்க்கைக்கான புதிய சமன்பாடு",
    description:
      "புத்திசாலித்தனமான திருமண முன்முயற்சி என்பது முன்னுரிமைகளை மறுசீரமைக்குமாறு Zefaaf தளத்திலிருந்து வரும் ஒரு உணர்வுபூர்வமான அழைப்பாகும். ஆடம்பரமான திருமண மண்டபங்கள், அதிகப்படியான மஹர் மற்றும் ஆடம்பர நகைகளுக்குச் செலவழிப்பதற்குப் பதிலாக, அதை அன்பும் கருணையும் நிறைந்த உண்மையான வீடு மற்றும் பகிரப்பட்ட வாழ்க்கையை உருவாக்குவதில் முதலீடு செய்யுங்கள்.",
    photoAlt:
      "கடற்கரையில் பின்புறத்திலிருந்து புகைப்படம் எடுக்கப்பட்ட ஜோடி, ஆண் வெள்ளை மலர்க்கொத்தை ஏந்தியிருக்கிறார், பெண் ஓடும் இளஞ்சிவப்பு நிற கவுனும் ஹிஜாபும் அணிந்திருக்கிறார், பின்னணியில் மூடுபனி சூழ்ந்த பாறை மலை.",
  },
  why: {
    eyebrow: "ஏன் புத்திசாலித்தனமான திருமணம்",
    description:
      "ஏனெனில் சமூகம் திருமணத்தின் மீது நம்பிக்கை விதிக்காத நிபந்தனைகளையும் முடிவற்ற எதிர்பார்ப்புகளையும் சுமத்திவிட்டது, இதனால் அது மில்லியன் கணக்கான இளைஞர்களுக்கு அடையமுடியாத கனவாக மாறிவிட்டது. புத்திசாலித்தனமான திருமண முன்முயற்சி உண்மையான கேள்விகளை மீண்டும் கொண்டுவருகிறது: நாம் ஏன் திருமணம் செய்கிறோம்? எப்படி திருமணம் செய்ய வேண்டும்?",
    cards: [
      {
        title: "நம்பிக்கை சரியான தரத்தை நிர்ணயித்தது",
        paragraphs: [
          'நபிகள் நாயகம் ﷺ அவரது செல்வத்தைப் பாருங்கள் என்று சொல்லவில்லை, மாறாக: "மார்க்கமும் நற்பண்பும் நீங்கள் விரும்பும் ஒருவர் உங்களிடம் வந்தால், அவரை மணமுடித்துக் கொடுங்கள்" என்று கூறினார். இந்தத் தரம் மாறவில்லை, இதன் அடிப்படையில் கட்டப்பட்ட வீடுகளே மிகவும் உறுதியானவையாகவும் நீடித்திருப்பவையாகவும் இருக்கின்றன.',
        ],
      },
      {
        title: "தோற்றங்கள் ஒரு வீட்டைக் கட்டுவதில்லை",
        paragraphs: [
          "திருமண இரவு முடிவடைகிறது, ஆனால் அதற்குப் பிறகே வாழ்க்கை தொடங்குகிறது. ஒரே ஒரு இரவில் இடங்களுக்கும் தோற்றங்களுக்கும் செலவழிக்கப்படுவது, ஆண்டுக்கணக்கில் நீடிக்கும் ஒரு உண்மையான வீட்டை நிலைநிறுத்த முடியும்.",
        ],
      },
      {
        title: "காத்திருப்பதற்கு ஒரு விலை உண்டு",
        paragraphs: [
          '"சரியான நேரத்தை" எதிர்நோக்கி நீங்கள் காத்திருக்கும் ஒவ்வொரு ஆண்டும், கடந்துபோகும் ஒரு வாழ்க்கை ஆண்டு, தாமதமான ஸ்திரத்தன்மை, தவறவிடப்பட்ட அருள் ஆகும். இன்று எளிதாக்குவது, ஒருபோதும் வராத முழுமையை விட சிறந்தது.',
        ],
      },
      {
        title: "நல்லொழுக்கத்தை நாடுவோருக்கு உதவ அல்லாஹ் வாக்களித்துள்ளான்",
        paragraphs: [
          '"மூவருக்கு அல்லாஹ்வின் உதவி பெறுவது கடமையாகும்: பரிசுத்தத்தை நாடி மணமுடிப்பவர்." இந்த இறை வாக்குறுதிக்கு வங்கிக் கணக்கு தேவையில்லை — உண்மையான நோக்கமும் தூய்மையான இதயமும் தேவை.',
        ],
      },
      {
        title: "எளிமையான தொடக்கம் ஒரு அவமானமல்ல",
        paragraphs: [
          "மிகவும் மகிழ்ச்சியான வீடுகள் பொருள் செல்வத்துடன் தொடங்கவில்லை, நேர்மையுடன் தொடங்கின.",
          "திறமைகள் காலப்போக்கில் வளர்கின்றன, வாழ்வாதாரமும் விரிவடைகிறது, ஆனால் நற்பண்பும் நோக்கமும் மாறாமல் நிலைத்திருப்பவை.",
        ],
      },
    ],
  },
  banner: {
    title: "புத்திசாலித்தனமான திருமணம்",
    description:
      "திருமண வாழ்க்கையின் அடித்தளத்தில் ஒரு முதலீடு, மரபுவழி திருமணமோ தோற்றங்களுக்கான அதீத செலவினமாகும்.",
    photoAlt: "அலங்கரிக்கப்பட்ட மரத் தூண்களுடன் கூடிய சூரிய ஒளி நிறைந்த மசூதியில் ஒன்றாக தொழுகை நடத்தும் ஜோடி.",
  },
  foundation: {
    eyebrow: "புத்திசாலித்தனமான திருமண முன்முயற்சியின் இஸ்லாமிய அடிப்படை",
    title:
      "புத்திசாலித்தனமான திருமணம் ஒரு நவீன கருத்தல்ல — இது 1,400 ஆண்டுகளுக்கும் மேலாக இஸ்லாம் ஊக்குவித்து வருவதாகும்.",
    citations: [
      {
        quote:
          "உங்களில் மணமாகாதவர்களுக்கும், உங்கள் அடிமைகளில் நல்லொழுக்கமுடையவர்களுக்கும் திருமணம் செய்து வையுங்கள். அவர்கள் ஏழைகளாக இருப்பின், அல்லாஹ் தன் அருளால் அவர்களைச் செல்வராக்குவான். அல்லாஹ் விசாலமானவன், நன்கறிந்தவன்.",
        attribution: "அல்-நூர் அத்தியாயம் — வசனம் 32",
      },
      {
        quote:
          "உங்களிடம் மார்க்கமும் நற்பண்பும் நீங்கள் விரும்பும் ஒருவர் வந்தால், அவருக்கு மணமுடித்துக் கொடுங்கள். இல்லையெனில், பூமியில் குழப்பமும் பெரும் குரோதமும் ஏற்படும்.",
        attribution: "அறிவிப்பவர்: அல்-திர்மிதீ",
      },
      {
        quote: "மூவருக்கு அல்லாஹ்வின் உதவி கடமையாகும்: பரிசுத்தத்தை நாடி மணமுடிப்பவர்.",
        attribution: "அறிவிப்பவர்: அல்-திர்மிதீ, அல்-அல்பானி உறுதிப்படுத்தியது",
      },
    ],
    reasons: [
      {
        title: "வறுமை திருமணத்தைத் தடுக்காது",
        description:
          "அல்லாஹ் திருமணத்திற்கு செல்வத்தை நிபந்தனையாக வைக்கவில்லை. மாறாக, நல்லொழுக்கத்தை நாடி திருமணம் செய்பவர்களை செல்வராக்குவதாக அவன் தெளிவாக வாக்களித்துள்ளான். நிதி முழுமைக்காகக் காத்திருந்து திருமணத்தைத் தாமதிப்பவர், அல்லாஹ் தானே உறுதியளித்த ஒரு அருளைத் தாமதப்படுத்திவிட்டார்.",
      },
      {
        title: "நம்பிக்கையும் நற்பண்பும் அடித்தளமாகும்",
        description:
          "செல்வம் வந்தும் போகும், அந்தஸ்தும் உயர்ந்தும் தாழ்ந்தும் இருக்கும், ஆனால் நம்பிக்கையும் நற்பண்புமே வீட்டைக் கட்டுகின்றன. உலகியல் தரங்களை மட்டும் வைத்து துணையைத் தேர்ந்தெடுப்பவர் மணலின் மேல் கட்டுகிறார்; நம்பிக்கையின் அடிப்படையில் தேர்ந்தெடுப்பவர் பாறையின் மேல் கட்டுகிறார்.",
      },
      {
        title: "எளிமையே அருளின் ஆதாரம்",
        description:
          "ஹலால் திருமணத்திற்கான வழியை நீங்கள் எவ்வளவு எளிதாக்குகிறீர்களோ, அவ்வளவு எதிர்பாராத கதவுகள் உங்கள் முன் திறக்கும். ஒரு எளிய தொடக்கம் குறையல்ல — அது அன்பும் கருணையும் வளரும் வளமான நிலம்.",
      },
      {
        title: "திருமணம் ஒரு நிதி திட்டமல்ல",
        description:
          "ஒரு எளிய பாரம்பரியமாக இருந்த திருமணத்தை, தொடங்குவதற்கு முன்பே மக்களை சோர்வடையச் செய்யும் திட்டமாக நாம் மாற்றிவிட்டோம். புத்திசாலித்தனமான திருமண முன்முயற்சி, திருமணத்தை அதன் மூலகருத்திற்குத் திருப்பி அனுப்புகிறது: நல்லொழுக்கத்தையும் ஸ்திரத்தன்மையையும் நாடும் இருவருக்கிடையேயான பிணைப்பு, சமூக அந்தஸ்தை அளவிடும் விழாவல்ல.",
      },
      {
        title: "உங்களால் இயன்றதிலிருந்து தொடங்குங்கள், மீதியை அல்லாஹ் நிறைவேற்றுவான்",
        description:
          "வாழ்க்கையைத் தொடங்குவதற்கு முன் எல்லாம் இருக்கும் வரை காத்திருக்க வேண்டாம். மிகவும் மகிழ்ச்சியான பல வீடுகள் மிக எளிய வழிமுறைகளுடன் தொடங்கின, மிகவும் ஆடம்பரமான பல வீடுகள் உள்ளிருந்தே சரிந்தன. வித்தியாசம் நோக்கத்திலும் நற்பண்பிலும் தான் உள்ளது.",
      },
    ],
  },
  messages: {
    eyebrow: "முன்முயற்சியின் செய்திகள்",
    title: "உங்கள் ஒவ்வொருவருக்கும் ஒரு வார்த்தை",
    description: "வாழ்க்கையில் புதிய தொடக்கத்தையும் ஸ்திரத்தன்மையையும் நாடும் அனைவருக்குமான ஒரு எளிய செய்தி.",
    cards: [
      {
        title: "இளைஞர்களுக்கு ஒரு செய்தி",
        description:
          "நீங்கள் நிதி ரீதியாக முழுமையடையவில்லை என்பதற்காக திருமணத்தை தள்ளிப் போடாதீர்கள். உங்களால் இயன்றதிலிருந்து தொடங்குங்கள், நேர்மையாக இருங்கள், உங்கள் நிலையை மேம்படுத்த முயற்சி செய்யுங்கள், நன்மையின் கதவுகள் உங்களுக்குத் திறக்கப்படுவதைக் காண்பீர்கள் — ஏனெனில் திருமணம் ஸ்திரத்தன்மையின் மற்றும் அருளின் தொடக்கம்.",
      },
      {
        title: "தந்தையர்களுக்கு ஒரு செய்தி",
        description:
          "உங்கள் மகளுக்கு, அவளை நடத்தும் விதத்தில் அல்லாஹ்வுக்கு அஞ்சும், அவள் கண்ணியத்தைக் காக்கும், அவள் இதயத்தைப் பாதுகாக்கும் ஒரு மனிதன் தேவை. பணம் வந்தும் போகும், ஆனால் நற்பண்பும் நம்பிக்கையும் ஸ்திரமான வீட்டைக் கட்டுகின்றன. அவளிடம் இரக்கத்துடன் நடந்துகொள்பவரைத் தேர்ந்தெடுங்கள் — அதுவே அவளது மகிழ்ச்சிக்கான உண்மையான உத்தரவாதம்.",
      },
      {
        title: "இளம் பெண்களுக்கு ஒரு செய்தி",
        description:
          "திருமணத்தை பொருள் நிபந்தனைகளின் நீண்ட பட்டியலாக மாற்றாதீர்கள். உங்களையே கேளுங்கள்: அவர் நேர்மையானவரா? அவர் என்னை மதிப்பாரா? அவருடன் நான் ஒரு ஸ்திரமான வாழ்க்கையைக் கட்ட முடியுமா? ஒரு நல்லொழுக்கமுள்ள மனிதன் ஒன்றுமில்லாமல் தொடங்கியிருக்கலாம்.",
      },
    ],
  },
  charter: {
    eyebrow: "முன்முயற்சியின் சாசனம்",
    title: "இந்த சாசனத்தை ஏற்று, எங்களுடன் இணைந்து புத்திசாலித்தனமான திருமண முன்முயற்சியில் சேருங்கள்.",
    subtitle: "புத்திசாலித்தனமான திருமண சாசனம்",
    items: [
      "மரியாதை மற்றும் புரிதலின் அடிப்படையில் ஒரு வாழ்க்கையைக் கட்ட நான் முயற்சிக்கிறேன்.",
      "எளிய வழிமுறைகளுடனும் யதார்த்தமான தொடக்கத்துடனும் திருமணத்தை நான் ஏற்றுக்கொள்கிறேன்.",
      "எனது தகவல்கள் மற்றும் கூற்றுகள் அனைத்திலும் நேர்மையாக இருக்க நான் உறுதியளிக்கிறேன்.",
      "திருமணத்தில் எனது இலக்கு நல்லொழுக்கமும் ஸ்திரத்தன்மையுமே என நான் உறுதிமொழிகிறேன்.",
      "செல்வம் மற்றும் தோற்றங்களை விட நம்பிக்கையும் நற்பண்பும் முக்கியமானவை என நான் நம்புகிறேன்.",
    ],
    photoAlt:
      "புல் நிறைந்த ஈரநிலப் பகுதியில் பொன்னிற வேளையில் கட்டியணைத்திருக்கும் மணமகளும் மணமகனும், அவளது முக்காடு காற்றில் பறக்கிறது.",
  },
  companion: {
    eyebrow: "Zefaaf தளத்தைப் பற்றி",
    title: "ஹலால் திருமணப் பாதையில் உங்கள் தோழன்",
    description:
      "Zefaaf என்பது முஸ்லிம்களுக்கு மதிப்புகளைப் பாதுகாக்கும், குடும்பங்களை பலப்படுத்தும் பாதுகாப்பான சூழலை வழங்கும் நம்பகமான இஸ்லாமிய திருமணத் தளமாகும், புத்திசாலித்தனமான கருவிகள் மற்றும் வெளிப்படையான அனுபவத்தின் மூலம் சரியான வாழ்க்கைத் துணையைக் கண்டறிய உங்களுக்கு உதவுகிறது.",
    features: [
      {
        title: "பாதுகாப்பான மற்றும் ஷரீஆவிற்கு இணங்கிய சூழல்",
        description: "அனைத்து தொடர்புகளிலும் நாங்கள் இஸ்லாமிய வழிகாட்டுதல்களைக் கடைப்பிடிக்கிறோம் — சாதாரண அறிமுகங்களோ நட்புகளோ இல்லை.",
      },
      {
        title: "24/7 தொடர்ச்சியான ஆதரவு",
        description: "உங்கள் கேள்விகளுக்குப் பதிலளிக்கவும் தேவையான வழிகாட்டுதலை வழங்கவும் எங்கள் குழு எப்போதும் தயாராக உள்ளது.",
      },
      {
        title: "சிறப்பு திருமண ஆலோசனை",
        description: "மகிழ்ச்சியான, நீடித்த திருமணத்தை நிறுவுவதற்கான இஸ்லாமிய மதிப்புகள் அடிப்படையிலான நடைமுறை வழிகாட்டுதல்.",
      },
      {
        title: "உலகளாவிய சேவை",
        description: "நீங்கள் எங்கிருந்தாலும் வாழ்க்கைத் துணையைக் கண்டறிய உதவும் வகையில் உலகம் முழுவதும் உள்ள அனைத்து நாடுகளையும் உள்ளடக்கியது.",
      },
      {
        title: "Zefaaf உடன் இப்போதே உங்கள் பயணத்தைத் தொடங்குங்கள்",
        description: "இலவசமாக பதிவு செய்து புத்திசாலித்தனமான திருமண முன்முயற்சியில் இணையுங்கள். பதிவு இலவசம், செய்தி அனுப்புவதும் எப்போதும் இலவசம்.",
      },
    ],
    photoAlts: {
      mosque: "வெள்ளை ஹிஜாபும் கவுனும் அணிந்த மணமகளும் கருப்பு டக்சிடோ அணிந்த மணமகனும் அலங்கரிக்கப்பட்ட மசூதிக்குள் ஒன்றாக துஆ செய்கிறார்கள்.",
      car: "வெள்ளை கவுனும் முக்காடும் அணிந்த மணமகள் ஒரு பழம்பெரும் கிளாசிக் காருக்கு அருகில் கருப்பு டக்சிடோ அணிந்த மணமகனைத் தழுவுகிறாள்.",
    },
  },
};

const am: SmartMarriageCopy = {
  hero: {
    title: "ብልህ ትዳር ተነሳሽነት",
    description:
      "በእስልምና ውስጥ ትዳር ስለ በጎነትና ስለ መረጋጋት እንጂ ስለ ድሎትና ስለ ወጪ አይደለም። ቤት ከመመስረትዎ በፊት እጅዎ እስኪሞላ ድረስ ከጠበቁ፣ ለረጅም ጊዜ መጠበቅ ሊኖርብዎት ይችላል።",
    cta: "የትዳር ጉዞዎን ይጀምሩ",
    photoAlts: {
      cliff:
        "ባልና ሚስት በአለት ገደል ላይ ቆመው ሰማያዊ አረንጓዴ ባህርንና ተራሮችን ሲመለከቱ፣ ወንዱ ረጅም ነጭ ቀሚሷ በነፋስ የሚውለበለብባትን ሴት ተሸክሟል።",
      lake: "ባልና ሚስት በጥድ ዛፎችና ተራሮች በተከበበ ሰማያዊ አረንጓዴ ተራራማ ሐይቅ አጠገብ ፊት ለፊት ተያይተው ቆመዋል።",
      blossom: "ባልና ሚስት በፓርክ ውስጥ በሚያብብ ሮዝ የቼሪ አበባ ዛፍ ስር ተቃቅፈዋል።",
    },
  },
  nav: {
    items: [
      "ተነሳሽነቱ ምንድን ነው",
      "ለምን ብልህ ትዳር",
      "የብልህ ትዳር ተነሳሽነት እስላማዊ መሠረት",
      "የተነሳሽነቱ መልእክቶች",
      "የተነሳሽነቱ ቃል ኪዳን",
      "ስለ Zefaaf",
    ],
  },
  intro: {
    eyebrow: "ለምን Zefaaf-ን ይመርጣሉ",
    title: "ብልህ ትዳር፦ ለሕይወት አዲስ ስሌት",
    description:
      "የብልህ ትዳር ተነሳሽነት ቅድሚያ የሚሰጣቸውን ነገሮች እንደገና ለማደራጀት ከZefaaf መድረክ የሚመጣ ንቁ ጥሪ ነው። በድሎት ላይ በተመሰረቱ የሠርግ አዳራሾች፣ ከልክ ያለፈ መህርና ድሎታዊ ጌጣጌጦች ላይ ገንዘብ ከማባከን ይልቅ፣ በፍቅርና በምሕረት የተሞላ እውነተኛ ቤትና የጋራ ሕይወት ለመገንባት ኢንቨስት ያድርጉ።",
    photoAlt:
      "ከጀርባ በባህር ዳርቻ ላይ የተነሱ ባልና ሚስት፣ ወንዱ ነጭ የአበባ ዘንግ ይዟል፣ ሴቷ ተንሳፋፊ ሮዝ ቀለም ያለው ቀሚስና ሂጃብ ለብሳለች፣ በጭጋግ የተሸፈነ የአለት ራስ መሬት ከበስተጀርባ ይታያል።",
  },
  why: {
    eyebrow: "ለምን ብልህ ትዳር",
    description:
      "ምክንያቱም ማህበረሰቡ በእምነት ያልተጣለበትን ሁኔታና ማለቂያ የሌለውን ተስፋ በትዳር ላይ ጭኖታል፣ በዚህም ለሚሊዮን ወጣቶች የማይደረስ ህልም ሆኗል። የብልህ ትዳር ተነሳሽነት እውነተኛዎቹን ጥያቄዎች ይመልሳል፦ ለምን እናገባለን? እንዴትስ ማግባት አለብን?",
    cards: [
      {
        title: "እምነት ትክክለኛውን መስፈርት ስላስቀመጠ",
        paragraphs: [
          'ነቢዩ ﷺ ሀብቱን ተመልከቱ አላሉም፣ ይልቁንም፦ "ሃይማኖቱንና ጠባዩን የምትወዱለት ሰው ወደ እናንተ ቢመጣ አጋቡት" ብለዋል። ይህ መስፈርት አልተለወጠም፣ በዚህ ላይ የተመሰረቱ ቤቶችም በጣም የተረጋጉና ዘላቂ ናቸው።',
        ],
      },
      {
        title: "ገጽታዎች ቤት ስለማይገነቡ",
        paragraphs: [
          "የሠርግ ምሽት ያበቃል፣ ነገር ግን ሕይወት ከዚያ በኋላ ትጀምራለች። በአንድ ምሽት ላይ ለቦታዎችና ለገጽታዎች የሚወጣው ወጪ፣ ለዓመታት የሚዘልቅ እውነተኛ ቤት ሊያቋቁም ይችል ነበር።",
        ],
      },
      {
        title: "መጠበቅ ዋጋ ስላለው",
        paragraphs: [
          '"ትክክለኛውን ጊዜ" እየጠበቁ የሚያልፍ እያንዳንዱ ዓመት፣ የሚያልፍ የሕይወት ዓመት፣ የዘገየ መረጋጋትና የታለፈ በረከት ነው። ዛሬ ነገሮችን ማቅለል፣ ፈጽሞ ከማይመጣ ፍጽምና ይሻላል።',
        ],
      },
      {
        title: "አላህ በጎነትን ለሚፈልጉ እርዳታ እንደሚሰጥ ስለ ቃል ገባ",
        paragraphs: [
          '"ሦስት ሰዎች በአላህ ላይ እርዳታ የማግኘት መብት አላቸው፦ ንፅህናን ፈልጎ የሚያገባ ሰው።" ይህ መለኮታዊ ተስፋ የባንክ ሂሳብ አይጠይቅም — ቅን ሐሳብና ንጹህ ልብ ብቻ ነው የሚያስፈልገው።',
        ],
      },
      {
        title: "ትሁት ጅማሬ ውርደት ስላልሆነ",
        paragraphs: [
          "በጣም ደስተኛ የሆኑ ቤቶች የተጀመሩት በቁሳዊ ሀብት ሳይሆን በታማኝነት ነው።",
          "ችሎታዎች ከጊዜ ጋር ያድጋሉ፣ ሲሳይም ይሰፋል፣ ነገር ግን ጠባይና ሐሳብ ሳይለወጡ የሚቆዩት እነሱ ናቸው።",
        ],
      },
    ],
  },
  banner: {
    title: "ብልህ ትዳር",
    description: "በትዳር ሕይወት መሠረት ላይ የሚደረግ ኢንቨስትመንት፣ ባህላዊ ትዳር ግን በገጽታዎች ላይ ከልክ ያለፈ ወጪ ነው።",
    photoAlt: "ባልና ሚስት በጌጣጌጥ በተሰራ የእንጨት ሚንበር ባለው ፀሐይ በሚያበራ መስጊድ ውስጥ አብረው ሲጸልዩ።",
  },
  foundation: {
    eyebrow: "የብልህ ትዳር ተነሳሽነት እስላማዊ መሠረት",
    title: "ብልህ ትዳር ዘመናዊ ሐሳብ አይደለም — ከ1,400 ዓመታት በላይ እስልምና ሲያበረታታው የቆየ ነው።",
    citations: [
      {
        quote:
          "ከእናንተም ውስጥ ያላገቡትን፣ ከወንዶችና ከሴቶች ባሮቻችሁም መልካሞችን አጋቡ፤ ድሆች ቢሆኑ አላህ ከችሮታው ያከብራቸዋል፤ አላህም ሰፊ ችሮታ ያለው ዐዋቂ ነው።",
        attribution: "ሱረቱ አን-ኑር — አንቀጽ 32",
      },
      {
        quote:
          "ሃይማኖቱንና ጠባዩን የምትወዱለት ሰው ወደ እናንተ ቢመጣ አጋቡት፤ ካላደረጋችሁ በምድር ላይ ውዥንብርና ታላቅ ጥፋት ይከሰታል።",
        attribution: "በአት-ቲርሚዚ ተዘግቧል",
      },
      {
        quote: "ሦስት ሰዎች በአላህ ላይ እርዳታ የማግኘት መብት አላቸው፦ ንፅህናን ፈልጎ የሚያገባ ሰው።",
        attribution: "በአት-ቲርሚዚ ተዘግቧል፣ በአልባኒ ትክክለኛነቱ ተረጋግጧል",
      },
    ],
    reasons: [
      {
        title: "ድህነት ትዳርን አያግድም",
        description:
          "አላህ ለትዳር ሀብትን አልጠየቀም። ይልቁንም በጎነትን ፈልገው የሚያገቡትን በችሮታው እንደሚያከብር በግልጽ ቃል ገብቷል። የገንዘብ ፍጽምናን እየጠበቀ ትዳርን የሚያዘገይ ሰው፣ አላህ ራሱ ዋስትና የሰጠውን በረከት አዘግይቷል።",
      },
      {
        title: "እምነትና ጠባይ መሠረት ናቸው",
        description:
          "ሀብት ይመጣል ይሄዳል፣ ደረጃም ይወጣል ይወርዳል፣ ነገር ግን ቤት የሚገነቡት እምነትና ጠባይ ናቸው። በዓለማዊ መስፈርት ብቻ ጓደኛ የሚመርጥ በአሸዋ ላይ ይገነባል፤ በእምነት የሚመርጥ ግን በአለት ላይ ይገነባል።",
      },
      {
        title: "ቀላልነት የበረከት ምንጭ ነው",
        description:
          "ወደ ሐላል ትዳር የሚወስደውን መንገድ በቀለሉ መጠን፣ ያልጠበቋቸው በሮች ይከፈቱልዎታል። ትሁት ጅማሬ ጉድለት አይደለም — ፍቅርና ምሕረት የሚያድጉበት ለም መሬት ነው።",
      },
      {
        title: "ትዳር የገንዘብ ፕሮጀክት አይደለም",
        description:
          "ትዳርን ከቀላል ልማድ ወደ ከመጀመሩ በፊት ሰዎችን የሚያደክም ፕሮጀክት ለውጠነዋል። የብልህ ትዳር ተነሳሽነት ትዳርን ወደ ትክክለኛ ማንነቱ ይመልሰዋል፦ በጎነትና መረጋጋትን የሚፈልጉ ሁለት ሰዎች ትስስር እንጂ ማህበራዊ ደረጃን የሚለካ ድግስ አይደለም።",
      },
      {
        title: "በያዙት ይጀምሩ፣ የቀረውን አላህ ያሟላል",
        description:
          "ሕይወትዎን ከመጀመርዎ በፊት ሁሉንም ነገር እስኪኖርዎት አይጠብቁ። ብዙዎቹ ደስተኛ ቤቶች በቀላል ዘዴዎች ጀምረዋል፣ ብዙዎቹ ውብ የሚመስሉ ቤቶች ግን ከውስጥ ፈርሰዋል። ልዩነቱ ያለው በሐሳብና በጠባይ ውስጥ ነው።",
      },
    ],
  },
  messages: {
    eyebrow: "የተነሳሽነቱ መልእክቶች",
    title: "ለእያንዳንዳችሁ አንድ ቃል",
    description: "በሕይወት ውስጥ አዲስ ጅማሬንና መረጋጋትን ለሚፈልጉ ሁሉ ቀላል መልእክት።",
    cards: [
      {
        title: "ለወጣት ወንዶች መልእክት",
        description:
          "በገንዘብ ስላልተሟላችሁ ትዳርን አታዘግዩ። በያዛችሁት ጀምሩ፣ ታማኝ ሁኑ፣ ሁኔታችሁን ለማሻሻል ጣሩ፣ የበጎነት በሮች ሲከፈቱላችሁ ታያላችሁ — ምክንያቱም ትዳር የመረጋጋትና የበረከት ጅማሬ ነውና።",
      },
      {
        title: "ለአባቶች መልእክት",
        description:
          "ልጃችሁ በአያያዝ ረገድ አላህን የሚፈራ፣ ክብሯን የሚጠብቅ፣ ልቧንም የሚጠብቅ ሰው ያስፈልጋታል። ገንዘብ ይመጣል ይሄዳል፣ ነገር ግን ጠባይና እምነት የተረጋጋ ቤት ይገነባሉ። በደግነት የሚይዛትን ምረጡላት — ይህ የደስታዋ እውነተኛ ዋስትና ነው።",
      },
      {
        title: "ለወጣት ሴቶች መልእክት",
        description:
          "ትዳርን ረጅም የቁሳዊ ሁኔታዎች ዝርዝር አታድርጉ። ራሳችሁን ጠይቁ፦ እርሱ ታማኝ ነውን? ያከብረኛልን? ከእርሱ ጋር የተረጋጋ ሕይወት መገንባት እችላለሁን? ጻድቅ ሰው ከምንም ሊጀምር ይችላል።",
      },
    ],
  },
  charter: {
    eyebrow: "የተነሳሽነቱ ቃል ኪዳን",
    title: "ይህንን ቃል ኪዳን በመቀበል ከእኛ ጋር ቃል ግቡና የብልህ ትዳር ተነሳሽነትን ተቀላቀሉ።",
    subtitle: "የብልህ ትዳር ቃል ኪዳን",
    items: [
      "በአክብሮትና በመግባባት ላይ የተመሰረተ ሕይወት ለመገንባት እጥራለሁ።",
      "በቀላል ዘዴዎችና በእውነተኛ ጅማሬ ትዳርን እቀበላለሁ።",
      "በሁሉም መረጃዎቼና መግለጫዎቼ ታማኝ ለመሆን እገባለሁ።",
      "በትዳር ውስጥ ግቤ በጎነትና መረጋጋት እንደሆነ ቃል እገባለሁ።",
      "እምነትና ጠባይ ከሀብትና ከገጽታ የበለጠ አስፈላጊ እንደሆኑ አምናለሁ።",
    ],
    photoAlt: "ሙሽራና ሙሽሪት በሣር በተሸፈነ ረግረጋማ ቦታ በወርቃማ ሰዓት ተቃቅፈዋል፣ የእሷ መጋረጃ በነፋስ ይውለበለባል።",
  },
  companion: {
    eyebrow: "ስለ Zefaaf መድረክ",
    title: "ወደ ሐላል ትዳር በሚወስደው መንገድ ላይ የእርስዎ ጓደኛ",
    description:
      "Zefaaf ለሙስሊሞች እሴቶችን የሚጠብቅና ቤተሰቦችን የሚያጠናክር ደህንነቱ የተጠበቀ አካባቢን የሚያቀርብ የታመነ የእስልምና ትዳር መድረክ ነው፣ በብልህ መሳሪያዎችና ግልጽ ልምድ ትክክለኛውን የሕይወት ጓደኛ እንዲያገኙ ይረዳዎታል።",
    features: [
      {
        title: "ደህንነቱ የተጠበቀና ከሸሪዓ ጋር የተስማማ አካባቢ",
        description: "በሁሉም ግንኙነቶች የእስልምና መመሪያዎችን እናከብራለን — ምንም ዓይነት ተራ ትውውቅ ወይም ወዳጅነት የለም።",
      },
      {
        title: "24/7 ተከታታይ ድጋፍ",
        description: "ቡድናችን ጥያቄዎችዎን ለመመለስና የሚያስፈልገውን መመሪያ ለመስጠት ሁልጊዜ ዝግጁ ነው።",
      },
      {
        title: "ልዩ የትዳር ምክር",
        description: "ደስተኛና ዘላቂ ትዳር ለመመስረት በእስልምና እሴቶች ላይ የተመሰረተ ተግባራዊ መመሪያ።",
      },
      {
        title: "ዓለም አቀፍ ሽፋን",
        description: "የትም ቢሆኑ የሕይወት ጓደኛ እንዲያገኙ ለመርዳት በዓለም ዙሪያ ያሉትን ሁሉንም አገራት ይሸፍናል።",
      },
      {
        title: "አሁኑኑ ጉዞዎን ከZefaaf ጋር ይጀምሩ",
        description: "በነጻ ይመዝገቡና የብልህ ትዳር ተነሳሽነትን ይቀላቀሉ። ምዝገባ ነጻ ነው፣ መልእክት መላክም ሁልጊዜ ነጻ ነው።",
      },
    ],
    photoAlts: {
      mosque: "ነጭ ሂጃብና ቀሚስ የለበሰች ሙሽሪትና ጥቁር ቱክሲዶ የለበሰ ሙሽራ በጌጣጌጥ በተሰራ መስጊድ ውስጥ አብረው ዱዓ ሲያደርጉ።",
      car: "ነጭ ቀሚስና መጋረጃ የለበሰች ሙሽሪት ጥቁር ቱክሲዶ የለበሰ ሙሽራን ከጥንታዊ ክላሲክ መኪና አጠገብ ስታቅፍ።",
    },
  },
};

const sv: SmartMarriageCopy = {
  hero: {
    title: "Initiativet för ett klokt äktenskap",
    description:
      "Äktenskap inom islam handlar om dygd och sinnesro, inte om lyx och utgifter. Om du väntar tills dina händer är fulla innan du bygger ett hem, kan du få vänta mycket länge.",
    cta: "Påbörja din äktenskapsresa",
    photoAlts: {
      cliff:
        "Ett par som poserar på en klippa med utsikt över ett turkosblått hav och berg, mannen bär kvinnan medan hennes långa vita kjol fladdrar i vinden.",
      lake: "Ett par som står ansikte mot ansikte vid en turkosblå alpsjö omgiven av tallar och berg.",
      blossom: "Ett par som omfamnar varandra under ett blommande rosa körsbärsträd i en park.",
    },
  },
  nav: {
    items: [
      "Vad initiativet innebär",
      "Varför ett klokt äktenskap",
      "Den islamiska grunden för initiativet",
      "Initiativets budskap",
      "Initiativets stadga",
      "Om Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Varför du väljer Zefaaf",
    title: "Klokt äktenskap: en ny ekvation för livet",
    description:
      "Initiativet för ett klokt äktenskap är en medveten uppmaning från plattformen Zefaaf att ordna om sina prioriteringar. Istället för att lägga pengar på överdådiga bröllopslokaler, orimliga hemgifter och extravaganta smycken, investera dem i att bygga ett riktigt hem och ett gemensamt liv fyllt av kärlek och barmhärtighet.",
    photoAlt:
      "Ett par fotograferat bakifrån på en strand, mannen håller en vit bukett, kvinnan bär en fladdrande rosa klänning och hijab, en dimhöljd klippudde i bakgrunden.",
  },
  why: {
    eyebrow: "Varför ett klokt äktenskap",
    description:
      "Därför att samhället har belastat äktenskapet med villkor som tron inte kräver, och med oändliga förväntningar, tills det blivit en ouppnåelig dröm för miljontals unga människor. Initiativet för ett klokt äktenskap återför de riktiga frågorna: Varför gifter vi oss? Och hur bör vi gifta oss?",
    cards: [
      {
        title: "Därför att tron satte den rätta måttstocken",
        paragraphs: [
          'Profeten ﷺ sade inte att man ska se på hans rikedom, utan sade: "Om någon vars tro och karaktär gläder er kommer till er, gift då bort henne med honom." Denna måttstock har inte förändrats, och hem byggda på den är de mest stabila och varaktiga.',
        ],
      },
      {
        title: "Därför att yttre sken inte bygger ett hem",
        paragraphs: [
          "Bröllopsnatten tar slut, men livet börjar efter den. Det som läggs på lokaler och yttre sken under en enda natt hade kunnat lägga grunden till ett riktigt hem som varar i åratal.",
        ],
      },
      {
        title: "Därför att väntan har ett pris",
        paragraphs: [
          'Varje år du väntar på "rätt tidpunkt" är ett år av livet som passerar, av försenad stabilitet och missad välsignelse. Att göra det enkelt idag är bättre än en fullkomlighet som aldrig kommer.',
        ],
      },
      {
        title: "Därför att Gud har lovat att hjälpa dem som söker dygd",
        paragraphs: [
          '"Tre personer har rätt till Guds hjälp: den som gifter sig i strävan efter kyskhet." Detta gudomliga löfte kräver inget banksaldo — det kräver en uppriktig avsikt och ett rent hjärta.',
        ],
      },
      {
        title: "Därför att en blygsam start inte är en skam",
        paragraphs: [
          "De lyckligaste hemmen började inte med materiell rikedom, utan med ärlighet.",
          "Förmågor utvecklas med tiden och försörjningen växer, men karaktär och avsikt är det som förblir beständigt.",
        ],
      },
    ],
  },
  banner: {
    title: "Klokt äktenskap",
    description: "En investering i grunden för äktenskapligt liv, medan det traditionella äktenskapet är överdrivna utgifter för yttre sken.",
    photoAlt: "Ett par som ber tillsammans i en solbelyst moské med en utsmyckad träminbar.",
  },
  foundation: {
    eyebrow: "Den islamiska grunden för initiativet för ett klokt äktenskap",
    title: "Klokt äktenskap är ingen modern idé — det är vad islam har uppmuntrat i över 1 400 år.",
    citations: [
      {
        quote:
          "Gift bort de ojämförda bland er och de rättfärdiga bland era slavar och slavinnor. Om de är fattiga ska Gud göra dem rika genom Sin nåd. Gud omfattar allt och vet allt.",
        attribution: "Surah An-Nur — Vers 32",
      },
      {
        quote:
          "Om någon vars religion och karaktär gläder er kommer till er, gift då bort henne med honom. Gör ni det inte, blir det oreda och stor korruption på jorden.",
        attribution: "Berättad av al-Tirmidhi",
      },
      {
        quote: "Tre personer har rätt till Guds hjälp: den som gifter sig i strävan efter kyskhet.",
        attribution: "Berättad av al-Tirmidhi, bekräftad av al-Albani",
      },
    ],
    reasons: [
      {
        title: "Fattigdom hindrar inte äktenskap",
        description:
          "Gud krävde inte rikedom för äktenskap. Tvärtom lovade Han uttryckligen att berika dem som söker äktenskap i strävan efter dygd. Den som skjuter upp äktenskapet i väntan på ekonomisk fullkomlighet har fördröjt en välsignelse som Gud själv har garanterat.",
      },
      {
        title: "Tro och karaktär är grunden",
        description:
          "Rikedom kommer och går, status stiger och faller, men det är tro och karaktär som bygger ett hem. Den som väljer en partner enbart efter världsliga mått bygger på sand; den som väljer efter tro bygger på berggrund.",
      },
      {
        title: "Enkelhet är källan till välsignelse",
        description:
          "Ju mer du underlättar vägen till ett halal-äktenskap, desto fler dörrar du aldrig väntat dig kommer att öppnas för dig. En blygsam start är ingen brist — det är fruktbar mark där kärlek och barmhärtighet växer.",
      },
      {
        title: "Äktenskap är inget ekonomiskt projekt",
        description:
          "Vi har förvandlat äktenskapet från en enkel tradition till ett projekt som utmattar människor innan det ens börjat. Initiativet för ett klokt äktenskap återför äktenskapet till dess kärna: ett band mellan två människor som söker dygd och stabilitet, inte en fest för att mäta social status.",
      },
      {
        title: "Börja med det du har, så fullbordar Gud resten",
        description:
          "Vänta inte med att ha allt innan du startar ditt liv. Många av de lyckligaste hemmen började med de enklaste medel, och många av de mest praktfulla hemmen kollapsade inifrån. Skillnaden ligger i avsikt och karaktär.",
      },
    ],
  },
  messages: {
    eyebrow: "Initiativets budskap",
    title: "Ett ord till var och en av er",
    description: "Ett enkelt budskap till alla som söker en nystart i livet och stabilitet.",
    cards: [
      {
        title: "Ett budskap till unga män",
        description:
          "Skjut inte upp äktenskapet för att du inte är ekonomiskt fullständig. Börja med det du har, var ärlig, sträva efter att förbättra din situation, och du kommer att se att godhetens dörrar öppnas för dig — för äktenskapet är början på stabilitet och välsignelse.",
      },
      {
        title: "Ett budskap till fäder",
        description:
          "Din dotter behöver en man som fruktar Gud i hur han behandlar henne, som bevarar hennes värdighet och skyddar hennes hjärta. Pengar kommer och går, men karaktär och tro bygger ett stabilt hem. Välj åt henne någon som kommer att behandla henne med godhet — det är den verkliga garantin för hennes lycka.",
      },
      {
        title: "Ett budskap till unga kvinnor",
        description:
          "Gör inte äktenskapet till en lång lista med materiella villkor. Fråga dig själv: Är han ärlig? Kommer han att respektera mig? Kan jag bygga ett stabilt liv med honom? En rättfärdig man kan börja med ingenting.",
      },
    ],
  },
  charter: {
    eyebrow: "Initiativets stadga",
    title: "Avlägg löfte med oss och gå med i initiativet för ett klokt äktenskap genom att godkänna denna stadga.",
    subtitle: "Stadgan för klokt äktenskap",
    items: [
      "Jag strävar efter att bygga ett liv grundat på respekt och förståelse.",
      "Jag accepterar äktenskap med enkla medel och en realistisk start.",
      "Jag förbinder mig till ärlighet i all min information och alla mina uppgifter.",
      "Jag lovar att mitt mål med äktenskapet är dygd och stabilitet.",
      "Jag tror att tro och karaktär betyder mer än rikedom och yttre sken.",
    ],
    photoAlt: "Brud och brudgum omfamnar varandra i guldtimmen på en gräsbevuxen våtmark, hennes slöja fladdrar i vinden.",
  },
  companion: {
    eyebrow: "Om plattformen Zefaaf",
    title: "Din följeslagare på vägen till ett halal-äktenskap",
    description:
      "Zefaaf är en pålitlig islamisk äktenskapsplattform som erbjuder muslimer en trygg miljö som bevarar värderingar och stärker familjer, och som hjälper dig att hitta rätt livspartner genom smarta verktyg och en transparent upplevelse.",
    features: [
      {
        title: "Trygg och sharia-anpassad miljö",
        description: "Vi håller oss till islamiska riktlinjer i alla interaktioner — inga tillfälliga bekantskaper eller vänskaper.",
      },
      {
        title: "Kontinuerligt stöd dygnet runt",
        description: "Vårt team finns alltid tillgängligt för att besvara dina frågor och ge den vägledning du behöver.",
      },
      {
        title: "Specialiserad äktenskapsrådgivning",
        description: "Praktisk vägledning baserad på islamiska värderingar för att grundlägga ett lyckligt och varaktigt äktenskap.",
      },
      {
        title: "Global täckning",
        description: "Täcker alla länder i världen för att hjälpa dig hitta en livspartner var du än befinner dig.",
      },
      {
        title: "Påbörja din resa med Zefaaf nu",
        description: "Registrera dig gratis och gå med i initiativet för ett klokt äktenskap. Registreringen är gratis, och att skicka meddelanden är alltid gratis.",
      },
    ],
    photoAlts: {
      mosque: "En brud i vit hijab och klänning och en brudgum i svart smoking som ber tillsammans inne i en utsmyckad moské.",
      car: "En brud i vit klänning och slöja som omfamnar en brudgum i svart smoking bredvid en klassisk veteranbil.",
    },
  },
};

const da: SmartMarriageCopy = {
  hero: {
    title: "Initiativet for et klogt ægteskab",
    description:
      "Ægteskab i islam handler om dyd og sindsro, ikke om overdådighed og udgifter. Hvis du venter, til dine hænder er fulde, før du bygger et hjem, kan du komme til at vente meget længe.",
    cta: "Begynd din ægteskabsrejse",
    photoAlts: {
      cliff:
        "Et par der poserer på en klippeskrænt med udsigt over et turkisblåt hav og bjerge, manden bærer kvinden, mens hendes lange hvide nederdel bølger i vinden.",
      lake: "Et par der står ansigt til ansigt ved en turkisblå alpesø omgivet af fyrretræer og bjerge.",
      blossom: "Et par der omfavner hinanden under et blomstrende lyserødt kirsebærtræ i en park.",
    },
  },
  nav: {
    items: [
      "Hvad initiativet er",
      "Hvorfor et klogt ægteskab",
      "Det islamiske grundlag for initiativet",
      "Initiativets budskaber",
      "Initiativets charter",
      "Om Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Hvorfor du vælger Zefaaf",
    title: "Klogt ægteskab: en ny ligning for livet",
    description:
      "Initiativet for et klogt ægteskab er en bevidst opfordring fra platformen Zefaaf til at omprioritere. I stedet for at bruge penge på overdådige bryllupssale, urimelig medgift og ekstravagante smykker, så invester dem i at bygge et rigtigt hjem og et fælles liv fyldt med kærlighed og barmhjertighed.",
    photoAlt:
      "Et par fotograferet bagfra på en strand, manden holder en hvid buket, kvinden bærer en flagrende lyserød kjole og hijab, en tåget klippeodde i baggrunden.",
  },
  why: {
    eyebrow: "Hvorfor et klogt ægteskab",
    description:
      "Fordi samfundet har belastet ægteskabet med betingelser, som troen ikke pålægger, og med endeløse forventninger, indtil det er blevet en uopnåelig drøm for millioner af unge mennesker. Initiativet for et klogt ægteskab bringer de rigtige spørgsmål tilbage: Hvorfor gifter vi os? Og hvordan bør vi gifte os?",
    cards: [
      {
        title: "Fordi troen satte den rette målestok",
        paragraphs: [
          'Profeten ﷺ sagde ikke, at man skulle se på hans rigdom, men sagde: "Hvis nogen kommer til jer, hvis tro og karakter I er tilfredse med, så gift ham." Denne målestok har ikke ændret sig, og hjem bygget på den er de mest stabile og varige.',
        ],
      },
      {
        title: "Fordi ydre skin ikke bygger et hjem",
        paragraphs: [
          "Bryllupsnatten slutter, men livet begynder efter den. Det, der bruges på lokaler og ydre skin på én eneste nat, kunne have grundlagt et rigtigt hjem, der varer i årevis.",
        ],
      },
      {
        title: "Fordi ventetid har en pris",
        paragraphs: [
          'Hvert år du venter på "det rette tidspunkt", er et år af livet, der går, af stabilitet, der udskydes, og velsignelse, der går tabt. At gøre det let i dag er bedre end en perfektion, der aldrig kommer.',
        ],
      },
      {
        title: "Fordi Gud lovede at hjælpe dem, der søger dyd",
        paragraphs: [
          '"Tre personer har ret til Guds hjælp: den, der gifter sig i stræben efter kyskhed." Dette guddommelige løfte kræver ikke en bankkonto — det kræver en oprigtig hensigt og et rent hjerte.',
        ],
      },
      {
        title: "Fordi en beskeden begyndelse ikke er en skam",
        paragraphs: [
          "De lykkeligste hjem startede ikke med materiel rigdom, men med ærlighed.",
          "Evner udvikler sig over tid, og forsørgelsen vokser, men det er karakter og hensigt, der forbliver konstante.",
        ],
      },
    ],
  },
  banner: {
    title: "Klogt ægteskab",
    description: "En investering i grundlaget for det ægteskabelige liv, mens det traditionelle ægteskab er overdrevne udgifter til ydre skin.",
    photoAlt: "Et par der beder sammen i en solbeskinnet moske med en udsmykket træ-minbar.",
  },
  foundation: {
    eyebrow: "Det islamiske grundlag for initiativet for et klogt ægteskab",
    title: "Klogt ægteskab er ikke en moderne idé — det er, hvad islam har opmuntret til i over 1.400 år.",
    citations: [
      {
        quote:
          "Gift de ugifte blandt jer, og de retskafne blandt jeres trælle og trælkvinder. Er de fattige, vil Gud berige dem af Sin overflod. Gud er alfavnende og alvidende.",
        attribution: "Surah An-Nur — Vers 32",
      },
      {
        quote:
          "Kommer der nogen til jer, hvis tro og karakter I er tilfredse med, så gift ham. Gør I det ikke, vil der opstå ufred og stor fordærv på jorden.",
        attribution: "Overleveret af al-Tirmidhi",
      },
      {
        quote: "Tre personer har ret til Guds hjælp: den, der gifter sig i stræben efter kyskhed.",
        attribution: "Overleveret af al-Tirmidhi, bekræftet af al-Albani",
      },
    ],
    reasons: [
      {
        title: "Fattigdom forhindrer ikke ægteskab",
        description:
          "Gud krævede ikke rigdom for ægteskab. Tværtimod lovede Han udtrykkeligt at berige dem, der søger ægteskab i stræben efter dyd. Den, der udskyder ægteskabet i venten på økonomisk perfektion, har udskudt en velsignelse, som Gud selv har garanteret.",
      },
      {
        title: "Tro og karakter er grundlaget",
        description:
          "Rigdom kommer og går, og status stiger og falder, men det er tro og karakter, der bygger et hjem. Den, der udelukkende vælger en partner efter verdslige målestokke, bygger på sand; den, der vælger efter tro, bygger på klippegrund.",
      },
      {
        title: "Enkelhed er kilden til velsignelse",
        description:
          "Jo mere du letter vejen til et halal-ægteskab, desto flere døre, du aldrig havde forventet, vil åbne sig for dig. En beskeden begyndelse er ikke en mangel — det er frugtbar jord, hvor kærlighed og barmhjertighed vokser.",
      },
      {
        title: "Ægteskab er ikke et økonomisk projekt",
        description:
          "Vi har gjort ægteskabet fra en enkel tradition til et projekt, der udmatter folk, før det overhovedet begynder. Initiativet for et klogt ægteskab bringer ægteskabet tilbage til dets kerne: et bånd mellem to mennesker, der søger dyd og stabilitet, ikke en fest til at måle social status.",
      },
      {
        title: "Start med det, du kan, og Gud vil fuldende resten",
        description:
          "Vent ikke med at have alt, før du starter dit liv. Mange af de lykkeligste hjem begyndte med de enkleste midler, og mange af de mest prægtige hjem kollapsede indefra. Forskellen ligger i hensigt og karakter.",
      },
    ],
  },
  messages: {
    eyebrow: "Initiativets budskaber",
    title: "Et ord til hver af jer",
    description: "Et enkelt budskab til alle, der søger en ny start i livet og stabilitet.",
    cards: [
      {
        title: "Et budskab til unge mænd",
        description:
          "Udskyd ikke ægteskabet, fordi du ikke er økonomisk fuldstændig. Start med det, du kan, vær ærlig, stræb efter at forbedre din situation, og du vil se, at godhedens døre åbner sig for dig — for ægteskab er begyndelsen på stabilitet og velsignelse.",
      },
      {
        title: "Et budskab til fædre",
        description:
          "Din datter har brug for en mand, der frygter Gud i den måde, han behandler hende på, som bevarer hendes værdighed og beskytter hendes hjerte. Penge kommer og går, men karakter og tro bygger et stabilt hjem. Vælg en til hende, som vil behandle hende med venlighed — det er den sande garanti for hendes lykke.",
      },
      {
        title: "Et budskab til unge kvinder",
        description:
          "Gør ikke ægteskabet til en lang liste af materielle betingelser. Spørg dig selv: Er han ærlig? Vil han respektere mig? Kan jeg opbygge et stabilt liv med ham? En retskaffen mand kan starte fra ingenting.",
      },
    ],
  },
  charter: {
    eyebrow: "Initiativets charter",
    title: "Aflæg løfte sammen med os og bliv en del af initiativet for et klogt ægteskab ved at tilslutte dig dette charter.",
    subtitle: "Charter for klogt ægteskab",
    items: [
      "Jeg stræber efter at bygge et liv baseret på respekt og forståelse.",
      "Jeg accepterer ægteskab med enkle midler og en realistisk begyndelse.",
      "Jeg forpligter mig til ærlighed i alle mine oplysninger og udsagn.",
      "Jeg lover, at mit mål med ægteskabet er dyd og stabilitet.",
      "Jeg tror, at tro og karakter betyder mere end rigdom og ydre skin.",
    ],
    photoAlt: "Brud og brudgom, der omfavner hinanden i den gyldne time på en græsklædt vådområde, hendes slør flagrer i vinden.",
  },
  companion: {
    eyebrow: "Om platformen Zefaaf",
    title: "Din følgesvend på vejen til et halal-ægteskab",
    description:
      "Zefaaf er en pålidelig islamisk ægteskabsplatform, der giver muslimer et trygt miljø, som bevarer værdier og styrker familier, og som hjælper dig med at finde den rette livspartner gennem intelligente værktøjer og en gennemsigtig oplevelse.",
    features: [
      {
        title: "Trygt og sharia-kompatibelt miljø",
        description: "Vi holder os til islamiske retningslinjer i alle interaktioner — ingen tilfældige bekendtskaber eller venskaber.",
      },
      {
        title: "Kontinuerlig support døgnet rundt",
        description: "Vores team står altid til rådighed for at besvare dine spørgsmål og give den vejledning, du har brug for.",
      },
      {
        title: "Specialiseret ægteskabsrådgivning",
        description: "Praktisk vejledning baseret på islamiske værdier til at etablere et lykkeligt og varigt ægteskab.",
      },
      {
        title: "Global dækning",
        description: "Dækker alle lande verden over for at hjælpe dig med at finde en livspartner, uanset hvor du er.",
      },
      {
        title: "Start din rejse nu med Zefaaf",
        description: "Tilmeld dig gratis og bliv en del af initiativet for et klogt ægteskab. Det er gratis at tilmelde sig, og det er altid gratis at sende beskeder.",
      },
    ],
    photoAlts: {
      mosque: "En brud i hvid hijab og kjole og en brudgom i sort smoking, der beder sammen inde i en udsmykket moske.",
      car: "En brud i hvid kjole og slør, der omfavner en brudgom i sort smoking ved siden af en klassisk veteranbil.",
    },
  },
};

const sq: SmartMarriageCopy = {
  hero: {
    title: "Nisma për Martesë të Mençur",
    description:
      "Martesa në Islam ka të bëjë me virtytin dhe qetësinë shpirtërore, jo me shkëlqim dhe shpenzime. Nëse prisni derisa duart tuaja të mbushen para se të ndërtoni një shtëpi, mund të prisni gjatë.",
    cta: "Filloni Udhëtimin Tuaj të Martesës",
    photoAlts: {
      cliff:
        "Një çift duke pozuar mbi një shkëmb me pamje nga deti me ngjyrë tyrkuaz dhe malet, burri e mban gruan në krahë ndërsa fundi i saj i gjatë i bardhë valëvitet në erë.",
      lake: "Një çift që qëndron sy më sy pranë një liqeni alpin me ngjyrë tyrkuaz, i rrethuar nga pisha dhe male.",
      blossom: "Një çift duke u përqafuar nën një pemë lulesh të qershisë rozë të çelura në një park.",
    },
  },
  nav: {
    items: [
      "Çfarë Është Nisma",
      "Pse Martesë e Mençur",
      "Themeli Islam i Nismës për Martesë të Mençur",
      "Mesazhet e Nismës",
      "Karta e Nismës",
      "Rreth Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Pse Zgjidhni Zefaaf",
    title: "Martesa e Mençur: Një Ekuacion i Ri për Jetën",
    description:
      "Nisma për Martesë të Mençur është një thirrje e vetëdijshme nga platforma Zefaaf për të rirenditur prioritetet. Në vend që të shpenzoni para për salla dasmash luksoze, mehr të tepruar dhe stoli ekstravagante, investojini ato në ndërtimin e një shtëpie të vërtetë dhe një jete të përbashkët të mbushur me dashuri dhe mëshirë.",
    photoAlt:
      "Një çift i fotografuar nga pas në një plazh, burri mban një buqetë të bardhë, gruaja vesh një fustan rozë të valëvitshëm dhe hixhab, në sfond një shkëmb i mbuluar me mjegull.",
  },
  why: {
    eyebrow: "Pse Martesë e Mençur",
    description:
      "Sepse shoqëria e ka ngarkuar martesën me kushte që feja nuk i ka vënë, dhe me prita të pafundme, derisa është bërë një ëndërr e paarritshme për miliona të rinj. Nisma për Martesë të Mençur i sjell përsëri pyetjet e vërteta: Pse martohemi? Dhe si duhet të martohemi?",
    cards: [
      {
        title: "Sepse Feja Vendosi Standardin e Duhur",
        paragraphs: [
          'Profeti ﷺ nuk tha shikoni pasurinë e tij, por tha: "Nëse ju vjen dikush, fenë dhe moralin e të cilit i pëlqeni, martojeni atë." Ky standard nuk ka ndryshuar, dhe shtëpitë e ndërtuara mbi të janë më të qëndrueshmet dhe më të gjatat.',
        ],
      },
      {
        title: "Sepse Pamja e Jashtme Nuk Ndërton Shtëpi",
        paragraphs: [
          "Nata e dasmës mbaron, por jeta fillon pas saj. Ajo që shpenzohet për salla dhe pamje të jashtme në një natë të vetme mund të krijonte një shtëpi të vërtetë që zgjat me vite.",
        ],
      },
      {
        title: "Sepse Pritja Ka një Çmim",
        paragraphs: [
          'Çdo vit që prisni për "kohën e duhur" është një vit jete që kalon, stabilitet i vonuar dhe bekim i humbur. Ta lehtësosh sot është më mirë se përsosmëria që s\'vjen kurrë.',
        ],
      },
      {
        title: "Sepse Zoti Premtoi të Ndihmojë Ata që Kërkojnë Virtyt",
        paragraphs: [
          '"Tre veta kanë të drejtë për ndihmën e Allahut: ai që martohet duke kërkuar dëlirësinë." Ky premtim hyjnor nuk kërkon llogari bankare — kërkon një qëllim të sinqertë dhe një zemër të pastër.',
        ],
      },
      {
        title: "Sepse Një Fillim i Thjeshtë Nuk Është Turp",
        paragraphs: [
          "Shtëpitë më të lumtura nuk filluan me pasuri materiale, por me ndershmëri.",
          "Aftësitë zhvillohen me kohën, dhe furnizimi zgjerohet, por karakteri dhe qëllimi janë ato që mbeten të pandryshuara.",
        ],
      },
    ],
  },
  banner: {
    title: "Martesë e Mençur",
    description: "Një investim në themelin e jetës bashkëshortore, ndërsa martesa tradicionale është shpenzim i tepruar për pamjen e jashtme.",
    photoAlt: "Një çift duke u falur së bashku në një xhami të ndriçuar nga dielli me një minber të stolisur prej druri.",
  },
  foundation: {
    eyebrow: "Themeli Islam i Nismës për Martesë të Mençur",
    title: "Martesa e mençur nuk është një ide moderne — është ajo që Islami e ka inkurajuar për më shumë se 1.400 vjet.",
    citations: [
      {
        quote:
          "Martoni beqarët tuaj, si dhe robërit e robëreshat tuaja të ndershëm. Nëse ata janë të varfër, All-llahu i pasuron ata nga te mirat e Tij, All-llahu është dhurues i gjerë dhe i dijshëm.",
        attribution: "Surja An-Nur — Ajeti 32",
      },
      {
        quote:
          "Nëse ju vjen dikush, fenë dhe moralin e të cilit i pëlqeni, martojeni atë. Nëse nuk e bëni këtë, do të ketë trazira dhe korrupsion të madh në tokë.",
        attribution: "Transmetuar nga Tirmidhiu",
      },
      {
        quote: "Tre veta kanë të drejtë për ndihmën e Allahut: ai që martohet duke kërkuar dëlirësinë.",
        attribution: "Transmetuar nga Tirmidhiu, vërtetuar nga Albani",
      },
    ],
    reasons: [
      {
        title: "Varfëria Nuk e Pengon Martesën",
        description:
          "Zoti nuk kërkoi pasuri për martesë. Përkundrazi, premtoi shprehimisht të pasurojë ata që kërkojnë martesë duke synuar virtytin. Kushdo që e vonon martesën duke pritur për përsosmëri financiare, ka vonuar një bekim që vetë Zoti e ka garantuar.",
      },
      {
        title: "Feja dhe Karakteri Janë Themeli",
        description:
          "Pasuria vjen dhe ikën, dhe statusi ngrihet e bie, por feja dhe karakteri janë ato që ndërtojnë një shtëpi. Kushdo që zgjedh një partner vetëm sipas standardeve tokësore, ndërton mbi rërë; kushdo që zgjedh sipas fesë, ndërton mbi shkëmb.",
      },
      {
        title: "Thjeshtësia Është Burimi i Bekimit",
        description:
          "Sa më shumë ta lehtësoni rrugën drejt një martese hallall, aq më shumë dyer që nuk i prisnit do të hapen para jush. Një fillim i thjeshtë nuk është mangësi — është tokë pjellore ku rriten dashuria dhe mëshira.",
      },
      {
        title: "Martesa Nuk Është Projekt Financiar",
        description:
          "E kemi kthyer martesën nga një traditë e lehtë në një projekt që i lodh njerëzit para se të fillojë fare. Nisma për Martesë të Mençur e kthen martesën tek thelbi i saj: një lidhje mes dy njerëzve që kërkojnë virtyt dhe stabilitet, jo një festë për të matur statusin shoqëror.",
      },
      {
        title: "Filloni me Atë që Keni, dhe Zoti do ta Plotësojë Pjesën Tjetër",
        description:
          "Mos prisni të keni gjithçka para se të filloni jetën tuaj. Shumë nga shtëpitë më të lumtura filluan me mjetet më të thjeshta, dhe shumë nga shtëpitë më të shkëlqyera u shembën nga brenda. Ndryshimi qëndron në qëllim dhe karakter.",
      },
    ],
  },
  messages: {
    eyebrow: "Mesazhet e Nismës",
    title: "Një Fjalë për Secilin prej Jush",
    description: "Një mesazh i thjeshtë për këdo që kërkon një fillim të ri në jetë dhe stabilitet.",
    cards: [
      {
        title: "Një Mesazh për Të Rinjtë",
        description:
          "Mos e shtyni martesën sepse nuk jeni plotësisht të gatshëm financiarisht. Filloni me atë që keni, jini të ndershëm, përpiquni të përmirësoni gjendjen tuaj, dhe do të shihni se dyert e së mirës hapen për ju — sepse martesa është fillimi i stabilitetit dhe bekimit.",
      },
      {
        title: "Një Mesazh për Baballarët",
        description:
          "Vajza juaj ka nevojë për një burrë që i frikësohet Zotit në mënyrën se si e trajton, që ruan dinjitetin e saj dhe mbron zemrën e saj. Paratë vijnë dhe ikin, por karakteri dhe feja ndërtojnë një shtëpi të qëndrueshme. Zgjidhini dikë që do ta trajtojë me dashamirësi — kjo është garancia e vërtetë e lumturisë së saj.",
      },
      {
        title: "Një Mesazh për Vajzat e Reja",
        description:
          "Mos e ktheni martesën në një listë të gjatë kushtesh materiale. Pyesni veten: A është i ndershëm? A do të më respektojë? A mund të ndërtoj një jetë të qëndrueshme me të? Një burrë i drejtë mund të fillojë nga asgjëja.",
      },
    ],
  },
  charter: {
    eyebrow: "Karta e Nismës",
    title: "Bëni betimin me ne dhe bashkohuni me Nismën për Martesë të Mençur duke pranuar këtë kartë.",
    subtitle: "Karta e Martesës së Mençur",
    items: [
      "Përpiqem të ndërtoj një jetë të bazuar në respekt dhe mirëkuptim.",
      "Pranoj martesën me mjete të thjeshta dhe fillim realist.",
      "Zotohem për ndershmëri në të gjitha informacionet dhe deklaratat e mia.",
      "Zotohem se qëllimi im në martesë është virtyti dhe stabiliteti.",
      "Besoj se feja dhe karakteri kanë më shumë vlerë se pasuria dhe pamja e jashtme.",
    ],
    photoAlt: "Nusja dhe dhëndri duke u përqafuar në orën e artë të diellit në një zonë të lagësht me bar, vello e saj valëvitet në erë.",
  },
  companion: {
    eyebrow: "Rreth Platformës Zefaaf",
    title: "Shoqëruesi Juaj në Rrugën drejt Martesës Hallall",
    description:
      "Zefaaf është një platformë e besueshme martesore islame që u siguron myslimanëve një mjedis të sigurt që ruan vlerat dhe forcon familjet, duke ju ndihmuar të gjeni partnerin e duhur të jetës përmes mjeteve të mençura dhe një përvoje transparente.",
    features: [
      {
        title: "Mjedis i Sigurt dhe në Përputhje me Sheriatin",
        description: "Ne i përmbahemi udhëzimeve islame në të gjitha ndërveprimet — pa njohje apo miqësi të rastësishme.",
      },
      {
        title: "Mbështetje e Vazhdueshme 24/7",
        description: "Ekipi ynë është gjithmonë në dispozicion për t'iu përgjigjur pyetjeve tuaja dhe për t'ju ofruar udhëzimin që ju nevojitet.",
      },
      {
        title: "Këshillim i Specializuar për Martesën",
        description: "Udhëzim praktik i bazuar në vlerat islame për krijimin e një martese të lumtur dhe të qëndrueshme.",
      },
      {
        title: "Mbulim Global",
        description: "Mbulon të gjitha vendet e botës për t'ju ndihmuar të gjeni një partner jete kudo që të jeni.",
      },
      {
        title: "Filloni Udhëtimin Tuaj Tani me Zefaaf",
        description: "Regjistrohuni falas dhe bashkohuni me Nismën për Martesë të Mençur. Regjistrimi është falas, dhe dërgimi i mesazheve është gjithmonë falas.",
      },
    ],
    photoAlts: {
      mosque: "Një nuse me hixhab dhe fustan të bardhë dhe një dhëndër me smoking të zi duke bërë lutje së bashku brenda një xhamie të stolisur.",
      car: "Një nuse me fustan të bardhë dhe vello duke përqafuar një dhëndër me smoking të zi pranë një makine klasike epokale.",
    },
  },
};

const uz: SmartMarriageCopy = {
  hero: {
    title: "Aqlli Nikoh Tashabbusi",
    description:
      "Islomda nikoh — fazilat va xotirjamlik haqida, isrofgarchilik va xarajatlar haqida emas. Agar uy qurishdan oldin qo'lingiz to'lishini kutsangiz, uzoq vaqt kutishingizga to'g'ri kelishi mumkin.",
    cta: "Nikoh Sayohatingizni Boshlang",
    photoAlts: {
      cliff:
        "Er-xotin tog' jinsidan iborat qoyada, firuza dengiz va tog'lar manzarasiga qarab turishibdi, erkak ayolni ko'tarib olgan, uning uzun oq yubkasi shamolda to'lqinlanmoqda.",
      lake: "Er-xotin qarag'ay daraxtlari va tog'lar bilan o'ralgan firuza rangli tog' ko'li bo'yida bir-biriga yuzma-yuz turishibdi.",
      blossom: "Er-xotin bog'da gullab turgan pushti sakura daraxti ostida quchoqlashib turishibdi.",
    },
  },
  nav: {
    items: [
      "Tashabbus Nima Ekanligi",
      "Nima Uchun Aqlli Nikoh",
      "Aqlli Nikoh Tashabbusining Islomiy Asosi",
      "Tashabbus Xabarlari",
      "Tashabbus Nizomi",
      "Zefaaf Haqida",
    ],
  },
  intro: {
    eyebrow: "Nima Uchun Zefaaf-ni Tanlaysiz",
    title: "Aqlli Nikoh: Hayot Uchun Yangi Tenglama",
    description:
      "Aqlli Nikoh Tashabbusi — bu Zefaaf platformasidan ustuvorliklarni qayta tartibga solishga chaqiruvchi ongli da'vatdir. Hashamatli to'yxonalar, ortiqcha mahr va serhasham zeb-ziynatlarga pul sarflash o'rniga, ularni sevgi va rahmat bilan to'la haqiqiy uy va umumiy hayot qurishga sarmoya qiling.",
    photoAlt:
      "Sohilda orqadan suratga olingan er-xotin, erkak oq gulchambar ushlab turibdi, ayol to'lqinlanuvchi pushti rang libos va hijob kiygan, orqa fonda tuman bosgan qoyali burun.",
  },
  why: {
    eyebrow: "Nima Uchun Aqlli Nikoh",
    description:
      "Chunki jamiyat nikohni din yuklamagan shartlar va cheksiz kutishlar bilan og'irlashtirdi, toki u millionlab yoshlar uchun yetib bo'lmas orzuga aylandi. Aqlli Nikoh Tashabbusi haqiqiy savollarni qaytarib keltiradi: Nima uchun turmush quramiz? Va qanday turmush qurishimiz kerak?",
    cards: [
      {
        title: "Chunki Din To'g'ri Mezonni Belgiladi",
        paragraphs: [
          'Payg\'ambar ﷺ uning boyligiga qarang demadi, balki: "Sizga dini va axloqidan rozi bo\'lgan kishi kelsa, uni uylantiring", dedi. Bu mezon o\'zgarmagan, va shu asosda qurilgan uylar eng barqaror va uzoq davom etadigan uylardir.',
        ],
      },
      {
        title: "Chunki Ko'rinish Uy Qurmaydi",
        paragraphs: [
          "To'y kechasi tugaydi, ammo hayot undan keyin boshlanadi. Bir kechada joy va ko'rinishga sarflangan mablag' yillar davom etadigan haqiqiy uyni barpo etishi mumkin edi.",
        ],
      },
      {
        title: "Chunki Kutishning Narxi Bor",
        paragraphs: [
          '"To\'g\'ri vaqt"ni kutib o\'tkazgan har bir yil — o\'tib ketayotgan hayot yili, kechiktirilgan barqarorlik va qo\'ldan boy berilgan barakadir. Bugun osonlashtirish, hech qachon kelmaydigan mukammallikdan yaxshiroqdir.',
        ],
      },
      {
        title: "Chunki Alloh Fazilat Izlovchilarga Yordam Berishga Va'da Berdi",
        paragraphs: [
          '"Uch kishiga Allohning yordami vojib bo\'ladi: iffatni ko\'zlab uylanuvchi kishi." Bu ilohiy va\'da bank hisobini talab qilmaydi — u faqat samimiy niyat va pok qalbni talab qiladi.',
        ],
      },
      {
        title: "Chunki Kamtarona Boshlanish Sharmandalik Emas",
        paragraphs: [
          "Eng baxtli oilalar moddiy boylik bilan emas, balki halollik bilan boshlangan.",
          "Imkoniyatlar vaqt o'tishi bilan rivojlanadi va rizq kengayadi, ammo axloq va niyat o'zgarmasdan qoladi.",
        ],
      },
    ],
  },
  banner: {
    title: "Aqlli Nikoh",
    description: "Turmush hayoti asosiga sarmoya, an'anaviy nikoh esa ko'rinish uchun ortiqcha xarajatdir.",
    photoAlt: "Er-xotin naqshinkor yog'och minbari bo'lgan quyoshli masjidda birga namoz o'qishmoqda.",
  },
  foundation: {
    eyebrow: "Aqlli Nikoh Tashabbusining Islomiy Asosi",
    title: "Aqlli nikoh zamonaviy g'oya emas — bu Islom 1400 yildan ortiq vaqt davomida targ'ib qilib kelgan narsadir.",
    citations: [
      {
        quote:
          "Orangizdagi turmush qurmaganlarni, cho'ri va qullaringiz ichidan solihlarini uylantiring. Agar kambag'al bo'lsalar, Alloh ularni O'z fazli-karami bilan boy qiladi. Alloh — (fazli) Keng va Bilguvchidir.",
        attribution: "Nur surasi — 32-oyat",
      },
      {
        quote:
          "Agar sizga dini va axloqidan rozi bo'lgan kishi kelsa, uni uylantiring. Aks holda, yer yuzida fitna va katta fasod yuz beradi.",
        attribution: "Termiziy rivoyat qilgan",
      },
      {
        quote: "Uch kishiga Allohning yordami vojib bo'ladi: iffatni ko'zlab uylanuvchi kishi.",
        attribution: "Termiziy rivoyat qilgan, Albaniy sahih deb topgan",
      },
    ],
    reasons: [
      {
        title: "Qashshoqlik Nikohga To'sqinlik Qilmaydi",
        description:
          "Alloh nikoh uchun boylikni shart qilib qo'ymadi. Aksincha, fazilatni izlab nikoh qiluvchilarni boyitishga aniq va'da berdi. Moliyaviy mukammallikni kutib nikohni kechiktirgan kishi, Allohning O'zi kafolatlagan barakani kechiktirgan bo'ladi.",
      },
      {
        title: "Din va Axloq — Asosdir",
        description:
          "Boylik kelib-ketadi, mavqe ko'tarilib-tushadi, ammo uyni din va axloq quradi. Kim faqat dunyoviy mezonlar bilan hamroh tanlasa, qumga quradi; kim din bilan tanlasa, tosh ustiga quradi.",
      },
      {
        title: "Soddalik — Barakaning Manbaidir",
        description:
          "Halol nikohga yo'lni qanchalik osonlashtirsangiz, kutmagan eshiklaringiz shunchalik ko'p ochiladi. Kamtarona boshlanish kamchilik emas — bu sevgi va rahmat unadigan unumdor tuproqdir.",
      },
      {
        title: "Nikoh Moliyaviy Loyiha Emas",
        description:
          "Biz nikohni oson an'anadan boshlanmasdan turib odamlarni charchatib qo'yadigan loyihaga aylantirib qo'ydik. Aqlli Nikoh Tashabbusi nikohni o'z mohiyatiga qaytaradi: ijtimoiy mavqeni o'lchaydigan ziyofat emas, balki fazilat va barqarorlikni izlovchi ikki inson orasidagi bog'lanish.",
      },
      {
        title: "Qo'lingizdan Kelganidan Boshlang, Qolganini Alloh To'ldiradi",
        description:
          "Hayotingizni boshlashdan oldin hamma narsaga ega bo'lishni kutmang. Eng baxtli oilalarning ko'pi eng oddiy vositalar bilan boshlangan, eng dabdabali uylarning ko'pi esa ichidan qulagan. Farq niyat va axloqda.",
      },
    ],
  },
  messages: {
    eyebrow: "Tashabbus Xabarlari",
    title: "Har Biringizga Bir So'z",
    description: "Hayotda yangi boshlanish va barqarorlik izlagan har bir kishi uchun oddiy xabar.",
    cards: [
      {
        title: "Yigitlarga Xabar",
        description:
          "Moliyaviy jihatdan to'liq emasligingiz sababli nikohni kechiktirmang. Qo'lingizdan kelganidan boshlang, halol bo'ling, holatingizni yaxshilashga intiling, va yaxshilik eshiklari sizga ochilishini ko'rasiz — chunki nikoh barqarorlik va barakaning boshlanishidir.",
      },
      {
        title: "Otalarga Xabar",
        description:
          "Qizingizga munosabatida Allohdan qo'rqadigan, uning qadr-qimmatini saqlaydigan va qalbini asraydigan erkak kerak. Pul kelib-ketadi, ammo axloq va din barqaror uy quradi. Unga mehr bilan munosabatda bo'ladigan kishini tanlang — bu uning baxtiga haqiqiy kafolatdir.",
      },
      {
        title: "Qizlarga Xabar",
        description:
          "Nikohni uzun moddiy shartlar ro'yxatiga aylantirmang. O'zingizdan so'rang: U halolmi? U menga hurmat qiladimi? Men u bilan barqaror hayot qura olamanmi? Solih erkak hech narsasiz boshlashi mumkin.",
      },
    ],
  },
  charter: {
    eyebrow: "Tashabbus Nizomi",
    title: "Ushbu nizomga rioya qilishga ahd qilib, biz bilan birga Aqlli Nikoh Tashabbusiga qo'shiling.",
    subtitle: "Aqlli Nikoh Nizomi",
    items: [
      "Men hurmat va tushunishga asoslangan hayot qurishga intilaman.",
      "Men oddiy vositalar va real boshlanish bilan nikohni qabul qilaman.",
      "Men barcha ma'lumot va bayonotlarimda halollikka amal qilishga va'da beraman.",
      "Men nikohdagi maqsadim fazilat va barqarorlik ekanligiga ahd qilaman.",
      "Men din va axloq boylik va ko'rinishdan ko'ra muhimroq ekanligiga ishonaman.",
    ],
    photoAlt: "Kelinu kuyov o'tloqli botqoqlikda oltin soatda quchoqlashib turishibdi, uning parandasi shamolda to'lqinlanmoqda.",
  },
  companion: {
    eyebrow: "Zefaaf Platformasi Haqida",
    title: "Halol Nikoh Yo'lidagi Hamrohingiz",
    description:
      "Zefaaf — musulmonlarga qadriyatlarni saqlaydigan va oilalarni mustahkamlaydigan xavfsiz muhitni taqdim etuvchi ishonchli islomiy nikoh platformasi bo'lib, aqlli vositalar va shaffof tajriba orqali to'g'ri hayot yo'ldoshini topishga yordam beradi.",
    features: [
      {
        title: "Xavfsiz va Shariatga Mos Muhit",
        description: "Biz barcha muloqotlarda islomiy qoidalarga rioya qilamiz — oddiy tanishuv yoki do'stlik yo'q.",
      },
      {
        title: "24/7 Uzluksiz Qo'llab-quvvatlash",
        description: "Jamoamiz savollaringizga javob berish va sizga kerakli yo'l-yo'riqni berish uchun doim tayyor turadi.",
      },
      {
        title: "Ixtisoslashgan Nikoh Bo'yicha Maslahat",
        description: "Baxtli va uzoq davom etuvchi nikoh qurish uchun islomiy qadriyatlarga asoslangan amaliy yo'l-yo'riq.",
      },
      {
        title: "Global Qamrov",
        description: "Qayerda bo'lishingizdan qat'i nazar hayot yo'ldoshini topishingizga yordam berish uchun dunyodagi barcha davlatlarni qamrab oladi.",
      },
      {
        title: "Zefaaf Bilan Hoziroq Sayohatingizni Boshlang",
        description: "Bepul ro'yxatdan o'ting va Aqlli Nikoh Tashabbusiga qo'shiling. Ro'yxatdan o'tish bepul, xabar yozish esa doim bepul.",
      },
    ],
    photoAlts: {
      mosque: "Oq hijob va libosdagi kelin va qora smokingdagi kuyov naqshinkor masjid ichida birga duo qilishmoqda.",
      car: "Oq libos va parandadagi kelin qora smokingdagi kuyovni klassik retro avtomobil yonida quchoqlamoqda.",
    },
  },
};

const az: SmartMarriageCopy = {
  hero: {
    title: "Ağıllı Nikah Təşəbbüsü",
    description:
      "İslamda nikah təmtəraq və xərclər deyil, fəzilət və rahatlıq haqqındadır. Ev qurmazdan əvvəl əllərinizin dolmasını gözləsəniz, bəlkə uzun müddət gözləməli olacaqsınız.",
    cta: "Nikah Yolçuluğunuza Başlayın",
    photoAlts: {
      cliff:
        "Firuzəyi dəniz və dağlara baxan qayalıq bir uçurumda poz verən cütlük, kişi qadını qucağında tutur, onun uzun ağ ətəyi küləkdə dalğalanır.",
      lake: "Şam ağacları və dağlarla əhatə olunmuş firuzəyi dağ gölünün kənarında üz-üzə dayanan cütlük.",
      blossom: "Parkda çiçəklənmiş çəhrayı albalı ağacının altında qucaqlaşan cütlük.",
    },
  },
  nav: {
    items: [
      "Təşəbbüs Nədir",
      "Niyə Ağıllı Nikah",
      "Ağıllı Nikah Təşəbbüsünün İslami Əsası",
      "Təşəbbüsün Mesajları",
      "Təşəbbüsün Nizamnaməsi",
      "Zefaaf Haqqında",
    ],
  },
  intro: {
    eyebrow: "Niyə Zefaaf-ı Seçirsiniz",
    title: "Ağıllı Nikah: Həyat üçün Yeni Tənlik",
    description:
      "Ağıllı Nikah Təşəbbüsü Zefaaf platformasından prioritetləri yenidən nizamlamaq üçün şüurlu bir çağırışdır. Dəbdəbəli toy salonlarına, həddindən artıq mehriyyəyə və israfçı zinət əşyalarına pul xərcləmək əvəzinə, onu sevgi və mərhəmətlə dolu real bir ev və ortaq həyat qurmağa investisiya edin.",
    photoAlt:
      "Sahildə arxadan çəkilmiş şəkildə bir cütlük, kişi ağ gül dəstəsi tutub, qadın dalğalanan çəhrayı don və hicab geyinib, arxa planda dumanlı qayalıq burun görünür.",
  },
  why: {
    eyebrow: "Niyə Ağıllı Nikah",
    description:
      "Çünki cəmiyyət nikahı dinin qoymadığı şərtlərlə və sonsuz gözləntilərlə yükləmişdir, elə ki, milyonlarla gənc üçün əlçatmaz bir arzuya çevrilmişdir. Ağıllı Nikah Təşəbbüsü əsl sualları geri qaytarır: Niyə evlənirik? Necə evlənməliyik?",
    cards: [
      {
        title: "Çünki Din Doğru Meyarı Qoydu",
        paragraphs: [
          'Peyğəmbər ﷺ onun sərvətinə baxın demədi, əksinə dedi: "Dini və əxlaqı xoşunuza gələn bir kəs sizə gəlsə, onu evləndirin." Bu meyar dəyişməyib, bunun üzərində qurulan evlər ən sabit və davamlı olanlardır.',
        ],
      },
      {
        title: "Çünki Görünüş Ev Qurmur",
        paragraphs: [
          "Toy gecəsi bitir, amma həyat ondan sonra başlayır. Bir gecəyə salon və görünüşə xərclənən pul, illərlə davam edən real bir ev qura bilərdi.",
        ],
      },
      {
        title: "Çünki Gözləməyin Qiyməti Var",
        paragraphs: [
          '"Doğru vaxtı" gözləyərək keçirdiyiniz hər il, keçib gedən bir həyat ili, gecikdirilmiş sabitlik və əldən çıxmış bərəkətdir. Bu gün işləri asanlaşdırmaq, heç vaxt gəlməyən mükəmməllikdən yaxşıdır.',
        ],
      },
      {
        title: "Çünki Allah Fəzilət Axtaranlara Kömək Vəd Etdi",
        paragraphs: [
          '"Üç nəfərə Allahın köməyi vacibdir: İffətini qorumaq üçün evlənən kəs." Bu ilahi vəd bank hesabı tələb etmir — o, səmimi niyyət və təmiz qəlb tələb edir.',
        ],
      },
      {
        title: "Çünki Sadə Başlanğıc Ayıb Deyil",
        paragraphs: [
          "Ən xoşbəxt evlər maddi sərvətlə deyil, dürüstlüklə başladı.",
          "Bacarıqlar zamanla inkişaf edir, ruzi genişlənir, amma xarakter və niyyət dəyişməz qalan şeylərdir.",
        ],
      },
    ],
  },
  banner: {
    title: "Ağıllı Nikah",
    description: "Nikah həyatının təməlinə investisiya, ənənəvi nikah isə görünüşə həddindən artıq xərcdir.",
    photoAlt: "Naxışlı taxta minbərli günəşli bir məsciddə birlikdə namaz qılan cütlük.",
  },
  foundation: {
    eyebrow: "Ağıllı Nikah Təşəbbüsünün İslami Əsası",
    title: "Ağıllı nikah müasir bir fikir deyil — bu, İslamın 1400 ildən artıqdır təşviq etdiyi şeydir.",
    citations: [
      {
        quote:
          "Aranızda ərsiz qadınları, yaxşı (əməlisaleh) kölə və cariyələrinizi evləndirin. Əgər onlar yoxsuldurlarsa, Allah Öz lütfü ilə onları dövlətli edər. Allah (lütfü) genişdir, (hər şeyi) biləndir.",
        attribution: "Nur surəsi — 32-ci ayə",
      },
      {
        quote:
          "Dini və əxlaqı xoşunuza gələn bir kəs sizə (elçi) gəlsə, onu evləndirin. Əks halda yer üzündə fitnə-fəsad və böyük zülm baş verər.",
        attribution: "Tirmizi rəvayət etmişdir",
      },
      {
        quote: "Üç nəfərə Allahın köməyi vacibdir: İffətini qorumaq üçün evlənən kəs.",
        attribution: "Tirmizi rəvayət etmişdir, Albani səhih olduğunu təsdiqləmişdir",
      },
    ],
    reasons: [
      {
        title: "Yoxsulluq Nikaha Mane Olmur",
        description:
          "Allah nikah üçün var-dövlət tələb etmədi. Əksinə, fəzilət axtararaq evlənənləri zənginləşdirəcəyinə açıq şəkildə vəd etdi. Maliyyə mükəmməlliyini gözləyərək nikahı gecikdirən kəs, Allahın Özünün zəmanət verdiyi bir bərəkəti gecikdirmiş olur.",
      },
      {
        title: "Din və Xarakter Təməldir",
        description:
          "Var-dövlət gəlib gedir, status qalxıb enir, amma evi din və xarakter qurur. Yalnız dünyəvi meyarlarla tərəf-müqabil seçən qumun üzərində qurur; dinlə seçən isə qaya üzərində qurur.",
      },
      {
        title: "Sadəlik Bərəkət Mənbəyidir",
        description:
          "Halal nikaha gedən yolu nə qədər asanlaşdırsanız, gözləmədiyiniz qapılar bir o qədər çox açılar. Sadə başlanğıc çatışmazlıq deyil — sevginin və mərhəmətin böyüdüyü münbit torpaqdır.",
      },
      {
        title: "Nikah Maliyyə Layihəsi Deyil",
        description:
          "Nikahı sadə bir ənənədən başlamazdan əvvəl insanları yorub üzən bir layihəyə çevirdik. Ağıllı Nikah Təşəbbüsü nikahı öz mahiyyətinə qaytarır: sosial statusu ölçən bir ziyafət deyil, fəzilət və sabitlik axtaran iki insan arasındakı bağdır.",
      },
      {
        title: "Əlinizdə Olanla Başlayın, Qalanını Allah Tamamlayar",
        description:
          "Həyatınıza başlamazdan əvvəl hər şeyə sahib olmağı gözləməyin. Ən xoşbəxt evlərin çoxu ən sadə vasitələrlə başladı, ən dəbdəbəli evlərin çoxu isə içəridən çökdü. Fərq niyyət və xarakterdədir.",
      },
    ],
  },
  messages: {
    eyebrow: "Təşəbbüsün Mesajları",
    title: "Hər Birinizə Bir Söz",
    description: "Həyatda yeni başlanğıc və sabitlik axtaran hər kəs üçün sadə bir mesaj.",
    cards: [
      {
        title: "Gənc Kişilərə Mesaj",
        description:
          "Maliyyə cəhətdən tam olmadığınız üçün nikahı təxirə salmayın. Əlinizdə olanla başlayın, dürüst olun, vəziyyətinizi yaxşılaşdırmağa çalışın, xeyir qapılarının sizə açıldığını görəcəksiniz — çünki nikah sabitliyin və bərəkətin başlanğıcıdır.",
      },
      {
        title: "Atalara Mesaj",
        description:
          "Qızınıza ona münasibətdə Allahdan qorxan, ləyaqətini qoruyan və qəlbini mühafizə edən bir kişi lazımdır. Pul gəlib gedir, amma xarakter və din sabit bir ev qurur. Ona nəzakətlə davranacaq birini seçin — bu, onun xoşbəxtliyinin əsl təminatıdır.",
      },
      {
        title: "Gənc Qadınlara Mesaj",
        description:
          "Nikahı uzun bir maddi şərtlər siyahısına çevirməyin. Özünüzdən soruşun: O dürüstdürmü? Mənə hörmət edəcəkmi? Onunla sabit bir həyat qura bilərəmmi? Saleh bir kişi heç nədən başlaya bilər.",
      },
    ],
  },
  charter: {
    eyebrow: "Təşəbbüsün Nizamnaməsi",
    title: "Bu nizamnaməyə qoşularaq bizimlə birlikdə əhd edin və Ağıllı Nikah Təşəbbüsünə qatılın.",
    subtitle: "Ağıllı Nikah Nizamnaməsi",
    items: [
      "Hörmət və anlayış üzərində qurulmuş bir həyat qurmağa çalışıram.",
      "Sadə vasitələr və realist bir başlanğıcla nikahı qəbul edirəm.",
      "Bütün məlumat və bəyanatlarımda dürüstlüyə əməl etməyi öhdəmə götürürəm.",
      "Nikahdakı məqsədimin fəzilət və sabitlik olduğuna əhd edirəm.",
      "Din və xarakterin var-dövlət və görünüşdən daha vacib olduğuna inanıram.",
    ],
    photoAlt: "Gəlin və bəy otlu bir sulaq ərazidə qürub çağında qucaqlaşır, onun duvağı küləkdə dalğalanır.",
  },
  companion: {
    eyebrow: "Zefaaf Platforması Haqqında",
    title: "Halal Nikah Yolunda Yoldaşınız",
    description:
      "Zefaaf müsəlmanlara dəyərləri qoruyan və ailələri gücləndirən təhlükəsiz bir mühit təqdim edən etibarlı bir islami nikah platformasıdır, ağıllı alətlər və şəffaf bir təcrübə vasitəsilə doğru həyat yoldaşını tapmağınıza kömək edir.",
    features: [
      {
        title: "Təhlükəsiz və Şəriətə Uyğun Mühit",
        description: "Biz bütün qarşılıqlı əlaqələrdə islami qaydalara riayət edirik — heç bir sadə tanışlıq və ya dostluq yoxdur.",
      },
      {
        title: "24/7 Davamlı Dəstək",
        description: "Komandamız suallarınıza cavab vermək və sizə lazım olan rəhbərliyi təmin etmək üçün həmişə hazırdır.",
      },
      {
        title: "İxtisaslaşmış Nikah Məsləhəti",
        description: "Xoşbəxt və davamlı bir nikah qurmaq üçün islami dəyərlərə əsaslanan praktik rəhbərlik.",
      },
      {
        title: "Qlobal Əhatə",
        description: "Harada olmağınızdan asılı olmayaraq həyat yoldaşı tapmağınıza kömək etmək üçün dünyanın bütün ölkələrini əhatə edir.",
      },
      {
        title: "İndi Zefaaf ilə Yolçuluğunuza Başlayın",
        description: "Pulsuz qeydiyyatdan keçin və Ağıllı Nikah Təşəbbüsünə qatılın. Qeydiyyat pulsuzdur, mesajlaşma isə həmişə pulsuzdur.",
      },
    ],
    photoAlts: {
      mosque: "Ağ hicab və don geyinmiş gəlin və qara smokin geyinmiş bəy naxışlı bir məscid içərisində birlikdə dua edir.",
      car: "Ağ don və duvaq geyinmiş gəlin, klassik retro avtomobilin yanında qara smokin geyinmiş bəyi qucaqlayır.",
    },
  },
};

const fil: SmartMarriageCopy = {
  hero: {
    title: "Inisyatiba para sa Matalinong Pag-aasawa",
    description:
      "Ang pag-aasawa sa Islam ay tungkol sa kabutihan at katahimikan ng isip, hindi tungkol sa karangyaan at gastusin. Kung maghihintay ka hanggang mapuno ang iyong mga kamay bago magtayo ng tahanan, maaaring matagal kang maghintay.",
    cta: "Simulan ang Iyong Paglalakbay sa Pag-aasawa",
    photoAlts: {
      cliff:
        "Isang mag-asawang nagpo-pose sa isang bantulot na bangin na nakaharap sa asul-berdeng dagat at mga bundok, kinakarga ng lalaki ang babae habang lumilipad sa hangin ang mahabang puting palda nito.",
      lake: "Isang mag-asawang nakatayong magkaharap sa tabi ng isang asul-berdeng lawa sa bundok na napapaligiran ng mga puno ng pino at mga bundok.",
      blossom: "Isang mag-asawang magkayakap sa ilalim ng isang namumukadkad na kulay-rosas na puno ng cherry blossom sa isang parke.",
    },
  },
  nav: {
    items: [
      "Ano ang Inisyatiba",
      "Bakit Matalinong Pag-aasawa",
      "Ang Islamikong Batayan ng Inisyatiba para sa Matalinong Pag-aasawa",
      "Mga Mensahe ng Inisyatiba",
      "Charter ng Inisyatiba",
      "Tungkol sa Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Bakit Piliin ang Zefaaf",
    title: "Matalinong Pag-aasawa: Isang Bagong Ekwasyon para sa Buhay",
    description:
      "Ang Inisyatiba para sa Matalinong Pag-aasawa ay isang malay na panawagan mula sa plataporma ng Zefaaf upang muling ayusin ang mga prayoridad. Sa halip na gumastos ng pera sa marangyang salon ng kasal, sobra-sobrang dote, at labis na alahas, gamitin ito sa pagtatayo ng isang totoong tahanan at isang bahaging buhay na puno ng pagmamahal at habag.",
    photoAlt:
      "Isang mag-asawang kinunan mula sa likuran sa isang dalampasigan, hawak ng lalaki ang isang puting bouquet, suot ng babae ang lumilipad na kulay-rosas na damit at hijab, may makapal na ulap na batong tanguray sa likuran.",
  },
  why: {
    eyebrow: "Bakit Matalinong Pag-aasawa",
    description:
      "Sapagkat pinabigatan ng lipunan ang pag-aasawa ng mga kundisyon na hindi ipinag-uutos ng pananampalataya, at ng walang-katapusang inaasahan, hanggang naging isang mimpi na hindi na maabot ng milyun-milyong kabataan. Ibinabalik ng Inisyatiba para sa Matalinong Pag-aasawa ang tunay na mga tanong: Bakit tayo nagpapakasal? At paano tayo dapat magpakasal?",
    cards: [
      {
        title: "Sapagkat Itinakda ng Pananampalataya ang Tamang Pamantayan",
        paragraphs: [
          'Hindi sinabi ng Propeta ﷺ na tingnan ang kanyang kayamanan, kundi sinabi niya: "Kung may lalaking lumapit sa inyo na nasisiyahan kayo sa kanyang relihiyon at ugali, ipakasal ninyo siya." Hindi nagbago ang pamantayang ito, at ang mga tahanang itinayo dito ang pinakamatatag at pinakamatagal na tumatagal.',
        ],
      },
      {
        title: "Sapagkat Ang Panlabas na Anyo ay Hindi Nagtatayo ng Tahanan",
        paragraphs: [
          "Nagtatapos ang gabi ng kasal, ngunit ang buhay ay nagsisimula pagkatapos nito. Ang ginagastos sa lugar at anyo sa isang gabi lamang ay maaaring magtatag ng isang totoong tahanan na tumatagal ng mga taon.",
        ],
      },
      {
        title: "Sapagkat May Halaga ang Paghihintay",
        paragraphs: [
          'Bawat taong hinihintay mo ang "tamang panahon" ay isang taon ng buhay na dumaraan, katatagang naantala, at biyayang napalampas. Ang paggawang madali ngayon ay mas mabuti kaysa sa kasakdalang hindi kailanman darating.',
        ],
      },
      {
        title: "Sapagkat Nangako ang Diyos na Tutulungan ang mga Naghahanap ng Kabutihan",
        paragraphs: [
          '"Tatlong tao ang may karapatan sa tulong ng Diyos: ang nagpapakasal upang mapanatili ang kalinisang-puri." Ang banal na pangakong ito ay hindi nangangailangan ng balanse sa bangko — nangangailangan ito ng taimtim na hangarin at malinis na puso.',
        ],
      },
      {
        title: "Sapagkat Ang Mapagpakumbabang Pasimula ay Hindi Kahihiyan",
        paragraphs: [
          "Ang mga pinakamasayang tahanan ay hindi nagsimula sa materyal na kayamanan, kundi sa katapatan.",
          "Ang mga kakayahan ay umuunlad sa paglipas ng panahon, at lumalawak ang kabuhayan, ngunit ang ugali at hangarin ang nananatiling di-nagbabago.",
        ],
      },
    ],
  },
  banner: {
    title: "Matalinong Pag-aasawa",
    description: "Isang pamumuhunan sa pundasyon ng buhay may-asawa, samantalang ang tradisyunal na pag-aasawa ay labis na paggasta sa panlabas na anyo.",
    photoAlt: "Isang mag-asawang nagdarasal nang magkasama sa isang mosque na sinisikatan ng araw na may pinaggandahang minbar na kahoy.",
  },
  foundation: {
    eyebrow: "Ang Islamikong Batayan ng Inisyatiba para sa Matalinong Pag-aasawa",
    title: "Ang matalinong pag-aasawa ay hindi isang makabagong kaisipan — ito ang hinihikayat ng Islam sa loob ng mahigit 1,400 taon.",
    citations: [
      {
        quote:
          "At ipakasal ninyo ang mga walang asawa sa inyo, at ang mga matuwid sa inyong mga alipin, lalaki man o babae. Kung sila ay mahihirap, pagkakalooban sila ng Allah ng kasaganahan mula sa Kanyang biyaya. At ang Allah ay Malawak (sa biyaya) at Nakaaalam.",
        attribution: "Surah An-Nur — Talata 32",
      },
      {
        quote:
          "Kung may lalaking lumapit sa inyo na nasisiyahan kayo sa kanyang relihiyon at ugali, ipakasal ninyo siya. Kung hindi ninyo gagawin ito, magkakaroon ng kaguluhan at malaking katiwalian sa mundo.",
        attribution: "Isinalaysay ni Al-Tirmidhi",
      },
      {
        quote: "Tatlong tao ang may karapatan sa tulong ng Diyos: ang nagpapakasal upang mapanatili ang kalinisang-puri.",
        attribution: "Isinalaysay ni Al-Tirmidhi, pinatunayan ni Al-Albani",
      },
    ],
    reasons: [
      {
        title: "Hindi Hadlang ang Kahirapan sa Pag-aasawa",
        description:
          "Hindi hiniling ng Diyos ang kayamanan para sa pag-aasawa. Sa halip, malinaw Niyang ipinangako na pagkalooban ng kasaganahan ang mga naghahanap ng pag-aasawa alang-alang sa kabutihan. Sinumang nagpapaliban ng pag-aasawa dahil naghihintay ng kasakdalan sa pananalapi ay nagpaliban ng biyayang ipinangako mismo ng Diyos.",
      },
      {
        title: "Ang Pananampalataya at Ugali ang Pundasyon",
        description:
          "Ang kayamanan ay dumarating at nawawala, at ang katayuan ay tumataas at bumababa, ngunit ang pananampalataya at ugali ang nagtatayo ng isang tahanan. Ang sinumang pumipili ng kapareha batay lamang sa pansanlibutang pamantayan ay nagtatayo sa buhangin; ang pumipili batay sa pananampalataya ay nagtatayo sa bato.",
      },
      {
        title: "Ang Kapayakan ang Pinagmumulan ng Biyaya",
        description:
          "Kung gaano mo pinapadali ang daan tungo sa isang halal na pag-aasawa, saka-saka ay bubukas ang mga pintong hindi mo inaasahan. Ang mapagpakumbabang pasimula ay hindi kakulangan — ito ay masaganang lupang tinutubuan ng pagmamahal at habag.",
      },
      {
        title: "Ang Pag-aasawa ay Hindi Isang Proyektong Pinansyal",
        description:
          "Ginawa naming proyekto na nakakapagod sa mga tao kahit hindi pa nagsisimula ang pag-aasawa, mula sa dating simpleng tradisyon. Ibinabalik ng Inisyatiba para sa Matalinong Pag-aasawa ang pag-aasawa sa kanyang tunay na kahulugan: isang bigkis sa pagitan ng dalawang taong naghahanap ng kabutihan at katatagan, hindi isang pagdiriwang na sumusukat ng katayuang panlipunan.",
      },
      {
        title: "Magsimula sa Iyong Kaya, at Ganap na Tutuparin ng Diyos ang Nalalabi",
        description:
          "Huwag maghintay na magkaroon ng lahat bago simulan ang iyong buhay. Marami sa mga pinakamasayang tahanan ang nagsimula sa pinakasimpleng paraan, at marami sa mga pinakamarangyang tahanan ang gumuho mula sa loob. Ang pagkakaiba ay nasa hangarin at ugali.",
      },
    ],
  },
  messages: {
    eyebrow: "Mga Mensahe ng Inisyatiba",
    title: "Isang Salita para sa Bawat Isa sa Inyo",
    description: "Isang simpleng mensahe para sa lahat ng naghahanap ng bagong simula sa buhay at katatagan.",
    cards: [
      {
        title: "Isang Mensahe para sa mga Kabataang Lalaki",
        description:
          "Huwag ipagpaliban ang pag-aasawa dahil hindi ka pa ganap na handa sa pananalapi. Magsimula sa iyong kaya, maging tapat, magsikap na mapabuti ang iyong kalagayan, at makikita mong bubukas ang mga pintuan ng kabutihan para sa iyo — sapagkat ang pag-aasawa ang simula ng katatagan at biyaya.",
      },
      {
        title: "Isang Mensahe para sa mga Ama",
        description:
          "Kailangan ng iyong anak na babae ng isang lalaking natatakot sa Diyos sa kanyang pakikitungo sa kanya, na pinapanatili ang kanyang dignidad at binabantayan ang kanyang puso. Ang pera ay dumarating at nawawala, ngunit ang ugali at pananampalataya ang nagtatayo ng isang matatag na tahanan. Piliin para sa kanya ang taong tatrato sa kanya nang may kabaitan — iyan ang tunay na katiyakan ng kanyang kaligayahan.",
      },
      {
        title: "Isang Mensahe para sa mga Kabataang Babae",
        description:
          "Huwag gawing isang mahabang listahan ng materyal na kundisyon ang pag-aasawa. Tanungin ang sarili: Tapat ba siya? Igagalang ba niya ako? Kaya ko bang magtayo ng matatag na buhay kasama niya? Ang isang matuwid na lalaki ay maaaring magsimula sa wala.",
      },
    ],
  },
  charter: {
    eyebrow: "Charter ng Inisyatiba",
    title: "Manumpa kasama namin at sumali sa Inisyatiba para sa Matalinong Pag-aasawa sa pamamagitan ng pagsang-ayon sa charter na ito.",
    subtitle: "Charter ng Matalinong Pag-aasawa",
    items: [
      "Nagsisikap akong magtayo ng isang buhay na nakabatay sa paggalang at pag-unawa.",
      "Tinatanggap ko ang pag-aasawa sa simpleng paraan at makatotohanang simula.",
      "Nangangako akong maging tapat sa lahat ng aking impormasyon at pahayag.",
      "Nangangako ako na ang layunin ko sa pag-aasawa ay kabutihan at katatagan.",
      "Naniniwala ako na mas mahalaga ang pananampalataya at ugali kaysa sa kayamanan at panlabas na anyo.",
    ],
    photoAlt: "Isang nobya at nobyo na magkayakap sa oras ng gintong paglubog ng araw sa isang damuhang lupang sagana sa tubig, ang belo niya ay lumilipad sa hangin.",
  },
  companion: {
    eyebrow: "Tungkol sa Plataporma ng Zefaaf",
    title: "Ang Iyong Kasama sa Landas Tungo sa Halal na Pag-aasawa",
    description:
      "Ang Zefaaf ay isang mapagkakatiwalaang plataporma ng Islamikong pag-aasawa na nagbibigay sa mga Muslim ng isang ligtas na kapaligiran na nagpapanatili ng mga pagpapahalaga at nagpapalakas ng mga pamilya, tumutulong sa iyo na mahanap ang tamang kapareha sa buhay sa pamamagitan ng matatalinong kasangkapan at isang transparenteng karanasan.",
    features: [
      {
        title: "Ligtas at Naaayon sa Batas Islamiko na Kapaligiran",
        description: "Sumusunod kami sa mga alituntuning Islamiko sa lahat ng pakikipag-ugnayan — walang kaswal na pagkakakilala o pakikipagkaibigan.",
      },
      {
        title: "Tuloy-tuloy na Suporta sa Lahat ng Oras",
        description: "Ang aming koponan ay palaging handang sumagot sa iyong mga tanong at magbigay ng gabay na kailangan mo.",
      },
      {
        title: "Espesyalisadong Payo sa Pag-aasawa",
        description: "Praktikal na gabay batay sa mga pagpapahalagang Islamiko para sa pagtatatag ng isang masaya at matagal na pag-aasawa.",
      },
      {
        title: "Pandaigdigang Saklaw",
        description: "Sumasaklaw sa lahat ng bansa sa buong mundo upang tulungan kang makahanap ng kapareha sa buhay saan ka man naroroon.",
      },
      {
        title: "Simulan ang Iyong Paglalakbay Ngayon Kasama ang Zefaaf",
        description: "Magparehistro nang libre at sumali sa Inisyatiba para sa Matalinong Pag-aasawa. Libre ang pagpaparehistro, at ang pagmemensahe ay laging libre.",
      },
    ],
    photoAlts: {
      mosque: "Isang nobyang naka-puting hijab at damit at isang nobyong naka-itim na tuxedo na sama-samang nagdarasal sa loob ng isang pinaggandahang mosque.",
      car: "Isang nobyang naka-puting damit at belo na yumayakap sa isang nobyong naka-itim na tuxedo sa tabi ng isang klasikong bintaheng kotse.",
    },
  },
};

const hi: SmartMarriageCopy = {
  hero: {
    title: "स्मार्ट विवाह पहल",
    description:
      "इस्लाम में विवाह सदाचार और सुकून की बुनियाद पर टिका है, न कि तड़क-भड़क और भारी खर्चों पर। अगर आप घर बसाने से पहले हाथ भरने का इंतज़ार करेंगे, तो शायद यह इंतज़ार बहुत लंबा हो जाए।",
    cta: "अपनी विवाह यात्रा शुरू करें",
    photoAlts: {
      cliff: "एक चट्टानी पहाड़ी पर खड़ा जोड़ा, जिसके पीछे फ़िरोज़ी समुद्र और पहाड़ नज़र आ रहे हैं; पुरुष महिला को गोद में उठाए हुए है और हवा में उसकी लंबी सफ़ेद स्कर्ट लहरा रही है।",
      lake: "एक फ़िरोज़ी अल्पाइन झील के किनारे आमने-सामने खड़ा जोड़ा, चारों ओर चीड़ के पेड़ और पहाड़।",
      blossom: "एक पार्क में खिले हुए गुलाबी चेरी ब्लॉसम पेड़ के नीचे गले मिलता हुआ जोड़ा।",
    },
  },
  nav: {
    items: [
      "पहल क्या है",
      "स्मार्ट विवाह क्यों",
      "स्मार्ट विवाह पहल की इस्लामी बुनियाद",
      "पहल के संदेश",
      "पहल का चार्टर",
      "ज़ेफ़ाफ़ के बारे में",
    ],
  },
  intro: {
    eyebrow: "आप ज़ेफ़ाफ़ को क्यों चुनें",
    title: "स्मार्ट विवाह: जीवन का एक नया समीकरण",
    description:
      "स्मार्ट विवाह पहल ज़ेफ़ाफ़ प्लेटफ़ॉर्म की ओर से प्राथमिकताओं को नए सिरे से तय करने का एक सचेत आह्वान है। भव्य विवाह-भवनों, बेतहाशा दहेज़ और महंगे गहनों पर पैसा खर्च करने के बजाय, इसे एक असली घर और प्रेम व करुणा से भरे साझा जीवन के निर्माण में लगाएं।",
    photoAlt:
      "समुद्र तट पर पीछे से लिया गया एक जोड़े का चित्र; पुरुष के हाथ में सफ़ेद फूलों का गुलदस्ता है, महिला हल्के गुलाबी रंग के बहते गाउन और हिजाब में है, पृष्ठभूमि में धुंध से ढकी चट्टानी तटरेखा है।",
  },
  why: {
    eyebrow: "स्मार्ट विवाह क्यों",
    description:
      "क्योंकि समाज ने विवाह पर ऐसी शर्तें और अंतहीन उम्मीदें लाद दी हैं जो धर्म ने कभी नहीं थोपीं, यहां तक कि यह लाखों युवाओं के लिए एक अधूरा सपना बनकर रह गया है। स्मार्ट विवाह पहल असली सवालों को फिर से सामने लाती है: हम विवाह क्यों करते हैं? और हमें विवाह कैसे करना चाहिए?",
    cards: [
      {
        title: "क्योंकि दीन ने सही मापदंड तय किया",
        paragraphs: [
          'नबी ﷺ ने यह नहीं कहा कि उसका धन देखो, बल्कि फ़रमाया: "अगर तुम्हारे पास कोई ऐसा आए जिसका दीन और अख़लाक़ तुम्हें पसंद हो, तो उसका निकाह कर दो।" यह मापदंड कभी नहीं बदला, और इसी बुनियाद पर बने घर सबसे मज़बूत और टिकाऊ होते हैं।',
        ],
      },
      {
        title: "क्योंकि दिखावा घर नहीं बनाता",
        paragraphs: [
          "शादी की रात ख़त्म हो जाती है, पर ज़िंदगी उसके बाद शुरू होती है। एक ही रात में हॉल और दिखावे पर जो पैसा ख़र्च होता है, उससे बरसों चलने वाला असली घर बसाया जा सकता है।",
        ],
      },
      {
        title: "क्योंकि इंतज़ार की भी एक कीमत होती है",
        paragraphs: [
          'हर साल जो आप "सही समय" के इंतज़ार में गुज़ारते हैं, वह ज़िंदगी का एक ऐसा साल है जो बीत जाता है, स्थिरता जो टलती जाती है, और बरकत जो हाथ से निकल जाती है। आज चीज़ों को आसान बनाना उस पूर्णता से बेहतर है जो कभी आती ही नहीं।',
        ],
      },
      {
        title: "क्योंकि अल्लाह ने पवित्रता चाहने वालों की मदद का वादा किया है",
        paragraphs: [
          '"तीन लोगों की मदद करना अल्लाह के ज़िम्मे है: वह जो पाकदामनी चाहते हुए निकाह करे।" यह ईश्वरीय वादा बैंक बैलेंस नहीं मांगता — यह बस एक सच्ची नीयत और पाक दिल मांगता है।',
        ],
      },
      {
        title: "क्योंकि एक साधारण शुरुआत शर्म की बात नहीं",
        paragraphs: [
          "सबसे ख़ुशहाल घरों की शुरुआत भौतिक संपत्ति से नहीं, बल्कि ईमानदारी से हुई थी।",
          "क्षमताएं समय के साथ बढ़ती हैं, और रोज़ी-रोज़गार फैलता है, लेकिन किरदार और नीयत ही हमेशा स्थिर रहते हैं।",
        ],
      },
    ],
  },
  banner: {
    title: "स्मार्ट विवाह",
    description: "वैवाहिक जीवन की बुनियाद में एक निवेश, जबकि पारंपरिक विवाह दिखावे पर की गई फ़िज़ूलख़र्ची है।",
    photoAlt: "धूप से भरी एक मस्जिद में एक साथ नमाज़ पढ़ता जोड़ा, पृष्ठभूमि में एक सजी हुई लकड़ी की मिम्बर।",
  },
  foundation: {
    eyebrow: "स्मार्ट विवाह पहल की इस्लामी बुनियाद",
    title: "स्मार्ट विवाह कोई आधुनिक विचार नहीं है — यह वह है जिसे इस्लाम ने 1,400 से भी अधिक वर्षों से प्रोत्साहित किया है।",
    citations: [
      {
        quote:
          "तथा तुम अपने में से अविवाहित पुरुषों तथा स्त्रियों का निकाह कर दो, और अपने दासों और अपनी दासियों में से जो सदाचारी हैं उनका भी (विवाह कर दो)। यदि वे निर्धन होंगे, तो अल्लाह उन्हें अपने अनुग्रह से धनी बना देगा। और अल्लाह विस्तार वाला, सब कुछ जानने वाला है।",
        attribution: "सूरह अन-नूर — आयत 32",
      },
      {
        quote:
          "अगर तुम्हारे पास कोई ऐसा आए जिसका दीन और अख़लाक़ तुम्हें पसंद हो, तो उसका निकाह कर दो। अगर ऐसा न करोगे, तो धरती पर फ़ितना (उपद्रव) और बड़ा फ़साद फैलेगा।",
        attribution: "रिवायत: तिर्मिज़ी",
      },
      {
        quote: "तीन लोगों की मदद करना अल्लाह के ज़िम्मे है: वह जो पाकदामनी चाहते हुए निकाह करे।",
        attribution: "रिवायत: तिर्मिज़ी, अल-अल्बानी द्वारा प्रमाणित",
      },
    ],
    reasons: [
      {
        title: "ग़रीबी विवाह में बाधा नहीं है",
        description:
          "अल्लाह ने विवाह के लिए धन को शर्त नहीं बनाया, बल्कि साफ़ वादा किया कि जो पाकदामनी चाहते हुए विवाह की राह पर चले, उसे वह अपने फ़ज़ल से मालामाल करेगा। जो कोई भौतिक पूर्णता के इंतज़ार में विवाह टालता है, वह असल में उस बरकत को टाल रहा है जिसकी ज़मानत ख़ुद अल्लाह ने ली है।",
      },
      {
        title: "दीन और अख़लाक़ ही बुनियाद हैं",
        description:
          "धन आता-जाता रहता है, और रुतबा ऊपर-नीचे होता रहता है, लेकिन दीन और अख़लाक़ ही घर की बुनियाद बनाते हैं। जो सिर्फ़ दुनियावी मापदंडों पर साथी चुनता है वह रेत पर घर बनाता है; जो दीन के आधार पर चुनता है वह चट्टान पर घर बनाता है।",
      },
      {
        title: "सादगी बरकत का स्रोत है",
        description:
          "आप हलाल विवाह की राह जितनी आसान बनाएंगे, उतने ही ऐसे दरवाज़े आपके सामने खुलेंगे जिनकी आपने कभी उम्मीद नहीं की थी। एक साधारण शुरुआत कमी नहीं है — यह एक उपजाऊ ज़मीन है जिस पर मोहब्बत और रहमत उगती है।",
      },
      {
        title: "विवाह कोई माली परियोजना नहीं है",
        description:
          "हमने विवाह को एक आसान सुन्नत से बदलकर ऐसी परियोजना बना दिया है जो शुरू होने से पहले ही लोगों को थका देती है। स्मार्ट विवाह पहल विवाह को उसके असली मक़सद पर लौटाती है: पाकदामनी और स्थिरता चाहने वाले दो लोगों के बीच का रिश्ता, न कि सामाजिक हैसियत नापने का मौक़ा।",
      },
      {
        title: "जो आपके पास है उसी से शुरुआत करें, बाक़ी अल्लाह पूरा करेगा",
        description:
          "अपनी ज़िंदगी शुरू करने से पहले सब कुछ पाने का इंतज़ार न करें। कई सबसे ख़ुशहाल घरों की शुरुआत सबसे मामूली साधनों से हुई, और कई सबसे शानदार घर अंदर से चरमरा गए। फ़र्क़ नीयत और किरदार में है।",
      },
    ],
  },
  messages: {
    eyebrow: "पहल के संदेश",
    title: "आप में से हर एक के लिए एक बात",
    description: "जीवन में एक नई शुरुआत और स्थिरता चाहने वाले हर व्यक्ति के लिए एक सरल संदेश।",
    cards: [
      {
        title: "युवाओं के नाम एक संदेश",
        description:
          "सिर्फ़ इसलिए विवाह मत टालो कि तुम माली तौर पर पूरी तरह सक्षम नहीं हो। जो कुछ भी तुम्हारे पास है उसी से शुरुआत करो, ईमानदार रहो, अपनी हालत सुधारने की कोशिश करते रहो, और तुम पाओगे कि भलाई के दरवाज़े तुम्हारे लिए खुल जाते हैं — क्योंकि विवाह ही स्थिरता और बरकत की शुरुआत है।",
      },
      {
        title: "पिताओं के नाम एक संदेश",
        description:
          "आपकी बेटी को ऐसे व्यक्ति की ज़रूरत है जो उसके साथ व्यवहार में अल्लाह से डरता हो, जो उसकी इज़्ज़त की हिफ़ाज़त करे और उसके दिल का ख़याल रखे। पैसा आता-जाता रहता है, लेकिन किरदार और दीन ही स्थिर घर बनाते हैं। उसके लिए ऐसा व्यक्ति चुनें जो उससे नरमी से पेश आए — यही उसकी ख़ुशी की असली ज़मानत है।",
      },
      {
        title: "युवतियों के नाम एक संदेश",
        description:
          "विवाह को भौतिक शर्तों की एक लंबी सूची मत बनाओ। ख़ुद से पूछो: क्या वह ईमानदार है? क्या वह मेरी इज़्ज़त करेगा? क्या मैं उसके साथ एक स्थिर ज़िंदगी बना सकती हूं? एक नेक इंसान कहीं से भी, यहां तक कि ख़ाली हाथ से भी अपनी शुरुआत कर सकता है।",
      },
    ],
  },
  charter: {
    eyebrow: "पहल का चार्टर",
    title: "इस चार्टर से सहमत होकर हमारे साथ प्रतिज्ञा लें और स्मार्ट विवाह पहल से जुड़ें।",
    subtitle: "स्मार्ट विवाह चार्टर",
    items: [
      "मैं सम्मान और समझ पर आधारित जीवन बनाने का प्रयास करता/करती हूं।",
      "मैं सामान्य साधनों और एक यथार्थवादी शुरुआत के साथ विवाह स्वीकार करता/करती हूं।",
      "मैं अपनी सारी जानकारी और बातों में ईमानदारी बरतने का प्रण लेता/लेती हूं।",
      "मैं वचन देता/देती हूं कि विवाह में मेरा लक्ष्य पाकदामनी और स्थिरता है।",
      "मैं मानता/मानती हूं कि दीन और अख़लाक़ धन और दिखावे से कहीं ज़्यादा मायने रखते हैं।",
    ],
    photoAlt: "एक हरी-भरी दलदली ज़मीन पर सुनहरी धूप में गले मिलता दुल्हा-दुल्हन, दुल्हन का घूंघट हवा में लहरा रहा है।",
  },
  companion: {
    eyebrow: "ज़ेफ़ाफ़ प्लेटफ़ॉर्म के बारे में",
    title: "हलाल विवाह की राह पर आपका साथी",
    description:
      "ज़ेफ़ाफ़ एक भरोसेमंद इस्लामी विवाह प्लेटफ़ॉर्म है जो मुसलमानों को एक सुरक्षित माहौल प्रदान करता है जो मूल्यों की हिफ़ाज़त करता है और परिवारों को मज़बूत बनाता है, और स्मार्ट टूल्स तथा एक पारदर्शी अनुभव के ज़रिए आपको सही जीवनसाथी खोजने में मदद करता है।",
    features: [
      {
        title: "सुरक्षित और शरिया-अनुरूप माहौल",
        description: "हम सभी बातचीत में इस्लामी दिशा-निर्देशों के पाबंद हैं — कोई आकस्मिक जान-पहचान या दोस्ती नहीं।",
      },
      {
        title: "चौबीसों घंटे निरंतर सहायता",
        description: "हमारी टीम हमेशा आपके सवालों के जवाब देने और आपको ज़रूरी मार्गदर्शन देने के लिए उपलब्ध है।",
      },
      {
        title: "विशेषज्ञ विवाह सलाह",
        description: "एक ख़ुशहाल और टिकाऊ विवाह स्थापित करने के लिए इस्लामी मूल्यों पर आधारित व्यावहारिक मार्गदर्शन।",
      },
      {
        title: "वैश्विक कवरेज",
        description: "दुनिया भर के सभी देशों को कवर करते हुए, आप जहां भी हों वहां जीवनसाथी खोजने में मदद।",
      },
      {
        title: "अभी ज़ेफ़ाफ़ के साथ अपनी यात्रा शुरू करें",
        description: "मुफ़्त में रजिस्टर करें और स्मार्ट विवाह पहल से जुड़ें। रजिस्ट्रेशन मुफ़्त है, और मैसेजिंग हमेशा मुफ़्त रहती है।",
      },
    ],
    photoAlts: {
      mosque: "एक सजी हुई मस्जिद के अंदर सफ़ेद हिजाब और गाउन में दुल्हन तथा काले टक्सीडो में दूल्हा साथ में दुआ करते हुए।",
      car: "सफ़ेद गाउन और घूंघट में दुल्हन एक पुरानी क्लासिक कार के पास काले टक्सीडो में दूल्हे को गले लगाते हुए।",
    },
  },
};

const kk: SmartMarriageCopy = {
  hero: {
    title: "Ақылды Неке Бастамасы",
    description:
      "Исламда неке ізгілік пен тыныштыққа негізделеді, сән-салтанат пен шығынға емес. Егер үй құрудан бұрын қолыңыз толарын күтсеңіз, ұзақ күтуге тура келуі мүмкін.",
    cta: "Неке жолыңызды бастаңыз",
    photoAlts: {
      cliff: "Жұп фируза теңіз бен тауларға қарайтын тасты жартастың басында тұр, ер адам әйелін көтеріп тұр, ал оның ұзын ақ юбкасы желмен желбірейді.",
      lake: "Жұп қарағай ағаштары мен таулармен қоршалған фируза альпі көлінің жағасында бетпе-бет тұр.",
      blossom: "Жұп саябақта гүлдеген қызғылт шие ағашының астында құшақтасып тұр.",
    },
  },
  nav: {
    items: [
      "Бастама дегеніміз не",
      "Неге Ақылды Неке",
      "Ақылды Неке Бастамасының Исламдық Негізі",
      "Бастама Хабарлары",
      "Бастама Хартиясы",
      "Zefaaf Туралы",
    ],
  },
  intro: {
    eyebrow: "Неге Zefaaf-ты Таңдайсыз",
    title: "Ақылды Неке: Өмірдің Жаңа Теңдеуі",
    description:
      "Ақылды Неке Бастамасы — Zefaaf платформасының басымдықтарды қайта реттеуге шақыратын саналы үндеуі. Салтанатты той залдарына, шектен тыс мехрге және сән-салтанат зергерлік бұйымдарына ақша жұмсаудың орнына, оны нағыз үй құруға және махаббат пен мейірімге толы ортақ өмір орнатуға жұмсаңыз.",
    photoAlt:
      "Жағажайда артынан түсірілген жұп суреті, ер адам қолында ақ гүл шоғы бар, әйел желбірейтін қызғылт көйлек пен хиджабта, аясында тұманды тасты мүйіс көрінеді.",
  },
  why: {
    eyebrow: "Неге Ақылды Неке",
    description:
      "Себебі қоғам некені дін жүктемеген шарттармен және шексіз күтулермен ауырлатып жіберді, ол миллиондаған жастар үшін қолжетімсіз арманға айналды. Ақылды Неке Бастамасы нағыз сұрақтарды қайта оятады: Біз неге үйленеміз? Және қалай үйлену керек?",
    cards: [
      {
        title: "Себебі дін дұрыс өлшемді белгіледі",
        paragraphs: [
          'Пайғамбар ﷺ "оның байлығына қара" демеді, керісінше: "Егер сізге дінін және мінезін ұнататын біреу келсе, оған үйлендіріңіз" деді. Бұл өлшем өзгерген жоқ, және осы негізде салынған үйлер ең тұрақты әрі ұзақ өмір сүреді.',
        ],
      },
      {
        title: "Себебі сыртқы көрініс үй салмайды",
        paragraphs: [
          "Той түні аяқталады, бірақ өмір содан кейін басталады. Бір түнде залдар мен сыртқы көрінішке жұмсалатын қаражат жылдар бойы тұратын нағыз үй құруға жеткілікті болар еді.",
        ],
      },
      {
        title: "Себебі күтудің де бағасы бар",
        paragraphs: [
          '"Дұрыс уақытты" күткен әр жыл — өтіп бара жатқан бір жыл өмір, кешіктірілген тұрақтылық және өткізіп алған береке. Бүгін істі жеңілдету ешқашан келмейтін кемелдіктен әлдеқайда жақсы.',
        ],
      },
      {
        title: "Себебі Алла ізгілік іздегендерге көмек уәде етті",
        paragraphs: [
          '"Үш адамға көмектесу — Алланың міндеті: ізгілікті қалап үйленген адам." Бұл құдайдың уәдесі банктегі қаражатты емес, шынайы ниет пен таза жүректі талап етеді.',
        ],
      },
      {
        title: "Себебі қарапайым бастама ұят емес",
        paragraphs: [
          "Ең бақытты үйлер материалдық байлықтан емес, адалдықтан басталды.",
          "Мүмкіндіктер уақыт өте дамиды, ризық кеңейеді, бірақ мінез бен ниет тұрақты қалады.",
        ],
      },
    ],
  },
  banner: {
    title: "Ақылды Неке",
    description: "Неке өмірінің негізіне жасалған инвестиция, ал дәстүрлі неке сыртқы көрінішке жұмсалатын шектен тыс шығын.",
    photoAlt: "Күн сәулесі түсіп тұрған мешітте безендірілген ағаш мінбардың жанында бірге намаз оқып жатқан жұп.",
  },
  foundation: {
    eyebrow: "Ақылды Неке Бастамасының Исламдық Негізі",
    title: "Ақылды неке — заманауи идея емес, бұл Исламның 1400 жылдан астам уақыт бойы насихаттап келе жатқан нәрсесі.",
    citations: [
      {
        quote:
          "Іштеріңдегі бойдақтарды сондай-ақ қолдарыңдағы құл, күңдердің дұрыстарын үйлендіріңдер. Егер олар кедей болса да, Алла өз кеңшілігімен оларды байытады. Алла аса кеңшілік иесі, толық білуші.",
        attribution: "Нұр сүресі — 32-аят",
      },
      {
        quote:
          "Егер сізге дінін және мінезін ұнататын біреу келсе, оған үйлендіріңіз. Олай етпесеңіздер, жерде бүлік және үлкен іріткі болады.",
        attribution: "Ат-Тирмизи риуаяты",
      },
      {
        quote: "Үш адамға көмектесу — Алланың міндеті: ізгілікті қалап үйленген адам.",
        attribution: "Ат-Тирмизи риуаяты, әл-Албани растаған",
      },
    ],
    reasons: [
      {
        title: "Кедейлік некеге кедергі емес",
        description:
          "Алла некеге байлықты шарт етпеді. Керісінше, ізгілікті қалап некеге ұмтылғандарды өз кеңшілігімен байытуға уәде берді. Материалдық кемелдікті күтіп некені кейінге қалдырған адам — Алланың өзі кепілдік берген берекені кейінге қалдырған болады.",
      },
      {
        title: "Дін мен мінез — негіз",
        description:
          "Байлық келеді де кетеді, мәртебе көтеріледі де төмендейді, бірақ дін мен мінез ғана үй құрады. Серігін тек дүниелік өлшемдермен таңдаған адам құмға салады; дінге қарап таңдаған адам тасқа салады.",
      },
      {
        title: "Қарапайымдылық — берекенің қайнар көзі",
        description:
          "Халал некеге апаратын жолды жеңілдеткен сайын, күтпеген есіктер алдыңызда ашылады. Қарапайым бастама кемшілік емес — бұл махаббат пен мейірім өсетін құнарлы топырақ.",
      },
      {
        title: "Неке — қаржылық жоба емес",
        description:
          "Біз некені жеңіл сүннеттен адамдарды бастамай тұрып-ақ титықтататын жобаға айналдырдық. Ақылды Неке Бастамасы некені өз мәніне қайтарады: әлеуметтік мәртебені өлшейтін той емес, ізгілік пен тұрақтылықты іздейтін екі адам арасындағы байланыс.",
      },
      {
        title: "Қолыңыздан келгеннен бастаңыз, қалғанын Алла толықтырады",
        description:
          "Өміріңізді бастау үшін бәрін иеленуді күтпеңіз. Ең бақытты үйлердің көбі ең қарапайым мүмкіндіктерден басталды, ал ең сәнді үйлердің көбі ішінен быт-шыт болды. Айырмашылық ниет пен мінезде жатыр.",
      },
    ],
  },
  messages: {
    eyebrow: "Бастама Хабарлары",
    title: "Әрқайсыңызға арналған сөз",
    description: "Өмірде жаңа бастама мен тұрақтылық іздейтін әрбір адамға арналған қарапайым хабар.",
    cards: [
      {
        title: "Жастарға арналған хабар",
        description:
          "Қаржылық жағынан толық жетілмегендіктен некені кейінге қалдырма. Қолыңнан келгеннен баста, адал бол, жағдайыңды жақсартуға тырыс, сонда игіліктің есіктері алдыңда ашылатынын көресің — өйткені неке тұрақтылық пен берекенің бастауы.",
      },
      {
        title: "Әкелерге арналған хабар",
        description:
          "Қызыңызға оған қарым-қатынасында Алладан қорқатын, оның абыройын сақтап, жүрегін қорғайтын ер адам қажет. Ақша келеді де кетеді, ал мінез бен дін тұрақты үй құрады. Оған сыпайылықпен қарайтын адамды таңдаңыз — оның бақытының нағыз кепілі осы.",
      },
      {
        title: "Жас қыздарға арналған хабар",
        description:
          "Некені материалдық шарттардың ұзақ тізіміне айналдырма. Өзіңізден сұраңыз: ол адал ма? Ол мені құрметтей ме? Онымен тұрақты өмір құра аламын ба? Ізгі адам еш нәрсесіз де бастай алады.",
      },
    ],
  },
  charter: {
    eyebrow: "Бастама Хартиясы",
    title: "Осы хартияға келісіп, бізбен бірге серт беріңіз және Ақылды Неке Бастамасына қосылыңыз.",
    subtitle: "Ақылды Неке Хартиясы",
    items: [
      "Мен құрмет пен түсіністікке негізделген өмір құруға тырысамын.",
      "Мен қарапайым мүмкіндіктермен және шынайы бастамамен некеге келісемін.",
      "Мен барлық мәліметтерім мен сөздерімде адал болуға серт беремін.",
      "Мен некедегі мақсатым ізгілік пен тұрақтылық екеніне серт беремін.",
      "Мен дін мен мінез байлық пен сыртқы көріністен маңыздырақ деп сенемін.",
    ],
    photoAlt: "Шөбі жасыл сулы жерде алтын түсті күн сәулесінде құшақтасып тұрған қалыңдық пен күйеу жігіт, қалыңдықтың желекбеті желмен желбірейді.",
  },
  companion: {
    eyebrow: "Zefaaf Платформасы Туралы",
    title: "Халал некеге апаратын жолдағы серігіңіз",
    description:
      "Zefaaf — мұсылмандарға құндылықтарды сақтайтын және отбасыларды нығайтатын қауіпсіз ортаны ұсынатын сенімді исламдық неке платформасы, ол сізге ақылды құралдар мен ашық тәжірибе арқылы дұрыс өмірлік серігіңізді табуға көмектеседі.",
    features: [
      {
        title: "Қауіпсіз және шариғатқа сай орта",
        description: "Біз барлық қарым-қатынаста исламдық нұсқауларды ұстанамыз — кездейсоқ таныстық та, достық та жоқ.",
      },
      {
        title: "Тәулік бойы үздіксіз қолдау",
        description: "Біздің команда сұрақтарыңызға жауап беру және қажетті бағыт-бағдар беру үшін әрдайым қолжетімді.",
      },
      {
        title: "Мамандандырылған неке кеңесі",
        description: "Бақытты әрі ұзақ некені орнату үшін исламдық құндылықтарға негізделген практикалық басшылық.",
      },
      {
        title: "Жаһандық қамту",
        description: "Сіз қай жерде болсаңыз да өмірлік серігіңізді табуға көмектесу үшін әлемнің барлық елдерін қамтиды.",
      },
      {
        title: "Zefaaf-пен қазір жолыңызды бастаңыз",
        description: "Тегін тіркеліп, Ақылды Неке Бастамасына қосылыңыз. Тіркелу тегін, ал хат алмасу әрқашан тегін.",
      },
    ],
    photoAlts: {
      mosque: "Безендірілген мешіт ішінде ақ хиджаб пен көйлектегі қалыңдық және қара смокингтегі күйеу жігіт бірге дұға етіп тұр.",
      car: "Ақ көйлек пен желекбеттегі қалыңдық ескі классикалық көліктің жанында қара смокингтегі күйеу жігітті құшақтап тұр.",
    },
  },
};

const ms: SmartMarriageCopy = {
  hero: {
    title: "Inisiatif Perkahwinan Bijak",
    description:
      "Perkahwinan dalam Islam berteraskan kebajikan dan ketenangan, bukan kemewahan dan perbelanjaan besar. Jika anda menunggu sehingga tangan anda penuh sebelum membina sebuah rumah tangga, anda mungkin perlu menunggu untuk masa yang lama.",
    cta: "Mulakan Perjalanan Perkahwinan Anda",
    photoAlts: {
      cliff: "Sepasang kekasih bergaya di atas tebing berbatu menghadap laut biru firuz dan gunung-ganang, lelaki itu mendukung wanita itu sementara skirt putihnya yang panjang berkibar ditiup angin.",
      lake: "Sepasang kekasih berdiri bersemuka di tepi tasik gunung berwarna firuz yang dikelilingi pokok pain dan gunung-ganang.",
      blossom: "Sepasang kekasih berpelukan di bawah pokok sakura merah jambu yang sedang berbunga di sebuah taman.",
    },
  },
  nav: {
    items: [
      "Apakah Inisiatif Ini",
      "Mengapa Perkahwinan Bijak",
      "Asas Islam Inisiatif Perkahwinan Bijak",
      "Mesej Inisiatif",
      "Piagam Inisiatif",
      "Tentang Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Mengapa Anda Memilih Zefaaf",
    title: "Perkahwinan Bijak: Persamaan Baharu untuk Kehidupan",
    description:
      "Inisiatif Perkahwinan Bijak adalah seruan sedar daripada platform Zefaaf untuk menyusun semula keutamaan. Daripada membelanjakan wang untuk dewan perkahwinan yang mewah, mas kahwin yang keterlaluan, dan barang kemas yang mahal, laburkannya untuk membina rumah tangga yang sebenar dan kehidupan bersama yang penuh dengan kasih sayang dan rahmat.",
    photoAlt:
      "Sepasang kekasih difoto dari belakang di sebuah pantai, lelaki itu memegang sejambak bunga putih, wanita itu memakai gaun warna pink lembut yang berkibar dan hijab, dengan tanjung berbatu yang berkabus di latar belakang.",
  },
  why: {
    eyebrow: "Mengapa Perkahwinan Bijak",
    description:
      "Kerana masyarakat telah membebankan perkahwinan dengan syarat-syarat yang tidak ditetapkan oleh agama, dan jangkaan yang tiada penghujungnya, sehingga ia menjadi impian yang tidak tercapai bagi berjuta-juta anak muda. Inisiatif Perkahwinan Bijak membawa kembali soalan yang sebenar: Mengapa kita berkahwin? Dan bagaimana seharusnya kita berkahwin?",
    cards: [
      {
        title: "Kerana Agama Menetapkan Piawaian yang Betul",
        paragraphs: [
          'Nabi ﷺ tidak bersabda lihatlah kepada hartanya, tetapi baginda bersabda: "Apabila datang kepada kamu seorang lelaki yang kamu reda agama dan akhlaknya, maka kahwinkanlah dia." Piawaian ini tidak pernah berubah, dan rumah tangga yang dibina atasnya adalah yang paling stabil dan kekal.',
        ],
      },
      {
        title: "Kerana Penampilan Tidak Membina Rumah Tangga",
        paragraphs: [
          "Malam perkahwinan berakhir, tetapi kehidupan bermula selepasnya. Apa yang dibelanjakan untuk dewan dan penampilan dalam satu malam sahaja boleh membina sebuah rumah tangga sebenar yang bertahan bertahun-tahun.",
        ],
      },
      {
        title: "Kerana Menunggu Ada Harganya",
        paragraphs: [
          'Setiap tahun anda menunggu "waktu yang sesuai" adalah satu tahun kehidupan yang berlalu, kestabilan yang tertangguh, dan keberkatan yang terlepas. Memudahkan urusan hari ini lebih baik daripada kesempurnaan yang tidak akan pernah tiba.',
        ],
      },
      {
        title: "Kerana Allah Berjanji Membantu Mereka yang Mencari Kesucian",
        paragraphs: [
          '"Tiga golongan yang berhak mendapat pertolongan Allah: orang yang berkahwin kerana ingin menjaga kesucian dirinya." Janji Ilahi ini tidak memerlukan baki bank — ia memerlukan niat yang ikhlas dan hati yang bersih.',
        ],
      },
      {
        title: "Kerana Permulaan yang Sederhana Bukan Satu Kehinaan",
        paragraphs: [
          "Rumah tangga yang paling bahagia tidak bermula dengan kekayaan material, tetapi dengan kejujuran.",
          "Kemampuan berkembang seiring masa, dan rezeki berkembang luas, tetapi akhlak dan niat itulah yang kekal tidak berubah.",
        ],
      },
    ],
  },
  banner: {
    title: "Perkahwinan Bijak",
    description: "Pelaburan dalam asas kehidupan berkahwin, manakala perkahwinan tradisional adalah perbelanjaan berlebihan untuk penampilan.",
    photoAlt: "Sepasang kekasih bersolat bersama di sebuah masjid yang disinari cahaya matahari dengan mimbar kayu yang berukir.",
  },
  foundation: {
    eyebrow: "Asas Islam Inisiatif Perkahwinan Bijak",
    title: "Perkahwinan bijak bukanlah idea moden — ia adalah apa yang telah digalakkan oleh Islam sejak lebih 1,400 tahun.",
    citations: [
      {
        quote:
          "Dan kahwinkanlah orang-orang bujang (lelaki dan perempuan) di antara kamu, dan orang-orang yang soleh dari hamba-hamba kamu, lelaki dan perempuan. Jika mereka miskin, Allah akan memberikan kekayaan kepada mereka dari limpah kurniaNya kerana Allah Maha Luas (rahmatNya dan limpah kurniaNya), lagi Maha Mengetahui.",
        attribution: "Surah An-Nur — Ayat 32",
      },
      {
        quote:
          "Apabila datang kepada kamu seorang lelaki yang kamu reda agama dan akhlaknya, maka kahwinkanlah dia. Jika kamu tidak melakukannya, akan berlaku fitnah di bumi dan kerosakan yang besar.",
        attribution: "Riwayat Al-Tirmidzi",
      },
      {
        quote: "Tiga golongan yang berhak mendapat pertolongan Allah: orang yang berkahwin kerana ingin menjaga kesucian dirinya.",
        attribution: "Riwayat Al-Tirmidzi, disahihkan oleh Al-Albani",
      },
    ],
    reasons: [
      {
        title: "Kemiskinan Tidak Menghalang Perkahwinan",
        description:
          "Allah tidak mensyaratkan kekayaan untuk berkahwin. Sebaliknya, Dia berjanji secara jelas untuk mengkayakan mereka yang mengejar perkahwinan demi menjaga kesucian diri. Sesiapa yang menangguhkan perkahwinan menunggu kesempurnaan kewangan sebenarnya telah menangguhkan keberkatan yang telah dijamin oleh Allah sendiri.",
      },
      {
        title: "Agama dan Akhlak Adalah Asasnya",
        description:
          "Kekayaan datang dan pergi, dan kedudukan naik dan turun, tetapi agama dan akhlaklah yang membina rumah tangga. Sesiapa yang memilih pasangan hanya berdasarkan piawaian duniawi membina di atas pasir; sesiapa yang memilih berdasarkan agama membina di atas batu.",
      },
      {
        title: "Kesederhanaan Adalah Punca Keberkatan",
        description:
          "Semakin anda memudahkan jalan menuju perkahwinan yang halal, semakin banyak pintu yang tidak pernah anda jangkakan akan terbuka di hadapan anda. Permulaan yang sederhana bukanlah suatu kekurangan — ia adalah tanah subur tempat kasih sayang dan rahmat tumbuh.",
      },
      {
        title: "Perkahwinan Bukan Projek Kewangan",
        description:
          "Kita telah mengubah perkahwinan daripada satu sunnah yang mudah kepada satu projek yang meletihkan orang sebelum ia bermula. Inisiatif Perkahwinan Bijak mengembalikan perkahwinan kepada intipatinya: ikatan antara dua insan yang mencari kebajikan dan kestabilan, bukan majlis untuk mengukur status sosial.",
      },
      {
        title: "Mulakan dengan Apa yang Anda Mampu, dan Allah akan Menyempurnakan Selebihnya",
        description:
          "Jangan tunggu untuk memiliki segala-galanya sebelum memulakan kehidupan anda. Kebanyakan rumah tangga yang paling bahagia bermula dengan kemampuan yang paling sederhana, dan kebanyakan rumah tangga yang paling gah runtuh dari dalam. Perbezaannya terletak pada niat dan akhlak.",
      },
    ],
  },
  messages: {
    eyebrow: "Mesej Inisiatif",
    title: "Sepatah Kata untuk Setiap Anda",
    description: "Satu mesej ringkas untuk semua yang mencari permulaan baharu dalam kehidupan dan kestabilan.",
    cards: [
      {
        title: "Mesej kepada Para Pemuda",
        description:
          "Jangan tangguhkan perkahwinan kerana anda belum lengkap dari segi kewangan. Mulakan dengan apa yang anda mampu, berlaku jujur, berusaha memperbaiki keadaan anda, dan anda akan dapati pintu-pintu kebaikan terbuka untuk anda — kerana perkahwinan adalah permulaan kestabilan dan keberkatan.",
      },
      {
        title: "Mesej kepada Para Bapa",
        description:
          "Anak perempuan anda memerlukan seorang lelaki yang takutkan Allah dalam cara dia melayaninya, yang menjaga maruahnya dan memelihara hatinya. Wang datang dan pergi, tetapi akhlak dan agamalah yang membina rumah tangga yang stabil. Pilihlah untuknya seseorang yang akan melayaninya dengan lemah lembut — itulah jaminan sebenar kebahagiaannya.",
      },
      {
        title: "Mesej kepada Para Gadis",
        description:
          "Jangan jadikan perkahwinan sebagai satu senarai panjang syarat-syarat material. Tanyalah diri anda: Adakah dia jujur? Adakah dia akan menghormati saya? Bolehkah saya membina kehidupan yang stabil bersamanya? Seorang lelaki yang soleh mungkin bermula daripada tiada apa-apa.",
      },
    ],
  },
  charter: {
    eyebrow: "Piagam Inisiatif",
    title: "Berikrarlah bersama kami dan sertai Inisiatif Perkahwinan Bijak dengan bersetuju kepada piagam ini.",
    subtitle: "Piagam Perkahwinan Bijak",
    items: [
      "Saya berusaha membina kehidupan yang berasaskan hormat-menghormati dan persefahaman.",
      "Saya menerima perkahwinan dengan kemampuan yang sederhana dan permulaan yang realistik.",
      "Saya berikrar untuk berlaku jujur dalam semua maklumat dan kenyataan saya.",
      "Saya berikrar bahawa matlamat saya dalam perkahwinan adalah kesucian dan kestabilan.",
      "Saya percaya bahawa agama dan akhlak lebih bermakna daripada kekayaan dan penampilan.",
    ],
    photoAlt: "Pengantin lelaki dan perempuan berpelukan pada waktu senja keemasan di atas tanah lembap berumput, tudung pengantin perempuan berkibar ditiup angin.",
  },
  companion: {
    eyebrow: "Tentang Platform Zefaaf",
    title: "Teman Anda di Jalan Menuju Perkahwinan Halal",
    description:
      "Zefaaf ialah platform perkahwinan Islam yang dipercayai, menyediakan orang Islam sebuah persekitaran selamat yang memelihara nilai-nilai murni dan mengukuhkan keluarga, membantu anda mencari pasangan hidup yang tepat melalui alat yang bijak dan pengalaman yang telus.",
    features: [
      {
        title: "Persekitaran Selamat dan Mematuhi Syariah",
        description: "Kami komited kepada garis panduan Islam dalam semua interaksi — tiada kenalan atau persahabatan santai.",
      },
      {
        title: "Sokongan Berterusan 24/7",
        description: "Pasukan kami sentiasa tersedia untuk menjawab soalan anda dan memberikan bimbingan yang anda perlukan.",
      },
      {
        title: "Nasihat Perkahwinan Khusus",
        description: "Bimbingan praktikal berdasarkan nilai-nilai Islam untuk membina perkahwinan yang bahagia dan berkekalan.",
      },
      {
        title: "Liputan Global",
        description: "Meliputi semua negara di seluruh dunia untuk membantu anda mencari pasangan hidup di mana sahaja anda berada.",
      },
      {
        title: "Mulakan Perjalanan Anda Sekarang Bersama Zefaaf",
        description: "Daftar secara percuma dan sertai Inisiatif Perkahwinan Bijak. Pendaftaran adalah percuma, dan mesej sentiasa percuma.",
      },
    ],
    photoAlts: {
      mosque: "Seorang pengantin perempuan bertudung dan berjubah putih serta pengantin lelaki bertuksedo hitam berdoa bersama di dalam sebuah masjid yang berukir indah.",
      car: "Seorang pengantin perempuan berjubah putih dan bertudung berpelukan dengan pengantin lelaki bertuksedo hitam di sebelah sebuah kereta klasik lama.",
    },
  },
};

const pa: SmartMarriageCopy = {
  hero: {
    title: "ਸਮਾਰਟ ਵਿਆਹ ਪਹਿਲ",
    description:
      "ਇਸਲਾਮ ਵਿੱਚ ਵਿਆਹ ਨੇਕੀ ਅਤੇ ਸ਼ਾਂਤੀ ਬਾਰੇ ਹੈ, ਨਾ ਕਿ ਫ਼ਜ਼ੂਲਖ਼ਰਚੀ ਅਤੇ ਖ਼ਰਚਿਆਂ ਬਾਰੇ। ਜੇ ਤੁਸੀਂ ਘਰ ਵਸਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਹੱਥ ਭਰੇ ਹੋਣ ਦੀ ਉਡੀਕ ਕਰਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ ਲੰਬਾ ਸਮਾਂ ਉਡੀਕ ਕਰਨੀ ਪੈ ਸਕਦੀ ਹੈ।",
    cta: "ਆਪਣੀ ਵਿਆਹ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ",
    photoAlts: {
      cliff: "ਇੱਕ ਪਥਰੀਲੀ ਚੱਟਾਨ 'ਤੇ ਪੋਜ਼ ਦਿੰਦਾ ਜੋੜਾ ਜਿੱਥੋਂ ਫ਼ਿਰੋਜ਼ੀ ਸਮੁੰਦਰ ਅਤੇ ਪਹਾੜ ਨਜ਼ਰ ਆਉਂਦੇ ਹਨ, ਆਦਮੀ ਔਰਤ ਨੂੰ ਚੁੱਕੀ ਖੜ੍ਹਾ ਹੈ ਜਦਕਿ ਉਸਦੀ ਲੰਬੀ ਚਿੱਟੀ ਸਕਰਟ ਹਵਾ ਵਿੱਚ ਲਹਿਰਾ ਰਹੀ ਹੈ।",
      lake: "ਪਾਈਨ ਦੇ ਦਰੱਖਤਾਂ ਅਤੇ ਪਹਾੜਾਂ ਨਾਲ ਘਿਰੀ ਇੱਕ ਫ਼ਿਰੋਜ਼ੀ ਪਹਾੜੀ ਝੀਲ ਦੇ ਕੰਢੇ ਆਹਮੋ-ਸਾਹਮਣੇ ਖੜ੍ਹਾ ਜੋੜਾ।",
      blossom: "ਇੱਕ ਪਾਰਕ ਵਿੱਚ ਖਿੜੇ ਹੋਏ ਗੁਲਾਬੀ ਚੈਰੀ ਬਲੌਸਮ ਦੇ ਦਰੱਖਤ ਹੇਠਾਂ ਗਲੇ ਮਿਲਦਾ ਜੋੜਾ।",
    },
  },
  nav: {
    items: [
      "ਪਹਿਲ ਕੀ ਹੈ",
      "ਸਮਾਰਟ ਵਿਆਹ ਕਿਉਂ",
      "ਸਮਾਰਟ ਵਿਆਹ ਪਹਿਲ ਦੀ ਇਸਲਾਮੀ ਬੁਨਿਆਦ",
      "ਪਹਿਲ ਦੇ ਸੰਦੇਸ਼",
      "ਪਹਿਲ ਦਾ ਚਾਰਟਰ",
      "ਜ਼ੇਫ਼ਾਫ਼ ਬਾਰੇ",
    ],
  },
  intro: {
    eyebrow: "ਤੁਸੀਂ ਜ਼ੇਫ਼ਾਫ਼ ਕਿਉਂ ਚੁਣਦੇ ਹੋ",
    title: "ਸਮਾਰਟ ਵਿਆਹ: ਜ਼ਿੰਦਗੀ ਲਈ ਇੱਕ ਨਵਾਂ ਸਮੀਕਰਨ",
    description:
      "ਸਮਾਰਟ ਵਿਆਹ ਪਹਿਲ ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ਵੱਲੋਂ ਤਰਜੀਹਾਂ ਨੂੰ ਮੁੜ ਤਰਤੀਬ ਦੇਣ ਦਾ ਇੱਕ ਸੁਚੇਤ ਸੱਦਾ ਹੈ। ਸ਼ਾਨਦਾਰ ਵਿਆਹ ਹਾਲਾਂ, ਬੇਲੋੜੇ ਦਾਜ ਅਤੇ ਮਹਿੰਗੇ ਗਹਿਣਿਆਂ 'ਤੇ ਪੈਸਾ ਖ਼ਰਚ ਕਰਨ ਦੀ ਬਜਾਏ, ਇਸਨੂੰ ਇੱਕ ਅਸਲੀ ਘਰ ਅਤੇ ਪਿਆਰ ਅਤੇ ਦਇਆ ਨਾਲ ਭਰਪੂਰ ਸਾਂਝੀ ਜ਼ਿੰਦਗੀ ਬਣਾਉਣ ਵਿੱਚ ਲਾਓ।",
    photoAlt:
      "ਇੱਕ ਬੀਚ 'ਤੇ ਪਿੱਛੋਂ ਖਿੱਚੀ ਇੱਕ ਜੋੜੇ ਦੀ ਤਸਵੀਰ, ਆਦਮੀ ਦੇ ਹੱਥ ਵਿੱਚ ਚਿੱਟੇ ਫੁੱਲਾਂ ਦਾ ਗੁਲਦਸਤਾ ਹੈ, ਔਰਤ ਹਲਕੇ ਗੁਲਾਬੀ ਵਹਿੰਦੇ ਗਾਊਨ ਅਤੇ ਹਿਜਾਬ ਵਿੱਚ ਹੈ, ਪਿਛੋਕੜ ਵਿੱਚ ਧੁੰਦਲਾ ਪਥਰੀਲਾ ਸਿਰਾ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ।",
  },
  why: {
    eyebrow: "ਸਮਾਰਟ ਵਿਆਹ ਕਿਉਂ",
    description:
      "ਕਿਉਂਕਿ ਸਮਾਜ ਨੇ ਵਿਆਹ 'ਤੇ ਅਜਿਹੀਆਂ ਸ਼ਰਤਾਂ ਅਤੇ ਬੇਅੰਤ ਉਮੀਦਾਂ ਲੱਦ ਦਿੱਤੀਆਂ ਹਨ ਜੋ ਧਰਮ ਨੇ ਕਦੇ ਨਹੀਂ ਥੋਪੀਆਂ, ਇੱਥੋਂ ਤੱਕ ਕਿ ਇਹ ਲੱਖਾਂ ਨੌਜਵਾਨਾਂ ਲਈ ਇੱਕ ਅਣਪਹੁੰਚ ਸੁਪਨਾ ਬਣ ਗਿਆ ਹੈ। ਸਮਾਰਟ ਵਿਆਹ ਪਹਿਲ ਅਸਲ ਸਵਾਲਾਂ ਨੂੰ ਵਾਪਸ ਲਿਆਉਂਦੀ ਹੈ: ਅਸੀਂ ਵਿਆਹ ਕਿਉਂ ਕਰਦੇ ਹਾਂ? ਅਤੇ ਸਾਨੂੰ ਵਿਆਹ ਕਿਵੇਂ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
    cards: [
      {
        title: "ਕਿਉਂਕਿ ਦੀਨ ਨੇ ਸਹੀ ਮਿਆਰ ਤੈਅ ਕੀਤਾ",
        paragraphs: [
          'ਨਬੀ ﷺ ਨੇ ਇਹ ਨਹੀਂ ਕਿਹਾ ਕਿ ਉਸਦੀ ਦੌਲਤ ਵੇਖੋ, ਸਗੋਂ ਫ਼ਰਮਾਇਆ: "ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਕੋਈ ਅਜਿਹਾ ਆਵੇ ਜਿਸਦਾ ਦੀਨ ਅਤੇ ਅਖ਼ਲਾਕ਼ ਤੁਹਾਨੂੰ ਪਸੰਦ ਹੋਵੇ, ਤਾਂ ਉਸਦਾ ਨਿਕਾਹ ਕਰ ਦਿਓ।" ਇਹ ਮਿਆਰ ਕਦੇ ਨਹੀਂ ਬਦਲਿਆ, ਅਤੇ ਇਸ ਤੇ ਬਣੇ ਘਰ ਸਭ ਤੋਂ ਸਥਿਰ ਅਤੇ ਟਿਕਾਊ ਹੁੰਦੇ ਹਨ।',
        ],
      },
      {
        title: "ਕਿਉਂਕਿ ਦਿਖਾਵਾ ਘਰ ਨਹੀਂ ਬਣਾਉਂਦਾ",
        paragraphs: [
          "ਵਿਆਹ ਦੀ ਰਾਤ ਖ਼ਤਮ ਹੁੰਦੀ ਹੈ, ਪਰ ਜ਼ਿੰਦਗੀ ਇਸਤੋਂ ਬਾਅਦ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ। ਜੋ ਪੈਸਾ ਇੱਕ ਰਾਤ ਵਿੱਚ ਹਾਲਾਂ ਅਤੇ ਦਿਖਾਵੇ 'ਤੇ ਖ਼ਰਚ ਹੁੰਦਾ ਹੈ, ਉਸ ਨਾਲ ਸਾਲਾਂ ਤੱਕ ਚੱਲਣ ਵਾਲਾ ਇੱਕ ਅਸਲੀ ਘਰ ਵਸਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।",
        ],
      },
      {
        title: "ਕਿਉਂਕਿ ਉਡੀਕ ਦੀ ਵੀ ਇੱਕ ਕੀਮਤ ਹੁੰਦੀ ਹੈ",
        paragraphs: [
          'ਹਰ ਸਾਲ ਜੋ ਤੁਸੀਂ "ਸਹੀ ਸਮੇਂ" ਦੀ ਉਡੀਕ ਵਿੱਚ ਗੁਜ਼ਾਰਦੇ ਹੋ, ਉਹ ਜ਼ਿੰਦਗੀ ਦਾ ਇੱਕ ਸਾਲ ਹੈ ਜੋ ਬੀਤ ਜਾਂਦਾ ਹੈ, ਸਥਿਰਤਾ ਜੋ ਟਲਦੀ ਜਾਂਦੀ ਹੈ, ਅਤੇ ਬਰਕਤ ਜੋ ਖੁੰਝ ਜਾਂਦੀ ਹੈ। ਅੱਜ ਚੀਜ਼ਾਂ ਨੂੰ ਆਸਾਨ ਬਣਾਉਣਾ ਉਸ ਸੰਪੂਰਨਤਾ ਨਾਲੋਂ ਬਿਹਤਰ ਹੈ ਜੋ ਕਦੇ ਆਉਂਦੀ ਹੀ ਨਹੀਂ।',
        ],
      },
      {
        title: "ਕਿਉਂਕਿ ਅੱਲਾਹ ਨੇ ਨੇਕੀ ਭਾਲਣ ਵਾਲਿਆਂ ਦੀ ਮਦਦ ਦਾ ਵਾਅਦਾ ਕੀਤਾ",
        paragraphs: [
          '"ਤਿੰਨ ਲੋਕਾਂ ਦੀ ਮਦਦ ਕਰਨਾ ਅੱਲਾਹ ਦਾ ਜ਼ਿੰਮਾ ਹੈ: ਉਹ ਜੋ ਪਾਕਦਾਮਨੀ ਚਾਹੁੰਦਿਆਂ ਨਿਕਾਹ ਕਰੇ।" ਇਹ ਰੱਬੀ ਵਾਅਦਾ ਬੈਂਕ ਬੈਲੰਸ ਨਹੀਂ ਮੰਗਦਾ — ਇਹ ਸਿਰਫ਼ ਇੱਕ ਸੱਚੀ ਨੀਅਤ ਅਤੇ ਪਾਕ ਦਿਲ ਮੰਗਦਾ ਹੈ।',
        ],
      },
      {
        title: "ਕਿਉਂਕਿ ਇੱਕ ਸਾਦੀ ਸ਼ੁਰੂਆਤ ਸ਼ਰਮ ਦੀ ਗੱਲ ਨਹੀਂ",
        paragraphs: [
          "ਸਭ ਤੋਂ ਖ਼ੁਸ਼ਹਾਲ ਘਰਾਂ ਦੀ ਸ਼ੁਰੂਆਤ ਭੌਤਿਕ ਦੌਲਤ ਨਾਲ ਨਹੀਂ, ਸਗੋਂ ਇਮਾਨਦਾਰੀ ਨਾਲ ਹੋਈ।",
          "ਯੋਗਤਾਵਾਂ ਸਮੇਂ ਨਾਲ ਵਿਕਸਿਤ ਹੁੰਦੀਆਂ ਹਨ, ਅਤੇ ਰੋਜ਼ੀ-ਰੋਟੀ ਵਧਦੀ ਹੈ, ਪਰ ਕਿਰਦਾਰ ਅਤੇ ਨੀਅਤ ਹੀ ਸਥਿਰ ਰਹਿੰਦੇ ਹਨ।",
        ],
      },
    ],
  },
  banner: {
    title: "ਸਮਾਰਟ ਵਿਆਹ",
    description: "ਵਿਆਹੁਤਾ ਜ਼ਿੰਦਗੀ ਦੀ ਬੁਨਿਆਦ ਵਿੱਚ ਇੱਕ ਨਿਵੇਸ਼, ਜਦਕਿ ਰਵਾਇਤੀ ਵਿਆਹ ਦਿਖਾਵੇ 'ਤੇ ਬੇਲੋੜਾ ਖ਼ਰਚ ਹੈ।",
    photoAlt: "ਧੁੱਪ ਨਾਲ ਭਰੀ ਇੱਕ ਮਸਜਿਦ ਵਿੱਚ ਇਕੱਠੇ ਨਮਾਜ਼ ਪੜ੍ਹਦਾ ਜੋੜਾ, ਨਾਲ ਇੱਕ ਸਜੀ ਹੋਈ ਲੱਕੜ ਦੀ ਮਿੰਬਰ।",
  },
  foundation: {
    eyebrow: "ਸਮਾਰਟ ਵਿਆਹ ਪਹਿਲ ਦੀ ਇਸਲਾਮੀ ਬੁਨਿਆਦ",
    title: "ਸਮਾਰਟ ਵਿਆਹ ਕੋਈ ਆਧੁਨਿਕ ਵਿਚਾਰ ਨਹੀਂ ਹੈ — ਇਹ ਉਹ ਹੈ ਜਿਸਨੂੰ ਇਸਲਾਮ ਨੇ 1,400 ਸਾਲਾਂ ਤੋਂ ਵੱਧ ਸਮੇਂ ਤੋਂ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ ਹੈ।",
    citations: [
      {
        quote:
          "ਤੁਹਾਡੇ ਵਿੱਚੋਂ ਜਿਹੜੇ ਵੀ ਪੁਰਸ਼ ਤੇ ਇਸਤਰੀਆਂ ਦੇ ਨਿਕਾਹ ਨਹੀਂ ਹੋਏ ਉਹਨਾਂ ਦੇ ਨਿਕਾਹ ਕਰ ਦਿਓ ਅਤੇ ਆਪਣੇ ਨੇਕ ਆਚਰਨ ਵਾਲੇ ਗ਼ੁਲਾਮ ਮੁੰਡੇ ਕੁੜੀਆਂ ਦੇ ਵੀ (ਨਿਕਾਹ ਕਰ ਦਿਓ)। ਜੇਕਰ ਉਹ ਗ਼ਰੀਬ ਵੀ ਹੋਣ ਤਾਂ ਅੱਲਾਹ ਆਪਣੇ ਫ਼ਜ਼ਲਾਂ ਨਾਲ ਉਹਨਾਂ ਨੂੰ ਅਮੀਰ ਬਣਾ ਦੇਵੇਗਾ। ਅੱਲਾਹ ਵੱਡੀਆਂ ਗੁੰਜਾਇਸ਼ਾਂ ਵਾਲਾ ਤੇ (ਹਰੇਕ ਦੇ ਹਾਲ ਦਾ) ਜਾਣਨਹਾਰ ਹੈ।",
        attribution: "ਸੂਰਃ ਅਨ-ਨੂਰ — ਆਇਤ 32",
      },
      {
        quote:
          "ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਕੋਈ ਅਜਿਹਾ ਆਵੇ ਜਿਸਦਾ ਦੀਨ ਅਤੇ ਅਖ਼ਲਾਕ਼ ਤੁਹਾਨੂੰ ਪਸੰਦ ਹੋਵੇ, ਤਾਂ ਉਸਦਾ ਨਿਕਾਹ ਕਰ ਦਿਓ। ਜੇ ਤੁਸੀਂ ਅਜਿਹਾ ਨਾ ਕੀਤਾ, ਤਾਂ ਧਰਤੀ 'ਤੇ ਫ਼ਿਤਨਾ ਅਤੇ ਵੱਡਾ ਫ਼ਸਾਦ ਫੈਲੇਗਾ।",
        attribution: "ਹਵਾਲਾ: ਤਿਰਮਿਜ਼ੀ",
      },
      {
        quote: "ਤਿੰਨ ਲੋਕਾਂ ਦੀ ਮਦਦ ਕਰਨਾ ਅੱਲਾਹ ਦਾ ਜ਼ਿੰਮਾ ਹੈ: ਉਹ ਜੋ ਪਾਕਦਾਮਨੀ ਚਾਹੁੰਦਿਆਂ ਨਿਕਾਹ ਕਰੇ।",
        attribution: "ਹਵਾਲਾ: ਤਿਰਮਿਜ਼ੀ, ਅਲ-ਅਲਬਾਨੀ ਦੁਆਰਾ ਪ੍ਰਮਾਣਿਤ",
      },
    ],
    reasons: [
      {
        title: "ਗ਼ਰੀਬੀ ਵਿਆਹ ਨੂੰ ਨਹੀਂ ਰੋਕਦੀ",
        description:
          "ਅੱਲਾਹ ਨੇ ਵਿਆਹ ਲਈ ਦੌਲਤ ਦੀ ਸ਼ਰਤ ਨਹੀਂ ਰੱਖੀ। ਸਗੋਂ, ਉਸਨੇ ਸਪੱਸ਼ਟ ਤੌਰ 'ਤੇ ਵਾਅਦਾ ਕੀਤਾ ਕਿ ਜੋ ਨੇਕੀ ਭਾਲਦਿਆਂ ਵਿਆਹ ਦੀ ਭਾਲ ਕਰਦੇ ਹਨ, ਉਹਨਾਂ ਨੂੰ ਅਮੀਰ ਬਣਾਏਗਾ। ਜਿਹੜਾ ਕੋਈ ਭੌਤਿਕ ਸੰਪੂਰਨਤਾ ਦੀ ਉਡੀਕ ਵਿੱਚ ਵਿਆਹ ਟਾਲਦਾ ਹੈ, ਉਸਨੇ ਅਸਲ ਵਿੱਚ ਉਸ ਬਰਕਤ ਨੂੰ ਟਾਲਿਆ ਹੈ ਜਿਸਦੀ ਗਾਰੰਟੀ ਖ਼ੁਦ ਅੱਲਾਹ ਨੇ ਲਈ ਹੈ।",
      },
      {
        title: "ਦੀਨ ਅਤੇ ਅਖ਼ਲਾਕ਼ ਹੀ ਬੁਨਿਆਦ ਹਨ",
        description:
          "ਦੌਲਤ ਆਉਂਦੀ-ਜਾਂਦੀ ਰਹਿੰਦੀ ਹੈ, ਅਤੇ ਰੁਤਬਾ ਵਧਦਾ-ਘਟਦਾ ਰਹਿੰਦਾ ਹੈ, ਪਰ ਦੀਨ ਅਤੇ ਅਖ਼ਲਾਕ਼ ਹੀ ਘਰ ਬਣਾਉਂਦੇ ਹਨ। ਜੋ ਸਿਰਫ਼ ਦੁਨਿਆਵੀ ਮਿਆਰਾਂ 'ਤੇ ਸਾਥੀ ਚੁਣਦਾ ਹੈ ਉਹ ਰੇਤ 'ਤੇ ਘਰ ਬਣਾਉਂਦਾ ਹੈ; ਜੋ ਦੀਨ ਦੇ ਆਧਾਰ 'ਤੇ ਚੁਣਦਾ ਹੈ ਉਹ ਚੱਟਾਨ 'ਤੇ ਘਰ ਬਣਾਉਂਦਾ ਹੈ।",
      },
      {
        title: "ਸਾਦਗੀ ਬਰਕਤ ਦਾ ਸ੍ਰੋਤ ਹੈ",
        description:
          "ਤੁਸੀਂ ਹਲਾਲ ਵਿਆਹ ਦਾ ਰਾਹ ਜਿੰਨਾ ਸੌਖਾ ਬਣਾਓਗੇ, ਓਨੇ ਹੀ ਅਜਿਹੇ ਦਰਵਾਜ਼ੇ ਤੁਹਾਡੇ ਸਾਹਮਣੇ ਖੁੱਲ੍ਹਣਗੇ ਜਿਹਨਾਂ ਦੀ ਤੁਹਾਨੂੰ ਕਦੇ ਉਮੀਦ ਨਹੀਂ ਸੀ। ਇੱਕ ਸਾਦੀ ਸ਼ੁਰੂਆਤ ਕੋਈ ਕਮੀ ਨਹੀਂ ਹੈ — ਇਹ ਇੱਕ ਉਪਜਾਊ ਜ਼ਮੀਨ ਹੈ ਜਿੱਥੇ ਪਿਆਰ ਅਤੇ ਦਇਆ ਵਧਦੇ-ਫੁੱਲਦੇ ਹਨ।",
      },
      {
        title: "ਵਿਆਹ ਕੋਈ ਵਿੱਤੀ ਪ੍ਰੋਜੈਕਟ ਨਹੀਂ ਹੈ",
        description:
          "ਅਸੀਂ ਵਿਆਹ ਨੂੰ ਇੱਕ ਸੌਖੀ ਪਰੰਪਰਾ ਤੋਂ ਬਦਲ ਕੇ ਇੱਕ ਅਜਿਹਾ ਪ੍ਰੋਜੈਕਟ ਬਣਾ ਦਿੱਤਾ ਹੈ ਜੋ ਸ਼ੁਰੂ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਲੋਕਾਂ ਨੂੰ ਥਕਾ ਦਿੰਦਾ ਹੈ। ਸਮਾਰਟ ਵਿਆਹ ਪਹਿਲ ਵਿਆਹ ਨੂੰ ਉਸਦੇ ਅਸਲ ਮਕਸਦ ਵੱਲ ਵਾਪਸ ਲਿਆਉਂਦੀ ਹੈ: ਨੇਕੀ ਅਤੇ ਸਥਿਰਤਾ ਭਾਲਣ ਵਾਲੇ ਦੋ ਲੋਕਾਂ ਵਿਚਕਾਰ ਇੱਕ ਰਿਸ਼ਤਾ, ਨਾ ਕਿ ਸਮਾਜਿਕ ਰੁਤਬੇ ਨੂੰ ਮਾਪਣ ਦਾ ਇੱਕ ਸਮਾਗਮ।",
      },
      {
        title: "ਜੋ ਤੁਹਾਡੇ ਕੋਲ ਹੈ ਉਸ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ, ਅਤੇ ਅੱਲਾਹ ਬਾਕੀ ਪੂਰਾ ਕਰੇਗਾ",
        description:
          "ਆਪਣੀ ਜ਼ਿੰਦਗੀ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਭ ਕੁਝ ਹੋਣ ਦੀ ਉਡੀਕ ਨਾ ਕਰੋ। ਬਹੁਤ ਸਾਰੇ ਸਭ ਤੋਂ ਖ਼ੁਸ਼ਹਾਲ ਘਰਾਂ ਦੀ ਸ਼ੁਰੂਆਤ ਸਭ ਤੋਂ ਸਾਦੇ ਸਾਧਨਾਂ ਨਾਲ ਹੋਈ, ਅਤੇ ਬਹੁਤ ਸਾਰੇ ਸਭ ਤੋਂ ਸ਼ਾਨਦਾਰ ਘਰ ਅੰਦਰੋਂ ਢਹਿ ਗਏ। ਫ਼ਰਕ ਨੀਅਤ ਅਤੇ ਕਿਰਦਾਰ ਵਿੱਚ ਹੈ।",
      },
    ],
  },
  messages: {
    eyebrow: "ਪਹਿਲ ਦੇ ਸੰਦੇਸ਼",
    title: "ਤੁਹਾਡੇ ਵਿੱਚੋਂ ਹਰੇਕ ਲਈ ਇੱਕ ਗੱਲ",
    description: "ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਨਵੀਂ ਸ਼ੁਰੂਆਤ ਅਤੇ ਸਥਿਰਤਾ ਭਾਲਣ ਵਾਲੇ ਹਰ ਕਿਸੇ ਲਈ ਇੱਕ ਸਾਦਾ ਸੰਦੇਸ਼।",
    cards: [
      {
        title: "ਨੌਜਵਾਨਾਂ ਦੇ ਨਾਮ ਇੱਕ ਸੰਦੇਸ਼",
        description:
          "ਸਿਰਫ਼ ਇਸ ਲਈ ਵਿਆਹ ਨੂੰ ਨਾ ਟਾਲੋ ਕਿਉਂਕਿ ਤੁਸੀਂ ਵਿੱਤੀ ਤੌਰ 'ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਰੱਥ ਨਹੀਂ ਹੋ। ਜੋ ਤੁਹਾਡੇ ਕੋਲ ਹੈ ਉਸ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ, ਇਮਾਨਦਾਰ ਰਹੋ, ਆਪਣੀ ਹਾਲਤ ਸੁਧਾਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਰਹੋ, ਅਤੇ ਤੁਸੀਂ ਵੇਖੋਗੇ ਕਿ ਭਲਾਈ ਦੇ ਦਰਵਾਜ਼ੇ ਤੁਹਾਡੇ ਲਈ ਖੁੱਲ੍ਹ ਜਾਂਦੇ ਹਨ — ਕਿਉਂਕਿ ਵਿਆਹ ਸਥਿਰਤਾ ਅਤੇ ਬਰਕਤ ਦੀ ਸ਼ੁਰੂਆਤ ਹੈ।",
      },
      {
        title: "ਪਿਤਾਵਾਂ ਦੇ ਨਾਮ ਇੱਕ ਸੰਦੇਸ਼",
        description:
          "ਤੁਹਾਡੀ ਧੀ ਨੂੰ ਅਜਿਹੇ ਆਦਮੀ ਦੀ ਲੋੜ ਹੈ ਜੋ ਉਸ ਨਾਲ ਵਿਵਹਾਰ ਵਿੱਚ ਅੱਲਾਹ ਤੋਂ ਡਰਦਾ ਹੋਵੇ, ਜੋ ਉਸਦੀ ਇੱਜ਼ਤ ਦੀ ਰਾਖੀ ਕਰੇ ਅਤੇ ਉਸਦੇ ਦਿਲ ਦਾ ਖ਼ਿਆਲ ਰੱਖੇ। ਪੈਸਾ ਆਉਂਦਾ-ਜਾਂਦਾ ਰਹਿੰਦਾ ਹੈ, ਪਰ ਕਿਰਦਾਰ ਅਤੇ ਦੀਨ ਹੀ ਸਥਿਰ ਘਰ ਬਣਾਉਂਦੇ ਹਨ। ਉਸ ਲਈ ਅਜਿਹਾ ਵਿਅਕਤੀ ਚੁਣੋ ਜੋ ਉਸ ਨਾਲ ਨਰਮੀ ਨਾਲ ਪੇਸ਼ ਆਵੇ — ਇਹੀ ਉਸਦੀ ਖ਼ੁਸ਼ੀ ਦੀ ਅਸਲੀ ਗਾਰੰਟੀ ਹੈ।",
      },
      {
        title: "ਨੌਜਵਾਨ ਕੁੜੀਆਂ ਦੇ ਨਾਮ ਇੱਕ ਸੰਦੇਸ਼",
        description:
          "ਵਿਆਹ ਨੂੰ ਭੌਤਿਕ ਸ਼ਰਤਾਂ ਦੀ ਲੰਬੀ ਸੂਚੀ ਨਾ ਬਣਾਓ। ਆਪਣੇ ਆਪ ਤੋਂ ਪੁੱਛੋ: ਕੀ ਉਹ ਇਮਾਨਦਾਰ ਹੈ? ਕੀ ਉਹ ਮੇਰੀ ਇੱਜ਼ਤ ਕਰੇਗਾ? ਕੀ ਮੈਂ ਉਸ ਨਾਲ ਇੱਕ ਸਥਿਰ ਜ਼ਿੰਦਗੀ ਬਣਾ ਸਕਦੀ ਹਾਂ? ਇੱਕ ਨੇਕ ਆਦਮੀ ਕਿਤੋਂ ਵੀ, ਭਾਵੇਂ ਖ਼ਾਲੀ ਹੱਥੋਂ ਵੀ ਆਪਣੀ ਸ਼ੁਰੂਆਤ ਕਰ ਸਕਦਾ ਹੈ।",
      },
    ],
  },
  charter: {
    eyebrow: "ਪਹਿਲ ਦਾ ਚਾਰਟਰ",
    title: "ਇਸ ਚਾਰਟਰ ਨਾਲ ਸਹਿਮਤ ਹੋ ਕੇ ਸਾਡੇ ਨਾਲ ਪ੍ਰਣ ਲਓ ਅਤੇ ਸਮਾਰਟ ਵਿਆਹ ਪਹਿਲ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ।",
    subtitle: "ਸਮਾਰਟ ਵਿਆਹ ਚਾਰਟਰ",
    items: [
      "ਮੈਂ ਸਤਿਕਾਰ ਅਤੇ ਸਮਝ 'ਤੇ ਆਧਾਰਿਤ ਜ਼ਿੰਦਗੀ ਬਣਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦਾ/ਕਰਦੀ ਹਾਂ।",
      "ਮੈਂ ਸਾਧਾਰਨ ਸਾਧਨਾਂ ਅਤੇ ਇੱਕ ਯਥਾਰਥਵਾਦੀ ਸ਼ੁਰੂਆਤ ਨਾਲ ਵਿਆਹ ਸਵੀਕਾਰ ਕਰਦਾ/ਕਰਦੀ ਹਾਂ।",
      "ਮੈਂ ਆਪਣੀ ਸਾਰੀ ਜਾਣਕਾਰੀ ਅਤੇ ਗੱਲਾਂ ਵਿੱਚ ਇਮਾਨਦਾਰੀ ਦਾ ਪ੍ਰਣ ਲੈਂਦਾ/ਲੈਂਦੀ ਹਾਂ।",
      "ਮੈਂ ਵਾਅਦਾ ਕਰਦਾ/ਕਰਦੀ ਹਾਂ ਕਿ ਵਿਆਹ ਵਿੱਚ ਮੇਰਾ ਟੀਚਾ ਨੇਕੀ ਅਤੇ ਸਥਿਰਤਾ ਹੈ।",
      "ਮੈਂ ਮੰਨਦਾ/ਮੰਨਦੀ ਹਾਂ ਕਿ ਦੀਨ ਅਤੇ ਅਖ਼ਲਾਕ਼ ਦੌਲਤ ਅਤੇ ਦਿਖਾਵੇ ਨਾਲੋਂ ਵੱਧ ਮਾਅਨੇ ਰੱਖਦੇ ਹਨ।",
    ],
    photoAlt: "ਇੱਕ ਹਰੀ-ਭਰੀ ਦਲਦਲੀ ਜ਼ਮੀਨ 'ਤੇ ਸੁਨਹਿਰੀ ਧੁੱਪ ਵਿੱਚ ਗਲੇ ਮਿਲਦੇ ਲਾੜਾ-ਲਾੜੀ, ਲਾੜੀ ਦਾ ਘੁੰਡ ਹਵਾ ਵਿੱਚ ਲਹਿਰਾ ਰਿਹਾ ਹੈ।",
  },
  companion: {
    eyebrow: "ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ਬਾਰੇ",
    title: "ਹਲਾਲ ਵਿਆਹ ਦੇ ਰਾਹ 'ਤੇ ਤੁਹਾਡਾ ਸਾਥੀ",
    description:
      "ਜ਼ੇਫ਼ਾਫ਼ ਇੱਕ ਭਰੋਸੇਯੋਗ ਇਸਲਾਮੀ ਵਿਆਹ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਮੁਸਲਮਾਨਾਂ ਨੂੰ ਇੱਕ ਸੁਰੱਖਿਅਤ ਮਾਹੌਲ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ ਜੋ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਦੀ ਰਾਖੀ ਕਰਦਾ ਹੈ ਅਤੇ ਪਰਿਵਾਰਾਂ ਨੂੰ ਮਜ਼ਬੂਤ ਬਣਾਉਂਦਾ ਹੈ, ਅਤੇ ਸਮਾਰਟ ਸਾਧਨਾਂ ਅਤੇ ਇੱਕ ਪਾਰਦਰਸ਼ੀ ਤਜਰਬੇ ਰਾਹੀਂ ਤੁਹਾਨੂੰ ਸਹੀ ਜੀਵਨ ਸਾਥੀ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
    features: [
      {
        title: "ਸੁਰੱਖਿਅਤ ਅਤੇ ਸ਼ਰੀਆ-ਅਨੁਕੂਲ ਮਾਹੌਲ",
        description: "ਅਸੀਂ ਸਾਰੀਆਂ ਗੱਲਾਂਬਾਤਾਂ ਵਿੱਚ ਇਸਲਾਮੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦੇ ਹਾਂ — ਕੋਈ ਆਮ ਜਾਣ-ਪਛਾਣ ਜਾਂ ਦੋਸਤੀ ਨਹੀਂ।",
      },
      {
        title: "24/7 ਲਗਾਤਾਰ ਸਹਾਇਤਾ",
        description: "ਸਾਡੀ ਟੀਮ ਤੁਹਾਡੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇਣ ਅਤੇ ਤੁਹਾਨੂੰ ਲੋੜੀਂਦਾ ਮਾਰਗਦਰਸ਼ਨ ਦੇਣ ਲਈ ਹਮੇਸ਼ਾ ਉਪਲਬਧ ਹੈ।",
      },
      {
        title: "ਵਿਸ਼ੇਸ਼ ਵਿਆਹ ਸਲਾਹ",
        description: "ਇੱਕ ਖ਼ੁਸ਼ਹਾਲ ਅਤੇ ਟਿਕਾਊ ਵਿਆਹ ਸਥਾਪਿਤ ਕਰਨ ਲਈ ਇਸਲਾਮੀ ਕਦਰਾਂ-ਕੀਮਤਾਂ 'ਤੇ ਆਧਾਰਿਤ ਵਿਹਾਰਕ ਮਾਰਗਦਰਸ਼ਨ।",
      },
      {
        title: "ਗਲੋਬਲ ਕਵਰੇਜ",
        description: "ਦੁਨੀਆ ਭਰ ਦੇ ਸਾਰੇ ਦੇਸ਼ਾਂ ਨੂੰ ਕਵਰ ਕਰਦੇ ਹੋਏ, ਤੁਸੀਂ ਜਿੱਥੇ ਵੀ ਹੋਵੋ ਜੀਵਨ ਸਾਥੀ ਲੱਭਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ।",
      },
      {
        title: "ਹੁਣੇ ਜ਼ੇਫ਼ਾਫ਼ ਨਾਲ ਆਪਣੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ",
        description: "ਮੁਫ਼ਤ ਵਿੱਚ ਰਜਿਸਟਰ ਕਰੋ ਅਤੇ ਸਮਾਰਟ ਵਿਆਹ ਪਹਿਲ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ। ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਮੁਫ਼ਤ ਹੈ, ਅਤੇ ਮੈਸੇਜਿੰਗ ਹਮੇਸ਼ਾ ਮੁਫ਼ਤ ਰਹਿੰਦੀ ਹੈ।",
      },
    ],
    photoAlts: {
      mosque: "ਇੱਕ ਸਜੀ ਹੋਈ ਮਸਜਿਦ ਦੇ ਅੰਦਰ ਚਿੱਟੇ ਹਿਜਾਬ ਅਤੇ ਗਾਊਨ ਵਿੱਚ ਲਾੜੀ ਅਤੇ ਕਾਲੇ ਟਕਸੀਡੋ ਵਿੱਚ ਲਾੜਾ ਇਕੱਠੇ ਦੁਆ ਕਰਦੇ ਹੋਏ।",
      car: "ਚਿੱਟੇ ਗਾਊਨ ਅਤੇ ਘੁੰਡ ਵਿੱਚ ਲਾੜੀ ਇੱਕ ਪੁਰਾਣੀ ਕਲਾਸਿਕ ਕਾਰ ਦੇ ਕੋਲ ਕਾਲੇ ਟਕਸੀਡੋ ਵਿੱਚ ਲਾੜੇ ਨੂੰ ਗਲੇ ਲਗਾਉਂਦੀ ਹੋਈ।",
    },
  },
};

const ps: SmartMarriageCopy = {
  hero: {
    title: "د هوښیار واده بهیر",
    description:
      "په اسلام کې واده د پاکوالي او آرامۍ په اړه دی، نه د تجمل او لګښتونو په اړه. که تاسو د کور جوړولو دمخه د خپلو لاسونو د ډکیدو تر ټولو انتظار وباسئ، شاید ډیر اوږد انتظار مو په برخه شي.",
    cta: "خپل د واده سفر پیل کړئ",
    photoAlts: {
      cliff: "یو جوړه په یوه ډبرینه غونډۍ کې ولاړه ده چې فیروزي بحر او غرونو ته کتنه کوي، سړی ښځه پورته کړې ده پداسې حال کې چې د هغې اوږده سپینه دامنۍ په هوا کې خوځیږي.",
      lake: "یوه جوړه د صنوبر ونو او غرونو تر منځ یوې فیروزي غرنۍ جهيل تر څنګ مخامخ ولاړه ده.",
      blossom: "یوه جوړه په یو پارک کې د ګلاڼ ګلاب رنګه چري ونې لاندې یو بل ته منګولې کوي.",
    },
  },
  nav: {
    items: [
      "بهیر څه شی دی",
      "ولې هوښیار واده",
      "د هوښیار واده بهیر اسلامي بنسټ",
      "د بهیر پیغامونه",
      "د بهیر منشور",
      "د زفاف په اړه",
    ],
  },
  intro: {
    eyebrow: "ولې تاسو زفاف غوره کوئ",
    title: "هوښیار واده: د ژوند لپاره یوه نوې معادله",
    description:
      "د هوښیار واده بهیر د زفاف پلیټ‌فارم له لوري د لومړیتوبونو بیا تنظیم لپاره یو پوهاند غوښتنه ده. د تجملي د واده تالارونو، ډیرو مهرونو او ګرانو زیوراتو پر ځای پیسې لګول، دا په یو ریښتینی کور او د مینې او رحمت ډک ګډ ژوند جوړولو کې پانګه اچونه وکړئ.",
    photoAlt:
      "له شا نه اخیستل شوی د یوې جوړې انځور په یوه ساحل کې، سړی په لاس کې سپین ګلان لري، ښځه په ګلابي بهیدونکي جامو او حجاب کې ده، پس منظر کې یو غبارجن ډبرین ټاپووزمه ښکاري.",
  },
  why: {
    eyebrow: "ولې هوښیار واده",
    description:
      "ځکه ټولنې واده د داسې شرایطو او بې پایه هیلو سره درانه کړی چې دین یې هیڅکله نه دی تحمیل کړی، تر دې چې دا د میلیونونو ځوانانو لپاره یو ناشونی خوب شوی. د هوښیار واده بهیر ریښتینې پوښتنې بیرته راولي: موږ ولې واده کوو؟ او موږ باید څنګه واده وکړو؟",
    cards: [
      {
        title: "ځکه چې دین سم معیار ټاکلی",
        paragraphs: [
          'پیغمبر ﷺ ونه ویل چې د هغه شتمنۍ ته وګورئ، بلکې یې وویل: "که تاسو ته یو داسې کس راشي چې تاسو یې له دین او اخلاقو رضایت لرئ، نو هغه ته یې واده وکړئ." دا معیار هیڅکله نه دی بدل شوی، او په دې بنسټ جوړ شوي کورونه ترټولو باثباته او پایښت لرونکي دي.',
        ],
      },
      {
        title: "ځکه چې ظاهري ښکارندې کور نه جوړوي",
        paragraphs: [
          "د واده شپه پای ته رسیږي، خو ژوند له هغې وروسته پیل کیږي. هغه پیسې چې یوازې په یوه شپه کې پر تالارونو او ښکارندو لګول کیږي، کولی شي یو ریښتینی کور جوړ کړي چې کلونه پایښت ولري.",
        ],
      },
      {
        title: "ځکه چې انتظار هم بیه لري",
        paragraphs: [
          'هر کال چې تاسو د "سم وخت" انتظار باسئ، دا د ژوند یو کال دی چې تیریږي، ثبات چې وځنډیږي، او برکت چې له لاسه ورځي. نن ورځ کارونه اسانه کول له هغه کمال څخه غوره دي چې هیڅکله نه راځي.',
        ],
      },
      {
        title: "ځکه چې الله له پاکوالي غوښتونکو سره د مرستې ژمنه کړې",
        paragraphs: [
          '"درې کسان دي چې د الله مرسته پرې حقه ده: هغه څوک چې پاکوالی غواړي او واده کوي." دا الهي ژمنه د بانک حساب نه غواړي — دا یوازې یو رښتینی نیت او پاک زړه غواړي.',
        ],
      },
      {
        title: "ځکه چې یوه ساده پیل شرم نه دی",
        paragraphs: [
          "ترټولو خوشحاله کورونه له مادي شتمنۍ نه، بلکې له رښتینولۍ نه پیل شوي دي.",
          "وړتیاوې د وخت په تیریدو سره وده کوي، او روزي پراخیږي، خو اخلاق او نیت هغه څه دي چې تلپاتې پاتې کیږي.",
        ],
      },
    ],
  },
  banner: {
    title: "هوښیار واده",
    description: "د واده ژوند په بنسټ کې پانګه اچونه، پداسې حال کې چې دودیز واده پر ښکارندو زیات لګښت دی.",
    photoAlt: "یوه جوړه په لمر ځلیدونکي جومات کې یوځای لمونځ کوي، تر څنګ یو ښکلی زیب شوی د لرګي منبر.",
  },
  foundation: {
    eyebrow: "د هوښیار واده بهیر اسلامي بنسټ",
    title: "هوښیار واده یوه معاصره نظریه نه ده — دا هغه څه دي چې اسلام یې له 1,400 کلونو راهیسې هڅولي دي.",
    citations: [
      {
        quote:
          "ستاسو له بې واده كسانو او ستاسي له مریانو او وینځو څخه چې څوك نیكان وي، د هغوی نكاح وكړئ، كه هغوى بې وزلي وي، الله به یې له خپل فضله شتمن كړي او الله پراخي راوستونكى او ډېر پوه دی.",
        attribution: "سورة النور — آیت 32",
      },
      {
        quote:
          "که تاسو ته یو داسې کس راشي چې تاسو یې له دین او اخلاقو رضایت لرئ، نو هغه ته یې واده وکړئ. که داسې ونه کړئ، نو په ځمکه کې به فتنه او لوی فساد پیدا شي.",
        attribution: "د ترمذي روایت",
      },
      {
        quote: "درې کسان دي چې د الله مرسته پرې حقه ده: هغه څوک چې پاکوالی غواړي او واده کوي.",
        attribution: "د ترمذي روایت، البانی تصدیق کړی",
      },
    ],
    reasons: [
      {
        title: "بې وزلي واده نه منع کوي",
        description:
          "الله د واده لپاره شتمني شرط نه ده ټاکلې. بلکې، هغه په ښکاره ژمنه کړې چې هغه کسان به شتمن کړي چې د پاکوالي په موخه واده کوي. هر هغه څوک چې واده د مادي بشپړتیا په انتظار کې ځنډوي، حقیقت کې یې هغه برکت ځنډولی چې الله پخپله یې ضمانت ورکړی دی.",
      },
      {
        title: "دین او اخلاق بنسټ دی",
        description:
          "شتمني راځي او ځي، او مقام لوړیږي او ټیټیږي، خو دین او اخلاق دي چې کور جوړوي. هر څوک چې خپل ملګری یوازې د دنیا معیارونو له مخې غوره کوي، هغه پر شګو کور جوړوي؛ هر څوک چې د دین له مخې غوره کوي، هغه پر ډبره کور جوړوي.",
      },
      {
        title: "سادگي د برکت سرچینه ده",
        description:
          "هرڅومره چې تاسو د حلال واده لاره اسانه کړئ، هومره به هغه دروازې ستاسو مخې ته پرانیستل شي چې تاسو یې هیڅکله تمه نه درلوده. یو ساده پیل کمزوري نه ده — دا یوه حاصلخیزه ځمکه ده چیرې چې مینه او رحمت ودانیږي.",
      },
      {
        title: "واده یو مالي پروژه نه ده",
        description:
          "موږ واده له یوې اسانه سنتي دودې څخه بدل کړی هغه پروژه ته چې خلک د پیل کیدو دمخه ستړي کوي. د هوښیار واده بهیر واده بیرته خپل حقیقي مانا ته راولي: د دوو کسانو تر منځ اړیکه چې پاکوالی او ثبات غواړي، نه داسې غونډه چې ټولنیز مقام پکې اندازه کیږي.",
      },
      {
        title: "له هغه څه پیل وکړئ چې کولی یې شئ، او الله به پاتې برخه بشپړه کړي",
        description:
          "د خپل ژوند پیل کیدو دمخه ټول شیانو لرلو ته انتظار مه کوئ. ډیر خوشحاله کورونه له ترټولو ساده امکاناتو سره پیل شوي دي، او ډیر ښکلي کورونه دننه نه ړنګ شوي دي. توپیر په نیت او اخلاقو کې دی.",
      },
    ],
  },
  messages: {
    eyebrow: "د بهیر پیغامونه",
    title: "ستاسو هر یو ته یوه خبره",
    description: "د هر هغه چا لپاره یو ساده پیغام چې په ژوند کې نوی پیل او ثبات لټوي.",
    cards: [
      {
        title: "ځوانانو ته پیغام",
        description:
          "واده مه ځنډوئ ځکه چې تاسو مالي پلوه بشپړ نه یاست. له هغه څه پیل وکړئ چې کولی یې شئ، رښتینی اوسئ، خپل حالت ښه کولو لپاره هڅه وکړئ، او به وویني چې د خیر دروازې ستاسو لپاره پرانیستل کیږي — ځکه واده د ثبات او برکت پیل دی.",
      },
      {
        title: "پلرونو ته پیغام",
        description:
          "ستاسو لور داسې سړي ته اړتیا لري چې د هغې سره په چلند کې له الله نه ویریږي، چې د هغې عزت ساتي او زړه ساتي. پیسې راځي او ځي، خو اخلاق او دین دي چې باثباته کور جوړوي. د هغې لپاره داسې کس غوره کړئ چې د هغې سره په نرمۍ چلند وکړي — دا د هغې د خوشحالۍ ریښتینی ضمانت دی.",
      },
      {
        title: "ځوانو ښځینه ته پیغام",
        description:
          "واده د مادي شرایطو یوه اوږده لړلیک مه ګرځوئ. له ځان نه پوښتنه وکړئ: ایا هغه رښتینی دی؟ ایا به زما درناوی وکړي؟ ایا زه کولی شم د هغه سره باثباته ژوند جوړ کړم؟ یو صالح سړی کیدای شي له هیڅ نه پیل وکړي.",
      },
    ],
  },
  charter: {
    eyebrow: "د بهیر منشور",
    title: "له موږ سره یوځای دې منشور سره موافقه وکړئ او د هوښیار واده بهیر سره یوځای شئ.",
    subtitle: "د هوښیار واده منشور",
    items: [
      "زه هڅه کوم چې د درناوي او پوهیدو پر بنسټ ژوند جوړ کړم.",
      "زه له ساده امکاناتو او یو واقعي پیل سره واده منم.",
      "زه ژمنه کوم چې په خپلو ټولو معلوماتو او خبرو کې به رښتینی اوسم.",
      "زه ژمنه کوم چې زما په واده کې موخه پاکوالی او ثبات دی.",
      "زه پدې باور یم چې دین او اخلاق د شتمنۍ او ښکارندو په پرتله ډیر اهمیت لري.",
    ],
    photoAlt: "یو ناوې او زوم د زرغون خټیز ځمکه کې د سترګو رڼا لمر لاندې یو بل ته منګولې کوي، د ناوې پردې په هوا کې خوځیږي.",
  },
  companion: {
    eyebrow: "د زفاف پلیټ‌فارم په اړه",
    title: "ستاسو ملګری د حلال واده په لاره کې",
    description:
      "زفاف یو باوري اسلامي واده پلیټ‌فارم دی چې مسلمانانو ته یو خوندي چاپیریال چمتو کوي چې ارزښتونه ساتي او کورنۍ پیاوړي کوي، او تاسو سره د هوښیارو وسیلو او روڼ تجربې له لارې سم د ژوند ملګري موندلو کې مرسته کوي.",
    features: [
      {
        title: "خوندي او له شریعت سره سمون لرونکی چاپیریال",
        description: "موږ په ټولو اړیکو کې اسلامي لارښوونو ته ژمن یو — نه لنډمهاله پیژندګلوي او نه ملګرتیا.",
      },
      {
        title: "۲۴/۷ دوامداره ملاتړ",
        description: "زموږ ټیم تل چمتو دی چې ستاسو پوښتنو ته ځواب ووايي او هغه لارښوونه چمتو کړي چې تاسو ورته اړتیا لرئ.",
      },
      {
        title: "تخصصي د واده سلا مشورې",
        description: "د اسلامي ارزښتونو پر بنسټ عملي لارښوونه د یو خوشحاله او پایښت لرونکي واده جوړولو لپاره.",
      },
      {
        title: "نړیواله پوښښ",
        description: "د نړۍ ټولو هیوادونو پوښښ چې تاسو سره مرسته وکړي د ژوند ملګری پیدا کولو کې، هرچیرې چې یاست.",
      },
      {
        title: "همدا اوس له زفاف سره خپل سفر پیل کړئ",
        description: "وړیا نوم لیکنه وکړئ او د هوښیار واده بهیر سره یوځای شئ. نوم لیکنه وړیا ده، او پیغام لیږل تل وړیا دي.",
      },
    ],
    photoAlts: {
      mosque: "یوه ناوې په سپینو حجاب او جامو کې او یو زوم په تور ټکسیدو کې په یوه ښکلي جومات دننه یوځای دعا کوي.",
      car: "یوه ناوې په سپینو جامو او پردې کې یو زوم په تور ټکسیدو کې د یوې زړې کلاسیکي موټر تر څنګ منګولې کوي.",
    },
  },
};

const sw: SmartMarriageCopy = {
  hero: {
    title: "Mpango wa Ndoa Yenye Busara",
    description:
      "Ndoa katika Uislamu inahusu wema na utulivu, si anasa na gharama kubwa. Ukisubiri hadi mikono yako ijae kabla ya kujenga nyumba, huenda ukasubiri kwa muda mrefu.",
    cta: "Anza Safari Yako ya Ndoa",
    photoAlts: {
      cliff: "Wanandoa wakipiga picha juu ya jabali lililoinuka likitazama bahari ya rangi ya samawati na milima, mwanaume akimbeba mwanamke huku sketi yake ndefu nyeupe ikipeperushwa na upepo.",
      lake: "Wanandoa wamesimama uso kwa uso kando ya ziwa la milimani lenye rangi ya samawati, likizungukwa na miti ya misonobari na milima.",
      blossom: "Wanandoa wakikumbatiana chini ya mti wa maua ya waridi uliochanua katika bustani.",
    },
  },
  nav: {
    items: [
      "Mpango Huu Ni Nini",
      "Kwa Nini Ndoa Yenye Busara",
      "Msingi wa Kiislamu wa Mpango wa Ndoa Yenye Busara",
      "Ujumbe wa Mpango",
      "Mkataba wa Mpango",
      "Kuhusu Zefaaf",
    ],
  },
  intro: {
    eyebrow: "Kwa Nini Uchague Zefaaf",
    title: "Ndoa Yenye Busara: Mlinganyo Mpya wa Maisha",
    description:
      "Mpango wa Ndoa Yenye Busara ni wito wa kufahamu kutoka jukwaa la Zefaaf wa kupanga upya vipaumbele. Badala ya kutumia pesa kwenye kumbi za harusi za kifahari, mahari za kupindukia, na vito vya gharama kubwa, ziwekeze katika kujenga nyumba halisi na maisha ya pamoja yaliyojaa mapenzi na huruma.",
    photoAlt:
      "Picha ya wanandoa iliyopigwa kutoka nyuma kwenye ufuo wa bahari, mwanaume akiwa ameshika shada la maua meupe, mwanamke akiwa amevaa gauni jepesi la rangi ya waridi linalopeperuka na hijabu, na rasi ya miamba yenye ukungu nyuma.",
  },
  why: {
    eyebrow: "Kwa Nini Ndoa Yenye Busara",
    description:
      "Kwa sababu jamii imeibebesha ndoa masharti ambayo dini haikuyaweka, na matarajio yasiyokwisha, hadi ikawa ndoto isiyofikika kwa mamilioni ya vijana. Mpango wa Ndoa Yenye Busara unarudisha maswali halisi: Kwa nini tunaoa? Na tunapaswa kuoa vipi?",
    cards: [
      {
        title: "Kwa Sababu Dini Iliweka Kigezo Sahihi",
        paragraphs: [
          'Mtume ﷺ hakusema angalia mali yake, bali alisema: "Anapokujieni mtu mnayeridhia dini yake na tabia yake, basi muozesheni." Kigezo hiki hakijawahi kubadilika, na nyumba zinazojengwa juu yake ndizo zenye uthabiti na kudumu zaidi.',
        ],
      },
      {
        title: "Kwa Sababu Maonesho Hayajengi Nyumba",
        paragraphs: [
          "Usiku wa harusi unaisha, lakini maisha yanaanza baada yake. Kile kinachotumika kwenye kumbi na maonesho katika usiku mmoja tu kingeweza kujenga nyumba halisi inayodumu miaka mingi.",
        ],
      },
      {
        title: "Kwa Sababu Kusubiri Kuna Gharama",
        paragraphs: [
          'Kila mwaka unaosubiri "wakati mwafaka" ni mwaka wa maisha unaopita, uthabiti unaocheleweshwa, na baraka zinazokosekana. Kurahisisha mambo leo ni bora kuliko ukamilifu ambao haujawahi kufika.',
        ],
      },
      {
        title: "Kwa Sababu Mwenyezi Mungu Aliahidi Kuwasaidia Wanaotafuta Usafi",
        paragraphs: [
          '"Watu watatu ambao ni haki yao kusaidiwa na Mwenyezi Mungu: mwenye kuoa akitaka kujihifadhi." Ahadi hii ya Kimungu haihitaji akiba ya benki — inahitaji tu nia safi na moyo mweupe.',
        ],
      },
      {
        title: "Kwa Sababu Mwanzo wa Unyenyekevu Si Aibu",
        paragraphs: [
          "Nyumba zenye furaha zaidi hazikuanza kwa utajiri wa kimali, bali kwa uaminifu.",
          "Uwezo huongezeka kwa muda, na riziki hupanuka, lakini tabia na nia ndizo zinazobaki thabiti.",
        ],
      },
    ],
  },
  banner: {
    title: "Ndoa Yenye Busara",
    description: "Ni uwekezaji katika msingi wa maisha ya ndoa, wakati ndoa ya jadi ni matumizi ya kupindukia kwenye maonesho.",
    photoAlt: "Wanandoa wakisali pamoja katika msikiti wenye mwanga wa jua na mimbari ya mbao yenye nakshi.",
  },
  foundation: {
    eyebrow: "Msingi wa Kiislamu wa Mpango wa Ndoa Yenye Busara",
    title: "Ndoa yenye busara si wazo la kisasa — ni kile ambacho Uislamu umekihimiza kwa zaidi ya miaka 1,400.",
    citations: [
      {
        quote:
          "Na waozeni, enyi Waumini, wanaume wasiokuwa na wake na wanawake wasiokuwa na waume, miongoni mwa waungwana na walio wema kati ya watumwa wenu na wajakazi wenu. Iwapo anayetaka kuoa kwa kujihifadhi ni masikini mwenye uhitaji, Allah Mtukufu Atamtosheleza kutokana na ukunjufu wa riziki Yake. Na Allah Mtukufu ni Mkunjufu, ni Mjuzi mno wa nyenendo za waja Wake.",
        attribution: "Surat An-Nur — Aya ya 32",
      },
      {
        quote:
          "Anapokujieni mtu mnayeridhia dini yake na tabia yake, basi muozesheni. Msipofanya hivyo kutakuwa na fitna duniani na ufisadi mkubwa.",
        attribution: "Imepokewa na At-Tirmidhiy",
      },
      {
        quote: "Watu watatu ambao ni haki yao kusaidiwa na Mwenyezi Mungu: mwenye kuoa akitaka kujihifadhi.",
        attribution: "Imepokewa na At-Tirmidhiy, imesahihishwa na Al-Albani",
      },
    ],
    reasons: [
      {
        title: "Umaskini Hauzuii Ndoa",
        description:
          "Mwenyezi Mungu hakuweka utajiri kama sharti la ndoa. Bali, aliahidi waziwazi kuwatajirisha wale wanaotafuta ndoa kwa nia ya kujihifadhi. Yeyote anayeahirisha ndoa akisubiri ukamilifu wa kimali, amekuwa ameahirisha baraka ambayo Mwenyezi Mungu mwenyewe ameidhamini.",
      },
      {
        title: "Dini na Tabia Ndizo Msingi",
        description:
          "Mali huja na kuondoka, na cheo hupanda na kushuka, lakini dini na tabia ndizo zinazojenga nyumba. Anayechagua mwenzi wake kwa vigezo vya kidunia pekee anajenga juu ya mchanga; anayechagua kwa dini anajenga juu ya mwamba.",
      },
      {
        title: "Unyenyekevu Ni Chanzo cha Baraka",
        description:
          "Kadiri unavyorahisisha njia ya ndoa halali, ndivyo milango ambayo hukuitarajia itakavyofunguka mbele yako. Mwanzo wa unyenyekevu si upungufu — ni ardhi yenye rutuba ambapo mapenzi na huruma huota.",
      },
      {
        title: "Ndoa Si Mradi wa Kifedha",
        description:
          "Tumeigeuza ndoa kutoka Sunna nyepesi kuwa mradi unaowachosha watu kabla haujaanza. Mpango wa Ndoa Yenye Busara unairejesha ndoa katika hali yake halisi: kifungo baina ya watu wawili wanaotafuta usafi na uthabiti, si tukio la kupima hadhi ya kijamii.",
      },
      {
        title: "Anza na Ulichonacho, na Mwenyezi Mungu Atakamilisha Yaliyobaki",
        description:
          "Usisubiri kuwa na kila kitu kabla ya kuanza maisha yako. Nyumba nyingi zenye furaha zaidi zilianza kwa njia rahisi zaidi, na nyumba nyingi za kifahari zilianguka kutoka ndani. Tofauti iko katika nia na tabia.",
      },
    ],
  },
  messages: {
    eyebrow: "Ujumbe wa Mpango",
    title: "Neno Kwa Kila Mmoja Wenu",
    description: "Ujumbe rahisi kwa kila anayetafuta mwanzo mpya wa maisha na uthabiti.",
    cards: [
      {
        title: "Ujumbe Kwa Vijana Wanaume",
        description:
          "Usiakhirishe ndoa kwa sababu huna uwezo kamili wa kifedha. Anza na ulichonacho, kuwa mkweli, jitahidi kuboresha hali yako, na utaona milango ya wema ikifunguka kwa ajili yako — kwani ndoa ni mwanzo wa uthabiti na baraka.",
      },
      {
        title: "Ujumbe Kwa Baba",
        description:
          "Binti yako anahitaji mwanaume anayemcha Mungu katika jinsi anavyomtendea, anayehifadhi heshima yake na kulinda moyo wake. Pesa huja na kuondoka, lakini tabia na dini ndizo zinazojenga nyumba yenye uthabiti. Mchagulie mtu atakayemtendea kwa upole — hiyo ndiyo dhamana halisi ya furaha yake.",
      },
      {
        title: "Ujumbe Kwa Vijana Wanawake",
        description:
          "Usifanye ndoa kuwa orodha ndefu ya masharti ya kimali. Jiulize: Je, ni mkweli? Je, ataniheshimu? Je, naweza kujenga naye maisha yenye uthabiti? Mwanaume mwema anaweza kuanza hata kama hana chochote.",
      },
    ],
  },
  charter: {
    eyebrow: "Mkataba wa Mpango",
    title: "Ungana nasi na jiunge na Mpango wa Ndoa Yenye Busara kwa kukubaliana na mkataba huu.",
    subtitle: "Mkataba wa Ndoa Yenye Busara",
    items: [
      "Ninajitahidi kujenga maisha yaliyojengwa juu ya heshima na uelewano.",
      "Ninakubali ndoa yenye uwezo mdogo na mwanzo halisi.",
      "Ninajitolea kuwa mkweli katika taarifa na maneno yangu yote.",
      "Naahidi kwamba lengo langu katika ndoa ni usafi na uthabiti.",
      "Ninaamini kwamba dini na tabia ni muhimu zaidi kuliko mali na maonesho.",
    ],
    photoAlt: "Bwana harusi na bibi harusi wakikumbatiana wakati wa jua likizama katika ardhi ya kinamasi yenye majani, shela ya bibi harusi ikipeperushwa na upepo.",
  },
  companion: {
    eyebrow: "Kuhusu Jukwaa la Zefaaf",
    title: "Mwenzako Katika Njia ya Ndoa Halali",
    description:
      "Zefaaf ni jukwaa la ndoa la Kiislamu linaloaminika linalowapa Waislamu mazingira salama yanayohifadhi maadili na kuimarisha familia, likikusaidia kupata mwenzi sahihi wa maisha kupitia zana za busara na uzoefu wa uwazi.",
    features: [
      {
        title: "Mazingira Salama Yanayozingatia Sheria za Kiislamu",
        description: "Tumejitolea kufuata miongozo ya Kiislamu katika mawasiliano yote — hakuna kufahamiana au urafiki wa kawaida.",
      },
      {
        title: "Msaada Endelevu wa Saa 24",
        description: "Timu yetu ipo daima tayari kujibu maswali yako na kutoa mwongozo unaohitaji.",
      },
      {
        title: "Ushauri Maalum wa Ndoa",
        description: "Mwongozo wa vitendo unaozingatia maadili ya Kiislamu wa kujenga ndoa yenye furaha na ya kudumu.",
      },
      {
        title: "Ufikiaji wa Kimataifa",
        description: "Tunafikia nchi zote duniani ili kukusaidia kupata mwenzi wa maisha popote ulipo.",
      },
      {
        title: "Anza Safari Yako Sasa Pamoja na Zefaaf",
        description: "Jisajili bure na ujiunge na Mpango wa Ndoa Yenye Busara. Usajili ni bure, na mawasiliano ni bure daima.",
      },
    ],
    photoAlts: {
      mosque: "Bibi harusi katika hijabu na gauni jeupe na bwana harusi katika suti nyeusi ya tuxedo wakiomba dua pamoja ndani ya msikiti wenye nakshi.",
      car: "Bibi harusi katika gauni jeupe na shela akimkumbatia bwana harusi katika suti nyeusi ya tuxedo kando ya gari la kizamani la kifahari.",
    },
  },
};

const th: SmartMarriageCopy = {
  hero: {
    title: "โครงการการแต่งงานอย่างชาญฉลาด",
    description:
      "การแต่งงานในอิสลามคือเรื่องของคุณธรรมและความสงบสุข ไม่ใช่ความหรูหราฟุ่มเฟือยและค่าใช้จ่าย หากคุณรอจนกว่ามือของคุณจะเต็มไปด้วยทรัพย์สินก่อนที่จะสร้างครอบครัว คุณอาจต้องรอไปอีกนาน",
    cta: "เริ่มต้นเส้นทางการแต่งงานของคุณ",
    photoAlts: {
      cliff: "คู่รักโพสท่าบนหน้าผาหินที่มองเห็นทะเลสีเทอร์ควอยซ์และภูเขา ฝ่ายชายอุ้มฝ่ายหญิงไว้ขณะที่กระโปรงสีขาวยาวของเธอพลิ้วไสวไปตามสายลม",
      lake: "คู่รักยืนหันหน้าเข้าหากันข้างทะเลสาบสีเทอร์ควอยซ์บนภูเขาที่มีต้นสนและภูเขาล้อมรอบ",
      blossom: "คู่รักกอดกันใต้ต้นซากุระสีชมพูที่กำลังบานสะพรั่งในสวนสาธารณะ",
    },
  },
  nav: {
    items: [
      "โครงการนี้คืออะไร",
      "ทำไมต้องแต่งงานอย่างชาญฉลาด",
      "รากฐานอิสลามของโครงการการแต่งงานอย่างชาญฉลาด",
      "สารจากโครงการ",
      "กฎบัตรของโครงการ",
      "เกี่ยวกับ Zefaaf",
    ],
  },
  intro: {
    eyebrow: "ทำไมคุณจึงเลือก Zefaaf",
    title: "การแต่งงานอย่างชาญฉลาด: สมการใหม่ของชีวิต",
    description:
      "โครงการการแต่งงานอย่างชาญฉลาดคือการเรียกร้องอย่างมีสติจากแพลตฟอร์ม Zefaaf เพื่อจัดลำดับความสำคัญใหม่ แทนที่จะใช้เงินไปกับห้องจัดงานแต่งงานที่หรูหรา สินสอดที่มากเกินไป และเครื่องประดับราคาแพง ให้นำเงินนั้นไปลงทุนสร้างบ้านที่แท้จริงและชีวิตร่วมกันที่เปี่ยมด้วยความรักและความเมตตา",
    photoAlt:
      "ภาพคู่รักที่ถ่ายจากด้านหลังบนชายหาด ฝ่ายชายถือช่อดอกไม้สีขาว ฝ่ายหญิงสวมชุดสีชมพูอ่อนพลิ้วไสวพร้อมฮิญาบ มีแหลมหินที่ปกคลุมด้วยหมอกอยู่เบื้องหลัง",
  },
  why: {
    eyebrow: "ทำไมต้องแต่งงานอย่างชาญฉลาด",
    description:
      "เพราะสังคมได้แบกภาระให้การแต่งงานด้วยเงื่อนไขที่ศาสนาไม่ได้กำหนดไว้ และความคาดหวังที่ไม่มีที่สิ้นสุด จนกลายเป็นความฝันที่ไม่มีวันเป็นจริงสำหรับคนหนุ่มสาวนับล้าน โครงการการแต่งงานอย่างชาญฉลาดนำคำถามที่แท้จริงกลับมา: เราแต่งงานไปทำไม? และเราควรแต่งงานอย่างไร?",
    cards: [
      {
        title: "เพราะศาสนาได้วางมาตรฐานที่ถูกต้อง",
        paragraphs: [
          'ท่านนบี ﷺ ไม่ได้กล่าวว่าให้ดูที่ทรัพย์สินของเขา แต่ท่านกล่าวว่า "หากมีผู้ใดมาหาพวกท่านซึ่งพวกท่านพอใจในศาสนาและจริยธรรมของเขา ก็จงแต่งงานกับเขาเถิด" มาตรฐานนี้ไม่เคยเปลี่ยนแปลง และครอบครัวที่สร้างขึ้นบนพื้นฐานนี้คือครอบครัวที่มั่นคงและยั่งยืนที่สุด',
        ],
      },
      {
        title: "เพราะรูปลักษณ์ภายนอกไม่ได้สร้างบ้าน",
        paragraphs: [
          "คืนแต่งงานจบลง แต่ชีวิตเริ่มต้นหลังจากนั้น สิ่งที่ใช้จ่ายไปกับสถานที่จัดงานและความหรูหราในคืนเดียวอาจสร้างบ้านที่แท้จริงซึ่งอยู่ได้นานหลายปี",
        ],
      },
      {
        title: "เพราะการรอคอยก็มีราคาของมัน",
        paragraphs: [
          'ทุกปีที่คุณรอ "เวลาที่เหมาะสม" คือหนึ่งปีของชีวิตที่ผ่านไป ความมั่นคงที่ถูกเลื่อนออกไป และความจำเริญที่พลาดไป การทำให้สิ่งต่าง ๆ ง่ายขึ้นในวันนี้ดีกว่าความสมบูรณ์แบบที่ไม่มีวันมาถึง',
        ],
      },
      {
        title: "เพราะอัลลอฮ์ทรงสัญญาว่าจะช่วยเหลือผู้แสวงหาความบริสุทธิ์",
        paragraphs: [
          '"สามคนที่อัลลอฮ์ทรงมีสิทธิ์ที่จะช่วยเหลือ คือผู้ที่แต่งงานเพื่อรักษาความบริสุทธิ์ของตน" คำสัญญาจากพระเจ้านี้ไม่ได้เรียกร้องยอดเงินในธนาคาร — แต่เรียกร้องเพียงเจตนาที่บริสุทธิ์และหัวใจที่สะอาด',
        ],
      },
      {
        title: "เพราะการเริ่มต้นอย่างเรียบง่ายไม่ใช่เรื่องน่าอาย",
        paragraphs: [
          "บ้านที่มีความสุขที่สุดไม่ได้เริ่มต้นด้วยความมั่งคั่งทางวัตถุ แต่เริ่มต้นด้วยความซื่อสัตย์",
          "ความสามารถพัฒนาไปตามกาลเวลา และปัจจัยยังชีพก็ขยายกว้างขึ้น แต่จริยธรรมและเจตนาคือสิ่งที่คงที่เสมอ",
        ],
      },
    ],
  },
  banner: {
    title: "การแต่งงานอย่างชาญฉลาด",
    description: "การลงทุนในรากฐานของชีวิตคู่ ในขณะที่การแต่งงานแบบดั้งเดิมคือการใช้จ่ายฟุ่มเฟือยไปกับรูปลักษณ์ภายนอก",
    photoAlt: "คู่รักละหมาดร่วมกันในมัสยิดที่มีแสงแดดส่องเข้ามา พร้อมมิมบัรไม้แกะสลักอย่างประณีต",
  },
  foundation: {
    eyebrow: "รากฐานอิสลามของโครงการการแต่งงานอย่างชาญฉลาด",
    title: "การแต่งงานอย่างชาญฉลาดไม่ใช่แนวคิดสมัยใหม่ — แต่เป็นสิ่งที่อิสลามส่งเสริมมานานกว่า 1,400 ปี",
    citations: [
      {
        quote:
          "และจงให้พวกเจ้าแต่งงานกับผู้เป็นโสดในหมู่พวกเจ้า และกับคนดีๆ จากปวงบ่าวผู้ชายของพวกเจ้า และบ่าวผู้หญิงของพวกเจ้า หากพวกเขายากจน อัลลอฮฺจะทรงให้พวกเขาร่ำรวยขึ้นจากความโปรดปรานของพระองค์ และอัลลอฮฺนั้นเป็นผู้ทรงไพบูลย์ ผู้ทรงรอบรู้",
        attribution: "ซูเราะฮ์อันนูร — อายะฮ์ที่ 32",
      },
      {
        quote:
          "หากมีผู้ใดมาหาพวกท่านซึ่งพวกท่านพอใจในศาสนาและจริยธรรมของเขา ก็จงแต่งงานกับเขาเถิด หากพวกท่านไม่ทำเช่นนั้น จะเกิดความวุ่นวายและความเสื่อมทรามอย่างใหญ่หลวงในแผ่นดิน",
        attribution: "รายงานโดยอัตติรมิซีย์",
      },
      {
        quote: "สามคนที่อัลลอฮ์ทรงมีสิทธิ์ที่จะช่วยเหลือ คือผู้ที่แต่งงานเพื่อรักษาความบริสุทธิ์ของตน",
        attribution: "รายงานโดยอัตติรมิซีย์ และรับรองความถูกต้องโดยอัลอัลบานีย์",
      },
    ],
    reasons: [
      {
        title: "ความยากจนไม่ใช่อุปสรรคต่อการแต่งงาน",
        description:
          "อัลลอฮ์ไม่ได้กำหนดให้ความมั่งคั่งเป็นเงื่อนไขของการแต่งงาน แต่ทรงสัญญาอย่างชัดเจนว่าจะทำให้ผู้ที่แสวงหาการแต่งงานเพื่อความบริสุทธิ์ร่ำรวยขึ้น ผู้ใดที่เลื่อนการแต่งงานออกไปเพื่อรอความสมบูรณ์แบบทางการเงิน แท้จริงแล้วได้เลื่อนความจำเริญที่อัลลอฮ์ทรงรับประกันไว้เองออกไป",
      },
      {
        title: "ศาสนาและจริยธรรมคือรากฐาน",
        description:
          "ทรัพย์สินมาแล้วก็ไป สถานะขึ้นแล้วก็ลง แต่ศาสนาและจริยธรรมต่างหากที่สร้างบ้าน ผู้ที่เลือกคู่ครองด้วยมาตรฐานทางโลกเพียงอย่างเดียวสร้างบ้านบนผืนทราย ส่วนผู้ที่เลือกด้วยศาสนาสร้างบ้านบนหิน",
      },
      {
        title: "ความเรียบง่ายคือบ่อเกิดแห่งความจำเริญ",
        description:
          "ยิ่งคุณทำให้เส้นทางสู่การแต่งงานที่ฮาลาลง่ายขึ้นเท่าใด ประตูที่คุณไม่เคยคาดคิดก็จะเปิดออกต่อหน้าคุณมากขึ้นเท่านั้น การเริ่มต้นอย่างเรียบง่ายไม่ใช่ข้อบกพร่อง แต่เป็นผืนดินอันอุดมสมบูรณ์ที่ความรักและความเมตตาจะเติบโตขึ้น",
      },
      {
        title: "การแต่งงานไม่ใช่โครงการทางการเงิน",
        description:
          "เราได้เปลี่ยนการแต่งงานจากซุนนะฮ์ที่เรียบง่ายให้กลายเป็นโครงการที่ทำให้ผู้คนอ่อนล้าก่อนที่มันจะเริ่มต้นด้วยซ้ำ โครงการการแต่งงานอย่างชาญฉลาดนำการแต่งงานกลับคืนสู่แก่นแท้ของมัน คือสายสัมพันธ์ระหว่างสองคนที่แสวงหาความบริสุทธิ์และความมั่นคง ไม่ใช่งานเลี้ยงเพื่อวัดสถานะทางสังคม",
      },
      {
        title: "เริ่มต้นด้วยสิ่งที่คุณมี แล้วอัลลอฮ์จะทรงเติมเต็มส่วนที่เหลือ",
        description:
          "อย่ารอจนกว่าจะมีทุกอย่างพร้อมก่อนที่จะเริ่มต้นชีวิตของคุณ บ้านที่มีความสุขที่สุดหลายแห่งเริ่มต้นด้วยปัจจัยที่เรียบง่ายที่สุด และบ้านที่หรูหราที่สุดหลายแห่งก็พังทลายจากภายใน ความแตกต่างอยู่ที่เจตนาและจริยธรรม",
      },
    ],
  },
  messages: {
    eyebrow: "สารจากโครงการ",
    title: "ถ้อยคำสำหรับพวกคุณทุกคน",
    description: "สารง่าย ๆ สำหรับทุกคนที่กำลังมองหาการเริ่มต้นใหม่ในชีวิตและความมั่นคง",
    cards: [
      {
        title: "สารถึงชายหนุ่ม",
        description:
          "อย่าเลื่อนการแต่งงานออกไปเพียงเพราะคุณยังไม่พร้อมทางการเงินอย่างสมบูรณ์ จงเริ่มต้นด้วยสิ่งที่คุณมี ซื่อสัตย์ พยายามพัฒนาสถานะของตนเอง แล้วคุณจะพบว่าประตูแห่งความดีงามเปิดออกสำหรับคุณ เพราะการแต่งงานคือจุดเริ่มต้นของความมั่นคงและความจำเริญ",
      },
      {
        title: "สารถึงบรรดาบิดา",
        description:
          "ลูกสาวของท่านต้องการชายที่ยำเกรงอัลลอฮ์ในวิธีที่เขาปฏิบัติต่อเธอ ผู้ที่รักษาศักดิ์ศรีและปกป้องหัวใจของเธอ เงินทองมาแล้วก็ไป แต่จริยธรรมและศาสนาต่างหากที่สร้างบ้านที่มั่นคง จงเลือกให้เธอผู้ที่จะปฏิบัติต่อเธอด้วยความอ่อนโยน นั่นคือหลักประกันที่แท้จริงของความสุขของเธอ",
      },
      {
        title: "สารถึงหญิงสาว",
        description:
          "อย่าทำให้การแต่งงานเป็นรายการยาวเหยียดของเงื่อนไขทางวัตถุ จงถามตัวเองว่า เขาซื่อสัตย์หรือไม่? เขาจะให้เกียรติฉันหรือไม่? ฉันสามารถสร้างชีวิตที่มั่นคงร่วมกับเขาได้หรือไม่? ชายที่ดีอาจเริ่มต้นจากศูนย์ก็ได้",
      },
    ],
  },
  charter: {
    eyebrow: "กฎบัตรของโครงการ",
    title: "ร่วมปฏิญาณกับเราและเข้าร่วมโครงการการแต่งงานอย่างชาญฉลาดด้วยการยอมรับกฎบัตรฉบับนี้",
    subtitle: "กฎบัตรการแต่งงานอย่างชาญฉลาด",
    items: [
      "ฉันมุ่งมั่นที่จะสร้างชีวิตบนพื้นฐานของความเคารพและความเข้าใจ",
      "ฉันยอมรับการแต่งงานด้วยปัจจัยที่เรียบง่ายและการเริ่มต้นที่สมจริง",
      "ฉันมุ่งมั่นที่จะซื่อสัตย์ในข้อมูลและถ้อยแถลงทั้งหมดของฉัน",
      "ฉันให้สัญญาว่าเป้าหมายของฉันในการแต่งงานคือความบริสุทธิ์และความมั่นคง",
      "ฉันเชื่อว่าศาสนาและจริยธรรมสำคัญกว่าทรัพย์สินและรูปลักษณ์ภายนอก",
    ],
    photoAlt: "เจ้าบ่าวและเจ้าสาวกอดกันในช่วงเวลาทองของแสงอาทิตย์ในพื้นที่ชุ่มน้ำที่มีหญ้าเขียวขจี ผ้าคลุมของเจ้าสาวพลิ้วไสวไปตามสายลม",
  },
  companion: {
    eyebrow: "เกี่ยวกับแพลตฟอร์ม Zefaaf",
    title: "เพื่อนคู่คิดของคุณบนเส้นทางสู่การแต่งงานที่ฮาลาล",
    description:
      "Zefaaf คือแพลตฟอร์มการแต่งงานอิสลามที่เชื่อถือได้ ซึ่งมอบสภาพแวดล้อมที่ปลอดภัยแก่ชาวมุสลิม รักษาคุณค่าและเสริมสร้างความเข้มแข็งให้ครอบครัว ช่วยให้คุณค้นหาคู่ชีวิตที่เหมาะสมผ่านเครื่องมืออัจฉริยะและประสบการณ์ที่โปร่งใส",
    features: [
      {
        title: "สภาพแวดล้อมที่ปลอดภัยและสอดคล้องกับหลักชะรีอะฮ์",
        description: "เรายึดมั่นในแนวทางอิสลามในการปฏิสัมพันธ์ทั้งหมด ไม่มีการรู้จักหรือเป็นเพื่อนกันแบบผิวเผิน",
      },
      {
        title: "การสนับสนุนต่อเนื่องตลอด 24 ชั่วโมง",
        description: "ทีมของเราพร้อมเสมอที่จะตอบคำถามของคุณและให้คำแนะนำที่คุณต้องการ",
      },
      {
        title: "คำปรึกษาด้านการแต่งงานโดยผู้เชี่ยวชาญ",
        description: "คำแนะนำเชิงปฏิบัติที่ตั้งอยู่บนคุณค่าอิสลามเพื่อสร้างการแต่งงานที่มีความสุขและยั่งยืน",
      },
      {
        title: "ครอบคลุมทั่วโลก",
        description: "ครอบคลุมทุกประเทศทั่วโลกเพื่อช่วยให้คุณพบคู่ชีวิตไม่ว่าคุณจะอยู่ที่ใด",
      },
      {
        title: "เริ่มต้นเส้นทางของคุณตอนนี้กับ Zefaaf",
        description: "ลงทะเบียนฟรีและเข้าร่วมโครงการการแต่งงานอย่างชาญฉลาด การลงทะเบียนฟรี และการส่งข้อความก็ฟรีเสมอ",
      },
    ],
    photoAlts: {
      mosque: "เจ้าสาวในฮิญาบและชุดสีขาว และเจ้าบ่าวในทักซิโด้สีดำ กำลังขอดุอาร่วมกันภายในมัสยิดที่ตกแต่งอย่างวิจิตร",
      car: "เจ้าสาวในชุดสีขาวและผ้าคลุมหน้ากอดเจ้าบ่าวในทักซิโด้สีดำข้างรถคลาสสิกโบราณ",
    },
  },
};

const bs: SmartMarriageCopy = {
  hero: {
    title: "Inicijativa za pametan brak",
    description:
      "Brak u islamu je stvar čestitosti i smirenosti duše, a ne raskoši i troškova. Ako čekate da vam ruke budu pune prije nego što izgradite dom, možda ćete čekati jako dugo.",
    cta: "Započnite svoje bračno putovanje",
    photoAlts: {
      cliff: "Par pozira na stjenovitoj litici iznad tirkiznog mora i planina, muškarac nosi ženu dok joj duga bijela suknja leprša na vjetru.",
      lake: "Par stoji licem u lice pored tirkiznog alpskog jezera okruženog borovima i planinama.",
      blossom: "Par se grli ispod procvjetalog ružičastog stabla trešnje u parku.",
    },
  },
  nav: {
    items: ["Šta je Inicijativa", "Zašto pametan brak", "Islamski temelj Inicijative za pametan brak", "Poruke Inicijative", "Povelja Inicijative", "O Zefaafu"],
  },
  intro: {
    eyebrow: "Zašto birate Zefaaf",
    title: "Pametan brak: nova jednačina za život",
    description:
      "Inicijativa za pametan brak predstavlja svjestan poziv platforme Zefaaf da se prioriteti posmatraju drugačije. Umjesto trošenja novca na raskošne svadbene sale, pretjerani mehr i skup nakit, uložite ga u izgradnju istinskog doma i zajedničkog života ispunjenog ljubavlju i milošću.",
    photoAlt: "Par fotografisan s leđa na plaži, muškarac drži bijeli buket, žena u lepršavoj ružičastoj haljini i hidžabu, u pozadini maglovit stjenoviti rt.",
  },
  why: {
    eyebrow: "Zašto pametan brak",
    description:
      "Zato što je društvo opteretilo brak uslovima koje vjera nije propisala, i beskrajnim očekivanjima, sve dok nije postao nedostižan san za milione mladih ljudi. Inicijativa za pametan brak vraća prava pitanja: zašto se ženimo/udajemo? I kako to trebamo činiti?",
    cards: [
      {
        title: "Zato što je vjera postavila pravo mjerilo",
        paragraphs: [
          'Poslanik ﷺ nije rekao: pogledajte u njegovo imanje, nego je rekao: "Ako vam dođe onaj čijom ste vjerom i ćudorednošću zadovoljni, oženite ga." Ovo mjerilo se nije promijenilo, a domovi izgrađeni na njemu su najstabilniji i najtrajniji.',
        ],
      },
      {
        title: "Zato što izgled ne gradi dom",
        paragraphs: [
          "Svadbena noć završi, ali život počinje tek nakon nje. Ono što se potroši na sale i izgled u samo jednoj noći moglo bi osnovati pravi dom koji traje godinama.",
        ],
      },
      {
        title: "Zato što čekanje ima svoju cijenu",
        paragraphs: [
          'Svaka godina u kojoj čekate "pravi trenutak" jeste godina života koja prolazi, odgođene stabilnosti i propuštenog blagoslova. Olakšati stvari danas bolje je od savršenstva koje nikad ne dođe.',
        ],
      },
      {
        title: "Zato što je Allah obećao pomoći onima koji traže čednost",
        paragraphs: [
          '"Trojici je Allah dužan pomoći: onome ko se ženi tražeći čednost." Ovo Božije obećanje ne traži stanje na bankovnom računu — traži iskrenu namjeru i čisto srce.',
        ],
      },
      {
        title: "Zato što skroman početak nije sramota",
        paragraphs: [
          "Najsretniji domovi nisu počeli materijalnim bogatstvom, nego iskrenošću.",
          "Mogućnosti se razvijaju s vremenom, i opskrba se širi, ali ćud i namjera su ono što ostaje postojano.",
        ],
      },
    ],
  },
  banner: {
    title: "Pametan brak",
    description: "Ulaganje u temelj bračnog života, dok je tradicionalni brak pretjerano trošenje na izgled.",
    photoAlt: "Par se moli zajedno u osunčanoj džamiji s ukrašenim drvenim minberom.",
  },
  foundation: {
    eyebrow: "Islamski temelj Inicijative za pametan brak",
    title: "Pametan brak nije moderna ideja — to je ono na šta islam podstiče već više od 1.400 godina.",
    citations: [
      {
        quote:
          "Udavajte neudate i neoženjene, i čestite robove i robinje vaše! Ako su siromašni, Allah će ih iz obilja Svoga imućnim učiniti – Allah je neizmjerno dobar i sve zna.",
        attribution: "Sura En-Nur — ajet 32",
      },
      {
        quote:
          "Kada vam dođe onaj čijom ste vjerom i ćudorednošću zadovoljni, oženite ga; ako to ne učinite, nastat će smutnja na Zemlji i veliki nered.",
        attribution: "Prenosi Et-Tirmizi",
      },
      {
        quote: "Trojici je Allah dužan pomoći: onome ko se ženi tražeći čednost.",
        attribution: "Prenosi Et-Tirmizi, vjerodostojnim ocijenio Al-Albani",
      },
    ],
    reasons: [
      {
        title: "Siromaštvo ne sprečava brak",
        description:
          "Allah nije uslovio brak imetkom. Naprotiv, jasno je obećao da će obogatiti one koji stupaju u brak tražeći čednost. Ko odgađa brak čekajući finansijsko savršenstvo, odgodio je blagoslov koji je sam Allah zagarantovao.",
      },
      {
        title: "Vjera i ćud su temelj",
        description:
          "Bogatstvo dolazi i odlazi, a položaj raste i pada, ali vjera i ćud su ono što gradi dom. Ko bira supružnika samo po ovosvjetskim mjerilima, gradi na pijesku; ko bira po vjeri, gradi na stijeni.",
      },
      {
        title: "Jednostavnost je izvor blagoslova",
        description:
          "Što više olakšavate put ka halal braku, to će vam se otvoriti vrata kakva niste ni očekivali. Skroman početak nije manjkavost — to je plodno tlo na kojem raste ljubav i milost.",
      },
      {
        title: "Brak nije finansijski projekat",
        description:
          "Brak smo pretvorili iz jednostavne tradicije u projekat koji iscrpljuje ljude prije nego što uopšte i počne. Inicijativa za pametan brak vraća brak njegovoj suštini: vezi između dvoje ljudi koji traže čednost i stabilnost, a ne zabavi za mjerenje društvenog statusa.",
      },
      {
        title: "Počnite s onim što imate, a Allah će upotpuniti ostalo",
        description:
          "Ne čekajte da imate sve prije nego što započnete svoj život. Mnogi od najsretnijih domova počeli su s najskromnijim sredstvima, a mnogi od najraskošnijih domova su se iznutra srušili. Razlika leži u namjeri i ćudi.",
      },
    ],
  },
  messages: {
    eyebrow: "Poruke Inicijative",
    title: "Riječ za svakog od vas",
    description: "Jednostavna poruka za svakog ko traži novi početak u životu i stabilnost.",
    cards: [
      {
        title: "Poruka mladićima",
        description:
          "Ne odgađajte brak zato što niste finansijski potpuno spremni. Počnite s onim što imate, budite iskreni, trudite se poboljšati svoje stanje, i vidjet ćete da vam se otvaraju vrata dobra — jer brak je početak stabilnosti i blagoslova.",
      },
      {
        title: "Poruka očevima",
        description:
          "Vašoj kćeri treba muškarac koji se boji Allaha u postupanju prema njoj, koji čuva njeno dostojanstvo i njeno srce. Novac dolazi i odlazi, ali ćud i vjera grade stabilan dom. Izaberite joj nekoga ko će se prema njoj lijepo ponašati — to je pravo jamstvo njene sreće.",
      },
      {
        title: "Poruka djevojkama",
        description:
          "Ne pretvarajte brak u dugačak spisak materijalnih uslova. Zapitajte se: Je li iskren? Hoće li me poštovati? Mogu li s njim izgraditi stabilan život? Čestit čovjek može početi ni od čega.",
      },
    ],
  },
  charter: {
    eyebrow: "Povelja Inicijative",
    title: "Zavjetujte se s nama i pridružite se Inicijativi za pametan brak prihvatanjem ove povelje.",
    subtitle: "Povelja pametnog braka",
    items: [
      "Trudim se izgraditi život zasnovan na poštovanju i razumijevanju.",
      "Prihvatam brak sa skromnim sredstvima i realnim početkom.",
      "Obavezujem se na iskrenost u svim svojim podacima i izjavama.",
      "Zavjetujem se da mi je cilj u braku čednost i stabilnost.",
      "Vjerujem da su vjera i ćud važniji od bogatstva i izgleda.",
    ],
    photoAlt: "Mladenci se grle u zlatnom svjetlu zalaska sunca na travnatom vlažnom tlu, njen veo leprša na vjetru.",
  },
  companion: {
    eyebrow: "O platformi Zefaaf",
    title: "Vaš saputnik na putu ka halal braku",
    description:
      "Zefaaf je pouzdana islamska bračna platforma koja pruža muslimanima siguran ambijent koji čuva vrijednosti i jača porodice, pomažući vam da pronađete pravog životnog partnera putem pametnih alata i transparentnog iskustva.",
    features: [
      {
        title: "Sigurno i šerijatski usklađeno okruženje",
        description: "Predani smo islamskim smjernicama u svim interakcijama — nema slučajnih poznanstava ni prijateljstava.",
      },
      {
        title: "Neprekidna podrška 24/7",
        description: "Naš tim je uvijek dostupan da odgovori na vaša pitanja i pruži vam potrebne smjernice.",
      },
      {
        title: "Specijalizovani bračni savjeti",
        description: "Praktične smjernice zasnovane na islamskim vrijednostima za uspostavljanje sretnog i trajnog braka.",
      },
      {
        title: "Globalna pokrivenost",
        description: "Pokrivamo sve zemlje svijeta kako bismo vam pomogli pronaći životnog partnera gdje god da se nalazite.",
      },
      {
        title: "Započnite svoje putovanje sada sa Zefaafom",
        description: "Registrujte se besplatno i pridružite se Inicijativi za pametan brak. Registracija je besplatna, a dopisivanje je uvijek besplatno.",
      },
    ],
    photoAlts: {
      mosque: "Mlada u bijelom hidžabu i haljini i mladoženja u crnom smokingu zajedno uče dovu u ukrašenoj džamiji.",
      car: "Mlada u bijeloj haljini i velu grli mladoženju u crnom smokingu pored starinskog klasičnog automobila.",
    },
  },
};

const es: SmartMarriageCopy = {
  hero: {
    title: "Iniciativa de Matrimonio Inteligente",
    description:
      "El matrimonio en el islam trata de virtud y tranquilidad, no de extravagancia y gastos. Si esperas a tener las manos llenas antes de formar un hogar, quizá tengas que esperar mucho tiempo.",
    cta: "Comienza tu camino hacia el matrimonio",
    photoAlts: {
      cliff: "Una pareja posa en un acantilado rocoso con vistas a un mar turquesa y montañas; el hombre carga a la mujer mientras su larga falda blanca ondea al viento.",
      lake: "Una pareja se mira frente a frente junto a un lago alpino turquesa rodeado de pinos y montañas.",
      blossom: "Una pareja se abraza bajo un cerezo en flor de color rosa en un parque.",
    },
  },
  nav: {
    items: ["Qué es la Iniciativa", "Por qué un matrimonio inteligente", "El fundamento islámico de la Iniciativa de Matrimonio Inteligente", "Mensajes de la Iniciativa", "Carta de la Iniciativa", "Sobre Zefaaf"],
  },
  intro: {
    eyebrow: "Por qué elegir Zefaaf",
    title: "Matrimonio inteligente: una nueva ecuación para la vida",
    description:
      "La Iniciativa de Matrimonio Inteligente es un llamado consciente de la plataforma Zefaaf a reordenar las prioridades. En lugar de gastar dinero en salones de boda lujosos, dotes excesivas y joyas extravagantes, inviértelo en construir un hogar real y una vida compartida llena de amor y misericordia.",
    photoAlt: "Una pareja fotografiada de espaldas en una playa; el hombre sostiene un ramo blanco, la mujer lleva un vestido rosado fluido y hiyab, con un acantilado rocoso y brumoso de fondo.",
  },
  why: {
    eyebrow: "Por qué un matrimonio inteligente",
    description:
      "Porque la sociedad ha cargado el matrimonio con condiciones que la fe nunca impuso, y con expectativas interminables, hasta convertirlo en un sueño inalcanzable para millones de jóvenes. La Iniciativa de Matrimonio Inteligente devuelve las preguntas verdaderas: ¿Por qué nos casamos? ¿Y cómo deberíamos casarnos?",
    cards: [
      {
        title: "Porque la fe estableció el criterio correcto",
        paragraphs: [
          'El Profeta ﷺ no dijo que mirasen su riqueza, sino que dijo: "Si viene a vosotros alguien cuya religión y carácter os complazcan, casadlo." Este criterio no ha cambiado, y los hogares construidos sobre él son los más estables y duraderos.',
        ],
      },
      {
        title: "Porque las apariencias no construyen un hogar",
        paragraphs: [
          "La noche de bodas termina, pero la vida comienza después de ella. Lo que se gasta en salones y apariencias en una sola noche podría fundar un hogar real que dure años.",
        ],
      },
      {
        title: "Porque esperar tiene un precio",
        paragraphs: [
          'Cada año que esperas "el momento adecuado" es un año de vida que pasa, de estabilidad postergada y de bendiciones perdidas. Facilitar las cosas hoy es mejor que una perfección que nunca llega.',
        ],
      },
      {
        title: "Porque Dios prometió ayudar a quienes buscan la virtud",
        paragraphs: [
          '"Tres personas tienen derecho a la ayuda de Dios: quien se casa buscando la castidad." Esta promesa divina no exige un saldo bancario — exige una intención sincera y un corazón puro.',
        ],
      },
      {
        title: "Porque un comienzo humilde no es una vergüenza",
        paragraphs: [
          "Los hogares más felices no comenzaron con riqueza material, sino con honestidad.",
          "Las posibilidades se desarrollan con el tiempo y el sustento se expande, pero el carácter y la intención son lo que permanece constante.",
        ],
      },
    ],
  },
  banner: {
    title: "Matrimonio inteligente",
    description: "Una inversión en el fundamento de la vida matrimonial, mientras que el matrimonio tradicional es un gasto excesivo en apariencias.",
    photoAlt: "Una pareja reza junta en una mezquita iluminada por el sol, con un minbar de madera ornamentado.",
  },
  foundation: {
    eyebrow: "El fundamento islámico de la Iniciativa de Matrimonio Inteligente",
    title: "El matrimonio inteligente no es una idea moderna: es lo que el islam ha fomentado durante más de 1.400 años.",
    citations: [
      {
        quote:
          "Casad a los solteros y solteras de entre vosotros, y a los siervos y siervas rectos. Si son pobres, Al-lah los enriquecerá con Su favor. Al-lah es Vasto, Omnisciente.",
        attribution: "Sura An-Nur — Aleya 32",
      },
      {
        quote: "Si viene a vosotros alguien cuya religión y carácter os complazcan, casadlo. Si no lo hacéis, habrá tribulación en la tierra y gran corrupción.",
        attribution: "Narrado por Al-Tirmidhi",
      },
      {
        quote: "Tres personas tienen derecho a la ayuda de Dios: quien se casa buscando la castidad.",
        attribution: "Narrado por Al-Tirmidhi, autenticado por Al-Albani",
      },
    ],
    reasons: [
      {
        title: "La pobreza no impide el matrimonio",
        description:
          "Dios no exigió riqueza para el matrimonio. Al contrario, prometió explícitamente enriquecer a quienes buscan casarse en busca de virtud. Quien posterga el matrimonio esperando la perfección financiera ha postergado una bendición que Dios mismo garantizó.",
      },
      {
        title: "La fe y el carácter son el fundamento",
        description:
          "La riqueza va y viene, y el estatus sube y baja, pero la fe y el carácter son lo que construye un hogar. Quien elige a su pareja solo por criterios mundanos construye sobre arena; quien elige por fe construye sobre roca.",
      },
      {
        title: "La sencillez es fuente de bendición",
        description:
          "Cuanto más facilitas el camino hacia un matrimonio halal, más puertas que nunca esperabas se abrirán ante ti. Un comienzo humilde no es una carencia: es tierra fértil donde crecen el amor y la misericordia.",
      },
      {
        title: "El matrimonio no es un proyecto financiero",
        description:
          "Convertimos el matrimonio de una tradición sencilla en un proyecto que agota a las personas antes incluso de comenzar. La Iniciativa de Matrimonio Inteligente devuelve el matrimonio a su esencia: un vínculo entre dos personas que buscan virtud y estabilidad, no una fiesta para medir el estatus social.",
      },
      {
        title: "Comienza con lo que puedas, y Dios completará el resto",
        description:
          "No esperes a tenerlo todo antes de empezar tu vida. Muchos de los hogares más felices comenzaron con los medios más sencillos, y muchos de los hogares más deslumbrantes se derrumbaron por dentro. La diferencia está en la intención y el carácter.",
      },
    ],
  },
  messages: {
    eyebrow: "Mensajes de la Iniciativa",
    title: "Una palabra para cada uno de ustedes",
    description: "Un mensaje sencillo para todo aquel que busca un nuevo comienzo en la vida y estabilidad.",
    cards: [
      {
        title: "Un mensaje para los jóvenes",
        description:
          "No pospongas el matrimonio porque no estés completo económicamente. Comienza con lo que tengas, sé honesto, esfuérzate por mejorar tu situación, y verás que se te abren puertas de bien — porque el matrimonio es el comienzo de la estabilidad y la bendición.",
      },
      {
        title: "Un mensaje para los padres",
        description:
          "Tu hija necesita un hombre que tema a Dios en la forma en que la trata, que preserve su dignidad y cuide su corazón. El dinero va y viene, pero el carácter y la fe construyen un hogar estable. Elige para ella a alguien que la trate con bondad — esa es la verdadera garantía de su felicidad.",
      },
      {
        title: "Un mensaje para las jóvenes",
        description:
          "No conviertas el matrimonio en una larga lista de condiciones materiales. Pregúntate: ¿Es honesto? ¿Me respetará? ¿Puedo construir con él una vida estable? Un hombre recto puede empezar desde la nada.",
      },
    ],
  },
  charter: {
    eyebrow: "Carta de la Iniciativa",
    title: "Comprométete con nosotros y únete a la Iniciativa de Matrimonio Inteligente aceptando esta carta.",
    subtitle: "Carta del Matrimonio Inteligente",
    items: [
      "Me esfuerzo por construir una vida basada en el respeto y la comprensión.",
      "Acepto el matrimonio con medios sencillos y un comienzo realista.",
      "Me comprometo a la honestidad en toda mi información y declaraciones.",
      "Me comprometo a que mi objetivo en el matrimonio sea la virtud y la estabilidad.",
      "Creo que la fe y el carácter importan más que la riqueza y las apariencias.",
    ],
    photoAlt: "Una pareja de recién casados se abraza a la hora dorada en un humedal cubierto de hierba, su velo ondeando al viento.",
  },
  companion: {
    eyebrow: "Sobre la plataforma Zefaaf",
    title: "Tu compañero en el camino hacia un matrimonio halal",
    description:
      "Zefaaf es una plataforma islámica de matrimonio de confianza que ofrece a los musulmanes un entorno seguro que preserva los valores y fortalece a las familias, ayudándote a encontrar a la pareja de vida adecuada mediante herramientas inteligentes y una experiencia transparente.",
    features: [
      {
        title: "Entorno seguro y conforme a la sharía",
        description: "Estamos comprometidos con las directrices islámicas en todas las interacciones — sin conocidos ni amistades informales.",
      },
      {
        title: "Soporte continuo 24/7",
        description: "Nuestro equipo está siempre disponible para responder tus preguntas y ofrecerte la orientación que necesitas.",
      },
      {
        title: "Asesoramiento matrimonial especializado",
        description: "Orientación práctica basada en valores islámicos para establecer un matrimonio feliz y duradero.",
      },
      {
        title: "Cobertura global",
        description: "Cubrimos todos los países del mundo para ayudarte a encontrar una pareja de vida estés donde estés.",
      },
      {
        title: "Comienza tu camino ahora con Zefaaf",
        description: "Regístrate gratis y únete a la Iniciativa de Matrimonio Inteligente. El registro es gratuito, y enviar mensajes siempre es gratis.",
      },
    ],
    photoAlts: {
      mosque: "Una novia con hiyab y vestido blanco y un novio con esmoquin negro hacen dua juntos dentro de una mezquita ornamentada.",
      car: "Una novia con vestido blanco y velo abraza a un novio con esmoquin negro junto a un auto clásico antiguo.",
    },
  },
};

const fa: SmartMarriageCopy = {
  hero: {
    title: "طرح ازدواج هوشمند",
    description:
      "ازدواج در اسلام، پاکدامنی و آرامش را در پی دارد، نه تجمل و هزینه‌های گزاف. اگر منتظر بمانید تا دست‌هایتان پر شود و بعد خانه بسازید، شاید مدت‌های مدیدی در انتظار بمانید.",
    cta: "سفر ازدواج خود را آغاز کنید",
    photoAlts: {
      cliff: "زوجی که روی صخره‌ای مشرف به دریایی فیروزه‌ای و کوه‌ها ژست گرفته‌اند؛ مرد زن را در آغوش گرفته و دامن سفید بلند او در باد موج می‌زند.",
      lake: "زوجی که روبه‌روی هم کنار دریاچه‌ای فیروزه‌ای در دل کوه‌ها و درختان کاج ایستاده‌اند.",
      blossom: "زوجی که زیر درخت شکوفهٔ گیلاس صورتی‌رنگ در پارک یکدیگر را در آغوش گرفته‌اند.",
    },
  },
  nav: {
    items: ["طرح چیست", "چرا ازدواج هوشمند", "بنیان اسلامی طرح ازدواج هوشمند", "پیام‌های طرح", "منشور طرح", "دربارهٔ زفاف"],
  },
  intro: {
    eyebrow: "چرا زفاف را انتخاب می‌کنید",
    title: "ازدواج هوشمند: معادله‌ای تازه برای زندگی",
    description:
      "طرح ازدواج هوشمند دعوتی آگاهانه از سوی پلتفرم زفاف است برای بازچینی اولویت‌ها. به‌جای هزینه‌کردن پول برای تالارهای پرزرق‌وبرق، مهریه‌های سنگین و جواهرات پرتجمل، آن را در ساختن خانه‌ای واقعی و زندگی مشترکی سرشار از محبت و رحمت سرمایه‌گذاری کنید.",
    photoAlt: "زوجی که از پشت در ساحل عکاسی شده‌اند؛ مرد دسته‌گلی سفید در دست دارد و زن پیراهنی صورتی‌رنگ و حجاب بر تن دارد، در پس‌زمینه دماغه‌ای صخره‌ای در مه فرو رفته دیده می‌شود.",
  },
  why: {
    eyebrow: "چرا ازدواج هوشمند",
    description:
      "زیرا جامعه بر دوش ازدواج شرط‌هایی گذاشته که دین آن‌ها را الزام نکرده، و انتظاراتی بی‌پایان، تا جایی که برای میلیون‌ها جوان به رؤیایی دست‌نیافتنی بدل شده است. طرح ازدواج هوشمند سؤالات اصلی را بازمی‌گرداند: چرا ازدواج می‌کنیم؟ و چگونه باید ازدواج کنیم؟",
    cards: [
      {
        title: "چون دین معیار درست را تعیین کرده است",
        paragraphs: [
          "پیامبر ﷺ نفرمودند به ثروتش بنگرید، بلکه فرمودند: «هرگاه کسی نزد شما آمد که از دین و اخلاق او راضی هستید، او را به همسری درآورید.» این معیار تغییر نکرده، و خانه‌هایی که بر آن بنا شده‌اند، پایدارترین و ماندگارترین خانه‌ها هستند.",
        ],
      },
      {
        title: "چون ظاهر، خانه نمی‌سازد",
        paragraphs: [
          "شب عروسی به پایان می‌رسد، اما زندگی پس از آن آغاز می‌شود. آنچه در یک شب برای تالار و ظاهر خرج می‌شود، می‌تواند خانه‌ای واقعی بسازد که سال‌ها دوام بیاورد.",
        ],
      },
      {
        title: "چون انتظار بهایی دارد",
        paragraphs: [
          "هر سالی که منتظر «زمان مناسب» می‌مانید، سالی از عمر است که می‌گذرد، ثباتی است که به تعویق می‌افتد، و برکتی است که از دست می‌رود. آسان‌کردن کارها امروز، بهتر از کمالی است که هرگز فرا نمی‌رسد.",
        ],
      },
      {
        title: "چون خداوند وعده داده کسانی را که در پی پاکدامنی‌اند یاری کند",
        paragraphs: [
          "«سه نفرند که یاری خداوند حق آن‌هاست: کسی که برای حفظ پاکدامنی ازدواج می‌کند.» این وعدهٔ الهی موجودی بانکی نمی‌طلبد؛ بلکه نیتی خالص و قلبی پاک می‌خواهد.",
        ],
      },
      {
        title: "چون آغازی ساده، ننگ نیست",
        paragraphs: [
          "شادترین خانه‌ها با ثروت مادی آغاز نشدند، بلکه با صداقت آغاز شدند.",
          "توانایی‌ها با گذر زمان رشد می‌کنند و روزی گسترش می‌یابد، اما آنچه پایدار می‌ماند، اخلاق و نیت است.",
        ],
      },
    ],
  },
  banner: {
    title: "ازدواج هوشمند",
    description: "سرمایه‌گذاری در بنیان زندگی مشترک، در حالی‌که ازدواج سنتی خرجی گزاف برای ظاهرسازی است.",
    photoAlt: "زوجی که در مسجدی آفتاب‌گیر کنار منبری چوبی و مزین با هم نماز می‌گزارند.",
  },
  foundation: {
    eyebrow: "بنیان اسلامی طرح ازدواج هوشمند",
    title: "ازدواج هوشمند اندیشه‌ای نوظهور نیست؛ این همان چیزی است که اسلام بیش از ۱۴۰۰ سال است بر آن تأکید کرده است.",
    citations: [
      {
        quote:
          "و بی‌همسران خود را، و غلامان و کنیزان شایستهٔ خویش را همسر دهید. اگر تهیدست باشند، خداوند آنان را از فضل خویش بی‌نیاز می‌گرداند، و خداوند گشایشگری داناست.",
        attribution: "سورهٔ نور — آیهٔ ۳۲",
      },
      {
        quote:
          "هرگاه کسی نزد شما آمد که از دین و اخلاق او راضی هستید، او را به همسری درآورید؛ اگر چنین نکنید، فتنه‌ای در زمین و فسادی بزرگ روی خواهد داد.",
        attribution: "روایت ترمذی",
      },
      {
        quote: "سه نفرند که یاری خداوند حق آن‌هاست: کسی که برای حفظ پاکدامنی ازدواج می‌کند.",
        attribution: "روایت ترمذی، تصحیح آلبانی",
      },
    ],
    reasons: [
      {
        title: "فقر مانع ازدواج نیست",
        description:
          "خداوند برای ازدواج ثروت را شرط نکرده است؛ بلکه صراحتاً وعده داده کسانی را که در پی پاکدامنی ازدواج می‌کنند، بی‌نیاز گرداند. هر کس ازدواج را به بهانهٔ کمال مالی به تعویق اندازد، برکتی را به تعویق انداخته که خود خداوند آن را تضمین کرده است.",
      },
      {
        title: "دین و اخلاق، بنیان است",
        description:
          "ثروت می‌آید و می‌رود، و جایگاه بالا و پایین می‌شود، اما آنچه خانه را می‌سازد، دین و اخلاق است. هر کس همسرش را تنها با معیارهای دنیوی برگزیند، بر شن بنا کرده است؛ و هر کس با دین‌داری برگزیند، بر سنگ بنا کرده است.",
      },
      {
        title: "سادگی، سرچشمهٔ برکت است",
        description:
          "هرچه راه ازدواج حلال را آسان‌تر کنید، دروازه‌هایی که هرگز انتظارش را نداشتید، به رویتان گشوده خواهد شد. آغازی ساده کاستی نیست؛ بلکه زمینی حاصلخیز است که محبت و رحمت در آن می‌روید.",
      },
      {
        title: "ازدواج یک پروژهٔ مالی نیست",
        description:
          "ما ازدواج را از سنتی آسان به پروژه‌ای بدل کرده‌ایم که پیش از آغاز، مردم را از پا درمی‌آورد. طرح ازدواج هوشمند، ازدواج را به جوهرهٔ خود بازمی‌گرداند: پیوندی میان دو نفر که در پی پاکدامنی و ثبات‌اند، نه جشنی برای سنجش جایگاه اجتماعی.",
      },
      {
        title: "با آنچه در توان دارید آغاز کنید، و خداوند باقی را کامل خواهد کرد",
        description:
          "منتظر نمانید تا همه‌چیز فراهم شود، سپس زندگی‌تان را آغاز کنید. بسیاری از شادترین خانه‌ها با ساده‌ترین امکانات آغاز شدند، و بسیاری از پرزرق‌وبرق‌ترین خانه‌ها از درون فروریختند. تفاوت در نیت و اخلاق نهفته است.",
      },
    ],
  },
  messages: {
    eyebrow: "پیام‌های طرح",
    title: "سخنی برای هر یک از شما",
    description: "پیامی ساده برای هر کس که در پی آغازی تازه و ثبات در زندگی است.",
    cards: [
      {
        title: "پیامی به جوانان",
        description:
          "به‌بهانهٔ ناتمام‌بودن وضع مالی، ازدواج را به تعویق نیندازید. با آنچه در توان دارید آغاز کنید، صادق باشید، برای بهبود وضع خود بکوشید، و آنگاه خواهید دید که درهای خیر به رویتان گشوده می‌شود؛ زیرا ازدواج آغاز ثبات و برکت است.",
      },
      {
        title: "پیامی به پدران",
        description:
          "دختر شما به مردی نیاز دارد که در رفتار با او از خدا بترسد، کرامتش را پاس دارد و دلش را نگهبانی کند. پول می‌آید و می‌رود، اما اخلاق و دین‌داری‌اند که خانه‌ای پایدار می‌سازند. برای او کسی را برگزینید که با او به نیکی رفتار کند؛ این است ضمانت واقعی خوشبختی او.",
      },
      {
        title: "پیامی به دختران جوان",
        description:
          "ازدواج را به فهرستی بلند از شرایط مادی بدل نکنید. از خود بپرسید: آیا او صادق است؟ آیا به من احترام خواهد گذاشت؟ آیا می‌توانم با او زندگی‌ای پایدار بسازم؟ مردی نیکوکار ممکن است از هیچ آغاز کند.",
      },
    ],
  },
  charter: {
    eyebrow: "منشور طرح",
    title: "با پذیرفتن این منشور، همراه ما پیمان ببندید و به طرح ازدواج هوشمند بپیوندید.",
    subtitle: "منشور ازدواج هوشمند",
    items: [
      "می‌کوشم زندگی‌ای بر پایهٔ احترام و تفاهم بسازم.",
      "ازدواج با امکاناتی ساده و آغازی واقع‌بینانه را می‌پذیرم.",
      "به صداقت در تمام اطلاعات و گفته‌های خود پایبندم.",
      "پیمان می‌بندم که هدفم از ازدواج، پاکدامنی و ثبات باشد.",
      "باور دارم که دین و اخلاق، بیش از ثروت و ظاهر اهمیت دارند.",
    ],
    photoAlt: "عروس و دامادی که در تالابی سرسبز در هنگام غروب طلایی یکدیگر را در آغوش گرفته‌اند و حجاب او در باد موج می‌زند.",
  },
  companion: {
    eyebrow: "دربارهٔ پلتفرم زفاف",
    title: "همراه شما در مسیر ازدواج حلال",
    description:
      "زفاف یک پلتفرم معتبر ازدواج اسلامی است که محیطی امن برای مسلمانان فراهم می‌کند، محیطی که ارزش‌ها را حفظ می‌کند و خانواده‌ها را استوار می‌سازد و با ابزارهایی هوشمند و تجربه‌ای شفاف، به شما کمک می‌کند همسر مناسب زندگی خود را بیابید.",
    features: [
      {
        title: "محیطی امن و منطبق با شریعت",
        description: "ما در تمام تعاملات پایبند رهنمودهای اسلامی هستیم؛ بدون آشنایی یا دوستی گذری.",
      },
      {
        title: "پشتیبانی مستمر شبانه‌روزی",
        description: "تیم ما همیشه آماده است تا به پرسش‌های شما پاسخ دهد و راهنمایی لازم را ارائه کند.",
      },
      {
        title: "مشاورهٔ تخصصی ازدواج",
        description: "راهنمایی‌های عملی بر پایهٔ ارزش‌های اسلامی برای برپایی ازدواجی خوشبخت و پایدار.",
      },
      {
        title: "پوشش جهانی",
        description: "پوشش تمام کشورهای جهان تا هر کجا که باشید، در یافتن همسر زندگی به شما یاری رساند.",
      },
      {
        title: "همین حالا سفر خود را با زفاف آغاز کنید",
        description: "به‌رایگان ثبت‌نام کنید و به طرح ازدواج هوشمند بپیوندید. ثبت‌نام رایگان است، و پیام‌رسانی همیشه رایگان است.",
      },
    ],
    photoAlts: {
      mosque: "عروسی با حجاب و لباس سفید و دامادی با کت‌وشلوار مشکی که در مسجدی مزین با هم دعا می‌کنند.",
      car: "عروسی با لباس سفید و حجاب که در کنار خودرویی کلاسیک و قدیمی، دامادی با کت‌وشلوار مشکی را در آغوش گرفته است.",
    },
  },
};

const pt: SmartMarriageCopy = {
  hero: {
    title: "Iniciativa de Casamento Inteligente",
    description:
      "O casamento no islão é sobre virtude e tranquilidade, não extravagância e despesas. Se esperares até teres as mãos cheias antes de construir um lar, talvez tenhas de esperar muito tempo.",
    cta: "Comece a sua jornada matrimonial",
    photoAlts: {
      cliff: "Um casal posa num penhasco rochoso com vista para um mar turquesa e montanhas; o homem carrega a mulher enquanto a sua longa saia branca esvoaça ao vento.",
      lake: "Um casal está frente a frente junto a um lago alpino turquesa rodeado de pinheiros e montanhas.",
      blossom: "Um casal abraça-se debaixo de uma cerejeira em flor rosa num parque.",
    },
  },
  nav: {
    items: ["O que é a Iniciativa", "Porquê o casamento inteligente", "O fundamento islâmico da Iniciativa de Casamento Inteligente", "Mensagens da Iniciativa", "Carta da Iniciativa", "Sobre a Zefaaf"],
  },
  intro: {
    eyebrow: "Porque escolher a Zefaaf",
    title: "Casamento inteligente: uma nova equação para a vida",
    description:
      "A Iniciativa de Casamento Inteligente é um apelo consciente da plataforma Zefaaf para reordenar prioridades. Em vez de gastar dinheiro em salões de festa luxuosos, dotes excessivos e joias extravagantes, invista-o na construção de um lar verdadeiro e de uma vida partilhada repleta de amor e misericórdia.",
    photoAlt: "Um casal fotografado de costas numa praia, o homem segurando um ramo branco, a mulher com um vestido rosado fluido e hijab, com um promontório rochoso e enevoado ao fundo.",
  },
  why: {
    eyebrow: "Porquê o casamento inteligente",
    description:
      "Porque a sociedade sobrecarregou o casamento com condições que a fé nunca impôs, e com expectativas intermináveis, até se tornar um sonho inatingível para milhões de jovens. A Iniciativa de Casamento Inteligente traz de volta as perguntas verdadeiras: Porque nos casamos? E como devemos casar-nos?",
    cards: [
      {
        title: "Porque a fé estabeleceu o critério certo",
        paragraphs: [
          'O Profeta ﷺ não disse para olhar para a sua riqueza, mas disse: "Se vier até vós alguém cuja religião e carácter vos agradem, casai-o." Este critério não mudou, e os lares construídos sobre ele são os mais estáveis e duradouros.',
        ],
      },
      {
        title: "Porque as aparências não constroem um lar",
        paragraphs: [
          "A noite de núpcias termina, mas a vida começa depois dela. O que se gasta em salões e aparências numa única noite poderia fundar um lar verdadeiro que dura anos.",
        ],
      },
      {
        title: "Porque esperar tem um preço",
        paragraphs: [
          'Cada ano que esperas pelo "momento certo" é um ano de vida que passa, de estabilidade adiada e de bênçãos perdidas. Facilitar as coisas hoje é melhor do que uma perfeição que nunca chega.',
        ],
      },
      {
        title: "Porque Deus prometeu ajudar quem busca a virtude",
        paragraphs: [
          '"Três pessoas têm direito à ajuda de Deus: aquele que se casa buscando a castidade." Esta promessa divina não exige um saldo bancário — exige uma intenção sincera e um coração puro.',
        ],
      },
      {
        title: "Porque um começo humilde não é uma vergonha",
        paragraphs: [
          "Os lares mais felizes não começaram com riqueza material, mas com honestidade.",
          "As possibilidades desenvolvem-se com o tempo, e o sustento expande-se, mas o carácter e a intenção são o que permanece constante.",
        ],
      },
    ],
  },
  banner: {
    title: "Casamento inteligente",
    description: "Um investimento no alicerce da vida conjugal, enquanto o casamento tradicional é um gasto excessivo em aparências.",
    photoAlt: "Um casal reza junto numa mesquita iluminada pelo sol, com um minbar de madeira ornamentado.",
  },
  foundation: {
    eyebrow: "O fundamento islâmico da Iniciativa de Casamento Inteligente",
    title: "O casamento inteligente não é uma ideia moderna — é o que o islão tem incentivado há mais de 1.400 anos.",
    citations: [
      {
        quote:
          "E casai os solteiros entre vós, e os íntegros dentre vossos servos e servas. Se forem pobres, Allah os enriquecerá com a Sua graça. E Allah é Munificente, Onisciente.",
        attribution: "Surata An-Nur — Versículo 32",
      },
      {
        quote: "Se vier até vós alguém cuja religião e carácter vos agradem, casai-o. Se não o fizerdes, haverá discórdia na terra e grande corrupção.",
        attribution: "Narrado por Al-Tirmidhi",
      },
      {
        quote: "Três pessoas têm direito à ajuda de Deus: aquele que se casa buscando a castidade.",
        attribution: "Narrado por Al-Tirmidhi, autenticado por Al-Albani",
      },
    ],
    reasons: [
      {
        title: "A pobreza não impede o casamento",
        description:
          "Deus não exigiu riqueza para o casamento. Pelo contrário, prometeu explicitamente enriquecer quem busca casar-se em nome da virtude. Quem adia o casamento à espera da perfeição financeira adiou uma bênção que o próprio Deus garantiu.",
      },
      {
        title: "A fé e o carácter são o alicerce",
        description:
          "A riqueza vem e vai, e o estatuto sobe e desce, mas a fé e o carácter são o que constrói um lar. Quem escolhe um parceiro apenas por critérios mundanos constrói sobre areia; quem escolhe pela fé constrói sobre pedra.",
      },
      {
        title: "A simplicidade é fonte de bênção",
        description:
          "Quanto mais facilitares o caminho para um casamento halal, mais portas que nunca esperaste se abrirão diante de ti. Um começo humilde não é uma deficiência — é terreno fértil onde crescem o amor e a misericórdia.",
      },
      {
        title: "O casamento não é um projeto financeiro",
        description:
          "Transformámos o casamento de uma tradição simples num projeto que esgota as pessoas antes mesmo de começar. A Iniciativa de Casamento Inteligente devolve o casamento à sua essência: um laço entre duas pessoas que buscam virtude e estabilidade, não uma festa para medir o estatuto social.",
      },
      {
        title: "Começa com o que puderes, e Deus completará o resto",
        description:
          "Não esperes ter tudo antes de começar a tua vida. Muitos dos lares mais felizes começaram com os meios mais simples, e muitos dos lares mais deslumbrantes desmoronaram-se por dentro. A diferença está na intenção e no carácter.",
      },
    ],
  },
  messages: {
    eyebrow: "Mensagens da Iniciativa",
    title: "Uma palavra para cada um de vós",
    description: "Uma mensagem simples para todos os que procuram um novo começo na vida e estabilidade.",
    cards: [
      {
        title: "Uma mensagem aos jovens",
        description:
          "Não adies o casamento por não estares financeiramente completo. Começa com o que tens, sê honesto, esforça-te por melhorar a tua situação, e verás que se abrem portas de bem para ti — porque o casamento é o começo da estabilidade e da bênção.",
      },
      {
        title: "Uma mensagem aos pais",
        description:
          "A tua filha precisa de um homem que tema a Deus na forma como a trata, que preserve a sua dignidade e proteja o seu coração. O dinheiro vem e vai, mas o carácter e a fé constroem um lar estável. Escolhe para ela alguém que a trate com bondade — essa é a verdadeira garantia da sua felicidade.",
      },
      {
        title: "Uma mensagem às jovens",
        description:
          "Não transformes o casamento numa longa lista de condições materiais. Pergunta a ti mesma: Ele é honesto? Vai respeitar-me? Consigo construir com ele uma vida estável? Um homem íntegro pode começar do zero.",
      },
    ],
  },
  charter: {
    eyebrow: "Carta da Iniciativa",
    title: "Comprometa-se connosco e junte-se à Iniciativa de Casamento Inteligente, aceitando esta carta.",
    subtitle: "Carta do Casamento Inteligente",
    items: [
      "Esforço-me por construir uma vida baseada no respeito e na compreensão.",
      "Aceito o casamento com meios simples e um começo realista.",
      "Comprometo-me com a honestidade em todas as minhas informações e declarações.",
      "Comprometo-me a que o meu objetivo no casamento seja a virtude e a estabilidade.",
      "Acredito que a fé e o carácter importam mais do que a riqueza e as aparências.",
    ],
    photoAlt: "Uma noiva e um noivo abraçam-se à hora dourada numa zona húmida coberta de erva, o véu dela a esvoaçar ao vento.",
  },
  companion: {
    eyebrow: "Sobre a plataforma Zefaaf",
    title: "O seu companheiro no caminho para um casamento halal",
    description:
      "A Zefaaf é uma plataforma islâmica de casamento de confiança que oferece aos muçulmanos um ambiente seguro que preserva valores e fortalece famílias, ajudando-o a encontrar o parceiro de vida certo através de ferramentas inteligentes e de uma experiência transparente.",
    features: [
      {
        title: "Ambiente seguro e em conformidade com a sharia",
        description: "Estamos comprometidos com as diretrizes islâmicas em todas as interações — sem conhecimentos ou amizades casuais.",
      },
      {
        title: "Apoio contínuo 24 horas por dia",
        description: "A nossa equipa está sempre disponível para responder às suas perguntas e fornecer a orientação de que precisa.",
      },
      {
        title: "Aconselhamento matrimonial especializado",
        description: "Orientação prática baseada em valores islâmicos para estabelecer um casamento feliz e duradouro.",
      },
      {
        title: "Cobertura global",
        description: "Abrangemos todos os países do mundo para o ajudar a encontrar um parceiro de vida onde quer que esteja.",
      },
      {
        title: "Comece já a sua jornada com a Zefaaf",
        description: "Registe-se gratuitamente e junte-se à Iniciativa de Casamento Inteligente. O registo é gratuito, e enviar mensagens é sempre gratuito.",
      },
    ],
    photoAlts: {
      mosque: "Uma noiva com hijab e vestido brancos e um noivo de smoking preto fazem dua juntos dentro de uma mesquita ornamentada.",
      car: "Uma noiva de vestido branco e véu abraça um noivo de smoking preto junto a um carro clássico vintage.",
    },
  },
};

const ja: SmartMarriageCopy = {
  hero: {
    title: "スマート・マリッジ・イニシアチブ",
    description:
      "イスラームにおける結婚とは、徳と心の安らぎに関するものであり、贅沢や出費のためのものではありません。手元に十分な余裕ができるまで家庭を築くのを待っていたら、あなたは長い間待つことになるかもしれません。",
    cta: "結婚への歩みを始める",
    photoAlts: {
      cliff: "岩だらけの崖の上でポーズを取るカップル。眼下にはターコイズブルーの海と山々が広がり、男性は女性を抱き上げ、彼女の長い白いスカートが風になびいている。",
      lake: "松の木と山々に囲まれたターコイズ色の高山湖のほとりで、向かい合って立つカップル。",
      blossom: "公園で満開のピンクの桜の木の下で抱き合うカップル。",
    },
  },
  nav: {
    items: ["イニシアチブとは", "なぜスマート・マリッジなのか", "スマート・マリッジ・イニシアチブのイスラーム的根拠", "イニシアチブからのメッセージ", "イニシアチブ憲章", "Zefaafについて"],
  },
  intro: {
    eyebrow: "Zefaafが選ばれる理由",
    title: "スマート・マリッジ:人生の新しい方程式",
    description:
      "スマート・マリッジ・イニシアチブは、優先順位を見直そうというZefaafプラットフォームからの意識的な呼びかけです。豪華な結婚式場や過剰なマフル(婚資)、贅沢な宝飾品にお金を費やす代わりに、それを本物の家庭を築き、愛と慈しみに満ちた共同生活を育むことに投資しましょう。",
    photoAlt: "ビーチで後ろ姿を撮影されたカップル。男性は白い花束を手にし、女性は淡いピンク色のドレスとヒジャブをまとい、背景には霧のかかった岩場の岬が見える。",
  },
  why: {
    eyebrow: "なぜスマート・マリッジなのか",
    description:
      "社会が信仰の求めていない条件と、終わりのない期待で結婚に重荷を課してきたために、それは何百万もの若者にとって手の届かない夢になってしまいました。スマート・マリッジ・イニシアチブは、本当に大切な問いを取り戻します。なぜ私たちは結婚するのか。そして、どのように結婚すべきなのか。",
    cards: [
      {
        title: "信仰こそが正しい基準を示したから",
        paragraphs: [
          "預言者ﷺは、その者の財産を見よとは言わず、こう言われました。「もしその信仰と人柄にあなたが満足できる者が訪れたなら、結婚させなさい。」この基準は今も変わらず、それに基づいて築かれた家庭こそ最も安定し、長く続くのです。",
        ],
      },
      {
        title: "見栄えでは家庭は築けないから",
        paragraphs: [
          "結婚式の夜は終わっても、人生はその後に始まります。会場や見栄えのためにたった一晩で費やされるお金は、何年も続く本物の家庭を築くために使うことができるのです。",
        ],
      },
      {
        title: "待つことには代償があるから",
        paragraphs: [
          "「ちょうど良い時」を待つ一年一年は、過ぎ去っていく人生の一年であり、先延ばしにされる安定であり、失われる恵みです。今日、物事を容易にすることの方が、決して訪れない完璧さよりも優れています。",
        ],
      },
      {
        title: "神は徳を求める者を助けると約束されたから",
        paragraphs: [
          "「三者にはアッラーの助けを受ける権利がある。貞節を求めて結婚する者もその一人である。」この神の約束は銀行残高を必要としません。必要なのは、誠実な意志と清らかな心だけです。",
        ],
      },
      {
        title: "慎ましい始まりは恥ではないから",
        paragraphs: [
          "最も幸せな家庭は、物質的な豊かさではなく、誠実さから始まりました。",
          "力量は時間とともに育ち、糧は広がっていきますが、変わらず残るのは人柄と意志です。",
        ],
      },
    ],
  },
  banner: {
    title: "スマート・マリッジ",
    description: "結婚生活の土台への投資であり、一方で伝統的な結婚は見栄えのための過剰な出費です。",
    photoAlt: "陽光が差し込むモスクの中で、装飾を施した木製のミンバルのそばで共に祈るカップル。",
  },
  foundation: {
    eyebrow: "スマート・マリッジ・イニシアチブのイスラーム的根拠",
    title: "スマート・マリッジは現代的な発想ではなく、イスラームが1400年以上にわたって奨励してきたことなのです。",
    citations: [
      {
        quote:
          "あなたがたのうち独身の者、そしてあなたがたの奴隷や女奴隷のうち正しい者たちを結婚させなさい。たとえ彼らが貧しくとも、アッラーはその恩恵によって彼らを富ませてくださる。アッラーは広大にして全知であられる。",
        attribution: "アン・ヌール章 — 第32節",
      },
      {
        quote: "その信仰と人柄にあなたが満足できる者が訪れたなら、結婚させなさい。そうしなければ、地上に大きな試練と腐敗が広がるであろう。",
        attribution: "ティルミズィー伝",
      },
      {
        quote: "三者にはアッラーの助けを受ける権利がある。貞節を求めて結婚する者もその一人である。",
        attribution: "ティルミズィー伝、アルバーニーにより真正と認定",
      },
    ],
    reasons: [
      {
        title: "貧しさは結婚を妨げない",
        description:
          "神は結婚に富を求められませんでした。それどころか、徳を求めて結婚する者を豊かにすると明確に約束されました。経済的な完璧さを待って結婚を先延ばしにする者は、神ご自身が保証された恵みを先延ばしにしているのです。",
      },
      {
        title: "信仰と人柄こそが土台",
        description:
          "富は移ろい、地位も上下しますが、家庭を築くのは信仰と人柄です。世俗的な基準だけで相手を選ぶ者は砂の上に、信仰によって選ぶ者は岩の上に家を築きます。",
      },
      {
        title: "簡素さは恵みの源",
        description:
          "ハラールな結婚への道を容易にすればするほど、思いもよらなかった扉が次々と開かれていきます。慎ましい始まりは欠陥ではなく、愛と慈しみが育つ肥沃な土壌なのです。",
      },
      {
        title: "結婚は経済的プロジェクトではない",
        description:
          "私たちは結婚を、容易な慣習から、始まる前から人々を疲弊させるプロジェクトへと変えてしまいました。スマート・マリッジ・イニシアチブは、結婚をその本質へと引き戻します。それは社会的地位を測るための宴ではなく、徳と安定を求める二人の絆なのです。",
      },
      {
        title: "できることから始めれば、残りは神が満たしてくださる",
        description:
          "すべてを揃えてから人生を始めようと待つ必要はありません。最も幸せな家庭の多くは、最も質素な手段から始まり、最も華やかな家庭の多くが内側から崩れ去りました。その違いは意志と人柄にあるのです。",
      },
    ],
  },
  messages: {
    eyebrow: "イニシアチブからのメッセージ",
    title: "あなた方一人ひとりへの言葉",
    description: "人生における新しい始まりと安定を求めるすべての人へのシンプルなメッセージ。",
    cards: [
      {
        title: "若い男性へのメッセージ",
        description:
          "経済的に完璧ではないからといって結婚を先延ばしにしないでください。できることから始め、誠実であり、状況を改善する努力を続ければ、善の扉が開かれていくことに気づくでしょう。結婚は安定と恵みの始まりなのですから。",
      },
      {
        title: "父親たちへのメッセージ",
        description:
          "あなたの娘には、彼女への接し方において神を畏れ、彼女の尊厳を守り、彼女の心を大切にする男性が必要です。お金は移ろいますが、人柄と信仰は安定した家庭を築きます。彼女に優しく接してくれる人を選んでください。それこそが彼女の幸せの本当の保証です。",
      },
      {
        title: "若い女性へのメッセージ",
        description:
          "結婚を物質的な条件の長いリストにしないでください。自分に問いかけてみてください。彼は誠実か。私を尊重してくれるか。彼と共に安定した人生を築けるか。正しい男性は、何もないところから始めることもあるのです。",
      },
    ],
  },
  charter: {
    eyebrow: "イニシアチブ憲章",
    title: "この憲章に賛同し、私たちと共に誓い、スマート・マリッジ・イニシアチブに参加してください。",
    subtitle: "スマート・マリッジ憲章",
    items: [
      "私は、尊重と理解に基づく生活を築くよう努めます。",
      "私は、簡素な手段と現実的な始まりによる結婚を受け入れます。",
      "私は、自分のすべての情報と発言において誠実であることを誓います。",
      "私は、結婚における目標が徳と安定であることを誓います。",
      "私は、信仰と人柄が富や見栄えよりも大切であると信じます。",
    ],
    photoAlt: "草の生い茂る湿地で、黄金色の光の中で抱き合う新郎新婦。彼女のベールが風になびいている。",
  },
  companion: {
    eyebrow: "Zefaafプラットフォームについて",
    title: "ハラールな結婚への道を共に歩む伴侶",
    description:
      "Zefaafは、価値観を守り家族の絆を強める安全な環境をムスリムに提供する、信頼できるイスラーム結婚プラットフォームです。スマートなツールと透明性のある体験を通じて、あなたにふさわしい人生の伴侶を見つける手助けをします。",
    features: [
      {
        title: "安全でシャリーアに準拠した環境",
        description: "私たちはあらゆるやり取りにおいてイスラームの指針を守ることに専念しています。気軽な知り合いや交友関係はありません。",
      },
      {
        title: "24時間365日の継続的なサポート",
        description: "私たちのチームは、あなたの質問に答え、必要な助言を提供するためにいつでも対応しています。",
      },
      {
        title: "専門的な結婚アドバイス",
        description: "幸せで長く続く結婚を築くための、イスラームの価値観に基づいた実践的な助言。",
      },
      {
        title: "世界中をカバー",
        description: "世界中のあらゆる国をカバーし、あなたがどこにいても人生の伴侶を見つける手助けをします。",
      },
      {
        title: "今すぐZefaafとともに歩みを始めましょう",
        description: "無料で登録し、スマート・マリッジ・イニシアチブに参加してください。登録は無料で、メッセージのやり取りもいつも無料です。",
      },
    ],
    photoAlts: {
      mosque: "白いヒジャブとドレスをまとった花嫁と、黒いタキシードを着た花婿が、装飾を施したモスクの中で共にドゥアを捧げている。",
      car: "白いドレスとベールをまとった花嫁が、ビンテージのクラシックカーのそばで黒いタキシード姿の花婿を抱きしめている。",
    },
  },
};

const ko: SmartMarriageCopy = {
  hero: {
    title: "스마트 결혼 이니셔티브",
    description:
      "이슬람에서 결혼이란 미덕과 평온함에 관한 것이지, 사치와 지출에 관한 것이 아닙니다. 손이 가득 찰 때까지 가정을 꾸리는 것을 미룬다면, 아주 오랫동안 기다려야 할지도 모릅니다.",
    cta: "결혼을 향한 여정을 시작하세요",
    photoAlts: {
      cliff: "터키석빛 바다와 산을 내려다보는 바위 절벽 위에서 포즈를 취한 커플. 남성이 여성을 안아 올리는 동안 그녀의 긴 흰색 치마가 바람에 나부낀다.",
      lake: "소나무와 산으로 둘러싸인 터키석빛 고산 호수 옆에서 서로 마주 보고 서 있는 커플.",
      blossom: "공원에서 만개한 분홍빛 벚꽃나무 아래 서로를 안고 있는 커플.",
    },
  },
  nav: {
    items: ["이니셔티브란", "왜 스마트 결혼인가", "스마트 결혼 이니셔티브의 이슬람적 근거", "이니셔티브의 메시지", "이니셔티브 헌장", "Zefaaf 소개"],
  },
  intro: {
    eyebrow: "Zefaaf를 선택하는 이유",
    title: "스마트 결혼: 삶을 위한 새로운 방정식",
    description:
      "스마트 결혼 이니셔티브는 우선순위를 재정비하자는 Zefaaf 플랫폼의 의식적인 제안입니다. 화려한 결혼식장과 과도한 마흐르(혼자금), 사치스러운 보석에 돈을 쓰는 대신, 진정한 가정을 세우고 사랑과 자비로 가득한 함께하는 삶에 투자하십시오.",
    photoAlt: "해변에서 뒷모습으로 촬영된 커플. 남성은 흰 꽃다발을 들고 있고, 여성은 흘러내리는 듯한 연분홍 드레스와 히잡을 착용했으며, 배경에는 안개 낀 바위 곶이 보인다.",
  },
  why: {
    eyebrow: "왜 스마트 결혼인가",
    description:
      "사회가 신앙이 요구하지 않는 조건들과 끝없는 기대로 결혼에 무거운 짐을 지워, 수백만 젊은이들에게 결혼이 이룰 수 없는 꿈이 되어버렸기 때문입니다. 스마트 결혼 이니셔티브는 진짜 질문을 되돌려줍니다. 우리는 왜 결혼하는가? 그리고 어떻게 결혼해야 하는가?",
    cards: [
      {
        title: "신앙이 올바른 기준을 세웠기 때문에",
        paragraphs: [
          '예언자ﷺ께서는 재산을 보라고 말씀하지 않으시고, 이렇게 말씀하셨습니다. "믿음과 인품에 너희가 만족하는 자가 찾아오거든 그를 결혼시켜라." 이 기준은 변하지 않았으며, 그 위에 세워진 가정이야말로 가장 안정적이고 오래갑니다.',
        ],
      },
      {
        title: "겉모습으로는 가정을 세울 수 없기 때문에",
        paragraphs: [
          "결혼식 밤은 끝나지만, 삶은 그 이후에 시작됩니다. 단 하룻밤의 장소와 겉모습에 쓰이는 비용이면, 수년간 지속될 진짜 가정을 세울 수 있습니다.",
        ],
      },
      {
        title: "기다림에는 대가가 따르기 때문에",
        paragraphs: [
          '"적절한 때"를 기다리는 매해는 흘러가는 삶의 한 해이자, 미뤄지는 안정이며, 놓쳐버리는 축복입니다. 오늘 일을 쉽게 만드는 것이 결코 오지 않을 완벽함보다 낫습니다.',
        ],
      },
      {
        title: "하나님께서 미덕을 추구하는 이들을 돕겠다 약속하셨기 때문에",
        paragraphs: [
          '"세 부류의 사람에게는 하나님의 도움을 받을 권리가 있으니, 순결을 지키고자 결혼하는 자가 그중 하나이다." 이 신성한 약속은 은행 잔고를 요구하지 않습니다. 필요한 것은 진실한 의도와 순수한 마음뿐입니다.',
        ],
      },
      {
        title: "소박한 시작은 부끄러운 일이 아니기 때문에",
        paragraphs: [
          "가장 행복한 가정들은 물질적 부유함이 아니라 정직함에서 시작되었습니다.",
          "능력은 시간이 지나며 발전하고 살림살이도 넉넉해지지만, 변함없이 남는 것은 인품과 의도입니다.",
        ],
      },
    ],
  },
  banner: {
    title: "스마트 결혼",
    description: "결혼 생활의 기반에 대한 투자인 반면, 전통적인 결혼은 겉모습을 위한 과도한 지출입니다.",
    photoAlt: "화려하게 장식된 나무 민바르가 있는 햇살 가득한 모스크에서 함께 기도하는 커플.",
  },
  foundation: {
    eyebrow: "스마트 결혼 이니셔티브의 이슬람적 근거",
    title: "스마트 결혼은 현대적인 발상이 아니라, 이슬람이 1,400년 넘게 장려해 온 것입니다.",
    citations: [
      {
        quote:
          "너희 가운데 배우자가 없는 이들과 너희의 신실한 남종과 여종들을 결혼시켜라. 그들이 가난하다 할지라도 하나님께서는 그분의 은혜로 그들을 풍요롭게 하시리라. 하나님은 모든 것을 아우르시고 다 아시는 분이라.",
        attribution: "안 누르 장 — 32절",
      },
      {
        quote: "믿음과 인품에 너희가 만족하는 자가 찾아오거든 그를 결혼시켜라. 그렇게 하지 않으면 땅 위에 큰 시련과 부패가 있을 것이다.",
        attribution: "알 티르미디 전승",
      },
      {
        quote: "세 부류의 사람에게는 하나님의 도움을 받을 권리가 있으니, 순결을 지키고자 결혼하는 자가 그중 하나이다.",
        attribution: "알 티르미디 전승, 알바니가 진본으로 인정",
      },
    ],
    reasons: [
      {
        title: "가난이 결혼을 막지 못한다",
        description:
          "하나님께서는 결혼을 위해 부를 요구하지 않으셨습니다. 오히려 미덕을 추구하며 결혼하는 이들을 풍요롭게 하시겠다고 명확히 약속하셨습니다. 경제적 완벽함을 기다리며 결혼을 미루는 사람은 하나님께서 직접 보장하신 축복을 미루고 있는 것입니다.",
      },
      {
        title: "신앙과 인품이 기반이다",
        description:
          "부는 오고 가며, 지위는 오르내리지만, 가정을 세우는 것은 신앙과 인품입니다. 세속적인 기준만으로 배우자를 선택하는 사람은 모래 위에 짓고, 신앙으로 선택하는 사람은 바위 위에 짓습니다.",
      },
      {
        title: "소박함이 축복의 근원이다",
        description:
          "할랄한 결혼으로 가는 길을 쉽게 만들수록, 예상치 못했던 문들이 더 많이 열릴 것입니다. 소박한 시작은 결함이 아니라, 사랑과 자비가 자라나는 비옥한 땅입니다.",
      },
      {
        title: "결혼은 재정적 프로젝트가 아니다",
        description:
          "우리는 결혼을 손쉬운 전통에서 시작하기도 전에 사람들을 지치게 만드는 프로젝트로 바꿔버렸습니다. 스마트 결혼 이니셔티브는 결혼을 본질로 되돌립니다. 사회적 지위를 재는 잔치가 아니라, 미덕과 안정을 추구하는 두 사람 사이의 유대입니다.",
      },
      {
        title: "할 수 있는 것부터 시작하면, 나머지는 하나님께서 채워주실 것입니다",
        description:
          "모든 것을 갖추기를 기다린 뒤 삶을 시작하지 마십시오. 가장 행복한 가정들 중 많은 곳이 가장 소박한 수단으로 시작되었고, 가장 화려한 가정들 중 많은 곳이 내부에서 무너졌습니다. 그 차이는 의도와 인품에 있습니다.",
      },
    ],
  },
  messages: {
    eyebrow: "이니셔티브의 메시지",
    title: "여러분 한 분 한 분께 드리는 말씀",
    description: "삶의 새로운 시작과 안정을 찾는 모든 이를 위한 간단한 메시지.",
    cards: [
      {
        title: "청년들에게 드리는 메시지",
        description:
          "경제적으로 완벽하지 않다는 이유로 결혼을 미루지 마십시오. 할 수 있는 것부터 시작하고, 정직하며, 상황을 개선하려 노력하면, 선의 문들이 열리는 것을 보게 될 것입니다. 결혼은 안정과 축복의 시작이기 때문입니다.",
      },
      {
        title: "아버지들에게 드리는 메시지",
        description:
          "당신의 딸에게는 그녀를 대하는 태도에서 하나님을 두려워하고, 그녀의 존엄을 지키며, 그녀의 마음을 소중히 여기는 남자가 필요합니다. 돈은 오고 가지만, 인품과 신앙은 안정된 가정을 세웁니다. 그녀를 친절하게 대할 사람을 선택해 주십시오. 그것이야말로 그녀의 행복에 대한 진정한 보장입니다.",
      },
      {
        title: "젊은 여성들에게 드리는 메시지",
        description:
          "결혼을 물질적 조건들의 긴 목록으로 만들지 마십시오. 스스로에게 물어보십시오. 그는 정직한가? 그는 나를 존중할 것인가? 나는 그와 함께 안정된 삶을 세울 수 있는가? 올바른 남자는 아무것도 없이 시작할 수도 있습니다.",
      },
    ],
  },
  charter: {
    eyebrow: "이니셔티브 헌장",
    title: "이 헌장에 동의하여 저희와 함께 서약하고 스마트 결혼 이니셔티브에 동참해 주십시오.",
    subtitle: "스마트 결혼 헌장",
    items: [
      "저는 존중과 이해에 기반한 삶을 세우기 위해 노력합니다.",
      "저는 소박한 수단과 현실적인 시작으로 결혼을 받아들입니다.",
      "저는 저의 모든 정보와 진술에서 정직할 것을 다짐합니다.",
      "저는 결혼에서 저의 목표가 미덕과 안정임을 서약합니다.",
      "저는 신앙과 인품이 부와 겉모습보다 더 중요하다고 믿습니다.",
    ],
    photoAlt: "풀이 우거진 습지에서 황금빛 노을 아래 서로를 안고 있는 신랑과 신부, 그녀의 베일이 바람에 나부낀다.",
  },
  companion: {
    eyebrow: "Zefaaf 플랫폼 소개",
    title: "할랄한 결혼으로 가는 길의 동반자",
    description:
      "Zefaaf는 무슬림들에게 가치를 지키고 가족을 굳건히 하는 안전한 환경을 제공하는 신뢰할 수 있는 이슬람 결혼 플랫폼으로, 스마트한 도구와 투명한 경험을 통해 알맞은 인생의 동반자를 찾도록 돕습니다.",
    features: [
      {
        title: "안전하고 샤리아를 준수하는 환경",
        description: "저희는 모든 상호작용에서 이슬람 지침을 준수합니다. 가벼운 만남이나 교제는 없습니다.",
      },
      {
        title: "24시간 연중무휴 지원",
        description: "저희 팀은 언제나 귀하의 질문에 답하고 필요한 안내를 제공할 준비가 되어 있습니다.",
      },
      {
        title: "전문적인 결혼 상담",
        description: "행복하고 오래가는 결혼을 이루기 위한 이슬람 가치에 기반한 실질적인 안내.",
      },
      {
        title: "전 세계 서비스 제공",
        description: "전 세계 모든 국가를 아우르며, 어디에 계시든 인생의 동반자를 찾도록 돕습니다.",
      },
      {
        title: "지금 Zefaaf와 함께 여정을 시작하세요",
        description: "무료로 가입하고 스마트 결혼 이니셔티브에 동참하세요. 가입은 무료이며, 메시지 전송도 언제나 무료입니다.",
      },
    ],
    photoAlts: {
      mosque: "흰색 히잡과 드레스를 입은 신부와 검은색 턱시도를 입은 신랑이 화려하게 장식된 모스크 안에서 함께 두아를 드리고 있다.",
      car: "흰색 드레스와 베일을 착용한 신부가 빈티지 클래식 자동차 옆에서 검은색 턱시도를 입은 신랑을 안고 있다.",
    },
  },
};

const it: SmartMarriageCopy = {
  hero: {
    title: "Iniziativa per il Matrimonio Intelligente",
    description:
      "Il matrimonio nell'islam riguarda la virtù e la serenità, non la stravaganza e le spese. Se aspetti di avere le mani piene prima di costruire una casa, potresti aspettare a lungo.",
    cta: "Inizia il tuo percorso verso il matrimonio",
    photoAlts: {
      cliff: "Una coppia in posa su una scogliera rocciosa che si affaccia su un mare turchese e sulle montagne, l'uomo porta in braccio la donna mentre la sua lunga gonna bianca ondeggia al vento.",
      lake: "Una coppia si guarda faccia a faccia accanto a un lago alpino turchese circondato da pini e montagne.",
      blossom: "Una coppia si abbraccia sotto un ciliegio in fiore rosa in un parco.",
    },
  },
  nav: {
    items: ["Cos'è l'Iniziativa", "Perché il matrimonio intelligente", "Il fondamento islamico dell'Iniziativa per il Matrimonio Intelligente", "Messaggi dell'Iniziativa", "Carta dell'Iniziativa", "Chi è Zefaaf"],
  },
  intro: {
    eyebrow: "Perché scegliere Zefaaf",
    title: "Matrimonio intelligente: una nuova equazione per la vita",
    description:
      "L'Iniziativa per il Matrimonio Intelligente è un invito consapevole della piattaforma Zefaaf a riordinare le priorità. Invece di spendere denaro in sale sontuose, doti eccessive e gioielli stravaganti, investilo nella costruzione di una vera casa e di una vita condivisa colma di amore e misericordia.",
    photoAlt: "Una coppia fotografata di spalle su una spiaggia, l'uomo tiene in mano un bouquet bianco, la donna indossa un abito rosa fluttuante e l'hijab, con un promontorio roccioso avvolto nella nebbia sullo sfondo.",
  },
  why: {
    eyebrow: "Perché il matrimonio intelligente",
    description:
      "Perché la società ha gravato il matrimonio di condizioni che la fede non ha mai imposto, e di aspettative infinite, fino a renderlo un sogno irraggiungibile per milioni di giovani. L'Iniziativa per il Matrimonio Intelligente riporta le vere domande: Perché ci sposiamo? E come dovremmo sposarci?",
    cards: [
      {
        title: "Perché la fede ha stabilito il criterio giusto",
        paragraphs: [
          'Il Profeta ﷺ non disse di guardare alla sua ricchezza, ma disse: "Se viene da voi qualcuno di cui siete soddisfatti della religione e del carattere, fatelo sposare." Questo criterio non è cambiato, e le case costruite su di esso sono le più stabili e durature.',
        ],
      },
      {
        title: "Perché le apparenze non costruiscono una casa",
        paragraphs: [
          "La notte di nozze finisce, ma la vita comincia dopo di essa. Ciò che si spende per location e apparenze in una sola notte potrebbe fondare una vera casa che dura per anni.",
        ],
      },
      {
        title: "Perché l'attesa ha un prezzo",
        paragraphs: [
          'Ogni anno in cui aspetti "il momento giusto" è un anno di vita che passa, di stabilità rimandata e di benedizioni perse. Rendere le cose semplici oggi è meglio di una perfezione che non arriva mai.',
        ],
      },
      {
        title: "Perché Dio ha promesso di aiutare chi cerca la virtù",
        paragraphs: [
          '"Tre persone hanno diritto all\'aiuto di Dio: chi si sposa cercando la castità." Questa promessa divina non richiede un conto in banca — richiede un\'intenzione sincera e un cuore puro.',
        ],
      },
      {
        title: "Perché un inizio umile non è una vergogna",
        paragraphs: [
          "Le case più felici non sono cominciate con la ricchezza materiale, ma con l'onestà.",
          "Le possibilità si sviluppano nel tempo, e il sostentamento si amplia, ma il carattere e l'intenzione sono ciò che rimane costante.",
        ],
      },
    ],
  },
  banner: {
    title: "Matrimonio intelligente",
    description: "Un investimento nel fondamento della vita coniugale, mentre il matrimonio tradizionale è una spesa eccessiva per le apparenze.",
    photoAlt: "Una coppia prega insieme in una moschea illuminata dal sole con un minbar in legno finemente decorato.",
  },
  foundation: {
    eyebrow: "Il fondamento islamico dell'Iniziativa per il Matrimonio Intelligente",
    title: "Il matrimonio intelligente non è un'idea moderna: è ciò che l'islam incoraggia da oltre 1.400 anni.",
    citations: [
      {
        quote: "Fate sposare i celibi e le nubili tra voi, e i vostri servi e serve virtuosi. Se sono poveri, Allah li arricchirà della Sua grazia. Allah è immenso, sapiente.",
        attribution: "Sura An-Nur — Versetto 32",
      },
      {
        quote: "Se viene da voi qualcuno di cui siete soddisfatti della religione e del carattere, fatelo sposare. Se non lo farete, ci sarà discordia sulla terra e grande corruzione.",
        attribution: "Narrato da Al-Tirmidhi",
      },
      {
        quote: "Tre persone hanno diritto all'aiuto di Dio: chi si sposa cercando la castità.",
        attribution: "Narrato da Al-Tirmidhi, autenticato da Al-Albani",
      },
    ],
    reasons: [
      {
        title: "La povertà non impedisce il matrimonio",
        description:
          "Dio non ha richiesto la ricchezza per il matrimonio. Anzi, ha esplicitamente promesso di arricchire chi cerca il matrimonio in nome della virtù. Chi rimanda il matrimonio aspettando la perfezione finanziaria ha rimandato una benedizione che Dio stesso ha garantito.",
      },
      {
        title: "La fede e il carattere sono il fondamento",
        description:
          "La ricchezza va e viene, e lo status sale e scende, ma sono la fede e il carattere a costruire una casa. Chi sceglie un partner solo secondo criteri mondani costruisce sulla sabbia; chi sceglie secondo la fede costruisce sulla roccia.",
      },
      {
        title: "La semplicità è fonte di benedizione",
        description:
          "Più agevoli il cammino verso un matrimonio halal, più porte inaspettate si apriranno davanti a te. Un inizio umile non è una mancanza — è terreno fertile in cui crescono amore e misericordia.",
      },
      {
        title: "Il matrimonio non è un progetto finanziario",
        description:
          "Abbiamo trasformato il matrimonio da una tradizione semplice in un progetto che sfinisce le persone ancor prima di iniziare. L'Iniziativa per il Matrimonio Intelligente riporta il matrimonio alla sua essenza: un legame tra due persone che cercano virtù e stabilità, non una festa per misurare lo status sociale.",
      },
      {
        title: "Comincia con ciò che puoi, e Dio completerà il resto",
        description:
          "Non aspettare di avere tutto prima di iniziare la tua vita. Molte delle case più felici sono cominciate con i mezzi più semplici, e molte delle case più sfarzose sono crollate dall'interno. La differenza sta nell'intenzione e nel carattere.",
      },
    ],
  },
  messages: {
    eyebrow: "Messaggi dell'Iniziativa",
    title: "Una parola per ciascuno di voi",
    description: "Un messaggio semplice per chiunque cerchi un nuovo inizio nella vita e stabilità.",
    cards: [
      {
        title: "Un messaggio ai giovani uomini",
        description:
          "Non rimandare il matrimonio perché non sei economicamente a posto. Comincia con ciò che hai, sii onesto, sforzati di migliorare la tua situazione, e scoprirai che si apriranno porte di bene — perché il matrimonio è l'inizio della stabilità e della benedizione.",
      },
      {
        title: "Un messaggio ai padri",
        description:
          "Tua figlia ha bisogno di un uomo che tema Dio nel modo in cui la tratta, che ne preservi la dignità e ne custodisca il cuore. Il denaro va e viene, ma il carattere e la fede costruiscono una casa stabile. Scegli per lei qualcuno che la tratterà con gentilezza — questa è la vera garanzia della sua felicità.",
      },
      {
        title: "Un messaggio alle giovani donne",
        description:
          "Non trasformare il matrimonio in un lungo elenco di condizioni materiali. Chiediti: È onesto? Mi rispetterà? Posso costruire con lui una vita stabile? Un uomo retto può cominciare dal nulla.",
      },
    ],
  },
  charter: {
    eyebrow: "Carta dell'Iniziativa",
    title: "Impegnati con noi e unisciti all'Iniziativa per il Matrimonio Intelligente accettando questa carta.",
    subtitle: "Carta del Matrimonio Intelligente",
    items: [
      "Mi impegno a costruire una vita fondata sul rispetto e sulla comprensione.",
      "Accetto il matrimonio con mezzi semplici e un inizio realistico.",
      "Mi impegno all'onestà in tutte le mie informazioni e dichiarazioni.",
      "Mi impegno affinché il mio obiettivo nel matrimonio sia la virtù e la stabilità.",
      "Credo che la fede e il carattere contino più della ricchezza e delle apparenze.",
    ],
    photoAlt: "Una sposa e uno sposo si abbracciano nell'ora dorata in una zona umida erbosa, il suo velo che ondeggia al vento.",
  },
  companion: {
    eyebrow: "Chi è la piattaforma Zefaaf",
    title: "Il tuo compagno nel cammino verso un matrimonio halal",
    description:
      "Zefaaf è una piattaforma islamica di matrimonio affidabile che offre ai musulmani un ambiente sicuro che preserva i valori e rafforza le famiglie, aiutandoti a trovare il compagno di vita giusto attraverso strumenti intelligenti e un'esperienza trasparente.",
    features: [
      {
        title: "Ambiente sicuro e conforme alla sharia",
        description: "Siamo impegnati a rispettare le linee guida islamiche in ogni interazione — nessuna conoscenza o amicizia casuale.",
      },
      {
        title: "Assistenza continua 24 ore su 24",
        description: "Il nostro team è sempre disponibile per rispondere alle tue domande e offrirti l'orientamento di cui hai bisogno.",
      },
      {
        title: "Consulenza matrimoniale specializzata",
        description: "Indicazioni pratiche basate sui valori islamici per costruire un matrimonio felice e duraturo.",
      },
      {
        title: "Copertura globale",
        description: "Copriamo tutti i paesi del mondo per aiutarti a trovare un compagno di vita ovunque tu sia.",
      },
      {
        title: "Inizia ora il tuo percorso con Zefaaf",
        description: "Iscriviti gratuitamente e unisciti all'Iniziativa per il Matrimonio Intelligente. L'iscrizione è gratuita, e i messaggi sono sempre gratuiti.",
      },
    ],
    photoAlts: {
      mosque: "Una sposa con hijab e abito bianchi e uno sposo in smoking nero fanno insieme la dua all'interno di una moschea riccamente decorata.",
      car: "Una sposa in abito bianco e velo abbraccia uno sposo in smoking nero accanto a un'auto d'epoca classica.",
    },
  },
};

const ur: SmartMarriageCopy = {
  hero: {
    title: "ہوشمند نکاح مہم",
    description:
      "اسلام میں نکاح پاکدامنی اور سکونِ قلب کا نام ہے، نہ کہ فضول خرچی اور نمود و نمائش کا۔ اگر آپ گھر بسانے کے لیے اپنے ہاتھ بھر جانے کا انتظار کریں گے تو شاید آپ کو بہت طویل انتظار کرنا پڑے۔",
    cta: "اپنے نکاح کے سفر کا آغاز کریں",
    photoAlts: {
      cliff: "ایک جوڑا فیروزی سمندر اور پہاڑوں کے سامنے ایک پتھریلی چٹان پر پوز دے رہا ہے، مرد عورت کو اٹھائے ہوئے ہے جبکہ اس کا لمبا سفید دامن ہوا میں لہرا رہا ہے۔",
      lake: "ایک جوڑا صنوبر کے درختوں اور پہاڑوں سے گھری فیروزی رنگ کی پہاڑی جھیل کے کنارے آمنے سامنے کھڑا ہے۔",
      blossom: "ایک جوڑا پارک میں گلابی رنگ کے کھلے ہوئے چیری بلاسم کے درخت کے نیچے ایک دوسرے کو گلے لگائے ہوئے ہے۔",
    },
  },
  nav: {
    items: ["مہم کیا ہے", "ہوشمند نکاح کیوں", "ہوشمند نکاح مہم کی اسلامی بنیاد", "مہم کے پیغامات", "مہم کا منشور", "زفاف کے بارے میں"],
  },
  intro: {
    eyebrow: "آپ زفاف کو کیوں منتخب کریں",
    title: "ہوشمند نکاح: زندگی کے لیے ایک نیا معادلہ",
    description:
      "ہوشمند نکاح مہم زفاف پلیٹ فارم کی جانب سے ترجیحات کو نئے سرے سے ترتیب دینے کی ایک باشعور دعوت ہے۔ عالی شان شادی ہالز، بھاری مہر اور شاہ خرچ زیورات پر رقم خرچ کرنے کے بجائے، اسے ایک حقیقی گھر اور محبت و رحمت سے بھرپور مشترکہ زندگی بنانے میں لگائیں۔",
    photoAlt: "ساحلِ سمندر پر پیچھے سے تصویر کھنچوایا گیا ایک جوڑا، مرد کے ہاتھ میں سفید پھولوں کا گلدستہ ہے، عورت نے ہلکے گلابی رنگ کا لہراتا لباس اور حجاب پہنا ہے، پس منظر میں دھند میں ڈوبا ہوا پتھریلا ساحلی کنارہ نظر آتا ہے۔",
  },
  why: {
    eyebrow: "ہوشمند نکاح کیوں",
    description:
      "کیونکہ معاشرے نے نکاح پر ایسی شرطیں اور لامتناہی توقعات لاد دی ہیں جو دین نے کبھی عائد نہیں کیں، یہاں تک کہ یہ لاکھوں نوجوانوں کے لیے ایک ناقابلِ حصول خواب بن گیا۔ ہوشمند نکاح مہم اصل سوالات کو واپس لے آتی ہے: ہم نکاح کیوں کرتے ہیں؟ اور ہمیں نکاح کیسے کرنا چاہیے؟",
    cards: [
      {
        title: "کیونکہ دین نے درست معیار مقرر کیا",
        paragraphs: [
          'نبی کریم ﷺ نے یہ نہیں فرمایا کہ اس کی دولت دیکھو، بلکہ فرمایا: "اگر تمہارے پاس ایسا شخص آئے جس کے دین اور اخلاق کو تم پسند کرتے ہو تو اس کا نکاح کر دو۔" یہ معیار کبھی نہیں بدلا، اور اسی پر قائم گھر سب سے زیادہ مستحکم اور دیرپا ہوتے ہیں۔',
        ],
      },
      {
        title: "کیونکہ ظاہری نمود و نمائش سے گھر نہیں بستا",
        paragraphs: [
          "شادی کی رات ختم ہو جاتی ہے، مگر زندگی اس کے بعد شروع ہوتی ہے۔ جو رقم ایک ہی رات میں ہال اور نمود و نمائش پر خرچ ہو جاتی ہے، اسی سے ایک حقیقی گھر بسایا جا سکتا ہے جو برسوں قائم رہے۔",
        ],
      },
      {
        title: "کیونکہ انتظار کی بھی ایک قیمت ہے",
        paragraphs: [
          '"صحیح وقت" کا انتظار کرتے ہوئے گزرنے والا ہر سال زندگی کا ایک گزرتا ہوا سال ہے، ملتوی ہوتا استحکام ہے اور ہاتھ سے نکلتی ہوئی برکت ہے۔ آج آسانی پیدا کرنا اُس کمال سے بہتر ہے جو کبھی نہیں آتا۔',
        ],
      },
      {
        title: "کیونکہ اللہ نے پاکدامنی چاہنے والوں کی مدد کا وعدہ فرمایا ہے",
        paragraphs: [
          '"تین آدمی ایسے ہیں جن کی مدد اللہ پر حق ہے: وہ شخص جو پاکدامنی کی نیت سے نکاح کرے۔" یہ الٰہی وعدہ بینک بیلنس کا تقاضا نہیں کرتا — یہ صرف خالص نیت اور پاکیزہ دل کا تقاضا کرتا ہے۔',
        ],
      },
      {
        title: "کیونکہ سادہ آغاز کوئی شرم کی بات نہیں",
        paragraphs: [
          "سب سے خوشحال گھروں کا آغاز مادی دولت سے نہیں بلکہ سچائی سے ہوا۔",
          "قابلیتیں وقت کے ساتھ نکھرتی ہیں اور رزق میں وسعت آتی ہے، مگر جو چیز ہمیشہ برقرار رہتی ہے وہ کردار اور نیت ہے۔",
        ],
      },
    ],
  },
  banner: {
    title: "ہوشمند نکاح",
    description: "ازدواجی زندگی کی بنیاد میں سرمایہ کاری، جبکہ روایتی شادی محض نمود و نمائش پر فضول خرچی ہے۔",
    photoAlt: "ایک جوڑا دھوپ سے جگمگاتی مسجد میں نقش و نگار والے لکڑی کے منبر کے پاس مل کر نماز ادا کر رہا ہے۔",
  },
  foundation: {
    eyebrow: "ہوشمند نکاح مہم کی اسلامی بنیاد",
    title: "ہوشمند نکاح کوئی جدید تصور نہیں — یہ وہ چیز ہے جس کی تلقین اسلام 1400 برس سے زیادہ عرصے سے کرتا آیا ہے۔",
    citations: [
      {
        quote:
          "اور اپنے میں سے بے نکاح لوگوں کا، اور اپنے نیک بخت غلاموں اور لونڈیوں کا نکاح کر دیا کرو۔ اگر وہ مفلس ہوں تو اللہ اپنے فضل سے انہیں غنی کر دے گا، اور اللہ بڑی وسعت والا، سب کچھ جاننے والا ہے۔",
        attribution: "سورۃ النور — آیت 32",
      },
      {
        quote: "اگر تمہارے پاس ایسا شخص آئے جس کے دین اور اخلاق کو تم پسند کرتے ہو تو اس کا نکاح کر دو، ورنہ زمین میں فتنہ اور بڑا فساد برپا ہو جائے گا۔",
        attribution: "روایت ترمذی",
      },
      {
        quote: "تین آدمی ایسے ہیں جن کی مدد اللہ پر حق ہے: وہ شخص جو پاکدامنی کی نیت سے نکاح کرے۔",
        attribution: "روایت ترمذی، البانی کی تصحیح کے ساتھ",
      },
    ],
    reasons: [
      {
        title: "غربت نکاح میں رکاوٹ نہیں",
        description:
          "اللہ نے نکاح کے لیے دولت کو شرط نہیں ٹھہرایا، بلکہ صراحتاً وعدہ فرمایا کہ جو پاکدامنی چاہتے ہوئے نکاح کرے گا اسے غنی کر دے گا۔ جو شخص مالی کمال کا انتظار کرتے ہوئے نکاح کو ملتوی کرتا ہے، وہ دراصل اس برکت کو ملتوی کر رہا ہے جس کی ضمانت خود اللہ نے دی ہے۔",
      },
      {
        title: "دین اور کردار ہی بنیاد ہیں",
        description:
          "دولت آتی اور جاتی رہتی ہے، اور مرتبہ بلند و پست ہوتا رہتا ہے، مگر گھر دین اور کردار ہی سے بستا ہے۔ جو محض دنیاوی معیار پر ساتھی چنتا ہے وہ ریت پر تعمیر کرتا ہے؛ جو دین کی بنیاد پر چنتا ہے وہ چٹان پر تعمیر کرتا ہے۔",
      },
      {
        title: "سادگی ہی برکت کا سرچشمہ ہے",
        description:
          "آپ حلال نکاح کی راہ جتنی آسان بنائیں گے، اتنے ہی وہ دروازے کھلیں گے جن کی آپ کو توقع بھی نہ تھی۔ سادہ آغاز کوئی کمی نہیں — یہ وہ زرخیز زمین ہے جس میں محبت اور رحمت پروان چڑھتی ہے۔",
      },
      {
        title: "نکاح کوئی مالی منصوبہ نہیں",
        description:
          "ہم نے نکاح کو ایک آسان روایت سے ایسا منصوبہ بنا دیا ہے جو شروع ہونے سے پہلے ہی لوگوں کو تھکا دیتا ہے۔ ہوشمند نکاح مہم نکاح کو اس کی اصل روح کی طرف واپس لے آتی ہے: پاکدامنی اور استحکام کے متلاشی دو افراد کا رشتہ، نہ کہ سماجی مرتبے کو جانچنے کی ایک تقریب۔",
      },
      {
        title: "جو کچھ آپ کے پاس ہے اس سے آغاز کریں، باقی اللہ پورا کر دے گا",
        description:
          "زندگی شروع کرنے سے پہلے سب کچھ مکمل ہونے کا انتظار نہ کریں۔ سب سے خوشحال گھروں میں سے کئی نے انتہائی سادہ ذرائع سے آغاز کیا، اور سب سے شاندار گھروں میں سے کئی اندر ہی اندر سے بکھر گئے۔ فرق نیت اور کردار میں ہے۔",
      },
    ],
  },
  messages: {
    eyebrow: "مہم کے پیغامات",
    title: "آپ میں سے ہر ایک کے لیے ایک بات",
    description: "زندگی میں نئے آغاز اور استحکام کے متلاشی ہر شخص کے لیے ایک سادہ سا پیغام۔",
    cards: [
      {
        title: "نوجوانوں کے نام پیغام",
        description:
          "مالی طور پر مکمل نہ ہونے کی وجہ سے نکاح کو ملتوی نہ کریں۔ جو کچھ آپ کے پاس ہے اس سے آغاز کریں، سچے رہیں، اپنے حالات بہتر بنانے کی کوشش کریں، تو آپ دیکھیں گے کہ بھلائی کے دروازے آپ کے لیے کھلتے چلے جاتے ہیں — کیونکہ نکاح استحکام اور برکت کی ابتدا ہے۔",
      },
      {
        title: "والدین کے نام پیغام",
        description:
          "آپ کی بیٹی کو ایسے شخص کی ضرورت ہے جو اس کے ساتھ برتاؤ میں اللہ سے ڈرے، جو اس کی عزتِ نفس کی حفاظت کرے اور اس کے دل کا خیال رکھے۔ پیسہ آتا جاتا رہتا ہے، مگر کردار اور دین داری ہی مستحکم گھر بساتے ہیں۔ اس کے لیے ایسے شخص کا انتخاب کریں جو اس کے ساتھ نرمی سے پیش آئے — یہی اس کی خوشی کی اصل ضمانت ہے۔",
      },
      {
        title: "نوجوان لڑکیوں کے نام پیغام",
        description:
          "نکاح کو مادی شرائط کی ایک لمبی فہرست نہ بنائیں۔ اپنے آپ سے پوچھیں: کیا وہ سچا ہے؟ کیا وہ میری عزت کرے گا؟ کیا میں اس کے ساتھ مستحکم زندگی بسا سکتی ہوں؟ نیک شخص کبھی کبھی کچھ نہ ہونے سے بھی آغاز کر سکتا ہے۔",
      },
    ],
  },
  charter: {
    eyebrow: "مہم کا منشور",
    title: "اس منشور کو قبول کر کے ہمارے ساتھ عہد کریں اور ہوشمند نکاح مہم میں شامل ہوں۔",
    subtitle: "ہوشمند نکاح کا منشور",
    items: [
      "میں احترام اور باہمی افہام و تفہیم پر مبنی زندگی بنانے کی کوشش کروں گا/گی۔",
      "میں سادہ ذرائع اور حقیقت پسندانہ آغاز کے ساتھ نکاح قبول کرتا/کرتی ہوں۔",
      "میں اپنی تمام معلومات اور بیانات میں سچائی کا عہد کرتا/کرتی ہوں۔",
      "میں عہد کرتا/کرتی ہوں کہ نکاح میں میرا مقصد پاکدامنی اور استحکام ہے۔",
      "میں یقین رکھتا/رکھتی ہوں کہ دین اور کردار دولت اور ظاہری نمود و نمائش سے کہیں زیادہ اہم ہیں۔",
    ],
    photoAlt: "دلہا دلہن ایک سرسبز گیلی زمین میں سنہری وقتِ غروب میں ایک دوسرے کو گلے لگائے ہوئے ہیں، اس کا نقاب ہوا میں لہرا رہا ہے۔",
  },
  companion: {
    eyebrow: "زفاف پلیٹ فارم کے بارے میں",
    title: "حلال نکاح کی راہ میں آپ کا ہمسفر",
    description:
      "زفاف ایک قابلِ اعتماد اسلامی نکاح پلیٹ فارم ہے جو مسلمانوں کو ایک محفوظ ماحول فراہم کرتا ہے جو اقدار کی حفاظت اور خاندانوں کو مضبوط کرتا ہے، اور ہوشمند ذرائع اور شفاف تجربے کے ذریعے آپ کو صحیح زندگی ساتھی تلاش کرنے میں مدد دیتا ہے۔",
    features: [
      {
        title: "محفوظ اور شریعت کے مطابق ماحول",
        description: "ہم تمام تعاملات میں اسلامی اصولوں کے پابند ہیں — کوئی سرسری جان پہچان یا دوستی نہیں۔",
      },
      {
        title: "چوبیس گھنٹے مسلسل معاونت",
        description: "ہماری ٹیم ہمیشہ آپ کے سوالات کا جواب دینے اور درکار رہنمائی فراہم کرنے کے لیے موجود ہے۔",
      },
      {
        title: "خصوصی نکاح مشاورت",
        description: "خوشحال اور دیرپا نکاح قائم کرنے کے لیے اسلامی اقدار پر مبنی عملی رہنمائی۔",
      },
      {
        title: "عالمی رسائی",
        description: "دنیا بھر کے تمام ممالک کا احاطہ، تاکہ آپ جہاں بھی ہوں، زندگی ساتھی تلاش کرنے میں آپ کی مدد کی جا سکے۔",
      },
      {
        title: "ابھی زفاف کے ساتھ اپنا سفر شروع کریں",
        description: "مفت رجسٹریشن کروائیں اور ہوشمند نکاح مہم میں شامل ہوں۔ رجسٹریشن مفت ہے، اور پیغام رسانی ہمیشہ مفت رہتی ہے۔",
      },
    ],
    photoAlts: {
      mosque: "سفید حجاب اور لباس میں ملبوس دلہن اور سیاہ ٹکسیڈو میں دلہا ایک آراستہ مسجد کے اندر مل کر دعا کر رہے ہیں۔",
      car: "سفید لباس اور نقاب میں دلہن ایک قدیم کلاسک گاڑی کے پاس سیاہ ٹکسیڈو میں ملبوس دلہا کو گلے لگا رہی ہے۔",
    },
  },
};

// A full `Record<Locale, ...>` (not `Partial`) so a locale missing its
// translation is a compile error, not a silent English fallback.
const copyByLocale: Record<Locale, SmartMarriageCopy> = {
  en,
  ar,
  nl,
  fr,
  de,
  tr,
  ru,
  id,
  zh,
  bn,
  ta,
  am,
  sv,
  da,
  sq,
  uz,
  az,
  fil,
  hi,
  kk,
  ms,
  pa,
  ps,
  sw,
  th,
  bs,
  es,
  fa,
  pt,
  ja,
  ko,
  it,
  ur,
};

export function getSmartMarriageCopy(locale: string): SmartMarriageCopy {
  return copyByLocale[locale as Locale] ?? en;
}
