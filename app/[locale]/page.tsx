import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Footer } from "@/widgets/footer";
import { GlobalPresence } from "@/widgets/global-presence";
import { Services } from "@/widgets/services";
import { Testimonials } from "@/widgets/testimonials";
import { UpcomingEvents } from "@/widgets/upcoming-events";
import { WhyChooseZefaaf } from "@/widgets/why-choose-zefaaf";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <GlobalPresence />
        <UpcomingEvents />
        <WhyChooseZefaaf />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
