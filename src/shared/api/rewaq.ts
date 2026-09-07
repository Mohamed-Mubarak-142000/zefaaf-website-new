// Single source of truth for the Rewaq API host. `NEXT_PUBLIC_*` comes first
// because the trip endpoints below are also called from the client (the nav),
// where only public env vars exist; the server-only var stays supported for
// deployments that already set it.
function rewaqApiUrl(): string {
  return (
    process.env.NEXT_PUBLIC_REWAQ_API_URL ??
    process.env.REWAQ_API_URL ??
    "https://api.dev.rewaq.nl"
  ).replace(/\/$/, "");
}

export type Personality = {
  id: number;
  name: string;
  description: string;
  image_url: string | null;
  followers_count: number;
};

type PersonalitiesResponse = {
  data?: Personality[];
};

export async function getTopPersonalities(locale: string): Promise<Personality[]> {
  const response = await fetch(`${rewaqApiUrl()}/api/personalities`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": locale,
    },
  });

  if (!response.ok) return [];

  const payload = (await response.json()) as PersonalitiesResponse;
  return [...(payload.data ?? [])]
    .sort((a, b) => b.followers_count - a.followers_count)
    .slice(0, 2);
}

export type TripEvent = {
  ulid: string;
  name: string;
  date?: string;
  start_time?: string;
  location?: string;
};

// Rewaq's /api/trips proxies Zefaaf's trip list as-is, so the payload carries
// far more than the nav needs (banners, descriptions, coordinates…). Only the
// fields actually consumed here are typed; the rest stay untouched.
export type Trip = {
  id?: number | string;
  ulid: string;
  main_title: string;
  main_description?: string;
  // The two free-text sections a trip carries beyond its headline: the
  // destination write-up and the reasons to join. Both hold several
  // paragraphs, newline-separated.
  secondary_title_1?: string;
  secondary_description_1?: string;
  secondary_title_2?: string;
  secondary_description_2?: string;
  goal?: string;
  hero_image_url?: string | null;
  banner_urls?: string[];
  location?: string;
  start_date?: string;
  end_date?: string;
  price?: string | number;
  currency?: string;
  status?: string;
  accepting_registrations?: boolean;
  event?: TripEvent | null;
};

/**
 * A trip's own photos, hero image first — what the trip page shows instead of
 * the built-in tour photos. Only https (and local) sources survive: those are
 * the ones `next.config.ts` lets `next/image` optimize, and an unmatched host
 * would throw at render time rather than degrade.
 */
export function getTripImages(trip: Trip | null): string[] {
  return [trip?.hero_image_url, ...(trip?.banner_urls ?? [])].filter(
    (url): url is string => Boolean(url) && (url!.startsWith("https://") || url!.startsWith("/")),
  );
}

/** A trip is bookable only while it's upcoming AND still accepting registrations. */
export function isUpcomingTrip(trip: Trip): boolean {
  return trip.status === "upcoming" && trip.accepting_registrations !== false;
}

// Undated trips sort behind every dated one instead of jumping to the front on
// an `undefined` comparison.
function tripStartTime(trip: Trip): number {
  const time = trip.start_date ? Date.parse(trip.start_date) : Number.NaN;
  return Number.isNaN(time) ? Number.POSITIVE_INFINITY : time;
}

// Rewaq translates a trip's own title and description per locale, falling back
// to the record's default language for the ones it has no translation of — so
// every trip request that feeds visible copy passes the active locale. The nav
// only needs ulids and titles and calls these without one.
function tripHeaders(locale?: string): HeadersInit {
  return locale ? { Accept: "application/json", "Accept-Language": locale } : { Accept: "application/json" };
}

// The list endpoint answers with `access-control-allow-origin: *`, so the same
// function works from a server component and from the client (the nav) — hence
// the public env var first, with the server-only one and the dev host as
// fallbacks (only NEXT_PUBLIC_* is inlined into client bundles).
export async function getTrips(locale?: string): Promise<Trip[]> {
  const response = await fetch(`${rewaqApiUrl()}/api/trips`, {
    headers: tripHeaders(locale),
  });

  if (!response.ok) return [];

  const payload = (await response.json()) as { data?: Trip[] } | Trip[];
  return Array.isArray(payload) ? payload : (payload.data ?? []);
}

/**
 * The trip the standalone /bosnia-tour page illustrates itself with: the
 * soonest bookable one. Rewaq returns the list in no guaranteed order, so it's
 * sorted by start date here. `null` when nothing is bookable — the page then
 * keeps its built-in photos.
 */
export async function getNextUpcomingTrip(locale?: string): Promise<Trip | null> {
  const upcoming = (await getTrips(locale)).filter(isUpcomingTrip);

  return upcoming.sort((a, b) => tripStartTime(a) - tripStartTime(b))[0] ?? null;
}

export async function getTrip(ulid: string, locale?: string): Promise<Trip | null> {
  const response = await fetch(`${rewaqApiUrl()}/api/trips/${encodeURIComponent(ulid)}`, {
    headers: tripHeaders(locale),
  });

  if (!response.ok) return null;

  const payload = (await response.json()) as { data?: Trip } | Trip | null;
  if (!payload) return null;
  const trip = "data" in payload && payload.data ? payload.data : (payload as Trip);
  return trip.ulid ? trip : null;
}
