import type { MetadataRoute } from "next";

import { siteConfig } from "@/shared/config/site";
import { locales } from "@/shared/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteConfig.url}/${locale}`]),
  );

  // One entry per locale for now — as real pages are added, generate one
  // sitemap entry per (locale, path) pair instead of just the homepage.
  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    alternates: { languages },
  }));
}
