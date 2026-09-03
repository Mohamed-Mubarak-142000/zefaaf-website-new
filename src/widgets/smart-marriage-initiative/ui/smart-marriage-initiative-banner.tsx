"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getSmartMarriageCopy } from "../model/copy";
import { FADE, VIEWPORT } from "../model/motion";

export function SmartMarriageInitiativeBanner() {
  const { banner } = getSmartMarriageCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="smart-marriage-banner-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.div
          variants={FADE}
          className="relative isolate w-full overflow-hidden rounded-xl"
          style={{ aspectRatio: "1320 / 220.68" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- the design
              crops a tiny slice of a much taller 1472×2616 source photo via an
              exact %-based transform (from Figma), which next/image's `fill`
              object-position can't reproduce. */}
          <img
            aria-hidden
            src="/images/smart-marriage-initiative/banner-mosque-couple-praying.webp"
            alt=""
            className="pointer-events-none absolute object-cover"
            style={{ width: "99.99%", height: "1062.93%", top: "-139.81%", left: "0.02%" }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(to left, #B296AC 0%, rgba(37,37,37,0.66) 100%)" }}
          />
          <img
            aria-hidden
            src="/icons/smart-marriage-initiative/banner-geometric-ornament-large.svg"
            alt=""
            className="pointer-events-none absolute -top-[220%] end-[-6%] w-[38%] opacity-25"
          />

          <div className="relative z-10 flex h-full flex-col justify-center gap-[clamp(4px,0.6vw,7px)] p-[clamp(16px,2.4vw,32px)] text-start text-white">
            <h2
              id="smart-marriage-banner-title"
              className="font-alexandria text-[clamp(20px,2.5vw,30px)] leading-[1.4] font-bold"
            >
              {banner.title}
            </h2>
            <p className="max-w-[700px] font-alexandria text-[clamp(14px,1.7vw,24px)] leading-[1.4]">{banner.description}</p>
          </div>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
