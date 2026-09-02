// The About page copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical — adding an `about` namespace
// there would require every locale to have it at once. This file is the
// definitive source for this widget's copy across all 33 supported locales.

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

const nl: AboutCopy = {
  hero: {
    title: "Over ons",
    description:
      "wij bieden moslims een veilige omgeving die waarden en gezinscohesie bewaart. We helpen je de juiste levenspartner te vinden met slimme tools en een transparante ervaring die je bij elke stap gemoedsrust geeft.",
    ctaPrimary: "Ontdek het Zefaaf-platform",
    ctaSecondary: "Maak een gratis account",
    imageAlt: "De hand van een getrouwde vrouw die zachtjes rust, met haar trouwring",
  },
  intro: {
    headingLine1: "Zefaaf... een wereldwijd islamitisch huwelijksplatform",
    headingLine2: "Dat de sharia-waarden hooghoudt en kuisheid bewaart,",
    description:
      "door kunstmatige intelligentie en moderne technologieën te combineren om harten te verbinden in een veilige en zuivere omgeving, met volledige ondersteuning om een gelukkig gezin op te bouwen gebaseerd op liefde en mededogen.",
  },
  policy: {
    label: "Ons beleid en onze aanpak",
    title: "Zefaaf... sharia-verbintenis en absoluut vertrouwen",
    description:
      "door kunstmatige intelligentie en moderne technologieën te combineren om harten te verbinden in een veilige en zuivere omgeving, met volledige ondersteuning om een gelukkig gezin op te bouwen gebaseerd op liefde en mededogen.",
    bullets: [
      "Wij houden ons in al onze handelingen aan de richtlijnen van de sharia om een zuivere en veilige omgeving voor gebruikers te waarborgen.",
      "Wij volgen strikt het shariabeleid en tolereren geen ethische of religieuze overtredingen.",
      "Alle beheerders van het platform zijn moslims die toegewijd zijn aan de leer van de sharia.",
      "Registratie is gratis en openstaat voor iedereen.",
      "Er is geen ruimte voor losse relaties, vriendschappen of tijdelijke huwelijken.",
    ],
  },
  gateway: {
    label: "Zefaaf – jouw poort naar een rechtmatig en veilig huwelijk",
    title: "Zefaaf is een legitiem islamitisch huwelijksplatform dat de harten van moslims wil helen",
    description:
      "Wij geloven dat het huwelijk een grote verantwoordelijkheid is, daarom bieden we een veilige en vertrouwelijke omgeving, in overeenstemming met de sharia-richtlijnen, die alle landen wereldwijd omvat, om je te helpen je huwelijk te plannen volgens islamitische ethiek.",
    videoAlt: "Een net getrouwd stel dat elkaars hand vasthoudt",
  },
  features: {
    heading: "Zefaaf… meer dan alleen een huwelijksplatform!",
    description:
      "Jouw begeleider op het pad naar halal liefde. We bieden een veilige omgeving en oprechte steun om je te helpen aan een huwelijksreis te beginnen die Allah behaagt, vol liefde en mededogen",
    cards: [
      {
        title: "Waardevolle tips voor je huwelijksleven",
        description:
          "We bieden praktische begeleiding gebaseerd op islamitische waarden en levenservaring om je te helpen een gelukkig en duurzaam huwelijk op te bouwen.",
      },
      {
        title: "24/7 continue ondersteuning",
        description:
          "Ons team staat altijd klaar om je vragen te beantwoorden en de nodige begeleiding te bieden voor een veilige en betrouwbare ervaring.",
      },
      {
        title: "Solide fundamenten voor succesvolle relaties",
        description:
          "Omdat het huwelijk een partnerschap is gebaseerd op liefde en mededogen, geven we je tips om een sterke relatie op te bouwen die geluk en stabiliteit brengt.",
      },
      {
        title: "Authentieke islamitische waarden",
        description:
          "We helpen je je huwelijk op te bouwen volgens de islamitische leer, met de nadruk op ethiek en toewijding bij elke stap.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Van tevreden klanten",
    avatarAlt: "Een tevreden Zefaaf-lid",
  },
  testimonial: {
    label: "Ons beleid en onze aanpak",
    title: "Wat zeggen onze gebruikers over Zefaaf?",
    subtitle: "Echte ervaringen van mensen die hun levenspartner vonden via Zefaaf!",
    quote:
      "Ik kom uit Syrië en woon in Europa — het platform bracht ons dichter bij elkaar en maakte communicatie makkelijker, met privacy en respect. Dank jullie wel.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Handen die graankorrels vasthouden, een symbool van een gezegend nieuw begin",
  },
};

const fr: AboutCopy = {
  hero: {
    title: "À propos de nous",
    description:
      "nous offrons aux musulmans un environnement sûr qui préserve les valeurs et la cohésion familiale. Nous vous aidons à trouver le partenaire de vie qui vous convient grâce à des outils intelligents et une expérience transparente qui vous apporte la tranquillité d'esprit à chaque étape.",
    ctaPrimary: "Découvrir la plateforme Zefaaf",
    ctaSecondary: "Créer un compte gratuit",
    imageAlt: "La main d'une femme mariée posée délicatement, portant son alliance",
  },
  intro: {
    headingLine1: "Zefaaf... une plateforme mondiale de mariage islamique",
    headingLine2: "Qui respecte les valeurs de la charia et préserve la chasteté,",
    description:
      "en combinant l'intelligence artificielle et les technologies modernes pour unir les cœurs dans un environnement sûr et pur, avec un accompagnement complet pour construire une famille heureuse fondée sur l'amour et la compassion.",
  },
  policy: {
    label: "Notre politique et notre approche",
    title: "Zefaaf... engagement religieux et confiance absolue",
    description:
      "en combinant l'intelligence artificielle et les technologies modernes pour unir les cœurs dans un environnement sûr et pur, avec un accompagnement complet pour construire une famille heureuse fondée sur l'amour et la compassion.",
    bullets: [
      "Nous respectons les principes de la charia dans toutes nos pratiques afin de garantir un environnement pur et sûr pour les utilisateurs.",
      "Nous appliquons rigoureusement les règles de la charia et ne tolérons aucun manquement éthique ou religieux.",
      "Tous les responsables de la plateforme sont des musulmans attachés aux enseignements de la charia.",
      "L'inscription est gratuite et ouverte à tous.",
      "Il n'y a aucune place pour les relations passagères, les amitiés ou les mariages temporaires.",
    ],
  },
  gateway: {
    label: "Zefaaf – votre porte d'accès à un mariage licite et sûr",
    title: "Zefaaf est une plateforme de mariage islamique légitime visant à réparer les cœurs des musulmans",
    description:
      "Nous croyons que le mariage est une grande responsabilité, c'est pourquoi nous offrons un environnement sûr et confidentiel, conforme aux principes de la charia, couvrant tous les pays du monde, pour vous aider à préparer votre mariage selon l'éthique islamique.",
    videoAlt: "Un couple de jeunes mariés se tenant la main",
  },
  features: {
    heading: "Zefaaf… bien plus qu'une simple plateforme de mariage !",
    description:
      "Votre compagnon sur le chemin de l'amour halal. Nous offrons un environnement sûr et un soutien sincère pour vous aider à entamer un parcours matrimonial qui plaît à Allah, empreint d'amour et de compassion",
    cards: [
      {
        title: "Des conseils précieux pour votre vie conjugale",
        description:
          "Nous proposons des conseils pratiques fondés sur les valeurs islamiques et l'expérience de la vie pour vous aider à construire un mariage heureux et durable.",
      },
      {
        title: "Un accompagnement continu 24h/24 et 7j/7",
        description:
          "Notre équipe est toujours disponible pour répondre à vos questions et vous fournir les conseils nécessaires afin de garantir une expérience sûre et fiable.",
      },
      {
        title: "Des bases solides pour des relations réussies",
        description:
          "Puisque le mariage est un partenariat fondé sur l'amour et la compassion, nous vous offrons des conseils pour construire une relation solide qui apporte bonheur et stabilité.",
      },
      {
        title: "Des valeurs islamiques authentiques",
        description:
          "Nous vous aidons à fonder votre mariage selon les enseignements islamiques, en mettant l'accent sur l'éthique et l'engagement à chaque étape.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Clients satisfaits",
    avatarAlt: "Un membre heureux de Zefaaf",
  },
  testimonial: {
    label: "Notre politique et notre approche",
    title: "Que disent nos utilisateurs de Zefaaf ?",
    subtitle: "De vraies expériences de personnes ayant trouvé leur partenaire de vie grâce à Zefaaf !",
    quote:
      "Je suis originaire de Syrie et je vis en Europe — la plateforme nous a rapprochés et a facilité la communication, avec discrétion et respect. Merci à vous.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Des mains tenant des grains de blé, symbole d'un nouveau départ béni",
  },
};

const de: AboutCopy = {
  hero: {
    title: "Über uns",
    description:
      "wir bieten Muslimen ein sicheres Umfeld, das Werte und familiären Zusammenhalt bewahrt. Wir helfen Ihnen, den passenden Lebenspartner zu finden – mit intelligenten Werkzeugen und einer transparenten Erfahrung, die Ihnen bei jedem Schritt Sicherheit gibt.",
    ctaPrimary: "Zefaaf-Plattform entdecken",
    ctaSecondary: "Kostenloses Konto erstellen",
    imageAlt: "Die Hand einer verheirateten Frau ruht sanft, mit ihrem Ehering",
  },
  intro: {
    headingLine1: "Zefaaf... eine weltweite islamische Heiratsplattform",
    headingLine2: "Die die Werte der Scharia wahrt und die Sittsamkeit bewahrt,",
    description:
      "indem sie künstliche Intelligenz und moderne Technologien vereint, um Herzen in einer sicheren und reinen Umgebung zu verbinden, mit umfassender Unterstützung beim Aufbau einer glücklichen Familie, die auf Liebe und Barmherzigkeit gegründet ist.",
  },
  policy: {
    label: "Unsere Grundsätze und unser Ansatz",
    title: "Zefaaf... religiöses Engagement und absolutes Vertrauen",
    description:
      "indem sie künstliche Intelligenz und moderne Technologien vereint, um Herzen in einer sicheren und reinen Umgebung zu verbinden, mit umfassender Unterstützung beim Aufbau einer glücklichen Familie, die auf Liebe und Barmherzigkeit gegründet ist.",
    bullets: [
      "Wir halten uns in allen unseren Handlungen an die Grundsätze der Scharia, um eine reine und sichere Umgebung für die Nutzer zu gewährleisten.",
      "Wir setzen die Scharia-Richtlinien konsequent um und tolerieren keine ethischen oder religiösen Verstöße.",
      "Alle Betreiber der Plattform sind Muslime, die den Lehren der Scharia verpflichtet sind.",
      "Die Registrierung ist kostenlos und für alle offen.",
      "Es gibt keinen Raum für beiläufige Beziehungen, Freundschaften oder befristete Ehen.",
    ],
  },
  gateway: {
    label: "Zefaaf – Ihr Zugang zu einer rechtmäßigen und sicheren Ehe",
    title: "Zefaaf ist eine legitime islamische Heiratsplattform mit dem Ziel, die Herzen der Muslime zu heilen",
    description:
      "Wir glauben, dass die Ehe eine große Verantwortung ist. Deshalb bieten wir ein sicheres und vertrauliches Umfeld, das den Grundsätzen der Scharia entspricht und alle Länder der Welt abdeckt, um Ihnen zu helfen, Ihre Ehe nach islamischer Ethik zu planen.",
    videoAlt: "Ein frisch verheiratetes Paar hält sich an den Händen",
  },
  features: {
    heading: "Zefaaf… mehr als nur eine Heiratsplattform!",
    description:
      "Ihr Begleiter auf dem Weg zur halalen Liebe. Wir bieten ein sicheres Umfeld und aufrichtige Unterstützung, damit Sie eine eheliche Reise beginnen können, die Allah gefällt, erfüllt von Liebe und Barmherzigkeit",
    cards: [
      {
        title: "Wertvolle Tipps für Ihr Eheleben",
        description:
          "Wir bieten praktische Ratschläge auf Grundlage islamischer Werte und Lebenserfahrung, um Ihnen beim Aufbau einer glücklichen und dauerhaften Ehe zu helfen.",
      },
      {
        title: "24/7 durchgehende Unterstützung",
        description:
          "Unser Team steht Ihnen jederzeit zur Verfügung, um Ihre Fragen zu beantworten und die nötige Beratung für eine sichere und verlässliche Erfahrung zu bieten.",
      },
      {
        title: "Solide Grundlagen für erfolgreiche Beziehungen",
        description:
          "Da die Ehe eine auf Liebe und Barmherzigkeit gegründete Partnerschaft ist, geben wir Tipps für den Aufbau einer starken Beziehung, die Glück und Stabilität bringt.",
      },
      {
        title: "Authentische islamische Werte",
        description:
          "Wir helfen Ihnen, Ihre Ehe nach den Lehren des Islam zu gestalten, mit Betonung auf Ethik und Verbindlichkeit bei jedem Schritt.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Zufriedene Kunden",
    avatarAlt: "Ein zufriedenes Zefaaf-Mitglied",
  },
  testimonial: {
    label: "Unsere Grundsätze und unser Ansatz",
    title: "Was sagen unsere Nutzer über Zefaaf?",
    subtitle: "Echte Erfahrungen von Menschen, die über Zefaaf ihren Lebenspartner gefunden haben!",
    quote:
      "Ich komme aus Syrien und lebe in Europa — die Plattform hat uns näher zusammengebracht und die Kommunikation erleichtert, mit Privatsphäre und Respekt. Vielen Dank.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Hände, die Weizenkörner halten, ein Symbol für einen gesegneten Neuanfang",
  },
};

const tr: AboutCopy = {
  hero: {
    title: "Hakkımızda",
    description:
      "Müslümanlara değerleri ve aile bağlarını koruyan güvenli bir ortam sunuyoruz. Akıllı araçlar ve her adımda size huzur veren şeffaf bir deneyimle uygun hayat arkadaşınızı bulmanıza yardımcı oluyoruz.",
    ctaPrimary: "Zefaaf platformunu keşfedin",
    ctaSecondary: "Ücretsiz hesap oluşturun",
    imageAlt: "Evli bir kadının alyansını takan elinin nazikçe dinlenmesi",
  },
  intro: {
    headingLine1: "Zefaaf... küresel bir İslami evlilik platformu",
    headingLine2: "Şeriat değerlerini koruyan ve iffeti muhafaza eden,",
    description:
      "yapay zeka ve modern teknolojileri birleştirerek kalpleri güvenli ve temiz bir ortamda buluşturuyor, sevgi ve merhamet üzerine kurulu mutlu bir aile inşa etmeniz için tam destek sağlıyoruz.",
  },
  policy: {
    label: "İlkelerimiz ve yaklaşımımız",
    title: "Zefaaf... şer'i bağlılık ve tam güven",
    description:
      "yapay zeka ve modern teknolojileri birleştirerek kalpleri güvenli ve temiz bir ortamda buluşturuyor, sevgi ve merhamet üzerine kurulu mutlu bir aile inşa etmeniz için tam destek sağlıyoruz.",
    bullets: [
      "Kullanıcılar için temiz ve güvenli bir ortam sağlamak amacıyla tüm işlemlerimizde şeriat ilkelerine bağlı kalıyoruz.",
      "Şeriat politikalarını titizlikle uyguluyor, hiçbir ahlaki veya dini ihlale müsamaha göstermiyoruz.",
      "Platformu yöneten herkes şeriat öğretilerine bağlı Müslümanlardan oluşmaktadır.",
      "Kayıt ücretsizdir ve herkese açıktır.",
      "Geçici ilişkilere, arkadaşlıklara veya geçici evliliklere yer yoktur.",
    ],
  },
  gateway: {
    label: "Zefaaf – helal ve güvenli evliliğe açılan kapınız",
    title: "Zefaaf, Müslümanların gönlünü onarmayı amaçlayan meşru bir İslami evlilik platformudur",
    description:
      "Evliliğin büyük bir sorumluluk olduğuna inanıyoruz; bu nedenle şeriat ilkelerine uygun, dünyanın tüm ülkelerini kapsayan, güvenli ve gizli bir ortam sunarak İslami ahlaka uygun şekilde evliliğinizi planlamanıza yardımcı oluyoruz.",
    videoAlt: "El ele tutuşan yeni evli bir çift",
  },
  features: {
    heading: "Zefaaf… sadece bir evlilik platformundan daha fazlası!",
    description:
      "Helal sevgi yolunda yol arkadaşınız. Allah'ın razı olacağı, sevgi ve merhametle dolu bir evlilik yolculuğuna başlamanız için güvenli bir ortam ve içten destek sunuyoruz",
    cards: [
      {
        title: "Evlilik hayatınız için değerli tavsiyeler",
        description:
          "İslami değerlere ve hayat tecrübelerine dayanan pratik rehberlik sunarak mutlu ve sürdürülebilir bir evlilik kurmanıza yardımcı oluyoruz.",
      },
      {
        title: "7/24 sürekli destek",
        description:
          "Ekibimiz sorularınızı yanıtlamak ve güvenli, güvenilir bir deneyim sağlamak için gereken rehberliği vermek üzere her zaman hazır.",
      },
      {
        title: "Başarılı ilişkiler için sağlam temeller",
        description:
          "Evlilik sevgi ve merhamete dayanan bir ortaklık olduğundan, mutluluk ve istikrar getiren güçlü bir ilişki kurmanız için tavsiyeler sunuyoruz.",
      },
      {
        title: "Özgün İslami değerler",
        description:
          "Her adımda ahlak ve bağlılığa önem vererek evliliğinizi İslami öğretilere göre kurmanıza yardımcı oluyoruz.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Mutlu müşterilerimizden",
    avatarAlt: "Mutlu bir Zefaaf üyesi",
  },
  testimonial: {
    label: "İlkelerimiz ve yaklaşımımız",
    title: "Kullanıcılarımız Zefaaf hakkında ne diyor?",
    subtitle: "Zefaaf sayesinde hayat arkadaşını bulan kişilerden gerçek deneyimler!",
    quote:
      "Suriyeliyim ve Avrupa'da yaşıyorum — platform bizi birbirimize yaklaştırdı ve mahremiyet ile saygı içinde iletişimi kolaylaştırdı. Teşekkür ederiz.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Kutsanmış bir yeni başlangıcın simgesi olan buğday taneleri tutan eller",
  },
};

const ru: AboutCopy = {
  hero: {
    title: "О нас",
    description:
      "мы предоставляем мусульманам безопасную среду, сохраняющую ценности и семейное единство. Мы помогаем вам найти подходящего спутника жизни с помощью умных инструментов и прозрачного опыта, дающего вам душевное спокойствие на каждом шаге.",
    ctaPrimary: "Изучить платформу Zefaaf",
    ctaSecondary: "Создать бесплатный аккаунт",
    imageAlt: "Рука замужней женщины спокойно лежит, на ней обручальное кольцо",
  },
  intro: {
    headingLine1: "Zefaaf... всемирная исламская платформа для заключения брака",
    headingLine2: "Хранящая ценности шариата и оберегающая целомудрие,",
    description:
      "объединяя искусственный интеллект и современные технологии, чтобы соединять сердца в безопасной и чистой среде, при полной поддержке в построении счастливой семьи, основанной на любви и милосердии.",
  },
  policy: {
    label: "Наша политика и подход",
    title: "Zefaaf... приверженность шариату и абсолютное доверие",
    description:
      "объединяя искусственный интеллект и современные технологии, чтобы соединять сердца в безопасной и чистой среде, при полной поддержке в построении счастливой семьи, основанной на любви и милосердии.",
    bullets: [
      "Мы придерживаемся норм шариата во всех наших действиях, чтобы обеспечить пользователям чистую и безопасную среду.",
      "Мы строго следуем шариатской политике и не терпим никаких этических или религиозных нарушений.",
      "Все, кто управляет платформой, — мусульмане, приверженные учению шариата.",
      "Регистрация бесплатна и открыта для всех.",
      "Здесь нет места случайным связям, дружбе или временным бракам.",
    ],
  },
  gateway: {
    label: "Zefaaf – ваши врата к дозволенному и безопасному браку",
    title: "Zefaaf — законная исламская платформа для брака, призванная исцелить сердца мусульман",
    description:
      "Мы верим, что брак — это огромная ответственность, поэтому мы предоставляем безопасную и конфиденциальную среду, соответствующую нормам шариата, охватывающую все страны мира, чтобы помочь вам спланировать свой брак в соответствии с исламской этикой.",
    videoAlt: "Молодожёны держатся за руки",
  },
  features: {
    heading: "Zefaaf… больше, чем просто платформа для брака!",
    description:
      "Ваш спутник на пути к дозволенной любви. Мы предоставляем безопасную среду и искреннюю поддержку, чтобы помочь вам начать супружеский путь, угодный Аллаху, полный любви и милосердия",
    cards: [
      {
        title: "Ценные советы для вашей семейной жизни",
        description:
          "Мы предлагаем практические рекомендации, основанные на исламских ценностях и жизненном опыте, чтобы помочь вам построить счастливый и крепкий брак.",
      },
      {
        title: "Постоянная поддержка 24/7",
        description:
          "Наша команда всегда готова ответить на ваши вопросы и предоставить необходимые рекомендации для безопасного и надёжного опыта.",
      },
      {
        title: "Прочные основы для успешных отношений",
        description:
          "Поскольку брак — это партнёрство, основанное на любви и милосердии, мы предлагаем советы для построения крепких отношений, приносящих счастье и стабильность.",
      },
      {
        title: "Подлинные исламские ценности",
        description:
          "Мы помогаем вам строить свой брак в соответствии с исламским учением, уделяя особое внимание этике и приверженности на каждом шаге.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Довольных клиентов",
    avatarAlt: "Довольный участник Zefaaf",
  },
  testimonial: {
    label: "Наша политика и подход",
    title: "Что говорят наши пользователи о Zefaaf?",
    subtitle: "Реальные истории людей, нашедших своего спутника жизни через Zefaaf!",
    quote:
      "Я из Сирии, живу в Европе — платформа сблизила нас и облегчила общение, с уважением к частной жизни. Спасибо вам.",
    names: ["Нора Зрейк", "Анас Хамдан"],
    photoAlt: "Руки, держащие зёрна пшеницы, символ благословенного нового начала",
  },
};

const id: AboutCopy = {
  hero: {
    title: "Tentang kami",
    description:
      "kami menghadirkan lingkungan yang aman bagi umat Muslim, yang menjaga nilai-nilai dan keutuhan keluarga. Kami membantu Anda menemukan pasangan hidup yang tepat melalui alat cerdas dan pengalaman transparan yang memberi Anda ketenangan pikiran di setiap langkah.",
    ctaPrimary: "Jelajahi platform Zefaaf",
    ctaSecondary: "Buat akun gratis",
    imageAlt: "Tangan seorang wanita yang sudah menikah beristirahat dengan lembut, mengenakan cincin pernikahannya",
  },
  intro: {
    headingLine1: "Zefaaf... platform pernikahan Islami global",
    headingLine2: "Yang menjunjung nilai-nilai syariah dan menjaga kesucian,",
    description:
      "memadukan kecerdasan buatan dan teknologi modern untuk mempertemukan hati dalam lingkungan yang aman dan murni, dengan dukungan penuh untuk membangun keluarga bahagia yang dilandasi cinta dan kasih sayang.",
  },
  policy: {
    label: "Kebijakan dan Pendekatan Kami",
    title: "Zefaaf... komitmen syariah dan kepercayaan mutlak",
    description:
      "memadukan kecerdasan buatan dan teknologi modern untuk mempertemukan hati dalam lingkungan yang aman dan murni, dengan dukungan penuh untuk membangun keluarga bahagia yang dilandasi cinta dan kasih sayang.",
    bullets: [
      "Kami berpegang pada pedoman syariah dalam setiap interaksi kami untuk memastikan lingkungan yang murni dan aman bagi pengguna.",
      "Kami menerapkan kebijakan syariah secara ketat dan tidak mentoleransi pelanggaran etika atau agama apa pun.",
      "Semua pengelola platform adalah Muslim yang berpegang teguh pada ajaran syariah.",
      "Pendaftaran gratis dan terbuka untuk siapa saja.",
      "Tidak ada tempat bagi hubungan santai, pertemanan, atau pernikahan sementara.",
    ],
  },
  gateway: {
    label: "Zefaaf – gerbang Anda menuju pernikahan yang halal dan aman",
    title: "Zefaaf adalah platform pernikahan Islami yang sah, bertujuan menyatukan hati umat Muslim",
    description:
      "Kami percaya bahwa pernikahan adalah tanggung jawab besar, sehingga kami menghadirkan lingkungan yang aman dan rahasia, sesuai pedoman syariah, mencakup seluruh negara di dunia, untuk membantu Anda merencanakan pernikahan sesuai etika Islam.",
    videoAlt: "Sepasang pengantin baru bergandengan tangan",
  },
  features: {
    heading: "Zefaaf… lebih dari sekadar platform pernikahan!",
    description:
      "Pendamping Anda di jalan cinta yang halal. Kami menghadirkan lingkungan yang aman dan dukungan yang tulus untuk membantu Anda memulai perjalanan pernikahan yang diridhai Allah, penuh cinta dan kasih sayang",
    cards: [
      {
        title: "Tips berharga untuk kehidupan pernikahan Anda",
        description:
          "Kami memberikan panduan praktis berdasarkan nilai-nilai Islam dan pengalaman hidup untuk membantu Anda membangun pernikahan yang bahagia dan langgeng.",
      },
      {
        title: "Dukungan berkelanjutan 24/7",
        description:
          "Tim kami selalu siap menjawab pertanyaan Anda dan memberikan panduan yang diperlukan demi pengalaman yang aman dan tepercaya.",
      },
      {
        title: "Fondasi kokoh untuk hubungan yang sukses",
        description:
          "Karena pernikahan adalah kemitraan yang dilandasi cinta dan kasih sayang, kami memberikan tips untuk membangun hubungan yang kuat, membawa kebahagiaan dan stabilitas.",
      },
      {
        title: "Nilai-nilai Islam yang autentik",
        description:
          "Kami membantu Anda membangun pernikahan sesuai ajaran Islam, dengan menekankan etika dan komitmen di setiap langkah.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Dari pelanggan yang bahagia",
    avatarAlt: "Seorang anggota Zefaaf yang bahagia",
  },
  testimonial: {
    label: "Kebijakan dan Pendekatan Kami",
    title: "Apa kata pengguna kami tentang Zefaaf?",
    subtitle: "Pengalaman nyata dari orang-orang yang menemukan pasangan hidup mereka melalui Zefaaf!",
    quote:
      "Saya berasal dari Suriah dan tinggal di Eropa — platform ini mendekatkan kami dan mempermudah komunikasi, dengan privasi dan rasa hormat. Terima kasih.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Tangan yang memegang butir gandum, simbol awal baru yang penuh berkah",
  },
};

const zh: AboutCopy = {
  hero: {
    title: "关于我们",
    description:
      "我们为穆斯林提供一个维护价值观与家庭凝聚力的安全环境。我们通过智能工具和透明的体验,帮助您在每一步都安心地找到合适的人生伴侣。",
    ctaPrimary: "探索 Zefaaf 平台",
    ctaSecondary: "创建免费账户",
    imageAlt: "一位已婚女性的手轻轻放着,戴着她的结婚戒指",
  },
  intro: {
    headingLine1: "Zefaaf...全球伊斯兰婚姻平台",
    headingLine2: "坚守伊斯兰教法价值观,守护贞洁,",
    description:
      "融合人工智能与现代科技,在安全纯净的环境中连接心灵,全力支持您建立一个建立在爱与慈悲之上的幸福家庭。",
  },
  policy: {
    label: "我们的政策与理念",
    title: "Zefaaf...恪守教法,绝对信任",
    description:
      "融合人工智能与现代科技,在安全纯净的环境中连接心灵,全力支持您建立一个建立在爱与慈悲之上的幸福家庭。",
    bullets: [
      "我们在各项事务中严格遵守伊斯兰教法准则,以确保为用户提供纯净安全的环境。",
      "我们严格执行教法政策,绝不容忍任何违背道德或宗教的行为。",
      "平台的所有运营人员均为恪守教法教导的穆斯林。",
      "注册免费,人人皆可加入。",
      "本平台不容许随意交往、单纯交友或临时性婚姻。",
    ],
  },
  gateway: {
    label: "Zefaaf——通往合法安全婚姻的大门",
    title: "Zefaaf 是一个合法的伊斯兰婚姻平台,致力于抚慰穆斯林的心灵",
    description:
      "我们相信婚姻是一份重大的责任,因此我们提供一个安全私密、符合教法准则、覆盖全球各国的环境,帮助您依照伊斯兰道德规划自己的婚姻。",
    videoAlt: "一对新婚夫妇手牵着手",
  },
  features: {
    heading: "Zefaaf……不仅仅是一个婚姻平台!",
    description:
      "陪伴您走上合法爱情之路。我们提供安全的环境与真诚的支持,帮助您开启一段蒙真主喜悦、充满爱与慈悲的婚姻旅程",
    cards: [
      {
        title: "宝贵的婚姻生活建议",
        description: "我们基于伊斯兰价值观与生活经验提供实用指导,帮助您建立幸福长久的婚姻。",
      },
      {
        title: "全天候持续支持",
        description: "我们的团队随时为您解答疑问,提供必要指导,确保安全可靠的体验。",
      },
      {
        title: "成功关系的坚实基础",
        description: "婚姻是建立在爱与慈悲之上的伙伴关系,我们为您提供建议,帮助建立带来幸福与稳定的牢固关系。",
      },
      {
        title: "纯正的伊斯兰价值观",
        description: "我们帮助您依照伊斯兰教导建立婚姻,在每一步都强调道德与承诺。",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "满意客户",
    avatarAlt: "一位满意的 Zefaaf 会员",
  },
  testimonial: {
    label: "我们的政策与理念",
    title: "用户如何评价 Zefaaf?",
    subtitle: "通过 Zefaaf 找到人生伴侣的真实故事!",
    quote:
      "我来自叙利亚,现居欧洲——这个平台拉近了我们的距离,让沟通在尊重隐私与彼此的前提下变得更加顺畅。谢谢你们。",
    names: ["诺拉·兹赖克", "阿纳斯·哈姆丹"],
    photoAlt: "双手捧着麦粒,象征着一个蒙福的新开始",
  },
};

const bn: AboutCopy = {
  hero: {
    title: "আমাদের সম্পর্কে",
    description:
      "আমরা মুসলিমদের জন্য এমন একটি নিরাপদ পরিবেশ প্রদান করি যা মূল্যবোধ ও পারিবারিক সংহতি রক্ষা করে। স্মার্ট টুলস এবং একটি স্বচ্ছ অভিজ্ঞতার মাধ্যমে আমরা আপনাকে উপযুক্ত জীবনসঙ্গী খুঁজে পেতে সাহায্য করি, যা প্রতিটি ধাপে আপনাকে মানসিক প্রশান্তি দেয়।",
    ctaPrimary: "জেফাফ প্ল্যাটফর্ম ঘুরে দেখুন",
    ctaSecondary: "বিনামূল্যে অ্যাকাউন্ট তৈরি করুন",
    imageAlt: "একজন বিবাহিত নারীর হাত আলতোভাবে রাখা, যাতে তার বিয়ের আংটি পরা",
  },
  intro: {
    headingLine1: "জেফাফ... একটি বিশ্বব্যাপী ইসলামিক বিবাহ প্ল্যাটফর্ম",
    headingLine2: "যা শরিয়াহর মূল্যবোধ সমুন্নত রাখে এবং সতীত্ব সংরক্ষণ করে,",
    description:
      "কৃত্রিম বুদ্ধিমত্তা এবং আধুনিক প্রযুক্তির সমন্বয়ে নিরাপদ ও পবিত্র পরিবেশে হৃদয়কে সংযুক্ত করে, ভালোবাসা ও করুণার ভিত্তিতে একটি সুখী পরিবার গড়তে পূর্ণ সহায়তা প্রদান করে।",
  },
  policy: {
    label: "আমাদের নীতি ও পদ্ধতি",
    title: "জেফাফ... শরিয়াহ অঙ্গীকার এবং সম্পূর্ণ বিশ্বাস",
    description:
      "কৃত্রিম বুদ্ধিমত্তা এবং আধুনিক প্রযুক্তির সমন্বয়ে নিরাপদ ও পবিত্র পরিবেশে হৃদয়কে সংযুক্ত করে, ভালোবাসা ও করুণার ভিত্তিতে একটি সুখী পরিবার গড়তে পূর্ণ সহায়তা প্রদান করে।",
    bullets: [
      "ব্যবহারকারীদের জন্য একটি পবিত্র ও নিরাপদ পরিবেশ নিশ্চিত করতে আমরা আমাদের সকল কার্যক্রমে শরিয়াহর নির্দেশনা মেনে চলি।",
      "আমরা কঠোরভাবে শরিয়াহ নীতি অনুসরণ করি এবং কোনো নৈতিক বা ধর্মীয় লঙ্ঘন সহ্য করি না।",
      "প্ল্যাটফর্ম পরিচালনাকারী সকলেই শরিয়াহর শিক্ষায় নিবেদিত মুসলিম।",
      "নিবন্ধন সম্পূর্ণ বিনামূল্যে এবং সবার জন্য উন্মুক্ত।",
      "এখানে ক্ষণস্থায়ী সম্পর্ক, বন্ধুত্ব বা সাময়িক বিবাহের কোনো স্থান নেই।",
    ],
  },
  gateway: {
    label: "জেফাফ – বৈধ ও নিরাপদ বিবাহের পথে আপনার দ্বার",
    title: "জেফাফ একটি বৈধ ইসলামিক বিবাহ প্ল্যাটফর্ম, যার লক্ষ্য মুসলিমদের হৃদয় জোড়া লাগানো",
    description:
      "আমরা বিশ্বাস করি বিবাহ একটি বড় দায়িত্ব, তাই আমরা শরিয়াহর নির্দেশনা মেনে বিশ্বের সকল দেশ জুড়ে একটি নিরাপদ ও গোপনীয় পরিবেশ প্রদান করি, যাতে আপনি ইসলামিক নৈতিকতা অনুসারে আপনার বিবাহ পরিকল্পনা করতে পারেন।",
    videoAlt: "নবদম্পতি হাত ধরে আছেন",
  },
  features: {
    heading: "জেফাফ… শুধু একটি বিবাহ প্ল্যাটফর্মের চেয়েও বেশি কিছু!",
    description:
      "হালাল ভালোবাসার পথে আপনার সঙ্গী। আমরা একটি নিরাপদ পরিবেশ ও আন্তরিক সহায়তা প্রদান করি, যাতে আপনি ভালোবাসা ও করুণায় পরিপূর্ণ, আল্লাহকে সন্তুষ্ট করার মতো একটি বৈবাহিক যাত্রা শুরু করতে পারেন",
    cards: [
      {
        title: "আপনার দাম্পত্য জীবনের জন্য মূল্যবান পরামর্শ",
        description:
          "আমরা ইসলামিক মূল্যবোধ ও জীবনের অভিজ্ঞতার ভিত্তিতে বাস্তবসম্মত দিকনির্দেশনা দিই, যাতে আপনি একটি সুখী ও টেকসই বিবাহ গড়ে তুলতে পারেন।",
      },
      {
        title: "চব্বিশ ঘণ্টা নিরবচ্ছিন্ন সহায়তা",
        description:
          "আপনার প্রশ্নের উত্তর দিতে এবং একটি নিরাপদ ও নির্ভরযোগ্য অভিজ্ঞতা নিশ্চিত করতে প্রয়োজনীয় দিকনির্দেশনা দিতে আমাদের দল সর্বদা প্রস্তুত।",
      },
      {
        title: "সফল সম্পর্কের জন্য মজবুত ভিত্তি",
        description:
          "যেহেতু বিবাহ ভালোবাসা ও করুণার ওপর প্রতিষ্ঠিত একটি অংশীদারিত্ব, তাই আমরা এমন পরামর্শ দিই যা সুখ ও স্থিতিশীলতা বয়ে আনে এমন মজবুত সম্পর্ক গড়তে সাহায্য করে।",
      },
      {
        title: "প্রকৃত ইসলামিক মূল্যবোধ",
        description:
          "আমরা আপনাকে প্রতিটি ধাপে নৈতিকতা ও অঙ্গীকারের ওপর গুরুত্ব দিয়ে ইসলামিক শিক্ষা অনুযায়ী আপনার বিবাহ প্রতিষ্ঠা করতে সাহায্য করি।",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "সুখী গ্রাহকদের কাছ থেকে",
    avatarAlt: "একজন সুখী জেফাফ সদস্য",
  },
  testimonial: {
    label: "আমাদের নীতি ও পদ্ধতি",
    title: "আমাদের ব্যবহারকারীরা জেফাফ সম্পর্কে কী বলেন?",
    subtitle: "জেফাফের মাধ্যমে জীবনসঙ্গী খুঁজে পাওয়া মানুষদের প্রকৃত অভিজ্ঞতা!",
    quote:
      "আমি সিরিয়া থেকে এসেছি এবং ইউরোপে থাকি — এই প্ল্যাটফর্ম আমাদের কাছাকাছি এনেছে এবং গোপনীয়তা ও সম্মানের সাথে যোগাযোগ সহজ করেছে। আপনাদের ধন্যবাদ।",
    names: ["নোরা জ্রেইক", "আনাস হামদান"],
    photoAlt: "গমের দানা হাতে ধরা, একটি আশীর্বাদপূর্ণ নতুন সূচনার প্রতীক",
  },
};

const bs: AboutCopy = {
  hero: {
    title: "O nama",
    description:
      "pružamo muslimanima sigurno okruženje koje čuva vrijednosti i porodičnu povezanost. Pomažemo vam da pronađete odgovarajućeg životnog partnera kroz pametne alate i transparentno iskustvo koje vam pruža mir u svakom koraku.",
    ctaPrimary: "Istražite Zefaaf platformu",
    ctaSecondary: "Napravite besplatan račun",
    imageAlt: "Ruka udate žene nježno počiva, noseći svoj vjenčani prsten",
  },
  intro: {
    headingLine1: "Zefaaf... globalna islamska platforma za brak",
    headingLine2: "Koja čuva šerijatske vrijednosti i čednost,",
    description:
      "spajajući vještačku inteligenciju i moderne tehnologije kako bi povezala srca u sigurnom i čistom okruženju, uz punu podršku u izgradnji sretne porodice zasnovane na ljubavi i milosrđu.",
  },
  policy: {
    label: "Naša politika i pristup",
    title: "Zefaaf... šerijatska predanost i apsolutno povjerenje",
    description:
      "spajajući vještačku inteligenciju i moderne tehnologije kako bi povezala srca u sigurnom i čistom okruženju, uz punu podršku u izgradnji sretne porodice zasnovane na ljubavi i milosrđu.",
    bullets: [
      "Pridržavamo se šerijatskih smjernica u svim našim postupcima kako bismo osigurali čisto i sigurno okruženje za korisnike.",
      "Strogo primjenjujemo šerijatske politike i ne tolerišemo nikakva etička ili vjerska kršenja.",
      "Svi koji upravljaju platformom su muslimani predani učenju šerijata.",
      "Registracija je besplatna i otvorena za sve.",
      "Nema mjesta za usputne veze, prijateljstva ili privremene brakove.",
    ],
  },
  gateway: {
    label: "Zefaaf – vaša kapija ka dozvoljenom i sigurnom braku",
    title: "Zefaaf je legitimna islamska platforma za brak čiji je cilj iscijeliti srca muslimana",
    description:
      "Vjerujemo da je brak velika odgovornost, zato pružamo sigurno i povjerljivo okruženje, usklađeno sa šerijatskim smjernicama, koje obuhvata sve zemlje svijeta, kako bismo vam pomogli da isplanirate svoj brak u skladu s islamskim moralom.",
    videoAlt: "Mladenci drže se za ruke",
  },
  features: {
    heading: "Zefaaf… više od obične platforme za brak!",
    description:
      "Vaš saputnik na putu halal ljubavi. Pružamo sigurno okruženje i iskrenu podršku kako biste započeli bračno putovanje koje je ugodno Allahu, ispunjeno ljubavlju i milosrđem",
    cards: [
      {
        title: "Vrijedni savjeti za vaš bračni život",
        description:
          "Nudimo praktične smjernice zasnovane na islamskim vrijednostima i životnom iskustvu kako bismo vam pomogli da izgradite sretan i trajan brak.",
      },
      {
        title: "Neprekidna podrška 24/7",
        description:
          "Naš tim je uvijek dostupan da odgovori na vaša pitanja i pruži potrebne smjernice kako bi osigurao sigurno i pouzdano iskustvo.",
      },
      {
        title: "Čvrsti temelji za uspješne odnose",
        description:
          "Budući da je brak partnerstvo zasnovano na ljubavi i milosrđu, dajemo savjete za izgradnju čvrste veze koja donosi sreću i stabilnost.",
      },
      {
        title: "Autentične islamske vrijednosti",
        description:
          "Pomažemo vam da izgradite svoj brak prema islamskim učenjima, s naglaskom na moral i predanost u svakom koraku.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Od zadovoljnih klijenata",
    avatarAlt: "Sretan član Zefaafa",
  },
  testimonial: {
    label: "Naša politika i pristup",
    title: "Šta naši korisnici kažu o Zefaafu?",
    subtitle: "Stvarna iskustva ljudi koji su pronašli svog životnog partnera preko Zefaafa!",
    quote:
      "Ja sam iz Sirije i živim u Evropi — platforma nas je zbližila i olakšala komunikaciju, uz privatnost i poštovanje. Hvala vam.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Ruke koje drže zrna pšenice, simbol blagoslovljenog novog početka",
  },
};

const es: AboutCopy = {
  hero: {
    title: "Sobre nosotros",
    description:
      "ofrecemos a los musulmanes un entorno seguro que preserva los valores y la cohesión familiar. Te ayudamos a encontrar la pareja de vida adecuada mediante herramientas inteligentes y una experiencia transparente que te brinda tranquilidad en cada paso.",
    ctaPrimary: "Explorar la plataforma Zefaaf",
    ctaSecondary: "Crear cuenta gratuita",
    imageAlt: "La mano de una mujer casada descansando suavemente, luciendo su anillo de boda",
  },
  intro: {
    headingLine1: "Zefaaf... una plataforma islámica de matrimonio a nivel mundial",
    headingLine2: "Que defiende los valores de la sharía y preserva la castidad,",
    description:
      "combinando la inteligencia artificial y las tecnologías modernas para unir corazones en un entorno seguro y puro, con un apoyo integral para construir una familia feliz basada en el amor y la compasión.",
  },
  policy: {
    label: "Nuestra política y enfoque",
    title: "Zefaaf... compromiso religioso y confianza absoluta",
    description:
      "combinando la inteligencia artificial y las tecnologías modernas para unir corazones en un entorno seguro y puro, con un apoyo integral para construir una familia feliz basada en el amor y la compasión.",
    bullets: [
      "Respetamos los principios de la sharía en todas nuestras actuaciones para garantizar un entorno puro y seguro para los usuarios.",
      "Aplicamos estrictamente las políticas de la sharía y no toleramos ninguna infracción ética o religiosa.",
      "Todos los responsables de la plataforma son musulmanes comprometidos con las enseñanzas de la sharía.",
      "El registro es gratuito y está abierto a todos.",
      "No hay lugar para relaciones pasajeras, amistades o matrimonios temporales.",
    ],
  },
  gateway: {
    label: "Zefaaf – tu puerta hacia un matrimonio lícito y seguro",
    title:
      "Zefaaf es una plataforma islámica de matrimonio legítima cuyo objetivo es sanar los corazones de los musulmanes",
    description:
      "Creemos que el matrimonio es una gran responsabilidad, por eso ofrecemos un entorno seguro y confidencial, conforme a los principios de la sharía, que abarca todos los países del mundo, para ayudarte a planificar tu matrimonio según la ética islámica.",
    videoAlt: "Una pareja de recién casados tomados de la mano",
  },
  features: {
    heading: "Zefaaf… ¡mucho más que una plataforma de matrimonio!",
    description:
      "Tu compañero en el camino hacia el amor halal. Ofrecemos un entorno seguro y un apoyo sincero para ayudarte a comenzar un camino matrimonial que complazca a Allah, lleno de amor y compasión",
    cards: [
      {
        title: "Consejos valiosos para tu vida matrimonial",
        description:
          "Ofrecemos orientación práctica basada en valores islámicos y experiencias de vida para ayudarte a construir un matrimonio feliz y duradero.",
      },
      {
        title: "Apoyo continuo las 24 horas, los 7 días de la semana",
        description:
          "Nuestro equipo está siempre disponible para responder tus preguntas y brindarte la orientación necesaria para garantizar una experiencia segura y confiable.",
      },
      {
        title: "Bases sólidas para relaciones exitosas",
        description:
          "Dado que el matrimonio es una asociación basada en el amor y la compasión, ofrecemos consejos para construir una relación sólida que aporte felicidad y estabilidad.",
      },
      {
        title: "Valores islámicos auténticos",
        description:
          "Te ayudamos a establecer tu matrimonio conforme a las enseñanzas islámicas, con énfasis en la ética y el compromiso en cada paso.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "De clientes felices",
    avatarAlt: "Un miembro feliz de Zefaaf",
  },
  testimonial: {
    label: "Nuestra política y enfoque",
    title: "¿Qué dicen nuestros usuarios sobre Zefaaf?",
    subtitle: "¡Experiencias reales de personas que encontraron a su pareja de vida a través de Zefaaf!",
    quote:
      "Soy de Siria y vivo en Europa — la plataforma nos acercó y facilitó la comunicación, con privacidad y respeto. Gracias.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Manos sosteniendo granos de trigo, símbolo de un nuevo comienzo bendecido",
  },
};

const fa: AboutCopy = {
  hero: {
    title: "درباره ما",
    description:
      "ما برای مسلمانان محیطی امن فراهم می‌کنیم که ارزش‌ها و پیوستگی خانوادگی را حفظ می‌کند. با ابزارهای هوشمند و تجربه‌ای شفاف، به شما کمک می‌کنیم همسر مناسب زندگی خود را بیابید و در هر قدم آرامش خاطر داشته باشید.",
    ctaPrimary: "کاوش در پلتفرم زفاف",
    ctaSecondary: "ایجاد حساب رایگان",
    imageAlt: "دست یک زن متأهل که به آرامی قرار گرفته و حلقه ازدواجش را بر انگشت دارد",
  },
  intro: {
    headingLine1: "زفاف... یک پلتفرم جهانی ازدواج اسلامی",
    headingLine2: "که ارزش‌های شرعی را پاس می‌دارد و عفت را حفظ می‌کند،",
    description:
      "با ترکیب هوش مصنوعی و فناوری‌های نوین، دل‌ها را در محیطی امن و پاک به هم پیوند می‌دهد و با حمایتی کامل به ساختن خانواده‌ای شاد بر پایه‌ی عشق و مهربانی کمک می‌کند.",
  },
  policy: {
    label: "سیاست و رویکرد ما",
    title: "زفاف... پایبندی شرعی و اعتماد مطلق",
    description:
      "با ترکیب هوش مصنوعی و فناوری‌های نوین، دل‌ها را در محیطی امن و پاک به هم پیوند می‌دهد و با حمایتی کامل به ساختن خانواده‌ای شاد بر پایه‌ی عشق و مهربانی کمک می‌کند.",
    bullets: [
      "ما در تمام تعاملات خود به ضوابط شرعی پایبندیم تا محیطی پاک و امن برای کاربران فراهم شود.",
      "ما سیاست‌های شرعی را با دقت اجرا می‌کنیم و هیچ‌گونه تخلف اخلاقی یا دینی را نمی‌پذیریم.",
      "همه‌ی گردانندگان این پلتفرم مسلمانانی پایبند به آموزه‌های شرعی هستند.",
      "ثبت‌نام رایگان و برای همه باز است.",
      "هیچ جایی برای روابط گذرا، دوستی‌های ساده یا ازدواج‌های موقت وجود ندارد.",
    ],
  },
  gateway: {
    label: "زفاف – دروازه‌ی شما به سوی ازدواجی حلال و امن",
    title: "زفاف یک پلتفرم مشروع ازدواج اسلامی است که هدف آن التیام دل‌های مسلمانان است",
    description:
      "ما باور داریم که ازدواج مسئولیتی بزرگ است، از این رو محیطی امن و محرمانه، مطابق با ضوابط شرعی، که تمام کشورهای جهان را در بر می‌گیرد فراهم می‌کنیم تا به شما در برنامه‌ریزی ازدواجتان مطابق با اخلاق اسلامی کمک کنیم.",
    videoAlt: "زوجی تازه ازدواج‌کرده که دست یکدیگر را گرفته‌اند",
  },
  features: {
    heading: "زفاف… چیزی فراتر از یک پلتفرم ازدواج!",
    description:
      "همراه شما در مسیر عشق حلال. ما محیطی امن و پشتیبانی صادقانه فراهم می‌کنیم تا سفر ازدواجی را آغاز کنید که خدا را خشنود می‌سازد، سفری سرشار از عشق و مهربانی",
    cards: [
      {
        title: "نکات ارزشمند برای زندگی زناشویی شما",
        description:
          "ما راهنمایی‌های کاربردی بر پایه‌ی ارزش‌های اسلامی و تجربه‌ی زندگی ارائه می‌دهیم تا به شما در ساختن ازدواجی شاد و پایدار کمک کنیم.",
      },
      {
        title: "پشتیبانی مستمر شبانه‌روزی",
        description:
          "تیم ما همواره آماده‌ی پاسخ‌گویی به پرسش‌های شماست و راهنمایی‌های لازم را برای تجربه‌ای امن و قابل‌اعتماد ارائه می‌دهد.",
      },
      {
        title: "پایه‌های محکم برای روابط موفق",
        description:
          "از آنجا که ازدواج مشارکتی بر پایه‌ی عشق و مهربانی است، نکاتی برای ساختن رابطه‌ای قوی ارائه می‌دهیم که شادی و ثبات به همراه می‌آورد.",
      },
      {
        title: "ارزش‌های اصیل اسلامی",
        description:
          "ما به شما کمک می‌کنیم ازدواج خود را مطابق با آموزه‌های اسلامی بنا کنید، با تأکید بر اخلاق و پایبندی در هر قدم.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "از مشتریان راضی",
    avatarAlt: "یکی از اعضای خوشحال زفاف",
  },
  testimonial: {
    label: "سیاست و رویکرد ما",
    title: "کاربران ما درباره‌ی زفاف چه می‌گویند؟",
    subtitle: "تجربه‌های واقعی افرادی که همسر زندگی خود را از طریق زفاف یافته‌اند!",
    quote:
      "من اهل سوریه هستم و در اروپا زندگی می‌کنم — این پلتفرم ما را به هم نزدیک کرد و ارتباط را با حفظ حریم خصوصی و احترام آسان‌تر ساخت. از شما سپاسگزارم.",
    names: ["نورا زریق", "انس حمدان"],
    photoAlt: "دست‌هایی که دانه‌های گندم را در خود گرفته‌اند، نمادی از آغازی نو و پربرکت",
  },
};

const pt: AboutCopy = {
  hero: {
    title: "Sobre nós",
    description:
      "oferecemos aos muçulmanos um ambiente seguro que preserva os valores e a coesão familiar. Ajudamos você a encontrar o parceiro de vida ideal por meio de ferramentas inteligentes e uma experiência transparente que traz tranquilidade a cada passo.",
    ctaPrimary: "Explorar a plataforma Zefaaf",
    ctaSecondary: "Criar conta gratuita",
    imageAlt: "A mão de uma mulher casada repousando suavemente, usando sua aliança de casamento",
  },
  intro: {
    headingLine1: "Zefaaf... uma plataforma islâmica global de casamento",
    headingLine2: "Que preserva os valores da sharia e a castidade,",
    description:
      "combinando inteligência artificial e tecnologias modernas para unir corações em um ambiente seguro e puro, com apoio total para construir uma família feliz baseada no amor e na compaixão.",
  },
  policy: {
    label: "Nossa política e abordagem",
    title: "Zefaaf... compromisso religioso e confiança absoluta",
    description:
      "combinando inteligência artificial e tecnologias modernas para unir corações em um ambiente seguro e puro, com apoio total para construir uma família feliz baseada no amor e na compaixão.",
    bullets: [
      "Seguimos as diretrizes da sharia em todas as nossas ações para garantir um ambiente puro e seguro para os usuários.",
      "Aplicamos rigorosamente as políticas da sharia e não toleramos qualquer violação ética ou religiosa.",
      "Todos os responsáveis pela plataforma são muçulmanos comprometidos com os ensinamentos da sharia.",
      "O cadastro é gratuito e aberto a todos.",
      "Não há espaço para relações passageiras, amizades ou casamentos temporários.",
    ],
  },
  gateway: {
    label: "Zefaaf – sua porta de entrada para um casamento lícito e seguro",
    title: "Zefaaf é uma plataforma islâmica de casamento legítima que visa curar os corações dos muçulmanos",
    description:
      "Acreditamos que o casamento é uma grande responsabilidade, por isso oferecemos um ambiente seguro e confidencial, em conformidade com as diretrizes da sharia, abrangendo todos os países do mundo, para ajudá-lo a planejar seu casamento segundo a ética islâmica.",
    videoAlt: "Um casal recém-casado de mãos dadas",
  },
  features: {
    heading: "Zefaaf… muito mais do que uma plataforma de casamento!",
    description:
      "Seu companheiro no caminho do amor halal. Oferecemos um ambiente seguro e apoio sincero para ajudá-lo a iniciar uma jornada matrimonial que agrade a Allah, repleta de amor e compaixão",
    cards: [
      {
        title: "Dicas valiosas para sua vida conjugal",
        description:
          "Oferecemos orientação prática baseada em valores islâmicos e experiências de vida para ajudá-lo a construir um casamento feliz e duradouro.",
      },
      {
        title: "Suporte contínuo 24 horas por dia, 7 dias por semana",
        description:
          "Nossa equipe está sempre disponível para responder suas perguntas e fornecer a orientação necessária para garantir uma experiência segura e confiável.",
      },
      {
        title: "Bases sólidas para relacionamentos bem-sucedidos",
        description:
          "Como o casamento é uma parceria baseada no amor e na compaixão, oferecemos dicas para construir um relacionamento forte que traga felicidade e estabilidade.",
      },
      {
        title: "Valores islâmicos autênticos",
        description:
          "Ajudamos você a construir seu casamento de acordo com os ensinamentos islâmicos, com ênfase na ética e no compromisso em cada etapa.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "De clientes felizes",
    avatarAlt: "Um membro feliz da Zefaaf",
  },
  testimonial: {
    label: "Nossa política e abordagem",
    title: "O que nossos usuários dizem sobre a Zefaaf?",
    subtitle: "Experiências reais de pessoas que encontraram seu parceiro de vida através da Zefaaf!",
    quote:
      "Sou da Síria e vivo na Europa — a plataforma nos aproximou e facilitou a comunicação, com privacidade e respeito. Obrigado a vocês.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Mãos segurando grãos de trigo, símbolo de um novo começo abençoado",
  },
};

const ja: AboutCopy = {
  hero: {
    title: "私たちについて",
    description:
      "私たちはムスリムの皆様に、価値観と家族の絆を守る安全な環境を提供します。スマートなツールと透明性のある体験を通じて、あらゆる段階で安心感を持ちながら、ふさわしい人生の伴侶を見つけるお手伝いをします。",
    ctaPrimary: "Zefaafプラットフォームを見る",
    ctaSecondary: "無料アカウントを作成",
    imageAlt: "結婚指輪をはめた既婚女性の手がそっと置かれている様子",
  },
  intro: {
    headingLine1: "Zefaaf...世界規模のイスラム結婚プラットフォーム",
    headingLine2: "シャリーアの価値観を守り、貞節を保つ、",
    description:
      "人工知能と最新テクノロジーを組み合わせ、安全で清らかな環境の中で心と心を結び、愛と慈しみに基づく幸せな家庭を築くための全面的なサポートを提供します。",
  },
  policy: {
    label: "私たちの方針とアプローチ",
    title: "Zefaaf...シャリーアへの忠実さと絶対的な信頼",
    description:
      "人工知能と最新テクノロジーを組み合わせ、安全で清らかな環境の中で心と心を結び、愛と慈しみに基づく幸せな家庭を築くための全面的なサポートを提供します。",
    bullets: [
      "利用者のために清らかで安全な環境を確保するため、私たちはあらゆる取り組みにおいてシャリーアの規範を遵守します。",
      "私たちはシャリーアの方針を厳格に守り、いかなる倫理的・宗教的違反も容認しません。",
      "プラットフォームの運営者は全員、シャリーアの教えに忠実なムスリムです。",
      "登録は無料で、どなたでもご利用いただけます。",
      "軽い交際、単なる友人関係、一時的な結婚の入る余地はありません。",
    ],
  },
  gateway: {
    label: "Zefaaf ― 合法で安全な結婚への入り口",
    title: "Zefaafはムスリムの心を癒すことを目指す、正当なイスラム結婚プラットフォームです",
    description:
      "結婚は大きな責任であると私たちは考えます。だからこそ、シャリーアの規範に沿った安全でプライベートな環境を、世界各国を対象に提供し、イスラムの倫理に基づいて結婚を計画するお手伝いをします。",
    videoAlt: "手を取り合う新婚夫婦",
  },
  features: {
    heading: "Zefaaf…単なる結婚プラットフォームではありません!",
    description:
      "ハラールな愛への道を歩むあなたの伴走者。安全な環境と真心のこもったサポートを提供し、愛と慈しみに満ちた、アッラーに喜ばれる結婚の旅を始めるお手伝いをします",
    cards: [
      {
        title: "結婚生活のための貴重なアドバイス",
        description:
          "イスラムの価値観と人生経験に基づいた実践的なアドバイスを提供し、幸せで長続きする結婚を築くお手伝いをします。",
      },
      {
        title: "24時間365日の継続的なサポート",
        description: "私たちのチームは常にご質問にお答えし、安全で信頼できる体験のために必要なアドバイスを提供します。",
      },
      {
        title: "成功する関係のための確かな土台",
        description:
          "結婚は愛と慈しみに基づくパートナーシップであるため、幸せと安定をもたらす強い関係を築くためのアドバイスを提供します。",
      },
      {
        title: "本物のイスラムの価値観",
        description: "私たちは、あらゆる段階で倫理と誠実さを重視しながら、イスラムの教えに基づいて結婚を築くお手伝いをします。",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "満足したお客様より",
    avatarAlt: "満足しているZefaafメンバー",
  },
  testimonial: {
    label: "私たちの方針とアプローチ",
    title: "利用者はZefaafについてどう言っていますか?",
    subtitle: "Zefaafを通じて人生の伴侶を見つけた方々のリアルな体験談!",
    quote:
      "私はシリア出身でヨーロッパに住んでいます。このプラットフォームのおかげで距離が縮まり、プライバシーと敬意を保ちながらコミュニケーションが取りやすくなりました。ありがとうございます。",
    names: ["ノラ・ズレイク", "アナス・ハムダン"],
    photoAlt: "祝福された新しい始まりの象徴である、麦の粒を手にする様子",
  },
};

const ko: AboutCopy = {
  hero: {
    title: "회사 소개",
    description:
      "저희는 무슬림에게 가치관과 가족의 유대를 지켜주는 안전한 환경을 제공합니다. 스마트한 도구와 투명한 경험을 통해 모든 단계에서 마음의 평안을 느끼며 알맞은 인생의 동반자를 찾을 수 있도록 도와드립니다.",
    ctaPrimary: "Zefaaf 플랫폼 둘러보기",
    ctaSecondary: "무료 계정 만들기",
    imageAlt: "결혼반지를 낀 기혼 여성의 손이 살며시 놓여 있는 모습",
  },
  intro: {
    headingLine1: "Zefaaf... 세계적인 이슬람 결혼 플랫폼",
    headingLine2: "샤리아의 가치를 지키고 정절을 보존하는,",
    description:
      "인공지능과 현대 기술을 결합하여 안전하고 순수한 환경에서 마음과 마음을 연결하며, 사랑과 자비를 바탕으로 한 행복한 가정을 이루는 데 전폭적인 지원을 제공합니다.",
  },
  policy: {
    label: "저희의 정책과 접근 방식",
    title: "Zefaaf... 샤리아에 대한 헌신과 절대적인 신뢰",
    description:
      "인공지능과 현대 기술을 결합하여 안전하고 순수한 환경에서 마음과 마음을 연결하며, 사랑과 자비를 바탕으로 한 행복한 가정을 이루는 데 전폭적인 지원을 제공합니다.",
    bullets: [
      "저희는 이용자를 위한 순수하고 안전한 환경을 보장하기 위해 모든 활동에서 샤리아 지침을 준수합니다.",
      "저희는 샤리아 정책을 엄격히 따르며 어떠한 윤리적, 종교적 위반도 용인하지 않습니다.",
      "플랫폼을 운영하는 모든 이는 샤리아의 가르침에 헌신하는 무슬림입니다.",
      "가입은 무료이며 누구나 이용할 수 있습니다.",
      "가벼운 만남, 단순한 친구 관계, 임시적인 결혼이 들어설 자리는 없습니다.",
    ],
  },
  gateway: {
    label: "Zefaaf – 합법적이고 안전한 결혼으로 가는 관문",
    title: "Zefaaf는 무슬림의 마음을 어루만지는 것을 목표로 하는 정당한 이슬람 결혼 플랫폼입니다",
    description:
      "저희는 결혼이 큰 책임이라고 믿기에, 샤리아 지침을 준수하며 전 세계 모든 국가를 아우르는 안전하고 비밀이 보장되는 환경을 제공하여 이슬람 윤리에 따라 결혼을 계획할 수 있도록 돕습니다.",
    videoAlt: "손을 맞잡은 신혼부부",
  },
  features: {
    heading: "Zefaaf… 단순한 결혼 플랫폼 그 이상입니다!",
    description:
      "할랄한 사랑으로 향하는 길에서 당신의 동반자가 되어드립니다. 안전한 환경과 진심 어린 지원을 제공하여 사랑과 자비로 가득하며 알라께서 기뻐하실 결혼 여정을 시작할 수 있도록 돕습니다",
    cards: [
      {
        title: "결혼 생활을 위한 소중한 조언",
        description: "이슬람의 가치와 삶의 경험을 바탕으로 한 실용적인 안내를 제공하여 행복하고 지속 가능한 결혼을 이루도록 돕습니다.",
      },
      {
        title: "24시간 연중무휴 지속적인 지원",
        description:
          "저희 팀은 언제나 여러분의 질문에 답하고 안전하고 신뢰할 수 있는 경험을 위해 필요한 안내를 제공할 준비가 되어 있습니다.",
      },
      {
        title: "성공적인 관계를 위한 견고한 토대",
        description:
          "결혼은 사랑과 자비를 바탕으로 한 동반자 관계이기에, 행복과 안정을 가져다주는 견고한 관계를 쌓기 위한 조언을 제공합니다.",
      },
      {
        title: "진정한 이슬람 가치",
        description: "모든 단계에서 윤리와 헌신을 강조하며 이슬람의 가르침에 따라 결혼을 세워나가도록 돕습니다.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "행복한 고객으로부터",
    avatarAlt: "행복한 Zefaaf 회원",
  },
  testimonial: {
    label: "저희의 정책과 접근 방식",
    title: "이용자들은 Zefaaf에 대해 어떻게 말할까요?",
    subtitle: "Zefaaf를 통해 인생의 동반자를 찾은 사람들의 진짜 이야기!",
    quote:
      "저는 시리아 출신이며 유럽에 살고 있습니다 — 이 플랫폼 덕분에 서로 가까워졌고, 사생활과 존중을 지키며 소통이 한결 수월해졌습니다. 감사합니다.",
    names: ["노라 즈레이크", "아나스 함단"],
    photoAlt: "축복받은 새로운 시작을 상징하는, 밀알을 쥔 두 손",
  },
};

const it: AboutCopy = {
  hero: {
    title: "Chi siamo",
    description:
      "offriamo ai musulmani un ambiente sicuro che preserva i valori e la coesione familiare. Ti aiutiamo a trovare il partner di vita giusto attraverso strumenti intelligenti e un'esperienza trasparente che ti dà serenità a ogni passo.",
    ctaPrimary: "Scopri la piattaforma Zefaaf",
    ctaSecondary: "Crea un account gratuito",
    imageAlt: "La mano di una donna sposata poggiata delicatamente, con la sua fede nuziale",
  },
  intro: {
    headingLine1: "Zefaaf... una piattaforma islamica di matrimonio globale",
    headingLine2: "Che difende i valori della sharia e preserva la castità,",
    description:
      "unendo intelligenza artificiale e tecnologie moderne per connettere i cuori in un ambiente sicuro e puro, con pieno supporto per costruire una famiglia felice fondata sull'amore e sulla compassione.",
  },
  policy: {
    label: "La nostra politica e il nostro approccio",
    title: "Zefaaf... impegno religioso e fiducia assoluta",
    description:
      "unendo intelligenza artificiale e tecnologie moderne per connettere i cuori in un ambiente sicuro e puro, con pieno supporto per costruire una famiglia felice fondata sull'amore e sulla compassione.",
    bullets: [
      "Rispettiamo i principi della sharia in tutte le nostre attività per garantire un ambiente puro e sicuro agli utenti.",
      "Applichiamo rigorosamente le politiche della sharia e non tolleriamo alcuna violazione etica o religiosa.",
      "Tutti i responsabili della piattaforma sono musulmani devoti agli insegnamenti della sharia.",
      "La registrazione è gratuita e aperta a tutti.",
      "Non c'è spazio per relazioni occasionali, amicizie o matrimoni temporanei.",
    ],
  },
  gateway: {
    label: "Zefaaf – la tua porta d'accesso a un matrimonio lecito e sicuro",
    title: "Zefaaf è una piattaforma islamica di matrimonio legittima che mira a guarire i cuori dei musulmani",
    description:
      "Crediamo che il matrimonio sia una grande responsabilità, per questo offriamo un ambiente sicuro e riservato, conforme ai principi della sharia, che copre tutti i paesi del mondo, per aiutarti a pianificare il tuo matrimonio secondo l'etica islamica.",
    videoAlt: "Una coppia di sposi novelli mano nella mano",
  },
  features: {
    heading: "Zefaaf… molto più di una semplice piattaforma di matrimonio!",
    description:
      "Il tuo compagno di viaggio verso l'amore halal. Offriamo un ambiente sicuro e un sostegno sincero per aiutarti a iniziare un percorso matrimoniale gradito ad Allah, colmo di amore e compassione",
    cards: [
      {
        title: "Consigli preziosi per la tua vita coniugale",
        description:
          "Offriamo indicazioni pratiche basate sui valori islamici e sull'esperienza di vita per aiutarti a costruire un matrimonio felice e duraturo.",
      },
      {
        title: "Supporto continuo 24 ore su 24, 7 giorni su 7",
        description:
          "Il nostro team è sempre disponibile per rispondere alle tue domande e fornire le indicazioni necessarie per garantire un'esperienza sicura e affidabile.",
      },
      {
        title: "Basi solide per relazioni di successo",
        description:
          "Poiché il matrimonio è una partnership fondata sull'amore e sulla compassione, offriamo consigli per costruire una relazione solida che porti felicità e stabilità.",
      },
      {
        title: "Valori islamici autentici",
        description:
          "Ti aiutiamo a costruire il tuo matrimonio secondo gli insegnamenti islamici, con enfasi sull'etica e sull'impegno in ogni fase.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Di clienti felici",
    avatarAlt: "Un membro felice di Zefaaf",
  },
  testimonial: {
    label: "La nostra politica e il nostro approccio",
    title: "Cosa dicono i nostri utenti di Zefaaf?",
    subtitle: "Esperienze reali di persone che hanno trovato il proprio partner di vita grazie a Zefaaf!",
    quote:
      "Vengo dalla Siria e vivo in Europa — la piattaforma ci ha avvicinati e ha reso più facile comunicare, con privacy e rispetto. Grazie a voi.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Mani che tengono chicchi di grano, simbolo di un nuovo inizio benedetto",
  },
};

const ur: AboutCopy = {
  hero: {
    title: "ہمارے بارے میں",
    description:
      "ہم مسلمانوں کو ایک محفوظ ماحول فراہم کرتے ہیں جو اقدار اور خاندانی یکجہتی کو برقرار رکھتا ہے۔ ہم ذہین آلات اور شفاف تجربے کے ذریعے آپ کو مناسب زندگی کے ساتھی کو تلاش کرنے میں مدد دیتے ہیں، جو ہر قدم پر آپ کو ذہنی سکون فراہم کرتا ہے۔",
    ctaPrimary: "زفاف پلیٹ فارم دیکھیں",
    ctaSecondary: "مفت اکاؤنٹ بنائیں",
    imageAlt: "ایک شادی شدہ خاتون کا ہاتھ نرمی سے رکھا ہوا، جس میں اس کی شادی کی انگوٹھی ہے",
  },
  intro: {
    headingLine1: "زفاف... ایک عالمی اسلامی شادی پلیٹ فارم",
    headingLine2: "جو شرعی اقدار کو برقرار رکھتا ہے اور عفت کی حفاظت کرتا ہے،",
    description:
      "مصنوعی ذہانت اور جدید ٹیکنالوجیز کو یکجا کر کے دلوں کو ایک محفوظ اور پاکیزہ ماحول میں جوڑتا ہے، اور محبت و رحمت پر مبنی خوشحال خاندان بنانے کے لیے مکمل معاونت فراہم کرتا ہے۔",
  },
  policy: {
    label: "ہماری پالیسی اور طریقہ کار",
    title: "زفاف... شرعی پابندی اور مکمل اعتماد",
    description:
      "مصنوعی ذہانت اور جدید ٹیکنالوجیز کو یکجا کر کے دلوں کو ایک محفوظ اور پاکیزہ ماحول میں جوڑتا ہے، اور محبت و رحمت پر مبنی خوشحال خاندان بنانے کے لیے مکمل معاونت فراہم کرتا ہے۔",
    bullets: [
      "ہم اپنے تمام معاملات میں شریعت کے ضوابط کی پاسداری کرتے ہیں تاکہ صارفین کے لیے ایک پاکیزہ اور محفوظ ماحول یقینی بنایا جا سکے۔",
      "ہم شرعی پالیسیوں پر سختی سے عمل کرتے ہیں اور کسی بھی اخلاقی یا مذہبی خلاف ورزی کو برداشت نہیں کرتے۔",
      "پلیٹ فارم چلانے والے تمام افراد شریعت کی تعلیمات کے پابند مسلمان ہیں۔",
      "رجسٹریشن مفت اور سب کے لیے کھلی ہے۔",
      "عارضی تعلقات، محض دوستی یا وقتی شادی کی یہاں کوئی گنجائش نہیں۔",
    ],
  },
  gateway: {
    label: "زفاف – حلال اور محفوظ شادی کی جانب آپ کا دروازہ",
    title: "زفاف ایک جائز اسلامی شادی پلیٹ فارم ہے جس کا مقصد مسلمانوں کے دلوں کو جوڑنا ہے",
    description:
      "ہم مانتے ہیں کہ شادی ایک بڑی ذمہ داری ہے، اسی لیے ہم شرعی ضوابط کے مطابق، دنیا بھر کے تمام ممالک کا احاطہ کرنے والا ایک محفوظ اور خفیہ ماحول فراہم کرتے ہیں، تاکہ آپ اسلامی اخلاقیات کے مطابق اپنی شادی کی منصوبہ بندی کر سکیں۔",
    videoAlt: "ایک نئے شادی شدہ جوڑے کے ہاتھ ملے ہوئے",
  },
  features: {
    heading: "زفاف… محض ایک شادی پلیٹ فارم سے کہیں بڑھ کر!",
    description:
      "حلال محبت کے سفر میں آپ کا ساتھی۔ ہم ایک محفوظ ماحول اور مخلصانہ معاونت فراہم کرتے ہیں تاکہ آپ ایک ایسا ازدواجی سفر شروع کر سکیں جو اللہ کو پسند ہو، محبت اور رحمت سے بھرپور",
    cards: [
      {
        title: "آپ کی ازدواجی زندگی کے لیے قیمتی مشورے",
        description:
          "ہم اسلامی اقدار اور زندگی کے تجربات پر مبنی عملی رہنمائی فراہم کرتے ہیں تاکہ آپ ایک خوشحال اور پائیدار شادی قائم کر سکیں۔",
      },
      {
        title: "چوبیس گھنٹے مسلسل معاونت",
        description:
          "ہماری ٹیم آپ کے سوالات کے جوابات دینے اور ایک محفوظ و قابل اعتماد تجربے کے لیے ضروری رہنمائی فراہم کرنے کے لیے ہمیشہ دستیاب ہے۔",
      },
      {
        title: "کامیاب تعلقات کے لیے مضبوط بنیادیں",
        description:
          "چونکہ شادی محبت اور رحمت پر مبنی ایک شراکت داری ہے، ہم آپ کو ایک مضبوط رشتہ قائم کرنے کے لیے مشورے دیتے ہیں جو خوشی اور استحکام لاتا ہے۔",
      },
      {
        title: "حقیقی اسلامی اقدار",
        description: "ہم آپ کو ہر قدم پر اخلاقیات اور پابندی پر زور دیتے ہوئے اسلامی تعلیمات کے مطابق اپنی شادی قائم کرنے میں مدد دیتے ہیں۔",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "خوش گاہکوں کی جانب سے",
    avatarAlt: "زفاف کا ایک خوش رکن",
  },
  testimonial: {
    label: "ہماری پالیسی اور طریقہ کار",
    title: "ہمارے صارفین زفاف کے بارے میں کیا کہتے ہیں؟",
    subtitle: "زفاف کے ذریعے اپنے زندگی کے ساتھی کو پانے والے لوگوں کے حقیقی تجربات!",
    quote:
      "میں شام سے ہوں اور یورپ میں مقیم ہوں — اس پلیٹ فارم نے ہمیں قریب لایا اور رازداری و احترام کے ساتھ رابطے کو آسان بنایا۔ آپ کا شکریہ۔",
    names: ["نورا زریق", "انس حمدان"],
    photoAlt: "گندم کے دانے تھامے ہوئے ہاتھ، ایک بابرکت نئے آغاز کی علامت",
  },
};

const ta: AboutCopy = {
  hero: {
    title: "எங்களைப் பற்றி",
    description:
      "முஸ்லிம்களுக்கு மதிப்புகளையும் குடும்ப ஒற்றுமையையும் பாதுகாக்கும் பாதுகாப்பான சூழலை நாங்கள் வழங்குகிறோம். ஒவ்வொரு அடியிலும் உங்களுக்கு மன அமைதியை அளிக்கும் ஸ்மார்ட் கருவிகள் மற்றும் வெளிப்படையான அனுபவத்தின் மூலம் பொருத்தமான வாழ்க்கைத் துணையைக் கண்டறிய நாங்கள் உதவுகிறோம்.",
    ctaPrimary: "Zefaaf தளத்தை ஆராயுங்கள்",
    ctaSecondary: "இலவச கணக்கை உருவாக்குங்கள்",
    imageAlt: "திருமணமான ஒரு பெண்ணின் கை மெதுவாக வைக்கப்பட்டு, தன் திருமண மோதிரத்தை அணிந்திருக்கிறது",
  },
  intro: {
    headingLine1: "Zefaaf... ஒரு உலகளாவிய இஸ்லாமிய திருமண தளம்",
    headingLine2: "ஷரீஆ மதிப்புகளை நிலைநிறுத்தி, கற்பைப் பாதுகாக்கும்,",
    description:
      "செயற்கை நுண்ணறிவு மற்றும் நவீன தொழில்நுட்பங்களை இணைத்து, பாதுகாப்பான தூய சூழலில் இதயங்களை இணைத்து, அன்பு மற்றும் இரக்கத்தின் அடிப்படையில் மகிழ்ச்சியான குடும்பத்தை உருவாக்க முழு ஆதரவை வழங்குகிறது.",
  },
  policy: {
    label: "எங்கள் கொள்கை மற்றும் அணுகுமுறை",
    title: "Zefaaf... ஷரீஆ கடமைப்பாடு மற்றும் முழுமையான நம்பிக்கை",
    description:
      "செயற்கை நுண்ணறிவு மற்றும் நவீன தொழில்நுட்பங்களை இணைத்து, பாதுகாப்பான தூய சூழலில் இதயங்களை இணைத்து, அன்பு மற்றும் இரக்கத்தின் அடிப்படையில் மகிழ்ச்சியான குடும்பத்தை உருவாக்க முழு ஆதரவை வழங்குகிறது.",
    bullets: [
      "பயனர்களுக்கு தூய்மையான, பாதுகாப்பான சூழலை உறுதிப்படுத்த, எங்கள் அனைத்து நடவடிக்கைகளிலும் ஷரீஆ வழிகாட்டுதல்களை நாங்கள் கடைப்பிடிக்கிறோம்.",
      "நாங்கள் ஷரீஆ கொள்கைகளை கண்டிப்பாகப் பின்பற்றுகிறோம், எந்த நெறிமுறை அல்லது மத மீறலையும் பொறுத்துக்கொள்ள மாட்டோம்.",
      "தளத்தை நடத்தும் அனைவரும் ஷரீஆ போதனைகளுக்கு அர்ப்பணிக்கப்பட்ட முஸ்லிம்கள்.",
      "பதிவு இலவசம், அனைவருக்கும் திறந்திருக்கிறது.",
      "சாதாரண உறவுகள், நட்பு அல்லது தற்காலிக திருமணங்களுக்கு இங்கு இடமில்லை.",
    ],
  },
  gateway: {
    label: "Zefaaf – ஹலாலான, பாதுகாப்பான திருமணத்திற்கான உங்கள் வாசல்",
    title: "Zefaaf என்பது முஸ்லிம்களின் இதயங்களைப் பொருத்துவதை நோக்கமாகக் கொண்ட ஒரு நேர்மையான இஸ்லாமிய திருமண தளமாகும்",
    description:
      "திருமணம் ஒரு பெரிய பொறுப்பு என்று நாங்கள் நம்புகிறோம், எனவே ஷரீஆ வழிகாட்டுதல்களுக்கு இணங்க, உலகின் அனைத்து நாடுகளையும் உள்ளடக்கிய பாதுகாப்பான, ரகசியமான சூழலை வழங்கி, இஸ்லாமிய நெறிமுறைகளின்படி உங்கள் திருமணத்தைத் திட்டமிட உதவுகிறோம்.",
    videoAlt: "கைகோர்த்திருக்கும் புதிதாக திருமணமான ஜோடி",
  },
  features: {
    heading: "Zefaaf… வெறும் திருமண தளத்தை விட அதிகம்!",
    description:
      "ஹலாலான அன்பின் பாதையில் உங்கள் துணை. அன்பு மற்றும் இரக்கம் நிறைந்த, அல்லாஹ்வை மகிழ்விக்கும் திருமண பயணத்தைத் தொடங்க பாதுகாப்பான சூழலையும் உண்மையான ஆதரவையும் வழங்குகிறோம்",
    cards: [
      {
        title: "உங்கள் திருமண வாழ்க்கைக்கான மதிப்புமிக்க குறிப்புகள்",
        description:
          "மகிழ்ச்சியான, நீடித்த திருமணத்தை உருவாக்க இஸ்லாமிய மதிப்புகள் மற்றும் வாழ்க்கை அனுபவங்களை அடிப்படையாகக் கொண்ட நடைமுறை வழிகாட்டுதலை வழங்குகிறோம்.",
      },
      {
        title: "24/7 தொடர்ச்சியான ஆதரவு",
        description:
          "பாதுகாப்பான, நம்பகமான அனுபவத்தை உறுதிசெய்ய உங்கள் கேள்விகளுக்கு பதிலளிக்கவும் தேவையான வழிகாட்டுதலை வழங்கவும் எங்கள் குழு எப்போதும் தயாராக உள்ளது.",
      },
      {
        title: "வெற்றிகரமான உறவுகளுக்கான உறுதியான அடித்தளங்கள்",
        description:
          "திருமணம் அன்பு மற்றும் இரக்கத்தை அடிப்படையாகக் கொண்ட ஒரு கூட்டாண்மை என்பதால், மகிழ்ச்சியையும் ஸ்திரத்தன்மையையும் தரும் வலுவான உறவை உருவாக்க குறிப்புகளை வழங்குகிறோம்.",
      },
      {
        title: "உண்மையான இஸ்லாமிய மதிப்புகள்",
        description:
          "ஒவ்வொரு அடியிலும் நெறிமுறை மற்றும் அர்ப்பணிப்பை வலியுறுத்தி, இஸ்லாமிய போதனைகளின்படி உங்கள் திருமணத்தை நிறுவ உதவுகிறோம்.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "மகிழ்ச்சியான வாடிக்கையாளர்களிடமிருந்து",
    avatarAlt: "மகிழ்ச்சியான ஜெஃபாஃப் உறுப்பினர்",
  },
  testimonial: {
    label: "எங்கள் கொள்கை மற்றும் அணுகுமுறை",
    title: "எங்கள் பயனர்கள் Zefaaf பற்றி என்ன கூறுகிறார்கள்?",
    subtitle: "Zefaaf மூலம் தங்கள் வாழ்க்கைத் துணையைக் கண்டறிந்த மக்களின் உண்மையான அனுபவங்கள்!",
    quote:
      "நான் சிரியாவைச் சேர்ந்தவன், ஐரோப்பாவில் வசிக்கிறேன் — இந்த தளம் எங்களை நெருக்கமாக்கியது, தனியுரிமையுடனும் மரியாதையுடனும் தொடர்பைக் எளிதாக்கியது. நன்றி.",
    names: ["நோரா ஸ்ரேக்", "அனஸ் ஹம்தான்"],
    photoAlt: "ஆசீர்வதிக்கப்பட்ட புதிய தொடக்கத்தின் அடையாளமாக, கோதுமை மணிகளை ஏந்தியிருக்கும் கைகள்",
  },
};

const am: AboutCopy = {
  hero: {
    title: "ስለ እኛ",
    description:
      "ለሙስሊሞች እሴቶችንና የቤተሰብ ትስስርን የሚጠብቅ ደህንነቱ የተጠበቀ አካባቢ እናቀርባለን። በእያንዳንዱ እርምጃ የአእምሮ ሰላም የሚሰጥዎትን ብልህ መሳሪያዎችና ግልጽ ተሞክሮ በመጠቀም ተስማሚ የሕይወት አጋር እንዲያገኙ እንረዳዎታለን።",
    ctaPrimary: "የዘፋአፍ መድረክን ያስሱ",
    ctaSecondary: "ነጻ አካውንት ይክፈቱ",
    imageAlt: "የተጋባች ሴት እጅ የጋብቻ ቀለበቷን አድርጋ በእርጋታ ስታርፍ",
  },
  intro: {
    headingLine1: "ዘፋአፍ... ዓለም አቀፍ የእስልምና ጋብቻ መድረክ",
    headingLine2: "የሸሪዓ እሴቶችን የሚያከብርና ንጽሕናን የሚጠብቅ፣",
    description:
      "አርቲፊሻል ኢንተለጀንስንና ዘመናዊ ቴክኖሎጂዎችን በማጣመር በደህንነቱ በተጠበቀና በንጹህ አካባቢ ልቦችን ያገናኛል፣ በፍቅርና በርህራሄ ላይ የተመሠረተ ደስተኛ ቤተሰብ ለመገንባት ሙሉ ድጋፍ ይሰጣል።",
  },
  policy: {
    label: "የእኛ ፖሊሲና አካሄድ",
    title: "ዘፋአፍ... የሸሪዓ ቁርጠኝነትና ፍጹም እምነት",
    description:
      "አርቲፊሻል ኢንተለጀንስንና ዘመናዊ ቴክኖሎጂዎችን በማጣመር በደህንነቱ በተጠበቀና በንጹህ አካባቢ ልቦችን ያገናኛል፣ በፍቅርና በርህራሄ ላይ የተመሠረተ ደስተኛ ቤተሰብ ለመገንባት ሙሉ ድጋፍ ይሰጣል።",
    bullets: [
      "ለተጠቃሚዎች ንጹህና ደህንነቱ የተጠበቀ አካባቢ ለማረጋገጥ በሁሉም ግንኙነቶቻችን የሸሪዓ መመሪያዎችን እናከብራለን።",
      "የሸሪዓ ፖሊሲዎችን በጥብቅ እንከተላለን፣ ማንኛውንም የሥነ ምግባር ወይም የሃይማኖት ጥሰት አንታገስም።",
      "መድረኩን የሚያንቀሳቅሱ ሁሉም ለሸሪዓ ትምህርቶች ቁርጠኛ የሆኑ ሙስሊሞች ናቸው።",
      "ምዝገባ ነጻና ለሁሉም ክፍት ነው።",
      "ለጊዜያዊ ግንኙነቶች፣ ለወዳጅነት ብቻ ወይም ለጊዜያዊ ጋብቻ ቦታ የለም።",
    ],
  },
  gateway: {
    label: "ዘፋአፍ – ወደ ህጋዊና ደህንነቱ የተጠበቀ ጋብቻ የሚወስድ በርዎ",
    title: "ዘፋአፍ የሙስሊሞችን ልብ ለመጠገን ያለመ ህጋዊ የእስልምና ጋብቻ መድረክ ነው",
    description:
      "ጋብቻ ትልቅ ኃላፊነት እንደሆነ እናምናለን፣ ስለዚህ ከሸሪዓ መመሪያዎች ጋር የሚስማማ፣ በዓለም ላይ ያሉ ሁሉንም ሀገራት የሚሸፍን ደህንነቱ የተጠበቀና ሚስጥራዊ አካባቢ በማቅረብ በእስልምና ሥነ ምግባር መሠረት ጋብቻዎን እንዲያቅዱ እንረዳዎታለን።",
    videoAlt: "እጅ ለእጅ ተያይዘው የቆሙ አዲስ ተጋቢዎች",
  },
  features: {
    heading: "ዘፋአፍ… ከጋብቻ መድረክ በላይ!",
    description:
      "ወደ ሐላል ፍቅር በሚወስደው መንገድ የእርስዎ አጋር። በፍቅርና በርህራሄ የተሞላ፣ አላህን የሚያስደስት የጋብቻ ጉዞ እንዲጀምሩ ደህንነቱ የተጠበቀ አካባቢና ከልብ የመነጨ ድጋፍ እናቀርባለን",
    cards: [
      {
        title: "ለጋብቻ ሕይወትዎ ጠቃሚ ምክሮች",
        description:
          "ደስተኛና ዘላቂ ጋብቻ እንዲገነቡ ለመርዳት በእስልምና እሴቶችና በሕይወት ተሞክሮዎች ላይ የተመሠረተ ተግባራዊ መመሪያ እናቀርባለን።",
      },
      {
        title: "24/7 ቀጣይነት ያለው ድጋፍ",
        description:
          "ጥያቄዎችዎን ለመመለስና ደህንነቱ የተጠበቀና አስተማማኝ ተሞክሮ ለማረጋገጥ አስፈላጊውን መመሪያ ለመስጠት ቡድናችን ሁልጊዜ ዝግጁ ነው።",
      },
      {
        title: "ለስኬታማ ግንኙነቶች ጠንካራ መሠረቶች",
        description:
          "ጋብቻ በፍቅርና በርህራሄ ላይ የተመሠረተ ሽርክና በመሆኑ፣ ደስታና መረጋጋትን የሚያመጣ ጠንካራ ግንኙነት ለመገንባት ምክሮችን እናቀርባለን።",
      },
      {
        title: "ትክክለኛ የእስልምና እሴቶች",
        description:
          "በእያንዳንዱ እርምጃ ሥነ ምግባርንና ቁርጠኝነትን በማጉላት ጋብቻዎን በእስልምና ትምህርቶች መሠረት እንዲመሠርቱ እንረዳዎታለን።",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "ከደስተኛ ደንበኞች",
    avatarAlt: "ደስተኛ የዘፋአፍ አባል",
  },
  testimonial: {
    label: "የእኛ ፖሊሲና አካሄድ",
    title: "ተጠቃሚዎቻችን ስለ ዘፋአፍ ምን ይላሉ?",
    subtitle: "በዘፋአፍ በኩል የሕይወት አጋራቸውን ያገኙ ሰዎች እውነተኛ ተሞክሮዎች!",
    quote:
      "እኔ ከሶሪያ ነኝ በአውሮፓ እኖራለሁ — መድረኩ አቀራርቦናል፣ ግንኙነትንም በግላዊነትና በአክብሮት አቅልሎታል። እናመሰግናለን።",
    names: ["ኖራ ዝሬቅ", "አነስ ሃምዳን"],
    photoAlt: "የተባረከ አዲስ ጅምር ምልክት የሆኑ የስንዴ ፍሬዎችን የያዙ እጆች",
  },
};

const sv: AboutCopy = {
  hero: {
    title: "Om oss",
    description:
      "vi erbjuder muslimer en trygg miljö som bevarar värderingar och familjesammanhållning. Vi hjälper dig att hitta rätt livspartner genom smarta verktyg och en transparent upplevelse som ger dig sinnesro vid varje steg.",
    ctaPrimary: "Utforska Zefaaf-plattformen",
    ctaSecondary: "Skapa ett gratis konto",
    imageAlt: "En gift kvinnas hand vilar mjukt, bärande sin vigselring",
  },
  intro: {
    headingLine1: "Zefaaf... en global islamisk äktenskapsplattform",
    headingLine2: "Som upprätthåller sharias värderingar och bevarar kyskhet,",
    description:
      "genom att kombinera artificiell intelligens och modern teknik för att förena hjärtan i en trygg och ren miljö, med fullt stöd för att bygga en lycklig familj grundad på kärlek och medkänsla.",
  },
  policy: {
    label: "Vår policy och vårt tillvägagångssätt",
    title: "Zefaaf... shariaåtagande och absolut förtroende",
    description:
      "genom att kombinera artificiell intelligens och modern teknik för att förena hjärtan i en trygg och ren miljö, med fullt stöd för att bygga en lycklig familj grundad på kärlek och medkänsla.",
    bullets: [
      "Vi följer sharias riktlinjer i alla våra åtaganden för att säkerställa en ren och trygg miljö för användarna.",
      "Vi tillämpar strikt sharias policyer och tolererar inga etiska eller religiösa överträdelser.",
      "Alla som driver plattformen är muslimer engagerade i sharias läror.",
      "Registreringen är gratis och öppen för alla.",
      "Det finns inget utrymme för tillfälliga relationer, vänskaper eller tidsbegränsade äktenskap.",
    ],
  },
  gateway: {
    label: "Zefaaf – din port till ett lagligt och tryggt äktenskap",
    title: "Zefaaf är en legitim islamisk äktenskapsplattform som syftar till att läka muslimers hjärtan",
    description:
      "Vi tror att äktenskapet är ett stort ansvar, därför erbjuder vi en trygg och konfidentiell miljö, i linje med sharias riktlinjer, som täcker alla länder i världen, för att hjälpa dig planera ditt äktenskap enligt islamisk etik.",
    videoAlt: "Ett nygift par som håller varandra i handen",
  },
  features: {
    heading: "Zefaaf… mer än bara en äktenskapsplattform!",
    description:
      "Din följeslagare på vägen mot halal kärlek. Vi erbjuder en trygg miljö och genuint stöd för att hjälpa dig påbörja en äktenskaplig resa som behagar Allah, fylld av kärlek och medkänsla",
    cards: [
      {
        title: "Värdefulla tips för ditt äktenskapliga liv",
        description:
          "Vi erbjuder praktisk vägledning baserad på islamiska värderingar och livserfarenheter för att hjälpa dig bygga ett lyckligt och hållbart äktenskap.",
      },
      {
        title: "Kontinuerligt stöd dygnet runt",
        description:
          "Vårt team finns alltid tillgängligt för att svara på dina frågor och ge den vägledning som behövs för en trygg och pålitlig upplevelse.",
      },
      {
        title: "Solida grunder för framgångsrika relationer",
        description:
          "Eftersom äktenskapet är ett partnerskap grundat på kärlek och medkänsla ger vi tips för att bygga en stark relation som skapar lycka och stabilitet.",
      },
      {
        title: "Äkta islamiska värderingar",
        description:
          "Vi hjälper dig att bygga ditt äktenskap enligt islamiska läror, med betoning på etik och engagemang vid varje steg.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Från nöjda kunder",
    avatarAlt: "En glad Zefaaf-medlem",
  },
  testimonial: {
    label: "Vår policy och vårt tillvägagångssätt",
    title: "Vad säger våra användare om Zefaaf?",
    subtitle: "Verkliga upplevelser från personer som hittat sin livspartner genom Zefaaf!",
    quote:
      "Jag är från Syrien och bosatt i Europa — plattformen förde oss närmare varandra och gjorde kommunikationen enklare, med integritet och respekt. Tack så mycket.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Händer som håller vetekorn, en symbol för en välsignad ny början",
  },
};

const da: AboutCopy = {
  hero: {
    title: "Om os",
    description:
      "vi tilbyder muslimer et trygt miljø, der bevarer værdier og familiesammenhold. Vi hjælper dig med at finde den rette livspartner gennem smarte værktøjer og en gennemsigtig oplevelse, der giver dig ro i sindet ved hvert skridt.",
    ctaPrimary: "Udforsk Zefaaf-platformen",
    ctaSecondary: "Opret gratis konto",
    imageAlt: "En gift kvindes hånd hviler blidt og bærer sin vielsesring",
  },
  intro: {
    headingLine1: "Zefaaf... en global islamisk ægteskabsplatform",
    headingLine2: "Der opretholder sharias værdier og bevarer kyskhed,",
    description:
      "ved at kombinere kunstig intelligens og moderne teknologier for at forbinde hjerter i et trygt og rent miljø, med fuld støtte til at opbygge en lykkelig familie baseret på kærlighed og medfølelse.",
  },
  policy: {
    label: "Vores politik og tilgang",
    title: "Zefaaf... sharia-forpligtelse og absolut tillid",
    description:
      "ved at kombinere kunstig intelligens og moderne teknologier for at forbinde hjerter i et trygt og rent miljø, med fuld støtte til at opbygge en lykkelig familie baseret på kærlighed og medfølelse.",
    bullets: [
      "Vi overholder sharias retningslinjer i alle vores handlinger for at sikre et rent og trygt miljø for brugerne.",
      "Vi følger strengt sharias politikker og tolererer ingen etiske eller religiøse overtrædelser.",
      "Alle, der driver platformen, er muslimer, der er forpligtet til sharias lære.",
      "Registrering er gratis og åben for alle.",
      "Der er ikke plads til flygtige forhold, venskaber eller midlertidige ægteskaber.",
    ],
  },
  gateway: {
    label: "Zefaaf – din port til et lovligt og trygt ægteskab",
    title: "Zefaaf er en legitim islamisk ægteskabsplatform, der har til formål at hele muslimers hjerter",
    description:
      "Vi tror på, at ægteskab er et stort ansvar, derfor tilbyder vi et trygt og fortroligt miljø i overensstemmelse med sharias retningslinjer, der dækker alle lande i verden, for at hjælpe dig med at planlægge dit ægteskab i overensstemmelse med islamisk etik.",
    videoAlt: "Et nygift par, der holder i hånd",
  },
  features: {
    heading: "Zefaaf… meget mere end blot en ægteskabsplatform!",
    description:
      "Din ledsager på vejen mod halal kærlighed. Vi tilbyder et trygt miljø og oprigtig støtte til at hjælpe dig med at påbegynde en ægteskabelig rejse, der behager Allah, fyldt med kærlighed og medfølelse",
    cards: [
      {
        title: "Værdifulde tips til dit ægteskabelige liv",
        description:
          "Vi tilbyder praktisk vejledning baseret på islamiske værdier og livserfaringer for at hjælpe dig med at opbygge et lykkeligt og holdbart ægteskab.",
      },
      {
        title: "Kontinuerlig support døgnet rundt",
        description:
          "Vores team er altid til rådighed for at besvare dine spørgsmål og give den nødvendige vejledning for at sikre en tryg og pålidelig oplevelse.",
      },
      {
        title: "Solide fundamenter for succesfulde forhold",
        description:
          "Da ægteskabet er et partnerskab baseret på kærlighed og medfølelse, giver vi tips til at opbygge et stærkt forhold, der skaber lykke og stabilitet.",
      },
      {
        title: "Autentiske islamiske værdier",
        description:
          "Vi hjælper dig med at opbygge dit ægteskab i overensstemmelse med islamisk lære, med vægt på etik og engagement ved hvert skridt.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Fra glade kunder",
    avatarAlt: "Et glad Zefaaf-medlem",
  },
  testimonial: {
    label: "Vores politik og tilgang",
    title: "Hvad siger vores brugere om Zefaaf?",
    subtitle: "Ægte oplevelser fra mennesker, der har fundet deres livspartner gennem Zefaaf!",
    quote:
      "Jeg er fra Syrien og bosat i Europa — platformen bragte os tættere sammen og gjorde kommunikationen lettere, med privatliv og respekt. Tak til jer.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Hænder, der holder hvedekorn, et symbol på en velsignet ny begyndelse",
  },
};

const sq: AboutCopy = {
  hero: {
    title: "Rreth nesh",
    description:
      "u ofrojmë myslimanëve një mjedis të sigurt që ruan vlerat dhe unitetin familjar. Ju ndihmojmë të gjeni partnerin e jetës të përshtatshëm përmes mjeteve inteligjente dhe një përvoje transparente që ju jep qetësi mendore në çdo hap.",
    ctaPrimary: "Eksploroni platformën Zefaaf",
    ctaSecondary: "Krijoni një llogari falas",
    imageAlt: "Dora e një gruaje të martuar duke pushuar butësisht, duke mbajtur unazën e saj të martesës",
  },
  intro: {
    headingLine1: "Zefaaf... një platformë globale martese islame",
    headingLine2: "Që ruan vlerat e sheriatit dhe mbron dëlirësinë,",
    description:
      "duke kombinuar inteligjencën artificiale dhe teknologjitë moderne për të lidhur zemrat në një mjedis të sigurt dhe të pastër, me mbështetje të plotë për të ndërtuar një familje të lumtur të bazuar në dashuri dhe mëshirë.",
  },
  policy: {
    label: "Politika dhe qasja jonë",
    title: "Zefaaf... përkushtim ndaj sheriatit dhe besim absolut",
    description:
      "duke kombinuar inteligjencën artificiale dhe teknologjitë moderne për të lidhur zemrat në një mjedis të sigurt dhe të pastër, me mbështetje të plotë për të ndërtuar një familje të lumtur të bazuar në dashuri dhe mëshirë.",
    bullets: [
      "I përmbahemi udhëzimeve të sheriatit në të gjitha veprimtaritë tona për të siguruar një mjedis të pastër dhe të sigurt për përdoruesit.",
      "Zbatojmë me rigorozitet politikat e sheriatit dhe nuk tolerojmë asnjë shkelje etike apo fetare.",
      "Të gjithë ata që drejtojnë platformën janë myslimanë të përkushtuar ndaj mësimeve të sheriatit.",
      "Regjistrimi është falas dhe i hapur për këdo.",
      "Nuk ka vend për marrëdhënie kalimtare, miqësi apo martesa të përkohshme.",
    ],
  },
  gateway: {
    label: "Zefaaf – porta juaj drejt një martese të ligjshme dhe të sigurt",
    title: "Zefaaf është një platformë legjitime martese islame që synon të shërojë zemrat e myslimanëve",
    description:
      "Besojmë se martesa është një përgjegjësi e madhe, prandaj ofrojmë një mjedis të sigurt dhe konfidencial, në përputhje me udhëzimet e sheriatit, që mbulon të gjitha vendet e botës, për t'ju ndihmuar të planifikoni martesën tuaj sipas etikës islame.",
    videoAlt: "Një çift i sapomartuar duke mbajtur duart",
  },
  features: {
    heading: "Zefaaf… shumë më tepër se një platformë martese!",
    description:
      "Shoku juaj në rrugën drejt dashurisë hallall. Ofrojmë një mjedis të sigurt dhe mbështetje të sinqertë për t'ju ndihmuar të nisni një udhëtim martesor që i pëlqen Allahut, plot dashuri dhe mëshirë",
    cards: [
      {
        title: "Këshilla të vlefshme për jetën tuaj martesore",
        description:
          "Ofrojmë udhëzime praktike të bazuara në vlerat islame dhe përvojat jetësore për t'ju ndihmuar të ndërtoni një martesë të lumtur dhe të qëndrueshme.",
      },
      {
        title: "Mbështetje e vazhdueshme 24/7",
        description:
          "Ekipi ynë është gjithmonë i disponueshëm për t'iu përgjigjur pyetjeve tuaja dhe për të ofruar udhëzimet e nevojshme për një përvojë të sigurt dhe të besueshme.",
      },
      {
        title: "Baza solide për marrëdhënie të suksesshme",
        description:
          "Meqenëse martesa është një partneritet i bazuar në dashuri dhe mëshirë, ofrojmë këshilla për të ndërtuar një marrëdhënie të fortë që sjell lumturi dhe stabilitet.",
      },
      {
        title: "Vlera autentike islame",
        description:
          "Ju ndihmojmë të themeloni martesën tuaj sipas mësimeve islame, duke theksuar etikën dhe përkushtimin në çdo hap.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Nga klientë të lumtur",
    avatarAlt: "Një anëtar i lumtur i Zefaaf",
  },
  testimonial: {
    label: "Politika dhe qasja jonë",
    title: "Çfarë thonë përdoruesit tanë për Zefaaf?",
    subtitle: "Përvoja reale nga njerëz që gjetën partnerin e tyre të jetës përmes Zefaaf!",
    quote:
      "Jam nga Siria dhe jetoj në Evropë — platforma na afroi dhe e bëri komunikimin më të lehtë, me privatësi dhe respekt. Ju faleminderit.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Duar që mbajnë kokrra gruri, simbol i një fillimi të ri të bekuar",
  },
};

const uz: AboutCopy = {
  hero: {
    title: "Biz haqimizda",
    description:
      "biz musulmonlarga qadriyatlar va oilaviy birlikni saqlaydigan xavfsiz muhitni taqdim etamiz. Har bir qadamda sizga ruhiy tinchlik beradigan aqlli vositalar va shaffof tajriba orqali munosib hayot yo'ldoshingizni topishga yordam beramiz.",
    ctaPrimary: "Zefaaf platformasini o'rganing",
    ctaSecondary: "Bepul hisob yarating",
    imageAlt: "Turmush qurgan ayolning qo'li nikoh uzugini taqib, muloyimlik bilan turibdi",
  },
  intro: {
    headingLine1: "Zefaaf... global islomiy nikoh platformasi",
    headingLine2: "Shariat qadriyatlarini saqlab, iffatni himoya qiluvchi,",
    description:
      "sun'iy intellekt va zamonaviy texnologiyalarni birlashtirib, xavfsiz va pok muhitda yuraklarni bog'laydi, sevgi va mehr-shafqatga asoslangan baxtli oila qurishga to'liq yordam beradi.",
  },
  policy: {
    label: "Bizning siyosatimiz va yondashuvimiz",
    title: "Zefaaf... shariatga sodiqlik va mutlaq ishonch",
    description:
      "sun'iy intellekt va zamonaviy texnologiyalarni birlashtirib, xavfsiz va pok muhitda yuraklarni bog'laydi, sevgi va mehr-shafqatga asoslangan baxtli oila qurishga to'liq yordam beradi.",
    bullets: [
      "Foydalanuvchilar uchun pok va xavfsiz muhitni ta'minlash uchun barcha faoliyatimizda shariat qoidalariga rioya qilamiz.",
      "Shariat siyosatini qat'iy amalga oshiramiz va hech qanday axloqiy yoki diniy buzilishga toqat qilmaymiz.",
      "Platformani boshqaruvchilarning barchasi shariat ta'limotlariga sodiq musulmonlardir.",
      "Ro'yxatdan o'tish bepul va hamma uchun ochiq.",
      "Vaqtinchalik munosabatlar, do'stlik yoki vaqtinchalik nikohlarga bu yerda o'rin yo'q.",
    ],
  },
  gateway: {
    label: "Zefaaf – halol va xavfsiz nikohga eshigingiz",
    title: "Zefaaf musulmonlarning qalbini davolashni maqsad qilgan qonuniy islomiy nikoh platformasidir",
    description:
      "Biz nikohni katta mas'uliyat deb bilamiz, shuning uchun shariat qoidalariga mos, dunyoning barcha mamlakatlarini qamrab olgan xavfsiz va maxfiy muhitni taqdim etamiz, sizga islomiy axloq asosida nikohingizni rejalashtirishga yordam berish uchun.",
    videoAlt: "Qo'l ushlashib turgan yangi turmush qurgan er-xotin",
  },
  features: {
    heading: "Zefaaf… oddiy nikoh platformasidan ko'p narsa!",
    description:
      "Halol sevgi yo'lida sizning hamrohingiz. Sevgi va mehr-shafqatga to'la, Allohni rozi qiladigan nikoh sayohatini boshlashingiz uchun xavfsiz muhit va samimiy yordam taqdim etamiz",
    cards: [
      {
        title: "Turmush hayotingiz uchun qimmatli maslahatlar",
        description:
          "Baxtli va barqaror nikoh qurishga yordam berish uchun islomiy qadriyatlar va hayotiy tajribaga asoslangan amaliy yo'l-yo'riq beramiz.",
      },
      {
        title: "24/7 uzluksiz yordam",
        description:
          "Jamoamiz savollaringizga javob berish va xavfsiz, ishonchli tajribani ta'minlash uchun zarur yo'l-yo'riqni berishga doimo tayyor.",
      },
      {
        title: "Muvaffaqiyatli munosabatlar uchun mustahkam poydevor",
        description:
          "Nikoh sevgi va mehr-shafqatga asoslangan hamkorlik bo'lgani uchun, baxt va barqarorlik keltiradigan mustahkam munosabat qurish bo'yicha maslahatlar beramiz.",
      },
      {
        title: "Haqiqiy islomiy qadriyatlar",
        description:
          "Har bir qadamda axloq va sadoqatga urg'u berib, nikohingizni islomiy ta'limotlarga muvofiq qurishga yordam beramiz.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Baxtli mijozlardan",
    avatarAlt: "Zefaafning baxtli a'zosi",
  },
  testimonial: {
    label: "Bizning siyosatimiz va yondashuvimiz",
    title: "Foydalanuvchilarimiz Zefaaf haqida nima deyishadi?",
    subtitle: "Zefaaf orqali hayot yo'ldoshini topgan odamlarning haqiqiy tajribalari!",
    quote:
      "Men Suriyadanman va Yevropada yashayman — platforma bizni yaqinlashtirdi va maxfiylik hamda hurmat bilan muloqotni osonlashtirdi. Sizlarga rahmat.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Muborak yangi boshlanishning ramzi bo'lgan bug'doy donalarini ushlab turgan qo'llar",
  },
};

const az: AboutCopy = {
  hero: {
    title: "Haqqımızda",
    description:
      "müsəlmanlara dəyərləri və ailə birliyini qoruyan təhlükəsiz mühit təqdim edirik. Ağıllı alətlər və hər addımda sizə rahatlıq verən şəffaf təcrübə vasitəsilə uyğun həyat yoldaşı tapmağınıza kömək edirik.",
    ctaPrimary: "Zefaaf platformasını kəşf edin",
    ctaSecondary: "Pulsuz hesab yaradın",
    imageAlt: "Evli qadının əli nikah üzüyünü taxaraq mülayim şəkildə uzanıb",
  },
  intro: {
    headingLine1: "Zefaaf... qlobal İslam nikah platforması",
    headingLine2: "Şəriət dəyərlərini qoruyan və iffəti mühafizə edən,",
    description:
      "süni intellekt və müasir texnologiyaları birləşdirərək qəlbləri təhlükəsiz və pak mühitdə birləşdirir, sevgi və mərhəmətə əsaslanan xoşbəxt ailə qurmaq üçün tam dəstək verir.",
  },
  policy: {
    label: "Bizim siyasətimiz və yanaşmamız",
    title: "Zefaaf... şəriətə bağlılıq və mütləq etibar",
    description:
      "süni intellekt və müasir texnologiyaları birləşdirərək qəlbləri təhlükəsiz və pak mühitdə birləşdirir, sevgi və mərhəmətə əsaslanan xoşbəxt ailə qurmaq üçün tam dəstək verir.",
    bullets: [
      "İstifadəçilər üçün pak və təhlükəsiz mühit təmin etmək məqsədilə bütün fəaliyyətlərimizdə şəriət qaydalarına əməl edirik.",
      "Şəriət siyasətlərini ciddi şəkildə tətbiq edirik və heç bir etik və ya dini pozuntuya dözmürük.",
      "Platformanı idarə edən hər kəs şəriət təlimlərinə bağlı müsəlmandır.",
      "Qeydiyyat pulsuzdur və hər kəs üçün açıqdır.",
      "Keçici münasibətlərə, dostluqlara və ya müvəqqəti nikahlara burada yer yoxdur.",
    ],
  },
  gateway: {
    label: "Zefaaf – halal və təhlükəsiz nikaha açılan qapınız",
    title: "Zefaaf müsəlmanların qəlbini sağaltmağı hədəfləyən qanuni İslam nikah platformasıdır",
    description:
      "Nikahın böyük məsuliyyət olduğuna inanırıq, buna görə də şəriət qaydalarına uyğun, dünyanın bütün ölkələrini əhatə edən təhlükəsiz və məxfi mühit təqdim edərək İslam əxlaqına uyğun nikahınızı planlaşdırmağınıza kömək edirik.",
    videoAlt: "Əl-ələ tutan təzə evlənmiş cütlük",
  },
  features: {
    heading: "Zefaaf… sadəcə nikah platformasından daha çoxu!",
    description:
      "Halal sevgi yolunda yoldaşınız. Sevgi və mərhəmətlə dolu, Allahı razı salan nikah səyahətinə başlamağınız üçün təhlükəsiz mühit və səmimi dəstək təqdim edirik",
    cards: [
      {
        title: "Nikah həyatınız üçün dəyərli məsləhətlər",
        description:
          "Xoşbəxt və davamlı nikah qurmağınıza kömək etmək üçün İslam dəyərlərinə və həyat təcrübəsinə əsaslanan praktik rəhbərlik təqdim edirik.",
      },
      {
        title: "24/7 fasiləsiz dəstək",
        description:
          "Komandamız suallarınızı cavablandırmaq və təhlükəsiz, etibarlı təcrübə üçün zəruri rəhbərliyi verməyə həmişə hazırdır.",
      },
      {
        title: "Uğurlu münasibətlər üçün möhkəm təməllər",
        description:
          "Nikah sevgi və mərhəmətə əsaslanan tərəfdaşlıq olduğu üçün, xoşbəxtlik və sabitlik gətirən güclü münasibət qurmaq üçün məsləhətlər veririk.",
      },
      {
        title: "Həqiqi İslam dəyərləri",
        description:
          "Hər addımda əxlaq və sədaqətə önəm verərək nikahınızı İslam təlimlərinə uyğun qurmağınıza kömək edirik.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Xoşbəxt müştərilərdən",
    avatarAlt: "Xoşbəxt bir Zefaaf üzvü",
  },
  testimonial: {
    label: "Bizim siyasətimiz və yanaşmamız",
    title: "İstifadəçilərimiz Zefaaf haqqında nə deyir?",
    subtitle: "Zefaaf vasitəsilə həyat yoldaşını tapan insanların həqiqi təcrübələri!",
    quote:
      "Mən Suriyadanam və Avropada yaşayıram — platforma bizi bir-birimizə yaxınlaşdırdı və məxfilik və hörmətlə ünsiyyəti asanlaşdırdı. Sizə təşəkkür edirik.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Mübarək yeni başlanğıcın rəmzi olan buğda dənələrini tutan əllər",
  },
};

const fil: AboutCopy = {
  hero: {
    title: "Tungkol sa amin",
    description:
      "nagbibigay kami sa mga Muslim ng ligtas na kapaligiran na nagpapanatili ng mga pagpapahalaga at pagkakaisa ng pamilya. Tinutulungan ka naming mahanap ang tamang kabiyak sa buhay sa pamamagitan ng matatalinong kasangkapan at transparent na karanasan na nagbibigay sa iyo ng kapanatagan sa bawat hakbang.",
    ctaPrimary: "Galugarin ang Zefaaf platform",
    ctaSecondary: "Gumawa ng libreng account",
    imageAlt: "Ang kamay ng isang may-asawang babae na mahinahong nakapahinga, suot ang kanyang wedding ring",
  },
  intro: {
    headingLine1: "Zefaaf... isang pandaigdigang Islamikong plataporma para sa kasal",
    headingLine2: "Na nagpapanatili sa mga pagpapahalaga ng Sharia at nangangalaga sa kalinisang-puri,",
    description:
      "sa pagsasama ng artificial intelligence at modernong teknolohiya upang pagbuklurin ang mga puso sa isang ligtas at dalisay na kapaligiran, na may buong suporta sa pagbuo ng isang masayang pamilyang nakabatay sa pagmamahal at habag.",
  },
  policy: {
    label: "Aming Patakaran at Pamamaraan",
    title: "Zefaaf... pangako sa Sharia at ganap na tiwala",
    description:
      "sa pagsasama ng artificial intelligence at modernong teknolohiya upang pagbuklurin ang mga puso sa isang ligtas at dalisay na kapaligiran, na may buong suporta sa pagbuo ng isang masayang pamilyang nakabatay sa pagmamahal at habag.",
    bullets: [
      "Sinusunod namin ang mga alituntunin ng Sharia sa lahat ng aming gawain upang matiyak ang isang dalisay at ligtas na kapaligiran para sa mga gumagamit.",
      "Mahigpit naming sinusunod ang mga patakaran ng Sharia at hindi kami nagpaparaya sa anumang paglabag sa etika o relihiyon.",
      "Ang lahat ng namamahala sa plataporma ay mga Muslim na nakatuon sa mga turo ng Sharia.",
      "Libre at bukas sa lahat ang pagpaparehistro.",
      "Walang lugar para sa pansamantalang relasyon, pakikipagkaibigan lamang, o pansamantalang kasal.",
    ],
  },
  gateway: {
    label: "Zefaaf – ang inyong daan patungo sa isang lehitimo at ligtas na kasal",
    title: "Ang Zefaaf ay isang lehitimong Islamikong plataporma para sa kasal na naglalayong pagalingin ang mga puso ng mga Muslim",
    description:
      "Naniniwala kami na ang kasal ay isang malaking responsibilidad, kaya nagbibigay kami ng ligtas at kumpidensyal na kapaligiran, alinsunod sa mga alituntunin ng Sharia, na sumasaklaw sa lahat ng bansa sa buong mundo, upang matulungan kang planuhin ang iyong kasal ayon sa etikang Islamiko.",
    videoAlt: "Isang bagong kasal na mag-asawa na magkahawak-kamay",
  },
  features: {
    heading: "Zefaaf… higit pa sa isang plataporma lamang para sa kasal!",
    description:
      "Ang inyong kasama sa landas patungo sa halal na pag-ibig. Nagbibigay kami ng ligtas na kapaligiran at taos-pusong suporta upang matulungan kayong simulan ang isang paglalakbay sa kasal na kalugud-lugod kay Allah, punô ng pagmamahal at habag",
    cards: [
      {
        title: "Mahahalagang tip para sa inyong buhay may-asawa",
        description:
          "Nag-aalok kami ng praktikal na gabay batay sa mga pagpapahalagang Islamiko at karanasan sa buhay upang matulungan kayong bumuo ng masaya at matatag na kasal.",
      },
      {
        title: "24/7 na tuluy-tuloy na suporta",
        description:
          "Laging handa ang aming koponan na sagutin ang inyong mga katanungan at magbigay ng kinakailangang gabay upang matiyak ang isang ligtas at maaasahang karanasan.",
      },
      {
        title: "Matibay na pundasyon para sa matagumpay na relasyon",
        description:
          "Dahil ang kasal ay isang pakikipagsosyo na nakabatay sa pagmamahal at habag, nagbibigay kami ng mga tip para makabuo ng matatag na relasyon na nagdudulot ng kaligayahan at katatagan.",
      },
      {
        title: "Tunay na mga pagpapahalagang Islamiko",
        description:
          "Tinutulungan ka naming itatag ang iyong kasal alinsunod sa mga turong Islamiko, na binibigyang-diin ang etika at pangako sa bawat hakbang.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Mula sa mga nasisiyahang kliyente",
    avatarAlt: "Isang masayang miyembro ng Zefaaf",
  },
  testimonial: {
    label: "Aming Patakaran at Pamamaraan",
    title: "Ano ang sinasabi ng aming mga gumagamit tungkol sa Zefaaf?",
    subtitle: "Tunay na karanasan ng mga taong nakahanap ng kanilang kabiyak sa buhay sa pamamagitan ng Zefaaf!",
    quote:
      "Taga-Syria ako at nakatira sa Europa — pinalapit kami ng plataporma at pinadali ang komunikasyon, nang may pagkapribado at paggalang. Salamat sa inyo.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Mga kamay na humahawak ng butil ng trigo, sagisag ng isang pinagpalang bagong simula",
  },
};

const hi: AboutCopy = {
  hero: {
    title: "हमारे बारे में",
    description:
      "हम मुसलमानों को एक सुरक्षित वातावरण प्रदान करते हैं जो मूल्यों और पारिवारिक एकता को बनाए रखता है। हम स्मार्ट टूल्स और एक पारदर्शी अनुभव के माध्यम से आपको उपयुक्त जीवनसाथी खोजने में मदद करते हैं, जो हर कदम पर आपको मानसिक शांति प्रदान करता है।",
    ctaPrimary: "Zefaaf प्लेटफ़ॉर्म एक्सप्लोर करें",
    ctaSecondary: "मुफ़्त खाता बनाएं",
    imageAlt: "एक विवाहित महिला का हाथ धीरे से टिका हुआ, जिसमें उसकी शादी की अंगूठी है",
  },
  intro: {
    headingLine1: "Zefaaf... एक वैश्विक इस्लामिक विवाह प्लेटफ़ॉर्म",
    headingLine2: "जो शरिया मूल्यों को कायम रखता है और पवित्रता की रक्षा करता है,",
    description:
      "कृत्रिम बुद्धिमत्ता और आधुनिक तकनीकों को जोड़कर, एक सुरक्षित और पवित्र वातावरण में दिलों को जोड़ता है, तथा प्रेम और करुणा पर आधारित एक खुशहाल परिवार बनाने के लिए पूर्ण सहयोग प्रदान करता है।",
  },
  policy: {
    label: "हमारी नीति और दृष्टिकोण",
    title: "Zefaaf... शरिया प्रतिबद्धता और पूर्ण विश्वास",
    description:
      "कृत्रिम बुद्धिमत्ता और आधुनिक तकनीकों को जोड़कर, एक सुरक्षित और पवित्र वातावरण में दिलों को जोड़ता है, तथा प्रेम और करुणा पर आधारित एक खुशहाल परिवार बनाने के लिए पूर्ण सहयोग प्रदान करता है।",
    bullets: [
      "उपयोगकर्ताओं के लिए एक पवित्र और सुरक्षित वातावरण सुनिश्चित करने हेतु हम अपने सभी व्यवहारों में शरिया दिशानिर्देशों का पालन करते हैं।",
      "हम शरिया नीतियों का सख्ती से पालन करते हैं और किसी भी नैतिक या धार्मिक उल्लंघन को बर्दाश्त नहीं करते।",
      "प्लेटफ़ॉर्म का संचालन करने वाले सभी लोग शरिया शिक्षाओं के प्रति प्रतिबद्ध मुसलमान हैं।",
      "पंजीकरण मुफ़्त है और सभी के लिए खुला है।",
      "यहां आकस्मिक रिश्तों, केवल दोस्ती, या अस्थायी विवाह के लिए कोई जगह नहीं है।",
    ],
  },
  gateway: {
    label: "Zefaaf – वैध और सुरक्षित विवाह की ओर आपका द्वार",
    title: "Zefaaf एक वैध इस्लामिक विवाह प्लेटफ़ॉर्म है जिसका उद्देश्य मुसलमानों के दिलों को जोड़ना है",
    description:
      "हम मानते हैं कि विवाह एक बड़ी जिम्मेदारी है, इसलिए हम शरिया दिशानिर्देशों के अनुरूप, दुनिया के सभी देशों को कवर करने वाला एक सुरक्षित और गोपनीय वातावरण प्रदान करते हैं, ताकि आप इस्लामी नैतिकता के अनुसार अपने विवाह की योजना बना सकें।",
    videoAlt: "हाथ में हाथ डाले नवविवाहित जोड़ा",
  },
  features: {
    heading: "Zefaaf… सिर्फ एक विवाह प्लेटफ़ॉर्म से कहीं अधिक!",
    description:
      "हलाल प्रेम के मार्ग पर आपका साथी। हम एक सुरक्षित वातावरण और सच्चा सहयोग प्रदान करते हैं ताकि आप प्रेम और करुणा से भरी, अल्लाह को प्रसन्न करने वाली वैवाहिक यात्रा शुरू कर सकें",
    cards: [
      {
        title: "आपके वैवाहिक जीवन के लिए मूल्यवान सुझाव",
        description:
          "हम इस्लामी मूल्यों और जीवन के अनुभवों पर आधारित व्यावहारिक मार्गदर्शन प्रदान करते हैं ताकि आप एक खुशहाल और स्थायी विवाह बना सकें।",
      },
      {
        title: "24/7 निरंतर सहयोग",
        description:
          "हमारी टीम आपके सवालों का जवाब देने और सुरक्षित एवं भरोसेमंद अनुभव सुनिश्चित करने के लिए आवश्यक मार्गदर्शन प्रदान करने हेतु हमेशा उपलब्ध है।",
      },
      {
        title: "सफल रिश्तों के लिए मजबूत नींव",
        description:
          "चूंकि विवाह प्रेम और करुणा पर आधारित एक साझेदारी है, हम खुशी और स्थिरता लाने वाला मजबूत रिश्ता बनाने के लिए सुझाव देते हैं।",
      },
      {
        title: "प्रामाणिक इस्लामी मूल्य",
        description:
          "हम हर कदम पर नैतिकता और प्रतिबद्धता पर जोर देते हुए इस्लामी शिक्षाओं के अनुसार आपका विवाह स्थापित करने में मदद करते हैं।",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "खुश ग्राहकों की ओर से",
    avatarAlt: "एक खुश ज़ेफ़ाफ़ सदस्य",
  },
  testimonial: {
    label: "हमारी नीति और दृष्टिकोण",
    title: "हमारे उपयोगकर्ता Zefaaf के बारे में क्या कहते हैं?",
    subtitle: "Zefaaf के माध्यम से अपना जीवनसाथी पाने वाले लोगों के वास्तविक अनुभव!",
    quote:
      "मैं सीरिया से हूं और यूरोप में रहता हूं — इस प्लेटफ़ॉर्म ने हमें करीब लाया और गोपनीयता व सम्मान के साथ संवाद को आसान बनाया। आपका धन्यवाद।",
    names: ["नोरा ज़रेइक", "अनस हमदान"],
    photoAlt: "गेहूं के दाने पकड़े हुए हाथ, एक धन्य नई शुरुआत का प्रतीक",
  },
};

const kk: AboutCopy = {
  hero: {
    title: "Біз туралы",
    description:
      "біз мұсылмандарға құндылықтар мен отбасылық ынтымақтастықты сақтайтын қауіпсіз орта ұсынамыз. Ақылды құралдар мен әр қадамда сізге көңіл тыныштығын беретін ашық тәжірибе арқылы лайықты өмірлік серіктесті табуға көмектесеміз.",
    ctaPrimary: "Zefaaf платформасын шолыңыз",
    ctaSecondary: "Тегін аккаунт жасаңыз",
    imageAlt: "Үйленген әйелдің қолы неке жүзігін тағып, жайбарақат жатыр",
  },
  intro: {
    headingLine1: "Zefaaf... әлемдік ислам неке платформасы",
    headingLine2: "Шариғат құндылықтарын сақтайтын және ұяттылықты қорғайтын,",
    description:
      "жасанды интеллект пен заманауи технологияларды біріктіре отырып, жүректерді қауіпсіз әрі таза ортада байланыстырады, махаббат пен мейірімге негізделген бақытты отбасы құруға толық қолдау көрсетеді.",
  },
  policy: {
    label: "Біздің саясатымыз бен көзқарасымыз",
    title: "Zefaaf... шариғатқа адалдық және толық сенім",
    description:
      "жасанды интеллект пен заманауи технологияларды біріктіре отырып, жүректерді қауіпсіз әрі таза ортада байланыстырады, махаббат пен мейірімге негізделген бақытты отбасы құруға толық қолдау көрсетеді.",
    bullets: [
      "Пайдаланушылар үшін таза әрі қауіпсіз ортаны қамтамасыз ету үшін біз барлық іс-әрекетімізде шариғат нормаларын ұстанамыз.",
      "Біз шариғат саясатын қатаң сақтаймыз және кез келген этикалық немесе діни бұзушылыққа жол бермейміз.",
      "Платформаны басқаратындардың барлығы шариғат ілімдеріне берілген мұсылмандар.",
      "Тіркелу тегін және барлығына ашық.",
      "Мұнда өтпелі қарым-қатынасқа, жай достыққа немесе уақытша некеге орын жоқ.",
    ],
  },
  gateway: {
    label: "Zefaaf – адал әрі қауіпсіз некеге апаратын қақпаңыз",
    title: "Zefaaf — мұсылмандардың жүрегін емдеуді мақсат ететін заңды ислам неке платформасы",
    description:
      "Неке — үлкен жауапкершілік деп сенеміз, сондықтан шариғат нормаларына сай, әлемнің барлық елдерін қамтитын қауіпсіз әрі құпия ортаны ұсынамыз, сізге некеңізді ислам этикасына сай жоспарлауға көмектесу үшін.",
    videoAlt: "Қолдарын ұстасқан жаңа некелескен жұп",
  },
  features: {
    heading: "Zefaaf… жай ғана неке платформасынан әлдеқайда көбі!",
    description:
      "Адал махаббат жолындағы серігіңіз. Аллаһты риза ететін, махаббат пен мейірімге толы неке сапарын бастауыңызға қауіпсіз орта мен шынайы қолдау ұсынамыз",
    cards: [
      {
        title: "Неке өміріңізге бағалы кеңестер",
        description:
          "Бақытты әрі берік неке құруға көмектесу үшін ислам құндылықтары мен өмірлік тәжірибеге негізделген практикалық нұсқаулар ұсынамыз.",
      },
      {
        title: "24/7 үздіксіз қолдау",
        description:
          "Біздің команда сұрақтарыңызға жауап беруге және қауіпсіз, сенімді тәжірибе үшін қажетті нұсқаулықты беруге әрқашан дайын.",
      },
      {
        title: "Табысты қарым-қатынастар үшін берік негіздер",
        description:
          "Неке махаббат пен мейірімге негізделген серіктестік болғандықтан, бақыт пен тұрақтылық әкелетін берік қарым-қатынас құруға кеңестер береміз.",
      },
      {
        title: "Түпнұсқа ислам құндылықтары",
        description:
          "Әр қадамда этика мен адалдыққа баса назар аудара отырып, некеңізді ислам ілімдеріне сай құруға көмектесеміз.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Бақытты клиенттерден",
    avatarAlt: "Zefaaf-тың бақытты мүшесі",
  },
  testimonial: {
    label: "Біздің саясатымыз бен көзқарасымыз",
    title: "Пайдаланушыларымыз Zefaaf туралы не дейді?",
    subtitle: "Zefaaf арқылы өмірлік серіктесін тапқан адамдардың шынайы тәжірибелері!",
    quote:
      "Мен Сириядан шыққанмын, Еуропада тұрамын — платформа бізді жақындастырды және құпиялылық пен құрметпен қарым-қатынасты жеңілдетті. Сіздерге рахмет.",
    names: ["Нора Зрейк", "Анас Хамдан"],
    photoAlt: "Берекелі жаңа бастаманың белгісі болған бидай дәндерін ұстаған қолдар",
  },
};

const ms: AboutCopy = {
  hero: {
    title: "Tentang kami",
    description:
      "kami menyediakan persekitaran yang selamat untuk umat Islam yang mengekalkan nilai-nilai dan perpaduan keluarga. Kami membantu anda mencari pasangan hidup yang sesuai melalui alat pintar dan pengalaman telus yang memberikan anda ketenangan fikiran pada setiap langkah.",
    ctaPrimary: "Terokai platform Zefaaf",
    ctaSecondary: "Cipta akaun percuma",
    imageAlt: "Tangan seorang wanita berkahwin berehat dengan lembut, memakai cincin perkahwinannya",
  },
  intro: {
    headingLine1: "Zefaaf... platform perkahwinan Islam global",
    headingLine2: "Yang mengekalkan nilai-nilai syariah dan menjaga kesucian,",
    description:
      "menggabungkan kecerdasan buatan dan teknologi moden untuk menyatukan hati dalam persekitaran yang selamat dan suci, dengan sokongan penuh untuk membina sebuah keluarga bahagia yang berasaskan cinta dan belas kasihan.",
  },
  policy: {
    label: "Dasar dan Pendekatan Kami",
    title: "Zefaaf... komitmen syariah dan kepercayaan mutlak",
    description:
      "menggabungkan kecerdasan buatan dan teknologi moden untuk menyatukan hati dalam persekitaran yang selamat dan suci, dengan sokongan penuh untuk membina sebuah keluarga bahagia yang berasaskan cinta dan belas kasihan.",
    bullets: [
      "Kami mematuhi garis panduan syariah dalam semua urusan kami untuk memastikan persekitaran yang suci dan selamat untuk pengguna.",
      "Kami mematuhi dasar syariah dengan ketat dan tidak bertoleransi dengan sebarang pelanggaran etika atau agama.",
      "Semua pengendali platform adalah umat Islam yang komited kepada ajaran syariah.",
      "Pendaftaran adalah percuma dan terbuka kepada semua.",
      "Tiada ruang untuk hubungan santai, persahabatan semata-mata, atau perkahwinan sementara.",
    ],
  },
  gateway: {
    label: "Zefaaf – pintu gerbang anda ke arah perkahwinan yang halal dan selamat",
    title: "Zefaaf adalah platform perkahwinan Islam yang sah bertujuan untuk memulihkan hati umat Islam",
    description:
      "Kami percaya bahawa perkahwinan adalah tanggungjawab yang besar, oleh itu kami menyediakan persekitaran yang selamat dan sulit, mematuhi garis panduan syariah, merangkumi semua negara di dunia, untuk membantu anda merancang perkahwinan anda mengikut etika Islam.",
    videoAlt: "Sepasang pengantin baharu berpegangan tangan",
  },
  features: {
    heading: "Zefaaf… lebih daripada sekadar platform perkahwinan!",
    description:
      "Teman anda dalam perjalanan menuju cinta yang halal. Kami menyediakan persekitaran yang selamat dan sokongan yang ikhlas untuk membantu anda memulakan perjalanan perkahwinan yang diredai Allah, penuh dengan cinta dan belas kasihan",
    cards: [
      {
        title: "Tip berharga untuk kehidupan perkahwinan anda",
        description:
          "Kami menawarkan panduan praktikal berdasarkan nilai-nilai Islam dan pengalaman hidup untuk membantu anda membina perkahwinan yang bahagia dan berkekalan.",
      },
      {
        title: "Sokongan berterusan 24/7",
        description:
          "Pasukan kami sentiasa bersedia untuk menjawab soalan anda dan memberikan panduan yang diperlukan bagi memastikan pengalaman yang selamat dan boleh dipercayai.",
      },
      {
        title: "Asas kukuh untuk hubungan yang berjaya",
        description:
          "Memandangkan perkahwinan adalah perkongsian berasaskan cinta dan belas kasihan, kami memberikan tip untuk membina hubungan yang kukuh yang membawa kebahagiaan dan kestabilan.",
      },
      {
        title: "Nilai-nilai Islam yang tulen",
        description:
          "Kami membantu anda membina perkahwinan anda mengikut ajaran Islam, dengan menekankan etika dan komitmen pada setiap langkah.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Daripada pelanggan yang gembira",
    avatarAlt: "Seorang ahli Zefaaf yang gembira",
  },
  testimonial: {
    label: "Dasar dan Pendekatan Kami",
    title: "Apa kata pengguna kami tentang Zefaaf?",
    subtitle: "Pengalaman sebenar daripada orang yang menemui pasangan hidup mereka melalui Zefaaf!",
    quote:
      "Saya dari Syria dan menetap di Eropah — platform ini merapatkan kami dan memudahkan komunikasi, dengan privasi dan rasa hormat. Terima kasih kepada anda semua.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Tangan yang memegang bijirin gandum, simbol permulaan baharu yang diberkati",
  },
};

const pa: AboutCopy = {
  hero: {
    title: "ਸਾਡੇ ਬਾਰੇ",
    description:
      "ਅਸੀਂ ਮੁਸਲਮਾਨਾਂ ਨੂੰ ਇੱਕ ਸੁਰੱਖਿਅਤ ਮਾਹੌਲ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ ਜੋ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਅਤੇ ਪਰਿਵਾਰਕ ਏਕਤਾ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਦਾ ਹੈ। ਅਸੀਂ ਸਮਾਰਟ ਟੂਲਸ ਅਤੇ ਇੱਕ ਪਾਰਦਰਸ਼ੀ ਅਨੁਭਵ ਰਾਹੀਂ ਤੁਹਾਨੂੰ ਢੁਕਵਾਂ ਜੀਵਨ ਸਾਥੀ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ, ਜੋ ਹਰ ਕਦਮ 'ਤੇ ਤੁਹਾਨੂੰ ਮਨ ਦੀ ਸ਼ਾਂਤੀ ਦਿੰਦਾ ਹੈ।",
    ctaPrimary: "Zefaaf ਪਲੇਟਫਾਰਮ ਦੀ ਪੜਚੋਲ ਕਰੋ",
    ctaSecondary: "ਮੁਫ਼ਤ ਖਾਤਾ ਬਣਾਓ",
    imageAlt: "ਇੱਕ ਵਿਆਹੀ ਔਰਤ ਦਾ ਹੱਥ ਹੌਲੀ ਨਾਲ ਟਿਕਿਆ ਹੋਇਆ, ਆਪਣੀ ਵਿਆਹ ਦੀ ਮੁੰਦਰੀ ਪਹਿਨੇ ਹੋਏ",
  },
  intro: {
    headingLine1: "Zefaaf... ਇੱਕ ਵਿਸ਼ਵਵਿਆਪੀ ਇਸਲਾਮੀ ਵਿਆਹ ਪਲੇਟਫਾਰਮ",
    headingLine2: "ਜੋ ਸ਼ਰੀਅਤ ਦੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਦਾ ਹੈ ਅਤੇ ਪਵਿੱਤਰਤਾ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ,",
    description:
      "ਨਕਲੀ ਬੁੱਧੀ ਅਤੇ ਆਧੁਨਿਕ ਤਕਨੀਕਾਂ ਨੂੰ ਜੋੜ ਕੇ, ਇੱਕ ਸੁਰੱਖਿਅਤ ਅਤੇ ਪਵਿੱਤਰ ਮਾਹੌਲ ਵਿੱਚ ਦਿਲਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ, ਅਤੇ ਪਿਆਰ ਤੇ ਦਇਆ 'ਤੇ ਆਧਾਰਿਤ ਖੁਸ਼ਹਾਲ ਪਰਿਵਾਰ ਬਣਾਉਣ ਲਈ ਪੂਰਾ ਸਹਿਯੋਗ ਦਿੰਦਾ ਹੈ।",
  },
  policy: {
    label: "ਸਾਡੀ ਨੀਤੀ ਅਤੇ ਪਹੁੰਚ",
    title: "Zefaaf... ਸ਼ਰੀਅਤ ਪ੍ਰਤੀ ਵਚਨਬੱਧਤਾ ਅਤੇ ਪੂਰਨ ਭਰੋਸਾ",
    description:
      "ਨਕਲੀ ਬੁੱਧੀ ਅਤੇ ਆਧੁਨਿਕ ਤਕਨੀਕਾਂ ਨੂੰ ਜੋੜ ਕੇ, ਇੱਕ ਸੁਰੱਖਿਅਤ ਅਤੇ ਪਵਿੱਤਰ ਮਾਹੌਲ ਵਿੱਚ ਦਿਲਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ, ਅਤੇ ਪਿਆਰ ਤੇ ਦਇਆ 'ਤੇ ਆਧਾਰਿਤ ਖੁਸ਼ਹਾਲ ਪਰਿਵਾਰ ਬਣਾਉਣ ਲਈ ਪੂਰਾ ਸਹਿਯੋਗ ਦਿੰਦਾ ਹੈ।",
    bullets: [
      "ਵਰਤੋਂਕਾਰਾਂ ਲਈ ਇੱਕ ਪਵਿੱਤਰ ਅਤੇ ਸੁਰੱਖਿਅਤ ਮਾਹੌਲ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਅਸੀਂ ਆਪਣੇ ਸਾਰੇ ਕੰਮਾਂ ਵਿੱਚ ਸ਼ਰੀਅਤ ਦੇ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦੇ ਹਾਂ।",
      "ਅਸੀਂ ਸ਼ਰੀਅਤ ਨੀਤੀਆਂ ਦੀ ਸਖ਼ਤੀ ਨਾਲ ਪਾਲਣਾ ਕਰਦੇ ਹਾਂ ਅਤੇ ਕਿਸੇ ਵੀ ਨੈਤਿਕ ਜਾਂ ਧਾਰਮਿਕ ਉਲੰਘਣਾ ਨੂੰ ਬਰਦਾਸ਼ਤ ਨਹੀਂ ਕਰਦੇ।",
      "ਪਲੇਟਫਾਰਮ ਚਲਾਉਣ ਵਾਲੇ ਸਾਰੇ ਲੋਕ ਸ਼ਰੀਅਤ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਪ੍ਰਤੀ ਵਚਨਬੱਧ ਮੁਸਲਮਾਨ ਹਨ।",
      "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਮੁਫ਼ਤ ਹੈ ਅਤੇ ਸਾਰਿਆਂ ਲਈ ਖੁੱਲ੍ਹੀ ਹੈ।",
      "ਇੱਥੇ ਆਰਜ਼ੀ ਸੰਬੰਧਾਂ, ਸਿਰਫ਼ ਦੋਸਤੀ, ਜਾਂ ਆਰਜ਼ੀ ਵਿਆਹਾਂ ਲਈ ਕੋਈ ਥਾਂ ਨਹੀਂ ਹੈ।",
    ],
  },
  gateway: {
    label: "Zefaaf – ਹਲਾਲ ਅਤੇ ਸੁਰੱਖਿਅਤ ਵਿਆਹ ਵੱਲ ਤੁਹਾਡਾ ਦਰਵਾਜ਼ਾ",
    title: "Zefaaf ਇੱਕ ਜਾਇਜ਼ ਇਸਲਾਮੀ ਵਿਆਹ ਪਲੇਟਫਾਰਮ ਹੈ ਜਿਸਦਾ ਉਦੇਸ਼ ਮੁਸਲਮਾਨਾਂ ਦੇ ਦਿਲਾਂ ਨੂੰ ਜੋੜਨਾ ਹੈ",
    description:
      "ਅਸੀਂ ਮੰਨਦੇ ਹਾਂ ਕਿ ਵਿਆਹ ਇੱਕ ਵੱਡੀ ਜ਼ਿੰਮੇਵਾਰੀ ਹੈ, ਇਸ ਲਈ ਅਸੀਂ ਸ਼ਰੀਅਤ ਦੇ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਅਨੁਸਾਰ, ਦੁਨੀਆ ਦੇ ਸਾਰੇ ਦੇਸ਼ਾਂ ਨੂੰ ਕਵਰ ਕਰਨ ਵਾਲਾ ਇੱਕ ਸੁਰੱਖਿਅਤ ਅਤੇ ਗੁਪਤ ਮਾਹੌਲ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ, ਤਾਂ ਜੋ ਤੁਸੀਂ ਇਸਲਾਮੀ ਨੈਤਿਕਤਾ ਅਨੁਸਾਰ ਆਪਣੇ ਵਿਆਹ ਦੀ ਯੋਜਨਾ ਬਣਾ ਸਕੋ।",
    videoAlt: "ਹੱਥ ਫੜੀ ਖੜ੍ਹਾ ਇੱਕ ਨਵਾਂ ਵਿਆਹਿਆ ਜੋੜਾ",
  },
  features: {
    heading: "Zefaaf… ਸਿਰਫ਼ ਇੱਕ ਵਿਆਹ ਪਲੇਟਫਾਰਮ ਤੋਂ ਕਿਤੇ ਵੱਧ!",
    description:
      "ਹਲਾਲ ਪਿਆਰ ਦੇ ਰਾਹ 'ਤੇ ਤੁਹਾਡਾ ਸਾਥੀ। ਅਸੀਂ ਇੱਕ ਸੁਰੱਖਿਅਤ ਮਾਹੌਲ ਅਤੇ ਸੱਚਾ ਸਹਿਯੋਗ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ ਤਾਂ ਜੋ ਤੁਸੀਂ ਪਿਆਰ ਅਤੇ ਦਇਆ ਨਾਲ ਭਰਪੂਰ, ਅੱਲਾਹ ਨੂੰ ਖੁਸ਼ ਕਰਨ ਵਾਲੀ ਵਿਆਹੁਤਾ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰ ਸਕੋ",
    cards: [
      {
        title: "ਤੁਹਾਡੀ ਵਿਆਹੁਤਾ ਜ਼ਿੰਦਗੀ ਲਈ ਕੀਮਤੀ ਸੁਝਾਅ",
        description:
          "ਅਸੀਂ ਇਸਲਾਮੀ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਅਤੇ ਜੀਵਨ ਦੇ ਤਜਰਬਿਆਂ 'ਤੇ ਆਧਾਰਿਤ ਵਿਹਾਰਕ ਮਾਰਗਦਰਸ਼ਨ ਦਿੰਦੇ ਹਾਂ ਤਾਂ ਜੋ ਤੁਸੀਂ ਇੱਕ ਖੁਸ਼ਹਾਲ ਅਤੇ ਸਥਾਈ ਵਿਆਹ ਬਣਾ ਸਕੋ।",
      },
      {
        title: "24/7 ਲਗਾਤਾਰ ਸਹਿਯੋਗ",
        description:
          "ਸਾਡੀ ਟੀਮ ਤੁਹਾਡੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇਣ ਅਤੇ ਇੱਕ ਸੁਰੱਖਿਅਤ ਤੇ ਭਰੋਸੇਯੋਗ ਅਨੁਭਵ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਲੋੜੀਂਦਾ ਮਾਰਗਦਰਸ਼ਨ ਦੇਣ ਲਈ ਹਮੇਸ਼ਾ ਉਪਲਬਧ ਹੈ।",
      },
      {
        title: "ਸਫਲ ਰਿਸ਼ਤਿਆਂ ਲਈ ਮਜ਼ਬੂਤ ਨੀਂਹ",
        description:
          "ਕਿਉਂਕਿ ਵਿਆਹ ਪਿਆਰ ਅਤੇ ਦਇਆ 'ਤੇ ਆਧਾਰਿਤ ਇੱਕ ਭਾਈਵਾਲੀ ਹੈ, ਅਸੀਂ ਖੁਸ਼ੀ ਅਤੇ ਸਥਿਰਤਾ ਲਿਆਉਣ ਵਾਲਾ ਮਜ਼ਬੂਤ ਰਿਸ਼ਤਾ ਬਣਾਉਣ ਲਈ ਸੁਝਾਅ ਦਿੰਦੇ ਹਾਂ।",
      },
      {
        title: "ਅਸਲੀ ਇਸਲਾਮੀ ਕਦਰਾਂ-ਕੀਮਤਾਂ",
        description:
          "ਅਸੀਂ ਹਰ ਕਦਮ 'ਤੇ ਨੈਤਿਕਤਾ ਅਤੇ ਵਚਨਬੱਧਤਾ 'ਤੇ ਜ਼ੋਰ ਦਿੰਦੇ ਹੋਏ ਤੁਹਾਨੂੰ ਇਸਲਾਮੀ ਸਿੱਖਿਆਵਾਂ ਅਨੁਸਾਰ ਆਪਣਾ ਵਿਆਹ ਸਥਾਪਿਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ।",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "ਖੁਸ਼ ਗਾਹਕਾਂ ਵੱਲੋਂ",
    avatarAlt: "ਇੱਕ ਖੁਸ਼ ਜ਼ੇਫ਼ਾਫ਼ ਮੈਂਬਰ",
  },
  testimonial: {
    label: "ਸਾਡੀ ਨੀਤੀ ਅਤੇ ਪਹੁੰਚ",
    title: "ਸਾਡੇ ਵਰਤੋਂਕਾਰ Zefaaf ਬਾਰੇ ਕੀ ਕਹਿੰਦੇ ਹਨ?",
    subtitle: "Zefaaf ਰਾਹੀਂ ਆਪਣਾ ਜੀਵਨ ਸਾਥੀ ਲੱਭਣ ਵਾਲੇ ਲੋਕਾਂ ਦੇ ਅਸਲੀ ਤਜਰਬੇ!",
    quote:
      "ਮੈਂ ਸੀਰੀਆ ਤੋਂ ਹਾਂ ਅਤੇ ਯੂਰਪ ਵਿੱਚ ਰਹਿੰਦਾ ਹਾਂ — ਇਸ ਪਲੇਟਫਾਰਮ ਨੇ ਸਾਨੂੰ ਨੇੜੇ ਲਿਆਂਦਾ ਅਤੇ ਗੋਪਨੀਯਤਾ ਤੇ ਸਤਿਕਾਰ ਨਾਲ ਗੱਲਬਾਤ ਨੂੰ ਸੌਖਾ ਬਣਾਇਆ। ਤੁਹਾਡਾ ਧੰਨਵਾਦ।",
    names: ["ਨੋਰਾ ਜ਼ਰੇਕ", "ਅਨਸ ਹਮਦਾਨ"],
    photoAlt: "ਕਣਕ ਦੇ ਦਾਣੇ ਫੜੇ ਹੋਏ ਹੱਥ, ਇੱਕ ਮੁਬਾਰਕ ਨਵੀਂ ਸ਼ੁਰੂਆਤ ਦਾ ਪ੍ਰਤੀਕ",
  },
};

const ps: AboutCopy = {
  hero: {
    title: "زموږ په اړه",
    description:
      "موږ مسلمانانو ته یو خوندي چاپیریال وړاندې کوو چې ارزښتونه او کورنی یووالی ساتي. موږ تاسو سره مرسته کوو چې د هوښیارو وسیلو او روڼ تجربې له لارې مناسب ژوند ملګری ومومئ، چې په هر ګام کې تاسو ته ذهني آرامي درکوي.",
    ctaPrimary: "د زفاف پلیټ فارم وپلټئ",
    ctaSecondary: "وړیا حساب جوړ کړئ",
    imageAlt: "د یوې واده شوې ښځې لاس په نرمۍ سره پروت دی، چې د واده ګوته یې اغوستې",
  },
  intro: {
    headingLine1: "زفاف... یو نړیوال اسلامي واده پلیټ فارم",
    headingLine2: "چې د شریعت ارزښتونه ساتي او پاکوالی ساتي،",
    description:
      "د مصنوعي هوښیارتیا او عصري ټکنالوژیو په یوځای کولو سره زړونه په یو خوندي او پاک چاپیریال کې سره نښلوي، او د مینې او رحم پر بنسټ خوشحاله کورنۍ رامنځته کولو لپاره بشپړه مرسته وړاندې کوي.",
  },
  policy: {
    label: "زموږ پالیسي او لار",
    title: "زفاف... شرعي ژمنه او بشپړه باور",
    description:
      "د مصنوعي هوښیارتیا او عصري ټکنالوژیو په یوځای کولو سره زړونه په یو خوندي او پاک چاپیریال کې سره نښلوي، او د مینې او رحم پر بنسټ خوشحاله کورنۍ رامنځته کولو لپاره بشپړه مرسته وړاندې کوي.",
    bullets: [
      "موږ د کاروونکو لپاره پاک او خوندي چاپیریال ډاډمن کولو لپاره په خپلو ټولو چارو کې د شریعت لارښوونو ته ژمن یو.",
      "موږ د شریعت پالیسیو ته په کلکه عمل کوو او هېڅ اخلاقي یا ديني سرغړونه نه زغموو.",
      "پلیټ فارم چلوونکي ټول هغه مسلمانان دي چې د شریعت زده کړو ته ژمن دي.",
      "نومليکنه وړیا او د ټولو لپاره خلاصه ده.",
      "دلته د لنډمهاله اړیکو، ساده ملګرتیا، یا لنډمهاله واده لپاره ځای نشته.",
    ],
  },
  gateway: {
    label: "زفاف – حلال او خوندي واده ته ستاسو دروازه",
    title: "زفاف یو مشروع اسلامي واده پلیټ فارم دی چې موخه یې د مسلمانانو زړونو جوړول دي",
    description:
      "موږ باور لرو چې واده یوه لویه مسؤلیت دی، نو ځکه موږ د شریعت لارښوونو سره سم، د نړۍ ټولو هېوادونو پوښونکی خوندي او پټ چاپیریال وړاندې کوو، ترڅو تاسو سره مرسته وکړو چې خپل واده د اسلامي اخلاقو سره سم پلان کړئ.",
    videoAlt: "لاسونه نیولی نوی واده شوی جوړه",
  },
  features: {
    heading: "زفاف… له یو واده پلیټ فارم څخه ډېر څه!",
    description:
      "ستاسو ملګری د حلال مینې په لاره کې. موږ یو خوندي چاپیریال او له زړه څخه مالتړ وړاندې کوو ترڅو تاسو د الله رضا وړ، د مینې او رحم څخه ډک د واده سفر پیل کړئ",
    cards: [
      {
        title: "ستاسو د واده ژوند لپاره ارزښتناکې لارښوونې",
        description:
          "موږ د اسلامي ارزښتونو او ژوندي تجربو پر بنسټ عملي لارښوونې وړاندې کوو ترڅو تاسو سره د خوشحاله او دوامداره واده جوړولو کې مرسته وکړو.",
      },
      {
        title: "24/7 دوامداره مالتړ",
        description:
          "زموږ ټیم تل چمتو دی چې ستاسو پوښتنو ته ځواب ووایي او د خوندي او د باور وړ تجربې ډاډمن کولو لپاره اړینې لارښوونې وړاندې کړي.",
      },
      {
        title: "بریالیو اړیکو لپاره کلک بنسټونه",
        description:
          "ډېری چې واده د مینې او رحم پر بنسټ یو ملګرتیا ده، موږ داسې لارښوونې وړاندې کوو چې خوښي او ثبات راوړي.",
      },
      {
        title: "اصیل اسلامي ارزښتونه",
        description:
          "موږ تاسو سره مرسته کوو چې خپل واده د اسلامي زده کړو سره سم رامنځته کړئ، په هر ګام کې پر اخلاقو او ژمنتیا ټینګار کوو.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "د خوشحاله پیرودونکو له خوا",
    avatarAlt: "د زفاف یو خوشحاله غړی",
  },
  testimonial: {
    label: "زموږ پالیسي او لار",
    title: "زموږ کاروونکي د زفاف په اړه څه وایي؟",
    subtitle: "د هغو خلکو ریښتینې تجربې چې د زفاف له لارې یې خپل ژوند ملګری موندلی!",
    quote:
      "زه له سوریې څخه یم او په اروپا کې میشته یم — دې پلیټ فارم موږ سره نږدې کړو او د محرمیت او درناوي سره یې اړیکه اسانه کړه. مننه.",
    names: ["نورا زریق", "انس حمدان"],
    photoAlt: "د غنمو دانې نیولي لاسونه، د یوې برکتي نوې پیل نښه",
  },
};

const sw: AboutCopy = {
  hero: {
    title: "Kuhusu sisi",
    description:
      "tunawapa Waislamu mazingira salama yanayodumisha maadili na mshikamano wa familia. Tunakusaidia kupata mwenzi wa maisha anayefaa kupitia zana za akili na uzoefu wa uwazi unaokupa amani ya akili katika kila hatua.",
    ctaPrimary: "Chunguza jukwaa la Zefaaf",
    ctaSecondary: "Fungua akaunti ya bure",
    imageAlt: "Mkono wa mwanamke aliyeolewa ukiwa umepumzika kwa upole, ukiwa umevaa pete yake ya harusi",
  },
  intro: {
    headingLine1: "Zefaaf... jukwaa la kimataifa la ndoa la Kiislamu",
    headingLine2: "Linalodumisha maadili ya Sharia na kulinda usafi wa moyo,",
    description:
      "kwa kuunganisha akili bandia na teknolojia za kisasa ili kuunganisha mioyo katika mazingira salama na safi, huku tukitoa msaada kamili wa kujenga familia yenye furaha iliyojengwa juu ya upendo na huruma.",
  },
  policy: {
    label: "Sera na Mtazamo Wetu",
    title: "Zefaaf... kujitolea kwa Sharia na imani kamili",
    description:
      "kwa kuunganisha akili bandia na teknolojia za kisasa ili kuunganisha mioyo katika mazingira salama na safi, huku tukitoa msaada kamili wa kujenga familia yenye furaha iliyojengwa juu ya upendo na huruma.",
    bullets: [
      "Tunazingatia miongozo ya Sharia katika shughuli zetu zote ili kuhakikisha mazingira safi na salama kwa watumiaji.",
      "Tunafuata kwa uthabiti sera za Sharia na hatuvumilii ukiukwaji wowote wa kimaadili au kidini.",
      "Wote wanaoendesha jukwaa hili ni Waislamu waliojitolea kwa mafundisho ya Sharia.",
      "Usajili ni bure na wazi kwa kila mtu.",
      "Hakuna nafasi ya mahusiano ya kawaida, urafiki tu, au ndoa za muda.",
    ],
  },
  gateway: {
    label: "Zefaaf – lango lako kuelekea ndoa halali na salama",
    title: "Zefaaf ni jukwaa halali la ndoa la Kiislamu linalolenga kuponya mioyo ya Waislamu",
    description:
      "Tunaamini kuwa ndoa ni jukumu kubwa, hivyo tunatoa mazingira salama na ya faragha, yanayolingana na miongozo ya Sharia, yanayofunika nchi zote duniani, ili kukusaidia kupanga ndoa yako kulingana na maadili ya Kiislamu.",
    videoAlt: "Wanandoa wapya wakishikana mikono",
  },
  features: {
    heading: "Zefaaf… zaidi ya jukwaa la ndoa tu!",
    description:
      "Mwenzako katika njia ya upendo halali. Tunatoa mazingira salama na msaada wa dhati kukusaidia kuanza safari ya ndoa inayompendeza Allah, iliyojaa upendo na huruma",
    cards: [
      {
        title: "Vidokezo muhimu kwa maisha yako ya ndoa",
        description:
          "Tunatoa mwongozo wa vitendo unaotegemea maadili ya Kiislamu na uzoefu wa maisha ili kukusaidia kujenga ndoa yenye furaha na ya kudumu.",
      },
      {
        title: "Msaada endelevu wa saa 24/7",
        description:
          "Timu yetu daima iko tayari kujibu maswali yako na kutoa mwongozo unaohitajika ili kuhakikisha uzoefu salama na wa kuaminika.",
      },
      {
        title: "Misingi imara kwa mahusiano yenye mafanikio",
        description:
          "Kwa kuwa ndoa ni ushirikiano unaotegemea upendo na huruma, tunatoa vidokezo vya kujenga uhusiano imara unaoleta furaha na uthabiti.",
      },
      {
        title: "Maadili halisi ya Kiislamu",
        description:
          "Tunakusaidia kuanzisha ndoa yako kulingana na mafundisho ya Kiislamu, tukisisitiza maadili na kujitolea katika kila hatua.",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "Kutoka kwa wateja wenye furaha",
    avatarAlt: "Mwanachama mwenye furaha wa Zefaaf",
  },
  testimonial: {
    label: "Sera na Mtazamo Wetu",
    title: "Watumiaji wetu wanasema nini kuhusu Zefaaf?",
    subtitle: "Uzoefu halisi kutoka kwa watu waliopata wenzi wao wa maisha kupitia Zefaaf!",
    quote:
      "Ninatoka Syria na ninaishi Ulaya — jukwaa hili lilituleta karibu na kurahisisha mawasiliano, kwa faragha na heshima. Asanteni.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Mikono ikishikilia punje za ngano, ishara ya mwanzo mpya wenye baraka",
  },
};

const th: AboutCopy = {
  hero: {
    title: "เกี่ยวกับเรา",
    description:
      "เรามอบสภาพแวดล้อมที่ปลอดภัยแก่ชาวมุสลิม ซึ่งรักษาคุณค่าและความสามัคคีในครอบครัว เราช่วยให้คุณค้นหาคู่ชีวิตที่เหมาะสมผ่านเครื่องมืออัจฉริยะและประสบการณ์ที่โปร่งใส ซึ่งมอบความอุ่นใจให้คุณในทุกขั้นตอน",
    ctaPrimary: "สำรวจแพลตฟอร์ม Zefaaf",
    ctaSecondary: "สร้างบัญชีฟรี",
    imageAlt: "มือของหญิงที่แต่งงานแล้ววางพักอย่างอ่อนโยน สวมแหวนแต่งงานของเธอ",
  },
  intro: {
    headingLine1: "Zefaaf... แพลตฟอร์มการแต่งงานอิสลามระดับโลก",
    headingLine2: "ที่ยึดมั่นในคุณค่าของชะรีอะฮ์และรักษาความบริสุทธิ์",
    description:
      "ผสานปัญญาประดิษฐ์และเทคโนโลยีสมัยใหม่เพื่อเชื่อมโยงหัวใจในสภาพแวดล้อมที่ปลอดภัยและบริสุทธิ์ พร้อมการสนับสนุนอย่างเต็มที่ในการสร้างครอบครัวที่มีความสุขบนพื้นฐานของความรักและความเมตตา",
  },
  policy: {
    label: "นโยบายและแนวทางของเรา",
    title: "Zefaaf... ความมุ่งมั่นต่อชะรีอะฮ์และความไว้วางใจอย่างสมบูรณ์",
    description:
      "ผสานปัญญาประดิษฐ์และเทคโนโลยีสมัยใหม่เพื่อเชื่อมโยงหัวใจในสภาพแวดล้อมที่ปลอดภัยและบริสุทธิ์ พร้อมการสนับสนุนอย่างเต็มที่ในการสร้างครอบครัวที่มีความสุขบนพื้นฐานของความรักและความเมตตา",
    bullets: [
      "เรายึดมั่นในแนวทางของชะรีอะฮ์ในการดำเนินงานทั้งหมดของเรา เพื่อให้มั่นใจว่ามีสภาพแวดล้อมที่บริสุทธิ์และปลอดภัยสำหรับผู้ใช้",
      "เราปฏิบัติตามนโยบายของชะรีอะฮ์อย่างเคร่งครัด และไม่ยอมรับการละเมิดจริยธรรมหรือศาสนาใดๆ",
      "ผู้ดำเนินการแพลตฟอร์มทั้งหมดเป็นชาวมุสลิมที่มุ่งมั่นต่อคำสอนของชะรีอะฮ์",
      "การลงทะเบียนฟรีและเปิดให้ทุกคน",
      "ไม่มีที่ว่างสำหรับความสัมพันธ์ชั่วคราว มิตรภาพเพียงอย่างเดียว หรือการแต่งงานชั่วคราว",
    ],
  },
  gateway: {
    label: "Zefaaf – ประตูสู่การแต่งงานที่ถูกต้องและปลอดภัยของคุณ",
    title: "Zefaaf เป็นแพลตฟอร์มการแต่งงานอิสลามที่ถูกต้องตามกฎหมาย มีเป้าหมายเพื่อเยียวยาหัวใจของชาวมุสลิม",
    description:
      "เราเชื่อว่าการแต่งงานเป็นความรับผิดชอบที่ยิ่งใหญ่ ดังนั้นเราจึงมอบสภาพแวดล้อมที่ปลอดภัยและเป็นความลับ สอดคล้องกับแนวทางของชะรีอะฮ์ ครอบคลุมทุกประเทศทั่วโลก เพื่อช่วยให้คุณวางแผนการแต่งงานตามหลักจริยธรรมอิสลาม",
    videoAlt: "คู่บ่าวสาวที่เพิ่งแต่งงานจับมือกัน",
  },
  features: {
    heading: "Zefaaf… มากกว่าแค่แพลตฟอร์มการแต่งงาน!",
    description:
      "เพื่อนร่วมทางของคุณบนเส้นทางสู่ความรักที่ฮาลาล เรามอบสภาพแวดล้อมที่ปลอดภัยและการสนับสนุนอย่างจริงใจเพื่อช่วยให้คุณเริ่มต้นการเดินทางแห่งการแต่งงานที่พระเจ้าพอพระทัย เต็มไปด้วยความรักและความเมตตา",
    cards: [
      {
        title: "เคล็ดลับอันมีค่าสำหรับชีวิตแต่งงานของคุณ",
        description:
          "เรามอบคำแนะนำเชิงปฏิบัติที่อ้างอิงจากคุณค่าอิสลามและประสบการณ์ชีวิต เพื่อช่วยให้คุณสร้างการแต่งงานที่มีความสุขและยั่งยืน",
      },
      {
        title: "การสนับสนุนต่อเนื่องตลอด 24 ชั่วโมง 7 วัน",
        description:
          "ทีมงานของเราพร้อมเสมอที่จะตอบคำถามของคุณและให้คำแนะนำที่จำเป็นเพื่อรับประกันประสบการณ์ที่ปลอดภัยและน่าเชื่อถือ",
      },
      {
        title: "รากฐานที่มั่นคงสำหรับความสัมพันธ์ที่ประสบความสำเร็จ",
        description:
          "เนื่องจากการแต่งงานเป็นความร่วมมือที่ตั้งอยู่บนความรักและความเมตตา เราจึงมอบคำแนะนำในการสร้างความสัมพันธ์ที่แข็งแกร่งซึ่งนำมาซึ่งความสุขและความมั่นคง",
      },
      {
        title: "คุณค่าอิสลามที่แท้จริง",
        description: "เราช่วยให้คุณสร้างการแต่งงานตามคำสอนอิสลาม โดยเน้นจริยธรรมและความมุ่งมั่นในทุกขั้นตอน",
      },
    ],
  },
  stats: {
    number: "87,437",
    label: "จากลูกค้าที่มีความสุข",
    avatarAlt: "สมาชิก Zefaaf ที่มีความสุข",
  },
  testimonial: {
    label: "นโยบายและแนวทางของเรา",
    title: "ผู้ใช้ของเราพูดถึง Zefaaf ว่าอย่างไร?",
    subtitle: "ประสบการณ์จริงจากผู้คนที่พบคู่ชีวิตของพวกเขาผ่าน Zefaaf!",
    quote:
      "ฉันมาจากซีเรียและอาศัยอยู่ในยุโรป — แพลตฟอร์มนี้ทำให้เราใกล้ชิดกันมากขึ้นและทำให้การสื่อสารง่ายขึ้น ด้วยความเป็นส่วนตัวและความเคารพ ขอบคุณค่ะ",
    names: ["โนรา ซเรก", "อานัส ฮัมดาน"],
    photoAlt: "มือที่ถือเมล็ดข้าวสาลี สัญลักษณ์ของการเริ่มต้นใหม่ที่เปี่ยมด้วยพร",
  },
};

const copyByLocale: Record<string, AboutCopy> = {
  ar, en, nl, fr, de, tr, ru, id, zh, bn, bs, es, fa, pt, ja, ko, it, ur, ta, am, sv, da, sq, uz, az, fil, hi, kk, ms, pa, ps, sw, th,
};

export function getAboutCopy(locale: string): AboutCopy {
  return copyByLocale[locale] ?? en;
}
