import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { VipTermsContent, VipTermsHero } from "@/widgets/legal/vip-terms";
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
  const t = await getTranslations({ locale, namespace: "vipTerms" });

  return buildMetadata({
    locale: locale as Locale,
    title: `${t("eyebrow")} — ${t("serviceTitle")}`,
    description: t("intro"),
    pathname: "/vip-terms",
  });
}

export default function VipTermsPage() {
  return (
    <>
      <Header />
      <main>
        <VipTermsHero />
        <VipTermsContent />
      </main>
      <Footer />
    </>
  );
}
