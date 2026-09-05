import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { BlogArticle } from "@/widgets/blog/article";
import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";
import { fetchSeoBlog } from "@/shared/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blogDetail" });
  const blog = await fetchSeoBlog(slug, locale);

  return buildMetadata({
    locale: locale as Locale,
    title: blog?.metaTitle ?? blog?.title ?? t("title"),
    description: blog?.metaDescription ?? blog?.description ?? t("intro"),
    pathname: `/blogs/${slug}`,
  });
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const blog = await fetchSeoBlog(slug, locale);
  return (
    <>
      <Header />
      <main>
        <BlogArticle blog={blog} />
      </main>
      <Footer />
    </>
  );
}
