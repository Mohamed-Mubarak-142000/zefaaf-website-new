// Same rationale as the Start Now flow: kept out of `messages/*.json` so a
// one-off namespace doesn't need to exist in all 33 locale files. Only `ar`
// and `en` are translated; every other locale falls back to `en`.

export type MarriageFormCopy = {
  title: string;
  heading: string;
  description: string;
  readMore: string;
  cta: string;
};

const en: MarriageFormCopy = {
  title: "Marriage form",
  heading: "Complete Your Booking via Rewaq",
  description:
    "A form that helps you understand marriage requirements — whether with Arabs or foreigners — and search for a suitable partner according to Sharia guidelines",
  readMore: "Read more about atical",
  cta: "Marriage request",
};

const ar: MarriageFormCopy = {
  title: "استمارة الزواج",
  heading: "أكمل حجزك عبر رواق",
  description: "استمارة تساعدك على فهم متطلبات الزواج — سواء من عرب أو أجانب — والبحث عن شريك مناسب وفق الضوابط الشرعية",
  readMore: "اقرأ المزيد عن المقال",
  cta: "طلب زواج",
};

const copyByLocale: Record<string, MarriageFormCopy> = { ar, en };

export function getMarriageFormCopy(locale: string): MarriageFormCopy {
  return copyByLocale[locale] ?? en;
}
