import { useTranslations } from "next-intl";

import { ContactForm } from "@/features/contact-form";
import { services, ServiceCard } from "@/entities/service";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Button } from "@/shared/ui/button";
import { Link } from "@/shared/i18n";

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Header />

      <main>
        <section className="section-gap mx-auto max-w-5xl px-(--space-fluid-container) text-center">
          <h1 className="text-(length:--text-fluid-hero) font-bold tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("hero.subtitle")}
          </p>
          <Button asChild className="mt-8">
            <Link href="#contact">{t("hero.cta")}</Link>
          </Button>
        </section>

        <section id="services" className="section-gap mx-auto max-w-5xl px-(--space-fluid-container)">
          <h2 className="text-center text-2xl font-semibold">
            {t("services.title")}
          </h2>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            {t("services.subtitle")}
          </p>

          {/* auto-fit/minmax instead of sm:/lg: column-count breakpoints —
              the number of columns follows the available width continuously,
              collapsing to fewer/wider cards as the viewport shrinks. */}
          <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-(--space-fluid-md)">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-gap mx-auto max-w-5xl px-(--space-fluid-container)">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
