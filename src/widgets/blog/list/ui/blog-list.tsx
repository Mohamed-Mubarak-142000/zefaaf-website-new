"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/utils";

import { BlogCard, type BlogArticle } from "./blog-card";

const TOPIC_KEYS = ["all", "qualities", "relationships", "health", "choosing"] as const;

export function BlogList({ apiArticles }: { apiArticles?: BlogArticle[] }) {
  const t = useTranslations("blog.list");
  const translatedArticles = t.raw("articles") as BlogArticle[];
  const articles = apiArticles?.length ? apiArticles : translatedArticles;

  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState<(typeof TOPIC_KEYS)[number]>("all");

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return articles;
    return articles.filter((article) => article.title.toLowerCase().includes(query));
  }, [articles, search]);

  const firstRow = filteredArticles.slice(0, 2);
  const secondRow = filteredArticles.slice(2);

  return (
    <section
      aria-labelledby="blog-list-title"
      className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
    >
      <div className="flex flex-col items-start justify-between gap-(--space-fluid-sm) md:flex-row md:items-center">
        <h2
          id="blog-list-title"
          className="font-alexandria text-[clamp(24px,2.2vw,36px)] leading-[1.4] font-semibold text-foreground"
        >
          {t("title")}
        </h2>
        <p className="max-w-[460px] font-alexandria text-(length:--text-fluid-lg) leading-[1.6] text-grey-primary">
          {t("description")}
        </p>
      </div>

      <div className="mt-(--space-fluid-lg) flex flex-nowrap items-center gap-(--space-fluid-xs) overflow-x-auto pb-1">
        <label className="flex w-[min(32vw,424px)] min-w-[260px] shrink-0 items-center gap-(--space-fluid-xs) rounded-[9px] bg-stroke-2 px-(--space-fluid-sm) py-(--space-fluid-2xs)">
          <img src="/icons/search-01.svg" alt="" className="size-(--size-fluid-icon-xs) shrink-0 rtl:scale-x-[-1]" />
          <span className="sr-only">{t("searchPlaceholder")}</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full bg-transparent font-alexandria text-[clamp(12px,0.85vw,14px)] text-foreground placeholder:text-grey-primary/70 focus:outline-none"
          />
        </label>

        {TOPIC_KEYS.map((key) => {
          const isActive = key === activeTopic;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTopic(key)}
              aria-pressed={isActive}
              className={cn(
                "shrink-0 rounded-[9px] border px-(--space-fluid-sm) py-(--space-fluid-2xs) font-alexandria text-[clamp(12px,0.85vw,14px)] font-semibold whitespace-nowrap transition-colors",
                isActive
                  ? "border-brand text-brand"
                  : "border-border text-grey-primary hover:border-brand/50 hover:text-brand",
              )}
            >
              {t(`topics.${key}`)}
            </button>
          );
        })}
      </div>

      <div className="mt-(--space-fluid-lg) flex flex-col gap-(--space-fluid-md)">
        {firstRow.length > 0 && (
          <div className="grid grid-cols-1 items-stretch gap-(--space-fluid-md) lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            {firstRow.map((article, index) => (
              <BlogCard key={`${article.title}-${index}`} article={article} />
            ))}
          </div>
        )}

        {secondRow.length > 0 && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-(--space-fluid-md)">
            {secondRow.map((article, index) => (
              <BlogCard key={`${article.title}-${index}`} article={{ ...article, wide: false }} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
