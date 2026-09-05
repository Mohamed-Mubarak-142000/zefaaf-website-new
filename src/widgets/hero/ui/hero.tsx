import { useTranslations } from "next-intl";
import { Link } from "@/shared/i18n";

import { AnimatedStats } from "./animated-stats";
import { HeroCollage } from "./hero-collage";

const STATS = [
  { key: "happyClients", value: "366,484k" },
  { key: "successStories", value: "92,889" },
  { key: "registeredMembers", value: "3,688,292" },
] as const;

// DOM order follows RTL reading order (right → left): text content first,
// then the photo collage — the ambient `dir="rtl"` on <html> for Arabic
// locales renders this as text-right / collage-left, matching the Figma
// design, and mirrors correctly for LTR locales. Figma's own export wrapped
// this content in a rotate-180 + -scale-y-100 trick per child (an artifact
// of how its auto-layout reversed itself), which is dropped here in favor of
// plain top-to-bottom flow in natural reading order.
export function Hero() {
  const t = useTranslations();
  const stats = STATS.map(({ key, value }) => ({
    value,
    label: t(`stats.${key}.label`),
  }));

  return (
    <section className="relative mx-auto flex max-w-[1800px] flex-col-reverse items-center gap-(--space-fluid-lg) overflow-x-clip px-(--space-fluid-container) py-(--space-fluid-lg) lg:flex-row lg:justify-between">
      <div className="flex max-w-md translate-y-0 flex-col items-center gap-(--space-fluid-md) text-center lg:shrink-0 lg:-translate-y-36 lg:items-start lg:text-start">
        <h1 className="font-almarai text-(length:--text-fluid-hero) leading-[1.4] font-bold whitespace-pre-line text-foreground">
          {t("hero.title")}
        </h1>
        <p className="font-almarai text-(length:--text-fluid-lg) leading-[1.6] whitespace-pre-line text-foreground/72">
          {t("hero.subtitle")}
        </p>
        <Link
          href="/about"
          className="flex shrink-0 items-center gap-(--space-fluid-3xs) rounded-[8px] bg-brand px-(--space-fluid-sm) py-(--space-fluid-2xs) font-alexandria text-[12px] leading-[1.5] text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <span>{t("hero.cta")}</span>
          <img
            src="/icons/arrow-right-double.svg"
            alt=""
            className="size-(--size-fluid-icon-xs) rtl:rotate-180"
          />
        </Link>

        <AnimatedStats stats={stats} />
      </div>

      <div className="-mx-(--space-fluid-container) flex w-full -translate-y-4 justify-center lg:mx-0 lg:w-auto lg:-translate-y-14 lg:ms-[calc(var(--space-fluid-sm)*-13)] lg:-me-(--space-fluid-container) lg:justify-end lg:ltr:-translate-x-6 lg:rtl:translate-x-6">
        <HeroCollage />
      </div>
    </section>
  );
}
