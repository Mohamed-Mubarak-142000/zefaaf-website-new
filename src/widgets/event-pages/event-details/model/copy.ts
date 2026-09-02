// This page's copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical, and adding a namespace for
// this one-off event page to only some of them would make next-intl throw
// MISSING_MESSAGE for the rest. Same approach as the VIP and Influential
// Figures widgets. All 33 locales are translated directly in this file below.

export type EventDetailsCopy = {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  info: {
    date: string;
    payment: string;
    duration: string;
    location: string;
  };
  cta: string;
  imageAlt: string;
  stats: {
    customersValue: string;
    customersLabel: string;
    ratingValue: string;
    ratingLabel: string;
    avatarAlt: string;
  };
  figures: {
    title: string;
    description: string;
    name: string;
    followers: string;
  };
};

const en: EventDetailsCopy = {
  badge: "Start preparing your profile now—spaces are limited!",
  titleLine1: "Bosnia Islamic Marriage Gathering",
  titleLine2: "Marking the launch of the Zefaaf platform in Bosnia 🇧🇦",
  description:
    "Get ready for the first global gathering for Muslim families in Bosnia—a genuine opportunity for those seeking serious marriage and a Sharia-compliant introduction to European Muslim women from Bosnia, all under the supervision and guidance of the Zefaaf team.",
  info: {
    date: "August 21, 2026",
    payment: "Payment: 500 Euro",
    duration: "Event duration: 5 hours",
    location: "Terezija, 71000",
  },
  cta: "Book your seat now",
  imageAlt: "Mostar's historic bridge over the river in Bosnia and Herzegovina",
  // Same figures as the Events page banner — duplicated rather than imported
  // since widgets can't cross-import from each other in this FSD setup.
  stats: {
    customersValue: "34,484k",
    customersLabel: "Happy Customers",
    ratingValue: "4.8/5",
    ratingLabel: "Rating",
    avatarAlt: "A happy Zefaaf member",
  },
  // Same section copy as the homepage Influential Figures slider — duplicated
  // rather than imported, for the same FSD reason as `stats` above.
  figures: {
    title: "With an Elite Group of\nthe Most Influential & Inspiring\nFigures",
    description:
      "Don't miss the opportunity to participate in an event that brings together inspiration, knowledge, and enriching experiences.",
    name: "Mustafa Hassan",
    followers: "4.5m followers",
  },
};

const ar: EventDetailsCopy = {
  badge: "ابدأ تجهيز ملفك الشخصي الآن — الأماكن محدودة!",
  titleLine1: "ملتقى الزواج الإسلامي في البوسنة",
  titleLine2: "بمناسبة إطلاق منصة زفاف في البوسنة 🇧🇦",
  description:
    "استعد لأول تجمع عالمي للعائلات المسلمة في البوسنة، فرصة حقيقية للراغبين في الزواج الجاد والتعارف الملتزم بالشريعة مع نساء مسلمات أوروبيات من البوسنة، تحت إشراف ومتابعة فريق زفاف.",
  info: {
    date: "٢١ أغسطس ٢٠٢٦",
    payment: "الرسوم: 500 يورو",
    duration: "مدة الفعالية: 5 ساعات",
    location: "تيريزيا، 71000",
  },
  cta: "احجز مقعدك الآن",
  imageAlt: "جسر موستار التاريخي فوق النهر في البوسنة والهرسك",
  stats: {
    customersValue: "٣٤٬٤٨٤ك",
    customersLabel: "عميل سعيد",
    ratingValue: "٤.٨/٥",
    ratingLabel: "التقييم",
    avatarAlt: "أحد أعضاء زفاف السعداء",
  },
  figures: {
    title: "مع نخبة من أكثر الشخصيات\nتأثيرًا وإلهامًا",
    description:
      "لا تفوّت فرصة المشاركة في فعالية تجمع بين الإلهام والمعرفة والتجارب الثرية.",
    name: "مصطفى حسن",
    followers: "٤٫٥ مليون متابع",
  },
};

const nl: EventDetailsCopy = {
  badge: "Begin nu met het voorbereiden van je profiel — de plaatsen zijn beperkt!",
  titleLine1: "Islamitische Huwelijksbijeenkomst in Bosnië",
  titleLine2: "Ter gelegenheid van de lancering van het Zefaaf-platform in Bosnië 🇧🇦",
  description:
    "Maak je klaar voor de eerste wereldwijde bijeenkomst voor moslimgezinnen in Bosnië — een oprechte kans voor wie op zoek is naar een serieus huwelijk en een sharia-conforme kennismaking met Europese moslimvrouwen uit Bosnië, onder toezicht en begeleiding van het Zefaaf-team.",
  info: {
    date: "21 augustus 2026",
    payment: "Betaling: 500 euro",
    duration: "Duur van het evenement: 5 uur",
    location: "Terezija, 71000",
  },
  cta: "Boek nu je plek",
  imageAlt: "De historische brug van Mostar over de rivier in Bosnië en Herzegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Tevreden Klanten",
    ratingValue: "4.8/5",
    ratingLabel: "Beoordeling",
    avatarAlt: "Een tevreden Zefaaf-lid",
  },
  figures: {
    title: "Met een Selecte Groep van\nde Meest Invloedrijke & Inspirerende\nFiguren",
    description:
      "Mis de kans niet om deel te nemen aan een evenement dat inspiratie, kennis en verrijkende ervaringen samenbrengt.",
    name: "Mustafa Hassan",
    followers: "4,5m volgers",
  },
};

const fr: EventDetailsCopy = {
  badge: "Commencez dès maintenant à préparer votre profil — les places sont limitées !",
  titleLine1: "Rassemblement du Mariage Islamique en Bosnie",
  titleLine2: "À l'occasion du lancement de la plateforme Zefaaf en Bosnie 🇧🇦",
  description:
    "Préparez-vous pour le premier rassemblement mondial des familles musulmanes en Bosnie — une véritable opportunité pour celles et ceux qui recherchent un mariage sérieux et une rencontre conforme à la charia avec des femmes musulmanes européennes de Bosnie, sous la supervision et l'accompagnement de l'équipe Zefaaf.",
  info: {
    date: "21 août 2026",
    payment: "Paiement : 500 euros",
    duration: "Durée de l'événement : 5 heures",
    location: "Terezija, 71000",
  },
  cta: "Réservez votre place dès maintenant",
  imageAlt: "Le pont historique de Mostar au-dessus de la rivière en Bosnie-Herzégovine",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Clients Satisfaits",
    ratingValue: "4.8/5",
    ratingLabel: "Note",
    avatarAlt: "Un membre Zefaaf comblé",
  },
  figures: {
    title: "Avec un Groupe d'Élite\ndes Personnalités les Plus Influentes\net Inspirantes",
    description:
      "Ne manquez pas l'occasion de participer à un événement qui réunit inspiration, connaissance et expériences enrichissantes.",
    name: "Mustafa Hassan",
    followers: "4,5m abonnés",
  },
};

const de: EventDetailsCopy = {
  badge: "Bereiten Sie jetzt Ihr Profil vor — die Plätze sind begrenzt!",
  titleLine1: "Islamisches Hochzeitstreffen in Bosnien",
  titleLine2: "Anlässlich des Starts der Zefaaf-Plattform in Bosnien 🇧🇦",
  description:
    "Machen Sie sich bereit für das erste weltweite Treffen muslimischer Familien in Bosnien — eine echte Gelegenheit für alle, die eine ernsthafte Ehe und ein scharia-konformes Kennenlernen mit europäischen Musliminnen aus Bosnien suchen, unter der Aufsicht und Begleitung des Zefaaf-Teams.",
  info: {
    date: "21. August 2026",
    payment: "Zahlung: 500 Euro",
    duration: "Veranstaltungsdauer: 5 Stunden",
    location: "Terezija, 71000",
  },
  cta: "Sichern Sie sich jetzt Ihren Platz",
  imageAlt: "Die historische Brücke von Mostar über den Fluss in Bosnien und Herzegowina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Zufriedene Kunden",
    ratingValue: "4.8/5",
    ratingLabel: "Bewertung",
    avatarAlt: "Ein zufriedenes Zefaaf-Mitglied",
  },
  figures: {
    title: "Mit einer Elitegruppe der\neinflussreichsten & inspirierendsten\nPersönlichkeiten",
    description:
      "Verpassen Sie nicht die Gelegenheit, an einer Veranstaltung teilzunehmen, die Inspiration, Wissen und bereichernde Erfahrungen vereint.",
    name: "Mustafa Hassan",
    followers: "4,5 Mio. Follower",
  },
};

const tr: EventDetailsCopy = {
  badge: "Şimdi profilinizi hazırlamaya başlayın — kontenjan sınırlıdır!",
  titleLine1: "Bosna İslami Evlilik Buluşması",
  titleLine2: "Zefaaf platformunun Bosna'daki lansmanı vesilesiyle 🇧🇦",
  description:
    "Bosna'daki Müslüman aileler için düzenlenen ilk küresel buluşmaya hazır olun — ciddi bir evlilik arayan ve Bosna'dan Avrupalı Müslüman kadınlarla şeriata uygun bir tanışma isteyenler için, Zefaaf ekibinin gözetim ve rehberliğinde gerçek bir fırsat.",
  info: {
    date: "21 Ağustos 2026",
    payment: "Ödeme: 500 Euro",
    duration: "Etkinlik süresi: 5 saat",
    location: "Terezija, 71000",
  },
  cta: "Şimdi yerinizi ayırtın",
  imageAlt: "Bosna Hersek'te nehir üzerindeki tarihi Mostar Köprüsü",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Mutlu Müşteriler",
    ratingValue: "4.8/5",
    ratingLabel: "Değerlendirme",
    avatarAlt: "Mutlu bir Zefaaf üyesi",
  },
  figures: {
    title: "En Etkili ve İlham Verici\nİsimlerden Oluşan Seçkin\nBir Grupla",
    description:
      "İlham, bilgi ve zenginleştirici deneyimleri bir araya getiren bir etkinliğe katılma fırsatını kaçırmayın.",
    name: "Mustafa Hassan",
    followers: "4,5m takipçi",
  },
};

const ru: EventDetailsCopy = {
  badge: "Начните готовить свою анкету уже сейчас — количество мест ограничено!",
  titleLine1: "Исламская брачная встреча в Боснии",
  titleLine2: "По случаю запуска платформы Zefaaf в Боснии 🇧🇦",
  description:
    "Приготовьтесь к первой всемирной встрече мусульманских семей в Боснии — реальная возможность для тех, кто ищет серьёзный брак и знакомство в соответствии с шариатом с европейскими мусульманками из Боснии, под наблюдением и руководством команды Zefaaf.",
  info: {
    date: "21 августа 2026 г.",
    payment: "Оплата: 500 евро",
    duration: "Продолжительность мероприятия: 5 часов",
    location: "Терезия, 71000",
  },
  cta: "Забронируйте место прямо сейчас",
  imageAlt: "Исторический мост Мостара над рекой в Боснии и Герцеговине",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Довольные клиенты",
    ratingValue: "4.8/5",
    ratingLabel: "Рейтинг",
    avatarAlt: "Довольный участник Zefaaf",
  },
  figures: {
    title: "С элитной группой самых\nвлиятельных и вдохновляющих\nличностей",
    description:
      "Не упустите возможность принять участие в мероприятии, объединяющем вдохновение, знания и обогащающий опыт.",
    name: "Мустафа Хасан",
    followers: "4,5 млн подписчиков",
  },
};

const id: EventDetailsCopy = {
  badge: "Mulai siapkan profil Anda sekarang — tempat terbatas!",
  titleLine1: "Pertemuan Pernikahan Islami Bosnia",
  titleLine2: "Menandai peluncuran platform Zefaaf di Bosnia 🇧🇦",
  description:
    "Bersiaplah untuk pertemuan global pertama bagi keluarga Muslim di Bosnia — kesempatan nyata bagi mereka yang mencari pernikahan serius dan perkenalan sesuai syariah dengan wanita Muslim Eropa dari Bosnia, semuanya di bawah pengawasan dan bimbingan tim Zefaaf.",
  info: {
    date: "21 Agustus 2026",
    payment: "Pembayaran: 500 Euro",
    duration: "Durasi acara: 5 jam",
    location: "Terezija, 71000",
  },
  cta: "Pesan tempat Anda sekarang",
  imageAlt: "Jembatan bersejarah Mostar di atas sungai di Bosnia dan Herzegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Pelanggan Puas",
    ratingValue: "4.8/5",
    ratingLabel: "Penilaian",
    avatarAlt: "Seorang anggota Zefaaf yang bahagia",
  },
  figures: {
    title: "Bersama Kelompok Elit\nTokoh Paling Berpengaruh & Inspiratif",
    description:
      "Jangan lewatkan kesempatan untuk berpartisipasi dalam acara yang menggabungkan inspirasi, pengetahuan, dan pengalaman yang memperkaya.",
    name: "Mustafa Hassan",
    followers: "4,5jt pengikut",
  },
};

const zh: EventDetailsCopy = {
  badge: "现在就开始准备您的资料——名额有限!",
  titleLine1: "波斯尼亚伊斯兰婚姻聚会",
  titleLine2: "庆祝 Zefaaf 平台在波斯尼亚正式启动 🇧🇦",
  description:
    "敬请期待波斯尼亚穆斯林家庭首次全球聚会——这是一个真正的机会,让寻求认真婚姻的人士在 Zefaaf 团队的监督与指导下,与来自波斯尼亚的欧洲穆斯林女性进行符合伊斯兰教法的相亲交流。",
  info: {
    date: "2026年8月21日",
    payment: "费用:500欧元",
    duration: "活动时长:5小时",
    location: "特雷齐亚,71000",
  },
  cta: "立即预订席位",
  imageAlt: "波斯尼亚和黑塞哥维那河流上的莫斯塔尔历史古桥",
  stats: {
    customersValue: "34,484k",
    customersLabel: "满意客户",
    ratingValue: "4.8/5",
    ratingLabel: "评分",
    avatarAlt: "一位满意的 Zefaaf 会员",
  },
  figures: {
    title: "汇聚最具影响力与\n启发性的精英人物",
    description: "不要错过参加这场汇聚灵感、知识与丰富体验的活动的机会。",
    name: "穆斯塔法·哈桑",
    followers: "450万关注者",
  },
};

const bn: EventDetailsCopy = {
  badge: "এখনই আপনার প্রোফাইল প্রস্তুত করা শুরু করুন — আসন সীমিত!",
  titleLine1: "বসনিয়া ইসলামিক ম্যারেজ গ্যাদারিং",
  titleLine2: "বসনিয়ায় জেফাফ প্ল্যাটফর্মের সূচনা উপলক্ষে 🇧🇦",
  description:
    "বসনিয়ার মুসলিম পরিবারগুলোর জন্য প্রথম বৈশ্বিক সমাবেশের জন্য প্রস্তুত হোন — যারা একটি গুরুতর বিবাহ এবং বসনিয়ার ইউরোপীয় মুসলিম নারীদের সাথে শরিয়াহ-সম্মত পরিচিতি খুঁজছেন, তাদের জন্য এটি একটি প্রকৃত সুযোগ, সবকিছুই জেফাফ দলের তত্ত্বাবধান ও নির্দেশনায়।",
  info: {
    date: "21 আগস্ট, 2026",
    payment: "পেমেন্ট: 500 ইউরো",
    duration: "অনুষ্ঠানের সময়কাল: 5 ঘণ্টা",
    location: "তেরেজিয়া, 71000",
  },
  cta: "এখনই আপনার আসন বুক করুন",
  imageAlt: "বসনিয়া ও হার্জেগোভিনার নদীর উপর মোস্তারের ঐতিহাসিক সেতু",
  stats: {
    customersValue: "34,484k",
    customersLabel: "সন্তুষ্ট গ্রাহক",
    ratingValue: "4.8/5",
    ratingLabel: "রেটিং",
    avatarAlt: "একজন সুখী জেফাফ সদস্য",
  },
  figures: {
    title: "সবচেয়ে প্রভাবশালী ও\nঅনুপ্রেরণাদায়ী ব্যক্তিত্বদের\nএকটি অভিজাত দলের সাথে",
    description:
      "অনুপ্রেরণা, জ্ঞান এবং সমৃদ্ধ অভিজ্ঞতার সমন্বয়ে একটি অনুষ্ঠানে অংশ নেওয়ার সুযোগ মিস করবেন না।",
    name: "মুস্তফা হাসান",
    followers: "4.5 মিলিয়ন ফলোয়ার",
  },
};

const bs: EventDetailsCopy = {
  badge: "Počnite pripremati svoj profil odmah — broj mjesta je ograničen!",
  titleLine1: "Islamsko bračno okupljanje u Bosni",
  titleLine2: "Povodom lansiranja Zefaaf platforme u Bosni 🇧🇦",
  description:
    "Pripremite se za prvo globalno okupljanje muslimanskih porodica u Bosni — istinsku priliku za one koji traže ozbiljan brak i upoznavanje u skladu sa šerijatom sa evropskim muslimankama iz Bosne, sve pod nadzorom i vodstvom Zefaaf tima.",
  info: {
    date: "21. avgust 2026.",
    payment: "Plaćanje: 500 eura",
    duration: "Trajanje događaja: 5 sati",
    location: "Terezija, 71000",
  },
  cta: "Rezervišite svoje mjesto odmah",
  imageAlt: "Istorijski most u Mostaru nad rijekom u Bosni i Hercegovini",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Zadovoljni Klijenti",
    ratingValue: "4.8/5",
    ratingLabel: "Ocjena",
    avatarAlt: "Sretan član Zefaafa",
  },
  figures: {
    title: "Sa elitnom grupom\nnajutjecajnijih i najinspirativnijih\nličnosti",
    description:
      "Ne propustite priliku da učestvujete u događaju koji spaja inspiraciju, znanje i obogaćujuća iskustva.",
    name: "Mustafa Hassan",
    followers: "4,5m pratilaca",
  },
};

const es: EventDetailsCopy = {
  badge: "Empieza a preparar tu perfil ahora — ¡las plazas son limitadas!",
  titleLine1: "Encuentro de Matrimonio Islámico de Bosnia",
  titleLine2: "Con motivo del lanzamiento de la plataforma Zefaaf en Bosnia 🇧🇦",
  description:
    "Prepárate para el primer encuentro global de familias musulmanas en Bosnia: una oportunidad genuina para quienes buscan un matrimonio serio y una presentación conforme a la sharía con mujeres musulmanas europeas de Bosnia, todo bajo la supervisión y guía del equipo de Zefaaf.",
  info: {
    date: "21 de agosto de 2026",
    payment: "Pago: 500 euros",
    duration: "Duración del evento: 5 horas",
    location: "Terezija, 71000",
  },
  cta: "Reserva tu lugar ahora",
  imageAlt: "El histórico puente de Mostar sobre el río en Bosnia y Herzegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Clientes Satisfechos",
    ratingValue: "4.8/5",
    ratingLabel: "Calificación",
    avatarAlt: "Un miembro feliz de Zefaaf",
  },
  figures: {
    title: "Con un Grupo de Élite de\nlas Figuras Más Influyentes\ne Inspiradoras",
    description:
      "No te pierdas la oportunidad de participar en un evento que reúne inspiración, conocimiento y experiencias enriquecedoras.",
    name: "Mustafa Hassan",
    followers: "4,5m seguidores",
  },
};

const fa: EventDetailsCopy = {
  badge: "همین حالا آماده‌سازی پروفایل خود را شروع کنید — ظرفیت محدود است!",
  titleLine1: "گردهمایی ازدواج اسلامی بوسنی",
  titleLine2: "به مناسبت راه‌اندازی پلتفرم زفاف در بوسنی 🇧🇦",
  description:
    "برای اولین گردهمایی جهانی خانواده‌های مسلمان در بوسنی آماده شوید — فرصتی واقعی برای کسانی که به دنبال ازدواجی جدی و آشنایی مطابق با شریعت با زنان مسلمان اروپایی از بوسنی هستند، همگی تحت نظارت و راهنمایی تیم زفاف.",
  info: {
    date: "21 اوت 2026",
    payment: "پرداخت: 500 یورو",
    duration: "مدت رویداد: 5 ساعت",
    location: "ترزیا، 71000",
  },
  cta: "همین حالا جای خود را رزرو کنید",
  imageAlt: "پل تاریخی موستار بر فراز رودخانه در بوسنی و هرزگوین",
  stats: {
    customersValue: "34,484k",
    customersLabel: "مشتریان راضی",
    ratingValue: "4.8/5",
    ratingLabel: "امتیاز",
    avatarAlt: "یکی از اعضای خوشحال زفاف",
  },
  figures: {
    title: "با گروهی از برجسته‌ترین\nو الهام‌بخش‌ترین چهره‌ها",
    description:
      "فرصت شرکت در رویدادی که الهام، دانش و تجربه‌های غنی‌بخش را گرد هم می‌آورد، از دست ندهید.",
    name: "مصطفی حسن",
    followers: "4.5 میلیون دنبال‌کننده",
  },
};

const pt: EventDetailsCopy = {
  badge: "Comece já a preparar o seu perfil — as vagas são limitadas!",
  titleLine1: "Encontro de Casamento Islâmico da Bósnia",
  titleLine2: "Assinalando o lançamento da plataforma Zefaaf na Bósnia 🇧🇦",
  description:
    "Prepare-se para o primeiro encontro global de famílias muçulmanas na Bósnia — uma oportunidade genuína para quem procura um casamento sério e uma apresentação em conformidade com a sharia com mulheres muçulmanas europeias da Bósnia, tudo sob a supervisão e orientação da equipa Zefaaf.",
  info: {
    date: "21 de agosto de 2026",
    payment: "Pagamento: 500 euros",
    duration: "Duração do evento: 5 horas",
    location: "Terezija, 71000",
  },
  cta: "Reserve já o seu lugar",
  imageAlt: "A histórica ponte de Mostar sobre o rio na Bósnia e Herzegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Clientes Satisfeitos",
    ratingValue: "4.8/5",
    ratingLabel: "Avaliação",
    avatarAlt: "Um membro feliz da Zefaaf",
  },
  figures: {
    title: "Com um Grupo de Elite das\nFiguras Mais Influentes\ne Inspiradoras",
    description:
      "Não perca a oportunidade de participar em um evento que reúne inspiração, conhecimento e experiências enriquecedoras.",
    name: "Mustafa Hassan",
    followers: "4,5m seguidores",
  },
};

const ja: EventDetailsCopy = {
  badge: "今すぐプロフィールの準備を始めましょう——定員に限りがあります!",
  titleLine1: "ボスニア・イスラム結婚の集い",
  titleLine2: "ボスニアでのZefaafプラットフォーム開始を記念して 🇧🇦",
  description:
    "ボスニアのムスリム家族による初の国際的な集いにご期待ください。真剣な結婚を望み、Zefaafチームの監督と指導のもと、ボスニア出身のヨーロッパ人ムスリム女性とシャリーアに則った出会いを求める方々にとって、またとない機会です。",
  info: {
    date: "2026年8月21日",
    payment: "参加費:500ユーロ",
    duration: "イベント時間:5時間",
    location: "テレジヤ、71000",
  },
  cta: "今すぐ席を予約する",
  imageAlt: "ボスニア・ヘルツェゴビナの川に架かるモスタルの歴史的な橋",
  stats: {
    customersValue: "34,484k",
    customersLabel: "満足したお客様",
    ratingValue: "4.8/5",
    ratingLabel: "評価",
    avatarAlt: "満足しているZefaafメンバー",
  },
  figures: {
    title: "最も影響力があり\nインスピレーションを与える\nエリート層とともに",
    description: "インスピレーション、知識、豊かな経験が一堂に会するイベントへの参加をお見逃しなく。",
    name: "ムスタファ・ハサン",
    followers: "フォロワー450万人",
  },
};

const ko: EventDetailsCopy = {
  badge: "지금 바로 프로필 준비를 시작하세요 — 자리가 한정되어 있습니다!",
  titleLine1: "보스니아 이슬람 결혼 모임",
  titleLine2: "보스니아에서 Zefaaf 플랫폼 출시를 기념하며 🇧🇦",
  description:
    "보스니아 무슬림 가족을 위한 첫 번째 국제 모임을 준비하세요 — 진지한 결혼을 원하고 Zefaaf 팀의 감독과 안내 아래 보스니아 출신 유럽 무슬림 여성과 샤리아에 부합하는 만남을 찾는 분들을 위한 진정한 기회입니다.",
  info: {
    date: "2026년 8월 21일",
    payment: "결제: 500유로",
    duration: "행사 시간: 5시간",
    location: "테레지야, 71000",
  },
  cta: "지금 바로 좌석을 예약하세요",
  imageAlt: "보스니아 헤르체고비나의 강 위에 놓인 모스타르의 역사적인 다리",
  stats: {
    customersValue: "34,484k",
    customersLabel: "만족한 고객",
    ratingValue: "4.8/5",
    ratingLabel: "평점",
    avatarAlt: "행복한 Zefaaf 회원",
  },
  figures: {
    title: "가장 영향력 있고\n영감을 주는 인사들로\n구성된 엘리트 그룹과 함께",
    description: "영감, 지식, 풍부한 경험이 어우러지는 행사에 참여할 기회를 놓치지 마세요.",
    name: "무스타파 하산",
    followers: "팔로워 450만 명",
  },
};

const it: EventDetailsCopy = {
  badge: "Inizia subito a preparare il tuo profilo — i posti sono limitati!",
  titleLine1: "Raduno del Matrimonio Islamico in Bosnia",
  titleLine2: "In occasione del lancio della piattaforma Zefaaf in Bosnia 🇧🇦",
  description:
    "Preparati per il primo raduno globale delle famiglie musulmane in Bosnia — un'opportunità autentica per chi cerca un matrimonio serio e una conoscenza conforme alla sharia con donne musulmane europee della Bosnia, tutto sotto la supervisione e la guida del team Zefaaf.",
  info: {
    date: "21 agosto 2026",
    payment: "Pagamento: 500 euro",
    duration: "Durata dell'evento: 5 ore",
    location: "Terezija, 71000",
  },
  cta: "Prenota subito il tuo posto",
  imageAlt: "Lo storico ponte di Mostar sul fiume in Bosnia ed Erzegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Clienti Soddisfatti",
    ratingValue: "4.8/5",
    ratingLabel: "Valutazione",
    avatarAlt: "Un membro felice di Zefaaf",
  },
  figures: {
    title: "Con un Gruppo d'Élite\ndelle Figure Più Influenti\ne Ispiratrici",
    description:
      "Non perdere l'occasione di partecipare a un evento che unisce ispirazione, conoscenza ed esperienze arricchenti.",
    name: "Mustafa Hassan",
    followers: "4,5m follower",
  },
};

const ur: EventDetailsCopy = {
  badge: "ابھی اپنی پروفائل تیار کرنا شروع کریں — نشستیں محدود ہیں!",
  titleLine1: "بوسنیا اسلامی شادی اجتماع",
  titleLine2: "بوسنیا میں زفاف پلیٹ فارم کے آغاز کی مناسبت سے 🇧🇦",
  description:
    "بوسنیا میں مسلم خاندانوں کے پہلے عالمی اجتماع کے لیے تیار ہو جائیں — سنجیدہ شادی کے خواہاں اور بوسنیا کی یورپی مسلم خواتین کے ساتھ شریعت کے مطابق تعارف چاہنے والوں کے لیے ایک حقیقی موقع، وہ بھی زفاف ٹیم کی نگرانی اور رہنمائی میں۔",
  info: {
    date: "21 اگست 2026",
    payment: "ادائیگی: 500 یورو",
    duration: "تقریب کا دورانیہ: 5 گھنٹے",
    location: "تیریزیا، 71000",
  },
  cta: "ابھی اپنی نشست بک کریں",
  imageAlt: "بوسنیا اور ہرزیگووینا میں دریا کے اوپر موستار کا تاریخی پل",
  stats: {
    customersValue: "34,484k",
    customersLabel: "مطمئن گاہک",
    ratingValue: "4.8/5",
    ratingLabel: "درجہ بندی",
    avatarAlt: "زفاف کا ایک خوش رکن",
  },
  figures: {
    title: "سب سے زیادہ بااثر اور\nحوصلہ افزا شخصیات کے\nایک منتخب گروہ کے ساتھ",
    description:
      "ایک ایسی تقریب میں شرکت کا موقع مت گنوائیں جو تحریک، علم اور بھرپور تجربات کو یکجا کرتی ہے۔",
    name: "مصطفیٰ حسن",
    followers: "4.5 ملین فالوورز",
  },
};

const ta: EventDetailsCopy = {
  badge: "இப்போதே உங்கள் சுயவிவரத்தைத் தயார் செய்யத் தொடங்குங்கள் — இடங்கள் வரையறுக்கப்பட்டவை!",
  titleLine1: "போஸ்னியா இஸ்லாமிய திருமண சந்திப்பு",
  titleLine2: "போஸ்னியாவில் ஜெஃபாஃப் தளத்தின் தொடக்கத்தைக் குறிக்கும் வகையில் 🇧🇦",
  description:
    "போஸ்னியாவில் முஸ்லிம் குடும்பங்களுக்கான முதல் உலகளாவிய சந்திப்புக்குத் தயாராகுங்கள் — தீவிரமான திருமணத்தையும், போஸ்னியாவைச் சேர்ந்த ஐரோப்பிய முஸ்லிம் பெண்களுடன் ஷரியா-இணக்கமான அறிமுகத்தையும் நாடுபவர்களுக்கான உண்மையான வாய்ப்பு, இவை அனைத்தும் ஜெஃபாஃப் குழுவின் மேற்பார்வை மற்றும் வழிகாட்டுதலின் கீழ் நடைபெறும்.",
  info: {
    date: "21 ஆகஸ்ட் 2026",
    payment: "கட்டணம்: 500 யூரோ",
    duration: "நிகழ்வின் கால அளவு: 5 மணி நேரம்",
    location: "தெரேசியா, 71000",
  },
  cta: "இப்போதே உங்கள் இருக்கையை முன்பதிவு செய்யுங்கள்",
  imageAlt: "போஸ்னியா மற்றும் ஹெர்சகோவினாவில் ஆற்றின் மேல் உள்ள மோஸ்டார் வரலாற்றுப் பாலம்",
  stats: {
    customersValue: "34,484k",
    customersLabel: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    ratingValue: "4.8/5",
    ratingLabel: "மதிப்பீடு",
    avatarAlt: "மகிழ்ச்சியான ஜெஃபாஃப் உறுப்பினர்",
  },
  figures: {
    title: "மிகவும் செல்வாக்கு மிக்க\nமற்றும் ஊக்கமளிக்கும்\nநபர்களின் தேர்ந்தெடுக்கப்பட்ட குழுவுடன்",
    description:
      "உத்வேகம், அறிவு மற்றும் செழுமையான அனுபவங்களை ஒன்றிணைக்கும் ஒரு நிகழ்வில் பங்கேற்கும் வாய்ப்பை தவறவிடாதீர்கள்.",
    name: "முஸ்தபா ஹசன்",
    followers: "4.5மி பின்தொடர்பவர்கள்",
  },
};

const am: EventDetailsCopy = {
  badge: "አሁኑኑ መገለጫዎን ማዘጋጀት ይጀምሩ — ቦታዎች የተወሰኑ ናቸው!",
  titleLine1: "የቦስኒያ እስላማዊ የጋብቻ ስብሰባ",
  titleLine2: "በቦስኒያ የዘፋአፍ መድረክ ማስጀመሪያን ምክንያት በማድረግ 🇧🇦",
  description:
    "በቦስኒያ ለሚገኙ ሙስሊም ቤተሰቦች የመጀመሪያውን ዓለም አቀፍ ስብሰባ ለማድረግ ይዘጋጁ — ከቦስኒያ ለሆኑ አውሮፓውያን ሙስሊም ሴቶች ጋር በሸሪዓ የተስማማ ትውውቅ እና ከባድ ጋብቻ ለሚፈልጉ ሰዎች እውነተኛ እድል፣ ይህ ሁሉ በዘፋአፍ ቡድን ቁጥጥርና መመሪያ ስር ይከናወናል።",
  info: {
    date: "ኦገስት 21, 2026",
    payment: "ክፍያ፦ 500 ዩሮ",
    duration: "የዝግጅቱ ቆይታ፦ 5 ሰዓታት",
    location: "ተሬዚያ፣ 71000",
  },
  cta: "አሁኑኑ ቦታዎን ያስይዙ",
  imageAlt: "በቦስኒያና ሄርዞጎቪና ወንዝ ላይ ያለው የሞስታር ታሪካዊ ድልድይ",
  stats: {
    customersValue: "34,484k",
    customersLabel: "ደስተኛ ደንበኞች",
    ratingValue: "4.8/5",
    ratingLabel: "ደረጃ",
    avatarAlt: "ደስተኛ የዘፋአፍ አባል",
  },
  figures: {
    title: "በጣም ተፅዕኖ ፈጣሪ እና\nአነሳሽ ከሆኑ ግለሰቦች\nከተውጣጣ ልሂቃን ቡድን ጋር",
    description: "መነሳሳትን፣ እውቀትን እና የበለጸጉ ተሞክሮዎችን የሚያሰባስብ ዝግጅት ላይ የመሳተፍ እድልን አያምልጡ።",
    name: "ሙስጠፋ ሀሰን",
    followers: "4.5ሚ ተከታዮች",
  },
};

const sv: EventDetailsCopy = {
  badge: "Börja förbereda din profil nu — platserna är begränsade!",
  titleLine1: "Islamisk Äktenskapssamling i Bosnien",
  titleLine2: "Till minne av lanseringen av Zefaaf-plattformen i Bosnien 🇧🇦",
  description:
    "Gör dig redo för den första globala samlingen för muslimska familjer i Bosnien — en genuin möjlighet för dem som söker ett seriöst äktenskap och en sharia-enlig presentation för europeiska muslimska kvinnor från Bosnien, allt under överinseende och vägledning av Zefaaf-teamet.",
  info: {
    date: "21 augusti 2026",
    payment: "Betalning: 500 euro",
    duration: "Evenemangets längd: 5 timmar",
    location: "Terezija, 71000",
  },
  cta: "Boka din plats nu",
  imageAlt: "Mostars historiska bro över floden i Bosnien och Hercegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Nöjda Kunder",
    ratingValue: "4.8/5",
    ratingLabel: "Betyg",
    avatarAlt: "En glad Zefaaf-medlem",
  },
  figures: {
    title: "Med en Elitgrupp av\nde Mest Inflytelserika &\nInspirerande Personerna",
    description:
      "Missa inte chansen att delta i ett evenemang som förenar inspiration, kunskap och berikande upplevelser.",
    name: "Mustafa Hassan",
    followers: "4,5m följare",
  },
};

const da: EventDetailsCopy = {
  badge: "Begynd at forberede din profil nu — pladserne er begrænsede!",
  titleLine1: "Islamisk Ægteskabssammenkomst i Bosnien",
  titleLine2: "Til ære for lanceringen af Zefaaf-platformen i Bosnien 🇧🇦",
  description:
    "Gør dig klar til den første globale sammenkomst for muslimske familier i Bosnien — en ægte mulighed for dem, der søger et seriøst ægteskab og en sharia-forenelig præsentation for europæiske muslimske kvinder fra Bosnien, alt sammen under tilsyn og vejledning af Zefaaf-teamet.",
  info: {
    date: "21. august 2026",
    payment: "Betaling: 500 euro",
    duration: "Begivenhedens varighed: 5 timer",
    location: "Terezija, 71000",
  },
  cta: "Book din plads nu",
  imageAlt: "Mostars historiske bro over floden i Bosnien-Hercegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Tilfredse Kunder",
    ratingValue: "4.8/5",
    ratingLabel: "Bedømmelse",
    avatarAlt: "Et glad Zefaaf-medlem",
  },
  figures: {
    title: "Med en Elitegruppe af\nde Mest Indflydelsesrige &\nInspirerende Personer",
    description:
      "Gå ikke glip af muligheden for at deltage i en begivenhed, der forener inspiration, viden og berigende oplevelser.",
    name: "Mustafa Hassan",
    followers: "4,5m følgere",
  },
};

const sq: EventDetailsCopy = {
  badge: "Filloni të përgatisni profilin tuaj tani — vendet janë të kufizuara!",
  titleLine1: "Tubimi i Martesës Islame në Bosnjë",
  titleLine2: "Duke shënuar nisjen e platformës Zefaaf në Bosnjë 🇧🇦",
  description:
    "Përgatituni për tubimin e parë global të familjeve myslimane në Bosnjë — një mundësi e vërtetë për ata që kërkojnë një martesë serioze dhe një njohje në përputhje me sheriatin me gra myslimane evropiane nga Bosnja, gjithçka nën mbikëqyrjen dhe udhëheqjen e ekipit Zefaaf.",
  info: {
    date: "21 gusht 2026",
    payment: "Pagesa: 500 euro",
    duration: "Kohëzgjatja e ngjarjes: 5 orë",
    location: "Terezija, 71000",
  },
  cta: "Rezervoni vendin tuaj tani",
  imageAlt: "Ura historike e Mostarit mbi lumin në Bosnjë dhe Hercegovinë",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Klientë të Kënaqur",
    ratingValue: "4.8/5",
    ratingLabel: "Vlerësimi",
    avatarAlt: "Një anëtar i lumtur i Zefaaf",
  },
  figures: {
    title: "Me një Grup Elitë të\nFigurave Më Ndikuese &\nFrymëzuese",
    description:
      "Mos e humbisni mundësinë për të marrë pjesë në një event që bashkon frymëzimin, dijen dhe përvoja pasuruese.",
    name: "Mustafa Hassan",
    followers: "4.5m ndjekës",
  },
};

const uz: EventDetailsCopy = {
  badge: "Profilingizni hozirdan tayyorlashni boshlang — o'rinlar cheklangan!",
  titleLine1: "Bosniya Islom Nikoh Yig'ilishi",
  titleLine2: "Zefaaf platformasining Bosniyada ishga tushirilishi munosabati bilan 🇧🇦",
  description:
    "Bosniyadagi musulmon oilalar uchun birinchi global yig'ilishga tayyor bo'ling — jiddiy nikoh va Bosniyalik yevropalik musulmon ayollar bilan shariatga mos tanishuvni istaganlar uchun haqiqiy imkoniyat, barchasi Zefaaf jamoasining nazorati va yo'l-yo'riqi ostida.",
  info: {
    date: "2026-yil 21-avgust",
    payment: "To'lov: 500 Yevro",
    duration: "Tadbir davomiyligi: 5 soat",
    location: "Terezija, 71000",
  },
  cta: "Hoziroq o'rningizni band qiling",
  imageAlt: "Bosniya va Gertsegovinada daryo ustidagi Mostar shahrining tarixiy ko'prigi",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Mamnun Mijozlar",
    ratingValue: "4.8/5",
    ratingLabel: "Reyting",
    avatarAlt: "Zefaafning baxtli a'zosi",
  },
  figures: {
    title: "Eng ta'sirchan va\nilhomlantiruvchi shaxslardan\niborat elita guruhi bilan",
    description:
      "Ilhom, bilim va boy tajribalarni birlashtiruvchi tadbirda qatnashish imkoniyatini boy bermang.",
    name: "Mustafa Hasan",
    followers: "4,5 mln obunachi",
  },
};

const az: EventDetailsCopy = {
  badge: "Profilinizi hazırlamağa indi başlayın — yerlər məhduddur!",
  titleLine1: "Bosniya İslam Nikah Toplantısı",
  titleLine2: "Zefaaf platformasının Bosniyada başladılmasını qeyd edərək 🇧🇦",
  description:
    "Bosniyadakı müsəlman ailələri üçün ilk qlobal toplantıya hazır olun — ciddi nikah axtaran və Bosniyalı Avropalı müsəlman qadınlarla şəriətə uyğun tanışlıq istəyənlər üçün əsl fürsət, hər şey Zefaaf komandasının nəzarəti və rəhbərliyi altında.",
  info: {
    date: "21 avqust 2026",
    payment: "Ödəniş: 500 avro",
    duration: "Tədbirin müddəti: 5 saat",
    location: "Terezija, 71000",
  },
  cta: "İndi yerinizi rezervasiya edin",
  imageAlt: "Bosniya və Herseqovinada çay üzərindəki Mostarın tarixi körpüsü",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Məmnun Müştərilər",
    ratingValue: "4.8/5",
    ratingLabel: "Reytinq",
    avatarAlt: "Xoşbəxt bir Zefaaf üzvü",
  },
  figures: {
    title: "Ən nüfuzlu və\nilhamverici şəxsiyyətlərdən\nibarət elit qrupla",
    description:
      "İlham, bilik və zəngin təcrübələri bir araya gətirən tədbirdə iştirak etmək fürsətini qaçırmayın.",
    name: "Mustafa Hasan",
    followers: "4,5m izləyici",
  },
};

const fil: EventDetailsCopy = {
  badge: "Simulan nang ihanda ang iyong profile ngayon — limitado lang ang mga puwesto!",
  titleLine1: "Pagtitipon ng Islamikong Kasal sa Bosnia",
  titleLine2: "Bilang paggunita sa paglulunsad ng Zefaaf platform sa Bosnia 🇧🇦",
  description:
    "Maghanda para sa unang pandaigdigang pagtitipon ng mga Muslim na pamilya sa Bosnia — isang tunay na pagkakataon para sa mga naghahanap ng seryosong kasal at pagpapakilalang naaayon sa Sharia sa mga European Muslim na kababaihan mula sa Bosnia, lahat sa ilalim ng pangangasiwa at gabay ng Zefaaf team.",
  info: {
    date: "Agosto 21, 2026",
    payment: "Bayad: 500 Euro",
    duration: "Tagal ng kaganapan: 5 oras",
    location: "Terezija, 71000",
  },
  cta: "I-book na ang iyong upuan",
  imageAlt: "Ang makasaysayang tulay ng Mostar sa ibabaw ng ilog sa Bosnia at Herzegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Mga Nasisiyahang Kustomer",
    ratingValue: "4.8/5",
    ratingLabel: "Rating",
    avatarAlt: "Isang masayang miyembro ng Zefaaf",
  },
  figures: {
    title: "Kasama ang Piling Grupo ng\nPinaka-Maimpluwensya at\nNakakapukaw na mga Personalidad",
    description:
      "Huwag palampasin ang pagkakataong lumahok sa isang kaganapan na pinagsasama ang inspirasyon, kaalaman, at nagpapayamang karanasan.",
    name: "Mustafa Hassan",
    followers: "4.5m tagasubaybay",
  },
};

const hi: EventDetailsCopy = {
  badge: "अभी अपनी प्रोफ़ाइल तैयार करना शुरू करें — सीटें सीमित हैं!",
  titleLine1: "बोस्निया इस्लामिक विवाह सम्मेलन",
  titleLine2: "बोस्निया में ज़ेफ़ाफ़ प्लेटफ़ॉर्म के शुभारंभ के अवसर पर 🇧🇦",
  description:
    "बोस्निया में मुस्लिम परिवारों के पहले वैश्विक सम्मेलन के लिए तैयार हो जाइए — गंभीर विवाह और बोस्निया की यूरोपीय मुस्लिम महिलाओं के साथ शरिया के अनुरूप परिचय की तलाश करने वालों के लिए एक वास्तविक अवसर, यह सब ज़ेफ़ाफ़ टीम की देखरेख और मार्गदर्शन में।",
  info: {
    date: "21 अगस्त 2026",
    payment: "भुगतान: 500 यूरो",
    duration: "कार्यक्रम की अवधि: 5 घंटे",
    location: "तेरेज़िया, 71000",
  },
  cta: "अभी अपनी सीट बुक करें",
  imageAlt: "बोस्निया और हर्ज़ेगोविना में नदी के ऊपर मोस्तार का ऐतिहासिक पुल",
  stats: {
    customersValue: "34,484k",
    customersLabel: "संतुष्ट ग्राहक",
    ratingValue: "4.8/5",
    ratingLabel: "रेटिंग",
    avatarAlt: "एक खुश ज़ेफ़ाफ़ सदस्य",
  },
  figures: {
    title: "सबसे प्रभावशाली और\nप्रेरणादायक हस्तियों के\nएक विशिष्ट समूह के साथ",
    description:
      "एक ऐसे आयोजन में भाग लेने का अवसर न चूकें जो प्रेरणा, ज्ञान और समृद्ध अनुभवों को एक साथ लाता है।",
    name: "मुस्तफा हसन",
    followers: "4.5 मिलियन फॉलोअर्स",
  },
};

const kk: EventDetailsCopy = {
  badge: "Профиліңізді дайындауды қазірден бастаңыз — орындар шектеулі!",
  titleLine1: "Босниядағы Ислам Неке Жиыны",
  titleLine2: "Zefaaf платформасының Босниядағы іске қосылуына орай 🇧🇦",
  description:
    "Босниядағы мұсылман отбасылары үшін алғашқы жаһандық жиынға дайын болыңыз — байыпты некеге және Боснияның еуропалық мұсылман әйелдерімен шариғатқа сай танысуға ұмтылғандар үшін нағыз мүмкіндік, мұның бәрі Zefaaf тобының қадағалауымен және басшылығымен өтеді.",
  info: {
    date: "2026 жылғы 21 тамыз",
    payment: "Төлем: 500 еуро",
    duration: "Іс-шараның ұзақтығы: 5 сағат",
    location: "Терезия, 71000",
  },
  cta: "Орныңызды қазір брондаңыз",
  imageAlt: "Босния мен Герцеговинадағы өзен үстіндегі Мостардың тарихи көпірі",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Риза Клиенттер",
    ratingValue: "4.8/5",
    ratingLabel: "Рейтинг",
    avatarAlt: "Zefaaf-тың бақытты мүшесі",
  },
  figures: {
    title: "Ең ықпалды және\nшабыттандыратын тұлғалардан\nтұратын элиталық топпен",
    description:
      "Шабыт, білім және баға жетпес тәжірибелерді біріктіретін іс-шараға қатысу мүмкіндігін жіберіп алмаңыз.",
    name: "Мұстафа Хасан",
    followers: "4,5 млн жазылушы",
  },
};

const ms: EventDetailsCopy = {
  badge: "Mula sediakan profil anda sekarang — tempat adalah terhad!",
  titleLine1: "Pertemuan Perkahwinan Islam Bosnia",
  titleLine2: "Sempena pelancaran platform Zefaaf di Bosnia 🇧🇦",
  description:
    "Bersedialah untuk pertemuan global pertama bagi keluarga Muslim di Bosnia — peluang sebenar bagi mereka yang mencari perkahwinan yang serius dan perkenalan yang mematuhi syariah dengan wanita Muslim Eropah dari Bosnia, semuanya di bawah pengawasan dan bimbingan pasukan Zefaaf.",
  info: {
    date: "21 Ogos 2026",
    payment: "Bayaran: 500 Euro",
    duration: "Tempoh acara: 5 jam",
    location: "Terezija, 71000",
  },
  cta: "Tempah tempat anda sekarang",
  imageAlt: "Jambatan bersejarah Mostar di atas sungai di Bosnia dan Herzegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Pelanggan Berpuas Hati",
    ratingValue: "4.8/5",
    ratingLabel: "Penilaian",
    avatarAlt: "Seorang ahli Zefaaf yang gembira",
  },
  figures: {
    title: "Bersama Kumpulan Elit\nTokoh Paling Berpengaruh &\nMemberi Inspirasi",
    description:
      "Jangan lepaskan peluang untuk mengambil bahagian dalam acara yang menggabungkan inspirasi, pengetahuan dan pengalaman yang memperkaya.",
    name: "Mustafa Hassan",
    followers: "4.5j pengikut",
  },
};

const pa: EventDetailsCopy = {
  badge: "ਹੁਣੇ ਆਪਣੀ ਪ੍ਰੋਫਾਈਲ ਤਿਆਰ ਕਰਨੀ ਸ਼ੁਰੂ ਕਰੋ — ਸੀਟਾਂ ਸੀਮਤ ਹਨ!",
  titleLine1: "ਬੋਸਨੀਆ ਇਸਲਾਮਿਕ ਵਿਆਹ ਇਕੱਠ",
  titleLine2: "ਬੋਸਨੀਆ ਵਿੱਚ ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ਦੀ ਸ਼ੁਰੂਆਤ ਦੇ ਮੌਕੇ 'ਤੇ 🇧🇦",
  description:
    "ਬੋਸਨੀਆ ਵਿੱਚ ਮੁਸਲਿਮ ਪਰਿਵਾਰਾਂ ਲਈ ਪਹਿਲੇ ਵਿਸ਼ਵਵਿਆਪੀ ਇਕੱਠ ਲਈ ਤਿਆਰ ਹੋ ਜਾਓ — ਗੰਭੀਰ ਵਿਆਹ ਅਤੇ ਬੋਸਨੀਆ ਦੀਆਂ ਯੂਰਪੀ ਮੁਸਲਿਮ ਔਰਤਾਂ ਨਾਲ ਸ਼ਰੀਆ ਦੇ ਅਨੁਸਾਰ ਜਾਣ-ਪਛਾਣ ਦੀ ਭਾਲ ਕਰਨ ਵਾਲਿਆਂ ਲਈ ਇੱਕ ਸੱਚਾ ਮੌਕਾ, ਇਹ ਸਭ ਜ਼ੇਫ਼ਾਫ਼ ਟੀਮ ਦੀ ਨਿਗਰਾਨੀ ਅਤੇ ਮਾਰਗਦਰਸ਼ਨ ਹੇਠ।",
  info: {
    date: "21 ਅਗਸਤ 2026",
    payment: "ਭੁਗਤਾਨ: 500 ਯੂਰੋ",
    duration: "ਸਮਾਗਮ ਦੀ ਮਿਆਦ: 5 ਘੰਟੇ",
    location: "ਤੇਰੇਜ਼ੀਆ, 71000",
  },
  cta: "ਹੁਣੇ ਆਪਣੀ ਸੀਟ ਬੁੱਕ ਕਰੋ",
  imageAlt: "ਬੋਸਨੀਆ ਅਤੇ ਹਰਜ਼ੇਗੋਵਿਨਾ ਵਿੱਚ ਦਰਿਆ ਉੱਤੇ ਮੋਸਤਾਰ ਦਾ ਇਤਿਹਾਸਕ ਪੁਲ",
  stats: {
    customersValue: "34,484k",
    customersLabel: "ਸੰਤੁਸ਼ਟ ਗਾਹਕ",
    ratingValue: "4.8/5",
    ratingLabel: "ਰੇਟਿੰਗ",
    avatarAlt: "ਇੱਕ ਖੁਸ਼ ਜ਼ੇਫ਼ਾਫ਼ ਮੈਂਬਰ",
  },
  figures: {
    title: "ਸਭ ਤੋਂ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਅਤੇ\nਪ੍ਰੇਰਣਾਦਾਇਕ ਸ਼ਖਸੀਅਤਾਂ ਦੇ\nਇੱਕ ਚੋਣਵੇਂ ਸਮੂਹ ਨਾਲ",
    description:
      "ਇੱਕ ਅਜਿਹੇ ਸਮਾਗਮ ਵਿੱਚ ਹਿੱਸਾ ਲੈਣ ਦਾ ਮੌਕਾ ਨਾ ਗੁਆਓ ਜੋ ਪ੍ਰੇਰਣਾ, ਗਿਆਨ ਅਤੇ ਭਰਪੂਰ ਤਜ਼ਰਬਿਆਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।",
    name: "ਮੁਸਤਫਾ ਹਸਨ",
    followers: "4.5 ਮਿਲੀਅਨ ਫਾਲੋਅਰਜ਼",
  },
};

const ps: EventDetailsCopy = {
  badge: "همدا اوس خپل پروفایل چمتو کول پیل کړئ — ځایونه محدود دي!",
  titleLine1: "د بوسنیا اسلامي واده غونډه",
  titleLine2: "په بوسنیا کې د زفاف پلیټ فارم پیل کولو په ویاړ 🇧🇦",
  description:
    "په بوسنیا کې د مسلمانو کورنیو لومړۍ نړیواله غونډې ته چمتو شئ — د زفاف ټیم تر څارنې او لارښوونې لاندې، د جدي واده او د بوسنیا له اروپایي مسلمانو ښځو سره د شریعت سره سم پیژندنې لپاره یو ریښتینی فرصت.",
  info: {
    date: "د 2026 د اګست 21",
    payment: "تادیه: 500 یورو",
    duration: "د پیښې موده: 5 ساعته",
    location: "تیریزیا، 71000",
  },
  cta: "همدا اوس خپل ځای بوک کړئ",
  imageAlt: "په بوسنیا او هرزیګوینا کې د سیند پر سر د موستار تاریخي پل",
  stats: {
    customersValue: "34,484k",
    customersLabel: "خوښ پیرودونکي",
    ratingValue: "4.8/5",
    ratingLabel: "درجه‌بندي",
    avatarAlt: "د زفاف یو خوشحاله غړی",
  },
  figures: {
    title: "د ډیرو اغیزناکو او\nالهام بښونکو څهرو\nله يوې غوره ډلې سره",
    description:
      "د هغه غونډې په ګډون کې د برخې اخیستو فرصت مه له لاسه ورکوئ چې الهام، پوهه او بډایه تجربې سره یوځای کوي.",
    name: "مصطفی حسن",
    followers: "4.5 میلیونه پيروان",
  },
};

const sw: EventDetailsCopy = {
  badge: "Anza kuandaa wasifu wako sasa — nafasi ni chache!",
  titleLine1: "Mkusanyiko wa Ndoa za Kiislamu wa Bosnia",
  titleLine2: "Kuadhimisha uzinduzi wa jukwaa la Zefaaf nchini Bosnia 🇧🇦",
  description:
    "Jiandae kwa mkusanyiko wa kwanza wa kimataifa wa familia za Kiislamu nchini Bosnia — fursa halisi kwa wale wanaotafuta ndoa ya dhati na kufahamiana kunakoambatana na sheria za Kiislamu na wanawake Waislamu wa Ulaya kutoka Bosnia, yote chini ya usimamizi na uongozi wa timu ya Zefaaf.",
  info: {
    date: "21 Agosti 2026",
    payment: "Malipo: Euro 500",
    duration: "Muda wa tukio: saa 5",
    location: "Terezija, 71000",
  },
  cta: "Hifadhi nafasi yako sasa",
  imageAlt: "Daraja la kihistoria la Mostar juu ya mto nchini Bosnia na Herzegovina",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Wateja Wenye Furaha",
    ratingValue: "4.8/5",
    ratingLabel: "Ukadiriaji",
    avatarAlt: "Mwanachama mwenye furaha wa Zefaaf",
  },
  figures: {
    title: "Pamoja na Kundi Bora la\nWatu Wenye Ushawishi Mkubwa\nna Wenye Kuhamasisha",
    description:
      "Usikose fursa ya kushiriki katika tukio linaloleta pamoja msukumo, maarifa, na uzoefu wa kuboresha.",
    name: "Mustafa Hassan",
    followers: "wafuasi milioni 4.5",
  },
};

const th: EventDetailsCopy = {
  badge: "เริ่มเตรียมโปรไฟล์ของคุณตอนนี้ — ที่นั่งมีจำนวนจำกัด!",
  titleLine1: "งานรวมตัวการแต่งงานแบบอิสลามแห่งบอสเนีย",
  titleLine2: "เพื่อเป็นการเฉลิมฉลองการเปิดตัวแพลตฟอร์ม Zefaaf ในบอสเนีย 🇧🇦",
  description:
    "เตรียมพร้อมสำหรับงานรวมตัวระดับโลกครั้งแรกของครอบครัวมุสลิมในบอสเนีย — โอกาสที่แท้จริงสำหรับผู้ที่ต้องการแต่งงานอย่างจริงจังและการแนะนำตัวที่สอดคล้องกับหลักชะรีอะฮ์กับสตรีมุสลิมชาวยุโรปจากบอสเนีย ทั้งหมดภายใต้การดูแลและคำแนะนำของทีมงาน Zefaaf",
  info: {
    date: "21 สิงหาคม 2026",
    payment: "ค่าใช้จ่าย: 500 ยูโร",
    duration: "ระยะเวลาของงาน: 5 ชั่วโมง",
    location: "เทเรซิยา, 71000",
  },
  cta: "จองที่นั่งของคุณตอนนี้",
  imageAlt: "สะพานประวัติศาสตร์โมสตาร์เหนือแม่น้ำในบอสเนียและเฮอร์เซโกวีนา",
  stats: {
    customersValue: "34,484k",
    customersLabel: "ลูกค้าที่พึงพอใจ",
    ratingValue: "4.8/5",
    ratingLabel: "คะแนน",
    avatarAlt: "สมาชิก Zefaaf ที่มีความสุข",
  },
  figures: {
    title: "ร่วมกับกลุ่มบุคคลชั้นนำ\nที่ทรงอิทธิพลและสร้างแรงบันดาลใจ\nมากที่สุด",
    description: "อย่าพลาดโอกาสเข้าร่วมงานที่รวบรวมแรงบันดาลใจ ความรู้ และประสบการณ์อันล้ำค่าไว้ด้วยกัน",
    name: "มุสตาฟา ฮะซัน",
    followers: "4.5 ล้านผู้ติดตาม",
  },
};

const copyByLocale: Record<string, EventDetailsCopy> = {
  ar, en, nl, fr, de, tr, ru, id, zh, bn, bs, es, fa, pt, ja, ko, it, ur, ta, am, sv, da, sq, uz, az, fil, hi, kk, ms, pa, ps, sw, th,
};

export function getEventDetailsCopy(locale: string): EventDetailsCopy {
  return copyByLocale[locale] ?? en;
}
