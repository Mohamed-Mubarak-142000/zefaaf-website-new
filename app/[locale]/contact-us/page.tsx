import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ContactFaq, ContactForm, ContactHero, ContactMap } from "@/widgets/contact-us";
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
  const t = await getTranslations({ locale, namespace: "contactUs" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("hero.eyebrow"),
    description: t("hero.description"),
    pathname: "/contact-us",
  });
}

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactMap />
        <ContactFaq />
      </main>
      <Footer />
    </>
  );
}
