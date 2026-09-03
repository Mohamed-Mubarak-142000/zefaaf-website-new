// Same rationale as the Start Now flow: kept out of `messages/*.json` so a
// one-off namespace doesn't need to exist in all 33 locale files. Only `ar`
// and `en` are translated; every other locale falls back to `en`.

export type BookSeatCopy = {
  title: string;
  heading: string;
  description: string;
  cta: string;
};

const en: BookSeatCopy = {
  title: "Book your Seat",
  heading: "Complete Your Booking via Rewaq",
  description:
    "You will be redirected to the Rawaq Foundation for International Events and Conferences to complete your booking and securely obtain your official invitation.",
  cta: "Go to rawaq",
};

const ar: BookSeatCopy = {
  title: "احجز مقعدك",
  heading: "أكمل حجزك عبر رواق",
  description: "سيتم تحويلك إلى مؤسسة رواق للفعاليات والمؤتمرات الدولية لإتمام حجزك والحصول على دعوتك الرسمية بشكل آمن.",
  cta: "الذهاب إلى رواق",
};

const copyByLocale: Record<string, BookSeatCopy> = { ar, en };

export function getBookSeatCopy(locale: string): BookSeatCopy {
  return copyByLocale[locale] ?? en;
}
