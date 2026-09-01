import { useTranslations } from "next-intl";

import { ContactHeroCollage } from "./contact-hero-collage";

export function ContactHero() {
  const t = useTranslations("contactUs.hero");

  return (
    <section className="mx-auto flex w-full max-w-[1600px] flex-col-reverse items-center gap-(--space-fluid-lg) px-(--space-fluid-container) pt-(--space-fluid-lg) lg:flex-row lg:items-center lg:justify-between lg:gap-(--space-fluid-xl)">
      <div className="flex max-w-[650px] flex-col items-start gap-(--space-fluid-sm) text-center lg:text-start">
        <p className="font-alexandria text-(length:--text-fluid-lg) font-bold text-brand">
          {t("eyebrow")}
        </p>
        <h1 className="font-alexandria text-[clamp(28px,3.3vw,36px)] leading-[1.3] font-bold text-black-primary">
          {t("title")}
        </h1>
        <p className="font-alexandria text-(length:--text-fluid-lg) leading-[1.6] text-black-primary/80">
          {t("description")}
        </p>
      </div>

      <ContactHeroCollage />
    </section>
  );
}
