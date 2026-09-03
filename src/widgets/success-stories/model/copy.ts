// The Success Stories page copy lives here rather than in `messages/*.json`
// because those 33 locale files are kept namespace-identical — adding a
// `successStories` namespace there would require every locale to have it at
// once. This file is the definitive source for this widget's copy across all
// 33 supported locales, following the same convention as
// `src/widgets/about/model/copy.ts`.

export type SuccessStoriesGalleryItem = {
  label: string;
  alt: string;
};

export type SuccessStoriesStat = {
  value: string;
  label: string;
};

export type SuccessStoriesCard = {
  quote: string;
  name: string;
  ageLabel: string;
};

export type SuccessStoriesCopy = {
  hero: {
    eyebrow: string;
    title: string;
  };
  gallery: readonly [
    SuccessStoriesGalleryItem,
    SuccessStoriesGalleryItem,
    SuccessStoriesGalleryItem,
    SuccessStoriesGalleryItem,
    SuccessStoriesGalleryItem,
  ];
  journey: {
    heading: string;
    paragraphs: readonly [string, string, string];
    stats: readonly [SuccessStoriesStat, SuccessStoriesStat, SuccessStoriesStat];
    photoMainAlt: string;
    photoSecondaryAlt: string;
  };
  clients: {
    number: string;
    label: string;
    avatarAlt: string;
  };
  quote: {
    label: string;
    title: string;
    subtitle: string;
    quote: string;
    names: readonly string[];
    photoAlt: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
  cards: readonly [SuccessStoriesCard, SuccessStoriesCard, SuccessStoriesCard];
};

const ar: SuccessStoriesCopy = {
  hero: {
    eyebrow: "معًا، نجعل الحياة أفضل",
    title: "شهادات حقيقية وملهمة لأزواج جمعهم القدر عبر الزواج.",
  },
  gallery: [
    { label: "شريك الحياة", alt: "زوجان يتشاركان لحظة سعيدة وحميمة" },
    { label: "خيارات صحية", alt: "عائلة تتشارك وجبة دافئة معًا" },
    { label: "عيشوا حياة أفضل", alt: "عريس يمسك بيد عروسه على درج، وهي تحمل باقة ورد" },
    { label: "رحلة صحية", alt: "زوجان يقفان معًا على شرفة مزخرفة عند الغروب" },
    { label: "حياة سعيدة", alt: "رجل وامرأة يصليان معًا على سجادة صلاة" },
  ],
  journey: {
    heading: "إيجاد الحب الحلال يبدأ بخطوة واحدة!",
    paragraphs: [
      "في منصة زفاف، نؤمن بأن الزواج رحلة جميلة تبدأ باختيار شريك الحياة المناسب وفق المبادئ الإسلامية.",
      "هناك العديد من القصص الملهمة التي تثبت أن الحب الحلال ممكن، خاصة عندما تقترن النوايا الصادقة بالنهج الصحيح.",
      "اقرأ كيف ساعدت منصة زفاف هؤلاء في إيجاد شريك الحياة المناسب، بطريقة تتوافق مع القيم الإسلامية وتضمن الثقة والموثوقية",
    ],
    stats: [
      { value: "34,484k", label: "اتصالات ناجحة" },
      { value: "2768", label: "أعضاء مسجّلون" },
      { value: "23416", label: "أعضاء نشطون" },
    ],
    photoMainAlt: "عروسان يتعانقان بفرح في الخارج، وهي تحمل زهورًا بيضاء",
    photoSecondaryAlt: "زوجان يمشيان يدًا بيد على الشاطئ",
  },
  clients: {
    number: "٨٧٬٤٣٧",
    label: "من عملائنا السعداء",
    avatarAlt: "أحد أعضاء زفاف السعداء",
  },
  quote: {
    label: "سياستنا ونهجنا",
    title: "ماذا يقول مستخدمونا عن زفاف؟",
    subtitle: "تجارب حقيقية من أشخاص وجدوا شريك حياتهم عبر زفاف!",
    quote: "أنا من سوريا ومقيم بأوروبا والمنصة قرّبت المسافات وسهّلت التواصل بخصوصية واحترام. شكراً لكم.",
    names: ["نورا زريق", "أنس حمدان"],
    photoAlt: "يد تمسك بلطف خاتمي زواج",
  },
  cta: {
    eyebrow: "كن قصة النجاح القادمة!",
    title: "هل أنت مستعد لتكون قصة نجاحنا القادمة؟",
    description: "لا تنتظر أكثر، انضم إلى آلاف المستخدمين الذين وجدوا الحب الحلال عبر زفاف الآن.",
    button: "أنشئ حساباً مجانياً",
  },
  cards: [
    {
      name: "أحمد",
      ageLabel: "٢٩ عامًا",
      quote:
        "تجربة مريحة ومحترمة. شعرت أن المنصة تساعدك حقًا في إيجاد شريك مناسب بطريقة جادة ومتوافقة مع الشريعة.",
    },
    {
      name: "سارة",
      ageLabel: "٢٩ عامًا",
      quote:
        "أحببت مدى وضوح وتنظيم كل خطوة. ساعدتني درجة التوافق أيضًا على التركيز على الملفات الشخصية التي تشاركني قيمي واهتماماتي.",
    },
    {
      name: "أحمد",
      ageLabel: "٢٩ عامًا",
      quote: "إنها مختلفة عن تطبيقات المواعدة التقليدية. الهدف واضح منذ البداية: بناء علاقة جادة بهدف الزواج.",
    },
  ],
};

const en: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Together, Making Life Better",
    title: "Real and inspiring testimonials from couples brought together by fate through a wedding.",
  },
  gallery: [
    { label: "Life Partner", alt: "A couple sharing a joyful, intimate moment together" },
    { label: "Healthy Choices", alt: "A family sharing a warm meal together" },
    {
      label: "Live Better",
      alt: "A groom reaching for his bride's hand on a staircase, she holds a bouquet of flowers",
    },
    { label: "Healthy Journey", alt: "A couple standing together on an ornate balcony at golden hour" },
    { label: "Happy Life", alt: "A man and woman praying together on a prayer rug" },
  ],
  journey: {
    heading: "Finding Halal love begins with a single step!",
    paragraphs: [
      "At the Zafaf platform, we believe that marriage is a beautiful journey that starts with choosing a life partner in accordance with Islamic principles.",
      "There are many inspiring stories proving that Halal love is possible—especially when sincere intentions are combined with the right approach.",
      "Read how the Zafaf platform helped them find the right life partner, in a way that aligns with Islamic values and ensures trust and reliability",
    ],
    stats: [
      { value: "34,484k", label: "Successful connections" },
      { value: "2768", label: "Registered members" },
      { value: "23416", label: "Active members" },
    ],
    photoMainAlt: "A bride and groom embracing joyfully outdoors, she holds white flowers",
    photoSecondaryAlt: "A couple walking hand in hand along a beach",
  },
  clients: {
    number: "87,437",
    label: "From happy clients",
    avatarAlt: "A happy Zefaaf member",
  },
  quote: {
    label: "Our Policy and Approach",
    title: "What do our users say about Zefaaf?",
    subtitle: "Real experiences from people who found their life partners through Zefaaf!",
    quote:
      "I'm from Syria and based in Europe — the platform brought us closer and made communication easier, with privacy and respect. Thank you.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "A hand gently holding out two wedding rings",
  },
  cta: {
    eyebrow: "Be the next story!",
    title: "Are you ready to be our next success story?",
    description: "Don't wait any longer, join thousands of users who found halal love through Zefaaf now.",
    button: "Create free account",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 age",
      quote:
        "A comfortable and respectful experience. I felt that the platform genuinely helps you find a suitable partner in a serious and Sharia-compliant way.",
    },
    {
      name: "Sara",
      ageLabel: "29 age",
      quote:
        "I loved how clear and organized every step was. The compatibility score also helped me focus on profiles that share my values and interests.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 age",
      quote:
        "It's different from traditional dating apps. The purpose is clear from the beginning, building a serious relationship with marriage in mind.",
    },
  ],
};

const nl: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Samen, het leven beter maken",
    title: "Echte en inspirerende getuigenissen van stellen die door het lot samengebracht zijn door een huwelijk.",
  },
  gallery: [
    { label: "Levenspartner", alt: "Een stel dat een vreugdevol, intiem moment samen deelt" },
    { label: "Gezonde keuzes", alt: "Een gezin dat samen een warme maaltijd deelt" },
    {
      label: "Leef beter",
      alt: "Een bruidegom reikt naar de hand van zijn bruid op een trap, zij houdt een boeket bloemen vast",
    },
    { label: "Gezonde reis", alt: "Een stel dat samen op een sierlijk balkon staat bij zonsondergang" },
    { label: "Gelukkig leven", alt: "Een man en vrouw die samen bidden op een gebedskleed" },
  ],
  journey: {
    heading: "Halal liefde vinden begint met één stap!",
    paragraphs: [
      "Bij het Zafaf-platform geloven wij dat het huwelijk een prachtige reis is die begint met het kiezen van een levenspartner volgens islamitische principes.",
      "Er zijn veel inspirerende verhalen die bewijzen dat halal liefde mogelijk is — vooral wanneer oprechte bedoelingen gecombineerd worden met de juiste aanpak.",
      "Lees hoe het Zafaf-platform hen hielp de juiste levenspartner te vinden, op een manier die aansluit bij islamitische waarden en vertrouwen en betrouwbaarheid garandeert",
    ],
    stats: [
      { value: "34,484k", label: "Succesvolle connecties" },
      { value: "2768", label: "Geregistreerde leden" },
      { value: "23416", label: "Actieve leden" },
    ],
    photoMainAlt: "Een bruid en bruidegom omhelzen elkaar vreugdevol buiten, zij houdt witte bloemen vast",
    photoSecondaryAlt: "Een stel dat hand in hand langs het strand loopt",
  },
  clients: {
    number: "87,437",
    label: "Van tevreden klanten",
    avatarAlt: "Een tevreden Zefaaf-lid",
  },
  quote: {
    label: "Ons beleid en onze aanpak",
    title: "Wat zeggen onze gebruikers over Zefaaf?",
    subtitle: "Echte ervaringen van mensen die hun levenspartner vonden via Zefaaf!",
    quote:
      "Ik kom uit Syrië en woon in Europa — het platform bracht ons dichter bij elkaar en maakte communicatie makkelijker, met privacy en respect. Dank jullie wel.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Een hand die zachtjes twee trouwringen vasthoudt",
  },
  cta: {
    eyebrow: "Word het volgende verhaal!",
    title: "Ben je klaar om ons volgende succesverhaal te worden?",
    description: "Wacht niet langer, sluit je aan bij duizenden gebruikers die halal liefde vonden via Zefaaf.",
    button: "Maak een gratis account",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 jaar",
      quote:
        "Een comfortabele en respectvolle ervaring. Ik voelde dat het platform je oprecht helpt een geschikte partner te vinden op een serieuze en sharia-conforme manier.",
    },
    {
      name: "Sara",
      ageLabel: "29 jaar",
      quote:
        "Ik vond het geweldig hoe duidelijk en georganiseerd elke stap was. De compatibiliteitsscore hielp me ook me te richten op profielen die mijn waarden en interesses delen.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 jaar",
      quote:
        "Het is anders dan traditionele datingapps. Het doel is vanaf het begin duidelijk: een serieuze relatie opbouwen met het huwelijk in gedachten.",
    },
  ],
};

const fr: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Ensemble, pour une vie meilleure",
    title: "Des témoignages authentiques et inspirants de couples réunis par le destin à travers un mariage.",
  },
  gallery: [
    { label: "Partenaire de vie", alt: "Un couple partageant un moment joyeux et intime" },
    { label: "Choix sains", alt: "Une famille partageant un repas chaleureux" },
    {
      label: "Vivre mieux",
      alt: "Un marié tendant la main vers sa mariée dans un escalier, elle tient un bouquet de fleurs",
    },
    { label: "Parcours sain", alt: "Un couple debout ensemble sur un balcon orné au coucher du soleil" },
    { label: "Vie heureuse", alt: "Un homme et une femme priant ensemble sur un tapis de prière" },
  ],
  journey: {
    heading: "Trouver l'amour halal commence par un premier pas !",
    paragraphs: [
      "Sur la plateforme Zafaf, nous croyons que le mariage est un beau voyage qui commence par le choix d'un partenaire de vie conforme aux principes islamiques.",
      "De nombreuses histoires inspirantes prouvent que l'amour halal est possible — surtout lorsque des intentions sincères sont combinées à la bonne approche.",
      "Découvrez comment la plateforme Zafaf les a aidés à trouver le bon partenaire de vie, d'une manière conforme aux valeurs islamiques et garantissant confiance et fiabilité",
    ],
    stats: [
      { value: "34,484k", label: "Connexions réussies" },
      { value: "2768", label: "Membres inscrits" },
      { value: "23416", label: "Membres actifs" },
    ],
    photoMainAlt: "Un marié et une mariée s'enlaçant joyeusement en plein air, elle tient des fleurs blanches",
    photoSecondaryAlt: "Un couple marchant main dans la main le long d'une plage",
  },
  clients: {
    number: "87,437",
    label: "Clients satisfaits",
    avatarAlt: "Un membre heureux de Zefaaf",
  },
  quote: {
    label: "Notre politique et notre approche",
    title: "Que disent nos utilisateurs de Zefaaf ?",
    subtitle: "De vraies expériences de personnes ayant trouvé leur partenaire de vie grâce à Zefaaf !",
    quote:
      "Je suis originaire de Syrie et je vis en Europe — la plateforme nous a rapprochés et a facilité la communication, avec discrétion et respect. Merci à vous.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Une main tenant délicatement deux alliances",
  },
  cta: {
    eyebrow: "Devenez la prochaine histoire !",
    title: "Êtes-vous prêt à devenir notre prochaine histoire de réussite ?",
    description:
      "N'attendez plus, rejoignez des milliers d'utilisateurs qui ont trouvé l'amour halal grâce à Zefaaf dès maintenant.",
    button: "Créer un compte gratuit",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 ans",
      quote:
        "Une expérience confortable et respectueuse. J'ai senti que la plateforme aide vraiment à trouver un partenaire adapté, de façon sérieuse et conforme à la charia.",
    },
    {
      name: "Sara",
      ageLabel: "29 ans",
      quote:
        "J'ai adoré la clarté et l'organisation de chaque étape. Le score de compatibilité m'a aussi aidée à me concentrer sur des profils qui partagent mes valeurs et mes centres d'intérêt.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 ans",
      quote:
        "C'est différent des applications de rencontre traditionnelles. L'objectif est clair dès le départ : construire une relation sérieuse en vue du mariage.",
    },
  ],
};

const de: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Gemeinsam das Leben besser machen",
    title:
      "Echte und inspirierende Erfahrungsberichte von Paaren, die das Schicksal durch eine Hochzeit zusammengeführt hat.",
  },
  gallery: [
    { label: "Lebenspartner", alt: "Ein Paar teilt einen freudigen, intimen Moment" },
    { label: "Gesunde Entscheidungen", alt: "Eine Familie teilt eine warme Mahlzeit" },
    {
      label: "Besser leben",
      alt: "Ein Bräutigam greift nach der Hand seiner Braut auf einer Treppe, sie hält einen Blumenstrauß",
    },
    { label: "Gesunde Reise", alt: "Ein Paar steht gemeinsam auf einem kunstvollen Balkon zur goldenen Stunde" },
    { label: "Glückliches Leben", alt: "Ein Mann und eine Frau beten gemeinsam auf einem Gebetsteppich" },
  ],
  journey: {
    heading: "Halale Liebe zu finden beginnt mit einem einzigen Schritt!",
    paragraphs: [
      "Bei der Zafaf-Plattform glauben wir, dass die Ehe eine wunderschöne Reise ist, die mit der Wahl eines Lebenspartners nach islamischen Grundsätzen beginnt.",
      "Es gibt viele inspirierende Geschichten, die beweisen, dass halale Liebe möglich ist – besonders wenn aufrichtige Absichten mit dem richtigen Ansatz kombiniert werden.",
      "Lesen Sie, wie die Zafaf-Plattform ihnen geholfen hat, den richtigen Lebenspartner zu finden, auf eine Weise, die mit islamischen Werten übereinstimmt und Vertrauen und Zuverlässigkeit gewährleistet",
    ],
    stats: [
      { value: "34,484k", label: "Erfolgreiche Verbindungen" },
      { value: "2768", label: "Registrierte Mitglieder" },
      { value: "23416", label: "Aktive Mitglieder" },
    ],
    photoMainAlt: "Eine Braut und ein Bräutigam umarmen sich freudig im Freien, sie hält weiße Blumen",
    photoSecondaryAlt: "Ein Paar geht Hand in Hand am Strand entlang",
  },
  clients: {
    number: "87,437",
    label: "Zufriedene Kunden",
    avatarAlt: "Ein zufriedenes Zefaaf-Mitglied",
  },
  quote: {
    label: "Unsere Grundsätze und unser Ansatz",
    title: "Was sagen unsere Nutzer über Zefaaf?",
    subtitle: "Echte Erfahrungen von Menschen, die über Zefaaf ihren Lebenspartner gefunden haben!",
    quote:
      "Ich komme aus Syrien und lebe in Europa — die Plattform hat uns näher zusammengebracht und die Kommunikation erleichtert, mit Privatsphäre und Respekt. Vielen Dank.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Eine Hand hält sanft zwei Eheringe",
  },
  cta: {
    eyebrow: "Werden Sie die nächste Geschichte!",
    title: "Sind Sie bereit, unsere nächste Erfolgsgeschichte zu werden?",
    description:
      "Warten Sie nicht länger, schließen Sie sich Tausenden von Nutzern an, die durch Zefaaf bereits halale Liebe gefunden haben.",
    button: "Kostenloses Konto erstellen",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 Jahre",
      quote:
        "Eine angenehme und respektvolle Erfahrung. Ich hatte das Gefühl, dass die Plattform wirklich hilft, einen passenden Partner auf ernsthafte und scharia-konforme Weise zu finden.",
    },
    {
      name: "Sara",
      ageLabel: "29 Jahre",
      quote:
        "Mir hat gefallen, wie klar und organisiert jeder Schritt war. Der Kompatibilitäts-Score half mir auch, mich auf Profile zu konzentrieren, die meine Werte und Interessen teilen.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 Jahre",
      quote:
        "Es ist anders als herkömmliche Dating-Apps. Der Zweck ist von Anfang an klar: eine ernsthafte Beziehung mit dem Ziel der Ehe aufzubauen.",
    },
  ],
};

const tr: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Birlikte, hayatı daha iyi kılıyoruz",
    title: "Kader tarafından bir evlilikle bir araya getirilen çiftlerden gerçek ve ilham verici tanıklıklar.",
  },
  gallery: [
    { label: "Hayat Arkadaşı", alt: "Birlikte neşeli, samimi bir an paylaşan bir çift" },
    { label: "Sağlıklı Seçimler", alt: "Birlikte sıcak bir yemek paylaşan bir aile" },
    {
      label: "Daha İyi Yaşa",
      alt: "Bir damadın merdivenlerde gelininin elini tutması, o ise bir buket çiçek tutuyor",
    },
    { label: "Sağlıklı Yolculuk", alt: "Gün batımında süslü bir balkonda birlikte duran bir çift" },
    { label: "Mutlu Yaşam", alt: "Bir seccadede birlikte namaz kılan bir kadın ve erkek" },
  ],
  journey: {
    heading: "Helal aşkı bulmak tek bir adımla başlar!",
    paragraphs: [
      "Zafaf platformunda, evliliğin İslami ilkelere uygun bir hayat arkadaşı seçmekle başlayan güzel bir yolculuk olduğuna inanıyoruz.",
      "Helal aşkın mümkün olduğunu kanıtlayan pek çok ilham verici hikaye var — özellikle samimi niyetler doğru yaklaşımla birleştiğinde.",
      "Zafaf platformunun onların doğru hayat arkadaşını bulmalarına, İslami değerlerle uyumlu ve güven ile güvenilirliği sağlayan bir şekilde nasıl yardımcı olduğunu okuyun",
    ],
    stats: [
      { value: "34,484k", label: "Başarılı bağlantılar" },
      { value: "2768", label: "Kayıtlı üyeler" },
      { value: "23416", label: "Aktif üyeler" },
    ],
    photoMainAlt: "Bir gelin ve damat dışarıda sevinçle sarılıyor, o beyaz çiçekler tutuyor",
    photoSecondaryAlt: "Bir sahilde el ele yürüyen bir çift",
  },
  clients: {
    number: "87,437",
    label: "Mutlu müşterilerimizden",
    avatarAlt: "Mutlu bir Zefaaf üyesi",
  },
  quote: {
    label: "İlkelerimiz ve yaklaşımımız",
    title: "Kullanıcılarımız Zefaaf hakkında ne diyor?",
    subtitle: "Zefaaf sayesinde hayat arkadaşını bulan kişilerden gerçek deneyimler!",
    quote:
      "Suriyeliyim ve Avrupa'da yaşıyorum — platform bizi birbirimize yaklaştırdı ve mahremiyet ile saygı içinde iletişimi kolaylaştırdı. Teşekkür ederiz.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Bir el nazikçe iki alyans tutuyor",
  },
  cta: {
    eyebrow: "Bir sonraki hikaye sen ol!",
    title: "Bir sonraki başarı hikayemiz olmaya hazır mısınız?",
    description: "Daha fazla beklemeyin, Zefaaf sayesinde helal aşkı bulan binlerce kullanıcıya şimdi katılın.",
    button: "Ücretsiz hesap oluşturun",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 yaşında",
      quote:
        "Rahat ve saygılı bir deneyimdi. Platformun ciddi ve şeriata uygun bir şekilde uygun bir eş bulmanıza gerçekten yardımcı olduğunu hissettim.",
    },
    {
      name: "Sara",
      ageLabel: "29 yaşında",
      quote:
        "Her adımın ne kadar net ve düzenli olduğunu çok sevdim. Uyumluluk puanı da değerlerimi ve ilgi alanlarımı paylaşan profillere odaklanmama yardımcı oldu.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 yaşında",
      quote: "Geleneksel flört uygulamalarından farklı. Amaç en başından belli: evliliği düşünerek ciddi bir ilişki kurmak.",
    },
  ],
};

const ru: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Вместе делаем жизнь лучше",
    title: "Реальные и вдохновляющие истории пар, которых судьба свела через брак.",
  },
  gallery: [
    { label: "Спутник жизни", alt: "Пара разделяет радостный, интимный момент" },
    { label: "Здоровый выбор", alt: "Семья разделяет тёплый ужин" },
    { label: "Живите лучше", alt: "Жених тянется к руке невесты на лестнице, она держит букет цветов" },
    { label: "Здоровый путь", alt: "Пара стоит вместе на изысканном балконе в час заката" },
    { label: "Счастливая жизнь", alt: "Мужчина и женщина молятся вместе на молитвенном коврике" },
  ],
  journey: {
    heading: "Поиск дозволенной любви начинается с одного шага!",
    paragraphs: [
      "На платформе Zafaf мы верим, что брак — это прекрасное путешествие, которое начинается с выбора спутника жизни в соответствии с исламскими принципами.",
      "Есть много вдохновляющих историй, доказывающих, что дозволенная любовь возможна — особенно когда искренние намерения сочетаются с правильным подходом.",
      "Прочитайте, как платформа Zafaf помогла им найти подходящего спутника жизни так, чтобы это соответствовало исламским ценностям и обеспечивало доверие и надёжность",
    ],
    stats: [
      { value: "34,484k", label: "Успешных знакомств" },
      { value: "2768", label: "Зарегистрированных участников" },
      { value: "23416", label: "Активных участников" },
    ],
    photoMainAlt: "Жених и невеста радостно обнимаются на улице, она держит белые цветы",
    photoSecondaryAlt: "Пара идёт, держась за руки, по пляжу",
  },
  clients: {
    number: "87,437",
    label: "Довольных клиентов",
    avatarAlt: "Довольный участник Zefaaf",
  },
  quote: {
    label: "Наша политика и подход",
    title: "Что говорят наши пользователи о Zefaaf?",
    subtitle: "Реальные истории людей, нашедших своего спутника жизни через Zefaaf!",
    quote:
      "Я из Сирии, живу в Европе — платформа сблизила нас и облегчила общение, с уважением к частной жизни. Спасибо вам.",
    names: ["Нора Зрейк", "Анас Хамдан"],
    photoAlt: "Рука бережно держит два обручальных кольца",
  },
  cta: {
    eyebrow: "Стань следующей историей!",
    title: "Готовы стать нашей следующей историей успеха?",
    description: "Не ждите больше — присоединяйтесь к тысячам пользователей, которые уже нашли дозволенную любовь через Zefaaf.",
    button: "Создать бесплатный аккаунт",
  },
  cards: [
    {
      name: "Ахмед",
      ageLabel: "29 лет",
      quote:
        "Комфортный и уважительный опыт. Я почувствовал, что платформа по-настоящему помогает найти подходящего партнёра серьёзно и в соответствии с шариатом.",
    },
    {
      name: "Сара",
      ageLabel: "29 лет",
      quote:
        "Мне понравилось, насколько понятным и организованным был каждый шаг. Оценка совместимости также помогла мне сосредоточиться на анкетах, разделяющих мои ценности и интересы.",
    },
    {
      name: "Ахмед",
      ageLabel: "29 лет",
      quote:
        "Это отличается от обычных приложений для знакомств. Цель ясна с самого начала — построить серьёзные отношения с намерением вступить в брак.",
    },
  ],
};

const id: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Bersama, membuat hidup lebih baik",
    title: "Kesaksian nyata dan menginspirasi dari pasangan yang dipertemukan takdir melalui pernikahan.",
  },
  gallery: [
    { label: "Pasangan Hidup", alt: "Sepasang kekasih berbagi momen bahagia dan intim" },
    { label: "Pilihan Sehat", alt: "Sebuah keluarga berbagi makan hangat bersama" },
    {
      label: "Hidup Lebih Baik",
      alt: "Seorang pengantin pria meraih tangan pengantin wanitanya di tangga, ia memegang buket bunga",
    },
    { label: "Perjalanan Sehat", alt: "Sepasang kekasih berdiri bersama di balkon yang indah saat senja" },
    { label: "Hidup Bahagia", alt: "Seorang pria dan wanita salat bersama di atas sajadah" },
  ],
  journey: {
    heading: "Menemukan cinta halal dimulai dengan satu langkah!",
    paragraphs: [
      "Di platform Zafaf, kami percaya bahwa pernikahan adalah perjalanan indah yang dimulai dengan memilih pasangan hidup sesuai prinsip-prinsip Islam.",
      "Ada banyak kisah menginspirasi yang membuktikan bahwa cinta halal itu mungkin — terutama ketika niat tulus dipadukan dengan pendekatan yang tepat.",
      "Baca bagaimana platform Zafaf membantu mereka menemukan pasangan hidup yang tepat, dengan cara yang sejalan dengan nilai-nilai Islam serta menjamin kepercayaan dan keandalan",
    ],
    stats: [
      { value: "34,484k", label: "Koneksi berhasil" },
      { value: "2768", label: "Anggota terdaftar" },
      { value: "23416", label: "Anggota aktif" },
    ],
    photoMainAlt: "Pengantin pria dan wanita berpelukan gembira di luar ruangan, ia memegang bunga putih",
    photoSecondaryAlt: "Sepasang kekasih berjalan bergandengan tangan di sepanjang pantai",
  },
  clients: {
    number: "87,437",
    label: "Dari pelanggan yang bahagia",
    avatarAlt: "Seorang anggota Zefaaf yang bahagia",
  },
  quote: {
    label: "Kebijakan dan Pendekatan Kami",
    title: "Apa kata pengguna kami tentang Zefaaf?",
    subtitle: "Pengalaman nyata dari orang-orang yang menemukan pasangan hidup mereka melalui Zefaaf!",
    quote:
      "Saya berasal dari Suriah dan tinggal di Eropa — platform ini mendekatkan kami dan mempermudah komunikasi, dengan privasi dan rasa hormat. Terima kasih.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Sebuah tangan lembut memegang dua cincin kawin",
  },
  cta: {
    eyebrow: "Jadilah kisah berikutnya!",
    title: "Apakah Anda siap menjadi kisah sukses kami berikutnya?",
    description:
      "Jangan menunggu lebih lama lagi, bergabunglah dengan ribuan pengguna yang telah menemukan cinta halal melalui Zefaaf sekarang.",
    button: "Buat akun gratis",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 tahun",
      quote:
        "Pengalaman yang nyaman dan penuh rasa hormat. Saya merasa platform ini benar-benar membantu menemukan pasangan yang cocok dengan cara yang serius dan sesuai syariah.",
    },
    {
      name: "Sara",
      ageLabel: "29 tahun",
      quote:
        "Saya suka betapa jelas dan terorganisirnya setiap langkah. Skor kecocokan juga membantu saya fokus pada profil yang memiliki nilai dan minat yang sama.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 tahun",
      quote: "Ini berbeda dari aplikasi kencan tradisional. Tujuannya jelas sejak awal: membangun hubungan serius dengan niat menikah.",
    },
  ],
};

const zh: SuccessStoriesCopy = {
  hero: {
    eyebrow: "携手同行,让生活更美好",
    title: "真实而感人的见证,讲述被命运通过婚姻联系在一起的夫妻们的故事。",
  },
  gallery: [
    { label: "人生伴侣", alt: "一对夫妻分享着快乐而亲密的时刻" },
    { label: "健康的选择", alt: "一家人共享温馨的一餐" },
    { label: "更好的生活", alt: "新郎在楼梯上牵起新娘的手,她手捧一束鲜花" },
    { label: "健康的旅程", alt: "一对夫妻在夕阳下的华丽阳台上并肩而立" },
    { label: "幸福生活", alt: "一男一女在祈祷毯上一同祈祷" },
  ],
  journey: {
    heading: "寻找合法之爱,从迈出第一步开始!",
    paragraphs: [
      "在 Zafaf 平台,我们相信婚姻是一段美好的旅程,始于按照伊斯兰原则选择人生伴侣。",
      "许多励志的故事证明,合法之爱是可能的——尤其是当真诚的意愿与正确的方法相结合时。",
      "了解 Zafaf 平台如何以符合伊斯兰价值观、确保信任与可靠的方式,帮助他们找到合适的人生伴侣",
    ],
    stats: [
      { value: "34,484k", label: "成功牵手数" },
      { value: "2768", label: "注册会员数" },
      { value: "23416", label: "活跃会员数" },
    ],
    photoMainAlt: "一对新人在户外欢乐拥抱,新娘手捧白色鲜花",
    photoSecondaryAlt: "一对夫妻手牵手走在沙滩上",
  },
  clients: {
    number: "87,437",
    label: "满意客户",
    avatarAlt: "一位满意的 Zefaaf 会员",
  },
  quote: {
    label: "我们的政策与理念",
    title: "用户如何评价 Zefaaf?",
    subtitle: "通过 Zefaaf 找到人生伴侣的真实故事!",
    quote: "我来自叙利亚,现居欧洲——这个平台拉近了我们的距离,让沟通在尊重隐私与彼此的前提下变得更加顺畅。谢谢你们。",
    names: ["诺拉·兹赖克", "阿纳斯·哈姆丹"],
    photoAlt: "一只手轻轻托着两枚结婚戒指",
  },
  cta: {
    eyebrow: "成为下一个故事!",
    title: "准备好成为我们下一个成功故事了吗?",
    description: "不要再等待了,现在就加入数千名通过 Zefaaf 找到合法之爱的用户吧。",
    button: "创建免费账户",
  },
  cards: [
    {
      name: "艾哈迈德",
      ageLabel: "29岁",
      quote: "一次舒适而受尊重的体验。我感觉这个平台真正帮助你以严肃且符合教法的方式找到合适的伴侣。",
    },
    {
      name: "萨拉",
      ageLabel: "29岁",
      quote: "我很喜欢每一步都如此清晰有序。匹配度评分也帮助我专注于那些与我价值观和兴趣相符的资料。",
    },
    {
      name: "艾哈迈德",
      ageLabel: "29岁",
      quote: "它与传统的交友软件不同。目标从一开始就很明确:以婚姻为目的建立严肃的关系。",
    },
  ],
};

const bn: SuccessStoriesCopy = {
  hero: {
    eyebrow: "একসাথে, জীবনকে আরও ভালো করছি",
    title: "বিয়ের মাধ্যমে ভাগ্যের দ্বারা একত্রিত দম্পতিদের প্রকৃত এবং অনুপ্রেরণাদায়ক সাক্ষ্য।",
  },
  gallery: [
    { label: "জীবনসঙ্গী", alt: "একটি দম্পতি একসাথে আনন্দময়, ঘনিষ্ঠ মুহূর্ত ভাগ করে নিচ্ছে" },
    { label: "স্বাস্থ্যকর পছন্দ", alt: "একটি পরিবার একসাথে উষ্ণ খাবার ভাগ করে নিচ্ছে" },
    {
      label: "আরও ভালো বাঁচুন",
      alt: "একজন বর সিঁড়িতে তার কনের হাত ধরছেন, তিনি ফুলের তোড়া ধরে আছেন",
    },
    { label: "স্বাস্থ্যকর যাত্রা", alt: "সূর্যাস্তের সময় একটি সুসজ্জিত বারান্দায় একসাথে দাঁড়িয়ে থাকা দম্পতি" },
    { label: "সুখী জীবন", alt: "একজন পুরুষ ও নারী জায়নামাজে একসাথে নামাজ পড়ছেন" },
  ],
  journey: {
    heading: "হালাল ভালোবাসা খুঁজে পাওয়া শুরু হয় একটি পদক্ষেপ দিয়ে!",
    paragraphs: [
      "জাফাফ প্ল্যাটফর্মে, আমরা বিশ্বাস করি বিবাহ একটি সুন্দর যাত্রা যা ইসলামিক নীতি অনুযায়ী জীবনসঙ্গী নির্বাচনের মাধ্যমে শুরু হয়।",
      "অনেক অনুপ্রেরণাদায়ক গল্প প্রমাণ করে যে হালাল ভালোবাসা সম্ভব — বিশেষত যখন আন্তরিক নিয়তকে সঠিক পদ্ধতির সাথে মিলিত করা হয়।",
      "পড়ুন কীভাবে জাফাফ প্ল্যাটফর্ম তাদের সঠিক জীবনসঙ্গী খুঁজে পেতে সাহায্য করেছে, এমনভাবে যা ইসলামিক মূল্যবোধের সাথে সামঞ্জস্যপূর্ণ এবং বিশ্বাস ও নির্ভরযোগ্যতা নিশ্চিত করে",
    ],
    stats: [
      { value: "34,484k", label: "সফল সংযোগ" },
      { value: "2768", label: "নিবন্ধিত সদস্য" },
      { value: "23416", label: "সক্রিয় সদস্য" },
    ],
    photoMainAlt: "একজন বর ও কনে বাইরে আনন্দে একে অপরকে জড়িয়ে ধরছেন, তিনি সাদা ফুল ধরে আছেন",
    photoSecondaryAlt: "একটি দম্পতি হাত ধরে সৈকত ধরে হাঁটছেন",
  },
  clients: {
    number: "87,437",
    label: "সুখী গ্রাহকদের কাছ থেকে",
    avatarAlt: "একজন সুখী জেফাফ সদস্য",
  },
  quote: {
    label: "আমাদের নীতি ও পদ্ধতি",
    title: "আমাদের ব্যবহারকারীরা জেফাফ সম্পর্কে কী বলেন?",
    subtitle: "জেফাফের মাধ্যমে জীবনসঙ্গী খুঁজে পাওয়া মানুষদের প্রকৃত অভিজ্ঞতা!",
    quote:
      "আমি সিরিয়া থেকে এসেছি এবং ইউরোপে থাকি — এই প্ল্যাটফর্ম আমাদের কাছাকাছি এনেছে এবং গোপনীয়তা ও সম্মানের সাথে যোগাযোগ সহজ করেছে। আপনাদের ধন্যবাদ।",
    names: ["নোরা জ্রেইক", "আনাস হামদান"],
    photoAlt: "একটি হাত আলতোভাবে দুটি বিয়ের আংটি ধরে আছে",
  },
  cta: {
    eyebrow: "পরবর্তী গল্প আপনিই হোন!",
    title: "আপনি কি আমাদের পরবর্তী সাফল্যের গল্প হতে প্রস্তুত?",
    description: "আর অপেক্ষা করবেন না, জাফাফের মাধ্যমে হালাল ভালোবাসা খুঁজে পাওয়া হাজার হাজার ব্যবহারকারীর সাথে এখনই যোগ দিন।",
    button: "বিনামূল্যে অ্যাকাউন্ট তৈরি করুন",
  },
  cards: [
    {
      name: "আহমেদ",
      ageLabel: "২৯ বছর",
      quote:
        "একটি আরামদায়ক এবং সম্মানজনক অভিজ্ঞতা। আমি অনুভব করেছি যে এই প্ল্যাটফর্মটি সত্যিকার অর্থে গুরুত্বসহকারে এবং শরিয়াহ-সম্মতভাবে উপযুক্ত সঙ্গী খুঁজে পেতে সাহায্য করে।",
    },
    {
      name: "সারা",
      ageLabel: "২৯ বছর",
      quote:
        "প্রতিটি ধাপ কতটা স্পষ্ট এবং সুসংগঠিত ছিল তা আমার খুব ভালো লেগেছে। সামঞ্জস্য স্কোরও আমাকে আমার মূল্যবোধ ও আগ্রহ ভাগ করে নেওয়া প্রোফাইলগুলোতে মনোযোগ দিতে সাহায্য করেছে।",
    },
    {
      name: "আহমেদ",
      ageLabel: "২৯ বছর",
      quote: "এটি প্রচলিত ডেটিং অ্যাপ থেকে আলাদা। শুরু থেকেই উদ্দেশ্য স্পষ্ট: বিবাহের লক্ষ্যে একটি গুরুত্বপূর্ণ সম্পর্ক গড়ে তোলা।",
    },
  ],
};

const bs: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Zajedno, činimo život boljim",
    title: "Stvarna i inspirativna svjedočanstva parova koje je sudbina spojila kroz brak.",
  },
  gallery: [
    { label: "Životni partner", alt: "Par dijeli radostan, intiman trenutak zajedno" },
    { label: "Zdravi izbori", alt: "Porodica dijeli topao obrok zajedno" },
    {
      label: "Živite bolje",
      alt: "Mladoženja poseže za rukom svoje mladenke na stepenicama, ona drži buket cvijeća",
    },
    { label: "Zdravo putovanje", alt: "Par stoji zajedno na ukrašenom balkonu za vrijeme zalaska sunca" },
    { label: "Sretan život", alt: "Muškarac i žena zajedno klanjaju na sedžadi" },
  ],
  journey: {
    heading: "Pronalaženje halal ljubavi počinje jednim korakom!",
    paragraphs: [
      "Na platformi Zafaf vjerujemo da je brak prekrasno putovanje koje počinje odabirom životnog partnera u skladu s islamskim principima.",
      "Postoje mnoge inspirativne priče koje dokazuju da je halal ljubav moguća — posebno kada se iskrene namjere kombiniraju s pravim pristupom.",
      "Pročitajte kako je platforma Zafaf pomogla ovim ljudima da pronađu pravog životnog partnera, na način koji je usklađen s islamskim vrijednostima i osigurava povjerenje i pouzdanost",
    ],
    stats: [
      { value: "34,484k", label: "Uspješnih povezivanja" },
      { value: "2768", label: "Registrovanih članova" },
      { value: "23416", label: "Aktivnih članova" },
    ],
    photoMainAlt: "Mladenka i mladoženja se radosno grle na otvorenom, ona drži bijelo cvijeće",
    photoSecondaryAlt: "Par šeta držeći se za ruke duž plaže",
  },
  clients: {
    number: "87,437",
    label: "Od zadovoljnih klijenata",
    avatarAlt: "Sretan član Zefaafa",
  },
  quote: {
    label: "Naša politika i pristup",
    title: "Šta naši korisnici kažu o Zefaafu?",
    subtitle: "Stvarna iskustva ljudi koji su pronašli svog životnog partnera preko Zefaafa!",
    quote:
      "Ja sam iz Sirije i živim u Evropi — platforma nas je zbližila i olakšala komunikaciju, uz privatnost i poštovanje. Hvala vam.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Ruka nježno drži dva vjenčana prstena",
  },
  cta: {
    eyebrow: "Postani sljedeća priča!",
    title: "Jeste li spremni postati naša sljedeća priča o uspjehu?",
    description: "Ne čekajte više, pridružite se hiljadama korisnika koji su pronašli halal ljubav putem Zefaafa upravo sada.",
    button: "Napravite besplatan račun",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 godina",
      quote:
        "Ugodno i uljudno iskustvo. Osjećao sam da platforma zaista pomaže da pronađete pravog partnera na ozbiljan i šerijatski usklađen način.",
    },
    {
      name: "Sara",
      ageLabel: "29 godina",
      quote:
        "Svidjelo mi se koliko je svaki korak bio jasan i organizovan. Ocjena kompatibilnosti mi je također pomogla da se fokusiram na profile koji dijele moje vrijednosti i interese.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 godina",
      quote: "Razlikuje se od tradicionalnih aplikacija za upoznavanje. Cilj je jasan od samog početka: izgraditi ozbiljnu vezu s namjerom braka.",
    },
  ],
};

const es: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Juntos, mejorando la vida",
    title: "Testimonios reales e inspiradores de parejas unidas por el destino a través de un matrimonio.",
  },
  gallery: [
    { label: "Pareja de vida", alt: "Una pareja compartiendo un momento alegre e íntimo" },
    { label: "Elecciones saludables", alt: "Una familia compartiendo una comida cálida" },
    {
      label: "Vive mejor",
      alt: "Un novio tomando la mano de su novia en una escalera, ella sostiene un ramo de flores",
    },
    { label: "Camino saludable", alt: "Una pareja de pie juntos en un balcón ornamentado al atardecer" },
    { label: "Vida feliz", alt: "Un hombre y una mujer orando juntos en una alfombra de oración" },
  ],
  journey: {
    heading: "¡Encontrar el amor halal comienza con un solo paso!",
    paragraphs: [
      "En la plataforma Zafaf, creemos que el matrimonio es un hermoso viaje que comienza al elegir una pareja de vida conforme a los principios islámicos.",
      "Hay muchas historias inspiradoras que demuestran que el amor halal es posible, especialmente cuando las intenciones sinceras se combinan con el enfoque adecuado.",
      "Lee cómo la plataforma Zafaf les ayudó a encontrar a la pareja de vida adecuada, de una manera acorde con los valores islámicos que garantiza confianza y fiabilidad",
    ],
    stats: [
      { value: "34,484k", label: "Conexiones exitosas" },
      { value: "2768", label: "Miembros registrados" },
      { value: "23416", label: "Miembros activos" },
    ],
    photoMainAlt: "Una novia y un novio se abrazan con alegría al aire libre, ella sostiene flores blancas",
    photoSecondaryAlt: "Una pareja caminando de la mano por una playa",
  },
  clients: {
    number: "87,437",
    label: "De clientes felices",
    avatarAlt: "Un miembro feliz de Zefaaf",
  },
  quote: {
    label: "Nuestra política y enfoque",
    title: "¿Qué dicen nuestros usuarios sobre Zefaaf?",
    subtitle: "¡Experiencias reales de personas que encontraron a su pareja de vida a través de Zefaaf!",
    quote:
      "Soy de Siria y vivo en Europa — la plataforma nos acercó y facilitó la comunicación, con privacidad y respeto. Gracias.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Una mano sosteniendo suavemente dos anillos de boda",
  },
  cta: {
    eyebrow: "¡Sé la próxima historia!",
    title: "¿Estás listo para ser nuestra próxima historia de éxito?",
    description: "No esperes más, únete ahora a miles de usuarios que encontraron el amor halal a través de Zefaaf.",
    button: "Crear cuenta gratuita",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 años",
      quote:
        "Una experiencia cómoda y respetuosa. Sentí que la plataforma realmente ayuda a encontrar una pareja adecuada de forma seria y conforme a la sharia.",
    },
    {
      name: "Sara",
      ageLabel: "29 años",
      quote:
        "Me encantó lo claro y organizado que fue cada paso. La puntuación de compatibilidad también me ayudó a centrarme en perfiles que comparten mis valores e intereses.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 años",
      quote: "Es diferente de las aplicaciones de citas tradicionales. El propósito está claro desde el principio: construir una relación seria con miras al matrimonio.",
    },
  ],
};

const fa: SuccessStoriesCopy = {
  hero: {
    eyebrow: "با هم، زندگی را بهتر می‌سازیم",
    title: "شهادت‌های واقعی و الهام‌بخش از زوج‌هایی که سرنوشت آن‌ها را از طریق ازدواج به هم رسانده است.",
  },
  gallery: [
    { label: "همسر زندگی", alt: "زوجی که لحظه‌ای شاد و صمیمی را با هم سپری می‌کنند" },
    { label: "انتخاب‌های سالم", alt: "خانواده‌ای که وعده‌ای گرم را با هم می‌خورند" },
    {
      label: "بهتر زندگی کنید",
      alt: "دامادی که در پله‌ها دست عروسش را می‌گیرد، او دسته‌گلی در دست دارد",
    },
    { label: "سفر سالم", alt: "زوجی که هنگام غروب آفتاب در بالکنی زیبا کنار هم ایستاده‌اند" },
    { label: "زندگی شاد", alt: "مرد و زنی که با هم بر روی سجاده نماز می‌خوانند" },
  ],
  journey: {
    heading: "یافتن عشق حلال با یک قدم آغاز می‌شود!",
    paragraphs: [
      "در پلتفرم زفاف، ما معتقدیم ازدواج سفری زیباست که با انتخاب همسر زندگی مطابق با اصول اسلامی آغاز می‌شود.",
      "داستان‌های الهام‌بخش بسیاری وجود دارد که ثابت می‌کند عشق حلال ممکن است — به‌ویژه زمانی که نیت صادقانه با رویکرد درست همراه شود.",
      "بخوانید که چگونه پلتفرم زفاف به آن‌ها کمک کرد تا همسر زندگی مناسب را پیدا کنند، به شیوه‌ای که با ارزش‌های اسلامی همخوانی دارد و اعتماد و قابلیت اطمینان را تضمین می‌کند",
    ],
    stats: [
      { value: "34,484k", label: "ارتباط‌های موفق" },
      { value: "2768", label: "اعضای ثبت‌نام‌شده" },
      { value: "23416", label: "اعضای فعال" },
    ],
    photoMainAlt: "عروس و دامادی که با خوشحالی در فضای باز یکدیگر را در آغوش گرفته‌اند، او گل‌های سفید در دست دارد",
    photoSecondaryAlt: "زوجی که دست در دست هم در ساحل قدم می‌زنند",
  },
  clients: {
    number: "87,437",
    label: "از مشتریان راضی",
    avatarAlt: "یکی از اعضای خوشحال زفاف",
  },
  quote: {
    label: "سیاست و رویکرد ما",
    title: "کاربران ما درباره‌ی زفاف چه می‌گویند؟",
    subtitle: "تجربه‌های واقعی افرادی که همسر زندگی خود را از طریق زفاف یافته‌اند!",
    quote:
      "من اهل سوریه هستم و در اروپا زندگی می‌کنم — این پلتفرم ما را به هم نزدیک کرد و ارتباط را با حفظ حریم خصوصی و احترام آسان‌تر ساخت. از شما سپاسگزارم.",
    names: ["نورا زریق", "انس حمدان"],
    photoAlt: "دستی که به آرامی دو حلقه ازدواج را در دست گرفته است",
  },
  cta: {
    eyebrow: "داستان بعدی شما باشید!",
    title: "آیا آماده‌اید داستان موفقیت بعدی ما باشید؟",
    description: "دیگر منتظر نمانید، همین حالا به هزاران کاربری بپیوندید که از طریق زفاف عشق حلال را یافته‌اند.",
    button: "ایجاد حساب رایگان",
  },
  cards: [
    {
      name: "احمد",
      ageLabel: "29 ساله",
      quote:
        "تجربه‌ای راحت و محترمانه. احساس کردم این پلتفرم واقعاً به شما کمک می‌کند تا شریکی مناسب را به شکلی جدی و مطابق با شریعت پیدا کنید.",
    },
    {
      name: "سارا",
      ageLabel: "29 ساله",
      quote:
        "از اینکه هر مرحله چقدر شفاف و منظم بود لذت بردم. امتیاز تطابق نیز به من کمک کرد تا روی پروفایل‌هایی تمرکز کنم که ارزش‌ها و علایق من را به اشتراک می‌گذارند.",
    },
    {
      name: "احمد",
      ageLabel: "29 ساله",
      quote: "این با اپلیکیشن‌های دوستیابی سنتی متفاوت است. هدف از همان ابتدا مشخص است: ساختن رابطه‌ای جدی با نیت ازدواج.",
    },
  ],
};

const pt: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Juntos, tornando a vida melhor",
    title: "Depoimentos reais e inspiradores de casais unidos pelo destino através de um casamento.",
  },
  gallery: [
    { label: "Parceiro de vida", alt: "Um casal compartilhando um momento alegre e íntimo" },
    { label: "Escolhas saudáveis", alt: "Uma família compartilhando uma refeição calorosa" },
    {
      label: "Viva melhor",
      alt: "Um noivo segurando a mão de sua noiva em uma escada, ela segura um buquê de flores",
    },
    { label: "Jornada saudável", alt: "Um casal em pé juntos em uma varanda ornamentada ao pôr do sol" },
    { label: "Vida feliz", alt: "Um homem e uma mulher orando juntos em um tapete de oração" },
  ],
  journey: {
    heading: "Encontrar o amor halal começa com um único passo!",
    paragraphs: [
      "Na plataforma Zafaf, acreditamos que o casamento é uma bela jornada que começa com a escolha de um parceiro de vida de acordo com os princípios islâmicos.",
      "Há muitas histórias inspiradoras que provam que o amor halal é possível — especialmente quando intenções sinceras se combinam com a abordagem certa.",
      "Leia como a plataforma Zafaf os ajudou a encontrar o parceiro de vida certo, de uma forma alinhada aos valores islâmicos que garante confiança e credibilidade",
    ],
    stats: [
      { value: "34,484k", label: "Conexões bem-sucedidas" },
      { value: "2768", label: "Membros registrados" },
      { value: "23416", label: "Membros ativos" },
    ],
    photoMainAlt: "Uma noiva e um noivo se abraçam alegremente ao ar livre, ela segura flores brancas",
    photoSecondaryAlt: "Um casal caminhando de mãos dadas pela praia",
  },
  clients: {
    number: "87,437",
    label: "De clientes felizes",
    avatarAlt: "Um membro feliz da Zefaaf",
  },
  quote: {
    label: "Nossa política e abordagem",
    title: "O que nossos usuários dizem sobre a Zefaaf?",
    subtitle: "Experiências reais de pessoas que encontraram seu parceiro de vida através da Zefaaf!",
    quote:
      "Sou da Síria e vivo na Europa — a plataforma nos aproximou e facilitou a comunicação, com privacidade e respeito. Obrigado a vocês.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Uma mão segurando gentilmente duas alianças de casamento",
  },
  cta: {
    eyebrow: "Seja a próxima história!",
    title: "Está pronto para ser nossa próxima história de sucesso?",
    description: "Não espere mais, junte-se agora a milhares de usuários que encontraram o amor halal através da Zefaaf.",
    button: "Criar conta gratuita",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 anos",
      quote:
        "Uma experiência confortável e respeitosa. Senti que a plataforma realmente ajuda a encontrar um parceiro adequado de forma séria e em conformidade com a sharia.",
    },
    {
      name: "Sara",
      ageLabel: "29 anos",
      quote:
        "Adorei como cada etapa foi clara e organizada. A pontuação de compatibilidade também me ajudou a focar em perfis que compartilham meus valores e interesses.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 anos",
      quote: "É diferente dos aplicativos de namoro tradicionais. O propósito é claro desde o início: construir um relacionamento sério com o casamento em mente.",
    },
  ],
};

const ja: SuccessStoriesCopy = {
  hero: {
    eyebrow: "共に、より良い人生を",
    title: "結婚を通じて運命によって結ばれた夫婦たちの、本物で感動的な体験談。",
  },
  gallery: [
    { label: "人生のパートナー", alt: "喜びと親密なひとときを共にするカップル" },
    { label: "健康的な選択", alt: "温かい食事を共にする家族" },
    { label: "より良く生きる", alt: "階段で花嫁の手を取ろうとする花婿、花嫁は花束を持っている" },
    { label: "健やかな歩み", alt: "夕暮れ時に装飾的なバルコニーに一緒に立つカップル" },
    { label: "幸せな人生", alt: "礼拝用の敷物の上で共に祈る男女" },
  ],
  journey: {
    heading: "ハラールな愛を見つける旅は、たった一歩から始まります!",
    paragraphs: [
      "Zafafプラットフォームでは、結婚とはイスラムの原則に従って人生のパートナーを選ぶことから始まる美しい旅だと信じています。",
      "誠実な意図と正しいアプローチが組み合わさったとき、ハラールな愛は可能であることを証明する多くの感動的な物語があります。",
      "Zafafプラットフォームが、イスラムの価値観に沿い、信頼と信頼性を保証する方法で、彼らが正しい人生のパートナーを見つける手助けをした様子をお読みください",
    ],
    stats: [
      { value: "34,484k", label: "成立した縁組" },
      { value: "2768", label: "登録会員数" },
      { value: "23416", label: "アクティブ会員数" },
    ],
    photoMainAlt: "屋外で喜びを分かち合いながら抱き合う新郎新婦、花嫁は白い花を持っている",
    photoSecondaryAlt: "手をつないでビーチを歩くカップル",
  },
  clients: {
    number: "87,437",
    label: "満足したお客様より",
    avatarAlt: "満足しているZefaafメンバー",
  },
  quote: {
    label: "私たちの方針とアプローチ",
    title: "利用者はZefaafについてどう言っていますか?",
    subtitle: "Zefaafを通じて人生の伴侶を見つけた方々のリアルな体験談!",
    quote:
      "私はシリア出身でヨーロッパに住んでいます。このプラットフォームのおかげで距離が縮まり、プライバシーと敬意を保ちながらコミュニケーションが取りやすくなりました。ありがとうございます。",
    names: ["ノラ・ズレイク", "アナス・ハムダン"],
    photoAlt: "手が優しく2つの結婚指輪を持っている",
  },
  cta: {
    eyebrow: "次の物語はあなたです!",
    title: "私たちの次のサクセスストーリーになる準備はできていますか?",
    description: "もう待つ必要はありません。Zefaafを通じてハラールな愛を見つけた何千人ものユーザーに今すぐ参加しましょう。",
    button: "無料アカウントを作成",
  },
  cards: [
    {
      name: "アハメド",
      ageLabel: "29歳",
      quote:
        "快適で敬意のある体験でした。このプラットフォームは、真剣かつシャリアに準拠した方法で適切なパートナーを見つける手助けを本当にしてくれると感じました。",
    },
    {
      name: "サラ",
      ageLabel: "29歳",
      quote:
        "各ステップがとても明確で整理されていたのが気に入りました。相性スコアのおかげで、自分の価値観や興味を共有するプロフィールに集中することができました。",
    },
    {
      name: "アハメド",
      ageLabel: "29歳",
      quote: "従来の出会い系アプリとは違います。目的は最初から明確です:結婚を見据えた真剣な関係を築くことです。",
    },
  ],
};

const ko: SuccessStoriesCopy = {
  hero: {
    eyebrow: "함께, 더 나은 삶을 만들어갑니다",
    title: "결혼을 통해 운명으로 맺어진 부부들의 진솔하고 감동적인 이야기.",
  },
  gallery: [
    { label: "인생의 동반자", alt: "함께 기쁘고 친밀한 순간을 나누는 커플" },
    { label: "건강한 선택", alt: "따뜻한 식사를 함께 나누는 가족" },
    { label: "더 나은 삶을 살다", alt: "계단에서 신부의 손을 잡으려는 신랑, 신부는 꽃다발을 들고 있다" },
    { label: "건강한 여정", alt: "노을 지는 시간에 화려한 발코니에 함께 서 있는 커플" },
    { label: "행복한 삶", alt: "기도 매트 위에서 함께 기도하는 남녀" },
  ],
  journey: {
    heading: "할랄 사랑을 찾는 것은 단 한 걸음에서 시작됩니다!",
    paragraphs: [
      "Zafaf 플랫폼에서는 결혼이 이슬람 원칙에 따라 인생의 동반자를 선택하는 것에서 시작되는 아름다운 여정이라고 믿습니다.",
      "진실한 의도가 올바른 접근 방식과 결합될 때 할랄 사랑이 가능하다는 것을 증명하는 많은 감동적인 이야기가 있습니다.",
      "Zafaf 플랫폼이 이슬람 가치에 부합하고 신뢰와 신뢰성을 보장하는 방식으로 그들이 올바른 인생의 동반자를 찾도록 어떻게 도왔는지 읽어보세요",
    ],
    stats: [
      { value: "34,484k", label: "성사된 인연" },
      { value: "2768", label: "등록 회원" },
      { value: "23416", label: "활성 회원" },
    ],
    photoMainAlt: "야외에서 기쁘게 포옹하는 신랑 신부, 신부는 흰 꽃을 들고 있다",
    photoSecondaryAlt: "해변을 손잡고 걷는 커플",
  },
  clients: {
    number: "87,437",
    label: "행복한 고객으로부터",
    avatarAlt: "행복한 Zefaaf 회원",
  },
  quote: {
    label: "저희의 정책과 접근 방식",
    title: "이용자들은 Zefaaf에 대해 어떻게 말할까요?",
    subtitle: "Zefaaf를 통해 인생의 동반자를 찾은 사람들의 진짜 이야기!",
    quote:
      "저는 시리아 출신이며 유럽에 살고 있습니다 — 이 플랫폼 덕분에 서로 가까워졌고, 사생활과 존중을 지키며 소통이 한결 수월해졌습니다. 감사합니다.",
    names: ["노라 즈레이크", "아나스 함단"],
    photoAlt: "손이 결혼반지 두 개를 부드럽게 들고 있다",
  },
  cta: {
    eyebrow: "다음 이야기의 주인공이 되세요!",
    title: "우리의 다음 성공 스토리가 될 준비가 되셨나요?",
    description: "더 이상 기다리지 마세요. Zefaaf를 통해 할랄 사랑을 찾은 수천 명의 사용자와 지금 함께하세요.",
    button: "무료 계정 만들기",
  },
  cards: [
    {
      name: "아흐메드",
      ageLabel: "29세",
      quote:
        "편안하고 정중한 경험이었습니다. 이 플랫폼이 진지하고 샤리아에 부합하는 방식으로 적합한 상대를 찾는 데 진심으로 도움을 준다고 느꼈습니다.",
    },
    {
      name: "사라",
      ageLabel: "29세",
      quote:
        "각 단계가 얼마나 명확하고 체계적인지 정말 마음에 들었습니다. 궁합 점수 덕분에 제 가치관과 관심사를 공유하는 프로필에 집중할 수 있었습니다.",
    },
    {
      name: "아흐메드",
      ageLabel: "29세",
      quote: "전통적인 데이팅 앱과는 다릅니다. 처음부터 목적이 분명합니다: 결혼을 염두에 둔 진지한 관계를 쌓는 것입니다.",
    },
  ],
};

const it: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Insieme, per migliorare la vita",
    title: "Testimonianze vere e ispiratrici di coppie unite dal destino attraverso un matrimonio.",
  },
  gallery: [
    { label: "Partner di vita", alt: "Una coppia condivide un momento gioioso e intimo" },
    { label: "Scelte sane", alt: "Una famiglia condivide un pasto caldo insieme" },
    {
      label: "Vivi meglio",
      alt: "Uno sposo tende la mano verso la sua sposa su una scalinata, lei tiene un bouquet di fiori",
    },
    { label: "Percorso sano", alt: "Una coppia in piedi insieme su un balcone ornato al tramonto" },
    { label: "Vita felice", alt: "Un uomo e una donna pregano insieme su un tappeto da preghiera" },
  ],
  journey: {
    heading: "Trovare l'amore halal inizia con un solo passo!",
    paragraphs: [
      "Sulla piattaforma Zafaf, crediamo che il matrimonio sia un bellissimo viaggio che inizia con la scelta di un partner di vita in linea con i principi islamici.",
      "Ci sono molte storie ispiratrici che dimostrano che l'amore halal è possibile, specialmente quando intenzioni sincere si uniscono all'approccio giusto.",
      "Leggi come la piattaforma Zafaf li ha aiutati a trovare il partner di vita giusto, in un modo in linea con i valori islamici che garantisce fiducia e affidabilità",
    ],
    stats: [
      { value: "34,484k", label: "Connessioni riuscite" },
      { value: "2768", label: "Membri registrati" },
      { value: "23416", label: "Membri attivi" },
    ],
    photoMainAlt: "Una sposa e uno sposo si abbracciano gioiosamente all'aperto, lei tiene fiori bianchi",
    photoSecondaryAlt: "Una coppia che cammina mano nella mano lungo una spiaggia",
  },
  clients: {
    number: "87,437",
    label: "Di clienti felici",
    avatarAlt: "Un membro felice di Zefaaf",
  },
  quote: {
    label: "La nostra politica e il nostro approccio",
    title: "Cosa dicono i nostri utenti di Zefaaf?",
    subtitle: "Esperienze reali di persone che hanno trovato il proprio partner di vita grazie a Zefaaf!",
    quote:
      "Vengo dalla Siria e vivo in Europa — la piattaforma ci ha avvicinati e ha reso più facile comunicare, con privacy e rispetto. Grazie a voi.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Una mano che tiene delicatamente due fedi nuziali",
  },
  cta: {
    eyebrow: "Diventa la prossima storia!",
    title: "Sei pronto a diventare la nostra prossima storia di successo?",
    description: "Non aspettare oltre, unisciti ora a migliaia di utenti che hanno trovato l'amore halal grazie a Zefaaf.",
    button: "Crea un account gratuito",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 anni",
      quote:
        "Un'esperienza confortevole e rispettosa. Ho sentito che la piattaforma aiuta davvero a trovare un partner adatto in modo serio e conforme alla sharia.",
    },
    {
      name: "Sara",
      ageLabel: "29 anni",
      quote:
        "Mi è piaciuto quanto fosse chiaro e organizzato ogni passo. Il punteggio di compatibilità mi ha anche aiutata a concentrarmi su profili che condividono i miei valori e interessi.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 anni",
      quote: "È diverso dalle app di incontri tradizionali. Lo scopo è chiaro fin dall'inizio: costruire una relazione seria pensando al matrimonio.",
    },
  ],
};

const ur: SuccessStoriesCopy = {
  hero: {
    eyebrow: "مل کر، زندگی کو بہتر بناتے ہیں",
    title: "شادی کے ذریعے قسمت سے ملنے والے جوڑوں کی حقیقی اور متاثر کن گواہیاں۔",
  },
  gallery: [
    { label: "زندگی کا ساتھی", alt: "ایک جوڑا ایک خوشگوار، قریبی لمحہ ایک ساتھ گزار رہا ہے" },
    { label: "صحت مند انتخاب", alt: "ایک خاندان ایک ساتھ گرمجوش کھانا شریک کر رہا ہے" },
    {
      label: "بہتر زندگی گزاریں",
      alt: "دولہا سیڑھیوں پر اپنی دلہن کا ہاتھ تھامنے کی کوشش کر رہا ہے، وہ پھولوں کا گلدستہ تھامے ہوئے ہے",
    },
    { label: "صحت مند سفر", alt: "غروبِ آفتاب کے وقت ایک آراستہ بالکونی میں ایک ساتھ کھڑا جوڑا" },
    { label: "خوشحال زندگی", alt: "ایک مرد اور عورت جائے نماز پر ایک ساتھ نماز ادا کر رہے ہیں" },
  ],
  journey: {
    heading: "حلال محبت تلاش کرنا ایک ہی قدم سے شروع ہوتا ہے!",
    paragraphs: [
      "زفاف پلیٹ فارم پر، ہمارا ماننا ہے کہ شادی ایک خوبصورت سفر ہے جو اسلامی اصولوں کے مطابق زندگی کا ساتھی چننے سے شروع ہوتا ہے۔",
      "بہت سی متاثر کن کہانیاں یہ ثابت کرتی ہیں کہ حلال محبت ممکن ہے — خاص طور پر جب مخلص نیتوں کو صحیح طریقے کے ساتھ ملایا جائے۔",
      "پڑھیں کہ زفاف پلیٹ فارم نے ان کی صحیح زندگی کا ساتھی تلاش کرنے میں کس طرح مدد کی، ایسے طریقے سے جو اسلامی اقدار سے ہم آہنگ ہو اور اعتماد و بھروسے کو یقینی بنائے",
    ],
    stats: [
      { value: "34,484k", label: "کامیاب رابطے" },
      { value: "2768", label: "رجسٹرڈ ارکان" },
      { value: "23416", label: "فعال ارکان" },
    ],
    photoMainAlt: "دولہا اور دلہن باہر خوشی سے گلے مل رہے ہیں، وہ سفید پھول تھامے ہوئے ہے",
    photoSecondaryAlt: "ایک جوڑا ساحل کے کنارے ہاتھ میں ہاتھ ڈالے چل رہا ہے",
  },
  clients: {
    number: "87,437",
    label: "خوش گاہکوں کی جانب سے",
    avatarAlt: "زفاف کا ایک خوش رکن",
  },
  quote: {
    label: "ہماری پالیسی اور طریقہ کار",
    title: "ہمارے صارفین زفاف کے بارے میں کیا کہتے ہیں؟",
    subtitle: "زفاف کے ذریعے اپنے زندگی کے ساتھی کو پانے والے لوگوں کے حقیقی تجربات!",
    quote:
      "میں شام سے ہوں اور یورپ میں مقیم ہوں — اس پلیٹ فارم نے ہمیں قریب لایا اور رازداری و احترام کے ساتھ رابطے کو آسان بنایا۔ آپ کا شکریہ۔",
    names: ["نورا زریق", "انس حمدان"],
    photoAlt: "ایک ہاتھ نرمی سے دو شادی کی انگوٹھیاں تھامے ہوئے",
  },
  cta: {
    eyebrow: "اگلی کہانی آپ بنیں!",
    title: "کیا آپ ہماری اگلی کامیابی کی کہانی بننے کے لیے تیار ہیں؟",
    description: "مزید انتظار نہ کریں، ابھی ہزاروں صارفین کے ساتھ شامل ہوں جنہوں نے زفاف کے ذریعے حلال محبت پائی۔",
    button: "مفت اکاؤنٹ بنائیں",
  },
  cards: [
    {
      name: "احمد",
      ageLabel: "29 سال",
      quote: "ایک آرام دہ اور باعزت تجربہ۔ مجھے محسوس ہوا کہ یہ پلیٹ فارم واقعی سنجیدہ اور شرعی طریقے سے موزوں ساتھی تلاش کرنے میں مدد کرتا ہے۔",
    },
    {
      name: "سارہ",
      ageLabel: "29 سال",
      quote:
        "مجھے یہ بہت پسند آیا کہ ہر مرحلہ کتنا واضح اور منظم تھا۔ مطابقت اسکور نے بھی مجھے ایسے پروفائلز پر توجہ مرکوز کرنے میں مدد دی جو میری اقدار اور دلچسپیاں شریک کرتے ہیں۔",
    },
    {
      name: "احمد",
      ageLabel: "29 سال",
      quote: "یہ روایتی ڈیٹنگ ایپس سے مختلف ہے۔ مقصد شروع سے واضح ہے: شادی کو مدنظر رکھتے ہوئے ایک سنجیدہ رشتہ قائم کرنا۔",
    },
  ],
};

const ta: SuccessStoriesCopy = {
  hero: {
    eyebrow: "ஒன்றாக, வாழ்க்கையை சிறப்பாக்குகிறோம்",
    title: "திருமணத்தின் மூலம் விதியால் இணைக்கப்பட்ட தம்பதிகளின் உண்மையான மற்றும் ஊக்கமளிக்கும் சாட்சியங்கள்.",
  },
  gallery: [
    { label: "வாழ்க்கைத் துணை", alt: "ஒரு ஜோடி மகிழ்ச்சியான, நெருக்கமான தருணத்தை பகிர்ந்துகொள்கிறது" },
    { label: "ஆரோக்கியமான தேர்வுகள்", alt: "ஒரு குடும்பம் ஒன்றாக சூடான உணவை பகிர்ந்துகொள்கிறது" },
    {
      label: "சிறப்பாக வாழுங்கள்",
      alt: "படிக்கட்டில் மணமகள் கையை பிடிக்கும் மணமகன், அவள் மலர்க் கொத்தை பிடித்திருக்கிறாள்",
    },
    { label: "ஆரோக்கியமான பயணம்", alt: "சூரிய அஸ்தமன நேரத்தில் அலங்கரிக்கப்பட்ட பால்கனியில் ஒன்றாக நிற்கும் ஜோடி" },
    { label: "மகிழ்ச்சியான வாழ்க்கை", alt: "தொழுகை விரிப்பில் ஒன்றாக தொழுகை செய்யும் ஆணும் பெண்ணும்" },
  ],
  journey: {
    heading: "ஹலால் காதலைக் கண்டறிவது ஒரே ஒரு அடியில் தொடங்குகிறது!",
    paragraphs: [
      "ஜாஃபாஃப் தளத்தில், இஸ்லாமிய கொள்கைகளுக்கு ஏற்ப வாழ்க்கைத் துணையைத் தேர்ந்தெடுப்பதில் தொடங்கும் ஒரு அழகான பயணம்தான் திருமணம் என்று நாங்கள் நம்புகிறோம்.",
      "நேர்மையான நோக்கங்கள் சரியான அணுகுமுறையுடன் இணையும் போது, ஹலால் காதல் சாத்தியம் என்பதை நிரூபிக்கும் பல ஊக்கமளிக்கும் கதைகள் உள்ளன.",
      "இஸ்லாமிய விழுமியங்களுக்கு ஏற்ப, நம்பிக்கை மற்றும் நம்பகத்தன்மையை உறுதிசெய்யும் வகையில், ஜாஃபாஃப் தளம் அவர்களுக்கு சரியான வாழ்க்கைத் துணையைக் கண்டறிய எவ்வாறு உதவியது என்பதைப் படியுங்கள்",
    ],
    stats: [
      { value: "34,484k", label: "வெற்றிகரமான தொடர்புகள்" },
      { value: "2768", label: "பதிவுசெய்யப்பட்ட உறுப்பினர்கள்" },
      { value: "23416", label: "செயலில் உள்ள உறுப்பினர்கள்" },
    ],
    photoMainAlt: "வெளியில் மகிழ்ச்சியுடன் கட்டியணைத்துக்கொள்ளும் மணமகளும் மணமகனும், அவள் வெள்ளை மலர்களை பிடித்திருக்கிறாள்",
    photoSecondaryAlt: "கடற்கரையில் கைகோர்த்து நடக்கும் ஒரு ஜோடி",
  },
  clients: {
    number: "87,437",
    label: "மகிழ்ச்சியான வாடிக்கையாளர்களிடமிருந்து",
    avatarAlt: "மகிழ்ச்சியான ஜெஃபாஃப் உறுப்பினர்",
  },
  quote: {
    label: "எங்கள் கொள்கை மற்றும் அணுகுமுறை",
    title: "எங்கள் பயனர்கள் Zefaaf பற்றி என்ன கூறுகிறார்கள்?",
    subtitle: "Zefaaf மூலம் தங்கள் வாழ்க்கைத் துணையைக் கண்டறிந்த மக்களின் உண்மையான அனுபவங்கள்!",
    quote:
      "நான் சிரியாவைச் சேர்ந்தவன், ஐரோப்பாவில் வசிக்கிறேன் — இந்த தளம் எங்களை நெருக்கமாக்கியது, தனியுரிமையுடனும் மரியாதையுடனும் தொடர்பைக் எளிதாக்கியது. நன்றி.",
    names: ["நோரா ஸ்ரேக்", "அனஸ் ஹம்தான்"],
    photoAlt: "ஒரு கை மென்மையாக இரண்டு திருமண மோதிரங்களை பிடித்திருக்கிறது",
  },
  cta: {
    eyebrow: "அடுத்த கதையாக நீங்களே இருங்கள்!",
    title: "எங்களின் அடுத்த வெற்றிக் கதையாக நீங்கள் தயாரா?",
    description: "இனி காத்திருக்க வேண்டாம், ஜாஃபாஃப் மூலம் ஹலால் காதலைக் கண்டறிந்த ஆயிரக்கணக்கான பயனர்களுடன் இப்போதே இணையுங்கள்.",
    button: "இலவச கணக்கை உருவாக்குங்கள்",
  },
  cards: [
    {
      name: "அஹ்மத்",
      ageLabel: "29 வயது",
      quote:
        "வசதியான மற்றும் மரியாதைக்குரிய அனுபவம். இந்த தளம் தீவிரமான மற்றும் ஷரியா-இணக்கமான வழியில் பொருத்தமான துணையைக் கண்டறிய உண்மையிலேயே உதவுகிறது என்று உணர்ந்தேன்.",
    },
    {
      name: "சாரா",
      ageLabel: "29 வயது",
      quote:
        "ஒவ்வொரு படியும் எவ்வளவு தெளிவாகவும் ஒழுங்காகவும் இருந்தது என்பது எனக்கு மிகவும் பிடித்தது. பொருத்தப்பாடு மதிப்பெண் எனது மதிப்புகள் மற்றும் ஆர்வங்களை பகிர்ந்துகொள்ளும் சுயவிவரங்களில் கவனம் செலுத்த உதவியது.",
    },
    {
      name: "அஹ்மத்",
      ageLabel: "29 வயது",
      quote: "இது பாரம்பரிய டேட்டிங் ஆப்களிலிருந்து வேறுபட்டது. நோக்கம் ஆரம்பத்திலிருந்தே தெளிவாக உள்ளது: திருமணத்தை மனதில் கொண்டு ஒரு தீவிரமான உறவை உருவாக்குவது.",
    },
  ],
};

const am: SuccessStoriesCopy = {
  hero: {
    eyebrow: "አብረን፣ ሕይወትን የተሻለ እናደርጋለን",
    title: "በጋብቻ አማካኝነት በዕድል የተገናኙ ጥንዶች እውነተኛና አነቃቂ ምስክርነቶች።",
  },
  gallery: [
    { label: "የሕይወት አጋር", alt: "አንድ ጥንድ አስደሳች እና የቅርብ ጊዜን አብረው ይካፈላሉ" },
    { label: "ጤናማ ምርጫዎች", alt: "አንድ ቤተሰብ ሙቅ ምግብን አብረው ይመገባሉ" },
    {
      label: "የተሻለ ኑሩ",
      alt: "ሙሽራው በደረጃ ላይ የሙሽራይቱን እጅ ለመያዝ ይዘረጋል፣ እርሷ የአበባ ጉንጉን ይዛለች",
    },
    { label: "ጤናማ ጉዞ", alt: "ፀሐይ ስትጠልቅ ባለ ውብ ሰገነት ላይ አብረው የቆሙ ጥንዶች" },
    { label: "ደስተኛ ሕይወት", alt: "አንድ ወንድና ሴት በስግደት ምንጣፍ ላይ አብረው ይሰግዳሉ" },
  ],
  journey: {
    heading: "ሐላል ፍቅርን ማግኘት በአንድ ርምጃ ይጀምራል!",
    paragraphs: [
      "በዘፋአፍ መድረክ፣ ጋብቻ በእስልምና መርሆች መሠረት የሕይወት አጋርን በመምረጥ የሚጀምር ውብ ጉዞ እንደሆነ እናምናለን።",
      "ሐላል ፍቅር እንደሚቻል የሚያረጋግጡ በርካታ አነቃቂ ታሪኮች አሉ — በተለይ ቅን ዓላማ ከትክክለኛው አካሄድ ጋር ሲዋሃድ።",
      "ዘፋአፍ መድረክ ትክክለኛውን የሕይወት አጋር እንዲያገኙ እንዴት እንደረዳቸው፣ ከእስልምና እሴቶች ጋር በሚስማማና እምነትና አስተማማኝነትን በሚያረጋግጥ መንገድ ያንብቡ",
    ],
    stats: [
      { value: "34,484k", label: "የተሳኩ ግንኙነቶች" },
      { value: "2768", label: "የተመዘገቡ አባላት" },
      { value: "23416", label: "ንቁ አባላት" },
    ],
    photoMainAlt: "ሙሽራና ሙሽሪት ከቤት ውጭ በደስታ ይተቃቀፋሉ፣ እርሷ ነጭ አበቦችን ይዛለች",
    photoSecondaryAlt: "አንድ ጥንድ በባህር ዳርቻ ላይ እጅ ለእጅ ተያይዘው ይራመዳሉ",
  },
  clients: {
    number: "87,437",
    label: "ከደስተኛ ደንበኞች",
    avatarAlt: "ደስተኛ የዘፋአፍ አባል",
  },
  quote: {
    label: "የእኛ ፖሊሲና አካሄድ",
    title: "ተጠቃሚዎቻችን ስለ ዘፋአፍ ምን ይላሉ?",
    subtitle: "በዘፋአፍ በኩል የሕይወት አጋራቸውን ያገኙ ሰዎች እውነተኛ ተሞክሮዎች!",
    quote:
      "እኔ ከሶሪያ ነኝ በአውሮፓ እኖራለሁ — መድረኩ አቀራርቦናል፣ ግንኙነትንም በግላዊነትና በአክብሮት አቅልሎታል። እናመሰግናለን።",
    names: ["ኖራ ዝሬቅ", "አነስ ሃምዳን"],
    photoAlt: "አንድ እጅ ሁለት የጋብቻ ቀለበቶችን በርኅራኄ ይዟል",
  },
  cta: {
    eyebrow: "ቀጣዩ ታሪክ እርስዎ ይሁኑ!",
    title: "ቀጣዩ የስኬት ታሪካችን ለመሆን ዝግጁ ነዎት?",
    description: "ከዚህ በኋላ አይጠብቁ፣ በዘፋአፍ በኩል ሐላል ፍቅርን ካገኙ ሺዎች ተጠቃሚዎች ጋር አሁኑኑ ይቀላቀሉ።",
    button: "ነጻ አካውንት ይክፈቱ",
  },
  cards: [
    {
      name: "አህመድ",
      ageLabel: "29 ዓመት",
      quote: "ምቹና አክባሪ ተሞክሮ ነበር። መድረኩ በቁም ነገር እና ከሸሪዓ ጋር በሚስማማ መንገድ ተስማሚ አጋር ለማግኘት በእውነት እንደሚረዳ ተሰማኝ።",
    },
    {
      name: "ሳራ",
      ageLabel: "29 ዓመት",
      quote:
        "እያንዳንዱ ደረጃ ምን ያህል ግልጽና የተደራጀ እንደነበር በጣም ወደድኩት። የተስማሚነት ውጤትም እሴቶቼንና ፍላጎቶቼን በሚጋሩ መገለጫዎች ላይ እንዳተኩር ረድቶኛል።",
    },
    {
      name: "አህመድ",
      ageLabel: "29 ዓመት",
      quote: "ከባሕላዊ የፍቅር ጓደኝነት መተግበሪያዎች የተለየ ነው። ዓላማው ከመጀመሪያውኑ ግልጽ ነው፦ ጋብቻን ታሳቢ ያደረገ ከባድ ግንኙነት መገንባት።",
    },
  ],
};

const sv: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Tillsammans gör vi livet bättre",
    title: "Äkta och inspirerande vittnesmål från par som ödet fört samman genom ett äktenskap.",
  },
  gallery: [
    { label: "Livspartner", alt: "Ett par delar ett glädjefullt, intimt ögonblick" },
    { label: "Hälsosamma val", alt: "En familj delar en varm måltid tillsammans" },
    {
      label: "Lev bättre",
      alt: "En brudgum sträcker sig efter sin bruds hand i en trappa, hon håller en blombukett",
    },
    { label: "Hälsosam resa", alt: "Ett par står tillsammans på en utsmyckad balkong i solnedgången" },
    { label: "Lyckligt liv", alt: "En man och en kvinna ber tillsammans på en bönematta" },
  ],
  journey: {
    heading: "Att hitta halal kärlek börjar med ett enda steg!",
    paragraphs: [
      "På Zafaf-plattformen tror vi att äktenskapet är en vacker resa som börjar med att välja en livspartner i enlighet med islamiska principer.",
      "Det finns många inspirerande berättelser som bevisar att halal kärlek är möjlig — särskilt när uppriktiga avsikter kombineras med rätt tillvägagångssätt.",
      "Läs hur Zafaf-plattformen hjälpte dem att hitta rätt livspartner, på ett sätt som är förenligt med islamiska värderingar och säkerställer förtroende och tillförlitlighet",
    ],
    stats: [
      { value: "34,484k", label: "Lyckade kopplingar" },
      { value: "2768", label: "Registrerade medlemmar" },
      { value: "23416", label: "Aktiva medlemmar" },
    ],
    photoMainAlt: "En brud och brudgum omfamnar varandra glatt utomhus, hon håller vita blommor",
    photoSecondaryAlt: "Ett par som går hand i hand längs en strand",
  },
  clients: {
    number: "87,437",
    label: "Från nöjda kunder",
    avatarAlt: "En glad Zefaaf-medlem",
  },
  quote: {
    label: "Vår policy och vårt tillvägagångssätt",
    title: "Vad säger våra användare om Zefaaf?",
    subtitle: "Verkliga upplevelser från personer som hittat sin livspartner genom Zefaaf!",
    quote:
      "Jag är från Syrien och bosatt i Europa — plattformen förde oss närmare varandra och gjorde kommunikationen enklare, med integritet och respekt. Tack så mycket.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "En hand håller varsamt två vigselringar",
  },
  cta: {
    eyebrow: "Bli nästa berättelse!",
    title: "Är du redo att bli vår nästa framgångshistoria?",
    description: "Vänta inte längre, gå med tusentals användare som hittat halal kärlek genom Zefaaf redan nu.",
    button: "Skapa ett gratis konto",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 år",
      quote:
        "En bekväm och respektfull upplevelse. Jag kände att plattformen verkligen hjälper dig att hitta en lämplig partner på ett seriöst och sharia-förenligt sätt.",
    },
    {
      name: "Sara",
      ageLabel: "29 år",
      quote:
        "Jag älskade hur tydligt och organiserat varje steg var. Kompatibilitetspoängen hjälpte mig också att fokusera på profiler som delar mina värderingar och intressen.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 år",
      quote: "Det skiljer sig från traditionella dejtingappar. Syftet är tydligt från början: att bygga en seriös relation med äktenskap i åtanke.",
    },
  ],
};

const da: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Sammen gør vi livet bedre",
    title: "Ægte og inspirerende vidnesbyrd fra par, som skæbnen har bragt sammen gennem et bryllup.",
  },
  gallery: [
    { label: "Livspartner", alt: "Et par deler et glædesfyldt, intimt øjeblik" },
    { label: "Sunde valg", alt: "En familie deler et varmt måltid sammen" },
    {
      label: "Lev bedre",
      alt: "En brudgom rækker ud efter brudens hånd på en trappe, hun holder en buket blomster",
    },
    { label: "Sund rejse", alt: "Et par står sammen på en udsmykket altan ved solnedgang" },
    { label: "Lykkeligt liv", alt: "En mand og kvinde beder sammen på et bedetæppe" },
  ],
  journey: {
    heading: "At finde halal kærlighed begynder med ét skridt!",
    paragraphs: [
      "På Zafaf-platformen tror vi, at ægteskab er en smuk rejse, der starter med at vælge en livspartner i overensstemmelse med islamiske principper.",
      "Der er mange inspirerende historier, der beviser, at halal kærlighed er mulig — især når oprigtige hensigter kombineres med den rette tilgang.",
      "Læs hvordan Zafaf-platformen hjalp dem med at finde den rette livspartner, på en måde der stemmer overens med islamiske værdier og sikrer tillid og pålidelighed",
    ],
    stats: [
      { value: "34,484k", label: "Succesfulde forbindelser" },
      { value: "2768", label: "Registrerede medlemmer" },
      { value: "23416", label: "Aktive medlemmer" },
    ],
    photoMainAlt: "En brud og brudgom krammer hinanden glædeligt udendørs, hun holder hvide blomster",
    photoSecondaryAlt: "Et par går hånd i hånd langs en strand",
  },
  clients: {
    number: "87,437",
    label: "Fra glade kunder",
    avatarAlt: "Et glad Zefaaf-medlem",
  },
  quote: {
    label: "Vores politik og tilgang",
    title: "Hvad siger vores brugere om Zefaaf?",
    subtitle: "Ægte oplevelser fra mennesker, der har fundet deres livspartner gennem Zefaaf!",
    quote:
      "Jeg er fra Syrien og bosat i Europa — platformen bragte os tættere sammen og gjorde kommunikationen lettere, med privatliv og respekt. Tak til jer.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "En hånd holder forsigtigt to vielsesringe",
  },
  cta: {
    eyebrow: "Bliv den næste historie!",
    title: "Er du klar til at blive vores næste succeshistorie?",
    description: "Vent ikke længere, slut dig til tusindvis af brugere, der har fundet halal kærlighed gennem Zefaaf nu.",
    button: "Opret gratis konto",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 år",
      quote:
        "En behagelig og respektfuld oplevelse. Jeg følte, at platformen virkelig hjælper dig med at finde en passende partner på en seriøs og sharia-forenelig måde.",
    },
    {
      name: "Sara",
      ageLabel: "29 år",
      quote:
        "Jeg elskede, hvor klart og organiseret hvert trin var. Kompatibilitetsscoren hjalp mig også med at fokusere på profiler, der deler mine værdier og interesser.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 år",
      quote: "Det er anderledes end traditionelle datingapps. Formålet er klart fra begyndelsen: at opbygge et seriøst forhold med ægteskab for øje.",
    },
  ],
};

const sq: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Së bashku, e bëjmë jetën më të mirë",
    title: "Dëshmi të vërteta dhe frymëzuese nga çiftet që fati i bashkoi përmes një martese.",
  },
  gallery: [
    { label: "Partneri i jetës", alt: "Një çift ndan një moment të gëzueshëm dhe intim" },
    { label: "Zgjedhje të shëndetshme", alt: "Një familje ndan një vakt të ngrohtë së bashku" },
    {
      label: "Jeto më mirë",
      alt: "Një dhëndër shtrin dorën drejt nuses së tij në një shkallë, ajo mban një buqetë lulesh",
    },
    { label: "Udhëtim i shëndetshëm", alt: "Një çift qëndron së bashku në një ballkon të stolisur në perëndim të diellit" },
    { label: "Jetë e lumtur", alt: "Një burrë dhe një grua falen së bashku në një sixhade" },
  ],
  journey: {
    heading: "Gjetja e dashurisë hallall fillon me një hap të vetëm!",
    paragraphs: [
      "Në platformën Zafaf, ne besojmë se martesa është një udhëtim i bukur që fillon me zgjedhjen e një partneri jete në përputhje me parimet islame.",
      "Ka shumë histori frymëzuese që vërtetojnë se dashuria hallall është e mundur — sidomos kur qëllimet e sinqerta kombinohen me qasjen e duhur.",
      "Lexoni se si platforma Zafaf i ndihmoi ata të gjenin partnerin e duhur të jetës, në një mënyrë që përputhet me vlerat islame dhe siguron besim e besueshmëri",
    ],
    stats: [
      { value: "34,484k", label: "Lidhje të suksesshme" },
      { value: "2768", label: "Anëtarë të regjistruar" },
      { value: "23416", label: "Anëtarë aktivë" },
    ],
    photoMainAlt: "Një nuse dhe një dhëndër përqafohen me gëzim jashtë, ajo mban lule të bardha",
    photoSecondaryAlt: "Një çift ecën dorë për dore përgjatë një plazhi",
  },
  clients: {
    number: "87,437",
    label: "Nga klientë të lumtur",
    avatarAlt: "Një anëtar i lumtur i Zefaaf",
  },
  quote: {
    label: "Politika dhe qasja jonë",
    title: "Çfarë thonë përdoruesit tanë për Zefaaf?",
    subtitle: "Përvoja reale nga njerëz që gjetën partnerin e tyre të jetës përmes Zefaaf!",
    quote:
      "Jam nga Siria dhe jetoj në Evropë — platforma na afroi dhe e bëri komunikimin më të lehtë, me privatësi dhe respekt. Ju faleminderit.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Një dorë mban butësisht dy unaza martese",
  },
  cta: {
    eyebrow: "Bëhu historia tjetër!",
    title: "Jeni gati të bëheni historia jonë e ardhshme e suksesit?",
    description: "Mos prisni më gjatë, bashkohuni tani me mijëra përdorues që gjetën dashurinë hallall përmes Zefaaf.",
    button: "Krijoni një llogari falas",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 vjeç",
      quote:
        "Një përvojë komode dhe e respektueshme. Ndjeva se platforma vërtet ndihmon të gjesh një partner të përshtatshëm në mënyrë serioze dhe në përputhje me sheriatin.",
    },
    {
      name: "Sara",
      ageLabel: "29 vjeçe",
      quote:
        "Më pëlqeu sa e qartë dhe e organizuar ishte çdo hap. Rezultati i përputhshmërisë më ndihmoi gjithashtu të fokusohesha te profilet që ndajnë vlerat dhe interesat e mia.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 vjeç",
      quote: "Është ndryshe nga aplikacionet tradicionale të takimeve. Qëllimi është i qartë që në fillim: ndërtimi i një marrëdhënieje serioze me martesën në mendje.",
    },
  ],
};

const uz: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Birgalikda, hayotni yaxshilaymiz",
    title: "Nikoh orqali taqdir tomonidan birlashtirilgan juftliklarning haqiqiy va ilhomlantiruvchi guvohliklari.",
  },
  gallery: [
    { label: "Hayot yo'ldoshi", alt: "Bir juftlik quvonchli, samimiy lahzani birga o'tkazmoqda" },
    { label: "Sog'lom tanlovlar", alt: "Bir oila birga issiq taom yemoqda" },
    {
      label: "Yaxshiroq yashang",
      alt: "Kuyov zinapoyada kelinining qo'lini ushlamoqchi, u gullar dastasini ushlab turibdi",
    },
    { label: "Sog'lom sayohat", alt: "Quyosh botayotganda bezatilgan balkonda birga turgan juftlik" },
    { label: "Baxtli hayot", alt: "Erkak va ayol joynamozda birga namoz o'qimoqda" },
  ],
  journey: {
    heading: "Halol sevgini topish bitta qadamdan boshlanadi!",
    paragraphs: [
      "Zafaf platformasida biz nikoh Islom tamoyillariga muvofiq hayot yo'ldoshini tanlashdan boshlanadigan go'zal sayohat deb ishonamiz.",
      "Halol sevgi mumkin ekanligini isbotlaydigan ko'plab ilhomlantiruvchi hikoyalar bor — ayniqsa samimiy niyatlar to'g'ri yondashuv bilan birlashganda.",
      "Zafaf platformasi ularga Islom qadriyatlariga mos keladigan, ishonch va ishonchlilikni ta'minlaydigan tarzda to'g'ri hayot yo'ldoshini topishga qanday yordam berganini o'qing",
    ],
    stats: [
      { value: "34,484k", label: "Muvaffaqiyatli aloqalar" },
      { value: "2768", label: "Ro'yxatdan o'tgan a'zolar" },
      { value: "23416", label: "Faol a'zolar" },
    ],
    photoMainAlt: "Kelin va kuyov ochiq havoda quvonch bilan quchoqlashmoqda, u oq gullarni ushlab turibdi",
    photoSecondaryAlt: "Bir juftlik qo'l ushlashib plyaj bo'ylab yurmoqda",
  },
  clients: {
    number: "87,437",
    label: "Baxtli mijozlardan",
    avatarAlt: "Zefaafning baxtli a'zosi",
  },
  quote: {
    label: "Bizning siyosatimiz va yondashuvimiz",
    title: "Foydalanuvchilarimiz Zefaaf haqida nima deyishadi?",
    subtitle: "Zefaaf orqali hayot yo'ldoshini topgan odamlarning haqiqiy tajribalari!",
    quote:
      "Men Suriyadanman va Yevropada yashayman — platforma bizni yaqinlashtirdi va maxfiylik hamda hurmat bilan muloqotni osonlashtirdi. Sizlarga rahmat.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Bir qo'l ikkita nikoh uzugini muloyimlik bilan ushlab turibdi",
  },
  cta: {
    eyebrow: "Keyingi hikoya siz bo'ling!",
    title: "Bizning keyingi muvaffaqiyat hikoyamiz bo'lishga tayyormisiz?",
    description: "Endi kutmang, Zefaaf orqali halol sevgini topgan minglab foydalanuvchilarga hoziroq qo'shiling.",
    button: "Bepul hisob yarating",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 yosh",
      quote:
        "Qulay va hurmatli tajriba. Platforma haqiqatan ham jiddiy va shariatga mos tarzda mos hamrohni topishga yordam berishini his qildim.",
    },
    {
      name: "Sara",
      ageLabel: "29 yosh",
      quote:
        "Har bir qadam qanchalik aniq va tartibli ekanligi menga juda yoqdi. Moslik bali ham qadriyatlarim va qiziqishlarimni baham ko'radigan profillarga e'tibor qaratishimga yordam berdi.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 yosh",
      quote: "Bu an'anaviy tanishuv ilovalaridan farq qiladi. Maqsad boshidanoq aniq: nikohni ko'zlab jiddiy munosabat qurish.",
    },
  ],
};

const az: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Birlikdə, həyatı daha yaxşı edirik",
    title: "Nikah vasitəsilə taleyin bir araya gətirdiyi cütlüklərin həqiqi və ilhamverici şəhadətləri.",
  },
  gallery: [
    { label: "Həyat yoldaşı", alt: "Bir cütlük sevincli, səmimi anı birlikdə yaşayır" },
    { label: "Sağlam seçimlər", alt: "Bir ailə isti yeməyi birlikdə paylaşır" },
    {
      label: "Daha yaxşı yaşayın",
      alt: "Bir bəy pilləkəndə gəlininin əlini tutmağa çalışır, o, gül dəstəsi tutub",
    },
    { label: "Sağlam səyahət", alt: "Gün batımı zamanı bəzədilmiş balkonda birlikdə dayanan cütlük" },
    { label: "Xoşbəxt həyat", alt: "Bir kişi və qadın namaz xalçasında birlikdə namaz qılır" },
  ],
  journey: {
    heading: "Halal sevgini tapmaq bir addımla başlayır!",
    paragraphs: [
      "Zafaf platformasında biz nikahın İslami prinsiplərə uyğun həyat yoldaşı seçməklə başlayan gözəl bir səyahət olduğuna inanırıq.",
      "Halal sevginin mümkün olduğunu sübut edən bir çox ilhamverici hekayə var — xüsusən səmimi niyyətlər doğru yanaşma ilə birləşdikdə.",
      "Zafaf platformasının onlara İslami dəyərlərə uyğun, etibar və güvənilirliyi təmin edən şəkildə düzgün həyat yoldaşını tapmağa necə kömək etdiyini oxuyun",
    ],
    stats: [
      { value: "34,484k", label: "Uğurlu əlaqələr" },
      { value: "2768", label: "Qeydiyyatdan keçmiş üzvlər" },
      { value: "23416", label: "Aktiv üzvlər" },
    ],
    photoMainAlt: "Gəlin və bəy açıq havada sevinclə qucaqlaşır, o, ağ güllər tutub",
    photoSecondaryAlt: "Bir cütlük əl-ələ çimərlik boyunca gəzir",
  },
  clients: {
    number: "87,437",
    label: "Xoşbəxt müştərilərdən",
    avatarAlt: "Xoşbəxt bir Zefaaf üzvü",
  },
  quote: {
    label: "Bizim siyasətimiz və yanaşmamız",
    title: "İstifadəçilərimiz Zefaaf haqqında nə deyir?",
    subtitle: "Zefaaf vasitəsilə həyat yoldaşını tapan insanların həqiqi təcrübələri!",
    quote:
      "Mən Suriyadanam və Avropada yaşayıram — platforma bizi bir-birimizə yaxınlaşdırdı və məxfilik və hörmətlə ünsiyyəti asanlaşdırdı. Sizə təşəkkür edirik.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Bir əl mülayimliklə iki nikah üzüyünü tutub",
  },
  cta: {
    eyebrow: "Növbəti hekayə siz olun!",
    title: "Bizim növbəti uğur hekayəmiz olmağa hazırsınız?",
    description: "Artıq gözləməyin, Zefaaf vasitəsilə halal sevgi tapan minlərlə istifadəçiyə indi qoşulun.",
    button: "Pulsuz hesab yaradın",
  },
  cards: [
    {
      name: "Əhməd",
      ageLabel: "29 yaş",
      quote:
        "Rahat və hörmətli bir təcrübə idi. Platformanın ciddi və şəriətə uyğun şəkildə uyğun tərəfdaş tapmağa həqiqətən kömək etdiyini hiss etdim.",
    },
    {
      name: "Sara",
      ageLabel: "29 yaş",
      quote:
        "Hər addımın nə qədər aydın və mütəşəkkil olduğunu çox bəyəndim. Uyğunluq balı da dəyərlərimi və maraqlarımı bölüşən profillərə diqqət yetirməyimə kömək etdi.",
    },
    {
      name: "Əhməd",
      ageLabel: "29 yaş",
      quote: "Bu, ənənəvi tanışlıq tətbiqlərindən fərqlidir. Məqsəd əvvəldən aydındır: nikahı nəzərdə tutaraq ciddi münasibət qurmaq.",
    },
  ],
};

const fil: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Magkasama, ginagawang mas maganda ang buhay",
    title: "Tunay at nakakainspirang mga patotoo mula sa mga mag-asawang pinagtagpo ng tadhana sa pamamagitan ng kasal.",
  },
  gallery: [
    { label: "Kabiyak sa Buhay", alt: "Isang mag-asawa na nagbabahagi ng masayang, malapit na sandali" },
    { label: "Malusog na Pagpipilian", alt: "Isang pamilyang magkakasamang kumakain ng masarap na pagkain" },
    {
      label: "Mabuhay nang Mas Mabuti",
      alt: "Isang lalaking ikakasal na inaabot ang kamay ng kanyang babaeng ikakasal sa hagdanan, hawak niya ang bulaklak",
    },
    { label: "Malusog na Paglalakbay", alt: "Isang mag-asawang magkasamang nakatayo sa isang magandang balkonahe sa paglubog ng araw" },
    { label: "Masayang Buhay", alt: "Isang lalaki at babae na magkasamang nagdarasal sa isang banig na pandasal" },
  ],
  journey: {
    heading: "Ang paghahanap ng halal na pag-ibig ay nagsisimula sa isang hakbang!",
    paragraphs: [
      "Sa Zafaf platform, naniniwala kami na ang kasal ay isang magandang paglalakbay na nagsisimula sa pagpili ng kabiyak sa buhay alinsunod sa mga prinsipyong Islamiko.",
      "Maraming nakakainspirang kwento na nagpapatunay na posible ang halal na pag-ibig — lalo na kapag ang taos-pusong hangarin ay pinagsama sa tamang paraan.",
      "Basahin kung paano tinulungan ng Zafaf platform ang mga ito na mahanap ang tamang kabiyak sa buhay, sa paraang naaayon sa mga halagahang Islamiko at nagsisiguro ng tiwala at pagiging maaasahan",
    ],
    stats: [
      { value: "34,484k", label: "Matagumpay na koneksyon" },
      { value: "2768", label: "Rehistradong miyembro" },
      { value: "23416", label: "Aktibong miyembro" },
    ],
    photoMainAlt: "Isang babae at lalaking ikakasal na masayang yumayakap sa labas, hawak niya ang mga puting bulaklak",
    photoSecondaryAlt: "Isang mag-asawang naglalakad nang magkahawak-kamay sa tabing-dagat",
  },
  clients: {
    number: "87,437",
    label: "Mula sa mga nasisiyahang kliyente",
    avatarAlt: "Isang masayang miyembro ng Zefaaf",
  },
  quote: {
    label: "Aming Patakaran at Pamamaraan",
    title: "Ano ang sinasabi ng aming mga gumagamit tungkol sa Zefaaf?",
    subtitle: "Tunay na karanasan ng mga taong nakahanap ng kanilang kabiyak sa buhay sa pamamagitan ng Zefaaf!",
    quote:
      "Taga-Syria ako at nakatira sa Europa — pinalapit kami ng plataporma at pinadali ang komunikasyon, nang may pagkapribado at paggalang. Salamat sa inyo.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Isang kamay na banayad na hawak ang dalawang singsing ng kasal",
  },
  cta: {
    eyebrow: "Ikaw na ang susunod na kwento!",
    title: "Handa ka na bang maging aming susunod na kwento ng tagumpay?",
    description: "Huwag nang maghintay pa, sumali na ngayon sa libu-libong gumagamit na nakahanap ng halal na pag-ibig sa pamamagitan ng Zefaaf.",
    button: "Gumawa ng libreng account",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 taong gulang",
      quote:
        "Isang komportable at magalang na karanasan. Naramdaman kong tunay na tumutulong ang plataporma na makahanap ng angkop na katuwang sa isang seryoso at sumusunod-sa-Sharia na paraan.",
    },
    {
      name: "Sara",
      ageLabel: "29 taong gulang",
      quote:
        "Gustung-gusto ko kung gaano kalinaw at organisado ang bawat hakbang. Ang compatibility score ay tumulong din sa akin na tumuon sa mga profile na may parehong pagpapahalaga at interes.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 taong gulang",
      quote: "Iba ito sa tradisyunal na dating apps. Malinaw ang layunin mula sa simula: bumuo ng seryosong relasyon nang may kasal bilang hangarin.",
    },
  ],
};

const hi: SuccessStoriesCopy = {
  hero: {
    eyebrow: "साथ मिलकर, जीवन को बेहतर बनाते हैं",
    title: "विवाह के माध्यम से भाग्य द्वारा एक साथ लाए गए जोड़ों की वास्तविक और प्रेरणादायक गवाहियां।",
  },
  gallery: [
    { label: "जीवनसाथी", alt: "एक जोड़ा साथ में एक खुशी भरा, अंतरंग पल साझा कर रहा है" },
    { label: "स्वस्थ विकल्प", alt: "एक परिवार साथ में गर्मजोशी भरा भोजन साझा कर रहा है" },
    {
      label: "बेहतर जिएं",
      alt: "एक दूल्हा सीढ़ियों पर अपनी दुल्हन का हाथ थामने के लिए हाथ बढ़ा रहा है, वह फूलों का गुलदस्ता पकड़े हुए है",
    },
    { label: "स्वस्थ यात्रा", alt: "सूर्यास्त के समय एक सजावटी बालकनी पर साथ खड़ा एक जोड़ा" },
    { label: "खुशहाल जीवन", alt: "एक पुरुष और महिला जानमाज़ पर साथ नमाज़ अदा कर रहे हैं" },
  ],
  journey: {
    heading: "हलाल प्रेम की तलाश एक ही कदम से शुरू होती है!",
    paragraphs: [
      "ज़फ़ाफ़ प्लेटफ़ॉर्म पर, हम मानते हैं कि विवाह एक सुंदर यात्रा है जो इस्लामी सिद्धांतों के अनुसार जीवनसाथी चुनने से शुरू होती है।",
      "कई प्रेरणादायक कहानियां साबित करती हैं कि हलाल प्रेम संभव है — खासकर जब सच्ची नीयत को सही दृष्टिकोण के साथ जोड़ा जाए।",
      "पढ़ें कि कैसे ज़फ़ाफ़ प्लेटफ़ॉर्म ने उन्हें सही जीवनसाथी खोजने में मदद की, इस तरह से जो इस्लामी मूल्यों के अनुरूप हो और विश्वास व विश्वसनीयता सुनिश्चित करे",
    ],
    stats: [
      { value: "34,484k", label: "सफल संपर्क" },
      { value: "2768", label: "पंजीकृत सदस्य" },
      { value: "23416", label: "सक्रिय सदस्य" },
    ],
    photoMainAlt: "एक दुल्हन और दूल्हा बाहर खुशी से एक-दूसरे को गले लगा रहे हैं, वह सफेद फूल पकड़े हुए है",
    photoSecondaryAlt: "एक जोड़ा समुद्र तट पर हाथ में हाथ डाले चल रहा है",
  },
  clients: {
    number: "87,437",
    label: "खुश ग्राहकों की ओर से",
    avatarAlt: "एक खुश ज़ेफ़ाफ़ सदस्य",
  },
  quote: {
    label: "हमारी नीति और दृष्टिकोण",
    title: "हमारे उपयोगकर्ता Zefaaf के बारे में क्या कहते हैं?",
    subtitle: "Zefaaf के माध्यम से अपना जीवनसाथी पाने वाले लोगों के वास्तविक अनुभव!",
    quote:
      "मैं सीरिया से हूं और यूरोप में रहता हूं — इस प्लेटफ़ॉर्म ने हमें करीब लाया और गोपनीयता व सम्मान के साथ संवाद को आसान बनाया। आपका धन्यवाद।",
    names: ["नोरा ज़रेइक", "अनस हमदान"],
    photoAlt: "एक हाथ धीरे से दो शादी की अंगूठियां पकड़े हुए है",
  },
  cta: {
    eyebrow: "अगली कहानी आप बनें!",
    title: "क्या आप हमारी अगली सफलता की कहानी बनने के लिए तैयार हैं?",
    description: "अब और इंतज़ार न करें, ज़फ़ाफ़ के माध्यम से हलाल प्रेम पाने वाले हज़ारों उपयोगकर्ताओं के साथ अभी जुड़ें।",
    button: "मुफ़्त खाता बनाएं",
  },
  cards: [
    {
      name: "अहमद",
      ageLabel: "29 वर्ष",
      quote:
        "एक आरामदायक और सम्मानजनक अनुभव। मुझे महसूस हुआ कि यह प्लेटफ़ॉर्म वास्तव में गंभीर और शरिया-अनुरूप तरीके से उपयुक्त साथी खोजने में मदद करता है।",
    },
    {
      name: "सारा",
      ageLabel: "29 वर्ष",
      quote:
        "मुझे यह बहुत पसंद आया कि हर कदम कितना स्पष्ट और व्यवस्थित था। अनुकूलता स्कोर ने भी मुझे उन प्रोफाइलों पर ध्यान केंद्रित करने में मदद की जो मेरे मूल्यों और रुचियों को साझा करते हैं।",
    },
    {
      name: "अहमद",
      ageLabel: "29 वर्ष",
      quote: "यह पारंपरिक डेटिंग ऐप्स से अलग है। शुरुआत से ही उद्देश्य स्पष्ट है: विवाह को ध्यान में रखते हुए एक गंभीर रिश्ता बनाना।",
    },
  ],
};

const kk: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Бірге, өмірді жақсартамыз",
    title: "Неке арқылы тағдыр қосқан жұптардың шынайы әрі шабыттандыратын куәліктері.",
  },
  gallery: [
    { label: "Өмірлік серігі", alt: "Бір жұп бірге қуанышты, жақын сәтті бөліседі" },
    { label: "Салауатты таңдау", alt: "Бір отбасы бірге жылы тамақ ішеді" },
    {
      label: "Жақсырақ өмір сүріңіз",
      alt: "Күйеу жігіт баспалдақта қалыңдығының қолын ұстамақ болады, ол гүл шоғын ұстап тұр",
    },
    { label: "Салауатты сапар", alt: "Күн батар кезде әшекейленген балконда бірге тұрған жұп" },
    { label: "Бақытты өмір", alt: "Бір ер адам мен әйел жайнамазда бірге намаз оқиды" },
  ],
  journey: {
    heading: "Халал сүйіспеншілікті табу бір қадамнан басталады!",
    paragraphs: [
      "Zafaf платформасында біз некені ислам қағидаттарына сай өмірлік серігін таңдаудан басталатын әдемі сапар деп санаймыз.",
      "Халал сүйіспеншіліктің мүмкін екенін дәлелдейтін көптеген шабыттандыратын оқиғалар бар — әсіресе адал ниет дұрыс тәсілмен ұштасқанда.",
      "Zafaf платформасы оларға ислам құндылықтарына сай, сенім мен сенімділікті қамтамасыз ететін тәсілмен дұрыс өмірлік серігін табуға қалай көмектескенін оқыңыз",
    ],
    stats: [
      { value: "34,484k", label: "Сәтті байланыстар" },
      { value: "2768", label: "Тіркелген мүшелер" },
      { value: "23416", label: "Белсенді мүшелер" },
    ],
    photoMainAlt: "Қалыңдық пен күйеу жігіт далада қуанышпен құшақтасады, ол ақ гүлдерді ұстап тұр",
    photoSecondaryAlt: "Бір жұп жағажайда қол ұстасып жүреді",
  },
  clients: {
    number: "87,437",
    label: "Бақытты клиенттерден",
    avatarAlt: "Zefaaf-тың бақытты мүшесі",
  },
  quote: {
    label: "Біздің саясатымыз бен көзқарасымыз",
    title: "Пайдаланушыларымыз Zefaaf туралы не дейді?",
    subtitle: "Zefaaf арқылы өмірлік серіктесін тапқан адамдардың шынайы тәжірибелері!",
    quote:
      "Мен Сириядан шыққанмын, Еуропада тұрамын — платформа бізді жақындастырды және құпиялылық пен құрметпен қарым-қатынасты жеңілдетті. Сіздерге рахмет.",
    names: ["Нора Зрейк", "Анас Хамдан"],
    photoAlt: "Бір қол екі неке сақинасын жайлылықпен ұстап тұр",
  },
  cta: {
    eyebrow: "Келесі оқиға сіз болыңыз!",
    title: "Біздің келесі табыс оқиғамыз болуға дайынсыз ба?",
    description: "Енді күтпеңіз, Zefaaf арқылы халал сүйіспеншілік тапқан мыңдаған пайдаланушыларға қазір қосылыңыз.",
    button: "Тегін аккаунт жасаңыз",
  },
  cards: [
    {
      name: "Ахмед",
      ageLabel: "29 жас",
      quote:
        "Ыңғайлы әрі құрметке толы тәжірибе болды. Платформа шынымен де байыпты әрі шариғатқа сай тәсілмен лайықты серік табуға көмектесетінін сездім.",
    },
    {
      name: "Сара",
      ageLabel: "29 жас",
      quote:
        "Әр қадамның қаншалықты анық әрі ұйымдасқан болғаны маған қатты ұнады. Үйлесімділік балы да маған құндылықтарым мен қызығушылықтарымды бөлісетін профильдерге назар аударуға көмектесті.",
    },
    {
      name: "Ахмед",
      ageLabel: "29 жас",
      quote: "Бұл дәстүрлі танысу қосымшаларынан ерекшеленеді. Мақсат бастапқыдан-ақ анық: некені мақсат тұтып, байыпты қарым-қатынас құру.",
    },
  ],
};

const ms: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Bersama, menjadikan hidup lebih baik",
    title: "Kesaksian sebenar dan memberi inspirasi daripada pasangan yang dipertemukan takdir melalui perkahwinan.",
  },
  gallery: [
    { label: "Pasangan Hidup", alt: "Sepasang kekasih berkongsi saat gembira dan intim bersama" },
    { label: "Pilihan Sihat", alt: "Sebuah keluarga berkongsi hidangan hangat bersama" },
    {
      label: "Hidup Lebih Baik",
      alt: "Seorang pengantin lelaki menghulurkan tangan ke arah pengantin perempuannya di tangga, dia memegang seikat bunga",
    },
    { label: "Perjalanan Sihat", alt: "Sepasang kekasih berdiri bersama di sebuah balkoni yang indah ketika senja" },
    { label: "Kehidupan Bahagia", alt: "Seorang lelaki dan wanita bersolat bersama di atas sejadah" },
  ],
  journey: {
    heading: "Mencari cinta halal bermula dengan satu langkah!",
    paragraphs: [
      "Di platform Zafaf, kami percaya bahawa perkahwinan adalah perjalanan indah yang bermula dengan memilih pasangan hidup mengikut prinsip Islam.",
      "Terdapat banyak kisah memberi inspirasi yang membuktikan bahawa cinta halal adalah mungkin — terutamanya apabila niat ikhlas digabungkan dengan pendekatan yang betul.",
      "Baca bagaimana platform Zafaf membantu mereka menemui pasangan hidup yang tepat, dengan cara yang selari dengan nilai-nilai Islam serta menjamin kepercayaan dan kebolehpercayaan",
    ],
    stats: [
      { value: "34,484k", label: "Perhubungan berjaya" },
      { value: "2768", label: "Ahli berdaftar" },
      { value: "23416", label: "Ahli aktif" },
    ],
    photoMainAlt: "Pengantin perempuan dan lelaki berpelukan gembira di luar, dia memegang bunga putih",
    photoSecondaryAlt: "Sepasang kekasih berjalan berpegangan tangan di tepi pantai",
  },
  clients: {
    number: "87,437",
    label: "Daripada pelanggan yang gembira",
    avatarAlt: "Seorang ahli Zefaaf yang gembira",
  },
  quote: {
    label: "Dasar dan Pendekatan Kami",
    title: "Apa kata pengguna kami tentang Zefaaf?",
    subtitle: "Pengalaman sebenar daripada orang yang menemui pasangan hidup mereka melalui Zefaaf!",
    quote:
      "Saya dari Syria dan menetap di Eropah — platform ini merapatkan kami dan memudahkan komunikasi, dengan privasi dan rasa hormat. Terima kasih kepada anda semua.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Sebuah tangan lembut memegang dua cincin perkahwinan",
  },
  cta: {
    eyebrow: "Jadilah kisah seterusnya!",
    title: "Bersediakah anda untuk menjadi kisah kejayaan kami yang seterusnya?",
    description: "Jangan tunggu lagi, sertai sekarang beribu-ribu pengguna yang telah menemui cinta halal melalui Zefaaf.",
    button: "Cipta akaun percuma",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "29 tahun",
      quote:
        "Pengalaman yang selesa dan penuh hormat. Saya rasa platform ini benar-benar membantu mencari pasangan yang sesuai dengan cara yang serius dan mematuhi syariah.",
    },
    {
      name: "Sara",
      ageLabel: "29 tahun",
      quote:
        "Saya suka betapa jelas dan tersusunnya setiap langkah. Skor keserasian juga membantu saya fokus kepada profil yang berkongsi nilai dan minat saya.",
    },
    {
      name: "Ahmed",
      ageLabel: "29 tahun",
      quote: "Ia berbeza daripada aplikasi temu janji tradisional. Tujuannya jelas sejak awal: membina hubungan serius dengan matlamat perkahwinan.",
    },
  ],
};

const pa: SuccessStoriesCopy = {
  hero: {
    eyebrow: "ਮਿਲ ਕੇ, ਜ਼ਿੰਦਗੀ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਂਦੇ ਹਾਂ",
    title: "ਵਿਆਹ ਰਾਹੀਂ ਕਿਸਮਤ ਦੁਆਰਾ ਇਕੱਠੇ ਕੀਤੇ ਗਏ ਜੋੜਿਆਂ ਦੀਆਂ ਅਸਲੀ ਅਤੇ ਪ੍ਰੇਰਣਾਦਾਇਕ ਗਵਾਹੀਆਂ।",
  },
  gallery: [
    { label: "ਜੀਵਨ ਸਾਥੀ", alt: "ਇੱਕ ਜੋੜਾ ਇਕੱਠੇ ਖੁਸ਼ੀ ਭਰਿਆ, ਨਿੱਜੀ ਪਲ ਸਾਂਝਾ ਕਰ ਰਿਹਾ ਹੈ" },
    { label: "ਸਿਹਤਮੰਦ ਚੋਣਾਂ", alt: "ਇੱਕ ਪਰਿਵਾਰ ਇਕੱਠੇ ਨਿੱਘਾ ਭੋਜਨ ਸਾਂਝਾ ਕਰ ਰਿਹਾ ਹੈ" },
    {
      label: "ਬਿਹਤਰ ਜੀਓ",
      alt: "ਇੱਕ ਲਾੜਾ ਪੌੜੀਆਂ ਉੱਤੇ ਆਪਣੀ ਲਾੜੀ ਦਾ ਹੱਥ ਫੜਨ ਲਈ ਹੱਥ ਵਧਾ ਰਿਹਾ ਹੈ, ਉਹ ਫੁੱਲਾਂ ਦਾ ਗੁਲਦਸਤਾ ਫੜੀ ਹੋਈ ਹੈ",
    },
    { label: "ਸਿਹਤਮੰਦ ਸਫ਼ਰ", alt: "ਸੂਰਜ ਡੁੱਬਣ ਵੇਲੇ ਇੱਕ ਸਜਾਵਟੀ ਬਾਲਕੋਨੀ ਵਿੱਚ ਇਕੱਠੇ ਖੜ੍ਹਾ ਜੋੜਾ" },
    { label: "ਖੁਸ਼ਹਾਲ ਜ਼ਿੰਦਗੀ", alt: "ਇੱਕ ਆਦਮੀ ਅਤੇ ਔਰਤ ਨਮਾਜ਼ ਦੀ ਚਟਾਈ ਉੱਤੇ ਇਕੱਠੇ ਨਮਾਜ਼ ਪੜ੍ਹ ਰਹੇ ਹਨ" },
  ],
  journey: {
    heading: "ਹਲਾਲ ਪਿਆਰ ਲੱਭਣਾ ਇੱਕ ਕਦਮ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ!",
    paragraphs: [
      "ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ 'ਤੇ, ਅਸੀਂ ਮੰਨਦੇ ਹਾਂ ਕਿ ਵਿਆਹ ਇੱਕ ਖੂਬਸੂਰਤ ਸਫ਼ਰ ਹੈ ਜੋ ਇਸਲਾਮੀ ਸਿਧਾਂਤਾਂ ਅਨੁਸਾਰ ਜੀਵਨ ਸਾਥੀ ਚੁਣਨ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।",
      "ਬਹੁਤ ਸਾਰੀਆਂ ਪ੍ਰੇਰਣਾਦਾਇਕ ਕਹਾਣੀਆਂ ਸਾਬਤ ਕਰਦੀਆਂ ਹਨ ਕਿ ਹਲਾਲ ਪਿਆਰ ਸੰਭਵ ਹੈ — ਖਾਸ ਕਰਕੇ ਜਦੋਂ ਸੱਚੀ ਨੀਅਤ ਨੂੰ ਸਹੀ ਪਹੁੰਚ ਨਾਲ ਜੋੜਿਆ ਜਾਵੇ।",
      "ਪੜ੍ਹੋ ਕਿ ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ਨੇ ਉਨ੍ਹਾਂ ਨੂੰ ਸਹੀ ਜੀਵਨ ਸਾਥੀ ਲੱਭਣ ਵਿੱਚ ਕਿਵੇਂ ਮਦਦ ਕੀਤੀ, ਇਸ ਤਰੀਕੇ ਨਾਲ ਜੋ ਇਸਲਾਮੀ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੋਵੇ ਅਤੇ ਭਰੋਸੇ ਤੇ ਭਰੋਸੇਯੋਗਤਾ ਨੂੰ ਯਕੀਨੀ ਬਣਾਵੇ",
    ],
    stats: [
      { value: "34,484k", label: "ਸਫਲ ਸੰਪਰਕ" },
      { value: "2768", label: "ਰਜਿਸਟਰਡ ਮੈਂਬਰ" },
      { value: "23416", label: "ਸਰਗਰਮ ਮੈਂਬਰ" },
    ],
    photoMainAlt: "ਇੱਕ ਲਾੜੀ ਅਤੇ ਲਾੜਾ ਬਾਹਰ ਖੁਸ਼ੀ ਨਾਲ ਇੱਕ-ਦੂਜੇ ਨੂੰ ਜੱਫੀ ਪਾ ਰਹੇ ਹਨ, ਉਹ ਚਿੱਟੇ ਫੁੱਲ ਫੜੀ ਹੋਈ ਹੈ",
    photoSecondaryAlt: "ਇੱਕ ਜੋੜਾ ਸਮੁੰਦਰੀ ਕੰਢੇ 'ਤੇ ਹੱਥ ਵਿੱਚ ਹੱਥ ਪਾ ਕੇ ਤੁਰ ਰਿਹਾ ਹੈ",
  },
  clients: {
    number: "87,437",
    label: "ਖੁਸ਼ ਗਾਹਕਾਂ ਵੱਲੋਂ",
    avatarAlt: "ਇੱਕ ਖੁਸ਼ ਜ਼ੇਫ਼ਾਫ਼ ਮੈਂਬਰ",
  },
  quote: {
    label: "ਸਾਡੀ ਨੀਤੀ ਅਤੇ ਪਹੁੰਚ",
    title: "ਸਾਡੇ ਵਰਤੋਂਕਾਰ Zefaaf ਬਾਰੇ ਕੀ ਕਹਿੰਦੇ ਹਨ?",
    subtitle: "Zefaaf ਰਾਹੀਂ ਆਪਣਾ ਜੀਵਨ ਸਾਥੀ ਲੱਭਣ ਵਾਲੇ ਲੋਕਾਂ ਦੇ ਅਸਲੀ ਤਜਰਬੇ!",
    quote:
      "ਮੈਂ ਸੀਰੀਆ ਤੋਂ ਹਾਂ ਅਤੇ ਯੂਰਪ ਵਿੱਚ ਰਹਿੰਦਾ ਹਾਂ — ਇਸ ਪਲੇਟਫਾਰਮ ਨੇ ਸਾਨੂੰ ਨੇੜੇ ਲਿਆਂਦਾ ਅਤੇ ਗੋਪਨੀਯਤਾ ਤੇ ਸਤਿਕਾਰ ਨਾਲ ਗੱਲਬਾਤ ਨੂੰ ਸੌਖਾ ਬਣਾਇਆ। ਤੁਹਾਡਾ ਧੰਨਵਾਦ।",
    names: ["ਨੋਰਾ ਜ਼ਰੇਕ", "ਅਨਸ ਹਮਦਾਨ"],
    photoAlt: "ਇੱਕ ਹੱਥ ਹੌਲੀ-ਹੌਲੀ ਦੋ ਵਿਆਹ ਦੀਆਂ ਮੁੰਦਰੀਆਂ ਫੜੀ ਹੋਈ ਹੈ",
  },
  cta: {
    eyebrow: "ਅਗਲੀ ਕਹਾਣੀ ਤੁਸੀਂ ਬਣੋ!",
    title: "ਕੀ ਤੁਸੀਂ ਸਾਡੀ ਅਗਲੀ ਸਫਲਤਾ ਦੀ ਕਹਾਣੀ ਬਣਨ ਲਈ ਤਿਆਰ ਹੋ?",
    description: "ਹੋਰ ਇੰਤਜ਼ਾਰ ਨਾ ਕਰੋ, ਹੁਣੇ ਹਜ਼ਾਰਾਂ ਉਪਭੋਗਤਾਵਾਂ ਨਾਲ ਜੁੜੋ ਜਿਨ੍ਹਾਂ ਨੇ ਜ਼ੇਫ਼ਾਫ਼ ਰਾਹੀਂ ਹਲਾਲ ਪਿਆਰ ਲੱਭਿਆ ਹੈ।",
    button: "ਮੁਫ਼ਤ ਖਾਤਾ ਬਣਾਓ",
  },
  cards: [
    {
      name: "ਅਹਿਮਦ",
      ageLabel: "29 ਸਾਲ",
      quote:
        "ਇੱਕ ਆਰਾਮਦਾਇਕ ਅਤੇ ਸਤਿਕਾਰਯੋਗ ਅਨੁਭਵ। ਮੈਨੂੰ ਮਹਿਸੂਸ ਹੋਇਆ ਕਿ ਇਹ ਪਲੇਟਫਾਰਮ ਸੱਚਮੁੱਚ ਗੰਭੀਰ ਅਤੇ ਸ਼ਰੀਆ-ਅਨੁਕੂਲ ਤਰੀਕੇ ਨਾਲ ਢੁਕਵਾਂ ਸਾਥੀ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
    },
    {
      name: "ਸਾਰਾ",
      ageLabel: "29 ਸਾਲ",
      quote:
        "ਮੈਨੂੰ ਇਹ ਬਹੁਤ ਪਸੰਦ ਆਇਆ ਕਿ ਹਰ ਕਦਮ ਕਿੰਨਾ ਸਪਸ਼ਟ ਅਤੇ ਸੰਗਠਿਤ ਸੀ। ਅਨੁਕੂਲਤਾ ਸਕੋਰ ਨੇ ਵੀ ਮੈਨੂੰ ਉਹਨਾਂ ਪ੍ਰੋਫਾਈਲਾਂ 'ਤੇ ਧਿਆਨ ਦੇਣ ਵਿੱਚ ਮਦਦ ਕੀਤੀ ਜੋ ਮੇਰੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਅਤੇ ਰੁਚੀਆਂ ਸਾਂਝੀਆਂ ਕਰਦੇ ਹਨ।",
    },
    {
      name: "ਅਹਿਮਦ",
      ageLabel: "29 ਸਾਲ",
      quote: "ਇਹ ਰਵਾਇਤੀ ਡੇਟਿੰਗ ਐਪਸ ਤੋਂ ਵੱਖਰਾ ਹੈ। ਮਕਸਦ ਸ਼ੁਰੂ ਤੋਂ ਹੀ ਸਪਸ਼ਟ ਹੈ: ਵਿਆਹ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖਦੇ ਹੋਏ ਇੱਕ ਗੰਭੀਰ ਰਿਸ਼ਤਾ ਬਣਾਉਣਾ।",
    },
  ],
};

const ps: SuccessStoriesCopy = {
  hero: {
    eyebrow: "یو ځای، ژوند ښه کوو",
    title: "د واده له لارې د تقدیر لخوا سره یوځای شویو جوړو ریښتینې او الهام بښونکې شاهدۍ.",
  },
  gallery: [
    { label: "د ژوند ملګری", alt: "یوه جوړه سره یو خوښۍ او نږدې شیبه شریکوي" },
    { label: "روغتیايي انتخابونه", alt: "یو کورنۍ سره یو تود خواړه شریکوي" },
    {
      label: "ښه ژوند وکړئ",
      alt: "یو ځوان زوم په یوه پوړۍ کې خپلې نجلۍ لاس نیولو ته لاس اوږدوي، هغه د ګلانو ګېڼه نیولې ده",
    },
    { label: "روغتیايي سفر", alt: "د لمر پرېوتو په وخت کې یوه سینګارول شوې بالکونۍ کې سره ولاړه جوړه" },
    { label: "خوشحاله ژوند", alt: "یو سړی او ښځه په جانمازۍ کې سره لمونځ کوي" },
  ],
  journey: {
    heading: "د حلال مینې موندل یوازې د یو ګام سره پیل کیږي!",
    paragraphs: [
      "د زفاف پلیټ فارم کې، موږ باور لرو چې واده یو ښکلی سفر دی چې د اسلامي اصولو سره سم د ژوند ملګري غوره کولو سره پیل کیږي.",
      "ډیری الهام بښونکې کیسې شتون لري چې ثابتوي چې حلال مینه ممکنه ده — په ځانګړي توګه کله چې صادقانه نیت له سمې لارې سره یوځای شي.",
      "ولولئ چې زفاف پلیټ فارم څنګه دوی سره مرسته وکړه چې سم ژوند ملګری ومومي، په داسې توګه چې د اسلامي ارزښتونو سره سمون ولري او باور او د باور وړتیا تضمین کړي",
    ],
    stats: [
      { value: "34,484k", label: "بریالي اړیکې" },
      { value: "2768", label: "ثبت شوي غړي" },
      { value: "23416", label: "فعال غړي" },
    ],
    photoMainAlt: "یوه نجلۍ او زوم په بهر کې په خوښۍ سره یو بل تر غیږ کوي، هغه سپین ګلان نیولي دي",
    photoSecondaryAlt: "یوه جوړه د ساحل غاړې ته لاس په لاس ګرځي",
  },
  clients: {
    number: "87,437",
    label: "د خوشحاله پیرودونکو له خوا",
    avatarAlt: "د زفاف یو خوشحاله غړی",
  },
  quote: {
    label: "زموږ پالیسي او لار",
    title: "زموږ کاروونکي د زفاف په اړه څه وایي؟",
    subtitle: "د هغو خلکو ریښتینې تجربې چې د زفاف له لارې یې خپل ژوند ملګری موندلی!",
    quote:
      "زه له سوریې څخه یم او په اروپا کې میشته یم — دې پلیټ فارم موږ سره نږدې کړو او د محرمیت او درناوي سره یې اړیکه اسانه کړه. مننه.",
    names: ["نورا زریق", "انس حمدان"],
    photoAlt: "یو لاس په نرمۍ سره دوه واده حلقې نیولي دي",
  },
  cta: {
    eyebrow: "راتلونکې کیسه تاسو شئ!",
    title: "ایا تاسو زموږ راتلونکې بریا کیسه کیدو ته چمتو یاست؟",
    description: "نور مه ځنډوئ، همدا اوس د زرګونو کاروونکو سره یوځای شئ چې د زفاف له لارې یې حلال مینه موندلې ده.",
    button: "وړیا حساب جوړ کړئ",
  },
  cards: [
    {
      name: "احمد",
      ageLabel: "29 کاله",
      quote:
        "یوه آرامه او درناوي وړ تجربه. زه احساس وکړم چې دا پلیټ فارم په رښتیا سره جدي او له شریعت سره سم ډول مناسب ملګری موندلو کې مرسته کوي.",
    },
    {
      name: "ساره",
      ageLabel: "29 کاله",
      quote:
        "ما ډیر خوښ کړ چې هر ګام څومره روښانه او منظم و. د مطابقت نمرې هم زما سره مرسته وکړه چې په هغو پروفایلونو تمرکز وکړم چې زما ارزښتونه او علاقې شریکوي.",
    },
    {
      name: "احمد",
      ageLabel: "29 کاله",
      quote: "دا د دودیزو ملاقاتي اپلیکیشنونو سره توپیر لري. موخه له پیل څخه روښانه ده: د واده په نظر کې نیولو سره یو جدي اړیکه رامینځته کول.",
    },
  ],
};

const sw: SuccessStoriesCopy = {
  hero: {
    eyebrow: "Pamoja, tunafanya maisha kuwa bora",
    title: "Ushuhuda wa kweli na wenye kutia moyo kutoka kwa wanandoa waliokutanishwa na hatima kupitia ndoa.",
  },
  gallery: [
    { label: "Mwenzi wa Maisha", alt: "Wanandoa wakishiriki wakati wa furaha na wa karibu pamoja" },
    { label: "Chaguzi za Afya", alt: "Familia ikishiriki mlo wa joto pamoja" },
    {
      label: "Ishi Vizuri Zaidi",
      alt: "Bwana harusi akinyoosha mkono kumshika mkono wa bibi harusi wake kwenye ngazi, yeye ameshikilia shada la maua",
    },
    { label: "Safari ya Afya", alt: "Wanandoa wamesimama pamoja kwenye baraza lililopambwa wakati wa machweo" },
    { label: "Maisha ya Furaha", alt: "Mwanamume na mwanamke wakisali pamoja kwenye mkeka wa sala" },
  ],
  journey: {
    heading: "Kutafuta upendo halali huanza na hatua moja!",
    paragraphs: [
      "Katika jukwaa la Zafaf, tunaamini kuwa ndoa ni safari nzuri inayoanza kwa kuchagua mwenzi wa maisha kulingana na kanuni za Kiislamu.",
      "Kuna hadithi nyingi za kutia moyo zinazothibitisha kuwa upendo halali unawezekana — hasa nia njema zinapoungana na mbinu sahihi.",
      "Soma jinsi jukwaa la Zafaf lilivyowasaidia kupata mwenzi sahihi wa maisha, kwa namna inayolingana na maadili ya Kiislamu na kuhakikisha uaminifu na kutegemewa",
    ],
    stats: [
      { value: "34,484k", label: "Miunganisho iliyofanikiwa" },
      { value: "2768", label: "Wanachama waliosajiliwa" },
      { value: "23416", label: "Wanachama hai" },
    ],
    photoMainAlt: "Bibi harusi na bwana harusi wakikumbatiana kwa furaha nje, yeye ameshikilia maua meupe",
    photoSecondaryAlt: "Wanandoa wakitembea wakishikana mikono kwenye ufuo wa bahari",
  },
  clients: {
    number: "87,437",
    label: "Kutoka kwa wateja wenye furaha",
    avatarAlt: "Mwanachama mwenye furaha wa Zefaaf",
  },
  quote: {
    label: "Sera na Mtazamo Wetu",
    title: "Watumiaji wetu wanasema nini kuhusu Zefaaf?",
    subtitle: "Uzoefu halisi kutoka kwa watu waliopata wenzi wao wa maisha kupitia Zefaaf!",
    quote:
      "Ninatoka Syria na ninaishi Ulaya — jukwaa hili lilituleta karibu na kurahisisha mawasiliano, kwa faragha na heshima. Asanteni.",
    names: ["Nora Zreiq", "Anas Hamdan"],
    photoAlt: "Mkono ukishikilia kwa upole pete mbili za ndoa",
  },
  cta: {
    eyebrow: "Kuwa hadithi inayofuata!",
    title: "Uko tayari kuwa hadithi yetu ijayo ya mafanikio?",
    description: "Usisubiri tena, jiunge sasa na maelfu ya watumiaji waliopata upendo halali kupitia Zefaaf.",
    button: "Fungua akaunti ya bure",
  },
  cards: [
    {
      name: "Ahmed",
      ageLabel: "miaka 29",
      quote:
        "Uzoefu wa starehe na wa heshima. Nilihisi jukwaa hili linasaidia kweli kupata mwenzi anayefaa kwa njia ya dhati na inayolingana na sheria za Kiislamu.",
    },
    {
      name: "Sara",
      ageLabel: "miaka 29",
      quote:
        "Nilipenda jinsi kila hatua ilivyokuwa wazi na yenye mpangilio. Alama ya ulinganifu pia ilinisaidia kuzingatia wasifu unaoshiriki maadili na maslahi yangu.",
    },
    {
      name: "Ahmed",
      ageLabel: "miaka 29",
      quote: "Ni tofauti na programu za kawaida za uchumba. Lengo ni wazi tangu mwanzo: kujenga uhusiano wa dhati ukiwa na nia ya ndoa.",
    },
  ],
};

const th: SuccessStoriesCopy = {
  hero: {
    eyebrow: "ร่วมกัน สร้างชีวิตที่ดีขึ้น",
    title: "คำให้การที่แท้จริงและสร้างแรงบันดาลใจจากคู่รักที่โชคชะตานำมาพบกันผ่านการแต่งงาน",
  },
  gallery: [
    { label: "คู่ชีวิต", alt: "คู่รักแบ่งปันช่วงเวลาแห่งความสุขและใกล้ชิดด้วยกัน" },
    { label: "ทางเลือกเพื่อสุขภาพ", alt: "ครอบครัวรับประทานอาหารอุ่น ๆ ร่วมกัน" },
    {
      label: "ใช้ชีวิตให้ดีขึ้น",
      alt: "เจ้าบ่าวเอื้อมมือไปจับมือเจ้าสาวบนบันได เธอถือช่อดอกไม้",
    },
    { label: "การเดินทางเพื่อสุขภาพ", alt: "คู่รักยืนด้วยกันบนระเบียงที่ตกแต่งอย่างสวยงามในยามพระอาทิตย์ตก" },
    { label: "ชีวิตที่มีความสุข", alt: "ชายและหญิงละหมาดร่วมกันบนพรมละหมาด" },
  ],
  journey: {
    heading: "การค้นหารักฮาลาลเริ่มต้นด้วยก้าวแรกเพียงก้าวเดียว!",
    paragraphs: [
      "ที่แพลตฟอร์ม Zafaf เราเชื่อว่าการแต่งงานคือการเดินทางที่งดงามซึ่งเริ่มต้นจากการเลือกคู่ชีวิตตามหลักการอิสลาม",
      "มีเรื่องราวที่สร้างแรงบันดาลใจมากมายที่พิสูจน์ว่ารักฮาลาลเป็นไปได้ — โดยเฉพาะเมื่อความตั้งใจอันบริสุทธิ์ผสานกับแนวทางที่ถูกต้อง",
      "อ่านว่าแพลตฟอร์ม Zafaf ช่วยให้พวกเขาพบคู่ชีวิตที่เหมาะสมได้อย่างไร ในแบบที่สอดคล้องกับคุณค่าของอิสลามและรับประกันความไว้วางใจและความน่าเชื่อถือ",
    ],
    stats: [
      { value: "34,484k", label: "การจับคู่ที่สำเร็จ" },
      { value: "2768", label: "สมาชิกที่ลงทะเบียน" },
      { value: "23416", label: "สมาชิกที่ใช้งานอยู่" },
    ],
    photoMainAlt: "เจ้าสาวและเจ้าบ่าวกอดกันด้วยความสุขกลางแจ้ง เธอถือดอกไม้สีขาว",
    photoSecondaryAlt: "คู่รักเดินจับมือกันไปตามชายหาด",
  },
  clients: {
    number: "87,437",
    label: "จากลูกค้าที่มีความสุข",
    avatarAlt: "สมาชิก Zefaaf ที่มีความสุข",
  },
  quote: {
    label: "นโยบายและแนวทางของเรา",
    title: "ผู้ใช้ของเราพูดถึง Zefaaf ว่าอย่างไร?",
    subtitle: "ประสบการณ์จริงจากผู้คนที่พบคู่ชีวิตของพวกเขาผ่าน Zefaaf!",
    quote:
      "ฉันมาจากซีเรียและอาศัยอยู่ในยุโรป — แพลตฟอร์มนี้ทำให้เราใกล้ชิดกันมากขึ้นและทำให้การสื่อสารง่ายขึ้น ด้วยความเป็นส่วนตัวและความเคารพ ขอบคุณค่ะ",
    names: ["โนรา ซเรก", "อานัส ฮัมดาน"],
    photoAlt: "มือข้างหนึ่งถือแหวนแต่งงานสองวงอย่างอ่อนโยน",
  },
  cta: {
    eyebrow: "เป็นเรื่องราวต่อไป!",
    title: "คุณพร้อมที่จะเป็นเรื่องราวความสำเร็จเรื่องต่อไปของเราหรือยัง?",
    description: "อย่ารอช้าอีกต่อไป มาร่วมกับผู้ใช้หลายพันคนที่พบรักฮาลาลผ่าน Zefaaf ได้แล้ววันนี้",
    button: "สร้างบัญชีฟรี",
  },
  cards: [
    {
      name: "อาเหม็ด",
      ageLabel: "29 ปี",
      quote: "ประสบการณ์ที่สะดวกสบายและน่าเคารพ ฉันรู้สึกว่าแพลตฟอร์มนี้ช่วยให้คุณหาคู่ที่เหมาะสมได้อย่างจริงจังและสอดคล้องกับหลักชะรีอะฮ์",
    },
    {
      name: "ซาร่า",
      ageLabel: "29 ปี",
      quote: "ฉันชอบที่แต่ละขั้นตอนชัดเจนและเป็นระบบมาก คะแนนความเข้ากันได้ยังช่วยให้ฉันมุ่งเน้นไปที่โปรไฟล์ที่มีค่านิยมและความสนใจร่วมกัน",
    },
    {
      name: "อาเหม็ด",
      ageLabel: "29 ปี",
      quote: "มันแตกต่างจากแอปหาคู่แบบดั้งเดิม จุดประสงค์ชัดเจนตั้งแต่แรก: สร้างความสัมพันธ์ที่จริงจังโดยมีเป้าหมายเพื่อการแต่งงาน",
    },
  ],
};

const copyByLocale: Record<string, SuccessStoriesCopy> = {
  ar, en, nl, fr, de, tr, ru, id, zh, bn, bs, es, fa, pt, ja, ko, it, ur, ta, am, sv, da, sq, uz, az, fil, hi, kk, ms, pa, ps, sw, th,
};

export function getSuccessStoriesCopy(locale: string): SuccessStoriesCopy {
  return copyByLocale[locale] ?? en;
}
