import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui/button";

import { HeroCollage } from "./hero-collage";

const STATS = ["happyClients", "successStories", "registeredMembers"] as const;

// DOM order follows RTL reading order (right → left): text content first,
// then the photo collage — the ambient `dir="rtl"` on <html> for Arabic
// locales renders this as text-right / collage-left, matching the Figma
// design, and mirrors correctly for LTR locales. Figma's own export wrapped
// this content in a rotate-180 + -scale-y-100 trick per child (an artifact
// of how its auto-layout reversed itself), which is dropped here in favor of
// plain top-to-bottom flow in natural reading order.
export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative mx-auto flex max-w-[1800px] flex-col-reverse items-center gap-(--space-fluid-lg) overflow-x-clip px-(--space-fluid-container) py-(--space-fluid-lg) lg:flex-row lg:justify-between">
      <div className="flex max-w-md translate-y-0 flex-col items-center gap-(--space-fluid-md) text-center lg:shrink-0 lg:-translate-y-36 lg:items-start lg:text-start">
        <h1 className="font-almarai text-(length:--text-fluid-hero) leading-[1.4] font-bold whitespace-pre-line text-foreground">
          {t("hero.title")}
        </h1>
        <p className="font-almarai text-(length:--text-fluid-lg) leading-[1.6] whitespace-pre-line text-foreground/72">
          {t("hero.subtitle")}
        </p>
        <Button
          icon={<img src="/icons/plus.svg" alt="" className="size-(--size-fluid-icon-sm)" />}
          iconPosition="end"
          className="font-alexandria"
        >
          {t("hero.cta")}
        </Button>

        <div className="mt-8 flex items-center gap-(--space-fluid-lg)">
          {STATS.map((key, i) => (
            <div key={key} className="flex items-center gap-(--space-fluid-lg)">
              {i > 0 && <span className="h-8 w-px bg-border" aria-hidden="true" />}
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-alexandria text-(length:--text-fluid-xl) font-bold whitespace-nowrap text-brand">
                  {t(`stats.${key}.value`)}
                </span>
                <span className="font-alexandria text-(length:--text-fluid-nav) whitespace-nowrap text-muted-foreground">
                  {t(`stats.${key}.label`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="-mx-(--space-fluid-container) flex w-full translate-y-0 justify-center lg:mx-0 lg:w-auto lg:-translate-y-10 lg:ms-[calc(var(--space-fluid-sm)*-13)] lg:-me-(--space-fluid-container) lg:justify-end">
        <HeroCollage />
      </div>
    </section>
  );
}
