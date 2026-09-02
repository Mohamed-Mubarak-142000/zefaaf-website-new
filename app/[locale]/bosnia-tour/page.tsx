import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import {
  BosniaTourCompanion,
  BosniaTourDestination,
  BosniaTourHelp,
  BosniaTourHero,
  BosniaTourWhy,
  getBosniaCopy,
} from "@/widgets/event-pages/bosnia-tour";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });

  // The nav label is translated in all 33 locales; the longer description only
  // exists where this page's copy does, and falls back to English elsewhere.
  return buildMetadata({
    locale: locale as Locale,
    title: t("servicesMenu.bosniaTour"),
    description: getBosniaCopy(locale).hero.description,
    pathname: "/bosnia-tour",
  });
}

export default function BosniaTourPage() {
  return (
    <>
      <Header />
      <main>
        <BosniaTourHero />
        <BosniaTourDestination />
        <BosniaTourHelp />
        <BosniaTourCompanion />
        <BosniaTourWhy />
      </main>
      <Footer />
    </>
  );
}
