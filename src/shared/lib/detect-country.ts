const TIMEZONE_COUNTRIES: Record<string, string> = {
  "Africa/Cairo": "EG",
  "Asia/Riyadh": "SA",
  "Asia/Dubai": "AE",
  "Asia/Kuwait": "KW",
  "Asia/Qatar": "QA",
  "Asia/Bahrain": "BH",
  "Asia/Muscat": "OM",
  "Europe/Amsterdam": "NL",
};

export function detectCountryFromDevice(): string | null {
  const locale = navigator.languages?.[0] ?? navigator.language;
  const region = locale.match(/[-_]([A-Za-z]{2})\b/)?.[1];
  if (region) return region.toUpperCase();
  return TIMEZONE_COUNTRIES[Intl.DateTimeFormat().resolvedOptions().timeZone] ?? null;
}

export type DetectedLocation = {
  countryCode: string | null;
  region: string | null;
  city: string | null;
};

export async function detectLocationFromCoordinates(latitude: number, longitude: number, locale = "en"): Promise<DetectedLocation | null> {
  try {
    const url = new URL("https://api.bigdatacloud.net/data/reverse-geocode-client");
    url.searchParams.set("latitude", String(latitude));
    url.searchParams.set("longitude", String(longitude));
    url.searchParams.set("localityLanguage", locale);
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json() as {
      countryCode?: string;
      principalSubdivision?: string;
      locality?: string;
      city?: string;
    };
    return {
      countryCode: data.countryCode?.toUpperCase() ?? null,
      region: data.principalSubdivision?.trim() || null,
      city: data.city?.trim() || data.locality?.trim() || null,
    };
  } catch {
    return null;
  }
}

export async function detectCountryFromCoordinates(latitude: number, longitude: number): Promise<string | null> {
  return (await detectLocationFromCoordinates(latitude, longitude))?.countryCode ?? null;
}
