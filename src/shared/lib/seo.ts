import type { Metadata } from "next";

import { siteConfig } from "@/shared/config/site";
import { defaultLocale, locales, type Locale } from "@/shared/i18n/config";

/**
 * hreflang alternates for every locale this site supports, plus x-default
 * pointing at the default locale — so search engines can offer users the
 * right language version of a page instead of indexing 33 copies as one.
 */
function buildLanguageAlternates(pathname: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${siteConfig.url}/${locale}${pathname}`;
  }
  languages["x-default"] = `${siteConfig.url}/${defaultLocale}${pathname}`;
  return languages;
}

/**
 * Builds a consistent Metadata object (canonical URL, hreflang alternates,
 * OpenGraph, Twitter card) for a single page in a single locale. Every page's
 * `generateMetadata` should go through this rather than hand-rolling its own,
 * so new pages get correct SEO by construction instead of by remembering to
 * copy it.
 *
 * @param pathname - the locale-less path, e.g. "" for the homepage or "/about".
 */
export function buildMetadata({
  locale,
  title,
  description,
  pathname = "",
}: {
  locale: Locale;
  title: string;
  description: string;
  pathname?: string;
}): Metadata {
  const url = `${siteConfig.url}/${locale}${pathname}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(pathname),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
