import { useTranslations } from "next-intl";
import Image from "next/image";

export function FeaturedArticle() {
  const t = useTranslations("blog.featured");

  return (
    <section
      aria-labelledby="featured-article-title"
      className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
    >
      <div className="relative flex flex-col items-stretch gap-(--space-fluid-md) lg:flex-row lg:items-start">
        {/* Decorative confetti flourish (same asset as the hero collage's,
            reused at a different spot per Figma) peeking from behind the
            image's bottom-start corner — desktop only, purely decorative. */}
        <img
          src="/images/blog/confetti.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-(--space-fluid-lg) -start-(--space-fluid-lg) z-0 hidden w-[min(28vw,340px)] opacity-70 lg:block"
        />

        <div className="relative z-10 aspect-video w-full shrink-0 overflow-hidden rounded-[9px] lg:aspect-27/16 lg:w-[54%]">
          <Image
            src="/images/blog/featured-banner.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#091b33] to-transparent" />
        </div>

        <div className="flex w-full flex-col items-start gap-(--space-fluid-sm) py-0 lg:w-[46%] lg:py-(--space-fluid-lg)">
          <span className="rounded-xl bg-[#202022] px-(--space-fluid-xs) py-1.5 font-alexandria text-(length:--text-fluid-nav) text-white">
            {t("date")}
          </span>

          <h2
            id="featured-article-title"
            className="font-alexandria text-[clamp(24px,2.2vw,36px)] leading-[1.4] font-semibold text-foreground"
          >
            {t("title")}
          </h2>

          <p className="font-alexandria text-(length:--text-fluid-lg) leading-[1.6] text-grey-primary">
            {t("description")}
          </p>

          <a
            href="#"
            className="mt-(--space-fluid-2xs) flex items-center gap-(--space-fluid-3xs) rounded-lg bg-brand px-(--space-fluid-sm) py-(--space-fluid-2xs) font-alexandria text-(length:--text-fluid-nav) text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <span>{t("cta")}</span>
            <img
              src="/icons/arrow-right-white.svg"
              alt=""
              className="size-(--size-fluid-icon-xs) rtl:rotate-180"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
