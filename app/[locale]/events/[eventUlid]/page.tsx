import type { Metadata } from "next";
import { notFound } from "next/navigation";
import axios from "axios";

import { EventDetailsHero, EventFiguresGrid } from "@/widgets/event-pages/event-details";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { getPublicEvent } from "@/shared/api";
import type { PublicEvent } from "@/shared/api";
import type { Locale } from "@/shared/i18n";
import { buildMetadata } from "@/shared/lib/seo";
import { Alert } from "@/shared/ui/alert";

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
  const isArabic = locale === "ar";

  let event: PublicEvent | null = null;
  let failedToLoad = false;
  try {
    event = await getPublicEvent(eventUlid, locale);
  } catch (error) {
    // A clean 404 response means the event genuinely doesn't exist — keep the real not-found page.
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      notFound();
    }
    // Anything else (network error, timeout, 5xx) is a real fetch failure, not a missing event.
    failedToLoad = true;
  }

  // The request succeeded but returned no event — that's a genuine not-found, not a fetch failure.
  if (!failedToLoad && !event) notFound();

  return (
    <>
      <Header />
      <main>
        {failedToLoad && (
          <div className="mx-auto w-full max-w-[1600px] px-(--space-fluid-container) pt-(--space-fluid-xl)">
            <Alert>
              {isArabic
                ? "تعذر تحميل بيانات هذه الفعالية. حاول مرة أخرى لاحقًا."
                : "We couldn't load this event's details. Please try again later."}
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
