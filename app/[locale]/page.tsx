import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { DownloadApp } from "@/widgets/download-app";
import { Footer } from "@/widgets/footer";
import { GlobalPresence } from "@/widgets/global-presence";
import { InfluentialFigures } from "@/widgets/influential-figures";
import { Services } from "@/widgets/services";
import { Testimonials } from "@/widgets/testimonials";
import { UpcomingEvents } from "@/widgets/upcoming-events";
import { WhyChooseZefaaf } from "@/widgets/why-choose-zefaaf";
import { getPublicEvents } from "@/shared/api";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const events = await getPublicEvents(locale).catch(() => []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <GlobalPresence />
        <UpcomingEvents initialEvents={events} />
        <InfluentialFigures />
        <WhyChooseZefaaf />
        <Testimonials />
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
}
