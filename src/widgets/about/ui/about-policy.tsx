"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getAboutCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

export function AboutPolicy() {
  const { policy } = getAboutCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="about-policy-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap relative isolate overflow-hidden bg-background"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-size-[160%_auto] bg-center opacity-40"
          style={{ backgroundImage: "url(/icons/about-policy-pattern.svg)" }}
        />

        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(24px,3vw,44px)] px-(--space-fluid-container) py-[clamp(40px,5vw,72px)] lg:flex-row lg:items-center lg:justify-between">
          <motion.div variants={REVEAL} className="flex max-w-[650px] flex-col gap-[clamp(10px,1vw,14px)]">
            <p className="font-alexandria text-[clamp(14px,1.25vw,18px)] leading-[1.5] font-bold text-brand">
              {policy.label}
            </p>
            <h2
              id="about-policy-title"
              className="font-alexandria text-[clamp(24px,2.5vw,36px)] leading-[1.5] font-semibold text-foreground"
            >
              {policy.title}
            </h2>
            <p className="font-alexandria text-[clamp(14px,1.1vw,16px)] leading-[1.5] text-grey-primary">
              {policy.description}
            </p>
          </motion.div>

          <ul className="flex max-w-[650px] flex-col gap-[clamp(14px,1.8vw,26px)]">
            {policy.bullets.map((bullet, index) => (
              <motion.li
                key={bullet}
                custom={index}
                variants={REVEAL_STAGGERED}
                className="flex items-center gap-[clamp(8px,0.83vw,12px)]"
              >
                <img
                  src="/icons/ornament-diamond.svg"
                  alt=""
                  className="size-[clamp(22px,1.9vw,27px)] shrink-0"
                />
                <span className="font-alexandria text-[clamp(14px,1.1vw,16px)] leading-[1.5] text-foreground">
                  {bullet}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
