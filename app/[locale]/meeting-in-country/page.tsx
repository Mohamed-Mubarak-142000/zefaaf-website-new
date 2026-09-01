import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import {
  getMeetingCopy,
  MeetingInCountryBenefits,
  MeetingInCountryHero,
  MeetingInCountryHow,
  MeetingInCountryUnique,
  MeetingInCountryWhy,
} from "@/widgets/meeting-in-country";
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
    title: t("servicesMenu.meetingInCountry"),
    description: getMeetingCopy(locale).hero.paragraphs[0],
    pathname: "/meeting-in-country",
  });
}

export default function MeetingInCountryPage() {
  return (
    <>
      <Header />
      <main>
        <MeetingInCountryHero />
        <MeetingInCountryWhy />
        <MeetingInCountryUnique />
        <MeetingInCountryBenefits />
        <MeetingInCountryHow />
      </main>
      <Footer />
    </>
  );
}
