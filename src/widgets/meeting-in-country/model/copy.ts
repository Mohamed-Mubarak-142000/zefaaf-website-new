// This page's copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical — adding a `meetingInCountry`
// namespace to only some of them would make next-intl throw MISSING_MESSAGE
// for the rest. Same approach as the Events, VIP, and About widgets. All 33
// locales are translated directly in this file below.

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

const nl: MeetingCopy = {
  hero: {
    cta: "Abonneer op de service",
    title: "Directe Sharia-conforme Ontmoetingen",
    paragraphs: [
      "Directe sharia-conforme ontmoetingen — een unieke huwelijksdienst die islamitische waarden combineert met eenvoudige, betekenisvolle communicatie, om mensen die op zoek zijn naar een huwelijk te helpen de juiste levenspartner te vinden.",
      "Ontmoet elkaar rechtstreeks op ons kantoor in Amsterdam, of online als u zich buiten Europa bevindt. Elke ontmoeting vindt plaats onder volledig toezicht, met aanwezigheid van familieleden en duidelijke sharia-richtlijnen die de zedigheid en waardigheid bewaren, waar u zich ook bevindt.",
    ],
    imageAlt: {
      street: "Een rustige Amsterdamse straat met een fiets en een lantaarn bij schemering",
      canal: "Historische grachtenpanden langs een Amsterdamse waterweg",
      tulips: "Bloeiende tulpen langs een Amsterdamse gracht",
    },
  },
  why: {
    title: "Waarom Kiezen voor Directe Sharia-conforme Ontmoetingen?",
    description:
      "Bij Zefaaf begrijpen we de uitdagingen van het vinden van een levenspartner die uw waarden en principes echt deelt. Daarom hebben we een veilige en betrouwbare ervaring voor u gecreëerd, waar u zich ook ter wereld bevindt.",
    leftBullets: [
      {
        title: "Eenvoudige & Directe Communicatie",
        description: "Geen ingewikkelde stappen — ons ondersteunende team begeleidt u bij elke stap.",
      },
      {
        title: "Echte Ontmoetingen op Ons Kantoor in Nederland",
        description: "Leer elkaar duidelijk en open kennen, van aangezicht tot aangezicht.",
      },
      {
        title: "Online Ontmoetingen buiten Nederland",
        description: "Dezelfde ernst en sharia-richtlijnen, zonder geografische grenzen.",
      },
    ],
    rightBullets: [
      {
        title: "Volledig Toezicht & Aanwezigheid van Familie",
        description: "Meer veiligheid, comfort en gemoedsrust voor u en uw familie.",
      },
      {
        title: "Oprecht Begrip van Uw Behoeften",
        description: "We luisteren aandachtig om u te helpen een betekenisvolle match te vinden.",
      },
      {
        title: "Volledige Privacy & Vertrouwelijkheid",
        description: "Uw gegevens worden veilig bewaard en alleen gedeeld met serieuze huwelijksbedoelingen.",
      },
    ],
    cta: "Abonneer op de service",
    badge: "maak uw weg naar het huwelijk eenvoudiger en sneller.",
    photoAlt: "Een pasgetrouwd stel tegenover elkaar in een zonnebloemenveld",
  },
  unique: {
    title: "Wat Onze Sharia-conforme Ontmoetingen Uniek Maakt",
    cards: [
      {
        title: "Echte Locaties in Europa",
        description: "Ontmoet mannen en vrouwen samen met hun families, van aangezicht tot aangezicht, in een besloten en respectvolle omgeving.",
      },
      {
        title: "Online met Dezelfde Toewijding",
        description: "Ideaal als u zich buiten Europa bevindt, met dezelfde normen als bij persoonlijke ontmoetingen.",
      },
      {
        title: "Eenvoudig Proces",
        description: "Deel uw partnervoorkeuren met ons, en wij zorgen voor de rest namens u.",
      },
    ],
  },
  benefits: {
    title: "Voordelen van de Service",
    items: [
      {
        title: "Bespaar Tijd & Moeite",
        description: "Snelle, directe afstemming op basis van duidelijke criteria, waar u zich ook bevindt.",
      },
      {
        title: "Veilige & Betrouwbare Omgeving",
        description: "Volledig toezicht met respect voor islamitische waarden, zowel persoonlijk als online.",
      },
      {
        title: "Voortdurende Ondersteuning",
        description: "Wij staan u in elke fase bij om uw vragen te beantwoorden en begeleiding te bieden.",
      },
      {
        title: "Volledige Privacy",
        description: "Uw gegevens worden veilig bewaard en uitsluitend gebruikt voor het doel van de service.",
      },
      {
        title: "Echt Kantoor + Online Optie",
        description:
          "Ons fysieke kantoor in Amsterdam geeft u meer vertrouwen, terwijl online ontmoetingen de service overal toegankelijk maken.",
      },
    ],
    imageAlt: "Een gracht in Amsterdam omzoomd met historische huizen bij schemering",
  },
  how: {
    title: "Hoe Werkt de Service?",
    description:
      "Het enige wat u hoeft te doen, is contact met ons opnemen en uw profiel en partnervoorkeuren delen; wij nemen de zoektocht voor onze rekening. Vervolgens plannen we een ontmoeting op een tijdstip dat voor u beiden uitkomt — persoonlijk op ons kantoor in Amsterdam of online.",
    imageAlt: "Een traditionele Nederlandse windmolen naast een gracht",
  },
};

const fr: MeetingCopy = {
  hero: {
    cta: "S'abonner au service",
    title: "Rencontres Conformes à la Charia",
    paragraphs: [
      "Des rencontres directes conformes à la charia — un service matrimonial unique qui allie valeurs islamiques et communication simple et sincère, pour aider les personnes en quête de mariage à trouver le partenaire de vie idéal.",
      "Rencontrez-vous directement dans nos bureaux à Amsterdam, ou en ligne si vous résidez en dehors de l'Europe. Chaque rencontre se déroule sous supervision complète, en présence des familles et selon des règles claires de la charia qui préservent la pudeur et la dignité, où que vous soyez.",
    ],
    imageAlt: {
      street: "Une rue calme d'Amsterdam avec un vélo et un lampadaire au crépuscule",
      canal: "Des maisons historiques bordant un canal d'Amsterdam",
      tulips: "Des tulipes en fleurs le long d'un canal d'Amsterdam",
    },
  },
  why: {
    title: "Pourquoi Choisir des Rencontres Directes Conformes à la Charia ?",
    description:
      "Chez Zefaaf, nous comprenons les difficultés à trouver un partenaire de vie qui partage réellement vos valeurs et vos principes. C'est pourquoi nous avons créé une expérience sûre et fiable pour vous, où que vous soyez dans le monde.",
    leftBullets: [
      {
        title: "Communication Simple et Immédiate",
        description: "Sans complications — notre équipe bienveillante vous accompagne à chaque étape.",
      },
      {
        title: "Rencontres Réelles dans Nos Bureaux aux Pays-Bas",
        description: "Apprenez à vous connaître clairement et ouvertement, en face à face.",
      },
      {
        title: "Rencontres en Ligne en Dehors des Pays-Bas",
        description: "Le même sérieux et les mêmes règles de la charia, sans limites géographiques.",
      },
    ],
    rightBullets: [
      {
        title: "Supervision Complète et Présence de la Famille",
        description: "Plus de sécurité, de confort et de sérénité pour vous et votre famille.",
      },
      {
        title: "Une Compréhension Sincère de Vos Besoins",
        description: "Nous vous écoutons attentivement pour vous aider à trouver une véritable compatibilité.",
      },
      {
        title: "Confidentialité et Vie Privée Totales",
        description: "Vos informations sont conservées en toute sécurité et ne sont partagées qu'avec des personnes aux intentions matrimoniales sérieuses.",
      },
    ],
    cta: "S'abonner au service",
    badge: "rendez votre chemin vers le mariage plus simple et plus rapide.",
    photoAlt: "Un couple de jeunes mariés se faisant face dans un champ de tournesols",
  },
  unique: {
    title: "Ce Qui Rend Nos Rencontres Conformes à la Charia Uniques",
    cards: [
      {
        title: "Des Lieux Réels en Europe",
        description: "Rencontrez des hommes et des femmes accompagnés de leurs familles, en face à face, dans un cadre privé et respectueux.",
      },
      {
        title: "En Ligne avec le Même Engagement",
        description: "Idéal si vous êtes en dehors de l'Europe, avec les mêmes exigences que pour les rencontres en personne.",
      },
      {
        title: "Un Processus Simple",
        description: "Partagez-nous vos préférences pour un partenaire, et nous nous occupons du reste pour vous.",
      },
    ],
  },
  benefits: {
    title: "Les Avantages du Service",
    items: [
      {
        title: "Gagnez du Temps et des Efforts",
        description: "Une coordination rapide et directe basée sur des critères clairs, où que vous soyez.",
      },
      {
        title: "Un Environnement Sûr et Fiable",
        description: "Une supervision complète qui respecte les valeurs islamiques, en personne comme en ligne.",
      },
      {
        title: "Un Accompagnement Continu",
        description: "Nous sommes à vos côtés à chaque étape pour répondre à vos questions et vous guider.",
      },
      {
        title: "Une Confidentialité Totale",
        description: "Vos informations sont conservées en toute sécurité et utilisées uniquement dans le cadre du service.",
      },
      {
        title: "Un Bureau Réel + Une Option en Ligne",
        description:
          "Notre bureau physique à Amsterdam vous offre davantage de confiance, tandis que les rencontres en ligne rendent le service accessible où que vous soyez.",
      },
    ],
    imageAlt: "Un canal d'Amsterdam bordé de maisons historiques au crépuscule",
  },
  how: {
    title: "Comment Fonctionne le Service ?",
    description:
      "Il vous suffit de nous contacter et de partager votre profil ainsi que vos préférences de partenaire ; nous nous chargeons de la recherche. Nous organiserons ensuite une rencontre à un moment qui convient à vous deux — en personne dans nos bureaux à Amsterdam ou en ligne.",
    imageAlt: "Un moulin à vent hollandais traditionnel au bord d'un canal",
  },
};

const de: MeetingCopy = {
  hero: {
    cta: "Service abonnieren",
    title: "Direkte Scharia-konforme Treffen",
    paragraphs: [
      "Direkte Scharia-konforme Treffen — ein einzigartiger Heiratsservice, der islamische Werte mit einfacher, bedeutungsvoller Kommunikation verbindet, um Menschen auf der Suche nach der Ehe zu helfen, den richtigen Lebenspartner zu finden.",
      "Treffen Sie sich direkt in unserem Büro in Amsterdam oder online, wenn Sie sich außerhalb Europas befinden. Jedes Treffen findet unter voller Aufsicht statt, in Anwesenheit von Familienmitgliedern und nach klaren Scharia-Richtlinien, die Bescheidenheit und Würde wahren – wo auch immer Sie sich befinden.",
    ],
    imageAlt: {
      street: "Eine ruhige Amsterdamer Straße mit einem Fahrrad und einer Laterne in der Abenddämmerung",
      canal: "Historische Grachtenhäuser entlang eines Amsterdamer Wasserwegs",
      tulips: "Blühende Tulpen entlang einer Amsterdamer Gracht",
    },
  },
  why: {
    title: "Warum Direkte Scharia-konforme Treffen Wählen?",
    description:
      "Bei Zefaaf verstehen wir die Herausforderungen bei der Suche nach einem Lebenspartner, der wirklich Ihre Werte und Prinzipien teilt. Deshalb haben wir eine sichere und vertrauenswürdige Erfahrung für Sie geschaffen, wo auch immer Sie sich auf der Welt befinden.",
    leftBullets: [
      {
        title: "Einfache & Direkte Kommunikation",
        description: "Ohne Komplikationen — unser einfühlsames Team begleitet Sie bei jedem Schritt.",
      },
      {
        title: "Echte Treffen in Unserem Büro in den Niederlanden",
        description: "Lernen Sie sich klar und offen kennen, von Angesicht zu Angesicht.",
      },
      {
        title: "Online-Treffen außerhalb der Niederlande",
        description: "Der gleiche Ernst und die gleichen Scharia-Richtlinien, ohne geografische Grenzen.",
      },
    ],
    rightBullets: [
      {
        title: "Vollständige Aufsicht & Anwesenheit der Familie",
        description: "Mehr Sicherheit, Komfort und Seelenfrieden für Sie und Ihre Familie.",
      },
      {
        title: "Echtes Verständnis für Ihre Bedürfnisse",
        description: "Wir hören aufmerksam zu, um Ihnen zu helfen, eine bedeutungsvolle Übereinstimmung zu finden.",
      },
      {
        title: "Vollständige Privatsphäre & Vertraulichkeit",
        description: "Ihre Daten werden sicher aufbewahrt und nur mit ernsthaften Heiratsabsichten geteilt.",
      },
    ],
    cta: "Service abonnieren",
    badge: "machen Sie Ihren Weg zur Ehe einfacher und schneller.",
    photoAlt: "Ein frisch verheiratetes Paar steht sich in einem Sonnenblumenfeld gegenüber",
  },
  unique: {
    title: "Was Unsere Scharia-konformen Treffen Einzigartig Macht",
    cards: [
      {
        title: "Echte Orte in Europa",
        description: "Treffen Sie Männer und Frauen zusammen mit ihren Familien von Angesicht zu Angesicht in einer privaten und respektvollen Umgebung.",
      },
      {
        title: "Online mit Demselben Engagement",
        description: "Ideal, wenn Sie sich außerhalb Europas befinden — mit denselben Standards wie bei persönlichen Treffen.",
      },
      {
        title: "Einfacher Ablauf",
        description: "Teilen Sie uns Ihre Partnerpräferenzen mit, und wir kümmern uns um den Rest für Sie.",
      },
    ],
  },
  benefits: {
    title: "Vorteile des Service",
    items: [
      {
        title: "Zeit & Aufwand Sparen",
        description: "Schnelle, direkte Koordination auf Grundlage klarer Kriterien, wo auch immer Sie sich befinden.",
      },
      {
        title: "Sichere & Vertrauenswürdige Umgebung",
        description: "Vollständige Aufsicht unter Wahrung islamischer Werte, ob persönlich oder online.",
      },
      {
        title: "Fortlaufende Unterstützung",
        description: "Wir stehen Ihnen in jeder Phase zur Seite, um Ihre Fragen zu beantworten und Sie zu beraten.",
      },
      {
        title: "Vollständige Privatsphäre",
        description: "Ihre Daten werden sicher aufbewahrt und ausschließlich für den Zweck des Service verwendet.",
      },
      {
        title: "Echtes Büro + Online-Option",
        description:
          "Unser physisches Büro in Amsterdam gibt Ihnen mehr Vertrauen, während Online-Treffen den Service überall zugänglich machen.",
      },
    ],
    imageAlt: "Eine Gracht in Amsterdam, gesäumt von historischen Häusern in der Abenddämmerung",
  },
  how: {
    title: "Wie Funktioniert der Service?",
    description:
      "Sie müssen sich lediglich mit uns in Verbindung setzen und Ihr Profil sowie Ihre Partnerpräferenzen mitteilen — um die Suche kümmern wir uns. Anschließend vereinbaren wir ein Treffen zu einem für Sie beide passenden Zeitpunkt — entweder persönlich in unserem Büro in Amsterdam oder online.",
    imageAlt: "Eine traditionelle holländische Windmühle neben einer Gracht",
  },
};

const tr: MeetingCopy = {
  hero: {
    cta: "Hizmete Abone Ol",
    title: "Doğrudan Şer'i Uygun Görüşmeler",
    paragraphs: [
      "Doğrudan şer'i uygun görüşmeler — İslami değerleri kolay ve anlamlı iletişimle birleştiren, evlilik arayanların doğru hayat arkadaşını bulmasına yardımcı olan eşsiz bir evlilik hizmeti.",
      "Amsterdam'daki ofisimizde yüz yüze görüşün, Avrupa dışındaysanız çevrimiçi görüşebilirsiniz. Her görüşme, aile üyelerinin katılımıyla ve iffeti ile onuru koruyan açık şer'i kurallar çerçevesinde, tam bir gözetim altında gerçekleştirilir — nerede olursanız olun.",
    ],
    imageAlt: {
      street: "Akşam alacakaranlığında bisiklet ve fenerin bulunduğu sakin bir Amsterdam sokağı",
      canal: "Bir Amsterdam su yolu boyunca tarihi kanal evleri",
      tulips: "Bir Amsterdam kanalı boyunca açmış laleler",
    },
  },
  why: {
    title: "Neden Doğrudan Şer'i Uygun Görüşmeleri Seçmelisiniz?",
    description:
      "Zefaaf olarak, değerlerinizi ve ilkelerinizi gerçekten paylaşan bir hayat arkadaşı bulmanın zorluklarını biliyoruz. Bu yüzden, dünyanın neresinde olursanız olun, sizin için güvenli ve güvenilir bir deneyim oluşturduk.",
    leftBullets: [
      {
        title: "Basit ve Anında İletişim",
        description: "Hiçbir karmaşa yok — destekleyici ekibimiz her adımda size rehberlik eder.",
      },
      {
        title: "Hollanda'daki Ofisimizde Gerçek Görüşmeler",
        description: "Birbirinizi açık ve net şekilde, yüz yüze tanıyın.",
      },
      {
        title: "Hollanda Dışında Çevrimiçi Görüşmeler",
        description: "Coğrafi sınır olmaksızın, aynı ciddiyet ve şer'i kurallarla.",
      },
    ],
    rightBullets: [
      {
        title: "Tam Gözetim ve Aile Katılımı",
        description: "Siz ve aileniz için daha fazla güvenlik, rahatlık ve gönül huzuru.",
      },
      {
        title: "İhtiyaçlarınızın Gerçek Anlamda Anlaşılması",
        description: "Anlamlı bir uyum bulmanıza yardımcı olmak için sizi dikkatle dinliyoruz.",
      },
      {
        title: "Tam Gizlilik ve Mahremiyet",
        description: "Bilgileriniz güvenle saklanır ve yalnızca ciddi evlilik niyeti olanlarla paylaşılır.",
      },
    ],
    cta: "Hizmete Abone Ol",
    badge: "evliliğe giden yolunuzu daha kolay ve daha hızlı hale getiriyoruz.",
    photoAlt: "Yeni evli bir çift bir ayçiçeği tarlasında karşı karşıya",
  },
  unique: {
    title: "Şer'i Uygun Görüşmelerimizi Eşsiz Kılan Nedir",
    cards: [
      {
        title: "Avrupa'da Gerçek Mekanlar",
        description: "Erkekleri ve kadınları aileleriyle birlikte, özel ve saygılı bir ortamda yüz yüze tanıyın.",
      },
      {
        title: "Aynı Bağlılıkla Çevrimiçi",
        description: "Avrupa dışındaysanız ideal; yüz yüze görüşmelerle aynı standartlarla.",
      },
      {
        title: "Basit Süreç",
        description: "Partner tercihlerinizi bizimle paylaşın, gerisiyle sizin adınıza biz ilgileniriz.",
      },
    ],
  },
  benefits: {
    title: "Hizmetin Faydaları",
    items: [
      {
        title: "Zaman ve Emekten Tasarruf",
        description: "Nerede olursanız olun, net kriterlere dayalı hızlı ve doğrudan koordinasyon.",
      },
      {
        title: "Güvenli ve Güvenilir Ortam",
        description: "Yüz yüze ya da çevrimiçi olsun, İslami değerlere saygılı tam gözetim.",
      },
      {
        title: "Sürekli Destek",
        description: "Sorularınızı yanıtlamak ve size rehberlik etmek için her aşamada yanınızdayız.",
      },
      {
        title: "Tam Gizlilik",
        description: "Bilgileriniz güvenle saklanır ve yalnızca hizmet amacıyla kullanılır.",
      },
      {
        title: "Gerçek Ofis + Çevrimiçi Seçenek",
        description:
          "Amsterdam'daki fiziksel ofisimiz size daha fazla güven verirken, çevrimiçi görüşmeler hizmeti nerede olursanız olun erişilebilir kılar.",
      },
    ],
    imageAlt: "Akşam alacakaranlığında tarihi evlerle çevrili bir Amsterdam kanalı",
  },
  how: {
    title: "Hizmet Nasıl Çalışır?",
    description:
      "Tek yapmanız gereken bizimle iletişime geçmek, profilinizi ve partner tercihlerinizi paylaşmaktır; aramayı biz üstleniriz. Ardından, ikinize de uygun bir zamanda — ister Amsterdam'daki ofisimizde yüz yüze ister çevrimiçi olarak — bir görüşme ayarlarız.",
    imageAlt: "Bir kanalın kenarında geleneksel bir Hollanda yel değirmeni",
  },
};

const ru: MeetingCopy = {
  hero: {
    cta: "Подписаться на услугу",
    title: "Прямые Встречи в Соответствии с Шариатом",
    paragraphs: [
      "Прямые встречи в соответствии с шариатом — уникальная услуга по подбору пары, которая сочетает исламские ценности с простым и содержательным общением, помогая ищущим брак найти подходящего спутника жизни.",
      "Встречайтесь напрямую в нашем офисе в Амстердаме или онлайн, если вы находитесь за пределами Европы. Каждая встреча проходит под полным наблюдением, в присутствии членов семьи и в соответствии с четкими нормами шариата, сохраняющими скромность и достоинство, где бы вы ни находились.",
    ],
    imageAlt: {
      street: "Тихая амстердамская улица с велосипедом и фонарем в сумерках",
      canal: "Исторические дома вдоль амстердамского канала",
      tulips: "Цветущие тюльпаны вдоль амстердамского канала",
    },
  },
  why: {
    title: "Почему Стоит Выбрать Прямые Встречи по Шариату?",
    description:
      "В Zefaaf мы понимаем, как сложно найти спутника жизни, который действительно разделяет ваши ценности и принципы. Именно поэтому мы создали для вас безопасный и надежный опыт, где бы вы ни находились в мире.",
    leftBullets: [
      {
        title: "Простое и Мгновенное Общение",
        description: "Никаких сложностей — наша заботливая команда сопровождает вас на каждом шагу.",
      },
      {
        title: "Реальные Встречи в Нашем Офисе в Нидерландах",
        description: "Узнайте друг друга ясно и открыто, лицом к лицу.",
      },
      {
        title: "Онлайн-Встречи за Пределами Нидерландов",
        description: "Та же серьезность и те же нормы шариата, без географических ограничений.",
      },
    ],
    rightBullets: [
      {
        title: "Полный Надзор и Присутствие Семьи",
        description: "Больше безопасности, комфорта и душевного спокойствия для вас и вашей семьи.",
      },
      {
        title: "Искреннее Понимание Ваших Потребностей",
        description: "Мы внимательно выслушиваем вас, чтобы помочь найти настоящую совместимость.",
      },
      {
        title: "Полная Конфиденциальность",
        description: "Ваши данные хранятся в безопасности и передаются только тем, кто серьезно настроен на брак.",
      },
    ],
    cta: "Подписаться на услугу",
    badge: "делаем ваш путь к браку проще и быстрее.",
    photoAlt: "Молодожены стоят лицом друг к другу в поле подсолнухов",
  },
  unique: {
    title: "Что Делает Наши Встречи по Шариату Уникальными",
    cards: [
      {
        title: "Реальные Места в Европе",
        description: "Встречайтесь с мужчинами и женщинами вместе с их семьями лицом к лицу в приватной и уважительной обстановке.",
      },
      {
        title: "Онлайн с Той Же Ответственностью",
        description: "Идеально, если вы находитесь за пределами Европы — с теми же стандартами, что и при личных встречах.",
      },
      {
        title: "Простой Процесс",
        description: "Поделитесь с нами своими предпочтениями относительно партнера, а обо всем остальном мы позаботимся за вас.",
      },
    ],
  },
  benefits: {
    title: "Преимущества Услуги",
    items: [
      {
        title: "Экономия Времени и Усилий",
        description: "Быстрая и прямая координация на основе четких критериев, где бы вы ни находились.",
      },
      {
        title: "Безопасная и Надежная Обстановка",
        description: "Полный надзор с уважением к исламским ценностям, будь то лично или онлайн.",
      },
      {
        title: "Постоянная Поддержка",
        description: "Мы рядом с вами на каждом этапе, чтобы отвечать на ваши вопросы и давать рекомендации.",
      },
      {
        title: "Полная Конфиденциальность",
        description: "Ваши данные хранятся в безопасности и используются только для целей услуги.",
      },
      {
        title: "Реальный Офис + Онлайн-Вариант",
        description:
          "Наш физический офис в Амстердаме дает вам больше уверенности, а онлайн-встречи делают услугу доступной, где бы вы ни находились.",
      },
    ],
    imageAlt: "Канал в Амстердаме, окруженный историческими домами в сумерках",
  },
  how: {
    title: "Как Работает Услуга?",
    description:
      "Все, что вам нужно сделать, — это связаться с нами и поделиться своей анкетой и предпочтениями относительно партнера, а поиском займемся мы. Затем мы организуем встречу в удобное для вас обоих время — лично в нашем офисе в Амстердаме или онлайн.",
    imageAlt: "Традиционная голландская ветряная мельница рядом с каналом",
  },
};

const id: MeetingCopy = {
  hero: {
    cta: "Berlangganan Layanan",
    title: "Pertemuan Langsung Sesuai Syariah",
    paragraphs: [
      "Pertemuan langsung sesuai syariah — layanan pernikahan unik yang memadukan nilai-nilai Islam dengan komunikasi yang mudah dan bermakna, membantu mereka yang mencari pernikahan menemukan pasangan hidup yang tepat.",
      "Bertemu langsung di kantor kami di Amsterdam, atau secara daring jika Anda berada di luar Eropa. Setiap pertemuan diawasi sepenuhnya, dengan kehadiran anggota keluarga dan pedoman syariah yang jelas yang menjaga kesopanan dan martabat, di mana pun Anda berada.",
    ],
    imageAlt: {
      street: "Jalanan Amsterdam yang tenang dengan sepeda dan lentera saat senja",
      canal: "Rumah-rumah kanal bersejarah di sepanjang jalur air Amsterdam",
      tulips: "Bunga tulip yang mekar di sepanjang kanal Amsterdam",
    },
  },
  why: {
    title: "Mengapa Memilih Pertemuan Langsung Sesuai Syariah?",
    description:
      "Di Zefaaf, kami memahami tantangan dalam menemukan pasangan hidup yang benar-benar berbagi nilai dan prinsip Anda. Itulah sebabnya kami menciptakan pengalaman yang aman dan tepercaya untuk Anda, di mana pun Anda berada di dunia.",
    leftBullets: [
      {
        title: "Komunikasi Sederhana & Instan",
        description: "Tanpa rumit — tim kami yang suportif membimbing Anda di setiap langkah.",
      },
      {
        title: "Pertemuan Nyata di Kantor Kami di Belanda",
        description: "Saling mengenal dengan jelas dan terbuka, secara tatap muka.",
      },
      {
        title: "Pertemuan Daring di Luar Belanda",
        description: "Keseriusan dan pedoman syariah yang sama, tanpa batasan geografis.",
      },
    ],
    rightBullets: [
      {
        title: "Pengawasan Penuh & Kehadiran Keluarga",
        description: "Lebih aman, nyaman, dan tenang bagi Anda dan keluarga Anda.",
      },
      {
        title: "Pemahaman Tulus atas Kebutuhan Anda",
        description: "Kami mendengarkan dengan saksama untuk membantu Anda menemukan kecocokan yang bermakna.",
      },
      {
        title: "Privasi & Kerahasiaan Penuh",
        description: "Informasi Anda disimpan dengan aman dan hanya dibagikan kepada mereka yang memiliki niat serius untuk menikah.",
      },
    ],
    cta: "Berlangganan Layanan",
    badge: "membuat perjalanan Anda menuju pernikahan lebih mudah dan lebih cepat.",
    photoAlt: "Pasangan pengantin baru saling berhadapan di ladang bunga matahari",
  },
  unique: {
    title: "Yang Membuat Pertemuan Sesuai Syariah Kami Unik",
    cards: [
      {
        title: "Lokasi Nyata di Eropa",
        description: "Temui pria dan wanita bersama keluarga mereka secara tatap muka dalam lingkungan yang privat dan penuh hormat.",
      },
      {
        title: "Daring dengan Komitmen yang Sama",
        description: "Ideal jika Anda berada di luar Eropa, dengan standar yang sama seperti pertemuan tatap muka.",
      },
      {
        title: "Proses yang Sederhana",
        description: "Bagikan preferensi pasangan Anda kepada kami, dan kami akan mengurus sisanya untuk Anda.",
      },
    ],
  },
  benefits: {
    title: "Manfaat Layanan",
    items: [
      {
        title: "Hemat Waktu & Tenaga",
        description: "Koordinasi yang cepat dan langsung berdasarkan kriteria yang jelas, di mana pun Anda berada.",
      },
      {
        title: "Lingkungan yang Aman & Tepercaya",
        description: "Pengawasan penuh yang menghormati nilai-nilai Islam, baik secara langsung maupun daring.",
      },
      {
        title: "Dukungan Berkelanjutan",
        description: "Kami bersama Anda di setiap tahap untuk menjawab pertanyaan Anda dan memberikan bimbingan.",
      },
      {
        title: "Privasi Penuh",
        description: "Informasi Anda disimpan dengan aman dan hanya digunakan untuk tujuan layanan.",
      },
      {
        title: "Kantor Nyata + Opsi Daring",
        description:
          "Kantor fisik kami di Amsterdam memberi Anda rasa percaya diri lebih besar, sementara pertemuan daring membuat layanan ini dapat diakses di mana pun Anda berada.",
      },
    ],
    imageAlt: "Sebuah kanal di Amsterdam yang dipenuhi rumah-rumah bersejarah saat senja",
  },
  how: {
    title: "Bagaimana Layanan Ini Bekerja?",
    description:
      "Yang perlu Anda lakukan hanyalah menghubungi kami, membagikan profil dan preferensi pasangan Anda, dan kami akan mengurus pencariannya. Kami kemudian akan mengatur pertemuan pada waktu yang sesuai untuk Anda berdua — baik secara langsung di kantor kami di Amsterdam maupun secara daring.",
    imageAlt: "Kincir angin tradisional Belanda di samping kanal",
  },
};

const zh: MeetingCopy = {
  hero: {
    cta: "订阅服务",
    title: "符合伊斯兰教法的直接会面",
    paragraphs: [
      "符合伊斯兰教法的直接会面——一项独特的婚姻服务,将伊斯兰价值观与简单而有意义的沟通相结合,帮助寻求婚姻的人找到合适的人生伴侣。",
      "直接在我们位于阿姆斯特丹的办公室会面,若您身处欧洲以外,也可选择在线会面。每一次会面都在全程监督下进行,有家人在场,并遵循清晰的教法规范,无论您身处何地,都能维护端庄与尊严。",
    ],
    imageAlt: {
      street: "黄昏时分,一条安静的阿姆斯特丹街道,街边停着一辆自行车,亮着一盏路灯",
      canal: "阿姆斯特丹水道旁的历史悠久的运河屋",
      tulips: "阿姆斯特丹运河旁盛开的郁金香",
    },
  },
  why: {
    title: "为什么选择符合伊斯兰教法的直接会面?",
    description:
      "在 Zefaaf,我们深知寻找一位真正认同您价值观与原则的人生伴侣有多么不易。因此,无论您身处世界何地,我们都为您打造了安全可信的体验。",
    leftBullets: [
      {
        title: "简单即时的沟通",
        description: "没有繁琐流程——我们贴心的团队将全程为您提供指导。",
      },
      {
        title: "在我们荷兰办公室的真实会面",
        description: "面对面清晰坦诚地了解彼此。",
      },
      {
        title: "荷兰以外的在线会面",
        description: "同样的严谨与教法规范,不受地域限制。",
      },
    ],
    rightBullets: [
      {
        title: "全程监督与家人陪伴",
        description: "为您和您的家人带来更多安全、舒适与安心。",
      },
      {
        title: "真正理解您的需求",
        description: "我们用心倾听,帮助您找到真正契合的对象。",
      },
      {
        title: "完全的隐私与保密",
        description: "您的信息将被安全保存,仅与有严肃婚姻意向的人分享。",
      },
    ],
    cta: "订阅服务",
    badge: "让您通往婚姻的道路更轻松、更快捷。",
    photoAlt: "一对新婚夫妇在向日葵田中相对而立",
  },
  unique: {
    title: "我们符合教法的会面有何独特之处",
    cards: [
      {
        title: "欧洲的真实场地",
        description: "在私密而尊重的环境中,与男女双方及其家人面对面会面。",
      },
      {
        title: "同样用心的在线服务",
        description: "若您身处欧洲以外,这是理想之选,标准与线下会面完全一致。",
      },
      {
        title: "简单的流程",
        description: "把您的伴侣偏好告诉我们,其余的一切都交给我们代您处理。",
      },
    ],
  },
  benefits: {
    title: "服务优势",
    items: [
      {
        title: "节省时间与精力",
        description: "无论您身处何地,都能依据明确标准获得快速直接的协调安排。",
      },
      {
        title: "安全可信的环境",
        description: "无论线下还是线上,均在全程监督下进行,尊重伊斯兰价值观。",
      },
      {
        title: "持续的支持",
        description: "我们在每个阶段都会陪伴您,解答疑问并提供指导。",
      },
      {
        title: "完全的隐私保护",
        description: "您的信息将被安全保存,并仅用于服务目的。",
      },
      {
        title: "真实办公室 + 在线选项",
        description:
          "我们在阿姆斯特丹的实体办公室能带给您更多信心,而在线会面则让服务无论您身处何地都触手可及。",
      },
    ],
    imageAlt: "黄昏时分,阿姆斯特丹一条两侧遍布历史建筑的运河",
  },
  how: {
    title: "服务如何运作?",
    description:
      "您只需联系我们,分享您的个人资料与伴侣偏好,接下来的搜寻工作将由我们负责。随后,我们会为您二人安排一个都合适的时间见面——可以选择在阿姆斯特丹办公室当面会面,也可以选择在线进行。",
    imageAlt: "运河旁的一座传统荷兰风车",
  },
};

const bn: MeetingCopy = {
  hero: {
    cta: "সেবায় সাবস্ক্রাইব করুন",
    title: "সরাসরি শরিয়াহ-সম্মত সাক্ষাৎ",
    paragraphs: [
      "সরাসরি শরিয়াহ-সম্মত সাক্ষাৎ — একটি অনন্য বিবাহ সেবা যা ইসলামী মূল্যবোধকে সহজ ও অর্থবহ যোগাযোগের সাথে একত্রিত করে, যা বিবাহপ্রত্যাশীদের সঠিক জীবনসঙ্গী খুঁজে পেতে সহায়তা করে।",
      "সরাসরি আমাদের আমস্টারডাম অফিসে সাক্ষাৎ করুন, অথবা আপনি ইউরোপের বাইরে থাকলে অনলাইনে। প্রতিটি সাক্ষাৎ সম্পূর্ণ তত্ত্বাবধানে, পরিবারের সদস্যদের উপস্থিতিতে এবং স্পষ্ট শরিয়াহ নির্দেশিকা মেনে অনুষ্ঠিত হয়, যা আপনি যেখানেই থাকুন না কেন শালীনতা ও মর্যাদা রক্ষা করে।",
    ],
    imageAlt: {
      street: "সন্ধ্যাবেলায় একটি সাইকেল ও লণ্ঠনসহ শান্ত আমস্টারডামের একটি রাস্তা",
      canal: "আমস্টারডামের একটি জলপথের ধারে ঐতিহাসিক খাল-বাড়ি",
      tulips: "আমস্টারডামের একটি খালের ধারে ফুটে থাকা টিউলিপ",
    },
  },
  why: {
    title: "কেন সরাসরি শরিয়াহ-সম্মত সাক্ষাৎ বেছে নেবেন?",
    description:
      "জেফাফে, আমরা বুঝি যে এমন একজন জীবনসঙ্গী খুঁজে পাওয়া কতটা কঠিন যিনি সত্যিকার অর্থে আপনার মূল্যবোধ ও নীতিগুলো ভাগ করে নেন। তাই আপনি বিশ্বের যেখানেই থাকুন না কেন, আমরা আপনার জন্য একটি নিরাপদ ও নির্ভরযোগ্য অভিজ্ঞতা তৈরি করেছি।",
    leftBullets: [
      {
        title: "সহজ ও তাৎক্ষণিক যোগাযোগ",
        description: "কোনো জটিলতা নেই — আমাদের সহায়ক দল প্রতিটি ধাপে আপনাকে পথ দেখাবে।",
      },
      {
        title: "নেদারল্যান্ডসে আমাদের অফিসে বাস্তব সাক্ষাৎ",
        description: "স্পষ্ট ও খোলামেলাভাবে, সামনাসামনি একে অপরকে জানুন।",
      },
      {
        title: "নেদারল্যান্ডসের বাইরে অনলাইন সাক্ষাৎ",
        description: "একই আন্তরিকতা ও শরিয়াহ নির্দেশিকা, ভৌগোলিক সীমা ছাড়াই।",
      },
    ],
    rightBullets: [
      {
        title: "সম্পূর্ণ তত্ত্বাবধান ও পরিবারের উপস্থিতি",
        description: "আপনার ও আপনার পরিবারের জন্য অধিক নিরাপত্তা, স্বাচ্ছন্দ্য ও মানসিক প্রশান্তি।",
      },
      {
        title: "আপনার চাহিদার প্রকৃত অনুধাবন",
        description: "অর্থবহ সামঞ্জস্য খুঁজে পেতে আমরা মনোযোগ দিয়ে আপনার কথা শুনি।",
      },
      {
        title: "সম্পূর্ণ গোপনীয়তা",
        description: "আপনার তথ্য নিরাপদে রাখা হয় এবং শুধুমাত্র গুরুতর বিবাহের উদ্দেশ্য নিয়ে থাকা ব্যক্তিদের সাথে ভাগ করা হয়।",
      },
    ],
    cta: "সেবায় সাবস্ক্রাইব করুন",
    badge: "আপনার বিবাহের পথকে সহজ ও দ্রুততর করে তোলে।",
    photoAlt: "সদ্য বিবাহিত এক দম্পতি একটি সূর্যমুখী ক্ষেতে মুখোমুখি দাঁড়িয়ে",
  },
  unique: {
    title: "কী আমাদের শরিয়াহ-সম্মত সাক্ষাৎকে অনন্য করে তোলে",
    cards: [
      {
        title: "ইউরোপে প্রকৃত স্থান",
        description: "একান্ত ও শ্রদ্ধাশীল পরিবেশে পুরুষ ও নারীদের তাদের পরিবারসহ সামনাসামনি সাক্ষাৎ করুন।",
      },
      {
        title: "একই প্রতিশ্রুতিতে অনলাইনে",
        description: "আপনি ইউরোপের বাইরে থাকলে আদর্শ, সরাসরি সাক্ষাতের মতোই একই মানদণ্ড বজায় রেখে।",
      },
      {
        title: "সহজ প্রক্রিয়া",
        description: "আপনার সঙ্গীর পছন্দ আমাদের সাথে ভাগ করুন, বাকিটা আমরা আপনার পক্ষে সামলাব।",
      },
    ],
  },
  benefits: {
    title: "সেবার সুবিধা",
    items: [
      {
        title: "সময় ও পরিশ্রম বাঁচান",
        description: "আপনি যেখানেই থাকুন না কেন, স্পষ্ট মানদণ্ডের ভিত্তিতে দ্রুত ও সরাসরি সমন্বয়।",
      },
      {
        title: "নিরাপদ ও নির্ভরযোগ্য পরিবেশ",
        description: "সামনাসামনি হোক বা অনলাইনে, ইসলামী মূল্যবোধকে সম্মান জানিয়ে সম্পূর্ণ তত্ত্বাবধান।",
      },
      {
        title: "নিরবচ্ছিন্ন সহায়তা",
        description: "আপনার প্রশ্নের উত্তর দিতে ও দিকনির্দেশনা দিতে আমরা প্রতিটি ধাপে আপনার পাশে আছি।",
      },
      {
        title: "সম্পূর্ণ গোপনীয়তা",
        description: "আপনার তথ্য নিরাপদে রাখা হয় এবং শুধুমাত্র সেবার উদ্দেশ্যে ব্যবহৃত হয়।",
      },
      {
        title: "প্রকৃত অফিস + অনলাইন বিকল্প",
        description:
          "আমস্টারডামে আমাদের ভৌত অফিস আপনাকে অধিক আস্থা দেয়, আর অনলাইন সাক্ষাৎ আপনি যেখানেই থাকুন না কেন সেবাটিকে সহজলভ্য করে তোলে।",
      },
    ],
    imageAlt: "সন্ধ্যাবেলায় ঐতিহাসিক বাড়িঘরে সজ্জিত আমস্টারডামের একটি খাল",
  },
  how: {
    title: "সেবাটি কীভাবে কাজ করে?",
    description:
      "আপনাকে শুধু আমাদের সাথে যোগাযোগ করতে হবে, আপনার প্রোফাইল ও সঙ্গীর পছন্দ জানাতে হবে, আর অনুসন্ধানের কাজ আমরা করব। এরপর আমরা আপনাদের উভয়ের জন্য সুবিধাজনক সময়ে একটি সাক্ষাতের ব্যবস্থা করব — হয় সরাসরি আমাদের আমস্টারডাম অফিসে অথবা অনলাইনে।",
    imageAlt: "একটি খালের পাশে একটি ঐতিহ্যবাহী ডাচ বায়ুকল",
  },
};

const bs: MeetingCopy = {
  hero: {
    cta: "Pretplatite se na uslugu",
    title: "Direktni Susreti u Skladu sa Šerijatom",
    paragraphs: [
      "Direktni susreti u skladu sa šerijatom — jedinstvena bračna usluga koja spaja islamske vrijednosti s jednostavnom i smislenom komunikacijom, pomažući onima koji traže brak da pronađu pravog životnog partnera.",
      "Upoznajte se direktno u našoj kancelariji u Amsterdamu, ili online ako se nalazite izvan Evrope. Svaki susret odvija se pod potpunim nadzorom, uz prisustvo članova porodice i jasne šerijatske smjernice koje čuvaju skromnost i dostojanstvo, gdje god da se nalazite.",
    ],
    imageAlt: {
      street: "Mirna amsterdamska ulica s biciklom i fenjerom u sumrak",
      canal: "Historijske kuće uz kanal duž amsterdamskog vodenog puta",
      tulips: "Tulipani u cvatu duž amsterdamskog kanala",
    },
  },
  why: {
    title: "Zašto Odabrati Direktne Susrete u Skladu sa Šerijatom?",
    description:
      "U Zefaafu razumijemo izazove pronalaska životnog partnera koji zaista dijeli vaše vrijednosti i principe. Zato smo za vas kreirali sigurno i pouzdano iskustvo, gdje god da se nalazite u svijetu.",
    leftBullets: [
      {
        title: "Jednostavna i Trenutna Komunikacija",
        description: "Bez komplikacija — naš podržavajući tim vas vodi kroz svaki korak.",
      },
      {
        title: "Stvarni Susreti u Našoj Kancelariji u Nizozemskoj",
        description: "Upoznajte se jasno i otvoreno, licem u lice.",
      },
      {
        title: "Online Susreti Izvan Nizozemske",
        description: "Ista ozbiljnost i šerijatske smjernice, bez geografskih ograničenja.",
      },
    ],
    rightBullets: [
      {
        title: "Potpuni Nadzor i Prisustvo Porodice",
        description: "Veća sigurnost, udobnost i mir za vas i vašu porodicu.",
      },
      {
        title: "Istinsko Razumijevanje Vaših Potreba",
        description: "Pažljivo slušamo kako bismo vam pomogli da pronađete smislenu kompatibilnost.",
      },
      {
        title: "Potpuna Privatnost i Povjerljivost",
        description: "Vaši podaci se čuvaju sigurno i dijele samo s onima koji imaju ozbiljne bračne namjere.",
      },
    ],
    cta: "Pretplatite se na uslugu",
    badge: "činimo vaš put ka braku lakšim i bržim.",
    photoAlt: "Mladenci okrenuti jedno prema drugom u polju suncokreta",
  },
  unique: {
    title: "Šta Čini Naše Šerijatske Susrete Jedinstvenim",
    cards: [
      {
        title: "Stvarne Lokacije u Evropi",
        description: "Upoznajte muškarce i žene zajedno s njihovim porodicama licem u lice u privatnom i uljudnom okruženju.",
      },
      {
        title: "Online uz Istu Posvećenost",
        description: "Idealno ako ste izvan Evrope, uz iste standarde kao kod susreta uživo.",
      },
      {
        title: "Jednostavan Proces",
        description: "Podijelite s nama svoje preferencije o partneru, a mi ćemo se pobrinuti za ostalo umjesto vas.",
      },
    ],
  },
  benefits: {
    title: "Prednosti Usluge",
    items: [
      {
        title: "Uštedite Vrijeme i Trud",
        description: "Brza, direktna koordinacija zasnovana na jasnim kriterijima, gdje god da se nalazite.",
      },
      {
        title: "Sigurno i Pouzdano Okruženje",
        description: "Potpuni nadzor koji poštuje islamske vrijednosti, bilo uživo ili online.",
      },
      {
        title: "Kontinuirana Podrška",
        description: "Uz vas smo u svakoj fazi kako bismo odgovorili na vaša pitanja i pružili smjernice.",
      },
      {
        title: "Potpuna Privatnost",
        description: "Vaši podaci se čuvaju sigurno i koriste isključivo u svrhu usluge.",
      },
      {
        title: "Stvarna Kancelarija + Online Opcija",
        description:
          "Naša fizička kancelarija u Amsterdamu pruža vam veće povjerenje, dok online susreti čine uslugu dostupnom gdje god da se nalazite.",
      },
    ],
    imageAlt: "Kanal u Amsterdamu okružen historijskim kućama u sumrak",
  },
  how: {
    title: "Kako Funkcioniše Usluga?",
    description:
      "Sve što trebate učiniti jeste kontaktirati nas, podijeliti svoj profil i preferencije o partneru, a mi ćemo se pobrinuti za potragu. Zatim ćemo dogovoriti susret u vrijeme koje odgovara vama oboma — bilo uživo u našoj kancelariji u Amsterdamu ili online.",
    imageAlt: "Tradicionalni holandski vjetrenjača pored kanala",
  },
};

const es: MeetingCopy = {
  hero: {
    cta: "Suscribirse al servicio",
    title: "Encuentros Directos Conformes a la Sharia",
    paragraphs: [
      "Encuentros directos conformes a la sharia — un servicio matrimonial único que combina los valores islámicos con una comunicación sencilla y significativa, ayudando a quienes buscan el matrimonio a encontrar la pareja de vida adecuada.",
      "Reúnanse directamente en nuestra oficina de Ámsterdam, o en línea si se encuentran fuera de Europa. Cada encuentro se realiza bajo supervisión completa, con la presencia de familiares y pautas claras conforme a la sharia que preservan el pudor y la dignidad, estén donde estén.",
    ],
    imageAlt: {
      street: "Una tranquila calle de Ámsterdam con una bicicleta y un farol al atardecer",
      canal: "Casas históricas junto a un canal de Ámsterdam",
      tulips: "Tulipanes en flor a lo largo de un canal de Ámsterdam",
    },
  },
  why: {
    title: "¿Por Qué Elegir Encuentros Directos Conformes a la Sharia?",
    description:
      "En Zefaaf, entendemos los desafíos de encontrar una pareja de vida que realmente comparta tus valores y principios. Por eso creamos una experiencia segura y confiable para ti, estés donde estés en el mundo.",
    leftBullets: [
      {
        title: "Comunicación Simple e Instantánea",
        description: "Sin complicaciones — nuestro equipo de apoyo te guía en cada paso.",
      },
      {
        title: "Encuentros Reales en Nuestra Oficina de los Países Bajos",
        description: "Conócanse de forma clara y abierta, cara a cara.",
      },
      {
        title: "Encuentros en Línea Fuera de los Países Bajos",
        description: "La misma seriedad y pautas conforme a la sharia, sin límites geográficos.",
      },
    ],
    rightBullets: [
      {
        title: "Supervisión Completa y Presencia Familiar",
        description: "Mayor seguridad, comodidad y tranquilidad para ti y tu familia.",
      },
      {
        title: "Una Comprensión Genuina de Tus Necesidades",
        description: "Escuchamos con atención para ayudarte a encontrar una compatibilidad significativa.",
      },
      {
        title: "Privacidad y Confidencialidad Totales",
        description: "Tu información se mantiene segura y solo se comparte con quienes tienen intenciones serias de matrimonio.",
      },
    ],
    cta: "Suscribirse al servicio",
    badge: "hacemos tu camino hacia el matrimonio más fácil y rápido.",
    photoAlt: "Una pareja recién casada mirándose frente a frente en un campo de girasoles",
  },
  unique: {
    title: "Qué Hace Únicos a Nuestros Encuentros Conformes a la Sharia",
    cards: [
      {
        title: "Lugares Reales en Europa",
        description: "Conoce a hombres y mujeres junto con sus familias, cara a cara, en un entorno privado y respetuoso.",
      },
      {
        title: "En Línea con el Mismo Compromiso",
        description: "Ideal si estás fuera de Europa, con los mismos estándares que los encuentros presenciales.",
      },
      {
        title: "Proceso Sencillo",
        description: "Comparte con nosotros tus preferencias de pareja, y nosotros nos encargamos del resto en tu nombre.",
      },
    ],
  },
  benefits: {
    title: "Beneficios del Servicio",
    items: [
      {
        title: "Ahorra Tiempo y Esfuerzo",
        description: "Coordinación rápida y directa basada en criterios claros, estés donde estés.",
      },
      {
        title: "Entorno Seguro y Confiable",
        description: "Supervisión completa que respeta los valores islámicos, ya sea presencial o en línea.",
      },
      {
        title: "Apoyo Continuo",
        description: "Estamos contigo en cada etapa para responder tus preguntas y brindarte orientación.",
      },
      {
        title: "Privacidad Total",
        description: "Tu información se mantiene segura y se utiliza únicamente para los fines del servicio.",
      },
      {
        title: "Oficina Real + Opción en Línea",
        description:
          "Nuestra oficina física en Ámsterdam te brinda mayor confianza, mientras que los encuentros en línea hacen que el servicio sea accesible estés donde estés.",
      },
    ],
    imageAlt: "Un canal en Ámsterdam bordeado de casas históricas al atardecer",
  },
  how: {
    title: "¿Cómo Funciona el Servicio?",
    description:
      "Todo lo que necesitas hacer es contactarnos, compartir tu perfil y tus preferencias de pareja, y nosotros nos encargaremos de la búsqueda. Luego coordinaremos un encuentro en un horario que les convenga a ambos, ya sea en persona en nuestra oficina de Ámsterdam o en línea.",
    imageAlt: "Un molino de viento tradicional holandés junto a un canal",
  },
};

const fa: MeetingCopy = {
  hero: {
    cta: "عضویت در خدمت",
    title: "دیدارهای مستقیم منطبق با شریعت",
    paragraphs: [
      "دیدارهای مستقیم منطبق با شریعت — خدمتی منحصربه‌فرد در زمینه ازدواج که ارزش‌های اسلامی را با ارتباطی ساده و معنادار پیوند می‌دهد و به افرادی که به دنبال ازدواج هستند کمک می‌کند تا همسر مناسب زندگی خود را بیابند.",
      "به‌طور مستقیم در دفتر ما در آمستردام دیدار کنید، یا در صورتی که خارج از اروپا هستید، به‌صورت آنلاین. هر دیدار به‌طور کامل تحت نظارت انجام می‌شود، با حضور اعضای خانواده و طبق ضوابط شرعی روشن که عفت و کرامت را در هر کجا که باشید حفظ می‌کند.",
    ],
    imageAlt: {
      street: "خیابانی آرام در آمستردام با یک دوچرخه و یک فانوس در هنگام غروب",
      canal: "خانه‌های تاریخی کنار یک کانال آبی در آمستردام",
      tulips: "لاله‌های شکفته در کنار یک کانال آمستردام",
    },
  },
  why: {
    title: "چرا دیدارهای مستقیم منطبق با شریعت را انتخاب کنیم؟",
    description:
      "در زفاف، ما چالش‌های یافتن همسری که واقعاً ارزش‌ها و اصول شما را به اشتراک بگذارد، به‌خوبی درک می‌کنیم. به همین دلیل، تجربه‌ای امن و قابل اعتماد برای شما فراهم کرده‌ایم، هر کجا که در جهان باشید.",
    leftBullets: [
      {
        title: "ارتباط ساده و فوری",
        description: "بدون هیچ پیچیدگی — تیم حمایتگر ما در هر قدم همراه شماست.",
      },
      {
        title: "دیدارهای واقعی در دفتر ما در هلند",
        description: "به‌طور شفاف و صمیمانه، رو در رو با یکدیگر آشنا شوید.",
      },
      {
        title: "دیدارهای آنلاین خارج از هلند",
        description: "همان جدیت و ضوابط شرعی، بدون محدودیت جغرافیایی.",
      },
    ],
    rightBullets: [
      {
        title: "نظارت کامل و حضور خانواده",
        description: "امنیت، آرامش و آسایش خاطر بیشتر برای شما و خانواده‌تان.",
      },
      {
        title: "درکی واقعی از نیازهای شما",
        description: "ما با دقت به شما گوش می‌دهیم تا در یافتن تناسبی معنادار کمکتان کنیم.",
      },
      {
        title: "حریم خصوصی و رازداری کامل",
        description: "اطلاعات شما به‌طور امن نگهداری می‌شود و تنها با افرادی با نیت جدی برای ازدواج به اشتراک گذاشته می‌شود.",
      },
    ],
    cta: "عضویت در خدمت",
    badge: "مسیر شما به سوی ازدواج را آسان‌تر و سریع‌تر می‌کنیم.",
    photoAlt: "زوجی تازه ازدواج‌کرده روبه‌روی هم در مزرعه‌ای از گل‌های آفتابگردان",
  },
  unique: {
    title: "چه چیزی دیدارهای منطبق با شریعت ما را منحصربه‌فرد می‌کند",
    cards: [
      {
        title: "مکان‌های واقعی در اروپا",
        description: "مردان و زنان را همراه با خانواده‌هایشان به‌صورت رو در رو، در محیطی خصوصی و محترمانه ملاقات کنید.",
      },
      {
        title: "آنلاین با همان تعهد",
        description: "اگر خارج از اروپا هستید ایده‌آل است، با همان استانداردهای دیدارهای حضوری.",
      },
      {
        title: "فرآیندی ساده",
        description: "ترجیحات همسر مطلوب خود را با ما به اشتراک بگذارید، و ما بقیه را از جانب شما انجام خواهیم داد.",
      },
    ],
  },
  benefits: {
    title: "مزایای خدمت",
    items: [
      {
        title: "صرفه‌جویی در زمان و تلاش",
        description: "هماهنگی سریع و مستقیم بر اساس معیارهای واضح، هر کجا که باشید.",
      },
      {
        title: "محیطی امن و قابل اعتماد",
        description: "نظارت کامل که ارزش‌های اسلامی را رعایت می‌کند، خواه حضوری باشد یا آنلاین.",
      },
      {
        title: "پشتیبانی مستمر",
        description: "ما در هر مرحله در کنار شما هستیم تا به سؤالاتتان پاسخ دهیم و راهنمایی‌تان کنیم.",
      },
      {
        title: "حریم خصوصی کامل",
        description: "اطلاعات شما به‌طور امن نگهداری می‌شود و تنها برای هدف این خدمت استفاده می‌شود.",
      },
      {
        title: "دفتر واقعی + گزینه آنلاین",
        description:
          "دفتر فیزیکی ما در آمستردام اطمینان بیشتری به شما می‌دهد، در حالی که دیدارهای آنلاین این خدمت را در هر کجا که باشید در دسترس قرار می‌دهد.",
      },
    ],
    imageAlt: "کانالی در آمستردام که در هنگام غروب با خانه‌های تاریخی احاطه شده است",
  },
  how: {
    title: "این خدمت چگونه کار می‌کند؟",
    description:
      "تنها کاری که باید انجام دهید این است که با ما تماس بگیرید و پروفایل و ترجیحات همسر مطلوب خود را به اشتراک بگذارید؛ ما جستجو را انجام خواهیم داد. سپس دیداری را در زمانی که برای هر دوی شما مناسب باشد ترتیب می‌دهیم — یا به‌صورت حضوری در دفتر ما در آمستردام یا به‌صورت آنلاین.",
    imageAlt: "یک آسیاب بادی سنتی هلندی در کنار یک کانال آبی",
  },
};

const pt: MeetingCopy = {
  hero: {
    cta: "Assinar o serviço",
    title: "Encontros Diretos em Conformidade com a Sharia",
    paragraphs: [
      "Encontros diretos em conformidade com a sharia — um serviço matrimonial único que combina valores islâmicos com uma comunicação simples e significativa, ajudando quem busca o casamento a encontrar o parceiro de vida certo.",
      "Encontrem-se diretamente em nosso escritório em Amsterdã, ou online se estiverem fora da Europa. Cada encontro é totalmente supervisionado, com a presença de familiares e diretrizes claras da sharia que preservam o pudor e a dignidade, onde quer que estejam.",
    ],
    imageAlt: {
      street: "Uma rua tranquila de Amsterdã com uma bicicleta e um lampião ao anoitecer",
      canal: "Casas históricas à beira de um canal de Amsterdã",
      tulips: "Tulipas em flor ao longo de um canal de Amsterdã",
    },
  },
  why: {
    title: "Por Que Escolher Encontros Diretos em Conformidade com a Sharia?",
    description:
      "Na Zefaaf, entendemos os desafios de encontrar um parceiro de vida que realmente compartilhe seus valores e princípios. Por isso, criamos uma experiência segura e confiável para você, onde quer que esteja no mundo.",
    leftBullets: [
      {
        title: "Comunicação Simples e Instantânea",
        description: "Sem complicações — nossa equipe de apoio orienta você em cada etapa.",
      },
      {
        title: "Encontros Reais em Nosso Escritório na Holanda",
        description: "Conheçam-se de forma clara e aberta, face a face.",
      },
      {
        title: "Encontros Online Fora da Holanda",
        description: "A mesma seriedade e diretrizes da sharia, sem limites geográficos.",
      },
    ],
    rightBullets: [
      {
        title: "Supervisão Total e Presença da Família",
        description: "Mais segurança, conforto e tranquilidade para você e sua família.",
      },
      {
        title: "Uma Compreensão Genuína das Suas Necessidades",
        description: "Ouvimos com atenção para ajudá-lo a encontrar uma compatibilidade significativa.",
      },
      {
        title: "Privacidade e Confidencialidade Totais",
        description: "Suas informações são mantidas em segurança e compartilhadas apenas com quem tem intenções sérias de casamento.",
      },
    ],
    cta: "Assinar o serviço",
    badge: "tornamos seu caminho até o casamento mais fácil e rápido.",
    photoAlt: "Um casal recém-casado frente a frente em um campo de girassóis",
  },
  unique: {
    title: "O Que Torna Nossos Encontros em Conformidade com a Sharia Únicos",
    cards: [
      {
        title: "Locais Reais na Europa",
        description: "Conheça homens e mulheres junto com suas famílias, face a face, em um ambiente privado e respeitoso.",
      },
      {
        title: "Online com o Mesmo Compromisso",
        description: "Ideal se você está fora da Europa, com os mesmos padrões dos encontros presenciais.",
      },
      {
        title: "Processo Simples",
        description: "Compartilhe com a gente suas preferências de parceiro, e nós cuidamos do resto em seu nome.",
      },
    ],
  },
  benefits: {
    title: "Benefícios do Serviço",
    items: [
      {
        title: "Economize Tempo e Esforço",
        description: "Coordenação rápida e direta com base em critérios claros, onde quer que você esteja.",
      },
      {
        title: "Ambiente Seguro e Confiável",
        description: "Supervisão total que respeita os valores islâmicos, seja presencial ou online.",
      },
      {
        title: "Apoio Contínuo",
        description: "Estamos com você em cada etapa para responder às suas perguntas e oferecer orientação.",
      },
      {
        title: "Privacidade Total",
        description: "Suas informações são mantidas em segurança e usadas apenas para o propósito do serviço.",
      },
      {
        title: "Escritório Real + Opção Online",
        description:
          "Nosso escritório físico em Amsterdã oferece mais confiança, enquanto os encontros online tornam o serviço acessível onde quer que você esteja.",
      },
    ],
    imageAlt: "Um canal em Amsterdã ladeado por casas históricas ao anoitecer",
  },
  how: {
    title: "Como Funciona o Serviço?",
    description:
      "Tudo o que você precisa fazer é nos contatar e compartilhar seu perfil e suas preferências de parceiro; nós cuidaremos da busca. Em seguida, agendaremos um encontro em um horário que seja conveniente para os dois — pessoalmente em nosso escritório em Amsterdã ou online.",
    imageAlt: "Um moinho de vento tradicional holandês ao lado de um canal",
  },
};

const ja: MeetingCopy = {
  hero: {
    cta: "サービスに登録する",
    title: "シャリアに準拠した直接的な面会",
    paragraphs: [
      "シャリアに準拠した直接的な面会——イスラムの価値観と、シンプルで心のこもったコミュニケーションを組み合わせた独自の結婚サービスであり、結婚を求める方々がふさわしい生涯の伴侶を見つける手助けをします。",
      "アムステルダムの弊社オフィスで直接お会いいただくか、ヨーロッパ以外にお住まいの場合はオンラインでお会いいただけます。すべての面会は、ご家族の同席と、どこにいても慎み深さと尊厳を守る明確なシャリアの指針のもと、完全な監督下で行われます。",
    ],
    imageAlt: {
      street: "夕暮れ時、自転車とランタンのある静かなアムステルダムの街並み",
      canal: "アムステルダムの水路沿いに並ぶ歴史的な運河沿いの家々",
      tulips: "アムステルダムの運河沿いに咲くチューリップ",
    },
  },
  why: {
    title: "なぜシャリアに準拠した直接的な面会を選ぶのか",
    description:
      "Zefaafでは、本当に価値観や信念を共有できる生涯の伴侶を見つけることの難しさを理解しています。だからこそ、あなたが世界のどこにいても、安心で信頼できる体験をご提供するために、このサービスを生み出しました。",
    leftBullets: [
      {
        title: "シンプルで迅速なコミュニケーション",
        description: "複雑な手続きは一切なく——サポート豊かなスタッフが一歩一歩ご案内します。",
      },
      {
        title: "オランダのオフィスでの実際の面会",
        description: "対面で、はっきりと心を開いてお互いを知ることができます。",
      },
      {
        title: "オランダ国外でのオンライン面会",
        description: "地理的な制約なく、同じ真剣さとシャリアの指針をお約束します。",
      },
    ],
    rightBullets: [
      {
        title: "完全な監督とご家族の同席",
        description: "あなたとご家族にとって、より高い安心感、快適さ、そして心の平穏をお届けします。",
      },
      {
        title: "あなたのニーズへの真摯な理解",
        description: "私たちは丁寧に耳を傾け、意味のある相性を見つけるお手伝いをします。",
      },
      {
        title: "完全なプライバシーと機密保持",
        description: "あなたの情報は安全に保管され、結婚への真剣な意思を持つ方にのみ共有されます。",
      },
    ],
    cta: "サービスに登録する",
    badge: "結婚への道のりをより簡単に、より早くします。",
    photoAlt: "ひまわり畑で向かい合う新婚夫婦",
  },
  unique: {
    title: "私たちのシャリアに準拠した面会が特別である理由",
    cards: [
      {
        title: "ヨーロッパの実際の場所で",
        description: "プライベートで礼儀正しい環境の中、ご家族とともに男女が対面でお会いいただけます。",
      },
      {
        title: "同じ真剣さでオンラインでも",
        description: "ヨーロッパ外にお住まいの方に最適で、対面の面会と同じ基準を保っています。",
      },
      {
        title: "シンプルなプロセス",
        description: "あなたのパートナーへの希望条件を私たちに共有していただければ、残りはすべて私たちがあなたに代わって対応します。",
      },
    ],
  },
  benefits: {
    title: "サービスの利点",
    items: [
      {
        title: "時間と労力の節約",
        description: "どこにいても、明確な基準に基づいた迅速で直接的な調整が可能です。",
      },
      {
        title: "安心で信頼できる環境",
        description: "対面でもオンラインでも、イスラムの価値観を尊重した完全な監督のもとで行われます。",
      },
      {
        title: "継続的なサポート",
        description: "あらゆる段階で、あなたの質問にお答えし、ご案内するために寄り添います。",
      },
      {
        title: "完全なプライバシー",
        description: "あなたの情報は安全に保管され、サービスの目的のみに使用されます。",
      },
      {
        title: "実際のオフィス+オンラインの選択肢",
        description:
          "アムステルダムにある実際のオフィスがより大きな安心感を与え、オンライン面会はどこにいてもサービスを利用しやすくします。",
      },
    ],
    imageAlt: "夕暮れ時、歴史的な家々が並ぶアムステルダムの運河",
  },
  how: {
    title: "サービスはどのように機能しますか?",
    description:
      "必要なのは、私たちにご連絡いただき、プロフィールとパートナーへの希望条件を共有していただくことだけです。その後の検索はすべて私たちが担当します。そして、お二人にとって都合の良い時間に面会を調整します——アムステルダムのオフィスでの対面、またはオンラインのいずれかです。",
    imageAlt: "運河のほとりに立つ伝統的なオランダの風車",
  },
};

const ko: MeetingCopy = {
  hero: {
    cta: "서비스 구독하기",
    title: "샤리아를 준수하는 직접 만남",
    paragraphs: [
      "샤리아를 준수하는 직접 만남 — 이슬람 가치와 쉽고 의미 있는 소통을 결합한 독특한 결혼 서비스로, 결혼을 원하는 분들이 알맞은 인생의 동반자를 찾도록 돕습니다.",
      "암스테르담에 있는 저희 사무실에서 직접 만나시거나, 유럽 밖에 계신 경우 온라인으로 만나실 수 있습니다. 모든 만남은 가족이 함께한 자리에서 완전한 감독하에 이루어지며, 어디에 계시든 단정함과 존엄을 지키는 명확한 샤리아 지침을 따릅니다.",
    ],
    imageAlt: {
      street: "해질 무렵 자전거와 등불이 있는 조용한 암스테르담의 거리",
      canal: "암스테르담 수로를 따라 늘어선 역사적인 운하 주택들",
      tulips: "암스테르담 운하를 따라 활짝 핀 튤립",
    },
  },
  why: {
    title: "왜 샤리아를 준수하는 직접 만남을 선택해야 할까요?",
    description:
      "Zefaaf에서는 진정으로 당신의 가치관과 원칙을 공유하는 인생의 동반자를 찾는 것이 얼마나 어려운 일인지 잘 알고 있습니다. 그래서 세계 어디에 계시든 안전하고 믿을 수 있는 경험을 제공하기 위해 이 서비스를 만들었습니다.",
    leftBullets: [
      {
        title: "간단하고 즉각적인 소통",
        description: "복잡함 없이 — 저희의 세심한 팀이 모든 단계에서 안내해 드립니다.",
      },
      {
        title: "네덜란드 사무실에서의 실제 만남",
        description: "얼굴을 마주하며 명확하고 열린 마음으로 서로를 알아갈 수 있습니다.",
      },
      {
        title: "네덜란드 외 지역에서의 온라인 만남",
        description: "지리적 제약 없이 동일한 진지함과 샤리아 지침을 유지합니다.",
      },
    ],
    rightBullets: [
      {
        title: "완전한 감독과 가족의 참여",
        description: "당신과 가족을 위한 더 큰 안전, 편안함, 그리고 마음의 평화.",
      },
      {
        title: "당신의 필요에 대한 진심 어린 이해",
        description: "의미 있는 궁합을 찾도록 돕기 위해 저희는 귀 기울여 경청합니다.",
      },
      {
        title: "완전한 개인정보 보호 및 비밀 유지",
        description: "당신의 정보는 안전하게 보관되며 진지한 결혼 의사를 가진 분들에게만 공유됩니다.",
      },
    ],
    cta: "서비스 구독하기",
    badge: "결혼으로 가는 여정을 더 쉽고 빠르게 만들어 드립니다.",
    photoAlt: "해바라기 밭에서 서로를 마주 보고 있는 신혼부부",
  },
  unique: {
    title: "저희 샤리아 준수 만남이 특별한 이유",
    cards: [
      {
        title: "유럽의 실제 장소",
        description: "사적이고 정중한 환경에서 가족과 함께 남녀를 직접 만나보세요.",
      },
      {
        title: "동일한 헌신을 담은 온라인 만남",
        description: "유럽 밖에 계신 분들에게 이상적이며, 대면 만남과 동일한 기준을 유지합니다.",
      },
      {
        title: "간단한 절차",
        description: "원하시는 배우자 조건을 저희와 공유해 주시면, 나머지는 저희가 대신 처리해 드립니다.",
      },
    ],
  },
  benefits: {
    title: "서비스의 장점",
    items: [
      {
        title: "시간과 노력 절약",
        description: "어디에 계시든 명확한 기준에 따라 빠르고 직접적인 조율이 이루어집니다.",
      },
      {
        title: "안전하고 신뢰할 수 있는 환경",
        description: "대면이든 온라인이든, 이슬람 가치를 존중하는 완전한 감독하에 진행됩니다.",
      },
      {
        title: "지속적인 지원",
        description: "질문에 답하고 안내해 드리기 위해 모든 단계에서 함께합니다.",
      },
      {
        title: "완전한 개인정보 보호",
        description: "당신의 정보는 안전하게 보관되며 오직 서비스 목적으로만 사용됩니다.",
      },
      {
        title: "실제 사무실 + 온라인 옵션",
        description:
          "암스테르담에 있는 저희의 실제 사무실은 더 큰 신뢰를 드리며, 온라인 만남은 어디에 계시든 서비스를 이용할 수 있게 해 줍니다.",
      },
    ],
    imageAlt: "해질 무렵 역사적인 주택들이 늘어선 암스테르담의 운하",
  },
  how: {
    title: "서비스는 어떻게 진행되나요?",
    description:
      "저희에게 연락하여 프로필과 원하시는 배우자 조건을 공유해 주시기만 하면 됩니다. 나머지 탐색은 저희가 맡습니다. 그런 다음 두 분 모두에게 편한 시간에 만남을 준비해 드립니다 — 암스테르담 사무실에서의 대면 만남이나 온라인 만남 중 선택하실 수 있습니다.",
    imageAlt: "운하 옆에 있는 전통적인 네덜란드 풍차",
  },
};

const it: MeetingCopy = {
  hero: {
    cta: "Abbonati al servizio",
    title: "Incontri Diretti Conformi alla Sharia",
    paragraphs: [
      "Incontri diretti conformi alla sharia — un servizio matrimoniale unico che unisce i valori islamici a una comunicazione semplice e significativa, aiutando chi cerca il matrimonio a trovare il giusto compagno di vita.",
      "Incontratevi direttamente nel nostro ufficio ad Amsterdam, oppure online se vi trovate fuori dall'Europa. Ogni incontro si svolge sotto piena supervisione, con la presenza dei familiari e linee guida sharia chiare che preservano il pudore e la dignità, ovunque vi troviate.",
    ],
    imageAlt: {
      street: "Una tranquilla strada di Amsterdam con una bicicletta e una lanterna al crepuscolo",
      canal: "Case storiche lungo un canale di Amsterdam",
      tulips: "Tulipani in fiore lungo un canale di Amsterdam",
    },
  },
  why: {
    title: "Perché Scegliere Incontri Diretti Conformi alla Sharia?",
    description:
      "Da Zefaaf comprendiamo le difficoltà nel trovare un compagno di vita che condivida davvero i tuoi valori e principi. Per questo abbiamo creato un'esperienza sicura e affidabile per te, ovunque ti trovi nel mondo.",
    leftBullets: [
      {
        title: "Comunicazione Semplice e Immediata",
        description: "Senza complicazioni — il nostro team di supporto ti accompagna in ogni fase.",
      },
      {
        title: "Incontri Reali nel Nostro Ufficio nei Paesi Bassi",
        description: "Conoscetevi in modo chiaro e aperto, faccia a faccia.",
      },
      {
        title: "Incontri Online Fuori dai Paesi Bassi",
        description: "La stessa serietà e le stesse linee guida sharia, senza limiti geografici.",
      },
    ],
    rightBullets: [
      {
        title: "Piena Supervisione e Presenza della Famiglia",
        description: "Maggiore sicurezza, comfort e serenità per te e la tua famiglia.",
      },
      {
        title: "Una Comprensione Autentica delle Tue Esigenze",
        description: "Ascoltiamo con attenzione per aiutarti a trovare una compatibilità significativa.",
      },
      {
        title: "Privacy e Riservatezza Totali",
        description: "Le tue informazioni vengono conservate in modo sicuro e condivise solo con chi ha serie intenzioni matrimoniali.",
      },
    ],
    cta: "Abbonati al servizio",
    badge: "rendiamo il tuo percorso verso il matrimonio più semplice e veloce.",
    photoAlt: "Una coppia appena sposata l'una di fronte all'altra in un campo di girasoli",
  },
  unique: {
    title: "Cosa Rende Unici i Nostri Incontri Conformi alla Sharia",
    cards: [
      {
        title: "Luoghi Reali in Europa",
        description: "Incontra uomini e donne insieme alle loro famiglie, faccia a faccia, in un ambiente privato e rispettoso.",
      },
      {
        title: "Online con lo Stesso Impegno",
        description: "Ideale se ti trovi fuori dall'Europa, con gli stessi standard degli incontri di persona.",
      },
      {
        title: "Processo Semplice",
        description: "Condividi con noi le tue preferenze sul partner, e ci occuperemo noi del resto per tuo conto.",
      },
    ],
  },
  benefits: {
    title: "Vantaggi del Servizio",
    items: [
      {
        title: "Risparmia Tempo e Fatica",
        description: "Coordinamento rapido e diretto basato su criteri chiari, ovunque tu sia.",
      },
      {
        title: "Ambiente Sicuro e Affidabile",
        description: "Piena supervisione che rispetta i valori islamici, sia di persona che online.",
      },
      {
        title: "Supporto Continuo",
        description: "Siamo al tuo fianco in ogni fase per rispondere alle tue domande e fornirti orientamento.",
      },
      {
        title: "Privacy Totale",
        description: "Le tue informazioni vengono conservate in modo sicuro e utilizzate solo per lo scopo del servizio.",
      },
      {
        title: "Ufficio Reale + Opzione Online",
        description:
          "Il nostro ufficio fisico ad Amsterdam ti offre maggiore fiducia, mentre gli incontri online rendono il servizio accessibile ovunque tu sia.",
      },
    ],
    imageAlt: "Un canale ad Amsterdam fiancheggiato da case storiche al crepuscolo",
  },
  how: {
    title: "Come Funziona il Servizio?",
    description:
      "Tutto ciò che devi fare è contattarci e condividere il tuo profilo e le tue preferenze sul partner; ci occuperemo noi della ricerca. Organizzeremo quindi un incontro in un orario comodo per entrambi — di persona nel nostro ufficio ad Amsterdam oppure online.",
    imageAlt: "Un tradizionale mulino a vento olandese vicino a un canale",
  },
};

const ur: MeetingCopy = {
  hero: {
    cta: "سروس سبسکرائب کریں",
    title: "براہِ راست شرعی ملاقاتیں",
    paragraphs: [
      "براہِ راست شرعی ملاقاتیں — ایک منفرد نکاح سروس جو اسلامی اقدار کو آسان اور بامعنی رابطے کے ساتھ یکجا کرتی ہے، تاکہ نکاح کے خواہشمند افراد کو صحیح زندگی کا ساتھی تلاش کرنے میں مدد ملے۔",
      "براہِ راست ہمارے ایمسٹرڈیم آفس میں ملاقات کریں، یا اگر آپ یورپ سے باہر ہیں تو آن لائن۔ ہر ملاقات مکمل نگرانی میں، خاندان کے افراد کی موجودگی میں اور واضح شرعی رہنما اصولوں کے مطابق ہوتی ہے، جو آپ جہاں بھی ہوں شائستگی اور وقار کو برقرار رکھتے ہیں۔",
    ],
    imageAlt: {
      street: "شام کے وقت سائیکل اور لالٹین کے ساتھ ایمسٹرڈیم کی ایک پرسکون گلی",
      canal: "ایمسٹرڈیم کے آبی راستے کے کنارے تاریخی نہری مکانات",
      tulips: "ایمسٹرڈیم کی نہر کے کنارے کھلے ہوئے ٹیولپ کے پھول",
    },
  },
  why: {
    title: "براہِ راست شرعی ملاقاتیں کیوں منتخب کریں؟",
    description:
      "زفاف میں، ہم اس مشکل کو سمجھتے ہیں کہ ایسا زندگی کا ساتھی تلاش کرنا جو واقعی آپ کی اقدار اور اصولوں میں شریک ہو کتنا مشکل ہے۔ اسی لیے ہم نے آپ کے لیے ایک محفوظ اور قابلِ اعتماد تجربہ تخلیق کیا ہے، آپ دنیا میں کہیں بھی ہوں۔",
    leftBullets: [
      {
        title: "آسان اور فوری رابطہ",
        description: "کوئی پیچیدگی نہیں — ہماری معاون ٹیم ہر قدم پر آپ کی رہنمائی کرتی ہے۔",
      },
      {
        title: "ہمارے نیدرلینڈز آفس میں حقیقی ملاقاتیں",
        description: "واضح اور کھلے انداز میں، آمنے سامنے ایک دوسرے کو جانیں۔",
      },
      {
        title: "نیدرلینڈز سے باہر آن لائن ملاقاتیں",
        description: "بغیر کسی جغرافیائی حد کے، وہی سنجیدگی اور شرعی رہنما اصول۔",
      },
    ],
    rightBullets: [
      {
        title: "مکمل نگرانی اور خاندان کی موجودگی",
        description: "آپ اور آپ کے خاندان کے لیے زیادہ حفاظت، سکون اور اطمینانِ قلب۔",
      },
      {
        title: "آپ کی ضروریات کی حقیقی سمجھ",
        description: "ہم بغور سنتے ہیں تاکہ آپ کو بامعنی مطابقت تلاش کرنے میں مدد مل سکے۔",
      },
      {
        title: "مکمل رازداری اور خفیہ نگہداری",
        description: "آپ کی معلومات محفوظ رکھی جاتی ہیں اور صرف نکاح کے سنجیدہ ارادے رکھنے والوں کے ساتھ شیئر کی جاتی ہیں۔",
      },
    ],
    cta: "سروس سبسکرائب کریں",
    badge: "نکاح کی طرف آپ کا سفر آسان اور تیز تر بناتے ہیں۔",
    photoAlt: "ایک نئے شادی شدہ جوڑا سورج مکھی کے کھیت میں ایک دوسرے کے سامنے کھڑا ہے",
  },
  unique: {
    title: "کیا چیز ہماری شرعی ملاقاتوں کو منفرد بناتی ہے",
    cards: [
      {
        title: "یورپ میں حقیقی مقامات",
        description: "نجی اور باوقار ماحول میں مردوں اور عورتوں سے ان کے خاندانوں کے ساتھ آمنے سامنے ملاقات کریں۔",
      },
      {
        title: "اسی عہد کے ساتھ آن لائن",
        description: "اگر آپ یورپ سے باہر ہیں تو مثالی، بالمشافہ ملاقاتوں جیسے ہی معیار کے ساتھ۔",
      },
      {
        title: "آسان طریقہ کار",
        description: "اپنی پسند کے ساتھی کی ترجیحات ہمارے ساتھ شیئر کریں، اور باقی سب کچھ ہم آپ کی جانب سے سنبھالیں گے۔",
      },
    ],
  },
  benefits: {
    title: "سروس کے فوائد",
    items: [
      {
        title: "وقت اور محنت کی بچت",
        description: "واضح معیار کی بنیاد پر تیز، براہِ راست ہم آہنگی، آپ جہاں بھی ہوں۔",
      },
      {
        title: "محفوظ اور قابلِ اعتماد ماحول",
        description: "مکمل نگرانی جو اسلامی اقدار کا احترام کرتی ہے، چاہے بالمشافہ ہو یا آن لائن۔",
      },
      {
        title: "مسلسل معاونت",
        description: "آپ کے سوالات کے جوابات دینے اور رہنمائی فراہم کرنے کے لیے ہم ہر مرحلے پر آپ کے ساتھ ہیں۔",
      },
      {
        title: "مکمل رازداری",
        description: "آپ کی معلومات محفوظ رکھی جاتی ہیں اور صرف سروس کے مقصد کے لیے استعمال ہوتی ہیں۔",
      },
      {
        title: "حقیقی آفس + آن لائن آپشن",
        description:
          "ایمسٹرڈیم میں ہمارا حقیقی آفس آپ کو زیادہ اعتماد دیتا ہے، جبکہ آن لائن ملاقاتیں سروس کو آپ جہاں بھی ہوں قابلِ رسائی بناتی ہیں۔",
      },
    ],
    imageAlt: "شام کے وقت تاریخی مکانات سے گھری ایمسٹرڈیم کی ایک نہر",
  },
  how: {
    title: "سروس کیسے کام کرتی ہے؟",
    description:
      "آپ کو صرف ہم سے رابطہ کرنا ہے، اپنا پروفائل اور ساتھی کی ترجیحات شیئر کرنی ہیں، اور تلاش کا کام ہم سنبھالیں گے۔ اس کے بعد ہم آپ دونوں کے لیے موزوں وقت پر ملاقات کا انتظام کریں گے — یا تو بالمشافہ ہمارے ایمسٹرڈیم آفس میں یا آن لائن۔",
    imageAlt: "نہر کے کنارے ایک روایتی ڈچ ہوا چکی",
  },
};

const ta: MeetingCopy = {
  hero: {
    cta: "சேவையில் குழுசேரவும்",
    title: "நேரடி ஷரியா இணக்க சந்திப்புகள்",
    paragraphs: [
      "நேரடி ஷரியா இணக்க சந்திப்புகள் — இஸ்லாமிய விழுமியங்களை எளிய, அர்த்தமுள்ள தொடர்புடன் இணைக்கும் தனித்துவமான திருமண சேவை, திருமணத்தை நாடுவோர் சரியான வாழ்க்கைத் துணையை கண்டறிய உதவுகிறது.",
      "ஆம்ஸ்டர்டாமில் உள்ள எங்கள் அலுவலகத்தில் நேரடியாக சந்திக்கவும், அல்லது நீங்கள் ஐரோப்பாவிற்கு வெளியே இருந்தால் ஆன்லைனில். ஒவ்வொரு சந்திப்பும் முழு மேற்பார்வையின் கீழ், குடும்ப உறுப்பினர்கள் முன்னிலையில், நீங்கள் எங்கிருந்தாலும் கண்ணியத்தையும் மரியாதையையும் பாதுகாக்கும் தெளிவான ஷரியா வழிகாட்டுதல்களுடன் நடைபெறுகிறது.",
    ],
    imageAlt: {
      street: "மாலை நேரத்தில் ஒரு சைக்கிள் மற்றும் விளக்குடன் அமைதியான ஆம்ஸ்டர்டாம் தெரு",
      canal: "ஆம்ஸ்டர்டாம் நீர்வழி ஓரம் வரலாற்று சிறப்புமிக்க கால்வாய் வீடுகள்",
      tulips: "ஆம்ஸ்டர்டாம் கால்வாய் ஓரம் பூத்திருக்கும் டூலிப் பூக்கள்",
    },
  },
  why: {
    title: "நேரடி ஷரியா இணக்க சந்திப்புகளை ஏன் தேர்வு செய்ய வேண்டும்?",
    description:
      "ஜெஃபாஃப்-இல், உங்கள் மதிப்புகளையும் கொள்கைகளையும் உண்மையிலேயே பகிர்ந்து கொள்ளும் வாழ்க்கைத் துணையைக் கண்டறிவதன் சவால்களை நாங்கள் புரிந்துகொள்கிறோம். அதனால்தான் நீங்கள் உலகில் எங்கிருந்தாலும் உங்களுக்காக பாதுகாப்பான, நம்பகமான அனுபவத்தை உருவாக்கியுள்ளோம்.",
    leftBullets: [
      {
        title: "எளிய மற்றும் உடனடி தொடர்பு",
        description: "எந்த சிக்கலும் இல்லை — எங்கள் ஆதரவான குழு ஒவ்வொரு படியிலும் உங்களை வழிநடத்துகிறது.",
      },
      {
        title: "நெதர்லாந்தில் உள்ள எங்கள் அலுவலகத்தில் உண்மையான சந்திப்புகள்",
        description: "தெளிவாகவும் திறந்த மனதுடனும், நேருக்கு நேர் ஒருவரையொருவர் அறிந்துகொள்ளுங்கள்.",
      },
      {
        title: "நெதர்லாந்திற்கு வெளியே ஆன்லைன் சந்திப்புகள்",
        description: "புவியியல் வரம்புகள் இன்றி, அதே தீவிரமும் ஷரியா வழிகாட்டுதல்களும்.",
      },
    ],
    rightBullets: [
      {
        title: "முழு மேற்பார்வை மற்றும் குடும்ப முன்னிலை",
        description: "உங்களுக்கும் உங்கள் குடும்பத்திற்கும் அதிக பாதுகாப்பு, வசதி மற்றும் மன அமைதி.",
      },
      {
        title: "உங்கள் தேவைகளின் உண்மையான புரிதல்",
        description: "அர்த்தமுள்ள பொருத்தத்தை கண்டறிய உதவ நாங்கள் கவனமாக செவிமடுக்கிறோம்.",
      },
      {
        title: "முழுமையான தனியுரிமை மற்றும் இரகசியத்தன்மை",
        description: "உங்கள் தகவல் பாதுகாப்பாக வைக்கப்படுகிறது, திருமணத்தில் தீவிரமான நோக்கம் கொண்டவர்களுடன் மட்டுமே பகிரப்படுகிறது.",
      },
    ],
    cta: "சேவையில் குழுசேரவும்",
    badge: "திருமணத்தை நோக்கிய உங்கள் பயணத்தை எளிதாகவும் வேகமாகவும் ஆக்குகிறோம்.",
    photoAlt: "புதிதாக திருமணமான ஜோடி சூரியகாந்தி வயலில் ஒருவரையொருவர் நோக்கி நிற்கிறார்கள்",
  },
  unique: {
    title: "எங்கள் ஷரியா இணக்க சந்திப்புகளை தனித்துவமாக்குவது என்ன",
    cards: [
      {
        title: "ஐரோப்பாவில் உண்மையான இடங்கள்",
        description: "தனிப்பட்ட, மரியாதைக்குரிய சூழலில் ஆண்களையும் பெண்களையும் அவர்களது குடும்பத்துடன் நேருக்கு நேர் சந்திக்கவும்.",
      },
      {
        title: "அதே அர்ப்பணிப்புடன் ஆன்லைனில்",
        description: "நீங்கள் ஐரோப்பாவிற்கு வெளியே இருந்தால் சிறந்தது, நேரடி சந்திப்புகளின் அதே தரத்துடன்.",
      },
      {
        title: "எளிய செயல்முறை",
        description: "உங்கள் துணை விருப்பங்களை எங்களுடன் பகிரவும், மீதமுள்ளதை உங்களுக்காக நாங்கள் கவனித்துக்கொள்வோம்.",
      },
    ],
  },
  benefits: {
    title: "சேவையின் நன்மைகள்",
    items: [
      {
        title: "நேரத்தையும் முயற்சியையும் சேமிக்கவும்",
        description: "நீங்கள் எங்கிருந்தாலும், தெளிவான அளவுகோல்களின் அடிப்படையில் விரைவான, நேரடி ஒருங்கிணைப்பு.",
      },
      {
        title: "பாதுகாப்பான, நம்பகமான சூழல்",
        description: "நேரடியாக இருந்தாலும் ஆன்லைனில் இருந்தாலும், இஸ்லாமிய மதிப்புகளை மதிக்கும் முழு மேற்பார்வை.",
      },
      {
        title: "தொடர்ச்சியான ஆதரவு",
        description: "உங்கள் கேள்விகளுக்கு பதிலளிக்கவும் வழிகாட்டவும் ஒவ்வொரு கட்டத்திலும் நாங்கள் உங்களுடன் இருக்கிறோம்.",
      },
      {
        title: "முழுமையான தனியுரிமை",
        description: "உங்கள் தகவல் பாதுகாப்பாக வைக்கப்பட்டு, சேவையின் நோக்கத்திற்காக மட்டுமே பயன்படுத்தப்படுகிறது.",
      },
      {
        title: "உண்மையான அலுவலகம் + ஆன்லைன் விருப்பம்",
        description:
          "ஆம்ஸ்டர்டாமில் உள்ள எங்கள் இயற்பியல் அலுவலகம் உங்களுக்கு அதிக நம்பிக்கையை அளிக்கிறது, ஆன்லைன் சந்திப்புகள் நீங்கள் எங்கிருந்தாலும் சேவையை அணுகக்கூடியதாக ஆக்குகின்றன.",
      },
    ],
    imageAlt: "மாலை நேரத்தில் வரலாற்று சிறப்புமிக்க வீடுகளால் அணிசெய்யப்பட்ட ஆம்ஸ்டர்டாம் கால்வாய்",
  },
  how: {
    title: "சேவை எவ்வாறு செயல்படுகிறது?",
    description:
      "நீங்கள் செய்ய வேண்டியது எங்களை தொடர்பு கொள்வதும், உங்கள் விவரக்குறிப்பையும் துணை விருப்பங்களையும் பகிர்வதும் மட்டுமே; தேடலை நாங்கள் கவனித்துக்கொள்வோம். பின்னர் உங்கள் இருவருக்கும் வசதியான நேரத்தில் ஒரு சந்திப்பை ஏற்பாடு செய்வோம் — ஆம்ஸ்டர்டாமில் உள்ள எங்கள் அலுவலகத்தில் நேரடியாக அல்லது ஆன்லைனில்.",
    imageAlt: "கால்வாய் அருகே ஒரு பாரம்பரிய டச்சு காற்றாலை",
  },
};

const am: MeetingCopy = {
  hero: {
    cta: "አገልግሎቱን ይመዝገቡ",
    title: "ቀጥተኛ የሸሪዓ ተኳሃኝ ስብሰባዎች",
    paragraphs: [
      "ቀጥተኛ የሸሪዓ ተኳሃኝ ስብሰባዎች — እስላማዊ እሴቶችን ከቀላል እና ትርጉም ካለው ግንኙነት ጋር የሚያዋህድ ልዩ የጋብቻ አገልግሎት፣ ጋብቻን የሚፈልጉ ትክክለኛውን የህይወት አጋር እንዲያገኙ የሚያግዝ።",
      "በአምስተርዳም ቢሮአችን ውስጥ በቀጥታ ይገናኙ፣ ወይም ከአውሮፓ ውጭ ከሆኑ በመስመር ላይ። እያንዳንዱ ስብሰባ በሙሉ ቁጥጥር ስር፣ የቤተሰብ አባላት በተገኙበት እና የት እንደሆኑ ልከኝነትን እና ክብርን በሚጠብቁ ግልጽ የሸሪዓ መመሪያዎች መሠረት ይካሄዳል።",
    ],
    imageAlt: {
      street: "በምሽት ብስክሌት እና መብራት ያለበት ጸጥ ያለ የአምስተርዳም ጎዳና",
      canal: "በአምስተርዳም የውሃ መስመር ዳር የሚገኙ ታሪካዊ የቦይ ቤቶች",
      tulips: "በአምስተርዳም ቦይ ዳር የሚያብቡ ቱሊፕ አበቦች",
    },
  },
  why: {
    title: "ለምን ቀጥተኛ የሸሪዓ ተኳሃኝ ስብሰባዎችን ይመርጣሉ?",
    description:
      "በዘፋአፍ፣ በእውነት እሴቶችዎን እና መርሆዎችዎን የሚጋራ የህይወት አጋር ማግኘት ያለውን ፈተና እንረዳለን። ለዚህም ነው በዓለም ላይ የትም ቢሆኑ ደህንነቱ የተጠበቀ እና ታማኝ ተሞክሮ የፈጠርንልዎት።",
    leftBullets: [
      {
        title: "ቀላል እና ፈጣን ግንኙነት",
        description: "ምንም ችግር የለም — ደጋፊ ቡድናችን በእያንዳንዱ ደረጃ ይመራዎታል።",
      },
      {
        title: "በኔዘርላንድስ ቢሮአችን ውስጥ ትክክለኛ ስብሰባዎች",
        description: "ፊት ለፊት፣ በግልጽ እና በተከፈተ መንፈስ እርስ በርስ ይተዋወቁ።",
      },
      {
        title: "ከኔዘርላንድስ ውጭ የመስመር ላይ ስብሰባዎች",
        description: "ያለ ምንም ጂኦግራፊያዊ ገደብ፣ ተመሳሳይ ቁርጠኝነት እና የሸሪዓ መመሪያዎች።",
      },
    ],
    rightBullets: [
      {
        title: "ሙሉ ቁጥጥር እና የቤተሰብ ተገኝነት",
        description: "ለእርስዎ እና ለቤተሰብዎ የበለጠ ደህንነት፣ ምቾት እና የአእምሮ ሰላም።",
      },
      {
        title: "ለፍላጎቶችዎ እውነተኛ ግንዛቤ",
        description: "ትርጉም ያለው ተስማሚነት እንዲያገኙ ለመርዳት በጥንቃቄ እናዳምጣለን።",
      },
      {
        title: "ሙሉ ግላዊነት እና ሚስጥራዊነት",
        description: "መረጃዎ በደህንነት ይቀመጣል እና ለቁም ነገር የጋብቻ ፍላጎት ላላቸው ብቻ ይጋራል።",
      },
    ],
    cta: "አገልግሎቱን ይመዝገቡ",
    badge: "ወደ ጋብቻ የሚወስደውን ጉዞዎን ቀላል እና ፈጣን እናደርጋለን።",
    photoAlt: "አዲስ ተጋቢ ጥንዶች በሱፍ አበባ እርሻ ውስጥ እርስ በርስ ፊት ለፊት ቆመው",
  },
  unique: {
    title: "የእኛን የሸሪዓ ተኳሃኝ ስብሰባዎች ልዩ የሚያደርገው ምንድን ነው",
    cards: [
      {
        title: "በአውሮፓ ውስጥ ትክክለኛ ቦታዎች",
        description: "ወንዶችን እና ሴቶችን ከቤተሰቦቻቸው ጋር ፊት ለፊት፣ በግላዊ እና በአክብሮት በተሞላ አካባቢ ያግኙ።",
      },
      {
        title: "በተመሳሳይ ቁርጠኝነት በመስመር ላይ",
        description: "ከአውሮፓ ውጭ ከሆኑ ተስማሚ፣ ከአካላዊ ስብሰባዎች ጋር ተመሳሳይ ደረጃዎች ያሉት።",
      },
      {
        title: "ቀላል ሂደት",
        description: "የአጋር ምርጫዎችዎን ከእኛ ጋር ያካፍሉ፣ የተቀረውን በእርስዎ ስም እኛ እናስተናግዳለን።",
      },
    ],
  },
  benefits: {
    title: "የአገልግሎቱ ጥቅሞች",
    items: [
      {
        title: "ጊዜ እና ጥረት ይቆጥቡ",
        description: "የት እንደሆኑ ምንም ይሁን፣ በግልጽ መስፈርቶች ላይ የተመሠረተ ፈጣን፣ ቀጥተኛ ቅንጅት።",
      },
      {
        title: "ደህንነቱ የተጠበቀ እና ታማኝ አካባቢ",
        description: "ፊት ለፊት ወይም በመስመር ላይ ቢሆንም እስላማዊ እሴቶችን የሚያከብር ሙሉ ቁጥጥር።",
      },
      {
        title: "ቀጣይነት ያለው ድጋፍ",
        description: "ጥያቄዎችዎን ለመመለስ እና መመሪያ ለመስጠት በእያንዳንዱ ደረጃ ከእርስዎ ጋር ነን።",
      },
      {
        title: "ሙሉ ግላዊነት",
        description: "መረጃዎ በደህንነት ይቀመጣል እና ለአገልግሎቱ ዓላማ ብቻ ጥቅም ላይ ይውላል።",
      },
      {
        title: "ትክክለኛ ቢሮ + የመስመር ላይ አማራጭ",
        description:
          "በአምስተርዳም ያለው አካላዊ ቢሮአችን የበለጠ መተማመንን ይሰጥዎታል፣ የመስመር ላይ ስብሰባዎች ደግሞ የት እንደሆኑ ምንም ይሁን አገልግሎቱን ተደራሽ ያደርጋሉ።",
      },
    ],
    imageAlt: "በምሽት ታሪካዊ ቤቶች የተከበበ በአምስተርዳም ውስጥ ያለ ቦይ",
  },
  how: {
    title: "አገልግሎቱ እንዴት ይሠራል?",
    description:
      "እርስዎ ማድረግ ያለብዎት ከእኛ ጋር መገናኘት፣ መገለጫዎን እና የአጋር ምርጫዎችዎን ማካፈል ብቻ ነው፤ ፍለጋውን እኛ እናደርጋለን። ከዚያም ለሁለታችሁም በሚስማማ ጊዜ ስብሰባ እናዘጋጃለን — ወይ በአካል በአምስተርዳም ቢሮአችን ውስጥ ወይም በመስመር ላይ።",
    imageAlt: "በቦይ አጠገብ የሚገኝ ባህላዊ የደች የንፋስ ወፍጮ",
  },
};

const sv: MeetingCopy = {
  hero: {
    cta: "Prenumerera på tjänsten",
    title: "Direkta Shariaenliga Möten",
    paragraphs: [
      "Direkta shariaenliga möten — en unik äktenskapstjänst som förenar islamiska värderingar med enkel och meningsfull kommunikation, för att hjälpa dem som söker äktenskap att hitta rätt livspartner.",
      "Träffas direkt på vårt kontor i Amsterdam, eller online om du befinner dig utanför Europa. Varje möte sker under fullständig övervakning, med familjemedlemmar närvarande och tydliga sharia-riktlinjer som bevarar anständighet och värdighet, var du än befinner dig.",
    ],
    imageAlt: {
      street: "En stilla amsterdamsk gata med en cykel och en lykta i skymningen",
      canal: "Historiska kanalhus längs en amsterdamsk vattenväg",
      tulips: "Tulpaner i blom längs en amsterdamsk kanal",
    },
  },
  why: {
    title: "Varför Välja Direkta Shariaenliga Möten?",
    description:
      "På Zefaaf förstår vi utmaningarna i att hitta en livspartner som verkligen delar dina värderingar och principer. Därför har vi skapat en trygg och pålitlig upplevelse för dig, var du än befinner dig i världen.",
    leftBullets: [
      {
        title: "Enkel & Omedelbar Kommunikation",
        description: "Utan krångel — vårt stödjande team vägleder dig i varje steg.",
      },
      {
        title: "Verkliga Möten på Vårt Kontor i Nederländerna",
        description: "Lär känna varandra tydligt och öppet, ansikte mot ansikte.",
      },
      {
        title: "Onlinemöten Utanför Nederländerna",
        description: "Samma allvar och sharia-riktlinjer, utan geografiska gränser.",
      },
    ],
    rightBullets: [
      {
        title: "Full Övervakning & Familjens Närvaro",
        description: "Större trygghet, komfort och sinnesro för dig och din familj.",
      },
      {
        title: "En Genuin Förståelse för Dina Behov",
        description: "Vi lyssnar noggrant för att hjälpa dig hitta meningsfull kompatibilitet.",
      },
      {
        title: "Fullständig Sekretess & Integritet",
        description: "Din information hålls säker och delas endast med personer med seriösa äktenskapsavsikter.",
      },
    ],
    cta: "Prenumerera på tjänsten",
    badge: "vi gör din resa mot äktenskap enklare och snabbare.",
    photoAlt: "Ett nygift par som står mitt emot varandra i ett solrosfält",
  },
  unique: {
    title: "Vad Som Gör Våra Shariaenliga Möten Unika",
    cards: [
      {
        title: "Verkliga Platser i Europa",
        description: "Träffa män och kvinnor tillsammans med deras familjer ansikte mot ansikte i en privat och respektfull miljö.",
      },
      {
        title: "Online med Samma Engagemang",
        description: "Idealiskt om du befinner dig utanför Europa, med samma standarder som fysiska möten.",
      },
      {
        title: "Enkel Process",
        description: "Dela dina partnerpreferenser med oss, så tar vi hand om resten å dina vägnar.",
      },
    ],
  },
  benefits: {
    title: "Fördelar med Tjänsten",
    items: [
      {
        title: "Spara Tid & Ansträngning",
        description: "Snabb, direkt koordinering baserad på tydliga kriterier, var du än befinner dig.",
      },
      {
        title: "Trygg & Pålitlig Miljö",
        description: "Full övervakning som respekterar islamiska värderingar, oavsett om det sker fysiskt eller online.",
      },
      {
        title: "Kontinuerligt Stöd",
        description: "Vi finns vid din sida i varje steg för att besvara dina frågor och ge vägledning.",
      },
      {
        title: "Fullständig Sekretess",
        description: "Din information hålls säker och används endast för tjänstens syfte.",
      },
      {
        title: "Verkligt Kontor + Onlinealternativ",
        description:
          "Vårt fysiska kontor i Amsterdam ger dig större förtroende, medan onlinemöten gör tjänsten tillgänglig var du än befinner dig.",
      },
    ],
    imageAlt: "En kanal i Amsterdam kantad av historiska hus i skymningen",
  },
  how: {
    title: "Hur Fungerar Tjänsten?",
    description:
      "Allt du behöver göra är att kontakta oss, dela din profil och dina partnerpreferenser, så tar vi hand om sökandet. Vi ordnar sedan ett möte vid en tidpunkt som passar er båda — antingen personligen på vårt kontor i Amsterdam eller online.",
    imageAlt: "En traditionell holländsk väderkvarn intill en kanal",
  },
};

const da: MeetingCopy = {
  hero: {
    cta: "Abonnér på tjenesten",
    title: "Direkte Sharia-Kompatible Møder",
    paragraphs: [
      "Direkte sharia-kompatible møder — en unik ægteskabstjeneste, der kombinerer islamiske værdier med enkel og meningsfuld kommunikation, for at hjælpe dem, der søger ægteskab, med at finde den rette livspartner.",
      "Mødes direkte på vores kontor i Amsterdam, eller online hvis du befinder dig uden for Europa. Hvert møde foregår under fuld overvågning, med familiemedlemmer til stede og klare sharia-retningslinjer, der bevarer beskedenhed og værdighed, uanset hvor du befinder dig.",
    ],
    imageAlt: {
      street: "En rolig amsterdamsk gade med en cykel og en lygte ved skumring",
      canal: "Historiske kanalhuse langs en amsterdamsk vandvej",
      tulips: "Blomstrende tulipaner langs en amsterdamsk kanal",
    },
  },
  why: {
    title: "Hvorfor Vælge Direkte Sharia-Kompatible Møder?",
    description:
      "Hos Zefaaf forstår vi udfordringerne ved at finde en livspartner, der virkelig deler dine værdier og principper. Derfor har vi skabt en tryg og pålidelig oplevelse for dig, uanset hvor du befinder dig i verden.",
    leftBullets: [
      {
        title: "Enkel & Øjeblikkelig Kommunikation",
        description: "Ingen komplikationer — vores støttende team guider dig gennem hvert trin.",
      },
      {
        title: "Ægte Møder på Vores Kontor i Holland",
        description: "Lær hinanden at kende klart og åbent, ansigt til ansigt.",
      },
      {
        title: "Onlinemøder Uden for Holland",
        description: "Samme alvor og sharia-retningslinjer, uden geografiske grænser.",
      },
    ],
    rightBullets: [
      {
        title: "Fuld Overvågning & Familiens Tilstedeværelse",
        description: "Større tryghed, komfort og sindsro for dig og din familie.",
      },
      {
        title: "En Ægte Forståelse af Dine Behov",
        description: "Vi lytter omhyggeligt for at hjælpe dig med at finde meningsfuld kompatibilitet.",
      },
      {
        title: "Fuldstændig Privatliv & Fortrolighed",
        description: "Dine oplysninger opbevares sikkert og deles kun med personer med seriøse ægteskabshensigter.",
      },
    ],
    cta: "Abonnér på tjenesten",
    badge: "vi gør din vej til ægteskab lettere og hurtigere.",
    photoAlt: "Et nygift par, der står over for hinanden i en solsikkemark",
  },
  unique: {
    title: "Hvad Gør Vores Sharia-Kompatible Møder Unikke",
    cards: [
      {
        title: "Ægte Steder i Europa",
        description: "Mød mænd og kvinder sammen med deres familier ansigt til ansigt i private og respektfulde omgivelser.",
      },
      {
        title: "Online med Samme Engagement",
        description: "Ideelt hvis du er uden for Europa, med samme standarder som personlige møder.",
      },
      {
        title: "Enkel Proces",
        description: "Del dine partnerpræferencer med os, så tager vi os af resten på dine vegne.",
      },
    ],
  },
  benefits: {
    title: "Fordele ved Tjenesten",
    items: [
      {
        title: "Spar Tid & Kræfter",
        description: "Hurtig, direkte koordinering baseret på klare kriterier, uanset hvor du befinder dig.",
      },
      {
        title: "Trygt & Pålideligt Miljø",
        description: "Fuld overvågning, der respekterer islamiske værdier, uanset om det er personligt eller online.",
      },
      {
        title: "Løbende Støtte",
        description: "Vi er med dig i hvert trin for at besvare dine spørgsmål og give vejledning.",
      },
      {
        title: "Fuldstændigt Privatliv",
        description: "Dine oplysninger opbevares sikkert og bruges kun til tjenestens formål.",
      },
      {
        title: "Ægte Kontor + Onlinemulighed",
        description:
          "Vores fysiske kontor i Amsterdam giver dig større tillid, mens onlinemøder gør tjenesten tilgængelig, uanset hvor du befinder dig.",
      },
    ],
    imageAlt: "En kanal i Amsterdam omgivet af historiske huse ved skumring",
  },
  how: {
    title: "Hvordan Fungerer Tjenesten?",
    description:
      "Alt, du skal gøre, er at kontakte os, dele din profil og dine partnerpræferencer, så tager vi os af søgningen. Vi arrangerer derefter et møde på et tidspunkt, der passer jer begge — enten personligt på vores kontor i Amsterdam eller online.",
    imageAlt: "En traditionel hollandsk vindmølle ved siden af en kanal",
  },
};

const sq: MeetingCopy = {
  hero: {
    cta: "Abonohuni në shërbim",
    title: "Takime të Drejtpërdrejta në Përputhje me Sheriatin",
    paragraphs: [
      "Takime të drejtpërdrejta në përputhje me sheriatin — një shërbim martese unik që bashkon vlerat islame me komunikim të thjeshtë dhe kuptimplotë, duke ndihmuar ata që kërkojnë martesë të gjejnë partnerin e duhur për jetën.",
      "Takohuni drejtpërdrejt në zyrën tonë në Amsterdam, ose online nëse ndodheni jashtë Evropës. Çdo takim zhvillohet nën mbikëqyrje të plotë, me praninë e anëtarëve të familjes dhe udhëzime të qarta sheriati që ruajnë modestinë dhe dinjitetin, kudo që të ndodheni.",
    ],
    imageAlt: {
      street: "Një rrugë e qetë e Amsterdamit me një biçikletë dhe një fener në muzg",
      canal: "Shtëpi historike përgjatë një kanali të Amsterdamit",
      tulips: "Tulipanë të lulëzuar përgjatë një kanali të Amsterdamit",
    },
  },
  why: {
    title: "Pse të Zgjidhni Takime të Drejtpërdrejta në Përputhje me Sheriatin?",
    description:
      "Në Zefaaf, ne i kuptojmë sfidat e gjetjes së një partneri jete që vërtet ndan vlerat dhe parimet tuaja. Prandaj kemi krijuar për ju një përvojë të sigurt dhe të besueshme, kudo që të ndodheni në botë.",
    leftBullets: [
      {
        title: "Komunikim i Thjeshtë dhe i Menjëhershëm",
        description: "Pa ndërlikime — ekipi ynë mbështetës ju udhëheq në çdo hap.",
      },
      {
        title: "Takime të Vërteta në Zyrën Tonë në Holandë",
        description: "Njihuni qartë dhe hapur, sy më sy.",
      },
      {
        title: "Takime Online Jashtë Holandës",
        description: "E njëjta seriozitet dhe udhëzime sheriati, pa kufij gjeografikë.",
      },
    ],
    rightBullets: [
      {
        title: "Mbikëqyrje e Plotë dhe Prania e Familjes",
        description: "Më shumë siguri, rehati dhe qetësi shpirtërore për ju dhe familjen tuaj.",
      },
      {
        title: "Një Kuptim i Vërtetë i Nevojave Tuaja",
        description: "Ne dëgjojmë me kujdes për t'ju ndihmuar të gjeni përputhshmëri kuptimplote.",
      },
      {
        title: "Privatësi dhe Konfidencialitet i Plotë",
        description: "Informacioni juaj ruhet i sigurt dhe ndahet vetëm me ata që kanë synime serioze për martesë.",
      },
    ],
    cta: "Abonohuni në shërbim",
    badge: "e bëjmë udhëtimin tuaj drejt martesës më të lehtë dhe më të shpejtë.",
    photoAlt: "Një çift i sapo martuar përballë njëri-tjetrit në një fushë me lulediell",
  },
  unique: {
    title: "Çfarë i Bën Unike Takimet Tona në Përputhje me Sheriatin",
    cards: [
      {
        title: "Vende të Vërteta në Evropë",
        description: "Takoni burra dhe gra së bashku me familjet e tyre, sy më sy, në një mjedis privat dhe të respektueshëm.",
      },
      {
        title: "Online me të Njëjtin Përkushtim",
        description: "Ideale nëse jeni jashtë Evropës, me të njëjtat standarde si takimet ballë për ballë.",
      },
      {
        title: "Proces i Thjeshtë",
        description: "Ndani me ne preferencat tuaja për partnerin, dhe ne do të kujdesemi për pjesën tjetër në emrin tuaj.",
      },
    ],
  },
  benefits: {
    title: "Përfitimet e Shërbimit",
    items: [
      {
        title: "Kurseni Kohë dhe Përpjekje",
        description: "Koordinim i shpejtë dhe i drejtpërdrejtë bazuar në kritere të qarta, kudo që të ndodheni.",
      },
      {
        title: "Mjedis i Sigurt dhe i Besueshëm",
        description: "Mbikëqyrje e plotë që respekton vlerat islame, qoftë personalisht apo online.",
      },
      {
        title: "Mbështetje e Vazhdueshme",
        description: "Jemi me ju në çdo fazë për t'iu përgjigjur pyetjeve tuaja dhe për t'ju udhëzuar.",
      },
      {
        title: "Privatësi e Plotë",
        description: "Informacioni juaj ruhet i sigurt dhe përdoret vetëm për qëllimin e shërbimit.",
      },
      {
        title: "Zyrë e Vërtetë + Opsion Online",
        description:
          "Zyra jonë fizike në Amsterdam ju jep më shumë besim, ndërsa takimet online e bëjnë shërbimin të arritshëm kudo që të ndodheni.",
      },
    ],
    imageAlt: "Një kanal në Amsterdam i rrethuar nga shtëpi historike në muzg",
  },
  how: {
    title: "Si Funksionon Shërbimi?",
    description:
      "Gjithçka që duhet të bëni është të na kontaktoni, të ndani profilin tuaj dhe preferencat për partnerin, dhe ne do të kujdesemi për kërkimin. Më pas do të organizojmë një takim në një kohë që u përshtatet të dyve — ose personalisht në zyrën tonë në Amsterdam ose online.",
    imageAlt: "Një mulli tradicional holandez i erës pranë një kanali",
  },
};

const uz: MeetingCopy = {
  hero: {
    cta: "Xizmatga obuna bo'ling",
    title: "To'g'ridan-to'g'ri Shariatga Mos Uchrashuvlar",
    paragraphs: [
      "To'g'ridan-to'g'ri shariatga mos uchrashuvlar — islomiy qadriyatlarni oddiy va mazmunli muloqot bilan birlashtiruvchi noyob nikoh xizmati bo'lib, nikohni istaganlarga to'g'ri hayotiy sherikni topishda yordam beradi.",
      "Amsterdamdagi ofisimizda to'g'ridan-to'g'ri uchrashing yoki Yevropadan tashqarida bo'lsangiz, onlayn tarzda. Har bir uchrashuv oila a'zolari ishtirokida va qayerda bo'lishingizdan qat'i nazar ibo va qadr-qimmatni saqlaydigan aniq shariat qoidalariga muvofiq, to'liq nazorat ostida o'tkaziladi.",
    ],
    imageAlt: {
      street: "Kechqurun velosiped va fonar bilan tinch Amsterdam ko'chasi",
      canal: "Amsterdam suv yo'li bo'ylab tarixiy kanal uylari",
      tulips: "Amsterdam kanali bo'ylab gullagan lolalar",
    },
  },
  why: {
    title: "Nima Uchun To'g'ridan-to'g'ri Shariatga Mos Uchrashuvlarni Tanlash Kerak?",
    description:
      "Zefaaf-da biz qadriyatlaringiz va prinsiplaringizni chinakam baham ko'radigan hayotiy sherikni topish qiyinchiliklarini tushunamiz. Shuning uchun biz siz dunyoning qayerida bo'lishingizdan qat'i nazar, xavfsiz va ishonchli tajriba yaratdik.",
    leftBullets: [
      {
        title: "Oddiy va Bir Zumda Muloqot",
        description: "Hech qanday murakkablik yo'q — bizning yordamchi jamoamiz har bir qadamda sizga yo'l ko'rsatadi.",
      },
      {
        title: "Niderlandiyadagi Ofisimizda Haqiqiy Uchrashuvlar",
        description: "Bir-biringizni yuzma-yuz, ochiq va tushunarli tarzda tanib oling.",
      },
      {
        title: "Niderlandiyadan Tashqarida Onlayn Uchrashuvlar",
        description: "Geografik chegaralarsiz, xuddi shunday jiddiylik va shariat qoidalari.",
      },
    ],
    rightBullets: [
      {
        title: "To'liq Nazorat va Oilaning Ishtiroki",
        description: "Siz va oilangiz uchun ko'proq xavfsizlik, qulaylik va ruhiy tinchlik.",
      },
      {
        title: "Ehtiyojlaringizni Chin Yurakdan Tushunish",
        description: "Sizga mazmunli mosliqni topishga yordam berish uchun diqqat bilan tinglaymiz.",
      },
      {
        title: "To'liq Maxfiylik va Konfidensiallik",
        description: "Ma'lumotlaringiz xavfsiz saqlanadi va faqat nikoh niyati jiddiy bo'lganlar bilan baham ko'riladi.",
      },
    ],
    cta: "Xizmatga obuna bo'ling",
    badge: "nikohga bo'lgan yo'lingizni osonroq va tezroq qilamiz.",
    photoAlt: "Yangi turmush qurgan er-xotin kungaboqar dalasida bir-biriga qarab turishibdi",
  },
  unique: {
    title: "Bizning Shariatga Mos Uchrashuvlarimizni Nima Noyob Qiladi",
    cards: [
      {
        title: "Yevropadagi Haqiqiy Joylar",
        description: "Xususiy va hurmatli muhitda erkak va ayollarni oilalari bilan birga yuzma-yuz uchrating.",
      },
      {
        title: "Bir Xil Sadoqat bilan Onlayn",
        description: "Yevropadan tashqarida bo'lsangiz ideal, shaxsiy uchrashuvlar bilan bir xil standartlarga ega.",
      },
      {
        title: "Oddiy Jarayon",
        description: "Sherik afzalliklaringizni biz bilan bo'lishing, qolganini esa sizning nomingizdan biz hal qilamiz.",
      },
    ],
  },
  benefits: {
    title: "Xizmatning Afzalliklari",
    items: [
      {
        title: "Vaqt va Kuchni Tejang",
        description: "Qayerda bo'lishingizdan qat'i nazar, aniq mezonlarga asoslangan tez va to'g'ridan-to'g'ri muvofiqlashtirish.",
      },
      {
        title: "Xavfsiz va Ishonchli Muhit",
        description: "Shaxsan yoki onlayn bo'lsin, islomiy qadriyatlarni hurmat qiluvchi to'liq nazorat.",
      },
      {
        title: "Uzluksiz Yordam",
        description: "Savollaringizga javob berish va yo'l-yo'riq ko'rsatish uchun har bir bosqichda siz bilan birgamiz.",
      },
      {
        title: "To'liq Maxfiylik",
        description: "Ma'lumotlaringiz xavfsiz saqlanadi va faqat xizmat maqsadida ishlatiladi.",
      },
      {
        title: "Haqiqiy Ofis + Onlayn Variant",
        description:
          "Amsterdamdagi jismoniy ofisimiz sizga ko'proq ishonch beradi, onlayn uchrashuvlar esa xizmatni qayerda bo'lishingizdan qat'i nazar qulay qiladi.",
      },
    ],
    imageAlt: "Kechqurun tarixiy uylar bilan o'ralgan Amsterdamdagi kanal",
  },
  how: {
    title: "Xizmat Qanday Ishlaydi?",
    description:
      "Sizga faqat biz bilan bog'lanish, profilingiz va sherik afzalliklaringizni baham ko'rish kifoya; qidiruvni biz o'z zimmamizga olamiz. Keyin ikkalangiz uchun ham qulay vaqtda uchrashuvni tashkil qilamiz — yo Amsterdamdagi ofisimizda shaxsan, yo onlayn tarzda.",
    imageAlt: "Kanal yonidagi an'anaviy golland shamol tegirmoni",
  },
};

const az: MeetingCopy = {
  hero: {
    cta: "Xidmətə abunə olun",
    title: "Birbaşa Şəriətə Uyğun Görüşlər",
    paragraphs: [
      "Birbaşa şəriətə uyğun görüşlər — İslam dəyərlərini asan və mənalı ünsiyyətlə birləşdirən unikal nikah xidməti olub, nikah axtaranlara doğru həyat yoldaşını tapmağa kömək edir.",
      "Amsterdamdakı ofisimizdə birbaşa görüşün, ya da Avropadan kənardasınızsa onlayn. Hər görüş, ailə üzvlərinin iştirakı ilə və harada olmağınızdan asılı olmayaraq iffət və ləyaqəti qoruyan aydın şəriət qaydalarına uyğun, tam nəzarət altında keçirilir.",
    ],
    imageAlt: {
      street: "Axşamüstü velosiped və fənərlə sakit bir Amsterdam küçəsi",
      canal: "Amsterdam su yolu boyunca tarixi kanal evləri",
      tulips: "Amsterdam kanalı boyunca çiçək açmış lalələr",
    },
  },
  why: {
    title: "Niyə Birbaşa Şəriətə Uyğun Görüşləri Seçməlisiniz?",
    description:
      "Zefaaf-da biz dəyərlərinizi və prinsiplərinizi həqiqətən paylaşan bir həyat yoldaşı tapmağın çətinliklərini anlayırıq. Buna görə də dünyanın harasında olmağınızdan asılı olmayaraq sizin üçün təhlükəsiz və etibarlı bir təcrübə yaratmışıq.",
    leftBullets: [
      {
        title: "Sadə və Ani Ünsiyyət",
        description: "Heç bir çətinlik olmadan — dəstəkləyici komandamız hər addımda sizə rəhbərlik edir.",
      },
      {
        title: "Hollandiyadakı Ofisimizdə Real Görüşlər",
        description: "Bir-birinizi aydın və açıq şəkildə, üz-üzə tanıyın.",
      },
      {
        title: "Hollandiyadan Kənarda Onlayn Görüşlər",
        description: "Coğrafi məhdudiyyət olmadan, eyni ciddiyyət və şəriət qaydaları.",
      },
    ],
    rightBullets: [
      {
        title: "Tam Nəzarət və Ailənin İştirakı",
        description: "Sizin və ailəniz üçün daha çox təhlükəsizlik, rahatlıq və rühi rahatlıq.",
      },
      {
        title: "Ehtiyaclarınızın Həqiqi Anlaşılması",
        description: "Mənalı uyğunluq tapmağınıza kömək etmək üçün diqqətlə sizi dinləyirik.",
      },
      {
        title: "Tam Məxfilik",
        description: "Məlumatlarınız təhlükəsiz saxlanılır və yalnız ciddi nikah niyyəti olanlarla paylaşılır.",
      },
    ],
    cta: "Xidmətə abunə olun",
    badge: "nikaha gedən yolunuzu daha asan və daha sürətli edirik.",
    photoAlt: "Təzə evlənmiş bir cütlük günəbaxan tarlasında bir-birinə baxaraq",
  },
  unique: {
    title: "Şəriətə Uyğun Görüşlərimizi Unikal Edən Nədir",
    cards: [
      {
        title: "Avropada Real Yerlər",
        description: "Kişi və qadınları ailələri ilə birlikdə, üz-üzə, xüsusi və hörmətli mühitdə tanıyın.",
      },
      {
        title: "Eyni Öhdəliklə Onlayn",
        description: "Avropadan kənardasınızsa ideal, şəxsi görüşlərlə eyni standartlarla.",
      },
      {
        title: "Sadə Proses",
        description: "Tərəfdaş üstünlüklərinizi bizimlə paylaşın, qalanını sizin adınızdan biz həll edəcəyik.",
      },
    ],
  },
  benefits: {
    title: "Xidmətin Faydaları",
    items: [
      {
        title: "Vaxta və Səyə Qənaət Edin",
        description: "Harada olmağınızdan asılı olmayaraq, aydın meyarlara əsaslanan sürətli, birbaşa əlaqələndirmə.",
      },
      {
        title: "Təhlükəsiz və Etibarlı Mühit",
        description: "Şəxsən və ya onlayn olsun, İslam dəyərlərinə hörmət edən tam nəzarət.",
      },
      {
        title: "Davamlı Dəstək",
        description: "Suallarınıza cavab vermək və sizə rəhbərlik etmək üçün hər mərhələdə sizinləyik.",
      },
      {
        title: "Tam Məxfilik",
        description: "Məlumatlarınız təhlükəsiz saxlanılır və yalnız xidmətin məqsədi üçün istifadə olunur.",
      },
      {
        title: "Real Ofis + Onlayn Seçim",
        description:
          "Amsterdamdakı fiziki ofisimiz sizə daha çox etibar verir, onlayn görüşlər isə xidməti harada olmağınızdan asılı olmayaraq əlçatan edir.",
      },
    ],
    imageAlt: "Axşamüstü tarixi evlərlə əhatələnmiş Amsterdamdakı bir kanal",
  },
  how: {
    title: "Xidmət Necə İşləyir?",
    description:
      "Etməli olduğunuz tək şey bizimlə əlaqə saxlamaq, profilinizi və tərəfdaş üstünlüklərinizi paylaşmaqdır; axtarışı biz öz üzərimizə götürürük. Sonra hər ikinizə uyğun vaxtda görüş təşkil edəcəyik — Amsterdamdakı ofisimizdə şəxsən və ya onlayn.",
    imageAlt: "Kanal kənarında ənənəvi holland külək dəyirmanı",
  },
};

const fil: MeetingCopy = {
  hero: {
    cta: "Mag-subscribe sa Serbisyo",
    title: "Direktang mga Pagpupulong na Naaayon sa Sharia",
    paragraphs: [
      "Direktang mga pagpupulong na naaayon sa sharia — isang natatanging serbisyo sa kasal na pinagsasama ang mga pagpapahalagang Islamiko sa madali at makabuluhang komunikasyon, tumutulong sa mga naghahanap ng kasal na makahanap ng tamang kapareha sa buhay.",
      "Magkita nang direkta sa aming opisina sa Amsterdam, o online kung ikaw ay nasa labas ng Europa. Ang bawat pagpupulong ay ganap na sinusubaybayan, may kasamang mga miyembro ng pamilya at malinaw na alituntunin ng sharia na nag-iingat sa kahinhinan at dignidad, saanman ka naroroon.",
    ],
    imageAlt: {
      street: "Isang tahimik na kalye sa Amsterdam na may bisikleta at parol tuwing takipsilim",
      canal: "Makasaysayang mga bahay sa kanal sa tabi ng isang daluyan ng tubig sa Amsterdam",
      tulips: "Namumukadkad na mga tulip sa tabi ng isang kanal sa Amsterdam",
    },
  },
  why: {
    title: "Bakit Piliin ang Direktang mga Pagpupulong na Naaayon sa Sharia?",
    description:
      "Sa Zefaaf, nauunawaan namin ang mga hamon sa paghahanap ng kapareha sa buhay na talagang nagbabahagi ng iyong mga pagpapahalaga at prinsipyo. Kaya naman gumawa kami ng ligtas at mapagkakatiwalaang karanasan para sa iyo, saanman ka man sa mundo.",
    leftBullets: [
      {
        title: "Simple at Instant na Komunikasyon",
        description: "Walang komplikasyon — ang aming suportadong koponan ang gagabay sa iyo sa bawat hakbang.",
      },
      {
        title: "Tunay na mga Pagpupulong sa Aming Opisina sa Netherlands",
        description: "Magkakilala nang malinaw at bukas, harap-harapan.",
      },
      {
        title: "Mga Online na Pagpupulong Labas sa Netherlands",
        description: "Parehong seryosidad at alituntunin ng sharia, walang hangganang heograpikal.",
      },
    ],
    rightBullets: [
      {
        title: "Buong Pangangasiwa at Presensya ng Pamilya",
        description: "Higit na kaligtasan, ginhawa, at katiwasayan para sa iyo at sa iyong pamilya.",
      },
      {
        title: "Isang Tunay na Pag-unawa sa Iyong mga Pangangailangan",
        description: "Nakikinig kami nang mabuti upang matulungan kang makahanap ng makabuluhang pagkakatugma.",
      },
      {
        title: "Ganap na Privacy at Kumpidensyalidad",
        description: "Ang iyong impormasyon ay ligtas na pinananatili at ibinabahagi lamang sa mga may seryosong hangaring mag-asawa.",
      },
    ],
    cta: "Mag-subscribe sa Serbisyo",
    badge: "ginagawa naming mas madali at mas mabilis ang iyong paglalakbay patungo sa kasal.",
    photoAlt: "Isang bagong kasal na mag-asawa na magkaharap sa isang bukid ng mirasol",
  },
  unique: {
    title: "Ano ang Nagpapatangi sa Aming mga Pagpupulong na Naaayon sa Sharia",
    cards: [
      {
        title: "Tunay na mga Lokasyon sa Europa",
        description: "Makipagkita sa mga lalaki at babae kasama ang kanilang mga pamilya nang harap-harapan sa isang pribado at magalang na kapaligiran.",
      },
      {
        title: "Online na May Parehong Pangako",
        description: "Perpekto kung ikaw ay nasa labas ng Europa, may parehong pamantayan ng mga personal na pagpupulong.",
      },
      {
        title: "Simpleng Proseso",
        description: "Ibahagi sa amin ang iyong mga kagustuhan sa kapareha, at aasikasuhin na namin ang natitira para sa iyo.",
      },
    ],
  },
  benefits: {
    title: "Mga Benepisyo ng Serbisyo",
    items: [
      {
        title: "Makatipid ng Oras at Pagsisikap",
        description: "Mabilis at direktang koordinasyon batay sa malinaw na pamantayan, saanman ka man naroroon.",
      },
      {
        title: "Ligtas at Mapagkakatiwalaang Kapaligiran",
        description: "Ganap na pangangasiwa na gumagalang sa mga pagpapahalagang Islamiko, personal man o online.",
      },
      {
        title: "Patuloy na Suporta",
        description: "Kasama mo kami sa bawat yugto upang sagutin ang iyong mga katanungan at magbigay ng gabay.",
      },
      {
        title: "Ganap na Privacy",
        description: "Ang iyong impormasyon ay ligtas na pinananatili at ginagamit lamang para sa layunin ng serbisyo.",
      },
      {
        title: "Tunay na Opisina + Online na Opsyon",
        description:
          "Ang aming pisikal na opisina sa Amsterdam ay nagbibigay sa iyo ng higit na kumpiyansa, habang ang mga online na pagpupulong ay ginagawang naa-access ang serbisyo saanman ka naroroon.",
      },
    ],
    imageAlt: "Isang kanal sa Amsterdam na napapaligiran ng makasaysayang mga bahay tuwing takipsilim",
  },
  how: {
    title: "Paano Gumagana ang Serbisyo?",
    description:
      "Ang kailangan mo lang gawin ay makipag-ugnayan sa amin, ibahagi ang iyong profile at mga kagustuhan sa kapareha, at aasikasuhin na namin ang paghahanap. Pagkatapos ay maghahanda kami ng pagpupulong sa oras na angkop para sa inyong dalawa — maaaring personal sa aming opisina sa Amsterdam o online.",
    imageAlt: "Isang tradisyunal na Dutch windmill sa tabi ng isang kanal",
  },
};

const hi: MeetingCopy = {
  hero: {
    cta: "सेवा की सदस्यता लें",
    title: "प्रत्यक्ष शरिया-अनुरूप मुलाकातें",
    paragraphs: [
      "प्रत्यक्ष शरिया-अनुरूप मुलाकातें — एक अनोखी विवाह सेवा जो इस्लामी मूल्यों को सरल और सार्थक संवाद के साथ जोड़ती है, जिससे विवाह की तलाश करने वालों को सही जीवनसाथी खोजने में मदद मिलती है।",
      "एम्स्टर्डम में हमारे कार्यालय में सीधे मुलाकात करें, या यदि आप यूरोप के बाहर हैं तो ऑनलाइन। हर मुलाकात पूर्ण निगरानी में, परिवार के सदस्यों की उपस्थिति में और स्पष्ट शरिया दिशानिर्देशों के अनुसार होती है, जो आप जहां भी हों शालीनता और गरिमा को बनाए रखते हैं।",
    ],
    imageAlt: {
      street: "शाम के समय साइकिल और लालटेन के साथ एक शांत एम्स्टर्डम की सड़क",
      canal: "एम्स्टर्डम की एक जलमार्ग के किनारे ऐतिहासिक नहर वाले घर",
      tulips: "एम्स्टर्डम की एक नहर के किनारे खिले हुए ट्यूलिप के फूल",
    },
  },
  why: {
    title: "प्रत्यक्ष शरिया-अनुरूप मुलाकातें ही क्यों चुनें?",
    description:
      "ज़ेफ़ाफ़ में, हम समझते हैं कि एक ऐसा जीवनसाथी खोजना कितना चुनौतीपूर्ण है जो सचमुच आपके मूल्यों और सिद्धांतों को साझा करे। इसीलिए हमने आपके लिए एक सुरक्षित और भरोसेमंद अनुभव तैयार किया है, चाहे आप दुनिया में कहीं भी हों।",
    leftBullets: [
      {
        title: "सरल और तत्काल संवाद",
        description: "कोई जटिलता नहीं — हमारी सहायक टीम हर कदम पर आपका मार्गदर्शन करती है।",
      },
      {
        title: "हमारे नीदरलैंड कार्यालय में वास्तविक मुलाकातें",
        description: "स्पष्ट और खुले तरीके से, आमने-सामने एक-दूसरे को जानें।",
      },
      {
        title: "नीदरलैंड से बाहर ऑनलाइन मुलाकातें",
        description: "बिना किसी भौगोलिक सीमा के, वही गंभीरता और शरिया दिशानिर्देश।",
      },
    ],
    rightBullets: [
      {
        title: "पूर्ण निगरानी और परिवार की उपस्थिति",
        description: "आपके और आपके परिवार के लिए अधिक सुरक्षा, आराम और मानसिक शांति।",
      },
      {
        title: "आपकी जरूरतों की सच्ची समझ",
        description: "हम ध्यान से सुनते हैं ताकि आपको सार्थक अनुकूलता खोजने में मदद मिल सके।",
      },
      {
        title: "पूर्ण गोपनीयता",
        description: "आपकी जानकारी सुरक्षित रखी जाती है और केवल गंभीर विवाह इरादे रखने वालों के साथ साझा की जाती है।",
      },
    ],
    cta: "सेवा की सदस्यता लें",
    badge: "हम आपकी विवाह की यात्रा को आसान और तेज़ बनाते हैं।",
    photoAlt: "एक नवविवाहित जोड़ा सूरजमुखी के खेत में एक-दूसरे के सामने खड़ा है",
  },
  unique: {
    title: "क्या चीज़ हमारी शरिया-अनुरूप मुलाकातों को अनोखा बनाती है",
    cards: [
      {
        title: "यूरोप में वास्तविक स्थान",
        description: "एक निजी और सम्मानजनक माहौल में परिवारों के साथ पुरुषों और महिलाओं से आमने-सामने मिलें।",
      },
      {
        title: "वही प्रतिबद्धता के साथ ऑनलाइन",
        description: "यदि आप यूरोप के बाहर हैं तो आदर्श, व्यक्तिगत मुलाकातों जैसे ही मानकों के साथ।",
      },
      {
        title: "सरल प्रक्रिया",
        description: "अपनी साथी वरीयताएं हमारे साथ साझा करें, और बाकी सब कुछ हम आपकी ओर से संभालेंगे।",
      },
    ],
  },
  benefits: {
    title: "सेवा के लाभ",
    items: [
      {
        title: "समय और प्रयास की बचत",
        description: "आप जहां भी हों, स्पष्ट मानदंडों के आधार पर तेज़, प्रत्यक्ष समन्वय।",
      },
      {
        title: "सुरक्षित और भरोसेमंद माहौल",
        description: "चाहे व्यक्तिगत रूप से हो या ऑनलाइन, इस्लामी मूल्यों का सम्मान करने वाली पूर्ण निगरानी।",
      },
      {
        title: "निरंतर सहायता",
        description: "आपके सवालों के जवाब देने और मार्गदर्शन प्रदान करने के लिए हम हर चरण में आपके साथ हैं।",
      },
      {
        title: "पूर्ण गोपनीयता",
        description: "आपकी जानकारी सुरक्षित रखी जाती है और केवल सेवा के उद्देश्य के लिए उपयोग की जाती है।",
      },
      {
        title: "वास्तविक कार्यालय + ऑनलाइन विकल्प",
        description:
          "एम्स्टर्डम में हमारा भौतिक कार्यालय आपको अधिक विश्वास देता है, जबकि ऑनलाइन मुलाकातें सेवा को आप जहां भी हों सुलभ बनाती हैं।",
      },
    ],
    imageAlt: "शाम के समय ऐतिहासिक घरों से घिरी एम्स्टर्डम की एक नहर",
  },
  how: {
    title: "सेवा कैसे काम करती है?",
    description:
      "आपको बस हमसे संपर्क करना है, अपनी प्रोफ़ाइल और साथी वरीयताएं साझा करनी हैं, और खोज का काम हम संभालेंगे। इसके बाद हम आप दोनों के लिए उपयुक्त समय पर मुलाकात की व्यवस्था करेंगे — या तो व्यक्तिगत रूप से हमारे एम्स्टर्डम कार्यालय में या ऑनलाइन।",
    imageAlt: "एक नहर के किनारे एक पारंपरिक डच पवनचक्की",
  },
};

const kk: MeetingCopy = {
  hero: {
    cta: "Қызметке жазылыңыз",
    title: "Тікелей Шариғатқа Сай Кездесулер",
    paragraphs: [
      "Тікелей шариғатқа сай кездесулер — исламдық құндылықтарды қарапайым әрі мағыналы қарым-қатынаспен ұштастыратын бірегей неке қию қызметі, ол некеге ниеттенгендерге өмірлік серігін дұрыс табуға көмектеседі.",
      "Амстердамдағы кеңсемізде тікелей кездесіңіз немесе Еуропадан тыс болсаңыз, онлайн түрде. Әрбір кездесу отбасы мүшелерінің қатысуымен және сіз қай жерде болсаңыз да инабаттылық пен қадір-қасиетті сақтайтын анық шариғат нұсқаулары бойынша толық қадағалауда өтеді.",
    ],
    imageAlt: {
      street: "Кеш батыста велосипед пен шамы бар тыныш Амстердам көшесі",
      canal: "Амстердам су жолы бойындағы тарихи канал үйлері",
      tulips: "Амстердам каналы бойында гүлдеген қызғалдақтар",
    },
  },
  why: {
    title: "Неге Тікелей Шариғатқа Сай Кездесулерді Таңдау Керек?",
    description:
      "Zefaaf-та біз құндылықтарыңыз бен принциптеріңізді шынымен бөлісетін өмірлік серігін табудың қиындықтарын түсінеміз. Сондықтан біз әлемнің қай жерінде болсаңыз да сіз үшін қауіпсіз әрі сенімді тәжірибе жасадық.",
    leftBullets: [
      {
        title: "Қарапайым және Жедел Байланыс",
        description: "Ешбір қиындықсыз — біздің қолдаушы командамыз әр қадамда сізге бағыт-бағдар береді.",
      },
      {
        title: "Нидерландыдағы Кеңсемізде Нағыз Кездесулер",
        description: "Бір-біріңізді анық әрі ашық түрде, бетпе-бет танысыңыз.",
      },
      {
        title: "Нидерландыдан Тыс Онлайн Кездесулер",
        description: "Географиялық шектеусіз, дәл сол қалыптағы байыптылық пен шариғат нұсқаулары.",
      },
    ],
    rightBullets: [
      {
        title: "Толық Қадағалау және Отбасының Қатысуы",
        description: "Сіз бен отбасыңыз үшін көбірек қауіпсіздік, жайлылық және жан тыныштығы.",
      },
      {
        title: "Қажеттіліктеріңізді Шынайы Түсіну",
        description: "Сізге мағыналы үйлесімділік табуға көмектесу үшін біз мұқият тыңдаймыз.",
      },
      {
        title: "Толық Құпиялылық",
        description: "Мәліметтеріңіз қауіпсіз сақталады және тек некеге байыпты ниеттенгендермен ғана бөлісіледі.",
      },
    ],
    cta: "Қызметке жазылыңыз",
    badge: "некеге апаратын жолыңызды жеңілдетіп, жылдамдатамыз.",
    photoAlt: "Жаңа үйленген жұп күнбағыс алқабында бір-біріне қарап тұр",
  },
  unique: {
    title: "Біздің Шариғатқа Сай Кездесулерімізді Ерекше Ететін Не",
    cards: [
      {
        title: "Еуропадағы Нақты Орындар",
        description: "Ерлер мен әйелдерді олардың отбасыларымен бірге, жеке әрі құрметті ортада бетпе-бет кездестіріңіз.",
      },
      {
        title: "Сол Дәрежедегі Жауапкершілікпен Онлайн",
        description: "Еуропадан тыс болсаңыз тамаша, тікелей кездесулермен бірдей стандарттарда.",
      },
      {
        title: "Қарапайым Үдеріс",
        description: "Серігіңіз туралы қалауларыңызды бізбен бөлісіңіз, қалғанын сіздің атыңыздан біз шешеміз.",
      },
    ],
  },
  benefits: {
    title: "Қызметтің Артықшылықтары",
    items: [
      {
        title: "Уақыт пен Күшті Үнемдеу",
        description: "Сіз қай жерде болсаңыз да, анық критерийлерге негізделген жылдам, тікелей үйлестіру.",
      },
      {
        title: "Қауіпсіз және Сенімді Орта",
        description: "Тікелей болсын, онлайн болсын, исламдық құндылықтарды құрметтейтін толық қадағалау.",
      },
      {
        title: "Үздіксіз Қолдау",
        description: "Сұрақтарыңызға жауап беру және бағыт-бағдар беру үшін біз әр кезеңде сізбен біргеміз.",
      },
      {
        title: "Толық Құпиялылық",
        description: "Мәліметтеріңіз қауіпсіз сақталады және тек қызметтің мақсаты үшін ғана пайдаланылады.",
      },
      {
        title: "Нақты Кеңсе + Онлайн Опция",
        description:
          "Амстердамдағы біздің нақты кеңсеміз сізге көбірек сенім береді, ал онлайн кездесулер қызметті сіз қай жерде болсаңыз да қолжетімді етеді.",
      },
    ],
    imageAlt: "Кеш батыста тарихи үйлермен қоршалған Амстердамдағы канал",
  },
  how: {
    title: "Қызмет Қалай Жұмыс Істейді?",
    description:
      "Сізге тек бізбен байланысу, профиліңіз бен серігіңіз туралы қалауларыңызды бөлісу жеткілікті; іздеуді біз жүзеге асырамыз. Содан кейін екеуіңізге де қолайлы уақытта кездесу ұйымдастырамыз — Амстердамдағы кеңсемізде тікелей немесе онлайн түрде.",
    imageAlt: "Канал жағасындағы дәстүрлі голланд жел диірмені",
  },
};

const ms: MeetingCopy = {
  hero: {
    cta: "Langgan Perkhidmatan",
    title: "Pertemuan Langsung Mematuhi Syariah",
    paragraphs: [
      "Pertemuan langsung mematuhi syariah — perkhidmatan perkahwinan unik yang menggabungkan nilai-nilai Islam dengan komunikasi yang mudah dan bermakna, membantu mereka yang mencari perkahwinan menemui pasangan hidup yang tepat.",
      "Bertemu secara langsung di pejabat kami di Amsterdam, atau dalam talian jika anda berada di luar Eropah. Setiap pertemuan diselia sepenuhnya, dengan kehadiran ahli keluarga dan garis panduan syariah yang jelas yang mengekalkan kesopanan dan maruah, di mana sahaja anda berada.",
    ],
    imageAlt: {
      street: "Sebuah jalan Amsterdam yang tenang dengan basikal dan lampu tanglung ketika senja",
      canal: "Rumah-rumah kanal bersejarah di sepanjang laluan air Amsterdam",
      tulips: "Bunga tulip yang berkembang di sepanjang kanal Amsterdam",
    },
  },
  why: {
    title: "Mengapa Memilih Pertemuan Langsung Mematuhi Syariah?",
    description:
      "Di Zefaaf, kami memahami cabaran mencari pasangan hidup yang benar-benar berkongsi nilai dan prinsip anda. Itulah sebabnya kami mencipta pengalaman yang selamat dan boleh dipercayai untuk anda, di mana sahaja anda berada di dunia.",
    leftBullets: [
      {
        title: "Komunikasi Mudah & Segera",
        description: "Tiada kerumitan — pasukan sokongan kami membimbing anda pada setiap langkah.",
      },
      {
        title: "Pertemuan Sebenar di Pejabat Kami di Belanda",
        description: "Kenali antara satu sama lain dengan jelas dan terbuka, secara bersemuka.",
      },
      {
        title: "Pertemuan Dalam Talian di Luar Belanda",
        description: "Keseriusan dan garis panduan syariah yang sama, tanpa had geografi.",
      },
    ],
    rightBullets: [
      {
        title: "Penyeliaan Penuh & Kehadiran Keluarga",
        description: "Lebih banyak keselamatan, keselesaan, dan ketenangan fikiran untuk anda dan keluarga anda.",
      },
      {
        title: "Pemahaman Tulen tentang Keperluan Anda",
        description: "Kami mendengar dengan teliti untuk membantu anda menemui keserasian yang bermakna.",
      },
      {
        title: "Privasi & Kerahsiaan Sepenuhnya",
        description: "Maklumat anda disimpan dengan selamat dan hanya dikongsi dengan mereka yang mempunyai niat perkahwinan yang serius.",
      },
    ],
    cta: "Langgan Perkhidmatan",
    badge: "menjadikan perjalanan anda menuju perkahwinan lebih mudah dan lebih pantas.",
    photoAlt: "Sepasang pengantin baharu berhadapan antara satu sama lain di ladang bunga matahari",
  },
  unique: {
    title: "Apa yang Menjadikan Pertemuan Mematuhi Syariah Kami Unik",
    cards: [
      {
        title: "Lokasi Sebenar di Eropah",
        description: "Temui lelaki dan wanita bersama keluarga mereka secara bersemuka dalam persekitaran yang peribadi dan penuh hormat.",
      },
      {
        title: "Dalam Talian dengan Komitmen yang Sama",
        description: "Ideal jika anda berada di luar Eropah, dengan piawaian yang sama seperti pertemuan bersemuka.",
      },
      {
        title: "Proses yang Mudah",
        description: "Kongsikan keutamaan pasangan anda dengan kami, dan kami akan menguruskan selebihnya bagi pihak anda.",
      },
    ],
  },
  benefits: {
    title: "Faedah Perkhidmatan",
    items: [
      {
        title: "Jimatkan Masa & Usaha",
        description: "Penyelarasan yang pantas dan langsung berdasarkan kriteria yang jelas, di mana sahaja anda berada.",
      },
      {
        title: "Persekitaran Selamat & Dipercayai",
        description: "Penyeliaan penuh yang menghormati nilai-nilai Islam, sama ada secara bersemuka atau dalam talian.",
      },
      {
        title: "Sokongan Berterusan",
        description: "Kami bersama anda pada setiap peringkat untuk menjawab soalan anda dan memberikan panduan.",
      },
      {
        title: "Privasi Sepenuhnya",
        description: "Maklumat anda disimpan dengan selamat dan hanya digunakan untuk tujuan perkhidmatan.",
      },
      {
        title: "Pejabat Sebenar + Pilihan Dalam Talian",
        description:
          "Pejabat fizikal kami di Amsterdam memberikan anda lebih keyakinan, manakala pertemuan dalam talian menjadikan perkhidmatan ini boleh diakses di mana sahaja anda berada.",
      },
    ],
    imageAlt: "Sebuah kanal di Amsterdam yang dijajari rumah-rumah bersejarah ketika senja",
  },
  how: {
    title: "Bagaimana Perkhidmatan Ini Berfungsi?",
    description:
      "Semua yang perlu anda lakukan ialah menghubungi kami, berkongsi profil dan keutamaan pasangan anda, dan kami akan menguruskan carian tersebut. Kami kemudian akan mengatur pertemuan pada masa yang sesuai untuk anda berdua — sama ada secara bersemuka di pejabat kami di Amsterdam atau dalam talian.",
    imageAlt: "Sebuah kincir angin tradisional Belanda di sebelah kanal",
  },
};

const pa: MeetingCopy = {
  hero: {
    cta: "ਸੇਵਾ ਦੀ ਗਾਹਕੀ ਲਓ",
    title: "ਸਿੱਧੀਆਂ ਸ਼ਰੀਆ-ਅਨੁਕੂਲ ਮੁਲਾਕਾਤਾਂ",
    paragraphs: [
      "ਸਿੱਧੀਆਂ ਸ਼ਰੀਆ-ਅਨੁਕੂਲ ਮੁਲਾਕਾਤਾਂ — ਇੱਕ ਵਿਲੱਖਣ ਵਿਆਹ ਸੇਵਾ ਜੋ ਇਸਲਾਮੀ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਨੂੰ ਸਧਾਰਨ ਅਤੇ ਅਰਥਪੂਰਨ ਸੰਚਾਰ ਨਾਲ ਜੋੜਦੀ ਹੈ, ਜੋ ਵਿਆਹ ਦੀ ਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਨੂੰ ਸਹੀ ਜੀਵਨ ਸਾਥੀ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।",
      "ਐਮਸਟਰਡਮ ਵਿੱਚ ਸਾਡੇ ਦਫ਼ਤਰ ਵਿੱਚ ਸਿੱਧੇ ਮਿਲੋ, ਜਾਂ ਜੇ ਤੁਸੀਂ ਯੂਰਪ ਤੋਂ ਬਾਹਰ ਹੋ ਤਾਂ ਆਨਲਾਈਨ। ਹਰ ਮੁਲਾਕਾਤ ਪੂਰੀ ਨਿਗਰਾਨੀ ਹੇਠ, ਪਰਿਵਾਰਕ ਮੈਂਬਰਾਂ ਦੀ ਮੌਜੂਦਗੀ ਵਿੱਚ ਅਤੇ ਸਪਸ਼ਟ ਸ਼ਰੀਆ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਅਨੁਸਾਰ ਹੁੰਦੀ ਹੈ, ਜੋ ਤੁਸੀਂ ਜਿੱਥੇ ਵੀ ਹੋਵੋ ਸ਼ਾਲੀਨਤਾ ਅਤੇ ਮਾਣ-ਸਨਮਾਨ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਦੀ ਹੈ।",
    ],
    imageAlt: {
      street: "ਸ਼ਾਮ ਵੇਲੇ ਸਾਈਕਲ ਅਤੇ ਲਾਲਟੈਣ ਵਾਲੀ ਇੱਕ ਸ਼ਾਂਤ ਐਮਸਟਰਡਮ ਗਲੀ",
      canal: "ਐਮਸਟਰਡਮ ਦੇ ਇੱਕ ਜਲ ਮਾਰਗ ਦੇ ਕੰਢੇ ਇਤਿਹਾਸਕ ਨਹਿਰੀ ਘਰ",
      tulips: "ਐਮਸਟਰਡਮ ਦੀ ਇੱਕ ਨਹਿਰ ਦੇ ਕੰਢੇ ਖਿੜੇ ਹੋਏ ਟਿਊਲਿਪ ਫੁੱਲ",
    },
  },
  why: {
    title: "ਸਿੱਧੀਆਂ ਸ਼ਰੀਆ-ਅਨੁਕੂਲ ਮੁਲਾਕਾਤਾਂ ਕਿਉਂ ਚੁਣੀਏ?",
    description:
      "ਜ਼ੇਫ਼ਾਫ਼ ਵਿੱਚ, ਅਸੀਂ ਸਮਝਦੇ ਹਾਂ ਕਿ ਅਜਿਹਾ ਜੀਵਨ ਸਾਥੀ ਲੱਭਣਾ ਕਿੰਨਾ ਚੁਣੌਤੀਪੂਰਨ ਹੈ ਜੋ ਸੱਚਮੁੱਚ ਤੁਹਾਡੀਆਂ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਅਤੇ ਸਿਧਾਂਤਾਂ ਨੂੰ ਸਾਂਝਾ ਕਰਦਾ ਹੋਵੇ। ਇਸੇ ਲਈ ਅਸੀਂ ਤੁਹਾਡੇ ਲਈ ਇੱਕ ਸੁਰੱਖਿਅਤ ਅਤੇ ਭਰੋਸੇਯੋਗ ਤਜਰਬਾ ਬਣਾਇਆ ਹੈ, ਭਾਵੇਂ ਤੁਸੀਂ ਦੁਨੀਆਂ ਵਿੱਚ ਕਿਤੇ ਵੀ ਹੋਵੋ।",
    leftBullets: [
      {
        title: "ਸਧਾਰਨ ਅਤੇ ਤੁਰੰਤ ਸੰਚਾਰ",
        description: "ਕੋਈ ਗੁੰਝਲ ਨਹੀਂ — ਸਾਡੀ ਸਹਾਇਕ ਟੀਮ ਹਰ ਕਦਮ 'ਤੇ ਤੁਹਾਡੀ ਅਗਵਾਈ ਕਰਦੀ ਹੈ।",
      },
      {
        title: "ਸਾਡੇ ਨੀਦਰਲੈਂਡ ਦਫ਼ਤਰ ਵਿੱਚ ਅਸਲ ਮੁਲਾਕਾਤਾਂ",
        description: "ਸਪਸ਼ਟ ਅਤੇ ਖੁੱਲ੍ਹੇ ਢੰਗ ਨਾਲ, ਆਹਮੋ-ਸਾਹਮਣੇ ਇੱਕ-ਦੂਜੇ ਨੂੰ ਜਾਣੋ।",
      },
      {
        title: "ਨੀਦਰਲੈਂਡ ਤੋਂ ਬਾਹਰ ਆਨਲਾਈਨ ਮੁਲਾਕਾਤਾਂ",
        description: "ਬਿਨਾਂ ਕਿਸੇ ਭੂਗੋਲਿਕ ਸੀਮਾ ਦੇ, ਉਹੀ ਗੰਭੀਰਤਾ ਅਤੇ ਸ਼ਰੀਆ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼।",
      },
    ],
    rightBullets: [
      {
        title: "ਪੂਰੀ ਨਿਗਰਾਨੀ ਅਤੇ ਪਰਿਵਾਰ ਦੀ ਮੌਜੂਦਗੀ",
        description: "ਤੁਹਾਡੇ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਲਈ ਵਧੇਰੇ ਸੁਰੱਖਿਆ, ਆਰਾਮ ਅਤੇ ਮਾਨਸਿਕ ਸ਼ਾਂਤੀ।",
      },
      {
        title: "ਤੁਹਾਡੀਆਂ ਲੋੜਾਂ ਦੀ ਸੱਚੀ ਸਮਝ",
        description: "ਅਸੀਂ ਧਿਆਨ ਨਾਲ ਸੁਣਦੇ ਹਾਂ ਤਾਂ ਜੋ ਤੁਹਾਨੂੰ ਅਰਥਪੂਰਨ ਅਨੁਕੂਲਤਾ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਮਿਲ ਸਕੇ।",
      },
      {
        title: "ਪੂਰੀ ਗੋਪਨੀਯਤਾ",
        description: "ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਸੁਰੱਖਿਅਤ ਰੱਖੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਗੰਭੀਰ ਵਿਆਹ ਦੇ ਇਰਾਦੇ ਰੱਖਣ ਵਾਲਿਆਂ ਨਾਲ ਸਾਂਝੀ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
      },
    ],
    cta: "ਸੇਵਾ ਦੀ ਗਾਹਕੀ ਲਓ",
    badge: "ਅਸੀਂ ਵਿਆਹ ਵੱਲ ਤੁਹਾਡੇ ਸਫ਼ਰ ਨੂੰ ਆਸਾਨ ਅਤੇ ਤੇਜ਼ ਬਣਾਉਂਦੇ ਹਾਂ।",
    photoAlt: "ਇੱਕ ਨਵ-ਵਿਆਹੁਤਾ ਜੋੜਾ ਸੂਰਜਮੁਖੀ ਦੇ ਖੇਤ ਵਿੱਚ ਇੱਕ-ਦੂਜੇ ਦੇ ਸਾਹਮਣੇ ਖੜ੍ਹਾ ਹੈ",
  },
  unique: {
    title: "ਕੀ ਚੀਜ਼ ਸਾਡੀਆਂ ਸ਼ਰੀਆ-ਅਨੁਕੂਲ ਮੁਲਾਕਾਤਾਂ ਨੂੰ ਵਿਲੱਖਣ ਬਣਾਉਂਦੀ ਹੈ",
    cards: [
      {
        title: "ਯੂਰਪ ਵਿੱਚ ਅਸਲ ਸਥਾਨ",
        description: "ਇੱਕ ਨਿੱਜੀ ਅਤੇ ਸਤਿਕਾਰਯੋਗ ਮਾਹੌਲ ਵਿੱਚ ਪਰਿਵਾਰਾਂ ਸਮੇਤ ਮਰਦਾਂ ਅਤੇ ਔਰਤਾਂ ਨਾਲ ਆਹਮੋ-ਸਾਹਮਣੇ ਮਿਲੋ।",
      },
      {
        title: "ਉਸੇ ਵਚਨਬੱਧਤਾ ਨਾਲ ਆਨਲਾਈਨ",
        description: "ਜੇ ਤੁਸੀਂ ਯੂਰਪ ਤੋਂ ਬਾਹਰ ਹੋ ਤਾਂ ਆਦਰਸ਼, ਵਿਅਕਤੀਗਤ ਮੁਲਾਕਾਤਾਂ ਵਾਂਗ ਹੀ ਮਿਆਰਾਂ ਨਾਲ।",
      },
      {
        title: "ਸਧਾਰਨ ਪ੍ਰਕਿਰਿਆ",
        description: "ਆਪਣੀਆਂ ਸਾਥੀ ਤਰਜੀਹਾਂ ਸਾਡੇ ਨਾਲ ਸਾਂਝੀਆਂ ਕਰੋ, ਅਤੇ ਬਾਕੀ ਸਭ ਕੁਝ ਅਸੀਂ ਤੁਹਾਡੀ ਤਰਫ਼ੋਂ ਸੰਭਾਲਾਂਗੇ।",
      },
    ],
  },
  benefits: {
    title: "ਸੇਵਾ ਦੇ ਲਾਭ",
    items: [
      {
        title: "ਸਮਾਂ ਅਤੇ ਮਿਹਨਤ ਦੀ ਬੱਚਤ",
        description: "ਤੁਸੀਂ ਜਿੱਥੇ ਵੀ ਹੋਵੋ, ਸਪਸ਼ਟ ਮਾਪਦੰਡਾਂ 'ਤੇ ਆਧਾਰਿਤ ਤੇਜ਼, ਸਿੱਧਾ ਤਾਲਮੇਲ।",
      },
      {
        title: "ਸੁਰੱਖਿਅਤ ਅਤੇ ਭਰੋਸੇਯੋਗ ਮਾਹੌਲ",
        description: "ਭਾਵੇਂ ਵਿਅਕਤੀਗਤ ਹੋਵੇ ਜਾਂ ਆਨਲਾਈਨ, ਇਸਲਾਮੀ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਦਾ ਸਤਿਕਾਰ ਕਰਨ ਵਾਲੀ ਪੂਰੀ ਨਿਗਰਾਨੀ।",
      },
      {
        title: "ਨਿਰੰਤਰ ਸਹਾਇਤਾ",
        description: "ਤੁਹਾਡੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇਣ ਅਤੇ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਅਸੀਂ ਹਰ ਪੜਾਅ 'ਤੇ ਤੁਹਾਡੇ ਨਾਲ ਹਾਂ।",
      },
      {
        title: "ਪੂਰੀ ਗੋਪਨੀਯਤਾ",
        description: "ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਸੁਰੱਖਿਅਤ ਰੱਖੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਸਿਰਫ਼ ਸੇਵਾ ਦੇ ਉਦੇਸ਼ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।",
      },
      {
        title: "ਅਸਲ ਦਫ਼ਤਰ + ਆਨਲਾਈਨ ਵਿਕਲਪ",
        description:
          "ਐਮਸਟਰਡਮ ਵਿੱਚ ਸਾਡਾ ਭੌਤਿਕ ਦਫ਼ਤਰ ਤੁਹਾਨੂੰ ਵਧੇਰੇ ਭਰੋਸਾ ਦਿੰਦਾ ਹੈ, ਜਦਕਿ ਆਨਲਾਈਨ ਮੁਲਾਕਾਤਾਂ ਸੇਵਾ ਨੂੰ ਤੁਸੀਂ ਜਿੱਥੇ ਵੀ ਹੋਵੋ ਪਹੁੰਚਯੋਗ ਬਣਾਉਂਦੀਆਂ ਹਨ।",
      },
    ],
    imageAlt: "ਸ਼ਾਮ ਵੇਲੇ ਇਤਿਹਾਸਕ ਘਰਾਂ ਨਾਲ ਘਿਰੀ ਐਮਸਟਰਡਮ ਦੀ ਇੱਕ ਨਹਿਰ",
  },
  how: {
    title: "ਸੇਵਾ ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ?",
    description:
      "ਤੁਹਾਨੂੰ ਬੱਸ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨਾ ਹੈ, ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਅਤੇ ਸਾਥੀ ਤਰਜੀਹਾਂ ਸਾਂਝੀਆਂ ਕਰਨੀਆਂ ਹਨ, ਅਤੇ ਖੋਜ ਦਾ ਕੰਮ ਅਸੀਂ ਸੰਭਾਲਾਂਗੇ। ਇਸ ਤੋਂ ਬਾਅਦ ਅਸੀਂ ਤੁਹਾਡੇ ਦੋਵਾਂ ਲਈ ਢੁਕਵੇਂ ਸਮੇਂ 'ਤੇ ਮੁਲਾਕਾਤ ਦਾ ਪ੍ਰਬੰਧ ਕਰਾਂਗੇ — ਜਾਂ ਤਾਂ ਵਿਅਕਤੀਗਤ ਤੌਰ 'ਤੇ ਸਾਡੇ ਐਮਸਟਰਡਮ ਦਫ਼ਤਰ ਵਿੱਚ ਜਾਂ ਆਨਲਾਈਨ।",
    imageAlt: "ਇੱਕ ਨਹਿਰ ਦੇ ਕੰਢੇ ਇੱਕ ਰਵਾਇਤੀ ਡੱਚ ਪੌਣ ਚੱਕੀ",
  },
};

const ps: MeetingCopy = {
  hero: {
    cta: "خدمت ته ګډون وکړئ",
    title: "مستقیم شرعي مطابق لیدنې",
    paragraphs: [
      "مستقیم شرعي مطابق لیدنې — یو ځانګړی د واده خدمت چې اسلامي ارزښتونه له اسانه او معنا لرونکي اړیکو سره یوځای کوي، او هغه کسانو ته مرسته کوي چې د واده په لټه کې دي ترڅو د ژوند سم ملګری ومومي.",
      "زموږ په آمستردام آفس کې مستقیم سره ولیدل شئ، یا که تاسو له اروپا څخه بهر یاست نو آنلاین. هره لیدنه د کورنۍ غړو په حضور کې او د روښانه شرعي لارښوونو له مخې، بشپړ نظارت لاندې ترسره کیږي چې د شرم او عزت ساتنه کوي، هرچیرې چې یاست.",
    ],
    imageAlt: {
      street: "د ماښام په وخت کې د بایسکل او فانوس سره یو آرام آمستردام کوڅه",
      canal: "د آمستردام د اوبو د لارې غاړه تاریخي کانال کورونه",
      tulips: "د آمستردام د کانال غاړه ګلان شوي ټیولیپ ګلان",
    },
  },
  why: {
    title: "ولې مستقیم شرعي مطابق لیدنې غوره کړو؟",
    description:
      "په زفاف کې، موږ هغه ننګونې پوهیږو چې د ژوند د ملګري موندلو لپاره شتون لري چې واقعیا ستاسو ارزښتونه او اصول شریکوي. له همدې کبله موږ تاسو لپاره یو خوندي او د باور وړ تجربه رامینځته کړې، هرچیرې چې په نړۍ کې یاست.",
    leftBullets: [
      {
        title: "ساده او سمدستي اړیکه",
        description: "هیڅ پیچلتیا نشته — زموږ ملاتړونکی ټیم په هر ګام کې ستاسو لارښوونه کوي.",
      },
      {
        title: "زموږ د هالنډ په آفس کې ریښتیني لیدنې",
        description: "یو له بل سره په روښانه او خلاصه توګه، مخامخ پیژندل.",
      },
      {
        title: "د هالنډ څخه بهر آنلاین لیدنې",
        description: "بې له جغرافیایي حد، هماغه جدیت او شرعي لارښوونې.",
      },
    ],
    rightBullets: [
      {
        title: "بشپړ نظارت او د کورنۍ حضور",
        description: "تاسو او ستاسو کورنۍ لپاره ډیر امنیت، آرامتیا او ذهني آرامي.",
      },
      {
        title: "ستاسو اړتیاوو حقیقي پوهیدل",
        description: "موږ په دقت سره غوږ نیسو ترڅو تاسو ته د معنا لرونکي همغږۍ موندلو کې مرسته وکړو.",
      },
      {
        title: "بشپړه محرمیت او پټتیا",
        description: "ستاسو معلومات په خوندي توګه ساتل کیږي او یوازې د واده جدي هدف لرونکو سره شریکیږي.",
      },
    ],
    cta: "خدمت ته ګډون وکړئ",
    badge: "د واده په لور ستاسو سفر اسانه او چټک کوو.",
    photoAlt: "یو نوی واده شوی جوړه د لمر ګل په فارم کې یو بل ته مخامخ ولاړ دي",
  },
  unique: {
    title: "زموږ شرعي مطابق لیدنې ځانګړي کوم شی جوړوي",
    cards: [
      {
        title: "په اروپا کې ریښتیني ځایونه",
        description: "سړي او ښځې د دوی له کورنیو سره یوځای، خصوصي او درناوي وړ چاپیریال کې مخامخ وګورئ.",
      },
      {
        title: "په ورته ژمنتیا سره آنلاین",
        description: "که تاسو له اروپا څخه بهر یاست ایډیال دی، د مخامخ لیدنو په څیر ورته معیارونه لري.",
      },
      {
        title: "ساده پروسه",
        description: "خپلې د ملګري غوره توبونه له موږ سره شریکې کړئ، او پاتې کار به موږ ستاسو په استازیتوب سرته ورسوو.",
      },
    ],
  },
  benefits: {
    title: "د خدمت ګټې",
    items: [
      {
        title: "وخت او هڅه سپما کول",
        description: "روښانه معیارونو پر بنسټ چټک، مستقیم همغږي، هرچیرې چې یاست.",
      },
      {
        title: "خوندي او د باور وړ چاپیریال",
        description: "بشپړ نظارت چې اسلامي ارزښتونه درناوی کوي، که مخامخ وي یا آنلاین.",
      },
      {
        title: "دوامداره ملاتړ",
        description: "ستاسو پوښتنو ته د ځواب ورکولو او لارښوونې چمتو کولو لپاره موږ په هر مرحله کې تاسو سره یو.",
      },
      {
        title: "بشپړه محرمیت",
        description: "ستاسو معلومات په خوندي توګه ساتل کیږي او یوازې د خدمت لپاره کارول کیږي.",
      },
      {
        title: "ریښتینی آفس + آنلاین اختیار",
        description:
          "زموږ په آمستردام کې فزیکي آفس تاسو ته ډیر باور درکوي، پداسې حال کې چې آنلاین لیدنې خدمت ته د لاسرسي وړ کوي هرچیرې چې یاست.",
      },
    ],
    imageAlt: "د ماښام په وخت کې د تاریخي کورونو په منځ کې د آمستردام یو کانال",
  },
  how: {
    title: "خدمت څنګه کار کوي؟",
    description:
      "تاسو باید یوازې زموږ سره اړیکه ونیسئ، خپل پروفایل او د ملګري غوره توبونه شریک کړئ، او لټون به موږ ترسره کړو. بیا به موږ ستاسو دواړو لپاره مناسب وخت کې لیدنه تنظیم کړو — یا زموږ په آمستردام آفس کې مخامخ یا آنلاین.",
    imageAlt: "د کانال غاړه یو دودیز هالنډي بادي ژرندی",
  },
};

const sw: MeetingCopy = {
  hero: {
    cta: "Jisajili kwa Huduma",
    title: "Mikutano ya Moja kwa Moja Inayolingana na Sharia",
    paragraphs: [
      "Mikutano ya moja kwa moja inayolingana na sharia — huduma ya kipekee ya ndoa inayochanganya maadili ya Kiislamu na mawasiliano rahisi, yenye maana, ikisaidia wale wanaotafuta ndoa kupata mwenzi sahihi wa maisha.",
      "Kutana moja kwa moja katika ofisi yetu jijini Amsterdam, au mtandaoni ikiwa uko nje ya Ulaya. Kila mkutano unasimamiwa kikamilifu, ukiwa na uwepo wa wanafamilia na miongozo wazi ya sharia inayolinda staha na heshima, popote ulipo.",
    ],
    imageAlt: {
      street: "Barabara tulivu ya Amsterdam yenye baiskeli na taa ya kandili wakati wa jioni",
      canal: "Nyumba za kihistoria za mfereji kando ya njia ya maji ya Amsterdam",
      tulips: "Maua ya tulip yaliyochanua kando ya mfereji wa Amsterdam",
    },
  },
  why: {
    title: "Kwa Nini Kuchagua Mikutano ya Moja kwa Moja Inayolingana na Sharia?",
    description:
      "Katika Zefaaf, tunaelewa changamoto za kutafuta mwenzi wa maisha anayeshiriki kikamilifu maadili na kanuni zako. Ndiyo maana tumeunda uzoefu salama na wa kuaminika kwa ajili yako, popote ulipo duniani.",
    leftBullets: [
      {
        title: "Mawasiliano Rahisi na ya Papo Hapo",
        description: "Bila matatizo — timu yetu ya usaidizi inakuongoza katika kila hatua.",
      },
      {
        title: "Mikutano Halisi katika Ofisi Yetu Uholanzi",
        description: "Fahamianeni kwa uwazi na kwa ukweli, ana kwa ana.",
      },
      {
        title: "Mikutano ya Mtandaoni Nje ya Uholanzi",
        description: "Uzito uleule na miongozo ya sharia, bila mipaka ya kijiografia.",
      },
    ],
    rightBullets: [
      {
        title: "Usimamizi Kamili na Uwepo wa Familia",
        description: "Usalama zaidi, faraja, na amani ya akili kwako na familia yako.",
      },
      {
        title: "Uelewa wa Kweli wa Mahitaji Yako",
        description: "Tunasikiliza kwa makini ili kukusaidia kupata upatanifu wenye maana.",
      },
      {
        title: "Faragha na Usiri Kamili",
        description: "Taarifa zako zinahifadhiwa kwa usalama na hushirikiwa tu na wenye nia thabiti ya ndoa.",
      },
    ],
    cta: "Jisajili kwa Huduma",
    badge: "tunafanya safari yako kuelekea ndoa kuwa rahisi na ya haraka zaidi.",
    photoAlt: "Wanandoa wapya wakikabiliana katika shamba la alizeti",
  },
  unique: {
    title: "Ni Nini Kinachofanya Mikutano Yetu Inayolingana na Sharia Kuwa ya Kipekee",
    cards: [
      {
        title: "Maeneo Halisi Barani Ulaya",
        description: "Kutana na wanaume na wanawake pamoja na familia zao ana kwa ana katika mazingira ya faragha na heshima.",
      },
      {
        title: "Mtandaoni kwa Kujitolea Kuleule",
        description: "Bora ikiwa uko nje ya Ulaya, ukiwa na viwango sawa na mikutano ya ana kwa ana.",
      },
      {
        title: "Mchakato Rahisi",
        description: "Shiriki mapendeleo yako ya mwenzi nasi, nasi tutashughulikia mengine kwa niaba yako.",
      },
    ],
  },
  benefits: {
    title: "Faida za Huduma",
    items: [
      {
        title: "Okoa Muda na Juhudi",
        description: "Uratibu wa haraka na wa moja kwa moja unaotegemea vigezo vilivyo wazi, popote ulipo.",
      },
      {
        title: "Mazingira Salama na ya Kuaminika",
        description: "Usimamizi kamili unaoheshimu maadili ya Kiislamu, iwe ana kwa ana au mtandaoni.",
      },
      {
        title: "Msaada wa Kudumu",
        description: "Tuko nawe katika kila hatua kujibu maswali yako na kutoa mwongozo.",
      },
      {
        title: "Faragha Kamili",
        description: "Taarifa zako zinahifadhiwa kwa usalama na hutumika tu kwa madhumuni ya huduma.",
      },
      {
        title: "Ofisi Halisi + Chaguo la Mtandaoni",
        description:
          "Ofisi yetu halisi ya Amsterdam inakupa imani zaidi, huku mikutano ya mtandaoni ikifanya huduma kupatikana popote ulipo.",
      },
    ],
    imageAlt: "Mfereji katika Amsterdam uliopambwa na nyumba za kihistoria wakati wa jioni",
  },
  how: {
    title: "Huduma Inafanyaje Kazi?",
    description:
      "Unachohitaji kufanya ni kuwasiliana nasi, kushiriki wasifu wako na mapendeleo ya mwenzi, na sisi tutashughulikia utafutaji. Kisha tutapanga mkutano kwa wakati unaowafaa ninyi wawili — ana kwa ana katika ofisi yetu ya Amsterdam au mtandaoni.",
    imageAlt: "Kinu cha upepo cha jadi cha Kiholanzi kando ya mfereji",
  },
};

const th: MeetingCopy = {
  hero: {
    cta: "สมัครใช้บริการ",
    title: "การพบปะโดยตรงที่สอดคล้องกับหลักชะรีอะฮ์",
    paragraphs: [
      "การพบปะโดยตรงที่สอดคล้องกับหลักชะรีอะฮ์ — บริการแต่งงานที่มีเอกลักษณ์เฉพาะตัว ผสมผสานคุณค่าของอิสลามเข้ากับการสื่อสารที่เรียบง่ายและมีความหมาย ช่วยให้ผู้ที่กำลังมองหาการแต่งงานพบคู่ชีวิตที่เหมาะสม",
      "พบปะกันโดยตรงที่สำนักงานของเราในอัมสเตอร์ดัม หรือทางออนไลน์หากคุณอยู่นอกทวีปยุโรป การพบปะทุกครั้งอยู่ภายใต้การดูแลอย่างเต็มที่ มีสมาชิกในครอบครัวร่วมอยู่ด้วย และเป็นไปตามแนวทางชะรีอะฮ์ที่ชัดเจน ซึ่งรักษาความสุภาพและศักดิ์ศรี ไม่ว่าคุณจะอยู่ที่ใดก็ตาม",
    ],
    imageAlt: {
      street: "ถนนอัมสเตอร์ดัมที่เงียบสงบยามพลบค่ำ มีจักรยานและโคมไฟ",
      canal: "บ้านริมคลองประวัติศาสตร์ตามแนวทางน้ำในอัมสเตอร์ดัม",
      tulips: "ดอกทิวลิปที่บานสะพรั่งริมคลองในอัมสเตอร์ดัม",
    },
  },
  why: {
    title: "ทำไมต้องเลือกการพบปะโดยตรงที่สอดคล้องกับหลักชะรีอะฮ์?",
    description:
      "ที่ Zefaaf เราเข้าใจถึงความท้าทายในการค้นหาคู่ชีวิตที่มีคุณค่าและหลักการเดียวกันกับคุณอย่างแท้จริง นั่นคือเหตุผลที่เราสร้างประสบการณ์ที่ปลอดภัยและน่าเชื่อถือสำหรับคุณ ไม่ว่าคุณจะอยู่ที่ใดในโลก",
    leftBullets: [
      {
        title: "การสื่อสารที่เรียบง่ายและรวดเร็ว",
        description: "ไม่มีความยุ่งยาก — ทีมงานที่คอยสนับสนุนของเราจะให้คำแนะนำคุณในทุกขั้นตอน",
      },
      {
        title: "การพบปะจริงที่สำนักงานของเราในเนเธอร์แลนด์",
        description: "ทำความรู้จักกันอย่างชัดเจนและเปิดใจ แบบเห็นหน้ากัน",
      },
      {
        title: "การพบปะออนไลน์นอกประเทศเนเธอร์แลนด์",
        description: "ความจริงจังและแนวทางชะรีอะฮ์แบบเดียวกัน โดยไม่มีข้อจำกัดทางภูมิศาสตร์",
      },
    ],
    rightBullets: [
      {
        title: "การดูแลอย่างเต็มที่และการมีส่วนร่วมของครอบครัว",
        description: "ความปลอดภัย ความสบายใจ และความอุ่นใจที่มากขึ้นสำหรับคุณและครอบครัว",
      },
      {
        title: "ความเข้าใจอย่างแท้จริงในความต้องการของคุณ",
        description: "เรารับฟังอย่างตั้งใจเพื่อช่วยให้คุณพบความเข้ากันได้ที่มีความหมาย",
      },
      {
        title: "ความเป็นส่วนตัวและการรักษาความลับอย่างสมบูรณ์",
        description: "ข้อมูลของคุณได้รับการเก็บรักษาอย่างปลอดภัย และแบ่งปันเฉพาะกับผู้ที่มีความตั้งใจจริงจังในการแต่งงานเท่านั้น",
      },
    ],
    cta: "สมัครใช้บริการ",
    badge: "เราทำให้เส้นทางสู่การแต่งงานของคุณง่ายและรวดเร็วยิ่งขึ้น",
    photoAlt: "คู่บ่าวสาวที่เพิ่งแต่งงานกันหันหน้าเข้าหากันในทุ่งดอกทานตะวัน",
  },
  unique: {
    title: "อะไรที่ทำให้การพบปะที่สอดคล้องกับหลักชะรีอะฮ์ของเราไม่เหมือนใคร",
    cards: [
      {
        title: "สถานที่จริงในยุโรป",
        description: "พบปะกับชายและหญิงพร้อมครอบครัวของพวกเขาแบบเห็นหน้ากัน ในบรรยากาศส่วนตัวและให้เกียรติกัน",
      },
      {
        title: "ออนไลน์ด้วยความมุ่งมั่นเช่นเดียวกัน",
        description: "เหมาะอย่างยิ่งหากคุณอยู่นอกทวีปยุโรป โดยมีมาตรฐานเดียวกันกับการพบปะแบบตัวต่อตัว",
      },
      {
        title: "ขั้นตอนที่เรียบง่าย",
        description: "แบ่งปันความต้องการคู่ครองของคุณกับเรา แล้วเราจะดูแลส่วนที่เหลือแทนคุณ",
      },
    ],
  },
  benefits: {
    title: "ประโยชน์ของบริการ",
    items: [
      {
        title: "ประหยัดเวลาและความพยายาม",
        description: "การประสานงานที่รวดเร็วและตรงไปตรงมาโดยอิงตามเกณฑ์ที่ชัดเจน ไม่ว่าคุณจะอยู่ที่ใด",
      },
      {
        title: "สภาพแวดล้อมที่ปลอดภัยและน่าเชื่อถือ",
        description: "การดูแลอย่างเต็มที่ที่เคารพคุณค่าของอิสลาม ไม่ว่าจะเป็นแบบพบหน้ากันหรือออนไลน์",
      },
      {
        title: "การสนับสนุนอย่างต่อเนื่อง",
        description: "เราอยู่เคียงข้างคุณในทุกขั้นตอนเพื่อตอบคำถามและให้คำแนะนำ",
      },
      {
        title: "ความเป็นส่วนตัวอย่างสมบูรณ์",
        description: "ข้อมูลของคุณได้รับการเก็บรักษาอย่างปลอดภัยและใช้เพื่อวัตถุประสงค์ของบริการเท่านั้น",
      },
      {
        title: "สำนักงานจริง + ตัวเลือกออนไลน์",
        description:
          "สำนักงานจริงของเราในอัมสเตอร์ดัมมอบความมั่นใจให้คุณมากขึ้น ในขณะที่การพบปะออนไลน์ทำให้บริการนี้เข้าถึงได้ไม่ว่าคุณจะอยู่ที่ใด",
      },
    ],
    imageAlt: "คลองในอัมสเตอร์ดัมที่รายล้อมด้วยบ้านประวัติศาสตร์ยามพลบค่ำ",
  },
  how: {
    title: "บริการนี้ทำงานอย่างไร?",
    description:
      "สิ่งที่คุณต้องทำคือติดต่อเรา แบ่งปันโปรไฟล์และความต้องการคู่ครองของคุณ แล้วเราจะดูแลการค้นหาให้ จากนั้นเราจะจัดการนัดพบในเวลาที่สะดวกสำหรับทั้งสองฝ่าย — ไม่ว่าจะเป็นแบบพบหน้ากันที่สำนักงานของเราในอัมสเตอร์ดัม หรือทางออนไลน์",
    imageAlt: "กังหันลมดัตช์แบบดั้งเดิมริมคลอง",
  },
};

const copyByLocale: Record<string, MeetingCopy> = {
  ar, en, nl, fr, de, tr, ru, id, zh, bn, bs, es, fa, pt, ja, ko, it, ur, ta, am, sv, da, sq, uz, az, fil, hi, kk, ms, pa, ps, sw, th,
};

export function getMeetingCopy(locale: string): MeetingCopy {
  return copyByLocale[locale] ?? en;
}
