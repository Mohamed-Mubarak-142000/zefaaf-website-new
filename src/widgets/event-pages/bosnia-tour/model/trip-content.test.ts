import { describe, expect, it } from "vitest";

import type { Trip } from "@/shared/api";

import type { BosniaCopy } from "./copy";
import {
  getDestinationContent,
  getHeroPills,
  getWhyItems,
  getWhyPhotos,
  type HeroPills,
} from "./trip-content";

// The English placeholders from `copy.ts`, which every pill falls back to.
const FALLBACK: HeroPills = {
  date: "August 21, 2026",
  payment: "Payment: 500 Euro",
  duration: "Trip duration: 1 week",
  location: "Bosnia and Herzegovina",
};

// Shaped like a real /api/trips entry.
const TRIP: Trip = {
  ulid: "01M1VE5KQ4C1N9XC00K3FJGKGP",
  main_title: "Bosnia Marriage Tour",
  location: "Istanbul, Turkey",
  start_date: "2026-10-15",
  end_date: "2026-10-20",
  price: "500.00",
  currency: "EUR",
  status: "upcoming",
};

describe("getHeroPills", () => {
  it("formats every pill from the trip", () => {
    expect(getHeroPills(TRIP, "en", FALLBACK)).toEqual({
      date: "October 15, 2026",
      payment: "Payment: €500",
      duration: "Trip duration: 6 days",
      location: "Istanbul, Turkey",
    });
  });

  it("keeps the localized label and swaps only the value", () => {
    const arabic: HeroPills = {
      date: "21 أغسطس 2026",
      payment: "الرسوم: 500 يورو",
      duration: "مدة الرحلة: أسبوع واحد",
      location: "البوسنة والهرسك",
    };
    const pills = getHeroPills(TRIP, "ar", arabic);

    expect(pills.payment.startsWith("الرسوم: ")).toBe(true);
    expect(pills.duration.startsWith("مدة الرحلة: ")).toBe(true);
    expect(pills.payment).not.toBe(arabic.payment);
  });

  it("preserves a locale's own separator spacing", () => {
    const french: HeroPills = { ...FALLBACK, payment: "Paiement : 500 euros" };

    expect(getHeroPills(TRIP, "fr", french).payment.startsWith("Paiement : ")).toBe(true);
  });

  it("counts whole weeks as weeks", () => {
    const week = { ...TRIP, start_date: "2026-10-15", end_date: "2026-10-21" };

    expect(getHeroPills(week, "en", FALLBACK).duration).toBe("Trip duration: 1 week");
  });

  it("keeps the cents of a fractional price", () => {
    expect(getHeroPills({ ...TRIP, price: "499.5" }, "en", FALLBACK).payment).toBe(
      "Payment: €499.50",
    );
  });

  it("appends a currency Intl cannot use instead of dropping the price", () => {
    expect(getHeroPills({ ...TRIP, currency: "Euro" }, "en", FALLBACK).payment).toBe(
      "Payment: 500 Euro",
    );
    expect(getHeroPills({ ...TRIP, currency: undefined }, "en", FALLBACK).payment).toBe(
      "Payment: 500",
    );
  });

  it("falls back to the translated copy field by field", () => {
    const partial: Trip = { ...TRIP, start_date: undefined, price: undefined, location: "  " };
    const pills = getHeroPills(partial, "en", FALLBACK);

    expect(pills.date).toBe(FALLBACK.date);
    expect(pills.payment).toBe(FALLBACK.payment);
    expect(pills.location).toBe(FALLBACK.location);
    // The duration needs both dates, so it goes too.
    expect(pills.duration).toBe(FALLBACK.duration);
  });

  it("ignores unusable dates and a backwards range", () => {
    expect(getHeroPills({ ...TRIP, start_date: "not a date" }, "en", FALLBACK).date).toBe(
      FALLBACK.date,
    );
    expect(getHeroPills({ ...TRIP, end_date: "2026-10-01" }, "en", FALLBACK).duration).toBe(
      FALLBACK.duration,
    );
  });

  it("returns the copy untouched when there is no trip", () => {
    expect(getHeroPills(null, "en", FALLBACK)).toBe(FALLBACK);
    expect(getHeroPills(undefined, "en", FALLBACK)).toBe(FALLBACK);
  });
});

const DESTINATION_COPY = {
  eyebrow: "Our First Destination",
  title: "Bosnia and Herzegovina",
  paragraphs: ["Static one.", "Static two."],
  goal: { title: "Goal", description: "Static goal." },
  cta: "Book your seat now",
  mapAlt: "Map of Bosnia and Herzegovina",
} satisfies BosniaCopy["destination"];

describe("getDestinationContent", () => {
  it("takes the heading, the paragraphs and the goal from the trip", () => {
    const trip: Trip = {
      ...TRIP,
      secondary_title_1: "Bosnia and Herzegovina",
      secondary_description_1: "First paragraph.\n\nSecond paragraph.\n\nThird paragraph.",
      goal: "Building direct relationships.",
    };
    const content = getDestinationContent(trip, DESTINATION_COPY);

    expect(content.paragraphs).toEqual(["First paragraph.", "Second paragraph.", "Third paragraph."]);
    expect(content.goal.description).toBe("Building direct relationships.");
    // No Rewaq field backs these, so they stay translated.
    expect(content.eyebrow).toBe(DESTINATION_COPY.eyebrow);
    expect(content.goal.title).toBe(DESTINATION_COPY.goal.title);
    expect(content.cta).toBe(DESTINATION_COPY.cta);
  });

  it("splits paragraphs on single line breaks too", () => {
    const trip = { ...TRIP, secondary_description_1: "One.\nTwo." };

    expect(getDestinationContent(trip, DESTINATION_COPY).paragraphs).toEqual(["One.", "Two."]);
  });

  it("keeps the translated copy for whatever the trip leaves empty", () => {
    const content = getDestinationContent(
      { ...TRIP, secondary_title_1: "  ", secondary_description_1: "\n\n" },
      DESTINATION_COPY,
    );

    expect(content.title).toBe(DESTINATION_COPY.title);
    expect(content.paragraphs).toBe(DESTINATION_COPY.paragraphs);
    expect(content.goal.description).toBe(DESTINATION_COPY.goal.description);
    expect(getDestinationContent(null, DESTINATION_COPY)).toBe(DESTINATION_COPY);
  });
});

const WHY_COPY = [
  { title: "A real opportunity", description: "For serious matchmaking." },
] satisfies BosniaCopy["why"]["items"];

describe("getWhyItems", () => {
  it("splits a line at its colon into the bold lead-in and the rest", () => {
    const items = getWhyItems(
      { ...TRIP, secondary_description_2: "A clear process: organized steps, away from randomness." },
      WHY_COPY,
    );

    expect(items).toEqual([
      { title: "A clear process", description: "organized steps, away from randomness." },
    ]);
  });

  it("leaves a line with no colon as plain text", () => {
    const items = getWhyItems(
      { ...TRIP, secondary_description_2: "Organising the programme.\nGuiding participants: every step." },
      WHY_COPY,
    );

    expect(items).toEqual([
      { title: "", description: "Organising the programme." },
      { title: "Guiding participants", description: "every step." },
    ]);
  });

  it("splits on the separator the locale actually uses", () => {
    const [arabic] = getWhyItems({ ...TRIP, secondary_description_2: "خطوات واضحة: إجراءات منظمة." }, WHY_COPY);
    const [amharic] = getWhyItems({ ...TRIP, secondary_description_2: "ግልጽ ደረጃዎች፦ የተደራጁ ሂደቶች።" }, WHY_COPY);

    expect(arabic).toEqual({ title: "خطوات واضحة", description: "إجراءات منظمة." });
    expect(amharic).toEqual({ title: "ግልጽ ደረጃዎች", description: "የተደራጁ ሂደቶች።" });
  });

  it("keeps the translated items when the trip has none", () => {
    expect(getWhyItems({ ...TRIP, secondary_description_2: "\n \n" }, WHY_COPY)).toBe(WHY_COPY);
    expect(getWhyItems(null, WHY_COPY)).toBe(WHY_COPY);
  });
});

describe("getWhyPhotos", () => {
  const banners = ["https://cdn/1.png", "https://cdn/2.png", "https://cdn/3.png", "https://cdn/4.png"];

  it("takes the trip's last two banners, the tall card first", () => {
    expect(getWhyPhotos({ ...TRIP, banner_urls: banners })).toEqual({
      tall: "https://cdn/3.png",
      overlay: "https://cdn/4.png",
    });
  });

  it("counts the hero image as the first of the list", () => {
    // `getTripImages` puts `hero_image_url` in front, so with one banner the
    // two cards are the hero and that banner.
    expect(
      getWhyPhotos({ ...TRIP, hero_image_url: "https://cdn/hero.png", banner_urls: ["https://cdn/1.png"] }),
    ).toEqual({ tall: "https://cdn/hero.png", overlay: "https://cdn/1.png" });
  });

  it("repeats a lone banner in both cards", () => {
    expect(getWhyPhotos({ ...TRIP, banner_urls: ["https://cdn/1.png"] })).toEqual({
      tall: "https://cdn/1.png",
      overlay: "https://cdn/1.png",
    });
  });

  it("leaves both cards empty when there is nothing to show", () => {
    // The section drops the whole cluster on this, rather than standing in a
    // stock photo.
    expect(getWhyPhotos({ ...TRIP, banner_urls: [] })).toEqual({ tall: undefined, overlay: undefined });
    expect(getWhyPhotos(null)).toEqual({ tall: undefined, overlay: undefined });
  });

  it("ignores a banner next/image could not load", () => {
    // Only https (and local) sources survive `getTripImages`; an http URL
    // would throw at render time instead of degrading.
    expect(getWhyPhotos({ ...TRIP, banner_urls: ["http://cdn/insecure.png", "https://cdn/1.png"] })).toEqual({
      tall: "https://cdn/1.png",
      overlay: "https://cdn/1.png",
    });
  });
});
