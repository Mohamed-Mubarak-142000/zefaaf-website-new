"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getSuccessStoriesCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const AVATARS = [
  "/images/success-stories/clients-avatar-1.png",
  "/images/success-stories/clients-avatar-2.png",
  "/images/success-stories/clients-avatar-3.png",
] as const;

export function SuccessStoriesClients() {
  const { clients } = getSuccessStoriesCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="success-stories-clients-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.div variants={REVEAL} className="flex items-center gap-[clamp(10px,1.3vw,19px)]">
          <p
            id="success-stories-clients-title"
            className="font-alexandria text-[clamp(27px,3.2vw,46px)] leading-[1.3] font-semibold whitespace-nowrap text-foreground"
          >
            {clients.number}
          </p>
          <img src="/icons/stats-plus-number.svg" alt="" className="size-[clamp(32px,3.8vw,55px)]" />
        </motion.div>

        <motion.p
          variants={REVEAL}
          className="font-alexandria text-[clamp(27px,3.2vw,46px)] leading-[1.3] font-semibold text-foreground"
        >
          {clients.label}
        </motion.p>

        <div className="mt-[clamp(16px,1.7vw,24px)] flex items-center gap-[clamp(10px,1.2vw,17px)]">
          {AVATARS.map((src, index) => (
            <motion.div
              key={src}
              custom={index}
              variants={REVEAL_STAGGERED}
              className={`relative size-[clamp(70px,6.7vw,96px)] shrink-0 overflow-hidden bg-muted ${
                index === 1 ? "rounded-full" : "rounded-[11px]"
              }`}
            >
              <Image src={src} alt={clients.avatarAlt} fill sizes="112px" className="object-cover" />
            </motion.div>
          ))}
          <motion.img
            custom={AVATARS.length}
            variants={REVEAL_STAGGERED}
            src="/icons/stats-plus-avatar.svg"
            alt=""
            className="size-[clamp(70px,6.7vw,96px)] shrink-0"
          />
        </div>
      </motion.section>
    </MotionConfig>
  );
}
