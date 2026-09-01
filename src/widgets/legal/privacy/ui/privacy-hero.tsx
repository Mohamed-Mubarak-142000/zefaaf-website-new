"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getPrivacyCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

export function PrivacyHero() {
  const { hero } = getPrivacyCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="privacy-hero-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(20px,2.3vw,33px)] px-(--space-fluid-container) pt-[clamp(24px,3vw,44px)]"
      >
        <motion.h1
          variants={REVEAL}
          id="privacy-hero-title"
          className="font-alexandria text-[clamp(24px,2.5vw,36px)] leading-[1.38] font-semibold text-foreground"
        >
          {hero.title}
        </motion.h1>

        <motion.div
          variants={REVEAL}
          className="relative aspect-[1320/338] w-full overflow-hidden rounded-[12px]"
        >
          <Image
            src="/images/privacy/hero.png"
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
