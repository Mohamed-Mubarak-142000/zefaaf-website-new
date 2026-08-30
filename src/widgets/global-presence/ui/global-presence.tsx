"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { getDirection, type Locale } from "@/shared/i18n";

const CONTENT_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const MAP_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const ARROW_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.35,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const COUNTRY_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -75, scale: 0.82 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.85 + index * 0.12,
      type: "spring",
      stiffness: 105,
      damping: 14,
      mass: 0.85,
    },
  }),
};

// Pin positions are literal % coordinates on the map SVG (see the `dir="ltr"`
// wrapper below) — independent of the current locale's country name.
const COUNTRY_POSITIONS = [
  { key: "france", position: "left-[38.1%] top-[9%]" },
  { key: "germany", position: "left-[20.6%] top-[31%]" },
  { key: "netherlands", position: "left-[75.1%] top-[25.5%]" },
  { key: "turkey", position: "left-[62.4%] top-[52.4%]" },
  { key: "russia", position: "left-[17%] top-[52%]" },
  { key: "china", position: "left-[38%] top-[79%]" },
  { key: "indonesia", position: "left-[83%] top-[83.5%]" },
] as const;

export function GlobalPresence() {
  const t = useTranslations();
  const direction = getDirection(useLocale() as Locale);
  const countries = COUNTRY_POSITIONS.map((country) => ({
    ...country,
    name: t(`globalPresence.countries.${country.key}`),
  }));

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="global-presence-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      className="relative mt-[clamp(100px,11vw,175px)] isolate overflow-hidden bg-background py-[clamp(56px,6vw,96px)] text-foreground [content-visibility:auto] [contain-intrinsic-size:auto_560px]"
      >
        <div className="pointer-events-none absolute top-1/2 start-0 -z-10 hidden -translate-y-1/2 lg:block">
          <motion.div variants={MAP_VARIANTS} className="will-change-opacity">
            <Image
              src="/images/services/map2.svg"
              alt=""
              width={239}
              height={481}
              className="h-[min(38vw,481px)] w-auto dark:invert"
            />
          </motion.div>
        </div>

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-12 px-(--space-fluid-container) lg:flex-row-reverse lg:justify-between lg:gap-[clamp(36px,4vw,64px)] lg:ps-[clamp(150px,16vw,250px)]">
        <motion.div
          variants={MAP_VARIANTS}
          className="relative w-full max-w-[743px] shrink will-change-opacity lg:basis-[55%]"
          dir="ltr"
        >
          <Image
            src="/images/services/map.svg"
            alt={t("globalPresence.mapAlt")}
            width={743}
            height={371}
            className="h-auto w-full dark:invert"
          />

          {countries.map((country, index) => (
            <motion.span
              key={country.key}
              custom={index}
              variants={COUNTRY_VARIANTS}
              dir={direction}
              className={`absolute ${country.position} flex h-[clamp(24px,2.54vw,36.5px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[18.75px] bg-black px-[clamp(9px,1.3vw,18.75px)] font-alexandria text-[clamp(7px,0.83vw,12px)] leading-none font-medium whitespace-nowrap text-white will-change-transform dark:bg-white dark:text-black`}
            >
              {country.name}
              <Image
                src="/images/services/arrow-down-map.svg"
                alt=""
                width={16}
                height={10}
                className="pointer-events-none absolute -bottom-[7px] left-1/2 w-[clamp(10px,1.1vw,16px)] -translate-x-1/2 dark:invert"
              />
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={CONTENT_VARIANTS}
          className="relative z-10 w-full max-w-[520px] text-center lg:basis-[38%] lg:text-start"
        >
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
        </motion.div>

        <div className="pointer-events-none absolute top-1/2 start-[45%] hidden -translate-y-[15%] lg:block">
          <motion.div variants={ARROW_VARIANTS}>
            <Image
              src="/images/services/arrow-map.svg"
              alt=""
              width={327}
              height={200}
              className="w-[clamp(190px,22vw,327px)] dark:invert"
            />
          </motion.div>
        </div>
      </div>
      </motion.section>
    </MotionConfig>
  );
}
