import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Alexandria, Almarai, Cairo, Geist } from "next/font/google";
import { notFound } from "next/navigation";

import { AppProviders } from "@/app";
import { SmartMarriagePaymentReturn } from "@/features/payment-status";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/utils";
import { buildMetadata } from "@/shared/lib/seo";
import { getDirection, routing, type Locale } from "@/shared/i18n";

import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
// Navbar typography from the Figma design: Alexandria for links/buttons, Almarai (bold) for the language label.
const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-alexandria",
});
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-almarai",
});
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["500", "700"],
  variable: "--font-cairo",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  const metadata = buildMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("description"),
  });

  // Lets any future page set a short title (e.g. "About") via its own
  // generateMetadata and get "About — Zefaaf" automatically, instead of
  // every page needing to repeat the site name.
  return {
    ...metadata,
    title: { default: t("title"), template: `%s — ${siteConfig.name}` },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={getDirection(locale as Locale)}
      className={cn(
        "font-sans",
        geist.variable,
        alexandria.variable,
        almarai.variable,
        cairo.variable,
      )}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider>
          <AppProviders>
            {children}
            <SmartMarriagePaymentReturn />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
