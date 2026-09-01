import { useTranslations } from "next-intl";

import { BlogHeroCollage } from "./blog-hero-collage";

export function BlogHero() {
  const t = useTranslations("blog.hero");

  return (
    <section className="relative isolate z-0 mx-auto flex w-full max-w-[1800px] flex-col items-center gap-(--space-fluid-lg) overflow-x-clip px-(--space-fluid-container) pt-(--space-fluid-lg)">
      <BlogHeroCollage />

      <div className="flex max-w-[690px] flex-col items-center gap-(--space-fluid-sm) text-center">
        <h1 className="font-alexandria text-[clamp(28px,3.3vw,48px)] leading-[1.4] font-semibold text-foreground">
          {t("title")}
        </h1>
        <p className="font-alexandria text-(length:--text-fluid-lg) leading-[1.6] text-grey-primary">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
