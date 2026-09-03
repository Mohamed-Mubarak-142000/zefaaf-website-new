"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getSuccessStoriesCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

export function SuccessStoriesHero() {
  const { hero } = getSuccessStoriesCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="success-stories-hero-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(14px,1.6vw,22px)] px-(--space-fluid-container) pt-[clamp(50px,4.5vw,65px)]"
      >
        <motion.p
          variants={REVEAL}
          className="font-alexandria text-[clamp(14px,1.5vw,18px)] leading-[1.4] font-medium text-brand"
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          id="success-stories-hero-title"
          variants={REVEAL}
          className="max-w-[913px] font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.4] font-semibold text-foreground"
        >
          {hero.title}
        </motion.h1>
      </motion.section>
    </MotionConfig>
  );
}
