import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { BlogArticle } from "@/widgets/blog-article";
import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blogDetail" });

  return buildMetadata({
    locale: locale as Locale,
    title: t("title"),
    description: t("intro"),
    pathname: `/blogs/${slug}`,
  });
}

export default function BlogDetailsPage() {
  return (
    <>
      <Header />
      <main>
        <BlogArticle />
      </main>
      <Footer />
    </>
  );
}
