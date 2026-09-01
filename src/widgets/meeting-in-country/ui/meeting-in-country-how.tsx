"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getMeetingCopy } from "../model/copy";
import { FADE, REVEAL, VIEWPORT } from "../model/motion";

// Figma's photo stack sits on a 417.431×260.743 canvas: a pink card leaning
// behind the photo, offset and rotated 5.47deg. Every offset below is that
// exact px geometry expressed as a % of the canvas.
const CANVAS_W = 417.431;
const CANVAS_H = 260.743;

function pctW(px: number) {
  return `${(px / CANVAS_W) * 100}%`;
}
function pctH(px: number) {
  return `${(px / CANVAS_H) * 100}%`;
}

export function MeetingInCountryHow() {
  const { how } = getMeetingCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="meeting-in-country-how-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <div className="flex flex-col gap-[clamp(24px,3vw,44px)] lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:max-w-[719px]">
            <motion.h2
              variants={REVEAL}
              id="meeting-in-country-how-title"
              className="font-alexandria text-[clamp(24px,2.5vw,36px)] leading-[1.4] font-bold text-foreground"
            >
              {how.title}
            </motion.h2>

            <motion.p
              variants={REVEAL}
              className="mt-[clamp(16px,1.8vw,26px)] font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.6] text-muted-foreground"
            >
              {how.description}
            </motion.p>
          </div>

          <motion.div
            variants={FADE}
            className="relative mx-auto w-full max-w-[417px] shrink-0 lg:mx-0"
            style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
          >
            <div
              aria-hidden
              className="absolute rounded-[12px] bg-secondary-pink"
              style={{
                left: pctW(214.588),
                top: pctH(130.37),
                width: pctW(386),
                height: pctH(225),
                transform: "translate(-50%, -50%) rotate(5.47deg)",
              }}
            />

            <div
              className="absolute overflow-hidden rounded-[12px] bg-muted"
              style={{ left: pctW(0), top: pctH(17.87), width: pctW(386), height: pctH(225) }}
            >
              <Image
                src="/images/meeting-in-country/how-it-works-windmill.webp"
                alt={how.imageAlt}
                fill
                sizes="(min-width: 1024px) 29vw, 90vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
