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
import { getTrip } from "@/shared/api";
import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tripUlid: string }>;
}): Promise<Metadata> {
  const { locale, tripUlid } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  // Rewaq answers an unknown ulid with a 5xx rather than a 404, so a failed
  // lookup can't be told apart from an outage — it falls back to the nav label
  // instead of turning the page into a not-found.
  const trip = await getTrip(tripUlid, locale).catch(() => null);

  return buildMetadata({
    locale: locale as Locale,
    title: trip?.main_title ?? t("servicesMenu.travels"),
    description: trip?.main_description ?? getBosniaCopy(locale).hero.description,
    pathname: `/travels/${tripUlid}`,
  });
}

// Same UI as /bosnia-tour, only under a per-trip URL. Everything Rewaq holds
// about the trip is this page's content: the hero (headline, description,
// facts, photos), the destination write-up with its goal, and the reasons to
// join — plus its ulid, which points the "book your seat" CTAs at this trip on
// Rewaq (/{locale}/travel-details/{ulid}). The remaining sections are the
// programme's own translated copy, which a failed lookup falls back to
// throughout.
export default async function TripPage({
  params,
}: {
  params: Promise<{ locale: string; tripUlid: string }>;
}) {
  const { locale, tripUlid } = await params;
  const trip = await getTrip(tripUlid, locale).catch(() => null);

  return (
    <>
      <Header />
      <main>
        <BosniaTourHero tripUlid={tripUlid} trip={trip} />
        <BosniaTourDestination tripUlid={tripUlid} trip={trip} />
        <BosniaTourHelp />
        <BosniaTourCompanion />
        <BosniaTourWhy trip={trip} />
      </main>
      <Footer />
    </>
  );
}
