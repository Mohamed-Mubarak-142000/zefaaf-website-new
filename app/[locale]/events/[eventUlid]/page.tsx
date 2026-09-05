import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EventDetailsHero, EventFiguresGrid } from "@/widgets/event-pages/event-details";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { getPublicEvent } from "@/shared/api";
import type { Locale } from "@/shared/i18n";
import { buildMetadata } from "@/shared/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; eventUlid: string }> }): Promise<Metadata> {
  const { locale, eventUlid } = await params;
  const event = await getPublicEvent(eventUlid, locale).catch(() => null);
  return buildMetadata({
    locale: locale as Locale,
    title: event?.name ?? "Event",
    description: event?.description ?? "",
    pathname: `/events/${eventUlid}`,
  });
}

export default async function PublicEventPage({ params }: { params: Promise<{ locale: string; eventUlid: string }> }) {
  const { locale, eventUlid } = await params;
  const event = await getPublicEvent(eventUlid, locale).catch(() => null);
  if (!event) notFound();

  return (
    <>
      <Header />
      <main>
        <EventDetailsHero event={event} />
        <EventFiguresGrid event={event} />
      </main>
      <Footer />
    </>
  );
}
