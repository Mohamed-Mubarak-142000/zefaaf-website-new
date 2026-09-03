"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getSuccessStoriesCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

const STAT_ICONS = [
  "/icons/success-stories-stat-secure.svg",
  "/icons/success-stories-stat-team.svg",
  "/icons/success-stories-stat-partnership.svg",
] as const;

export function SuccessStoriesJourney() {
  const { journey } = getSuccessStoriesCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="success-stories-journey-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-[clamp(32px,4vw,58px)] px-(--space-fluid-container) pt-[clamp(70px,6.5vw,90px)] lg:flex-row"
      >
        <motion.div variants={REVEAL} className="relative w-full max-w-[420px] shrink-0 lg:w-[42%]">
          <div className="relative mx-auto aspect-[359/450] w-[78%] -rotate-6 overflow-hidden rounded-[clamp(6px,0.6vw,8px)] bg-white p-[clamp(6px,0.8vw,10px)] shadow-xl">
            <div className="relative size-full overflow-hidden rounded-[clamp(3px,0.3vw,4px)] bg-muted">
              <Image
                src="/images/success-stories/journey-photo-main.png"
                alt={journey.photoMainAlt}
                fill
                sizes="(min-width: 1024px) 32vw, 60vw"
                className="object-cover"
              />
            </div>
            <img
              src="/icons/success-stories-photo-tape.svg"
              alt=""
              className="absolute -top-[clamp(7px,0.8vw,10px)] left-1/2 w-[clamp(48px,5vw,68px)] -translate-x-1/2 rotate-2 opacity-90"
            />
          </div>
          <div className="absolute bottom-0 left-0 aspect-[240/280] w-[42%] -rotate-3 overflow-hidden rounded-[clamp(4px,0.5vw,6px)] border-[clamp(4px,0.5vw,6px)] border-black bg-neutral-700 shadow-xl">
            <Image
              src="/images/success-stories/journey-photo-secondary.png"
              alt={journey.photoSecondaryAlt}
              fill
              sizes="(min-width: 1024px) 14vw, 26vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={REVEAL} className="flex w-full max-w-[625px] flex-col gap-[clamp(24px,2.5vw,36px)]">
          <h2
            id="success-stories-journey-title"
            className="font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.4] font-semibold text-foreground"
          >
            {journey.heading}
          </h2>

          <div className="flex flex-col gap-[clamp(14px,1.5vw,20px)]">
            {journey.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-alexandria text-[clamp(14px,1.25vw,18px)] leading-[1.4] text-grey-primary"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-3 items-center gap-[clamp(8px,1vw,14px)]">
            {journey.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex min-w-0 items-center ${index > 0 ? "border-s border-border ps-[clamp(8px,1vw,14px)]" : ""}`}
              >
                <div className="flex min-w-0 items-center gap-[clamp(8px,1vw,14px)]">
                  <img src={STAT_ICONS[index]} alt="" className="size-[clamp(18px,1.7vw,24px)]" />
                  <div className="flex min-w-0 flex-col items-start gap-[clamp(2px,0.3vw,4px)]">
                    <p className="font-alexandria text-[clamp(18px,1.7vw,24px)] leading-[1.5] font-bold text-brand">
                      {stat.value}
                    </p>
                    <p className="font-alexandria text-[clamp(11px,1.1vw,16px)] leading-[1.5] text-foreground">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
