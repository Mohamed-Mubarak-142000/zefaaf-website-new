import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import {
  AboutFeatures,
  AboutGateway,
  AboutHero,
  AboutIntro,
  AboutPolicy,
  AboutStats,
  AboutTestimonial,
  getAboutCopy,
} from "@/widgets/about";
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

  return buildMetadata({
    locale: locale as Locale,
    title: t("about"),
    description: getAboutCopy(locale).hero.description,
    pathname: "/about",
  });
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutPolicy />
        <AboutGateway />
        <AboutFeatures />
        <AboutStats />
        <AboutTestimonial />
      </main>
      <Footer />
    </>
  );
}
