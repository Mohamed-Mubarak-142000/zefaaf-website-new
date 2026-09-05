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
  try {
    const response = await fetch(`${SEO_API}/languages`, { headers: { Accept: "application/json" }, next: { revalidate: 3600 } });
    if (!response.ok) return [];
    const payload = await response.json();
    return Array.isArray(payload?.data) ? payload.data : [];
  } catch { return []; }
}

export async function fetchSeoBlogs(locale: string): Promise<SeoBlog[]> {
  const languages = [...new Set([apiLanguage(locale), "en", "ar"])];
  for (const lang of languages) {
    try {
      const url = new URL(`${SEO_API}/blogs`);
      url.searchParams.set("page", "1");
      url.searchParams.set("limit", "50");
      url.searchParams.set("sortBy", "publishedAt");
      url.searchParams.set("sortOrder", "desc");
      url.searchParams.set("lang", lang);
      const response = await fetch(url, { headers: { Accept: "application/json" }, next: { revalidate: 60 } });
      if (!response.ok) continue;
      const blogs = extractBlogs(await response.json());
      if (blogs.length) return blogs;
    } catch {}
  }
  return [];
}

export async function fetchSeoBlog(slug: string, locale: string): Promise<SeoBlog | null> {
  const languages: Array<string | null> = [apiLanguage(locale), null, "ar"];
  for (const lang of languages) {
    try {
      const url = new URL(`${SEO_API}/blogs/${encodeURIComponent(slug)}`);
      if (lang) url.searchParams.set("lang", lang);
      const response = await fetch(url, { headers: { Accept: "application/json" }, next: { revalidate: 60 } });
      if (!response.ok) continue;
      const payload = await response.json();
      const blog = payload?.data?.blog ?? payload?.data;
      if (blog?.id) return blog;
    } catch {}
  }
  return null;
}
