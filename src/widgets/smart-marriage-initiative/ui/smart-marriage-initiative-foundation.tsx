"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getSmartMarriageCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

export function SmartMarriageInitiativeFoundation() {
  const { foundation } = getSmartMarriageCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        id="islamic-foundation"
        aria-labelledby="smart-marriage-foundation-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] scroll-mt-24 flex-col gap-[clamp(24px,2.8vw,32px)] px-(--space-fluid-container) text-start"
      >
        <motion.div variants={REVEAL} className="flex flex-col gap-[clamp(12px,1.3vw,16px)]">
          <p className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.4] font-semibold whitespace-nowrap text-brand">
            {foundation.eyebrow}
          </p>
          <h2
            id="smart-marriage-foundation-title"
            className="max-w-[1100px] font-alexandria text-[clamp(22px,2.7vw,34px)] leading-[1.5] font-semibold text-black-primary"
          >
            {foundation.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-[clamp(10px,0.9vw,12px)]">
          {foundation.citations.map((citation, index) => (
            <motion.div
              key={citation.attribution}
              custom={index}
              variants={REVEAL_STAGGERED}
              className="relative overflow-hidden rounded-lg bg-[#f7f5f2] px-[clamp(16px,1.7vw,24px)] py-[clamp(10px,0.83vw,12px)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[url('/images/smart-marriage-initiative/ayat-hadith-cubes-pattern.webp')] bg-cover bg-center opacity-[0.04]"
              />
              <p className="relative font-alexandria text-[clamp(14px,1.4vw,20px)] leading-[1.9] text-[#5f5f5f]">
                &ldquo;{citation.quote}&rdquo;
              </p>
              <p className="relative mt-[clamp(4px,0.4vw,6px)] font-alexandria text-[clamp(14px,1.4vw,20px)] leading-[1.9] font-bold text-[#5f5f5f]">
                {citation.attribution}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-[clamp(18px,2vw,24px)]">
          {foundation.reasons.map((reason, index) => (
            <motion.div key={reason.title} custom={index} variants={REVEAL_STAGGERED} className="flex flex-col gap-[clamp(4px,0.5vw,6px)]">
              <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.3] font-bold text-black-primary">
                {reason.title}
              </h3>
              <p className="max-w-[900px] font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.9] text-grey-primary">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </MotionConfig>
  );
}
