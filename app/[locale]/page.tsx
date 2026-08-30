import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Footer } from "@/widgets/footer";
import { Services } from "@/widgets/services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}
