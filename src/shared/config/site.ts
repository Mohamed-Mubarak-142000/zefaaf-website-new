export const siteConfig = {
  name: "Zefaaf",
  // Set NEXT_PUBLIC_SITE_URL to the real production domain when it exists —
  // this drives canonical URLs, hreflang alternates, the sitemap, and OG tags.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zefaaf-website-new.vercel.app",
} as const;
