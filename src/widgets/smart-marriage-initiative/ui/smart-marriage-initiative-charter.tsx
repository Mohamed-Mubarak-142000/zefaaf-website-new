"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getSmartMarriageCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

export function SmartMarriageInitiativeCharter() {
  const { charter } = getSmartMarriageCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        id="initiative-charter"
        aria-labelledby="smart-marriage-charter-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] scroll-mt-24 flex-col items-center gap-[clamp(28px,3.2vw,44px)] px-(--space-fluid-container) text-start lg:flex-row lg:items-center lg:justify-between"
      >
        <motion.div variants={REVEAL} className="flex w-full max-w-[586px] flex-col gap-[clamp(16px,1.8vw,24px)]">
          <div className="flex flex-col gap-[clamp(8px,0.9vw,12px)]">
            <p className="font-alexandria text-[clamp(14px,1.25vw,18px)] leading-[1.4] font-bold text-brand">{charter.eyebrow}</p>
            <h2
              id="smart-marriage-charter-title"
              className="font-alexandria text-[clamp(18px,1.9vw,24px)] leading-[1.6] font-semibold text-black-primary"
            >
              {charter.title}
            </h2>
            <p className="font-alexandria text-[clamp(14px,1.25vw,18px)] leading-[1.9] font-bold text-black-primary">{charter.subtitle}</p>
          </div>

          <ul className="flex flex-col gap-[clamp(16px,1.7vw,24px)]">
            {charter.items.map((item, index) => (
              <motion.li key={item} custom={index} variants={REVEAL_STAGGERED} className="flex items-start gap-[clamp(12px,1.1vw,16px)]">
                <Image
                  src="/icons/smart-marriage-initiative/charter-checklist-bullet.svg"
                  alt=""
                  width={9}
                  height={9}
                  className="mt-[0.55em] size-[clamp(7px,0.6vw,9px)] shrink-0"
                />
                <p className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.1] text-[#5f5f5f]">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={REVEAL}
          className="relative aspect-[682/427] w-full max-w-[682px] shrink-0 overflow-hidden rounded-lg bg-muted"
        >
          <Image
            src="/images/smart-marriage-initiative/charter-couple-sunset.webp"
            alt={charter.photoAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
