// This page's copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical — adding a `bosniaTour`
// namespace to only some of them would make next-intl throw MISSING_MESSAGE
// for the rest. Same approach as the About, VIP, and Meeting-in-Country
// widgets. All 33 locales are translated directly in this file below. The
// nav label itself already exists in all 33 locales as
// `nav.servicesMenu.bosniaTour`.

export type BosniaBullet = {
  title: string;
  description: string;
};

export type BosniaCopy = {
  hero: {
    title: string;
    description: string;
    cta: string;
    pills: {
      date: string;
      payment: string;
      duration: string;
      location: string;
    };
    imageAlt: {
      collageMain: string;
      collageSecondary: string;
    };
  };
  destination: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    goal: {
      title: string;
      description: string;
    };
    cta: string;
    mapAlt: string;
  };
  help: {
    titleLine1: string;
    titleLine2: string;
    cards: {
      customPrograms: {
        title: string;
        prefix: string;
        highlight1: string;
        middle: string;
        highlight2: string;
        suffix: string;
      };
      followUp: BosniaBullet;
      showcasing: BosniaBullet & { usersBadge: string };
      requests: BosniaBullet;
    };
  };
  companion: {
    title: string;
    description: string;
    items: readonly string[];
    bgAlt: string;
  };
  why: {
    title: string;
    items: readonly BosniaBullet[];
    photoAlt: {
      tall: string;
      overlay: string;
    };
  };
};

const en: BosniaCopy = {
  hero: {
    title: "Wedding Team Escort Program in Bosnia",
    description:
      'For the first time in the Arab world, "Zefaaf Platform" launches a new initiative to build a comprehensive program that facilitates and encourages serious marriage between Muslim youth and Muslim girls and families in Bosnia and Herzegovina.',
    cta: "Book your seat now",
    pills: {
      date: "August 21, 2026",
      payment: "Payment: 500 Euro",
      duration: "Trip duration: 1 week",
      location: "Bosnia and Herzegovina",
    },
    imageAlt: {
      collageMain: "Aerial view of a river winding through the Bosnian countryside",
      collageSecondary: "The old bridge in Mostar, Bosnia and Herzegovina",
    },
  },
  destination: {
    eyebrow: "Our First Destination",
    title: "Bosnia and Herzegovina",
    paragraphs: [
      'As part of a series of trips organized by "Zefaaf Platform" to several European countries, our first journey begins with Bosnia and Herzegovina.',
      "There, the platform's team meets Muslim girls and families, to learn firsthand about marriage requirements, the process of courtship and engagement, and the legal and cultural aspects related to marriage in Bosnia.",
      'This field experience will later be transferred to "Zefaaf Platform", to become part of its permanent services.',
    ],
    goal: {
      title: "Goal",
      description:
        "The goal of the trip is to build direct relationships and partnerships with the Muslim community in Bosnia, and to learn about the requirements and mechanisms of marriage there.",
    },
    cta: "Book your seat now",
    mapAlt: "Map of Bosnia and Herzegovina with a location pin marking the destination",
  },
  help: {
    titleLine1: "How can we help you",
    titleLine2: "get married in Bosnia?",
    cards: {
      customPrograms: {
        title: "Custom programs and subscriptions",
        prefix: "We offer ",
        highlight1: "tailored programs",
        middle: " and subscriptions designed specifically for this service, covering ",
        highlight2: "different needs",
        suffix: " for those serious about marriage.",
      },
      followUp: {
        title: "Serious and ongoing follow-up",
        description:
          "We accompany both parties with organized follow-up, adhering to Islamic guidelines from introduction to engagement.",
      },
      showcasing: {
        title: "Showcasing profiles to girls and families",
        description:
          "We present suitable profiles to interested girls and families, within a framework of privacy and respect.",
        usersBadge: "Over 10,000 users",
      },
      requests: {
        title: "Receiving marriage requests",
        description:
          "We receive requests from young people interested in marrying Bosnian women and help them complete their profiles accurately.",
      },
    },
  },
  companion: {
    title: "And most importantly, our companion service to Bosnia",
    description:
      "As part of our journey, our platform offers a 6-day, 5-night wedding team escort service, with the flexibility to participate for the duration that suits each person's ability.",
    items: [
      "Preparing the participant's file and guiding them.",
      "Organizing field visits and meetings with Bosnian families and girls interested in serious marriage.",
      "Following up on preliminary acceptance and coordinating between both parties.",
      'Attending the first event organized by "Zefaaf Platform" in Bosnia.',
      "Preparing an official invitation to support the Bosnia visa application and facilitate the submission process.",
      "A one-time fee until we find your life partner.",
    ],
    bgAlt: "The Latin Bridge over the Miljacka river in Sarajevo, Bosnia and Herzegovina, lit up at night",
  },
  why: {
    title: "Why join this initiative",
    items: [
      {
        title: "A real opportunity",
        description: "For serious matchmaking with Muslim girls and families in Europe.",
      },
      {
        title: "Hands-on experience",
        description: "Preceded by precise knowledge of local traditions and legal procedures.",
      },
      {
        title: "Full accompaniment",
        description: "The Zefaaf platform team is with you from the first step to marriage completion.",
      },
      {
        title: "A clear process",
        description: "Organized matchmaking steps, away from randomness.",
      },
    ],
    photoAlt: {
      tall: "A panoramic view of the historic city of Mostar, Bosnia and Herzegovina",
      overlay: "The old streets of Mostar at sunset",
    },
  },
};

const ar: BosniaCopy = {
  hero: {
    title: "برنامج مرافقة فريق الزواج إلى البوسنة",
    description:
      'للمرة الأولى في العالم العربي، تطلق "منصة زفاف" مبادرة جديدة لبناء برنامج شامل يسهّل ويشجّع على الزواج الجاد بين الشباب المسلم والفتيات والأسر المسلمة في البوسنة والهرسك.',
    cta: "احجز مقعدك الآن",
    pills: {
      date: "21 أغسطس 2026",
      payment: "الرسوم: 500 يورو",
      duration: "مدة الرحلة: أسبوع واحد",
      location: "البوسنة والهرسك",
    },
    imageAlt: {
      collageMain: "منظر جوي لنهر يتعرج عبر الريف البوسني",
      collageSecondary: "الجسر القديم في موستار، البوسنة والهرسك",
    },
  },
  destination: {
    eyebrow: "وجهتنا الأولى",
    title: "البوسنة والهرسك",
    paragraphs: [
      'في إطار سلسلة رحلات تنظّمها "منصة زفاف" إلى دول أوروبية عدة، تبدأ رحلتنا الأولى بالبوسنة والهرسك.',
      "وفيها يلتقي فريق المنصة بفتيات وأُسر مسلمة هناك، للتعرّف عن قرب على متطلبات الزواج، وآلية التعارف والخِطبة، والجوانب القانونية والثقافية المرتبطة بالزواج في البوسنة.",
      'ستُنقل هذه التجربة الميدانية لاحقًا إلى "منصة زفاف"، لتصبح جزءًا من خدماتها الدائمة.',
    ],
    goal: {
      title: "الهدف",
      description:
        "الهدف من الرحلة هو بناء علاقات وشراكات مباشرة مع المجتمع المسلم في البوسنة، والتعرّف على متطلبات الزواج وآلياته هناك.",
    },
    cta: "احجز مقعدك الآن",
    mapAlt: "خريطة البوسنة والهرسك مع علامة تحدد موقع الوجهة",
  },
  help: {
    titleLine1: "كيف يمكننا مساعدتك",
    titleLine2: "على الزواج في البوسنة؟",
    cards: {
      customPrograms: {
        title: "برامج واشتراكات مخصصة",
        prefix: "نقدّم ",
        highlight1: "برامج مصممة خصيصًا",
        middle: " واشتراكات لهذه الخدمة، تغطي ",
        highlight2: "احتياجات مختلفة",
        suffix: " لكل الجادين في الزواج.",
      },
      followUp: {
        title: "متابعة جادة ومستمرة",
        description: "نرافق الطرفين بمتابعة منظمة، مع الالتزام بالضوابط الشرعية من التعارف وحتى الخطبة.",
      },
      showcasing: {
        title: "عرض الملفات على الفتيات والأسر",
        description: "نعرض الملفات المناسبة على الفتيات والأسر المهتمات، ضمن إطار من الخصوصية والاحترام.",
        usersBadge: "أكثر من 10,000 مستخدم",
      },
      requests: {
        title: "استقبال طلبات الزواج",
        description: "نستقبل طلبات الشباب الراغبين في الزواج من فتيات بوسنيات، ونساعدهم على استكمال ملفاتهم بدقة.",
      },
    },
  },
  companion: {
    title: "والأهم من ذلك، خدمة مرافقة فريق الزواج إلى البوسنة",
    description:
      "ضمن رحلتنا، تقدّم منصتنا خدمة مرافقة فريق الزواج لمدة 6 أيام و5 ليالٍ، مع مرونة المشاركة للمدة التي تناسب قدرة كل شخص.",
    items: [
      "تجهيز ملف المشارك وإرشاده.",
      "تنظيم زيارات ولقاءات ميدانية مع أسر وفتيات بوسنيات جادات في الزواج.",
      "متابعة القبول المبدئي والتنسيق بين الطرفين.",
      'حضور أول فعالية تنظمها "منصة زفاف" في البوسنة.',
      "تجهيز دعوة رسمية لدعم طلب تأشيرة البوسنة وتسهيل إجراءات التقديم.",
      "رسوم لمرة واحدة حتى نجد شريك حياتك.",
    ],
    bgAlt: "جسر لاتيني فوق نهر ميلياتسكا في سراييفو، البوسنة والهرسك، مضاء ليلاً",
  },
  why: {
    title: "لماذا تنضم لهذه المبادرة",
    items: [
      {
        title: "فرصة حقيقية",
        description: "للتعارف الجاد مع فتيات وأسر مسلمة في أوروبا.",
      },
      {
        title: "تجربة ميدانية",
        description: "مسبوقة بمعرفة دقيقة بالتقاليد والإجراءات القانونية المحلية.",
      },
      {
        title: "مرافقة كاملة",
        description: "فريق منصة زفاف معك من الخطوة الأولى وحتى إتمام الزواج.",
      },
      {
        title: "خطوات واضحة",
        description: "إجراءات تعارف منظمة، بعيدًا عن العشوائية.",
      },
    ],
    photoAlt: {
      tall: "منظر بانورامي لمدينة موستار التاريخية في البوسنة والهرسك",
      overlay: "أزقة موستار القديمة عند الغروب",
    },
  },
};

const nl: BosniaCopy = {
  hero: {
    title: "Begeleidingsprogramma voor het huwelijksteam naar Bosnië",
    description:
      'Voor het eerst in de Arabische wereld lanceert "Zefaaf Platform" een nieuw initiatief om een uitgebreid programma op te zetten dat een serieus huwelijk tussen moslimjongeren en moslimmeisjes en -families in Bosnië en Herzegovina vergemakkelijkt en aanmoedigt.',
    cta: "Boek nu je plek",
    pills: {
      date: "21 augustus 2026",
      payment: "Betaling: 500 euro",
      duration: "Reisduur: 1 week",
      location: "Bosnië en Herzegovina",
    },
    imageAlt: {
      collageMain: "Luchtfoto van een rivier die door het Bosnische platteland kronkelt",
      collageSecondary: "De oude brug in Mostar, Bosnië en Herzegovina",
    },
  },
  destination: {
    eyebrow: "Onze eerste bestemming",
    title: "Bosnië en Herzegovina",
    paragraphs: [
      'Als onderdeel van een reeks reizen die door "Zefaaf Platform" naar verschillende Europese landen worden georganiseerd, begint onze eerste reis in Bosnië en Herzegovina.',
      "Daar ontmoet het team van het platform moslimmeisjes en -families, om uit eerste hand kennis te maken met de huwelijksvereisten, het proces van kennismaking en verloving, en de juridische en culturele aspecten van het huwelijk in Bosnië.",
      'Deze praktijkervaring wordt later overgedragen aan "Zefaaf Platform", om deel te gaan uitmaken van de vaste diensten.',
    ],
    goal: {
      title: "Doel",
      description:
        "Het doel van de reis is het opbouwen van directe relaties en partnerschappen met de moslimgemeenschap in Bosnië, en het leren kennen van de vereisten en mechanismen van het huwelijk daar.",
    },
    cta: "Boek nu je plek",
    mapAlt: "Kaart van Bosnië en Herzegovina met een locatiepin die de bestemming markeert",
  },
  help: {
    titleLine1: "Hoe kunnen we je helpen",
    titleLine2: "om in Bosnië te trouwen?",
    cards: {
      customPrograms: {
        title: "Programma's en abonnementen op maat",
        prefix: "Wij bieden ",
        highlight1: "programma's op maat",
        middle: " en abonnementen die speciaal voor deze dienst zijn ontworpen, en die ",
        highlight2: "verschillende behoeften",
        suffix: " dekken voor wie serieus is over trouwen.",
      },
      followUp: {
        title: "Serieuze en doorlopende begeleiding",
        description:
          "We begeleiden beide partijen met een georganiseerde opvolging, met inachtneming van de islamitische richtlijnen, van kennismaking tot verloving.",
      },
      showcasing: {
        title: "Profielen tonen aan meisjes en families",
        description:
          "We presenteren geschikte profielen aan geïnteresseerde meisjes en families, binnen een kader van privacy en respect.",
        usersBadge: "Meer dan 10.000 gebruikers",
      },
      requests: {
        title: "Ontvangen van huwelijksaanvragen",
        description:
          "We ontvangen aanvragen van jongeren die geïnteresseerd zijn om met Bosnische vrouwen te trouwen en helpen hen hun profiel nauwkeurig in te vullen.",
      },
    },
  },
  companion: {
    title: "En vooral onze begeleidingsdienst naar Bosnië",
    description:
      "Als onderdeel van onze reis biedt ons platform een begeleidingsdienst voor het huwelijksteam van 6 dagen en 5 nachten, met de flexibiliteit om deel te nemen voor de duur die bij ieders mogelijkheden past.",
    items: [
      "Het dossier van de deelnemer voorbereiden en begeleiden.",
      "Veldbezoeken en ontmoetingen organiseren met Bosnische families en meisjes die serieus zijn over trouwen.",
      "De voorlopige acceptatie opvolgen en coördineren tussen beide partijen.",
      'Deelname aan het eerste evenement dat door "Zefaaf Platform" in Bosnië wordt georganiseerd.',
      "Een officiële uitnodiging voorbereiden ter ondersteuning van de visumaanvraag voor Bosnië en om het indieningsproces te vergemakkelijken.",
      "Een eenmalige vergoeding totdat we je levenspartner vinden.",
    ],
    bgAlt: "De Latijnse Brug over de rivier de Miljacka in Sarajevo, Bosnië en Herzegovina, 's nachts verlicht",
  },
  why: {
    title: "Waarom je bij dit initiatief moet aansluiten",
    items: [
      {
        title: "Een echte kans",
        description: "Voor serieuze kennismaking met moslimmeisjes en -families in Europa.",
      },
      {
        title: "Praktijkervaring",
        description: "Voorafgegaan door nauwkeurige kennis van lokale tradities en juridische procedures.",
      },
      {
        title: "Volledige begeleiding",
        description: "Het team van Zefaaf Platform staat vanaf de eerste stap tot de voltooiing van het huwelijk aan je zijde.",
      },
      {
        title: "Een duidelijk proces",
        description: "Georganiseerde stappen voor kennismaking, ver van willekeur.",
      },
    ],
    photoAlt: {
      tall: "Een panoramisch uitzicht op de historische stad Mostar, Bosnië en Herzegovina",
      overlay: "De oude straten van Mostar bij zonsondergang",
    },
  },
};

const fr: BosniaCopy = {
  hero: {
    title: "Programme d'accompagnement de l'équipe de mariage en Bosnie",
    description:
      'Pour la première fois dans le monde arabe, "Plateforme Zefaaf" lance une nouvelle initiative pour construire un programme complet qui facilite et encourage le mariage sérieux entre jeunes musulmans et jeunes filles et familles musulmanes en Bosnie-Herzégovine.',
    cta: "Réservez votre place maintenant",
    pills: {
      date: "21 août 2026",
      payment: "Paiement : 500 euros",
      duration: "Durée du voyage : 1 semaine",
      location: "Bosnie-Herzégovine",
    },
    imageAlt: {
      collageMain: "Vue aérienne d'une rivière serpentant à travers la campagne bosniaque",
      collageSecondary: "Le vieux pont de Mostar, en Bosnie-Herzégovine",
    },
  },
  destination: {
    eyebrow: "Notre première destination",
    title: "Bosnie-Herzégovine",
    paragraphs: [
      'Dans le cadre d\'une série de voyages organisés par "Plateforme Zefaaf" dans plusieurs pays européens, notre premier périple commence par la Bosnie-Herzégovine.',
      "Là-bas, l'équipe de la plateforme rencontre des jeunes filles et des familles musulmanes, afin de découvrir directement les conditions du mariage, le processus de connaissance et de fiançailles, ainsi que les aspects juridiques et culturels liés au mariage en Bosnie.",
      'Cette expérience de terrain sera ensuite intégrée à "Plateforme Zefaaf", pour devenir partie intégrante de ses services permanents.',
    ],
    goal: {
      title: "Objectif",
      description:
        "L'objectif du voyage est de construire des relations et des partenariats directs avec la communauté musulmane en Bosnie, et de découvrir les exigences et les mécanismes du mariage sur place.",
    },
    cta: "Réservez votre place maintenant",
    mapAlt: "Carte de la Bosnie-Herzégovine avec une épingle marquant l'emplacement de la destination",
  },
  help: {
    titleLine1: "Comment pouvons-nous vous aider",
    titleLine2: "à vous marier en Bosnie ?",
    cards: {
      customPrograms: {
        title: "Programmes et abonnements sur mesure",
        prefix: "Nous proposons des ",
        highlight1: "programmes sur mesure",
        middle: " et des abonnements conçus spécifiquement pour ce service, couvrant des ",
        highlight2: "besoins variés",
        suffix: " pour les personnes sérieuses dans leur démarche de mariage.",
      },
      followUp: {
        title: "Suivi sérieux et continu",
        description:
          "Nous accompagnons les deux parties avec un suivi organisé, dans le respect des principes islamiques, de la prise de contact aux fiançailles.",
      },
      showcasing: {
        title: "Présentation des profils aux jeunes filles et aux familles",
        description:
          "Nous présentons des profils adaptés aux jeunes filles et familles intéressées, dans un cadre de confidentialité et de respect.",
        usersBadge: "Plus de 10 000 utilisateurs",
      },
      requests: {
        title: "Réception des demandes de mariage",
        description:
          "Nous recevons les demandes des jeunes hommes intéressés par le mariage avec des femmes bosniaques et les aidons à compléter leur profil avec précision.",
      },
    },
  },
  companion: {
    title: "Et surtout, notre service d'accompagnement en Bosnie",
    description:
      "Dans le cadre de notre voyage, notre plateforme propose un service d'accompagnement de l'équipe de mariage de 6 jours et 5 nuits, avec la flexibilité de participer pour la durée qui convient aux moyens de chacun.",
    items: [
      "Préparation du dossier du participant et accompagnement.",
      "Organisation de visites de terrain et de rencontres avec des familles et jeunes filles bosniaques sérieuses dans leur démarche de mariage.",
      "Suivi de l'accord préliminaire et coordination entre les deux parties.",
      'Participation au premier événement organisé par "Plateforme Zefaaf" en Bosnie.',
      "Préparation d'une invitation officielle pour appuyer la demande de visa pour la Bosnie et faciliter la procédure de dépôt.",
      "Des frais uniques jusqu'à ce que nous trouvions votre partenaire de vie.",
    ],
    bgAlt: "Le pont Latin sur la rivière Miljacka à Sarajevo, en Bosnie-Herzégovine, illuminé la nuit",
  },
  why: {
    title: "Pourquoi rejoindre cette initiative",
    items: [
      {
        title: "Une véritable opportunité",
        description: "Pour une rencontre sérieuse avec des jeunes filles et des familles musulmanes en Europe.",
      },
      {
        title: "Une expérience de terrain",
        description: "Précédée d'une connaissance précise des traditions locales et des procédures juridiques.",
      },
      {
        title: "Un accompagnement complet",
        description: "L'équipe de la plateforme Zefaaf est à vos côtés depuis la première étape jusqu'à la conclusion du mariage.",
      },
      {
        title: "Un processus clair",
        description: "Des étapes de rencontre organisées, loin du hasard.",
      },
    ],
    photoAlt: {
      tall: "Une vue panoramique de la ville historique de Mostar, en Bosnie-Herzégovine",
      overlay: "Les vieilles rues de Mostar au coucher du soleil",
    },
  },
};

const de: BosniaCopy = {
  hero: {
    title: "Begleitprogramm des Heiratsteams nach Bosnien",
    description:
      'Zum ersten Mal in der arabischen Welt startet die "Zefaaf-Plattform" eine neue Initiative, um ein umfassendes Programm aufzubauen, das eine ernsthafte Eheschließung zwischen muslimischen jungen Männern und muslimischen Frauen und Familien in Bosnien und Herzegowina erleichtert und fördert.',
    cta: "Jetzt Platz buchen",
    pills: {
      date: "21. August 2026",
      payment: "Zahlung: 500 Euro",
      duration: "Reisedauer: 1 Woche",
      location: "Bosnien und Herzegowina",
    },
    imageAlt: {
      collageMain: "Luftaufnahme eines Flusses, der sich durch die bosnische Landschaft schlängelt",
      collageSecondary: "Die alte Brücke in Mostar, Bosnien und Herzegowina",
    },
  },
  destination: {
    eyebrow: "Unser erstes Reiseziel",
    title: "Bosnien und Herzegowina",
    paragraphs: [
      'Als Teil einer Reihe von Reisen, die von der "Zefaaf-Plattform" in mehrere europäische Länder organisiert werden, beginnt unsere erste Reise mit Bosnien und Herzegowina.',
      "Dort trifft das Team der Plattform muslimische Frauen und Familien, um aus erster Hand die Voraussetzungen für eine Ehe, den Prozess des Kennenlernens und der Verlobung sowie die rechtlichen und kulturellen Aspekte der Eheschließung in Bosnien kennenzulernen.",
      'Diese praktische Erfahrung wird später in die "Zefaaf-Plattform" übertragen und Teil ihrer dauerhaften Dienstleistungen.',
    ],
    goal: {
      title: "Ziel",
      description:
        "Das Ziel der Reise ist es, direkte Beziehungen und Partnerschaften mit der muslimischen Gemeinschaft in Bosnien aufzubauen und die dortigen Voraussetzungen und Abläufe der Eheschließung kennenzulernen.",
    },
    cta: "Jetzt Platz buchen",
    mapAlt: "Karte von Bosnien und Herzegowina mit einer Standortmarkierung des Reiseziels",
  },
  help: {
    titleLine1: "Wie können wir dir helfen,",
    titleLine2: "in Bosnien zu heiraten?",
    cards: {
      customPrograms: {
        title: "Individuelle Programme und Abonnements",
        prefix: "Wir bieten ",
        highlight1: "maßgeschneiderte Programme",
        middle: " und Abonnements, die speziell für diesen Dienst konzipiert wurden und ",
        highlight2: "unterschiedliche Bedürfnisse",
        suffix: " für alle abdecken, die es mit der Ehe ernst meinen.",
      },
      followUp: {
        title: "Ernsthafte und kontinuierliche Betreuung",
        description:
          "Wir begleiten beide Seiten mit einer organisierten Betreuung, unter Einhaltung der islamischen Richtlinien, vom Kennenlernen bis zur Verlobung.",
      },
      showcasing: {
        title: "Vorstellung von Profilen bei Frauen und Familien",
        description:
          "Wir stellen geeigneten interessierten Frauen und Familien passende Profile vor, im Rahmen von Privatsphäre und Respekt.",
        usersBadge: "Über 10.000 Nutzer",
      },
      requests: {
        title: "Entgegennahme von Heiratsanfragen",
        description:
          "Wir nehmen Anfragen von jungen Männern entgegen, die daran interessiert sind, bosnische Frauen zu heiraten, und helfen ihnen, ihr Profil genau zu vervollständigen.",
      },
    },
  },
  companion: {
    title: "Und vor allem unser Begleitservice nach Bosnien",
    description:
      "Im Rahmen unserer Reise bietet unsere Plattform einen 6-tägigen, 5-nächtigen Begleitservice des Heiratsteams an, mit der Flexibilität, für die Dauer teilzunehmen, die den Möglichkeiten jeder Person entspricht.",
    items: [
      "Vorbereitung und Begleitung der Akte des Teilnehmers.",
      "Organisation von Vor-Ort-Besuchen und Treffen mit bosnischen Familien und Frauen, die es mit der Ehe ernst meinen.",
      "Nachverfolgung der vorläufigen Zusage und Koordination zwischen beiden Seiten.",
      'Teilnahme an der ersten von der "Zefaaf-Plattform" in Bosnien organisierten Veranstaltung.',
      "Vorbereitung einer offiziellen Einladung zur Unterstützung des Bosnien-Visumantrags und zur Erleichterung des Antragsverfahrens.",
      "Eine einmalige Gebühr, bis wir deinen Lebenspartner finden.",
    ],
    bgAlt: "Die Lateinerbrücke über den Fluss Miljacka in Sarajevo, Bosnien und Herzegowina, nachts beleuchtet",
  },
  why: {
    title: "Warum sich dieser Initiative anschließen",
    items: [
      {
        title: "Eine echte Chance",
        description: "Für ernsthaftes Kennenlernen mit muslimischen Frauen und Familien in Europa.",
      },
      {
        title: "Praktische Erfahrung",
        description: "Vorausgegangen von genauem Wissen über lokale Traditionen und rechtliche Verfahren.",
      },
      {
        title: "Vollständige Begleitung",
        description: "Das Team der Zefaaf-Plattform ist vom ersten Schritt bis zum Abschluss der Ehe an deiner Seite.",
      },
      {
        title: "Ein klarer Ablauf",
        description: "Organisierte Schritte des Kennenlernens, fernab von Zufall.",
      },
    ],
    photoAlt: {
      tall: "Ein Panoramablick auf die historische Stadt Mostar, Bosnien und Herzegowina",
      overlay: "Die alten Gassen von Mostar bei Sonnenuntergang",
    },
  },
};

const tr: BosniaCopy = {
  hero: {
    title: "Bosna'da Evlilik Ekibi Refakat Programı",
    description:
      'Arap dünyasında ilk kez, "Zefaaf Platformu" Bosna Hersek\'te Müslüman gençler ile Müslüman kızlar ve aileler arasında ciddi evliliği kolaylaştıran ve teşvik eden kapsamlı bir program oluşturmak için yeni bir girişim başlatıyor.',
    cta: "Yerinizi Şimdi Ayırtın",
    pills: {
      date: "21 Ağustos 2026",
      payment: "Ödeme: 500 Euro",
      duration: "Gezi süresi: 1 hafta",
      location: "Bosna Hersek",
    },
    imageAlt: {
      collageMain: "Bosna kırsalından kıvrılarak geçen bir nehrin havadan görünümü",
      collageSecondary: "Bosna Hersek'te Mostar'daki eski köprü",
    },
  },
  destination: {
    eyebrow: "İlk Durağımız",
    title: "Bosna Hersek",
    paragraphs: [
      '"Zefaaf Platformu" tarafından çeşitli Avrupa ülkelerine düzenlenen bir dizi gezinin parçası olarak, ilk yolculuğumuz Bosna Hersek ile başlıyor.',
      "Orada platform ekibi, evlilik şartlarını, tanışma ve nişanlanma sürecini, Bosna'da evlilikle ilgili hukuki ve kültürel yönleri yerinde öğrenmek için Müslüman kızlar ve ailelerle bir araya geliyor.",
      'Bu saha deneyimi daha sonra "Zefaaf Platformu"na aktarılarak kalıcı hizmetlerinin bir parçası haline gelecektir.',
    ],
    goal: {
      title: "Amaç",
      description:
        "Gezinin amacı, Bosna'daki Müslüman toplulukla doğrudan ilişkiler ve ortaklıklar kurmak ve oradaki evlilik gereklilikleri ile işleyişini öğrenmektir.",
    },
    cta: "Yerinizi Şimdi Ayırtın",
    mapAlt: "Hedef konumu işaretleyen bir iğneyle Bosna Hersek haritası",
  },
  help: {
    titleLine1: "Bosna'da evlenmenize nasıl",
    titleLine2: "yardımcı olabiliriz?",
    cards: {
      customPrograms: {
        title: "Özel programlar ve abonelikler",
        prefix: "Bu hizmet için özel olarak tasarlanmış ",
        highlight1: "özel programlar",
        middle: " ve abonelikler sunuyoruz; evlilik konusunda ciddi olanlar için ",
        highlight2: "farklı ihtiyaçları",
        suffix: " karşılıyoruz.",
      },
      followUp: {
        title: "Ciddi ve sürekli takip",
        description:
          "Tanışmadan nişana kadar İslami ilkelere bağlı kalarak, düzenli takiple her iki tarafa da eşlik ediyoruz.",
      },
      showcasing: {
        title: "Kızlara ve ailelere profillerin sunulması",
        description:
          "İlgilenen kızlara ve ailelere, mahremiyet ve saygı çerçevesinde uygun profiller sunuyoruz.",
        usersBadge: "10.000'den fazla kullanıcı",
      },
      requests: {
        title: "Evlilik taleplerinin alınması",
        description:
          "Bosnalı kadınlarla evlenmek isteyen gençlerden gelen talepleri alıyor ve profillerini eksiksiz tamamlamalarına yardımcı oluyoruz.",
      },
    },
  },
  companion: {
    title: "Ve en önemlisi, Bosna'ya refakat hizmetimiz",
    description:
      "Yolculuğumuzun bir parçası olarak platformumuz, her bireyin imkânına uygun süre boyunca katılım esnekliğiyle 6 gün 5 gece süren bir evlilik ekibi refakat hizmeti sunuyor.",
    items: [
      "Katılımcının dosyasının hazırlanması ve yönlendirilmesi.",
      "Evlilik konusunda ciddi olan Bosnalı aile ve kızlarla saha ziyaretlerinin ve görüşmelerinin düzenlenmesi.",
      "Ön kabulün takibi ve iki taraf arasında koordinasyon sağlanması.",
      '"Zefaaf Platformu"nun Bosna\'da düzenlediği ilk etkinliğe katılım.',
      "Bosna vize başvurusunu desteklemek ve başvuru sürecini kolaylaştırmak için resmi bir davetiye hazırlanması.",
      "Hayat arkadaşınızı bulana kadar geçerli tek seferlik bir ücret.",
    ],
    bgAlt: "Bosna Hersek'in Saraybosna kentinde, Miljacka Nehri üzerindeki gece ışıklandırılmış Latin Köprüsü",
  },
  why: {
    title: "Neden bu girişime katılmalısınız",
    items: [
      {
        title: "Gerçek bir fırsat",
        description: "Avrupa'daki Müslüman kızlar ve ailelerle ciddi tanışıklık için.",
      },
      {
        title: "Sahada deneyim",
        description: "Yerel gelenekler ve hukuki prosedürler hakkında kesin bilgiyle desteklenmiş.",
      },
      {
        title: "Tam refakat",
        description: "Zefaaf platformu ekibi ilk adımdan evliliğin tamamlanmasına kadar yanınızda.",
      },
      {
        title: "Net bir süreç",
        description: "Rastgelelikten uzak, düzenli tanışma adımları.",
      },
    ],
    photoAlt: {
      tall: "Bosna Hersek'teki tarihi Mostar şehrinin panoramik görünümü",
      overlay: "Gün batımında Mostar'ın eski sokakları",
    },
  },
};

const ru: BosniaCopy = {
  hero: {
    title: "Программа сопровождения свадебной команды в Боснию",
    description:
      'Впервые в арабском мире "Платформа Зефааф" запускает новую инициативу по созданию комплексной программы, которая способствует и поощряет серьёзный брак между мусульманскими юношами и мусульманскими девушками и семьями в Боснии и Герцеговине.',
    cta: "Забронировать место сейчас",
    pills: {
      date: "21 августа 2026 г.",
      payment: "Оплата: 500 евро",
      duration: "Продолжительность поездки: 1 неделя",
      location: "Босния и Герцеговина",
    },
    imageAlt: {
      collageMain: "Вид с воздуха на реку, извивающуюся по боснийской сельской местности",
      collageSecondary: "Старый мост в Мостаре, Босния и Герцеговина",
    },
  },
  destination: {
    eyebrow: "Наш первый пункт назначения",
    title: "Босния и Герцеговина",
    paragraphs: [
      'В рамках серии поездок, организуемых "Платформой Зефааф" в несколько европейских стран, наше первое путешествие начинается с Боснии и Герцеговины.',
      "Там команда платформы встречается с мусульманскими девушками и семьями, чтобы из первых рук узнать о требованиях к браку, процессе знакомства и помолвки, а также о правовых и культурных аспектах, связанных с браком в Боснии.",
      'Этот практический опыт впоследствии будет перенесён в "Платформу Зефааф" и станет частью её постоянных услуг.',
    ],
    goal: {
      title: "Цель",
      description:
        "Цель поездки — наладить прямые отношения и партнёрства с мусульманской общиной в Боснии и узнать о требованиях и механизмах заключения брака там.",
    },
    cta: "Забронировать место сейчас",
    mapAlt: "Карта Боснии и Герцеговины с меткой, отмечающей место назначения",
  },
  help: {
    titleLine1: "Как мы можем помочь вам",
    titleLine2: "вступить в брак в Боснии?",
    cards: {
      customPrograms: {
        title: "Индивидуальные программы и подписки",
        prefix: "Мы предлагаем ",
        highlight1: "индивидуальные программы",
        middle: " и подписки, разработанные специально для этой услуги и охватывающие ",
        highlight2: "разные потребности",
        suffix: " тех, кто серьёзно настроен на брак.",
      },
      followUp: {
        title: "Серьёзное и постоянное сопровождение",
        description:
          "Мы сопровождаем обе стороны с организованным контролем, придерживаясь исламских норм — от знакомства до помолвки.",
      },
      showcasing: {
        title: "Представление анкет девушкам и семьям",
        description:
          "Мы представляем подходящие анкеты заинтересованным девушкам и семьям в рамках конфиденциальности и уважения.",
        usersBadge: "Более 10 000 пользователей",
      },
      requests: {
        title: "Приём заявок на брак",
        description:
          "Мы принимаем заявки от юношей, заинтересованных в браке с боснийскими девушками, и помогаем им точно заполнить анкету.",
      },
    },
  },
  companion: {
    title: "И самое главное — наша услуга сопровождения в Боснию",
    description:
      "В рамках нашей поездки платформа предлагает услугу сопровождения свадебной команды продолжительностью 6 дней и 5 ночей, с гибкой возможностью участия на срок, соответствующий возможностям каждого.",
    items: [
      "Подготовка досье участника и его сопровождение.",
      "Организация выездных визитов и встреч с боснийскими семьями и девушками, серьёзно настроенными на брак.",
      "Отслеживание предварительного согласия и координация между обеими сторонами.",
      'Участие в первом мероприятии, организованном "Платформой Зефааф" в Боснии.',
      "Подготовка официального приглашения для поддержки заявления на боснийскую визу и упрощения процесса подачи документов.",
      "Единоразовая оплата до тех пор, пока мы не найдём вашего спутника жизни.",
    ],
    bgAlt: "Латинский мост через реку Миляцка в Сараево, Босния и Герцеговина, освещённый ночью",
  },
  why: {
    title: "Почему стоит присоединиться к этой инициативе",
    items: [
      {
        title: "Реальная возможность",
        description: "Для серьёзного знакомства с мусульманскими девушками и семьями в Европе.",
      },
      {
        title: "Практический опыт",
        description: "Которому предшествует точное знание местных традиций и юридических процедур.",
      },
      {
        title: "Полное сопровождение",
        description: "Команда платформы Зефааф рядом с вами от первого шага до заключения брака.",
      },
      {
        title: "Понятный процесс",
        description: "Организованные шаги знакомства, без элемента случайности.",
      },
    ],
    photoAlt: {
      tall: "Панорамный вид на исторический город Мостар, Босния и Герцеговина",
      overlay: "Старые улицы Мостара на закате",
    },
  },
};

const id: BosniaCopy = {
  hero: {
    title: "Program Pendampingan Tim Pernikahan ke Bosnia",
    description:
      'Untuk pertama kalinya di dunia Arab, "Platform Zefaaf" meluncurkan inisiatif baru untuk membangun program komprehensif yang memfasilitasi dan mendorong pernikahan serius antara pemuda Muslim dengan gadis dan keluarga Muslim di Bosnia dan Herzegovina.',
    cta: "Pesan Tempat Anda Sekarang",
    pills: {
      date: "21 Agustus 2026",
      payment: "Pembayaran: 500 Euro",
      duration: "Durasi perjalanan: 1 minggu",
      location: "Bosnia dan Herzegovina",
    },
    imageAlt: {
      collageMain: "Pemandangan udara sungai yang berkelok-kelok melintasi pedesaan Bosnia",
      collageSecondary: "Jembatan tua di Mostar, Bosnia dan Herzegovina",
    },
  },
  destination: {
    eyebrow: "Destinasi Pertama Kami",
    title: "Bosnia dan Herzegovina",
    paragraphs: [
      'Sebagai bagian dari serangkaian perjalanan yang diselenggarakan oleh "Platform Zefaaf" ke beberapa negara Eropa, perjalanan pertama kami dimulai dengan Bosnia dan Herzegovina.',
      "Di sana, tim platform bertemu dengan gadis dan keluarga Muslim untuk mempelajari langsung persyaratan pernikahan, proses ta'aruf dan pertunangan, serta aspek hukum dan budaya terkait pernikahan di Bosnia.",
      'Pengalaman lapangan ini nantinya akan dialihkan ke "Platform Zefaaf", untuk menjadi bagian dari layanan tetapnya.',
    ],
    goal: {
      title: "Tujuan",
      description:
        "Tujuan perjalanan ini adalah membangun hubungan dan kemitraan langsung dengan komunitas Muslim di Bosnia, serta mempelajari persyaratan dan mekanisme pernikahan di sana.",
    },
    cta: "Pesan Tempat Anda Sekarang",
    mapAlt: "Peta Bosnia dan Herzegovina dengan penanda lokasi yang menandai destinasi",
  },
  help: {
    titleLine1: "Bagaimana kami dapat membantu Anda",
    titleLine2: "menikah di Bosnia?",
    cards: {
      customPrograms: {
        title: "Program dan langganan khusus",
        prefix: "Kami menawarkan ",
        highlight1: "program yang disesuaikan",
        middle: " dan langganan yang dirancang khusus untuk layanan ini, mencakup ",
        highlight2: "berbagai kebutuhan",
        suffix: " bagi mereka yang serius menikah.",
      },
      followUp: {
        title: "Pendampingan yang serius dan berkelanjutan",
        description:
          "Kami mendampingi kedua belah pihak dengan pendampingan yang terorganisir, sesuai dengan panduan Islami mulai dari ta'aruf hingga pertunangan.",
      },
      showcasing: {
        title: "Menampilkan profil kepada gadis dan keluarga",
        description:
          "Kami menyajikan profil yang sesuai kepada gadis dan keluarga yang berminat, dalam kerangka privasi dan penghormatan.",
        usersBadge: "Lebih dari 10.000 pengguna",
      },
      requests: {
        title: "Menerima permohonan pernikahan",
        description:
          "Kami menerima permohonan dari para pemuda yang tertarik menikahi wanita Bosnia dan membantu mereka melengkapi profil secara akurat.",
      },
    },
  },
  companion: {
    title: "Dan yang terpenting, layanan pendampingan kami ke Bosnia",
    description:
      "Sebagai bagian dari perjalanan kami, platform kami menawarkan layanan pendampingan tim pernikahan selama 6 hari 5 malam, dengan fleksibilitas berpartisipasi sesuai durasi yang sesuai kemampuan masing-masing.",
    items: [
      "Menyiapkan berkas peserta dan membimbingnya.",
      "Mengatur kunjungan lapangan dan pertemuan dengan keluarga dan gadis Bosnia yang serius untuk menikah.",
      "Menindaklanjuti persetujuan awal dan mengoordinasikan kedua belah pihak.",
      'Menghadiri acara pertama yang diselenggarakan oleh "Platform Zefaaf" di Bosnia.',
      "Menyiapkan undangan resmi untuk mendukung pengajuan visa Bosnia dan memperlancar proses pengajuan.",
      "Biaya sekali bayar hingga kami menemukan pasangan hidup Anda.",
    ],
    bgAlt: "Jembatan Latin di atas Sungai Miljacka di Sarajevo, Bosnia dan Herzegovina, yang bercahaya di malam hari",
  },
  why: {
    title: "Mengapa bergabung dengan inisiatif ini",
    items: [
      {
        title: "Kesempatan nyata",
        description: "Untuk perkenalan serius dengan gadis dan keluarga Muslim di Eropa.",
      },
      {
        title: "Pengalaman langsung",
        description: "Didahului dengan pengetahuan mendalam tentang tradisi lokal dan prosedur hukum.",
      },
      {
        title: "Pendampingan penuh",
        description: "Tim platform Zefaaf bersama Anda mulai dari langkah pertama hingga pernikahan selesai.",
      },
      {
        title: "Proses yang jelas",
        description: "Langkah-langkah ta'aruf yang terorganisir, jauh dari keacakan.",
      },
    ],
    photoAlt: {
      tall: "Pemandangan panorama kota bersejarah Mostar, Bosnia dan Herzegovina",
      overlay: "Jalan-jalan tua Mostar saat matahari terbenam",
    },
  },
};

const zh: BosniaCopy = {
  hero: {
    title: "波斯尼亚婚姻团队陪同项目",
    description:
      "这是阿拉伯世界的首次尝试,「泽法平台」推出一项全新计划,旨在建立一个全面的项目,促进并鼓励波斯尼亚和黑塞哥维那的穆斯林青年与穆斯林女孩及家庭之间的认真婚姻。",
    cta: "立即预订名额",
    pills: {
      date: "2026年8月21日",
      payment: "费用:500欧元",
      duration: "行程时长:1周",
      location: "波斯尼亚和黑塞哥维那",
    },
    imageAlt: {
      collageMain: "一条蜿蜒穿过波斯尼亚乡村的河流的航拍图",
      collageSecondary: "波斯尼亚和黑塞哥维那莫斯塔尔的老桥",
    },
  },
  destination: {
    eyebrow: "我们的首个目的地",
    title: "波斯尼亚和黑塞哥维那",
    paragraphs: [
      "作为「泽法平台」在多个欧洲国家组织的一系列旅程的一部分,我们的第一站从波斯尼亚和黑塞哥维那开始。",
      "在那里,平台团队将与穆斯林女孩及家庭会面,亲身了解婚姻的要求、相亲与订婚的流程,以及与波斯尼亚婚姻相关的法律和文化方面。",
      "这次实地经验后续将被纳入「泽法平台」,成为其常设服务的一部分。",
    ],
    goal: {
      title: "目标",
      description:
        "此行的目标是与波斯尼亚的穆斯林社区建立直接的关系与合作,并了解当地婚姻的要求和机制。",
    },
    cta: "立即预订名额",
    mapAlt: "标有目的地位置的波斯尼亚和黑塞哥维那地图",
  },
  help: {
    titleLine1: "我们如何帮助您",
    titleLine2: "在波斯尼亚完婚?",
    cards: {
      customPrograms: {
        title: "定制项目与订阅",
        prefix: "我们提供",
        highlight1: "量身定制的项目",
        middle: "和专为此服务设计的订阅,涵盖",
        highlight2: "不同的需求",
        suffix: ",满足认真对待婚姻的每一位人士。",
      },
      followUp: {
        title: "认真且持续的跟进",
        description: "我们以有组织的跟进方式陪伴双方,从相亲到订婚全程遵守伊斯兰准则。",
      },
      showcasing: {
        title: "向女孩及家庭展示资料",
        description: "我们在尊重隐私和相互尊重的框架内,向感兴趣的女孩及家庭展示合适的资料。",
        usersBadge: "超过10,000名用户",
      },
      requests: {
        title: "接受婚姻申请",
        description: "我们接受有意与波斯尼亚女性结婚的年轻人提出的申请,并协助他们准确完善个人资料。",
      },
    },
  },
  companion: {
    title: "更重要的是,我们的波斯尼亚陪同服务",
    description:
      "作为此行的一部分,我们的平台提供为期6天5夜的婚姻团队陪同服务,可根据每个人的能力灵活选择参与时长。",
    items: [
      "准备参与者的档案并加以指导。",
      "组织实地探访,与认真考虑婚姻的波斯尼亚家庭及女孩会面。",
      "跟进初步接受情况,并在双方之间进行协调。",
      "参加「泽法平台」在波斯尼亚举办的首场活动。",
      "准备官方邀请函,以支持波斯尼亚签证申请并简化申请流程。",
      "一次性收费,直到我们为您找到人生伴侣。",
    ],
    bgAlt: "波斯尼亚和黑塞哥维那萨拉热窝米利雅茨卡河上的拉丁桥夜景",
  },
  why: {
    title: "为何加入这项计划",
    items: [
      {
        title: "真实的机会",
        description: "与欧洲的穆斯林女孩及家庭建立认真的相亲关系。",
      },
      {
        title: "实地经验",
        description: "以对当地传统和法律程序的精确了解为先导。",
      },
      {
        title: "全程陪伴",
        description: "泽法平台团队从第一步到完婚全程陪伴您。",
      },
      {
        title: "清晰的流程",
        description: "有条理的相亲步骤,摆脱随意性。",
      },
    ],
    photoAlt: {
      tall: "波斯尼亚和黑塞哥维那历史名城莫斯塔尔的全景",
      overlay: "日落时分莫斯塔尔的老街",
    },
  },
};

const bn: BosniaCopy = {
  hero: {
    title: "বসনিয়ায় বিবাহ দল সহযোগিতা কর্মসূচি",
    description:
      'আরব বিশ্বে প্রথমবারের মতো, "জেফাফ প্ল্যাটফর্ম" একটি নতুন উদ্যোগ চালু করছে একটি ব্যাপক কর্মসূচি গড়ে তুলতে, যা বসনিয়া ও হার্জেগোভিনায় মুসলিম যুবক এবং মুসলিম মেয়ে ও পরিবারগুলোর মধ্যে গুরুত্বসহকারে বিবাহকে সহজতর ও উৎসাহিত করবে।',
    cta: "এখনই আপনার আসন বুক করুন",
    pills: {
      date: "২১ আগস্ট, ২০২৬",
      payment: "পেমেন্ট: ৫০০ ইউরো",
      duration: "ভ্রমণের সময়কাল: ১ সপ্তাহ",
      location: "বসনিয়া ও হার্জেগোভিনা",
    },
    imageAlt: {
      collageMain: "বসনিয়ার গ্রামাঞ্চল দিয়ে বয়ে চলা একটি নদীর আকাশপথের দৃশ্য",
      collageSecondary: "বসনিয়া ও হার্জেগোভিনার মোস্তারের পুরনো সেতু",
    },
  },
  destination: {
    eyebrow: "আমাদের প্রথম গন্তব্য",
    title: "বসনিয়া ও হার্জেগোভিনা",
    paragraphs: [
      '"জেফাফ প্ল্যাটফর্ম" কর্তৃক বিভিন্ন ইউরোপীয় দেশে আয়োজিত ভ্রমণ ধারাবাহিকতার অংশ হিসেবে, আমাদের প্রথম যাত্রা শুরু হচ্ছে বসনিয়া ও হার্জেগোভিনা দিয়ে।',
      "সেখানে প্ল্যাটফর্মের দল মুসলিম মেয়ে ও পরিবারের সাথে সাক্ষাৎ করবে, বিবাহের প্রয়োজনীয়তা, পরিচয় ও বাগদানের প্রক্রিয়া এবং বসনিয়ায় বিবাহ সম্পর্কিত আইনি ও সাংস্কৃতিক বিষয়গুলো সরাসরি জানার জন্য।",
      'এই মাঠপর্যায়ের অভিজ্ঞতা পরবর্তীতে "জেফাফ প্ল্যাটফর্ম"-এ স্থানান্তরিত হবে, যা এর স্থায়ী সেবার একটি অংশ হয়ে উঠবে।',
    ],
    goal: {
      title: "লক্ষ্য",
      description:
        "এই ভ্রমণের লক্ষ্য হলো বসনিয়ার মুসলিম সম্প্রদায়ের সাথে সরাসরি সম্পর্ক ও অংশীদারিত্ব গড়ে তোলা, এবং সেখানকার বিবাহের প্রয়োজনীয়তা ও প্রক্রিয়া সম্পর্কে জানা।",
    },
    cta: "এখনই আপনার আসন বুক করুন",
    mapAlt: "গন্তব্যের অবস্থান চিহ্নিত করা পিনসহ বসনিয়া ও হার্জেগোভিনার মানচিত্র",
  },
  help: {
    titleLine1: "আমরা কীভাবে আপনাকে",
    titleLine2: "বসনিয়ায় বিবাহে সাহায্য করতে পারি?",
    cards: {
      customPrograms: {
        title: "কাস্টম কর্মসূচি ও সাবস্ক্রিপশন",
        prefix: "আমরা প্রদান করি ",
        highlight1: "বিশেষভাবে তৈরি কর্মসূচি",
        middle: " এবং সাবস্ক্রিপশন যা বিশেষভাবে এই সেবার জন্য ডিজাইন করা হয়েছে, যা কভার করে ",
        highlight2: "বিভিন্ন প্রয়োজন",
        suffix: " যারা বিবাহের বিষয়ে গুরুত্বসহকারে আগ্রহী তাদের জন্য।",
      },
      followUp: {
        title: "গুরুত্বসহকারে ও ধারাবাহিক ফলোআপ",
        description:
          "আমরা পরিচয় থেকে বাগদান পর্যন্ত ইসলামিক নির্দেশনা মেনে সুসংগঠিত ফলোআপের মাধ্যমে উভয় পক্ষের সাথে থাকি।",
      },
      showcasing: {
        title: "মেয়ে ও পরিবারের কাছে প্রোফাইল উপস্থাপন",
        description:
          "আমরা আগ্রহী মেয়ে ও পরিবারের কাছে উপযুক্ত প্রোফাইল উপস্থাপন করি, গোপনীয়তা ও সম্মানের কাঠামোর মধ্যে থেকে।",
        usersBadge: "১০,০০০+ ব্যবহারকারী",
      },
      requests: {
        title: "বিবাহের অনুরোধ গ্রহণ",
        description:
          "আমরা বসনিয়ান নারীদের বিবাহ করতে আগ্রহী তরুণদের কাছ থেকে অনুরোধ গ্রহণ করি এবং তাদের প্রোফাইল সঠিকভাবে সম্পূর্ণ করতে সাহায্য করি।",
      },
    },
  },
  companion: {
    title: "এবং সবচেয়ে গুরুত্বপূর্ণ, বসনিয়ায় আমাদের সহযোগিতা সেবা",
    description:
      "আমাদের যাত্রার অংশ হিসেবে, আমাদের প্ল্যাটফর্ম ৬ দিন ৫ রাতের বিবাহ দল সহযোগিতা সেবা প্রদান করে, যেখানে প্রত্যেকের সামর্থ্য অনুযায়ী সময়কালে অংশগ্রহণের নমনীয়তা রয়েছে।",
    items: [
      "অংশগ্রহণকারীর ফাইল প্রস্তুত করা এবং তাদের পথনির্দেশনা দেওয়া।",
      "বিবাহে গুরুত্বসহকারে আগ্রহী বসনিয়ান পরিবার ও মেয়েদের সাথে মাঠপর্যায়ের সফর ও সাক্ষাতের আয়োজন করা।",
      "প্রাথমিক গ্রহণযোগ্যতা অনুসরণ করা এবং উভয় পক্ষের মধ্যে সমন্বয় করা।",
      '"জেফাফ প্ল্যাটফর্ম" আয়োজিত বসনিয়ার প্রথম অনুষ্ঠানে উপস্থিত থাকা।',
      "বসনিয়া ভিসা আবেদনকে সহায়তা করতে এবং আবেদন প্রক্রিয়া সহজ করতে একটি আনুষ্ঠানিক আমন্ত্রণপত্র প্রস্তুত করা।",
      "আপনার জীবনসঙ্গী খুঁজে না পাওয়া পর্যন্ত একবারের জন্য একটি ফি।",
    ],
    bgAlt: "রাতে আলোকিত বসনিয়া ও হার্জেগোভিনার সারায়েভোতে মিলিয়াতস্কা নদীর উপর ল্যাটিন সেতু",
  },
  why: {
    title: "কেন এই উদ্যোগে যোগ দেবেন",
    items: [
      {
        title: "একটি প্রকৃত সুযোগ",
        description: "ইউরোপে মুসলিম মেয়ে ও পরিবারের সাথে গুরুত্বসহকারে পরিচিতির জন্য।",
      },
      {
        title: "হাতে-কলমে অভিজ্ঞতা",
        description: "স্থানীয় ঐতিহ্য ও আইনি প্রক্রিয়া সম্পর্কে সুনির্দিষ্ট জ্ঞান দ্বারা পূর্বনির্ধারিত।",
      },
      {
        title: "সম্পূর্ণ সহযোগিতা",
        description: "জেফাফ প্ল্যাটফর্ম দল প্রথম পদক্ষেপ থেকে বিবাহ সম্পন্ন হওয়া পর্যন্ত আপনার সাথে থাকে।",
      },
      {
        title: "একটি স্পষ্ট প্রক্রিয়া",
        description: "এলোমেলোভাব থেকে দূরে, সুসংগঠিত পরিচিতির পদক্ষেপ।",
      },
    ],
    photoAlt: {
      tall: "বসনিয়া ও হার্জেগোভিনার ঐতিহাসিক শহর মোস্তারের একটি প্যানোরামিক দৃশ্য",
      overlay: "সূর্যাস্তের সময় মোস্তারের পুরনো রাস্তাগুলো",
    },
  },
};

const bs: BosniaCopy = {
  hero: {
    title: "Program pratnje bračnog tima u Bosni",
    description:
      'Po prvi put u arapskom svijetu, "Zefaaf platforma" pokreće novu inicijativu za izgradnju sveobuhvatnog programa koji olakšava i podstiče ozbiljan brak između muslimanske mladeži i muslimanskih djevojaka i porodica u Bosni i Hercegovini.',
    cta: "Rezervišite svoje mjesto sada",
    pills: {
      date: "21. avgust 2026.",
      payment: "Uplata: 500 eura",
      duration: "Trajanje putovanja: 1 sedmica",
      location: "Bosna i Hercegovina",
    },
    imageAlt: {
      collageMain: "Pogled iz zraka na rijeku koja vijuga kroz bosansku ruralnu okolinu",
      collageSecondary: "Stari most u Mostaru, Bosna i Hercegovina",
    },
  },
  destination: {
    eyebrow: "Naša prva destinacija",
    title: "Bosna i Hercegovina",
    paragraphs: [
      'U sklopu serije putovanja koje organizuje "Zefaaf platforma" u nekoliko evropskih zemalja, naše prvo putovanje počinje Bosnom i Hercegovinom.',
      "Tamo se tim platforme sastaje s muslimankama i porodicama kako bi iz prve ruke saznao o uslovima za brak, procesu upoznavanja i vjeridbe, te pravnim i kulturnim aspektima vezanim za brak u Bosni.",
      'Ovo terensko iskustvo će kasnije biti preneseno u "Zefaaf platformu", kako bi postalo dio njenih stalnih usluga.',
    ],
    goal: {
      title: "Cilj",
      description:
        "Cilj putovanja je izgraditi direktne odnose i partnerstva s muslimanskom zajednicom u Bosni, te upoznati uslove i mehanizme sklapanja braka tamo.",
    },
    cta: "Rezervišite svoje mjesto sada",
    mapAlt: "Karta Bosne i Hercegovine s oznakom lokacije koja obilježava destinaciju",
  },
  help: {
    titleLine1: "Kako vam možemo pomoći",
    titleLine2: "da se vjenčate u Bosni?",
    cards: {
      customPrograms: {
        title: "Prilagođeni programi i pretplate",
        prefix: "Nudimo ",
        highlight1: "prilagođene programe",
        middle: " i pretplate osmišljene posebno za ovu uslugu, koje pokrivaju ",
        highlight2: "različite potrebe",
        suffix: " onih koji su ozbiljni u vezi s brakom.",
      },
      followUp: {
        title: "Ozbiljno i kontinuirano praćenje",
        description:
          "Pratimo obje strane organizovanim praćenjem, uz pridržavanje islamskih smjernica od upoznavanja do vjeridbe.",
      },
      showcasing: {
        title: "Predstavljanje profila djevojkama i porodicama",
        description:
          "Predstavljamo odgovarajuće profile zainteresiranim djevojkama i porodicama, u okviru privatnosti i poštovanja.",
        usersBadge: "Preko 10.000 korisnika",
      },
      requests: {
        title: "Primanje bračnih zahtjeva",
        description:
          "Primamo zahtjeve mladića zainteresovanih za brak s bosanskim djevojkama i pomažemo im da precizno popune svoj profil.",
      },
    },
  },
  companion: {
    title: "A najvažnije od svega, naša usluga pratnje u Bosnu",
    description:
      "U sklopu našeg putovanja, naša platforma nudi uslugu pratnje bračnog tima u trajanju od 6 dana i 5 noći, uz fleksibilnost učešća u trajanju koje odgovara mogućnostima svake osobe.",
    items: [
      "Priprema dosijea učesnika i njegovo usmjeravanje.",
      "Organizovanje terenskih posjeta i sastanaka s bosanskim porodicama i djevojkama ozbiljnim u vezi s brakom.",
      "Praćenje početnog prihvatanja i koordinacija između obje strane.",
      'Prisustvovanje prvom događaju koji organizuje "Zefaaf platforma" u Bosni.',
      "Priprema zvanične pozivnice za podršku zahtjevu za bosansku vizu i olakšavanje procesa podnošenja.",
      "Jednokratna naknada dok ne pronađemo vašeg životnog partnera.",
    ],
    bgAlt: "Latinska ćuprija preko rijeke Miljacke u Sarajevu, Bosna i Hercegovina, osvijetljena noću",
  },
  why: {
    title: "Zašto se pridružiti ovoj inicijativi",
    items: [
      {
        title: "Prava prilika",
        description: "Za ozbiljno upoznavanje s muslimankama i porodicama u Evropi.",
      },
      {
        title: "Terensko iskustvo",
        description: "Kojem prethodi precizno poznavanje lokalnih tradicija i pravnih procedura.",
      },
      {
        title: "Potpuna pratnja",
        description: "Tim Zefaaf platforme je uz vas od prvog koraka do sklapanja braka.",
      },
      {
        title: "Jasan proces",
        description: "Organizovani koraci upoznavanja, daleko od nasumičnosti.",
      },
    ],
    photoAlt: {
      tall: "Panoramski pogled na historijski grad Mostar, Bosna i Hercegovina",
      overlay: "Stare ulice Mostara u sumrak",
    },
  },
};

const es: BosniaCopy = {
  hero: {
    title: "Programa de Acompañamiento del Equipo de Matrimonio en Bosnia",
    description:
      'Por primera vez en el mundo árabe, "Plataforma Zefaaf" lanza una nueva iniciativa para construir un programa integral que facilite y fomente el matrimonio serio entre jóvenes musulmanes y jóvenes y familias musulmanas en Bosnia y Herzegovina.',
    cta: "Reserva tu lugar ahora",
    pills: {
      date: "21 de agosto de 2026",
      payment: "Pago: 500 euros",
      duration: "Duración del viaje: 1 semana",
      location: "Bosnia y Herzegovina",
    },
    imageAlt: {
      collageMain: "Vista aérea de un río serpenteando por el campo bosnio",
      collageSecondary: "El puente viejo de Mostar, Bosnia y Herzegovina",
    },
  },
  destination: {
    eyebrow: "Nuestro Primer Destino",
    title: "Bosnia y Herzegovina",
    paragraphs: [
      'Como parte de una serie de viajes organizados por "Plataforma Zefaaf" a varios países europeos, nuestro primer viaje comienza con Bosnia y Herzegovina.',
      "Allí, el equipo de la plataforma se reúne con jóvenes y familias musulmanas para conocer de primera mano los requisitos del matrimonio, el proceso de conocimiento mutuo y compromiso, y los aspectos legales y culturales relacionados con el matrimonio en Bosnia.",
      'Esta experiencia de campo se trasladará posteriormente a "Plataforma Zefaaf", para pasar a formar parte de sus servicios permanentes.',
    ],
    goal: {
      title: "Objetivo",
      description:
        "El objetivo del viaje es construir relaciones y alianzas directas con la comunidad musulmana en Bosnia, y conocer los requisitos y mecanismos del matrimonio allí.",
    },
    cta: "Reserva tu lugar ahora",
    mapAlt: "Mapa de Bosnia y Herzegovina con un marcador de ubicación que indica el destino",
  },
  help: {
    titleLine1: "¿Cómo podemos ayudarte",
    titleLine2: "a casarte en Bosnia?",
    cards: {
      customPrograms: {
        title: "Programas y suscripciones personalizados",
        prefix: "Ofrecemos ",
        highlight1: "programas a medida",
        middle: " y suscripciones diseñadas específicamente para este servicio, que cubren ",
        highlight2: "necesidades diferentes",
        suffix: " para quienes buscan el matrimonio con seriedad.",
      },
      followUp: {
        title: "Seguimiento serio y continuo",
        description:
          "Acompañamos a ambas partes con un seguimiento organizado, respetando las pautas islámicas desde el primer contacto hasta el compromiso.",
      },
      showcasing: {
        title: "Presentación de perfiles a jóvenes y familias",
        description:
          "Presentamos perfiles adecuados a jóvenes y familias interesadas, dentro de un marco de privacidad y respeto.",
        usersBadge: "Más de 10.000 usuarios",
      },
      requests: {
        title: "Recepción de solicitudes de matrimonio",
        description:
          "Recibimos solicitudes de jóvenes interesados en casarse con mujeres bosnias y les ayudamos a completar su perfil con precisión.",
      },
    },
  },
  companion: {
    title: "Y lo más importante, nuestro servicio de acompañamiento a Bosnia",
    description:
      "Como parte de nuestro viaje, nuestra plataforma ofrece un servicio de acompañamiento del equipo de matrimonio de 6 días y 5 noches, con la flexibilidad de participar durante el período que se adapte a las posibilidades de cada persona.",
    items: [
      "Preparación del expediente del participante y su orientación.",
      "Organización de visitas de campo y encuentros con familias y jóvenes bosnias interesadas en un matrimonio serio.",
      "Seguimiento de la aceptación preliminar y coordinación entre ambas partes.",
      'Asistencia al primer evento organizado por "Plataforma Zefaaf" en Bosnia.',
      "Preparación de una invitación oficial para respaldar la solicitud de visado a Bosnia y facilitar el proceso de presentación.",
      "Una tarifa única hasta que encontremos a tu compañero de vida.",
    ],
    bgAlt: "El Puente Latino sobre el río Miljacka en Sarajevo, Bosnia y Herzegovina, iluminado por la noche",
  },
  why: {
    title: "Por qué unirte a esta iniciativa",
    items: [
      {
        title: "Una oportunidad real",
        description: "Para un acercamiento serio con jóvenes y familias musulmanas en Europa.",
      },
      {
        title: "Experiencia de campo",
        description: "Precedida de un conocimiento preciso de las tradiciones locales y los trámites legales.",
      },
      {
        title: "Acompañamiento completo",
        description: "El equipo de la plataforma Zefaaf está contigo desde el primer paso hasta la conclusión del matrimonio.",
      },
      {
        title: "Un proceso claro",
        description: "Pasos organizados de acercamiento, lejos de la casualidad.",
      },
    ],
    photoAlt: {
      tall: "Una vista panorámica de la histórica ciudad de Mostar, Bosnia y Herzegovina",
      overlay: "Las calles antiguas de Mostar al atardecer",
    },
  },
};

const fa: BosniaCopy = {
  hero: {
    title: "برنامه همراهی تیم ازدواج به بوسنی",
    description:
      'برای نخستین‌بار در جهان عرب، "پلتفرم زفاف" ابتکار جدیدی را برای ساخت برنامه‌ای جامع آغاز می‌کند که ازدواج جدی میان جوانان مسلمان و دختران و خانواده‌های مسلمان در بوسنی و هرزگوین را تسهیل و تشویق می‌کند.',
    cta: "همین حالا جای خود را رزرو کنید",
    pills: {
      date: "21 اوت 2026",
      payment: "هزینه: 500 یورو",
      duration: "مدت سفر: 1 هفته",
      location: "بوسنی و هرزگوین",
    },
    imageAlt: {
      collageMain: "نمای هوایی از رودخانه‌ای پیچان در دل روستاهای بوسنی",
      collageSecondary: "پل قدیمی موستار در بوسنی و هرزگوین",
    },
  },
  destination: {
    eyebrow: "اولین مقصد ما",
    title: "بوسنی و هرزگوین",
    paragraphs: [
      'در چارچوب مجموعه‌ای از سفرهایی که "پلتفرم زفاف" به چند کشور اروپایی برگزار می‌کند، نخستین سفر ما با بوسنی و هرزگوین آغاز می‌شود.',
      "در آنجا، تیم پلتفرم با دختران و خانواده‌های مسلمان دیدار می‌کند تا از نزدیک با شرایط ازدواج، فرآیند آشنایی و نامزدی، و جنبه‌های حقوقی و فرهنگی مرتبط با ازدواج در بوسنی آشنا شود.",
      'این تجربه میدانی بعداً به "پلتفرم زفاف" منتقل می‌شود تا بخشی از خدمات دائمی آن گردد.',
    ],
    goal: {
      title: "هدف",
      description:
        "هدف از این سفر ایجاد روابط و مشارکت‌های مستقیم با جامعه مسلمانان بوسنی و آشنایی با شرایط و سازوکارهای ازدواج در آنجاست.",
    },
    cta: "همین حالا جای خود را رزرو کنید",
    mapAlt: "نقشه بوسنی و هرزگوین با نشانگر موقعیت مقصد",
  },
  help: {
    titleLine1: "چگونه می‌توانیم به شما",
    titleLine2: "در ازدواج در بوسنی کمک کنیم؟",
    cards: {
      customPrograms: {
        title: "برنامه‌ها و اشتراک‌های اختصاصی",
        prefix: "ما ",
        highlight1: "برنامه‌های اختصاصی",
        middle: " و اشتراک‌هایی طراحی‌شده مخصوص این خدمت ارائه می‌دهیم که ",
        highlight2: "نیازهای گوناگون",
        suffix: " افراد جدی در امر ازدواج را پوشش می‌دهد.",
      },
      followUp: {
        title: "پیگیری جدی و مستمر",
        description:
          "ما با پیگیری منظم، از آشنایی تا نامزدی، طرفین را با پایبندی به ضوابط اسلامی همراهی می‌کنیم.",
      },
      showcasing: {
        title: "نمایش پروفایل‌ها به دختران و خانواده‌ها",
        description:
          "ما پروفایل‌های مناسب را در چارچوب حریم خصوصی و احترام، به دختران و خانواده‌های علاقه‌مند ارائه می‌کنیم.",
        usersBadge: "بیش از 10,000 کاربر",
      },
      requests: {
        title: "دریافت درخواست‌های ازدواج",
        description:
          "ما درخواست‌های جوانانی را که مایل به ازدواج با دختران بوسنیایی هستند دریافت می‌کنیم و به آنها کمک می‌کنیم پروفایل خود را با دقت تکمیل کنند.",
      },
    },
  },
  companion: {
    title: "و از همه مهم‌تر، خدمت همراهی ما به بوسنی",
    description:
      "در چارچوب این سفر، پلتفرم ما خدمت همراهی تیم ازدواج به مدت 6 روز و 5 شب ارائه می‌دهد، با انعطاف برای مشارکت به مدتی که با توان هر فرد سازگار باشد.",
    items: [
      "آماده‌سازی پرونده شرکت‌کننده و راهنمایی او.",
      "برگزاری بازدیدهای میدانی و ملاقات با خانواده‌ها و دختران بوسنیایی جدی در امر ازدواج.",
      "پیگیری پذیرش اولیه و هماهنگی میان طرفین.",
      'حضور در اولین رویدادی که "پلتفرم زفاف" در بوسنی برگزار می‌کند.',
      "تهیه دعوت‌نامه رسمی برای پشتیبانی از درخواست ویزای بوسنی و تسهیل روند ثبت‌نام.",
      "هزینه‌ای یک‌بارمصرف تا زمانی که همراه زندگی شما را بیابیم.",
    ],
    bgAlt: "پل لاتین بر روی رودخانه میلیاتسکا در سارایوو، بوسنی و هرزگوین، در شب روشن شده",
  },
  why: {
    title: "چرا به این ابتکار بپیوندید",
    items: [
      {
        title: "فرصتی واقعی",
        description: "برای آشنایی جدی با دختران و خانواده‌های مسلمان در اروپا.",
      },
      {
        title: "تجربه‌ای میدانی",
        description: "که با شناخت دقیق از سنت‌های محلی و روندهای قانونی همراه است.",
      },
      {
        title: "همراهی کامل",
        description: "تیم پلتفرم زفاف از اولین قدم تا تکمیل ازدواج در کنار شماست.",
      },
      {
        title: "فرآیندی روشن",
        description: "گام‌های منظم آشنایی، به دور از تصادفی بودن.",
      },
    ],
    photoAlt: {
      tall: "نمای پانوراما از شهر تاریخی موستار در بوسنی و هرزگوین",
      overlay: "خیابان‌های قدیمی موستار هنگام غروب آفتاب",
    },
  },
};

const pt: BosniaCopy = {
  hero: {
    title: "Programa de Acompanhamento da Equipa de Casamento na Bósnia",
    description:
      'Pela primeira vez no mundo árabe, a "Plataforma Zefaaf" lança uma nova iniciativa para construir um programa abrangente que facilita e incentiva o casamento sério entre jovens muçulmanos e raparigas e famílias muçulmanas na Bósnia e Herzegovina.',
    cta: "Reserve o seu lugar agora",
    pills: {
      date: "21 de agosto de 2026",
      payment: "Pagamento: 500 euros",
      duration: "Duração da viagem: 1 semana",
      location: "Bósnia e Herzegovina",
    },
    imageAlt: {
      collageMain: "Vista aérea de um rio serpenteando pelo interior da Bósnia",
      collageSecondary: "A ponte antiga em Mostar, Bósnia e Herzegovina",
    },
  },
  destination: {
    eyebrow: "O Nosso Primeiro Destino",
    title: "Bósnia e Herzegovina",
    paragraphs: [
      'Como parte de uma série de viagens organizadas pela "Plataforma Zefaaf" a vários países europeus, a nossa primeira jornada começa com a Bósnia e Herzegovina.',
      "Lá, a equipa da plataforma reúne-se com raparigas e famílias muçulmanas, para conhecer em primeira mão os requisitos do casamento, o processo de aproximação e noivado, e os aspetos legais e culturais relacionados com o casamento na Bósnia.",
      'Esta experiência de campo será posteriormente transferida para a "Plataforma Zefaaf", passando a fazer parte dos seus serviços permanentes.',
    ],
    goal: {
      title: "Objetivo",
      description:
        "O objetivo da viagem é construir relações e parcerias diretas com a comunidade muçulmana na Bósnia, e conhecer os requisitos e mecanismos do casamento lá.",
    },
    cta: "Reserve o seu lugar agora",
    mapAlt: "Mapa da Bósnia e Herzegovina com um marcador de localização assinalando o destino",
  },
  help: {
    titleLine1: "Como podemos ajudar-te",
    titleLine2: "a casar na Bósnia?",
    cards: {
      customPrograms: {
        title: "Programas e subscrições personalizados",
        prefix: "Oferecemos ",
        highlight1: "programas personalizados",
        middle: " e subscrições concebidas especificamente para este serviço, cobrindo ",
        highlight2: "necessidades diferentes",
        suffix: " para quem leva o casamento a sério.",
      },
      followUp: {
        title: "Acompanhamento sério e contínuo",
        description:
          "Acompanhamos ambas as partes com um seguimento organizado, respeitando as diretrizes islâmicas desde a aproximação até ao noivado.",
      },
      showcasing: {
        title: "Apresentação de perfis a raparigas e famílias",
        description:
          "Apresentamos perfis adequados a raparigas e famílias interessadas, num quadro de privacidade e respeito.",
        usersBadge: "Mais de 10.000 utilizadores",
      },
      requests: {
        title: "Receção de pedidos de casamento",
        description:
          "Recebemos pedidos de jovens interessados em casar com mulheres bósnias e ajudamo-los a completar o seu perfil com precisão.",
      },
    },
  },
  companion: {
    title: "E, o mais importante, o nosso serviço de acompanhamento na Bósnia",
    description:
      "Como parte da nossa viagem, a nossa plataforma oferece um serviço de acompanhamento da equipa de casamento de 6 dias e 5 noites, com a flexibilidade de participar pelo período que se adeque à disponibilidade de cada pessoa.",
    items: [
      "Preparação do processo do participante e sua orientação.",
      "Organização de visitas de campo e encontros com famílias e raparigas bósnias sérias em relação ao casamento.",
      "Acompanhamento da aceitação preliminar e coordenação entre ambas as partes.",
      'Participação no primeiro evento organizado pela "Plataforma Zefaaf" na Bósnia.',
      "Preparação de um convite oficial para apoiar o pedido de visto para a Bósnia e facilitar o processo de submissão.",
      "Uma taxa única até encontrarmos o teu parceiro de vida.",
    ],
    bgAlt: "A Ponte Latina sobre o rio Miljacka em Sarajevo, Bósnia e Herzegovina, iluminada à noite",
  },
  why: {
    title: "Porquê juntar-se a esta iniciativa",
    items: [
      {
        title: "Uma oportunidade real",
        description: "Para uma aproximação séria com raparigas e famílias muçulmanas na Europa.",
      },
      {
        title: "Experiência de campo",
        description: "Precedida de um conhecimento preciso das tradições locais e dos procedimentos legais.",
      },
      {
        title: "Acompanhamento completo",
        description: "A equipa da plataforma Zefaaf está contigo desde o primeiro passo até à conclusão do casamento.",
      },
      {
        title: "Um processo claro",
        description: "Passos organizados de aproximação, longe do acaso.",
      },
    ],
    photoAlt: {
      tall: "Uma vista panorâmica da histórica cidade de Mostar, Bósnia e Herzegovina",
      overlay: "As ruas antigas de Mostar ao pôr do sol",
    },
  },
};

const ja: BosniaCopy = {
  hero: {
    title: "ボスニア結婚チーム同行プログラム",
    description:
      "アラブ世界で初めて、「Zefaafプラットフォーム」は、ボスニア・ヘルツェゴビナのムスリムの若者とムスリムの女性・家族との間で真剣な結婚を促進・後押しする包括的なプログラムを構築する新しい取り組みを開始します。",
    cta: "今すぐ席を予約する",
    pills: {
      date: "2026年8月21日",
      payment: "料金:500ユーロ",
      duration: "旅行期間:1週間",
      location: "ボスニア・ヘルツェゴビナ",
    },
    imageAlt: {
      collageMain: "ボスニアの田園地帯を蛇行して流れる川の空撮",
      collageSecondary: "ボスニア・ヘルツェゴビナ、モスタルの古い橋",
    },
  },
  destination: {
    eyebrow: "最初の目的地",
    title: "ボスニア・ヘルツェゴビナ",
    paragraphs: [
      "「Zefaafプラットフォーム」が複数のヨーロッパ諸国で企画する一連の旅の一環として、最初の旅はボスニア・ヘルツェゴビナから始まります。",
      "そこでプラットフォームのチームはムスリムの女性や家族と会い、結婚の条件、お見合いから婚約までのプロセス、そしてボスニアにおける結婚に関する法的・文化的側面を直接学びます。",
      "この現地での経験は、後に「Zefaafプラットフォーム」に取り入れられ、恒常的なサービスの一部となります。",
    ],
    goal: {
      title: "目的",
      description:
        "この旅の目的は、ボスニアのムスリムコミュニティと直接的な関係やパートナーシップを築き、現地での結婚の条件と仕組みを学ぶことです。",
    },
    cta: "今すぐ席を予約する",
    mapAlt: "目的地を示すピンが付いたボスニア・ヘルツェゴビナの地図",
  },
  help: {
    titleLine1: "ボスニアでのご結婚を",
    titleLine2: "どのようにサポートできるか",
    cards: {
      customPrograms: {
        title: "カスタムプログラムとサブスクリプション",
        prefix: "私たちは、このサービスのために特別に設計された",
        highlight1: "オーダーメイドのプログラム",
        middle: "とサブスクリプションをご用意しており、結婚に真剣な方の",
        highlight2: "さまざまなニーズ",
        suffix: "に対応しています。",
      },
      followUp: {
        title: "真剣かつ継続的なフォローアップ",
        description:
          "私たちは、お見合いから婚約まで、イスラームの指針を守りながら、組織的なフォローアップで双方に寄り添います。",
      },
      showcasing: {
        title: "女性やご家族へのプロフィールの紹介",
        description:
          "プライバシーと敬意の枠組みの中で、関心のある女性やご家族に適したプロフィールをご紹介します。",
        usersBadge: "10,000人以上のユーザー",
      },
      requests: {
        title: "結婚の申し込みの受付",
        description:
          "ボスニアの女性との結婚に関心のある若者からの申し込みを受け付け、プロフィールの正確な完成をサポートします。",
      },
    },
  },
  companion: {
    title: "そして何より重要な、ボスニアへの同行サービス",
    description:
      "この旅の一環として、私たちのプラットフォームは6日5泊の結婚チーム同行サービスを提供しており、各自の都合に合わせて参加期間を柔軟に選べます。",
    items: [
      "参加者のファイルの準備とご案内。",
      "結婚に真剣なボスニアの家族や女性との現地訪問・面会の手配。",
      "初期承諾のフォローアップと双方の間の調整。",
      "「Zefaafプラットフォーム」がボスニアで開催する最初のイベントへの参加。",
      "ボスニアのビザ申請を後押しし、手続きを円滑にするための公式招待状の準備。",
      "生涯のパートナーが見つかるまでの一度限りの料金。",
    ],
    bgAlt: "夜にライトアップされた、ボスニア・ヘルツェゴビナ、サラエボのミリャツカ川に架かるラテン橋",
  },
  why: {
    title: "この取り組みに参加する理由",
    items: [
      {
        title: "本物の機会",
        description: "ヨーロッパのムスリムの女性やご家族との真剣なお見合いのために。",
      },
      {
        title: "現地での実体験",
        description: "現地の伝統と法的手続きに関する正確な知識に裏打ちされています。",
      },
      {
        title: "全面的な同行サポート",
        description: "Zefaafプラットフォームのチームが、最初のステップから結婚成立まで寄り添います。",
      },
      {
        title: "明確なプロセス",
        description: "無作為さを排した、組織的なお見合いのステップ。",
      },
    ],
    photoAlt: {
      tall: "ボスニア・ヘルツェゴビナの歴史都市モスタルのパノラマビュー",
      overlay: "夕暮れ時のモスタルの旧市街の通り",
    },
  },
};

const ko: BosniaCopy = {
  hero: {
    title: "보스니아 결혼팀 동행 프로그램",
    description:
      '아랍 세계 최초로 "제파프 플랫폼"이 보스니아 헤르체고비나에서 무슬림 청년과 무슬림 여성 및 가족 간의 진지한 결혼을 촉진하고 장려하는 종합 프로그램을 구축하기 위한 새로운 이니셔티브를 시작합니다.',
    cta: "지금 바로 자리 예약하기",
    pills: {
      date: "2026년 8월 21일",
      payment: "비용: 500유로",
      duration: "여행 기간: 1주일",
      location: "보스니아 헤르체고비나",
    },
    imageAlt: {
      collageMain: "보스니아 시골을 굽이쳐 흐르는 강의 항공 사진",
      collageSecondary: "보스니아 헤르체고비나 모스타르의 오래된 다리",
    },
  },
  destination: {
    eyebrow: "첫 번째 목적지",
    title: "보스니아 헤르체고비나",
    paragraphs: [
      '"제파프 플랫폼"이 여러 유럽 국가로 주최하는 일련의 여행의 일환으로, 첫 번째 여정은 보스니아 헤르체고비나에서 시작됩니다.',
      "그곳에서 플랫폼 팀은 무슬림 여성 및 가족을 만나 결혼 요건, 만남과 약혼 절차, 그리고 보스니아 결혼과 관련된 법적, 문화적 측면을 직접 배우게 됩니다.",
      '이 현장 경험은 이후 "제파프 플랫폼"에 반영되어 상시 서비스의 일부가 됩니다.',
    ],
    goal: {
      title: "목표",
      description:
        "이번 여행의 목표는 보스니아의 무슬림 공동체와 직접적인 관계와 파트너십을 구축하고, 그곳의 결혼 요건과 절차를 배우는 것입니다.",
    },
    cta: "지금 바로 자리 예약하기",
    mapAlt: "목적지 위치를 표시하는 핀이 있는 보스니아 헤르체고비나 지도",
  },
  help: {
    titleLine1: "보스니아에서의 결혼을",
    titleLine2: "어떻게 도와드릴 수 있을까요?",
    cards: {
      customPrograms: {
        title: "맞춤형 프로그램 및 구독",
        prefix: "이 서비스만을 위해 특별히 설계된 ",
        highlight1: "맞춤형 프로그램",
        middle: " 및 구독을 제공하며, 결혼에 진지한 분들의 ",
        highlight2: "다양한 요구",
        suffix: "를 충족시켜 드립니다.",
      },
      followUp: {
        title: "진지하고 지속적인 후속 관리",
        description:
          "만남부터 약혼까지 이슬람 지침을 준수하며 체계적인 후속 관리로 양측을 함께합니다.",
      },
      showcasing: {
        title: "여성 및 가족에게 프로필 소개",
        description:
          "관심 있는 여성 및 가족에게 사생활과 존중의 틀 안에서 적합한 프로필을 소개합니다.",
        usersBadge: "10,000명 이상의 사용자",
      },
      requests: {
        title: "결혼 요청 접수",
        description:
          "보스니아 여성과의 결혼에 관심 있는 청년들의 요청을 접수하고, 프로필을 정확하게 완성할 수 있도록 돕습니다.",
      },
    },
  },
  companion: {
    title: "무엇보다 중요한, 보스니아 동행 서비스",
    description:
      "여정의 일환으로, 저희 플랫폼은 6일 5박의 결혼팀 동행 서비스를 제공하며, 각자의 사정에 맞는 기간 동안 유연하게 참여할 수 있습니다.",
    items: [
      "참가자의 파일 준비 및 안내.",
      "결혼에 진지한 보스니아 가족 및 여성과의 현장 방문 및 만남 주선.",
      "예비 수락 후속 조치 및 양측 간 조율.",
      '"제파프 플랫폼"이 보스니아에서 주최하는 첫 행사 참석.',
      "보스니아 비자 신청을 지원하고 제출 절차를 원활하게 하기 위한 공식 초청장 준비.",
      "평생의 동반자를 찾을 때까지 단 한 번만 부과되는 비용.",
    ],
    bgAlt: "밤에 조명이 켜진 보스니아 헤르체고비나 사라예보의 밀랴츠카 강 위 라틴 다리",
  },
  why: {
    title: "이 이니셔티브에 참여해야 하는 이유",
    items: [
      {
        title: "진정한 기회",
        description: "유럽의 무슬림 여성 및 가족과의 진지한 만남을 위해.",
      },
      {
        title: "현장 경험",
        description: "현지 전통과 법적 절차에 대한 정확한 지식이 선행됩니다.",
      },
      {
        title: "완전한 동행",
        description: "제파프 플랫폼 팀이 첫걸음부터 결혼 완성까지 함께합니다.",
      },
      {
        title: "명확한 절차",
        description: "무작위성에서 벗어난 체계적인 만남의 단계.",
      },
    ],
    photoAlt: {
      tall: "보스니아 헤르체고비나의 역사적인 도시 모스타르의 파노라마 전경",
      overlay: "해질녘 모스타르의 옛 거리",
    },
  },
};

const it: BosniaCopy = {
  hero: {
    title: "Programma di Accompagnamento del Team Matrimoniale in Bosnia",
    description:
      'Per la prima volta nel mondo arabo, "Piattaforma Zefaaf" lancia una nuova iniziativa per costruire un programma completo che faciliti e incoraggi il matrimonio serio tra giovani musulmani e ragazze e famiglie musulmane in Bosnia ed Erzegovina.',
    cta: "Prenota subito il tuo posto",
    pills: {
      date: "21 agosto 2026",
      payment: "Pagamento: 500 euro",
      duration: "Durata del viaggio: 1 settimana",
      location: "Bosnia ed Erzegovina",
    },
    imageAlt: {
      collageMain: "Vista aerea di un fiume che serpeggia attraverso la campagna bosniaca",
      collageSecondary: "Il vecchio ponte di Mostar, Bosnia ed Erzegovina",
    },
  },
  destination: {
    eyebrow: "La Nostra Prima Destinazione",
    title: "Bosnia ed Erzegovina",
    paragraphs: [
      'Nell\'ambito di una serie di viaggi organizzati da "Piattaforma Zefaaf" in diversi paesi europei, il nostro primo viaggio inizia con la Bosnia ed Erzegovina.',
      "Lì, il team della piattaforma incontra ragazze e famiglie musulmane, per conoscere direttamente i requisiti del matrimonio, il processo di conoscenza e fidanzamento, e gli aspetti legali e culturali legati al matrimonio in Bosnia.",
      'Questa esperienza sul campo sarà successivamente trasferita a "Piattaforma Zefaaf", per diventare parte dei suoi servizi permanenti.',
    ],
    goal: {
      title: "Obiettivo",
      description:
        "L'obiettivo del viaggio è costruire relazioni e partnership dirette con la comunità musulmana in Bosnia, e conoscere i requisiti e i meccanismi del matrimonio lì.",
    },
    cta: "Prenota subito il tuo posto",
    mapAlt: "Mappa della Bosnia ed Erzegovina con un indicatore di posizione che segna la destinazione",
  },
  help: {
    titleLine1: "Come possiamo aiutarti",
    titleLine2: "a sposarti in Bosnia?",
    cards: {
      customPrograms: {
        title: "Programmi e abbonamenti personalizzati",
        prefix: "Offriamo ",
        highlight1: "programmi su misura",
        middle: " e abbonamenti progettati appositamente per questo servizio, che coprono ",
        highlight2: "esigenze diverse",
        suffix: " per chi è serio riguardo al matrimonio.",
      },
      followUp: {
        title: "Accompagnamento serio e continuo",
        description:
          "Accompagniamo entrambe le parti con un follow-up organizzato, rispettando le linee guida islamiche dalla conoscenza al fidanzamento.",
      },
      showcasing: {
        title: "Presentazione dei profili a ragazze e famiglie",
        description:
          "Presentiamo profili adeguati a ragazze e famiglie interessate, in un quadro di riservatezza e rispetto.",
        usersBadge: "Oltre 10.000 utenti",
      },
      requests: {
        title: "Ricezione delle richieste di matrimonio",
        description:
          "Riceviamo le richieste dei giovani interessati a sposare donne bosniache e li aiutiamo a completare il loro profilo con precisione.",
      },
    },
  },
  companion: {
    title: "E, cosa più importante, il nostro servizio di accompagnamento in Bosnia",
    description:
      "Nell'ambito del nostro viaggio, la nostra piattaforma offre un servizio di accompagnamento del team matrimoniale di 6 giorni e 5 notti, con la flessibilità di partecipare per la durata più adatta alle possibilità di ciascuno.",
    items: [
      "Preparazione del fascicolo del partecipante e sua guida.",
      "Organizzazione di visite sul campo e incontri con famiglie e ragazze bosniache serie riguardo al matrimonio.",
      "Follow-up dell'accettazione preliminare e coordinamento tra le due parti.",
      'Partecipazione al primo evento organizzato da "Piattaforma Zefaaf" in Bosnia.',
      "Preparazione di un invito ufficiale a sostegno della richiesta di visto per la Bosnia e per agevolare la procedura di presentazione.",
      "Una tariffa unica finché non troviamo il tuo compagno di vita.",
    ],
    bgAlt: "Il Ponte Latino sul fiume Miljacka a Sarajevo, Bosnia ed Erzegovina, illuminato di notte",
  },
  why: {
    title: "Perché unirsi a questa iniziativa",
    items: [
      {
        title: "Un'opportunità reale",
        description: "Per una conoscenza seria con ragazze e famiglie musulmane in Europa.",
      },
      {
        title: "Esperienza sul campo",
        description: "Preceduta da una conoscenza precisa delle tradizioni locali e delle procedure legali.",
      },
      {
        title: "Accompagnamento completo",
        description: "Il team della piattaforma Zefaaf è al tuo fianco dal primo passo fino al compimento del matrimonio.",
      },
      {
        title: "Un processo chiaro",
        description: "Passi organizzati di conoscenza, lontani dalla casualità.",
      },
    ],
    photoAlt: {
      tall: "Una vista panoramica della città storica di Mostar, Bosnia ed Erzegovina",
      overlay: "Le antiche strade di Mostar al tramonto",
    },
  },
};

const ur: BosniaCopy = {
  hero: {
    title: "بوسنیا میں شادی ٹیم کی رفاقت کا پروگرام",
    description:
      'عرب دنیا میں پہلی بار، "زفاف پلیٹ فارم" ایک نیا اقدام شروع کر رہا ہے تاکہ ایک جامع پروگرام تشکیل دیا جائے جو بوسنیا اور ہرزیگووینا میں مسلم نوجوانوں اور مسلم لڑکیوں و خاندانوں کے درمیان سنجیدہ شادی کو آسان اور حوصلہ افزا بنائے۔',
    cta: "ابھی اپنی نشست بک کریں",
    pills: {
      date: "21 اگست 2026",
      payment: "ادائیگی: 500 یورو",
      duration: "سفر کا دورانیہ: 1 ہفتہ",
      location: "بوسنیا اور ہرزیگووینا",
    },
    imageAlt: {
      collageMain: "بوسنیائی دیہی علاقے سے گزرتے دریا کا فضائی منظر",
      collageSecondary: "بوسنیا اور ہرزیگووینا کے موستار میں پرانا پل",
    },
  },
  destination: {
    eyebrow: "ہماری پہلی منزل",
    title: "بوسنیا اور ہرزیگووینا",
    paragraphs: [
      '"زفاف پلیٹ فارم" کی جانب سے کئی یورپی ممالک میں منعقد کیے جانے والے سفروں کی سیریز کے تحت، ہمارا پہلا سفر بوسنیا اور ہرزیگووینا سے شروع ہوتا ہے۔',
      "وہاں پلیٹ فارم کی ٹیم مسلم لڑکیوں اور خاندانوں سے ملاقات کرتی ہے، تاکہ شادی کی شرائط، تعارف اور منگنی کے عمل، اور بوسنیا میں شادی سے متعلق قانونی و ثقافتی پہلوؤں کو براہ راست سمجھا جا سکے۔",
      'یہ عملی تجربہ بعد میں "زفاف پلیٹ فارم" میں منتقل کیا جائے گا، تاکہ یہ اس کی مستقل خدمات کا حصہ بن سکے۔',
    ],
    goal: {
      title: "مقصد",
      description:
        "اس سفر کا مقصد بوسنیا میں مسلم کمیونٹی کے ساتھ براہ راست تعلقات اور شراکت داری قائم کرنا، اور وہاں شادی کی شرائط و طریقہ کار کو سمجھنا ہے۔",
    },
    cta: "ابھی اپنی نشست بک کریں",
    mapAlt: "بوسنیا اور ہرزیگووینا کا نقشہ جس میں منزل کی نشاندہی کرنے والا مقام کا نشان موجود ہے",
  },
  help: {
    titleLine1: "ہم آپ کی بوسنیا میں شادی میں",
    titleLine2: "کیسے مدد کر سکتے ہیں؟",
    cards: {
      customPrograms: {
        title: "مخصوص پروگرام اور سبسکرپشنز",
        prefix: "ہم اس خدمت کے لیے خاص طور پر تیار کردہ ",
        highlight1: "موزوں پروگرام",
        middle: " اور سبسکرپشنز پیش کرتے ہیں، جو شادی میں سنجیدہ افراد کی ",
        highlight2: "مختلف ضروریات",
        suffix: " کا احاطہ کرتے ہیں۔",
      },
      followUp: {
        title: "سنجیدہ اور مسلسل پیروی",
        description:
          "ہم تعارف سے لے کر منگنی تک، اسلامی ہدایات کی پابندی کرتے ہوئے، منظم پیروی کے ساتھ دونوں فریقین کا ساتھ دیتے ہیں۔",
      },
      showcasing: {
        title: "لڑکیوں اور خاندانوں کو پروفائلز دکھانا",
        description:
          "ہم دلچسپی رکھنے والی لڑکیوں اور خاندانوں کو رازداری اور احترام کے دائرے میں مناسب پروفائلز پیش کرتے ہیں۔",
        usersBadge: "10,000 سے زائد صارفین",
      },
      requests: {
        title: "شادی کی درخواستیں وصول کرنا",
        description:
          "ہم بوسنیائی خواتین سے شادی کے خواہشمند نوجوانوں کی درخواستیں وصول کرتے ہیں اور انہیں اپنی پروفائل درست طریقے سے مکمل کرنے میں مدد دیتے ہیں۔",
      },
    },
  },
  companion: {
    title: "اور سب سے اہم، بوسنیا میں ہماری رفاقت کی خدمت",
    description:
      "ہمارے اس سفر کے حصے کے طور پر، ہمارا پلیٹ فارم 6 دن اور 5 راتوں پر مشتمل شادی ٹیم رفاقت کی خدمت پیش کرتا ہے، جس میں ہر فرد کی استطاعت کے مطابق شرکت کی لچک موجود ہے۔",
    items: [
      "شریک کی فائل تیار کرنا اور ان کی رہنمائی کرنا۔",
      "شادی میں سنجیدہ بوسنیائی خاندانوں اور لڑکیوں کے ساتھ فیلڈ وزٹس اور ملاقاتوں کا اہتمام کرنا۔",
      "ابتدائی قبولیت کی پیروی اور دونوں فریقین کے درمیان رابطہ کاری۔",
      '"زفاف پلیٹ فارم" کی جانب سے بوسنیا میں منعقد ہونے والی پہلی تقریب میں شرکت۔',
      "بوسنیا ویزا درخواست کی حمایت اور جمع کرانے کے عمل کو آسان بنانے کے لیے سرکاری دعوت نامہ تیار کرنا۔",
      "آپ کے زندگی کے ساتھی کے ملنے تک ایک ہی بار فیس۔",
    ],
    bgAlt: "رات کے وقت روشن، سرائیوو، بوسنیا اور ہرزیگووینا میں دریائے میلیاتسکا پر لاطینی پل",
  },
  why: {
    title: "اس اقدام میں کیوں شامل ہوں",
    items: [
      {
        title: "ایک حقیقی موقع",
        description: "یورپ میں مسلم لڑکیوں اور خاندانوں کے ساتھ سنجیدہ تعارف کے لیے۔",
      },
      {
        title: "عملی تجربہ",
        description: "جو مقامی روایات اور قانونی طریقہ کار کے درست علم سے پہلے آتا ہے۔",
      },
      {
        title: "مکمل رفاقت",
        description: "زفاف پلیٹ فارم کی ٹیم پہلے قدم سے لے کر شادی کی تکمیل تک آپ کے ساتھ ہے۔",
      },
      {
        title: "واضح عمل",
        description: "بے ترتیبی سے دور، منظم تعارفی مراحل۔",
      },
    ],
    photoAlt: {
      tall: "بوسنیا اور ہرزیگووینا کے تاریخی شہر موستار کا پینوراما منظر",
      overlay: "غروب آفتاب کے وقت موستار کی پرانی گلیاں",
    },
  },
};

const ta: BosniaCopy = {
  hero: {
    title: "போஸ்னியாவில் திருமணக் குழு துணைத்திட்டம்",
    description:
      'அரபு உலகில் முதன்முறையாக, போஸ்னியா மற்றும் ஹெர்ஸகோவினாவில் முஸ்லிம் இளைஞர்களுக்கும் முஸ்லிம் பெண்கள் மற்றும் குடும்பங்களுக்கும் இடையேயான தீவிரமான திருமணத்தை எளிதாக்கவும் ஊக்குவிக்கவும் ஒரு விரிவான திட்டத்தை உருவாக்க "ஜெஃபாஃப் தளம்" ஒரு புதிய முயற்சியைத் தொடங்குகிறது.',
    cta: "இப்போதே உங்கள் இடத்தை பதிவு செய்யுங்கள்",
    pills: {
      date: "ஆகஸ்ட் 21, 2026",
      payment: "கட்டணம்: 500 யூரோ",
      duration: "பயண காலம்: 1 வாரம்",
      location: "போஸ்னியா மற்றும் ஹெர்ஸகோவினா",
    },
    imageAlt: {
      collageMain: "போஸ்னிய கிராமப்புறத்தில் வளைந்து செல்லும் நதியின் ஆகாய காட்சி",
      collageSecondary: "போஸ்னியா மற்றும் ஹெர்ஸகோவினாவின் மொஸ்டாரில் உள்ள பழைய பாலம்",
    },
  },
  destination: {
    eyebrow: "எங்கள் முதல் இலக்கு",
    title: "போஸ்னியா மற்றும் ஹெர்ஸகோவினா",
    paragraphs: [
      '"ஜெஃபாஃப் தளம்" பல ஐரோப்பிய நாடுகளுக்கு ஏற்பாடு செய்யும் தொடர்ச்சியான பயணங்களின் ஒரு பகுதியாக, எங்கள் முதல் பயணம் போஸ்னியா மற்றும் ஹெர்ஸகோவினாவில் தொடங்குகிறது.',
      "அங்கு, தள குழுவினர் முஸ்லிம் பெண்கள் மற்றும் குடும்பங்களை சந்தித்து, திருமணத் தேவைகள், அறிமுகம் மற்றும் நிச்சயதார்த்த செயல்முறை, மற்றும் போஸ்னியாவில் திருமணம் தொடர்பான சட்ட மற்றும் கலாச்சார அம்சங்களை நேரடியாக அறிந்து கொள்கின்றனர்.",
      'இந்த களப்பணி அனுபவம் பின்னர் "ஜெஃபாஃப் தளத்திற்கு" மாற்றப்பட்டு, அதன் நிரந்தர சேவைகளின் ஒரு பகுதியாக மாறும்.',
    ],
    goal: {
      title: "இலக்கு",
      description:
        "இந்தப் பயணத்தின் நோக்கம் போஸ்னியாவில் உள்ள முஸ்லிம் சமூகத்துடன் நேரடி உறவுகள் மற்றும் கூட்டாண்மைகளை உருவாக்குவதும், அங்குள்ள திருமணத் தேவைகள் மற்றும் வழிமுறைகளை அறிந்து கொள்வதுமாகும்.",
    },
    cta: "இப்போதே உங்கள் இடத்தை பதிவு செய்யுங்கள்",
    mapAlt: "இலக்கைக் குறிக்கும் இடம் பின் கொண்ட போஸ்னியா மற்றும் ஹெர்ஸகோவினா வரைபடம்",
  },
  help: {
    titleLine1: "போஸ்னியாவில் திருமணம் செய்ய",
    titleLine2: "நாங்கள் எப்படி உதவ முடியும்?",
    cards: {
      customPrograms: {
        title: "தனிப்பயன் திட்டங்கள் மற்றும் சந்தாக்கள்",
        prefix: "இந்த சேவைக்காக சிறப்பாக வடிவமைக்கப்பட்ட ",
        highlight1: "தனிப்பயன் திட்டங்கள்",
        middle: " மற்றும் சந்தாக்களை நாங்கள் வழங்குகிறோம், இது திருமணத்தில் தீவிரமானவர்களின் ",
        highlight2: "பல்வேறு தேவைகளை",
        suffix: " பூர்த்தி செய்கிறது.",
      },
      followUp: {
        title: "தீவிரமான மற்றும் தொடர்ச்சியான பின்தொடர்தல்",
        description:
          "அறிமுகத்திலிருந்து நிச்சயதார்த்தம் வரை இஸ்லாமிய வழிகாட்டுதல்களைப் பின்பற்றி, ஒழுங்கமைக்கப்பட்ட பின்தொடர்தலுடன் இருவருக்கும் நாங்கள் துணையாக இருக்கிறோம்.",
      },
      showcasing: {
        title: "பெண்கள் மற்றும் குடும்பங்களுக்கு விவரக்குறிப்புகளை வழங்குதல்",
        description:
          "ஆர்வமுள்ள பெண்கள் மற்றும் குடும்பங்களுக்கு, தனியுரிமை மற்றும் மரியாதையின் கட்டமைப்பிற்குள் பொருத்தமான விவரக்குறிப்புகளை வழங்குகிறோம்.",
        usersBadge: "10,000+ பயனர்கள்",
      },
      requests: {
        title: "திருமண கோரிக்கைகளைப் பெறுதல்",
        description:
          "போஸ்னிய பெண்களை மணக்க விரும்பும் இளைஞர்களின் கோரிக்கைகளைப் பெற்று, அவர்களின் விவரக்குறிப்பை துல்லியமாக நிறைவு செய்ய உதவுகிறோம்.",
      },
    },
  },
  companion: {
    title: "மேலும் மிக முக்கியமாக, போஸ்னியாவிற்கான எங்கள் துணைச் சேவை",
    description:
      "எங்கள் பயணத்தின் ஒரு பகுதியாக, ஒவ்வொருவரின் திறனுக்கும் ஏற்ற காலத்திற்கு பங்கேற்கும் நெகிழ்வுத்தன்மையுடன் 6 நாட்கள் 5 இரவுகள் திருமணக் குழு துணைச் சேவையை எங்கள் தளம் வழங்குகிறது.",
    items: [
      "பங்கேற்பாளரின் கோப்பைத் தயார் செய்து வழிகாட்டுதல்.",
      "திருமணத்தில் தீவிரமான போஸ்னிய குடும்பங்கள் மற்றும் பெண்களுடன் களப் பயணங்கள் மற்றும் சந்திப்புகளை ஏற்பாடு செய்தல்.",
      "ஆரம்ப ஏற்புநிலையைப் பின்தொடர்தல் மற்றும் இரு தரப்பினருக்கும் இடையே ஒருங்கிணைப்பு.",
      '"ஜெஃபாஃப் தளம்" போஸ்னியாவில் ஏற்பாடு செய்யும் முதல் நிகழ்வில் கலந்துகொள்ளுதல்.',
      "போஸ்னிய விசா விண்ணப்பத்தை ஆதரிக்கவும், சமர்ப்பிப்பு செயல்முறையை எளிதாக்கவும் ஒரு அதிகாரப்பூர்வ அழைப்பிதழைத் தயாரித்தல்.",
      "உங்கள் வாழ்க்கைத் துணையைக் கண்டறியும் வரை ஒரு முறை மட்டும் செலுத்தும் கட்டணம்.",
    ],
    bgAlt: "இரவில் ஒளிரும், போஸ்னியா மற்றும் ஹெர்ஸகோவினாவின் சரயேவோவில் உள்ள மில்யாட்ஸ்கா நதி மீதான லத்தீன் பாலம்",
  },
  why: {
    title: "இந்த முயற்சியில் ஏன் சேர வேண்டும்",
    items: [
      {
        title: "ஒரு உண்மையான வாய்ப்பு",
        description: "ஐரோப்பாவில் உள்ள முஸ்லிம் பெண்கள் மற்றும் குடும்பங்களுடன் தீவிரமான அறிமுகத்திற்காக.",
      },
      {
        title: "நேரடி அனுபவம்",
        description: "உள்ளூர் மரபுகள் மற்றும் சட்ட நடைமுறைகள் குறித்த துல்லியமான அறிவை முன்னதாகக் கொண்டது.",
      },
      {
        title: "முழுமையான துணை",
        description: "ஜெஃபாஃப் தள குழு முதல் அடி முதல் திருமணம் நிறைவேறும் வரை உங்களுடன் இருக்கும்.",
      },
      {
        title: "தெளிவான செயல்முறை",
        description: "தற்செயலின்மையிலிருந்து விலகி, ஒழுங்கமைக்கப்பட்ட அறிமுக நடவடிக்கைகள்.",
      },
    ],
    photoAlt: {
      tall: "போஸ்னியா மற்றும் ஹெர்ஸகோவினாவின் வரலாற்று நகரமான மொஸ்டாரின் பனோரமிக் காட்சி",
      overlay: "சூரிய அஸ்தமனத்தில் மொஸ்டாரின் பழைய தெருக்கள்",
    },
  },
};

const am: BosniaCopy = {
  hero: {
    title: "የቦስንያ የጋብቻ ቡድን አጃቢ ፕሮግራም",
    description:
      'ለመጀመሪያ ጊዜ በዓረብ ዓለም፣ "ዘፋአፍ መድረክ" በቦስንያ እና ሄርዘጎቪና ውስጥ በሙስሊም ወጣቶች እና በሙስሊም ልጃገረዶች እና ቤተሰቦች መካከል ከባድ ጋብቻን የሚያመቻች እና የሚያበረታታ ሁሉን አቀፍ ፕሮግራም ለመገንባት አዲስ ተነሳሽነት ጀምሯል።',
    cta: "አሁኑኑ መቀመጫዎን ያስይዙ",
    pills: {
      date: "ነሐሴ 21፣ 2026",
      payment: "ክፍያ፦ 500 ዩሮ",
      duration: "የጉዞ ጊዜ፦ 1 ሳምንት",
      location: "ቦስንያ እና ሄርዘጎቪና",
    },
    imageAlt: {
      collageMain: "በቦስንያ ገጠራማ አካባቢ ውስጥ የሚጠመዘዝ ወንዝ የአየር ላይ እይታ",
      collageSecondary: "በቦስንያ እና ሄርዘጎቪና በሞስታር ውስጥ የሚገኘው አሮጌው ድልድይ",
    },
  },
  destination: {
    eyebrow: "የመጀመሪያው መዳረሻችን",
    title: "ቦስንያ እና ሄርዘጎቪና",
    paragraphs: [
      '"ዘፋአፍ መድረክ" ወደ ብዙ የአውሮፓ ሀገራት በሚያዘጋጃቸው ተከታታይ ጉዞዎች አካል እንደመሆኑ፣ የመጀመሪያ ጉዞአችን በቦስንያ እና ሄርዘጎቪና ይጀምራል።',
      "እዚያ የመድረኩ ቡድን ከሙስሊም ልጃገረዶች እና ቤተሰቦች ጋር በመገናኘት፣ ስለ ጋብቻ መስፈርቶች፣ ስለ መተዋወቅና ስለ እጮኝነት ሂደት፣ እንዲሁም በቦስንያ ካለው ጋብቻ ጋር የተያያዙ ህጋዊና ባህላዊ ገጽታዎችን በቀጥታ ይማራል።",
      'ይህ የመስክ ልምድ በኋላ ወደ "ዘፋአፍ መድረክ" ተላልፎ ከቋሚ አገልግሎቶቹ አንዱ ይሆናል።',
    ],
    goal: {
      title: "ግብ",
      description:
        "የጉዞው ግብ በቦስንያ ካለው ሙስሊም ማህበረሰብ ጋር ቀጥተኛ ግንኙነቶችንና አጋርነቶችን መገንባት፣ እንዲሁም እዚያ ስላለው የጋብቻ መስፈርቶችና አሰራር መማር ነው።",
    },
    cta: "አሁኑኑ መቀመጫዎን ያስይዙ",
    mapAlt: "መዳረሻውን የሚያመለክት ምልክት ያለበት የቦስንያ እና ሄርዘጎቪና ካርታ",
  },
  help: {
    titleLine1: "በቦስንያ እንዲያገቡ",
    titleLine2: "እንዴት ልንረዳዎት እንችላለን?",
    cards: {
      customPrograms: {
        title: "ብጁ ፕሮግራሞችና ደንበኝነት ምዝገባዎች",
        prefix: "ለዚህ አገልግሎት ተብለው በተለይ የተዘጋጁ ",
        highlight1: "ብጁ ፕሮግራሞችን",
        middle: " እና ደንበኝነት ምዝገባዎችን እናቀርባለን፣ ስለ ጋብቻ ከባድ ለሆኑ ሰዎች ",
        highlight2: "የተለያዩ ፍላጎቶችን",
        suffix: " የሚሸፍኑ።",
      },
      followUp: {
        title: "ከባድና ቀጣይነት ያለው ክትትል",
        description:
          "ከመተዋወቅ እስከ እጮኝነት ድረስ የእስልምና መመሪያዎችን በመከተል፣ በተደራጀ ክትትል ሁለቱንም ወገኖች እናጅባለን።",
      },
      showcasing: {
        title: "መገለጫዎችን ለልጃገረዶችና ለቤተሰቦች ማሳየት",
        description:
          "ፍላጎት ላላቸው ልጃገረዶችና ቤተሰቦች፣ በግላዊነትና በአክብሮት ማዕቀፍ ውስጥ ተስማሚ መገለጫዎችን እናቀርባለን።",
        usersBadge: "ከ10,000 በላይ ተጠቃሚዎች",
      },
      requests: {
        title: "የጋብቻ ጥያቄዎችን መቀበል",
        description:
          "ከቦስንያ ሴቶች ጋር ለማግባት ፍላጎት ካላቸው ወጣቶች ጥያቄዎችን እንቀበላለን፣ መገለጫቸውንም በትክክል እንዲያጠናቅቁ እናግዛቸዋለን።",
      },
    },
  },
  companion: {
    title: "ከሁሉም በላይ ደግሞ፣ ወደ ቦስንያ የምናደርገው አጃቢ አገልግሎት",
    description:
      "ከጉዞአችን አካል እንደመሆኑ፣ መድረካችን ለ6 ቀናት እና 5 ሌሊቶች የሚቆይ የጋብቻ ቡድን አጃቢ አገልግሎት ያቀርባል፣ እያንዳንዱ ሰው ከችሎታው ጋር በሚስማማ ቆይታ ለመሳተፍ በሚያስችል ተለዋዋጭነት።",
    items: [
      "የተሳታፊውን ፋይል ማዘጋጀትና መምራት።",
      "ስለ ጋብቻ ከባድ ከሆኑ የቦስንያ ቤተሰቦችና ልጃገረዶች ጋር የመስክ ጉብኝቶችንና ስብሰባዎችን ማዘጋጀት።",
      "የመጀመሪያ ደረጃ ተቀባይነትን መከታተልና በሁለቱ ወገኖች መካከል ማስተባበር።",
      '"ዘፋአፍ መድረክ" በቦስንያ በሚያዘጋጀው የመጀመሪያ ዝግጅት ላይ መገኘት።',
      "የቦስንያ ቪዛ ማመልከቻን ለመደገፍና የማስገቢያ ሂደቱን ለማቅለል ኦፊሴላዊ የግብዣ ደብዳቤ ማዘጋጀት።",
      "የህይወት አጋርዎን እስክናገኝ ድረስ የሚከፈል አንድ ጊዜ ብቻ ክፍያ።",
    ],
    bgAlt: "በቦስንያ እና ሄርዘጎቪና ሳራዬቮ ውስጥ በሚልያትስካ ወንዝ ላይ ያለው በምሽት የበራው የላቲን ድልድይ",
  },
  why: {
    title: "ለምን በዚህ ተነሳሽነት ይቀላቀሉ",
    items: [
      {
        title: "እውነተኛ እድል",
        description: "በአውሮፓ ካሉ ሙስሊም ልጃገረዶችና ቤተሰቦች ጋር ከባድ ለሆነ መተዋወቅ።",
      },
      {
        title: "የመስክ ልምድ",
        description: "ስለ አካባቢው ልማዶችና ህጋዊ ሂደቶች ትክክለኛ እውቀት የቀደመው።",
      },
      {
        title: "ሙሉ አጃቢነት",
        description: "የዘፋአፍ መድረክ ቡድን ከመጀመሪያው ደረጃ እስከ ጋብቻ ፍጻሜ ድረስ ከእርስዎ ጋር ነው።",
      },
      {
        title: "ግልጽ ሂደት",
        description: "ከመዘበራረቅ የራቁ የተደራጁ የመተዋወቅ ደረጃዎች።",
      },
    ],
    photoAlt: {
      tall: "በቦስንያ እና ሄርዘጎቪና የሚገኘው ታሪካዊ የሞስታር ከተማ ፓኖራሚክ እይታ",
      overlay: "ፀሐይ ስትጠልቅ የሞስታር አሮጌ ጎዳናዎች",
    },
  },
};

const sv: BosniaCopy = {
  hero: {
    title: "Följeprogram för äktenskapsteamet till Bosnien",
    description:
      'För första gången i arabvärlden lanserar "Zefaaf-plattformen" ett nytt initiativ för att bygga upp ett omfattande program som underlättar och uppmuntrar seriösa äktenskap mellan muslimska unga män och muslimska kvinnor och familjer i Bosnien och Hercegovina.',
    cta: "Boka din plats nu",
    pills: {
      date: "21 augusti 2026",
      payment: "Betalning: 500 euro",
      duration: "Resans längd: 1 vecka",
      location: "Bosnien och Hercegovina",
    },
    imageAlt: {
      collageMain: "Flygbild över en flod som slingrar sig genom den bosniska landsbygden",
      collageSecondary: "Den gamla bron i Mostar, Bosnien och Hercegovina",
    },
  },
  destination: {
    eyebrow: "Vår första destination",
    title: "Bosnien och Hercegovina",
    paragraphs: [
      'Som en del av en serie resor som "Zefaaf-plattformen" organiserar till flera europeiska länder börjar vår första resa med Bosnien och Hercegovina.',
      "Där möter plattformens team muslimska kvinnor och familjer för att på plats lära sig om äktenskapskraven, processen för att lära känna varandra och förlovning, samt de juridiska och kulturella aspekterna kring äktenskap i Bosnien.",
      'Denna praktiska erfarenhet kommer senare att föras över till "Zefaaf-plattformen" och bli en del av dess permanenta tjänster.',
    ],
    goal: {
      title: "Mål",
      description:
        "Syftet med resan är att bygga direkta relationer och partnerskap med det muslimska samfundet i Bosnien, samt att lära sig om kraven och mekanismerna för äktenskap där.",
    },
    cta: "Boka din plats nu",
    mapAlt: "Karta över Bosnien och Hercegovina med en platsmarkering som visar destinationen",
  },
  help: {
    titleLine1: "Hur kan vi hjälpa dig",
    titleLine2: "att gifta dig i Bosnien?",
    cards: {
      customPrograms: {
        title: "Skräddarsydda program och prenumerationer",
        prefix: "Vi erbjuder ",
        highlight1: "skräddarsydda program",
        middle: " och prenumerationer utformade specifikt för denna tjänst, som täcker ",
        highlight2: "olika behov",
        suffix: " för dem som är seriösa med äktenskap.",
      },
      followUp: {
        title: "Seriös och kontinuerlig uppföljning",
        description:
          "Vi följer båda parter med organiserad uppföljning, i enlighet med islamiska riktlinjer, från första kontakt till förlovning.",
      },
      showcasing: {
        title: "Presentation av profiler för kvinnor och familjer",
        description:
          "Vi presenterar lämpliga profiler för intresserade kvinnor och familjer, inom ramen för integritet och respekt.",
        usersBadge: "Över 10 000 användare",
      },
      requests: {
        title: "Mottagande av äktenskapsförfrågningar",
        description:
          "Vi tar emot förfrågningar från unga män som är intresserade av att gifta sig med bosniska kvinnor och hjälper dem att fylla i sin profil korrekt.",
      },
    },
  },
  companion: {
    title: "Och viktigast av allt, vår följetjänst till Bosnien",
    description:
      "Som en del av vår resa erbjuder vår plattform en följetjänst för äktenskapsteamet på 6 dagar och 5 nätter, med flexibilitet att delta under den period som passar var och ens möjligheter.",
    items: [
      "Förberedelse av deltagarens dossier och vägledning.",
      "Organisering av platsbesök och möten med bosniska familjer och kvinnor som är seriösa med äktenskap.",
      "Uppföljning av det preliminära godkännandet och samordning mellan båda parter.",
      'Deltagande i det första evenemanget som organiseras av "Zefaaf-plattformen" i Bosnien.',
      "Förberedelse av en officiell inbjudan för att stödja visumansökan till Bosnien och underlätta inlämningsprocessen.",
      "En engångsavgift tills vi hittar din livspartner.",
    ],
    bgAlt: "Den Latinska bron över floden Miljacka i Sarajevo, Bosnien och Hercegovina, upplyst på natten",
  },
  why: {
    title: "Varför gå med i detta initiativ",
    items: [
      {
        title: "En verklig möjlighet",
        description: "För seriös kontakt med muslimska kvinnor och familjer i Europa.",
      },
      {
        title: "Praktisk erfarenhet",
        description: "Föregången av exakt kunskap om lokala traditioner och juridiska förfaranden.",
      },
      {
        title: "Fullständig följeskap",
        description: "Zefaaf-plattformens team finns vid din sida från första steget till äktenskapets fullbordan.",
      },
      {
        title: "En tydlig process",
        description: "Organiserade steg för att lära känna varandra, långt från slumpen.",
      },
    ],
    photoAlt: {
      tall: "En panoramautsikt över den historiska staden Mostar, Bosnien och Hercegovina",
      overlay: "Mostars gamla gator vid solnedgången",
    },
  },
};

const da: BosniaCopy = {
  hero: {
    title: "Ledsageprogram for ægteskabsteamet til Bosnien",
    description:
      'For første gang i den arabiske verden lancerer "Zefaaf-platformen" et nyt initiativ til at opbygge et omfattende program, der letter og fremmer et seriøst ægteskab mellem muslimske unge mænd og muslimske kvinder og familier i Bosnien-Hercegovina.',
    cta: "Book din plads nu",
    pills: {
      date: "21. august 2026",
      payment: "Betaling: 500 euro",
      duration: "Rejsens varighed: 1 uge",
      location: "Bosnien-Hercegovina",
    },
    imageAlt: {
      collageMain: "Luftfoto af en flod, der snor sig gennem det bosniske landskab",
      collageSecondary: "Den gamle bro i Mostar, Bosnien-Hercegovina",
    },
  },
  destination: {
    eyebrow: "Vores første destination",
    title: "Bosnien-Hercegovina",
    paragraphs: [
      'Som en del af en række rejser arrangeret af "Zefaaf-platformen" til flere europæiske lande, begynder vores første rejse med Bosnien-Hercegovina.',
      "Dér mødes platformens team med muslimske kvinder og familier for på førstehånd at lære om ægteskabskravene, processen for at lære hinanden at kende og forlovelse, samt de juridiske og kulturelle aspekter af ægteskab i Bosnien.",
      'Denne praktiske erfaring vil senere blive overført til "Zefaaf-platformen" og blive en del af dens permanente tjenester.',
    ],
    goal: {
      title: "Mål",
      description:
        "Formålet med rejsen er at opbygge direkte relationer og partnerskaber med det muslimske samfund i Bosnien og lære om kravene og mekanismerne for ægteskab dér.",
    },
    cta: "Book din plads nu",
    mapAlt: "Kort over Bosnien-Hercegovina med en placeringsmarkør, der angiver destinationen",
  },
  help: {
    titleLine1: "Hvordan kan vi hjælpe dig",
    titleLine2: "med at blive gift i Bosnien?",
    cards: {
      customPrograms: {
        title: "Skræddersyede programmer og abonnementer",
        prefix: "Vi tilbyder ",
        highlight1: "skræddersyede programmer",
        middle: " og abonnementer designet specifikt til denne tjeneste, der dækker ",
        highlight2: "forskellige behov",
        suffix: " for dem, der er seriøse omkring ægteskab.",
      },
      followUp: {
        title: "Seriøs og løbende opfølgning",
        description:
          "Vi følger begge parter med organiseret opfølgning, i overensstemmelse med islamiske retningslinjer, fra at lære hinanden at kende til forlovelse.",
      },
      showcasing: {
        title: "Præsentation af profiler for kvinder og familier",
        description:
          "Vi præsenterer passende profiler for interesserede kvinder og familier inden for rammerne af privatliv og respekt.",
        usersBadge: "Over 10.000 brugere",
      },
      requests: {
        title: "Modtagelse af ægteskabsanmodninger",
        description:
          "Vi modtager anmodninger fra unge mænd, der er interesserede i at gifte sig med bosniske kvinder, og hjælper dem med at udfylde deres profil nøjagtigt.",
      },
    },
  },
  companion: {
    title: "Og vigtigst af alt, vores ledsagertjeneste til Bosnien",
    description:
      "Som en del af vores rejse tilbyder vores platform en 6-dages, 5-nætters ledsagertjeneste for ægteskabsteamet, med fleksibilitet til at deltage i den varighed, der passer til den enkeltes muligheder.",
    items: [
      "Forberedelse af deltagerens dossier og vejledning af denne.",
      "Tilrettelæggelse af markbesøg og møder med bosniske familier og kvinder, der er seriøse omkring ægteskab.",
      "Opfølgning på den foreløbige accept og koordinering mellem begge parter.",
      'Deltagelse i det første arrangement, som "Zefaaf-platformen" afholder i Bosnien.',
      "Forberedelse af en officiel invitation til støtte for visumansøgningen til Bosnien og lette indsendelsesprocessen.",
      "Et engangsgebyr, indtil vi finder din livspartner.",
    ],
    bgAlt: "Den Latinske Bro over floden Miljacka i Sarajevo, Bosnien-Hercegovina, oplyst om natten",
  },
  why: {
    title: "Hvorfor deltage i dette initiativ",
    items: [
      {
        title: "En reel mulighed",
        description: "For seriøs kontakt med muslimske kvinder og familier i Europa.",
      },
      {
        title: "Praktisk erfaring",
        description: "Efterfulgt af præcis viden om lokale traditioner og juridiske procedurer.",
      },
      {
        title: "Fuld ledsagelse",
        description: "Zefaaf-platformens team er ved din side fra det første skridt til ægteskabets fuldbyrdelse.",
      },
      {
        title: "En klar proces",
        description: "Organiserede trin til at lære hinanden at kende, langt fra tilfældigheder.",
      },
    ],
    photoAlt: {
      tall: "Et panoramaudsyn over den historiske by Mostar, Bosnien-Hercegovina",
      overlay: "Mostars gamle gader ved solnedgang",
    },
  },
};

const sq: BosniaCopy = {
  hero: {
    title: "Programi i Shoqërimit të Ekipit të Martesës në Bosnjë",
    description:
      'Për herë të parë në botën arabe, "Platforma Zefaaf" nis një nismë të re për të ndërtuar një program gjithëpërfshirës që lehtëson dhe inkurajon martesën serioze mes të rinjve myslimanë dhe vajzave e familjeve myslimane në Bosnjë dhe Hercegovinë.',
    cta: "Rezervo vendin tënd tani",
    pills: {
      date: "21 gusht 2026",
      payment: "Pagesa: 500 euro",
      duration: "Kohëzgjatja e udhëtimit: 1 javë",
      location: "Bosnjë dhe Hercegovinë",
    },
    imageAlt: {
      collageMain: "Pamje ajrore e një lumi që dredhon nëpër fshatrat e Bosnjës",
      collageSecondary: "Ura e vjetër në Mostar, Bosnjë dhe Hercegovinë",
    },
  },
  destination: {
    eyebrow: "Destinacioni Ynë i Parë",
    title: "Bosnjë dhe Hercegovinë",
    paragraphs: [
      'Si pjesë e një serie udhëtimesh të organizuara nga "Platforma Zefaaf" në disa vende evropiane, udhëtimi ynë i parë fillon me Bosnjën dhe Hercegovinën.',
      "Atje, ekipi i platformës takohet me vajza dhe familje myslimane, për të mësuar nga afër kushtet e martesës, procesin e njohjes dhe fejesës, si dhe aspektet ligjore e kulturore që lidhen me martesën në Bosnjë.",
      'Kjo përvojë në terren më vonë do të kalojë te "Platforma Zefaaf", duke u bërë pjesë e shërbimeve të saj të përhershme.',
    ],
    goal: {
      title: "Qëllimi",
      description:
        "Qëllimi i udhëtimit është ndërtimi i marrëdhënieve dhe partneriteteve të drejtpërdrejta me komunitetin mysliman në Bosnjë, si dhe njohja e kushteve dhe mekanizmave të martesës atje.",
    },
    cta: "Rezervo vendin tënd tani",
    mapAlt: "Harta e Bosnjës dhe Hercegovinës me një shenjë vendndodhjeje që tregon destinacionin",
  },
  help: {
    titleLine1: "Si mund t'ju ndihmojmë",
    titleLine2: "të martoheni në Bosnjë?",
    cards: {
      customPrograms: {
        title: "Programe dhe abonime të personalizuara",
        prefix: "Ne ofrojmë ",
        highlight1: "programe të përshtatura",
        middle: " dhe abonime të dizajnuara posaçërisht për këtë shërbim, që mbulojnë ",
        highlight2: "nevoja të ndryshme",
        suffix: " për ata që janë serioz për martesë.",
      },
      followUp: {
        title: "Përcjellje serioze dhe e vazhdueshme",
        description:
          "I shoqërojmë të dyja palët me përcjellje të organizuar, duke respektuar udhëzimet islame, nga njohja deri te fejesa.",
      },
      showcasing: {
        title: "Prezantimi i profileve te vajzat dhe familjet",
        description:
          "Prezantojmë profile të përshtatshme te vajzat dhe familjet e interesuara, brenda një kuadri privatësie dhe respekti.",
        usersBadge: "Mbi 10.000 përdorues",
      },
      requests: {
        title: "Marrja e kërkesave për martesë",
        description:
          "Marrim kërkesat e të rinjve të interesuar për t'u martuar me vajza boshnjake dhe i ndihmojmë të plotësojnë profilin e tyre me saktësi.",
      },
    },
  },
  companion: {
    title: "Dhe më e rëndësishmja, shërbimi ynë i shoqërimit në Bosnjë",
    description:
      "Si pjesë e udhëtimit tonë, platforma jonë ofron një shërbim shoqërimi të ekipit të martesës prej 6 ditësh e 5 netësh, me fleksibilitet pjesëmarrjeje për kohëzgjatjen që përshtatet me mundësitë e secilit.",
    items: [
      "Përgatitja e dosjes së pjesëmarrësit dhe udhëzimi i tij.",
      "Organizimi i vizitave në terren dhe takimeve me familje dhe vajza boshnjake serioze për martesë.",
      "Përcjellja e pranimit paraprak dhe koordinimi mes dy palëve.",
      'Pjesëmarrja në ngjarjen e parë të organizuar nga "Platforma Zefaaf" në Bosnjë.',
      "Përgatitja e një ftese zyrtare për të mbështetur kërkesën për vizë për Bosnjën dhe për të lehtësuar procesin e paraqitjes.",
      "Një tarifë e vetme deri sa të gjejmë partnerin tuaj të jetës.",
    ],
    bgAlt: "Ura Latine mbi lumin Miljacka në Sarajevë, Bosnjë dhe Hercegovinë, e ndriçuar natën",
  },
  why: {
    title: "Pse t'i bashkoheni kësaj nisme",
    items: [
      {
        title: "Një mundësi e vërtetë",
        description: "Për njohje serioze me vajza dhe familje myslimane në Evropë.",
      },
      {
        title: "Përvojë praktike",
        description: "E paraprirë nga njohuri të sakta mbi traditat lokale dhe procedurat ligjore.",
      },
      {
        title: "Shoqërim i plotë",
        description: "Ekipi i platformës Zefaaf është me ju që nga hapi i parë deri te përmbushja e martesës.",
      },
      {
        title: "Një proces i qartë",
        description: "Hapa të organizuar njohjeje, larg rastësisë.",
      },
    ],
    photoAlt: {
      tall: "Një pamje panoramike e qytetit historik të Mostarit, Bosnjë dhe Hercegovinë",
      overlay: "Rrugicat e vjetra të Mostarit në perëndim të diellit",
    },
  },
};

const uz: BosniaCopy = {
  hero: {
    title: "Bosniyaga nikoh guruhini kuzatib borish dasturi",
    description:
      'Arab dunyosida birinchi marta "Zefaaf platformasi" Bosniya va Gertsegovinada musulmon yigitlar bilan musulmon qizlar va oilalar o\'rtasida jiddiy nikohni osonlashtiruvchi va rag\'batlantiruvchi keng qamrovli dasturni yaratish uchun yangi tashabbusni boshlamoqda.',
    cta: "Hozir joyingizni band qiling",
    pills: {
      date: "2026-yil 21-avgust",
      payment: "To'lov: 500 yevro",
      duration: "Sayohat davomiyligi: 1 hafta",
      location: "Bosniya va Gertsegovina",
    },
    imageAlt: {
      collageMain: "Bosniya qishloq hududlari bo'ylab burama oqadigan daryoning havodan ko'rinishi",
      collageSecondary: "Bosniya va Gertsegovinaning Mostar shahridagi eski ko'prik",
    },
  },
  destination: {
    eyebrow: "Bizning birinchi manzilimiz",
    title: "Bosniya va Gertsegovina",
    paragraphs: [
      '"Zefaaf platformasi" tomonidan bir qancha Yevropa davlatlariga tashkil etilgan sayohatlar seriyasi doirasida, bizning birinchi sayohatimiz Bosniya va Gertsegovinadan boshlanadi.',
      "U yerda platforma jamoasi musulmon qizlar va oilalar bilan uchrashib, nikoh talablari, tanishuv va unashtirish jarayoni, hamda Bosniyadagi nikohga oid huquqiy va madaniy jihatlar haqida bevosita bilib oladi.",
      'Ushbu amaliy tajriba keyinchalik "Zefaaf platformasi"ga o\'tkaziladi va uning doimiy xizmatlarining bir qismiga aylanadi.',
    ],
    goal: {
      title: "Maqsad",
      description:
        "Sayohatning maqsadi Bosniyadagi musulmon jamoasi bilan bevosita aloqalar va hamkorlik o'rnatish, hamda u yerdagi nikoh talablari va mexanizmlarini bilib olishdir.",
    },
    cta: "Hozir joyingizni band qiling",
    mapAlt: "Manzilni belgilaydigan joylashuv nishonli Bosniya va Gertsegovina xaritasi",
  },
  help: {
    titleLine1: "Bosniyada turmush qurishingizga",
    titleLine2: "qanday yordam bera olamiz?",
    cards: {
      customPrograms: {
        title: "Maxsus dasturlar va obunalar",
        prefix: "Biz ushbu xizmat uchun maxsus ishlab chiqilgan ",
        highlight1: "moslashtirilgan dasturlar",
        middle: " va obunalarni taklif qilamiz, bu esa nikohga jiddiy qaraydiganlarning ",
        highlight2: "turli ehtiyojlarini",
        suffix: " qamrab oladi.",
      },
      followUp: {
        title: "Jiddiy va uzluksiz kuzatuv",
        description:
          "Tanishuvdan unashtirishgacha bo'lgan jarayonda islomiy yo'riqnomalarga rioya qilgan holda, tashkil etilgan kuzatuv orqali ikkala tomonga ham hamrohlik qilamiz.",
      },
      showcasing: {
        title: "Qizlar va oilalarga profillarni taqdim etish",
        description:
          "Maxfiylik va hurmat doirasida, qiziqqan qizlar va oilalarga mos profillarni taqdim etamiz.",
        usersBadge: "10 000 dan ortiq foydalanuvchi",
      },
      requests: {
        title: "Nikoh so'rovlarini qabul qilish",
        description:
          "Bosniyalik ayollarga uylanishga qiziqqan yigitlardan so'rovlarni qabul qilamiz va ularga profilini aniq to'ldirishda yordam beramiz.",
      },
    },
  },
  companion: {
    title: "Va eng muhimi, Bosniyaga kuzatib borish xizmatimiz",
    description:
      "Sayohatimizning bir qismi sifatida, platformamiz har bir insonning imkoniyatiga mos keladigan muddatda ishtirok etish moslashuvchanligi bilan 6 kun 5 kechalik nikoh guruhini kuzatib borish xizmatini taklif qiladi.",
    items: [
      "Ishtirokchining faylini tayyorlash va uni yo'naltirish.",
      "Nikohga jiddiy qaraydigan Bosniyalik oilalar va qizlar bilan joyida tashriflar va uchrashuvlarni tashkil etish.",
      "Dastlabki qabulni kuzatib borish va ikkala tomon o'rtasida muvofiqlashtirish.",
      '"Zefaaf platformasi" Bosniyada tashkil etadigan birinchi tadbirda ishtirok etish.',
      "Bosniya vizasi arizasini qo'llab-quvvatlash va topshirish jarayonini osonlashtirish uchun rasmiy taklifnoma tayyorlash.",
      "Hayotiy sherigingizni topguncha to'lanadigan bir martalik to'lov.",
    ],
    bgAlt: "Bosniya va Gertsegovinaning Sarayevo shahrida, Miljacka daryosi ustidagi kechasi yoritilgan Lotin ko'prigi",
  },
  why: {
    title: "Nima uchun ushbu tashabbusga qo'shilish kerak",
    items: [
      {
        title: "Haqiqiy imkoniyat",
        description: "Yevropadagi musulmon qizlar va oilalar bilan jiddiy tanishuv uchun.",
      },
      {
        title: "Amaliy tajriba",
        description: "Mahalliy an'analar va huquqiy jarayonlar haqida aniq bilim bilan boshlanadigan.",
      },
      {
        title: "To'liq hamrohlik",
        description: "Zefaaf platformasi jamoasi birinchi qadamdan nikoh yakunlanguncha siz bilan birga.",
      },
      {
        title: "Aniq jarayon",
        description: "Tasodifiylikdan yiroq, tashkil etilgan tanishuv bosqichlari.",
      },
    ],
    photoAlt: {
      tall: "Bosniya va Gertsegovinaning tarixiy shahri Mostarning panorama ko'rinishi",
      overlay: "Quyosh botayotganda Mostarning eski ko'chalari",
    },
  },
};

const az: BosniaCopy = {
  hero: {
    title: "Bosniyaya nikah komandası müşayiət proqramı",
    description:
      'Ərəb dünyasında ilk dəfə olaraq, "Zefaaf Platforması" Bosniya və Herseqovinada müsəlman gənclər ilə müsəlman qızlar və ailələr arasında ciddi nikahı asanlaşdıran və təşviq edən əhatəli bir proqram qurmaq üçün yeni bir təşəbbüs başladır.',
    cta: "İndi yerinizi rezerv edin",
    pills: {
      date: "21 avqust 2026",
      payment: "Ödəniş: 500 avro",
      duration: "Səfərin müddəti: 1 həftə",
      location: "Bosniya və Herseqovina",
    },
    imageAlt: {
      collageMain: "Bosniya kəndlərindən qıvrılaraq keçən çayın hava mənzərəsi",
      collageSecondary: "Bosniya və Herseqovinanın Mostar şəhərindəki köhnə körpü",
    },
  },
  destination: {
    eyebrow: "İlk təyinat yerimiz",
    title: "Bosniya və Herseqovina",
    paragraphs: [
      '"Zefaaf Platforması" tərəfindən bir neçə Avropa ölkəsinə təşkil olunan səfərlər seriyasının bir hissəsi olaraq, ilk səfərimiz Bosniya və Herseqovinadan başlayır.',
      "Orada platformanın komandası müsəlman qızlar və ailələrlə görüşərək, nikah tələblərini, tanışlıq və nişan prosesini, eləcə də Bosniyada nikahla bağlı hüquqi və mədəni cəhətləri birbaşa öyrənir.",
      'Bu təcrübə sonradan "Zefaaf Platforması"na keçiriləcək və onun daimi xidmətlərinin bir hissəsinə çevriləcək.',
    ],
    goal: {
      title: "Məqsəd",
      description:
        "Səfərin məqsədi Bosniyadakı müsəlman icması ilə birbaşa əlaqələr və tərəfdaşlıqlar qurmaq, eləcə də oradakı nikah tələblərini və mexanizmlərini öyrənməkdir.",
    },
    cta: "İndi yerinizi rezerv edin",
    mapAlt: "Təyinat yerini göstərən yerləşmə nişanı ilə Bosniya və Herseqovina xəritəsi",
  },
  help: {
    titleLine1: "Bosniyada evlənməyinizə",
    titleLine2: "necə kömək edə bilərik?",
    cards: {
      customPrograms: {
        title: "Fərdi proqramlar və abunəliklər",
        prefix: "Biz bu xidmət üçün xüsusi hazırlanmış ",
        highlight1: "fərdi proqramlar",
        middle: " və abunəliklər təklif edirik ki, bunlar nikah məsələsində ciddi olanların ",
        highlight2: "müxtəlif ehtiyaclarını",
        suffix: " əhatə edir.",
      },
      followUp: {
        title: "Ciddi və davamlı izləmə",
        description:
          "Tanışlıqdan nişana qədər İslami qaydalara riayət edərək, təşkil olunmuş izləmə ilə hər iki tərəfə müşayiət edirik.",
      },
      showcasing: {
        title: "Qızlara və ailələrə profillərin təqdim edilməsi",
        description:
          "Maraqlanan qızlara və ailələrə, məxfilik və hörmət çərçivəsində uyğun profillər təqdim edirik.",
        usersBadge: "10.000-dən çox istifadəçi",
      },
      requests: {
        title: "Nikah müraciətlərinin qəbulu",
        description:
          "Bosniyalı qadınlarla evlənmək istəyən gənclərdən müraciətləri qəbul edir və profillərini dəqiq tamamlamalarına kömək edirik.",
      },
    },
  },
  companion: {
    title: "Və ən əsası, Bosniyaya müşayiət xidmətimiz",
    description:
      "Səfərimizin bir hissəsi olaraq, platformamız hər kəsin imkanına uyğun müddət ərzində iştirak etmək çevikliyi ilə 6 gün, 5 gecəlik nikah komandası müşayiət xidməti təklif edir.",
    items: [
      "İştirakçının işinin hazırlanması və istiqamətləndirilməsi.",
      "Nikah məsələsində ciddi olan Bosniyalı ailələr və qızlarla sahə səfərlərinin və görüşlərinin təşkili.",
      "İlkin razılığın izlənməsi və hər iki tərəf arasında koordinasiya.",
      '"Zefaaf Platforması"nın Bosniyada təşkil etdiyi ilk tədbirdə iştirak.',
      "Bosniya vizası müraciətini dəstəkləmək və təqdim etmə prosesini asanlaşdırmaq üçün rəsmi dəvətnamənin hazırlanması.",
      "Həyat yoldaşınızı tapana qədər bir dəfəlik ödəniş.",
    ],
    bgAlt: "Gecə işıqlandırılmış, Bosniya və Herseqovinanın Sarayevo şəhərində Milyaçka çayı üzərindəki Latın körpüsü",
  },
  why: {
    title: "Bu təşəbbüsə niyə qoşulmalısınız",
    items: [
      {
        title: "Real bir fürsət",
        description: "Avropadakı müsəlman qızlar və ailələrlə ciddi tanışlıq üçün.",
      },
      {
        title: "Sahə təcrübəsi",
        description: "Yerli ənənələr və hüquqi prosedurlar barədə dəqiq biliklə əlaqədə.",
      },
      {
        title: "Tam müşayiət",
        description: "Zefaaf platforması komandası ilk addımdan nikahın tamamlanmasına qədər yanınızdadır.",
      },
      {
        title: "Aydın proses",
        description: "Təsadüfilikdən uzaq, təşkil olunmuş tanışlıq addımları.",
      },
    ],
    photoAlt: {
      tall: "Bosniya və Herseqovinanın tarixi Mostar şəhərinin panoram mənzərəsi",
      overlay: "Gün batımında Mostarın köhnə küçələri",
    },
  },
};

const fil: BosniaCopy = {
  hero: {
    title: "Programa ng Pagsama sa Koponan ng Kasal Papuntang Bosnia",
    description:
      'Sa unang pagkakataon sa mundo ng Arabo, inilulunsad ng "Zefaaf Platform" ang isang bagong inisyatiba upang bumuo ng isang komprehensibong programa na nagpapadali at humihikayat ng seryosong kasal sa pagitan ng mga kabataang Muslim at mga babaeng Muslim at mga pamilya sa Bosnia at Herzegovina.',
    cta: "I-book ang iyong upuan ngayon",
    pills: {
      date: "Agosto 21, 2026",
      payment: "Bayad: 500 Euro",
      duration: "Tagal ng paglalakbay: 1 linggo",
      location: "Bosnia at Herzegovina",
    },
    imageAlt: {
      collageMain: "Panoramang tanawin mula sa himpapawid ng isang ilog na umiikot sa kanayunan ng Bosnia",
      collageSecondary: "Ang lumang tulay sa Mostar, Bosnia at Herzegovina",
    },
  },
  destination: {
    eyebrow: "Ang Aming Unang Destinasyon",
    title: "Bosnia at Herzegovina",
    paragraphs: [
      'Bilang bahagi ng serye ng mga paglalakbay na inaayos ng "Zefaaf Platform" sa ilang bansa sa Europa, nagsisimula ang aming unang paglalakbay sa Bosnia at Herzegovina.',
      "Doon, nakikipagkita ang koponan ng plataporma sa mga babaeng Muslim at mga pamilya, upang direktang malaman ang mga kinakailangan sa kasal, ang proseso ng pagkikilala at pakikipag-engaged, at ang mga legal at kultural na aspeto ng kasal sa Bosnia.",
      'Ang karanasang ito sa larangan ay ililipat sa hinaharap sa "Zefaaf Platform", upang maging bahagi ng permanenteng mga serbisyo nito.',
    ],
    goal: {
      title: "Layunin",
      description:
        "Ang layunin ng paglalakbay ay ang pagbuo ng tuwirang relasyon at pakikipagsosyo sa komunidad ng mga Muslim sa Bosnia, at ang pag-alam sa mga kinakailangan at mekanismo ng kasal doon.",
    },
    cta: "I-book ang iyong upuan ngayon",
    mapAlt: "Mapa ng Bosnia at Herzegovina na may pin ng lokasyon na nagmamarka sa destinasyon",
  },
  help: {
    titleLine1: "Paano ka namin matutulungan",
    titleLine2: "na magpakasal sa Bosnia?",
    cards: {
      customPrograms: {
        title: "Mga naka-customize na programa at subscription",
        prefix: "Nag-aalok kami ng ",
        highlight1: "mga programang iniangkop",
        middle: " at mga subscription na dinisenyo partikular para sa serbisyong ito, na sumasaklaw sa ",
        highlight2: "iba't ibang pangangailangan",
        suffix: " para sa mga seryoso sa kasal.",
      },
      followUp: {
        title: "Seryoso at tuluy-tuloy na follow-up",
        description:
          "Sinasamahan namin ang dalawang panig sa isang organisadong follow-up, alinsunod sa mga alituntuning Islamiko, mula sa pagkikilala hanggang sa engagement.",
      },
      showcasing: {
        title: "Pagpapakita ng mga profile sa mga babae at pamilya",
        description:
          "Ipinapakita namin ang mga angkop na profile sa mga interesadong babae at pamilya, sa loob ng balangkas ng pagkapribado at paggalang.",
        usersBadge: "Mahigit 10,000 mga user",
      },
      requests: {
        title: "Pagtanggap ng mga kahilingan sa kasal",
        description:
          "Tumatanggap kami ng mga kahilingan mula sa mga kabataang interesadong magpakasal sa mga babaeng Bosniako at tinutulungan silang kumpletuhin nang tama ang kanilang profile.",
      },
    },
  },
  companion: {
    title: "At higit sa lahat, ang aming serbisyong pagsama papuntang Bosnia",
    description:
      "Bilang bahagi ng aming paglalakbay, nag-aalok ang aming plataporma ng 6 na araw, 5 gabing serbisyo ng pagsama sa koponan ng kasal, na may kakayahang umangkop sa pakikilahok sa tagal na angkop sa kakayahan ng bawat isa.",
    items: [
      "Paghahanda ng file ng kalahok at paggabay sa kanya.",
      "Pag-aayos ng mga field visit at pagpupulong sa mga pamilya at babaeng Bosniako na seryoso tungkol sa kasal.",
      "Pagsubaybay sa paunang pagtanggap at pag-uugnay sa pagitan ng dalawang panig.",
      'Pagdalo sa unang kaganapang inaayos ng "Zefaaf Platform" sa Bosnia.',
      "Paghahanda ng opisyal na imbitasyon upang suportahan ang aplikasyon ng bisa sa Bosnia at gawing mas madali ang proseso ng pagsusumite.",
      "Isang beses na bayad hanggang mahanap namin ang iyong kapareha sa buhay.",
    ],
    bgAlt: "Ang Latin Bridge sa ibabaw ng ilog Miljacka sa Sarajevo, Bosnia at Herzegovina, naiilawan sa gabi",
  },
  why: {
    title: "Bakit sumali sa inisyatibang ito",
    items: [
      {
        title: "Isang tunay na pagkakataon",
        description: "Para sa seryosong pagkikilala sa mga babaeng Muslim at pamilya sa Europa.",
      },
      {
        title: "Karanasan sa larangan",
        description: "Na paunang binigyan ng tumpak na kaalaman sa mga lokal na tradisyon at legal na pamamaraan.",
      },
      {
        title: "Buong pagsama",
        description: "Kasama mo ang koponan ng Zefaaf platform mula sa unang hakbang hanggang sa pagkumpleto ng kasal.",
      },
      {
        title: "Isang malinaw na proseso",
        description: "Mga organisadong hakbang ng pagkikilala, malayo sa kaguluhan.",
      },
    ],
    photoAlt: {
      tall: "Isang panoramang tanawin ng makasaysayang lungsod ng Mostar, Bosnia at Herzegovina",
      overlay: "Ang mga lumang kalye ng Mostar sa paglubog ng araw",
    },
  },
};

const hi: BosniaCopy = {
  hero: {
    title: "बोस्निया में विवाह टीम एस्कॉर्ट कार्यक्रम",
    description:
      'अरब जगत में पहली बार, "ज़ेफ़ाफ़ प्लेटफ़ॉर्म" बोस्निया और हर्ज़ेगोविना में मुस्लिम युवाओं और मुस्लिम लड़कियों तथा परिवारों के बीच गंभीर विवाह को सुगम बनाने और प्रोत्साहित करने वाला एक व्यापक कार्यक्रम बनाने के लिए एक नई पहल शुरू कर रहा है।',
    cta: "अभी अपनी सीट बुक करें",
    pills: {
      date: "21 अगस्त, 2026",
      payment: "भुगतान: 500 यूरो",
      duration: "यात्रा अवधि: 1 सप्ताह",
      location: "बोस्निया और हर्ज़ेगोविना",
    },
    imageAlt: {
      collageMain: "बोस्नियाई ग्रामीण इलाके से होकर बहती हुई एक नदी का हवाई दृश्य",
      collageSecondary: "बोस्निया और हर्ज़ेगोविना के मोस्तार में पुराना पुल",
    },
  },
  destination: {
    eyebrow: "हमारा पहला गंतव्य",
    title: "बोस्निया और हर्ज़ेगोविना",
    paragraphs: [
      '"ज़ेफ़ाफ़ प्लेटफ़ॉर्म" द्वारा कई यूरोपीय देशों में आयोजित यात्राओं की श्रृंखला के हिस्से के रूप में, हमारी पहली यात्रा बोस्निया और हर्ज़ेगोविना से शुरू होती है।',
      "वहाँ, प्लेटफ़ॉर्म की टीम मुस्लिम लड़कियों और परिवारों से मिलती है, ताकि विवाह की शर्तों, परिचय व सगाई की प्रक्रिया, और बोस्निया में विवाह से जुड़े कानूनी व सांस्कृतिक पहलुओं को प्रत्यक्ष रूप से जान सके।",
      'यह क्षेत्रीय अनुभव बाद में "ज़ेफ़ाफ़ प्लेटफ़ॉर्म" में स्थानांतरित किया जाएगा, ताकि यह इसकी स्थायी सेवाओं का हिस्सा बन सके।',
    ],
    goal: {
      title: "लक्ष्य",
      description:
        "इस यात्रा का लक्ष्य बोस्निया में मुस्लिम समुदाय के साथ सीधे संबंध और साझेदारी बनाना, तथा वहाँ विवाह की शर्तों और प्रक्रियाओं को जानना है।",
    },
    cta: "अभी अपनी सीट बुक करें",
    mapAlt: "गंतव्य को चिह्नित करने वाले लोकेशन पिन के साथ बोस्निया और हर्ज़ेगोविना का नक्शा",
  },
  help: {
    titleLine1: "हम आपको बोस्निया में",
    titleLine2: "विवाह करने में कैसे मदद कर सकते हैं?",
    cards: {
      customPrograms: {
        title: "कस्टम कार्यक्रम और सदस्यताएँ",
        prefix: "हम इस सेवा के लिए विशेष रूप से डिज़ाइन किए गए ",
        highlight1: "अनुकूलित कार्यक्रम",
        middle: " और सदस्यताएँ प्रदान करते हैं, जो विवाह के प्रति गंभीर लोगों की ",
        highlight2: "विभिन्न आवश्यकताओं",
        suffix: " को पूरा करते हैं।",
      },
      followUp: {
        title: "गंभीर और निरंतर फॉलो-अप",
        description:
          "हम परिचय से लेकर सगाई तक इस्लामी दिशानिर्देशों का पालन करते हुए, एक संगठित फॉलो-अप के साथ दोनों पक्षों का साथ देते हैं।",
      },
      showcasing: {
        title: "लड़कियों और परिवारों को प्रोफाइल दिखाना",
        description:
          "हम रुचि रखने वाली लड़कियों और परिवारों को गोपनीयता और सम्मान के दायरे में उपयुक्त प्रोफाइल प्रस्तुत करते हैं।",
        usersBadge: "10,000 से अधिक उपयोगकर्ता",
      },
      requests: {
        title: "विवाह अनुरोध प्राप्त करना",
        description:
          "हम बोस्नियाई महिलाओं से विवाह करने में रुचि रखने वाले युवाओं से अनुरोध प्राप्त करते हैं और उन्हें अपनी प्रोफाइल सटीक रूप से पूरी करने में मदद करते हैं।",
      },
    },
  },
  companion: {
    title: "और सबसे महत्वपूर्ण, बोस्निया के लिए हमारी एस्कॉर्ट सेवा",
    description:
      "हमारी यात्रा के हिस्से के रूप में, हमारा प्लेटफ़ॉर्म 6 दिन और 5 रातों की विवाह टीम एस्कॉर्ट सेवा प्रदान करता है, जिसमें प्रत्येक व्यक्ति की क्षमता के अनुसार भाग लेने की लचीलापन है।",
    items: [
      "प्रतिभागी की फाइल तैयार करना और उसका मार्गदर्शन करना।",
      "विवाह के प्रति गंभीर बोस्नियाई परिवारों और लड़कियों के साथ फील्ड विज़िट और बैठकों का आयोजन करना।",
      "प्रारंभिक स्वीकृति का पालन करना और दोनों पक्षों के बीच समन्वय करना।",
      '"ज़ेफ़ाफ़ प्लेटफ़ॉर्म" द्वारा बोस्निया में आयोजित पहले कार्यक्रम में शामिल होना।',
      "बोस्निया वीज़ा आवेदन का समर्थन करने और प्रस्तुति प्रक्रिया को आसान बनाने के लिए एक आधिकारिक निमंत्रण तैयार करना।",
      "आपका जीवनसाथी मिलने तक एक बार का शुल्क।",
    ],
    bgAlt: "रात में रोशन, बोस्निया और हर्ज़ेगोविना के साराजेवो में मिलियात्स्का नदी पर लैटिन ब्रिज",
  },
  why: {
    title: "इस पहल में क्यों शामिल हों",
    items: [
      {
        title: "एक वास्तविक अवसर",
        description: "यूरोप में मुस्लिम लड़कियों और परिवारों के साथ गंभीर परिचय के लिए।",
      },
      {
        title: "व्यावहारिक अनुभव",
        description: "स्थानीय परंपराओं और कानूनी प्रक्रियाओं के सटीक ज्ञान से पहले।",
      },
      {
        title: "पूर्ण साथ",
        description: "ज़ेफ़ाफ़ प्लेटफ़ॉर्म की टीम पहले कदम से लेकर विवाह पूरा होने तक आपके साथ है।",
      },
      {
        title: "एक स्पष्ट प्रक्रिया",
        description: "अव्यवस्था से दूर, संगठित परिचय के चरण।",
      },
    ],
    photoAlt: {
      tall: "बोस्निया और हर्ज़ेगोविना के ऐतिहासिक शहर मोस्तार का एक पैनोरमिक दृश्य",
      overlay: "सूर्यास्त के समय मोस्तार की पुरानी गलियाँ",
    },
  },
};

const kk: BosniaCopy = {
  hero: {
    title: "Босния елі бойынша неке тобын сүйемелдеу бағдарламасы",
    description:
      '"Zefaaf платформасы" араб әлемінде тұңғыш рет Босния мен Герцеговинадағы мұсылман жастары мен мұсылман қыздары және отбасылары арасындағы байыпты некені жеңілдететін және ынталандыратын жан-жақты бағдарлама құру үшін жаңа бастама бастап отыр.',
    cta: "Орныңызды қазір брондаңыз",
    pills: {
      date: "2026 жылғы 21 тамыз",
      payment: "Төлем: 500 еуро",
      duration: "Сапар ұзақтығы: 1 апта",
      location: "Босния және Герцеговина",
    },
    imageAlt: {
      collageMain: "Босния ауылдық жерлерінің арасымен иреленіп ағатын өзеннің әуеден көрінісі",
      collageSecondary: "Босния және Герцеговинадағы Мостар қаласындағы ескі көпір",
    },
  },
  destination: {
    eyebrow: "Біздің алғашқы бағытымыз",
    title: "Босния және Герцеговина",
    paragraphs: [
      '"Zefaaf платформасы" бірнеше еуропалық елдерге ұйымдастыратын сапарлар сериясының бөлігі ретінде, біздің алғашқы сапарымыз Босния мен Герцеговинадан басталады.',
      "Онда платформа тобы мұсылман қыздары мен отбасыларымен кездесіп, некеге қойылатын талаптарды, танысу мен айттыру процесін, сондай-ақ Босниядағы некеге қатысты құқықтық және мәдени аспектілерді тікелей біледі.",
      '"Zefaaf платформасы" бұл далалық тәжірибені кейін өзінің тұрақты қызметтерінің бір бөлігіне айналдырады.',
    ],
    goal: {
      title: "Мақсат",
      description:
        "Сапардың мақсаты — Босниядағы мұсылман қауымымен тікелей қарым-қатынас пен серіктестік орнату және сол жердегі неке талаптары мен тетіктерін білу.",
    },
    cta: "Орныңызды қазір брондаңыз",
    mapAlt: "Бағытты белгілейтін орналасу белгісі бар Босния және Герцеговина картасы",
  },
  help: {
    titleLine1: "Босниядa үйленуіңізге",
    titleLine2: "қалай көмектесе аламыз?",
    cards: {
      customPrograms: {
        title: "Жеке бағдарламалар мен жазылымдар",
        prefix: "Біз осы қызмет үшін арнайы әзірленген ",
        highlight1: "жеке бағдарламаларды",
        middle: " және жазылымдарды ұсынамыз, олар некеге байыпты қарайтындардың ",
        highlight2: "әртүрлі қажеттіліктерін",
        suffix: " қамтиды.",
      },
      followUp: {
        title: "Байыпты әрі үздіксіз қадағалау",
        description:
          "Танысудан бастап айттыруға дейін ислами ережелерді сақтай отырып, ұйымдастырылған қадағалаумен екі тарапты да сүйемелдейміз.",
      },
      showcasing: {
        title: "Қыздар мен отбасыларға профильдерді таныстыру",
        description:
          "Мүдделі қыздар мен отбасыларға құпиялылық пен құрмет аясында сәйкес профильдерді ұсынамыз.",
        usersBadge: "10 000-нан астам пайдаланушы",
      },
      requests: {
        title: "Неке өтінімдерін қабылдау",
        description:
          "Босниялық әйелдерге үйленгісі келетін жастардың өтінімдерін қабылдаймыз және оларға профильдерін дәл толтыруға көмектесеміз.",
      },
    },
  },
  companion: {
    title: "Ал ең бастысы, Босниядағы сүйемелдеу қызметіміз",
    description:
      "Сапарымыздың бөлігі ретінде, платформамыз әр адамның мүмкіндігіне сай мерзімде қатысу икемділігімен 6 күн, 5 түнге созылатын неке тобын сүйемелдеу қызметін ұсынады.",
    items: [
      "Қатысушының ісін дайындау және оны бағыттау.",
      "Некеге байыпты қарайтын босниялық отбасылар мен қыздармен далалық сапарлар мен кездесулерді ұйымдастыру.",
      "Алдын ала қабылдауды қадағалау және екі тарап арасында үйлестіру.",
      '"Zefaaf платформасы" Босниядa ұйымдастыратын алғашқы іс-шараға қатысу.',
      "Босния визасына өтінішті қолдау және өтініш беру процесін жеңілдету үшін ресми шақыру дайындау.",
      "Өміріңіздің серігін тапқанға дейін бір реттік төлем.",
    ],
    bgAlt: "Түнде жарықтандырылған, Босния және Герцеговинадағы Сараево қаласындағы Милячка өзені үстіндегі Латын көпірі",
  },
  why: {
    title: "Неліктен осы бастамаға қосылу керек",
    items: [
      {
        title: "Нақты мүмкіндік",
        description: "Еуропадағы мұсылман қыздары мен отбасыларымен байыпты танысу үшін.",
      },
      {
        title: "Далалық тәжірибе",
        description: "Жергілікті дәстүрлер мен құқықтық рәсімдер туралы нақты біліммен қатар жүреді.",
      },
      {
        title: "Толық сүйемелдеу",
        description: "Zefaaf платформасының тобы бірінші қадамнан неке аяқталғанға дейін сізбен бірге болады.",
      },
      {
        title: "Түсінікті процесс",
        description: "Кездейсоқтықтан аулақ, ұйымдастырылған танысу қадамдары.",
      },
    ],
    photoAlt: {
      tall: "Босния және Герцеговинадағы тарихи Мостар қаласының панорамалық көрінісі",
      overlay: "Күн батқандағы Мостардың ескі көшелері",
    },
  },
};

const ms: BosniaCopy = {
  hero: {
    title: "Program Pengiringan Pasukan Perkahwinan ke Bosnia",
    description:
      'Buat pertama kali di dunia Arab, "Platform Zefaaf" melancarkan inisiatif baharu untuk membina program komprehensif yang memudahkan dan menggalakkan perkahwinan serius antara pemuda Muslim dengan gadis dan keluarga Muslim di Bosnia dan Herzegovina.',
    cta: "Tempah Tempat Anda Sekarang",
    pills: {
      date: "21 Ogos 2026",
      payment: "Bayaran: 500 Euro",
      duration: "Tempoh perjalanan: 1 minggu",
      location: "Bosnia dan Herzegovina",
    },
    imageAlt: {
      collageMain: "Pemandangan udara sebuah sungai yang berkelok-kelok melalui luar bandar Bosnia",
      collageSecondary: "Jambatan lama di Mostar, Bosnia dan Herzegovina",
    },
  },
  destination: {
    eyebrow: "Destinasi Pertama Kami",
    title: "Bosnia dan Herzegovina",
    paragraphs: [
      'Sebagai sebahagian daripada siri perjalanan yang dianjurkan oleh "Platform Zefaaf" ke beberapa negara Eropah, perjalanan pertama kami bermula dengan Bosnia dan Herzegovina.',
      "Di sana, pasukan platform bertemu gadis dan keluarga Muslim, untuk mengetahui secara langsung syarat-syarat perkahwinan, proses berkenalan dan pertunangan, serta aspek undang-undang dan budaya berkaitan perkahwinan di Bosnia.",
      'Pengalaman lapangan ini kelak akan dipindahkan ke "Platform Zefaaf", untuk menjadi sebahagian daripada perkhidmatan tetapnya.',
    ],
    goal: {
      title: "Matlamat",
      description:
        "Matlamat perjalanan ini adalah untuk membina hubungan dan perkongsian langsung dengan komuniti Muslim di Bosnia, dan mengetahui syarat serta mekanisme perkahwinan di sana.",
    },
    cta: "Tempah Tempat Anda Sekarang",
    mapAlt: "Peta Bosnia dan Herzegovina dengan penanda lokasi yang menandakan destinasi",
  },
  help: {
    titleLine1: "Bagaimana kami boleh membantu anda",
    titleLine2: "berkahwin di Bosnia?",
    cards: {
      customPrograms: {
        title: "Program dan langganan tersuai",
        prefix: "Kami menawarkan ",
        highlight1: "program yang disesuaikan",
        middle: " dan langganan yang direka khusus untuk perkhidmatan ini, merangkumi ",
        highlight2: "keperluan yang berbeza",
        suffix: " bagi mereka yang serius tentang perkahwinan.",
      },
      followUp: {
        title: "Susulan yang serius dan berterusan",
        description:
          "Kami mengiringi kedua-dua pihak dengan susulan yang tersusun, mematuhi garis panduan Islam dari perkenalan hingga pertunangan.",
      },
      showcasing: {
        title: "Mempamerkan profil kepada gadis dan keluarga",
        description:
          "Kami mempersembahkan profil yang sesuai kepada gadis dan keluarga yang berminat, dalam kerangka privasi dan hormat.",
        usersBadge: "Lebih 10,000 pengguna",
      },
      requests: {
        title: "Menerima permohonan perkahwinan",
        description:
          "Kami menerima permohonan daripada pemuda yang berminat berkahwin dengan wanita Bosnia dan membantu mereka melengkapkan profil dengan tepat.",
      },
    },
  },
  companion: {
    title: "Dan yang paling penting, perkhidmatan pengiringan kami ke Bosnia",
    description:
      "Sebagai sebahagian daripada perjalanan kami, platform kami menawarkan perkhidmatan pengiringan pasukan perkahwinan selama 6 hari 5 malam, dengan fleksibiliti untuk mengambil bahagian mengikut tempoh yang sesuai dengan kemampuan setiap orang.",
    items: [
      "Menyediakan fail peserta dan membimbing mereka.",
      "Menganjurkan lawatan lapangan dan pertemuan dengan keluarga dan gadis Bosnia yang serius tentang perkahwinan.",
      "Menyusuli penerimaan awal dan menyelaraskan antara kedua-dua pihak.",
      'Menghadiri acara pertama yang dianjurkan oleh "Platform Zefaaf" di Bosnia.',
      "Menyediakan jemputan rasmi untuk menyokong permohonan visa Bosnia dan memudahkan proses penyerahan.",
      "Bayaran sekali sahaja sehingga kami menemukan pasangan hidup anda.",
    ],
    bgAlt: "Jambatan Latin di atas Sungai Miljacka di Sarajevo, Bosnia dan Herzegovina, diterangi pada waktu malam",
  },
  why: {
    title: "Mengapa menyertai inisiatif ini",
    items: [
      {
        title: "Peluang sebenar",
        description: "Untuk perkenalan serius dengan gadis dan keluarga Muslim di Eropah.",
      },
      {
        title: "Pengalaman lapangan",
        description: "Didahului dengan pengetahuan tepat tentang tradisi tempatan dan prosedur undang-undang.",
      },
      {
        title: "Pengiringan penuh",
        description: "Pasukan platform Zefaaf bersama anda dari langkah pertama hingga penyempurnaan perkahwinan.",
      },
      {
        title: "Proses yang jelas",
        description: "Langkah perkenalan yang tersusun, jauh daripada rambang.",
      },
    ],
    photoAlt: {
      tall: "Pemandangan panorama bandar bersejarah Mostar, Bosnia dan Herzegovina",
      overlay: "Jalan-jalan lama Mostar ketika matahari terbenam",
    },
  },
};

const pa: BosniaCopy = {
  hero: {
    title: "ਬੋਸਨੀਆ ਵਿੱਚ ਵਿਆਹ ਟੀਮ ਸਾਥ ਪ੍ਰੋਗਰਾਮ",
    description:
      'ਅਰਬ ਜਗਤ ਵਿੱਚ ਪਹਿਲੀ ਵਾਰ, "ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ" ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵਿਨਾ ਵਿੱਚ ਮੁਸਲਿਮ ਨੌਜਵਾਨਾਂ ਅਤੇ ਮੁਸਲਿਮ ਕੁੜੀਆਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਵਿਚਕਾਰ ਗੰਭੀਰ ਵਿਆਹ ਨੂੰ ਸੌਖਾ ਅਤੇ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਵਾਲਾ ਇੱਕ ਵਿਆਪਕ ਪ੍ਰੋਗਰਾਮ ਬਣਾਉਣ ਲਈ ਇੱਕ ਨਵੀਂ ਪਹਿਲ ਸ਼ੁਰੂ ਕਰ ਰਿਹਾ ਹੈ।',
    cta: "ਹੁਣੇ ਆਪਣੀ ਸੀਟ ਬੁੱਕ ਕਰੋ",
    pills: {
      date: "21 ਅਗਸਤ, 2026",
      payment: "ਭੁਗਤਾਨ: 500 ਯੂਰੋ",
      duration: "ਯਾਤਰਾ ਦੀ ਮਿਆਦ: 1 ਹਫ਼ਤਾ",
      location: "ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵਿਨਾ",
    },
    imageAlt: {
      collageMain: "ਬੋਸਨੀਆਈ ਪੇਂਡੂ ਖੇਤਰ ਵਿੱਚੋਂ ਲੰਘਦੀ ਇੱਕ ਨਦੀ ਦਾ ਹਵਾਈ ਦ੍ਰਿਸ਼",
      collageSecondary: "ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵਿਨਾ ਦੇ ਮੋਸਤਾਰ ਵਿੱਚ ਪੁਰਾਣਾ ਪੁਲ",
    },
  },
  destination: {
    eyebrow: "ਸਾਡੀ ਪਹਿਲੀ ਮੰਜ਼ਿਲ",
    title: "ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵਿਨਾ",
    paragraphs: [
      '"ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ" ਵੱਲੋਂ ਕਈ ਯੂਰਪੀਅਨ ਦੇਸ਼ਾਂ ਵਿੱਚ ਆਯੋਜਿਤ ਯਾਤਰਾਵਾਂ ਦੀ ਲੜੀ ਦੇ ਹਿੱਸੇ ਵਜੋਂ, ਸਾਡੀ ਪਹਿਲੀ ਯਾਤਰਾ ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵਿਨਾ ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।',
      "ਉੱਥੇ, ਪਲੇਟਫਾਰਮ ਦੀ ਟੀਮ ਮੁਸਲਿਮ ਕੁੜੀਆਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਨੂੰ ਮਿਲਦੀ ਹੈ, ਤਾਂ ਜੋ ਵਿਆਹ ਦੀਆਂ ਸ਼ਰਤਾਂ, ਜਾਣ-ਪਛਾਣ ਅਤੇ ਮੰਗਣੀ ਦੀ ਪ੍ਰਕਿਰਿਆ, ਅਤੇ ਬੋਸਨੀਆ ਵਿੱਚ ਵਿਆਹ ਨਾਲ ਸੰਬੰਧਿਤ ਕਾਨੂੰਨੀ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਪਹਿਲੂਆਂ ਬਾਰੇ ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਜਾਣਿਆ ਜਾ ਸਕੇ।",
      '"ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ" ਇਸ ਖੇਤਰੀ ਤਜਰਬੇ ਨੂੰ ਬਾਅਦ ਵਿੱਚ ਆਪਣੀਆਂ ਸਥਾਈ ਸੇਵਾਵਾਂ ਦਾ ਹਿੱਸਾ ਬਣਾਏਗਾ।',
    ],
    goal: {
      title: "ਟੀਚਾ",
      description:
        "ਯਾਤਰਾ ਦਾ ਟੀਚਾ ਬੋਸਨੀਆ ਵਿੱਚ ਮੁਸਲਿਮ ਭਾਈਚਾਰੇ ਨਾਲ ਸਿੱਧੇ ਸੰਬੰਧ ਅਤੇ ਭਾਈਵਾਲੀ ਬਣਾਉਣਾ ਹੈ, ਅਤੇ ਉੱਥੇ ਵਿਆਹ ਦੀਆਂ ਸ਼ਰਤਾਂ ਅਤੇ ਵਿਧੀਆਂ ਬਾਰੇ ਜਾਣਨਾ ਹੈ।",
    },
    cta: "ਹੁਣੇ ਆਪਣੀ ਸੀਟ ਬੁੱਕ ਕਰੋ",
    mapAlt: "ਮੰਜ਼ਿਲ ਨੂੰ ਦਰਸਾਉਂਦੇ ਸਥਾਨ ਪਿੰਨ ਵਾਲਾ ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵਿਨਾ ਦਾ ਨਕਸ਼ਾ",
  },
  help: {
    titleLine1: "ਅਸੀਂ ਬੋਸਨੀਆ ਵਿੱਚ ਵਿਆਹ ਕਰਨ ਲਈ",
    titleLine2: "ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ?",
    cards: {
      customPrograms: {
        title: "ਕਸਟਮ ਪ੍ਰੋਗਰਾਮ ਅਤੇ ਸਬਸਕ੍ਰਿਪਸ਼ਨ",
        prefix: "ਅਸੀਂ ਇਸ ਸੇਵਾ ਲਈ ਖ਼ਾਸ ਤੌਰ 'ਤੇ ਤਿਆਰ ਕੀਤੇ ",
        highlight1: "ਵਿਸ਼ੇਸ਼ ਪ੍ਰੋਗਰਾਮ",
        middle: " ਅਤੇ ਸਬਸਕ੍ਰਿਪਸ਼ਨ ਪੇਸ਼ ਕਰਦੇ ਹਾਂ, ਜੋ ਵਿਆਹ ਬਾਰੇ ਗੰਭੀਰ ਲੋਕਾਂ ਦੀਆਂ ",
        highlight2: "ਵੱਖ-ਵੱਖ ਲੋੜਾਂ",
        suffix: " ਨੂੰ ਪੂਰਾ ਕਰਦੇ ਹਨ।",
      },
      followUp: {
        title: "ਗੰਭੀਰ ਅਤੇ ਲਗਾਤਾਰ ਫਾਲੋ-ਅੱਪ",
        description:
          "ਅਸੀਂ ਜਾਣ-ਪਛਾਣ ਤੋਂ ਲੈ ਕੇ ਮੰਗਣੀ ਤੱਕ ਇਸਲਾਮੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦੇ ਹੋਏ, ਇੱਕ ਸੰਗਠਿਤ ਫਾਲੋ-ਅੱਪ ਨਾਲ ਦੋਵੇਂ ਧਿਰਾਂ ਦਾ ਸਾਥ ਦਿੰਦੇ ਹਾਂ।",
      },
      showcasing: {
        title: "ਕੁੜੀਆਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਨੂੰ ਪ੍ਰੋਫਾਈਲ ਦਿਖਾਉਣਾ",
        description:
          "ਅਸੀਂ ਦਿਲਚਸਪੀ ਰੱਖਣ ਵਾਲੀਆਂ ਕੁੜੀਆਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਨੂੰ ਗੋਪਨੀਯਤਾ ਅਤੇ ਸਤਿਕਾਰ ਦੇ ਦਾਇਰੇ ਵਿੱਚ ਢੁਕਵੇਂ ਪ੍ਰੋਫਾਈਲ ਪੇਸ਼ ਕਰਦੇ ਹਾਂ।",
        usersBadge: "10,000 ਤੋਂ ਵੱਧ ਵਰਤੋਂਕਾਰ",
      },
      requests: {
        title: "ਵਿਆਹ ਦੀਆਂ ਬੇਨਤੀਆਂ ਪ੍ਰਾਪਤ ਕਰਨਾ",
        description:
          "ਅਸੀਂ ਬੋਸਨੀਆਈ ਔਰਤਾਂ ਨਾਲ ਵਿਆਹ ਕਰਨ ਵਿੱਚ ਦਿਲਚਸਪੀ ਰੱਖਣ ਵਾਲੇ ਨੌਜਵਾਨਾਂ ਦੀਆਂ ਬੇਨਤੀਆਂ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹਾਂ ਅਤੇ ਉਹਨਾਂ ਦੀ ਪ੍ਰੋਫਾਈਲ ਸਹੀ ਢੰਗ ਨਾਲ ਪੂਰੀ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ।",
      },
    },
  },
  companion: {
    title: "ਅਤੇ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ, ਬੋਸਨੀਆ ਲਈ ਸਾਡੀ ਸਾਥ ਸੇਵਾ",
    description:
      "ਸਾਡੀ ਯਾਤਰਾ ਦੇ ਹਿੱਸੇ ਵਜੋਂ, ਸਾਡਾ ਪਲੇਟਫਾਰਮ 6 ਦਿਨ, 5 ਰਾਤਾਂ ਦੀ ਵਿਆਹ ਟੀਮ ਸਾਥ ਸੇਵਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਹਰੇਕ ਵਿਅਕਤੀ ਦੀ ਸਮਰੱਥਾ ਅਨੁਸਾਰ ਭਾਗ ਲੈਣ ਦੀ ਲਚਕਤਾ ਹੈ।",
    items: [
      "ਭਾਗੀਦਾਰ ਦੀ ਫਾਈਲ ਤਿਆਰ ਕਰਨਾ ਅਤੇ ਉਸਦੀ ਅਗਵਾਈ ਕਰਨਾ।",
      "ਵਿਆਹ ਬਾਰੇ ਗੰਭੀਰ ਬੋਸਨੀਆਈ ਪਰਿਵਾਰਾਂ ਅਤੇ ਕੁੜੀਆਂ ਨਾਲ ਫੀਲਡ ਦੌਰਿਆਂ ਅਤੇ ਮੀਟਿੰਗਾਂ ਦਾ ਪ੍ਰਬੰਧ ਕਰਨਾ।",
      "ਸ਼ੁਰੂਆਤੀ ਸਵੀਕ੍ਰਿਤੀ ਦੀ ਪਾਲਣਾ ਕਰਨਾ ਅਤੇ ਦੋਵਾਂ ਧਿਰਾਂ ਵਿਚਕਾਰ ਤਾਲਮੇਲ ਕਰਨਾ।",
      '"ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ" ਵੱਲੋਂ ਬੋਸਨੀਆ ਵਿੱਚ ਆਯੋਜਿਤ ਪਹਿਲੇ ਸਮਾਗਮ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣਾ।',
      "ਬੋਸਨੀਆ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਦਾ ਸਮਰਥਨ ਕਰਨ ਅਤੇ ਜਮ੍ਹਾਂ ਕਰਾਉਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਸੌਖਾ ਬਣਾਉਣ ਲਈ ਇੱਕ ਅਧਿਕਾਰਤ ਸੱਦਾ ਪੱਤਰ ਤਿਆਰ ਕਰਨਾ।",
      "ਤੁਹਾਡਾ ਜੀਵਨ ਸਾਥੀ ਮਿਲਣ ਤੱਕ ਇੱਕ ਵਾਰੀ ਦੀ ਫੀਸ।",
    ],
    bgAlt: "ਰਾਤ ਨੂੰ ਰੌਸ਼ਨ, ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵਿਨਾ ਦੇ ਸਾਰਾਯੇਵੋ ਵਿੱਚ ਮਿਲਿਆਤਸਕਾ ਨਦੀ ਉੱਤੇ ਲਾਤੀਨੀ ਪੁਲ",
  },
  why: {
    title: "ਇਸ ਪਹਿਲ ਵਿੱਚ ਕਿਉਂ ਸ਼ਾਮਲ ਹੋਵੋ",
    items: [
      {
        title: "ਇੱਕ ਅਸਲੀ ਮੌਕਾ",
        description: "ਯੂਰਪ ਵਿੱਚ ਮੁਸਲਿਮ ਕੁੜੀਆਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਨਾਲ ਗੰਭੀਰ ਜਾਣ-ਪਛਾਣ ਲਈ।",
      },
      {
        title: "ਵਿਹਾਰਕ ਤਜਰਬਾ",
        description: "ਸਥਾਨਕ ਪਰੰਪਰਾਵਾਂ ਅਤੇ ਕਾਨੂੰਨੀ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦੇ ਸਹੀ ਗਿਆਨ ਤੋਂ ਪਹਿਲਾਂ।",
      },
      {
        title: "ਪੂਰਾ ਸਾਥ",
        description: "ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ਦੀ ਟੀਮ ਪਹਿਲੇ ਕਦਮ ਤੋਂ ਲੈ ਕੇ ਵਿਆਹ ਪੂਰਾ ਹੋਣ ਤੱਕ ਤੁਹਾਡੇ ਨਾਲ ਹੈ।",
      },
      {
        title: "ਇੱਕ ਸਪਸ਼ਟ ਪ੍ਰਕਿਰਿਆ",
        description: "ਬੇਤਰਤੀਬੀ ਤੋਂ ਦੂਰ, ਸੰਗਠਿਤ ਜਾਣ-ਪਛਾਣ ਦੇ ਕਦਮ।",
      },
    ],
    photoAlt: {
      tall: "ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵਿਨਾ ਦੇ ਇਤਿਹਾਸਕ ਸ਼ਹਿਰ ਮੋਸਤਾਰ ਦਾ ਇੱਕ ਪੈਨੋਰਾਮਿਕ ਦ੍ਰਿਸ਼",
      overlay: "ਸੂਰਜ ਡੁੱਬਣ ਵੇਲੇ ਮੋਸਤਾਰ ਦੀਆਂ ਪੁਰਾਣੀਆਂ ਗਲੀਆਂ",
    },
  },
};

const ps: BosniaCopy = {
  hero: {
    title: "بوسنیا ته د واده ډلې د ملګرتیا پروګرام",
    description:
      'د عرب نړۍ لپاره لومړی ځل، "زفاف پلیټ فارم" یو نوی نوښت پیل کوي ترڅو یو بشپړ پروګرام رامنځته کړي چې د بوسنیا او هرزیګوینا کې د مسلمانو ځوانانو او مسلمانو نجونو او کورنیو ترمنځ جدي واده اسانه او هڅوي.',
    cta: "همدا اوس خپل ځای بک کړئ",
    pills: {
      date: "د 2026 د اګست 21",
      payment: "تادیه: 500 یورو",
      duration: "د سفر موده: 1 اونۍ",
      location: "بوسنیا او هرزیګوینا",
    },
    imageAlt: {
      collageMain: "د بوسنیا کلیوالي سیمې له لارې د تللي سیند هوایی منظره",
      collageSecondary: "د بوسنیا او هرزیګوینا په موستار کې زوړ پل",
    },
  },
  destination: {
    eyebrow: "زموږ لومړۍ موخه",
    title: "بوسنیا او هرزیګوینا",
    paragraphs: [
      'د هغو سفرونو د لړۍ برخې په توګه چې "زفاف پلیټ فارم" یې څو اروپايي هیوادونو ته تنظیموي، زموږ لومړی سفر د بوسنیا او هرزیګوینا سره پیل کیږي.',
      "هلته، د پلیټ فارم ډله له مسلمانو نجونو او کورنیو سره لیدنه کوي، تر څو د واده شرایطو، پیژندنې او کوژدنې پروسې، او په بوسنیا کې له واده سره تړلي حقوقي او کلتوري اړخونو په اړه مستقیم زده کړه وکړي.",
      'دا ډګري تجربه به وروسته "زفاف پلیټ فارم" ته انتقال شي، تر څو د هغې دایمي خدماتو یوه برخه شي.',
    ],
    goal: {
      title: "موخه",
      description:
        "د سفر موخه دا ده چې په بوسنیا کې له مسلمانو ټولنې سره مستقیم اړیکې او همکارۍ رامنځته کړي، او هلته د واده شرایط او میکانیزمونه وپیژني.",
    },
    cta: "همدا اوس خپل ځای بک کړئ",
    mapAlt: "د بوسنیا او هرزیګوینا نقشه چې د موخې ځای نښه لري",
  },
  help: {
    titleLine1: "موږ څنګه کولی شو ستاسو",
    titleLine2: "د بوسنیا په واده کې مرسته وکړو؟",
    cards: {
      customPrograms: {
        title: "ځانګړي پروګرامونه او ګډونونه",
        prefix: "موږ د دې خدمت لپاره په ځانګړي ډول جوړ شوي ",
        highlight1: "ځانګړي پروګرامونه",
        middle: " او ګډونونه وړاندې کوو چې د واده په اړه جدي وګړو ",
        highlight2: "بېلابېلې اړتیاوې",
        suffix: " پوره کوي.",
      },
      followUp: {
        title: "جدي او دوامداره پیروي",
        description:
          "موږ له پیژندنې څخه تر کوژدنې پورې د اسلامي لارښوونو په رعایت سره، سازمان شوي تعقیب سره دواړو خواوو سره مل یو.",
      },
      showcasing: {
        title: "نجونو او کورنیو ته پروفایلونو وړاندې کول",
        description:
          "موږ علاقه مندو نجونو او کورنیو ته د محرمیت او درناوي په چوکاټ کې مناسب پروفایلونه وړاندې کوو.",
        usersBadge: "له 10,000 څخه ډېر کاروونکي",
      },
      requests: {
        title: "د واده غوښتنو ترلاسه کول",
        description:
          "موږ د بوسنیایي ښځو سره واده کولو ته علاقه مند ځوانانو غوښتنې ترلاسه کوو او د دوی سره د پروفایل په دقیق بشپړولو کې مرسته کوو.",
      },
    },
  },
  companion: {
    title: "او له ټولو مهمه، بوسنیا ته زموږ د ملګرتیا خدمت",
    description:
      "زموږ د سفر برخې په توګه، زموږ پلیټ فارم د هر چا وړتیا سره سم موده کې د ګډون د انعطاف پذیرۍ سره، د 6 ورځو، 5 شپو د واده ډلې ملګرتیا خدمت وړاندې کوي.",
    items: [
      "د ګډونوال دوسیه چمتو کول او لارښوونه یې.",
      "د واده په اړه جدي بوسنیایي کورنیو او نجونو سره د ډګري لیدنو او غونډو تنظیمول.",
      "د لومړني منلو تعقیب او د دواړو خواوو ترمنځ همغږي.",
      '"زفاف پلیټ فارم" لخوا په بوسنیا کې تنظیم شوي لومړي غونډه کې ګډون.',
      "د بوسنیا د ویزې غوښتنلیک ملاتړ او د سپارلو پروسه اسانولو لپاره رسمي بلنه چمتو کول.",
      "تر هغه پورې چې ستاسو د ژوند ملګری ومومو، یوځلي فیس.",
    ],
    bgAlt: "شپه کې روښانه، د بوسنیا او هرزیګوینا په سرایوو کې د میلیاتسکا سیند پر سر لاتیني پل",
  },
  why: {
    title: "ولې دې نوښت سره یوځای شئ",
    items: [
      {
        title: "یو ریښتینی فرصت",
        description: "په اروپا کې له مسلمانو نجونو او کورنیو سره جدي پیژندنې لپاره.",
      },
      {
        title: "ډګري تجربه",
        description: "چې د سیمه‌ییزو دودونو او حقوقي پروسو په دقیق پوهاوي سره مخکې کیږي.",
      },
      {
        title: "بشپړ ملګرتیا",
        description: "د زفاف پلیټ فارم ډله له لومړي ګام څخه تر واده بشپړولو پورې تاسو سره ده.",
      },
      {
        title: "روښانه بهیر",
        description: "له تصادفي والي څخه لرې، سازمان شوي پیژندنې ګامونه.",
      },
    ],
    photoAlt: {
      tall: "د بوسنیا او هرزیګوینا د تاریخي ښار موستار پانوراما منظره",
      overlay: "د لمر پریوتو په وخت کې د موستار زاړه کوڅې",
    },
  },
};

const sw: BosniaCopy = {
  hero: {
    title: "Programu ya Uandamani wa Timu ya Ndoa Bosnia",
    description:
      'Kwa mara ya kwanza katika ulimwengu wa Kiarabu, "Jukwaa la Zefaaf" linazindua mpango mpya wa kujenga programu kamili inayowezesha na kuhamasisha ndoa za dhati kati ya vijana Waislamu na wasichana na familia za Kiislamu nchini Bosnia na Herzegovina.',
    cta: "Hifadhi Nafasi Yako Sasa",
    pills: {
      date: "Agosti 21, 2026",
      payment: "Malipo: Euro 500",
      duration: "Muda wa safari: Wiki 1",
      location: "Bosnia na Herzegovina",
    },
    imageAlt: {
      collageMain: "Mwonekano wa angani wa mto unaopinda kupitia vijiji vya Bosnia",
      collageSecondary: "Daraja la zamani huko Mostar, Bosnia na Herzegovina",
    },
  },
  destination: {
    eyebrow: "Mahali Petu pa Kwanza",
    title: "Bosnia na Herzegovina",
    paragraphs: [
      'Kama sehemu ya mfululizo wa safari zinazoandaliwa na "Jukwaa la Zefaaf" katika nchi kadhaa za Ulaya, safari yetu ya kwanza inaanza na Bosnia na Herzegovina.',
      "Huko, timu ya jukwaa hukutana na wasichana na familia za Kiislamu, ili kujifunza moja kwa moja masharti ya ndoa, mchakato wa kufahamiana na uchumba, na mambo ya kisheria na kiutamaduni yanayohusiana na ndoa nchini Bosnia.",
      'Uzoefu huu wa uwandani baadaye utahamishiwa kwenye "Jukwaa la Zefaaf", ili kuwa sehemu ya huduma zake za kudumu.',
    ],
    goal: {
      title: "Lengo",
      description:
        "Lengo la safari ni kujenga uhusiano na ushirikiano wa moja kwa moja na jamii ya Kiislamu nchini Bosnia, na kujifunza masharti na taratibu za ndoa huko.",
    },
    cta: "Hifadhi Nafasi Yako Sasa",
    mapAlt: "Ramani ya Bosnia na Herzegovina ikiwa na alama ya mahali inayoonyesha mahali pa marudio",
  },
  help: {
    titleLine1: "Tunawezaje kukusaidia",
    titleLine2: "kuolewa au kuoa Bosnia?",
    cards: {
      customPrograms: {
        title: "Programu na michango maalum",
        prefix: "Tunatoa ",
        highlight1: "programu maalum",
        middle: " na michango iliyoundwa mahususi kwa huduma hii, inayoshughulikia ",
        highlight2: "mahitaji tofauti",
        suffix: " kwa wale walio na nia thabiti ya ndoa.",
      },
      followUp: {
        title: "Ufuatiliaji wa dhati na endelevu",
        description:
          "Tunaandamana na pande zote mbili kwa ufuatiliaji ulioandaliwa, tukizingatia miongozo ya Kiislamu kuanzia kufahamiana hadi uchumba.",
      },
      showcasing: {
        title: "Kuonyesha wasifu kwa wasichana na familia",
        description:
          "Tunawasilisha wasifu unaofaa kwa wasichana na familia wenye nia, ndani ya mfumo wa faragha na heshima.",
        usersBadge: "Zaidi ya watumiaji 10,000",
      },
      requests: {
        title: "Kupokea maombi ya ndoa",
        description:
          "Tunapokea maombi kutoka kwa vijana wenye nia ya kuoa wanawake wa Kibosnia na kuwasaidia kukamilisha wasifu wao kwa usahihi.",
      },
    },
  },
  companion: {
    title: "Na muhimu zaidi, huduma yetu ya uandamani hadi Bosnia",
    description:
      "Kama sehemu ya safari yetu, jukwaa letu linatoa huduma ya uandamani wa timu ya ndoa ya siku 6, usiku 5, ikiwa na unyumbufu wa kushiriki kwa muda unaofaa uwezo wa kila mtu.",
    items: [
      "Kuandaa faili la mshiriki na kumwongoza.",
      "Kupanga ziara za uwandani na mikutano na familia na wasichana wa Kibosnia wenye nia thabiti ya ndoa.",
      "Kufuatilia ukubalifu wa awali na kuratibu kati ya pande zote mbili.",
      'Kuhudhuria tukio la kwanza linaloandaliwa na "Jukwaa la Zefaaf" nchini Bosnia.',
      "Kuandaa mwaliko rasmi wa kusaidia maombi ya visa ya Bosnia na kurahisisha mchakato wa kuwasilisha.",
      "Ada ya mara moja mpaka tumkute mwenzi wako wa maisha.",
    ],
    bgAlt: "Daraja la Kilatini juu ya mto Miljacka huko Sarajevo, Bosnia na Herzegovina, likiwa limeangazwa usiku",
  },
  why: {
    title: "Kwa nini ujiunge na mpango huu",
    items: [
      {
        title: "Fursa halisi",
        description: "Kwa kufahamiana kwa dhati na wasichana na familia za Kiislamu barani Ulaya.",
      },
      {
        title: "Uzoefu wa uwandani",
        description: "Unaotanguliwa na maarifa sahihi kuhusu desturi za mahali husika na taratibu za kisheria.",
      },
      {
        title: "Uandamani kamili",
        description: "Timu ya jukwaa la Zefaaf iko nawe kuanzia hatua ya kwanza hadi kukamilika kwa ndoa.",
      },
      {
        title: "Mchakato ulio wazi",
        description: "Hatua zilizopangwa za kufahamiana, mbali na mambo ya bahati nasibu.",
      },
    ],
    photoAlt: {
      tall: "Mwonekano mpana wa mji wa kihistoria wa Mostar, Bosnia na Herzegovina",
      overlay: "Mitaa ya zamani ya Mostar wakati wa machweo",
    },
  },
};

const th: BosniaCopy = {
  hero: {
    title: "โครงการทีมงานติดตามการแต่งงานสู่บอสเนีย",
    description:
      'เป็นครั้งแรกในโลกอาหรับที่ "แพลตฟอร์ม Zefaaf" เปิดตัวโครงการใหม่เพื่อสร้างโปรแกรมที่ครอบคลุมซึ่งอำนวยความสะดวกและส่งเสริมการแต่งงานอย่างจริงจังระหว่างชายหนุ่มมุสลิมกับหญิงสาวและครอบครัวมุสลิมในบอสเนียและเฮอร์เซโกวีนา',
    cta: "จองที่นั่งของคุณตอนนี้",
    pills: {
      date: "21 สิงหาคม 2026",
      payment: "ค่าใช้จ่าย: 500 ยูโร",
      duration: "ระยะเวลาการเดินทาง: 1 สัปดาห์",
      location: "บอสเนียและเฮอร์เซโกวีนา",
    },
    imageAlt: {
      collageMain: "มุมมองทางอากาศของแม่น้ำที่คดเคี้ยวผ่านชนบทของบอสเนีย",
      collageSecondary: "สะพานเก่าในเมืองโมสตาร์ บอสเนียและเฮอร์เซโกวีนา",
    },
  },
  destination: {
    eyebrow: "จุดหมายแรกของเรา",
    title: "บอสเนียและเฮอร์เซโกวีนา",
    paragraphs: [
      'ในฐานะส่วนหนึ่งของชุดการเดินทางที่จัดโดย "แพลตฟอร์ม Zefaaf" ไปยังหลายประเทศในยุโรป การเดินทางแรกของเราเริ่มต้นที่บอสเนียและเฮอร์เซโกวีนา',
      "ที่นั่น ทีมงานของแพลตฟอร์มจะพบกับหญิงสาวและครอบครัวมุสลิม เพื่อเรียนรู้โดยตรงเกี่ยวกับข้อกำหนดของการแต่งงาน กระบวนการทำความรู้จักและหมั้นหมาย รวมถึงแง่มุมทางกฎหมายและวัฒนธรรมที่เกี่ยวข้องกับการแต่งงานในบอสเนีย",
      'ประสบการณ์ภาคสนามนี้จะถูกนำไปใช้ใน "แพลตฟอร์ม Zefaaf" ในภายหลัง เพื่อเป็นส่วนหนึ่งของบริการถาวรของแพลตฟอร์ม',
    ],
    goal: {
      title: "เป้าหมาย",
      description:
        "เป้าหมายของการเดินทางครั้งนี้คือการสร้างความสัมพันธ์และความร่วมมือโดยตรงกับชุมชนมุสลิมในบอสเนีย และเรียนรู้เกี่ยวกับข้อกำหนดและกลไกของการแต่งงานที่นั่น",
    },
    cta: "จองที่นั่งของคุณตอนนี้",
    mapAlt: "แผนที่บอสเนียและเฮอร์เซโกวีนาพร้อมหมุดตำแหน่งที่ระบุจุดหมายปลายทาง",
  },
  help: {
    titleLine1: "เราจะช่วยให้คุณ",
    titleLine2: "แต่งงานในบอสเนียได้อย่างไร?",
    cards: {
      customPrograms: {
        title: "โปรแกรมและแพ็กเกจสมัครสมาชิกแบบกำหนดเอง",
        prefix: "เรานำเสนอ",
        highlight1: "โปรแกรมที่ปรับให้เหมาะกับคุณ",
        middle: "และแพ็กเกจสมัครสมาชิกที่ออกแบบมาโดยเฉพาะสำหรับบริการนี้ ครอบคลุม",
        highlight2: "ความต้องการที่หลากหลาย",
        suffix: "สำหรับผู้ที่จริงจังเรื่องการแต่งงาน",
      },
      followUp: {
        title: "การติดตามผลอย่างจริงจังและต่อเนื่อง",
        description:
          "เราคอยดูแลทั้งสองฝ่ายด้วยการติดตามผลอย่างเป็นระบบ โดยยึดตามแนวทางอิสลามตั้งแต่การทำความรู้จักจนถึงการหมั้นหมาย",
      },
      showcasing: {
        title: "การนำเสนอโปรไฟล์แก่หญิงสาวและครอบครัว",
        description:
          "เรานำเสนอโปรไฟล์ที่เหมาะสมแก่หญิงสาวและครอบครัวที่สนใจ ภายใต้กรอบของความเป็นส่วนตัวและความเคารพ",
        usersBadge: "ผู้ใช้งานกว่า 10,000 คน",
      },
      requests: {
        title: "การรับคำขอแต่งงาน",
        description:
          "เรารับคำขอจากชายหนุ่มที่สนใจแต่งงานกับผู้หญิงบอสเนีย และช่วยพวกเขากรอกโปรไฟล์ให้ครบถ้วนอย่างถูกต้อง",
      },
    },
  },
  companion: {
    title: "และที่สำคัญที่สุด บริการติดตามของเราสู่บอสเนีย",
    description:
      "ในฐานะส่วนหนึ่งของการเดินทางของเรา แพลตฟอร์มของเรามีบริการทีมงานติดตามการแต่งงานเป็นเวลา 6 วัน 5 คืน โดยมีความยืดหยุ่นในการเข้าร่วมตามระยะเวลาที่เหมาะสมกับความสามารถของแต่ละคน",
    items: [
      "เตรียมแฟ้มข้อมูลผู้เข้าร่วมและให้คำแนะนำ",
      "จัดการเยี่ยมชมภาคสนามและการพบปะกับครอบครัวและหญิงสาวชาวบอสเนียที่จริงจังเรื่องการแต่งงาน",
      "ติดตามผลการตอบรับเบื้องต้นและประสานงานระหว่างทั้งสองฝ่าย",
      'เข้าร่วมงานแรกที่จัดโดย "แพลตฟอร์ม Zefaaf" ในบอสเนีย',
      "จัดเตรียมหนังสือเชิญอย่างเป็นทางการเพื่อสนับสนุนการยื่นขอวีซ่าบอสเนียและอำนวยความสะดวกในขั้นตอนการยื่นเรื่อง",
      "ค่าธรรมเนียมแบบชำระครั้งเดียวจนกว่าเราจะพบคู่ชีวิตของคุณ",
    ],
    bgAlt: "สะพานลาตินข้ามแม่น้ำมิลยัตสกาในเมืองซาราเยโว บอสเนียและเฮอร์เซโกวีนา ที่มีแสงไฟยามค่ำคืน",
  },
  why: {
    title: "เหตุใดจึงควรเข้าร่วมโครงการนี้",
    items: [
      {
        title: "โอกาสที่แท้จริง",
        description: "สำหรับการทำความรู้จักอย่างจริงจังกับหญิงสาวและครอบครัวมุสลิมในยุโรป",
      },
      {
        title: "ประสบการณ์ภาคสนาม",
        description: "ที่มาพร้อมความรู้ที่แม่นยำเกี่ยวกับประเพณีท้องถิ่นและขั้นตอนทางกฎหมาย",
      },
      {
        title: "การติดตามดูแลอย่างครบวงจร",
        description: "ทีมงานแพลตฟอร์ม Zefaaf อยู่เคียงข้างคุณตั้งแต่ก้าวแรกจนถึงการแต่งงานสำเร็จ",
      },
      {
        title: "กระบวนการที่ชัดเจน",
        description: "ขั้นตอนการทำความรู้จักที่เป็นระบบ ห่างไกลจากความสุ่มเสี่ยง",
      },
    ],
    photoAlt: {
      tall: "มุมมองพาโนรามาของเมืองประวัติศาสตร์โมสตาร์ บอสเนียและเฮอร์เซโกวีนา",
      overlay: "ถนนเก่าแก่ของโมสตาร์ในยามพระอาทิตย์ตก",
    },
  },
};

const copyByLocale: Record<string, BosniaCopy> = {
  ar, en, nl, fr, de, tr, ru, id, zh, bn, bs, es, fa, pt, ja, ko, it, ur, ta, am, sv, da, sq, uz, az, fil, hi, kk, ms, pa, ps, sw, th,
};

export function getBosniaCopy(locale: string): BosniaCopy {
  return copyByLocale[locale] ?? en;
}
