import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import {
  getVipCopy,
  VipAdvantages,
  VipDetails,
  VipEurope,
  VipHero,
  VipIntro,
} from "@/widgets/vip";
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
  // exists where the VIP copy does, and falls back to English elsewhere.
  return buildMetadata({
    locale: locale as Locale,
    title: t("vipSearch"),
    description: getVipCopy(locale).hero.description,
    pathname: "/vip",
  });
}

export default function VipPage() {
  return (
    <>
      <Header compact />
      <main>
        <VipHero />
        <VipIntro />
        <VipDetails />
        <VipAdvantages />
        <VipEurope />
      </main>
      <Footer />
    </>
  );
}
