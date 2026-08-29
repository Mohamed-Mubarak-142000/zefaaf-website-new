import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui/button";

import { HeroCollage } from "./hero-collage";

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
    <section className="section-gap mx-auto flex max-w-[1800px] flex-col-reverse items-center gap-(--space-fluid-xl) px-(--space-fluid-container) lg:flex-row lg:justify-between">
      <div className="flex max-w-xl flex-col items-center gap-(--space-fluid-md) text-center lg:items-start lg:text-start">
        <h1 className="font-almarai text-(length:--text-fluid-hero) leading-[1.4] font-bold text-foreground">
          {t("hero.title")}
        </h1>
        <p className="font-almarai text-(length:--text-fluid-xl) leading-[1.6] text-foreground/72">
          {t("hero.subtitle")}
        </p>
        <Button
          icon={<img src="/icons/plus.svg" alt="" className="size-(--size-fluid-icon-sm)" />}
          className="font-alexandria"
        >
          {t("hero.cta")}
        </Button>
      </div>

      <HeroCollage />
    </section>
  );
}
