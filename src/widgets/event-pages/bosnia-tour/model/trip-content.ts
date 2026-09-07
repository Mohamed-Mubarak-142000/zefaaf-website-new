// Everything this page shows that belongs to the trip itself rather than to
// the programme: the hero's headline and info bar, the destination write-up
// with its goal, and the "why join" list. Rewaq owns all of it, so each getter
// below merges a trip over the translated copy — anything Rewaq leaves empty
// (or sends malformed) keeps the `copy.ts` placeholder, which is what a failed
// lookup falls back to wholesale. The dates, price and duration are formatted
// with `Intl` for the active locale, so all 33 locales read one
// language-neutral payload.

import { getTripImages, type Trip } from "@/shared/api";

import type { BosniaBullet, BosniaCopy } from "./copy";

export type HeroPills = BosniaCopy["hero"]["pills"];

const MS_PER_DAY = 86_400_000;

// The payment and duration pills are written as "<label><separator><gap><value>"
// in all 33 locales, and only the label half is translatable. So the localized
// label — everything up to and including the separator and the spacing that
// follows it — is kept, and only the value after it is swapped. The separator
// differs by locale: an ASCII colon in most, a space-colon in French, and "፦"
// in Amharic.
const LABEL_PREFIX = /^[^:：፦]*[:：፦]\s*/;

function withLabelOf(template: string, value: string): string {
  const [label] = LABEL_PREFIX.exec(template) ?? [];
  return label ? `${label}${value}` : value;
}

// Rewaq sends date-only strings ("2026-10-15"), which parse as UTC midnight —
// formatting them in the viewer's own zone would show the previous day
// anywhere west of Greenwich, so the output is pinned to UTC.
function formatDate(value: string | undefined, locale: string): string | null {
  const time = value ? Date.parse(value) : Number.NaN;
  if (Number.isNaN(time)) return null;

  return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(time);
}

// Prices arrive as decimal strings ("500.00") with an ISO currency code, so a
// whole amount renders without the trailing zeros. An unusable code (missing,
// or not three letters like "Euro") still shows the number, with the code
// appended verbatim.
function formatPrice(trip: Trip, locale: string): string | null {
  const amount = Number(trip.price);
  if (trip.price == null || trip.price === "" || !Number.isFinite(amount)) return null;

  const currency = trip.currency?.trim();
  const fractionDigits = Number.isInteger(amount) ? 0 : 2;
  const digits = { minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits };

  if (currency && /^[A-Za-z]{3}$/.test(currency)) {
    try {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency.toUpperCase(),
        ...digits,
      }).format(amount);
    } catch {
      // An ISO-shaped code Intl still refuses — fall through to the plain number.
    }
  }

  const formatted = new Intl.NumberFormat(locale, digits).format(amount);
  return currency ? `${formatted} ${currency}` : formatted;
}

// Both trip dates are inclusive: the 15th to the 20th is six days away, not
// five. Whole weeks read as weeks ("1 week"), like the placeholder copy does;
// anything else counts in days.
function formatDuration(trip: Trip, locale: string): string | null {
  const start = trip.start_date ? Date.parse(trip.start_date) : Number.NaN;
  const end = trip.end_date ? Date.parse(trip.end_date) : Number.NaN;
  if (Number.isNaN(start) || Number.isNaN(end) || end < start) return null;

  const days = Math.round((end - start) / MS_PER_DAY) + 1;
  const wholeWeeks = days >= 7 && days % 7 === 0;

  return new Intl.NumberFormat(locale, {
    style: "unit",
    unit: wholeWeeks ? "week" : "day",
    unitDisplay: "long",
  }).format(wholeWeeks ? days / 7 : days);
}

// Rewaq's long text fields hold several paragraphs separated by blank lines.
// Any run of newlines splits, so a write-up typed with single line breaks
// still comes out as separate paragraphs rather than one run-on block with
// its breaks collapsed away.
function toParagraphs(text: string | undefined): string[] {
  return (text ?? "")
    .split(/[\r\n]+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function getHeroPills(
  trip: Trip | null | undefined,
  locale: string,
  fallback: HeroPills,
): HeroPills {
  if (!trip) return fallback;

  const date = formatDate(trip.start_date, locale);
  const price = formatPrice(trip, locale);
  const duration = formatDuration(trip, locale);
  const location = trip.location?.trim();

  return {
    date: date ?? fallback.date,
    payment: price ? withLabelOf(fallback.payment, price) : fallback.payment,
    duration: duration ? withLabelOf(fallback.duration, duration) : fallback.duration,
    location: location || fallback.location,
  };
}

// The destination section: the trip's first secondary block, plus its goal in
// the highlighted card underneath. The eyebrow above the heading ("Our First
// Destination") and the card's own "Goal" heading have no Rewaq field, so they
// stay translated.
export function getDestinationContent(
  trip: Trip | null | undefined,
  fallback: BosniaCopy["destination"],
): BosniaCopy["destination"] {
  if (!trip) return fallback;

  const paragraphs = toParagraphs(trip.secondary_description_1);

  return {
    ...fallback,
    title: trip.secondary_title_1?.trim() || fallback.title,
    paragraphs: paragraphs.length ? paragraphs : fallback.paragraphs,
    goal: { ...fallback.goal, description: trip.goal?.trim() || fallback.goal.description },
  };
}

// The numbered "why join" list, one line of the trip's second block per entry.
// The placeholder items are written as "<lead-in>: <rest>" and rendered with
// the lead-in in bold, so a line typed that way keeps that emphasis — the
// separator set matches the pill labels above, since the same three
// punctuation marks serve as a colon across the 33 locales. A line without one
// renders as plain text rather than borrowing a bold half it doesn't have.
// No `s` flag: the lines are already split on every newline, and the project
// targets ES2017, where that flag doesn't compile.
const TITLE_SPLIT = /^([^:：፦]+)[:：፦]\s*(.+)$/;

function toBullet(line: string): BosniaBullet {
  const [, title, description] = TITLE_SPLIT.exec(line) ?? [];

  return title && description
    ? { title: title.trim(), description: description.trim() }
    : { title: "", description: line };
}

export function getWhyItems(
  trip: Trip | null | undefined,
  fallback: BosniaCopy["why"]["items"],
): BosniaCopy["why"]["items"] {
  if (!trip) return fallback;

  const lines = toParagraphs(trip.secondary_description_2);
  return lines.length ? lines.map(toBullet) : fallback;
}

/**
 * The two cards of the "why join" photo cluster — the trip's last two banners,
 * the tall card first. The hero reads the same list from the front, so taking
 * these from the back keeps the two ends of the page on different photos. A
 * trip with a single banner shows it in both cards, and one with none leaves
 * both undefined: the section drops the cluster rather than standing in stock
 * photos for it.
 */
export function getWhyPhotos(trip: Trip | null | undefined): {
  tall: string | undefined;
  overlay: string | undefined;
} {
  const photos = getTripImages(trip ?? null);

  return { tall: photos.at(-2) ?? photos.at(-1), overlay: photos.at(-1) };
}
