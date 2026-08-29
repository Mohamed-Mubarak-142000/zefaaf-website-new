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
        <section className="section-gap mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("hero.subtitle")}
          </p>
          <Button asChild className="mt-8">
            <Link href="#contact">{t("hero.cta")}</Link>
          </Button>
        </section>

        <section id="services" className="section-gap mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-semibold">
            {t("services.title")}
          </h2>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            {t("services.subtitle")}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-gap mx-auto max-w-5xl px-4">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
