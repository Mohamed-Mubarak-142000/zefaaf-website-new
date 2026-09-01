import { useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/shared/i18n";

const BLOG_DETAILS_PATH = "/blogs/marriage-bosnian-woman";

export type BlogArticle = {
  title: string;
  excerpt: string;
  image: string;
  wide?: boolean;
};

export function BlogCard({ article }: { article: BlogArticle }) {
  const t = useTranslations("blog.list");

  if (article.wide) {
    return (
      <article className="flex flex-col items-stretch gap-(--space-fluid-md) rounded-[9px] bg-stroke-2 p-(--space-fluid-xs) sm:flex-row sm:items-center">
        <div className="relative aspect-16/9 w-full shrink-0 overflow-hidden rounded-[9px] sm:aspect-6/5 sm:w-[52%]">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="(min-width: 640px) 52vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-(--space-fluid-sm)">
          <h3 className="font-alexandria text-(length:--text-fluid-xl) leading-[1.4] font-semibold text-foreground">
            {article.title}
          </h3>
          <p className="font-alexandria text-(length:--text-fluid-nav) leading-[1.6] text-grey-primary">
            {article.excerpt}
          </p>
          <ViewMoreLink label={t("viewMore")} />
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col items-start gap-(--space-fluid-sm) rounded-[9px] bg-stroke-2 p-(--space-fluid-xs)">
      <div className="relative aspect-16/9 w-full shrink-0 overflow-hidden rounded-[9px]">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-start gap-(--space-fluid-xs)">
        <h3 className="font-alexandria text-(length:--text-fluid-lg) leading-[1.4] font-semibold text-foreground">
          {article.title}
        </h3>
        <p className="font-alexandria text-(length:--text-fluid-nav) leading-[1.6] text-grey-primary">
          {article.excerpt}
        </p>
        <ViewMoreLink label={t("viewMore")} />
      </div>
    </article>
  );
}

function ViewMoreLink({ label }: { label: string }) {
  return (
    <Link
      href={BLOG_DETAILS_PATH}
      className="flex items-center gap-(--space-fluid-3xs) font-almarai text-(length:--text-fluid-xs) text-foreground transition-opacity hover:opacity-70"
    >
      <span>{label}</span>
      <img
        src="/icons/arrow-right-02.svg"
        alt=""
        className="size-3.5 -rotate-90 rtl:rotate-90 dark:invert"
      />
    </Link>
  );
}
