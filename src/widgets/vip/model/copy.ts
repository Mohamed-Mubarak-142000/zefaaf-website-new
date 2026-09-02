// The VIP page copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical — adding a `vip` namespace to
// only some of them would make next-intl throw MISSING_MESSAGE for the rest.
// Same approach as the About, Events, and Influential Figures widgets.
// All 33 locales are translated directly in this file below.

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

const nl: VipCopy = {
  hero: {
    badge: "Met VIP via WhatsApp bespaar je moeite en tijd",
    titleBefore: "Persoonlijke Zoekservice",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " via WhatsApp",
    description:
      "Ben je op zoek naar de juiste levenspartner, maar heb je behoefte aan echte persoonlijke hulp in plaats van alleen te zoeken? De Persoonlijke Zoekservice via WhatsApp van Zefaaf is ontworpen voor wie een comfortabelere en meer privé ervaring wil — ons gespecialiseerde team voert de zoektocht voor je uit en communiceert rechtstreeks met je via WhatsApp bij elke stap van de reis.",
    feeLabel: "Servicekosten",
    price: "99 EUR",
    cta: "Start nu via WhatsApp",
    imageAlt: "Een stel dat door een rustige Europese straat loopt",
  },
  intro: {
    title: "Waarom kiezen voor de Persoonlijke Zoekservice via WhatsApp?",
    description:
      "Sommige mensen zijn serieus over trouwen, maar hebben niet genoeg tijd, voelen zich niet op hun gemak bij het zelf doorbladeren van profielen, of hebben simpelweg een betrouwbare gids nodig aan hun zijde tijdens deze belangrijke reis.",
  },
  details: [
    {
      title: "Jouw Zoektocht naar een Match",
      bullets: [
        "Directe, onmiddellijke communicatie die je tijd en moeite bespaart.",
        "Echte, zorgvuldig overwogen aanbevelingen die op jou zijn afgestemd.",
      ],
      paragraphs: [
        "Elke stap verloopt naadloos via WhatsApp, zonder ingewikkelde apps of onnodige stappen. Ons team voert de volledige zoektocht voor je uit, zodat je niet duizenden profielen hoeft door te bladeren of eindeloos hoeft te wachten. Het is geen automatische matching — ons gespecialiseerde team beoordeelt je profiel zorgvuldig en presenteert de beste opties die echt bij je passen.",
      ],
      imageAlt: "Een pas getrouwd stel dat samen buiten een moskee staat",
    },
    {
      title: "Jouw Zoektocht naar een Match",
      bullets: [
        "Volledige Privacy & Beter Wederzijds Begrip",
        "Vul je Profiel Aan & Begin je Zoektocht",
      ],
      paragraphs: [
        "Je gegevens en profiel worden met volledige vertrouwelijkheid behandeld. We doen meer dan alleen kennismaking — we begeleiden je gedurende het hele proces en helpen beide partijen om oprecht begrip en compatibiliteit op te bouwen, insjaAllah.",
        "Voeg eenvoudig je gegevens en voorkeuren toe, upload veilig je identiteitsbewijs en foto's, en zodra je profiel is beoordeeld en geactiveerd, begin je jouw reis via je persoonlijke dashboard.",
      ],
      imageAlt: "Een bruid en bruidegom op hun trouwdag",
    },
  ],
  advantages: {
    title: "Wat de Persoonlijke Zoekservice via WhatsApp onderscheidt",
    items: [
      {
        title: "Persoonlijke zoektocht namens jou",
        description:
          "Verspil geen tijd met het doorbladeren van duizenden profielen — ons team voert het volledige zoekproces voor je uit met de hoogste mate van zorg en precisie.",
      },
      {
        title: "Exclusieve, ongepubliceerde aanbevelingen",
        description:
          "We bereiken privéprofielen die niet zichtbaar zijn voor het publiek op het platform, wat je bredere en meer compatibele opties geeft.",
      },
      {
        title: "Continue opvolging tot je een match vindt",
        description:
          "Onze rol eindigt niet bij de aanbeveling — we blijven bij je en volgen elke stap op totdat je de juiste beslissing neemt, insjaAllah.",
      },
      {
        title: "Volledige privacy en vertrouwelijkheid",
        description:
          "Al je gegevens en profieldetails worden gedurende de hele service met absolute vertrouwelijkheid behandeld, zonder compromissen.",
      },
    ],
    note: {
      title: "Persoonlijke Matching & Ondersteuning",
      description:
        "Onze adviseurs communiceren zorgvuldig met je via WhatsApp, bestuderen je profiel grondig en zoeken vervolgens naar de beste matches uit een uitgebreide database en exclusieve profielen. Het team verzorgt ook de communicatie met de andere partij en overbrugt perspectieven om tot de best mogelijke match te komen, insjaAllah.",
    },
    advisorAlt: "Een Zefaaf-adviseur die samen met een lid bidt",
    coupleAlt: "Een stel dat voor een moskee staat",
  },
  europe: {
    title: "Een bijzonder voordeel voor inwoners van Europa",
    description:
      "De VIP-service omvat ook de mogelijkheid van directe, sharia-conforme ontmoetingen op het Zefaaf-kantoor in Amsterdam, in een veilige en respectvolle omgeving die de serieusheid versterkt en de kans op een oprechte match vergroot.",
    cta: "Boek de VIP-service via WhatsApp",
    galleryLabel: "Zefaaf-leden in heel Europa",
    memberAlt: "Zefaaf-leden in Europa",
  },
};

const fr: VipCopy = {
  hero: {
    badge: "Avec le VIP via WhatsApp, économisez temps et effort",
    titleBefore: "Service de Recherche Personnelle",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " via WhatsApp",
    description:
      "Vous cherchez le bon partenaire de vie mais avez besoin d'une aide personnelle réelle plutôt que de chercher seul(e) ? Le Service de Recherche Personnelle via WhatsApp de Zefaaf est conçu pour ceux qui souhaitent une expérience plus confortable et privée — notre équipe spécialisée se charge de la recherche pour vous et communique directement avec vous sur WhatsApp à chaque étape du parcours.",
    feeLabel: "Frais de Service",
    price: "99 EUR",
    cta: "Commencer Maintenant via WhatsApp",
    imageAlt: "Un couple marchant dans une rue européenne paisible",
  },
  intro: {
    title: "Pourquoi choisir le Service de Recherche Personnelle via WhatsApp ?",
    description:
      "Certaines personnes sont sérieuses concernant le mariage mais manquent de temps, ne se sentent pas à l'aise pour parcourir elles-mêmes les profils, ou ont simplement besoin d'un guide de confiance à leurs côtés dans ce parcours important.",
  },
  details: [
    {
      title: "Votre Recherche de Partenaire",
      bullets: [
        "Une communication directe et instantanée qui vous fait gagner du temps et des efforts.",
        "Des recommandations réelles et mûrement réfléchies, adaptées à vous.",
      ],
      paragraphs: [
        "Chaque étape se déroule en toute fluidité via WhatsApp, sans applications compliquées ni étapes superflues. Notre équipe se charge de l'intégralité de la recherche pour vous, afin que vous n'ayez pas à parcourir des milliers de profils ni à attendre indéfiniment. Il ne s'agit pas d'une simple correspondance automatisée — notre équipe spécialisée examine attentivement votre profil et vous présente les meilleures options réellement adaptées à vous.",
      ],
      imageAlt: "Un couple récemment marié se tenant ensemble devant une mosquée",
    },
    {
      title: "Votre Recherche de Partenaire",
      bullets: [
        "Confidentialité Totale & Une Meilleure Compréhension Entre les Deux Parties",
        "Complétez Votre Profil & Commencez Votre Recherche",
      ],
      paragraphs: [
        "Vos données et votre profil sont traités en toute confidentialité. Nous allons au-delà des simples présentations en vous accompagnant tout au long du processus et en aidant les deux parties à bâtir une compréhension et une compatibilité sincères, si Dieu le veut.",
        "Il vous suffit d'ajouter vos informations et préférences, de télécharger en toute sécurité votre pièce d'identité et vos photos, puis, une fois votre profil examiné et activé, de commencer votre parcours depuis votre tableau de bord personnel.",
      ],
      imageAlt: "Une mariée et un marié le jour de leur mariage",
    },
  ],
  advantages: {
    title: "Ce qui distingue le Service de Recherche Personnelle via WhatsApp",
    items: [
      {
        title: "Une recherche personnelle en votre nom",
        description:
          "Ne perdez pas votre temps à parcourir des milliers de profils — notre équipe prend en charge l'intégralité du processus de recherche pour vous avec le plus haut niveau de soin et de précision.",
      },
      {
        title: "Des recommandations exclusives et non publiées",
        description:
          "Nous accédons à des profils privés qui ne sont pas visibles publiquement sur la plateforme, vous offrant des options plus larges et plus compatibles.",
      },
      {
        title: "Un suivi continu jusqu'à ce que vous trouviez votre match",
        description:
          "Notre rôle ne s'arrête pas à la recommandation — nous restons à vos côtés et assurons un suivi à chaque étape jusqu'à ce que vous preniez la bonne décision, si Dieu le veut.",
      },
      {
        title: "Confidentialité et discrétion totales",
        description:
          "Toutes vos données et les détails de votre profil sont traités en toute confidentialité absolue tout au long du service, sans aucun compromis.",
      },
    ],
    note: {
      title: "Mise en Relation & Accompagnement Personnalisés",
      description:
        "Nos conseillers communiquent avec vous avec attention via WhatsApp, étudient votre profil de près, puis recherchent les meilleures correspondances dans une vaste base de données ainsi que des profils exclusifs. L'équipe se charge également de la communication avec l'autre partie et rapproche les points de vue pour parvenir à la meilleure correspondance possible, si Dieu le veut.",
    },
    advisorAlt: "Un conseiller Zefaaf priant aux côtés d'un membre",
    coupleAlt: "Un couple se tenant devant une mosquée",
  },
  europe: {
    title: "Un avantage spécial pour les résidents d'Europe",
    description:
      "Le service VIP inclut également la possibilité de rencontres directes conformes à la charia au bureau de Zefaaf à Amsterdam, dans un environnement sûr et respectueux qui renforce le sérieux et augmente les chances d'une correspondance authentique.",
    cta: "Réservez le service VIP via WhatsApp",
    galleryLabel: "Membres de Zefaaf à travers l'Europe",
    memberAlt: "Membres de Zefaaf en Europe",
  },
};

const de: VipCopy = {
  hero: {
    badge: "Mit VIP über WhatsApp sparen Sie Aufwand und Zeit",
    titleBefore: "Persönlicher Suchservice",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " über WhatsApp",
    description:
      "Suchen Sie den richtigen Lebenspartner, benötigen aber echte persönliche Unterstützung, anstatt allein zu suchen? Der Persönliche Suchservice über WhatsApp von Zefaaf ist für alle gedacht, die eine angenehmere und diskretere Erfahrung wünschen — unser spezialisiertes Team übernimmt die Suche für Sie und kommuniziert bei jedem Schritt der Reise direkt mit Ihnen über WhatsApp.",
    feeLabel: "Servicegebühr",
    price: "99 EUR",
    cta: "Jetzt über WhatsApp starten",
    imageAlt: "Ein Paar, das eine ruhige europäische Straße entlanggeht",
  },
  intro: {
    title: "Warum den Persönlichen Suchservice über WhatsApp wählen?",
    description:
      "Manche Menschen meinen es ernst mit der Heirat, haben aber nicht genug Zeit, fühlen sich unwohl dabei, Profile selbst zu durchsuchen, oder brauchen einfach einen vertrauenswürdigen Begleiter an ihrer Seite auf diesem wichtigen Weg.",
  },
  details: [
    {
      title: "Ihre Partnersuche",
      bullets: [
        "Direkte, sofortige Kommunikation, die Ihnen Zeit und Mühe spart.",
        "Echte, sorgfältig durchdachte Empfehlungen, die auf Sie zugeschnitten sind.",
      ],
      paragraphs: [
        "Jeder Schritt läuft nahtlos über WhatsApp ab, ohne komplizierte Apps oder unnötige Schritte. Unser Team übernimmt die gesamte Suche für Sie, sodass Sie nicht Tausende Profile durchsuchen oder endlos warten müssen. Es handelt sich nicht um automatisiertes Matching — unser spezialisiertes Team prüft Ihr Profil sorgfältig und stellt Ihnen die besten, wirklich zu Ihnen passenden Optionen vor.",
      ],
      imageAlt: "Ein frisch verheiratetes Paar, das zusammen vor einer Moschee steht",
    },
    {
      title: "Ihre Partnersuche",
      bullets: [
        "Vollständige Privatsphäre & Ein Besseres Verständnis Zwischen Beiden Seiten",
        "Vervollständigen Sie Ihr Profil & Beginnen Sie Ihre Suche",
      ],
      paragraphs: [
        "Ihre Daten und Ihr Profil werden mit vollständiger Vertraulichkeit behandelt. Wir gehen über bloße Vorstellungen hinaus, indem wir Sie während des gesamten Prozesses begleiten und beiden Seiten helfen, echtes Verständnis und Kompatibilität aufzubauen, so Gott will.",
        "Fügen Sie einfach Ihre Angaben und Präferenzen hinzu, laden Sie sicher Ihren Ausweis und Ihre Fotos hoch, und sobald Ihr Profil geprüft und aktiviert wurde, beginnen Sie Ihre Reise über Ihr persönliches Dashboard.",
      ],
      imageAlt: "Eine Braut und ein Bräutigam an ihrem Hochzeitstag",
    },
  ],
  advantages: {
    title: "Was den Persönlichen Suchservice über WhatsApp auszeichnet",
    items: [
      {
        title: "Persönliche Suche in Ihrem Namen",
        description:
          "Verschwenden Sie keine Zeit mit dem Durchsuchen Tausender Profile — unser Team übernimmt den gesamten Suchprozess für Sie mit höchster Sorgfalt und Präzision.",
      },
      {
        title: "Exklusive, unveröffentlichte Empfehlungen",
        description:
          "Wir erreichen private Profile, die für die Öffentlichkeit auf der Plattform nicht sichtbar sind, und bieten Ihnen dadurch breitere und passendere Optionen.",
      },
      {
        title: "Kontinuierliche Betreuung, bis Sie eine Übereinstimmung finden",
        description:
          "Unsere Rolle endet nicht mit der Empfehlung — wir bleiben bei Ihnen und begleiten jeden Schritt, bis Sie die richtige Entscheidung treffen, so Gott will.",
      },
      {
        title: "Vollständige Privatsphäre und Vertraulichkeit",
        description:
          "Alle Ihre Daten und Profildetails werden während des gesamten Service mit absoluter Vertraulichkeit behandelt, ohne Kompromisse.",
      },
    ],
    note: {
      title: "Persönliches Matching & Betreuung",
      description:
        "Unsere Berater kommunizieren sorgfältig mit Ihnen über WhatsApp, prüfen Ihr Profil genau und suchen dann aus einer umfangreichen Datenbank sowie exklusiven Profilen nach den besten Übereinstimmungen. Das Team übernimmt zudem die Kommunikation mit der anderen Seite und vermittelt zwischen den Perspektiven, um die bestmögliche Übereinstimmung zu erzielen, so Gott will.",
    },
    advisorAlt: "Ein Zefaaf-Berater betet zusammen mit einem Mitglied",
    coupleAlt: "Ein Paar steht vor einer Moschee",
  },
  europe: {
    title: "Ein besonderer Vorteil für Einwohner Europas",
    description:
      "Der VIP-Service umfasst auch die Möglichkeit direkter, scharia-konformer Treffen im Zefaaf-Büro in Amsterdam, in einer sicheren und respektvollen Umgebung, die die Ernsthaftigkeit stärkt und die Chancen auf eine echte Übereinstimmung erhöht.",
    cta: "Buchen Sie den VIP-Service über WhatsApp",
    galleryLabel: "Zefaaf-Mitglieder in ganz Europa",
    memberAlt: "Zefaaf-Mitglieder in Europa",
  },
};

const tr: VipCopy = {
  hero: {
    badge: "VIP ile WhatsApp üzerinden çaba ve zamandan tasarruf edin",
    titleBefore: "Kişisel Arama Hizmeti",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " WhatsApp Üzerinden",
    description:
      "Doğru hayat arkadaşını arıyorsunuz ama tek başınıza aramak yerine gerçek, kişisel bir yardıma mı ihtiyacınız var? Zefaaf'ın WhatsApp Üzerinden Kişisel Arama Hizmeti, daha rahat ve daha özel bir deneyim isteyenler için tasarlanmıştır — uzman ekibimiz sizin adınıza aramayı üstlenir ve yolculuğun her adımında sizinle doğrudan WhatsApp üzerinden iletişim kurar.",
    feeLabel: "Hizmet Ücreti",
    price: "99 EUR",
    cta: "WhatsApp Üzerinden Şimdi Başla",
    imageAlt: "Sakin bir Avrupa sokağında yürüyen bir çift",
  },
  intro: {
    title: "Neden WhatsApp Üzerinden Kişisel Arama Hizmetini Seçmelisiniz?",
    description:
      "Bazı insanlar evlilik konusunda ciddidir ama yeterli zamanları yoktur, profilleri kendileri gözden geçirmekten rahatsızlık duyarlar veya bu önemli yolculukta yanlarında güvenilir bir rehbere ihtiyaç duyarlar.",
  },
  details: [
    {
      title: "Eşiniz İçin Arama",
      bullets: [
        "Size zaman ve çaba kazandıran doğrudan, anlık iletişim.",
        "Size özel olarak dikkatle değerlendirilmiş gerçek öneriler.",
      ],
      paragraphs: [
        "Her adım, karmaşık uygulamalar veya gereksiz aşamalar olmadan sorunsuz bir şekilde WhatsApp üzerinden gerçekleşir. Ekibimiz aramanın tamamını sizin için üstlenir, böylece binlerce profili taramanıza veya sonsuza kadar beklemenize gerek kalmaz. Bu sadece otomatik eşleştirme değildir — uzman ekibimiz profilinizi dikkatle inceler ve size gerçekten uygun en iyi seçenekleri sunar.",
      ],
      imageAlt: "Bir caminin dışında birlikte duran yeni evli bir çift",
    },
    {
      title: "Eşiniz İçin Arama",
      bullets: [
        "Tam Gizlilik & İki Taraf Arasında Daha İyi Bir Anlayış",
        "Profilinizi Tamamlayın & Aramanıza Başlayın",
      ],
      paragraphs: [
        "Verileriniz ve profiliniz tam bir gizlilikle ele alınır. Sadece tanıştırmanın ötesine geçerek süreç boyunca size destek olur ve her iki tarafın da gerçek bir anlayış ve uyum geliştirmesine yardımcı oluruz, inşallah.",
        "Bilgilerinizi ve tercihlerinizi eklemeniz, kimliğinizi ve fotoğraflarınızı güvenli bir şekilde yüklemeniz yeterlidir; profiliniz incelenip etkinleştirildikten sonra kişisel panonuz üzerinden yolculuğunuza başlayabilirsiniz.",
      ],
      imageAlt: "Düğün günlerinde bir gelin ve damat",
    },
  ],
  advantages: {
    title: "WhatsApp Üzerinden Kişisel Arama Hizmetini Farklı Kılan Nedir",
    items: [
      {
        title: "Sizin adınıza kişisel arama",
        description:
          "Binlerce profili taramak için zamanınızı harcamayın — ekibimiz en yüksek özen ve titizlik seviyesiyle tüm arama sürecini sizin için üstlenir.",
      },
      {
        title: "Özel, yayınlanmamış öneriler",
        description:
          "Platformda genel kullanıcılara görünmeyen özel profillere ulaşarak size daha geniş ve daha uyumlu seçenekler sunuyoruz.",
      },
      {
        title: "Eşinizi bulana kadar sürekli takip",
        description:
          "Rolümüz öneriyle bitmiyor — doğru karara ulaşana kadar her adımda yanınızda olur ve takip ederiz, inşallah.",
      },
      {
        title: "Tam gizlilik ve mahremiyet",
        description:
          "Tüm verileriniz ve profil bilgileriniz, hizmet boyunca hiçbir taviz verilmeden mutlak bir gizlilikle ele alınır.",
      },
    ],
    note: {
      title: "Kişiselleştirilmiş Eşleştirme & Destek",
      description:
        "Danışmanlarımız WhatsApp üzerinden sizinle özenle iletişim kurar, profilinizi yakından inceler, ardından geniş bir veritabanından ve özel profillerden en iyi eşleşmeleri arar. Ekip ayrıca karşı tarafla iletişimi yürütür ve mümkün olan en iyi eşleşmeye ulaşmak için bakış açılarını buluşturur, inşallah.",
    },
    advisorAlt: "Bir üyeyle birlikte dua eden Zefaaf danışmanı",
    coupleAlt: "Bir caminin önünde duran bir çift",
  },
  europe: {
    title: "Avrupa'da yaşayanlar için özel bir ayrıcalık",
    description:
      "VIP hizmeti ayrıca Amsterdam'daki Zefaaf ofisinde, ciddiyeti güçlendiren ve gerçek bir eşleşme şansını artıran güvenli ve saygılı bir ortamda, doğrudan şeriata uygun görüşmeler yapma seçeneğini de içerir.",
    cta: "VIP hizmetini WhatsApp üzerinden ayırtın",
    galleryLabel: "Avrupa genelindeki Zefaaf üyeleri",
    memberAlt: "Avrupa'daki Zefaaf üyeleri",
  },
};

const ru: VipCopy = {
  hero: {
    badge: "С VIP через WhatsApp вы экономите усилия и время",
    titleBefore: "Услуга Персонального Поиска",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " через WhatsApp",
    description:
      "Ищете подходящего спутника жизни, но нуждаетесь в настоящей личной помощи, а не в самостоятельном поиске? Услуга персонального поиска через WhatsApp от Zefaaf создана для тех, кто хочет более комфортного и приватного опыта — наша специализированная команда занимается поиском вместо вас и напрямую общается с вами через WhatsApp на каждом этапе пути.",
    feeLabel: "Стоимость услуги",
    price: "99 EUR",
    cta: "Начать сейчас через WhatsApp",
    imageAlt: "Пара, идущая по тихой европейской улице",
  },
  intro: {
    title: "Почему стоит выбрать услугу персонального поиска через WhatsApp?",
    description:
      "Некоторые люди серьёзно настроены на брак, но у них недостаточно времени, они чувствуют себя некомфортно, самостоятельно просматривая анкеты, или им просто нужен надёжный проводник рядом на этом важном пути.",
  },
  details: [
    {
      title: "Поиск вашей второй половины",
      bullets: [
        "Прямое, мгновенное общение, которое экономит ваше время и силы.",
        "Настоящие, тщательно продуманные рекомендации, подобранные именно для вас.",
      ],
      paragraphs: [
        "Каждый шаг проходит без затруднений через WhatsApp, без сложных приложений и лишних действий. Наша команда полностью берёт поиск на себя, поэтому вам не нужно просматривать тысячи анкет или бесконечно ждать. Это не просто автоматический подбор — наша специализированная команда внимательно изучает вашу анкету и предлагает лучшие варианты, действительно подходящие вам.",
      ],
      imageAlt: "Молодожёны стоят вместе у мечети",
    },
    {
      title: "Поиск вашей второй половины",
      bullets: [
        "Полная конфиденциальность и лучшее взаимопонимание между сторонами",
        "Заполните анкету и начните поиск",
      ],
      paragraphs: [
        "Ваши данные и анкета обрабатываются с полной конфиденциальностью. Мы делаем больше, чем просто знакомим людей, — мы сопровождаем вас на протяжении всего процесса и помогаем обеим сторонам достичь искреннего взаимопонимания и совместимости, иншаАллах.",
        "Просто добавьте свои данные и предпочтения, безопасно загрузите удостоверение личности и фотографии, а после проверки и активации анкеты начните свой путь через личный кабинет.",
      ],
      imageAlt: "Невеста и жених в день свадьбы",
    },
  ],
  advantages: {
    title: "Что отличает услугу персонального поиска через WhatsApp",
    items: [
      {
        title: "Персональный поиск от вашего имени",
        description:
          "Не тратьте время на просмотр тысяч анкет — наша команда полностью берёт на себя процесс поиска с максимальной заботой и точностью.",
      },
      {
        title: "Эксклюзивные, неопубликованные рекомендации",
        description:
          "Мы получаем доступ к приватным анкетам, недоступным широкой публике на платформе, что даёт вам более широкий выбор совместимых вариантов.",
      },
      {
        title: "Постоянное сопровождение до тех пор, пока вы не найдёте пару",
        description:
          "Наша роль не заканчивается на рекомендации — мы остаёмся рядом и сопровождаем каждый шаг, пока вы не примете верное решение, иншаАллах.",
      },
      {
        title: "Полная приватность и конфиденциальность",
        description:
          "Все ваши данные и сведения анкеты обрабатываются с абсолютной конфиденциальностью на протяжении всей услуги, без каких-либо компромиссов.",
      },
    ],
    note: {
      title: "Персональный подбор и поддержка",
      description:
        "Наши консультанты внимательно общаются с вами через WhatsApp, тщательно изучают вашу анкету, а затем ищут лучшие совпадения в обширной базе данных и среди эксклюзивных анкет. Команда также берёт на себя общение с другой стороной и сближает точки зрения, чтобы достичь наилучшего возможного совпадения, иншаАллах.",
    },
    advisorAlt: "Консультант Zefaaf молится вместе с участником",
    coupleAlt: "Пара стоит перед мечетью",
  },
  europe: {
    title: "Особое преимущество для жителей Европы",
    description:
      "Услуга VIP также включает возможность прямых встреч, соответствующих нормам шариата, в офисе Zefaaf в Амстердаме — в безопасной и уважительной обстановке, которая подчёркивает серьёзность намерений и повышает шансы на настоящее совпадение.",
    cta: "Забронировать услугу VIP через WhatsApp",
    galleryLabel: "Участники Zefaaf по всей Европе",
    memberAlt: "Участники Zefaaf в Европе",
  },
};

const id: VipCopy = {
  hero: {
    badge: "Dengan VIP via WhatsApp, hemat tenaga dan waktu Anda",
    titleBefore: "Layanan Pencarian Pribadi",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " via WhatsApp",
    description:
      "Sedang mencari pasangan hidup yang tepat tetapi membutuhkan bantuan pribadi yang nyata daripada mencari sendiri? Layanan Pencarian Pribadi via WhatsApp dari Zefaaf dirancang bagi mereka yang menginginkan pengalaman yang lebih nyaman dan privat — tim khusus kami menangani pencarian atas nama Anda dan berkomunikasi langsung dengan Anda melalui WhatsApp di setiap langkah perjalanan.",
    feeLabel: "Biaya Layanan",
    price: "99 EUR",
    cta: "Mulai Sekarang via WhatsApp",
    imageAlt: "Sepasang kekasih berjalan di jalanan Eropa yang tenang",
  },
  intro: {
    title: "Mengapa Memilih Layanan Pencarian Pribadi via WhatsApp?",
    description:
      "Sebagian orang serius untuk menikah tetapi tidak memiliki cukup waktu, merasa tidak nyaman menelusuri profil sendiri, atau sekadar membutuhkan pemandu tepercaya di sisi mereka dalam perjalanan penting ini.",
  },
  details: [
    {
      title: "Pencarian Pasangan Anda",
      bullets: [
        "Komunikasi langsung dan instan yang menghemat waktu serta tenaga Anda.",
        "Rekomendasi nyata yang dipertimbangkan dengan cermat dan disesuaikan untuk Anda.",
      ],
      paragraphs: [
        "Setiap langkah berjalan lancar melalui WhatsApp, tanpa aplikasi rumit atau langkah yang tidak perlu. Tim kami menangani seluruh proses pencarian untuk Anda, sehingga Anda tidak perlu menelusuri ribuan profil atau menunggu tanpa henti. Ini bukan sekadar pencocokan otomatis — tim khusus kami dengan cermat meninjau profil Anda dan menyajikan pilihan terbaik yang benar-benar sesuai untuk Anda.",
      ],
      imageAlt: "Pasangan yang baru menikah berdiri bersama di luar sebuah masjid",
    },
    {
      title: "Pencarian Pasangan Anda",
      bullets: [
        "Privasi Penuh & Pemahaman yang Lebih Baik Antara Kedua Pihak",
        "Lengkapi Profil Anda & Mulai Pencarian Anda",
      ],
      paragraphs: [
        "Data dan profil Anda ditangani dengan kerahasiaan penuh. Kami tidak hanya sekadar memperkenalkan, tetapi juga mendampingi Anda sepanjang proses dan membantu kedua pihak membangun pemahaman serta kecocokan yang tulus, insyaAllah.",
        "Cukup tambahkan data dan preferensi Anda, unggah identitas dan foto Anda dengan aman, dan setelah profil Anda ditinjau serta diaktifkan, mulailah perjalanan Anda melalui dasbor pribadi Anda.",
      ],
      imageAlt: "Pengantin wanita dan pria pada hari pernikahan mereka",
    },
  ],
  advantages: {
    title: "Yang Membedakan Layanan Pencarian Pribadi via WhatsApp",
    items: [
      {
        title: "Pencarian pribadi atas nama Anda",
        description:
          "Jangan buang waktu Anda menelusuri ribuan profil — tim kami menangani seluruh proses pencarian untuk Anda dengan tingkat ketelitian dan presisi tertinggi.",
      },
      {
        title: "Rekomendasi eksklusif yang tidak dipublikasikan",
        description:
          "Kami menjangkau profil pribadi yang tidak terlihat oleh publik di platform, memberi Anda pilihan yang lebih luas dan lebih cocok.",
      },
      {
        title: "Pendampingan berkelanjutan hingga Anda menemukan pasangan",
        description:
          "Peran kami tidak berakhir pada rekomendasi — kami tetap bersama Anda dan mendampingi setiap langkah hingga Anda mencapai keputusan yang tepat, insyaAllah.",
      },
      {
        title: "Privasi dan kerahasiaan penuh",
        description:
          "Semua data dan detail profil Anda ditangani dengan kerahasiaan mutlak selama layanan berlangsung, tanpa kompromi.",
      },
    ],
    note: {
      title: "Pencocokan & Dukungan yang Dipersonalisasi",
      description:
        "Konsultan kami berkomunikasi dengan cermat melalui WhatsApp, mempelajari profil Anda secara mendalam, lalu mencari kecocokan terbaik dari basis data yang luas dan profil eksklusif. Tim juga menangani komunikasi dengan pihak lain dan menjembatani sudut pandang untuk mencapai kecocokan terbaik yang mungkin, insyaAllah.",
    },
    advisorAlt: "Konsultan Zefaaf berdoa bersama seorang anggota",
    coupleAlt: "Sepasang kekasih berdiri di depan sebuah masjid",
  },
  europe: {
    title: "Fitur khusus bagi warga Eropa",
    description:
      "Layanan VIP juga mencakup opsi pertemuan langsung yang sesuai syariah di kantor Zefaaf di Amsterdam, dalam lingkungan yang aman dan penuh hormat yang memperkuat keseriusan serta meningkatkan peluang kecocokan yang tulus.",
    cta: "Pesan layanan VIP via WhatsApp",
    galleryLabel: "Anggota Zefaaf di seluruh Eropa",
    memberAlt: "Anggota Zefaaf di Eropa",
  },
};

const zh: VipCopy = {
  hero: {
    badge: "通过 WhatsApp 使用 VIP 服务,为您节省精力和时间",
    titleBefore: "专属搜寻服务",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: "(通过 WhatsApp)",
    description:
      "您正在寻找合适的人生伴侣,但需要真正的一对一协助,而不是独自搜寻吗?Zefaaf 推出的 WhatsApp 专属搜寻服务专为希望获得更舒适、更私密体验的用户而设计——我们的专业团队会代您进行搜寻,并在旅程的每一步通过 WhatsApp 与您直接沟通。",
    feeLabel: "服务费用",
    price: "99 欧元",
    cta: "立即通过 WhatsApp 开始",
    imageAlt: "一对情侣走在宁静的欧洲街道上",
  },
  intro: {
    title: "为什么选择 WhatsApp 专属搜寻服务?",
    description:
      "有些人对婚姻是认真的,但没有足够的时间,或不愿自己浏览资料,又或者只是需要一位值得信赖的向导陪伴走过这段重要的旅程。",
  },
  details: [
    {
      title: "为您寻找合适的对象",
      bullets: [
        "直接、即时的沟通,为您节省时间和精力。",
        "真实、经过用心考量、专为您量身定制的推荐。",
      ],
      paragraphs: [
        "每一步都通过 WhatsApp 顺畅完成,无需复杂的应用程序或多余的步骤。我们的团队会为您承担全部搜寻工作,让您无需浏览成千上万份资料,也无需无休止地等待。这并非单纯的自动匹配——我们的专业团队会仔细审查您的资料,为您呈现真正适合您的最佳选择。",
      ],
      imageAlt: "一对新婚夫妇一起站在清真寺外",
    },
    {
      title: "为您寻找合适的对象",
      bullets: [
        "完全保密,增进双方的相互理解",
        "完善您的资料,开始您的搜寻",
      ],
      paragraphs: [
        "您的数据和资料将得到完全保密的处理。我们所做的不止于牵线介绍——我们会在整个过程中为您提供支持,帮助双方建立真诚的理解与契合,愿主意欲。",
        "只需添加您的资料和偏好,安全上传您的身份证件与照片,待资料经审核并激活后,即可通过您的个人后台开启旅程。",
      ],
      imageAlt: "新娘与新郎在婚礼当天",
    },
  ],
  advantages: {
    title: "WhatsApp 专属搜寻服务的与众不同之处",
    items: [
      {
        title: "代您进行专属搜寻",
        description:
          "无需浪费时间浏览成千上万份资料——我们的团队将以最高水准的用心与精准,为您承担整个搜寻过程。",
      },
      {
        title: "独家、未公开的推荐",
        description:
          "我们可以接触到平台上不对公众公开的私密资料,为您提供更广泛、更契合的选择。",
      },
      {
        title: "持续跟进,直至您找到合适的对象",
        description:
          "我们的职责不止于给出推荐——我们会全程陪伴,持续跟进每一步,直到您做出正确的决定,愿主意欲。",
      },
      {
        title: "完全的隐私与保密",
        description:
          "在整个服务过程中,您的所有数据和资料详情都将得到绝对保密的处理,绝不妥协。",
      },
    ],
    note: {
      title: "个性化匹配与支持",
      description:
        "我们的顾问会通过 WhatsApp 与您用心沟通,深入研究您的资料,然后从庞大的数据库及独家资料中为您寻找最佳匹配。团队还会负责与对方沟通,协调双方视角,以达成尽可能最好的匹配,愿主意欲。",
    },
    advisorAlt: "一位 Zefaaf 顾问与一位会员一同祈祷",
    coupleAlt: "一对情侣站在清真寺前",
  },
  europe: {
    title: "专为欧洲居民打造的特别服务",
    description:
      "VIP 服务还包括在阿姆斯特丹 Zefaaf 办公室安排符合伊斯兰教法的直接会面选项,在安全且相互尊重的环境中,增强双方的诚意,提高获得真诚匹配的机会。",
    cta: "通过 WhatsApp 预约 VIP 服务",
    galleryLabel: "遍布欧洲各地的 Zefaaf 会员",
    memberAlt: "欧洲的 Zefaaf 会员",
  },
};

const bn: VipCopy = {
  hero: {
    badge: "হোয়াটসঅ্যাপের মাধ্যমে ভিআইপি সেবা নিয়ে আপনার শ্রম ও সময় বাঁচান",
    titleBefore: "ব্যক্তিগত অনুসন্ধান সেবা",
    titleSecondBefore: "",
    titleHighlight: "ভিআইপি",
    titleAfter: " হোয়াটসঅ্যাপের মাধ্যমে",
    description:
      "আপনি কি সঠিক জীবনসঙ্গী খুঁজছেন কিন্তু একা খোঁজার পরিবর্তে প্রকৃত ব্যক্তিগত সহায়তা প্রয়োজন? জেফাফ-এর হোয়াটসঅ্যাপের মাধ্যমে ব্যক্তিগত অনুসন্ধান সেবা তাদের জন্য তৈরি যারা আরও আরামদায়ক ও ব্যক্তিগত অভিজ্ঞতা চান — আমাদের বিশেষজ্ঞ দল আপনার পক্ষে অনুসন্ধান পরিচালনা করে এবং যাত্রার প্রতিটি ধাপে সরাসরি হোয়াটসঅ্যাপের মাধ্যমে আপনার সাথে যোগাযোগ করে।",
    feeLabel: "সেবা মূল্য",
    price: "99 ইউরো",
    cta: "এখনই হোয়াটসঅ্যাপের মাধ্যমে শুরু করুন",
    imageAlt: "একটি শান্ত ইউরোপীয় রাস্তায় হাঁটছে এক দম্পতি",
  },
  intro: {
    title: "কেন হোয়াটসঅ্যাপের মাধ্যমে ব্যক্তিগত অনুসন্ধান সেবা বেছে নেবেন?",
    description:
      "কিছু মানুষ বিয়ের ব্যাপারে আন্তরিক হলেও তাদের হাতে পর্যাপ্ত সময় থাকে না, নিজে থেকে প্রোফাইল দেখতে স্বাচ্ছন্দ্য বোধ করেন না, অথবা এই গুরুত্বপূর্ণ যাত্রায় পাশে একজন বিশ্বস্ত পথপ্রদর্শকের প্রয়োজন অনুভব করেন।",
  },
  details: [
    {
      title: "আপনার উপযুক্ত সঙ্গী অনুসন্ধান",
      bullets: [
        "সরাসরি ও তাৎক্ষণিক যোগাযোগ, যা আপনার সময় ও শ্রম বাঁচায়।",
        "আপনার জন্য বিশেষভাবে ভেবে-চিন্তে তৈরি প্রকৃত সুপারিশ।",
      ],
      paragraphs: [
        "জটিল অ্যাপ বা অপ্রয়োজনীয় ধাপ ছাড়াই প্রতিটি ধাপ হোয়াটসঅ্যাপের মাধ্যমে সাবলীলভাবে সম্পন্ন হয়। আমাদের দল আপনার পক্ষে সম্পূর্ণ অনুসন্ধান পরিচালনা করে, তাই আপনাকে হাজার হাজার প্রোফাইল ঘাঁটতে বা অনন্তকাল অপেক্ষা করতে হয় না। এটি নিছক স্বয়ংক্রিয় ম্যাচিং নয় — আমাদের বিশেষজ্ঞ দল যত্নসহকারে আপনার প্রোফাইল পর্যালোচনা করে এবং সত্যিকার অর্থে আপনার উপযোগী সেরা বিকল্পগুলো উপস্থাপন করে।",
      ],
      imageAlt: "একটি মসজিদের বাইরে একসাথে দাঁড়িয়ে থাকা নবদম্পতি",
    },
    {
      title: "আপনার উপযুক্ত সঙ্গী অনুসন্ধান",
      bullets: [
        "সম্পূর্ণ গোপনীয়তা ও উভয় পক্ষের মধ্যে আরও ভালো বোঝাপড়া",
        "আপনার প্রোফাইল সম্পূর্ণ করুন ও অনুসন্ধান শুরু করুন",
      ],
      paragraphs: [
        "আপনার তথ্য ও প্রোফাইল সম্পূর্ণ গোপনীয়তার সাথে পরিচালিত হয়। আমরা শুধু পরিচয় করিয়ে দেওয়াতেই সীমাবদ্ধ থাকি না — পুরো প্রক্রিয়া জুড়ে আপনাকে সহায়তা করি এবং উভয় পক্ষকে প্রকৃত বোঝাপড়া ও সামঞ্জস্য গড়ে তুলতে সাহায্য করি, ইনশাআল্লাহ।",
        "শুধু আপনার তথ্য ও পছন্দ যোগ করুন, নিরাপদে আপনার পরিচয়পত্র ও ছবি আপলোড করুন, এবং আপনার প্রোফাইল পর্যালোচনা ও সক্রিয় হওয়ার পর আপনার ব্যক্তিগত ড্যাশবোর্ডের মাধ্যমে যাত্রা শুরু করুন।",
      ],
      imageAlt: "বিয়ের দিনে এক কনে ও বর",
    },
  ],
  advantages: {
    title: "হোয়াটসঅ্যাপের মাধ্যমে ব্যক্তিগত অনুসন্ধান সেবাকে যা আলাদা করে তোলে",
    items: [
      {
        title: "আপনার পক্ষে ব্যক্তিগত অনুসন্ধান",
        description:
          "হাজার হাজার প্রোফাইল ঘাঁটতে সময় নষ্ট করবেন না — আমাদের দল সর্বোচ্চ যত্ন ও নির্ভুলতার সাথে সম্পূর্ণ অনুসন্ধান প্রক্রিয়া আপনার পক্ষে পরিচালনা করে।",
      },
      {
        title: "একচেটিয়া, অপ্রকাশিত সুপারিশ",
        description:
          "আমরা প্ল্যাটফর্মে জনসাধারণের কাছে দৃশ্যমান নয় এমন ব্যক্তিগত প্রোফাইলে পৌঁছাই, যা আপনাকে বিস্তৃত ও অধিক উপযোগী বিকল্প প্রদান করে।",
      },
      {
        title: "সঙ্গী খুঁজে না পাওয়া পর্যন্ত ধারাবাহিক ফলো-আপ",
        description:
          "আমাদের ভূমিকা সুপারিশেই শেষ হয় না — সঠিক সিদ্ধান্তে পৌঁছানো পর্যন্ত আমরা প্রতিটি ধাপে আপনার সাথে থাকি ও ফলো-আপ করি, ইনশাআল্লাহ।",
      },
      {
        title: "সম্পূর্ণ গোপনীয়তা ও গোপনতা",
        description:
          "সেবা চলাকালীন আপনার সমস্ত তথ্য ও প্রোফাইলের বিবরণ কোনো আপস ছাড়াই একেবারে গোপনীয়তার সাথে পরিচালিত হয়।",
      },
    ],
    note: {
      title: "ব্যক্তিগতকৃত ম্যাচিং ও সহায়তা",
      description:
        "আমাদের পরামর্শদাতারা হোয়াটসঅ্যাপের মাধ্যমে যত্নসহকারে আপনার সাথে যোগাযোগ করেন, আপনার প্রোফাইল নিবিড়ভাবে অধ্যয়ন করেন, এরপর বিস্তৃত ডেটাবেস ও একচেটিয়া প্রোফাইল থেকে সেরা মিল খোঁজেন। দলটি অপর পক্ষের সাথে যোগাযোগও পরিচালনা করে এবং সম্ভাব্য সেরা মিলে পৌঁছাতে দৃষ্টিভঙ্গির মধ্যে সেতুবন্ধন তৈরি করে, ইনশাআল্লাহ।",
    },
    advisorAlt: "একজন জেফাফ পরামর্শদাতা একজন সদস্যের সাথে নামাজ পড়ছেন",
    coupleAlt: "একটি মসজিদের সামনে দাঁড়িয়ে থাকা এক দম্পতি",
  },
  europe: {
    title: "ইউরোপের বাসিন্দাদের জন্য একটি বিশেষ সুবিধা",
    description:
      "ভিআইপি সেবায় আমস্টারডামের জেফাফ অফিসে সরাসরি শরিয়াসম্মত সাক্ষাতের সুযোগও অন্তর্ভুক্ত রয়েছে, একটি নিরাপদ ও মর্যাদাপূর্ণ পরিবেশে, যা আন্তরিকতা জোরদার করে এবং প্রকৃত মিলের সম্ভাবনা বাড়ায়।",
    cta: "হোয়াটসঅ্যাপের মাধ্যমে ভিআইপি সেবা বুক করুন",
    galleryLabel: "সমগ্র ইউরোপ জুড়ে জেফাফ সদস্যরা",
    memberAlt: "ইউরোপে জেফাফ সদস্যরা",
  },
};

const bs: VipCopy = {
  hero: {
    badge: "Uz VIP putem WhatsAppa štedite trud i vrijeme",
    titleBefore: "Usluga Lične Pretrage",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " putem WhatsAppa",
    description:
      "Tražite pravog životnog partnera, ali vam je potrebna prava lična pomoć umjesto samostalne pretrage? Usluga lične pretrage putem WhatsAppa od Zefaafa osmišljena je za one koji žele udobnije i privatnije iskustvo — naš specijalizovani tim vodi pretragu umjesto vas i komunicira direktno s vama putem WhatsAppa u svakom koraku puta.",
    feeLabel: "Naknada za Uslugu",
    price: "99 EUR",
    cta: "Započnite Sada putem WhatsAppa",
    imageAlt: "Par koji šeta mirnom evropskom ulicom",
  },
  intro: {
    title: "Zašto odabrati Uslugu lične pretrage putem WhatsAppa?",
    description:
      "Neki ljudi su ozbiljni po pitanju braka, ali nemaju dovoljno vremena, ne osjećaju se ugodno pregledavajući profile sami, ili im je jednostavno potreban pouzdan vodič uz sebe na ovom važnom putu.",
  },
  details: [
    {
      title: "Potraga za Vašim Partnerom",
      bullets: [
        "Direktna, trenutna komunikacija koja vam štedi vrijeme i trud.",
        "Prave, pažljivo osmišljene preporuke prilagođene vama.",
      ],
      paragraphs: [
        "Svaki korak se odvija neometano putem WhatsAppa, bez komplikovanih aplikacija ili nepotrebnih koraka. Naš tim vodi cjelokupnu pretragu umjesto vas, tako da ne morate pregledavati hiljade profila niti beskonačno čekati. Ovo nije samo automatsko uparivanje — naš specijalizovani tim pažljivo pregleda vaš profil i predstavlja vam najbolje opcije koje vam zaista odgovaraju.",
      ],
      imageAlt: "Mladenci koji stoje zajedno ispred džamije",
    },
    {
      title: "Potraga za Vašim Partnerom",
      bullets: [
        "Potpuna Privatnost i Bolje Razumijevanje Između Obje Strane",
        "Dovršite Svoj Profil i Započnite Pretragu",
      ],
      paragraphs: [
        "Vaši podaci i profil se obrađuju uz potpunu povjerljivost. Ne zaustavljamo se samo na upoznavanju — pratimo vas tokom cijelog procesa i pomažemo objema stranama da izgrade istinsko razumijevanje i kompatibilnost, ako Bog da.",
        "Jednostavno dodajte svoje podatke i preference, sigurno učitajte ličnu kartu i fotografije, i nakon što vaš profil bude pregledan i aktiviran, započnite svoje putovanje putem ličnog kontrolnog panela.",
      ],
      imageAlt: "Mlada i mladoženja na dan vjenčanja",
    },
  ],
  advantages: {
    title: "Šta izdvaja Uslugu lične pretrage putem WhatsAppa",
    items: [
      {
        title: "Lična pretraga u vaše ime",
        description:
          "Ne gubite vrijeme pregledavajući hiljade profila — naš tim vodi cijeli proces pretrage umjesto vas uz najviši nivo pažnje i preciznosti.",
      },
      {
        title: "Ekskluzivne, neobjavljene preporuke",
        description:
          "Dopiremo do privatnih profila koji nisu vidljivi javnosti na platformi, pružajući vam šire i kompatibilnije opcije.",
      },
      {
        title: "Kontinuirano praćenje sve dok ne pronađete partnera",
        description:
          "Naša uloga se ne završava preporukom — ostajemo uz vas i pratimo svaki korak dok ne donesete pravu odluku, ako Bog da.",
      },
      {
        title: "Potpuna privatnost i povjerljivost",
        description:
          "Svi vaši podaci i detalji profila obrađuju se uz apsolutnu povjerljivost tokom cijele usluge, bez ikakvih kompromisa.",
      },
    ],
    note: {
      title: "Personalizirano Uparivanje i Podrška",
      description:
        "Naši savjetnici pažljivo komuniciraju s vama putem WhatsAppa, detaljno proučavaju vaš profil, a zatim traže najbolja poklapanja iz opsežne baze podataka i ekskluzivnih profila. Tim također vodi komunikaciju s drugom stranom i usklađuje perspektive kako bi se postiglo najbolje moguće poklapanje, ako Bog da.",
    },
    advisorAlt: "Savjetnik Zefaafa moli se zajedno sa članom",
    coupleAlt: "Par koji stoji ispred džamije",
  },
  europe: {
    title: "Posebna pogodnost za stanovnike Evrope",
    description:
      "VIP usluga također uključuje mogućnost direktnih susreta u skladu sa šerijatom u Zefaaf uredu u Amsterdamu, u sigurnom i uljudnom okruženju koje jača ozbiljnost namjera i povećava šanse za istinsko poklapanje.",
    cta: "Rezervišite VIP uslugu putem WhatsAppa",
    galleryLabel: "Članovi Zefaafa širom Evrope",
    memberAlt: "Članovi Zefaafa u Evropi",
  },
};

const es: VipCopy = {
  hero: {
    badge: "Con VIP vía WhatsApp ahorras esfuerzo y tiempo",
    titleBefore: "Servicio de Búsqueda Personal",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " vía WhatsApp",
    description:
      "¿Buscas a la pareja de vida adecuada pero necesitas ayuda personal real en lugar de buscar solo/a? El Servicio de Búsqueda Personal vía WhatsApp de Zefaaf está diseñado para quienes desean una experiencia más cómoda y privada — nuestro equipo especializado se encarga de la búsqueda en tu nombre y se comunica directamente contigo por WhatsApp en cada paso del camino.",
    feeLabel: "Costo del Servicio",
    price: "99 EUR",
    cta: "Empezar Ahora vía WhatsApp",
    imageAlt: "Una pareja caminando por una tranquila calle europea",
  },
  intro: {
    title: "¿Por qué elegir el Servicio de Búsqueda Personal vía WhatsApp?",
    description:
      "Algunas personas son serias respecto al matrimonio pero no tienen suficiente tiempo, se sienten incómodas explorando perfiles por su cuenta, o simplemente necesitan una guía de confianza a su lado en este importante camino.",
  },
  details: [
    {
      title: "La Búsqueda de tu Pareja",
      bullets: [
        "Comunicación directa e instantánea que te ahorra tiempo y esfuerzo.",
        "Recomendaciones reales y cuidadosamente consideradas, adaptadas a ti.",
      ],
      paragraphs: [
        "Cada paso ocurre de forma fluida a través de WhatsApp, sin aplicaciones complicadas ni pasos innecesarios. Nuestro equipo se encarga de toda la búsqueda por ti, para que no tengas que explorar miles de perfiles ni esperar sin fin. No se trata solo de emparejamiento automático — nuestro equipo especializado revisa cuidadosamente tu perfil y te presenta las mejores opciones realmente adecuadas para ti.",
      ],
      imageAlt: "Una pareja recién casada de pie juntos frente a una mezquita",
    },
    {
      title: "La Búsqueda de tu Pareja",
      bullets: [
        "Privacidad Total y Mejor Entendimiento Entre Ambas Partes",
        "Completa tu Perfil y Comienza tu Búsqueda",
      ],
      paragraphs: [
        "Tus datos y tu perfil se manejan con total confidencialidad. Vamos más allá de las presentaciones apoyándote durante todo el proceso y ayudando a ambas partes a construir un entendimiento y compatibilidad genuinos, si Dios quiere.",
        "Simplemente añade tus datos y preferencias, sube de forma segura tu documento de identidad y fotos, y una vez que tu perfil sea revisado y activado, comienza tu recorrido a través de tu panel personal.",
      ],
      imageAlt: "Una novia y un novio el día de su boda",
    },
  ],
  advantages: {
    title: "Qué distingue al Servicio de Búsqueda Personal vía WhatsApp",
    items: [
      {
        title: "Búsqueda personal en tu nombre",
        description:
          "No pierdas tu tiempo explorando miles de perfiles — nuestro equipo se encarga de todo el proceso de búsqueda por ti con el máximo nivel de cuidado y precisión.",
      },
      {
        title: "Recomendaciones exclusivas y no publicadas",
        description:
          "Accedemos a perfiles privados que no son visibles para el público en la plataforma, ofreciéndote opciones más amplias y compatibles.",
      },
      {
        title: "Seguimiento continuo hasta que encuentres pareja",
        description:
          "Nuestro papel no termina con la recomendación — permanecemos contigo y damos seguimiento en cada paso hasta que llegues a la decisión correcta, si Dios quiere.",
      },
      {
        title: "Privacidad y confidencialidad total",
        description:
          "Todos tus datos y detalles de perfil se manejan con absoluta confidencialidad durante todo el servicio, sin ningún tipo de concesión.",
      },
    ],
    note: {
      title: "Emparejamiento y Apoyo Personalizados",
      description:
        "Nuestros asesores se comunican contigo con cuidado por WhatsApp, estudian tu perfil de cerca y luego buscan las mejores coincidencias en una amplia base de datos y perfiles exclusivos. El equipo también se encarga de la comunicación con la otra parte y concilia perspectivas para lograr la mejor coincidencia posible, si Dios quiere.",
    },
    advisorAlt: "Un asesor de Zefaaf orando junto a un miembro",
    coupleAlt: "Una pareja de pie frente a una mezquita",
  },
  europe: {
    title: "Una ventaja especial para los residentes de Europa",
    description:
      "El servicio VIP también incluye la opción de encuentros directos conforme a la Sharía en la oficina de Zefaaf en Ámsterdam, en un ambiente seguro y respetuoso que refuerza la seriedad y aumenta las posibilidades de una coincidencia genuina.",
    cta: "Reserva el servicio VIP vía WhatsApp",
    galleryLabel: "Miembros de Zefaaf en toda Europa",
    memberAlt: "Miembros de Zefaaf en Europa",
  },
};

const fa: VipCopy = {
  hero: {
    badge: "با VIP از طریق واتساپ، در تلاش و زمان خود صرفه‌جویی کنید",
    titleBefore: "خدمت جستجوی شخصی",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " از طریق واتساپ",
    description:
      "به‌دنبال همسر مناسب زندگی هستید اما به‌جای جستجوی تنها، به کمکی واقعی و شخصی نیاز دارید؟ خدمت جستجوی شخصی از طریق واتساپ زفاف برای کسانی طراحی شده که تجربه‌ای راحت‌تر و خصوصی‌تر می‌خواهند — تیم متخصص ما جستجو را از طرف شما انجام می‌دهد و در هر مرحله از این مسیر مستقیماً از طریق واتساپ با شما در ارتباط است.",
    feeLabel: "هزینه خدمت",
    price: "99 یورو",
    cta: "همین حالا از طریق واتساپ شروع کنید",
    imageAlt: "زوجی که در خیابانی آرام در اروپا قدم می‌زنند",
  },
  intro: {
    title: "چرا خدمت جستجوی شخصی از طریق واتساپ را انتخاب کنیم؟",
    description:
      "برخی افراد نسبت به ازدواج جدی هستند اما زمان کافی ندارند، از مرور خودشان پروفایل‌ها احساس راحتی نمی‌کنند، یا به‌سادگی به یک راهنمای قابل‌اعتماد در کنار خود در این مسیر مهم نیاز دارند.",
  },
  details: [
    {
      title: "جستجوی همسر مناسب شما",
      bullets: [
        "ارتباطی مستقیم و آنی که در وقت و تلاش شما صرفه‌جویی می‌کند.",
        "پیشنهادهایی واقعی و با دقت بررسی‌شده، متناسب با شما.",
      ],
      paragraphs: [
        "هر مرحله بدون هیچ برنامه پیچیده یا مرحله غیرضروری، به‌روانی از طریق واتساپ انجام می‌شود. تیم ما تمام مراحل جستجو را برای شما بر عهده می‌گیرد تا نیازی به مرور هزاران پروفایل یا انتظاری طولانی نداشته باشید. این تنها یک تطبیق خودکار نیست — تیم متخصص ما با دقت پروفایل شما را بررسی می‌کند و بهترین گزینه‌های واقعاً مناسب را به شما ارائه می‌دهد.",
      ],
      imageAlt: "زوجی تازه‌ازدواج‌کرده که بیرون از یک مسجد ایستاده‌اند",
    },
    {
      title: "جستجوی همسر مناسب شما",
      bullets: [
        "حریم خصوصی کامل و درک بهتر بین طرفین",
        "پروفایل خود را کامل کنید و جستجوی خود را آغاز کنید",
      ],
      paragraphs: [
        "اطلاعات و پروفایل شما با محرمانگی کامل مدیریت می‌شود. کار ما فراتر از معرفی ساده است — در تمام مراحل همراه شما هستیم و به هر دو طرف کمک می‌کنیم تا درک و سازگاری واقعی ایجاد کنند، ان‌شاءالله.",
        "کافی است اطلاعات و ترجیحات خود را وارد کنید، مدارک شناسایی و عکس‌های خود را با امنیت کامل بارگذاری کنید، و پس از بررسی و فعال‌سازی پروفایل، مسیر خود را از طریق پنل شخصی خود آغاز کنید.",
      ],
      imageAlt: "عروس و دامادی در روز عروسی‌شان",
    },
  ],
  advantages: {
    title: "چه چیزی خدمت جستجوی شخصی از طریق واتساپ را متمایز می‌کند",
    items: [
      {
        title: "جستجوی شخصی از طرف شما",
        description:
          "وقت خود را صرف مرور هزاران پروفایل نکنید — تیم ما با بالاترین سطح دقت و مراقبت، تمام فرایند جستجو را برای شما انجام می‌دهد.",
      },
      {
        title: "پیشنهادهای اختصاصی و منتشرنشده",
        description:
          "ما به پروفایل‌های خصوصی که برای عموم در پلتفرم قابل مشاهده نیستند دسترسی داریم و این به شما گزینه‌های گسترده‌تر و سازگارتری می‌دهد.",
      },
      {
        title: "پیگیری مستمر تا زمانی که همسر مناسب خود را بیابید",
        description:
          "نقش ما با ارائه پیشنهاد پایان نمی‌یابد — تا زمانی که به تصمیم درست برسید، در کنار شما می‌مانیم و هر مرحله را پیگیری می‌کنیم، ان‌شاءالله.",
      },
      {
        title: "حریم خصوصی و محرمانگی کامل",
        description:
          "تمام اطلاعات و جزئیات پروفایل شما در طول این خدمت با محرمانگی مطلق و بدون هیچ مصالحه‌ای مدیریت می‌شود.",
      },
    ],
    note: {
      title: "تطبیق و پشتیبانی شخصی‌سازی‌شده",
      description:
        "مشاوران ما با دقت از طریق واتساپ با شما در ارتباط هستند، پروفایل شما را از نزدیک بررسی می‌کنند و سپس بهترین تطبیق‌ها را از یک پایگاه داده گسترده و پروفایل‌های اختصاصی جستجو می‌کنند. این تیم همچنین ارتباط با طرف مقابل را مدیریت می‌کند و دیدگاه‌ها را به هم نزدیک می‌کند تا بهترین تطبیق ممکن حاصل شود، ان‌شاءالله.",
    },
    advisorAlt: "یک مشاور زفاف در حال دعا در کنار یکی از اعضا",
    coupleAlt: "زوجی که مقابل یک مسجد ایستاده‌اند",
  },
  europe: {
    title: "امکانی ویژه برای ساکنان اروپا",
    description:
      "خدمت VIP همچنین امکان دیدارهای مستقیم و مطابق با شریعت را در دفتر زفاف در آمستردام فراهم می‌کند، در محیطی امن و محترمانه که جدیت را تقویت کرده و شانس یافتن همسری واقعی را افزایش می‌دهد.",
    cta: "خدمت VIP را از طریق واتساپ رزرو کنید",
    galleryLabel: "اعضای زفاف در سراسر اروپا",
    memberAlt: "اعضای زفاف در اروپا",
  },
};

const pt: VipCopy = {
  hero: {
    badge: "Com o VIP via WhatsApp, você economiza esforço e tempo",
    titleBefore: "Serviço de Busca Pessoal",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " via WhatsApp",
    description:
      "Está à procura do parceiro de vida certo, mas precisa de ajuda pessoal real em vez de buscar sozinho(a)? O Serviço de Busca Pessoal via WhatsApp da Zefaaf foi criado para quem deseja uma experiência mais confortável e privada — nossa equipe especializada realiza a busca em seu nome e se comunica diretamente com você pelo WhatsApp em cada etapa da jornada.",
    feeLabel: "Taxa do Serviço",
    price: "99 EUR",
    cta: "Começar Agora via WhatsApp",
    imageAlt: "Um casal caminhando por uma rua europeia tranquila",
  },
  intro: {
    title: "Por que escolher o Serviço de Busca Pessoal via WhatsApp?",
    description:
      "Algumas pessoas são sérias em relação ao casamento, mas não têm tempo suficiente, não se sentem à vontade para explorar perfis sozinhas, ou simplesmente precisam de um guia de confiança ao seu lado nessa jornada importante.",
  },
  details: [
    {
      title: "A Busca pelo Seu Par",
      bullets: [
        "Comunicação direta e instantânea que economiza seu tempo e esforço.",
        "Recomendações reais e cuidadosamente ponderadas, feitas sob medida para você.",
      ],
      paragraphs: [
        "Cada etapa acontece de forma fluida pelo WhatsApp, sem aplicativos complicados ou passos desnecessários. Nossa equipe cuida de toda a busca por você, para que não precise explorar milhares de perfis nem esperar indefinidamente. Não se trata apenas de correspondência automática — nossa equipe especializada analisa cuidadosamente seu perfil e apresenta as melhores opções realmente adequadas a você.",
      ],
      imageAlt: "Um casal recém-casado em pé junto a uma mesquita",
    },
    {
      title: "A Busca pelo Seu Par",
      bullets: [
        "Privacidade Total e Melhor Entendimento Entre Ambas as Partes",
        "Complete Seu Perfil e Comece Sua Busca",
      ],
      paragraphs: [
        "Seus dados e perfil são tratados com total confidencialidade. Vamos além das apresentações, apoiando você durante todo o processo e ajudando ambas as partes a construírem um entendimento e compatibilidade genuínos, se Deus quiser.",
        "Basta adicionar seus dados e preferências, enviar com segurança seu documento de identidade e fotos e, assim que seu perfil for analisado e ativado, começar sua jornada pelo seu painel pessoal.",
      ],
      imageAlt: "Uma noiva e um noivo no dia do casamento",
    },
  ],
  advantages: {
    title: "O que diferencia o Serviço de Busca Pessoal via WhatsApp",
    items: [
      {
        title: "Busca pessoal em seu nome",
        description:
          "Não perca tempo explorando milhares de perfis — nossa equipe cuida de todo o processo de busca por você com o mais alto nível de cuidado e precisão.",
      },
      {
        title: "Recomendações exclusivas e não publicadas",
        description:
          "Temos acesso a perfis privados que não são visíveis ao público na plataforma, oferecendo a você opções mais amplas e compatíveis.",
      },
      {
        title: "Acompanhamento contínuo até você encontrar um par",
        description:
          "Nosso papel não termina na recomendação — permanecemos com você e acompanhamos cada etapa até que você chegue à decisão certa, se Deus quiser.",
      },
      {
        title: "Privacidade e confidencialidade totais",
        description:
          "Todos os seus dados e detalhes de perfil são tratados com confidencialidade absoluta durante todo o serviço, sem nenhum tipo de concessão.",
      },
    ],
    note: {
      title: "Compatibilidade e Suporte Personalizados",
      description:
        "Nossos consultores se comunicam cuidadosamente com você pelo WhatsApp, estudam seu perfil de perto e, em seguida, buscam as melhores combinações em um extenso banco de dados e perfis exclusivos. A equipe também cuida da comunicação com a outra parte e concilia perspectivas para alcançar a melhor combinação possível, se Deus quiser.",
    },
    advisorAlt: "Um consultor da Zefaaf orando ao lado de um membro",
    coupleAlt: "Um casal em pé diante de uma mesquita",
  },
  europe: {
    title: "Um benefício especial para residentes da Europa",
    description:
      "O serviço VIP também inclui a opção de encontros diretos, em conformidade com a Sharia, no escritório da Zefaaf em Amsterdã, em um ambiente seguro e respeitoso que reforça a seriedade e aumenta as chances de uma combinação genuína.",
    cta: "Reserve o serviço VIP via WhatsApp",
    galleryLabel: "Membros da Zefaaf em toda a Europa",
    memberAlt: "Membros da Zefaaf na Europa",
  },
};

const ja: VipCopy = {
  hero: {
    badge: "WhatsAppでのVIPサービスなら、手間と時間を節約できます",
    titleBefore: "パーソナルサーチサービス",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: "(WhatsApp経由)",
    description:
      "理想の人生のパートナーを探しているけれど、一人で探すのではなく本当に個人的なサポートが必要ですか?Zefaafの「WhatsAppによるパーソナルサーチサービス」は、より快適でプライベートな体験を求める方のために作られました——専門チームがあなたに代わって検索を行い、旅路のあらゆる段階でWhatsAppを通じて直接あなたとやり取りします。",
    feeLabel: "サービス料金",
    price: "99ユーロ",
    cta: "今すぐWhatsAppで始める",
    imageAlt: "静かなヨーロッパの通りを歩くカップル",
  },
  intro: {
    title: "なぜWhatsAppによるパーソナルサーチサービスを選ぶのか?",
    description:
      "結婚に真剣であっても、十分な時間がない方や、自分でプロフィールを閲覧することに抵抗を感じる方、あるいはこの大切な旅路にただ信頼できる案内役が必要な方もいます。",
  },
  details: [
    {
      title: "あなたに合う相手探し",
      bullets: [
        "時間と手間を節約する、直接的かつ即時のコミュニケーション。",
        "あなたのために丁寧に検討された、本物の推薦。",
      ],
      paragraphs: [
        "すべてのステップは複雑なアプリや不要な手順なしに、WhatsAppを通じてスムーズに進みます。私たちのチームがすべての検索を代行するため、何千ものプロフィールを閲覧したり、延々と待つ必要はありません。単なる自動マッチングではありません——専門チームがあなたのプロフィールを丁寧に確認し、本当にあなたに合った最良の選択肢をご提案します。",
      ],
      imageAlt: "モスクの外に一緒に立つ新婚カップル",
    },
    {
      title: "あなたに合う相手探し",
      bullets: [
        "完全なプライバシーと双方のより良い理解",
        "プロフィールを完成させて検索を開始",
      ],
      paragraphs: [
        "あなたのデータとプロフィールは完全な機密性をもって扱われます。私たちは単なる紹介にとどまらず、プロセス全体を通じてサポートし、双方が誠実な理解と相性を築けるよう手助けします、インシャアッラー。",
        "情報とご希望条件を入力し、身分証明書と写真を安全にアップロードするだけです。プロフィールが確認・有効化された後は、個人ダッシュボードから旅を始めてください。",
      ],
      imageAlt: "結婚式当日の花嫁と花婿",
    },
  ],
  advantages: {
    title: "WhatsAppによるパーソナルサーチサービスの特長",
    items: [
      {
        title: "あなたに代わっての個別検索",
        description:
          "何千ものプロフィールを閲覧する時間を無駄にする必要はありません——私たちのチームが最高水準の丁寧さと正確さで検索プロセス全体を代行します。",
      },
      {
        title: "非公開の限定的な推薦",
        description:
          "プラットフォーム上で一般には公開されていない非公開プロフィールにもアクセスし、より幅広く相性の良い選択肢を提供します。",
      },
      {
        title: "マッチが見つかるまでの継続的なフォローアップ",
        description:
          "私たちの役割は推薦で終わりません——正しい決断に至るまで、あらゆる段階であなたに寄り添いフォローし続けます、インシャアッラー。",
      },
      {
        title: "完全なプライバシーと機密保持",
        description:
          "サービス期間中、あなたのすべてのデータとプロフィール情報は一切の妥協なく、完全な機密性をもって扱われます。",
      },
    ],
    note: {
      title: "パーソナライズされたマッチングとサポート",
      description:
        "私たちのアドバイザーはWhatsAppを通じて丁寧にあなたとやり取りし、あなたのプロフィールを詳しく検討したうえで、豊富なデータベースと限定プロフィールの中から最良のマッチを探します。チームは相手側とのやり取りも担当し、双方の視点をすり合わせて、可能な限り最良のマッチにたどり着けるよう努めます、インシャアッラー。",
    },
    advisorAlt: "会員とともに祈るZefaafのアドバイザー",
    coupleAlt: "モスクの前に立つカップル",
  },
  europe: {
    title: "ヨーロッパ在住者のための特別な特典",
    description:
      "VIPサービスには、アムステルダムのZefaafオフィスでのシャリアに準拠した直接対面のオプションも含まれており、安全で敬意ある環境の中で真剣さを高め、真の相性が見つかる可能性を高めます。",
    cta: "WhatsAppでVIPサービスを予約する",
    galleryLabel: "ヨーロッパ各地のZefaafメンバー",
    memberAlt: "ヨーロッパのZefaafメンバー",
  },
};

const ko: VipCopy = {
  hero: {
    badge: "왓츠앱을 통한 VIP 서비스로 시간과 노력을 절약하세요",
    titleBefore: "퍼스널 서치 서비스",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " (왓츠앱을 통해)",
    description:
      "올바른 인생의 동반자를 찾고 계시지만 혼자 찾는 대신 진정한 개인 맞춤 도움이 필요하신가요? Zefaaf의 왓츠앱을 통한 퍼스널 서치 서비스는 더 편안하고 프라이빗한 경험을 원하는 분들을 위해 설계되었습니다 — 저희 전문팀이 회원님을 대신해 검색을 진행하며, 여정의 모든 단계에서 왓츠앱을 통해 직접 소통합니다.",
    feeLabel: "서비스 요금",
    price: "99유로",
    cta: "지금 왓츠앱으로 시작하기",
    imageAlt: "조용한 유럽 거리를 걷는 커플",
  },
  intro: {
    title: "왜 왓츠앱을 통한 퍼스널 서치 서비스를 선택해야 할까요?",
    description:
      "결혼에 진지하지만 충분한 시간이 없거나, 스스로 프로필을 살펴보는 것이 불편하거나, 이 중요한 여정에서 믿을 수 있는 안내자가 필요한 분들이 있습니다.",
  },
  details: [
    {
      title: "당신에게 맞는 상대 찾기",
      bullets: [
        "시간과 노력을 절약해주는 직접적이고 즉각적인 소통.",
        "당신을 위해 신중하게 고려된 진짜 추천.",
      ],
      paragraphs: [
        "모든 과정은 복잡한 앱이나 불필요한 단계 없이 왓츠앱을 통해 매끄럽게 진행됩니다. 저희 팀이 검색 전체를 대신 진행하므로 수천 개의 프로필을 살펴보거나 끝없이 기다릴 필요가 없습니다. 이는 단순한 자동 매칭이 아닙니다 — 전문팀이 회원님의 프로필을 세심하게 검토하여 진정으로 잘 맞는 최고의 옵션을 제시합니다.",
      ],
      imageAlt: "모스크 밖에 함께 서 있는 신혼부부",
    },
    {
      title: "당신에게 맞는 상대 찾기",
      bullets: [
        "완전한 프라이버시와 양측 간의 더 나은 이해",
        "프로필을 완성하고 검색을 시작하세요",
      ],
      paragraphs: [
        "회원님의 데이터와 프로필은 완전한 기밀성을 가지고 처리됩니다. 저희는 단순한 소개를 넘어 전체 과정 동안 회원님을 지원하며, 양측이 진정한 이해와 궁합을 쌓을 수 있도록 돕습니다, 인샬라.",
        "정보와 선호도를 입력하고 신분증과 사진을 안전하게 업로드하기만 하면 됩니다. 프로필이 검토 및 활성화되면 개인 대시보드를 통해 여정을 시작하세요.",
      ],
      imageAlt: "결혼식 날의 신부와 신랑",
    },
  ],
  advantages: {
    title: "왓츠앱을 통한 퍼스널 서치 서비스만의 차별점",
    items: [
      {
        title: "회원님을 대신한 개인 맞춤 검색",
        description:
          "수천 개의 프로필을 살펴보는 데 시간을 낭비하지 마세요 — 저희 팀이 최고 수준의 세심함과 정확성으로 전체 검색 과정을 대신 진행합니다.",
      },
      {
        title: "독점적이고 공개되지 않은 추천",
        description:
          "플랫폼에서 일반 대중에게 공개되지 않은 비공개 프로필에 접근하여 더 넓고 잘 맞는 옵션을 제공합니다.",
      },
      {
        title: "짝을 찾을 때까지 지속적인 후속 관리",
        description:
          "저희 역할은 추천에서 끝나지 않습니다 — 올바른 결정을 내릴 때까지 모든 단계에서 회원님과 함께하며 후속 관리를 이어갑니다, 인샬라.",
      },
      {
        title: "완전한 프라이버시와 기밀 유지",
        description:
          "서비스 전반에 걸쳐 회원님의 모든 데이터와 프로필 세부 정보는 어떠한 타협도 없이 절대적인 기밀성을 가지고 처리됩니다.",
      },
    ],
    note: {
      title: "맞춤형 매칭 및 지원",
      description:
        "저희 상담사는 왓츠앱을 통해 회원님과 세심하게 소통하며, 프로필을 면밀히 검토한 후 방대한 데이터베이스와 독점 프로필 중에서 최고의 매칭을 찾습니다. 팀은 상대방과의 소통도 담당하며, 최선의 매칭에 도달할 수 있도록 양측의 관점을 조율합니다, 인샬라.",
    },
    advisorAlt: "회원과 함께 기도하는 Zefaaf 상담사",
    coupleAlt: "모스크 앞에 서 있는 커플",
  },
  europe: {
    title: "유럽 거주자를 위한 특별 혜택",
    description:
      "VIP 서비스에는 암스테르담의 Zefaaf 사무실에서 샤리아를 준수하는 직접 만남 옵션도 포함되어 있으며, 안전하고 정중한 환경에서 진지함을 강화하고 진정한 매칭의 가능성을 높입니다.",
    cta: "왓츠앱으로 VIP 서비스 예약하기",
    galleryLabel: "유럽 전역의 Zefaaf 회원들",
    memberAlt: "유럽의 Zefaaf 회원들",
  },
};

const it: VipCopy = {
  hero: {
    badge: "Con il VIP via WhatsApp risparmi tempo e fatica",
    titleBefore: "Servizio di Ricerca Personale",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " via WhatsApp",
    description:
      "Stai cercando il partner di vita giusto ma hai bisogno di un vero aiuto personale invece di cercare da solo/a? Il Servizio di Ricerca Personale via WhatsApp di Zefaaf è pensato per chi desidera un'esperienza più comoda e riservata — il nostro team specializzato si occupa della ricerca per tuo conto e comunica direttamente con te su WhatsApp a ogni passo del percorso.",
    feeLabel: "Costo del Servizio",
    price: "99 EUR",
    cta: "Inizia Ora via WhatsApp",
    imageAlt: "Una coppia che cammina lungo una tranquilla strada europea",
  },
  intro: {
    title: "Perché scegliere il Servizio di Ricerca Personale via WhatsApp?",
    description:
      "Alcune persone sono serie riguardo al matrimonio ma non hanno abbastanza tempo, non si sentono a proprio agio nello sfogliare i profili da sole, oppure hanno semplicemente bisogno di una guida fidata al proprio fianco in questo percorso importante.",
  },
  details: [
    {
      title: "La Ricerca del Tuo Partner",
      bullets: [
        "Comunicazione diretta e immediata che ti fa risparmiare tempo e fatica.",
        "Raccomandazioni reali, attentamente studiate e su misura per te.",
      ],
      paragraphs: [
        "Ogni passaggio avviene senza intoppi tramite WhatsApp, senza app complicate o passaggi superflui. Il nostro team si occupa dell'intera ricerca al posto tuo, così non dovrai sfogliare migliaia di profili né attendere all'infinito. Non si tratta di un semplice abbinamento automatico — il nostro team specializzato esamina attentamente il tuo profilo e ti presenta le migliori opzioni davvero adatte a te.",
      ],
      imageAlt: "Una coppia appena sposata in piedi insieme fuori da una moschea",
    },
    {
      title: "La Ricerca del Tuo Partner",
      bullets: [
        "Privacy Completa e una Migliore Comprensione Tra le Due Parti",
        "Completa il Tuo Profilo e Inizia la Tua Ricerca",
      ],
      paragraphs: [
        "I tuoi dati e il tuo profilo sono trattati con totale riservatezza. Andiamo oltre le semplici presentazioni, accompagnandoti lungo tutto il percorso e aiutando entrambe le parti a costruire una comprensione e una compatibilità autentiche, se Dio vuole.",
        "Ti basta aggiungere i tuoi dati e le tue preferenze, caricare in modo sicuro il documento d'identità e le foto, e una volta che il tuo profilo sarà esaminato e attivato, potrai iniziare il tuo percorso dalla tua dashboard personale.",
      ],
      imageAlt: "Una sposa e uno sposo il giorno del loro matrimonio",
    },
  ],
  advantages: {
    title: "Ciò che distingue il Servizio di Ricerca Personale via WhatsApp",
    items: [
      {
        title: "Ricerca personale per tuo conto",
        description:
          "Non perdere tempo a sfogliare migliaia di profili — il nostro team si occupa dell'intero processo di ricerca per te con il massimo livello di cura e precisione.",
      },
      {
        title: "Raccomandazioni esclusive e non pubblicate",
        description:
          "Raggiungiamo profili privati non visibili al pubblico sulla piattaforma, offrendoti opzioni più ampie e compatibili.",
      },
      {
        title: "Follow-up continuo finché non trovi un abbinamento",
        description:
          "Il nostro ruolo non finisce con la raccomandazione — restiamo al tuo fianco seguendoti passo dopo passo finché non prendi la decisione giusta, se Dio vuole.",
      },
      {
        title: "Privacy e riservatezza complete",
        description:
          "Tutti i tuoi dati e i dettagli del profilo sono trattati con assoluta riservatezza per tutta la durata del servizio, senza alcun compromesso.",
      },
    ],
    note: {
      title: "Abbinamento e Supporto Personalizzati",
      description:
        "I nostri consulenti comunicano con te con attenzione tramite WhatsApp, studiano attentamente il tuo profilo, quindi cercano i migliori abbinamenti in un ampio database e tra profili esclusivi. Il team gestisce anche la comunicazione con l'altra parte, avvicinando i punti di vista per raggiungere il miglior abbinamento possibile, se Dio vuole.",
    },
    advisorAlt: "Un consulente Zefaaf che prega insieme a un membro",
    coupleAlt: "Una coppia in piedi davanti a una moschea",
  },
  europe: {
    title: "Un vantaggio speciale per i residenti in Europa",
    description:
      "Il servizio VIP include anche la possibilità di incontri diretti conformi alla Sharia presso l'ufficio Zefaaf di Amsterdam, in un ambiente sicuro e rispettoso che rafforza la serietà e aumenta le possibilità di un abbinamento autentico.",
    cta: "Prenota il servizio VIP via WhatsApp",
    galleryLabel: "Membri Zefaaf in tutta Europa",
    memberAlt: "Membri Zefaaf in Europa",
  },
};

const ur: VipCopy = {
  hero: {
    badge: "واٹس ایپ کے ذریعے VIP کے ساتھ اپنی محنت اور وقت بچائیں",
    titleBefore: "ذاتی تلاش کی خدمت",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " واٹس ایپ کے ذریعے",
    description:
      "کیا آپ صحیح زندگی کے ساتھی کی تلاش میں ہیں لیکن اکیلے تلاش کرنے کے بجائے حقیقی ذاتی مدد چاہتے ہیں؟ زفاف کی واٹس ایپ کے ذریعے ذاتی تلاش کی خدمت ان افراد کے لیے تیار کی گئی ہے جو زیادہ آرام دہ اور نجی تجربہ چاہتے ہیں — ہماری ماہر ٹیم آپ کی جانب سے تلاش کرتی ہے اور سفر کے ہر مرحلے میں واٹس ایپ کے ذریعے براہِ راست آپ سے رابطہ کرتی ہے۔",
    feeLabel: "سروس فیس",
    price: "99 یورو",
    cta: "ابھی واٹس ایپ کے ذریعے شروع کریں",
    imageAlt: "ایک پرسکون یورپی گلی میں چلتا ہوا جوڑا",
  },
  intro: {
    title: "واٹس ایپ کے ذریعے ذاتی تلاش کی خدمت کیوں منتخب کریں؟",
    description:
      "کچھ لوگ شادی کے معاملے میں سنجیدہ ہوتے ہیں لیکن ان کے پاس کافی وقت نہیں ہوتا، خود پروفائلز دیکھنے میں آسودگی محسوس نہیں کرتے، یا محض اس اہم سفر میں اپنے ساتھ ایک قابلِ اعتماد رہنما چاہتے ہیں۔",
  },
  details: [
    {
      title: "آپ کے لیے موزوں ساتھی کی تلاش",
      bullets: [
        "براہِ راست اور فوری رابطہ جو آپ کا وقت اور محنت بچاتا ہے۔",
        "حقیقی، سوچ سمجھ کر تیار کردہ سفارشات جو خاص طور پر آپ کے لیے ہیں۔",
      ],
      paragraphs: [
        "ہر مرحلہ کسی پیچیدہ ایپ یا غیرضروری قدم کے بغیر بآسانی واٹس ایپ کے ذریعے مکمل ہوتا ہے۔ ہماری ٹیم آپ کی جانب سے پوری تلاش کرتی ہے، تاکہ آپ کو ہزاروں پروفائلز دیکھنے یا لامتناہی انتظار کرنے کی ضرورت نہ پڑے۔ یہ محض خودکار میچنگ نہیں — ہماری ماہر ٹیم آپ کے پروفائل کا بغور جائزہ لیتی ہے اور آپ کے لیے واقعی موزوں بہترین آپشنز پیش کرتی ہے۔",
      ],
      imageAlt: "ایک نئے شادی شدہ جوڑا مسجد کے باہر ساتھ کھڑا ہے",
    },
    {
      title: "آپ کے لیے موزوں ساتھی کی تلاش",
      bullets: [
        "مکمل رازداری اور دونوں فریقین کے درمیان بہتر تفہیم",
        "اپنا پروفائل مکمل کریں اور تلاش شروع کریں",
      ],
      paragraphs: [
        "آپ کا ڈیٹا اور پروفائل مکمل رازداری کے ساتھ سنبھالا جاتا ہے۔ ہم محض تعارف سے آگے بڑھ کر پورے عمل کے دوران آپ کی مدد کرتے ہیں اور دونوں فریقین کو حقیقی تفہیم اور مطابقت پیدا کرنے میں مدد دیتے ہیں، ان شاء اللہ۔",
        "بس اپنی معلومات اور ترجیحات شامل کریں، اپنی شناخت اور تصاویر محفوظ طریقے سے اپ لوڈ کریں، اور پروفائل کے جائزے اور فعال ہونے کے بعد اپنے ذاتی ڈیش بورڈ کے ذریعے اپنا سفر شروع کریں۔",
      ],
      imageAlt: "شادی کے دن دلہن اور دولہا",
    },
  ],
  advantages: {
    title: "واٹس ایپ کے ذریعے ذاتی تلاش کی خدمت کو کیا چیز ممتاز بناتی ہے",
    items: [
      {
        title: "آپ کی جانب سے ذاتی تلاش",
        description:
          "ہزاروں پروفائلز دیکھنے میں اپنا وقت ضائع نہ کریں — ہماری ٹیم انتہائی احتیاط اور درستگی کے ساتھ پوری تلاش کا عمل آپ کی جانب سے انجام دیتی ہے۔",
      },
      {
        title: "خصوصی، غیر شائع شدہ سفارشات",
        description:
          "ہم ایسے نجی پروفائلز تک رسائی رکھتے ہیں جو پلیٹ فارم پر عوام کے لیے نظر نہیں آتے، جس سے آپ کو زیادہ وسیع اور موزوں تر آپشنز ملتے ہیں۔",
      },
      {
        title: "جب تک آپ کو ساتھی نہ ملے مسلسل پیروی",
        description:
          "ہمارا کردار سفارش پر ختم نہیں ہوتا — ہم صحیح فیصلے تک پہنچنے تک ہر مرحلے میں آپ کے ساتھ رہتے ہیں اور پیروی کرتے ہیں، ان شاء اللہ۔",
      },
      {
        title: "مکمل رازداری اور خفیہ رکھنا",
        description:
          "خدمت کے دوران آپ کا تمام ڈیٹا اور پروفائل کی تفصیلات بغیر کسی سمجھوتے کے مکمل رازداری کے ساتھ سنبھالی جاتی ہیں۔",
      },
    ],
    note: {
      title: "ذاتی نوعیت کی میچنگ اور معاونت",
      description:
        "ہمارے مشیران واٹس ایپ کے ذریعے احتیاط سے آپ سے رابطہ کرتے ہیں، آپ کے پروفائل کا قریب سے مطالعہ کرتے ہیں، پھر ایک وسیع ڈیٹا بیس اور خصوصی پروفائلز سے بہترین میچز تلاش کرتے ہیں۔ ٹیم دوسرے فریق کے ساتھ رابطے کی ذمہ داری بھی نبھاتی ہے اور بہترین ممکنہ میچ تک پہنچنے کے لیے نقطہ ہائے نظر میں ہم آہنگی پیدا کرتی ہے، ان شاء اللہ۔",
    },
    advisorAlt: "ایک زفاف مشیر ایک رکن کے ساتھ نماز پڑھ رہا ہے",
    coupleAlt: "ایک جوڑا مسجد کے سامنے کھڑا ہے",
  },
  europe: {
    title: "یورپ کے مکینوں کے لیے ایک خصوصی سہولت",
    description:
      "VIP خدمت میں آمسٹرڈیم میں زفاف کے دفتر میں براہِ راست، شریعت کے مطابق ملاقاتوں کا اختیار بھی شامل ہے، ایک محفوظ اور باعزت ماحول میں جو سنجیدگی کو تقویت دیتا ہے اور حقیقی میچ کے امکانات بڑھاتا ہے۔",
    cta: "واٹس ایپ کے ذریعے VIP خدمت بک کریں",
    galleryLabel: "پورے یورپ میں زفاف کے اراکین",
    memberAlt: "یورپ میں زفاف کے اراکین",
  },
};

const ta: VipCopy = {
  hero: {
    badge: "வாட்ஸ்அப் மூலம் விஐபி மூலம் உங்கள் நேரத்தையும் முயற்சியையும் சேமிக்கலாம்",
    titleBefore: "தனிப்பட்ட தேடல் சேவை",
    titleSecondBefore: "",
    titleHighlight: "விஐபி",
    titleAfter: " வாட்ஸ்அப் மூலம்",
    description:
      "சரியான வாழ்க்கைத் துணையைத் தேடுகிறீர்களா, ஆனால் தனியாகத் தேடுவதற்குப் பதிலாக உண்மையான தனிப்பட்ட உதவி தேவைப்படுகிறதா? Zefaaf-இன் வாட்ஸ்அப் மூலமான தனிப்பட்ட தேடல் சேவை, மேலும் வசதியான மற்றும் தனிப்பட்ட அனுபவத்தை விரும்புவோருக்காக வடிவமைக்கப்பட்டுள்ளது — எங்கள் நிபுணர் குழு உங்களுக்காக தேடலை மேற்கொள்கிறது மற்றும் பயணத்தின் ஒவ்வொரு கட்டத்திலும் வாட்ஸ்அப் மூலம் நேரடியாக உங்களுடன் தொடர்பு கொள்கிறது.",
    feeLabel: "சேவைக் கட்டணம்",
    price: "99 யூரோ",
    cta: "இப்போதே வாட்ஸ்அப் மூலம் தொடங்குங்கள்",
    imageAlt: "அமைதியான ஐரோப்பிய தெருவில் நடந்து செல்லும் ஜோடி",
  },
  intro: {
    title: "வாட்ஸ்அப் மூலமான தனிப்பட்ட தேடல் சேவையை ஏன் தேர்வு செய்ய வேண்டும்?",
    description:
      "சிலர் திருமணத்தில் தீவிரமாக இருந்தாலும், போதுமான நேரம் இல்லாதவர்களாகவோ, சுயமாக சுயவிவரங்களை பார்வையிடுவதில் வசதியின்மை உணர்பவர்களாகவோ, அல்லது இந்த முக்கியமான பயணத்தில் நம்பகமான வழிகாட்டி தேவைப்படுபவர்களாகவோ இருக்கலாம்.",
  },
  details: [
    {
      title: "உங்களுக்கான துணையைத் தேடுதல்",
      bullets: [
        "உங்கள் நேரத்தையும் முயற்சியையும் சேமிக்கும் நேரடி, உடனடித் தொடர்பு.",
        "உங்களுக்காக கவனமாக பரிசீலிக்கப்பட்ட உண்மையான பரிந்துரைகள்.",
      ],
      paragraphs: [
        "சிக்கலான ஆப்ஸ் அல்லது தேவையற்ற படிகள் இல்லாமல் ஒவ்வொரு கட்டமும் வாட்ஸ்அப் மூலம் சீராக நடைபெறுகிறது. எங்கள் குழு உங்களுக்காக முழுத் தேடலையும் மேற்கொள்கிறது, எனவே ஆயிரக்கணக்கான சுயவிவரங்களை பார்வையிடவோ முடிவின்றி காத்திருக்கவோ தேவையில்லை. இது வெறும் தானியங்கி பொருத்தமல்ல — எங்கள் நிபுணர் குழு உங்கள் சுயவிவரத்தை கவனமாக ஆய்வு செய்து, உங்களுக்கு உண்மையிலேயே பொருந்தும் சிறந்த தேர்வுகளை வழங்குகிறது.",
      ],
      imageAlt: "ஒரு மசூதிக்கு வெளியே ஒன்றாக நிற்கும் புதிதாக திருமணமான ஜோடி",
    },
    {
      title: "உங்களுக்கான துணையைத் தேடுதல்",
      bullets: [
        "முழுமையான தனியுரிமை & இரு தரப்பினருக்கும் இடையே சிறந்த புரிதல்",
        "உங்கள் சுயவிவரத்தை நிறைவு செய்து தேடலைத் தொடங்குங்கள்",
      ],
      paragraphs: [
        "உங்கள் தரவும் சுயவிவரமும் முழுமையான ரகசியத்தன்மையுடன் கையாளப்படுகின்றன. அறிமுகத்திற்கு அப்பாற்பட்டு, செயல்முறை முழுவதும் உங்களுக்கு ஆதரவளித்து, இரு தரப்பினரும் உண்மையான புரிதலையும் பொருத்தத்தையும் உருவாக்க உதவுகிறோம், இன்ஷா அல்லாஹ்.",
        "உங்கள் விவரங்களையும் விருப்பங்களையும் சேர்த்து, உங்கள் அடையாள ஆவணத்தையும் புகைப்படங்களையும் பாதுகாப்பாக பதிவேற்றுங்கள், உங்கள் சுயவிவரம் ஆய்வு செய்யப்பட்டு செயல்படுத்தப்பட்ட பிறகு உங்கள் தனிப்பட்ட டாஷ்போர்டு மூலம் உங்கள் பயணத்தைத் தொடங்குங்கள்.",
      ],
      imageAlt: "திருமண நாளில் மணமகள் மற்றும் மணமகன்",
    },
  ],
  advantages: {
    title: "வாட்ஸ்அப் மூலமான தனிப்பட்ட தேடல் சேவையை தனித்துவப்படுத்துவது என்ன",
    items: [
      {
        title: "உங்களுக்காக தனிப்பட்ட தேடல்",
        description:
          "ஆயிரக்கணக்கான சுயவிவரங்களை பார்வையிட உங்கள் நேரத்தை வீணடிக்க வேண்டாம் — எங்கள் குழு உயர்ந்த அளவிலான கவனிப்பு மற்றும் துல்லியத்துடன் முழு தேடல் செயல்முறையையும் உங்களுக்காக மேற்கொள்கிறது.",
      },
      {
        title: "பிரத்யேக, வெளியிடப்படாத பரிந்துரைகள்",
        description:
          "தளத்தில் பொதுமக்களுக்குத் தெரியாத தனிப்பட்ட சுயவிவரங்களை நாங்கள் அணுகுகிறோம், இது உங்களுக்கு பரந்த மற்றும் மேலும் பொருத்தமான தேர்வுகளை வழங்குகிறது.",
      },
      {
        title: "உங்களுக்கு துணை கிடைக்கும் வரை தொடர்ச்சியான பின்தொடர்தல்",
        description:
          "எங்கள் பங்கு பரிந்துரையுடன் முடிவடையாது — சரியான முடிவை எடுக்கும் வரை ஒவ்வொரு கட்டத்திலும் உங்களுடன் இருந்து பின்தொடர்கிறோம், இன்ஷா அல்லாஹ்.",
      },
      {
        title: "முழுமையான தனியுரிமை மற்றும் ரகசியத்தன்மை",
        description:
          "சேவை முழுவதும் உங்கள் அனைத்து தரவும் சுயவிவர விவரங்களும் எந்த சமரசமும் இன்றி முழுமையான ரகசியத்தன்மையுடன் கையாளப்படுகின்றன.",
      },
    ],
    note: {
      title: "தனிப்பயனாக்கப்பட்ட பொருத்தம் & ஆதரவு",
      description:
        "எங்கள் ஆலோசகர்கள் வாட்ஸ்அப் மூலம் கவனமாக உங்களுடன் தொடர்பு கொள்கிறார்கள், உங்கள் சுயவிவரத்தை நெருக்கமாக ஆய்வு செய்கிறார்கள், பின்னர் விரிவான தரவுத்தளத்திலிருந்தும் பிரத்யேக சுயவிவரங்களிலிருந்தும் சிறந்த பொருத்தங்களைத் தேடுகிறார்கள். மற்ற தரப்புடன் தொடர்பையும் குழு கையாள்கிறது மற்றும் சிறந்த சாத்தியமான பொருத்தத்தை அடைய கண்ணோட்டங்களை இணைக்கிறது, இன்ஷா அல்லாஹ்.",
    },
    advisorAlt: "ஒரு உறுப்பினருடன் சேர்ந்து பிரார்த்தனை செய்யும் Zefaaf ஆலோசகர்",
    coupleAlt: "ஒரு மசூதிக்கு முன்னால் நிற்கும் ஜோடி",
  },
  europe: {
    title: "ஐரோப்பாவில் வசிப்பவர்களுக்கான ஒரு சிறப்பு அம்சம்",
    description:
      "VIP சேவையில் ஆம்ஸ்டர்டாமில் உள்ள Zefaaf அலுவலகத்தில் நேரடி, ஷரியாவுக்கு இணங்கிய சந்திப்புகளுக்கான விருப்பமும் அடங்கும், இது தீவிரத்தன்மையை வலுப்படுத்தி உண்மையான பொருத்தத்தின் வாய்ப்புகளை அதிகரிக்கும் பாதுகாப்பான மற்றும் மரியாதைக்குரிய சூழலில் நடைபெறுகிறது.",
    cta: "வாட்ஸ்அப் மூலம் VIP சேவையை முன்பதிவு செய்யுங்கள்",
    galleryLabel: "ஐரோப்பா முழுவதும் உள்ள Zefaaf உறுப்பினர்கள்",
    memberAlt: "ஐரோப்பாவில் உள்ள Zefaaf உறுப்பினர்கள்",
  },
};

const am: VipCopy = {
  hero: {
    badge: "በዋትስአፕ በኩል በVIP ጥረትዎንና ጊዜዎን ይቆጥባሉ",
    titleBefore: "የግል ፍለጋ አገልግሎት",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " በዋትስአፕ በኩል",
    description:
      "ትክክለኛውን የሕይወት አጋር እየፈለጉ ነው ግን ብቻዎን ከመፈለግ ይልቅ እውነተኛ የግል እርዳታ ይፈልጋሉ? ከዘፋአፍ የሚቀርበው በዋትስአፕ በኩል የግል ፍለጋ አገልግሎት የበለጠ ምቹና የግል ተሞክሮ ለሚፈልጉ ሰዎች የተዘጋጀ ነው — ልዩ ባለሙያ ቡድናችን ፍለጋውን ወክለውዎት ያካሂዳል እንዲሁም በጉዞው በእያንዳንዱ ደረጃ በዋትስአፕ በኩል በቀጥታ ከእርስዎ ጋር ይገናኛል።",
    feeLabel: "የአገልግሎት ክፍያ",
    price: "99 ዩሮ",
    cta: "አሁኑኑ በዋትስአፕ ይጀምሩ",
    imageAlt: "በጸጥታ በተሞላ የአውሮፓ መንገድ ላይ የሚራመዱ ጥንዶች",
  },
  intro: {
    title: "ለምን በዋትስአፕ በኩል የግል ፍለጋ አገልግሎትን መርጠው?",
    description:
      "አንዳንድ ሰዎች ስለ ጋብቻ ቁርጠኛ ናቸው ነገር ግን በቂ ጊዜ የላቸውም፣ ራሳቸው ፕሮፋይሎችን በማየት ምቾት አይሰማቸውም፣ ወይም በዚህ አስፈላጊ ጉዞ ላይ ከጎናቸው የታመነ መሪ ብቻ ያስፈልጋቸዋል።",
  },
  details: [
    {
      title: "የሚስማማዎትን ጓደኛ መፈለግ",
      bullets: [
        "ጊዜዎንና ጥረትዎን የሚቆጥብ ቀጥተኛና ፈጣን ግንኙነት።",
        "ለእርስዎ በጥንቃቄ የተመረጡ እውነተኛ ምክሮች።",
      ],
      paragraphs: [
        "እያንዳንዱ ደረጃ ያለ ውስብስብ መተግበሪያዎች ወይም አላስፈላጊ ደረጃዎች በዋትስአፕ በኩል በተቀላጠፈ ሁኔታ ይከናወናል። ቡድናችን ፍለጋውን ሙሉ በሙሉ ወክለውዎት ስለሚያካሂድ በሺዎች የሚቆጠሩ ፕሮፋይሎችን ማሰስ ወይም ላልተወሰነ ጊዜ መጠበቅ አያስፈልግዎትም። ይህ ቀላል ራስ-ሰር ተዛማጅነት አይደለም — ልዩ ባለሙያ ቡድናችን ፕሮፋይልዎን በጥንቃቄ ይገመግማል እንዲሁም በእውነት ለእርስዎ የሚስማሙ ምርጥ አማራጮችን ያቀርባል።",
      ],
      imageAlt: "ከመስጊድ ውጭ አብረው የቆሙ አዲስ ተጋቢዎች",
    },
    {
      title: "የሚስማማዎትን ጓደኛ መፈለግ",
      bullets: [
        "ሙሉ ግላዊነት እና በሁለቱም ወገኖች መካከል የተሻለ መግባባት",
        "ፕሮፋይልዎን ያጠናቅቁ እና ፍለጋዎን ይጀምሩ",
      ],
      paragraphs: [
        "መረጃዎና ፕሮፋይልዎ ሙሉ በሙሉ በሚስጥር ይያዛሉ። ከቀላል ትውውቅ ባለፈ በሂደቱ ሙሉ ጊዜ ድጋፍ እናደርግልዎታለን እንዲሁም ሁለቱም ወገኖች እውነተኛ መግባባትና ተስማሚነት እንዲገነቡ እንረዳለን፣ በአላህ ፈቃድ።",
        "መረጃዎንና ምርጫዎችን ብቻ ያክሉ፣ መታወቂያዎንና ፎቶዎችን በደህንነት ይስቀሉ፣ ፕሮፋይልዎ ከተገመገመና ከነቃ በኋላ በግል ዳሽቦርድዎ በኩል ጉዞዎን ይጀምሩ።",
      ],
      imageAlt: "በሠርግ ቀናቸው ሙሽራና ሙሽሪት",
    },
  ],
  advantages: {
    title: "በዋትስአፕ በኩል የግል ፍለጋ አገልግሎትን ልዩ የሚያደርገው ምንድን ነው",
    items: [
      {
        title: "ወክለውዎት የሚደረግ የግል ፍለጋ",
        description:
          "በሺዎች የሚቆጠሩ ፕሮፋይሎችን በማሰስ ጊዜዎን አያባክኑ — ቡድናችን በከፍተኛ ጥንቃቄና ትክክለኛነት ሙሉውን የፍለጋ ሂደት ወክለውዎት ያካሂዳል።",
      },
      {
        title: "ልዩ፣ ያልታተሙ ምክሮች",
        description:
          "በመድረኩ ላይ ለሕዝብ የማይታዩ የግል ፕሮፋይሎችን እናገኛለን፣ ይህም ሰፋ ያለና ይበልጥ ተስማሚ አማራጮችን ይሰጥዎታል።",
      },
      {
        title: "ጓደኛ እስኪያገኙ ድረስ ተከታታይ ክትትል",
        description:
          "ሚናችን በምክር ብቻ አያበቃም — ትክክለኛውን ውሳኔ እስኪያደርጉ ድረስ በእያንዳንዱ ደረጃ ከእርስዎ ጋር ሆነን እንከታተላለን፣ በአላህ ፈቃድ።",
      },
      {
        title: "ሙሉ ግላዊነትና ሚስጥራዊነት",
        description:
          "በአገልግሎቱ ወቅት ሁሉም መረጃዎና የፕሮፋይል ዝርዝሮች ያለምንም ስምምነት በፍጹም ሚስጥራዊነት ይያዛሉ።",
      },
    ],
    note: {
      title: "የግል ተዛማጅነትና ድጋፍ",
      description:
        "አማካሪዎቻችን በዋትስአፕ በኩል በጥንቃቄ ከእርስዎ ጋር ይገናኛሉ፣ ፕሮፋይልዎን በቅርበት ያጠናሉ፣ ከዚያም ከሰፊ የመረጃ ቋትና ልዩ ፕሮፋይሎች ውስጥ ምርጥ ግጥሚያዎችን ይፈልጋሉ። ቡድኑ ከሌላኛው ወገን ጋር ግንኙነትንም ያካሂዳል እንዲሁም የተሻለውን ግጥሚያ ለማግኘት አመለካከቶችን ያገናኛል፣ በአላህ ፈቃድ።",
    },
    advisorAlt: "ከአባል ጋር አብሮ የሚጸልይ የዘፋአፍ አማካሪ",
    coupleAlt: "ከመስጊድ ፊት ለፊት የቆሙ ጥንዶች",
  },
  europe: {
    title: "ለአውሮፓ ነዋሪዎች የተለየ ጥቅም",
    description:
      "VIP አገልግሎት በአምስተርዳም በሚገኘው የዘፋአፍ ቢሮ ቀጥተኛ፣ ከሸሪዓ ጋር የሚስማማ ስብሰባዎችን የማድረግ አማራጭንም ያካትታል፣ ቁርጠኝነትን በሚያጠናክርና እውነተኛ ግጥሚያ የማግኘት እድልን በሚጨምር ደህንነቱ የተጠበቀና አክብሮት በተሞላበት አካባቢ።",
    cta: "VIP አገልግሎትን በዋትስአፕ በኩል ያስይዙ",
    galleryLabel: "በመላው አውሮፓ የሚገኙ የዘፋአፍ አባላት",
    memberAlt: "በአውሮፓ የሚገኙ የዘፋአፍ አባላት",
  },
};

const sv: VipCopy = {
  hero: {
    badge: "Med VIP via WhatsApp sparar du tid och möda",
    titleBefore: "Personlig Sökservice",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " via WhatsApp",
    description:
      "Letar du efter rätt livspartner men behöver verklig personlig hjälp istället för att söka på egen hand? Zefaafs Personliga Sökservice via WhatsApp är utformad för dig som vill ha en bekvämare och mer privat upplevelse — vårt specialiserade team sköter sökandet åt dig och kommunicerar direkt med dig via WhatsApp i varje steg av resan.",
    feeLabel: "Serviceavgift",
    price: "99 EUR",
    cta: "Börja nu via WhatsApp",
    imageAlt: "Ett par som går längs en lugn europeisk gata",
  },
  intro: {
    title: "Varför välja Personlig Sökservice via WhatsApp?",
    description:
      "Vissa människor menar allvar med äktenskap men har inte tillräckligt med tid, känner sig obekväma med att bläddra bland profiler själva, eller behöver helt enkelt en pålitlig guide vid sin sida på denna viktiga resa.",
  },
  details: [
    {
      title: "Sökandet efter Din Partner",
      bullets: [
        "Direkt, omedelbar kommunikation som sparar tid och möda.",
        "Genuina, noggrant övervägda rekommendationer anpassade för dig.",
      ],
      paragraphs: [
        "Varje steg sker smidigt via WhatsApp, utan komplicerade appar eller onödiga steg. Vårt team sköter hela sökandet åt dig, så att du slipper bläddra bland tusentals profiler eller vänta i det oändliga. Det handlar inte bara om automatisk matchning — vårt specialiserade team granskar noggrant din profil och presenterar de bästa alternativen som verkligen passar dig.",
      ],
      imageAlt: "Ett nygift par som står tillsammans utanför en moské",
    },
    {
      title: "Sökandet efter Din Partner",
      bullets: [
        "Fullständig Integritet & Bättre Förståelse Mellan Båda Parter",
        "Komplettera Din Profil & Påbörja Ditt Sökande",
      ],
      paragraphs: [
        "Dina uppgifter och din profil hanteras med fullständig konfidentialitet. Vi går längre än bara presentationer genom att stötta dig genom hela processen och hjälpa båda parter att bygga genuin förståelse och kompatibilitet, om Gud vill.",
        "Lägg helt enkelt till dina uppgifter och preferenser, ladda upp din legitimation och dina bilder på ett säkert sätt, och när din profil har granskats och aktiverats, påbörja din resa via din personliga instrumentpanel.",
      ],
      imageAlt: "En brud och brudgum på sin bröllopsdag",
    },
  ],
  advantages: {
    title: "Vad som utmärker Personlig Sökservice via WhatsApp",
    items: [
      {
        title: "Personligt sökande på dina vägnar",
        description:
          "Slösa inte din tid på att bläddra bland tusentals profiler — vårt team sköter hela sökprocessen åt dig med högsta nivå av omsorg och precision.",
      },
      {
        title: "Exklusiva, opublicerade rekommendationer",
        description:
          "Vi når privata profiler som inte är synliga för allmänheten på plattformen, vilket ger dig bredare och mer kompatibla alternativ.",
      },
      {
        title: "Kontinuerlig uppföljning tills du hittar en match",
        description:
          "Vår roll slutar inte vid rekommendationen — vi finns kvar vid din sida och följer upp varje steg tills du når rätt beslut, om Gud vill.",
      },
      {
        title: "Fullständig integritet och konfidentialitet",
        description:
          "Alla dina uppgifter och profildetaljer hanteras med absolut konfidentialitet under hela tjänsten, utan kompromisser.",
      },
    ],
    note: {
      title: "Personlig Matchning & Support",
      description:
        "Våra rådgivare kommunicerar noggrant med dig via WhatsApp, studerar din profil ingående och söker sedan efter de bästa matchningarna från en omfattande databas och exklusiva profiler. Teamet sköter också kommunikationen med den andra parten och överbryggar perspektiv för att nå bästa möjliga matchning, om Gud vill.",
    },
    advisorAlt: "En Zefaaf-rådgivare som ber tillsammans med en medlem",
    coupleAlt: "Ett par som står framför en moské",
  },
  europe: {
    title: "En särskild förmån för dig som bor i Europa",
    description:
      "VIP-tjänsten inkluderar även möjligheten till direkta, sharia-anpassade möten på Zefaafs kontor i Amsterdam, i en trygg och respektfull miljö som stärker allvaret och ökar chanserna till en genuin matchning.",
    cta: "Boka VIP-tjänsten via WhatsApp",
    galleryLabel: "Zefaaf-medlemmar runt om i Europa",
    memberAlt: "Zefaaf-medlemmar i Europa",
  },
};

const da: VipCopy = {
  hero: {
    badge: "Med VIP via WhatsApp sparer du tid og besvær",
    titleBefore: "Personlig Søgetjeneste",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " via WhatsApp",
    description:
      "Leder du efter den rette livspartner, men har brug for reel personlig hjælp i stedet for at søge alene? Zefaafs Personlige Søgetjeneste via WhatsApp er designet til dig, der ønsker en mere behagelig og privat oplevelse — vores specialiserede team varetager søgningen på dine vegne og kommunikerer direkte med dig via WhatsApp ved hvert trin i rejsen.",
    feeLabel: "Servicegebyr",
    price: "99 EUR",
    cta: "Start nu via WhatsApp",
    imageAlt: "Et par, der går ned ad en stille europæisk gade",
  },
  intro: {
    title: "Hvorfor vælge Personlig Søgetjeneste via WhatsApp?",
    description:
      "Nogle mennesker er seriøse omkring ægteskab, men har ikke nok tid, føler sig utilpasse ved selv at gennemse profiler, eller har blot brug for en pålidelig guide ved deres side på denne vigtige rejse.",
  },
  details: [
    {
      title: "Søgningen efter Din Partner",
      bullets: [
        "Direkte, øjeblikkelig kommunikation, der sparer dig tid og besvær.",
        "Ægte, omhyggeligt overvejede anbefalinger skræddersyet til dig.",
      ],
      paragraphs: [
        "Hvert trin foregår problemfrit via WhatsApp, uden komplicerede apps eller unødvendige trin. Vores team varetager hele søgningen for dig, så du ikke behøver at gennemse tusindvis af profiler eller vente i det uendelige. Det handler ikke blot om automatisk matchning — vores specialiserede team gennemgår omhyggeligt din profil og præsenterer de bedste muligheder, der virkelig passer til dig.",
      ],
      imageAlt: "Et nygift par, der står sammen uden for en moské",
    },
    {
      title: "Søgningen efter Din Partner",
      bullets: [
        "Fuld Privatliv & Bedre Forståelse Mellem Begge Parter",
        "Fuldfør Din Profil & Start Din Søgning",
      ],
      paragraphs: [
        "Dine data og din profil behandles med fuld fortrolighed. Vi går videre end blot introduktioner ved at støtte dig gennem hele processen og hjælpe begge parter med at opbygge ægte forståelse og kompatibilitet, om Gud vil.",
        "Tilføj blot dine oplysninger og præferencer, upload sikkert dit ID og dine billeder, og når din profil er gennemgået og aktiveret, kan du starte din rejse via dit personlige dashboard.",
      ],
      imageAlt: "En brud og brudgom på deres bryllupsdag",
    },
  ],
  advantages: {
    title: "Hvad der adskiller Personlig Søgetjeneste via WhatsApp",
    items: [
      {
        title: "Personlig søgning på dine vegne",
        description:
          "Spild ikke din tid på at gennemse tusindvis af profiler — vores team varetager hele søgeprocessen for dig med den højeste grad af omhu og præcision.",
      },
      {
        title: "Eksklusive, upublicerede anbefalinger",
        description:
          "Vi når ud til private profiler, der ikke er synlige for offentligheden på platformen, hvilket giver dig bredere og mere kompatible muligheder.",
      },
      {
        title: "Kontinuerlig opfølgning, indtil du finder en match",
        description:
          "Vores rolle slutter ikke med anbefalingen — vi bliver hos dig og følger op på hvert trin, indtil du når frem til den rette beslutning, om Gud vil.",
      },
      {
        title: "Fuld privatliv og fortrolighed",
        description:
          "Alle dine data og profiloplysninger behandles med absolut fortrolighed gennem hele tjenesten, uden kompromiser.",
      },
    ],
    note: {
      title: "Personlig Matchning & Support",
      description:
        "Vores rådgivere kommunikerer omhyggeligt med dig via WhatsApp, studerer din profil grundigt og søger derefter efter de bedste matches fra en omfattende database og eksklusive profiler. Teamet varetager også kommunikationen med den anden part og bygger bro mellem synspunkter for at opnå den bedst mulige match, om Gud vil.",
    },
    advisorAlt: "En Zefaaf-rådgiver, der beder sammen med et medlem",
    coupleAlt: "Et par, der står foran en moské",
  },
  europe: {
    title: "En særlig fordel for beboere i Europa",
    description:
      "VIP-tjenesten omfatter også muligheden for direkte, sharia-forenelige møder på Zefaafs kontor i Amsterdam, i et trygt og respektfuldt miljø, der styrker alvoren og øger chancerne for en ægte match.",
    cta: "Book VIP-tjenesten via WhatsApp",
    galleryLabel: "Zefaaf-medlemmer i hele Europa",
    memberAlt: "Zefaaf-medlemmer i Europa",
  },
};

const sq: VipCopy = {
  hero: {
    badge: "Me VIP përmes WhatsApp kurseni përpjekje dhe kohë",
    titleBefore: "Shërbimi i Kërkimit Personal",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " përmes WhatsApp",
    description:
      "Po kërkoni partnerin e duhur të jetës, por keni nevojë për ndihmë reale personale në vend që të kërkoni vetëm? Shërbimi i Kërkimit Personal përmes WhatsApp nga Zefaaf është krijuar për ata që duan një përvojë më komode dhe private — ekipi ynë i specializuar kryen kërkimin në emrin tuaj dhe komunikon drejtpërdrejt me ju përmes WhatsApp në çdo hap të udhëtimit.",
    feeLabel: "Tarifa e Shërbimit",
    price: "99 EUR",
    cta: "Filloni Tani përmes WhatsApp",
    imageAlt: "Një çift duke ecur në një rrugë të qetë evropiane",
  },
  intro: {
    title: "Pse të zgjidhni Shërbimin e Kërkimit Personal përmes WhatsApp?",
    description:
      "Disa njerëz janë seriozë për martesën, por nuk kanë kohë të mjaftueshme, nuk ndihen rehat duke shfletuar vetë profilet, ose thjesht kanë nevojë për një udhëzues të besueshëm pranë tyre në këtë udhëtim të rëndësishëm.",
  },
  details: [
    {
      title: "Kërkimi për Partnerin Tuaj",
      bullets: [
        "Komunikim i drejtpërdrejtë dhe i menjëhershëm që ju kursen kohë dhe përpjekje.",
        "Rekomandime reale, të menduara me kujdes dhe të përshtatura për ju.",
      ],
      paragraphs: [
        "Çdo hap ndodh pa probleme përmes WhatsApp, pa aplikacione të komplikuara apo hapa të panevojshëm. Ekipi ynë kryen të gjithë kërkimin për ju, kështu që nuk keni nevojë të shfletoni mijëra profile apo të prisni pafundësisht. Nuk bëhet fjalë vetëm për përputhje automatike — ekipi ynë i specializuar shqyrton me kujdes profilin tuaj dhe ju paraqet opsionet më të mira që ju përshtaten vërtet.",
      ],
      imageAlt: "Një çift i sapomartuar duke qëndruar bashkë jashtë një xhamie",
    },
    {
      title: "Kërkimi për Partnerin Tuaj",
      bullets: [
        "Privatësi e Plotë & Mirëkuptim më i Mirë Mes të Dyja Palëve",
        "Plotësoni Profilin Tuaj & Filloni Kërkimin Tuaj",
      ],
      paragraphs: [
        "Të dhënat dhe profili juaj trajtohen me konfidencialitet të plotë. Ne shkojmë përtej thjesht prezantimeve duke ju mbështetur gjatë gjithë procesit dhe duke ndihmuar të dyja palët të ndërtojnë mirëkuptim dhe përputhshmëri të vërtetë, in shaa Allah.",
        "Thjesht shtoni të dhënat dhe preferencat tuaja, ngarkoni në mënyrë të sigurt dokumentin e identitetit dhe fotot tuaja, dhe pasi profili juaj të shqyrtohet dhe aktivizohet, filloni udhëtimin tuaj përmes panelit tuaj personal.",
      ],
      imageAlt: "Një nuse dhe një dhëndër në ditën e dasmës së tyre",
    },
  ],
  advantages: {
    title: "Çfarë e dallon Shërbimin e Kërkimit Personal përmes WhatsApp",
    items: [
      {
        title: "Kërkim personal në emrin tuaj",
        description:
          "Mos humbisni kohën tuaj duke shfletuar mijëra profile — ekipi ynë kryen të gjithë procesin e kërkimit për ju me nivelin më të lartë të kujdesit dhe saktësisë.",
      },
      {
        title: "Rekomandime ekskluzive, të papublikuara",
        description:
          "Ne arrijmë profile private që nuk janë të dukshme për publikun në platformë, duke ju dhënë opsione më të gjera dhe më të përputhshme.",
      },
      {
        title: "Ndjekje e vazhdueshme derisa të gjeni një përputhje",
        description:
          "Roli ynë nuk përfundon me rekomandimin — ne qëndrojmë me ju dhe ndjekim çdo hap derisa të arrini vendimin e duhur, in shaa Allah.",
      },
      {
        title: "Privatësi dhe konfidencialitet i plotë",
        description:
          "Të gjitha të dhënat dhe detajet e profilit tuaj trajtohen me konfidencialitet absolut gjatë gjithë shërbimit, pa asnjë kompromis.",
      },
    ],
    note: {
      title: "Përputhje dhe Mbështetje e Personalizuar",
      description:
        "Këshilltarët tanë komunikojnë me kujdes me ju përmes WhatsApp, studiojnë nga afër profilin tuaj, më pas kërkojnë përputhjet më të mira nga një bazë e gjerë të dhënash dhe profile ekskluzive. Ekipi gjithashtu merret me komunikimin me palën tjetër dhe afron pikëpamjet për të arritur përputhjen më të mirë të mundshme, in shaa Allah.",
    },
    advisorAlt: "Një këshilltar i Zefaaf duke u falur së bashku me një anëtar",
    coupleAlt: "Një çift duke qëndruar përpara një xhamie",
  },
  europe: {
    title: "Një veçori speciale për banorët e Evropës",
    description:
      "Shërbimi VIP përfshin gjithashtu opsionin e takimeve të drejtpërdrejta, në përputhje me sheriatin, në zyrën e Zefaaf në Amsterdam, në një mjedis të sigurt dhe respektues që forcon seriozitetin dhe rrit shanset për një përputhje të vërtetë.",
    cta: "Rezervoni shërbimin VIP përmes WhatsApp",
    galleryLabel: "Anëtarët e Zefaaf në të gjithë Evropën",
    memberAlt: "Anëtarët e Zefaaf në Evropë",
  },
};

const uz: VipCopy = {
  hero: {
    badge: "WhatsApp orqali VIP bilan kuch va vaqtingizni tejaysiz",
    titleBefore: "Shaxsiy Qidiruv Xizmati",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " WhatsApp orqali",
    description:
      "To'g'ri hayot yo'ldoshini qidiryapsizmi, lekin yolg'iz qidirish o'rniga haqiqiy shaxsiy yordamga muhtojmisiz? Zefaafning WhatsApp orqali Shaxsiy Qidiruv Xizmati yanada qulay va maxfiy tajriba istaganlar uchun yaratilgan — bizning mutaxassis jamoamiz siz nomingizdan qidiruvni amalga oshiradi va sayohatning har bir bosqichida WhatsApp orqali siz bilan bevosita muloqot qiladi.",
    feeLabel: "Xizmat Narxi",
    price: "99 EUR",
    cta: "Hozir WhatsApp orqali Boshlang",
    imageAlt: "Tinch Yevropa ko'chasida yurgan er-xotin",
  },
  intro: {
    title: "Nima uchun WhatsApp orqali Shaxsiy Qidiruv Xizmatini tanlash kerak?",
    description:
      "Ba'zi odamlar nikoh masalasida jiddiy bo'lsalar-da, ularda yetarli vaqt yo'q, profillarni o'zlari ko'rib chiqishdan noqulaylik his qilishadi yoki bu muhim sayohatda ishonchli yo'l ko'rsatuvchiga muhtoj bo'lishadi.",
  },
  details: [
    {
      title: "Sizga Mos Hamroh Qidiruvi",
      bullets: [
        "Vaqtingiz va kuchingizni tejaydigan to'g'ridan-to'g'ri, tezkor muloqot.",
        "Siz uchun sinchiklab ko'rib chiqilgan, haqiqiy tavsiyalar.",
      ],
      paragraphs: [
        "Har bir bosqich murakkab ilovalar yoki keraksiz qadamlarsiz WhatsApp orqali muammosiz amalga oshadi. Jamoamiz siz uchun butun qidiruvni amalga oshiradi, shuning uchun sizga minglab profillarni ko'zdan kechirish yoki cheksiz kutish shart emas. Bu shunchaki avtomatik moslashtirish emas — mutaxassis jamoamiz profilingizni diqqat bilan ko'rib chiqadi va sizga chindan ham mos keladigan eng yaxshi variantlarni taqdim etadi.",
      ],
      imageAlt: "Masjid tashqarisida birga turgan yangi turmush qurgan er-xotin",
    },
    {
      title: "Sizga Mos Hamroh Qidiruvi",
      bullets: [
        "To'liq Maxfiylik va Ikki Tomon O'rtasida Yaxshiroq Tushunish",
        "Profilingizni To'ldiring va Qidiruvingizni Boshlang",
      ],
      paragraphs: [
        "Ma'lumotlaringiz va profilingiz to'liq maxfiylik bilan ishlanadi. Biz shunchaki tanishtirishdan oshib, butun jarayon davomida sizni qo'llab-quvvatlaymiz va ikkala tomonga chin haqiqiy tushunish va moslikni shakllantirishga yordam beramiz, inshaAllоh.",
        "Shunchaki ma'lumotlaringiz va afzalliklaringizni qo'shing, shaxsingizni tasdiqlovchi hujjat va suratlaringizni xavfsiz yuklang, profilingiz ko'rib chiqilib faollashtirilgandan so'ng shaxsiy boshqaruv panelingiz orqali sayohatingizni boshlang.",
      ],
      imageAlt: "To'y kunidagi kelin va kuyov",
    },
  ],
  advantages: {
    title: "WhatsApp orqali Shaxsiy Qidiruv Xizmatini nima ajratib turadi",
    items: [
      {
        title: "Sizning nomingizdan shaxsiy qidiruv",
        description:
          "Minglab profillarni ko'zdan kechirish uchun vaqtingizni sarflamang — jamoamiz eng yuqori darajadagi ehtiyotkorlik va aniqlik bilan butun qidiruv jarayonini siz uchun amalga oshiradi.",
      },
      {
        title: "Eksklyuziv, e'lon qilinmagan tavsiyalar",
        description:
          "Biz platformada ommaga ko'rinmaydigan shaxsiy profillarga kirish imkoniyatiga ega bo'lib, sizga kengroq va mosroq variantlarni taqdim etamiz.",
      },
      {
        title: "Hamrohingizni topguningizcha uzluksiz kuzatuv",
        description:
          "Bizning vazifamiz tavsiya bilan tugamaydi — to'g'ri qarorga kelguningizcha har bir bosqichda siz bilan bo'lamiz va kuzatib boramiz, inshaAllоh.",
      },
      {
        title: "To'liq maxfiylik va sirni saqlash",
        description:
          "Xizmat davomida barcha ma'lumotlaringiz va profil tafsilotlari hech qanday murosasiz mutlaq maxfiylik bilan ishlanadi.",
      },
    ],
    note: {
      title: "Shaxsiylashtirilgan Moslashtirish va Qo'llab-quvvatlash",
      description:
        "Maslahatchilarimiz WhatsApp orqali siz bilan ehtiyotkorlik bilan muloqot qiladi, profilingizni sinchiklab o'rganadi, so'ngra keng ma'lumotlar bazasi va eksklyuziv profillardan eng yaxshi moslikni qidiradi. Jamoa, shuningdek, boshqa tomon bilan muloqotni amalga oshiradi va imkon qadar eng yaxshi moslikka erishish uchun qarashlarni yaqinlashtiradi, inshaAllоh.",
    },
    advisorAlt: "A'zo bilan birga ibodat qilayotgan Zefaaf maslahatchisi",
    coupleAlt: "Masjid oldida turgan er-xotin",
  },
  europe: {
    title: "Yevropa aholisi uchun maxsus imkoniyat",
    description:
      "VIP xizmati, shuningdek, Amsterdamdagi Zefaaf ofisida jiddiylikni mustahkamlaydigan va haqiqiy moslik topish imkoniyatini oshiradigan xavfsiz va hurmatga sazovor muhitda, shariatga mos to'g'ridan-to'g'ri uchrashuvlar imkoniyatini ham o'z ichiga oladi.",
    cta: "VIP xizmatini WhatsApp orqali band qiling",
    galleryLabel: "Butun Yevropa bo'ylab Zefaaf a'zolari",
    memberAlt: "Yevropadagi Zefaaf a'zolari",
  },
};

const az: VipCopy = {
  hero: {
    badge: "WhatsApp vasitəsilə VIP ilə vaxt və səyinizə qənaət edin",
    titleBefore: "Şəxsi Axtarış Xidməti",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " WhatsApp vasitəsilə",
    description:
      "Doğru həyat yoldaşı axtarırsınız, lakin tək axtarmaq əvəzinə real şəxsi köməyə ehtiyacınız var? Zefaafın WhatsApp vasitəsilə Şəxsi Axtarış Xidməti daha rahat və məxfi təcrübə istəyənlər üçün hazırlanıb — ixtisaslaşmış komandamız sizin adınızdan axtarışı həyata keçirir və səyahətin hər addımında WhatsApp vasitəsilə birbaşa sizinlə əlaqə saxlayır.",
    feeLabel: "Xidmət Haqqı",
    price: "99 EUR",
    cta: "İndi WhatsApp vasitəsilə Başlayın",
    imageAlt: "Sakit Avropa küçəsində gəzən bir cütlük",
  },
  intro: {
    title: "Niyə WhatsApp vasitəsilə Şəxsi Axtarış Xidmətini seçməli?",
    description:
      "Bəzi insanlar evlilik məsələsində ciddidirlər, lakin kifayət qədər vaxtları yoxdur, profilləri özləri gözdən keçirməkdən narahat olurlar və ya bu vacib səyahətdə yanlarında etibarlı bir rəhbərə ehtiyac duyurlar.",
  },
  details: [
    {
      title: "Sizə Uyğun Tərəf-müqabil Axtarışı",
      bullets: [
        "Vaxtınıza və səyinizə qənaət edən birbaşa, ani ünsiyyət.",
        "Sizin üçün diqqətlə düşünülmüş həqiqi tövsiyələr.",
      ],
      paragraphs: [
        "Hər addım mürəkkəb tətbiqlər və ya lazımsız addımlar olmadan WhatsApp vasitəsilə problemsiz həyata keçirilir. Komandamız sizin üçün bütün axtarışı həyata keçirir, beləliklə minlərlə profili gözdən keçirmək və ya sonsuz gözləmək məcburiyyətində qalmırsınız. Bu sadəcə avtomatik uyğunlaşdırma deyil — ixtisaslaşmış komandamız profilinizi diqqətlə nəzərdən keçirir və sizə həqiqətən uyğun olan ən yaxşı variantları təqdim edir.",
      ],
      imageAlt: "Bir məscidin xaricində birlikdə dayanan yeni evlənmiş cütlük",
    },
    {
      title: "Sizə Uyğun Tərəf-müqabil Axtarışı",
      bullets: [
        "Tam Məxfilik və Hər İki Tərəf Arasında Daha Yaxşı Anlaşma",
        "Profilinizi Tamamlayın və Axtarışınıza Başlayın",
      ],
      paragraphs: [
        "Məlumatlarınız və profiliniz tam məxfiliklə işlənir. Biz sadə tanışlıqdan kənara çıxaraq, bütün proses boyunca sizi dəstəkləyirik və hər iki tərəfə həqiqi anlaşma və uyğunluq qurmağa kömək edirik, inşallah.",
        "Sadəcə məlumatlarınızı və seçimlərinizi əlavə edin, şəxsiyyət vəsiqənizi və şəkillərinizi təhlükəsiz şəkildə yükləyin, profiliniz nəzərdən keçirilib aktivləşdirildikdən sonra şəxsi idarə panelinizdən səyahətinizə başlayın.",
      ],
      imageAlt: "Toy günündə gəlin və bəy",
    },
  ],
  advantages: {
    title: "WhatsApp vasitəsilə Şəxsi Axtarış Xidmətini fərqləndirən nədir",
    items: [
      {
        title: "Sizin adınızdan şəxsi axtarış",
        description:
          "Minlərlə profili gözdən keçirməklə vaxtınızı itirməyin — komandamız ən yüksək diqqət və dəqiqliklə bütün axtarış prosesini sizin üçün həyata keçirir.",
      },
      {
        title: "Eksklüziv, dərc edilməmiş tövsiyələr",
        description:
          "Platformada ictimaiyyət üçün görünməyən şəxsi profillərə çatırıq, bu da sizə daha geniş və daha uyğun seçimlər təqdim edir.",
      },
      {
        title: "Tərəf-müqabil tapana qədər davamlı izləmə",
        description:
          "Bizim rolumuz tövsiyə ilə bitmir — doğru qərara gələnə qədər hər addımda sizinlə qalır və izləyirik, inşallah.",
      },
      {
        title: "Tam məxfilik və sirlilik",
        description:
          "Xidmət boyunca bütün məlumatlarınız və profil təfərrüatlarınız heç bir güzəştə yol vermədən mütləq məxfiliklə işlənir.",
      },
    ],
    note: {
      title: "Fərdiləşdirilmiş Uyğunlaşdırma və Dəstək",
      description:
        "Məsləhətçilərimiz WhatsApp vasitəsilə sizinlə diqqətlə əlaqə saxlayır, profilinizi yaxından araşdırır, sonra geniş məlumat bazası və eksklüziv profillərdən ən yaxşı uyğunluqları axtarır. Komanda həmçinin digər tərəflə əlaqəni həyata keçirir və mümkün olan ən yaxşı uyğunluğa çatmaq üçün baxışları yaxınlaşdırır, inşallah.",
    },
    advisorAlt: "Bir üzvlə birlikdə dua edən Zefaaf məsləhətçisi",
    coupleAlt: "Bir məscidin qarşısında dayanan cütlük",
  },
  europe: {
    title: "Avropa sakinləri üçün xüsusi imkan",
    description:
      "VIP xidməti, həmçinin Amsterdamdakı Zefaaf ofisində, ciddiliyi gücləndirən və həqiqi uyğunluq tapmaq şansını artıran təhlükəsiz və hörmətli mühitdə, şəriətə uyğun birbaşa görüşlər keçirmək seçimini də əhatə edir.",
    cta: "VIP xidmətini WhatsApp vasitəsilə sifariş edin",
    galleryLabel: "Bütün Avropada Zefaaf üzvləri",
    memberAlt: "Avropada Zefaaf üzvləri",
  },
};

const fil: VipCopy = {
  hero: {
    badge: "Sa VIP sa pamamagitan ng WhatsApp, makakatipid ka ng oras at pagsisikap",
    titleBefore: "Personal na Serbisyo sa Paghahanap",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " sa pamamagitan ng WhatsApp",
    description:
      "Naghahanap ka ba ng tamang kapareha sa buhay ngunit kailangan mo ng tunay na personal na tulong sa halip na maghanap nang mag-isa? Ang Personal na Serbisyo sa Paghahanap sa pamamagitan ng WhatsApp mula sa Zefaaf ay dinisenyo para sa mga gustong magkaroon ng mas komportable at pribadong karanasan — ang aming dalubhasang koponan ang naghahanap para sa iyo at direktang nakikipag-usap sa iyo sa WhatsApp sa bawat hakbang ng paglalakbay.",
    feeLabel: "Bayad sa Serbisyo",
    price: "99 EUR",
    cta: "Magsimula Ngayon sa WhatsApp",
    imageAlt: "Isang magkasintahan na naglalakad sa isang tahimik na kalye sa Europa",
  },
  intro: {
    title: "Bakit piliin ang Personal na Serbisyo sa Paghahanap sa pamamagitan ng WhatsApp?",
    description:
      "May mga taong seryoso sa pag-aasawa ngunit walang sapat na oras, hindi komportableng mag-browse ng mga profile nang mag-isa, o kailangan lamang ng isang mapagkakatiwalaang gabay sa tabi nila sa mahalagang paglalakbay na ito.",
  },
  details: [
    {
      title: "Ang Paghahanap ng Iyong Kapareha",
      bullets: [
        "Direkta at agarang komunikasyon na nagtitipid ng oras at pagsisikap.",
        "Tunay, maingat na isinasaalang-alang na mga rekomendasyon na iniayon para sa iyo.",
      ],
      paragraphs: [
        "Bawat hakbang ay maayos na nagaganap sa pamamagitan ng WhatsApp, walang komplikadong app o hindi kinakailangang mga hakbang. Ang aming koponan ang bahala sa buong paghahanap para sa iyo, kaya hindi mo na kailangang mag-browse ng libu-libong profile o maghintay nang walang hanggan. Hindi ito basta-basta automated matching — maingat na sinusuri ng aming dalubhasang koponan ang iyong profile at inihaharap sa iyo ang pinakamahusay na mga opsyon na talagang bagay sa iyo.",
      ],
      imageAlt: "Isang bagong kasal na mag-asawa na magkasamang nakatayo sa labas ng isang mosque",
    },
    {
      title: "Ang Paghahanap ng Iyong Kapareha",
      bullets: [
        "Kumpletong Privacy at Mas Mahusay na Pag-unawa sa Pagitan ng Dalawang Panig",
        "Kumpletuhin ang Iyong Profile at Simulan ang Iyong Paghahanap",
      ],
      paragraphs: [
        "Ang iyong data at profile ay pinangangasiwaan nang may kumpletong kompidensyalidad. Higit pa kami sa simpleng pagpapakilala — sinasamahan ka namin sa buong proseso at tinutulungan ang dalawang panig na bumuo ng tunay na pag-unawa at pagkakatugma, kung loloobin ng Diyos.",
        "Idagdag lamang ang iyong mga detalye at kagustuhan, ligtas na i-upload ang iyong ID at mga larawan, at kapag ang iyong profile ay nasuri na at na-activate, simulan ang iyong paglalakbay sa iyong personal na dashboard.",
      ],
      imageAlt: "Isang nobya at nobyo sa kanilang araw ng kasal",
    },
  ],
  advantages: {
    title: "Ano ang nagpapatangi sa Personal na Serbisyo sa Paghahanap sa pamamagitan ng WhatsApp",
    items: [
      {
        title: "Personal na paghahanap sa ngalan mo",
        description:
          "Huwag sayangin ang iyong oras sa pag-browse ng libu-libong profile — ang aming koponan ang bahala sa buong proseso ng paghahanap para sa iyo nang may pinakamataas na antas ng pag-aalaga at kawastuhan.",
      },
      {
        title: "Eksklusibo, hindi nailathalang mga rekomendasyon",
        description:
          "Nakakarating kami sa mga pribadong profile na hindi nakikita ng publiko sa platform, na nagbibigay sa iyo ng mas malawak at mas tugmang mga opsyon.",
      },
      {
        title: "Tuluy-tuloy na follow-up hanggang sa makahanap ka ng kapareha",
        description:
          "Hindi natatapos ang aming papel sa rekomendasyon — nananatili kami sa iyong tabi at sinusubaybayan ang bawat hakbang hanggang sa marating mo ang tamang desisyon, kung loloobin ng Diyos.",
      },
      {
        title: "Kumpletong privacy at kompidensyalidad",
        description:
          "Ang lahat ng iyong data at detalye ng profile ay pinangangasiwaan nang may ganap na kompidensyalidad sa buong serbisyo, nang walang kompromiso.",
      },
    ],
    note: {
      title: "Personalized na Pagtutugma at Suporta",
      description:
        "Maingat na nakikipag-usap sa iyo ang aming mga tagapayo sa pamamagitan ng WhatsApp, maingat na pinag-aaralan ang iyong profile, at pagkatapos ay naghahanap ng pinakamahusay na mga tugma mula sa isang malawak na database at eksklusibong mga profile. Inaasikaso rin ng koponan ang komunikasyon sa kabilang panig at pinag-uugnay ang mga pananaw upang marating ang pinakamahusay na posibleng tugma, kung loloobin ng Diyos.",
    },
    advisorAlt: "Isang tagapayo ng Zefaaf na nananalangin kasama ang isang miyembro",
    coupleAlt: "Isang magkasintahan na nakatayo sa harap ng isang mosque",
  },
  europe: {
    title: "Isang espesyal na tampok para sa mga residente ng Europa",
    description:
      "Kasama rin sa serbisyong VIP ang opsyon ng direkta, alinsunod-sa-Sharia na mga pagpupulong sa opisina ng Zefaaf sa Amsterdam, sa isang ligtas at magalang na kapaligiran na nagpapalakas ng seryosidad at nagpapataas ng tsansa para sa isang tunay na tugma.",
    cta: "I-book ang serbisyong VIP sa pamamagitan ng WhatsApp",
    galleryLabel: "Mga miyembro ng Zefaaf sa buong Europa",
    memberAlt: "Mga miyembro ng Zefaaf sa Europa",
  },
};

const hi: VipCopy = {
  hero: {
    badge: "व्हाट्सएप के ज़रिए VIP के साथ अपना समय और मेहनत बचाएं",
    titleBefore: "व्यक्तिगत खोज सेवा",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " व्हाट्सएप के ज़रिए",
    description:
      "क्या आप सही जीवनसाथी की तलाश में हैं लेकिन अकेले खोजने के बजाय वास्तविक व्यक्तिगत सहायता चाहते हैं? ज़ेफ़ाफ़ की व्हाट्सएप के ज़रिए व्यक्तिगत खोज सेवा उन लोगों के लिए बनाई गई है जो अधिक आरामदायक और निजी अनुभव चाहते हैं — हमारी विशेषज्ञ टीम आपकी ओर से खोज करती है और यात्रा के हर कदम पर व्हाट्सएप के माध्यम से सीधे आपसे संपर्क करती है।",
    feeLabel: "सेवा शुल्क",
    price: "99 यूरो",
    cta: "अभी व्हाट्सएप के ज़रिए शुरू करें",
    imageAlt: "एक शांत यूरोपीय सड़क पर टहलता हुआ जोड़ा",
  },
  intro: {
    title: "व्हाट्सएप के ज़रिए व्यक्तिगत खोज सेवा क्यों चुनें?",
    description:
      "कुछ लोग विवाह को लेकर गंभीर होते हैं लेकिन उनके पास पर्याप्त समय नहीं होता, वे स्वयं प्रोफाइल देखने में सहज महसूस नहीं करते, या उन्हें बस इस महत्वपूर्ण यात्रा में अपने साथ एक भरोसेमंद मार्गदर्शक की आवश्यकता होती है।",
  },
  details: [
    {
      title: "आपके लिए उपयुक्त साथी की खोज",
      bullets: [
        "सीधा और तत्काल संपर्क जो आपका समय और मेहनत बचाता है।",
        "आपके लिए ध्यानपूर्वक विचार की गई वास्तविक सिफारिशें।",
      ],
      paragraphs: [
        "हर कदम बिना किसी जटिल ऐप या अनावश्यक चरण के व्हाट्सएप के माध्यम से सहजता से पूरा होता है। हमारी टीम आपकी पूरी खोज संभालती है, ताकि आपको हज़ारों प्रोफाइल देखने या अनिश्चितकाल तक इंतज़ार करने की ज़रूरत न पड़े। यह केवल स्वचालित मिलान नहीं है — हमारी विशेषज्ञ टीम आपकी प्रोफाइल की सावधानीपूर्वक समीक्षा करती है और आपके लिए वास्तव में उपयुक्त सर्वोत्तम विकल्प प्रस्तुत करती है।",
      ],
      imageAlt: "एक मस्जिद के बाहर साथ खड़ा नवविवाहित जोड़ा",
    },
    {
      title: "आपके लिए उपयुक्त साथी की खोज",
      bullets: [
        "पूर्ण गोपनीयता और दोनों पक्षों के बीच बेहतर समझ",
        "अपनी प्रोफाइल पूरी करें और अपनी खोज शुरू करें",
      ],
      paragraphs: [
        "आपका डेटा और प्रोफाइल पूर्ण गोपनीयता के साथ संभाला जाता है। हम केवल परिचय कराने से आगे बढ़कर पूरी प्रक्रिया के दौरान आपका साथ देते हैं और दोनों पक्षों को वास्तविक समझ और अनुकूलता बनाने में मदद करते हैं, इंशाअल्लाह।",
        "बस अपनी जानकारी और प्राथमिकताएं जोड़ें, अपनी पहचान और तस्वीरें सुरक्षित रूप से अपलोड करें, और प्रोफाइल की समीक्षा तथा सक्रियण के बाद अपने व्यक्तिगत डैशबोर्ड के माध्यम से अपनी यात्रा शुरू करें।",
      ],
      imageAlt: "शादी के दिन दुल्हन और दूल्हा",
    },
  ],
  advantages: {
    title: "व्हाट्सएप के ज़रिए व्यक्तिगत खोज सेवा को क्या अलग बनाता है",
    items: [
      {
        title: "आपकी ओर से व्यक्तिगत खोज",
        description:
          "हज़ारों प्रोफाइल देखने में अपना समय बर्बाद न करें — हमारी टीम उच्चतम स्तर की सावधानी और सटीकता के साथ पूरी खोज प्रक्रिया आपके लिए संभालती है।",
      },
      {
        title: "विशेष, अप्रकाशित सिफारिशें",
        description:
          "हम ऐसे निजी प्रोफाइल तक पहुंचते हैं जो प्लेटफ़ॉर्म पर आम जनता को दिखाई नहीं देते, जिससे आपको व्यापक और अधिक अनुकूल विकल्प मिलते हैं।",
      },
      {
        title: "जब तक आपको साथी न मिले, निरंतर फ़ॉलो-अप",
        description:
          "हमारी भूमिका सिफारिश पर समाप्त नहीं होती — जब तक आप सही निर्णय तक नहीं पहुंचते, हम हर कदम पर आपके साथ रहते हैं और फ़ॉलो-अप करते हैं, इंशाअल्लाह।",
      },
      {
        title: "पूर्ण गोपनीयता और निजता",
        description:
          "सेवा के दौरान आपका सारा डेटा और प्रोफाइल विवरण बिना किसी समझौते के पूर्ण गोपनीयता के साथ संभाला जाता है।",
      },
    ],
    note: {
      title: "व्यक्तिगत मिलान और सहायता",
      description:
        "हमारे सलाहकार व्हाट्सएप के ज़रिए ध्यानपूर्वक आपसे संपर्क करते हैं, आपकी प्रोफाइल का बारीकी से अध्ययन करते हैं, फिर एक व्यापक डेटाबेस और विशेष प्रोफाइलों में से सर्वोत्तम मिलान खोजते हैं। टीम दूसरे पक्ष के साथ संपर्क भी संभालती है और सर्वोत्तम संभव मिलान तक पहुंचने के लिए दृष्टिकोणों के बीच सामंजस्य बिठाती है, इंशाअल्लाह।",
    },
    advisorAlt: "एक सदस्य के साथ प्रार्थना करता ज़ेफ़ाफ़ सलाहकार",
    coupleAlt: "एक मस्जिद के सामने खड़ा जोड़ा",
  },
  europe: {
    title: "यूरोप के निवासियों के लिए एक विशेष सुविधा",
    description:
      "VIP सेवा में एम्स्टर्डम स्थित ज़ेफ़ाफ़ कार्यालय में सीधी, शरिया-अनुरूप मुलाकातों का विकल्प भी शामिल है, एक सुरक्षित और सम्मानजनक वातावरण में जो गंभीरता को मजबूत करता है और वास्तविक मिलान की संभावनाओं को बढ़ाता है।",
    cta: "व्हाट्सएप के ज़रिए VIP सेवा बुक करें",
    galleryLabel: "पूरे यूरोप में ज़ेफ़ाफ़ के सदस्य",
    memberAlt: "यूरोप में ज़ेफ़ाफ़ के सदस्य",
  },
};

const kk: VipCopy = {
  hero: {
    badge: "WhatsApp арқылы VIP қызметімен күш пен уақытыңызды үнемдейсіз",
    titleBefore: "Жеке Іздеу Қызметі",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " WhatsApp арқылы",
    description:
      "Дұрыс өмірлік серігіңізді іздеп жүрсіз бе, бірақ жалғыз іздеудің орнына нағыз жеке көмек қажет пе? Zefaaf-тың WhatsApp арқылы Жеке Іздеу Қызметі ыңғайлырақ және құпия тәжірибе қалайтындар үшін жасалған — біздің мамандандырылған топ сіздің атыңыздан іздеуді жүзеге асырады және саяхаттың әр кезеңінде WhatsApp арқылы сізбен тікелей байланысады.",
    feeLabel: "Қызмет Ақысы",
    price: "99 EUR",
    cta: "Қазір WhatsApp арқылы бастаңыз",
    imageAlt: "Тыныш еуропалық көшеде келе жатқан жұп",
  },
  intro: {
    title: "Неге WhatsApp арқылы Жеке Іздеу Қызметін таңдау керек?",
    description:
      "Кейбір адамдар некеге байыпты қараса да, жеткілікті уақыты жоқ, профильдерді өздері қарауда ыңғайсыздық сезінеді немесе осы маңызды сапарда сенімді жол бастаушыны қажет етеді.",
  },
  details: [
    {
      title: "Сізге сай серігіңізді іздеу",
      bullets: [
        "Уақытыңыз бен күшіңізді үнемдейтін тікелей, лезде байланыс.",
        "Сіз үшін мұқият қаралған нағыз ұсыныстар.",
      ],
      paragraphs: [
        "Әр қадам күрделі қосымшаларсыз немесе қажетсіз әрекеттерсіз WhatsApp арқылы тегіс өтеді. Топымыз сіз үшін іздеудің барлығын жүзеге асырады, сондықтан мыңдаған профильді қарап шығудың немесе шексіз күтудің қажеті жоқ. Бұл жай ғана автоматты сәйкестендіру емес — мамандандырылған топымыз профиліңізді мұқият қарап шығып, сізге шынымен сай келетін ең жақсы нұсқаларды ұсынады.",
      ],
      imageAlt: "Мешіттің сыртында бірге тұрған жаңа некелескен жұп",
    },
    {
      title: "Сізге сай серігіңізді іздеу",
      bullets: [
        "Толық Құпиялылық және Екі Тарап Арасындағы Жақсырақ Түсіністік",
        "Профиліңізді Толтырыңыз және Іздеуді Бастаңыз",
      ],
      paragraphs: [
        "Деректеріңіз бен профиліңіз толық құпиялылықпен өңделеді. Біз жай таныстырудан асып, бүкіл процесс бойы сізді қолдаймыз және екі тарапқа да шынайы түсіністік пен үйлесімділік құруға көмектесеміз, иншаАллах.",
        "Жай ғана деректеріңіз бен қалауыңызды қосыңыз, жеке куәлігіңіз бен фотосуреттеріңізді қауіпсіз жүктеңіз, профиліңіз қаралып, белсендірілгеннен кейін жеке бақылау тақтаңыз арқылы сапарыңызды бастаңыз.",
      ],
      imageAlt: "Той күнінде келін мен күйеу жігіт",
    },
  ],
  advantages: {
    title: "WhatsApp арқылы Жеке Іздеу Қызметін ерекшелейтіні не",
    items: [
      {
        title: "Сіздің атыңыздан жеке іздеу",
        description:
          "Мыңдаған профильді қарап шығуға уақытыңызды жоғалтпаңыз — топымыз ең жоғары деңгейдегі мұқияттылық пен дәлдікпен бүкіл іздеу процесін сіз үшін жүзеге асырады.",
      },
      {
        title: "Айрықша, жарияланбаған ұсыныстар",
        description:
          "Біз платформада көпшілікке көрінбейтін жеке профильдерге қол жеткіземіз, бұл сізге кеңірек және сәйкесірек нұсқалар береді.",
      },
      {
        title: "Серігіңізді тапқанша үздіксіз қадағалау",
        description:
          "Біздің рөліміз ұсыныспен аяқталмайды — дұрыс шешімге келгенше әр қадамда сізбен боламыз және қадағалаймыз, иншаАллах.",
      },
      {
        title: "Толық құпиялылық және жасырындылық",
        description:
          "Қызмет барысында барлық деректеріңіз бен профиль мәліметтері ешбір ымыраға келместен толық құпиялылықпен өңделеді.",
      },
    ],
    note: {
      title: "Жекелендірілген Сәйкестендіру және Қолдау",
      description:
        "Кеңесшілеріміз WhatsApp арқылы сізбен мұқият байланысады, профиліңізді жан-жақты зерттейді, содан кейін кең мәліметтер базасы мен айрықша профильдерден ең жақсы сәйкестіктерді іздейді. Топ сонымен қатар екінші тараппен байланысты жүзеге асырады және мүмкін болатын ең жақсы сәйкестікке жету үшін көзқарастарды жақындастырады, иншаАллах.",
    },
    advisorAlt: "Мүшемен бірге дұға етіп жатқан Zefaaf кеңесшісі",
    coupleAlt: "Мешіттің алдында тұрған жұп",
  },
  europe: {
    title: "Еуропа тұрғындары үшін ерекше мүмкіндік",
    description:
      "VIP қызметі сонымен қатар Амстердамдағы Zefaaf кеңсесінде тікелей, шариғатқа сай кездесулер өткізу мүмкіндігін де қамтиды, бұл байыптылықты нығайтатын және нағыз сәйкестік табу мүмкіндігін арттыратын қауіпсіз әрі сыйластық ортада өтеді.",
    cta: "VIP қызметін WhatsApp арқылы брондаңыз",
    galleryLabel: "Бүкіл Еуропадағы Zefaaf мүшелері",
    memberAlt: "Еуропадағы Zefaaf мүшелері",
  },
};

const ms: VipCopy = {
  hero: {
    badge: "Dengan VIP melalui WhatsApp, jimatkan usaha dan masa anda",
    titleBefore: "Perkhidmatan Carian Peribadi",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " melalui WhatsApp",
    description:
      "Sedang mencari pasangan hidup yang sesuai tetapi memerlukan bantuan peribadi yang sebenar berbanding mencari sendirian? Perkhidmatan Carian Peribadi melalui WhatsApp daripada Zefaaf direka untuk mereka yang mahukan pengalaman yang lebih selesa dan peribadi — pasukan pakar kami menguruskan carian bagi pihak anda dan berkomunikasi terus dengan anda melalui WhatsApp pada setiap peringkat perjalanan.",
    feeLabel: "Bayaran Perkhidmatan",
    price: "99 EUR",
    cta: "Mula Sekarang melalui WhatsApp",
    imageAlt: "Sepasang kekasih berjalan di jalan Eropah yang tenang",
  },
  intro: {
    title: "Mengapa memilih Perkhidmatan Carian Peribadi melalui WhatsApp?",
    description:
      "Sesetengah orang serius tentang perkahwinan tetapi tidak mempunyai masa yang mencukupi, berasa tidak selesa melayari profil sendiri, atau hanya memerlukan pembimbing yang dipercayai di sisi mereka dalam perjalanan penting ini.",
  },
  details: [
    {
      title: "Carian Pasangan Anda",
      bullets: [
        "Komunikasi terus dan segera yang menjimatkan masa dan usaha anda.",
        "Cadangan sebenar yang dipertimbangkan dengan teliti dan disesuaikan untuk anda.",
      ],
      paragraphs: [
        "Setiap langkah berlaku dengan lancar melalui WhatsApp, tanpa aplikasi yang rumit atau langkah yang tidak perlu. Pasukan kami menguruskan keseluruhan carian bagi pihak anda, jadi anda tidak perlu melayari beribu-ribu profil atau menunggu tanpa henti. Ini bukan sekadar pemadanan automatik — pasukan pakar kami menyemak profil anda dengan teliti dan menawarkan pilihan terbaik yang benar-benar sesuai untuk anda.",
      ],
      imageAlt: "Pasangan yang baru berkahwin berdiri bersama di luar sebuah masjid",
    },
    {
      title: "Carian Pasangan Anda",
      bullets: [
        "Privasi Sepenuhnya & Persefahaman yang Lebih Baik Antara Kedua-dua Pihak",
        "Lengkapkan Profil Anda & Mulakan Carian Anda",
      ],
      paragraphs: [
        "Data dan profil anda dikendalikan dengan kerahsiaan sepenuhnya. Kami melangkaui sekadar memperkenalkan dengan menyokong anda sepanjang proses dan membantu kedua-dua pihak membina persefahaman dan keserasian yang tulen, insya-Allah.",
        "Cukup tambah butiran dan keutamaan anda, muat naik dokumen pengenalan diri dan gambar anda dengan selamat, dan setelah profil anda disemak dan diaktifkan, mulakan perjalanan anda melalui papan pemuka peribadi anda.",
      ],
      imageAlt: "Pengantin perempuan dan lelaki pada hari perkahwinan mereka",
    },
  ],
  advantages: {
    title: "Apa yang membezakan Perkhidmatan Carian Peribadi melalui WhatsApp",
    items: [
      {
        title: "Carian peribadi bagi pihak anda",
        description:
          "Jangan bazirkan masa anda melayari beribu-ribu profil — pasukan kami menguruskan keseluruhan proses carian bagi pihak anda dengan tahap ketelitian dan ketepatan yang paling tinggi.",
      },
      {
        title: "Cadangan eksklusif yang tidak diterbitkan",
        description:
          "Kami mencapai profil peribadi yang tidak kelihatan kepada orang ramai di platform, memberikan anda pilihan yang lebih luas dan lebih sesuai.",
      },
      {
        title: "Susulan berterusan sehingga anda menemui pasangan",
        description:
          "Peranan kami tidak berakhir pada cadangan — kami kekal bersama anda dan membuat susulan pada setiap langkah sehingga anda mencapai keputusan yang tepat, insya-Allah.",
      },
      {
        title: "Privasi dan kerahsiaan sepenuhnya",
        description:
          "Semua data dan butiran profil anda dikendalikan dengan kerahsiaan mutlak sepanjang perkhidmatan, tanpa sebarang kompromi.",
      },
    ],
    note: {
      title: "Pemadanan & Sokongan Diperibadikan",
      description:
        "Penasihat kami berkomunikasi dengan teliti bersama anda melalui WhatsApp, mengkaji profil anda dengan mendalam, kemudian mencari padanan terbaik daripada pangkalan data yang luas dan profil eksklusif. Pasukan juga menguruskan komunikasi dengan pihak yang satu lagi dan merapatkan perspektif untuk mencapai padanan terbaik yang mungkin, insya-Allah.",
    },
    advisorAlt: "Seorang penasihat Zefaaf bersolat bersama seorang ahli",
    coupleAlt: "Sepasang kekasih berdiri di hadapan sebuah masjid",
  },
  europe: {
    title: "Ciri istimewa untuk penduduk Eropah",
    description:
      "Perkhidmatan VIP turut merangkumi pilihan pertemuan terus yang mematuhi Syariah di pejabat Zefaaf di Amsterdam, dalam persekitaran yang selamat dan penuh hormat yang mengukuhkan keseriusan dan meningkatkan peluang untuk padanan yang tulen.",
    cta: "Tempah perkhidmatan VIP melalui WhatsApp",
    galleryLabel: "Ahli Zefaaf di seluruh Eropah",
    memberAlt: "Ahli Zefaaf di Eropah",
  },
};

const pa: VipCopy = {
  hero: {
    badge: "ਵਟਸਐਪ ਰਾਹੀਂ VIP ਨਾਲ ਆਪਣੀ ਮਿਹਨਤ ਅਤੇ ਸਮਾਂ ਬਚਾਓ",
    titleBefore: "ਨਿੱਜੀ ਖੋਜ ਸੇਵਾ",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " ਵਟਸਐਪ ਰਾਹੀਂ",
    description:
      "ਕੀ ਤੁਸੀਂ ਸਹੀ ਜੀਵਨ ਸਾਥੀ ਦੀ ਭਾਲ ਵਿੱਚ ਹੋ ਪਰ ਇਕੱਲੇ ਖੋਜਣ ਦੀ ਬਜਾਏ ਅਸਲ ਨਿੱਜੀ ਮਦਦ ਚਾਹੁੰਦੇ ਹੋ? ਜ਼ੇਫ਼ਾਫ਼ ਦੀ ਵਟਸਐਪ ਰਾਹੀਂ ਨਿੱਜੀ ਖੋਜ ਸੇਵਾ ਉਹਨਾਂ ਲੋਕਾਂ ਲਈ ਤਿਆਰ ਕੀਤੀ ਗਈ ਹੈ ਜੋ ਵਧੇਰੇ ਆਰਾਮਦਾਇਕ ਅਤੇ ਨਿੱਜੀ ਅਨੁਭਵ ਚਾਹੁੰਦੇ ਹਨ — ਸਾਡੀ ਮਾਹਿਰ ਟੀਮ ਤੁਹਾਡੀ ਤਰਫ਼ੋਂ ਖੋਜ ਕਰਦੀ ਹੈ ਅਤੇ ਸਫ਼ਰ ਦੇ ਹਰ ਕਦਮ 'ਤੇ ਵਟਸਐਪ ਰਾਹੀਂ ਸਿੱਧਾ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਦੀ ਹੈ।",
    feeLabel: "ਸੇਵਾ ਫੀਸ",
    price: "99 ਯੂਰੋ",
    cta: "ਹੁਣੇ ਵਟਸਐਪ ਰਾਹੀਂ ਸ਼ੁਰੂ ਕਰੋ",
    imageAlt: "ਇੱਕ ਸ਼ਾਂਤ ਯੂਰਪੀ ਗਲੀ ਵਿੱਚ ਸੈਰ ਕਰਦਾ ਜੋੜਾ",
  },
  intro: {
    title: "ਵਟਸਐਪ ਰਾਹੀਂ ਨਿੱਜੀ ਖੋਜ ਸੇਵਾ ਕਿਉਂ ਚੁਣੀਏ?",
    description:
      "ਕੁਝ ਲੋਕ ਵਿਆਹ ਬਾਰੇ ਗੰਭੀਰ ਹੁੰਦੇ ਹਨ ਪਰ ਉਹਨਾਂ ਕੋਲ ਲੋੜੀਂਦਾ ਸਮਾਂ ਨਹੀਂ ਹੁੰਦਾ, ਖੁਦ ਪ੍ਰੋਫਾਈਲ ਵੇਖਣ ਵਿੱਚ ਸਹਿਜ ਮਹਿਸੂਸ ਨਹੀਂ ਕਰਦੇ, ਜਾਂ ਬਸ ਇਸ ਮਹੱਤਵਪੂਰਨ ਸਫ਼ਰ ਵਿੱਚ ਆਪਣੇ ਨਾਲ ਇੱਕ ਭਰੋਸੇਯੋਗ ਮਾਰਗਦਰਸ਼ਕ ਚਾਹੁੰਦੇ ਹਨ।",
  },
  details: [
    {
      title: "ਤੁਹਾਡੇ ਲਈ ਢੁਕਵੇਂ ਸਾਥੀ ਦੀ ਖੋਜ",
      bullets: [
        "ਸਿੱਧਾ ਅਤੇ ਤੁਰੰਤ ਸੰਪਰਕ ਜੋ ਤੁਹਾਡਾ ਸਮਾਂ ਅਤੇ ਮਿਹਨਤ ਬਚਾਉਂਦਾ ਹੈ।",
        "ਤੁਹਾਡੇ ਲਈ ਧਿਆਨ ਨਾਲ ਵਿਚਾਰੀਆਂ ਗਈਆਂ ਅਸਲ ਸਿਫਾਰਸ਼ਾਂ।",
      ],
      paragraphs: [
        "ਹਰ ਕਦਮ ਬਿਨਾਂ ਕਿਸੇ ਗੁੰਝਲਦਾਰ ਐਪ ਜਾਂ ਬੇਲੋੜੇ ਕਦਮਾਂ ਦੇ ਵਟਸਐਪ ਰਾਹੀਂ ਸੁਚਾਰੂ ਢੰਗ ਨਾਲ ਹੁੰਦਾ ਹੈ। ਸਾਡੀ ਟੀਮ ਤੁਹਾਡੀ ਪੂਰੀ ਖੋਜ ਸੰਭਾਲਦੀ ਹੈ, ਤਾਂ ਜੋ ਤੁਹਾਨੂੰ ਹਜ਼ਾਰਾਂ ਪ੍ਰੋਫਾਈਲ ਵੇਖਣ ਜਾਂ ਬੇਅੰਤ ਇੰਤਜ਼ਾਰ ਕਰਨ ਦੀ ਲੋੜ ਨਾ ਪਵੇ। ਇਹ ਸਿਰਫ਼ ਆਟੋਮੈਟਿਕ ਮੈਚਿੰਗ ਨਹੀਂ ਹੈ — ਸਾਡੀ ਮਾਹਿਰ ਟੀਮ ਤੁਹਾਡੀ ਪ੍ਰੋਫਾਈਲ ਦੀ ਧਿਆਨ ਨਾਲ ਸਮੀਖਿਆ ਕਰਦੀ ਹੈ ਅਤੇ ਤੁਹਾਡੇ ਲਈ ਸੱਚਮੁੱਚ ਢੁਕਵੇਂ ਸਭ ਤੋਂ ਵਧੀਆ ਵਿਕਲਪ ਪੇਸ਼ ਕਰਦੀ ਹੈ।",
      ],
      imageAlt: "ਇੱਕ ਮਸਜਿਦ ਦੇ ਬਾਹਰ ਇਕੱਠੇ ਖੜ੍ਹਾ ਨਵ-ਵਿਆਹਿਆ ਜੋੜਾ",
    },
    {
      title: "ਤੁਹਾਡੇ ਲਈ ਢੁਕਵੇਂ ਸਾਥੀ ਦੀ ਖੋਜ",
      bullets: [
        "ਪੂਰੀ ਗੁਪਤਤਾ ਅਤੇ ਦੋਵਾਂ ਧਿਰਾਂ ਵਿਚਕਾਰ ਬਿਹਤਰ ਸਮਝ",
        "ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਪੂਰੀ ਕਰੋ ਅਤੇ ਆਪਣੀ ਖੋਜ ਸ਼ੁਰੂ ਕਰੋ",
      ],
      paragraphs: [
        "ਤੁਹਾਡਾ ਡਾਟਾ ਅਤੇ ਪ੍ਰੋਫਾਈਲ ਪੂਰੀ ਗੁਪਤਤਾ ਨਾਲ ਸੰਭਾਲੇ ਜਾਂਦੇ ਹਨ। ਅਸੀਂ ਸਿਰਫ਼ ਜਾਣ-ਪਛਾਣ ਕਰਵਾਉਣ ਤੋਂ ਅੱਗੇ ਵਧ ਕੇ ਪੂਰੀ ਪ੍ਰਕਿਰਿਆ ਦੌਰਾਨ ਤੁਹਾਡਾ ਸਾਥ ਦਿੰਦੇ ਹਾਂ ਅਤੇ ਦੋਵਾਂ ਧਿਰਾਂ ਨੂੰ ਅਸਲ ਸਮਝ ਅਤੇ ਅਨੁਕੂਲਤਾ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ, ਇੰਸ਼ਾ-ਅੱਲਾਹ।",
        "ਬਸ ਆਪਣੀ ਜਾਣਕਾਰੀ ਅਤੇ ਤਰਜੀਹਾਂ ਸ਼ਾਮਲ ਕਰੋ, ਆਪਣੀ ਪਛਾਣ ਅਤੇ ਤਸਵੀਰਾਂ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਅੱਪਲੋਡ ਕਰੋ, ਅਤੇ ਪ੍ਰੋਫਾਈਲ ਦੀ ਸਮੀਖਿਆ ਅਤੇ ਸਰਗਰਮ ਹੋਣ ਤੋਂ ਬਾਅਦ ਆਪਣੇ ਨਿੱਜੀ ਡੈਸ਼ਬੋਰਡ ਰਾਹੀਂ ਆਪਣਾ ਸਫ਼ਰ ਸ਼ੁਰੂ ਕਰੋ।",
      ],
      imageAlt: "ਵਿਆਹ ਦੇ ਦਿਨ ਦੁਲਹਨ ਅਤੇ ਲਾੜਾ",
    },
  ],
  advantages: {
    title: "ਵਟਸਐਪ ਰਾਹੀਂ ਨਿੱਜੀ ਖੋਜ ਸੇਵਾ ਨੂੰ ਕੀ ਵੱਖਰਾ ਬਣਾਉਂਦਾ ਹੈ",
    items: [
      {
        title: "ਤੁਹਾਡੀ ਤਰਫ਼ੋਂ ਨਿੱਜੀ ਖੋਜ",
        description:
          "ਹਜ਼ਾਰਾਂ ਪ੍ਰੋਫਾਈਲ ਵੇਖਣ ਵਿੱਚ ਆਪਣਾ ਸਮਾਂ ਬਰਬਾਦ ਨਾ ਕਰੋ — ਸਾਡੀ ਟੀਮ ਸਭ ਤੋਂ ਉੱਚੇ ਪੱਧਰ ਦੀ ਸਾਵਧਾਨੀ ਅਤੇ ਸ਼ੁੱਧਤਾ ਨਾਲ ਪੂਰੀ ਖੋਜ ਪ੍ਰਕਿਰਿਆ ਤੁਹਾਡੇ ਲਈ ਸੰਭਾਲਦੀ ਹੈ।",
      },
      {
        title: "ਵਿਸ਼ੇਸ਼, ਅਣਪ੍ਰਕਾਸ਼ਿਤ ਸਿਫਾਰਸ਼ਾਂ",
        description:
          "ਅਸੀਂ ਅਜਿਹੀਆਂ ਨਿੱਜੀ ਪ੍ਰੋਫਾਈਲਾਂ ਤੱਕ ਪਹੁੰਚ ਬਣਾਉਂਦੇ ਹਾਂ ਜੋ ਪਲੇਟਫਾਰਮ 'ਤੇ ਆਮ ਲੋਕਾਂ ਨੂੰ ਦਿਖਾਈ ਨਹੀਂ ਦਿੰਦੀਆਂ, ਜਿਸ ਨਾਲ ਤੁਹਾਨੂੰ ਵਧੇਰੇ ਵਿਆਪਕ ਅਤੇ ਢੁਕਵੇਂ ਵਿਕਲਪ ਮਿਲਦੇ ਹਨ।",
      },
      {
        title: "ਜਦੋਂ ਤੱਕ ਤੁਹਾਨੂੰ ਸਾਥੀ ਨਹੀਂ ਮਿਲਦਾ, ਲਗਾਤਾਰ ਫਾਲੋ-ਅੱਪ",
        description:
          "ਸਾਡੀ ਭੂਮਿਕਾ ਸਿਫਾਰਸ਼ 'ਤੇ ਖਤਮ ਨਹੀਂ ਹੁੰਦੀ — ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਸਹੀ ਫੈਸਲੇ 'ਤੇ ਨਹੀਂ ਪਹੁੰਚਦੇ, ਅਸੀਂ ਹਰ ਕਦਮ 'ਤੇ ਤੁਹਾਡੇ ਨਾਲ ਰਹਿੰਦੇ ਹਾਂ ਅਤੇ ਫਾਲੋ-ਅੱਪ ਕਰਦੇ ਹਾਂ, ਇੰਸ਼ਾ-ਅੱਲਾਹ।",
      },
      {
        title: "ਪੂਰੀ ਗੁਪਤਤਾ ਅਤੇ ਨਿੱਜਤਾ",
        description:
          "ਸੇਵਾ ਦੌਰਾਨ ਤੁਹਾਡਾ ਸਾਰਾ ਡਾਟਾ ਅਤੇ ਪ੍ਰੋਫਾਈਲ ਵੇਰਵੇ ਬਿਨਾਂ ਕਿਸੇ ਸਮਝੌਤੇ ਦੇ ਪੂਰੀ ਗੁਪਤਤਾ ਨਾਲ ਸੰਭਾਲੇ ਜਾਂਦੇ ਹਨ।",
      },
    ],
    note: {
      title: "ਨਿੱਜੀ ਮੇਲ-ਮਿਲਾਪ ਅਤੇ ਸਹਾਇਤਾ",
      description:
        "ਸਾਡੇ ਸਲਾਹਕਾਰ ਵਟਸਐਪ ਰਾਹੀਂ ਧਿਆਨ ਨਾਲ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਦੇ ਹਨ, ਤੁਹਾਡੀ ਪ੍ਰੋਫਾਈਲ ਦਾ ਨੇੜਿਓਂ ਅਧਿਐਨ ਕਰਦੇ ਹਨ, ਫਿਰ ਇੱਕ ਵਿਆਪਕ ਡਾਟਾਬੇਸ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਪ੍ਰੋਫਾਈਲਾਂ ਵਿੱਚੋਂ ਸਭ ਤੋਂ ਵਧੀਆ ਮੇਲ ਲੱਭਦੇ ਹਨ। ਟੀਮ ਦੂਜੀ ਧਿਰ ਨਾਲ ਸੰਪਰਕ ਵੀ ਸੰਭਾਲਦੀ ਹੈ ਅਤੇ ਸਭ ਤੋਂ ਵਧੀਆ ਸੰਭਵ ਮੇਲ ਤੱਕ ਪਹੁੰਚਣ ਲਈ ਨਜ਼ਰੀਆਂ ਵਿੱਚ ਤਾਲਮੇਲ ਬਣਾਉਂਦੀ ਹੈ, ਇੰਸ਼ਾ-ਅੱਲਾਹ।",
    },
    advisorAlt: "ਇੱਕ ਮੈਂਬਰ ਨਾਲ ਪ੍ਰਾਰਥਨਾ ਕਰਦਾ ਜ਼ੇਫ਼ਾਫ਼ ਸਲਾਹਕਾਰ",
    coupleAlt: "ਇੱਕ ਮਸਜਿਦ ਦੇ ਸਾਹਮਣੇ ਖੜ੍ਹਾ ਜੋੜਾ",
  },
  europe: {
    title: "ਯੂਰਪ ਦੇ ਵਸਨੀਕਾਂ ਲਈ ਇੱਕ ਖਾਸ ਸਹੂਲਤ",
    description:
      "VIP ਸੇਵਾ ਵਿੱਚ ਐਮਸਟਰਡਮ ਸਥਿਤ ਜ਼ੇਫ਼ਾਫ਼ ਦਫ਼ਤਰ ਵਿੱਚ ਸਿੱਧੀਆਂ, ਸ਼ਰੀਅਤ ਦੇ ਅਨੁਕੂਲ ਮੁਲਾਕਾਤਾਂ ਦਾ ਵਿਕਲਪ ਵੀ ਸ਼ਾਮਲ ਹੈ, ਇੱਕ ਸੁਰੱਖਿਅਤ ਅਤੇ ਸਤਿਕਾਰਯੋਗ ਮਾਹੌਲ ਵਿੱਚ ਜੋ ਗੰਭੀਰਤਾ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰਦਾ ਹੈ ਅਤੇ ਅਸਲ ਮੇਲ ਦੀਆਂ ਸੰਭਾਵਨਾਵਾਂ ਵਧਾਉਂਦਾ ਹੈ।",
    cta: "ਵਟਸਐਪ ਰਾਹੀਂ VIP ਸੇਵਾ ਬੁੱਕ ਕਰੋ",
    galleryLabel: "ਪੂਰੇ ਯੂਰਪ ਵਿੱਚ ਜ਼ੇਫ਼ਾਫ਼ ਦੇ ਮੈਂਬਰ",
    memberAlt: "ਯੂਰਪ ਵਿੱਚ ਜ਼ੇਫ਼ਾਫ਼ ਦੇ ਮੈਂਬਰ",
  },
};

const ps: VipCopy = {
  hero: {
    badge: "د واټس اپ له لارې د VIP سره خپل هڅه او وخت خوندي کړئ",
    titleBefore: "شخصي لټون خدمت",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " د واټس اپ له لارې",
    description:
      "ایا تاسو د سم ژوند شریک په لټه کې یاست خو د یوازې لټون پرځای ریښتینی شخصي مرسته غواړئ؟ د زفاف د واټس اپ له لارې شخصي لټون خدمت د هغو کسانو لپاره ډیزاین شوی چې ډیر آرامه او خصوصي تجربه غواړي — زموږ متخصص ټیم ستاسو له لوري لټون ترسره کوي او د سفر په هر ګام کې د واټس اپ له لارې مستقیم له تاسو سره اړیکه نیسي.",
    feeLabel: "د خدمت فیس",
    price: "99 یورو",
    cta: "همدا اوس د واټس اپ له لارې پیل کړئ",
    imageAlt: "یو جوړی چې په یو آرام اروپايي کوڅه کې ګرځي",
  },
  intro: {
    title: "ولې د واټس اپ له لارې شخصي لټون خدمت غوره کړو؟",
    description:
      "ځینې خلک د واده په اړه جدي دي خو کافي وخت نلري، پخپله د پروفایلونو کتلو کې آرام نه احساسوي، یا یوازې په دې مهم سفر کې د یو باوري لارښود اړتیا لري.",
  },
  details: [
    {
      title: "ستاسو د مناسب ملګري لټون",
      bullets: [
        "مستقیمه او فوري اړیکه چې ستاسو وخت او هڅه خوندي کوي.",
        "ریښتیني، په دقت سره فکر شوي وړاندیزونه چې ستاسو لپاره جوړ شوي.",
      ],
      paragraphs: [
        "هر ګام پرته له کوم پیچلي اپلیکیشن یا غیرضروري ګامونو د واټس اپ له لارې په اسانۍ سره ترسره کیږي. زموږ ټیم ستاسو لپاره ټول لټون ترسره کوي، نو تاسو اړتیا نلرئ چې زرګونه پروفایلونه وګورئ یا بې پایه انتظار وباسئ. دا یوازې اتومات میچینګ نه دی — زموږ متخصص ټیم ستاسو پروفایل په دقت سره بیاکتنه کوي او تاسو ته هغه غوره ګزینې وړاندې کوي چې ریښتیا ستاسو سره سمون لري.",
      ],
      imageAlt: "د جومات دباندې یو ځای ولاړ نوی واده شوی جوړی",
    },
    {
      title: "ستاسو د مناسب ملګري لټون",
      bullets: [
        "بشپړ محرمیت او د دواړو خواوو ترمنځ ښه پوهاوی",
        "خپل پروفایل بشپړ کړئ او خپل لټون پیل کړئ",
      ],
      paragraphs: [
        "ستاسو معلومات او پروفایل په بشپړ محرمیت سره اداره کیږي. موږ له ساده پیژندلو نه هاخوا ځو، ستاسو سره د ټول پروسې په اوږدو کې ملاتړ کوو او دواړو خواوو ته مرسته کوو چې ریښتینی پوهاوی او همغږي جوړه کړي، انشاالله.",
        "یوازې خپل معلومات او غوراوي اضافه کړئ، خپل هویت او انځورونه په خوندي ډول اپلوډ کړئ، او کله چې ستاسو پروفایل بیاکتنه او فعال شي، خپل شخصي ډشبورډ له لارې خپل سفر پیل کړئ.",
      ],
      imageAlt: "د واده په ورځ کې ناوې او زوم",
    },
  ],
  advantages: {
    title: "د واټس اپ له لارې شخصي لټون خدمت څه شی ځانګړی کوي",
    items: [
      {
        title: "ستاسو له لوري شخصي لټون",
        description:
          "زرګونه پروفایلونه لیدلو کې خپل وخت مه ضایع کوئ — زموږ ټیم د پاملرنې او دقت په لوړه کچه ستاسو لپاره ټول د لټون پروسه ترسره کوي.",
      },
      {
        title: "ځانګړي، خپاره نه شوي وړاندیزونه",
        description:
          "موږ هغو خصوصي پروفایلونو ته لاسرسی لرو چې په پلیټ فارم کې عامو خلکو ته نه ښکاري، دا تاسو ته پراخه او ډیر مناسب انتخابونه درکوي.",
      },
      {
        title: "تر هغه وخته پرله‌پسې تعقیب چې تاسو ملګری ومومئ",
        description:
          "زموږ رول د وړاندیز سره نه پای ته رسیږي — تر هغه چې تاسو سم پریکړه ته ورسیږئ، موږ ستاسو سره هر ګام کې پاتې کیږو او تعقیب یې کوو، انشاالله.",
      },
      {
        title: "بشپړ محرمیت او رازداري",
        description:
          "د خدمت په اوږدو کې ستاسو ټول معلومات او د پروفایل توضیحات پرته له کوم ورکړي بشپړ محرمیت سره اداره کیږي.",
      },
    ],
    note: {
      title: "شخصي میچینګ او مالتړ",
      description:
        "زموږ مشاورین د واټس اپ له لارې په دقت سره له تاسو سره اړیکه نیسي، ستاسو پروفایل له نږدې کتنه کوي، بیا د پراخې ډیټابیس او ځانګړو پروفایلونو څخه غوره میچونه لټوي. ټیم د بلې خوا سره اړیکه هم اداره کوي او د ممکنه غوره میچ ته د رسیدو لپاره لیدونه نږدې کوي، انشاالله.",
    },
    advisorAlt: "د غړي سره یوځای لمونځ کوونکی د زفاف مشاور",
    coupleAlt: "د جومات مخې ته ولاړ جوړی",
  },
  europe: {
    title: "د اروپا اوسیدونکو لپاره یو ځانګړی امتیاز",
    description:
      "د VIP خدمت هم په امستردام کې د زفاف دفتر کې د شریعت سره سم مستقیم لیدنو انتخاب شامل دی، په یو خوندي او درناوي ډک چاپیریال کې چې جدیت پیاوړی کوي او د ریښتینې میچ چانسونه زیاتوي.",
    cta: "د واټس اپ له لارې VIP خدمت بک کړئ",
    galleryLabel: "په ټوله اروپا کې د زفاف غړي",
    memberAlt: "په اروپا کې د زفاف غړي",
  },
};

const sw: VipCopy = {
  hero: {
    badge: "Kwa VIP kupitia WhatsApp unaokoa juhudi na muda wako",
    titleBefore: "Huduma ya Utafutaji wa Kibinafsi",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " kupitia WhatsApp",
    description:
      "Je, unatafuta mwenzi sahihi wa maisha lakini unahitaji msaada wa kweli wa kibinafsi badala ya kutafuta peke yako? Huduma ya Utafutaji wa Kibinafsi kupitia WhatsApp kutoka Zefaaf imeundwa kwa ajili ya wale wanaotaka uzoefu wa starehe zaidi na wa faragha — timu yetu maalum inashughulikia utafutaji kwa niaba yako na kuwasiliana nawe moja kwa moja kupitia WhatsApp katika kila hatua ya safari.",
    feeLabel: "Ada ya Huduma",
    price: "EUR 99",
    cta: "Anza Sasa kupitia WhatsApp",
    imageAlt: "Wapenzi wawili wakitembea barabarani katika mtaa mtulivu wa Ulaya",
  },
  intro: {
    title: "Kwa nini kuchagua Huduma ya Utafutaji wa Kibinafsi kupitia WhatsApp?",
    description:
      "Baadhi ya watu ni wazito kuhusu ndoa lakini hawana muda wa kutosha, hawajisikii huru kuvinjari wasifu wenyewe, au wanahitaji tu kiongozi wa kuaminika kando yao katika safari hii muhimu.",
  },
  details: [
    {
      title: "Utafutaji wa Mwenzi Wako",
      bullets: [
        "Mawasiliano ya moja kwa moja na ya papo hapo yanayokuokolea muda na juhudi.",
        "Mapendekezo ya kweli, yaliyofikiriwa kwa makini na kulengwa kwa ajili yako.",
      ],
      paragraphs: [
        "Kila hatua hutokea kwa urahisi kupitia WhatsApp, bila programu ngumu au hatua zisizo za lazima. Timu yetu inashughulikia utafutaji wote kwa ajili yako, hivyo hutahitaji kuvinjari wasifu maelfu au kusubiri bila mwisho. Hii si tu ulinganishaji wa kiotomatiki — timu yetu maalum inakagua wasifu wako kwa makini na kukuletea chaguo bora zinazokufaa kikweli.",
      ],
      imageAlt: "Wanandoa wapya wamesimama pamoja nje ya msikiti",
    },
    {
      title: "Utafutaji wa Mwenzi Wako",
      bullets: [
        "Faragha Kamili na Uelewano Bora Kati ya Pande Mbili",
        "Kamilisha Wasifu Wako na Anza Utafutaji Wako",
      ],
      paragraphs: [
        "Data na wasifu wako hushughulikiwa kwa usiri kamili. Tunaenda mbali zaidi ya utambulisho tu kwa kukuunga mkono katika mchakato mzima na kusaidia pande zote mbili kujenga uelewano na uoanifu wa kweli, Mwenyezi Mungu akipenda.",
        "Ongeza tu maelezo na mapendeleo yako, pakia kwa usalama kitambulisho na picha zako, na baada ya wasifu wako kukaguliwa na kuamilishwa, anza safari yako kupitia dashibodi yako binafsi.",
      ],
      imageAlt: "Bibi harusi na bwana harusi katika siku yao ya harusi",
    },
  ],
  advantages: {
    title: "Kinachofanya Huduma ya Utafutaji wa Kibinafsi kupitia WhatsApp kuwa ya kipekee",
    items: [
      {
        title: "Utafutaji wa kibinafsi kwa niaba yako",
        description:
          "Usipoteze muda wako kuvinjari wasifu maelfu — timu yetu inashughulikia mchakato mzima wa utafutaji kwa ajili yako kwa kiwango cha juu zaidi cha uangalifu na usahihi.",
      },
      {
        title: "Mapendekezo ya kipekee, yasiyochapishwa",
        description:
          "Tunafikia wasifu binafsi ambao hauonekani kwa umma kwenye jukwaa, tukikupa chaguo pana zaidi na zinazolingana zaidi.",
      },
      {
        title: "Ufuatiliaji endelevu hadi upate mwenzi",
        description:
          "Jukumu letu halishii kwenye pendekezo — tunabaki nawe na kufuatilia kila hatua hadi ufikie uamuzi sahihi, Mwenyezi Mungu akipenda.",
      },
      {
        title: "Faragha na usiri kamili",
        description:
          "Data yako yote na maelezo ya wasifu hushughulikiwa kwa usiri kamili katika huduma yote, bila maafikiano yoyote.",
      },
    ],
    note: {
      title: "Ulinganishaji na Msaada Uliobinafsishwa",
      description:
        "Washauri wetu huwasiliana nawe kwa makini kupitia WhatsApp, husoma wasifu wako kwa kina, kisha hutafuta ulinganifu bora kutoka kwenye hifadhidata kubwa na wasifu wa kipekee. Timu pia inashughulikia mawasiliano na upande mwingine na kuunganisha mitazamo ili kufikia ulinganifu bora zaidi unaowezekana, Mwenyezi Mungu akipenda.",
    },
    advisorAlt: "Mshauri wa Zefaaf akiswali pamoja na mwanachama",
    coupleAlt: "Wanandoa wamesimama mbele ya msikiti",
  },
  europe: {
    title: "Kipengele maalum kwa wakazi wa Ulaya",
    description:
      "Huduma ya VIP pia inajumuisha chaguo la mikutano ya moja kwa moja inayozingatia Sheria katika ofisi ya Zefaaf jijini Amsterdam, katika mazingira salama na yenye heshima yanayoimarisha uzito wa nia na kuongeza nafasi za ulinganifu wa kweli.",
    cta: "Weka nafasi ya huduma ya VIP kupitia WhatsApp",
    galleryLabel: "Wanachama wa Zefaaf kote Ulaya",
    memberAlt: "Wanachama wa Zefaaf huko Ulaya",
  },
};

const th: VipCopy = {
  hero: {
    badge: "ด้วย VIP ผ่าน WhatsApp ช่วยประหยัดความพยายามและเวลาของคุณ",
    titleBefore: "บริการค้นหาส่วนบุคคล",
    titleSecondBefore: "",
    titleHighlight: "VIP",
    titleAfter: " ผ่าน WhatsApp",
    description:
      "คุณกำลังมองหาคู่ชีวิตที่ใช่ แต่ต้องการความช่วยเหลือส่วนตัวอย่างแท้จริงแทนการค้นหาด้วยตัวเองใช่หรือไม่? บริการค้นหาส่วนบุคคลผ่าน WhatsApp จาก Zefaaf ออกแบบมาสำหรับผู้ที่ต้องการประสบการณ์ที่สะดวกสบายและเป็นส่วนตัวมากขึ้น — ทีมผู้เชี่ยวชาญของเราจะดำเนินการค้นหาแทนคุณและติดต่อกับคุณโดยตรงผ่าน WhatsApp ในทุกขั้นตอนของการเดินทาง",
    feeLabel: "ค่าบริการ",
    price: "99 ยูโร",
    cta: "เริ่มต้นเลยผ่าน WhatsApp",
    imageAlt: "คู่รักเดินอยู่บนถนนยุโรปที่เงียบสงบ",
  },
  intro: {
    title: "ทำไมจึงควรเลือกบริการค้นหาส่วนบุคคลผ่าน WhatsApp?",
    description:
      "บางคนจริงจังเรื่องการแต่งงานแต่ไม่มีเวลาเพียงพอ รู้สึกไม่สบายใจที่จะเรียกดูโปรไฟล์ด้วยตนเอง หรือเพียงแค่ต้องการผู้นำทางที่ไว้ใจได้อยู่เคียงข้างในการเดินทางที่สำคัญนี้",
  },
  details: [
    {
      title: "การค้นหาคู่ที่ใช่สำหรับคุณ",
      bullets: [
        "การสื่อสารโดยตรงและทันทีที่ช่วยประหยัดเวลาและความพยายามของคุณ",
        "คำแนะนำที่แท้จริง พิจารณาอย่างรอบคอบ และปรับให้เหมาะกับคุณ",
      ],
      paragraphs: [
        "ทุกขั้นตอนเกิดขึ้นอย่างราบรื่นผ่าน WhatsApp โดยไม่ต้องใช้แอปที่ซับซ้อนหรือขั้นตอนที่ไม่จำเป็น ทีมของเราจะดำเนินการค้นหาทั้งหมดแทนคุณ คุณจึงไม่ต้องเรียกดูโปรไฟล์นับพันหรือรอคอยอย่างไม่มีที่สิ้นสุด นี่ไม่ใช่เพียงการจับคู่อัตโนมัติ — ทีมผู้เชี่ยวชาญของเราจะตรวจสอบโปรไฟล์ของคุณอย่างละเอียดและนำเสนอตัวเลือกที่ดีที่สุดที่เหมาะกับคุณจริง ๆ",
      ],
      imageAlt: "คู่แต่งงานใหม่ยืนด้วยกันอยู่หน้ามัสยิด",
    },
    {
      title: "การค้นหาคู่ที่ใช่สำหรับคุณ",
      bullets: [
        "ความเป็นส่วนตัวอย่างสมบูรณ์และความเข้าใจที่ดีขึ้นระหว่างทั้งสองฝ่าย",
        "กรอกโปรไฟล์ของคุณให้สมบูรณ์และเริ่มการค้นหา",
      ],
      paragraphs: [
        "ข้อมูลและโปรไฟล์ของคุณได้รับการดูแลด้วยความลับอย่างสมบูรณ์ เราไม่ได้หยุดเพียงแค่การแนะนำให้รู้จักกัน แต่ยังคอยสนับสนุนคุณตลอดกระบวนการและช่วยให้ทั้งสองฝ่ายสร้างความเข้าใจและความเข้ากันได้อย่างแท้จริง อินชาอัลลอฮ์",
        "เพียงเพิ่มข้อมูลและความต้องการของคุณ อัปโหลดบัตรประจำตัวและรูปภาพของคุณอย่างปลอดภัย และเมื่อโปรไฟล์ของคุณได้รับการตรวจสอบและเปิดใช้งานแล้ว ก็เริ่มการเดินทางของคุณผ่านแดชบอร์ดส่วนตัวได้เลย",
      ],
      imageAlt: "เจ้าสาวและเจ้าบ่าวในวันแต่งงานของพวกเขา",
    },
  ],
  advantages: {
    title: "สิ่งที่ทำให้บริการค้นหาส่วนบุคคลผ่าน WhatsApp โดดเด่น",
    items: [
      {
        title: "การค้นหาส่วนบุคคลในนามของคุณ",
        description:
          "อย่าเสียเวลาเรียกดูโปรไฟล์นับพัน — ทีมของเราจะดำเนินการค้นหาทั้งหมดแทนคุณด้วยความใส่ใจและความแม่นยำระดับสูงสุด",
      },
      {
        title: "คำแนะนำพิเศษที่ไม่เปิดเผยต่อสาธารณะ",
        description:
          "เราเข้าถึงโปรไฟล์ส่วนตัวที่ไม่เปิดเผยต่อสาธารณะบนแพลตฟอร์ม ทำให้คุณมีตัวเลือกที่กว้างขึ้นและเข้ากันได้มากขึ้น",
      },
      {
        title: "การติดตามผลอย่างต่อเนื่องจนกว่าคุณจะพบคู่ที่ใช่",
        description:
          "บทบาทของเราไม่ได้สิ้นสุดที่การแนะนำ — เราจะอยู่เคียงข้างคุณและติดตามทุกขั้นตอนจนกว่าคุณจะตัดสินใจได้ถูกต้อง อินชาอัลลอฮ์",
      },
      {
        title: "ความเป็นส่วนตัวและการรักษาความลับอย่างสมบูรณ์",
        description:
          "ข้อมูลและรายละเอียดโปรไฟล์ทั้งหมดของคุณจะได้รับการดูแลด้วยความลับอย่างเด็ดขาดตลอดการให้บริการ โดยไม่มีการประนีประนอมใด ๆ",
      },
    ],
    note: {
      title: "การจับคู่และการสนับสนุนเฉพาะบุคคล",
      description:
        "ที่ปรึกษาของเราจะติดต่อกับคุณอย่างใส่ใจผ่าน WhatsApp ศึกษาโปรไฟล์ของคุณอย่างละเอียด จากนั้นค้นหาคู่ที่ดีที่สุดจากฐานข้อมูลขนาดใหญ่และโปรไฟล์พิเศษ ทีมยังดูแลการสื่อสารกับอีกฝ่ายและประสานมุมมองเพื่อให้ได้คู่ที่ดีที่สุดเท่าที่จะเป็นไปได้ อินชาอัลลอฮ์",
    },
    advisorAlt: "ที่ปรึกษาของ Zefaaf กำลังละหมาดร่วมกับสมาชิกคนหนึ่ง",
    coupleAlt: "คู่รักยืนอยู่หน้ามัสยิด",
  },
  europe: {
    title: "สิทธิพิเศษสำหรับผู้พำนักในยุโรป",
    description:
      "บริการ VIP ยังรวมถึงตัวเลือกการพบปะโดยตรงที่สอดคล้องกับหลักชะรีอะฮ์ที่สำนักงาน Zefaaf ในอัมสเตอร์ดัม ในบรรยากาศที่ปลอดภัยและให้เกียรติซึ่งช่วยเสริมสร้างความจริงจังและเพิ่มโอกาสในการจับคู่ที่แท้จริง",
    cta: "จองบริการ VIP ผ่าน WhatsApp",
    galleryLabel: "สมาชิก Zefaaf ทั่วยุโรป",
    memberAlt: "สมาชิก Zefaaf ในยุโรป",
  },
};

const copyByLocale: Record<string, VipCopy> = {
  ar, en, nl, fr, de, tr, ru, id, zh, bn, bs, es, fa, pt, ja, ko, it, ur, ta, am, sv, da, sq, uz, az, fil, hi, kk, ms, pa, ps, sw, th,
};

export function getVipCopy(locale: string): VipCopy {
  return copyByLocale[locale] ?? en;
}
