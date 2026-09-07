export type SeoBlog = {
  id: number | string;
  slug: string;
  title: string;
  description?: string;
  content?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  publishedAt?: string;
  createdAt?: string;
};

const SEO_API = process.env.NEXT_PUBLIC_SEO_API_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://seo.zefaafapi.com/api/v1/public"
    : "https://seo.dev.zefaafapi.com/api/v1/public");

const API_LANGUAGE_MAP: Record<string, string> = {
  bn: "bd", hi: "in", ta: "in", kk: "kz", sq: "al", ms: "my", sw: "ke",
};

function apiLanguage(locale: string) {
  return API_LANGUAGE_MAP[locale] ?? locale;
}

function extractBlogs(payload: unknown): SeoBlog[] {
  const value = payload && typeof payload === "object" ? (payload as { data?: unknown }).data : undefined;
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    for (const key of ["blogs", "items", "results"]) if (Array.isArray(record[key])) return record[key] as SeoBlog[];
  }
  return [];
}

export async function fetchSeoLanguages(): Promise<Array<{ code: string; name: string }>> {
  const response = await fetch(`${SEO_API}/languages`, { headers: { Accept: "application/json" }, next: { revalidate: 3600 } });
  if (!response.ok) return [];
  const payload = await response.json();
  return Array.isArray(payload?.data) ? payload.data : [];
}

// Tries each language in turn — a non-ok response or an empty list for one
// language is normal (that translation may simply not exist yet), so it
// falls through to the next language rather than failing. Only when EVERY
// attempt throws (the service itself is unreachable) does this throw, so
// callers can tell "genuinely no blogs" from "we couldn't ask at all".
export async function fetchSeoBlogs(locale: string): Promise<SeoBlog[]> {
  const languages = [...new Set([apiLanguage(locale), "en", "ar"])];
  let reachedService = false;
  for (const lang of languages) {
    try {
      const url = new URL(`${SEO_API}/blogs`);
      url.searchParams.set("page", "1");
      url.searchParams.set("limit", "10");
      url.searchParams.set("lang", lang);
      const response = await fetch(url, { headers: { Accept: "application/json" }, next: { revalidate: 60 } });
      reachedService = true;
      if (!response.ok) continue;
      const blogs = extractBlogs(await response.json());
      if (blogs.length) return blogs;
    } catch {}
  }
  if (!reachedService) throw new Error("Could not reach the blog service.");
  return [];
}

// Same "try next language, only throw if the service was never reached"
// approach as fetchSeoBlogs above.
export async function fetchSeoBlog(slug: string, locale: string): Promise<SeoBlog | null> {
  const languages: Array<string | null> = [apiLanguage(locale), null, "ar"];
  let reachedService = false;
  for (const lang of languages) {
    try {
      const url = new URL(`${SEO_API}/blogs/${encodeURIComponent(slug)}`);
      if (lang) url.searchParams.set("lang", lang);
      const response = await fetch(url, { headers: { Accept: "application/json" }, next: { revalidate: 60 } });
      reachedService = true;
      if (!response.ok) continue;
      const payload = await response.json();
      const blog = payload?.data?.blog ?? payload?.data;
      if (blog?.id) return blog;
    } catch {}
  }
  if (!reachedService) throw new Error("Could not reach the blog service.");
  return null;
}
