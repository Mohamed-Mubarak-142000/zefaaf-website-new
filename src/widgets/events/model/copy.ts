// This page's copy lives here rather than in `messages/*.json` because those
// 33 locale files are kept namespace-identical — adding an `events` namespace
// to only some of them would make next-intl throw MISSING_MESSAGE for the
// rest. Same approach as the About, VIP, and Influential Figures widgets.
// All 33 locales are translated directly in this file below. Content that
// already exists in `messages/*.json` for all 33 locales (nav.upcomingEvents,
// upcomingEvents.events, upcomingEvents.ticker) is read from there instead of
// duplicated here.

export type EventsCopy = {
  title: string;
  stats: {
    customersValue: string;
    customersLabel: string;
    ratingValue: string;
    ratingLabel: string;
    avatarAlt: string;
  };
  banner: {
    headingLine1: string;
    headingLine2: string;
    description: string;
  };
  buyTicketsCta: string;
};

const en: EventsCopy = {
  title: "Zefaaf Events",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Happy Customers",
    ratingValue: "4.8/5",
    ratingLabel: "Rating",
    avatarAlt: "A happy Zefaaf member",
  },
  banner: {
    headingLine1: "Moments",
    headingLine2: "Unforgettable Moments Await You",
    description:
      "Join us at the Islamic wedding celebration and enjoy a unique experience filled with inspiring moments and memories that will stay with you for a lifetime. Share in an exceptional atmosphere that combines benefit, joy, and meaningful connection.",
  },
  buyTicketsCta: "Buy Tickets",
};

const ar: EventsCopy = {
  title: "فعاليات زفاف",
  stats: {
    customersValue: "٣٤٬٤٨٤ك",
    customersLabel: "عميل سعيد",
    ratingValue: "٤.٨/٥",
    ratingLabel: "التقييم",
    avatarAlt: "أحد أعضاء زفاف السعداء",
  },
  banner: {
    headingLine1: "لحظات",
    headingLine2: "لا تُنسى بانتظارك",
    description:
      "انضم إلينا في احتفالية الزواج الإسلامي واستمتع بتجربة فريدة مليئة باللحظات الملهمة والذكريات التي ستبقى معك مدى الحياة. شارك في أجواء استثنائية تجمع بين الفائدة والفرح والتواصل الهادف.",
  },
  buyTicketsCta: "احجز تذكرتك",
};

const nl: EventsCopy = {
  title: "Zefaaf Evenementen",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Tevreden Klanten",
    ratingValue: "4.8/5",
    ratingLabel: "Beoordeling",
    avatarAlt: "Een tevreden Zefaaf-lid",
  },
  banner: {
    headingLine1: "Momenten",
    headingLine2: "Onvergetelijke Momenten Wachten op Jou",
    description:
      "Doe met ons mee tijdens het islamitische huwelijksfeest en beleef een unieke ervaring vol inspirerende momenten en herinneringen die je een leven lang zult koesteren. Deel in een bijzondere sfeer waarin verbondenheid, vreugde en betekenisvolle connecties samenkomen.",
  },
  buyTicketsCta: "Koop Tickets",
};

const fr: EventsCopy = {
  title: "Événements Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Clients Satisfaits",
    ratingValue: "4.8/5",
    ratingLabel: "Note",
    avatarAlt: "Un membre Zefaaf comblé",
  },
  banner: {
    headingLine1: "Moments",
    headingLine2: "Des Moments Inoubliables Vous Attendent",
    description:
      "Rejoignez-nous pour la célébration du mariage islamique et vivez une expérience unique remplie de moments inspirants et de souvenirs qui resteront gravés en vous toute une vie. Partagez une atmosphère exceptionnelle alliant bienfait, joie et connexion sincère.",
  },
  buyTicketsCta: "Acheter des Billets",
};

const de: EventsCopy = {
  title: "Zefaaf Veranstaltungen",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Zufriedene Kunden",
    ratingValue: "4.8/5",
    ratingLabel: "Bewertung",
    avatarAlt: "Ein zufriedenes Zefaaf-Mitglied",
  },
  banner: {
    headingLine1: "Momente",
    headingLine2: "Unvergessliche Momente Erwarten Dich",
    description:
      "Begleiten Sie uns bei der islamischen Hochzeitsfeier und genießen Sie ein einzigartiges Erlebnis voller inspirierender Momente und Erinnerungen, die Ihnen ein Leben lang in Erinnerung bleiben. Erleben Sie eine besondere Atmosphäre, die Nutzen, Freude und bedeutungsvolle Verbindung vereint.",
  },
  buyTicketsCta: "Tickets Kaufen",
};

const tr: EventsCopy = {
  title: "Zefaaf Etkinlikleri",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Mutlu Müşteriler",
    ratingValue: "4.8/5",
    ratingLabel: "Değerlendirme",
    avatarAlt: "Mutlu bir Zefaaf üyesi",
  },
  banner: {
    headingLine1: "Anlar",
    headingLine2: "Unutulmaz Anlar Sizi Bekliyor",
    description:
      "İslami düğün kutlamasında bize katılın ve ilham verici anlar ile ömür boyu sizinle kalacak anılarla dolu eşsiz bir deneyim yaşayın. Fayda, sevinç ve anlamlı bağlantıyı bir araya getiren olağanüstü bir atmosferi paylaşın.",
  },
  buyTicketsCta: "Bilet Satın Al",
};

const ru: EventsCopy = {
  title: "Мероприятия Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Довольные клиенты",
    ratingValue: "4.8/5",
    ratingLabel: "Рейтинг",
    avatarAlt: "Довольный участник Zefaaf",
  },
  banner: {
    headingLine1: "Моменты",
    headingLine2: "Незабываемые Моменты Ждут Вас",
    description:
      "Присоединяйтесь к нам на праздновании исламской свадьбы и насладитесь уникальным опытом, полным вдохновляющих моментов и воспоминаний, которые останутся с вами на всю жизнь. Разделите особую атмосферу, объединяющую пользу, радость и искренние связи.",
  },
  buyTicketsCta: "Купить билеты",
};

const id: EventsCopy = {
  title: "Acara Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Pelanggan Puas",
    ratingValue: "4.8/5",
    ratingLabel: "Penilaian",
    avatarAlt: "Seorang anggota Zefaaf yang bahagia",
  },
  banner: {
    headingLine1: "Momen",
    headingLine2: "Momen Tak Terlupakan Menanti Anda",
    description:
      "Bergabunglah bersama kami dalam perayaan pernikahan Islami dan nikmati pengalaman unik yang penuh momen inspiratif serta kenangan yang akan bertahan seumur hidup. Rasakan suasana istimewa yang memadukan manfaat, kebahagiaan, dan hubungan yang bermakna.",
  },
  buyTicketsCta: "Beli Tiket",
};

const zh: EventsCopy = {
  title: "Zefaaf 活动",
  stats: {
    customersValue: "34,484k",
    customersLabel: "满意客户",
    ratingValue: "4.8/5",
    ratingLabel: "评分",
    avatarAlt: "一位满意的 Zefaaf 会员",
  },
  banner: {
    headingLine1: "美好时刻",
    headingLine2: "难忘时刻等您来",
    description:
      "欢迎加入我们的伊斯兰婚礼庆典,感受独一无二的体验,收获振奋人心的时刻与相伴一生的美好回忆。共同沉浸在融合益处、喜悦与真挚情感的非凡氛围中。",
  },
  buyTicketsCta: "购买门票",
};

const bn: EventsCopy = {
  title: "জেফাফ ইভেন্টস",
  stats: {
    customersValue: "34,484k",
    customersLabel: "সন্তুষ্ট গ্রাহক",
    ratingValue: "4.8/5",
    ratingLabel: "রেটিং",
    avatarAlt: "একজন সুখী জেফাফ সদস্য",
  },
  banner: {
    headingLine1: "মুহূর্তসমূহ",
    headingLine2: "অবিস্মরণীয় মুহূর্ত আপনার জন্য অপেক্ষা করছে",
    description:
      "ইসলামিক বিবাহ উদযাপনে আমাদের সাথে যোগ দিন এবং অনুপ্রেরণাদায়ক মুহূর্ত ও স্মৃতিতে ভরা এক অনন্য অভিজ্ঞতা উপভোগ করুন, যা সারাজীবন আপনার সাথে থেকে যাবে। উপকারিতা, আনন্দ এবং অর্থবহ সংযোগের সমন্বয়ে গড়া এক ব্যতিক্রমী পরিবেশে অংশ নিন।",
  },
  buyTicketsCta: "টিকিট কিনুন",
};

const bs: EventsCopy = {
  title: "Zefaaf Događaji",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Zadovoljni Klijenti",
    ratingValue: "4.8/5",
    ratingLabel: "Ocjena",
    avatarAlt: "Sretan član Zefaafa",
  },
  banner: {
    headingLine1: "Trenuci",
    headingLine2: "Nezaboravni Trenuci Vas Čekaju",
    description:
      "Pridružite nam se na proslavi islamskog vjenčanja i uživajte u jedinstvenom iskustvu punom nadahnjujućih trenutaka i uspomena koje će ostati s vama cijeli život. Podijelite izuzetnu atmosferu koja spaja korist, radost i smislenu povezanost.",
  },
  buyTicketsCta: "Kupite Ulaznice",
};

const es: EventsCopy = {
  title: "Eventos Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Clientes Satisfechos",
    ratingValue: "4.8/5",
    ratingLabel: "Calificación",
    avatarAlt: "Un miembro feliz de Zefaaf",
  },
  banner: {
    headingLine1: "Momentos",
    headingLine2: "Momentos Inolvidables Te Esperan",
    description:
      "Únete a nosotros en la celebración de la boda islámica y disfruta de una experiencia única llena de momentos inspiradores y recuerdos que permanecerán contigo toda la vida. Comparte una atmósfera excepcional que combina beneficio, alegría y conexión significativa.",
  },
  buyTicketsCta: "Comprar Entradas",
};

const fa: EventsCopy = {
  title: "رویدادهای زفاف",
  stats: {
    customersValue: "34,484k",
    customersLabel: "مشتریان راضی",
    ratingValue: "4.8/5",
    ratingLabel: "امتیاز",
    avatarAlt: "یکی از اعضای خوشحال زفاف",
  },
  banner: {
    headingLine1: "لحظه‌ها",
    headingLine2: "لحظه‌های فراموش‌نشدنی در انتظار شماست",
    description:
      "به ما در جشن عروسی اسلامی بپیوندید و تجربه‌ای منحصربه‌فرد سرشار از لحظات الهام‌بخش و خاطراتی که تا پایان عمر همراهتان می‌مانند را تجربه کنید. در فضایی استثنایی که سود، شادی و پیوندی معنادار را در کنار هم می‌آورد، سهیم شوید.",
  },
  buyTicketsCta: "خرید بلیت",
};

const pt: EventsCopy = {
  title: "Eventos Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Clientes Satisfeitos",
    ratingValue: "4.8/5",
    ratingLabel: "Avaliação",
    avatarAlt: "Um membro feliz da Zefaaf",
  },
  banner: {
    headingLine1: "Momentos",
    headingLine2: "Momentos Inesquecíveis Esperam por Você",
    description:
      "Junte-se a nós na celebração do casamento islâmico e desfrute de uma experiência única repleta de momentos inspiradores e memórias que ficarão com você para toda a vida. Compartilhe uma atmosfera excepcional que une benefício, alegria e conexão significativa.",
  },
  buyTicketsCta: "Comprar Ingressos",
};

const ja: EventsCopy = {
  title: "Zefaaf イベント",
  stats: {
    customersValue: "34,484k",
    customersLabel: "満足したお客様",
    ratingValue: "4.8/5",
    ratingLabel: "評価",
    avatarAlt: "満足しているZefaafメンバー",
  },
  banner: {
    headingLine1: "特別なひととき",
    headingLine2: "忘れられないひとときがあなたを待っています",
    description:
      "イスラム式ウェディングの祝典にぜひご参加ください。心に残る感動的な瞬間と、一生の思い出になる特別な体験をお楽しみいただけます。恩恵、喜び、そして心の通うつながりが一つになった特別な雰囲気を共に分かち合いましょう。",
  },
  buyTicketsCta: "チケットを購入",
};

const ko: EventsCopy = {
  title: "Zefaaf 이벤트",
  stats: {
    customersValue: "34,484k",
    customersLabel: "만족한 고객",
    ratingValue: "4.8/5",
    ratingLabel: "평점",
    avatarAlt: "행복한 Zefaaf 회원",
  },
  banner: {
    headingLine1: "순간들",
    headingLine2: "잊지 못할 순간이 당신을 기다립니다",
    description:
      "이슬람 결혼 축하 행사에 함께하여 영감을 주는 순간들과 평생 간직할 추억으로 가득한 특별한 경험을 즐겨보세요. 유익함과 기쁨, 그리고 진정한 인연이 어우러진 특별한 분위기를 함께 나누세요.",
  },
  buyTicketsCta: "티켓 구매",
};

const it: EventsCopy = {
  title: "Eventi Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Clienti Soddisfatti",
    ratingValue: "4.8/5",
    ratingLabel: "Valutazione",
    avatarAlt: "Un membro felice di Zefaaf",
  },
  banner: {
    headingLine1: "Momenti",
    headingLine2: "Momenti Indimenticabili Ti Aspettano",
    description:
      "Unisciti a noi per la celebrazione del matrimonio islamico e vivi un'esperienza unica ricca di momenti ispiranti e ricordi che resteranno con te per tutta la vita. Condividi un'atmosfera eccezionale che unisce beneficio, gioia e connessione autentica.",
  },
  buyTicketsCta: "Acquista Biglietti",
};

const ur: EventsCopy = {
  title: "زفاف تقریبات",
  stats: {
    customersValue: "34,484k",
    customersLabel: "مطمئن گاہک",
    ratingValue: "4.8/5",
    ratingLabel: "درجہ بندی",
    avatarAlt: "زفاف کا ایک خوش رکن",
  },
  banner: {
    headingLine1: "لمحات",
    headingLine2: "ناقابلِ فراموش لمحات آپ کے منتظر ہیں",
    description:
      "اسلامی شادی کی تقریب میں ہمارے ساتھ شامل ہوں اور ایک منفرد تجربے سے لطف اندوز ہوں جو دلچسپ لمحات اور یادوں سے بھرپور ہے جو زندگی بھر آپ کے ساتھ رہیں گی۔ ایک غیر معمولی ماحول میں شریک ہوں جو فائدہ، خوشی اور بامعنی تعلق کو یکجا کرتا ہے۔",
  },
  buyTicketsCta: "ٹکٹ خریدیں",
};

const ta: EventsCopy = {
  title: "ஜெஃபாஃப் நிகழ்வுகள்",
  stats: {
    customersValue: "34,484k",
    customersLabel: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    ratingValue: "4.8/5",
    ratingLabel: "மதிப்பீடு",
    avatarAlt: "மகிழ்ச்சியான ஜெஃபாஃப் உறுப்பினர்",
  },
  banner: {
    headingLine1: "தருணங்கள்",
    headingLine2: "மறக்க முடியாத தருணங்கள் உங்களுக்காக காத்திருக்கின்றன",
    description:
      "இஸ்லாமிய திருமண கொண்டாட்டத்தில் எங்களுடன் இணைந்து, வாழ்நாள் முழுவதும் உங்களுடன் நிலைத்திருக்கும் உத்வேகமூட்டும் தருணங்கள் மற்றும் நினைவுகள் நிறைந்த தனித்துவமான அனுபவத்தை அனுபவியுங்கள். பயன், மகிழ்ச்சி மற்றும் அர்த்தமுள்ள தொடர்பை இணைக்கும் விதிவிலக்கான சூழலைப் பகிர்ந்து கொள்ளுங்கள்.",
  },
  buyTicketsCta: "டிக்கெட் வாங்கவும்",
};

const am: EventsCopy = {
  title: "የዘፋአፍ ዝግጅቶች",
  stats: {
    customersValue: "34,484k",
    customersLabel: "ደስተኛ ደንበኞች",
    ratingValue: "4.8/5",
    ratingLabel: "ደረጃ",
    avatarAlt: "ደስተኛ የዘፋአፍ አባል",
  },
  banner: {
    headingLine1: "አፍታዎች",
    headingLine2: "የማይረሱ አፍታዎች ይጠብቁዎታል",
    description:
      "በእስላማዊ ሠርግ በዓል ላይ ከእኛ ጋር ይቀላቀሉ እና ህይወት ዘመንዎን ሙሉ አብረውዎት በሚቆዩ አነሳሽ አፍታዎችና ትዝታዎች የተሞላ ልዩ ተሞክሮ ይደሰቱ። ጥቅምን፣ ደስታን እና ትርጉም ያለው ትስስርን በሚያዋህድ ልዩ ድባብ ውስጥ ይካፈሉ።",
  },
  buyTicketsCta: "ትኬት ይግዙ",
};

const sv: EventsCopy = {
  title: "Zefaaf Evenemang",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Nöjda Kunder",
    ratingValue: "4.8/5",
    ratingLabel: "Betyg",
    avatarAlt: "En glad Zefaaf-medlem",
  },
  banner: {
    headingLine1: "Ögonblick",
    headingLine2: "Oförglömliga Ögonblick Väntar Dig",
    description:
      "Följ med oss på den islamiska bröllopsfirandet och njut av en unik upplevelse fylld av inspirerande ögonblick och minnen som stannar hos dig hela livet. Dela en exceptionell stämning som förenar nytta, glädje och meningsfull gemenskap.",
  },
  buyTicketsCta: "Köp Biljetter",
};

const da: EventsCopy = {
  title: "Zefaaf Begivenheder",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Tilfredse Kunder",
    ratingValue: "4.8/5",
    ratingLabel: "Bedømmelse",
    avatarAlt: "Et glad Zefaaf-medlem",
  },
  banner: {
    headingLine1: "Øjeblikke",
    headingLine2: "Uforglemmelige Øjeblikke Venter Dig",
    description:
      "Vær med til den islamiske bryllupsfest og oplev en unik oplevelse fyldt med inspirerende øjeblikke og minder, der bliver hos dig hele livet. Del en exceptionel stemning, der forener gavn, glæde og meningsfuld forbindelse.",
  },
  buyTicketsCta: "Køb Billetter",
};

const sq: EventsCopy = {
  title: "Ngjarjet Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Klientë të Kënaqur",
    ratingValue: "4.8/5",
    ratingLabel: "Vlerësimi",
    avatarAlt: "Një anëtar i lumtur i Zefaaf",
  },
  banner: {
    headingLine1: "Momente",
    headingLine2: "Momente të Paharrueshme Ju Presin",
    description:
      "Bashkojuni në festimin e dasmës islame dhe shijoni një përvojë unike plot momente frymëzuese dhe kujtime që do t'ju shoqërojnë gjithë jetën. Ndani një atmosferë të jashtëzakonshme që bashkon dobinë, gëzimin dhe lidhjen kuptimplote.",
  },
  buyTicketsCta: "Blej Bileta",
};

const uz: EventsCopy = {
  title: "Zefaaf Tadbirlari",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Mamnun Mijozlar",
    ratingValue: "4.8/5",
    ratingLabel: "Reyting",
    avatarAlt: "Zefaafning baxtli a'zosi",
  },
  banner: {
    headingLine1: "Onlar",
    headingLine2: "Unutilmas Onlar Sizni Kutmoqda",
    description:
      "Islomiy nikoh to'yi tantanasida biz bilan birga bo'ling va umr bo'yi yodingizda qoladigan ilhomlantiruvchi lahzalar va xotiralarga to'la noyob tajribadan bahramand bo'ling. Foyda, quvonch va ma'noli aloqani birlashtiruvchi ajoyib muhitga sherik bo'ling.",
  },
  buyTicketsCta: "Chipta Sotib Oling",
};

const az: EventsCopy = {
  title: "Zefaaf Tədbirləri",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Məmnun Müştərilər",
    ratingValue: "4.8/5",
    ratingLabel: "Reytinq",
    avatarAlt: "Xoşbəxt bir Zefaaf üzvü",
  },
  banner: {
    headingLine1: "Anlar",
    headingLine2: "Unudulmaz Anlar Sizi Gözləyir",
    description:
      "İslam toy mərasimimizə qoşulun və ömür boyu yadınızda qalacaq ilhamverici anlar və xatirələrlə dolu unikal təcrübədən zövq alın. Fayda, sevinc və mənalı əlaqəni birləşdirən müstəsna atmosferi bölüşün.",
  },
  buyTicketsCta: "Bilet Alın",
};

const fil: EventsCopy = {
  title: "Mga Kaganapan sa Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Mga Nasisiyahang Kustomer",
    ratingValue: "4.8/5",
    ratingLabel: "Rating",
    avatarAlt: "Isang masayang miyembro ng Zefaaf",
  },
  banner: {
    headingLine1: "Mga Sandali",
    headingLine2: "Hindi Malilimutang Mga Sandali ang Naghihintay sa Iyo",
    description:
      "Sumama sa amin sa pagdiriwang ng Islamikong kasal at masiyahan sa natatanging karanasang puno ng mga nakakaantig na sandali at alaala na mananatili sa iyo habambuhay. Makibahagi sa isang natatanging kapaligiran na pinagsasama ang kapakinabangan, kagalakan, at makabuluhang koneksyon.",
  },
  buyTicketsCta: "Bumili ng Tiket",
};

const hi: EventsCopy = {
  title: "ज़ेफ़ाफ़ इवेंट्स",
  stats: {
    customersValue: "34,484k",
    customersLabel: "संतुष्ट ग्राहक",
    ratingValue: "4.8/5",
    ratingLabel: "रेटिंग",
    avatarAlt: "एक खुश ज़ेफ़ाफ़ सदस्य",
  },
  banner: {
    headingLine1: "पल",
    headingLine2: "अविस्मरणीय पल आपका इंतज़ार कर रहे हैं",
    description:
      "इस्लामी विवाह समारोह में हमारे साथ जुड़ें और प्रेरणादायक पलों और यादों से भरे एक अनोखे अनुभव का आनंद लें, जो जीवन भर आपके साथ रहेंगी। एक असाधारण माहौल का हिस्सा बनें जो लाभ, खुशी और सार्थक जुड़ाव को एक साथ लाता है।",
  },
  buyTicketsCta: "टिकट खरीदें",
};

const kk: EventsCopy = {
  title: "Zefaaf Іс-шаралары",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Риза Клиенттер",
    ratingValue: "4.8/5",
    ratingLabel: "Рейтинг",
    avatarAlt: "Zefaaf-тың бақытты мүшесі",
  },
  banner: {
    headingLine1: "Сәттер",
    headingLine2: "Ұмытылмас Сәттер Сізді Күтуде",
    description:
      "Исламдық үйлену тойы мерекесіне бізбен бірге қосылыңыз және өмір бойы есіңізде қалатын шабыттандыратын сәттер мен естеліктерге толы бірегей тәжірибені сезініңіз. Пайданы, қуанышты және мәнді байланысты біріктіретін ерекше атмосфераға ортақтасыңыз.",
  },
  buyTicketsCta: "Билет Сатып Алу",
};

const ms: EventsCopy = {
  title: "Acara Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Pelanggan Berpuas Hati",
    ratingValue: "4.8/5",
    ratingLabel: "Penilaian",
    avatarAlt: "Seorang ahli Zefaaf yang gembira",
  },
  banner: {
    headingLine1: "Detik",
    headingLine2: "Detik Yang Tidak Dapat Dilupakan Menanti Anda",
    description:
      "Sertai kami dalam sambutan perkahwinan Islam dan nikmati pengalaman unik yang penuh dengan detik yang memberi inspirasi serta kenangan yang akan kekal bersama anda seumur hidup. Kongsi suasana istimewa yang menggabungkan manfaat, kegembiraan, dan hubungan yang bermakna.",
  },
  buyTicketsCta: "Beli Tiket",
};

const pa: EventsCopy = {
  title: "ਜ਼ੇਫ਼ਾਫ਼ ਸਮਾਗਮ",
  stats: {
    customersValue: "34,484k",
    customersLabel: "ਸੰਤੁਸ਼ਟ ਗਾਹਕ",
    ratingValue: "4.8/5",
    ratingLabel: "ਰੇਟਿੰਗ",
    avatarAlt: "ਇੱਕ ਖੁਸ਼ ਜ਼ੇਫ਼ਾਫ਼ ਮੈਂਬਰ",
  },
  banner: {
    headingLine1: "ਪਲ",
    headingLine2: "ਅਭੁੱਲ ਪਲ ਤੁਹਾਡੀ ਉਡੀਕ ਕਰ ਰਹੇ ਹਨ",
    description:
      "ਇਸਲਾਮੀ ਵਿਆਹ ਦੇ ਜਸ਼ਨ ਵਿੱਚ ਸਾਡੇ ਨਾਲ ਸ਼ਾਮਲ ਹੋਵੋ ਅਤੇ ਪ੍ਰੇਰਣਾਦਾਇਕ ਪਲਾਂ ਅਤੇ ਯਾਦਾਂ ਨਾਲ ਭਰਪੂਰ ਇੱਕ ਵਿਲੱਖਣ ਅਨੁਭਵ ਦਾ ਆਨੰਦ ਮਾਣੋ ਜੋ ਜੀਵਨ ਭਰ ਤੁਹਾਡੇ ਨਾਲ ਰਹਿਣਗੀਆਂ। ਲਾਭ, ਖੁਸ਼ੀ ਅਤੇ ਅਰਥਪੂਰਨ ਸੰਪਰਕ ਨੂੰ ਜੋੜਨ ਵਾਲੇ ਇੱਕ ਬੇਮਿਸਾਲ ਮਾਹੌਲ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ।",
  },
  buyTicketsCta: "ਟਿਕਟ ਖਰੀਦੋ",
};

const ps: EventsCopy = {
  title: "د زفاف پیښې",
  stats: {
    customersValue: "34,484k",
    customersLabel: "خوښ پیرودونکي",
    ratingValue: "4.8/5",
    ratingLabel: "درجه‌بندي",
    avatarAlt: "د زفاف یو خوشحاله غړی",
  },
  banner: {
    headingLine1: "شېبې",
    headingLine2: "هېرېدونکې شېبې ستاسو په تمه دي",
    description:
      "زموږ سره د اسلامي واده جشن کې یوځای شئ او د الهام‌بښونکو شېبو او یادونو څخه ډکه یوه ځانګړې تجربه تجربه کړئ چې ټول عمر به ستاسو سره پاتې شي. په هغه غیر معمولي فضا کې ونډه واخلئ چې ګټه، خوښي او مانا لرونکی اړیکه سره یوځای کوي.",
  },
  buyTicketsCta: "ټکټ واخلئ",
};

const sw: EventsCopy = {
  title: "Matukio ya Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "Wateja Wenye Furaha",
    ratingValue: "4.8/5",
    ratingLabel: "Ukadiriaji",
    avatarAlt: "Mwanachama mwenye furaha wa Zefaaf",
  },
  banner: {
    headingLine1: "Nyakati",
    headingLine2: "Nyakati Zisizosahaulika Zinakusubiri",
    description:
      "Jiunge nasi katika sherehe ya harusi ya Kiislamu na ufurahie uzoefu wa kipekee uliojaa nyakati za kutia moyo na kumbukumbu zitakazobaki nawe maisha yako yote. Shiriki katika mazingira ya kipekee yanayounganisha manufaa, furaha, na uhusiano wenye maana.",
  },
  buyTicketsCta: "Nunua Tiketi",
};

const th: EventsCopy = {
  title: "กิจกรรม Zefaaf",
  stats: {
    customersValue: "34,484k",
    customersLabel: "ลูกค้าที่พึงพอใจ",
    ratingValue: "4.8/5",
    ratingLabel: "คะแนน",
    avatarAlt: "สมาชิก Zefaaf ที่มีความสุข",
  },
  banner: {
    headingLine1: "ช่วงเวลา",
    headingLine2: "ช่วงเวลาที่ไม่มีวันลืมกำลังรอคุณอยู่",
    description:
      "ร่วมงานเฉลิมฉลองงานแต่งงานแบบอิสลามไปกับเรา และเพลิดเพลินกับประสบการณ์อันเป็นเอกลักษณ์ที่เต็มไปด้วยช่วงเวลาสร้างแรงบันดาลใจและความทรงจำที่จะอยู่กับคุณไปตลอดชีวิต ร่วมสัมผัสบรรยากาศพิเศษที่ผสมผสานประโยชน์ ความสุข และความผูกพันที่มีความหมายเข้าไว้ด้วยกัน",
  },
  buyTicketsCta: "ซื้อตั๋ว",
};

const copyByLocale: Record<string, EventsCopy> = {
  ar, en, nl, fr, de, tr, ru, id, zh, bn, bs, es, fa, pt, ja, ko, it, ur, ta, am, sv, da, sq, uz, az, fil, hi, kk, ms, pa, ps, sw, th,
};

export function getEventsCopy(locale: string): EventsCopy {
  return copyByLocale[locale] ?? en;
}
