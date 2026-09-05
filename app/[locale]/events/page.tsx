import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { EventsBanner, EventsHeader, EventsList, getEventsCopy } from "@/widgets/events";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";
import { getPublicEvents } from "@/shared/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("servicesMenu.zefaafEvents"),
    description: getEventsCopy(locale).banner.description,
    pathname: "/events",
  });
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const events = await getPublicEvents(locale).catch(() => []);
  return (
    <>
      <Header />
      <main>
        <EventsHeader />
        <EventsBanner />
        <EventsList initialEvents={events} />
      </main>
      <Footer />
    </>
  );
}
