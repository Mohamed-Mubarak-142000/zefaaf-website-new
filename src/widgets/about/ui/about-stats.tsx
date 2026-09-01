"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getAboutCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const AVATARS = ["/images/about/stats-avatar-1.png", "/images/about/stats-avatar-2.png", "/images/about/stats-avatar-3.png"] as const;

export function AboutStats() {
  const { stats } = getAboutCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="about-stats-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.div variants={REVEAL} className="flex items-center gap-[clamp(10px,1.3vw,19px)]">
          <p
            id="about-stats-title"
            className="font-alexandria text-[clamp(30px,3.6vw,52px)] leading-[1.3] font-semibold whitespace-nowrap text-foreground"
          >
            {stats.number}
          </p>
          <img src="/icons/stats-plus-number.svg" alt="" className="size-[clamp(36px,4.3vw,63px)]" />
        </motion.div>

        <motion.p
          variants={REVEAL}
          className="font-alexandria text-[clamp(30px,3.6vw,52px)] leading-[1.3] font-semibold text-foreground"
        >
          {stats.label}
        </motion.p>

        <div className="mt-[clamp(16px,1.7vw,24px)] flex items-center gap-[clamp(10px,1.2vw,17px)]">
          {AVATARS.map((src, index) => (
            <motion.div
              key={src}
              custom={index}
              variants={REVEAL_STAGGERED}
              className={`relative size-[clamp(80px,7.8vw,112px)] shrink-0 overflow-hidden bg-muted ${
                index === 1 ? "rounded-full" : "rounded-[11px]"
              }`}
            >
              <Image src={src} alt={stats.avatarAlt} fill sizes="112px" className="object-cover" />
            </motion.div>
          ))}
          <motion.img
            custom={AVATARS.length}
            variants={REVEAL_STAGGERED}
            src="/icons/stats-plus-avatar.svg"
            alt=""
            className="size-[clamp(80px,7.8vw,112px)] shrink-0"
          />
        </div>
      </motion.section>
    </MotionConfig>
  );
}
