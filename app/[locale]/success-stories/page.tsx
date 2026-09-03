import type { Metadata } from "next";

import {
  getSuccessStoriesCopy,
  SuccessStoriesClients,
  SuccessStoriesCta,
  SuccessStoriesGallery,
  SuccessStoriesHero,
  SuccessStoriesJourney,
  SuccessStoriesQuote,
} from "@/widgets/success-stories";
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
  const copy = getSuccessStoriesCopy(locale);

  return buildMetadata({
    locale: locale as Locale,
    title: copy.hero.eyebrow,
    description: copy.hero.title,
    pathname: "/success-stories",
  });
}

export default function SuccessStoriesPage() {
  return (
    <>
      <Header />
      <main>
        <SuccessStoriesHero />
        <SuccessStoriesGallery />
        <SuccessStoriesJourney />
        <SuccessStoriesClients />
        <SuccessStoriesQuote />
        <SuccessStoriesCta />
      </main>
      <Footer />
    </>
  );
}
