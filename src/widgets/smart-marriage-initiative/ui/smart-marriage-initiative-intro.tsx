"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getSmartMarriageCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

export function SmartMarriageInitiativeIntro() {
  const { intro } = getSmartMarriageCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        id="what-is-the-initiative"
        aria-labelledby="smart-marriage-intro-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] scroll-mt-24 flex-col items-center gap-[clamp(28px,3.5vw,50px)] px-(--space-fluid-container) lg:flex-row lg:items-center lg:justify-between"
      >
        <motion.div variants={REVEAL} className="flex w-full max-w-[560px] flex-col gap-[clamp(12px,1.3vw,16px)] text-start">
          <p className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.4] font-semibold text-brand">{intro.eyebrow}</p>
          <h2
            id="smart-marriage-intro-title"
            className="font-alexandria text-[clamp(24px,2.9vw,36px)] leading-[1.4] font-semibold text-black-primary"
          >
            {intro.title}
          </h2>
          <p className="font-alexandria text-[clamp(13px,1.1vw,16px)] leading-[1.6] text-grey-primary">{intro.description}</p>
        </motion.div>

        <motion.div variants={REVEAL} className="relative aspect-square w-full max-w-[300px] shrink-0 overflow-hidden rounded-full bg-muted lg:w-[38%] lg:max-w-[389px]">
          <Image
            src="/images/smart-marriage-initiative/couple-beach-portrait-circular.webp"
            alt={intro.photoAlt}
            fill
            sizes="(min-width: 1024px) 28vw, 60vw"
            className="object-cover"
          />
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
