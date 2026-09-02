// Terms & Conditions copy lives here rather than in `messages/*.json` because
// those 33 locale files are kept namespace-identical — adding a `terms`
// namespace to only some of them would make next-intl throw MISSING_MESSAGE
// for the rest. Same approach as the About, VIP, and Events widgets. All 33
// locales are translated directly in this file below.

export type TermsSection = {
  title: string;
  intro?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  outro?: string;
};

export type TermsCopy = {
  hero: {
    title: string;
    imageAlt: string;
  };
  meta: {
    lastUpdated: string;
    committee: string;
  };
  sections: readonly TermsSection[];
  conclusion: {
    title: string;
    committee: { name: string; lines: readonly string[] };
    platform: { name: string; lines: readonly string[] };
  };
};

const en: TermsCopy = {
  hero: {
    title: "Terms & Conditions",
    imageAlt: "A hand writing on paper with a pen, symbolizing a marriage agreement",
  },
  meta: {
    lastUpdated: "Last Updated: September 10, 2025",
    committee: "Sharia Committee of the Zefaaf Platform",
  },
  sections: [
    {
      title: "First: Notice from the Sharia Committee",
      paragraphs: [
        "The Islamic Sharia Committee urges members to carefully read these terms before creating an account.",
        "These terms are binding for all members (whether on free or paid plans).",
        "The platform reserves the right to amend these terms at any time, and continued use constitutes implicit agreement.",
      ],
    },
    {
      title: "Second: Registration and Membership Conditions",
      bullets: [
        "The member must be an adult eligible for marriage.",
        "Each person is entitled to only one account.",
        "The platform is not responsible for the accuracy of data and reserves the right to delete any false or misleading information.",
        "Transferring money between members for any reason is prohibited.",
        "The platform reserves the right to delete any non-compliant account without prior notice and without refunding fees.",
      ],
    },
    {
      title: "Third: Prohibited Objectives",
      intro:
        "The Zefaaf platform is dedicated exclusively to lawful marriage. Registration or use for any unlawful purpose is prohibited, including:",
      bullets: [
        "Temporary marriage (mut'ah)",
        "Short-term marriage",
        "Customary marriage",
        "Any practice that violates Islamic Sharia or applicable laws",
      ],
      outro:
        "The platform reserves the right to suspend or cancel any non-compliant account, take necessary legal action, and claim compensation for damages.",
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
      title: "Children's Privacy",
      paragraphs: ["The Platform is not permitted for use by individuals under 18 years of age."],
    },
    {
      title: "Changes to the Privacy Policy",
      paragraphs: [
        "We may update this policy from time to time. Users will be notified of any material changes via email or through an in-app notification.",
      ],
    },
  ],
  conclusion: {
    title: "Conclusion",
    committee: {
      name: "Zefaaf's Sharia Committee",
      lines: ["Wishes you success and guidance,", "And we ask Allah to bless you with a righteous and blessed marriage."],
    },
    platform: {
      name: "Zefaaf Platform",
      lines: ["Plan your marriage with Islamic ethics"],
    },
  },
};

const ar: TermsCopy = {
  hero: {
    title: "الشروط والأحكام",
    imageAlt: "يد تكتب على ورقة بقلم، رمزاً لعقد الزواج",
  },
  meta: {
    lastUpdated: "آخر تحديث: 10 سبتمبر 2025",
    committee: "اللجنة الشرعية لمنصة زفاف",
  },
  sections: [
    {
      title: "أولاً: كلمة من اللجنة الشرعية",
      paragraphs: [
        "تحث اللجنة الشرعية الإسلامية الأعضاء على قراءة هذه الشروط بعناية قبل إنشاء حساب.",
        "هذه الشروط ملزمة لجميع الأعضاء (سواء في الخطط المجانية أو المدفوعة).",
        "تحتفظ المنصة بالحق في تعديل هذه الشروط في أي وقت، ويُعد الاستمرار في استخدامها موافقة ضمنية عليها.",
      ],
    },
    {
      title: "ثانياً: شروط التسجيل والعضوية",
      bullets: [
        "يجب أن يكون العضو بالغاً ومؤهلاً للزواج.",
        "يحق لكل شخص امتلاك حساب واحد فقط.",
        "لا تتحمل المنصة مسؤولية دقة البيانات، وتحتفظ بالحق في حذف أي معلومات خاطئة أو مضللة.",
        "يُحظر تحويل الأموال بين الأعضاء لأي سبب.",
        "تحتفظ المنصة بالحق في حذف أي حساب غير ملتزم دون إشعار مسبق ودون استرداد الرسوم.",
      ],
    },
    {
      title: "ثالثاً: الأهداف المحظورة",
      intro: "منصة زفاف مخصصة حصرياً للزواج الشرعي، ويُحظر التسجيل أو الاستخدام لأي غرض غير مشروع، بما في ذلك:",
      bullets: [
        "زواج المتعة",
        "الزواج المؤقت",
        "الزواج العرفي",
        "أي ممارسة تخالف الشريعة الإسلامية أو الأنظمة المعمول بها",
      ],
      outro:
        "تحتفظ المنصة بالحق في تعليق أو إلغاء أي حساب غير ملتزم، واتخاذ الإجراءات القانونية اللازمة، والمطالبة بالتعويض عن الأضرار.",
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
      title: "خصوصية الأطفال",
      paragraphs: ["لا يُسمح باستخدام المنصة لمن هم دون 18 عاماً."],
    },
    {
      title: "التغييرات على سياسة الخصوصية",
      paragraphs: [
        "قد نقوم بتحديث هذه السياسة من وقت لآخر، وسيتم إشعار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار داخل التطبيق.",
      ],
    },
  ],
  conclusion: {
    title: "الخاتمة",
    committee: {
      name: "اللجنة الشرعية لزفاف",
      lines: ["تتمنى لكم التوفيق والسداد،", "ونسأل الله أن يرزقكم زواجاً صالحاً مباركاً."],
    },
    platform: {
      name: "منصة زفاف",
      lines: ["خطط لزواجك وفق الأخلاق الإسلامية"],
    },
  },
};

const nl: TermsCopy = {
  hero: {
    title: "Algemene Voorwaarden",
    imageAlt: "Een hand die met een pen op papier schrijft, symbool voor een huwelijksovereenkomst",
  },
  meta: {
    lastUpdated: "Laatst bijgewerkt: 10 september 2025",
    committee: "Sharia-commissie van het Zefaaf-platform",
  },
  sections: [
    {
      title: "Ten eerste: Mededeling van de Sharia-commissie",
      paragraphs: [
        "De Islamitische Sharia-commissie dringt er bij leden op aan deze voorwaarden zorgvuldig te lezen voordat zij een account aanmaken.",
        "Deze voorwaarden zijn bindend voor alle leden (ongeacht of zij een gratis of betaald abonnement hebben).",
        "Het platform behoudt zich het recht voor deze voorwaarden op elk moment te wijzigen, en voortgezet gebruik geldt als stilzwijgende instemming.",
      ],
    },
    {
      title: "Ten tweede: Voorwaarden voor registratie en lidmaatschap",
      bullets: [
        "Het lid moet een volwassene zijn die huwbaar is.",
        "Iedere persoon heeft recht op slechts één account.",
        "Het platform is niet verantwoordelijk voor de juistheid van de gegevens en behoudt zich het recht voor om valse of misleidende informatie te verwijderen.",
        "Het overmaken van geld tussen leden is om welke reden dan ook verboden.",
        "Het platform behoudt zich het recht voor om elk niet-conform account zonder voorafgaande kennisgeving en zonder terugbetaling van kosten te verwijderen.",
      ],
    },
    {
      title: "Ten derde: Verboden doeleinden",
      intro:
        "Het Zefaaf-platform is uitsluitend bestemd voor een rechtmatig huwelijk. Registratie of gebruik voor enig onwettig doel is verboden, waaronder:",
      bullets: [
        "Tijdelijk huwelijk (mut'ah)",
        "Kortstondig huwelijk",
        "Gewoonterechtelijk huwelijk",
        "Elke praktijk die in strijd is met de islamitische sharia of de toepasselijke wetgeving",
      ],
      outro:
        "Het platform behoudt zich het recht voor om elk niet-conform account op te schorten of te annuleren, de nodige juridische stappen te ondernemen en een schadevergoeding te eisen.",
    },
    {
      title: "Delen van gegevens",
      intro: "Wij kunnen uw gegevens uitsluitend in de volgende gevallen delen:",
      bullets: [
        "Voor wettelijke doeleinden: indien vereist door de toepasselijke wetgeving.",
        "Met toestemming van de gebruiker: indien u ervoor kiest uw gegevens via het platform met een ander lid te delen.",
      ],
    },
    {
      title: "Gegevensbescherming",
      paragraphs: [
        "Wij gebruiken geavanceerde beveiligingsprotocollen (SSL-versleuteling) om gegevens tijdens verzending en opslag te beschermen. Toegang tot uw gegevens is uitsluitend voorbehouden aan medewerkers of partners met een gerechtvaardigde noodzaak.",
      ],
    },
    {
      title: "Privacy van kinderen",
      paragraphs: ["Het platform mag niet worden gebruikt door personen jonger dan 18 jaar."],
    },
    {
      title: "Wijzigingen in het privacybeleid",
      paragraphs: [
        "Wij kunnen dit beleid van tijd tot tijd bijwerken. Gebruikers worden op de hoogte gesteld van eventuele materiële wijzigingen via e-mail of een melding in de app.",
      ],
    },
  ],
  conclusion: {
    title: "Slot",
    committee: {
      name: "Sharia-commissie van Zefaaf",
      lines: ["Wenst u succes en leiding toe,", "En wij vragen Allah u te zegenen met een rechtschapen en gezegend huwelijk."],
    },
    platform: {
      name: "Zefaaf-platform",
      lines: ["Plan uw huwelijk volgens islamitische ethiek"],
    },
  },
};

const fr: TermsCopy = {
  hero: {
    title: "Conditions Générales",
    imageAlt: "Une main écrivant sur du papier avec un stylo, symbolisant un contrat de mariage",
  },
  meta: {
    lastUpdated: "Dernière mise à jour : 10 septembre 2025",
    committee: "Comité de la Charia de la plateforme Zefaaf",
  },
  sections: [
    {
      title: "Premièrement : Mot du Comité de la Charia",
      paragraphs: [
        "Le Comité de la Charia islamique exhorte les membres à lire attentivement ces conditions avant de créer un compte.",
        "Ces conditions sont contraignantes pour tous les membres (qu'ils bénéficient d'un abonnement gratuit ou payant).",
        "La plateforme se réserve le droit de modifier ces conditions à tout moment, et la poursuite de l'utilisation vaut acceptation implicite.",
      ],
    },
    {
      title: "Deuxièmement : Conditions d'inscription et d'adhésion",
      bullets: [
        "Le membre doit être majeur et apte au mariage.",
        "Chaque personne n'a droit qu'à un seul compte.",
        "La plateforme n'est pas responsable de l'exactitude des données et se réserve le droit de supprimer toute information fausse ou trompeuse.",
        "Tout transfert d'argent entre membres est interdit, quelle qu'en soit la raison.",
        "La plateforme se réserve le droit de supprimer tout compte non conforme sans préavis et sans remboursement des frais.",
      ],
    },
    {
      title: "Troisièmement : Objectifs interdits",
      intro:
        "La plateforme Zefaaf est exclusivement dédiée au mariage licite. Toute inscription ou utilisation à des fins illicites est interdite, notamment :",
      bullets: [
        "Le mariage temporaire (mut'ah)",
        "Le mariage de courte durée",
        "Le mariage coutumier",
        "Toute pratique contraire à la charia islamique ou aux lois applicables",
      ],
      outro:
        "La plateforme se réserve le droit de suspendre ou d'annuler tout compte non conforme, d'engager les poursuites judiciaires nécessaires et de réclamer réparation des préjudices subis.",
    },
    {
      title: "Partage des données",
      intro: "Nous pouvons partager vos données uniquement dans les cas suivants :",
      bullets: [
        "À des fins légales : si la loi applicable l'exige.",
        "Avec le consentement de l'utilisateur : si vous choisissez de partager vos données avec un autre membre via la plateforme.",
      ],
    },
    {
      title: "Protection des données",
      paragraphs: [
        "Nous utilisons des protocoles de sécurité avancés (chiffrement SSL) pour protéger les données pendant leur transmission et leur stockage. L'accès à vos données est réservé exclusivement aux employés ou partenaires ayant un besoin légitime.",
      ],
    },
    {
      title: "Confidentialité des mineurs",
      paragraphs: ["L'utilisation de la plateforme n'est pas autorisée aux personnes âgées de moins de 18 ans."],
    },
    {
      title: "Modifications de la politique de confidentialité",
      paragraphs: [
        "Nous pouvons mettre à jour cette politique de temps à autre. Les utilisateurs seront informés de tout changement substantiel par e-mail ou par une notification dans l'application.",
      ],
    },
  ],
  conclusion: {
    title: "Conclusion",
    committee: {
      name: "Comité de la Charia de Zefaaf",
      lines: ["Vous souhaite réussite et bonne guidance,", "Et nous demandons à Allah de vous accorder un mariage vertueux et béni."],
    },
    platform: {
      name: "Plateforme Zefaaf",
      lines: ["Planifiez votre mariage selon l'éthique islamique"],
    },
  },
};

const de: TermsCopy = {
  hero: {
    title: "Allgemeine Geschäftsbedingungen",
    imageAlt: "Eine Hand schreibt mit einem Stift auf Papier, als Symbol für einen Ehevertrag",
  },
  meta: {
    lastUpdated: "Zuletzt aktualisiert: 10. September 2025",
    committee: "Scharia-Ausschuss der Zefaaf-Plattform",
  },
  sections: [
    {
      title: "Erstens: Hinweis des Scharia-Ausschusses",
      paragraphs: [
        "Der Islamische Scharia-Ausschuss fordert die Mitglieder dringend auf, diese Bedingungen sorgfältig zu lesen, bevor sie ein Konto erstellen.",
        "Diese Bedingungen sind für alle Mitglieder verbindlich (unabhängig davon, ob sie einen kostenlosen oder kostenpflichtigen Tarif nutzen).",
        "Die Plattform behält sich das Recht vor, diese Bedingungen jederzeit zu ändern, und die fortgesetzte Nutzung gilt als stillschweigende Zustimmung.",
      ],
    },
    {
      title: "Zweitens: Registrierungs- und Mitgliedschaftsbedingungen",
      bullets: [
        "Das Mitglied muss volljährig und heiratsfähig sein.",
        "Jede Person hat Anspruch auf nur ein Konto.",
        "Die Plattform übernimmt keine Verantwortung für die Richtigkeit der Daten und behält sich das Recht vor, falsche oder irreführende Informationen zu löschen.",
        "Die Übertragung von Geld zwischen Mitgliedern ist aus jeglichem Grund untersagt.",
        "Die Plattform behält sich das Recht vor, jedes nicht konforme Konto ohne vorherige Ankündigung und ohne Rückerstattung der Gebühren zu löschen.",
      ],
    },
    {
      title: "Drittens: Verbotene Ziele",
      intro:
        "Die Zefaaf-Plattform dient ausschließlich der rechtmäßigen Eheschließung. Die Registrierung oder Nutzung zu unrechtmäßigen Zwecken ist untersagt, einschließlich:",
      bullets: [
        "Zeitehe (Mut'ah)",
        "Kurzzeitehe",
        "Gewohnheitsrechtliche Ehe",
        "Jede Praxis, die gegen die islamische Scharia oder geltendes Recht verstößt",
      ],
      outro:
        "Die Plattform behält sich das Recht vor, jedes nicht konforme Konto zu sperren oder zu kündigen, die erforderlichen rechtlichen Schritte einzuleiten und Schadensersatz zu fordern.",
    },
    {
      title: "Weitergabe von Daten",
      intro: "Wir geben Ihre Daten nur in den folgenden Fällen weiter:",
      bullets: [
        "Für rechtliche Zwecke: sofern dies nach geltendem Recht erforderlich ist.",
        "Mit Zustimmung des Nutzers: wenn Sie sich dafür entscheiden, Ihre Daten über die Plattform mit einem anderen Mitglied zu teilen.",
      ],
    },
    {
      title: "Datenschutz",
      paragraphs: [
        "Wir verwenden fortschrittliche Sicherheitsprotokolle (SSL-Verschlüsselung), um Daten während der Übertragung und Speicherung zu schützen. Der Zugriff auf Ihre Daten ist ausschließlich Mitarbeitern oder Partnern mit einem berechtigten Bedürfnis vorbehalten.",
      ],
    },
    {
      title: "Privatsphäre von Kindern",
      paragraphs: ["Die Nutzung der Plattform ist Personen unter 18 Jahren nicht gestattet."],
    },
    {
      title: "Änderungen der Datenschutzrichtlinie",
      paragraphs: [
        "Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Nutzer werden über wesentliche Änderungen per E-Mail oder durch eine In-App-Benachrichtigung informiert.",
      ],
    },
  ],
  conclusion: {
    title: "Schluss",
    committee: {
      name: "Scharia-Ausschuss von Zefaaf",
      lines: ["Wünscht Ihnen Erfolg und Rechtleitung,", "Und wir bitten Allah, Sie mit einer rechtschaffenen und gesegneten Ehe zu segnen."],
    },
    platform: {
      name: "Zefaaf-Plattform",
      lines: ["Planen Sie Ihre Ehe nach islamischer Ethik"],
    },
  },
};

const tr: TermsCopy = {
  hero: {
    title: "Şartlar ve Koşullar",
    imageAlt: "Bir elin kağıda kalemle yazması, evlilik akdini simgeliyor",
  },
  meta: {
    lastUpdated: "Son Güncelleme: 10 Eylül 2025",
    committee: "Zefaaf Platformu Şer'i Komitesi",
  },
  sections: [
    {
      title: "Birincisi: Şer'i Komiteden Bir Uyarı",
      paragraphs: [
        "İslami Şer'i Komite, üyeleri hesap oluşturmadan önce bu şartları dikkatle okumaya çağırır.",
        "Bu şartlar tüm üyeler için bağlayıcıdır (ücretsiz veya ücretli plan fark etmeksizin).",
        "Platform, bu şartları dilediği zaman değiştirme hakkını saklı tutar ve kullanmaya devam etmek zımni kabul anlamına gelir.",
      ],
    },
    {
      title: "İkincisi: Kayıt ve Üyelik Koşulları",
      bullets: [
        "Üye, evliliğe ehil reşit bir kişi olmalıdır.",
        "Her kişi yalnızca bir hesaba hak kazanır.",
        "Platform, verilerin doğruluğundan sorumlu değildir ve yanlış veya yanıltıcı bilgileri silme hakkını saklı tutar.",
        "Üyeler arasında herhangi bir sebeple para transferi yapılması yasaktır.",
        "Platform, kurallara uymayan herhangi bir hesabı önceden bildirimde bulunmaksızın ve ücret iadesi yapmaksızın silme hakkını saklı tutar.",
      ],
    },
    {
      title: "Üçüncüsü: Yasaklanmış Amaçlar",
      intro:
        "Zefaaf platformu yalnızca meşru evliliğe adanmıştır. Herhangi bir gayrimeşru amaçla kayıt olmak veya kullanmak yasaktır, bunlar arasında şunlar yer alır:",
      bullets: [
        "Geçici evlilik (mut'a)",
        "Kısa süreli evlilik",
        "Örfi evlilik",
        "İslami şeriata veya yürürlükteki yasalara aykırı her türlü uygulama",
      ],
      outro:
        "Platform, kurallara uymayan herhangi bir hesabı askıya alma veya iptal etme, gerekli yasal işlemleri başlatma ve zararların tazminini talep etme hakkını saklı tutar.",
    },
    {
      title: "Veri Paylaşımı",
      intro: "Verilerinizi yalnızca aşağıdaki durumlarda paylaşabiliriz:",
      bullets: [
        "Yasal amaçlarla: yürürlükteki yasaların gerektirmesi halinde.",
        "Kullanıcı onayıyla: verilerinizi Platform aracılığıyla başka bir üyeyle paylaşmayı tercih etmeniz halinde.",
      ],
    },
    {
      title: "Veri Koruması",
      paragraphs: [
        "Verileri iletim ve saklama sırasında korumak için gelişmiş güvenlik protokolleri (SSL şifrelemesi) kullanıyoruz. Verilerinize erişim, yalnızca meşru bir ihtiyacı olan çalışanlar veya iş ortaklarıyla sınırlıdır.",
      ],
    },
    {
      title: "Çocukların Gizliliği",
      paragraphs: ["Platformun 18 yaşından küçük kişiler tarafından kullanılmasına izin verilmemektedir."],
    },
    {
      title: "Gizlilik Politikasındaki Değişiklikler",
      paragraphs: [
        "Bu politikayı zaman zaman güncelleyebiliriz. Kullanıcılara önemli değişiklikler e-posta yoluyla veya uygulama içi bildirimle bildirilecektir.",
      ],
    },
  ],
  conclusion: {
    title: "Sonuç",
    committee: {
      name: "Zefaaf Şer'i Komitesi",
      lines: ["Size başarı ve hidayet diler,", "Ve Allah'tan sizi salih ve mübarek bir evlilikle rızıklandırmasını dileriz."],
    },
    platform: {
      name: "Zefaaf Platformu",
      lines: ["Evliliğinizi İslami ahlaka göre planlayın"],
    },
  },
};

const ru: TermsCopy = {
  hero: {
    title: "Условия использования",
    imageAlt: "Рука, пишущая ручкой на бумаге, символизирующая брачный договор",
  },
  meta: {
    lastUpdated: "Последнее обновление: 10 сентября 2025 г.",
    committee: "Шариатский комитет платформы Zefaaf",
  },
  sections: [
    {
      title: "Во-первых: обращение Шариатского комитета",
      paragraphs: [
        "Исламский Шариатский комитет настоятельно призывает участников внимательно ознакомиться с настоящими условиями перед созданием учетной записи.",
        "Настоящие условия обязательны для всех участников (независимо от того, используют ли они бесплатный или платный тариф).",
        "Платформа оставляет за собой право вносить изменения в настоящие условия в любое время, и продолжение использования означает подразумеваемое согласие с ними.",
      ],
    },
    {
      title: "Во-вторых: условия регистрации и членства",
      bullets: [
        "Участник должен быть совершеннолетним и правоспособным для вступления в брак.",
        "Каждый человек имеет право только на одну учетную запись.",
        "Платформа не несет ответственности за достоверность данных и оставляет за собой право удалять любую ложную или вводящую в заблуждение информацию.",
        "Перевод денежных средств между участниками по любой причине запрещен.",
        "Платформа оставляет за собой право удалить любую учетную запись, нарушающую правила, без предварительного уведомления и без возврата уплаченных сборов.",
      ],
    },
    {
      title: "В-третьих: запрещенные цели",
      intro:
        "Платформа Zefaaf предназначена исключительно для заключения законного брака. Регистрация или использование платформы в любых незаконных целях запрещены, включая:",
      bullets: [
        "Временный брак (мут'а)",
        "Кратковременный брак",
        "Обычно-правовой брак",
        "Любую практику, нарушающую нормы исламского шариата или применимого законодательства",
      ],
      outro:
        "Платформа оставляет за собой право приостановить действие или аннулировать любую учетную запись, нарушающую правила, принять необходимые юридические меры и потребовать возмещения причиненного ущерба.",
    },
    {
      title: "Передача данных",
      intro: "Мы можем передавать ваши данные только в следующих случаях:",
      bullets: [
        "В юридических целях: если это требуется применимым законодательством.",
        "С согласия пользователя: если вы решите поделиться своими данными с другим участником через платформу.",
      ],
    },
    {
      title: "Защита данных",
      paragraphs: [
        "Мы используем современные протоколы безопасности (SSL-шифрование) для защиты данных при передаче и хранении. Доступ к вашим данным предоставляется только сотрудникам или партнерам, имеющим на это законное основание.",
      ],
    },
    {
      title: "Конфиденциальность данных несовершеннолетних",
      paragraphs: ["Использование платформы лицами младше 18 лет не допускается."],
    },
    {
      title: "Изменения политики конфиденциальности",
      paragraphs: [
        "Мы можем время от времени обновлять настоящую политику. Пользователи будут уведомлены о любых существенных изменениях по электронной почте или посредством уведомления в приложении.",
      ],
    },
  ],
  conclusion: {
    title: "Заключение",
    committee: {
      name: "Шариатский комитет Zefaaf",
      lines: ["Желает вам успеха и благого руководства,", "И мы просим Аллаха благословить вас праведным и благословенным браком."],
    },
    platform: {
      name: "Платформа Zefaaf",
      lines: ["Планируйте свой брак в соответствии с исламской этикой"],
    },
  },
};

const id: TermsCopy = {
  hero: {
    title: "Syarat & Ketentuan",
    imageAlt: "Tangan yang menulis di atas kertas dengan pena, melambangkan akad pernikahan",
  },
  meta: {
    lastUpdated: "Terakhir Diperbarui: 10 September 2025",
    committee: "Komite Syariah Platform Zefaaf",
  },
  sections: [
    {
      title: "Pertama: Pernyataan dari Komite Syariah",
      paragraphs: [
        "Komite Syariah Islam mendesak para anggota untuk membaca ketentuan ini dengan saksama sebelum membuat akun.",
        "Ketentuan ini mengikat seluruh anggota (baik pada paket gratis maupun berbayar).",
        "Platform berhak mengubah ketentuan ini kapan saja, dan penggunaan yang berkelanjutan dianggap sebagai persetujuan secara tersirat.",
      ],
    },
    {
      title: "Kedua: Ketentuan Pendaftaran dan Keanggotaan",
      bullets: [
        "Anggota harus sudah dewasa dan layak untuk menikah.",
        "Setiap orang hanya berhak memiliki satu akun.",
        "Platform tidak bertanggung jawab atas keakuratan data dan berhak menghapus informasi apa pun yang salah atau menyesatkan.",
        "Transfer uang antar anggota dengan alasan apa pun dilarang.",
        "Platform berhak menghapus akun mana pun yang tidak patuh tanpa pemberitahuan sebelumnya dan tanpa pengembalian biaya.",
      ],
    },
    {
      title: "Ketiga: Tujuan yang Dilarang",
      intro:
        "Platform Zefaaf ditujukan secara eksklusif untuk pernikahan yang sah. Pendaftaran atau penggunaan untuk tujuan apa pun yang melanggar hukum dilarang, termasuk:",
      bullets: [
        "Nikah mut'ah (nikah sementara)",
        "Pernikahan jangka pendek",
        "Pernikahan adat (tanpa pencatatan resmi)",
        "Praktik apa pun yang melanggar syariat Islam atau hukum yang berlaku",
      ],
      outro:
        "Platform berhak menangguhkan atau membatalkan akun mana pun yang tidak patuh, mengambil tindakan hukum yang diperlukan, dan menuntut ganti rugi atas kerusakan yang timbul.",
    },
    {
      title: "Pembagian Data",
      intro: "Kami hanya dapat membagikan data Anda dalam kasus-kasus berikut:",
      bullets: [
        "Untuk tujuan hukum: jika diwajibkan oleh hukum yang berlaku.",
        "Dengan persetujuan pengguna: jika Anda memilih untuk membagikan data Anda dengan anggota lain melalui Platform.",
      ],
    },
    {
      title: "Perlindungan Data",
      paragraphs: [
        "Kami menggunakan protokol keamanan tingkat lanjut (enkripsi SSL) untuk melindungi data selama pengiriman dan penyimpanan. Akses ke data Anda dibatasi hanya untuk karyawan atau mitra yang memiliki kebutuhan yang sah.",
      ],
    },
    {
      title: "Privasi Anak-Anak",
      paragraphs: ["Platform ini tidak diperbolehkan digunakan oleh individu di bawah usia 18 tahun."],
    },
    {
      title: "Perubahan Kebijakan Privasi",
      paragraphs: [
        "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Pengguna akan diberi tahu mengenai perubahan material apa pun melalui email atau melalui notifikasi dalam aplikasi.",
      ],
    },
  ],
  conclusion: {
    title: "Penutup",
    committee: {
      name: "Komite Syariah Zefaaf",
      lines: ["Mendoakan Anda keberhasilan dan petunjuk,", "Dan kami memohon kepada Allah agar mengaruniakan Anda pernikahan yang saleh dan penuh berkah."],
    },
    platform: {
      name: "Platform Zefaaf",
      lines: ["Rencanakan pernikahan Anda sesuai etika Islam"],
    },
  },
};

const zh: TermsCopy = {
  hero: {
    title: "条款与条件",
    imageAlt: "一只手用笔在纸上书写,象征婚姻契约",
  },
  meta: {
    lastUpdated: "最后更新:2025年9月10日",
    committee: "Zefaaf 平台教法委员会",
  },
  sections: [
    {
      title: "第一部分:教法委员会声明",
      paragraphs: [
        "伊斯兰教法委员会敦促各位会员在创建账户之前仔细阅读本条款。",
        "本条款对所有会员均具有约束力(无论使用免费或付费套餐)。",
        "平台保留随时修改本条款的权利,继续使用即视为默示同意。",
      ],
    },
    {
      title: "第二部分:注册与会员资格条件",
      bullets: [
        "会员必须为具备结婚资格的成年人。",
        "每人仅可拥有一个账户。",
        "平台对数据的准确性不承担责任,并保留删除任何虚假或误导性信息的权利。",
        "严禁会员之间以任何理由进行资金转账。",
        "平台保留在不事先通知且不退还费用的情况下删除任何违规账户的权利。",
      ],
    },
    {
      title: "第三部分:禁止的目的",
      intro: "Zefaaf 平台专门致力于合法婚姻。禁止为任何非法目的进行注册或使用,包括:",
      bullets: [
        "临时婚姻(享乐婚)",
        "短期婚姻",
        "习俗婚姻",
        "任何违反伊斯兰教法或适用法律的行为",
      ],
      outro: "平台保留暂停或取消任何违规账户、采取必要法律行动并就损害索赔的权利。",
    },
    {
      title: "数据共享",
      intro: "我们仅在以下情况下共享您的数据:",
      bullets: [
        "出于法律目的:适用法律要求时。",
        "经用户同意:如果您选择通过平台与其他会员共享您的数据。",
      ],
    },
    {
      title: "数据保护",
      paragraphs: [
        "我们采用先进的安全协议(SSL 加密)在传输和存储过程中保护数据。只有具有合法需要的员工或合作伙伴才能访问您的数据。",
      ],
    },
    {
      title: "儿童隐私",
      paragraphs: ["本平台不允许未满18岁的人士使用。"],
    },
    {
      title: "隐私政策的变更",
      paragraphs: [
        "我们可能会不时更新本政策。如有任何重大变更,将通过电子邮件或应用内通知告知用户。",
      ],
    },
  ],
  conclusion: {
    title: "结语",
    committee: {
      name: "Zefaaf 教法委员会",
      lines: ["祝愿您成功并获得引导,", "我们祈求真主赐予您一段正直而蒙福的婚姻。"],
    },
    platform: {
      name: "Zefaaf 平台",
      lines: ["以伊斯兰伦理规划您的婚姻"],
    },
  },
};

const bn: TermsCopy = {
  hero: {
    title: "শর্তাবলী",
    imageAlt: "কলম দিয়ে কাগজে লেখা একটি হাত, যা বিবাহ চুক্তির প্রতীক",
  },
  meta: {
    lastUpdated: "সর্বশেষ আপডেট: 10 সেপ্টেম্বর, 2025",
    committee: "জেফাফ প্ল্যাটফর্মের শরিয়া কমিটি",
  },
  sections: [
    {
      title: "প্রথমত: শরিয়া কমিটির পক্ষ থেকে বিজ্ঞপ্তি",
      paragraphs: [
        "ইসলামিক শরিয়া কমিটি সদস্যদের অ্যাকাউন্ট তৈরি করার আগে এই শর্তাবলী মনোযোগ সহকারে পড়ার জন্য অনুরোধ করছে।",
        "এই শর্তাবলী সকল সদস্যের জন্য (বিনামূল্যে বা পেইড প্ল্যান নির্বিশেষে) বাধ্যতামূলক।",
        "প্ল্যাটফর্ম যেকোনো সময় এই শর্তাবলী সংশোধন করার অধিকার সংরক্ষণ করে, এবং ব্যবহার অব্যাহত রাখা অন্তর্নিহিত সম্মতি হিসেবে গণ্য হবে।",
      ],
    },
    {
      title: "দ্বিতীয়ত: নিবন্ধন ও সদস্যপদের শর্তাবলী",
      bullets: [
        "সদস্যকে অবশ্যই বিবাহের উপযুক্ত একজন প্রাপ্তবয়স্ক হতে হবে।",
        "প্রতিটি ব্যক্তি কেবল একটি অ্যাকাউন্টের অধিকারী হতে পারবেন।",
        "প্ল্যাটফর্ম তথ্যের যথার্থতার জন্য দায়ী নয় এবং যেকোনো মিথ্যা বা বিভ্রান্তিকর তথ্য মুছে ফেলার অধিকার সংরক্ষণ করে।",
        "কোনো কারণেই সদস্যদের মধ্যে অর্থ স্থানান্তর নিষিদ্ধ।",
        "প্ল্যাটফর্ম পূর্ব নোটিশ ছাড়াই এবং ফি ফেরত না দিয়ে যেকোনো অ-সম্মতিপূর্ণ অ্যাকাউন্ট মুছে ফেলার অধিকার সংরক্ষণ করে।",
      ],
    },
    {
      title: "তৃতীয়ত: নিষিদ্ধ উদ্দেশ্য",
      intro:
        "জেফাফ প্ল্যাটফর্ম একচেটিয়াভাবে বৈধ বিবাহের জন্য নিবেদিত। যেকোনো অবৈধ উদ্দেশ্যে নিবন্ধন বা ব্যবহার নিষিদ্ধ, যার মধ্যে রয়েছে:",
      bullets: [
        "অস্থায়ী বিবাহ (মুতআ)",
        "স্বল্পমেয়াদী বিবাহ",
        "প্রথাগত বিবাহ",
        "ইসলামিক শরিয়া বা প্রযোজ্য আইন লঙ্ঘনকারী যেকোনো অনুশীলন",
      ],
      outro:
        "প্ল্যাটফর্ম যেকোনো অ-সম্মতিপূর্ণ অ্যাকাউন্ট স্থগিত বা বাতিল করার, প্রয়োজনীয় আইনি ব্যবস্থা গ্রহণ করার এবং ক্ষতির জন্য ক্ষতিপূরণ দাবি করার অধিকার সংরক্ষণ করে।",
    },
    {
      title: "তথ্য শেয়ারকরণ",
      intro: "আমরা কেবল নিম্নলিখিত ক্ষেত্রে আপনার তথ্য শেয়ার করতে পারি:",
      bullets: [
        "আইনি উদ্দেশ্যে: প্রযোজ্য আইন দ্বারা প্রয়োজন হলে।",
        "ব্যবহারকারীর সম্মতিতে: আপনি যদি প্ল্যাটফর্মের মাধ্যমে অন্য কোনো সদস্যের সাথে আপনার তথ্য শেয়ার করতে বেছে নেন।",
      ],
    },
    {
      title: "তথ্য সুরক্ষা",
      paragraphs: [
        "আমরা ট্রান্সমিশন এবং সংরক্ষণের সময় তথ্য সুরক্ষিত রাখতে উন্নত নিরাপত্তা প্রোটোকল (SSL এনক্রিপশন) ব্যবহার করি। আপনার তথ্যে প্রবেশাধিকার শুধুমাত্র বৈধ প্রয়োজন রয়েছে এমন কর্মচারী বা অংশীদারদের মধ্যে সীমাবদ্ধ।",
      ],
    },
    {
      title: "শিশুদের গোপনীয়তা",
      paragraphs: ["18 বছরের কম বয়সী ব্যক্তিদের এই প্ল্যাটফর্ম ব্যবহারের অনুমতি নেই।"],
    },
    {
      title: "গোপনীয়তা নীতিতে পরিবর্তন",
      paragraphs: [
        "আমরা সময়ে সময়ে এই নীতি হালনাগাদ করতে পারি। ব্যবহারকারীদের যেকোনো গুরুত্বপূর্ণ পরিবর্তন সম্পর্কে ইমেইল বা অ্যাপ-ভিত্তিক বিজ্ঞপ্তির মাধ্যমে জানানো হবে।",
      ],
    },
  ],
  conclusion: {
    title: "উপসংহার",
    committee: {
      name: "জেফাফের শরিয়া কমিটি",
      lines: ["আপনার সাফল্য ও হিদায়াত কামনা করছে,", "এবং আমরা আল্লাহর কাছে দোয়া করি যেন তিনি আপনাকে একটি নেককার ও বরকতময় বিবাহ দান করেন।"],
    },
    platform: {
      name: "জেফাফ প্ল্যাটফর্ম",
      lines: ["ইসলামিক নীতিশাস্ত্র অনুসারে আপনার বিবাহের পরিকল্পনা করুন"],
    },
  },
};

const bs: TermsCopy = {
  hero: {
    title: "Uslovi i odredbe",
    imageAlt: "Ruka koja piše olovkom na papiru, simbolizirajući bračni ugovor",
  },
  meta: {
    lastUpdated: "Posljednje ažuriranje: 10. septembar 2025.",
    committee: "Šerijatski odbor platforme Zefaaf",
  },
  sections: [
    {
      title: "Prvo: Obavještenje Šerijatskog odbora",
      paragraphs: [
        "Islamski šerijatski odbor podstiče članove da pažljivo pročitaju ove uslove prije otvaranja računa.",
        "Ovi uslovi su obavezujući za sve članove (bilo da koriste besplatni ili plaćeni plan).",
        "Platforma zadržava pravo izmjene ovih uslova u bilo kojem trenutku, a daljnje korištenje predstavlja prešutnu saglasnost.",
      ],
    },
    {
      title: "Drugo: Uslovi registracije i članstva",
      bullets: [
        "Član mora biti punoljetna osoba sposobna za brak.",
        "Svaka osoba ima pravo na samo jedan račun.",
        "Platforma ne snosi odgovornost za tačnost podataka i zadržava pravo brisanja bilo koje lažne ili obmanjujuće informacije.",
        "Prenos novca između članova iz bilo kojeg razloga je zabranjen.",
        "Platforma zadržava pravo brisanja bilo kojeg neusklađenog računa bez prethodne najave i bez povrata naknada.",
      ],
    },
    {
      title: "Treće: Zabranjeni ciljevi",
      intro:
        "Platforma Zefaaf je namijenjena isključivo zakonitom braku. Registracija ili korištenje u bilo koju nezakonitu svrhu je zabranjeno, uključujući:",
      bullets: [
        "Privremeni brak (mut'a)",
        "Kratkoročni brak",
        "Običajni brak",
        "Bilo koju praksu koja krši islamski šerijat ili važeće zakone",
      ],
      outro:
        "Platforma zadržava pravo suspendovanja ili otkazivanja bilo kojeg neusklađenog računa, poduzimanja potrebnih pravnih radnji i potraživanja naknade štete.",
    },
    {
      title: "Dijeljenje podataka",
      intro: "Vaše podatke možemo dijeliti samo u sljedećim slučajevima:",
      bullets: [
        "U zakonske svrhe: ako to zahtijeva važeći zakon.",
        "Uz saglasnost korisnika: ako odlučite podijeliti svoje podatke s drugim članom putem Platforme.",
      ],
    },
    {
      title: "Zaštita podataka",
      paragraphs: [
        "Koristimo napredne sigurnosne protokole (SSL enkripciju) za zaštitu podataka tokom prenosa i pohrane. Pristup vašim podacima ograničen je isključivo na zaposlenike ili partnere koji imaju opravdanu potrebu.",
      ],
    },
    {
      title: "Privatnost djece",
      paragraphs: ["Platforma se ne smije koristiti od strane osoba mlađih od 18 godina."],
    },
    {
      title: "Izmjene politike privatnosti",
      paragraphs: [
        "Ovu politiku možemo povremeno ažurirati. Korisnici će biti obaviješteni o svim značajnim izmjenama putem e-maila ili obavještenja unutar aplikacije.",
      ],
    },
  ],
  conclusion: {
    title: "Zaključak",
    committee: {
      name: "Šerijatski odbor Zefaafa",
      lines: ["Želi vam uspjeh i uputu,", "I molimo Allaha da vas obdari čestitim i blagoslovljenim brakom."],
    },
    platform: {
      name: "Platforma Zefaaf",
      lines: ["Planirajte svoj brak u skladu s islamskom etikom"],
    },
  },
};

const es: TermsCopy = {
  hero: {
    title: "Términos y Condiciones",
    imageAlt: "Una mano escribiendo en papel con un bolígrafo, simbolizando un contrato matrimonial",
  },
  meta: {
    lastUpdated: "Última actualización: 10 de septiembre de 2025",
    committee: "Comité de la Sharia de la Plataforma Zefaaf",
  },
  sections: [
    {
      title: "Primero: Aviso del Comité de la Sharia",
      paragraphs: [
        "El Comité de la Sharia Islámica insta a los miembros a leer detenidamente estos términos antes de crear una cuenta.",
        "Estos términos son vinculantes para todos los miembros (ya sea en planes gratuitos o de pago).",
        "La plataforma se reserva el derecho de modificar estos términos en cualquier momento, y el uso continuado constituye una aceptación implícita.",
      ],
    },
    {
      title: "Segundo: Condiciones de registro y membresía",
      bullets: [
        "El miembro debe ser mayor de edad y apto para el matrimonio.",
        "Cada persona tiene derecho a una sola cuenta.",
        "La plataforma no se hace responsable de la exactitud de los datos y se reserva el derecho de eliminar cualquier información falsa o engañosa.",
        "Queda prohibida la transferencia de dinero entre miembros por cualquier motivo.",
        "La plataforma se reserva el derecho de eliminar cualquier cuenta que incumpla estos términos sin previo aviso y sin reembolso de las tarifas.",
      ],
    },
    {
      title: "Tercero: Objetivos prohibidos",
      intro:
        "La plataforma Zefaaf está dedicada exclusivamente al matrimonio lícito. Se prohíbe el registro o el uso para cualquier fin ilícito, incluyendo:",
      bullets: [
        "El matrimonio temporal (mut'ah)",
        "El matrimonio de corta duración",
        "El matrimonio consuetudinario",
        "Cualquier práctica que infrinja la Sharia islámica o las leyes aplicables",
      ],
      outro:
        "La plataforma se reserva el derecho de suspender o cancelar cualquier cuenta que incumpla estos términos, emprender las acciones legales necesarias y reclamar una indemnización por los daños ocasionados.",
    },
    {
      title: "Intercambio de datos",
      intro: "Solo podemos compartir sus datos en los siguientes casos:",
      bullets: [
        "Con fines legales: si así lo exigen las leyes aplicables.",
        "Con el consentimiento del usuario: si decide compartir sus datos con otro miembro a través de la Plataforma.",
      ],
    },
    {
      title: "Protección de datos",
      paragraphs: [
        "Utilizamos protocolos de seguridad avanzados (cifrado SSL) para proteger los datos durante su transmisión y almacenamiento. El acceso a sus datos está restringido únicamente a empleados o socios con una necesidad legítima.",
      ],
    },
    {
      title: "Privacidad de los menores",
      paragraphs: ["No se permite el uso de la plataforma a personas menores de 18 años."],
    },
    {
      title: "Cambios en la política de privacidad",
      paragraphs: [
        "Podemos actualizar esta política de vez en cuando. Se notificará a los usuarios sobre cualquier cambio importante por correo electrónico o mediante una notificación dentro de la aplicación.",
      ],
    },
  ],
  conclusion: {
    title: "Conclusión",
    committee: {
      name: "Comité de la Sharia de Zefaaf",
      lines: ["Les desea éxito y guía,", "Y pedimos a Alá que les conceda un matrimonio recto y bendecido."],
    },
    platform: {
      name: "Plataforma Zefaaf",
      lines: ["Planifique su matrimonio conforme a la ética islámica"],
    },
  },
};

const fa: TermsCopy = {
  hero: {
    title: "شرایط و ضوابط",
    imageAlt: "دستی که با قلم روی کاغذ می‌نویسد، نمادی از عقد ازدواج",
  },
  meta: {
    lastUpdated: "آخرین به‌روزرسانی: 10 سپتامبر 2025",
    committee: "کمیته شرعی پلتفرم زفاف",
  },
  sections: [
    {
      title: "اول: اطلاعیه کمیته شرعی",
      paragraphs: [
        "کمیته شرعی اسلامی از اعضا می‌خواهد پیش از ایجاد حساب کاربری، این شرایط را با دقت مطالعه کنند.",
        "این شرایط برای همه اعضا (چه در طرح رایگان و چه در طرح پرداختی) الزام‌آور است.",
        "پلتفرم حق دارد در هر زمان این شرایط را اصلاح کند و ادامه استفاده به‌منزله پذیرش ضمنی آن است.",
      ],
    },
    {
      title: "دوم: شرایط ثبت‌نام و عضویت",
      bullets: [
        "عضو باید فرد بالغی باشد که برای ازدواج شایستگی دارد.",
        "هر فرد تنها حق داشتن یک حساب کاربری را دارد.",
        "پلتفرم مسئولیتی در قبال صحت اطلاعات ندارد و حق دارد هرگونه اطلاعات نادرست یا گمراه‌کننده را حذف کند.",
        "انتقال پول میان اعضا به هر دلیلی ممنوع است.",
        "پلتفرم حق دارد هر حساب متخلف را بدون اطلاع قبلی و بدون بازگرداندن هزینه‌ها حذف کند.",
      ],
    },
    {
      title: "سوم: اهداف ممنوع",
      intro: "پلتفرم زفاف صرفاً به ازدواج مشروع اختصاص دارد. ثبت‌نام یا استفاده برای هر هدف غیرمشروعی ممنوع است، از جمله:",
      bullets: [
        "ازدواج موقت (متعه)",
        "ازدواج کوتاه‌مدت",
        "ازدواج عرفی",
        "هرگونه عملی که با شریعت اسلامی یا قوانین مربوطه مغایرت داشته باشد",
      ],
      outro:
        "پلتفرم حق دارد هر حساب متخلف را معلق یا لغو کند، اقدامات قانونی لازم را انجام دهد و خسارت وارده را مطالبه کند.",
    },
    {
      title: "اشتراک‌گذاری اطلاعات",
      intro: "ما اطلاعات شما را تنها در موارد زیر به اشتراک می‌گذاریم:",
      bullets: [
        "برای اهداف قانونی: در صورتی که قوانین مربوطه چنین امری را الزامی کنند.",
        "با رضایت کاربر: در صورتی که شما تصمیم بگیرید اطلاعات خود را از طریق پلتفرم با عضو دیگری به اشتراک بگذارید.",
      ],
    },
    {
      title: "حفاظت از اطلاعات",
      paragraphs: [
        "ما از پروتکل‌های امنیتی پیشرفته (رمزگذاری SSL) برای محافظت از اطلاعات در هنگام انتقال و ذخیره‌سازی استفاده می‌کنیم. دسترسی به اطلاعات شما تنها به کارکنان یا شرکایی که نیاز مشروع دارند محدود است.",
      ],
    },
    {
      title: "حریم خصوصی کودکان",
      paragraphs: ["استفاده از پلتفرم برای افراد زیر 18 سال مجاز نیست."],
    },
    {
      title: "تغییرات در سیاست حفظ حریم خصوصی",
      paragraphs: [
        "ممکن است این سیاست را هر از گاهی به‌روزرسانی کنیم. کاربران از طریق ایمیل یا اعلان درون‌برنامه‌ای از هرگونه تغییر اساسی مطلع خواهند شد.",
      ],
    },
  ],
  conclusion: {
    title: "نتیجه‌گیری",
    committee: {
      name: "کمیته شرعی زفاف",
      lines: ["برای شما آرزوی موفقیت و هدایت دارد،", "و از خداوند می‌خواهیم شما را به ازدواجی صالح و پربرکت روزی دهد."],
    },
    platform: {
      name: "پلتفرم زفاف",
      lines: ["ازدواج خود را بر اساس اخلاق اسلامی برنامه‌ریزی کنید"],
    },
  },
};

const pt: TermsCopy = {
  hero: {
    title: "Termos e Condições",
    imageAlt: "Uma mão escrevendo em papel com uma caneta, simbolizando um contrato de casamento",
  },
  meta: {
    lastUpdated: "Última atualização: 10 de setembro de 2025",
    committee: "Comitê da Sharia da Plataforma Zefaaf",
  },
  sections: [
    {
      title: "Primeiro: Aviso do Comitê da Sharia",
      paragraphs: [
        "O Comitê da Sharia Islâmica exorta os membros a lerem atentamente estes termos antes de criar uma conta.",
        "Estes termos são vinculativos para todos os membros (independentemente de estarem em planos gratuitos ou pagos).",
        "A plataforma reserva-se o direito de alterar estes termos a qualquer momento, e a continuidade do uso constitui aceitação implícita.",
      ],
    },
    {
      title: "Segundo: Condições de Registro e Associação",
      bullets: [
        "O membro deve ser adulto e apto para o casamento.",
        "Cada pessoa tem direito a apenas uma conta.",
        "A plataforma não se responsabiliza pela exatidão dos dados e reserva-se o direito de excluir qualquer informação falsa ou enganosa.",
        "É proibida a transferência de dinheiro entre membros por qualquer motivo.",
        "A plataforma reserva-se o direito de excluir qualquer conta não conforme sem aviso prévio e sem reembolso das taxas.",
      ],
    },
    {
      title: "Terceiro: Objetivos Proibidos",
      intro:
        "A plataforma Zefaaf é dedicada exclusivamente ao casamento lícito. É proibido o registro ou uso para qualquer finalidade ilícita, incluindo:",
      bullets: [
        "Casamento temporário (mut'ah)",
        "Casamento de curta duração",
        "Casamento consuetudinário",
        "Qualquer prática que viole a Sharia islâmica ou as leis aplicáveis",
      ],
      outro:
        "A plataforma reserva-se o direito de suspender ou cancelar qualquer conta não conforme, tomar as medidas legais necessárias e reclamar indenização por danos.",
    },
    {
      title: "Compartilhamento de Dados",
      intro: "Podemos compartilhar seus dados apenas nos seguintes casos:",
      bullets: [
        "Para fins legais: se exigido pelas leis aplicáveis.",
        "Com o consentimento do usuário: se você optar por compartilhar seus dados com outro membro por meio da Plataforma.",
      ],
    },
    {
      title: "Proteção de Dados",
      paragraphs: [
        "Utilizamos protocolos de segurança avançados (criptografia SSL) para proteger os dados durante a transmissão e o armazenamento. O acesso aos seus dados é restrito apenas a funcionários ou parceiros com necessidade legítima.",
      ],
    },
    {
      title: "Privacidade das Crianças",
      paragraphs: ["Não é permitido o uso da plataforma por indivíduos com menos de 18 anos."],
    },
    {
      title: "Alterações à Política de Privacidade",
      paragraphs: [
        "Podemos atualizar esta política periodicamente. Os usuários serão notificados sobre quaisquer alterações materiais por e-mail ou por meio de uma notificação no aplicativo.",
      ],
    },
  ],
  conclusion: {
    title: "Conclusão",
    committee: {
      name: "Comitê da Sharia da Zefaaf",
      lines: ["Deseja a vocês sucesso e orientação,", "E pedimos a Allah que os abençoe com um casamento justo e abençoado."],
    },
    platform: {
      name: "Plataforma Zefaaf",
      lines: ["Planeje seu casamento de acordo com a ética islâmica"],
    },
  },
};

const ja: TermsCopy = {
  hero: {
    title: "利用規約",
    imageAlt: "ペンで紙に書く手、結婚契約を象徴している",
  },
  meta: {
    lastUpdated: "最終更新日:2025年9月10日",
    committee: "Zefaaf プラットフォーム・シャリーア委員会",
  },
  sections: [
    {
      title: "第一:シャリーア委員会からのお知らせ",
      paragraphs: [
        "イスラム・シャリーア委員会は、会員の皆様にアカウント作成前にこれらの規約を注意深くお読みいただくよう強くお勧めします。",
        "本規約は、無料プランまたは有料プランのいずれをご利用の会員にも拘束力を持ちます。",
        "プラットフォームはいつでも本規約を変更する権利を留保し、継続してご利用いただくことは黙示的な同意を構成します。",
      ],
    },
    {
      title: "第二:登録および会員資格の条件",
      bullets: [
        "会員は結婚適齢に達した成人でなければなりません。",
        "各人はアカウントを1つのみ保有できます。",
        "プラットフォームはデータの正確性について責任を負わず、虚偽または誤解を招く情報を削除する権利を留保します。",
        "いかなる理由であっても、会員間での金銭の授受は禁止されています。",
        "プラットフォームは、事前通知なしに、また料金の返金なしに、規約に違反するアカウントを削除する権利を留保します。",
      ],
    },
    {
      title: "第三:禁止される目的",
      intro: "Zefaaf プラットフォームは、合法的な結婚のためだけに提供されています。以下を含む、いかなる不法な目的での登録または利用も禁止されています。",
      bullets: [
        "一時婚(ムトア婚)",
        "短期婚",
        "慣習婚",
        "イスラム・シャリーアまたは適用される法律に違反するあらゆる行為",
      ],
      outro:
        "プラットフォームは、規約に違反するアカウントを停止または解約し、必要な法的措置を講じ、損害に対する賠償を請求する権利を留保します。",
    },
    {
      title: "データの共有",
      intro: "当社は以下の場合に限り、お客様のデータを共有することがあります。",
      bullets: [
        "法的目的のため:適用される法律により必要とされる場合。",
        "利用者の同意による:お客様が本プラットフォームを通じて他の会員とデータを共有することを選択した場合。",
      ],
    },
    {
      title: "データ保護",
      paragraphs: [
        "当社は、送信および保存中のデータを保護するために、高度なセキュリティプロトコル(SSL暗号化)を使用しています。お客様のデータへのアクセスは、正当な必要性を有する従業員またはパートナーのみに制限されています。",
      ],
    },
    {
      title: "児童のプライバシー",
      paragraphs: ["本プラットフォームは、18歳未満の方はご利用いただけません。"],
    },
    {
      title: "プライバシーポリシーの変更",
      paragraphs: [
        "当社は本ポリシーを随時更新することがあります。重要な変更がある場合、利用者にはメールまたはアプリ内通知を通じてお知らせします。",
      ],
    },
  ],
  conclusion: {
    title: "結び",
    committee: {
      name: "Zefaaf シャリーア委員会",
      lines: ["皆様のご成功と導きをお祈り申し上げます。", "アッラーが皆様に正しく祝福された結婚をお授けくださいますようお祈りいたします。"],
    },
    platform: {
      name: "Zefaaf プラットフォーム",
      lines: ["イスラムの倫理に基づいて結婚を計画しましょう"],
    },
  },
};

const ko: TermsCopy = {
  hero: {
    title: "이용약관",
    imageAlt: "펜으로 종이에 글을 쓰는 손, 혼인 계약을 상징함",
  },
  meta: {
    lastUpdated: "최종 업데이트: 2025년 9월 10일",
    committee: "Zefaaf 플랫폼 샤리아 위원회",
  },
  sections: [
    {
      title: "첫째: 샤리아 위원회의 공지",
      paragraphs: [
        "이슬람 샤리아 위원회는 회원들이 계정을 생성하기 전에 본 약관을 주의 깊게 읽을 것을 권고합니다.",
        "본 약관은 무료 또는 유료 플랜 여부와 관계없이 모든 회원에게 구속력을 갖습니다.",
        "플랫폼은 언제든지 본 약관을 개정할 권리를 보유하며, 계속 사용하는 것은 묵시적 동의를 구성합니다.",
      ],
    },
    {
      title: "둘째: 등록 및 회원 자격 조건",
      bullets: [
        "회원은 혼인 적격을 갖춘 성인이어야 합니다.",
        "각 개인은 오직 하나의 계정만 보유할 수 있습니다.",
        "플랫폼은 데이터의 정확성에 대해 책임을 지지 않으며, 허위 또는 오해의 소지가 있는 정보를 삭제할 권리를 보유합니다.",
        "어떠한 이유로든 회원 간의 금전 이체는 금지됩니다.",
        "플랫폼은 사전 통지 없이, 그리고 수수료 환불 없이 규정을 위반한 계정을 삭제할 권리를 보유합니다.",
      ],
    },
    {
      title: "셋째: 금지된 목적",
      intro: "Zefaaf 플랫폼은 오로지 합법적인 혼인만을 위해 제공됩니다. 다음을 포함하여 불법적인 목적을 위한 등록 또는 이용은 금지됩니다.",
      bullets: [
        "임시혼(무트아)",
        "단기혼",
        "관습혼",
        "이슬람 샤리아 또는 관련 법률을 위반하는 모든 행위",
      ],
      outro:
        "플랫폼은 규정을 위반한 계정을 정지 또는 해지하고, 필요한 법적 조치를 취하며, 손해에 대한 배상을 청구할 권리를 보유합니다.",
    },
    {
      title: "데이터 공유",
      intro: "당사는 다음의 경우에만 귀하의 데이터를 공유할 수 있습니다.",
      bullets: [
        "법적 목적을 위하여: 관련 법률에 의해 요구되는 경우.",
        "이용자의 동의에 의하여: 귀하가 본 플랫폼을 통해 다른 회원과 데이터를 공유하기로 선택한 경우.",
      ],
    },
    {
      title: "데이터 보호",
      paragraphs: [
        "당사는 전송 및 저장 중 데이터를 보호하기 위해 고급 보안 프로토콜(SSL 암호화)을 사용합니다. 귀하의 데이터에 대한 접근은 정당한 필요가 있는 직원 또는 파트너로만 제한됩니다.",
      ],
    },
    {
      title: "아동의 개인정보 보호",
      paragraphs: ["본 플랫폼은 18세 미만인 자의 이용이 허용되지 않습니다."],
    },
    {
      title: "개인정보 처리방침의 변경",
      paragraphs: [
        "당사는 본 방침을 수시로 업데이트할 수 있습니다. 중대한 변경 사항이 있는 경우 이메일 또는 앱 내 알림을 통해 이용자에게 통지합니다.",
      ],
    },
  ],
  conclusion: {
    title: "맺음말",
    committee: {
      name: "Zefaaf 샤리아 위원회",
      lines: ["여러분의 성공과 인도하심을 기원합니다,", "그리고 알라께서 여러분에게 의롭고 축복받은 혼인을 허락하시기를 기도합니다."],
    },
    platform: {
      name: "Zefaaf 플랫폼",
      lines: ["이슬람 윤리에 따라 혼인을 계획하세요"],
    },
  },
};

const it: TermsCopy = {
  hero: {
    title: "Termini e Condizioni",
    imageAlt: "Una mano che scrive su carta con una penna, simbolo di un contratto matrimoniale",
  },
  meta: {
    lastUpdated: "Ultimo aggiornamento: 10 settembre 2025",
    committee: "Comitato della Sharia della Piattaforma Zefaaf",
  },
  sections: [
    {
      title: "Primo: Avviso del Comitato della Sharia",
      paragraphs: [
        "Il Comitato della Sharia Islamica esorta i membri a leggere attentamente questi termini prima di creare un account.",
        "Questi termini sono vincolanti per tutti i membri (sia con piano gratuito che a pagamento).",
        "La piattaforma si riserva il diritto di modificare questi termini in qualsiasi momento, e l'uso continuato costituisce accettazione implicita.",
      ],
    },
    {
      title: "Secondo: Condizioni di Registrazione e Adesione",
      bullets: [
        "Il membro deve essere maggiorenne e idoneo al matrimonio.",
        "Ogni persona ha diritto a un solo account.",
        "La piattaforma non è responsabile dell'accuratezza dei dati e si riserva il diritto di eliminare qualsiasi informazione falsa o fuorviante.",
        "È vietato trasferire denaro tra membri per qualsiasi motivo.",
        "La piattaforma si riserva il diritto di eliminare qualsiasi account non conforme senza preavviso e senza rimborso delle quote.",
      ],
    },
    {
      title: "Terzo: Obiettivi Vietati",
      intro:
        "La piattaforma Zefaaf è dedicata esclusivamente al matrimonio lecito. È vietata la registrazione o l'uso per qualsiasi scopo illecito, tra cui:",
      bullets: [
        "Il matrimonio temporaneo (mut'ah)",
        "Il matrimonio di breve durata",
        "Il matrimonio consuetudinario",
        "Qualsiasi pratica che violi la Sharia islamica o le leggi applicabili",
      ],
      outro:
        "La piattaforma si riserva il diritto di sospendere o annullare qualsiasi account non conforme, di intraprendere le azioni legali necessarie e di richiedere un risarcimento per i danni.",
    },
    {
      title: "Condivisione dei Dati",
      intro: "Possiamo condividere i tuoi dati solo nei seguenti casi:",
      bullets: [
        "Per scopi legali: se richiesto dalle leggi applicabili.",
        "Con il consenso dell'utente: se scegli di condividere i tuoi dati con un altro membro tramite la Piattaforma.",
      ],
    },
    {
      title: "Protezione dei Dati",
      paragraphs: [
        "Utilizziamo protocolli di sicurezza avanzati (crittografia SSL) per proteggere i dati durante la trasmissione e l'archiviazione. L'accesso ai tuoi dati è limitato esclusivamente ai dipendenti o partner con un'esigenza legittima.",
      ],
    },
    {
      title: "Privacy dei Minori",
      paragraphs: ["L'uso della piattaforma non è consentito a persone di età inferiore ai 18 anni."],
    },
    {
      title: "Modifiche alla Informativa sulla Privacy",
      paragraphs: [
        "Potremmo aggiornare periodicamente questa informativa. Gli utenti saranno informati di eventuali modifiche sostanziali tramite e-mail o tramite una notifica all'interno dell'app.",
      ],
    },
  ],
  conclusion: {
    title: "Conclusione",
    committee: {
      name: "Comitato della Sharia di Zefaaf",
      lines: ["Vi augura successo e retta guida,", "E chiediamo ad Allah di concedervi un matrimonio virtuoso e benedetto."],
    },
    platform: {
      name: "Piattaforma Zefaaf",
      lines: ["Pianifica il tuo matrimonio secondo l'etica islamica"],
    },
  },
};

const ur: TermsCopy = {
  hero: {
    title: "شرائط و ضوابط",
    imageAlt: "ایک ہاتھ قلم سے کاغذ پر لکھ رہا ہے، جو نکاح کے معاہدے کی علامت ہے",
  },
  meta: {
    lastUpdated: "آخری تازہ کاری: 10 ستمبر 2025",
    committee: "زفاف پلیٹ فارم کی شرعی کمیٹی",
  },
  sections: [
    {
      title: "اول: شرعی کمیٹی کی جانب سے اطلاع",
      paragraphs: [
        "اسلامی شرعی کمیٹی اراکین سے اپیل کرتی ہے کہ اکاؤنٹ بنانے سے پہلے ان شرائط کو غور سے پڑھیں۔",
        "یہ شرائط تمام اراکین کے لیے (چاہے مفت ہوں یا ادائیگی والے پلان پر) پابند ہیں۔",
        "پلیٹ فارم کسی بھی وقت ان شرائط میں ترمیم کرنے کا حق محفوظ رکھتا ہے، اور استعمال جاری رکھنا ضمنی رضامندی تصور ہوگا۔",
      ],
    },
    {
      title: "دوم: رجسٹریشن اور رکنیت کی شرائط",
      bullets: [
        "رکن کا بالغ اور نکاح کا اہل ہونا ضروری ہے۔",
        "ہر شخص کو صرف ایک اکاؤنٹ رکھنے کا حق حاصل ہے۔",
        "پلیٹ فارم ڈیٹا کی درستگی کا ذمہ دار نہیں اور کسی بھی جھوٹی یا گمراہ کن معلومات کو حذف کرنے کا حق محفوظ رکھتا ہے۔",
        "کسی بھی وجہ سے اراکین کے درمیان رقم کی منتقلی ممنوع ہے۔",
        "پلیٹ فارم بغیر کسی پیشگی اطلاع اور فیس کی واپسی کے بغیر کسی بھی خلاف ورزی کرنے والے اکاؤنٹ کو حذف کرنے کا حق محفوظ رکھتا ہے۔",
      ],
    },
    {
      title: "سوم: ممنوعہ مقاصد",
      intro: "زفاف پلیٹ فارم خصوصی طور پر جائز نکاح کے لیے وقف ہے۔ کسی بھی غیر قانونی مقصد کے لیے رجسٹریشن یا استعمال ممنوع ہے، جس میں شامل ہیں:",
      bullets: [
        "متعہ (عارضی نکاح)",
        "مختصر مدتی نکاح",
        "عرفی نکاح",
        "کوئی بھی ایسا عمل جو اسلامی شریعت یا نافذ العمل قوانین کی خلاف ورزی کرے",
      ],
      outro:
        "پلیٹ فارم کسی بھی خلاف ورزی کرنے والے اکاؤنٹ کو معطل یا منسوخ کرنے، ضروری قانونی کارروائی کرنے، اور نقصانات کے ازالے کا دعویٰ کرنے کا حق محفوظ رکھتا ہے۔",
    },
    {
      title: "ڈیٹا شیئرنگ",
      intro: "ہم آپ کا ڈیٹا صرف مندرجہ ذیل صورتوں میں شیئر کر سکتے ہیں:",
      bullets: [
        "قانونی مقاصد کے لیے: اگر نافذ العمل قوانین اس کا تقاضا کریں۔",
        "صارف کی رضامندی سے: اگر آپ پلیٹ فارم کے ذریعے اپنا ڈیٹا کسی دوسرے رکن کے ساتھ شیئر کرنے کا انتخاب کریں۔",
      ],
    },
    {
      title: "ڈیٹا کا تحفظ",
      paragraphs: [
        "ہم ترسیل اور ذخیرہ کے دوران ڈیٹا کے تحفظ کے لیے جدید حفاظتی پروٹوکول (SSL خفیہ کاری) استعمال کرتے ہیں۔ آپ کے ڈیٹا تک رسائی صرف ان ملازمین یا شراکت داروں تک محدود ہے جنہیں حقیقی ضرورت ہو۔",
      ],
    },
    {
      title: "بچوں کی رازداری",
      paragraphs: ["18 سال سے کم عمر افراد کو پلیٹ فارم استعمال کرنے کی اجازت نہیں ہے۔"],
    },
    {
      title: "رازداری کی پالیسی میں تبدیلیاں",
      paragraphs: [
        "ہم وقتاً فوقتاً اس پالیسی کو اپ ڈیٹ کر سکتے ہیں۔ صارفین کو کسی بھی اہم تبدیلی سے ای میل یا ایپ کے اندر اطلاع کے ذریعے آگاہ کیا جائے گا۔",
      ],
    },
  ],
  conclusion: {
    title: "اختتامیہ",
    committee: {
      name: "زفاف کی شرعی کمیٹی",
      lines: ["آپ کی کامیابی اور ہدایت کی دعا گو ہے،", "اور ہم اللہ سے دعا کرتے ہیں کہ وہ آپ کو ایک نیک اور بابرکت نکاح سے نوازے۔"],
    },
    platform: {
      name: "زفاف پلیٹ فارم",
      lines: ["اسلامی اخلاقیات کے مطابق اپنے نکاح کی منصوبہ بندی کریں"],
    },
  },
};

const ta: TermsCopy = {
  hero: {
    title: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    imageAlt: "பேனாவால் காகிதத்தில் எழுதும் ஒரு கை, திருமண ஒப்பந்தத்தை குறிக்கிறது",
  },
  meta: {
    lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது: செப்டம்பர் 10, 2025",
    committee: "ஜெஃபாஃப் தளத்தின் ஷரியா குழு",
  },
  sections: [
    {
      title: "முதலாவது: ஷரியா குழுவின் அறிவிப்பு",
      paragraphs: [
        "இஸ்லாமிய ஷரியா குழு, கணக்கு உருவாக்கும் முன் இந்த விதிமுறைகளை கவனமாக படிக்குமாறு உறுப்பினர்களை வலியுறுத்துகிறது.",
        "இந்த விதிமுறைகள் அனைத்து உறுப்பினர்களுக்கும் (இலவச அல்லது கட்டண திட்டத்தில் இருந்தாலும்) கட்டுப்படுத்தும் தன்மை கொண்டவை.",
        "தளம் எந்த நேரத்திலும் இந்த விதிமுறைகளை திருத்தும் உரிமையை தக்க வைத்துக் கொள்கிறது, மேலும் தொடர்ந்து பயன்படுத்துவது மறைமுக ஒப்புதலாக கருதப்படும்.",
      ],
    },
    {
      title: "இரண்டாவது: பதிவு மற்றும் உறுப்பினர் நிபந்தனைகள்",
      bullets: [
        "உறுப்பினர் திருமணத்திற்கு தகுதியான வயது வந்தவராக இருக்க வேண்டும்.",
        "ஒவ்வொரு நபருக்கும் ஒரே ஒரு கணக்கு மட்டுமே உரிமை உண்டு.",
        "தரவுகளின் துல்லியத்திற்கு தளம் பொறுப்பேற்காது, மேலும் தவறான அல்லது தவறாக வழிநடத்தும் எந்த தகவலையும் நீக்கும் உரிமையை தக்க வைத்துக் கொள்கிறது.",
        "எந்த காரணத்திற்காகவும் உறுப்பினர்களுக்கு இடையே பணப் பரிமாற்றம் தடைசெய்யப்பட்டுள்ளது.",
        "முன் அறிவிப்பு இல்லாமல் மற்றும் கட்டணங்களை திரும்பச் செலுத்தாமல், விதிமுறைகளுக்கு இணங்காத எந்த கணக்கையும் நீக்கும் உரிமையை தளம் தக்க வைத்துக் கொள்கிறது.",
      ],
    },
    {
      title: "மூன்றாவது: தடைசெய்யப்பட்ட நோக்கங்கள்",
      intro:
        "ஜெஃபாஃப் தளம் சட்டப்பூர்வமான திருமணத்திற்காக மட்டுமே அர்ப்பணிக்கப்பட்டுள்ளது. எந்த சட்டவிரோத நோக்கத்திற்காகவும் பதிவு செய்வது அல்லது பயன்படுத்துவது தடைசெய்யப்பட்டுள்ளது, அவற்றுள்:",
      bullets: [
        "தற்காலிக திருமணம் (முத்ஆ)",
        "குறுகிய கால திருமணம்",
        "வழக்கமான திருமணம்",
        "இஸ்லாமிய ஷரியா அல்லது பொருந்தும் சட்டங்களை மீறும் எந்த நடைமுறையும்",
      ],
      outro:
        "விதிமுறைகளுக்கு இணங்காத எந்த கணக்கையும் இடைநிறுத்தவோ ரத்து செய்யவோ, தேவையான சட்ட நடவடிக்கை எடுக்கவோ, மற்றும் சேதங்களுக்கு இழப்பீடு கோரவோ தளம் உரிமையை தக்க வைத்துக் கொள்கிறது.",
    },
    {
      title: "தரவு பகிர்வு",
      intro: "பின்வரும் சந்தர்ப்பங்களில் மட்டுமே உங்கள் தரவை நாங்கள் பகிரலாம்:",
      bullets: [
        "சட்டரீதியான நோக்கங்களுக்காக: பொருந்தும் சட்டங்களால் தேவைப்பட்டால்.",
        "பயனர் ஒப்புதலுடன்: தளம் மூலம் உங்கள் தரவை மற்றொரு உறுப்பினருடன் பகிர நீங்கள் தேர்வு செய்தால்.",
      ],
    },
    {
      title: "தரவு பாதுகாப்பு",
      paragraphs: [
        "பரிமாற்றம் மற்றும் சேமிப்பின் போது தரவைப் பாதுகாக்க நாங்கள் மேம்பட்ட பாதுகாப்பு நெறிமுறைகளை (SSL குறியாக்கம்) பயன்படுத்துகிறோம். உங்கள் தரவுக்கான அணுகல் உண்மையான தேவை உள்ள ஊழியர்கள் அல்லது கூட்டாளர்களுக்கு மட்டுமே கட்டுப்படுத்தப்பட்டுள்ளது.",
      ],
    },
    {
      title: "குழந்தைகளின் தனியுரிமை",
      paragraphs: ["18 வயதுக்கு உட்பட்டவர்கள் இந்த தளத்தைப் பயன்படுத்த அனுமதி இல்லை."],
    },
    {
      title: "தனியுரிமைக் கொள்கையில் மாற்றங்கள்",
      paragraphs: [
        "நாங்கள் இந்தக் கொள்கையை அவ்வப்போது புதுப்பிக்கலாம். எந்தவொரு முக்கியமான மாற்றங்களையும் மின்னஞ்சல் அல்லது பயன்பாட்டிற்குள் அறிவிப்பு மூலம் பயனர்களுக்குத் தெரிவிக்கப்படும்.",
      ],
    },
  ],
  conclusion: {
    title: "முடிவுரை",
    committee: {
      name: "ஜெஃபாஃப் ஷரியா குழு",
      lines: ["உங்கள் வெற்றியையும் நல்வழிகாட்டுதலையும் விரும்புகிறது,", "மேலும் அல்லாஹ் உங்களுக்கு நல்லொழுக்கமான, ஆசீர்வதிக்கப்பட்ட திருமணத்தை அருளுமாறு நாங்கள் பிரார்த்திக்கிறோம்."],
    },
    platform: {
      name: "ஜெஃபாஃப் தளம்",
      lines: ["இஸ்லாமிய நெறிமுறைகளுடன் உங்கள் திருமணத்தைத் திட்டமிடுங்கள்"],
    },
  },
};

const am: TermsCopy = {
  hero: {
    title: "ውሎች እና ሁኔታዎች",
    imageAlt: "በእጅ ብዕር ይዞ በወረቀት ላይ የሚጽፍ እጅ፣ የጋብቻ ውልን የሚያመለክት",
  },
  meta: {
    lastUpdated: "መጨረሻ የተዘመነው፦ መስከረም 10, 2025",
    committee: "የዘፋአፍ መድረክ ሸሪዓ ኮሚቴ",
  },
  sections: [
    {
      title: "አንደኛ፦ ከሸሪዓ ኮሚቴ የተላለፈ ማስታወቂያ",
      paragraphs: [
        "የእስልምና ሸሪዓ ኮሚቴ አባላት መለያ ከመፍጠራቸው በፊት እነዚህን ውሎች በጥንቃቄ እንዲያነቡ አጥብቆ ያሳስባል።",
        "እነዚህ ውሎች ለሁሉም አባላት (በነጻ ወይም በክፍያ እቅድ ላይ ቢሆኑም) አስገዳጅ ናቸው።",
        "መድረኩ በማንኛውም ጊዜ እነዚህን ውሎች የማሻሻል መብትን ይይዛል፣ ቀጣይነት ያለው አጠቃቀምም ስውር ስምምነትን ያመለክታል።",
      ],
    },
    {
      title: "ሁለተኛ፦ የምዝገባ እና የአባልነት ሁኔታዎች",
      bullets: [
        "አባሉ ለጋብቻ ብቁ የሆነ ጎልማሳ መሆን አለበት።",
        "እያንዳንዱ ሰው አንድ መለያ ብቻ የማግኘት መብት አለው።",
        "መድረኩ ስለ መረጃው ትክክለኛነት ኃላፊነት አይወስድም፣ እናም ማንኛውንም ሐሰተኛ ወይም አሳሳች መረጃ የመሰረዝ መብትን ይይዛል።",
        "በማንኛውም ምክንያት በአባላት መካከል ገንዘብ ማስተላለፍ የተከለከለ ነው።",
        "መድረኩ ቅድሚያ ማስታወቂያ ሳይሰጥ እና ክፍያዎችን ሳይመልስ ማንኛውንም ደንብ ያልተከተለ መለያ የመሰረዝ መብትን ይይዛል።",
      ],
    },
    {
      title: "ሦስተኛ፦ የተከለከሉ ዓላማዎች",
      intro:
        "የዘፋአፍ መድረክ ለሕጋዊ ጋብቻ ብቻ የተዘጋጀ ነው። ለማንኛውም ሕገ-ወጥ ዓላማ መመዝገብ ወይም መጠቀም የተከለከለ ነው፣ ይህም የሚከተሉትን ያካትታል፦",
      bullets: [
        "ጊዜያዊ ጋብቻ (ሙትዓ)",
        "አጭር ጊዜ ጋብቻ",
        "ባህላዊ ጋብቻ",
        "የእስልምና ሸሪዓን ወይም ተፈጻሚነት ያላቸውን ሕጎች የሚጥስ ማንኛውም ተግባር",
      ],
      outro:
        "መድረኩ ደንብ ያልተከተለ ማንኛውንም መለያ የማገድ ወይም የመሰረዝ፣ አስፈላጊውን ሕጋዊ እርምጃ የመውሰድ፣ እና ለደረሰው ጉዳት ካሳ የመጠየቅ መብትን ይይዛል።",
    },
    {
      title: "የመረጃ ማጋራት",
      intro: "የእርስዎን መረጃ የምናጋራው በሚከተሉት ሁኔታዎች ብቻ ነው፦",
      bullets: [
        "ለሕጋዊ ዓላማዎች፦ ተፈጻሚነት ያላቸው ሕጎች የሚጠይቁ ከሆነ።",
        "በተጠቃሚ ፈቃድ፦ በመድረኩ በኩል መረጃዎን ከሌላ አባል ጋር ለማጋራት ከመረጡ።",
      ],
    },
    {
      title: "የመረጃ ጥበቃ",
      paragraphs: [
        "በማስተላለፍ እና በማከማቸት ወቅት መረጃን ለመጠበቅ የላቀ የደህንነት ፕሮቶኮሎችን (SSL ምስጠራ) እንጠቀማለን። ወደ መረጃዎ የሚደረግ መዳረሻ ትክክለኛ ፍላጎት ላላቸው ሰራተኞች ወይም አጋሮች ብቻ የተገደበ ነው።",
      ],
    },
    {
      title: "የልጆች ግላዊነት",
      paragraphs: ["ከ18 ዓመት በታች ለሆኑ ግለሰቦች መድረኩን መጠቀም አይፈቀድም።"],
    },
    {
      title: "በግላዊነት ፖሊሲ ላይ የሚደረጉ ለውጦች",
      paragraphs: [
        "ይህንን ፖሊሲ ከጊዜ ወደ ጊዜ ልናዘምነው እንችላለን። ተጠቃሚዎች ስለ ማንኛውም ወሳኝ ለውጦች በኢሜይል ወይም በመተግበሪያ ውስጥ በሚደረግ ማሳወቂያ ይነገራቸዋል።",
      ],
    },
  ],
  conclusion: {
    title: "መደምደሚያ",
    committee: {
      name: "የዘፋአፍ ሸሪዓ ኮሚቴ",
      lines: ["ስኬትን እና ቅን መንገድን ይመኝልዎታል፣", "አላህም ጻድቅ እና የተባረከ ጋብቻ እንዲሰጥዎት እንለምናለን።"],
    },
    platform: {
      name: "የዘፋአፍ መድረክ",
      lines: ["ጋብቻዎን በእስልምና ስነምግባር መሰረት ያቅዱ"],
    },
  },
};

const sv: TermsCopy = {
  hero: {
    title: "Villkor",
    imageAlt: "En hand som skriver på papper med en penna, symboliserar ett äktenskapsavtal",
  },
  meta: {
    lastUpdated: "Senast uppdaterad: 10 september 2025",
    committee: "Zefaaf-plattformens shariakommitté",
  },
  sections: [
    {
      title: "Först: Meddelande från Shariakommittén",
      paragraphs: [
        "Den islamiska shariakommittén uppmanar medlemmar att noggrant läsa dessa villkor innan de skapar ett konto.",
        "Dessa villkor är bindande för alla medlemmar (oavsett om de har en gratis eller betald plan).",
        "Plattformen förbehåller sig rätten att när som helst ändra dessa villkor, och fortsatt användning utgör ett underförstått godkännande.",
      ],
    },
    {
      title: "För det andra: Villkor för registrering och medlemskap",
      bullets: [
        "Medlemmen måste vara en vuxen person som är behörig att gifta sig.",
        "Varje person har endast rätt till ett konto.",
        "Plattformen ansvarar inte för uppgifternas riktighet och förbehåller sig rätten att radera falsk eller vilseledande information.",
        "Det är förbjudet att överföra pengar mellan medlemmar av någon anledning.",
        "Plattformen förbehåller sig rätten att radera ett konto som inte följer villkoren utan förvarning och utan återbetalning av avgifter.",
      ],
    },
    {
      title: "För det tredje: Förbjudna syften",
      intro:
        "Zefaaf-plattformen är uteslutande avsedd för lagligt äktenskap. Registrering eller användning för olagliga ändamål är förbjuden, inklusive:",
      bullets: [
        "Tillfälligt äktenskap (mut'ah)",
        "Kortvarigt äktenskap",
        "Sedvanerättsligt äktenskap",
        "All praxis som strider mot islamisk sharia eller tillämplig lag",
      ],
      outro:
        "Plattformen förbehåller sig rätten att stänga av eller avsluta ett konto som inte följer villkoren, vidta nödvändiga rättsliga åtgärder och kräva ersättning för skador.",
    },
    {
      title: "Delning av data",
      intro: "Vi kan endast dela dina uppgifter i följande fall:",
      bullets: [
        "För rättsliga ändamål: om tillämplig lag kräver det.",
        "Med användarens samtycke: om du väljer att dela dina uppgifter med en annan medlem via plattformen.",
      ],
    },
    {
      title: "Dataskydd",
      paragraphs: [
        "Vi använder avancerade säkerhetsprotokoll (SSL-kryptering) för att skydda data under överföring och lagring. Åtkomst till dina uppgifter är begränsad till anställda eller partner med ett legitimt behov.",
      ],
    },
    {
      title: "Barns integritet",
      paragraphs: ["Plattformen får inte användas av personer under 18 år."],
    },
    {
      title: "Ändringar av integritetspolicyn",
      paragraphs: [
        "Vi kan uppdatera denna policy från tid till annan. Användare kommer att meddelas om alla väsentliga ändringar via e-post eller genom ett meddelande i appen.",
      ],
    },
  ],
  conclusion: {
    title: "Avslutning",
    committee: {
      name: "Zefaafs shariakommitté",
      lines: ["Önskar er framgång och vägledning,", "Och vi ber Allah att välsigna er med ett rättfärdigt och välsignat äktenskap."],
    },
    platform: {
      name: "Zefaaf-plattformen",
      lines: ["Planera ditt äktenskap enligt islamisk etik"],
    },
  },
};

const da: TermsCopy = {
  hero: {
    title: "Vilkår og Betingelser",
    imageAlt: "En hånd, der skriver på papir med en pen, symboliserer en ægteskabsaftale",
  },
  meta: {
    lastUpdated: "Sidst opdateret: 10. september 2025",
    committee: "Zefaaf-platformens shariaudvalg",
  },
  sections: [
    {
      title: "Først: Meddelelse fra shariaudvalget",
      paragraphs: [
        "Det islamiske shariaudvalg opfordrer medlemmer til at læse disse vilkår omhyggeligt, før de opretter en konto.",
        "Disse vilkår er bindende for alle medlemmer (uanset om de har en gratis eller betalt plan).",
        "Platformen forbeholder sig retten til at ændre disse vilkår til enhver tid, og fortsat brug udgør en stiltiende accept.",
      ],
    },
    {
      title: "For det andet: Betingelser for registrering og medlemskab",
      bullets: [
        "Medlemmet skal være en voksen person, der er berettiget til at indgå ægteskab.",
        "Hver person har kun ret til én konto.",
        "Platformen er ikke ansvarlig for nøjagtigheden af data og forbeholder sig retten til at slette falske eller vildledende oplysninger.",
        "Overførsel af penge mellem medlemmer af enhver grund er forbudt.",
        "Platformen forbeholder sig retten til at slette enhver konto, der ikke overholder vilkårene, uden forudgående varsel og uden refundering af gebyrer.",
      ],
    },
    {
      title: "For det tredje: Forbudte formål",
      intro:
        "Zefaaf-platformen er udelukkende dedikeret til lovligt ægteskab. Registrering eller brug til ethvert ulovligt formål er forbudt, herunder:",
      bullets: [
        "Midlertidigt ægteskab (mut'ah)",
        "Kortvarigt ægteskab",
        "Sædvaneretligt ægteskab",
        "Enhver praksis, der strider mod islamisk sharia eller gældende love",
      ],
      outro:
        "Platformen forbeholder sig retten til at suspendere eller annullere enhver konto, der ikke overholder vilkårene, tage nødvendige retlige skridt og kræve erstatning for skader.",
    },
    {
      title: "Deling af data",
      intro: "Vi kan kun dele dine data i følgende tilfælde:",
      bullets: [
        "Til juridiske formål: hvis det kræves af gældende love.",
        "Med brugerens samtykke: hvis du vælger at dele dine data med et andet medlem via platformen.",
      ],
    },
    {
      title: "Databeskyttelse",
      paragraphs: [
        "Vi bruger avancerede sikkerhedsprotokoller (SSL-kryptering) til at beskytte data under overførsel og opbevaring. Adgang til dine data er begrænset til medarbejdere eller partnere med et legitimt behov.",
      ],
    },
    {
      title: "Børns privatliv",
      paragraphs: ["Platformen må ikke bruges af personer under 18 år."],
    },
    {
      title: "Ændringer af privatlivspolitikken",
      paragraphs: [
        "Vi kan opdatere denne politik fra tid til anden. Brugere vil blive underrettet om væsentlige ændringer via e-mail eller gennem en notifikation i appen.",
      ],
    },
  ],
  conclusion: {
    title: "Afslutning",
    committee: {
      name: "Zefaafs shariaudvalg",
      lines: ["Ønsker jer succes og vejledning,", "Og vi beder Allah om at velsigne jer med et retfærdigt og velsignet ægteskab."],
    },
    platform: {
      name: "Zefaaf-platformen",
      lines: ["Planlæg dit ægteskab efter islamisk etik"],
    },
  },
};

const sq: TermsCopy = {
  hero: {
    title: "Kushtet dhe Afatet",
    imageAlt: "Një dorë që shkruan në letër me stilolaps, që simbolizon një kontratë martese",
  },
  meta: {
    lastUpdated: "Përditësimi i fundit: 10 shtator 2025",
    committee: "Komiteti i Sheriatit i Platformës Zefaaf",
  },
  sections: [
    {
      title: "Së pari: Njoftim nga Komiteti i Sheriatit",
      paragraphs: [
        "Komiteti Islamik i Sheriatit u bën thirrje anëtarëve që t'i lexojnë me kujdes këto kushte para se të krijojnë një llogari.",
        "Këto kushte janë të detyrueshme për të gjithë anëtarët (qofshin në plane falas apo me pagesë).",
        "Platforma rezervon të drejtën për të ndryshuar këto kushte në çdo kohë, dhe vazhdimi i përdorimit përbën pranim të nënkuptuar.",
      ],
    },
    {
      title: "Së dyti: Kushtet e Regjistrimit dhe Anëtarësimit",
      bullets: [
        "Anëtari duhet të jetë madhor dhe i aftë për martesë.",
        "Çdo person ka të drejtë vetëm për një llogari.",
        "Platforma nuk mban përgjegjësi për saktësinë e të dhënave dhe rezervon të drejtën për të fshirë çdo informacion të rremë ose mashtrues.",
        "Ndalohet transferimi i parave mes anëtarëve për çdo arsye.",
        "Platforma rezervon të drejtën për të fshirë çdo llogari që nuk përputhet pa njoftim paraprak dhe pa rimbursim të tarifave.",
      ],
    },
    {
      title: "Së treti: Qëllimet e Ndaluara",
      intro:
        "Platforma Zefaaf i kushtohet ekskluzivisht martesës së ligjshme. Regjistrimi ose përdorimi për çdo qëllim të paligjshëm është i ndaluar, duke përfshirë:",
      bullets: [
        "Martesën e përkohshme (mut'ah)",
        "Martesën afatshkurtër",
        "Martesën zakonore",
        "Çdo praktikë që shkel Sheriatin Islam ose ligjet në fuqi",
      ],
      outro:
        "Platforma rezervon të drejtën për të pezulluar ose anuluar çdo llogari që nuk përputhet, për të ndërmarrë veprimet ligjore të nevojshme dhe për të kërkuar dëmshpërblim për dëmet.",
    },
    {
      title: "Ndarja e të Dhënave",
      intro: "Ne mund t'i ndajmë të dhënat tuaja vetëm në rastet e mëposhtme:",
      bullets: [
        "Për qëllime ligjore: nëse kërkohet nga ligjet në fuqi.",
        "Me pëlqimin e përdoruesit: nëse zgjidhni të ndani të dhënat tuaja me një anëtar tjetër përmes Platformës.",
      ],
    },
    {
      title: "Mbrojtja e të Dhënave",
      paragraphs: [
        "Ne përdorim protokolle të avancuara sigurie (enkriptim SSL) për të mbrojtur të dhënat gjatë transmetimit dhe ruajtjes. Aksesi në të dhënat tuaja kufizohet vetëm te punonjësit ose partnerët me nevojë të ligjshme.",
      ],
    },
    {
      title: "Privatësia e Fëmijëve",
      paragraphs: ["Përdorimi i platformës nuk lejohet për personat nën 18 vjeç."],
    },
    {
      title: "Ndryshimet në Politikën e Privatësisë",
      paragraphs: [
        "Ne mund ta përditësojmë këtë politikë herë pas here. Përdoruesit do të njoftohen për çdo ndryshim material përmes email-it ose përmes një njoftimi brenda aplikacionit.",
      ],
    },
  ],
  conclusion: {
    title: "Përfundim",
    committee: {
      name: "Komiteti i Sheriatit i Zefaaf",
      lines: ["Ju uron sukses dhe udhëzim të drejtë,", "Dhe i lutemi Allahut t'ju bekojë me një martesë të drejtë dhe të bekuar."],
    },
    platform: {
      name: "Platforma Zefaaf",
      lines: ["Planifikoni martesën tuaj sipas etikës islame"],
    },
  },
};

const uz: TermsCopy = {
  hero: {
    title: "Foydalanish shartlari",
    imageAlt: "Qog'ozga qalam bilan yozayotgan qo'l, nikoh shartnomasini ifodalaydi",
  },
  meta: {
    lastUpdated: "Oxirgi yangilanish: 2025-yil 10-sentabr",
    committee: "Zefaaf platformasining Shariat qo'mitasi",
  },
  sections: [
    {
      title: "Birinchi: Shariat qo'mitasining bildirishnomasi",
      paragraphs: [
        "Islom Shariat qo'mitasi a'zolarni hisob yaratishdan oldin ushbu shartlarni diqqat bilan o'qishga chaqiradi.",
        "Ushbu shartlar barcha a'zolar uchun (bepul yoki pullik rejada bo'lishidan qat'i nazar) majburiydir.",
        "Platforma istalgan vaqtda ushbu shartlarga o'zgartirish kiritish huquqini o'zida saqlab qoladi va foydalanishni davom ettirish zimnan rozilik hisoblanadi.",
      ],
    },
    {
      title: "Ikkinchi: Ro'yxatdan o'tish va a'zolik shartlari",
      bullets: [
        "A'zo nikohga layoqatli voyaga yetgan shaxs bo'lishi kerak.",
        "Har bir shaxs faqat bitta hisobga ega bo'lish huquqiga ega.",
        "Platforma ma'lumotlarning to'g'riligi uchun javobgar emas va noto'g'ri yoki chalg'ituvchi har qanday ma'lumotni o'chirish huquqini o'zida saqlab qoladi.",
        "Har qanday sababga ko'ra a'zolar o'rtasida pul o'tkazish taqiqlanadi.",
        "Platforma oldindan xabar bermasdan va to'lovlarni qaytarmasdan qoidabuzar hisobni o'chirish huquqini o'zida saqlab qoladi.",
      ],
    },
    {
      title: "Uchinchi: Taqiqlangan maqsadlar",
      intro:
        "Zefaaf platformasi faqat qonuniy nikoh uchun mo'ljallangan. Har qanday noqonuniy maqsadda ro'yxatdan o'tish yoki foydalanish taqiqlanadi, jumladan:",
      bullets: [
        "Vaqtinchalik nikoh (mut'a)",
        "Qisqa muddatli nikoh",
        "An'anaviy (rasmiylashtirilmagan) nikoh",
        "Islom shariatiga yoki amaldagi qonunlarga zid bo'lgan har qanday amaliyot",
      ],
      outro:
        "Platforma qoidabuzar hisobni to'xtatib qo'yish yoki bekor qilish, zarur huquqiy choralarni ko'rish va yetkazilgan zarar uchun kompensatsiya talab qilish huquqini o'zida saqlab qoladi.",
    },
    {
      title: "Ma'lumotlarni almashish",
      intro: "Biz sizning ma'lumotlaringizni faqat quyidagi hollarda almashishimiz mumkin:",
      bullets: [
        "Huquqiy maqsadlarda: agar amaldagi qonunlar talab qilsa.",
        "Foydalanuvchi roziligi bilan: agar siz ma'lumotlaringizni Platforma orqali boshqa a'zo bilan bo'lishishni tanlasangiz.",
      ],
    },
    {
      title: "Ma'lumotlarni himoya qilish",
      paragraphs: [
        "Biz ma'lumotlarni uzatish va saqlash jarayonida himoya qilish uchun ilg'or xavfsizlik protokollaridan (SSL shifrlash) foydalanamiz. Sizning ma'lumotlaringizga kirish faqat qonuniy ehtiyoji bo'lgan xodimlar yoki hamkorlar bilan cheklangan.",
      ],
    },
    {
      title: "Bolalar maxfiyligi",
      paragraphs: ["Platformadan 18 yoshga to'lmagan shaxslarning foydalanishiga ruxsat berilmaydi."],
    },
    {
      title: "Maxfiylik siyosatidagi o'zgarishlar",
      paragraphs: [
        "Biz ushbu siyosatni vaqti-vaqti bilan yangilashimiz mumkin. Foydalanuvchilarga har qanday muhim o'zgarishlar haqida elektron pochta yoki ilova ichidagi bildirishnoma orqali xabar beriladi.",
      ],
    },
  ],
  conclusion: {
    title: "Xulosa",
    committee: {
      name: "Zefaafning Shariat qo'mitasi",
      lines: ["Sizga muvaffaqiyat va to'g'ri yo'lni tilaydi,", "Va biz Allohdan sizni solih va barakali nikoh bilan rizqlantirishini so'raymiz."],
    },
    platform: {
      name: "Zefaaf platformasi",
      lines: ["Nikohingizni islomiy axloq asosida rejalashtiring"],
    },
  },
};

const az: TermsCopy = {
  hero: {
    title: "Şərtlər və Qaydalar",
    imageAlt: "Qələmlə kağız üzərində yazan əl, nikah müqaviləsini simvolizə edir",
  },
  meta: {
    lastUpdated: "Son yenilənmə: 10 sentyabr 2025",
    committee: "Zefaaf Platformasının Şəriət Komitəsi",
  },
  sections: [
    {
      title: "Birincisi: Şəriət Komitəsindən bildiriş",
      paragraphs: [
        "İslam Şəriət Komitəsi üzvləri hesab yaratmazdan əvvəl bu şərtləri diqqətlə oxumağa çağırır.",
        "Bu şərtlər bütün üzvlər üçün (pulsuz və ya ödənişli plan olmasından asılı olmayaraq) məcburidir.",
        "Platforma istənilən vaxt bu şərtləri dəyişdirmək hüququnu özündə saxlayır və istifadəni davam etdirmək zımni razılıq sayılır.",
      ],
    },
    {
      title: "İkincisi: Qeydiyyat və üzvlük şərtləri",
      bullets: [
        "Üzv nikaha girmək üçün yaşa dolmuş şəxs olmalıdır.",
        "Hər bir şəxs yalnız bir hesaba sahib olmaq hüququna malikdir.",
        "Platforma məlumatların doğruluğuna görə məsuliyyət daşımır və yanlış və ya çaşdırıcı hər hansı məlumatı silmək hüququnu özündə saxlayır.",
        "Hər hansı səbəbdən üzvlər arasında pul köçürülməsi qadağandır.",
        "Platforma əvvəlcədən bildiriş vermədən və ödənişləri geri qaytarmadan qaydalara uyğun olmayan hesabı silmək hüququnu özündə saxlayır.",
      ],
    },
    {
      title: "Üçüncüsü: Qadağan olunmuş məqsədlər",
      intro:
        "Zefaaf platforması yalnız qanuni nikaha həsr olunub. Hər hansı qanunsuz məqsədlə qeydiyyat və ya istifadə qadağandır, o cümlədən:",
      bullets: [
        "Müvəqqəti nikah (mütə)",
        "Qısamüddətli nikah",
        "Adət-ənənə nikahı",
        "İslam şəriətinə və ya qüvvədə olan qanunlara zidd olan hər hansı təcrübə",
      ],
      outro:
        "Platforma qaydalara uyğun olmayan hesabı dayandırmaq və ya ləğv etmək, zəruri hüquqi tədbirlər görmək və dəymiş zərərə görə kompensasiya tələb etmək hüququnu özündə saxlayır.",
    },
    {
      title: "Məlumatların paylaşılması",
      intro: "Məlumatlarınızı yalnız aşağıdakı hallarda paylaşa bilərik:",
      bullets: [
        "Hüquqi məqsədlər üçün: qüvvədə olan qanunlar tələb etdikdə.",
        "İstifadəçinin razılığı ilə: Platforma vasitəsilə məlumatlarınızı başqa üzvlə paylaşmağı seçdiyiniz halda.",
      ],
    },
    {
      title: "Məlumatların qorunması",
      paragraphs: [
        "Ötürülmə və saxlanma zamanı məlumatları qorumaq üçün qabaqcıl təhlükəsizlik protokollarından (SSL şifrələməsi) istifadə edirik. Məlumatlarınıza giriş yalnız qanuni ehtiyacı olan işçilər və ya tərəfdaşlarla məhdudlaşdırılır.",
      ],
    },
    {
      title: "Uşaqların məxfiliyi",
      paragraphs: ["Platformadan 18 yaşına çatmayan şəxslərin istifadə etməsinə icazə verilmir."],
    },
    {
      title: "Məxfilik siyasətindəki dəyişikliklər",
      paragraphs: [
        "Bu siyasəti vaxtaşırı yeniləyə bilərik. İstifadəçilərə hər hansı əhəmiyyətli dəyişiklik barədə e-poçt və ya tətbiq daxilindəki bildiriş vasitəsilə məlumat veriləcək.",
      ],
    },
  ],
  conclusion: {
    title: "Nəticə",
    committee: {
      name: "Zefaafın Şəriət Komitəsi",
      lines: ["Sizə uğur və doğru yol arzulayır,", "Və Allahdan sizi saleh və mübarək bir nikahla ruzi verməsini diləyirik."],
    },
    platform: {
      name: "Zefaaf Platforması",
      lines: ["Nikahınızı İslam əxlaqına uyğun planlaşdırın"],
    },
  },
};

const fil: TermsCopy = {
  hero: {
    title: "Mga Tuntunin at Kundisyon",
    imageAlt: "Isang kamay na sumusulat sa papel gamit ang panulat, sumisimbolo sa isang kasunduan sa kasal",
  },
  meta: {
    lastUpdated: "Huling Na-update: Setyembre 10, 2025",
    committee: "Komite ng Sharia ng Plataporma ng Zefaaf",
  },
  sections: [
    {
      title: "Una: Paalala mula sa Komite ng Sharia",
      paragraphs: [
        "Hinihimok ng Islamikong Komite ng Sharia ang mga miyembro na basahing mabuti ang mga tuntuning ito bago gumawa ng account.",
        "Ang mga tuntuning ito ay nagbubuklod sa lahat ng miyembro (maging sa libre o bayad na plano).",
        "Nakalaan sa plataporma ang karapatang baguhin ang mga tuntuning ito anumang oras, at ang patuloy na paggamit ay bumubuo ng ipinapahiwatig na pagsang-ayon.",
      ],
    },
    {
      title: "Ikalawa: Mga Kundisyon sa Pagpaparehistro at Pagiging Miyembro",
      bullets: [
        "Dapat ay may sapat na gulang ang miyembro at karapat-dapat sa pag-aasawa.",
        "Bawat tao ay may karapatan lamang sa isang account.",
        "Hindi mananagot ang plataporma sa katumpakan ng datos at nakalaan sa nito ang karapatang tanggalin ang anumang huwad o mapanlinlang na impormasyon.",
        "Ipinagbabawal ang paglilipat ng pera sa pagitan ng mga miyembro sa anumang kadahilanan.",
        "Nakalaan sa plataporma ang karapatang tanggalin ang anumang hindi sumusunod na account nang walang paunang abiso at walang pagbabalik ng bayad.",
      ],
    },
    {
      title: "Ikatlo: Mga Ipinagbabawal na Layunin",
      intro:
        "Ang plataporma ng Zefaaf ay eksklusibong nakalaan para sa lehitimong kasal. Ipinagbabawal ang pagpaparehistro o paggamit para sa anumang ilegal na layunin, kabilang ang:",
      bullets: [
        "Pansamantalang kasal (mut'ah)",
        "Panandaliang kasal",
        "Kaugaliang kasal",
        "Anumang gawaing lumalabag sa Islamikong Sharia o sa naaangkop na batas",
      ],
      outro:
        "Nakalaan sa plataporma ang karapatang suspindihin o kanselahin ang anumang hindi sumusunod na account, magsagawa ng kinakailangang legal na hakbang, at humingi ng kabayaran para sa mga pinsala.",
    },
    {
      title: "Pagbabahagi ng Datos",
      intro: "Maaari lamang naming ibahagi ang iyong datos sa mga sumusunod na kaso:",
      bullets: [
        "Para sa mga legal na layunin: kung hinihiling ng naaangkop na batas.",
        "Sa pahintulot ng gumagamit: kung pipiliin mong ibahagi ang iyong datos sa ibang miyembro sa pamamagitan ng Plataporma.",
      ],
    },
    {
      title: "Proteksyon ng Datos",
      paragraphs: [
        "Gumagamit kami ng mga advanced na protocol sa seguridad (SSL encryption) upang protektahan ang datos sa panahon ng paghahatid at pag-iimbak. Ang access sa iyong datos ay limitado lamang sa mga empleyado o kasosyo na may lehitimong pangangailangan.",
      ],
    },
    {
      title: "Privacy ng mga Bata",
      paragraphs: ["Hindi pinapayagan ang paggamit ng plataporma ng mga indibidwal na wala pang 18 taong gulang."],
    },
    {
      title: "Mga Pagbabago sa Patakaran sa Privacy",
      paragraphs: [
        "Maaari naming i-update ang patakarang ito paminsan-minsan. Aabisuhan ang mga gumagamit tungkol sa anumang mahalagang pagbabago sa pamamagitan ng email o sa pamamagitan ng abiso sa loob ng app.",
      ],
    },
  ],
  conclusion: {
    title: "Konklusyon",
    committee: {
      name: "Komite ng Sharia ng Zefaaf",
      lines: ["Nananalangin para sa inyong tagumpay at patnubay,", "At hinihiling namin sa Allah na pagpalain kayo ng isang matuwid at pinagpalang kasal."],
    },
    platform: {
      name: "Plataporma ng Zefaaf",
      lines: ["Planuhin ang inyong kasal alinsunod sa etikang Islamiko"],
    },
  },
};

const hi: TermsCopy = {
  hero: {
    title: "नियम और शर्तें",
    imageAlt: "कलम से कागज़ पर लिखता हुआ एक हाथ, जो विवाह अनुबंध का प्रतीक है",
  },
  meta: {
    lastUpdated: "अंतिम अद्यतन: 10 सितंबर, 2025",
    committee: "ज़ेफ़ाफ़ प्लेटफ़ॉर्म की शरिया समिति",
  },
  sections: [
    {
      title: "प्रथम: शरिया समिति की ओर से सूचना",
      paragraphs: [
        "इस्लामी शरिया समिति सदस्यों से आग्रह करती है कि खाता बनाने से पहले इन शर्तों को ध्यानपूर्वक पढ़ें।",
        "ये शर्तें सभी सदस्यों पर (चाहे वे निःशुल्क हों या भुगतान योजना पर) बाध्यकारी हैं।",
        "प्लेटफ़ॉर्म किसी भी समय इन शर्तों में संशोधन करने का अधिकार सुरक्षित रखता है, और निरंतर उपयोग को अंतर्निहित सहमति माना जाएगा।",
      ],
    },
    {
      title: "द्वितीय: पंजीकरण और सदस्यता की शर्तें",
      bullets: [
        "सदस्य का विवाह के लिए योग्य वयस्क होना आवश्यक है।",
        "प्रत्येक व्यक्ति केवल एक ही खाता रखने का हकदार है।",
        "प्लेटफ़ॉर्म डेटा की सटीकता के लिए जिम्मेदार नहीं है और किसी भी झूठी या भ्रामक जानकारी को हटाने का अधिकार सुरक्षित रखता है।",
        "किसी भी कारण से सदस्यों के बीच धन हस्तांतरण करना निषिद्ध है।",
        "प्लेटफ़ॉर्म बिना पूर्व सूचना के और शुल्क वापस किए बिना किसी भी उल्लंघनकारी खाते को हटाने का अधिकार सुरक्षित रखता है।",
      ],
    },
    {
      title: "तृतीय: निषिद्ध उद्देश्य",
      intro: "ज़ेफ़ाफ़ प्लेटफ़ॉर्म विशेष रूप से वैध विवाह के लिए समर्पित है। किसी भी अवैध उद्देश्य के लिए पंजीकरण या उपयोग निषिद्ध है, जिसमें शामिल हैं:",
      bullets: [
        "अस्थायी विवाह (मुत'आ)",
        "अल्पकालिक विवाह",
        "प्रथागत विवाह",
        "कोई भी ऐसा आचरण जो इस्लामी शरिया या लागू कानूनों का उल्लंघन करता हो",
      ],
      outro:
        "प्लेटफ़ॉर्म किसी भी उल्लंघनकारी खाते को निलंबित या रद्द करने, आवश्यक कानूनी कार्रवाई करने, और हुए नुकसान के लिए मुआवजे का दावा करने का अधिकार सुरक्षित रखता है।",
    },
    {
      title: "डेटा साझाकरण",
      intro: "हम केवल निम्नलिखित मामलों में आपका डेटा साझा कर सकते हैं:",
      bullets: [
        "कानूनी उद्देश्यों के लिए: यदि लागू कानूनों द्वारा आवश्यक हो।",
        "उपयोगकर्ता की सहमति से: यदि आप प्लेटफ़ॉर्म के माध्यम से अपना डेटा किसी अन्य सदस्य के साथ साझा करना चुनते हैं।",
      ],
    },
    {
      title: "डेटा सुरक्षा",
      paragraphs: [
        "हम स्थानांतरण और भंडारण के दौरान डेटा की सुरक्षा के लिए उन्नत सुरक्षा प्रोटोकॉल (SSL एन्क्रिप्शन) का उपयोग करते हैं। आपके डेटा तक पहुंच केवल वैध आवश्यकता वाले कर्मचारियों या भागीदारों तक सीमित है।",
      ],
    },
    {
      title: "बच्चों की गोपनीयता",
      paragraphs: ["18 वर्ष से कम आयु के व्यक्तियों को प्लेटफ़ॉर्म का उपयोग करने की अनुमति नहीं है।"],
    },
    {
      title: "गोपनीयता नीति में परिवर्तन",
      paragraphs: [
        "हम समय-समय पर इस नीति को अद्यतन कर सकते हैं। उपयोगकर्ताओं को किसी भी महत्वपूर्ण परिवर्तन के बारे में ईमेल या ऐप के भीतर सूचना के माध्यम से सूचित किया जाएगा।",
      ],
    },
  ],
  conclusion: {
    title: "निष्कर्ष",
    committee: {
      name: "ज़ेफ़ाफ़ की शरिया समिति",
      lines: ["आपकी सफलता और मार्गदर्शन की कामना करती है,", "और हम अल्लाह से प्रार्थना करते हैं कि वह आपको एक नेक और बरकत वाला विवाह प्रदान करे।"],
    },
    platform: {
      name: "ज़ेफ़ाफ़ प्लेटफ़ॉर्म",
      lines: ["इस्लामी नैतिकता के अनुसार अपने विवाह की योजना बनाएं"],
    },
  },
};

const kk: TermsCopy = {
  hero: {
    title: "Пайдалану шарттары",
    imageAlt: "Қаламмен қағазға жазып отырған қол, неке келісімшартын білдіреді",
  },
  meta: {
    lastUpdated: "Соңғы жаңарту: 2025 жылғы 10 қыркүйек",
    committee: "Zefaaf платформасының Шариғат комитеті",
  },
  sections: [
    {
      title: "Біріншіден: Шариғат комитетінің хабарламасы",
      paragraphs: [
        "Ислам Шариғат комитеті мүшелерді есептік жазба жасамас бұрын осы шарттарды мұқият оқуға шақырады.",
        "Бұл шарттар барлық мүшелер үшін (тегін немесе ақылы жоспарда болуына қарамастан) міндетті болып табылады.",
        "Платформа осы шарттарды кез келген уақытта өзгерту құқығын өзінде сақтайды, және пайдалануды жалғастыру үнсіз келісім болып саналады.",
      ],
    },
    {
      title: "Екіншіден: Тіркелу және мүшелік шарттары",
      bullets: [
        "Мүше некеге тұруға құқығы бар кәмелетке толған адам болуы тиіс.",
        "Әрбір адамға тек бір ғана есептік жазбаға құқығы бар.",
        "Платформа деректердің дұрыстығына жауап бермейді және кез келген жалған немесе жаңылыстыратын ақпаратты жоюға құқылы.",
        "Кез келген себеппен мүшелер арасында ақша аудару тыйым салынған.",
        "Платформа алдын ала хабарламай және төлемдерді қайтармай, талаптарды бұзған кез келген есептік жазбаны жоюға құқығын өзінде сақтайды.",
      ],
    },
    {
      title: "Үшіншіден: Тыйым салынған мақсаттар",
      intro:
        "Zefaaf платформасы тек заңды некеге ғана арналған. Кез келген заңсыз мақсатта тіркелу немесе пайдалану тыйым салынған, оның ішінде:",
      bullets: [
        "Уақытша неке (мутъа)",
        "Қысқа мерзімді неке",
        "Дәстүрлі (ресми тіркелмеген) неке",
        "Ислам шариғатына немесе қолданыстағы заңдарға қайшы келетін кез келген тәжірибе",
      ],
      outro:
        "Платформа талаптарды бұзған кез келген есептік жазбаны тоқтата тұруға немесе жоюға, қажетті құқықтық шараларды қолдануға және келтірілген зиян үшін өтемақы талап етуге құқығын өзінде сақтайды.",
    },
    {
      title: "Деректермен бөлісу",
      intro: "Біз сіздің деректеріңізбен тек келесі жағдайларда бөлісе аламыз:",
      bullets: [
        "Заңды мақсаттар үшін: қолданыстағы заңдар талап еткен жағдайда.",
        "Пайдаланушының келісімімен: сіз Платформа арқылы деректеріңізді басқа мүшемен бөлісуді таңдасаңыз.",
      ],
    },
    {
      title: "Деректерді қорғау",
      paragraphs: [
        "Біз деректерді тасымалдау және сақтау кезінде қорғау үшін жетілдірілген қауіпсіздік протоколдарын (SSL шифрлау) қолданамыз. Сіздің деректеріңізге қолжетімділік тек заңды қажеттілігі бар қызметкерлер немесе серіктестермен шектеледі.",
      ],
    },
    {
      title: "Балалардың құпиялылығы",
      paragraphs: ["Платформаны 18 жасқа толмаған адамдардың пайдалануына рұқсат етілмейді."],
    },
    {
      title: "Құпиялылық саясатындағы өзгерістер",
      paragraphs: [
        "Біз бұл саясатты кез келген уақытта жаңартуымыз мүмкін. Пайдаланушыларға кез келген елеулі өзгерістер туралы электрондық пошта арқылы немесе қолданба ішіндегі хабарландыру арқылы хабарланады.",
      ],
    },
  ],
  conclusion: {
    title: "Қорытынды",
    committee: {
      name: "Zefaaf-тың Шариғат комитеті",
      lines: ["Сізге табыс пен тура жол тілейді,", "Және біз Алладан сізге ізгі әрі берекелі неке сыйлауын сұраймыз."],
    },
    platform: {
      name: "Zefaaf платформасы",
      lines: ["Некеңізді ислам этикасына сай жоспарлаңыз"],
    },
  },
};

const ms: TermsCopy = {
  hero: {
    title: "Terma & Syarat",
    imageAlt: "Sebuah tangan menulis di atas kertas dengan pen, melambangkan akad perkahwinan",
  },
  meta: {
    lastUpdated: "Kemas Kini Terakhir: 10 September 2025",
    committee: "Jawatankuasa Syariah Platform Zefaaf",
  },
  sections: [
    {
      title: "Pertama: Notis daripada Jawatankuasa Syariah",
      paragraphs: [
        "Jawatankuasa Syariah Islam menggesa ahli membaca terma ini dengan teliti sebelum membuat akaun.",
        "Terma ini mengikat semua ahli (sama ada pada pelan percuma atau berbayar).",
        "Platform berhak meminda terma ini pada bila-bila masa, dan penggunaan berterusan membentuk persetujuan tersirat.",
      ],
    },
    {
      title: "Kedua: Syarat Pendaftaran dan Keahlian",
      bullets: [
        "Ahli mestilah dewasa dan layak untuk berkahwin.",
        "Setiap orang berhak memiliki hanya satu akaun.",
        "Platform tidak bertanggungjawab terhadap ketepatan data dan berhak memadam sebarang maklumat palsu atau mengelirukan.",
        "Pemindahan wang antara ahli atas sebarang sebab adalah dilarang.",
        "Platform berhak memadam mana-mana akaun yang tidak mematuhi terma tanpa notis terlebih dahulu dan tanpa bayaran balik yuran.",
      ],
    },
    {
      title: "Ketiga: Objektif Yang Dilarang",
      intro:
        "Platform Zefaaf disediakan secara eksklusif untuk perkahwinan yang sah. Pendaftaran atau penggunaan untuk sebarang tujuan yang menyalahi undang-undang adalah dilarang, termasuk:",
      bullets: [
        "Perkahwinan sementara (mut'ah)",
        "Perkahwinan jangka pendek",
        "Perkahwinan adat",
        "Sebarang amalan yang melanggar Syariah Islam atau undang-undang yang berkuat kuasa",
      ],
      outro:
        "Platform berhak menggantung atau membatalkan mana-mana akaun yang tidak mematuhi terma, mengambil tindakan undang-undang yang perlu, dan menuntut ganti rugi bagi kerosakan yang dialami.",
    },
    {
      title: "Perkongsian Data",
      intro: "Kami hanya boleh berkongsi data anda dalam kes-kes berikut:",
      bullets: [
        "Untuk tujuan undang-undang: jika dikehendaki oleh undang-undang yang berkuat kuasa.",
        "Dengan persetujuan pengguna: jika anda memilih untuk berkongsi data anda dengan ahli lain melalui Platform.",
      ],
    },
    {
      title: "Perlindungan Data",
      paragraphs: [
        "Kami menggunakan protokol keselamatan termaju (penyulitan SSL) untuk melindungi data semasa penghantaran dan penyimpanan. Akses kepada data anda dihadkan kepada kakitangan atau rakan kongsi yang mempunyai keperluan sah sahaja.",
      ],
    },
    {
      title: "Privasi Kanak-Kanak",
      paragraphs: ["Penggunaan platform tidak dibenarkan bagi individu yang berusia bawah 18 tahun."],
    },
    {
      title: "Perubahan kepada Dasar Privasi",
      paragraphs: [
        "Kami mungkin mengemas kini dasar ini dari semasa ke semasa. Pengguna akan dimaklumkan tentang sebarang perubahan penting melalui e-mel atau melalui pemberitahuan dalam aplikasi.",
      ],
    },
  ],
  conclusion: {
    title: "Kesimpulan",
    committee: {
      name: "Jawatankuasa Syariah Zefaaf",
      lines: ["Mendoakan kejayaan dan petunjuk untuk anda,", "Dan kami memohon kepada Allah agar mengurniakan anda perkahwinan yang soleh dan diberkati."],
    },
    platform: {
      name: "Platform Zefaaf",
      lines: ["Rancang perkahwinan anda menurut etika Islam"],
    },
  },
};

const pa: TermsCopy = {
  hero: {
    title: "ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ",
    imageAlt: "ਕਲਮ ਨਾਲ ਕਾਗਜ਼ 'ਤੇ ਲਿਖਦਾ ਇੱਕ ਹੱਥ, ਜੋ ਵਿਆਹ ਦੇ ਇਕਰਾਰਨਾਮੇ ਦਾ ਪ੍ਰਤੀਕ ਹੈ",
  },
  meta: {
    lastUpdated: "ਆਖਰੀ ਅੱਪਡੇਟ: 10 ਸਤੰਬਰ, 2025",
    committee: "ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ਦੀ ਸ਼ਰੀਆ ਕਮੇਟੀ",
  },
  sections: [
    {
      title: "ਪਹਿਲਾ: ਸ਼ਰੀਆ ਕਮੇਟੀ ਵੱਲੋਂ ਸੂਚਨਾ",
      paragraphs: [
        "ਇਸਲਾਮੀ ਸ਼ਰੀਆ ਕਮੇਟੀ ਮੈਂਬਰਾਂ ਨੂੰ ਖਾਤਾ ਬਣਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਇਹਨਾਂ ਸ਼ਰਤਾਂ ਨੂੰ ਧਿਆਨ ਨਾਲ ਪੜ੍ਹਨ ਦੀ ਤਾਕੀਦ ਕਰਦੀ ਹੈ।",
        "ਇਹ ਸ਼ਰਤਾਂ ਸਾਰੇ ਮੈਂਬਰਾਂ (ਭਾਵੇਂ ਮੁਫ਼ਤ ਜਾਂ ਭੁਗਤਾਨ ਵਾਲੀ ਯੋਜਨਾ 'ਤੇ ਹੋਣ) ਲਈ ਪਾਬੰਦ ਹਨ।",
        "ਪਲੇਟਫਾਰਮ ਕਿਸੇ ਵੀ ਸਮੇਂ ਇਹਨਾਂ ਸ਼ਰਤਾਂ ਵਿੱਚ ਸੋਧ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਰਾਖਵਾਂ ਰੱਖਦਾ ਹੈ, ਅਤੇ ਵਰਤੋਂ ਜਾਰੀ ਰੱਖਣਾ ਅਪ੍ਰਤੱਖ ਸਹਿਮਤੀ ਮੰਨਿਆ ਜਾਵੇਗਾ।",
      ],
    },
    {
      title: "ਦੂਜਾ: ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਮੈਂਬਰਸ਼ਿਪ ਦੀਆਂ ਸ਼ਰਤਾਂ",
      bullets: [
        "ਮੈਂਬਰ ਦਾ ਵਿਆਹ ਲਈ ਯੋਗ ਬਾਲਗ ਹੋਣਾ ਜ਼ਰੂਰੀ ਹੈ।",
        "ਹਰੇਕ ਵਿਅਕਤੀ ਸਿਰਫ਼ ਇੱਕ ਖਾਤੇ ਦਾ ਹੱਕਦਾਰ ਹੈ।",
        "ਪਲੇਟਫਾਰਮ ਡੇਟਾ ਦੀ ਸ਼ੁੱਧਤਾ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹੈ ਅਤੇ ਕਿਸੇ ਵੀ ਝੂਠੀ ਜਾਂ ਗੁੰਮਰਾਹਕੁੰਨ ਜਾਣਕਾਰੀ ਨੂੰ ਹਟਾਉਣ ਦਾ ਅਧਿਕਾਰ ਰਾਖਵਾਂ ਰੱਖਦਾ ਹੈ।",
        "ਕਿਸੇ ਵੀ ਕਾਰਨ ਕਰਕੇ ਮੈਂਬਰਾਂ ਵਿਚਕਾਰ ਪੈਸੇ ਦਾ ਤਬਾਦਲਾ ਕਰਨਾ ਮਨਾਹ ਹੈ।",
        "ਪਲੇਟਫਾਰਮ ਬਿਨਾਂ ਪਹਿਲਾਂ ਸੂਚਨਾ ਦਿੱਤੇ ਅਤੇ ਫੀਸਾਂ ਵਾਪਸ ਕੀਤੇ ਬਿਨਾਂ ਕਿਸੇ ਵੀ ਉਲੰਘਣਾ ਕਰਨ ਵਾਲੇ ਖਾਤੇ ਨੂੰ ਹਟਾਉਣ ਦਾ ਅਧਿਕਾਰ ਰਾਖਵਾਂ ਰੱਖਦਾ ਹੈ।",
      ],
    },
    {
      title: "ਤੀਜਾ: ਵਰਜਿਤ ਉਦੇਸ਼",
      intro:
        "ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ ਸਿਰਫ਼ ਜਾਇਜ਼ ਵਿਆਹ ਲਈ ਸਮਰਪਿਤ ਹੈ। ਕਿਸੇ ਵੀ ਗੈਰ-ਕਾਨੂੰਨੀ ਉਦੇਸ਼ ਲਈ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਜਾਂ ਵਰਤੋਂ ਵਰਜਿਤ ਹੈ, ਜਿਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:",
      bullets: [
        "ਅਸਥਾਈ ਵਿਆਹ (ਮੁਤਆ)",
        "ਥੋੜ੍ਹੇ ਸਮੇਂ ਦਾ ਵਿਆਹ",
        "ਰਵਾਇਤੀ ਵਿਆਹ",
        "ਕੋਈ ਵੀ ਅਭਿਆਸ ਜੋ ਇਸਲਾਮੀ ਸ਼ਰੀਆ ਜਾਂ ਲਾਗੂ ਕਾਨੂੰਨਾਂ ਦੀ ਉਲੰਘਣਾ ਕਰਦਾ ਹੋਵੇ",
      ],
      outro:
        "ਪਲੇਟਫਾਰਮ ਕਿਸੇ ਵੀ ਉਲੰਘਣਾ ਕਰਨ ਵਾਲੇ ਖਾਤੇ ਨੂੰ ਮੁਅੱਤਲ ਜਾਂ ਰੱਦ ਕਰਨ, ਲੋੜੀਂਦੀ ਕਾਨੂੰਨੀ ਕਾਰਵਾਈ ਕਰਨ, ਅਤੇ ਹੋਏ ਨੁਕਸਾਨ ਲਈ ਮੁਆਵਜ਼ੇ ਦਾ ਦਾਅਵਾ ਕਰਨ ਦਾ ਅਧਿਕਾਰ ਰਾਖਵਾਂ ਰੱਖਦਾ ਹੈ।",
    },
    {
      title: "ਡੇਟਾ ਸਾਂਝਾਕਰਨ",
      intro: "ਅਸੀਂ ਸਿਰਫ਼ ਹੇਠ ਲਿਖੇ ਮਾਮਲਿਆਂ ਵਿੱਚ ਹੀ ਤੁਹਾਡਾ ਡੇਟਾ ਸਾਂਝਾ ਕਰ ਸਕਦੇ ਹਾਂ:",
      bullets: [
        "ਕਾਨੂੰਨੀ ਉਦੇਸ਼ਾਂ ਲਈ: ਜੇਕਰ ਲਾਗੂ ਕਾਨੂੰਨਾਂ ਦੁਆਰਾ ਲੋੜੀਂਦਾ ਹੋਵੇ।",
        "ਉਪਭੋਗਤਾ ਦੀ ਸਹਿਮਤੀ ਨਾਲ: ਜੇਕਰ ਤੁਸੀਂ ਪਲੇਟਫਾਰਮ ਰਾਹੀਂ ਆਪਣਾ ਡੇਟਾ ਕਿਸੇ ਹੋਰ ਮੈਂਬਰ ਨਾਲ ਸਾਂਝਾ ਕਰਨਾ ਚੁਣਦੇ ਹੋ।",
      ],
    },
    {
      title: "ਡੇਟਾ ਸੁਰੱਖਿਆ",
      paragraphs: [
        "ਅਸੀਂ ਟ੍ਰਾਂਸਮਿਸ਼ਨ ਅਤੇ ਸਟੋਰੇਜ ਦੌਰਾਨ ਡੇਟਾ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਉੱਨਤ ਸੁਰੱਖਿਆ ਪ੍ਰੋਟੋਕੋਲ (SSL ਇਨਕ੍ਰਿਪਸ਼ਨ) ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਤੁਹਾਡੇ ਡੇਟਾ ਤੱਕ ਪਹੁੰਚ ਸਿਰਫ਼ ਉਹਨਾਂ ਕਰਮਚਾਰੀਆਂ ਜਾਂ ਭਾਈਵਾਲਾਂ ਤੱਕ ਸੀਮਿਤ ਹੈ ਜਿਨ੍ਹਾਂ ਦੀ ਜਾਇਜ਼ ਲੋੜ ਹੈ।",
      ],
    },
    {
      title: "ਬੱਚਿਆਂ ਦੀ ਗੋਪਨੀਯਤਾ",
      paragraphs: ["18 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਵਿਅਕਤੀਆਂ ਨੂੰ ਪਲੇਟਫਾਰਮ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਹੈ।"],
    },
    {
      title: "ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਵਿੱਚ ਤਬਦੀਲੀਆਂ",
      paragraphs: [
        "ਅਸੀਂ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਇਸ ਨੀਤੀ ਨੂੰ ਅੱਪਡੇਟ ਕਰ ਸਕਦੇ ਹਾਂ। ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ ਕਿਸੇ ਵੀ ਮਹੱਤਵਪੂਰਨ ਤਬਦੀਲੀ ਬਾਰੇ ਈਮੇਲ ਜਾਂ ਐਪ ਦੇ ਅੰਦਰ ਸੂਚਨਾ ਰਾਹੀਂ ਸੂਚਿਤ ਕੀਤਾ ਜਾਵੇਗਾ।",
      ],
    },
  ],
  conclusion: {
    title: "ਸਿੱਟਾ",
    committee: {
      name: "ਜ਼ੇਫ਼ਾਫ਼ ਦੀ ਸ਼ਰੀਆ ਕਮੇਟੀ",
      lines: ["ਤੁਹਾਡੀ ਸਫਲਤਾ ਅਤੇ ਸੇਧ ਦੀ ਕਾਮਨਾ ਕਰਦੀ ਹੈ,", "ਅਤੇ ਅਸੀਂ ਅੱਲ੍ਹਾ ਅੱਗੇ ਦੁਆ ਕਰਦੇ ਹਾਂ ਕਿ ਉਹ ਤੁਹਾਨੂੰ ਇੱਕ ਨੇਕ ਅਤੇ ਬਰਕਤ ਵਾਲਾ ਵਿਆਹ ਬਖ਼ਸ਼ੇ।"],
    },
    platform: {
      name: "ਜ਼ੇਫ਼ਾਫ਼ ਪਲੇਟਫਾਰਮ",
      lines: ["ਇਸਲਾਮੀ ਨੈਤਿਕਤਾ ਦੇ ਅਨੁਸਾਰ ਆਪਣੇ ਵਿਆਹ ਦੀ ਯੋਜਨਾ ਬਣਾਓ"],
    },
  },
};

const ps: TermsCopy = {
  hero: {
    title: "شرایط او مقررات",
    imageAlt: "یو لاس چې په قلم د کاغذ پر مخ لیکي، د نکاح تړون استازیتوب کوي",
  },
  meta: {
    lastUpdated: "وروستی تازه: د 2025 کال د سپتمبر 10",
    committee: "د زفاف پلیټ فارم شرعي کمېټه",
  },
  sections: [
    {
      title: "لومړی: د شرعي کمېټې خبرداری",
      paragraphs: [
        "اسلامي شرعي کمېټه غړي هڅوي چې د حساب جوړولو دمخه دا شرایط په دقت سره ولولي.",
        "دا شرایط د ټولو غړو لپاره (که وړیا وي که تادیه شوی پلان) الزامي دي.",
        "پلیټ فارم په هر وخت کې د دې شرایطو د بدلولو حق خپل ساتي، او دوامداره کارونه ضمني موافقه ګڼل کیږي.",
      ],
    },
    {
      title: "دوهم: د راجستریشن او غړیتوب شرایط",
      bullets: [
        "غړی باید بالغ او د نکاح وړ وي.",
        "هر شخص یوازې د یو حساب حق لري.",
        "پلیټ فارم د معلوماتو د دقت مسؤلیت نه اخلي او د هرې غلطې یا ګمراه کوونکې معلومات د پاکولو حق خپل ساتي.",
        "د هرې دلیل لپاره د غړو ترمنځ د پیسو لیږد منع دی.",
        "پلیټ فارم د مخکینۍ خبرتیا پرته او د فیسونو له بیرته ورکولو پرته د هر ناغاړونکي حساب د پاکولو حق خپل ساتي.",
      ],
    },
    {
      title: "دریم: منع شوي موخې",
      intro: "د زفاف پلیټ فارم یوازې د مشروع نکاح لپاره وقف شوی. د هر غیرقانوني موخې لپاره راجستریشن یا کارونه منع ده، پشمول:",
      bullets: [
        "لنډمهاله نکاح (متعه)",
        "لنډمهاله واده",
        "عرفي واده",
        "هره کړنه چې د اسلامي شریعت یا اړوند قوانینو سره مخالف وي",
      ],
      outro:
        "پلیټ فارم د هر ناغاړونکي حساب د ځنډولو یا لغوه کولو، اړینو قانوني اقداماتو د نیولو، او د زیانونو د تاوان غوښتنې حق خپل ساتي.",
    },
    {
      title: "د معلوماتو شریکول",
      intro: "موږ ستاسو معلومات یوازې په لاندې حالاتو کې شریکولی شو:",
      bullets: [
        "د قانوني موخو لپاره: که اړوند قوانین دا وغواړي.",
        "د کارونکي په رضایت: که تاسو غوره کړئ چې خپل معلومات د پلیټ فارم له لارې د بل غړي سره شریک کړئ.",
      ],
    },
    {
      title: "د معلوماتو ساتنه",
      paragraphs: [
        "موږ د لیږد او ذخیرې پر مهال د معلوماتو د ساتنې لپاره پرمختللي امنیتي پروتوکولونه (SSL کوډول) کاروو. ستاسو معلوماتو ته لاسرسی یوازې هغو کارکوونکو یا شریکانو ته محدود دی چې مشروع اړتیا لري.",
      ],
    },
    {
      title: "د ماشومانو محرمیت",
      paragraphs: ["پلیټ فارم د 18 کلونو څخه کم عمر لرونکو کسانو لپاره د کارونې اجازه نه ورکوي."],
    },
    {
      title: "د محرمیت تګلارې بدلونونه",
      paragraphs: [
        "موږ ممکن دا تګلاره وخت پر وخت تازه کړو. کارونکي به د هر مهم بدلون په اړه د ایمیل یا د اپلیکیشن دننه خبرتیا له لارې خبر شي.",
      ],
    },
  ],
  conclusion: {
    title: "پایله",
    committee: {
      name: "د زفاف شرعي کمېټه",
      lines: ["تاسو ته بریالیتوب او سمه لار غواړي،", "او موږ له الله څخه غواړو چې تاسو ته یو صالح او برکتي واده درکړي."],
    },
    platform: {
      name: "د زفاف پلیټ فارم",
      lines: ["خپل واده د اسلامي اخلاقو سره سم پلان کړئ"],
    },
  },
};

const sw: TermsCopy = {
  hero: {
    title: "Sheria na Masharti",
    imageAlt: "Mkono ukiandika kwenye karatasi kwa kalamu, ukiwakilisha mkataba wa ndoa",
  },
  meta: {
    lastUpdated: "Ilisasishwa Mwisho: Septemba 10, 2025",
    committee: "Kamati ya Sheria ya Kiislamu ya Jukwaa la Zefaaf",
  },
  sections: [
    {
      title: "Kwanza: Tangazo kutoka Kamati ya Sheria ya Kiislamu",
      paragraphs: [
        "Kamati ya Sheria ya Kiislamu inawahimiza wanachama kusoma kwa makini masharti haya kabla ya kuunda akaunti.",
        "Masharti haya ni ya lazima kwa wanachama wote (iwe kwenye mpango wa bure au wa kulipia).",
        "Jukwaa linahifadhi haki ya kurekebisha masharti haya wakati wowote, na kuendelea kutumia kunachukuliwa kama kukubali kwa dhima.",
      ],
    },
    {
      title: "Pili: Masharti ya Usajili na Uanachama",
      bullets: [
        "Mwanachama lazima awe mtu mzima anayestahili ndoa.",
        "Kila mtu ana haki ya akaunti moja tu.",
        "Jukwaa halihusiki na usahihi wa data na linahifadhi haki ya kufuta taarifa yoyote ya uongo au ya kupotosha.",
        "Uhawilishaji wa fedha kati ya wanachama kwa sababu yoyote ile ni marufuku.",
        "Jukwaa linahifadhi haki ya kufuta akaunti yoyote isiyofuata masharti bila taarifa ya awali na bila kurejesha ada.",
      ],
    },
    {
      title: "Tatu: Malengo Yaliyokatazwa",
      intro: "Jukwaa la Zefaaf limejitolea pekee kwa ndoa halali. Usajili au matumizi kwa madhumuni yoyote haramu ni marufuku, ikiwa ni pamoja na:",
      bullets: [
        "Ndoa ya muda (mut'ah)",
        "Ndoa ya muda mfupi",
        "Ndoa ya kimila",
        "Utaratibu wowote unaokiuka Sheria ya Kiislamu au sheria husika",
      ],
      outro:
        "Jukwaa linahifadhi haki ya kusimamisha au kufuta akaunti yoyote isiyofuata masharti, kuchukua hatua muhimu za kisheria, na kudai fidia kwa uharibifu uliopatikana.",
    },
    {
      title: "Ushirikishaji wa Data",
      intro: "Tunaweza kushiriki data yako tu katika hali zifuatazo:",
      bullets: [
        "Kwa madhumuni ya kisheria: ikiwa inahitajika na sheria husika.",
        "Kwa idhini ya mtumiaji: ikiwa utachagua kushiriki data yako na mwanachama mwingine kupitia Jukwaa.",
      ],
    },
    {
      title: "Ulinzi wa Data",
      paragraphs: [
        "Tunatumia itifaki za usalama za hali ya juu (usimbaji fiche wa SSL) kulinda data wakati wa upitishaji na uhifadhi. Ufikiaji wa data yako umezuiliwa kwa wafanyakazi au washirika wenye uhitaji halali pekee.",
      ],
    },
    {
      title: "Faragha ya Watoto",
      paragraphs: ["Matumizi ya jukwaa hairuhusiwi kwa watu walio chini ya umri wa miaka 18."],
    },
    {
      title: "Mabadiliko ya Sera ya Faragha",
      paragraphs: [
        "Tunaweza kusasisha sera hii mara kwa mara. Watumiaji watajulishwa kuhusu mabadiliko yoyote muhimu kupitia barua pepe au kupitia arifa ndani ya programu.",
      ],
    },
  ],
  conclusion: {
    title: "Hitimisho",
    committee: {
      name: "Kamati ya Sheria ya Kiislamu ya Zefaaf",
      lines: ["Inawatakia mafanikio na uongozi mwema,", "Na tunamwomba Allah awajalie ndoa njema na yenye baraka."],
    },
    platform: {
      name: "Jukwaa la Zefaaf",
      lines: ["Panga ndoa yako kwa mujibu wa maadili ya Kiislamu"],
    },
  },
};

const th: TermsCopy = {
  hero: {
    title: "ข้อกำหนดและเงื่อนไข",
    imageAlt: "มือที่กำลังเขียนบนกระดาษด้วยปากกา สื่อถึงสัญญาการแต่งงาน",
  },
  meta: {
    lastUpdated: "อัปเดตล่าสุด: 10 กันยายน 2025",
    committee: "คณะกรรมการชะรีอะฮ์ของแพลตฟอร์ม Zefaaf",
  },
  sections: [
    {
      title: "ประการแรก: ประกาศจากคณะกรรมการชะรีอะฮ์",
      paragraphs: [
        "คณะกรรมการชะรีอะฮ์อิสลามขอเรียกร้องให้สมาชิกอ่านข้อกำหนดเหล่านี้อย่างละเอียดก่อนสร้างบัญชี",
        "ข้อกำหนดเหล่านี้มีผลผูกพันกับสมาชิกทุกคน (ไม่ว่าจะใช้แผนฟรีหรือแบบชำระเงิน)",
        "แพลตฟอร์มขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดเหล่านี้ได้ทุกเมื่อ และการใช้งานต่อไปถือเป็นการยอมรับโดยปริยาย",
      ],
    },
    {
      title: "ประการที่สอง: เงื่อนไขการลงทะเบียนและสมาชิกภาพ",
      bullets: [
        "สมาชิกต้องเป็นผู้บรรลุนิติภาวะและมีคุณสมบัติเหมาะสมสำหรับการแต่งงาน",
        "แต่ละบุคคลมีสิทธิ์ถือครองบัญชีได้เพียงบัญชีเดียวเท่านั้น",
        "แพลตฟอร์มไม่รับผิดชอบต่อความถูกต้องของข้อมูล และขอสงวนสิทธิ์ในการลบข้อมูลเท็จหรือทำให้เข้าใจผิดใด ๆ",
        "ห้ามโอนเงินระหว่างสมาชิกไม่ว่าด้วยเหตุผลใดก็ตาม",
        "แพลตฟอร์มขอสงวนสิทธิ์ในการลบบัญชีที่ไม่ปฏิบัติตามข้อกำหนดโดยไม่ต้องแจ้งล่วงหน้าและไม่คืนค่าธรรมเนียม",
      ],
    },
    {
      title: "ประการที่สาม: วัตถุประสงค์ต้องห้าม",
      intro:
        "แพลตฟอร์ม Zefaaf อุทิศไว้เฉพาะสำหรับการแต่งงานที่ถูกต้องตามหลักศาสนาเท่านั้น ห้ามลงทะเบียนหรือใช้งานเพื่อวัตถุประสงค์ที่ผิดกฎหมายใด ๆ ซึ่งรวมถึง:",
      bullets: [
        "การแต่งงานชั่วคราว (มุตอะฮ์)",
        "การแต่งงานระยะสั้น",
        "การแต่งงานตามประเพณี",
        "การกระทำใด ๆ ที่ละเมิดหลักชะรีอะฮ์อิสลามหรือกฎหมายที่บังคับใช้",
      ],
      outro:
        "แพลตฟอร์มขอสงวนสิทธิ์ในการระงับหรือยกเลิกบัญชีที่ไม่ปฏิบัติตามข้อกำหนด ดำเนินการทางกฎหมายที่จำเป็น และเรียกร้องค่าชดเชยสำหรับความเสียหายที่เกิดขึ้น",
    },
    {
      title: "การแบ่งปันข้อมูล",
      intro: "เราอาจแบ่งปันข้อมูลของคุณเฉพาะในกรณีต่อไปนี้เท่านั้น:",
      bullets: [
        "เพื่อวัตถุประสงค์ทางกฎหมาย: หากกฎหมายที่บังคับใช้กำหนดไว้",
        "ด้วยความยินยอมของผู้ใช้: หากคุณเลือกที่จะแบ่งปันข้อมูลของคุณกับสมาชิกรายอื่นผ่านแพลตฟอร์ม",
      ],
    },
    {
      title: "การคุ้มครองข้อมูล",
      paragraphs: [
        "เราใช้โปรโตคอลความปลอดภัยขั้นสูง (การเข้ารหัส SSL) เพื่อปกป้องข้อมูลระหว่างการส่งและการจัดเก็บ การเข้าถึงข้อมูลของคุณจำกัดเฉพาะพนักงานหรือพันธมิตรที่มีความจำเป็นอันชอบธรรมเท่านั้น",
      ],
    },
    {
      title: "ความเป็นส่วนตัวของเด็ก",
      paragraphs: ["ไม่อนุญาตให้ผู้ที่มีอายุต่ำกว่า 18 ปีใช้งานแพลตฟอร์มนี้"],
    },
    {
      title: "การเปลี่ยนแปลงนโยบายความเป็นส่วนตัว",
      paragraphs: [
        "เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว ผู้ใช้จะได้รับแจ้งเกี่ยวกับการเปลี่ยนแปลงที่สำคัญใด ๆ ผ่านทางอีเมลหรือการแจ้งเตือนภายในแอป",
      ],
    },
  ],
  conclusion: {
    title: "บทสรุป",
    committee: {
      name: "คณะกรรมการชะรีอะฮ์ของ Zefaaf",
      lines: ["ขออวยพรให้ท่านประสบความสำเร็จและได้รับการชี้นำที่ดี", "และเราขอวิงวอนต่ออัลลอฮ์ให้ประทานการแต่งงานที่ดีงามและได้รับพรแก่ท่าน"],
    },
    platform: {
      name: "แพลตฟอร์ม Zefaaf",
      lines: ["วางแผนการแต่งงานของคุณตามหลักจริยธรรมอิสลาม"],
    },
  },
};

const copyByLocale: Record<string, TermsCopy> = {
  ar, en, nl, fr, de, tr, ru, id, zh, bn, bs, es, fa, pt, ja, ko, it, ur, ta, am, sv, da, sq, uz, az, fil, hi, kk, ms, pa, ps, sw, th,
};

export function getTermsCopy(locale: string): TermsCopy {
  return copyByLocale[locale] ?? en;
}
