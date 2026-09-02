import type { Metadata } from "next";

import { EventDetailsHero, EventFiguresGrid, getEventDetailsCopy } from "@/widgets/event-pages/event-details";
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
  const copy = getEventDetailsCopy(locale);

  return buildMetadata({
    locale: locale as Locale,
    title: copy.titleLine1,
    description: copy.description,
    pathname: "/events/bosnia-islamic-marriage-gathering",
  });
}

export default function EventDetailsPage() {
  return (
    <>
      <Header />
      <main>
        <EventDetailsHero />
        <EventFiguresGrid />
      </main>
      <Footer />
    </>
  );
}
