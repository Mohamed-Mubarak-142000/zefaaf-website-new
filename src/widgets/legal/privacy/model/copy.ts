// Privacy Policy copy lives here rather than in `messages/*.json` for the
// same reason as the Terms widget: those 33 locale files are kept
// namespace-identical, so adding a `privacy` namespace to only some of them
// would make next-intl throw MISSING_MESSAGE for the rest. All 33 locales
// are now translated directly in this file below.
// See src/widgets/terms/model/copy.ts for the sibling page.

export type PrivacySection = {
  title: string;
  intro?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  outro?: string;
};

export type PrivacyContact = {
  label: string;
  href: string;
  icon: "mail" | "globe";
};

export type PrivacyCopy = {
  hero: {
    title: string;
    imageAlt: string;
  };
  meta: {
    lastUpdated: string;
    tagline: string;
  };
  sections: readonly PrivacySection[];
  contact: {
    title: string;
    intro: string;
    items: readonly PrivacyContact[];
  };
};

const en: PrivacyCopy = {
  hero: {
    title: "Privacy Policy",
    imageAlt: "A hand signing a paperless electronic document, symbolizing data protection",
  },
  meta: {
    lastUpdated: "Last Updated: September 10, 2025",
    tagline: "With Zefaaf Platform, You Are Safe",
  },
  sections: [
    {
      title: "Introduction",
      paragraphs: [
        "Zefaaf Platform ('we', 'the Platform') is committed to protecting the privacy of its users. This policy outlines how we collect, use, and protect personal data when you use the Zefaaf application or website.",
      ],
    },
    {
      title: "Data We Collect",
      bullets: [
        "Registration Data: Name, email address, phone number, country, and date of birth.",
        "Account Information: Profile pictures, search preferences, marital status, and preferred language.",
        "Usage Data: Login records, interactions with other members, and communications.",
        "Content You Share: Messages, audio files, photos, or videos.",
        "Technical Information: Device type, operating system, IP address, and language.",
      ],
    },
    {
      title: "How We Use the Data",
      bullets: [
        "To create and manage accounts.",
        "To facilitate search and matching between members.",
        "To enable communication services (messages, voice, and video calls).",
        "To improve services and user experience.",
        "To ensure security and prevent unauthorized use or fraud.",
      ],
    },
    {
      title: "Data Sharing",
      intro: "We may share your data only in the following cases:",
      bullets: [
        "For legal purposes: If required by applicable laws.",
        "With user consent: If you choose to share your data with another member via the Platform.",
      ],
    },
    {
      title: "Data Protection",
      paragraphs: [
        "We use advanced security protocols (SSL encryption) to protect data during transmission and storage. Access to your data is restricted to employees or partners with a legitimate need only.",
      ],
    },
    {
      title: "User Rights (GDPR)",
      bullets: [
        "Access to your personal data.",
        "Request correction or update of your data.",
        "Request deletion of your account and data permanently.",
        "Object to certain processing activities.",
        "Obtain a copy of your data in a portable format.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "We may use cookies to enhance the browsing experience and analyze app usage. You can adjust browser settings to disable them, but this may affect some features.",
      ],
    },
    {
      title: "Children's Privacy",
      paragraphs: ["The Platform is not permitted for use by individuals under 18 years of age."],
    },
    {
      title: "Content Supervision and Communication",
      paragraphs: [
        "To maintain seriousness and Sharia compliance, Zefaaf platform reserves the right to supervise conversations and content within the platform when necessary, including images and voice introductions, to ensure a safe and conservative environment and prevent any violations or manipulation.",
      ],
    },
    {
      title: "Changes to the Privacy Policy",
      paragraphs: [
        "We may update this policy from time to time. Users will be notified of any material changes via email or through an in-app notification.",
      ],
    },
  ],
  contact: {
    title: "Contact Us",
    intro: "If you have any inquiries about this policy or your data, you can contact us at:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const ar: PrivacyCopy = {
  hero: {
    title: "سياسة الخصوصية",
    imageAlt: "يد توقّع على مستند إلكتروني، رمزاً لحماية البيانات",
  },
  meta: {
    lastUpdated: "آخر تحديث: 10 سبتمبر 2025",
    tagline: "مع منصة زفاف، أنت في أمان",
  },
  sections: [
    {
      title: "مقدمة",
      paragraphs: [
        "تلتزم منصة زفاف ('نحن'، 'المنصة') بحماية خصوصية مستخدميها. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا للبيانات الشخصية عند استخدامك لتطبيق أو موقع زفاف.",
      ],
    },
    {
      title: "البيانات التي نجمعها",
      bullets: [
        "بيانات التسجيل: الاسم، البريد الإلكتروني، رقم الهاتف، الدولة، وتاريخ الميلاد.",
        "معلومات الحساب: الصور الشخصية، تفضيلات البحث، الحالة الاجتماعية، واللغة المفضلة.",
        "بيانات الاستخدام: سجلات الدخول، التفاعلات مع الأعضاء الآخرين، والمراسلات.",
        "المحتوى الذي تشاركه: الرسائل، الملفات الصوتية، الصور، أو الفيديوهات.",
        "المعلومات التقنية: نوع الجهاز، نظام التشغيل، عنوان IP، واللغة.",
      ],
    },
    {
      title: "كيفية استخدامنا للبيانات",
      bullets: [
        "لإنشاء الحسابات وإدارتها.",
        "لتسهيل عمليات البحث والمطابقة بين الأعضاء.",
        "لتفعيل خدمات التواصل (الرسائل، المكالمات الصوتية والمرئية).",
        "لتحسين الخدمات وتجربة المستخدم.",
        "لضمان الأمان ومنع الاستخدام غير المصرح به أو الاحتيال.",
      ],
    },
    {
      title: "مشاركة البيانات",
      intro: "قد نشارك بياناتك فقط في الحالات التالية:",
      bullets: [
        "لأغراض قانونية: إذا تطلب ذلك القانون المعمول به.",
        "بموافقة المستخدم: إذا اخترت مشاركة بياناتك مع عضو آخر عبر المنصة.",
      ],
    },
    {
      title: "حماية البيانات",
      paragraphs: [
        "نستخدم بروتوكولات أمان متقدمة (تشفير SSL) لحماية البيانات أثناء النقل والتخزين، ويقتصر الوصول إليها على الموظفين أو الشركاء الذين لديهم حاجة فعلية لذلك فقط.",
      ],
    },
    {
      title: "حقوق المستخدم (GDPR)",
      bullets: [
        "الوصول إلى بياناتك الشخصية.",
        "طلب تصحيح أو تحديث بياناتك.",
        "طلب حذف حسابك وبياناتك بشكل نهائي.",
        "الاعتراض على بعض عمليات المعالجة.",
        "الحصول على نسخة من بياناتك بصيغة قابلة للنقل.",
      ],
    },
    {
      title: "ملفات تعريف الارتباط (Cookies)",
      paragraphs: [
        "قد نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل استخدام التطبيق. يمكنك ضبط إعدادات المتصفح لتعطيلها، لكن هذا قد يؤثر على بعض الميزات.",
      ],
    },
    {
      title: "خصوصية الأطفال",
      paragraphs: ["لا يُسمح باستخدام المنصة لمن هم دون 18 عاماً."],
    },
    {
      title: "الإشراف على المحتوى والتواصل",
      paragraphs: [
        "للحفاظ على الجدية والالتزام بالشريعة الإسلامية، تحتفظ منصة زفاف بالحق في الإشراف على المحادثات والمحتوى داخل المنصة عند الضرورة، بما في ذلك الصور والتعريفات الصوتية، لضمان بيئة آمنة ومحافظة ومنع أي مخالفات أو تلاعب.",
      ],
    },
    {
      title: "التغييرات على سياسة الخصوصية",
      paragraphs: [
        "قد نقوم بتحديث هذه السياسة من وقت لآخر، وسيتم إشعار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار داخل التطبيق.",
      ],
    },
  ],
  contact: {
    title: "تواصل معنا",
    intro: "إذا كانت لديك أي استفسارات حول هذه السياسة أو بياناتك، يمكنك التواصل معنا عبر:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const nl: PrivacyCopy = {
  hero: {
    title: "Privacybeleid",
    imageAlt: "Een hand die een papierloos elektronisch document ondertekent, symbool voor gegevensbescherming",
  },
  meta: {
    lastUpdated: "Laatst bijgewerkt: 10 september 2025",
    tagline: "Bij Zefaaf Platform bent u veilig",
  },
  sections: [
    {
      title: "Inleiding",
      paragraphs: [
        "Zefaaf Platform ('wij', 'het Platform') zet zich in voor de bescherming van de privacy van zijn gebruikers. Dit beleid beschrijft hoe wij persoonsgegevens verzamelen, gebruiken en beschermen wanneer u de Zefaaf-applicatie of -website gebruikt.",
      ],
    },
    {
      title: "Gegevens die wij verzamelen",
      bullets: [
        "Registratiegegevens: naam, e-mailadres, telefoonnummer, land en geboortedatum.",
        "Accountinformatie: profielfoto's, zoekvoorkeuren, burgerlijke staat en voorkeurstaal.",
        "Gebruiksgegevens: inloggegevens, interacties met andere leden en communicatie.",
        "Content die u deelt: berichten, audiobestanden, foto's of video's.",
        "Technische informatie: apparaattype, besturingssysteem, IP-adres en taal.",
      ],
    },
    {
      title: "Hoe wij de gegevens gebruiken",
      bullets: [
        "Om accounts aan te maken en te beheren.",
        "Om zoek- en matchingprocessen tussen leden te vergemakkelijken.",
        "Om communicatiediensten mogelijk te maken (berichten, spraak- en video-oproepen).",
        "Om de diensten en de gebruikerservaring te verbeteren.",
        "Om de veiligheid te waarborgen en ongeoorloofd gebruik of fraude te voorkomen.",
      ],
    },
    {
      title: "Delen van gegevens",
      intro: "Wij kunnen uw gegevens alleen in de volgende gevallen delen:",
      bullets: [
        "Voor wettelijke doeleinden: indien vereist door de toepasselijke wetgeving.",
        "Met toestemming van de gebruiker: indien u ervoor kiest uw gegevens via het Platform met een ander lid te delen.",
      ],
    },
    {
      title: "Gegevensbescherming",
      paragraphs: [
        "Wij gebruiken geavanceerde beveiligingsprotocollen (SSL-versleuteling) om gegevens tijdens verzending en opslag te beschermen. Toegang tot uw gegevens is uitsluitend voorbehouden aan medewerkers of partners met een gerechtvaardigde noodzaak.",
      ],
    },
    {
      title: "Rechten van de gebruiker (AVG)",
      bullets: [
        "Toegang tot uw persoonsgegevens.",
        "Verzoeken om correctie of bijwerking van uw gegevens.",
        "Verzoeken om permanente verwijdering van uw account en gegevens.",
        "Bezwaar maken tegen bepaalde verwerkingsactiviteiten.",
        "Een kopie van uw gegevens verkrijgen in een overdraagbaar formaat.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Wij kunnen cookies gebruiken om de browse-ervaring te verbeteren en het gebruik van de app te analyseren. U kunt uw browserinstellingen aanpassen om deze uit te schakelen, maar dit kan sommige functies beïnvloeden.",
      ],
    },
    {
      title: "Privacy van kinderen",
      paragraphs: ["Het Platform mag niet worden gebruikt door personen jonger dan 18 jaar."],
    },
    {
      title: "Toezicht op content en communicatie",
      paragraphs: [
        "Om de serieusheid en naleving van de sharia te waarborgen, behoudt het Zefaaf-platform zich het recht voor om waar nodig toezicht te houden op gesprekken en content binnen het platform, met inbegrip van afbeeldingen en gesproken introducties, om een veilige en conservatieve omgeving te waarborgen en eventuele schendingen of manipulatie te voorkomen.",
      ],
    },
    {
      title: "Wijzigingen in het privacybeleid",
      paragraphs: [
        "Wij kunnen dit beleid van tijd tot tijd bijwerken. Gebruikers worden op de hoogte gesteld van eventuele materiële wijzigingen via e-mail of via een melding in de app.",
      ],
    },
  ],
  contact: {
    title: "Neem contact met ons op",
    intro: "Als u vragen heeft over dit beleid of uw gegevens, kunt u contact met ons opnemen via:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const fr: PrivacyCopy = {
  hero: {
    title: "Politique de confidentialité",
    imageAlt: "Une main signant un document électronique sans papier, symbole de la protection des données",
  },
  meta: {
    lastUpdated: "Dernière mise à jour : 10 septembre 2025",
    tagline: "Avec la plateforme Zefaaf, vous êtes en sécurité",
  },
  sections: [
    {
      title: "Introduction",
      paragraphs: [
        "La plateforme Zefaaf (« nous », « la Plateforme ») s'engage à protéger la vie privée de ses utilisateurs. Cette politique décrit la manière dont nous collectons, utilisons et protégeons les données personnelles lorsque vous utilisez l'application ou le site web Zefaaf.",
      ],
    },
    {
      title: "Données que nous collectons",
      bullets: [
        "Données d'inscription : nom, adresse e-mail, numéro de téléphone, pays et date de naissance.",
        "Informations de compte : photos de profil, préférences de recherche, situation matrimoniale et langue préférée.",
        "Données d'utilisation : historique de connexion, interactions avec d'autres membres et communications.",
        "Contenu que vous partagez : messages, fichiers audio, photos ou vidéos.",
        "Informations techniques : type d'appareil, système d'exploitation, adresse IP et langue.",
      ],
    },
    {
      title: "Comment nous utilisons les données",
      bullets: [
        "Pour créer et gérer les comptes.",
        "Pour faciliter la recherche et la mise en relation entre membres.",
        "Pour permettre les services de communication (messages, appels vocaux et vidéo).",
        "Pour améliorer les services et l'expérience utilisateur.",
        "Pour assurer la sécurité et prévenir toute utilisation non autorisée ou fraude.",
      ],
    },
    {
      title: "Partage des données",
      intro: "Nous pouvons partager vos données uniquement dans les cas suivants :",
      bullets: [
        "À des fins légales : si les lois applicables l'exigent.",
        "Avec le consentement de l'utilisateur : si vous choisissez de partager vos données avec un autre membre via la Plateforme.",
      ],
    },
    {
      title: "Protection des données",
      paragraphs: [
        "Nous utilisons des protocoles de sécurité avancés (chiffrement SSL) pour protéger les données pendant leur transmission et leur stockage. L'accès à vos données est limité aux employés ou partenaires ayant un besoin légitime.",
      ],
    },
    {
      title: "Droits de l'utilisateur (RGPD)",
      bullets: [
        "Accéder à vos données personnelles.",
        "Demander la correction ou la mise à jour de vos données.",
        "Demander la suppression définitive de votre compte et de vos données.",
        "Vous opposer à certaines activités de traitement.",
        "Obtenir une copie de vos données dans un format portable.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Nous pouvons utiliser des cookies pour améliorer l'expérience de navigation et analyser l'utilisation de l'application. Vous pouvez modifier les paramètres de votre navigateur pour les désactiver, mais cela peut affecter certaines fonctionnalités.",
      ],
    },
    {
      title: "Confidentialité des enfants",
      paragraphs: ["L'utilisation de la Plateforme n'est pas autorisée aux personnes de moins de 18 ans."],
    },
    {
      title: "Supervision du contenu et des communications",
      paragraphs: [
        "Afin de préserver le sérieux et la conformité à la charia, la plateforme Zefaaf se réserve le droit de superviser les conversations et le contenu au sein de la plateforme lorsque cela est nécessaire, y compris les images et les présentations vocales, afin de garantir un environnement sûr et conforme aux valeurs, et de prévenir toute violation ou manipulation.",
      ],
    },
    {
      title: "Modifications de la politique de confidentialité",
      paragraphs: [
        "Nous pouvons mettre à jour cette politique de temps à autre. Les utilisateurs seront informés de tout changement important par e-mail ou par une notification dans l'application.",
      ],
    },
  ],
  contact: {
    title: "Nous contacter",
    intro: "Si vous avez des questions concernant cette politique ou vos données, vous pouvez nous contacter à :",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const de: PrivacyCopy = {
  hero: {
    title: "Datenschutzrichtlinie",
    imageAlt: "Eine Hand unterschreibt ein papierloses elektronisches Dokument als Symbol für Datenschutz",
  },
  meta: {
    lastUpdated: "Zuletzt aktualisiert: 10. September 2025",
    tagline: "Mit der Zefaaf-Plattform sind Sie sicher",
  },
  sections: [
    {
      title: "Einleitung",
      paragraphs: [
        "Die Zefaaf-Plattform („wir“, „die Plattform“) verpflichtet sich, die Privatsphäre ihrer Nutzer zu schützen. Diese Richtlinie beschreibt, wie wir personenbezogene Daten erheben, nutzen und schützen, wenn Sie die Zefaaf-Anwendung oder -Website verwenden.",
      ],
    },
    {
      title: "Von uns erhobene Daten",
      bullets: [
        "Registrierungsdaten: Name, E-Mail-Adresse, Telefonnummer, Land und Geburtsdatum.",
        "Kontoinformationen: Profilbilder, Suchpräferenzen, Familienstand und bevorzugte Sprache.",
        "Nutzungsdaten: Anmeldeprotokolle, Interaktionen mit anderen Mitgliedern und Kommunikation.",
        "Von Ihnen geteilte Inhalte: Nachrichten, Audiodateien, Fotos oder Videos.",
        "Technische Informationen: Gerätetyp, Betriebssystem, IP-Adresse und Sprache.",
      ],
    },
    {
      title: "Wie wir die Daten verwenden",
      bullets: [
        "Zur Erstellung und Verwaltung von Konten.",
        "Zur Erleichterung der Suche und des Matchings zwischen Mitgliedern.",
        "Zur Ermöglichung von Kommunikationsdiensten (Nachrichten, Sprach- und Videoanrufe).",
        "Zur Verbesserung der Dienste und der Nutzererfahrung.",
        "Zur Gewährleistung der Sicherheit und zur Verhinderung unbefugter Nutzung oder Betrugs.",
      ],
    },
    {
      title: "Datenweitergabe",
      intro: "Wir geben Ihre Daten nur in folgenden Fällen weiter:",
      bullets: [
        "Aus rechtlichen Gründen: sofern dies nach geltendem Recht erforderlich ist.",
        "Mit Zustimmung des Nutzers: wenn Sie sich entscheiden, Ihre Daten über die Plattform mit einem anderen Mitglied zu teilen.",
      ],
    },
    {
      title: "Datenschutz",
      paragraphs: [
        "Wir verwenden fortschrittliche Sicherheitsprotokolle (SSL-Verschlüsselung), um Daten während der Übertragung und Speicherung zu schützen. Der Zugriff auf Ihre Daten ist ausschließlich Mitarbeitern oder Partnern mit einem berechtigten Bedarf vorbehalten.",
      ],
    },
    {
      title: "Nutzerrechte (DSGVO)",
      bullets: [
        "Zugang zu Ihren personenbezogenen Daten.",
        "Beantragung der Berichtigung oder Aktualisierung Ihrer Daten.",
        "Beantragung der dauerhaften Löschung Ihres Kontos und Ihrer Daten.",
        "Widerspruch gegen bestimmte Verarbeitungstätigkeiten.",
        "Erhalt einer Kopie Ihrer Daten in einem übertragbaren Format.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Wir können Cookies verwenden, um das Browsing-Erlebnis zu verbessern und die App-Nutzung zu analysieren. Sie können Ihre Browsereinstellungen anpassen, um diese zu deaktivieren, was jedoch einige Funktionen beeinträchtigen kann.",
      ],
    },
    {
      title: "Datenschutz für Kinder",
      paragraphs: ["Die Nutzung der Plattform ist Personen unter 18 Jahren nicht gestattet."],
    },
    {
      title: "Überwachung von Inhalten und Kommunikation",
      paragraphs: [
        "Um die Ernsthaftigkeit und die Einhaltung der Scharia zu wahren, behält sich die Zefaaf-Plattform das Recht vor, Gespräche und Inhalte innerhalb der Plattform bei Bedarf zu überwachen, einschließlich Bildern und gesprochenen Vorstellungen, um eine sichere und konservative Umgebung zu gewährleisten und Verstöße oder Manipulationen zu verhindern.",
      ],
    },
    {
      title: "Änderungen der Datenschutzrichtlinie",
      paragraphs: [
        "Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Nutzer werden über wesentliche Änderungen per E-Mail oder durch eine In-App-Benachrichtigung informiert.",
      ],
    },
  ],
  contact: {
    title: "Kontaktieren Sie uns",
    intro: "Wenn Sie Fragen zu dieser Richtlinie oder Ihren Daten haben, können Sie uns kontaktieren unter:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const tr: PrivacyCopy = {
  hero: {
    title: "Gizlilik Politikası",
    imageAlt: "Veri korumasını simgeleyen, kağıtsız elektronik bir belgeyi imzalayan bir el",
  },
  meta: {
    lastUpdated: "Son Güncelleme: 10 Eylül 2025",
    tagline: "Zefaaf Platformu ile Güvendesiniz",
  },
  sections: [
    {
      title: "Giriş",
      paragraphs: [
        "Zefaaf Platformu ('biz', 'Platform') kullanıcılarının gizliliğini korumaya bağlıdır. Bu politika, Zefaaf uygulamasını veya web sitesini kullandığınızda kişisel verileri nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.",
      ],
    },
    {
      title: "Topladığımız Veriler",
      bullets: [
        "Kayıt Verileri: Ad, e-posta adresi, telefon numarası, ülke ve doğum tarihi.",
        "Hesap Bilgileri: Profil fotoğrafları, arama tercihleri, medeni durum ve tercih edilen dil.",
        "Kullanım Verileri: Giriş kayıtları, diğer üyelerle etkileşimler ve iletişimler.",
        "Paylaştığınız İçerik: Mesajlar, ses dosyaları, fotoğraflar veya videolar.",
        "Teknik Bilgiler: Cihaz türü, işletim sistemi, IP adresi ve dil.",
      ],
    },
    {
      title: "Verileri Nasıl Kullanıyoruz",
      bullets: [
        "Hesap oluşturmak ve yönetmek için.",
        "Üyeler arasında arama ve eşleştirmeyi kolaylaştırmak için.",
        "İletişim hizmetlerini (mesajlar, sesli ve görüntülü aramalar) etkinleştirmek için.",
        "Hizmetleri ve kullanıcı deneyimini geliştirmek için.",
        "Güvenliği sağlamak ve yetkisiz kullanımı veya dolandırıcılığı önlemek için.",
      ],
    },
    {
      title: "Veri Paylaşımı",
      intro: "Verilerinizi yalnızca aşağıdaki durumlarda paylaşabiliriz:",
      bullets: [
        "Yasal amaçlarla: Geçerli yasaların gerektirmesi halinde.",
        "Kullanıcı onayıyla: Verilerinizi Platform aracılığıyla başka bir üyeyle paylaşmayı tercih etmeniz halinde.",
      ],
    },
    {
      title: "Veri Koruma",
      paragraphs: [
        "Verileri iletim ve depolama sırasında korumak için gelişmiş güvenlik protokolleri (SSL şifreleme) kullanıyoruz. Verilerinize erişim yalnızca meşru bir ihtiyacı olan çalışanlar veya iş ortaklarıyla sınırlıdır.",
      ],
    },
    {
      title: "Kullanıcı Hakları (GDPR)",
      bullets: [
        "Kişisel verilerinize erişim.",
        "Verilerinizin düzeltilmesini veya güncellenmesini talep etme.",
        "Hesabınızın ve verilerinizin kalıcı olarak silinmesini talep etme.",
        "Belirli işleme faaliyetlerine itiraz etme.",
        "Verilerinizin taşınabilir bir formatta bir kopyasını edinme.",
      ],
    },
    {
      title: "Çerezler",
      paragraphs: [
        "Tarama deneyimini geliştirmek ve uygulama kullanımını analiz etmek için çerezler kullanabiliriz. Bunları devre dışı bırakmak için tarayıcı ayarlarınızı değiştirebilirsiniz, ancak bu bazı özellikleri etkileyebilir.",
      ],
    },
    {
      title: "Çocukların Gizliliği",
      paragraphs: ["Platform, 18 yaşın altındaki kişiler tarafından kullanılamaz."],
    },
    {
      title: "İçerik Denetimi ve İletişim",
      paragraphs: [
        "Ciddiyeti ve Şeriata uygunluğu korumak amacıyla, Zefaaf platformu, güvenli ve muhafazakâr bir ortam sağlamak ve herhangi bir ihlali veya manipülasyonu önlemek amacıyla, gerektiğinde platform içindeki görüntüler ve sesli tanıtımlar dahil olmak üzere konuşmaları ve içeriği denetleme hakkını saklı tutar.",
      ],
    },
    {
      title: "Gizlilik Politikasındaki Değişiklikler",
      paragraphs: [
        "Bu politikayı zaman zaman güncelleyebiliriz. Kullanıcılar, önemli değişiklikler hakkında e-posta yoluyla veya uygulama içi bildirim aracılığıyla bilgilendirilecektir.",
      ],
    },
  ],
  contact: {
    title: "Bize Ulaşın",
    intro: "Bu politika veya verileriniz hakkında herhangi bir sorunuz varsa, bize şu adresten ulaşabilirsiniz:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const ru: PrivacyCopy = {
  hero: {
    title: "Политика конфиденциальности",
    imageAlt: "Рука подписывает безбумажный электронный документ, символизируя защиту данных",
  },
  meta: {
    lastUpdated: "Последнее обновление: 10 сентября 2025 г.",
    tagline: "С платформой Zefaaf вы в безопасности",
  },
  sections: [
    {
      title: "Введение",
      paragraphs: [
        "Платформа Zefaaf («мы», «Платформа») привержена защите конфиденциальности своих пользователей. Настоящая политика описывает, как мы собираем, используем и защищаем персональные данные при использовании вами приложения или веб-сайта Zefaaf.",
      ],
    },
    {
      title: "Данные, которые мы собираем",
      bullets: [
        "Регистрационные данные: имя, адрес электронной почты, номер телефона, страна и дата рождения.",
        "Информация об аккаунте: фотографии профиля, предпочтения поиска, семейное положение и предпочитаемый язык.",
        "Данные об использовании: записи входа в систему, взаимодействие с другими участниками и переписка.",
        "Контент, которым вы делитесь: сообщения, аудиофайлы, фотографии или видео.",
        "Техническая информация: тип устройства, операционная система, IP-адрес и язык.",
      ],
    },
    {
      title: "Как мы используем данные",
      bullets: [
        "Для создания и управления учетными записями.",
        "Для облегчения поиска и подбора пар среди участников.",
        "Для обеспечения работы служб связи (сообщения, голосовые и видеозвонки).",
        "Для улучшения услуг и пользовательского опыта.",
        "Для обеспечения безопасности и предотвращения несанкционированного использования или мошенничества.",
      ],
    },
    {
      title: "Передача данных",
      intro: "Мы можем передавать ваши данные только в следующих случаях:",
      bullets: [
        "В юридических целях: если этого требует применимое законодательство.",
        "С согласия пользователя: если вы решите поделиться своими данными с другим участником через Платформу.",
      ],
    },
    {
      title: "Защита данных",
      paragraphs: [
        "Мы используем передовые протоколы безопасности (шифрование SSL) для защиты данных при передаче и хранении. Доступ к вашим данным ограничен сотрудниками или партнерами, имеющими законную необходимость в этом.",
      ],
    },
    {
      title: "Права пользователя (GDPR)",
      bullets: [
        "Доступ к своим персональным данным.",
        "Запрос на исправление или обновление своих данных.",
        "Запрос на полное удаление своей учетной записи и данных.",
        "Возражение против определенных видов обработки данных.",
        "Получение копии своих данных в переносимом формате.",
      ],
    },
    {
      title: "Файлы cookie",
      paragraphs: [
        "Мы можем использовать файлы cookie для улучшения качества просмотра и анализа использования приложения. Вы можете изменить настройки браузера, чтобы отключить их, однако это может повлиять на работу некоторых функций.",
      ],
    },
    {
      title: "Конфиденциальность детей",
      paragraphs: ["Использование Платформы лицами младше 18 лет не допускается."],
    },
    {
      title: "Контроль контента и коммуникаций",
      paragraphs: [
        "Для поддержания серьезности намерений и соответствия нормам шариата платформа Zefaaf оставляет за собой право при необходимости контролировать переписку и контент на платформе, включая изображения и голосовые самопрезентации, чтобы обеспечить безопасную и консервативную среду и предотвратить любые нарушения или манипуляции.",
      ],
    },
    {
      title: "Изменения в Политике конфиденциальности",
      paragraphs: [
        "Мы можем время от времени обновлять настоящую политику. Пользователи будут уведомлены о любых существенных изменениях по электронной почте или посредством уведомления в приложении.",
      ],
    },
  ],
  contact: {
    title: "Свяжитесь с нами",
    intro: "Если у вас есть какие-либо вопросы относительно настоящей политики или ваших данных, вы можете связаться с нами по адресу:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const id: PrivacyCopy = {
  hero: {
    title: "Kebijakan Privasi",
    imageAlt: "Sebuah tangan menandatangani dokumen elektronik tanpa kertas, melambangkan perlindungan data",
  },
  meta: {
    lastUpdated: "Terakhir Diperbarui: 10 September 2025",
    tagline: "Bersama Platform Zefaaf, Anda Aman",
  },
  sections: [
    {
      title: "Pendahuluan",
      paragraphs: [
        "Platform Zefaaf ('kami', 'Platform') berkomitmen untuk melindungi privasi penggunanya. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi saat Anda menggunakan aplikasi atau situs web Zefaaf.",
      ],
    },
    {
      title: "Data yang Kami Kumpulkan",
      bullets: [
        "Data Pendaftaran: Nama, alamat email, nomor telepon, negara, dan tanggal lahir.",
        "Informasi Akun: Foto profil, preferensi pencarian, status pernikahan, dan bahasa yang dipilih.",
        "Data Penggunaan: Catatan masuk, interaksi dengan anggota lain, dan komunikasi.",
        "Konten yang Anda Bagikan: Pesan, berkas audio, foto, atau video.",
        "Informasi Teknis: Jenis perangkat, sistem operasi, alamat IP, dan bahasa.",
      ],
    },
    {
      title: "Bagaimana Kami Menggunakan Data",
      bullets: [
        "Untuk membuat dan mengelola akun.",
        "Untuk memfasilitasi pencarian dan pencocokan antar anggota.",
        "Untuk mengaktifkan layanan komunikasi (pesan, panggilan suara, dan video).",
        "Untuk meningkatkan layanan dan pengalaman pengguna.",
        "Untuk memastikan keamanan dan mencegah penggunaan tanpa izin atau penipuan.",
      ],
    },
    {
      title: "Berbagi Data",
      intro: "Kami hanya dapat membagikan data Anda dalam kasus berikut:",
      bullets: [
        "Untuk tujuan hukum: Jika diwajibkan oleh hukum yang berlaku.",
        "Dengan persetujuan pengguna: Jika Anda memilih untuk membagikan data Anda dengan anggota lain melalui Platform.",
      ],
    },
    {
      title: "Perlindungan Data",
      paragraphs: [
        "Kami menggunakan protokol keamanan canggih (enkripsi SSL) untuk melindungi data selama transmisi dan penyimpanan. Akses ke data Anda dibatasi hanya untuk karyawan atau mitra yang memiliki kebutuhan yang sah.",
      ],
    },
    {
      title: "Hak Pengguna (GDPR)",
      bullets: [
        "Mengakses data pribadi Anda.",
        "Meminta koreksi atau pembaruan data Anda.",
        "Meminta penghapusan akun dan data Anda secara permanen.",
        "Menolak aktivitas pemrosesan tertentu.",
        "Memperoleh salinan data Anda dalam format yang dapat dipindahkan.",
      ],
    },
    {
      title: "Cookie",
      paragraphs: [
        "Kami dapat menggunakan cookie untuk meningkatkan pengalaman menjelajah dan menganalisis penggunaan aplikasi. Anda dapat menyesuaikan pengaturan peramban untuk menonaktifkannya, tetapi hal ini dapat memengaruhi beberapa fitur.",
      ],
    },
    {
      title: "Privasi Anak",
      paragraphs: ["Platform ini tidak diperbolehkan digunakan oleh individu di bawah usia 18 tahun."],
    },
    {
      title: "Pengawasan Konten dan Komunikasi",
      paragraphs: [
        "Untuk menjaga keseriusan dan kepatuhan terhadap syariah, platform Zefaaf berhak untuk mengawasi percakapan dan konten di dalam platform bila diperlukan, termasuk gambar dan perkenalan suara, guna memastikan lingkungan yang aman dan sopan serta mencegah pelanggaran atau manipulasi apa pun.",
      ],
    },
    {
      title: "Perubahan pada Kebijakan Privasi",
      paragraphs: [
        "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Pengguna akan diberitahu mengenai perubahan penting melalui email atau melalui notifikasi dalam aplikasi.",
      ],
    },
  ],
  contact: {
    title: "Hubungi Kami",
    intro: "Jika Anda memiliki pertanyaan mengenai kebijakan ini atau data Anda, Anda dapat menghubungi kami di:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const zh: PrivacyCopy = {
  hero: {
    title: "隐私政策",
    imageAlt: "一只手正在签署无纸化电子文件,象征着数据保护",
  },
  meta: {
    lastUpdated: "最后更新时间:2025年9月10日",
    tagline: "使用Zefaaf平台,您的信息安全无忧",
  },
  sections: [
    {
      title: "简介",
      paragraphs: [
        "Zefaaf平台(「我们」、「本平台」)致力于保护用户的隐私。本政策概述了您在使用Zefaaf应用程序或网站时,我们如何收集、使用和保护个人数据。",
      ],
    },
    {
      title: "我们收集的数据",
      bullets: [
        "注册数据:姓名、电子邮件地址、电话号码、国家和出生日期。",
        "账户信息:个人资料照片、搜索偏好、婚姻状况和首选语言。",
        "使用数据:登录记录、与其他会员的互动以及通讯内容。",
        "您分享的内容:消息、音频文件、照片或视频。",
        "技术信息:设备类型、操作系统、IP地址和语言。",
      ],
    },
    {
      title: "我们如何使用数据",
      bullets: [
        "创建和管理账户。",
        "促进会员之间的搜索与匹配。",
        "支持通讯服务(消息、语音和视频通话)。",
        "改善服务和用户体验。",
        "确保安全并防止未经授权的使用或欺诈行为。",
      ],
    },
    {
      title: "数据共享",
      intro: "我们仅在以下情况下可能共享您的数据:",
      bullets: [
        "出于法律目的:如适用法律要求。",
        "经用户同意:如果您选择通过本平台与其他会员分享您的数据。",
      ],
    },
    {
      title: "数据保护",
      paragraphs: [
        "我们使用先进的安全协议(SSL加密)来保护数据在传输和存储过程中的安全。只有确有正当需要的员工或合作伙伴才可访问您的数据。",
      ],
    },
    {
      title: "用户权利(GDPR)",
      bullets: [
        "访问您的个人数据。",
        "请求更正或更新您的数据。",
        "请求永久删除您的账户和数据。",
        "反对特定的处理活动。",
        "以可携带的格式获取您数据的副本。",
      ],
    },
    {
      title: "Cookie",
      paragraphs: [
        "我们可能使用Cookie来提升浏览体验并分析应用程序的使用情况。您可以调整浏览器设置以禁用它们,但这可能会影响部分功能。",
      ],
    },
    {
      title: "儿童隐私",
      paragraphs: ["本平台不允许18岁以下人士使用。"],
    },
    {
      title: "内容与通讯监督",
      paragraphs: [
        "为维护平台的严肃性并符合伊斯兰教法要求,Zefaaf平台保留在必要时对平台内的对话和内容(包括图片和语音自我介绍)进行监督的权利,以确保安全、保守的环境,并防止任何违规或操纵行为。",
      ],
    },
    {
      title: "隐私政策的变更",
      paragraphs: [
        "我们可能会不时更新本政策。用户将通过电子邮件或应用内通知的方式,获知任何重大变更。",
      ],
    },
  ],
  contact: {
    title: "联系我们",
    intro: "如果您对本政策或您的数据有任何疑问,可通过以下方式联系我们:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const bn: PrivacyCopy = {
  hero: {
    title: "গোপনীয়তা নীতি",
    imageAlt: "একটি হাত কাগজবিহীন ইলেকট্রনিক নথিতে স্বাক্ষর করছে, যা তথ্য সুরক্ষার প্রতীক",
  },
  meta: {
    lastUpdated: "সর্বশেষ হালনাগাদ: 10 সেপ্টেম্বর, 2025",
    tagline: "জেফাফ প্ল্যাটফর্মের সাথে, আপনি নিরাপদ",
  },
  sections: [
    {
      title: "ভূমিকা",
      paragraphs: [
        "জেফাফ প্ল্যাটফর্ম ('আমরা', 'প্ল্যাটফর্ম') তার ব্যবহারকারীদের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। এই নীতিতে বর্ণনা করা হয়েছে যে আপনি যখন জেফাফ অ্যাপ্লিকেশন বা ওয়েবসাইট ব্যবহার করেন তখন আমরা কীভাবে ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা করি।",
      ],
    },
    {
      title: "আমরা যে তথ্য সংগ্রহ করি",
      bullets: [
        "নিবন্ধন তথ্য: নাম, ইমেইল ঠিকানা, ফোন নম্বর, দেশ এবং জন্ম তারিখ।",
        "অ্যাকাউন্ট তথ্য: প্রোফাইল ছবি, অনুসন্ধান পছন্দসমূহ, বৈবাহিক অবস্থা এবং পছন্দের ভাষা।",
        "ব্যবহার তথ্য: লগইন রেকর্ড, অন্যান্য সদস্যদের সাথে মিথস্ক্রিয়া এবং যোগাযোগ।",
        "আপনার শেয়ার করা কনটেন্ট: বার্তা, অডিও ফাইল, ছবি বা ভিডিও।",
        "প্রযুক্তিগত তথ্য: ডিভাইসের ধরন, অপারেটিং সিস্টেম, আইপি ঠিকানা এবং ভাষা।",
      ],
    },
    {
      title: "আমরা কীভাবে তথ্য ব্যবহার করি",
      bullets: [
        "অ্যাকাউন্ট তৈরি ও পরিচালনার জন্য।",
        "সদস্যদের মধ্যে অনুসন্ধান ও মিলকরণ সহজতর করার জন্য।",
        "যোগাযোগ পরিষেবা (বার্তা, ভয়েস এবং ভিডিও কল) সক্ষম করার জন্য।",
        "পরিষেবা এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করার জন্য।",
        "নিরাপত্তা নিশ্চিত করতে এবং অননুমোদিত ব্যবহার বা প্রতারণা প্রতিরোধ করতে।",
      ],
    },
    {
      title: "তথ্য শেয়ারকরণ",
      intro: "আমরা কেবল নিম্নলিখিত ক্ষেত্রে আপনার তথ্য শেয়ার করতে পারি:",
      bullets: [
        "আইনি উদ্দেশ্যে: প্রযোজ্য আইন দ্বারা প্রয়োজন হলে।",
        "ব্যবহারকারীর সম্মতিক্রমে: আপনি যদি প্ল্যাটফর্মের মাধ্যমে অন্য কোনো সদস্যের সাথে আপনার তথ্য শেয়ার করতে বেছে নেন।",
      ],
    },
    {
      title: "তথ্য সুরক্ষা",
      paragraphs: [
        "আমরা ট্রান্সমিশন এবং স্টোরেজের সময় তথ্য সুরক্ষিত রাখতে উন্নত নিরাপত্তা প্রোটোকল (এসএসএল এনক্রিপশন) ব্যবহার করি। আপনার তথ্যে প্রবেশাধিকার কেবল বৈধ প্রয়োজনসম্পন্ন কর্মচারী বা অংশীদারদের মধ্যে সীমাবদ্ধ।",
      ],
    },
    {
      title: "ব্যবহারকারীর অধিকার (GDPR)",
      bullets: [
        "আপনার ব্যক্তিগত তথ্যে প্রবেশাধিকার।",
        "আপনার তথ্য সংশোধন বা হালনাগাদের অনুরোধ করা।",
        "আপনার অ্যাকাউন্ট এবং তথ্য স্থায়ীভাবে মুছে ফেলার অনুরোধ করা।",
        "নির্দিষ্ট প্রক্রিয়াকরণ কার্যক্রমে আপত্তি জানানো।",
        "বহনযোগ্য ফরম্যাটে আপনার তথ্যের একটি অনুলিপি পাওয়া।",
      ],
    },
    {
      title: "কুকিজ",
      paragraphs: [
        "আমরা ব্রাউজিং অভিজ্ঞতা উন্নত করতে এবং অ্যাপ ব্যবহারের বিশ্লেষণ করতে কুকিজ ব্যবহার করতে পারি। আপনি এগুলো নিষ্ক্রিয় করতে ব্রাউজার সেটিংস সমন্বয় করতে পারেন, তবে এটি কিছু বৈশিষ্ট্যকে প্রভাবিত করতে পারে।",
      ],
    },
    {
      title: "শিশুদের গোপনীয়তা",
      paragraphs: ["18 বছরের কম বয়সী ব্যক্তিদের জন্য প্ল্যাটফর্মটি ব্যবহারের অনুমতি নেই।"],
    },
    {
      title: "কনটেন্ট তত্ত্বাবধান ও যোগাযোগ",
      paragraphs: [
        "গাম্ভীর্য এবং শরিয়াহ সম্মতি বজায় রাখতে, জেফাফ প্ল্যাটফর্ম প্রয়োজন অনুযায়ী প্ল্যাটফর্মের মধ্যে কথোপকথন এবং কনটেন্ট, যার মধ্যে ছবি এবং কণ্ঠস্বর পরিচিতিও অন্তর্ভুক্ত, তত্ত্বাবধান করার অধিকার সংরক্ষণ করে, যাতে একটি নিরাপদ ও রক্ষণশীল পরিবেশ নিশ্চিত করা যায় এবং যেকোনো লঙ্ঘন বা কারসাজি প্রতিরোধ করা যায়।",
      ],
    },
    {
      title: "গোপনীয়তা নীতিতে পরিবর্তন",
      paragraphs: [
        "আমরা সময়ে সময়ে এই নীতি হালনাগাদ করতে পারি। কোনো গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে ব্যবহারকারীদের ইমেইল বা অ্যাপ-ইন-নোটিফিকেশনের মাধ্যমে অবহিত করা হবে।",
      ],
    },
  ],
  contact: {
    title: "আমাদের সাথে যোগাযোগ করুন",
    intro: "এই নীতি বা আপনার তথ্য সম্পর্কে কোনো জিজ্ঞাসা থাকলে, আপনি নিম্নলিখিত মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const bs: PrivacyCopy = {
  hero: {
    title: "Politika privatnosti",
    imageAlt: "Ruka potpisuje bezpapirni elektronski dokument, simbolizirajući zaštitu podataka",
  },
  meta: {
    lastUpdated: "Posljednje ažuriranje: 10. septembar 2025.",
    tagline: "Uz Zefaaf platformu, vi ste sigurni",
  },
  sections: [
    {
      title: "Uvod",
      paragraphs: [
        "Zefaaf platforma ('mi', 'Platforma') posvećena je zaštiti privatnosti svojih korisnika. Ova politika opisuje kako prikupljamo, koristimo i štitimo lične podatke kada koristite Zefaaf aplikaciju ili web stranicu.",
      ],
    },
    {
      title: "Podaci koje prikupljamo",
      bullets: [
        "Podaci o registraciji: ime, e-mail adresa, broj telefona, država i datum rođenja.",
        "Informacije o nalogu: profilne slike, preference pretrage, bračni status i preferirani jezik.",
        "Podaci o korištenju: evidencija prijava, interakcije s drugim članovima i komunikacija.",
        "Sadržaj koji dijelite: poruke, audio datoteke, fotografije ili video zapisi.",
        "Tehničke informacije: vrsta uređaja, operativni sistem, IP adresa i jezik.",
      ],
    },
    {
      title: "Kako koristimo podatke",
      bullets: [
        "Za kreiranje i upravljanje nalozima.",
        "Za olakšavanje pretrage i uparivanja između članova.",
        "Za omogućavanje komunikacijskih usluga (poruke, glasovni i video pozivi).",
        "Za unapređenje usluga i korisničkog iskustva.",
        "Za osiguravanje sigurnosti i sprječavanje neovlaštene upotrebe ili prevare.",
      ],
    },
    {
      title: "Dijeljenje podataka",
      intro: "Vaše podatke možemo dijeliti samo u sljedećim slučajevima:",
      bullets: [
        "U zakonske svrhe: ako to zahtijevaju važeći zakoni.",
        "Uz pristanak korisnika: ako odlučite podijeliti svoje podatke s drugim članom putem Platforme.",
      ],
    },
    {
      title: "Zaštita podataka",
      paragraphs: [
        "Koristimo napredne sigurnosne protokole (SSL enkripciju) za zaštitu podataka tokom prijenosa i pohrane. Pristup vašim podacima ograničen je isključivo na zaposlenike ili partnere s legitimnom potrebom.",
      ],
    },
    {
      title: "Prava korisnika (GDPR)",
      bullets: [
        "Pristup vašim ličnim podacima.",
        "Zahtjev za ispravkom ili ažuriranjem vaših podataka.",
        "Zahtjev za trajnim brisanjem vašeg naloga i podataka.",
        "Prigovor na određene aktivnosti obrade.",
        "Dobivanje kopije vaših podataka u prenosivom formatu.",
      ],
    },
    {
      title: "Kolačići",
      paragraphs: [
        "Možemo koristiti kolačiće kako bismo unaprijedili iskustvo pregledavanja i analizirali korištenje aplikacije. Postavke preglednika možete prilagoditi kako biste ih onemogućili, ali to može utjecati na pojedine funkcije.",
      ],
    },
    {
      title: "Privatnost djece",
      paragraphs: ["Platformu ne smiju koristiti osobe mlađe od 18 godina."],
    },
    {
      title: "Nadzor sadržaja i komunikacije",
      paragraphs: [
        "Radi očuvanja ozbiljnosti namjera i usklađenosti sa šerijatom, Zefaaf platforma zadržava pravo da po potrebi nadzire razgovore i sadržaj unutar platforme, uključujući slike i glasovna predstavljanja, kako bi osigurala sigurno i konzervativno okruženje te spriječila bilo kakve povrede ili manipulacije.",
      ],
    },
    {
      title: "Izmjene politike privatnosti",
      paragraphs: [
        "Ovu politiku možemo povremeno ažurirati. Korisnici će o svim značajnim izmjenama biti obaviješteni putem e-maila ili obavještenja unutar aplikacije.",
      ],
    },
  ],
  contact: {
    title: "Kontaktirajte nas",
    intro: "Ako imate bilo kakvih pitanja u vezi s ovom politikom ili vašim podacima, možete nas kontaktirati putem:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const es: PrivacyCopy = {
  hero: {
    title: "Política de Privacidad",
    imageAlt: "Una mano firmando un documento electrónico sin papel, símbolo de la protección de datos",
  },
  meta: {
    lastUpdated: "Última actualización: 10 de septiembre de 2025",
    tagline: "Con la Plataforma Zefaaf, usted está a salvo",
  },
  sections: [
    {
      title: "Introducción",
      paragraphs: [
        "La Plataforma Zefaaf ('nosotros', 'la Plataforma') se compromete a proteger la privacidad de sus usuarios. Esta política describe cómo recopilamos, utilizamos y protegemos los datos personales cuando usted utiliza la aplicación o el sitio web de Zefaaf.",
      ],
    },
    {
      title: "Datos que recopilamos",
      bullets: [
        "Datos de registro: nombre, dirección de correo electrónico, número de teléfono, país y fecha de nacimiento.",
        "Información de la cuenta: fotos de perfil, preferencias de búsqueda, estado civil e idioma preferido.",
        "Datos de uso: registros de inicio de sesión, interacciones con otros miembros y comunicaciones.",
        "Contenido que usted comparte: mensajes, archivos de audio, fotos o videos.",
        "Información técnica: tipo de dispositivo, sistema operativo, dirección IP e idioma.",
      ],
    },
    {
      title: "Cómo utilizamos los datos",
      bullets: [
        "Para crear y gestionar cuentas.",
        "Para facilitar la búsqueda y el emparejamiento entre miembros.",
        "Para habilitar los servicios de comunicación (mensajes, llamadas de voz y video).",
        "Para mejorar los servicios y la experiencia del usuario.",
        "Para garantizar la seguridad y prevenir el uso no autorizado o el fraude.",
      ],
    },
    {
      title: "Compartición de datos",
      intro: "Solo podemos compartir sus datos en los siguientes casos:",
      bullets: [
        "Con fines legales: si así lo exigen las leyes aplicables.",
        "Con el consentimiento del usuario: si usted decide compartir sus datos con otro miembro a través de la Plataforma.",
      ],
    },
    {
      title: "Protección de datos",
      paragraphs: [
        "Utilizamos protocolos de seguridad avanzados (cifrado SSL) para proteger los datos durante la transmisión y el almacenamiento. El acceso a sus datos está restringido únicamente a empleados o socios con una necesidad legítima.",
      ],
    },
    {
      title: "Derechos del usuario (RGPD)",
      bullets: [
        "Acceder a sus datos personales.",
        "Solicitar la corrección o actualización de sus datos.",
        "Solicitar la eliminación permanente de su cuenta y datos.",
        "Oponerse a determinadas actividades de tratamiento.",
        "Obtener una copia de sus datos en un formato portátil.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Podemos utilizar cookies para mejorar la experiencia de navegación y analizar el uso de la aplicación. Puede ajustar la configuración de su navegador para desactivarlas, aunque esto puede afectar a algunas funciones.",
      ],
    },
    {
      title: "Privacidad de los menores",
      paragraphs: ["No se permite el uso de la Plataforma a personas menores de 18 años."],
    },
    {
      title: "Supervisión de contenido y comunicaciones",
      paragraphs: [
        "Para preservar la seriedad y el cumplimiento de la sharía, la plataforma Zefaaf se reserva el derecho de supervisar las conversaciones y el contenido dentro de la plataforma cuando sea necesario, incluidas las imágenes y las presentaciones de voz, con el fin de garantizar un entorno seguro y conservador y evitar cualquier infracción o manipulación.",
      ],
    },
    {
      title: "Cambios en la Política de Privacidad",
      paragraphs: [
        "Podemos actualizar esta política periódicamente. Se notificará a los usuarios sobre cualquier cambio importante por correo electrónico o mediante una notificación dentro de la aplicación.",
      ],
    },
  ],
  contact: {
    title: "Contáctenos",
    intro: "Si tiene alguna consulta sobre esta política o sus datos, puede contactarnos en:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const fa: PrivacyCopy = {
  hero: {
    title: "سیاست حفظ حریم خصوصی",
    imageAlt: "دستی که سندی الکترونیکی و بدون کاغذ را امضا می‌کند، نمادی از حفاظت از داده‌ها",
  },
  meta: {
    lastUpdated: "آخرین به‌روزرسانی: 10 سپتامبر 2025",
    tagline: "با پلتفرم زفاف، شما در امان هستید",
  },
  sections: [
    {
      title: "مقدمه",
      paragraphs: [
        "پلتفرم زفاف («ما»، «پلتفرم») متعهد به حفظ حریم خصوصی کاربران خود است. این سیاست نحوه جمع‌آوری، استفاده و حفاظت از داده‌های شخصی هنگام استفاده شما از برنامه یا وب‌سایت زفاف را شرح می‌دهد.",
      ],
    },
    {
      title: "داده‌هایی که جمع‌آوری می‌کنیم",
      bullets: [
        "داده‌های ثبت‌نام: نام، آدرس ایمیل، شماره تلفن، کشور و تاریخ تولد.",
        "اطلاعات حساب کاربری: عکس‌های پروفایل، ترجیحات جستجو، وضعیت تأهل و زبان مورد نظر.",
        "داده‌های استفاده: سوابق ورود، تعاملات با سایر اعضا و ارتباطات.",
        "محتوایی که به اشتراک می‌گذارید: پیام‌ها، فایل‌های صوتی، عکس‌ها یا ویدیوها.",
        "اطلاعات فنی: نوع دستگاه، سیستم عامل، آدرس IP و زبان.",
      ],
    },
    {
      title: "چگونگی استفاده ما از داده‌ها",
      bullets: [
        "برای ایجاد و مدیریت حساب‌های کاربری.",
        "برای تسهیل جستجو و تطبیق بین اعضا.",
        "برای فعال‌سازی خدمات ارتباطی (پیام‌ها، تماس‌های صوتی و تصویری).",
        "برای بهبود خدمات و تجربه کاربری.",
        "برای تضمین امنیت و جلوگیری از استفاده غیرمجاز یا کلاهبرداری.",
      ],
    },
    {
      title: "اشتراک‌گذاری داده‌ها",
      intro: "ما ممکن است داده‌های شما را تنها در موارد زیر به اشتراک بگذاریم:",
      bullets: [
        "برای مقاصد قانونی: در صورتی که قوانین قابل اجرا آن را ایجاب کنند.",
        "با رضایت کاربر: در صورتی که شما انتخاب کنید داده‌های خود را از طریق پلتفرم با عضو دیگری به اشتراک بگذارید.",
      ],
    },
    {
      title: "حفاظت از داده‌ها",
      paragraphs: [
        "ما از پروتکل‌های امنیتی پیشرفته (رمزگذاری SSL) برای حفاظت از داده‌ها در حین انتقال و ذخیره‌سازی استفاده می‌کنیم. دسترسی به داده‌های شما تنها محدود به کارکنان یا شرکایی است که نیاز مشروع به آن دارند.",
      ],
    },
    {
      title: "حقوق کاربر (GDPR)",
      bullets: [
        "دسترسی به داده‌های شخصی خود.",
        "درخواست اصلاح یا به‌روزرسانی داده‌های خود.",
        "درخواست حذف دائمی حساب کاربری و داده‌های خود.",
        "اعتراض به برخی فعالیت‌های پردازش.",
        "دریافت نسخه‌ای از داده‌های خود در قالبی قابل انتقال.",
      ],
    },
    {
      title: "کوکی‌ها",
      paragraphs: [
        "ما ممکن است از کوکی‌ها برای بهبود تجربه مرور و تحلیل استفاده از برنامه استفاده کنیم. شما می‌توانید تنظیمات مرورگر خود را برای غیرفعال کردن آن‌ها تنظیم کنید، اما این ممکن است بر برخی ویژگی‌ها تأثیر بگذارد.",
      ],
    },
    {
      title: "حریم خصوصی کودکان",
      paragraphs: ["استفاده از پلتفرم برای افراد زیر 18 سال مجاز نیست."],
    },
    {
      title: "نظارت بر محتوا و ارتباطات",
      paragraphs: [
        "به منظور حفظ جدیت و رعایت احکام شریعت اسلامی، پلتفرم زفاف حق نظارت بر مکالمات و محتوای درون پلتفرم را در صورت لزوم، از جمله تصاویر و معرفی‌های صوتی، برای خود محفوظ می‌دارد تا محیطی امن و محافظه‌کارانه تضمین شود و از هرگونه تخلف یا سوءاستفاده جلوگیری گردد.",
      ],
    },
    {
      title: "تغییرات در سیاست حفظ حریم خصوصی",
      paragraphs: [
        "ما ممکن است این سیاست را هر از چند گاهی به‌روزرسانی کنیم. کاربران از هرگونه تغییر اساسی از طریق ایمیل یا اعلان درون‌برنامه‌ای مطلع خواهند شد.",
      ],
    },
  ],
  contact: {
    title: "با ما تماس بگیرید",
    intro: "اگر هرگونه سؤالی درباره این سیاست یا داده‌های خود دارید، می‌توانید از طریق زیر با ما تماس بگیرید:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const pt: PrivacyCopy = {
  hero: {
    title: "Política de Privacidade",
    imageAlt: "Uma mão assinando um documento eletrônico sem papel, simbolizando a proteção de dados",
  },
  meta: {
    lastUpdated: "Última atualização: 10 de setembro de 2025",
    tagline: "Com a Plataforma Zefaaf, você está seguro",
  },
  sections: [
    {
      title: "Introdução",
      paragraphs: [
        "A Plataforma Zefaaf ('nós', 'a Plataforma') está comprometida em proteger a privacidade de seus usuários. Esta política descreve como coletamos, usamos e protegemos dados pessoais quando você utiliza o aplicativo ou o site da Zefaaf.",
      ],
    },
    {
      title: "Dados que coletamos",
      bullets: [
        "Dados de registro: nome, endereço de e-mail, número de telefone, país e data de nascimento.",
        "Informações da conta: fotos de perfil, preferências de pesquisa, estado civil e idioma preferido.",
        "Dados de uso: registros de login, interações com outros membros e comunicações.",
        "Conteúdo que você compartilha: mensagens, arquivos de áudio, fotos ou vídeos.",
        "Informações técnicas: tipo de dispositivo, sistema operacional, endereço IP e idioma.",
      ],
    },
    {
      title: "Como usamos os dados",
      bullets: [
        "Para criar e gerenciar contas.",
        "Para facilitar a busca e a correspondência entre membros.",
        "Para viabilizar serviços de comunicação (mensagens, chamadas de voz e vídeo).",
        "Para melhorar os serviços e a experiência do usuário.",
        "Para garantir a segurança e prevenir o uso não autorizado ou fraude.",
      ],
    },
    {
      title: "Compartilhamento de dados",
      intro: "Podemos compartilhar seus dados apenas nos seguintes casos:",
      bullets: [
        "Para fins legais: caso exigido pelas leis aplicáveis.",
        "Com o consentimento do usuário: caso você opte por compartilhar seus dados com outro membro por meio da Plataforma.",
      ],
    },
    {
      title: "Proteção de dados",
      paragraphs: [
        "Utilizamos protocolos de segurança avançados (criptografia SSL) para proteger os dados durante a transmissão e o armazenamento. O acesso aos seus dados é restrito apenas a funcionários ou parceiros com uma necessidade legítima.",
      ],
    },
    {
      title: "Direitos do usuário (RGPD)",
      bullets: [
        "Acessar seus dados pessoais.",
        "Solicitar a correção ou atualização de seus dados.",
        "Solicitar a exclusão permanente de sua conta e dados.",
        "Opor-se a determinadas atividades de processamento.",
        "Obter uma cópia de seus dados em um formato portátil.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Podemos usar cookies para melhorar a experiência de navegação e analisar o uso do aplicativo. Você pode ajustar as configurações do navegador para desativá-los, mas isso pode afetar algumas funcionalidades.",
      ],
    },
    {
      title: "Privacidade infantil",
      paragraphs: ["Não é permitido o uso da Plataforma por pessoas menores de 18 anos."],
    },
    {
      title: "Supervisão de conteúdo e comunicação",
      paragraphs: [
        "Para manter a seriedade e a conformidade com a Sharia, a plataforma Zefaaf reserva-se o direito de supervisionar conversas e conteúdos dentro da plataforma quando necessário, incluindo imagens e apresentações de voz, a fim de garantir um ambiente seguro e conservador e prevenir quaisquer violações ou manipulações.",
      ],
    },
    {
      title: "Alterações na Política de Privacidade",
      paragraphs: [
        "Podemos atualizar esta política periodicamente. Os usuários serão notificados de quaisquer alterações relevantes por e-mail ou por meio de uma notificação no aplicativo.",
      ],
    },
  ],
  contact: {
    title: "Fale Conosco",
    intro: "Se você tiver dúvidas sobre esta política ou seus dados, pode entrar em contato conosco em:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const ja: PrivacyCopy = {
  hero: {
    title: "プライバシーポリシー",
    imageAlt: "ペーパーレスの電子文書に署名する手、データ保護を象徴するイメージ",
  },
  meta: {
    lastUpdated: "最終更新日:2025年9月10日",
    tagline: "Zefaafプラットフォームなら安心です",
  },
  sections: [
    {
      title: "はじめに",
      paragraphs: [
        "Zefaafプラットフォーム(以下「当社」または「本プラットフォーム」)は、利用者のプライバシー保護に努めています。本ポリシーは、お客様がZefaafのアプリケーションまたはウェブサイトをご利用になる際に、当社が個人データをどのように収集、利用、保護するかについて説明するものです。",
      ],
    },
    {
      title: "収集するデータ",
      bullets: [
        "登録データ:氏名、メールアドレス、電話番号、国、生年月日。",
        "アカウント情報:プロフィール写真、検索設定、婚姻状況、希望言語。",
        "利用データ:ログイン記録、他の会員とのやり取り、およびコミュニケーション内容。",
        "共有していただくコンテンツ:メッセージ、音声ファイル、写真、動画。",
        "技術情報:デバイスの種類、オペレーティングシステム、IPアドレス、言語。",
      ],
    },
    {
      title: "データの利用目的",
      bullets: [
        "アカウントの作成および管理のため。",
        "会員間の検索およびマッチングを円滑にするため。",
        "コミュニケーションサービス(メッセージ、音声通話、ビデオ通話)を提供するため。",
        "サービスおよびユーザー体験を向上させるため。",
        "セキュリティを確保し、不正利用や詐欺を防止するため。",
      ],
    },
    {
      title: "データの共有",
      intro: "当社は、以下の場合に限りお客様のデータを共有することがあります。",
      bullets: [
        "法的目的のため:適用法令により必要とされる場合。",
        "利用者の同意がある場合:お客様が本プラットフォームを通じて他の会員とデータを共有することを選択された場合。",
      ],
    },
    {
      title: "データ保護",
      paragraphs: [
        "当社は、送信および保管中のデータを保護するため、高度なセキュリティプロトコル(SSL暗号化)を使用しています。お客様のデータへのアクセスは、正当な必要性を有する従業員またはパートナーに限定されています。",
      ],
    },
    {
      title: "利用者の権利(GDPR)",
      bullets: [
        "ご自身の個人データへのアクセス。",
        "データの訂正または更新の要求。",
        "アカウントおよびデータの完全な削除の要求。",
        "特定の処理活動への異議申し立て。",
        "ポータブルな形式でのデータの複製の取得。",
      ],
    },
    {
      title: "クッキー",
      paragraphs: [
        "当社は、閲覧体験を向上させ、アプリの利用状況を分析するためにクッキーを使用することがあります。ブラウザの設定を変更してこれらを無効にすることも可能ですが、その場合、一部の機能に影響が生じることがあります。",
      ],
    },
    {
      title: "児童のプライバシー",
      paragraphs: ["本プラットフォームは18歳未満の方のご利用を許可しておりません。"],
    },
    {
      title: "コンテンツおよびコミュニケーションの監督",
      paragraphs: [
        "真剣な交際の維持およびシャリーア(イスラム法)の遵守を確保するため、Zefaafプラットフォームは、必要に応じて画像や音声による自己紹介を含む、プラットフォーム内の会話やコンテンツを監督する権利を留保します。これは、安全で節度ある環境を確保し、あらゆる違反や不正操作を防止するためです。",
      ],
    },
    {
      title: "プライバシーポリシーの変更",
      paragraphs: [
        "当社は、本ポリシーを随時更新することがあります。重要な変更がある場合、利用者にはメールまたはアプリ内通知を通じてお知らせします。",
      ],
    },
  ],
  contact: {
    title: "お問い合わせ",
    intro: "本ポリシーまたはお客様のデータについてご質問がございましたら、以下までお問い合わせください。",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const ko: PrivacyCopy = {
  hero: {
    title: "개인정보 처리방침",
    imageAlt: "종이 없는 전자 문서에 서명하는 손, 데이터 보호를 상징함",
  },
  meta: {
    lastUpdated: "최종 업데이트: 2025년 9월 10일",
    tagline: "Zefaaf 플랫폼과 함께라면 안전합니다",
  },
  sections: [
    {
      title: "소개",
      paragraphs: [
        "Zefaaf 플랫폼('당사', '플랫폼')은 이용자의 개인정보 보호에 최선을 다하고 있습니다. 본 방침은 귀하가 Zefaaf 애플리케이션 또는 웹사이트를 이용할 때 당사가 개인정보를 어떻게 수집, 이용 및 보호하는지를 설명합니다.",
      ],
    },
    {
      title: "당사가 수집하는 데이터",
      bullets: [
        "가입 정보: 이름, 이메일 주소, 전화번호, 국가 및 생년월일.",
        "계정 정보: 프로필 사진, 검색 설정, 결혼 상태 및 선호 언어.",
        "이용 데이터: 로그인 기록, 다른 회원과의 상호작용 및 소통 내역.",
        "귀하가 공유하는 콘텐츠: 메시지, 오디오 파일, 사진 또는 동영상.",
        "기술 정보: 기기 유형, 운영 체제, IP 주소 및 언어.",
      ],
    },
    {
      title: "당사의 데이터 이용 방법",
      bullets: [
        "계정 생성 및 관리를 위해.",
        "회원 간 검색 및 매칭을 원활히 하기 위해.",
        "커뮤니케이션 서비스(메시지, 음성 및 영상 통화)를 제공하기 위해.",
        "서비스 및 사용자 경험을 개선하기 위해.",
        "보안을 확보하고 무단 이용 또는 사기를 방지하기 위해.",
      ],
    },
    {
      title: "데이터 공유",
      intro: "당사는 다음의 경우에 한해 귀하의 데이터를 공유할 수 있습니다.",
      bullets: [
        "법적 목적을 위해: 관련 법률에서 요구하는 경우.",
        "이용자 동의 하에: 귀하가 플랫폼을 통해 다른 회원과 데이터를 공유하기로 선택한 경우.",
      ],
    },
    {
      title: "데이터 보호",
      paragraphs: [
        "당사는 데이터 전송 및 저장 중 보호를 위해 고급 보안 프로토콜(SSL 암호화)을 사용합니다. 귀하의 데이터에 대한 접근은 정당한 필요가 있는 직원 또는 파트너로 한정됩니다.",
      ],
    },
    {
      title: "이용자 권리(GDPR)",
      bullets: [
        "본인의 개인정보에 접근할 권리.",
        "본인의 데이터 정정 또는 갱신을 요청할 권리.",
        "본인의 계정 및 데이터의 영구 삭제를 요청할 권리.",
        "특정 처리 활동에 대해 이의를 제기할 권리.",
        "이동 가능한 형식으로 본인 데이터의 사본을 받을 권리.",
      ],
    },
    {
      title: "쿠키",
      paragraphs: [
        "당사는 탐색 경험을 개선하고 앱 사용 현황을 분석하기 위해 쿠키를 사용할 수 있습니다. 브라우저 설정을 조정하여 이를 비활성화할 수 있으나, 이 경우 일부 기능에 영향을 줄 수 있습니다.",
      ],
    },
    {
      title: "아동의 개인정보 보호",
      paragraphs: ["본 플랫폼은 만 18세 미만인 자의 이용을 허용하지 않습니다."],
    },
    {
      title: "콘텐츠 및 커뮤니케이션 감독",
      paragraphs: [
        "진지함과 샤리아 준수를 유지하기 위해, Zefaaf 플랫폼은 필요한 경우 이미지 및 음성 소개를 포함하여 플랫폼 내 대화 및 콘텐츠를 감독할 권리를 보유하며, 이는 안전하고 보수적인 환경을 보장하고 위반 또는 조작을 방지하기 위함입니다.",
      ],
    },
    {
      title: "개인정보 처리방침의 변경",
      paragraphs: [
        "당사는 본 방침을 수시로 업데이트할 수 있습니다. 중대한 변경 사항이 있을 경우 이메일 또는 앱 내 알림을 통해 이용자에게 통지됩니다.",
      ],
    },
  ],
  contact: {
    title: "문의하기",
    intro: "본 방침이나 귀하의 데이터에 대해 문의사항이 있으시면 아래로 연락해 주십시오.",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const it: PrivacyCopy = {
  hero: {
    title: "Informativa sulla Privacy",
    imageAlt: "Una mano che firma un documento elettronico senza carta, simbolo della protezione dei dati",
  },
  meta: {
    lastUpdated: "Ultimo aggiornamento: 10 settembre 2025",
    tagline: "Con la Piattaforma Zefaaf, sei al sicuro",
  },
  sections: [
    {
      title: "Introduzione",
      paragraphs: [
        "La Piattaforma Zefaaf ('noi', 'la Piattaforma') si impegna a proteggere la privacy dei propri utenti. La presente informativa descrive come raccogliamo, utilizziamo e proteggiamo i dati personali quando utilizzi l'applicazione o il sito web di Zefaaf.",
      ],
    },
    {
      title: "Dati che raccogliamo",
      bullets: [
        "Dati di registrazione: nome, indirizzo e-mail, numero di telefono, paese e data di nascita.",
        "Informazioni sull'account: foto del profilo, preferenze di ricerca, stato civile e lingua preferita.",
        "Dati di utilizzo: registri di accesso, interazioni con altri membri e comunicazioni.",
        "Contenuti condivisi: messaggi, file audio, foto o video.",
        "Informazioni tecniche: tipo di dispositivo, sistema operativo, indirizzo IP e lingua.",
      ],
    },
    {
      title: "Come utilizziamo i dati",
      bullets: [
        "Per creare e gestire gli account.",
        "Per facilitare la ricerca e l'abbinamento tra i membri.",
        "Per abilitare i servizi di comunicazione (messaggi, chiamate vocali e video).",
        "Per migliorare i servizi e l'esperienza utente.",
        "Per garantire la sicurezza e prevenire usi non autorizzati o frodi.",
      ],
    },
    {
      title: "Condivisione dei dati",
      intro: "Possiamo condividere i tuoi dati solo nei seguenti casi:",
      bullets: [
        "Per fini legali: se richiesto dalle leggi applicabili.",
        "Con il consenso dell'utente: se scegli di condividere i tuoi dati con un altro membro tramite la Piattaforma.",
      ],
    },
    {
      title: "Protezione dei dati",
      paragraphs: [
        "Utilizziamo protocolli di sicurezza avanzati (crittografia SSL) per proteggere i dati durante la trasmissione e l'archiviazione. L'accesso ai tuoi dati è limitato ai soli dipendenti o partner con una necessità legittima.",
      ],
    },
    {
      title: "Diritti dell'utente (GDPR)",
      bullets: [
        "Accedere ai propri dati personali.",
        "Richiedere la correzione o l'aggiornamento dei propri dati.",
        "Richiedere la cancellazione permanente del proprio account e dei propri dati.",
        "Opporsi a determinate attività di trattamento.",
        "Ottenere una copia dei propri dati in un formato portabile.",
      ],
    },
    {
      title: "Cookie",
      paragraphs: [
        "Potremmo utilizzare cookie per migliorare l'esperienza di navigazione e analizzare l'utilizzo dell'app. Puoi modificare le impostazioni del browser per disattivarli, ma ciò potrebbe influire su alcune funzionalità.",
      ],
    },
    {
      title: "Privacy dei minori",
      paragraphs: ["L'uso della Piattaforma non è consentito a persone di età inferiore ai 18 anni."],
    },
    {
      title: "Supervisione dei contenuti e delle comunicazioni",
      paragraphs: [
        "Per preservare la serietà delle intenzioni e la conformità alla Sharia, la piattaforma Zefaaf si riserva il diritto di supervisionare le conversazioni e i contenuti all'interno della piattaforma quando necessario, comprese le immagini e le presentazioni vocali, al fine di garantire un ambiente sicuro e conservatore e prevenire eventuali violazioni o manipolazioni.",
      ],
    },
    {
      title: "Modifiche all'Informativa sulla Privacy",
      paragraphs: [
        "Potremmo aggiornare periodicamente la presente informativa. Gli utenti saranno informati di eventuali modifiche sostanziali via e-mail o tramite una notifica all'interno dell'app.",
      ],
    },
  ],
  contact: {
    title: "Contattaci",
    intro: "Se hai domande su questa informativa o sui tuoi dati, puoi contattarci a:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const ur: PrivacyCopy = {
  hero: {
    title: "پرائیویسی پالیسی",
    imageAlt: "ایک ہاتھ کاغذ کے بغیر الیکٹرانک دستاویز پر دستخط کر رہا ہے، جو ڈیٹا کے تحفظ کی علامت ہے",
  },
  meta: {
    lastUpdated: "آخری تازہ کاری: 10 ستمبر 2025",
    tagline: "زفاف پلیٹ فارم کے ساتھ، آپ محفوظ ہیں",
  },
  sections: [
    {
      title: "تعارف",
      paragraphs: [
        "زفاف پلیٹ فارم ('ہم'، 'پلیٹ فارم') اپنے صارفین کی رازداری کے تحفظ کے لیے پرعزم ہے۔ یہ پالیسی بیان کرتی ہے کہ جب آپ زفاف ایپلیکیشن یا ویب سائٹ استعمال کرتے ہیں تو ہم ذاتی ڈیٹا کو کس طرح جمع، استعمال اور محفوظ کرتے ہیں۔",
      ],
    },
    {
      title: "وہ ڈیٹا جو ہم جمع کرتے ہیں",
      bullets: [
        "رجسٹریشن ڈیٹا: نام، ای میل ایڈریس، فون نمبر، ملک، اور تاریخ پیدائش۔",
        "اکاؤنٹ کی معلومات: پروفائل تصاویر، تلاش کی ترجیحات، ازدواجی حیثیت، اور پسندیدہ زبان۔",
        "استعمال کا ڈیٹا: لاگ ان ریکارڈ، دیگر اراکین کے ساتھ تعاملات، اور بات چیت۔",
        "وہ مواد جو آپ شیئر کرتے ہیں: پیغامات، آڈیو فائلیں، تصاویر، یا ویڈیوز۔",
        "تکنیکی معلومات: ڈیوائس کی قسم، آپریٹنگ سسٹم، آئی پی ایڈریس، اور زبان۔",
      ],
    },
    {
      title: "ہم ڈیٹا کیسے استعمال کرتے ہیں",
      bullets: [
        "اکاؤنٹس بنانے اور ان کا انتظام کرنے کے لیے۔",
        "اراکین کے درمیان تلاش اور میچنگ کو آسان بنانے کے لیے۔",
        "مواصلاتی خدمات (پیغامات، صوتی اور ویڈیو کالز) کو فعال کرنے کے لیے۔",
        "خدمات اور صارف کے تجربے کو بہتر بنانے کے لیے۔",
        "سلامتی کو یقینی بنانے اور غیر مجاز استعمال یا دھوکہ دہی کو روکنے کے لیے۔",
      ],
    },
    {
      title: "ڈیٹا کا اشتراک",
      intro: "ہم آپ کا ڈیٹا صرف درج ذیل صورتوں میں شیئر کر سکتے ہیں:",
      bullets: [
        "قانونی مقاصد کے لیے: اگر لاگو قوانین کے تحت ضروری ہو۔",
        "صارف کی رضامندی سے: اگر آپ پلیٹ فارم کے ذریعے اپنا ڈیٹا کسی دوسرے رکن کے ساتھ شیئر کرنے کا انتخاب کریں۔",
      ],
    },
    {
      title: "ڈیٹا کا تحفظ",
      paragraphs: [
        "ہم ٹرانسمیشن اور اسٹوریج کے دوران ڈیٹا کے تحفظ کے لیے جدید سیکیورٹی پروٹوکولز (SSL خفیہ کاری) استعمال کرتے ہیں۔ آپ کے ڈیٹا تک رسائی صرف ان ملازمین یا شراکت داروں تک محدود ہے جنہیں اس کی جائز ضرورت ہو۔",
      ],
    },
    {
      title: "صارف کے حقوق (GDPR)",
      bullets: [
        "اپنے ذاتی ڈیٹا تک رسائی۔",
        "اپنے ڈیٹا کی اصلاح یا اپ ڈیٹ کی درخواست کرنا۔",
        "اپنے اکاؤنٹ اور ڈیٹا کو مستقل طور پر حذف کرنے کی درخواست کرنا۔",
        "بعض پروسیسنگ سرگرمیوں پر اعتراض کرنا۔",
        "قابلِ منتقلی فارمیٹ میں اپنے ڈیٹا کی ایک کاپی حاصل کرنا۔",
      ],
    },
    {
      title: "کوکیز",
      paragraphs: [
        "ہم براؤزنگ کے تجربے کو بہتر بنانے اور ایپ کے استعمال کا تجزیہ کرنے کے لیے کوکیز استعمال کر سکتے ہیں۔ آپ انہیں غیر فعال کرنے کے لیے براؤزر کی ترتیبات کو ایڈجسٹ کر سکتے ہیں، لیکن اس سے کچھ خصوصیات متاثر ہو سکتی ہیں۔",
      ],
    },
    {
      title: "بچوں کی رازداری",
      paragraphs: ["18 سال سے کم عمر افراد کے لیے پلیٹ فارم کا استعمال جائز نہیں ہے۔"],
    },
    {
      title: "مواد اور مواصلات کی نگرانی",
      paragraphs: [
        "سنجیدگی اور شریعت کی پاسداری کو برقرار رکھنے کے لیے، زفاف پلیٹ فارم ضرورت پڑنے پر پلیٹ فارم کے اندر گفتگو اور مواد، بشمول تصاویر اور صوتی تعارف، کی نگرانی کرنے کا حق محفوظ رکھتا ہے، تاکہ ایک محفوظ اور شائستہ ماحول کو یقینی بنایا جا سکے اور کسی بھی خلاف ورزی یا جوڑ توڑ کو روکا جا سکے۔",
      ],
    },
    {
      title: "پرائیویسی پالیسی میں تبدیلیاں",
      paragraphs: [
        "ہم وقتاً فوقتاً اس پالیسی کو اپ ڈیٹ کر سکتے ہیں۔ صارفین کو کسی بھی اہم تبدیلی کے بارے میں ای میل کے ذریعے یا ایپ کے اندر اطلاع کے ذریعے مطلع کیا جائے گا۔",
      ],
    },
  ],
  contact: {
    title: "ہم سے رابطہ کریں",
    intro: "اگر آپ کو اس پالیسی یا اپنے ڈیٹا کے بارے میں کوئی سوالات ہیں، تو آپ ہم سے درج ذیل پر رابطہ کر سکتے ہیں:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const ta: PrivacyCopy = {
  hero: {
    title: "தனியுரிமைக் கொள்கை",
    imageAlt: "தரவுப் பாதுகாப்பைக் குறிக்கும் வகையில், காகிதமற்ற மின்னணு ஆவணத்தில் கையொப்பமிடும் ஒரு கை",
  },
  meta: {
    lastUpdated: "கடைசியாகப் புதுப்பிக்கப்பட்டது: செப்டம்பர் 10, 2025",
    tagline: "ஜெஃபாஃப் தளத்துடன், நீங்கள் பாதுகாப்பாக இருக்கிறீர்கள்",
  },
  sections: [
    {
      title: "அறிமுகம்",
      paragraphs: [
        "ஜெஃபாஃப் தளம் ('நாங்கள்', 'தளம்') தனது பயனர்களின் தனியுரிமையைப் பாதுகாக்க உறுதிபூண்டுள்ளது. நீங்கள் ஜெஃபாஃப் பயன்பாட்டையோ அல்லது இணையதளத்தையோ பயன்படுத்தும் போது, தனிப்பட்ட தரவை நாங்கள் எவ்வாறு சேகரிக்கிறோம், பயன்படுத்துகிறோம், மற்றும் பாதுகாக்கிறோம் என்பதை இந்தக் கொள்கை விவரிக்கிறது.",
      ],
    },
    {
      title: "நாங்கள் சேகரிக்கும் தரவு",
      bullets: [
        "பதிவுத் தரவு: பெயர், மின்னஞ்சல் முகவரி, தொலைபேசி எண், நாடு, மற்றும் பிறந்த தேதி.",
        "கணக்குத் தகவல்: சுயவிவரப் புகைப்படங்கள், தேடல் விருப்பத்தேர்வுகள், திருமண நிலை, மற்றும் விருப்பமான மொழி.",
        "பயன்பாட்டுத் தரவு: உள்நுழைவுப் பதிவுகள், மற்ற உறுப்பினர்களுடனான தொடர்புகள், மற்றும் தகவல்தொடர்புகள்.",
        "நீங்கள் பகிரும் உள்ளடக்கம்: செய்திகள், ஒலிக் கோப்புகள், புகைப்படங்கள், அல்லது வீடியோக்கள்.",
        "தொழில்நுட்பத் தகவல்: சாதன வகை, இயக்க முறைமை, ஐபி முகவரி, மற்றும் மொழி.",
      ],
    },
    {
      title: "தரவை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்",
      bullets: [
        "கணக்குகளை உருவாக்கவும் நிர்வகிக்கவும்.",
        "உறுப்பினர்களிடையே தேடல் மற்றும் பொருத்தத்தை எளிதாக்க.",
        "தகவல் தொடர்பு சேவைகளை (செய்திகள், குரல் மற்றும் வீடியோ அழைப்புகள்) இயக்குவதற்கு.",
        "சேவைகள் மற்றும் பயனர் அனுபவத்தை மேம்படுத்த.",
        "பாதுகாப்பை உறுதிசெய்யவும், அங்கீகரிக்கப்படாத பயன்பாடு அல்லது மோசடியைத் தடுக்கவும்.",
      ],
    },
    {
      title: "தரவைப் பகிர்தல்",
      intro: "பின்வரும் சூழல்களில் மட்டுமே உங்கள் தரவை நாங்கள் பகிரக்கூடும்:",
      bullets: [
        "சட்ட நோக்கங்களுக்காக: பொருந்தும் சட்டங்களால் தேவைப்பட்டால்.",
        "பயனர் ஒப்புதலுடன்: தளம் மூலம் உங்கள் தரவை மற்றொரு உறுப்பினருடன் பகிர்ந்துகொள்ள நீங்கள் தேர்வுசெய்தால்.",
      ],
    },
    {
      title: "தரவுப் பாதுகாப்பு",
      paragraphs: [
        "பரிமாற்றம் மற்றும் சேமிப்பின் போது தரவைப் பாதுகாக்க நாங்கள் மேம்பட்ட பாதுகாப்பு நெறிமுறைகளை (SSL மறையாக்கம்) பயன்படுத்துகிறோம். உங்கள் தரவை அணுகுவது சட்டப்பூர்வ தேவை கொண்ட ஊழியர்கள் அல்லது கூட்டாளர்களுக்கு மட்டுமே கட்டுப்படுத்தப்பட்டுள்ளது.",
      ],
    },
    {
      title: "பயனர் உரிமைகள் (GDPR)",
      bullets: [
        "உங்கள் தனிப்பட்ட தரவை அணுகுதல்.",
        "உங்கள் தரவைத் திருத்தவோ புதுப்பிக்கவோ கோருதல்.",
        "உங்கள் கணக்கு மற்றும் தரவை நிரந்தரமாக நீக்கக் கோருதல்.",
        "சில செயலாக்க நடவடிக்கைகளுக்கு எதிர்ப்பு தெரிவித்தல்.",
        "நகர்த்தக்கூடிய வடிவத்தில் உங்கள் தரவின் நகலைப் பெறுதல்.",
      ],
    },
    {
      title: "குக்கீகள்",
      paragraphs: [
        "உலாவல் அனுபவத்தை மேம்படுத்தவும், பயன்பாட்டின் பயன்பாட்டைப் பகுப்பாய்வு செய்யவும் நாங்கள் குக்கீகளைப் பயன்படுத்தலாம். அவற்றை முடக்க உலாவி அமைப்புகளை நீங்கள் சரிசெய்யலாம், ஆனால் இது சில அம்சங்களைப் பாதிக்கலாம்.",
      ],
    },
    {
      title: "குழந்தைகளின் தனியுரிமை",
      paragraphs: ["18 வயதுக்குட்பட்டவர்கள் இந்தத் தளத்தைப் பயன்படுத்த அனுமதி இல்லை."],
    },
    {
      title: "உள்ளடக்கம் மற்றும் தகவல்தொடர்பு மேற்பார்வை",
      paragraphs: [
        "தீவிரத்தன்மையையும் ஷரீஆ இணக்கத்தையும் பேணுவதற்காக, ஜெஃபாஃப் தளம் தேவைப்படும்போது, படங்கள் மற்றும் குரல் அறிமுகங்கள் உட்பட, தளத்திற்குள் உள்ள உரையாடல்கள் மற்றும் உள்ளடக்கத்தை மேற்பார்வையிடும் உரிமையைத் தக்கவைத்துக்கொள்கிறது, இது பாதுகாப்பான மற்றும் பழமைவாத சூழலை உறுதிசெய்யவும், எந்தவொரு மீறல் அல்லது தந்திரத்தையும் தடுக்கவும் ஆகும்.",
      ],
    },
    {
      title: "தனியுரிமைக் கொள்கையில் மாற்றங்கள்",
      paragraphs: [
        "நாங்கள் இந்தக் கொள்கையை அவ்வப்போது புதுப்பிக்கலாம். குறிப்பிடத்தக்க மாற்றங்கள் ஏதேனும் இருந்தால் பயனர்களுக்கு மின்னஞ்சல் மூலமாகவோ அல்லது பயன்பாட்டிற்குள் அறிவிப்பு மூலமாகவோ தெரிவிக்கப்படும்.",
      ],
    },
  ],
  contact: {
    title: "எங்களைத் தொடர்பு கொள்ளுங்கள்",
    intro: "இந்தக் கொள்கை அல்லது உங்கள் தரவு குறித்து ஏதேனும் கேள்விகள் இருந்தால், பின்வரும் வழிகளில் எங்களைத் தொடர்பு கொள்ளலாம்:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const am: PrivacyCopy = {
  hero: {
    title: "የግላዊነት ፖሊሲ",
    imageAlt: "የመረጃ ጥበቃን የሚያመለክት፣ ወረቀት አልባ ኤሌክትሮኒክ ሰነድ የሚፈርም እጅ",
  },
  meta: {
    lastUpdated: "መጨረሻ የተዘመነው: መስከረም 10, 2025",
    tagline: "ከዘፋአፍ መድረክ ጋር፣ ደህንነትዎ የተጠበቀ ነው",
  },
  sections: [
    {
      title: "መግቢያ",
      paragraphs: [
        "የዘፋአፍ መድረክ ('እኛ'፣ 'መድረኩ') የተጠቃሚዎቹን ግላዊነት ለመጠበቅ ቁርጠኛ ነው። ይህ ፖሊሲ የዘፋአፍ መተግበሪያ ወይም ድረ-ገጽ ሲጠቀሙ ግላዊ መረጃን እንዴት እንደምንሰበስብ፣ እንደምንጠቀም እና እንደምንጠብቅ ያብራራል።",
      ],
    },
    {
      title: "የምንሰበስበው መረጃ",
      bullets: [
        "የምዝገባ መረጃ: ስም፣ የኢሜይል አድራሻ፣ ስልክ ቁጥር፣ ሀገር እና የትውልድ ቀን።",
        "የመለያ መረጃ: የመገለጫ ፎቶዎች፣ የፍለጋ ምርጫዎች፣ የጋብቻ ሁኔታ እና ተመራጭ ቋንቋ።",
        "የአጠቃቀም መረጃ: የመግቢያ መዝገቦች፣ ከሌሎች አባላት ጋር ያለ መስተጋብር እና ግንኙነቶች።",
        "እርስዎ የሚያጋሩት ይዘት: መልዕክቶች፣ የድምጽ ፋይሎች፣ ፎቶዎች ወይም ቪዲዮዎች።",
        "ቴክኒካዊ መረጃ: የመሳሪያ አይነት፣ ኦፕሬቲንግ ሲስተም፣ የአይፒ አድራሻ እና ቋንቋ።",
      ],
    },
    {
      title: "መረጃውን እንዴት እንደምንጠቀም",
      bullets: [
        "መለያዎችን ለመፍጠር እና ለማስተዳደር።",
        "በአባላት መካከል ፍለጋን እና ማዛመድን ለማመቻቸት።",
        "የግንኙነት አገልግሎቶችን (መልዕክቶች፣ የድምጽ እና የቪዲዮ ጥሪዎች) ለማንቃት።",
        "አገልግሎቶችን እና የተጠቃሚ ተሞክሮን ለማሻሻል።",
        "ደህንነትን ለማረጋገጥ እና ያልተፈቀደ አጠቃቀምን ወይም ማጭበርበርን ለመከላከል።",
      ],
    },
    {
      title: "የመረጃ ማጋራት",
      intro: "እኛ የእርስዎን መረጃ በሚከተሉት ሁኔታዎች ብቻ ልናጋራ እንችላለን:",
      bullets: [
        "ለሕጋዊ ዓላማዎች: በሚመለከተው ሕግ ከተጠየቀ።",
        "በተጠቃሚ ፈቃድ: እርስዎ በመድረኩ በኩል መረጃዎን ከሌላ አባል ጋር ለማጋራት ከመረጡ።",
      ],
    },
    {
      title: "የመረጃ ጥበቃ",
      paragraphs: [
        "በስርጭት እና በማከማቻ ወቅት መረጃን ለመጠበቅ የላቀ የደህንነት ፕሮቶኮሎችን (የSSL ምስጠራ) እንጠቀማለን። የእርስዎ መረጃ ተደራሽነት ትክክለኛ አስፈላጊነት ላላቸው ሠራተኞች ወይም አጋሮች ብቻ የተገደበ ነው።",
      ],
    },
    {
      title: "የተጠቃሚ መብቶች (GDPR)",
      bullets: [
        "ወደ ግላዊ መረጃዎ ተደራሽ መሆን።",
        "የመረጃዎን ማስተካከያ ወይም ማዘመን መጠየቅ።",
        "መለያዎን እና መረጃዎን ለዘላለም እንዲሰረዝ መጠየቅ።",
        "በተወሰኑ የማቀነባበሪያ እንቅስቃሴዎች ላይ መቃወም።",
        "የመረጃዎን ቅጂ በተንቀሳቃሽ ቅርጸት ማግኘት።",
      ],
    },
    {
      title: "ኩኪዎች",
      paragraphs: [
        "የአሰሳ ተሞክሮን ለማሻሻል እና የመተግበሪያ አጠቃቀምን ለመተንተን ኩኪዎችን ልንጠቀም እንችላለን። እነሱን ለማሰናከል የአሳሽ ቅንብሮችን ማስተካከል ይችላሉ፣ ነገር ግን ይህ አንዳንድ ባህሪያትን ሊነካ ይችላል።",
      ],
    },
    {
      title: "የልጆች ግላዊነት",
      paragraphs: ["መድረኩ ዕድሜያቸው ከ18 ዓመት በታች ለሆኑ ግለሰቦች እንዲጠቀሙበት አይፈቀድም።"],
    },
    {
      title: "የይዘት እና የግንኙነት ቁጥጥር",
      paragraphs: [
        "ቁምነገርነትን እና ከሸሪዓ ጋር መጣጣምን ለማስቀጠል፣ የዘፋአፍ መድረክ አስፈላጊ ሆኖ ሲገኝ በመድረኩ ውስጥ ያሉ ውይይቶችን እና ይዘቶችን፣ ምስሎችን እና የድምጽ ራስን የማስተዋወቅ ይዘቶችን ጨምሮ የመቆጣጠር መብትን ይይዛል፣ ይህም ደህንነቱ የተጠበቀ እና ኮንሰርቫቲቭ አካባቢን ለማረጋገጥ እና ማንኛውንም ጥሰት ወይም ማጭበርበር ለመከላከል ነው።",
      ],
    },
    {
      title: "በግላዊነት ፖሊሲ ላይ የሚደረጉ ለውጦች",
      paragraphs: [
        "ይህንን ፖሊሲ ከጊዜ ወደ ጊዜ ልናዘምነው እንችላለን። ተጠቃሚዎች ስለ ማንኛውም ጠቃሚ ለውጦች በኢሜይል ወይም በመተግበሪያ ውስጥ በሚደረግ ማሳወቂያ ይነገራቸዋል።",
      ],
    },
  ],
  contact: {
    title: "ያግኙን",
    intro: "ስለዚህ ፖሊሲ ወይም ስለ እርስዎ መረጃ ማንኛውም ጥያቄ ካልዎት፣ በሚከተለው በኩል ሊያገኙን ይችላሉ:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const sv: PrivacyCopy = {
  hero: {
    title: "Integritetspolicy",
    imageAlt: "En hand som signerar ett pappersfritt elektroniskt dokument, en symbol för dataskydd",
  },
  meta: {
    lastUpdated: "Senast uppdaterad: 10 september 2025",
    tagline: "Med Zefaaf-plattformen är du trygg",
  },
  sections: [
    {
      title: "Introduktion",
      paragraphs: [
        "Zefaaf-plattformen ('vi', 'Plattformen') är engagerad i att skydda sina användares integritet. Denna policy beskriver hur vi samlar in, använder och skyddar personuppgifter när du använder Zefaaf-applikationen eller webbplatsen.",
      ],
    },
    {
      title: "Data vi samlar in",
      bullets: [
        "Registreringsdata: namn, e-postadress, telefonnummer, land och födelsedatum.",
        "Kontoinformation: profilbilder, sökpreferenser, civilstånd och önskat språk.",
        "Användningsdata: inloggningsuppgifter, interaktioner med andra medlemmar och kommunikation.",
        "Innehåll du delar: meddelanden, ljudfiler, foton eller videor.",
        "Teknisk information: enhetstyp, operativsystem, IP-adress och språk.",
      ],
    },
    {
      title: "Hur vi använder data",
      bullets: [
        "För att skapa och hantera konton.",
        "För att underlätta sökning och matchning mellan medlemmar.",
        "För att möjliggöra kommunikationstjänster (meddelanden, röst- och videosamtal).",
        "För att förbättra tjänsterna och användarupplevelsen.",
        "För att säkerställa säkerhet och förhindra obehörig användning eller bedrägeri.",
      ],
    },
    {
      title: "Delning av data",
      intro: "Vi kan endast dela dina uppgifter i följande fall:",
      bullets: [
        "För juridiska ändamål: om tillämplig lag så kräver.",
        "Med användarens samtycke: om du väljer att dela dina uppgifter med en annan medlem via Plattformen.",
      ],
    },
    {
      title: "Dataskydd",
      paragraphs: [
        "Vi använder avancerade säkerhetsprotokoll (SSL-kryptering) för att skydda data under överföring och lagring. Åtkomsten till dina uppgifter är begränsad till anställda eller partners med ett legitimt behov.",
      ],
    },
    {
      title: "Användarens rättigheter (GDPR)",
      bullets: [
        "Tillgång till dina personuppgifter.",
        "Begära rättelse eller uppdatering av dina uppgifter.",
        "Begära permanent radering av ditt konto och dina uppgifter.",
        "Invända mot vissa behandlingsaktiviteter.",
        "Erhålla en kopia av dina uppgifter i ett portabelt format.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Vi kan använda cookies för att förbättra webbläsarupplevelsen och analysera appanvändningen. Du kan justera dina webbläsarinställningar för att inaktivera dem, men detta kan påverka vissa funktioner.",
      ],
    },
    {
      title: "Barns integritet",
      paragraphs: ["Plattformen får inte användas av personer under 18 år."],
    },
    {
      title: "Övervakning av innehåll och kommunikation",
      paragraphs: [
        "För att upprätthålla seriositet och efterlevnad av sharia förbehåller sig Zefaaf-plattformen rätten att vid behov övervaka konversationer och innehåll inom plattformen, inklusive bilder och röstpresentationer, för att säkerställa en trygg och konservativ miljö och förhindra eventuella överträdelser eller manipulation.",
      ],
    },
    {
      title: "Ändringar av integritetspolicyn",
      paragraphs: [
        "Vi kan uppdatera denna policy från tid till annan. Användare kommer att meddelas om väsentliga ändringar via e-post eller genom en avisering i appen.",
      ],
    },
  ],
  contact: {
    title: "Kontakta oss",
    intro: "Om du har några frågor om denna policy eller dina uppgifter kan du kontakta oss på:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const da: PrivacyCopy = {
  hero: {
    title: "Privatlivspolitik",
    imageAlt: "En hånd, der underskriver et papirløst elektronisk dokument, som symboliserer databeskyttelse",
  },
  meta: {
    lastUpdated: "Senest opdateret: 10. september 2025",
    tagline: "Med Zefaaf-platformen er du tryg",
  },
  sections: [
    {
      title: "Introduktion",
      paragraphs: [
        "Zefaaf-platformen ('vi', 'Platformen') er forpligtet til at beskytte sine brugeres privatliv. Denne politik beskriver, hvordan vi indsamler, bruger og beskytter personoplysninger, når du bruger Zefaaf-applikationen eller -webstedet.",
      ],
    },
    {
      title: "Data vi indsamler",
      bullets: [
        "Registreringsdata: navn, e-mailadresse, telefonnummer, land og fødselsdato.",
        "Kontooplysninger: profilbilleder, søgepræferencer, civilstand og foretrukket sprog.",
        "Brugsdata: loginoplysninger, interaktioner med andre medlemmer og kommunikation.",
        "Indhold du deler: beskeder, lydfiler, fotos eller videoer.",
        "Teknisk information: enhedstype, operativsystem, IP-adresse og sprog.",
      ],
    },
    {
      title: "Hvordan vi bruger data",
      bullets: [
        "For at oprette og administrere konti.",
        "For at lette søgning og matchning mellem medlemmer.",
        "For at muliggøre kommunikationstjenester (beskeder, tale- og videoopkald).",
        "For at forbedre tjenester og brugeroplevelse.",
        "For at sikre sikkerhed og forhindre uautoriseret brug eller svindel.",
      ],
    },
    {
      title: "Deling af data",
      intro: "Vi kan kun dele dine data i følgende tilfælde:",
      bullets: [
        "Til juridiske formål: hvis gældende lovgivning kræver det.",
        "Med brugerens samtykke: hvis du vælger at dele dine data med et andet medlem via Platformen.",
      ],
    },
    {
      title: "Databeskyttelse",
      paragraphs: [
        "Vi bruger avancerede sikkerhedsprotokoller (SSL-kryptering) til at beskytte data under overførsel og opbevaring. Adgang til dine data er begrænset til medarbejdere eller partnere med et legitimt behov.",
      ],
    },
    {
      title: "Brugerens rettigheder (GDPR)",
      bullets: [
        "Adgang til dine personoplysninger.",
        "Anmode om rettelse eller opdatering af dine data.",
        "Anmode om permanent sletning af din konto og dine data.",
        "Gøre indsigelse mod visse behandlingsaktiviteter.",
        "Modtage en kopi af dine data i et transportabelt format.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Vi kan bruge cookies til at forbedre browseroplevelsen og analysere appbrug. Du kan justere dine browserindstillinger for at deaktivere dem, men dette kan påvirke visse funktioner.",
      ],
    },
    {
      title: "Børns privatliv",
      paragraphs: ["Platformen må ikke bruges af personer under 18 år."],
    },
    {
      title: "Overvågning af indhold og kommunikation",
      paragraphs: [
        "For at bevare alvor og overholdelse af sharia forbeholder Zefaaf-platformen sig retten til om nødvendigt at overvåge samtaler og indhold på platformen, herunder billeder og stemmepræsentationer, for at sikre et sikkert og konservativt miljø og forhindre eventuelle overtrædelser eller manipulation.",
      ],
    },
    {
      title: "Ændringer af privatlivspolitikken",
      paragraphs: [
        "Vi kan opdatere denne politik fra tid til anden. Brugere vil blive underrettet om væsentlige ændringer via e-mail eller gennem en notifikation i appen.",
      ],
    },
  ],
  contact: {
    title: "Kontakt os",
    intro: "Hvis du har spørgsmål om denne politik eller dine data, kan du kontakte os på:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const sq: PrivacyCopy = {
  hero: {
    title: "Politika e Privatësisë",
    imageAlt: "Një dorë që nënshkruan një dokument elektronik pa letër, simbol i mbrojtjes së të dhënave",
  },
  meta: {
    lastUpdated: "Përditësuar së fundmi: 10 shtator 2025",
    tagline: "Me Platformën Zefaaf, ju jeni të sigurt",
  },
  sections: [
    {
      title: "Hyrje",
      paragraphs: [
        "Platforma Zefaaf ('ne', 'Platforma') është e angazhuar të mbrojë privatësinë e përdoruesve të saj. Kjo politikë përshkruan mënyrën se si ne mbledhim, përdorim dhe mbrojmë të dhënat personale kur ju përdorni aplikacionin ose faqen e internetit Zefaaf.",
      ],
    },
    {
      title: "Të dhënat që mbledhim",
      bullets: [
        "Të dhëna regjistrimi: emri, adresa e email-it, numri i telefonit, shteti dhe data e lindjes.",
        "Informacioni i llogarisë: fotot e profilit, preferencat e kërkimit, gjendja civile dhe gjuha e preferuar.",
        "Të dhëna përdorimi: regjistrimet e hyrjes, ndërveprimet me anëtarë të tjerë dhe komunikimet.",
        "Përmbajtja që ndani: mesazhe, skedarë audio, foto ose video.",
        "Informacioni teknik: lloji i pajisjes, sistemi operativ, adresa IP dhe gjuha.",
      ],
    },
    {
      title: "Si i përdorim të dhënat",
      bullets: [
        "Për të krijuar dhe menaxhuar llogaritë.",
        "Për të lehtësuar kërkimin dhe përputhjen mes anëtarëve.",
        "Për të mundësuar shërbimet e komunikimit (mesazhe, telefonata zanore dhe video).",
        "Për të përmirësuar shërbimet dhe përvojën e përdoruesit.",
        "Për të siguruar mbrojtjen dhe për të parandaluar përdorimin e paautorizuar ose mashtrimin.",
      ],
    },
    {
      title: "Ndarja e të dhënave",
      intro: "Ne mund t'i ndajmë të dhënat tuaja vetëm në rastet e mëposhtme:",
      bullets: [
        "Për qëllime ligjore: nëse kërkohet nga ligjet në fuqi.",
        "Me pëlqimin e përdoruesit: nëse zgjidhni të ndani të dhënat tuaja me një anëtar tjetër përmes Platformës.",
      ],
    },
    {
      title: "Mbrojtja e të dhënave",
      paragraphs: [
        "Ne përdorim protokolle të avancuara sigurie (enkriptim SSL) për të mbrojtur të dhënat gjatë transmetimit dhe ruajtjes. Aksesi në të dhënat tuaja kufizohet vetëm te punonjësit ose partnerët me nevojë legjitime.",
      ],
    },
    {
      title: "Të drejtat e përdoruesit (GDPR)",
      bullets: [
        "Qasje në të dhënat tuaja personale.",
        "Kërkim për korrigjim ose përditësim të të dhënave tuaja.",
        "Kërkim për fshirjen e përhershme të llogarisë dhe të dhënave tuaja.",
        "Kundërshtim ndaj aktiviteteve të caktuara të përpunimit.",
        "Marrja e një kopjeje të të dhënave tuaja në një format të transferueshëm.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Ne mund të përdorim cookies për të përmirësuar përvojën e shfletimit dhe për të analizuar përdorimin e aplikacionit. Ju mund të rregulloni cilësimet e shfletuesit për t'i çaktivizuar ato, por kjo mund të ndikojë disa veçori.",
      ],
    },
    {
      title: "Privatësia e fëmijëve",
      paragraphs: ["Përdorimi i Platformës nuk lejohet për persona nën moshën 18 vjeç."],
    },
    {
      title: "Mbikëqyrja e përmbajtjes dhe komunikimit",
      paragraphs: [
        "Për të ruajtur seriozitetin dhe përputhshmërinë me Sheriatin, platforma Zefaaf rezervon të drejtën për të mbikëqyrur bisedat dhe përmbajtjen brenda platformës kur është e nevojshme, duke përfshirë imazhet dhe prezantimet zanore, për të siguruar një mjedis të sigurt dhe konservativ dhe për të parandaluar çdo shkelje apo manipulim.",
      ],
    },
    {
      title: "Ndryshimet në Politikën e Privatësisë",
      paragraphs: [
        "Ne mund ta përditësojmë këtë politikë herë pas here. Përdoruesit do të njoftohen për çdo ndryshim thelbësor përmes email-it ose përmes një njoftimi brenda aplikacionit.",
      ],
    },
  ],
  contact: {
    title: "Na Kontaktoni",
    intro: "Nëse keni ndonjë pyetje në lidhje me këtë politikë ose të dhënat tuaja, mund të na kontaktoni në:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const uz: PrivacyCopy = {
  hero: {
    title: "Maxfiylik siyosati",
    imageAlt: "Ma'lumotlarni himoya qilish ramzi sifatida qog'ozsiz elektron hujjatga imzo chekayotgan qo'l",
  },
  meta: {
    lastUpdated: "Oxirgi yangilanish: 2025-yil 10-sentabr",
    tagline: "Zefaaf platformasi bilan siz xavfsizsiz",
  },
  sections: [
    {
      title: "Kirish",
      paragraphs: [
        "Zefaaf platformasi ('biz', 'Platforma') o'z foydalanuvchilarining maxfiyligini himoya qilishga sodiqdir. Ushbu siyosat siz Zefaaf ilovasi yoki veb-saytidan foydalanganingizda biz shaxsiy ma'lumotlarni qanday to'plashimiz, ishlatishimiz va himoya qilishimizni tavsiflaydi.",
      ],
    },
    {
      title: "Biz to'playdigan ma'lumotlar",
      bullets: [
        "Ro'yxatdan o'tish ma'lumotlari: ism, elektron pochta manzili, telefon raqami, mamlakat va tug'ilgan sana.",
        "Hisob ma'lumotlari: profil rasmlari, qidiruv afzalliklari, oilaviy holat va tanlangan til.",
        "Foydalanish ma'lumotlari: tizimga kirish yozuvlari, boshqa a'zolar bilan o'zaro munosabatlar va muloqotlar.",
        "Siz ulashadigan kontent: xabarlar, audio fayllar, fotosuratlar yoki videolar.",
        "Texnik ma'lumotlar: qurilma turi, operatsion tizim, IP-manzil va til.",
      ],
    },
    {
      title: "Ma'lumotlardan qanday foydalanamiz",
      bullets: [
        "Hisoblarni yaratish va boshqarish uchun.",
        "A'zolar o'rtasida qidiruv va moslashtirishni osonlashtirish uchun.",
        "Aloqa xizmatlarini (xabarlar, ovozli va video qo'ng'iroqlar) ta'minlash uchun.",
        "Xizmatlar va foydalanuvchi tajribasini yaxshilash uchun.",
        "Xavfsizlikni ta'minlash va ruxsatsiz foydalanish yoki firibgarlikning oldini olish uchun.",
      ],
    },
    {
      title: "Ma'lumotlarni almashish",
      intro: "Biz sizning ma'lumotlaringizni faqat quyidagi hollarda almashishimiz mumkin:",
      bullets: [
        "Qonuniy maqsadlarda: agar amaldagi qonunlar talab qilsa.",
        "Foydalanuvchi roziligi bilan: agar siz Platforma orqali ma'lumotlaringizni boshqa a'zo bilan ulashishni tanlasangiz.",
      ],
    },
    {
      title: "Ma'lumotlarni himoya qilish",
      paragraphs: [
        "Biz ma'lumotlarni uzatish va saqlash jarayonida himoya qilish uchun ilg'or xavfsizlik protokollaridan (SSL shifrlash) foydalanamiz. Sizning ma'lumotlaringizga kirish faqat qonuniy ehtiyoji bo'lgan xodimlar yoki hamkorlar bilan cheklangan.",
      ],
    },
    {
      title: "Foydalanuvchi huquqlari (GDPR)",
      bullets: [
        "O'zingizning shaxsiy ma'lumotlaringizga kirish.",
        "Ma'lumotlaringizni tuzatish yoki yangilashni so'rash.",
        "Hisobingiz va ma'lumotlaringizni butunlay o'chirishni so'rash.",
        "Ma'lum qayta ishlash faoliyatlariga qarshi chiqish.",
        "Ma'lumotlaringizning ko'chma formatdagi nusxasini olish.",
      ],
    },
    {
      title: "Cookie-fayllar",
      paragraphs: [
        "Biz brauzerni ko'rish tajribasini yaxshilash va ilova foydalanishini tahlil qilish uchun cookie-fayllardan foydalanishimiz mumkin. Ularni o'chirish uchun brauzer sozlamalarini o'zgartirishingiz mumkin, lekin bu ba'zi funksiyalarga ta'sir qilishi mumkin.",
      ],
    },
    {
      title: "Bolalar maxfiyligi",
      paragraphs: ["Platformadan 18 yoshga to'lmagan shaxslar foydalanishiga ruxsat berilmaydi."],
    },
    {
      title: "Kontent va muloqotni nazorat qilish",
      paragraphs: [
        "Jiddiylikni va shariatga muvofiqlikni saqlab qolish maqsadida, Zefaaf platformasi zarur bo'lganda platforma ichidagi suhbatlar va kontentni, jumladan tasvirlar va ovozli tanishtiruvlarni nazorat qilish huquqini o'zida saqlab qoladi, bu esa xavfsiz va konservativ muhitni ta'minlash hamda har qanday buzilish yoki firibgarlikning oldini olish uchundir.",
      ],
    },
    {
      title: "Maxfiylik siyosatidagi o'zgarishlar",
      paragraphs: [
        "Biz ushbu siyosatni vaqti-vaqti bilan yangilashimiz mumkin. Foydalanuvchilar har qanday muhim o'zgarishlar haqida elektron pochta orqali yoki ilova ichidagi bildirishnoma orqali xabardor qilinadi.",
      ],
    },
  ],
  contact: {
    title: "Biz bilan bog'laning",
    intro: "Agar ushbu siyosat yoki ma'lumotlaringiz haqida savollaringiz bo'lsa, biz bilan quyidagi manzillar orqali bog'lanishingiz mumkin:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const az: PrivacyCopy = {
  hero: {
    title: "Məxfilik Siyasəti",
    imageAlt: "Məlumatların qorunmasını simvolizə edən, kağızsız elektron sənədi imzalayan əl",
  },
  meta: {
    lastUpdated: "Son yenilənmə: 10 sentyabr 2025",
    tagline: "Zefaaf Platforması ilə siz təhlükəsizsiniz",
  },
  sections: [
    {
      title: "Giriş",
      paragraphs: [
        "Zefaaf Platforması ('biz', 'Platforma') istifadəçilərinin məxfiliyinin qorunmasına sadiqdir. Bu siyasət Zefaaf tətbiqindən və ya vebsaytından istifadə edərkən şəxsi məlumatları necə topladığımızı, istifadə etdiyimizi və qoruduğumuzu izah edir.",
      ],
    },
    {
      title: "Topladığımız məlumatlar",
      bullets: [
        "Qeydiyyat məlumatları: ad, e-poçt ünvanı, telefon nömrəsi, ölkə və doğum tarixi.",
        "Hesab məlumatları: profil şəkilləri, axtarış üstünlükləri, ailə vəziyyəti və seçilmiş dil.",
        "İstifadə məlumatları: giriş qeydləri, digər üzvlərlə qarşılıqlı əlaqələr və ünsiyyət.",
        "Sizin paylaşdığınız məzmun: mesajlar, audio fayllar, şəkillər və ya videolar.",
        "Texniki məlumatlar: cihazın növü, əməliyyat sistemi, IP ünvanı və dil.",
      ],
    },
    {
      title: "Məlumatlardan necə istifadə edirik",
      bullets: [
        "Hesabları yaratmaq və idarə etmək üçün.",
        "Üzvlər arasında axtarışı və uyğunlaşdırmanı asanlaşdırmaq üçün.",
        "Ünsiyyət xidmətlərini (mesajlar, səsli və video zənglər) təmin etmək üçün.",
        "Xidmətləri və istifadəçi təcrübəsini təkmilləşdirmək üçün.",
        "Təhlükəsizliyi təmin etmək və icazəsiz istifadəni və ya fırıldaqçılığı önləmək üçün.",
      ],
    },
    {
      title: "Məlumatların paylaşılması",
      intro: "Sizin məlumatlarınızı yalnız aşağıdakı hallarda paylaşa bilərik:",
      bullets: [
        "Qanuni məqsədlər üçün: tətbiq olunan qanunlar tələb etdikdə.",
        "İstifadəçinin razılığı ilə: əgər siz Platforma vasitəsilə məlumatlarınızı başqa bir üzvlə paylaşmağı seçsəniz.",
      ],
    },
    {
      title: "Məlumatların qorunması",
      paragraphs: [
        "Ötürülmə və saxlanma zamanı məlumatları qorumaq üçün qabaqcıl təhlükəsizlik protokollarından (SSL şifrələmə) istifadə edirik. Məlumatlarınıza giriş yalnız qanuni ehtiyacı olan işçilər və ya tərəfdaşlarla məhdudlaşdırılır.",
      ],
    },
    {
      title: "İstifadəçi hüquqları (GDPR)",
      bullets: [
        "Şəxsi məlumatlarınıza giriş.",
        "Məlumatlarınızın düzəldilməsi və ya yenilənməsini tələb etmək.",
        "Hesabınızın və məlumatlarınızın daimi silinməsini tələb etmək.",
        "Müəyyən emal fəaliyyətlərinə etiraz etmək.",
        "Məlumatlarınızın köçürülə bilən formatda surətini əldə etmək.",
      ],
    },
    {
      title: "Kukilər",
      paragraphs: [
        "Gəzinti təcrübəsini yaxşılaşdırmaq və tətbiqin istifadəsini təhlil etmək üçün kukilərdən istifadə edə bilərik. Onları deaktiv etmək üçün brauzer parametrlərini tənzimləyə bilərsiniz, lakin bu bəzi funksiyalara təsir göstərə bilər.",
      ],
    },
    {
      title: "Uşaqların məxfiliyi",
      paragraphs: ["Platformadan 18 yaşına çatmayan şəxslərin istifadəsinə icazə verilmir."],
    },
    {
      title: "Məzmun və ünsiyyətə nəzarət",
      paragraphs: [
        "Ciddiliyi və şəriətə uyğunluğu qorumaq üçün, Zefaaf platforması lazım gəldikdə, şəkillər və səsli təqdimatlar daxil olmaqla, platforma daxilindəki söhbətlərə və məzmuna nəzarət etmək hüququnu özündə saxlayır ki, bu da təhlükəsiz və mühafizəkar mühiti təmin etmək və hər hansı pozuntu və ya manipulyasiyanın qarşısını almaq üçündür.",
      ],
    },
    {
      title: "Məxfilik Siyasətindəki dəyişikliklər",
      paragraphs: [
        "Biz bu siyasəti vaxtaşırı yeniləyə bilərik. İstifadəçilər hər hansı əhəmiyyətli dəyişikliklər barədə e-poçt vasitəsilə və ya tətbiq daxilində bildiriş vasitəsilə məlumatlandırılacaqlar.",
      ],
    },
  ],
  contact: {
    title: "Bizimlə əlaqə saxlayın",
    intro: "Bu siyasət və ya məlumatlarınızla bağlı hər hansı sualınız varsa, bizimlə aşağıdakı ünvanlar vasitəsilə əlaqə saxlaya bilərsiniz:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const fil: PrivacyCopy = {
  hero: {
    title: "Patakaran sa Privacy",
    imageAlt: "Isang kamay na pumipirma sa isang walang-papel na elektronikong dokumento, sumasagisag sa proteksyon ng data",
  },
  meta: {
    lastUpdated: "Huling In-update: Setyembre 10, 2025",
    tagline: "Sa Zefaaf Platform, Ligtas Ka",
  },
  sections: [
    {
      title: "Panimula",
      paragraphs: [
        "Ang Zefaaf Platform ('kami', 'ang Plataporma') ay nakatuon sa pagprotekta sa privacy ng mga gumagamit nito. Inilalarawan ng patakarang ito kung paano namin kinokolekta, ginagamit, at pinoprotektahan ang personal na datos kapag ginagamit mo ang aplikasyon o website ng Zefaaf.",
      ],
    },
    {
      title: "Data na Aming Kinokolekta",
      bullets: [
        "Data sa Pagpaparehistro: Pangalan, email address, numero ng telepono, bansa, at petsa ng kapanganakan.",
        "Impormasyon ng Account: Mga larawan sa profile, mga kagustuhan sa paghahanap, katayuan sa pag-aasawa, at gustong wika.",
        "Data sa Paggamit: Mga rekord ng pag-log in, mga interaksyon sa ibang mga miyembro, at mga komunikasyon.",
        "Nilalamang Ibinabahagi Mo: Mga mensahe, audio file, larawan, o video.",
        "Teknikal na Impormasyon: Uri ng device, operating system, IP address, at wika.",
      ],
    },
    {
      title: "Paano Namin Ginagamit ang Data",
      bullets: [
        "Upang lumikha at pamahalaan ang mga account.",
        "Upang mapadali ang paghahanap at pagpapares sa pagitan ng mga miyembro.",
        "Upang paganahin ang mga serbisyo ng komunikasyon (mensahe, tawag na boses, at video call).",
        "Upang mapabuti ang mga serbisyo at karanasan ng gumagamit.",
        "Upang matiyak ang seguridad at maiwasan ang hindi awtorisadong paggamit o pandaraya.",
      ],
    },
    {
      title: "Pagbabahagi ng Data",
      intro: "Maaari naming ibahagi ang iyong data lamang sa mga sumusunod na kaso:",
      bullets: [
        "Para sa legal na layunin: Kung kinakailangan ng naaangkop na batas.",
        "Sa pahintulot ng gumagamit: Kung pinili mong ibahagi ang iyong data sa ibang miyembro sa pamamagitan ng Plataporma.",
      ],
    },
    {
      title: "Proteksyon ng Data",
      paragraphs: [
        "Gumagamit kami ng mga advanced na protokol sa seguridad (SSL encryption) upang protektahan ang data habang ipinapadala at iniimbak. Ang access sa iyong data ay limitado lamang sa mga empleyado o kasosyo na may lehitimong pangangailangan.",
      ],
    },
    {
      title: "Mga Karapatan ng Gumagamit (GDPR)",
      bullets: [
        "Access sa iyong personal na datos.",
        "Humiling ng pagwawasto o pag-update ng iyong data.",
        "Humiling ng permanenteng pagbura ng iyong account at data.",
        "Tumutol sa ilang mga aktibidad ng pagpoproseso.",
        "Kumuha ng kopya ng iyong data sa isang naililipat na format.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Maaari kaming gumamit ng cookies upang mapahusay ang karanasan sa pag-browse at suriin ang paggamit ng app. Maaari mong isaayos ang mga setting ng browser upang i-disable ang mga ito, ngunit maaari nitong maapektuhan ang ilang mga tampok.",
      ],
    },
    {
      title: "Privacy ng mga Bata",
      paragraphs: ["Hindi pinapahintulutan ang paggamit ng Plataporma ng mga indibidwal na wala pang 18 taong gulang."],
    },
    {
      title: "Pangangasiwa sa Nilalaman at Komunikasyon",
      paragraphs: [
        "Upang mapanatili ang seryosidad at pagsunod sa Sharia, ang Zefaaf platform ay nagreserba ng karapatan na pangasiwaan ang mga usapan at nilalaman sa loob ng platform kapag kinakailangan, kabilang ang mga larawan at boses na pagpapakilala, upang matiyak ang isang ligtas at konserbatibong kapaligiran at maiwasan ang anumang paglabag o manipulasyon.",
      ],
    },
    {
      title: "Mga Pagbabago sa Patakaran sa Privacy",
      paragraphs: [
        "Maaari naming i-update ang patakarang ito paminsan-minsan. Aabisuhan ang mga gumagamit tungkol sa anumang mahalagang pagbabago sa pamamagitan ng email o sa pamamagitan ng abiso sa loob ng app.",
      ],
    },
  ],
  contact: {
    title: "Makipag-ugnayan sa Amin",
    intro: "Kung mayroon kang anumang katanungan tungkol sa patakarang ito o sa iyong data, maaari kang makipag-ugnayan sa amin sa:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const hi: PrivacyCopy = {
  hero: {
    title: "गोपनीयता नीति",
    imageAlt: "डेटा सुरक्षा का प्रतीक, कागज़-रहित इलेक्ट्रॉनिक दस्तावेज़ पर हस्ताक्षर करता एक हाथ",
  },
  meta: {
    lastUpdated: "अंतिम अद्यतन: 10 सितंबर, 2025",
    tagline: "ज़ेफ़ाफ़ प्लेटफ़ॉर्म के साथ, आप सुरक्षित हैं",
  },
  sections: [
    {
      title: "परिचय",
      paragraphs: [
        "ज़ेफ़ाफ़ प्लेटफ़ॉर्म ('हम', 'प्लेटफ़ॉर्म') अपने उपयोगकर्ताओं की गोपनीयता की सुरक्षा के लिए प्रतिबद्ध है। यह नीति बताती है कि जब आप ज़ेफ़ाफ़ एप्लिकेशन या वेबसाइट का उपयोग करते हैं तो हम व्यक्तिगत डेटा को कैसे एकत्र, उपयोग और संरक्षित करते हैं।",
      ],
    },
    {
      title: "हम जो डेटा एकत्र करते हैं",
      bullets: [
        "पंजीकरण डेटा: नाम, ईमेल पता, फ़ोन नंबर, देश, और जन्म तिथि।",
        "खाता जानकारी: प्रोफ़ाइल तस्वीरें, खोज प्राथमिकताएं, वैवाहिक स्थिति, और पसंदीदा भाषा।",
        "उपयोग डेटा: लॉगिन रिकॉर्ड, अन्य सदस्यों के साथ बातचीत, और संचार।",
        "आपके द्वारा साझा की गई सामग्री: संदेश, ऑडियो फ़ाइलें, तस्वीरें, या वीडियो।",
        "तकनीकी जानकारी: डिवाइस प्रकार, ऑपरेटिंग सिस्टम, आईपी पता, और भाषा।",
      ],
    },
    {
      title: "हम डेटा का उपयोग कैसे करते हैं",
      bullets: [
        "खाते बनाने और प्रबंधित करने के लिए।",
        "सदस्यों के बीच खोज और मिलान को सुविधाजनक बनाने के लिए।",
        "संचार सेवाओं (संदेश, वॉयस और वीडियो कॉल) को सक्षम करने के लिए।",
        "सेवाओं और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए।",
        "सुरक्षा सुनिश्चित करने और अनधिकृत उपयोग या धोखाधड़ी को रोकने के लिए।",
      ],
    },
    {
      title: "डेटा साझाकरण",
      intro: "हम आपका डेटा केवल निम्नलिखित मामलों में साझा कर सकते हैं:",
      bullets: [
        "कानूनी उद्देश्यों के लिए: यदि लागू कानूनों द्वारा आवश्यक हो।",
        "उपयोगकर्ता की सहमति से: यदि आप प्लेटफ़ॉर्म के माध्यम से किसी अन्य सदस्य के साथ अपना डेटा साझा करना चुनते हैं।",
      ],
    },
    {
      title: "डेटा सुरक्षा",
      paragraphs: [
        "हम प्रसारण और भंडारण के दौरान डेटा की सुरक्षा के लिए उन्नत सुरक्षा प्रोटोकॉल (एसएसएल एन्क्रिप्शन) का उपयोग करते हैं। आपके डेटा तक पहुंच केवल उन कर्मचारियों या भागीदारों तक सीमित है जिनकी वैध आवश्यकता है।",
      ],
    },
    {
      title: "उपयोगकर्ता अधिकार (GDPR)",
      bullets: [
        "अपने व्यक्तिगत डेटा तक पहुंच।",
        "अपने डेटा के सुधार या अद्यतन का अनुरोध करना।",
        "अपने खाते और डेटा को स्थायी रूप से हटाने का अनुरोध करना।",
        "कुछ प्रसंस्करण गतिविधियों पर आपत्ति करना।",
        "पोर्टेबल प्रारूप में अपने डेटा की एक प्रति प्राप्त करना।",
      ],
    },
    {
      title: "कुकीज़",
      paragraphs: [
        "हम ब्राउज़िंग अनुभव को बढ़ाने और ऐप के उपयोग का विश्लेषण करने के लिए कुकीज़ का उपयोग कर सकते हैं। आप उन्हें अक्षम करने के लिए ब्राउज़र सेटिंग्स समायोजित कर सकते हैं, लेकिन इससे कुछ सुविधाएं प्रभावित हो सकती हैं।",
      ],
    },
    {
      title: "बच्चों की गोपनीयता",
      paragraphs: ["18 वर्ष से कम आयु के व्यक्तियों द्वारा प्लेटफ़ॉर्म का उपयोग करने की अनुमति नहीं है।"],
    },
    {
      title: "सामग्री और संचार की निगरानी",
      paragraphs: [
        "गंभीरता और शरिया अनुपालन बनाए रखने के लिए, ज़ेफ़ाफ़ प्लेटफ़ॉर्म आवश्यकता पड़ने पर, छवियों और आवाज़ परिचयों सहित, प्लेटफ़ॉर्म के भीतर बातचीत और सामग्री की निगरानी करने का अधिकार सुरक्षित रखता है, ताकि एक सुरक्षित और मर्यादित वातावरण सुनिश्चित हो सके और किसी भी उल्लंघन या हेरफेर को रोका जा सके।",
      ],
    },
    {
      title: "गोपनीयता नीति में परिवर्तन",
      paragraphs: [
        "हम समय-समय पर इस नीति को अद्यतन कर सकते हैं। किसी भी महत्वपूर्ण परिवर्तन के बारे में उपयोगकर्ताओं को ईमेल के माध्यम से या ऐप के भीतर सूचना के माध्यम से सूचित किया जाएगा।",
      ],
    },
  ],
  contact: {
    title: "हमसे संपर्क करें",
    intro: "यदि आपके पास इस नीति या अपने डेटा के बारे में कोई प्रश्न हैं, तो आप हमसे यहां संपर्क कर सकते हैं:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const kk: PrivacyCopy = {
  hero: {
    title: "Құпиялық саясаты",
    imageAlt: "Деректерді қорғауды білдіретін, қағазсыз электрондық құжатқа қол қойып жатқан қол",
  },
  meta: {
    lastUpdated: "Соңғы жаңарту: 2025 жылғы 10 қыркүйек",
    tagline: "Zefaaf платформасымен сіз қауіпсізсіз",
  },
  sections: [
    {
      title: "Кіріспе",
      paragraphs: [
        "Zefaaf платформасы («біз», «Платформа») пайдаланушыларының құпиялығын қорғауға берілген. Осы саясатта сіз Zefaaf қолданбасын немесе веб-сайтын пайдаланған кезде дербес деректерді қалай жинайтынымыз, пайдаланатынымыз және қорғайтынымыз сипатталады.",
      ],
    },
    {
      title: "Біз жинайтын деректер",
      bullets: [
        "Тіркеу деректері: аты-жөні, электрондық пошта мекенжайы, телефон нөмірі, ел және туған күні.",
        "Есептік жазба ақпараты: профиль суреттері, іздеу параметрлері, отбасылық жағдайы және қалаулы тіл.",
        "Пайдалану деректері: жүйеге кіру жазбалары, басқа мүшелермен өзара әрекеттесу және хат-хабар алмасу.",
        "Сіз бөлісетін мазмұн: хабарламалар, аудио файлдар, фотосуреттер немесе бейнелер.",
        "Техникалық ақпарат: құрылғы түрі, операциялық жүйе, IP мекенжайы және тіл.",
      ],
    },
    {
      title: "Деректерді қалай пайдаланамыз",
      bullets: [
        "Есептік жазбаларды жасау және басқару үшін.",
        "Мүшелер арасында іздеу мен сәйкестендіруді жеңілдету үшін.",
        "Байланыс қызметтерін (хабарламалар, дауыстық және бейне қоңыраулар) қамтамасыз ету үшін.",
        "Қызметтер мен пайдаланушы тәжірибесін жақсарту үшін.",
        "Қауіпсіздікті қамтамасыз ету және рұқсатсыз пайдалануды немесе алаяқтықты болдырмау үшін.",
      ],
    },
    {
      title: "Деректермен бөлісу",
      intro: "Біз сіздің деректеріңізбен тек келесі жағдайларда ғана бөлісе аламыз:",
      bullets: [
        "Заңды мақсаттар үшін: қолданыстағы заңдар талап еткен жағдайда.",
        "Пайдаланушының келісімімен: сіз Платформа арқылы деректеріңізбен басқа мүшемен бөлісуді таңдасаңыз.",
      ],
    },
    {
      title: "Деректерді қорғау",
      paragraphs: [
        "Біз деректерді тасымалдау және сақтау кезінде қорғау үшін озық қауіпсіздік хаттамаларын (SSL шифрлауы) пайдаланамыз. Сіздің деректеріңізге қол жеткізу заңды қажеттілігі бар қызметкерлермен немесе серіктестермен ғана шектеледі.",
      ],
    },
    {
      title: "Пайдаланушы құқықтары (GDPR)",
      bullets: [
        "Жеке деректеріңізге қол жеткізу.",
        "Деректеріңізді түзетуді немесе жаңартуды сұрау.",
        "Есептік жазбаңыз бен деректеріңізді толығымен жоюды сұрау.",
        "Кейбір өңдеу әрекеттеріне қарсылық білдіру.",
        "Деректеріңіздің көшірмесін тасымалдауға ыңғайлы форматта алу.",
      ],
    },
    {
      title: "Cookie файлдары",
      paragraphs: [
        "Біз шолу тәжірибесін жақсарту және қолданбаны пайдалануды талдау үшін cookie файлдарын пайдалана аламыз. Оларды өшіру үшін браузер параметрлерін реттей аласыз, бірақ бұл кейбір мүмкіндіктерге әсер етуі мүмкін.",
      ],
    },
    {
      title: "Балалардың құпиялығы",
      paragraphs: ["Платформаны 18 жасқа толмаған адамдардың пайдалануына рұқсат етілмейді."],
    },
    {
      title: "Мазмұн мен байланысты бақылау",
      paragraphs: [
        "Байыптылық пен шариғатқа сәйкестікті сақтау мақсатында, Zefaaf платформасы қажет болған жағдайда, суреттер мен дауыстық таныстырулар да қоса алғанда, платформа ішіндегі әңгімелер мен мазмұнды бақылау құқығын өзінде қалдырады, бұл қауіпсіз және консервативті ортаны қамтамасыз ету және кез келген бұзушылық пен алаяқтықты болдырмау үшін жасалады.",
      ],
    },
    {
      title: "Құпиялық саясатына енгізілетін өзгерістер",
      paragraphs: [
        "Біз осы саясатты уақыт өте келе жаңартып отыруымыз мүмкін. Пайдаланушыларға кез келген елеулі өзгерістер туралы электрондық пошта арқылы немесе қолданба ішіндегі хабарландыру арқылы хабарланады.",
      ],
    },
  ],
  contact: {
    title: "Бізбен байланысыңыз",
    intro: "Осы саясат немесе деректеріңіз туралы қандай да бір сұрақтарыңыз болса, бізбен мына арқылы хабарласа аласыз:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const ms: PrivacyCopy = {
  hero: {
    title: "Dasar Privasi",
    imageAlt: "Sebuah tangan menandatangani dokumen elektronik tanpa kertas, melambangkan perlindungan data",
  },
  meta: {
    lastUpdated: "Terakhir Dikemas Kini: 10 September 2025",
    tagline: "Bersama Platform Zefaaf, Anda Selamat",
  },
  sections: [
    {
      title: "Pengenalan",
      paragraphs: [
        "Platform Zefaaf ('kami', 'Platform') komited untuk melindungi privasi penggunanya. Dasar ini menerangkan bagaimana kami mengumpul, menggunakan, dan melindungi data peribadi apabila anda menggunakan aplikasi atau laman web Zefaaf.",
      ],
    },
    {
      title: "Data yang Kami Kumpul",
      bullets: [
        "Data Pendaftaran: Nama, alamat e-mel, nombor telefon, negara, dan tarikh lahir.",
        "Maklumat Akaun: Gambar profil, keutamaan carian, status perkahwinan, dan bahasa pilihan.",
        "Data Penggunaan: Rekod log masuk, interaksi dengan ahli lain, dan komunikasi.",
        "Kandungan yang Anda Kongsi: Mesej, fail audio, gambar, atau video.",
        "Maklumat Teknikal: Jenis peranti, sistem pengendalian, alamat IP, dan bahasa.",
      ],
    },
    {
      title: "Bagaimana Kami Menggunakan Data",
      bullets: [
        "Untuk mencipta dan menguruskan akaun.",
        "Untuk memudahkan carian dan pemadanan antara ahli.",
        "Untuk membolehkan perkhidmatan komunikasi (mesej, panggilan suara, dan video).",
        "Untuk menambah baik perkhidmatan dan pengalaman pengguna.",
        "Untuk memastikan keselamatan dan mencegah penggunaan tanpa kebenaran atau penipuan.",
      ],
    },
    {
      title: "Perkongsian Data",
      intro: "Kami hanya boleh berkongsi data anda dalam kes berikut:",
      bullets: [
        "Untuk tujuan undang-undang: Jika dikehendaki oleh undang-undang yang berkuat kuasa.",
        "Dengan persetujuan pengguna: Jika anda memilih untuk berkongsi data anda dengan ahli lain melalui Platform.",
      ],
    },
    {
      title: "Perlindungan Data",
      paragraphs: [
        "Kami menggunakan protokol keselamatan termaju (penyulitan SSL) untuk melindungi data semasa penghantaran dan penyimpanan. Akses kepada data anda terhad kepada pekerja atau rakan kongsi yang mempunyai keperluan yang sah sahaja.",
      ],
    },
    {
      title: "Hak Pengguna (GDPR)",
      bullets: [
        "Akses kepada data peribadi anda.",
        "Meminta pembetulan atau kemas kini data anda.",
        "Meminta pemadaman kekal akaun dan data anda.",
        "Membantah aktiviti pemprosesan tertentu.",
        "Mendapatkan salinan data anda dalam format mudah alih.",
      ],
    },
    {
      title: "Kuki",
      paragraphs: [
        "Kami mungkin menggunakan kuki untuk meningkatkan pengalaman melayari dan menganalisis penggunaan aplikasi. Anda boleh melaraskan tetapan pelayar untuk melumpuhkannya, tetapi ini mungkin menjejaskan sesetengah ciri.",
      ],
    },
    {
      title: "Privasi Kanak-kanak",
      paragraphs: ["Platform ini tidak dibenarkan digunakan oleh individu yang berumur bawah 18 tahun."],
    },
    {
      title: "Penyeliaan Kandungan dan Komunikasi",
      paragraphs: [
        "Bagi mengekalkan keseriusan dan pematuhan Syariah, platform Zefaaf berhak untuk menyelia perbualan dan kandungan dalam platform apabila perlu, termasuk imej dan pengenalan suara, bagi memastikan persekitaran yang selamat dan sopan serta mencegah sebarang pelanggaran atau manipulasi.",
      ],
    },
    {
      title: "Perubahan kepada Dasar Privasi",
      paragraphs: [
        "Kami mungkin mengemas kini dasar ini dari semasa ke semasa. Pengguna akan dimaklumkan mengenai sebarang perubahan penting melalui e-mel atau melalui pemberitahuan dalam aplikasi.",
      ],
    },
  ],
  contact: {
    title: "Hubungi Kami",
    intro: "Jika anda mempunyai sebarang pertanyaan mengenai dasar ini atau data anda, anda boleh menghubungi kami di:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const pa: PrivacyCopy = {
  hero: {
    title: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
    imageAlt: "ਡਾਟਾ ਸੁਰੱਖਿਆ ਦਾ ਪ੍ਰਤੀਕ, ਕਾਗਜ਼-ਰਹਿਤ ਇਲੈਕਟ੍ਰਾਨਿਕ ਦਸਤਾਵੇਜ਼ 'ਤੇ ਦਸਤਖਤ ਕਰਦਾ ਇੱਕ ਹੱਥ",
  },
  meta: {
    lastUpdated: "ਆਖਰੀ ਅੱਪਡੇਟ: 10 ਸਤੰਬਰ, 2025",
    tagline: "ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ਨਾਲ, ਤੁਸੀਂ ਸੁਰੱਖਿਅਤ ਹੋ",
  },
  sections: [
    {
      title: "ਜਾਣ-ਪਛਾਣ",
      paragraphs: [
        "ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ('ਅਸੀਂ', 'ਪਲੇਟਫਾਰਮ') ਆਪਣੇ ਵਰਤੋਂਕਾਰਾਂ ਦੀ ਗੋਪਨੀਯਤਾ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਵਚਨਬੱਧ ਹੈ। ਇਹ ਨੀਤੀ ਦੱਸਦੀ ਹੈ ਕਿ ਜਦੋਂ ਤੁਸੀਂ ਜ਼ੇਫ਼ਾਫ਼ ਐਪਲੀਕੇਸ਼ਨ ਜਾਂ ਵੈੱਬਸਾਈਟ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋ ਤਾਂ ਅਸੀਂ ਨਿੱਜੀ ਡਾਟਾ ਨੂੰ ਕਿਵੇਂ ਇਕੱਠਾ, ਵਰਤੋਂ ਅਤੇ ਸੁਰੱਖਿਅਤ ਕਰਦੇ ਹਾਂ।",
      ],
    },
    {
      title: "ਡਾਟਾ ਜੋ ਅਸੀਂ ਇਕੱਠਾ ਕਰਦੇ ਹਾਂ",
      bullets: [
        "ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਡਾਟਾ: ਨਾਮ, ਈਮੇਲ ਪਤਾ, ਫ਼ੋਨ ਨੰਬਰ, ਦੇਸ਼, ਅਤੇ ਜਨਮ ਮਿਤੀ।",
        "ਖਾਤਾ ਜਾਣਕਾਰੀ: ਪ੍ਰੋਫਾਈਲ ਤਸਵੀਰਾਂ, ਖੋਜ ਤਰਜੀਹਾਂ, ਵਿਆਹੁਤਾ ਸਥਿਤੀ, ਅਤੇ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ।",
        "ਵਰਤੋਂ ਡਾਟਾ: ਲਾਗਇਨ ਰਿਕਾਰਡ, ਹੋਰ ਮੈਂਬਰਾਂ ਨਾਲ ਗੱਲਬਾਤ, ਅਤੇ ਸੰਚਾਰ।",
        "ਸਮੱਗਰੀ ਜੋ ਤੁਸੀਂ ਸਾਂਝੀ ਕਰਦੇ ਹੋ: ਸੁਨੇਹੇ, ਆਡੀਓ ਫਾਈਲਾਂ, ਤਸਵੀਰਾਂ, ਜਾਂ ਵੀਡੀਓ।",
        "ਤਕਨੀਕੀ ਜਾਣਕਾਰੀ: ਡਿਵਾਈਸ ਦੀ ਕਿਸਮ, ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ, ਆਈਪੀ ਪਤਾ, ਅਤੇ ਭਾਸ਼ਾ।",
      ],
    },
    {
      title: "ਅਸੀਂ ਡਾਟਾ ਕਿਵੇਂ ਵਰਤਦੇ ਹਾਂ",
      bullets: [
        "ਖਾਤੇ ਬਣਾਉਣ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰਨ ਲਈ।",
        "ਮੈਂਬਰਾਂ ਵਿਚਕਾਰ ਖੋਜ ਅਤੇ ਮੇਲ-ਮਿਲਾਪ ਨੂੰ ਸੁਖਾਲਾ ਬਣਾਉਣ ਲਈ।",
        "ਸੰਚਾਰ ਸੇਵਾਵਾਂ (ਸੁਨੇਹੇ, ਵੌਇਸ ਅਤੇ ਵੀਡੀਓ ਕਾਲਾਂ) ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਣ ਲਈ।",
        "ਸੇਵਾਵਾਂ ਅਤੇ ਵਰਤੋਂਕਾਰ ਅਨੁਭਵ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ।",
        "ਸੁਰੱਖਿਆ ਯਕੀਨੀ ਬਣਾਉਣ ਅਤੇ ਅਣਅਧਿਕਾਰਤ ਵਰਤੋਂ ਜਾਂ ਧੋਖਾਧੜੀ ਨੂੰ ਰੋਕਣ ਲਈ।",
      ],
    },
    {
      title: "ਡਾਟਾ ਸਾਂਝਾ ਕਰਨਾ",
      intro: "ਅਸੀਂ ਤੁਹਾਡਾ ਡਾਟਾ ਸਿਰਫ਼ ਹੇਠ ਲਿਖੇ ਮਾਮਲਿਆਂ ਵਿੱਚ ਸਾਂਝਾ ਕਰ ਸਕਦੇ ਹਾਂ:",
      bullets: [
        "ਕਾਨੂੰਨੀ ਉਦੇਸ਼ਾਂ ਲਈ: ਜੇਕਰ ਲਾਗੂ ਕਾਨੂੰਨਾਂ ਦੁਆਰਾ ਲੋੜੀਂਦਾ ਹੋਵੇ।",
        "ਵਰਤੋਂਕਾਰ ਦੀ ਸਹਿਮਤੀ ਨਾਲ: ਜੇਕਰ ਤੁਸੀਂ ਪਲੇਟਫਾਰਮ ਰਾਹੀਂ ਕਿਸੇ ਹੋਰ ਮੈਂਬਰ ਨਾਲ ਆਪਣਾ ਡਾਟਾ ਸਾਂਝਾ ਕਰਨ ਦੀ ਚੋਣ ਕਰਦੇ ਹੋ।",
      ],
    },
    {
      title: "ਡਾਟਾ ਸੁਰੱਖਿਆ",
      paragraphs: [
        "ਅਸੀਂ ਟ੍ਰਾਂਸਮਿਸ਼ਨ ਅਤੇ ਸਟੋਰੇਜ ਦੌਰਾਨ ਡਾਟਾ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਉੱਨਤ ਸੁਰੱਖਿਆ ਪ੍ਰੋਟੋਕੋਲ (SSL ਇਨਕ੍ਰਿਪਸ਼ਨ) ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਤੁਹਾਡੇ ਡਾਟਾ ਤੱਕ ਪਹੁੰਚ ਸਿਰਫ਼ ਉਹਨਾਂ ਕਰਮਚਾਰੀਆਂ ਜਾਂ ਭਾਈਵਾਲਾਂ ਤੱਕ ਸੀਮਿਤ ਹੈ ਜਿਨ੍ਹਾਂ ਦੀ ਜਾਇਜ਼ ਲੋੜ ਹੈ।",
      ],
    },
    {
      title: "ਵਰਤੋਂਕਾਰ ਅਧਿਕਾਰ (GDPR)",
      bullets: [
        "ਆਪਣੇ ਨਿੱਜੀ ਡਾਟਾ ਤੱਕ ਪਹੁੰਚ।",
        "ਆਪਣੇ ਡਾਟਾ ਦੀ ਸੁਧਾਈ ਜਾਂ ਅੱਪਡੇਟ ਦੀ ਬੇਨਤੀ ਕਰਨਾ।",
        "ਆਪਣੇ ਖਾਤੇ ਅਤੇ ਡਾਟਾ ਨੂੰ ਸਥਾਈ ਤੌਰ 'ਤੇ ਮਿਟਾਉਣ ਦੀ ਬੇਨਤੀ ਕਰਨਾ।",
        "ਕੁਝ ਪ੍ਰੋਸੈਸਿੰਗ ਗਤੀਵਿਧੀਆਂ 'ਤੇ ਇਤਰਾਜ਼ ਕਰਨਾ।",
        "ਪੋਰਟੇਬਲ ਫਾਰਮੈਟ ਵਿੱਚ ਆਪਣੇ ਡਾਟਾ ਦੀ ਇੱਕ ਕਾਪੀ ਪ੍ਰਾਪਤ ਕਰਨਾ।",
      ],
    },
    {
      title: "ਕੂਕੀਜ਼",
      paragraphs: [
        "ਅਸੀਂ ਬ੍ਰਾਊਜ਼ਿੰਗ ਅਨੁਭਵ ਨੂੰ ਵਧਾਉਣ ਅਤੇ ਐਪ ਦੀ ਵਰਤੋਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਲਈ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹਾਂ। ਤੁਸੀਂ ਉਹਨਾਂ ਨੂੰ ਅਸਮਰੱਥ ਕਰਨ ਲਈ ਬ੍ਰਾਊਜ਼ਰ ਸੈਟਿੰਗਾਂ ਨੂੰ ਵਿਵਸਥਿਤ ਕਰ ਸਕਦੇ ਹੋ, ਪਰ ਇਹ ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰ ਸਕਦਾ ਹੈ।",
      ],
    },
    {
      title: "ਬੱਚਿਆਂ ਦੀ ਗੋਪਨੀਯਤਾ",
      paragraphs: ["18 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਵਿਅਕਤੀਆਂ ਦੁਆਰਾ ਪਲੇਟਫਾਰਮ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਆਗਿਆ ਨਹੀਂ ਹੈ।"],
    },
    {
      title: "ਸਮੱਗਰੀ ਅਤੇ ਸੰਚਾਰ ਦੀ ਨਿਗਰਾਨੀ",
      paragraphs: [
        "ਗੰਭੀਰਤਾ ਅਤੇ ਸ਼ਰੀਅਤ ਦੀ ਪਾਲਣਾ ਬਣਾਈ ਰੱਖਣ ਲਈ, ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ਲੋੜ ਪੈਣ 'ਤੇ, ਤਸਵੀਰਾਂ ਅਤੇ ਆਵਾਜ਼ੀ ਜਾਣ-ਪਛਾਣਾਂ ਸਮੇਤ, ਪਲੇਟਫਾਰਮ ਦੇ ਅੰਦਰ ਗੱਲਬਾਤ ਅਤੇ ਸਮੱਗਰੀ ਦੀ ਨਿਗਰਾਨੀ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਰਾਖਵਾਂ ਰੱਖਦਾ ਹੈ, ਤਾਂ ਜੋ ਇੱਕ ਸੁਰੱਖਿਅਤ ਅਤੇ ਮਰਿਆਦਾਪੂਰਨ ਮਾਹੌਲ ਯਕੀਨੀ ਬਣਾਇਆ ਜਾ ਸਕੇ ਅਤੇ ਕਿਸੇ ਵੀ ਉਲੰਘਣਾ ਜਾਂ ਹੇਰਾਫੇਰੀ ਨੂੰ ਰੋਕਿਆ ਜਾ ਸਕੇ।",
      ],
    },
    {
      title: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਵਿੱਚ ਤਬਦੀਲੀਆਂ",
      paragraphs: [
        "ਅਸੀਂ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਇਸ ਨੀਤੀ ਨੂੰ ਅੱਪਡੇਟ ਕਰ ਸਕਦੇ ਹਾਂ। ਕਿਸੇ ਵੀ ਮਹੱਤਵਪੂਰਨ ਤਬਦੀਲੀ ਬਾਰੇ ਵਰਤੋਂਕਾਰਾਂ ਨੂੰ ਈਮੇਲ ਰਾਹੀਂ ਜਾਂ ਐਪ ਦੇ ਅੰਦਰ ਸੂਚਨਾ ਰਾਹੀਂ ਸੂਚਿਤ ਕੀਤਾ ਜਾਵੇਗਾ।",
      ],
    },
  ],
  contact: {
    title: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    intro: "ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਇਸ ਨੀਤੀ ਜਾਂ ਤੁਹਾਡੇ ਡਾਟਾ ਬਾਰੇ ਕੋਈ ਸਵਾਲ ਹਨ, ਤਾਂ ਤੁਸੀਂ ਸਾਡੇ ਨਾਲ ਇੱਥੇ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const ps: PrivacyCopy = {
  hero: {
    title: "د محرمیت تګلاره",
    imageAlt: "یو لاس چې د معلوماتو ساتنې سمبول په توګه بې کاغذه بریښنایی سند لاسلیک کوي",
  },
  meta: {
    lastUpdated: "وروستی نوی کول: د 2025 د سپتمبر 10",
    tagline: "د زفاف پلیټ فارم سره، تاسو خوندي یاست",
  },
  sections: [
    {
      title: "پیژندنه",
      paragraphs: [
        "د زفاف پلیټ فارم ('موږ'، 'پلیټ فارم') د خپلو کاروونکو د محرمیت ساتلو ته ژمن دی. دا تګلاره تشریح کوي چې کله تاسو د زفاف اپلیکیشن یا ویب پاڼه کاروئ نو موږ څنګه شخصي معلومات راټولوو، کاروو، او ساتو.",
      ],
    },
    {
      title: "هغه معلومات چې موږ یې راټولوو",
      bullets: [
        "د ثبت نوم معلومات: نوم، بریښنالیک پته، د تلیفون شمېره، هیواد، او د زیږون نیټه.",
        "د حساب معلومات: پروفایل انځورونه، د لټون غوره توبونه، ودانیز حالت، او غوره ژبه.",
        "د کارونې معلومات: د ننوتلو ریکارډونه، له نورو غړو سره تعاملات، او اړیکې.",
        "هغه منځپانګه چې تاسو یې شریکوئ: پیغامونه، غږیز فایلونه، عکسونه، یا ویډیوګانې.",
        "تخنیکي معلومات: د وسیلې ډول، عملیاتي سیسټم، د IP پته، او ژبه.",
      ],
    },
    {
      title: "موږ څنګه له معلوماتو کار اخلو",
      bullets: [
        "د حسابونو رامنځته کولو او مدیریت لپاره.",
        "د غړو تر منځ د لټون او سمون اسانتیا لپاره.",
        "د اړیکو خدماتو (پیغامونه، غږیزې او ویډیویي اړیکې) فعالولو لپاره.",
        "د خدماتو او کاروونکي تجربې ښه کولو لپاره.",
        "د امنیت تضمین او د غیرمجاز کارونې یا درغلۍ مخنیوي لپاره.",
      ],
    },
    {
      title: "د معلوماتو شریکول",
      intro: "موږ ممکن ستاسو معلومات یوازې په لاندې حالتونو کې شریک کړو:",
      bullets: [
        "د قانوني موخو لپاره: که چیرې د اړوند قوانینو لخوا اړین وي.",
        "د کاروونکي په رضایت سره: که تاسو غوره کړئ چې خپل معلومات د پلیټ فارم له لارې له بل غړي سره شریک کړئ.",
      ],
    },
    {
      title: "د معلوماتو ساتنه",
      paragraphs: [
        "موږ د لیږد او ساتنې پرمهال د معلوماتو ساتلو لپاره پرمختللي امنیتي پروتوکولونه (SSL کوډ کول) کاروو. ستاسو معلوماتو ته لاسرسی یوازې هغو کارمندانو یا شریکانو ته محدود دی چې قانوني اړتیا لري.",
      ],
    },
    {
      title: "د کاروونکي حقونه (GDPR)",
      bullets: [
        "خپلو شخصي معلوماتو ته لاسرسی.",
        "د خپلو معلوماتو د اصلاح یا تازه کولو غوښتنه.",
        "د خپل حساب او معلوماتو د دایمي حذف کولو غوښتنه.",
        "د ځینو پروسس فعالیتونو سره مخالفت.",
        "د خپلو معلوماتو کاپي په لیږدېدونکي بڼه ترلاسه کول.",
      ],
    },
    {
      title: "کوکیز",
      paragraphs: [
        "موږ ممکن د براوزینګ تجربې ښه کولو او د اپلیکیشن کارونې تحلیل لپاره کوکیز وکاروو. تاسو کولی شئ د دوی غیرفعالولو لپاره د براوزر تنظیمات سمون ورکړئ، مګر دا ممکن پر ځینو ځانګړتیاوو اغیزه وکړي.",
      ],
    },
    {
      title: "د ماشومانو محرمیت",
      paragraphs: ["د پلیټ فارم کارول د 18 کلونو څخه کم عمر لرونکو کسانو لپاره اجازه نه لري."],
    },
    {
      title: "د منځپانګې او اړیکو څارنه",
      paragraphs: [
        "د جدیت او شریعت سره سمون ساتلو لپاره، د زفاف پلیټ فارم دا حق خوندي کوي چې د اړتیا په صورت کې، په پلیټ فارم کې خبرې اترې او منځپانګه، په شمول انځورونه او غږیزې پیژندنې وڅاري، ترڅو یو خوندي او محافظه کار چاپیریال تضمین شي او د هر ډول تخطۍ یا لاسوهنې مخه ونیول شي.",
      ],
    },
    {
      title: "د محرمیت تګلارې بدلونونه",
      paragraphs: [
        "موږ ممکن دا تګلاره وخت پر وخت تازه کړو. کاروونکي به د هر ډول مهم بدلون په اړه د بریښنالیک له لارې یا د اپلیکیشن دننه خبرتیا له لارې خبر شي.",
      ],
    },
  ],
  contact: {
    title: "له موږ سره اړیکه ونیسئ",
    intro: "که تاسو د دې تګلارې یا خپلو معلوماتو په اړه کومه پوښتنه لرئ، تاسو کولی شئ زموږ سره په لاندې ډول اړیکه ونیسئ:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const sw: PrivacyCopy = {
  hero: {
    title: "Sera ya Faragha",
    imageAlt: "Mkono ukisaini hati ya kielektroniki isiyo na karatasi, ikiashiria ulinzi wa data",
  },
  meta: {
    lastUpdated: "Ilisasishwa Mwisho: Septemba 10, 2025",
    tagline: "Na Jukwaa la Zefaaf, Uko Salama",
  },
  sections: [
    {
      title: "Utangulizi",
      paragraphs: [
        "Jukwaa la Zefaaf ('sisi', 'Jukwaa') limejitolea kulinda faragha ya watumiaji wake. Sera hii inaeleza jinsi tunavyokusanya, kutumia, na kulinda data binafsi wakati unapotumia programu au tovuti ya Zefaaf.",
      ],
    },
    {
      title: "Data Tunayokusanya",
      bullets: [
        "Data ya Usajili: Jina, anwani ya barua pepe, nambari ya simu, nchi, na tarehe ya kuzaliwa.",
        "Taarifa za Akaunti: Picha za wasifu, mapendeleo ya utafutaji, hali ya ndoa, na lugha unayopendelea.",
        "Data ya Matumizi: Rekodi za kuingia, mwingiliano na wanachama wengine, na mawasiliano.",
        "Maudhui Unayoshiriki: Ujumbe, faili za sauti, picha, au video.",
        "Taarifa za Kiufundi: Aina ya kifaa, mfumo wa uendeshaji, anwani ya IP, na lugha.",
      ],
    },
    {
      title: "Jinsi Tunavyotumia Data",
      bullets: [
        "Kuunda na kusimamia akaunti.",
        "Kurahisisha utafutaji na ulinganishaji baina ya wanachama.",
        "Kuwezesha huduma za mawasiliano (ujumbe, simu za sauti, na video).",
        "Kuboresha huduma na uzoefu wa mtumiaji.",
        "Kuhakikisha usalama na kuzuia matumizi yasiyoidhinishwa au udanganyifu.",
      ],
    },
    {
      title: "Kushiriki Data",
      intro: "Tunaweza kushiriki data yako tu katika hali zifuatazo:",
      bullets: [
        "Kwa madhumuni ya kisheria: Ikiwa inahitajika na sheria zinazotumika.",
        "Kwa idhini ya mtumiaji: Ikiwa utachagua kushiriki data yako na mwanachama mwingine kupitia Jukwaa.",
      ],
    },
    {
      title: "Ulinzi wa Data",
      paragraphs: [
        "Tunatumia itifaki za hali ya juu za usalama (usimbaji fiche wa SSL) kulinda data wakati wa uhamishaji na uhifadhi. Ufikiaji wa data yako umezuiliwa tu kwa wafanyakazi au washirika wenye haja halali.",
      ],
    },
    {
      title: "Haki za Mtumiaji (GDPR)",
      bullets: [
        "Kufikia data yako binafsi.",
        "Kuomba marekebisho au usasishaji wa data yako.",
        "Kuomba ufutaji wa kudumu wa akaunti na data yako.",
        "Kupinga shughuli fulani za uchakataji.",
        "Kupata nakala ya data yako katika muundo unaoweza kuhamishwa.",
      ],
    },
    {
      title: "Vidakuzi",
      paragraphs: [
        "Tunaweza kutumia vidakuzi kuboresha uzoefu wa kuvinjari na kuchambua matumizi ya programu. Unaweza kurekebisha mipangilio ya kivinjari ili kuvizima, lakini hii inaweza kuathiri baadhi ya vipengele.",
      ],
    },
    {
      title: "Faragha ya Watoto",
      paragraphs: ["Jukwaa halikubaliki kutumiwa na watu walio chini ya miaka 18."],
    },
    {
      title: "Usimamizi wa Maudhui na Mawasiliano",
      paragraphs: [
        "Ili kudumisha uzito wa nia na kuzingatia Sharia, jukwaa la Zefaaf linahifadhi haki ya kusimamia mazungumzo na maudhui ndani ya jukwaa inapohitajika, ikiwa ni pamoja na picha na maelezo ya sauti ya kujitambulisha, ili kuhakikisha mazingira salama na ya kihafidhina na kuzuia ukiukaji wowote au udanganyifu.",
      ],
    },
    {
      title: "Mabadiliko kwa Sera ya Faragha",
      paragraphs: [
        "Tunaweza kusasisha sera hii mara kwa mara. Watumiaji watajulishwa kuhusu mabadiliko yoyote muhimu kupitia barua pepe au kupitia arifa ndani ya programu.",
      ],
    },
  ],
  contact: {
    title: "Wasiliana Nasi",
    intro: "Ikiwa una maswali yoyote kuhusu sera hii au data yako, unaweza kuwasiliana nasi kupitia:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const th: PrivacyCopy = {
  hero: {
    title: "นโยบายความเป็นส่วนตัว",
    imageAlt: "มือที่กำลังลงนามในเอกสารอิเล็กทรอนิกส์แบบไร้กระดาษ ซึ่งเป็นสัญลักษณ์ของการปกป้องข้อมูล",
  },
  meta: {
    lastUpdated: "อัปเดตล่าสุด: 10 กันยายน 2025",
    tagline: "กับแพลตฟอร์ม Zefaaf คุณปลอดภัย",
  },
  sections: [
    {
      title: "บทนำ",
      paragraphs: [
        "แพลตฟอร์ม Zefaaf ('เรา', 'แพลตฟอร์ม') มุ่งมั่นที่จะปกป้องความเป็นส่วนตัวของผู้ใช้งาน นโยบายนี้อธิบายถึงวิธีที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลเมื่อคุณใช้แอปพลิเคชันหรือเว็บไซต์ของ Zefaaf",
      ],
    },
    {
      title: "ข้อมูลที่เราเก็บรวบรวม",
      bullets: [
        "ข้อมูลการลงทะเบียน: ชื่อ ที่อยู่อีเมล หมายเลขโทรศัพท์ ประเทศ และวันเกิด",
        "ข้อมูลบัญชี: รูปโปรไฟล์ การตั้งค่าการค้นหา สถานภาพสมรส และภาษาที่ต้องการ",
        "ข้อมูลการใช้งาน: บันทึกการเข้าสู่ระบบ การโต้ตอบกับสมาชิกคนอื่น และการสื่อสาร",
        "เนื้อหาที่คุณแบ่งปัน: ข้อความ ไฟล์เสียง รูปภาพ หรือวิดีโอ",
        "ข้อมูลทางเทคนิค: ประเภทอุปกรณ์ ระบบปฏิบัติการ ที่อยู่ IP และภาษา",
      ],
    },
    {
      title: "วิธีที่เราใช้ข้อมูล",
      bullets: [
        "เพื่อสร้างและจัดการบัญชี",
        "เพื่ออำนวยความสะดวกในการค้นหาและจับคู่ระหว่างสมาชิก",
        "เพื่อเปิดใช้งานบริการสื่อสาร (ข้อความ การโทรด้วยเสียง และวิดีโอคอล)",
        "เพื่อปรับปรุงบริการและประสบการณ์ผู้ใช้",
        "เพื่อรับประกันความปลอดภัยและป้องกันการใช้งานโดยไม่ได้รับอนุญาตหรือการฉ้อโกง",
      ],
    },
    {
      title: "การแบ่งปันข้อมูล",
      intro: "เราอาจแบ่งปันข้อมูลของคุณเฉพาะในกรณีต่อไปนี้เท่านั้น:",
      bullets: [
        "เพื่อวัตถุประสงค์ทางกฎหมาย: หากกฎหมายที่บังคับใช้กำหนดไว้",
        "ด้วยความยินยอมของผู้ใช้: หากคุณเลือกที่จะแบ่งปันข้อมูลของคุณกับสมาชิกอื่นผ่านแพลตฟอร์ม",
      ],
    },
    {
      title: "การปกป้องข้อมูล",
      paragraphs: [
        "เราใช้โปรโตคอลความปลอดภัยขั้นสูง (การเข้ารหัส SSL) เพื่อปกป้องข้อมูลระหว่างการส่งและการจัดเก็บ การเข้าถึงข้อมูลของคุณจำกัดเฉพาะพนักงานหรือพันธมิตรที่มีความจำเป็นโดยชอบธรรมเท่านั้น",
      ],
    },
    {
      title: "สิทธิของผู้ใช้ (GDPR)",
      bullets: [
        "เข้าถึงข้อมูลส่วนบุคคลของคุณ",
        "ขอแก้ไขหรืออัปเดตข้อมูลของคุณ",
        "ขอให้ลบบัญชีและข้อมูลของคุณอย่างถาวร",
        "คัดค้านกิจกรรมการประมวลผลบางประการ",
        "รับสำเนาข้อมูลของคุณในรูปแบบที่สามารถพกพาได้",
      ],
    },
    {
      title: "คุกกี้",
      paragraphs: [
        "เราอาจใช้คุกกี้เพื่อปรับปรุงประสบการณ์การเรียกดูและวิเคราะห์การใช้งานแอป คุณสามารถปรับการตั้งค่าเบราว์เซอร์เพื่อปิดใช้งานได้ แต่อาจส่งผลกระทบต่อคุณสมบัติบางอย่าง",
      ],
    },
    {
      title: "ความเป็นส่วนตัวของเด็ก",
      paragraphs: ["ไม่อนุญาตให้ผู้ที่มีอายุต่ำกว่า 18 ปีใช้งานแพลตฟอร์มนี้"],
    },
    {
      title: "การกำกับดูแลเนื้อหาและการสื่อสาร",
      paragraphs: [
        "เพื่อรักษาความจริงจังและการปฏิบัติตามหลักชะรีอะฮ์ แพลตฟอร์ม Zefaaf ขอสงวนสิทธิ์ในการกำกับดูแลบทสนทนาและเนื้อหาภายในแพลตฟอร์มเมื่อจำเป็น รวมถึงรูปภาพและการแนะนำตัวด้วยเสียง เพื่อรับประกันสภาพแวดล้อมที่ปลอดภัยและสุภาพเรียบร้อย และป้องกันการละเมิดหรือการบิดเบือนใดๆ",
      ],
    },
    {
      title: "การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว",
      paragraphs: [
        "เราอาจอัปเดตนโยบายนี้เป็นครั้งคราว ผู้ใช้จะได้รับแจ้งเกี่ยวกับการเปลี่ยนแปลงที่สำคัญใดๆ ผ่านทางอีเมลหรือผ่านการแจ้งเตือนภายในแอป",
      ],
    },
  ],
  contact: {
    title: "ติดต่อเรา",
    intro: "หากคุณมีข้อสงสัยใดๆ เกี่ยวกับนโยบายนี้หรือข้อมูลของคุณ คุณสามารถติดต่อเราได้ที่:",
    items: [
      { label: "support@zefaaf.net", href: "mailto:support@zefaaf.net", icon: "mail" },
      { label: "www.zefaaf.net", href: "https://www.zefaaf.net", icon: "globe" },
    ],
  },
};

const copyByLocale: Record<string, PrivacyCopy> = {
  ar, en, nl, fr, de, tr, ru, id, zh, bn, bs, es, fa, pt, ja, ko, it, ur, ta, am, sv, da, sq, uz, az, fil, hi, kk, ms, pa, ps, sw, th,
};

export function getPrivacyCopy(locale: string): PrivacyCopy {
  return copyByLocale[locale] ?? en;
}
