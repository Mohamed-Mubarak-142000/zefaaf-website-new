import type { Metadata } from "next";
import axios from "axios";

import { EventDetailsHero, EventFiguresGrid, getEventDetailsCopy } from "@/widgets/event-pages/event-details";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";
import { getPublicEvent, getPublicEvents } from "@/shared/api";
import type { PublicEvent } from "@/shared/api";
import { Alert } from "@/shared/ui/alert";

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
  const isArabic = locale === "ar";

  let event: PublicEvent | null = null;
  let failedToLoad = false;

  if (eventUlid) {
    try {
      event = await getPublicEvent(eventUlid, locale);
    } catch (error) {
      // A clean 404 means there's genuinely no such event — this page has no notFound() of its
      // own, it just falls back to its default copy, so that's a legitimate empty state.
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        event = null;
      } else {
        // Anything else (network error, timeout, 5xx) is a real fetch failure.
        failedToLoad = true;
      }
    }
  } else {
    try {
      const events = await getPublicEvents(locale);
      event = events.find((item) => /bosnia|البوسنة/i.test(item.name)) ?? events[0] ?? null;
    } catch {
      failedToLoad = true;
    }
  }

  return (
    <>
      <Header />
      <main>
        {failedToLoad && (
          <div className="mx-auto w-full max-w-[1600px] px-(--space-fluid-container) pt-(--space-fluid-xl)">
            <Alert>
              {isArabic
                ? "تعذر تحميل بيانات الفعالية. حاول مرة أخرى لاحقًا."
                : "We couldn't load the event's details. Please try again later."}
            </Alert>
          </div>
        )}
        <EventDetailsHero event={event} />
        <EventFiguresGrid event={event} error={failedToLoad} />
      </main>
      <Footer />
    </>
  );
}
