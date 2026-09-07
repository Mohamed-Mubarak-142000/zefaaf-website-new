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
import { getNextUpcomingTrip } from "@/shared/api";
import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";

// The trip list is the only request-time data here, and a new trip going live
// doesn't need to be visible within seconds — so the page stays prerendered and
// refreshes its photos every five minutes instead of hitting Rewaq per visit.
export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  // Same trip the hero shows, so the tab title matches the headline. A failed
  // lookup falls back to the nav label, which is translated in all 33 locales.
  const trip = await getNextUpcomingTrip(locale).catch(() => null);

  return buildMetadata({
    locale: locale as Locale,
    title: trip?.main_title ?? t("servicesMenu.bosniaTour"),
    description: trip?.main_description ?? getBosniaCopy(locale).hero.description,
    pathname: "/bosnia-tour",
  });
}

// Unlike /travels/{ulid}, this page isn't tied to one trip, so it follows
// whichever trip is next on Rewaq: the hero (headline, description, facts,
// photos), the destination write-up with its goal, and the reasons to join. A
// failed lookup, or a trip missing any of those, falls back to the translated
// copy and the built-in tour photos; the page never blocks on Rewaq.
export default async function BosniaTourPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const trip = await getNextUpcomingTrip(locale).catch(() => null);

  return (
    <>
      <Header />
      <main>
        <BosniaTourHero trip={trip} />
        <BosniaTourDestination trip={trip} />
        <BosniaTourHelp />
        <BosniaTourCompanion />
        <BosniaTourWhy trip={trip} />
      </main>
      <Footer />
    </>
  );
}
