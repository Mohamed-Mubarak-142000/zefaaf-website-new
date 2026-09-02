"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getBosniaCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// Figma's photo cluster sits on a 506.011×424.887 canvas: a tall card rotated
// 7.79deg and a smaller card rotated -8.9deg overlapping its bottom-left
// corner. Every offset below is that exact px geometry expressed as a % of
// the canvas, so the composition stays proportional at any width.
const CANVAS_W = 506.011;
const CANVAS_H = 424.887;

function pctW(px: number) {
  return `${(px / CANVAS_W) * 100}%`;
}
function pctH(px: number) {
  return `${(px / CANVAS_H) * 100}%`;
}

export function BosniaTourWhy() {
  const { why } = getBosniaCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="bosnia-tour-why-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <div className="flex flex-col gap-[clamp(32px,4vw,58px)] lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:max-w-[560px]">
            <motion.h2
              variants={REVEAL}
              id="bosnia-tour-why-title"
              className="font-alexandria text-[clamp(26px,2.5vw,42px)] leading-[1.2] font-bold text-foreground"
            >
              {why.title}
            </motion.h2>

            <div className="mt-[clamp(20px,2vw,29px)] rounded-[12px] bg-muted p-[clamp(16px,2vw,29px)]">
              <ul className="flex flex-col gap-[clamp(14px,1.5vw,22px)]">
                {why.items.map((item, index) => (
                  <motion.li key={item.title} custom={index} variants={REVEAL_STAGGERED} className="flex gap-[clamp(10px,1vw,14px)]">
                    <span
                      aria-hidden
                      className="shrink-0 bg-gradient-to-br from-[#ffc643] via-[#f668d1] to-[#8539f7] bg-clip-text font-alexandria text-[clamp(18px,1.7vw,24px)] leading-[1.2] font-extrabold text-transparent opacity-35"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-alexandria text-[clamp(13px,1.1vw,15px)] leading-[1.6] text-foreground">
                      <span className="font-bold">{item.title}: </span>
                      {item.description}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            variants={REVEAL}
            className="relative mx-auto w-full max-w-[420px] shrink-0"
            style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
          >
            <div
              className="absolute overflow-hidden rounded-[12px] border-[5px] border-white bg-muted shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{
                left: pctW(175.67),
                top: pctH(19.275),
                width: pctW(301.889),
                height: pctH(373.577),
                transform: "rotate(7.79deg) skewX(1.34deg)",
              }}
            >
              <Image
                src="/images/bosnia-tour/why-photo-tall.webp"
                alt={why.photoAlt.tall}
                fill
                sizes="(min-width: 1024px) 21vw, 60vw"
                className="object-cover"
              />
            </div>

            <div
              className="absolute overflow-hidden rounded-[12px] border-[5px] border-white bg-muted shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{
                left: pctW(15.16),
                top: pctH(141.62),
                width: pctW(241.008),
                height: pctH(258.826),
                transform: "rotate(-8.9deg) skewX(-1.53deg)",
              }}
            >
              <Image
                src="/images/bosnia-tour/why-photo-small-overlay.webp"
                alt={why.photoAlt.overlay}
                fill
                sizes="(min-width: 1024px) 17vw, 48vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
