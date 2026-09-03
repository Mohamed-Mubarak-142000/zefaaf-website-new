import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BlogHero } from "@/widgets/blog/hero";
import { FeaturedArticle } from "@/widgets/blog/featured-article";
import { BlogList } from "@/widgets/blog/list";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("list.title"),
    description: t("list.description"),
    pathname: "/blogs",
  });
}

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <FeaturedArticle />
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
