"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getBosniaCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const ITEM_ICONS = [
  "/icons/bosnia-tour/icon-companion-files.svg",
  "/icons/bosnia-tour/icon-companion-group.svg",
  "/icons/bosnia-tour/icon-companion-chat.svg",
  "/icons/bosnia-tour/icon-companion-party.svg",
  "/icons/bosnia-tour/icon-companion-mail.svg",
  "/icons/bosnia-tour/icon-companion-users.svg",
];

export function BosniaTourCompanion() {
  const { companion } = getBosniaCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="bosnia-tour-companion-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.div
          variants={REVEAL}
          className="relative isolate overflow-hidden rounded-(--radius-fluid) bg-[#0a0a0a]"
        >
          <Image
            src="/images/bosnia-tour/companion-bg.webp"
            alt={companion.bgAlt}
            fill
            sizes="(min-width: 1600px) 1600px, 100vw"
            className="absolute inset-0 -z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

          <div className="flex flex-col gap-[clamp(20px,2.2vw,32px)] px-[clamp(20px,4vw,60px)] py-[clamp(40px,6vw,86px)] text-white lg:max-w-[62%]">
            <div className="flex flex-col gap-[clamp(10px,1vw,14px)]">
              <h2
                id="bosnia-tour-companion-title"
                className="font-alexandria text-[clamp(24px,2.5vw,36px)] leading-[1.3] font-bold"
              >
                {companion.title}
              </h2>
              <p className="font-alexandria text-[clamp(12px,1vw,14px)] leading-[1.6] text-white/85">
                {companion.description}
              </p>
            </div>

            <ul className="flex flex-col gap-[clamp(12px,1.3vw,18px)]">
              {companion.items.map((item, index) => (
                <motion.li
                  key={item}
                  custom={index}
                  variants={REVEAL_STAGGERED}
                  className="flex items-center gap-[clamp(10px,1vw,14px)]"
                >
                  <img src={ITEM_ICONS[index]} alt="" className="size-[clamp(16px,1.4vw,20px)] shrink-0 brightness-0 invert" />
                  <p className="font-alexandria text-[clamp(12px,1vw,14px)] leading-[1.5]">{item}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
