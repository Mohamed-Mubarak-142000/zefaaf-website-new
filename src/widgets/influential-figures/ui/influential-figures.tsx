import { getLocale } from "next-intl/server";

import type { Locale } from "@/shared/i18n";

import { InfluentialFiguresSlider } from "./influential-figures-slider";

type InfluentialFiguresCopy = {
  title: string;
  description: string;
  name: string;
  followers: string;
  secondName: string;
  secondFollowers: string;
};

const copy: Record<Locale, InfluentialFiguresCopy> = {
  en: {
    title: "With an Elite Group of\nthe Most Influential & Inspiring\nFigures",
    description:
      "Don't miss the opportunity to participate in an event that brings together inspiration, knowledge, and enriching experiences.",
    name: "Mustafa Hassan",
    followers: "4.5m followers",
    secondName: "Hala Samir",
    secondFollowers: "4.5m followers",
  },
  ar: {
    title: "مع نخبة من أكثر الشخصيات\nتأثيرًا وإلهامًا",
    description:
      "لا تفوّت فرصة المشاركة في فعالية تجمع بين الإلهام والمعرفة والتجارب الثرية.",
    name: "مصطفى حسن",
    followers: "٤٫٥ مليون متابع",
    secondName: "هالة سمير",
    secondFollowers: "٤٫٥ مليون متابع",
  },
  nl: {
    title: "Met een Selecte Groep van\nde Meest Invloedrijke & Inspirerende\nFiguren",
    description:
      "Mis de kans niet om deel te nemen aan een evenement dat inspiratie, kennis en verrijkende ervaringen samenbrengt.",
    name: "Mustafa Hassan",
    followers: "4,5m volgers",
    secondName: "Hala Samir",
    secondFollowers: "4,5m volgers",
  },
  fr: {
    title: "Avec un Groupe d'Élite\ndes Personnalités les Plus Influentes\net Inspirantes",
    description:
      "Ne manquez pas l'occasion de participer à un événement qui réunit inspiration, connaissance et expériences enrichissantes.",
    name: "Mustafa Hassan",
    followers: "4,5m abonnés",
    secondName: "Hala Samir",
    secondFollowers: "4,5m abonnés",
  },
  de: {
    title: "Mit einer Elitegruppe der\neinflussreichsten & inspirierendsten\nPersönlichkeiten",
    description:
      "Verpassen Sie nicht die Gelegenheit, an einer Veranstaltung teilzunehmen, die Inspiration, Wissen und bereichernde Erfahrungen vereint.",
    name: "Mustafa Hassan",
    followers: "4,5 Mio. Follower",
    secondName: "Hala Samir",
    secondFollowers: "4,5 Mio. Follower",
  },
  tr: {
    title: "En Etkili ve İlham Verici\nİsimlerden Oluşan Seçkin\nBir Grupla",
    description:
      "İlham, bilgi ve zenginleştirici deneyimleri bir araya getiren bir etkinliğe katılma fırsatını kaçırmayın.",
    name: "Mustafa Hassan",
    followers: "4,5m takipçi",
    secondName: "Hala Samir",
    secondFollowers: "4,5m takipçi",
  },
  ru: {
    title: "С элитной группой самых\nвлиятельных и вдохновляющих\nличностей",
    description:
      "Не упустите возможность принять участие в мероприятии, объединяющем вдохновение, знания и обогащающий опыт.",
    name: "Мустафа Хасан",
    followers: "4,5 млн подписчиков",
    secondName: "Хала Самир",
    secondFollowers: "4,5 млн подписчиков",
  },
  id: {
    title: "Bersama Kelompok Elit\nTokoh Paling Berpengaruh & Inspiratif",
    description:
      "Jangan lewatkan kesempatan untuk berpartisipasi dalam acara yang menggabungkan inspirasi, pengetahuan, dan pengalaman yang memperkaya.",
    name: "Mustafa Hassan",
    followers: "4,5jt pengikut",
    secondName: "Hala Samir",
    secondFollowers: "4,5jt pengikut",
  },
  zh: {
    title: "汇聚最具影响力与\n启发性的精英人物",
    description: "不要错过参加这场汇聚灵感、知识与丰富体验的活动的机会。",
    name: "穆斯塔法·哈桑",
    followers: "450万关注者",
    secondName: "哈拉·萨米尔",
    secondFollowers: "450万关注者",
  },
  bn: {
    title: "সবচেয়ে প্রভাবশালী ও\nঅনুপ্রেরণাদায়ী ব্যক্তিত্বদের\nএকটি অভিজাত দলের সাথে",
    description:
      "অনুপ্রেরণা, জ্ঞান এবং সমৃদ্ধ অভিজ্ঞতার সমন্বয়ে একটি অনুষ্ঠানে অংশ নেওয়ার সুযোগ মিস করবেন না।",
    name: "মুস্তফা হাসান",
    followers: "৪.৫ মিলিয়ন ফলোয়ার",
    secondName: "হালা সামির",
    secondFollowers: "৪.৫ মিলিয়ন ফলোয়ার",
  },
  bs: {
    title: "Sa elitnom grupom\nnajutjecajnijih i najinspirativnijih\nličnosti",
    description:
      "Ne propustite priliku da učestvujete u događaju koji spaja inspiraciju, znanje i obogaćujuća iskustva.",
    name: "Mustafa Hassan",
    followers: "4,5m pratilaca",
    secondName: "Hala Samir",
    secondFollowers: "4,5m pratilaca",
  },
  es: {
    title: "Con un Grupo de Élite de\nlas Figuras Más Influyentes\ne Inspiradoras",
    description:
      "No te pierdas la oportunidad de participar en un evento que reúne inspiración, conocimiento y experiencias enriquecedoras.",
    name: "Mustafa Hassan",
    followers: "4,5m seguidores",
    secondName: "Hala Samir",
    secondFollowers: "4,5m seguidores",
  },
  fa: {
    title: "با گروهی از برجسته‌ترین\nو الهام‌بخش‌ترین چهره‌ها",
    description:
      "فرصت شرکت در رویدادی که الهام، دانش و تجربه‌های غنی‌بخش را گرد هم می‌آورد، از دست ندهید.",
    name: "مصطفی حسن",
    followers: "4.5 میلیون دنبال‌کننده",
    secondName: "هاله سمیر",
    secondFollowers: "4.5 میلیون دنبال‌کننده",
  },
  pt: {
    title: "Com um Grupo de Elite das\nFiguras Mais Influentes\ne Inspiradoras",
    description:
      "Não perca a oportunidade de participar em um evento que reúne inspiração, conhecimento e experiências enriquecedoras.",
    name: "Mustafa Hassan",
    followers: "4,5m seguidores",
    secondName: "Hala Samir",
    secondFollowers: "4,5m seguidores",
  },
  ja: {
    title: "最も影響力があり\nインスピレーションを与える\nエリート層とともに",
    description: "インスピレーション、知識、豊かな経験が一堂に会するイベントへの参加をお見逃しなく。",
    name: "ムスタファ・ハサン",
    followers: "フォロワー450万人",
    secondName: "ハラ・サミル",
    secondFollowers: "フォロワー450万人",
  },
  ko: {
    title: "가장 영향력 있고\n영감을 주는 인사들로\n구성된 엘리트 그룹과 함께",
    description: "영감, 지식, 풍부한 경험이 어우러지는 행사에 참여할 기회를 놓치지 마세요.",
    name: "무스타파 하산",
    followers: "팔로워 450만 명",
    secondName: "할라 사미르",
    secondFollowers: "팔로워 450만 명",
  },
  it: {
    title: "Con un Gruppo d'Élite\ndelle Figure Più Influenti\ne Ispiratrici",
    description:
      "Non perdere l'occasione di partecipare a un evento che unisce ispirazione, conoscenza ed esperienze arricchenti.",
    name: "Mustafa Hassan",
    followers: "4,5m follower",
    secondName: "Hala Samir",
    secondFollowers: "4,5m follower",
  },
  ur: {
    title: "سب سے زیادہ بااثر اور\nحوصلہ افزا شخصیات کے\nایک منتخب گروہ کے ساتھ",
    description:
      "ایک ایسی تقریب میں شرکت کا موقع مت گنوائیں جو تحریک، علم اور بھرپور تجربات کو یکجا کرتی ہے۔",
    name: "مصطفیٰ حسن",
    followers: "4.5 ملین فالوورز",
    secondName: "ہالہ سمیر",
    secondFollowers: "4.5 ملین فالوورز",
  },
  ta: {
    title: "மிகவும் செல்வாக்கு மிக்க\nமற்றும் ஊக்கமளிக்கும்\nநபர்களின் தேர்ந்தெடுக்கப்பட்ட குழுவுடன்",
    description:
      "உத்வேகம், அறிவு மற்றும் செழுமையான அனுபவங்களை ஒன்றிணைக்கும் ஒரு நிகழ்வில் பங்கேற்கும் வாய்ப்பை தவறவிடாதீர்கள்.",
    name: "முஸ்தபா ஹசன்",
    followers: "4.5மி பின்தொடர்பவர்கள்",
    secondName: "ஹலா சமீர்",
    secondFollowers: "4.5மி பின்தொடர்பவர்கள்",
  },
  am: {
    title: "በጣም ተፅዕኖ ፈጣሪ እና\nአነሳሽ ከሆኑ ግለሰቦች\nከተውጣጣ ልሂቃን ቡድን ጋር",
    description: "መነሳሳትን፣ እውቀትን እና የበለጸጉ ተሞክሮዎችን የሚያሰባስብ ዝግጅት ላይ የመሳተፍ እድልን አያምልጡ።",
    name: "ሙስጠፋ ሀሰን",
    followers: "4.5ሚ ተከታዮች",
    secondName: "ሃላ ሰሚር",
    secondFollowers: "4.5ሚ ተከታዮች",
  },
  sv: {
    title: "Med en Elitgrupp av\nde Mest Inflytelserika &\nInspirerande Personerna",
    description:
      "Missa inte chansen att delta i ett evenemang som förenar inspiration, kunskap och berikande upplevelser.",
    name: "Mustafa Hassan",
    followers: "4,5m följare",
    secondName: "Hala Samir",
    secondFollowers: "4,5m följare",
  },
  da: {
    title: "Med en Elitegruppe af\nde Mest Indflydelsesrige &\nInspirerende Personer",
    description:
      "Gå ikke glip af muligheden for at deltage i en begivenhed, der forener inspiration, viden og berigende oplevelser.",
    name: "Mustafa Hassan",
    followers: "4,5m følgere",
    secondName: "Hala Samir",
    secondFollowers: "4,5m følgere",
  },
  sq: {
    title: "Me një Grup Elitë të\nFigurave Më Ndikuese &\nFrymëzuese",
    description:
      "Mos e humbisni mundësinë për të marrë pjesë në një event që bashkon frymëzimin, dijen dhe përvoja pasuruese.",
    name: "Mustafa Hassan",
    followers: "4.5m ndjekës",
    secondName: "Hala Samir",
    secondFollowers: "4.5m ndjekës",
  },
  uz: {
    title: "Eng ta'sirchan va\nilhomlantiruvchi shaxslardan\niborat elita guruhi bilan",
    description:
      "Ilhom, bilim va boy tajribalarni birlashtiruvchi tadbirda qatnashish imkoniyatini boy bermang.",
    name: "Mustafa Hasan",
    followers: "4,5 mln obunachi",
    secondName: "Hala Samir",
    secondFollowers: "4,5 mln obunachi",
  },
  az: {
    title: "Ən nüfuzlu və\nilhamverici şəxsiyyətlərdən\nibarət elit qrupla",
    description:
      "İlham, bilik və zəngin təcrübələri bir araya gətirən tədbirdə iştirak etmək fürsətini qaçırmayın.",
    name: "Mustafa Hasan",
    followers: "4,5m izləyici",
    secondName: "Hala Samir",
    secondFollowers: "4,5m izləyici",
  },
  fil: {
    title: "Kasama ang Piling Grupo ng\nPinaka-Maimpluwensya at\nNakakapukaw na mga Personalidad",
    description:
      "Huwag palampasin ang pagkakataong lumahok sa isang kaganapan na pinagsasama ang inspirasyon, kaalaman, at nagpapayamang karanasan.",
    name: "Mustafa Hassan",
    followers: "4.5m tagasubaybay",
    secondName: "Hala Samir",
    secondFollowers: "4.5m tagasubaybay",
  },
  hi: {
    title: "सबसे प्रभावशाली और\nप्रेरणादायक हस्तियों के\nएक विशिष्ट समूह के साथ",
    description:
      "एक ऐसे आयोजन में भाग लेने का अवसर न चूकें जो प्रेरणा, ज्ञान और समृद्ध अनुभवों को एक साथ लाता है।",
    name: "मुस्तफा हसन",
    followers: "4.5 मिलियन फॉलोअर्स",
    secondName: "हाला समीर",
    secondFollowers: "4.5 मिलियन फॉलोअर्स",
  },
  kk: {
    title: "Ең ықпалды және\nшабыттандыратын тұлғалардан\nтұратын элиталық топпен",
    description:
      "Шабыт, білім және баға жетпес тәжірибелерді біріктіретін іс-шараға қатысу мүмкіндігін жіберіп алмаңыз.",
    name: "Мұстафа Хасан",
    followers: "4,5 млн жазылушы",
    secondName: "Хала Самир",
    secondFollowers: "4,5 млн жазылушы",
  },
  ms: {
    title: "Bersama Kumpulan Elit\nTokoh Paling Berpengaruh &\nMemberi Inspirasi",
    description:
      "Jangan lepaskan peluang untuk mengambil bahagian dalam acara yang menggabungkan inspirasi, pengetahuan dan pengalaman yang memperkaya.",
    name: "Mustafa Hassan",
    followers: "4.5j pengikut",
    secondName: "Hala Samir",
    secondFollowers: "4.5j pengikut",
  },
  pa: {
    title: "ਸਭ ਤੋਂ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਅਤੇ\nਪ੍ਰੇਰਣਾਦਾਇਕ ਸ਼ਖਸੀਅਤਾਂ ਦੇ\nਇੱਕ ਚੋਣਵੇਂ ਸਮੂਹ ਨਾਲ",
    description:
      "ਇੱਕ ਅਜਿਹੇ ਸਮਾਗਮ ਵਿੱਚ ਹਿੱਸਾ ਲੈਣ ਦਾ ਮੌਕਾ ਨਾ ਗੁਆਓ ਜੋ ਪ੍ਰੇਰਣਾ, ਗਿਆਨ ਅਤੇ ਭਰਪੂਰ ਤਜ਼ਰਬਿਆਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।",
    name: "ਮੁਸਤਫਾ ਹਸਨ",
    followers: "4.5 ਮਿਲੀਅਨ ਫਾਲੋਅਰਜ਼",
    secondName: "ਹਾਲਾ ਸਮੀਰ",
    secondFollowers: "4.5 ਮਿਲੀਅਨ ਫਾਲੋਅਰਜ਼",
  },
  ps: {
    title: "د ډیرو اغیزناکو او\nالهام بښونکو څهرو\nله يوې غوره ډلې سره",
    description:
      "د هغه غونډې په ګډون کې د برخې اخیستو فرصت مه له لاسه ورکوئ چې الهام، پوهه او بډایه تجربې سره یوځای کوي.",
    name: "مصطفی حسن",
    followers: "۴.۵ میلیونه پيروان",
    secondName: "هاله سمیر",
    secondFollowers: "۴.۵ میلیونه پيروان",
  },
  sw: {
    title: "Pamoja na Kundi Bora la\nWatu Wenye Ushawishi Mkubwa\nna Wenye Kuhamasisha",
    description:
      "Usikose fursa ya kushiriki katika tukio linaloleta pamoja msukumo, maarifa, na uzoefu wa kuboresha.",
    name: "Mustafa Hassan",
    followers: "wafuasi milioni 4.5",
    secondName: "Hala Samir",
    secondFollowers: "wafuasi milioni 4.5",
  },
  th: {
    title: "ร่วมกับกลุ่มบุคคลชั้นนำ\nที่ทรงอิทธิพลและสร้างแรงบันดาลใจ\nมากที่สุด",
    description: "อย่าพลาดโอกาสเข้าร่วมงานที่รวบรวมแรงบันดาลใจ ความรู้ และประสบการณ์อันล้ำค่าไว้ด้วยกัน",
    name: "มุสตาฟา ฮะซัน",
    followers: "4.5 ล้านผู้ติดตาม",
    secondName: "ฮาลา ซามีร์",
    secondFollowers: "4.5 ล้านผู้ติดตาม",
  },
};

export async function InfluentialFigures() {
  const locale = await getLocale();
  const content = copy[locale as Locale] ?? copy.en;
  return <InfluentialFiguresSlider content={content} />;
}
