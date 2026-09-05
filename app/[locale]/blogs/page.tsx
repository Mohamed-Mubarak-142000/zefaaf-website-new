import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { buildMetadata } from "@/shared/lib/seo";
import type { Locale } from "@/shared/i18n";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { BlogHero } from "@/widgets/blog/hero";
import { FeaturedArticle } from "@/widgets/blog/featured-article";
import { BlogList } from "@/widgets/blog/list";
import { fetchSeoBlogs } from "@/shared/api";

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

export default async function BlogsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const blogs = await fetchSeoBlogs(locale);
  const apiArticles = blogs.map((blog, index) => ({
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.description ?? "",
    image: blog.featuredImage ?? "/images/blog/featured-banner.png",
    wide: index === 1,
  }));

  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <FeaturedArticle />
        <BlogList apiArticles={apiArticles} />
      </main>
      <Footer />
    </>
  );
}
