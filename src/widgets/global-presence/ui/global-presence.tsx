"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { getDirection, type Locale } from "@/shared/i18n";

// Pin positions are literal % coordinates on the map SVG (see the `dir="ltr"`
// wrapper below) — independent of the current locale's country name.
const CONTINENT_POSITIONS = [
  { key: "france", position: "left-[20%] top-[34%]" },
  { key: "germany", position: "left-[35%] top-[73%]" },
  { key: "netherlands", position: "left-[49%] top-[24%]" },
  { key: "turkey", position: "left-[56%] top-[59%]" },
  { key: "russia", position: "left-[74%] top-[36%]" },
  { key: "china", position: "left-[84%] top-[76%]" },
] as const;

export function GlobalPresence() {
  const t = useTranslations();
  const direction = getDirection(useLocale() as Locale);
  const continents = CONTINENT_POSITIONS.map((continent) => ({
    ...continent,
    name: t(`globalPresence.countries.${continent.key}`),
  }));

  return (
    <section
      aria-labelledby="global-presence-title"
      className="relative mt-[clamp(100px,11vw,175px)] isolate overflow-hidden bg-background py-[clamp(56px,6vw,96px)] text-foreground [content-visibility:auto] [contain-intrinsic-size:auto_560px]"
    >
      <div className="pointer-events-none absolute top-1/2 end-0 -z-10 hidden -translate-y-1/2 lg:block">
        <Image
          src="/images/services/map2.svg"
          alt=""
          width={239}
          height={481}
          className="h-[min(38vw,481px)] w-auto dark:invert"
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-12 px-(--space-fluid-container) lg:flex-row lg:justify-between lg:gap-[clamp(36px,4vw,64px)] lg:pe-[clamp(150px,16vw,250px)]">
        <div
          className="relative w-full max-w-[743px] shrink lg:basis-[55%]"
          dir="ltr"
        >
          <Image
            src="/images/services/map.svg"
            alt={t("globalPresence.mapAlt")}
            width={743}
            height={371}
            className="h-auto w-full dark:invert"
          />

          {continents.map((continent) => (
            <span
              key={continent.key}
              dir={direction}
              className={`absolute ${continent.position} flex h-[clamp(24px,2.54vw,36.5px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[18.75px] bg-black px-[clamp(9px,1.3vw,18.75px)] font-alexandria text-[clamp(7px,0.83vw,12px)] leading-none font-medium whitespace-nowrap text-white dark:bg-white dark:text-black`}
            >
              {continent.name}
              <Image
                src="/images/services/arrow-down-map.svg"
                alt=""
                width={16}
                height={10}
                className="pointer-events-none absolute -bottom-[7px] left-1/2 w-[clamp(10px,1.1vw,16px)] -translate-x-1/2 dark:invert"
              />
            </span>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[520px] text-center lg:basis-[38%] lg:text-start">
          <span className="inline-flex rounded-full bg-[#ead6e4] px-3 py-1.5 font-alexandria text-[clamp(10px,0.85vw,13px)] leading-none text-[#626262]">
            {t("globalPresence.badge")}
          </span>

          <h2
            id="global-presence-title"
            className="mt-4 font-alexandria text-[clamp(27px,2.5vw,40px)] leading-[1.35] font-bold"
          >
            {t.rich("globalPresence.title", {
              brand: (chunks) => <span className="text-brand">{chunks}</span>,
            })}
          </h2>

          <p className="mt-3 font-alexandria text-[clamp(12px,1vw,15px)] leading-[1.9] text-muted-foreground">
            {t("globalPresence.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
