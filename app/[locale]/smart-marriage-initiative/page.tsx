import type { Metadata } from "next";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import {
  getSmartMarriageCopy,
  SmartMarriageInitiativeBanner,
  SmartMarriageInitiativeCharter,
  SmartMarriageInitiativeCompanion,
  SmartMarriageInitiativeFoundation,
  SmartMarriageInitiativeHero,
  SmartMarriageInitiativeIntro,
  SmartMarriageInitiativeMessages,
  SmartMarriageInitiativeNav,
  SmartMarriageInitiativeWhy,
} from "@/widgets/smart-marriage-initiative";
import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getSmartMarriageCopy(locale);

  return buildMetadata({
    locale: locale as Locale,
    title: copy.hero.title,
    description: copy.hero.description,
    pathname: "/smart-marriage-initiative",
  });
}

export default function SmartMarriageInitiativePage() {
  return (
    <>
      <Header />
      <main>
        <SmartMarriageInitiativeHero />
        <SmartMarriageInitiativeNav />
        <SmartMarriageInitiativeIntro />
        <SmartMarriageInitiativeWhy />
        <SmartMarriageInitiativeBanner />
        <SmartMarriageInitiativeFoundation />
        <SmartMarriageInitiativeMessages />
        <SmartMarriageInitiativeCharter />
        <SmartMarriageInitiativeCompanion />
      </main>
      <Footer />
    </>
  );
}
