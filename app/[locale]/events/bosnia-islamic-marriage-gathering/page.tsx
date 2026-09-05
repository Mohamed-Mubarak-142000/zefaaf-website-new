import type { Metadata } from "next";

import { EventDetailsHero, EventFiguresGrid, getEventDetailsCopy } from "@/widgets/event-pages/event-details";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";
import { getPublicEvent, getPublicEvents } from "@/shared/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getEventDetailsCopy(locale);

  return buildMetadata({
    locale: locale as Locale,
    title: copy.titleLine1,
    description: copy.description,
    pathname: "/events/bosnia-islamic-marriage-gathering",
  });
}

export default async function EventDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ event?: string }>;
}) {
  const { locale } = await params;
  const { event: eventUlid } = await searchParams;
  const event = eventUlid
    ? await getPublicEvent(eventUlid, locale).catch(() => null)
    : await getPublicEvents(locale)
        .then((events) => events.find((item) => /bosnia|البوسنة/i.test(item.name)) ?? events[0] ?? null)
        .catch(() => null);
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
