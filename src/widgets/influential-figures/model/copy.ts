import type { Locale } from "@/shared/i18n";

export type InfluentialFiguresCopy = {
  title: string;
  description: string;
  followersLabel: string;
  error: string;
};

const copy: Record<Locale, InfluentialFiguresCopy> = {
  en: {
    title: "With an Elite Group of\nthe Most Influential & Inspiring\nFigures",
    description:
      "Don't miss the opportunity to participate in an event that brings together inspiration, knowledge, and enriching experiences.",
    followersLabel: "followers",
    error: "We couldn't load the influential figures right now. Please try again later.",
  },
  ar: {
    title: "مع نخبة من أكثر الشخصيات\nتأثيرًا وإلهامًا",
    description:
      "لا تفوّت فرصة المشاركة في فعالية تجمع بين الإلهام والمعرفة والتجارب الثرية.",
    followersLabel: "متابع",
    error: "تعذّر تحميل الشخصيات المؤثرة حاليًا. يرجى المحاولة لاحقًا.",
  },
  nl: {
    title: "Met een Selecte Groep van\nde Meest Invloedrijke & Inspirerende\nFiguren",
    description:
      "Mis de kans niet om deel te nemen aan een evenement dat inspiratie, kennis en verrijkende ervaringen samenbrengt.",
    followersLabel: "volgers",
    error: "We konden de invloedrijke figuren nu niet laden. Probeer het later opnieuw.",
  },
  fr: {
    title: "Avec un Groupe d'Élite\ndes Personnalités les Plus Influentes\net Inspirantes",
    description:
      "Ne manquez pas l'occasion de participer à un événement qui réunit inspiration, connaissance et expériences enrichissantes.",
    followersLabel: "abonnés",
    error: "Nous n'avons pas pu charger les personnalités influentes pour le moment. Veuillez réessayer plus tard.",
  },
  de: {
    title: "Mit einer Elitegruppe der\neinflussreichsten & inspirierendsten\nPersönlichkeiten",
    description:
      "Verpassen Sie nicht die Gelegenheit, an einer Veranstaltung teilzunehmen, die Inspiration, Wissen und bereichernde Erfahrungen vereint.",
    followersLabel: "Follower",
    error: "Die einflussreichen Persönlichkeiten konnten derzeit nicht geladen werden. Bitte versuchen Sie es später erneut.",
  },
  tr: {
    title: "En Etkili ve İlham Verici\nİsimlerden Oluşan Seçkin\nBir Grupla",
    description:
      "İlham, bilgi ve zenginleştirici deneyimleri bir araya getiren bir etkinliğe katılma fırsatını kaçırmayın.",
    followersLabel: "takipçi",
    error: "Etkili isimler şu anda yüklenemedi. Lütfen daha sonra tekrar deneyin.",
  },
  ru: {
    title: "С элитной группой самых\nвлиятельных и вдохновляющих\nличностей",
    description:
      "Не упустите возможность принять участие в мероприятии, объединяющем вдохновение, знания и обогащающий опыт.",
    followersLabel: "подписчиков",
    error: "Не удалось загрузить влиятельных личностей. Попробуйте позже.",
  },
  id: {
    title: "Bersama Kelompok Elit\nTokoh Paling Berpengaruh & Inspiratif",
    description:
      "Jangan lewatkan kesempatan untuk berpartisipasi dalam acara yang menggabungkan inspirasi, pengetahuan, dan pengalaman yang memperkaya.",
    followersLabel: "pengikut",
    error: "Tokoh berpengaruh tidak dapat dimuat saat ini. Silakan coba lagi nanti.",
  },
  zh: {
    title: "汇聚最具影响力与\n启发性的精英人物",
    description: "不要错过参加这场汇聚灵感、知识与丰富体验的活动的机会。",
    followersLabel: "关注者",
    error: "暂时无法加载知名人物,请稍后重试。",
  },
  bn: {
    title: "সবচেয়ে প্রভাবশালী ও\nঅনুপ্রেরণাদায়ী ব্যক্তিত্বদের\nএকটি অভিজাত দলের সাথে",
    description:
      "অনুপ্রেরণা, জ্ঞান এবং সমৃদ্ধ অভিজ্ঞতার সমন্বয়ে একটি অনুষ্ঠানে অংশ নেওয়ার সুযোগ মিস করবেন না।",
    followersLabel: "ফলোয়ার",
    error: "প্রভাবশালী ব্যক্তিদের এখন লোড করা যায়নি। পরে আবার চেষ্টা করুন।",
  },
  bs: {
    title: "Sa elitnom grupom\nnajutjecajnijih i najinspirativnijih\nličnosti",
    description:
      "Ne propustite priliku da učestvujete u događaju koji spaja inspiraciju, znanje i obogaćujuća iskustva.",
    followersLabel: "pratilaca",
    error: "Trenutno nije moguće učitati utjecajne ličnosti. Pokušajte ponovo kasnije.",
  },
  es: {
    title: "Con un Grupo de Élite de\nlas Figuras Más Influyentes\ne Inspiradoras",
    description:
      "No te pierdas la oportunidad de participar en un evento que reúne inspiración, conocimiento y experiencias enriquecedoras.",
    followersLabel: "seguidores",
    error: "No pudimos cargar las figuras influyentes en este momento. Inténtalo de nuevo más tarde.",
  },
  fa: {
    title: "با گروهی از برجسته‌ترین\nو الهام‌بخش‌ترین چهره‌ها",
    description:
      "فرصت شرکت در رویدادی که الهام، دانش و تجربه‌های غنی‌بخش را گرد هم می‌آورد، از دست ندهید.",
    followersLabel: "دنبال‌کننده",
    error: "در حال حاضر امکان بارگذاری چهره‌های تأثیرگذار وجود ندارد. لطفاً بعداً دوباره امتحان کنید.",
  },
  pt: {
    title: "Com um Grupo de Elite das\nFiguras Mais Influentes\ne Inspiradoras",
    description:
      "Não perca a oportunidade de participar em um evento que reúne inspiração, conhecimento e experiências enriquecedoras.",
    followersLabel: "seguidores",
    error: "Não foi possível carregar as figuras influentes no momento. Tente novamente mais tarde.",
  },
  ja: {
    title: "最も影響力があり\nインスピレーションを与える\nエリート層とともに",
    description: "インスピレーション、知識、豊かな経験が一堂に会するイベントへの参加をお見逃しなく。",
    followersLabel: "フォロワー",
    error: "現在、影響力のある人物を読み込めませんでした。しばらくしてからもう一度お試しください。",
  },
  ko: {
    title: "가장 영향력 있고\n영감을 주는 인사들로\n구성된 엘리트 그룹과 함께",
    description: "영감, 지식, 풍부한 경험이 어우러지는 행사에 참여할 기회를 놓치지 마세요.",
    followersLabel: "팔로워",
    error: "지금은 영향력 있는 인물을 불러올 수 없습니다. 나중에 다시 시도해 주세요.",
  },
  it: {
    title: "Con un Gruppo d'Élite\ndelle Figure Più Influenti\ne Ispiratrici",
    description:
      "Non perdere l'occasione di partecipare a un evento che unisce ispirazione, conoscenza ed esperienze arricchenti.",
    followersLabel: "follower",
    error: "Al momento non è stato possibile caricare le figure influenti. Riprova più tardi.",
  },
  ur: {
    title: "سب سے زیادہ بااثر اور\nحوصلہ افزا شخصیات کے\nایک منتخب گروہ کے ساتھ",
    description:
      "ایک ایسی تقریب میں شرکت کا موقع مت گنوائیں جو تحریک، علم اور بھرپور تجربات کو یکجا کرتی ہے۔",
    followersLabel: "فالوورز",
    error: "اس وقت بااثر شخصیات لوڈ نہیں ہو سکیں۔ براہ کرم بعد میں دوبارہ کوشش کریں۔",
  },
  ta: {
    title: "மிகவும் செல்வாக்கு மிக்க\nமற்றும் ஊக்கமளிக்கும்\nநபர்களின் தேர்ந்தெடுக்கப்பட்ட குழுவுடன்",
    description:
      "உத்வேகம், அறிவு மற்றும் செழுமையான அனுபவங்களை ஒன்றிணைக்கும் ஒரு நிகழ்வில் பங்கேற்கும் வாய்ப்பை தவறவிடாதீர்கள்.",
    followersLabel: "பின்தொடர்பவர்கள்",
    error: "செல்வாக்கு மிக்க நபர்களை இப்போது ஏற்ற முடியவில்லை. பின்னர் மீண்டும் முயற்சிக்கவும்.",
  },
  am: {
    title: "በጣም ተፅዕኖ ፈጣሪ እና\nአነሳሽ ከሆኑ ግለሰቦች\nከተውጣጣ ልሂቃን ቡድን ጋር",
    description: "መነሳሳትን፣ እውቀትን እና የበለጸጉ ተሞክሮዎችን የሚያሰባስብ ዝግጅት ላይ የመሳተፍ እድልን አያምልጡ።",
    followersLabel: "ተከታዮች",
    error: "አሁን ተፅዕኖ ፈጣሪ ግለሰቦችን መጫን አልተቻለም። እባክዎ ቆይተው እንደገና ይሞክሩ።",
  },
  sv: {
    title: "Med en Elitgrupp av\nde Mest Inflytelserika &\nInspirerande Personerna",
    description:
      "Missa inte chansen att delta i ett evenemang som förenar inspiration, kunskap och berikande upplevelser.",
    followersLabel: "följare",
    error: "Vi kunde inte läsa in de inflytelserika personerna just nu. Försök igen senare.",
  },
  da: {
    title: "Med en Elitegruppe af\nde Mest Indflydelsesrige &\nInspirerende Personer",
    description:
      "Gå ikke glip af muligheden for at deltage i en begivenhed, der forener inspiration, viden og berigende oplevelser.",
    followersLabel: "følgere",
    error: "Vi kunne ikke indlæse de indflydelsesrige personer lige nu. Prøv igen senere.",
  },
  sq: {
    title: "Me një Grup Elitë të\nFigurave Më Ndikuese &\nFrymëzuese",
    description:
      "Mos e humbisni mundësinë për të marrë pjesë në një event që bashkon frymëzimin, dijen dhe përvoja pasuruese.",
    followersLabel: "ndjekës",
    error: "Nuk arritëm të ngarkojmë figurat me ndikim tani. Ju lutemi provoni përsëri më vonë.",
  },
  uz: {
    title: "Eng ta'sirchan va\nilhomlantiruvchi shaxslardan\niborat elita guruhi bilan",
    description:
      "Ilhom, bilim va boy tajribalarni birlashtiruvchi tadbirda qatnashish imkoniyatini boy bermang.",
    followersLabel: "obunachi",
    error: "Hozircha ta'sirchan shaxslarni yuklab bo'lmadi. Keyinroq qayta urinib ko'ring.",
  },
  az: {
    title: "Ən nüfuzlu və\nilhamverici şəxsiyyətlərdən\nibarət elit qrupla",
    description:
      "İlham, bilik və zəngin təcrübələri bir araya gətirən tədbirdə iştirak etmək fürsətini qaçırmayın.",
    followersLabel: "izləyici",
    error: "Nüfuzlu şəxsiyyətləri hazırda yükləmək mümkün olmadı. Zəhmət olmasa, sonra yenidən cəhd edin.",
  },
  fil: {
    title: "Kasama ang Piling Grupo ng\nPinaka-Maimpluwensya at\nNakakapukaw na mga Personalidad",
    description:
      "Huwag palampasin ang pagkakataong lumahok sa isang kaganapan na pinagsasama ang inspirasyon, kaalaman, at nagpapayamang karanasan.",
    followersLabel: "tagasubaybay",
    error: "Hindi namin nai-load ang mga maimpluwensyang personalidad ngayon. Pakisubukang muli sa ibang pagkakataon.",
  },
  hi: {
    title: "सबसे प्रभावशाली और\nप्रेरणादायक हस्तियों के\nएक विशिष्ट समूह के साथ",
    description:
      "एक ऐसे आयोजन में भाग लेने का अवसर न चूकें जो प्रेरणा, ज्ञान और समृद्ध अनुभवों को एक साथ लाता है।",
    followersLabel: "फॉलोअर्स",
    error: "अभी प्रभावशाली हस्तियों को लोड नहीं किया जा सका। कृपया बाद में पुनः प्रयास करें।",
  },
  kk: {
    title: "Ең ықпалды және\nшабыттандыратын тұлғалардан\nтұратын элиталық топпен",
    description:
      "Шабыт, білім және баға жетпес тәжірибелерді біріктіретін іс-шараға қатысу мүмкіндігін жіберіп алмаңыз.",
    followersLabel: "жазылушы",
    error: "Қазір ықпалды тұлғаларды жүктеу мүмкін болмады. Кейінірек қайталап көріңіз.",
  },
  ms: {
    title: "Bersama Kumpulan Elit\nTokoh Paling Berpengaruh &\nMemberi Inspirasi",
    description:
      "Jangan lepaskan peluang untuk mengambil bahagian dalam acara yang menggabungkan inspirasi, pengetahuan dan pengalaman yang memperkaya.",
    followersLabel: "pengikut",
    error: "Tidak dapat memuatkan tokoh berpengaruh sekarang. Sila cuba lagi kemudian.",
  },
  pa: {
    title: "ਸਭ ਤੋਂ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਅਤੇ\nਪ੍ਰੇਰਣਾਦਾਇਕ ਸ਼ਖਸੀਅਤਾਂ ਦੇ\nਇੱਕ ਚੋਣਵੇਂ ਸਮੂਹ ਨਾਲ",
    description:
      "ਇੱਕ ਅਜਿਹੇ ਸਮਾਗਮ ਵਿੱਚ ਹਿੱਸਾ ਲੈਣ ਦਾ ਮੌਕਾ ਨਾ ਗੁਆਓ ਜੋ ਪ੍ਰੇਰਣਾ, ਗਿਆਨ ਅਤੇ ਭਰਪੂਰ ਤਜ਼ਰਬਿਆਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।",
    followersLabel: "ਫਾਲੋਅਰਜ਼",
    error: "ਹੁਣ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਸ਼ਖਸੀਅਤਾਂ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕੀਆਂ। ਕਿਰਪਾ ਕਰਕੇ ਬਾਅਦ ਵਿੱਚ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
  },
  ps: {
    title: "د ډیرو اغیزناکو او\nالهام بښونکو څهرو\nله يوې غوره ډلې سره",
    description:
      "د هغه غونډې په ګډون کې د برخې اخیستو فرصت مه له لاسه ورکوئ چې الهام، پوهه او بډایه تجربې سره یوځای کوي.",
    followersLabel: "پيروان",
    error: "اوس مهال بااغیزه څهرې نه شي راوړل کیدای. مهرباني وکړئ وروسته بیا هڅه وکړئ.",
  },
  sw: {
    title: "Pamoja na Kundi Bora la\nWatu Wenye Ushawishi Mkubwa\nna Wenye Kuhamasisha",
    description:
      "Usikose fursa ya kushiriki katika tukio linaloleta pamoja msukumo, maarifa, na uzoefu wa kuboresha.",
    followersLabel: "wafuasi",
    error: "Hatukuweza kupakia watu wenye ushawishi kwa sasa. Tafadhali jaribu tena baadaye.",
  },
  th: {
    title: "ร่วมกับกลุ่มบุคคลชั้นนำ\nที่ทรงอิทธิพลและสร้างแรงบันดาลใจ\nมากที่สุด",
    description: "อย่าพลาดโอกาสเข้าร่วมงานที่รวบรวมแรงบันดาลใจ ความรู้ และประสบการณ์อันล้ำค่าไว้ด้วยกัน",
    followersLabel: "ผู้ติดตาม",
    error: "ไม่สามารถโหลดบุคคลผู้ทรงอิทธิพลได้ในขณะนี้ กรุณาลองใหม่อีกครั้งในภายหลัง",
  },
};

export function getInfluentialFiguresCopy(locale: string): InfluentialFiguresCopy {
  return copy[locale as Locale] ?? copy.en;
}
