"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getMeetingCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// The first card's icon is a bare glyph in Figma (a circle disc plus a
// separate icon layer); the other two export as a single flattened asset
// (circle + glyph already combined) — same split the About widgets hit.
const ICONS = [
  { src: "/icons/meeting-in-country/locations-europe.svg", flattened: false },
  { src: "/icons/meeting-in-country/online-commitment.svg", flattened: true },
  { src: "/icons/meeting-in-country/simple-process.svg", flattened: true },
] as const;

export function MeetingInCountryUnique() {
  const { unique } = getMeetingCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="meeting-in-country-unique-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <div className="flex flex-col-reverse items-center gap-[clamp(24px,3vw,44px)] lg:flex-row lg:items-center lg:justify-between">
          <ul className="grid w-full grid-cols-1 gap-[clamp(16px,1.8vw,27px)] sm:grid-cols-3 lg:max-w-[790px]">
            {unique.cards.map((card, index) => {
              const icon = ICONS[index];
              return (
                <motion.li
                  key={card.title}
                  custom={index}
                  variants={REVEAL_STAGGERED}
                  className="flex flex-col gap-[clamp(14px,1.5vw,22px)] rounded-[12px] bg-muted p-[clamp(14px,1.3vw,19px)] pt-[clamp(16px,1.3vw,19px)]"
                >
                  <div className="relative size-[clamp(46px,4.5vw,64px)] shrink-0">
                    {icon.flattened ? (
                      <img src={icon.src} alt="" className="absolute inset-0 size-full" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-lavender">
                        <img src={icon.src} alt="" className="size-[54%]" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-[clamp(10px,0.9vw,13px)]">
                    <h3 className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.4] font-bold text-foreground">
                      {card.title}
                    </h3>
                    <p className="font-alexandria text-[clamp(10.5px,0.83vw,12px)] leading-[1.4] text-foreground/85">
                      {card.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          <motion.h2
            variants={REVEAL}
            id="meeting-in-country-unique-title"
            className="max-w-[478px] shrink-0 font-alexandria text-[clamp(24px,2.5vw,36px)] leading-[1.4] font-bold text-foreground"
          >
            {unique.title}
          </motion.h2>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
