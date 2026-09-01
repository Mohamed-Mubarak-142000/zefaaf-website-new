import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { PrivacyContent, PrivacyHero, getPrivacyCopy } from "@/widgets/legal/privacy";
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
  const t = await getTranslations({ locale, namespace: "footer" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("columns.legal.links.privacy"),
    description: getPrivacyCopy(locale).meta.tagline,
    pathname: "/privacy",
  });
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyHero />
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}
