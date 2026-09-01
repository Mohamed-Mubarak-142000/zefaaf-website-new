"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getEventsCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const AVATARS = [
  "/images/events/avatar-1.webp",
  "/images/events/avatar-2.webp",
  "/images/events/avatar-3.webp",
] as const;

export function EventsHeader() {
  const { title, stats } = getEventsCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-(--space-fluid-md) px-(--space-fluid-container) pt-(--space-fluid-xl) sm:flex-row sm:items-center sm:justify-between"
      >
        <motion.h1
          variants={REVEAL}
          className="font-alexandria text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.2] font-bold text-foreground"
        >
          {title}
        </motion.h1>

        <div className="flex flex-wrap items-center gap-[clamp(12px,2.8vw,40px)]">
          <div className="flex items-center gap-[clamp(10px,1.4vw,20px)]">
            <div className="flex items-center">
              {AVATARS.map((src, index) => (
                <motion.div
                  key={src}
                  custom={index}
                  variants={REVEAL_STAGGERED}
                  style={{ marginInlineStart: index === 0 ? 0 : "clamp(-13px,-1vw,-9px)" }}
                  className="relative size-[clamp(28px,2.4vw,35px)] shrink-0 overflow-hidden rounded-full ring-2 ring-white"
                >
                  <Image src={src} alt={stats.avatarAlt} fill sizes="35px" className="object-cover" />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-start font-alexandria text-foreground">
              <p className="text-[clamp(13px,0.8vw,15px)] font-bold">{stats.customersValue}</p>
              <p className="text-[clamp(11px,0.75vw,14px)] font-normal whitespace-nowrap">{stats.customersLabel}</p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <p className="font-alexandria text-[clamp(13px,0.8vw,15px)] font-bold text-foreground">
              {stats.ratingValue}
            </p>
            <div className="flex items-center gap-1.5">
              <p className="font-alexandria text-[clamp(11px,0.75vw,14px)] font-normal whitespace-nowrap text-foreground">
                {stats.ratingLabel}
              </p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 4 }, (_, index) => (
                  <img key={index} src="/icons/event-star-gold.svg" alt="" className="size-[13px]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
