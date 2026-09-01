"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { Logo } from "@/shared/ui/logo";

import { getAboutCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

// Bento-style photo grid — six photos at the exact px layout from Figma
// (get_metadata on node 186:97209), re-expressed as a % of the shared
// bounding box so it scales continuously at any width instead of needing
// hand-tuned breakpoints. Same technique as the download-app PhoneCollage.
const COLLAGE_W = 1320;
const COLLAGE_H = 779.25;

function pctW(px: number) {
  return `${(px / COLLAGE_W) * 100}%`;
}
function pctH(px: number) {
  return `${(px / COLLAGE_H) * 100}%`;
}

function makePhoto(src: string, x: number, y: number, w: number, h: number) {
  return { src, left: pctW(x), top: pctH(y), width: pctW(w), height: pctH(h) };
}

const PHOTOS = [
  makePhoto("/images/about/collage-1.png", 0, 194.25, 312, 379.5),
  makePhoto("/images/about/collage-2.png", 336, 179.43, 312, 288),
  makePhoto("/images/about/collage-3.png", 336, 491.25, 423.75, 288),
  makePhoto("/images/about/collage-4.png", 784.5, 491.25, 311.25, 228),
  makePhoto("/images/about/collage-5.png", 672, 0, 312, 467.25),
  makePhoto("/images/about/collage-6.png", 1008, 126, 312, 341.25),
] as const;

export function AboutIntro() {
  const { intro } = getAboutCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="about-intro-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.div variants={REVEAL} className="max-w-[650px]">
          <Logo />
          <h2
            id="about-intro-title"
            className="mt-[clamp(10px,1vw,14px)] font-alexandria text-[clamp(18px,1.67vw,24px)] leading-[1.5] font-bold text-foreground"
          >
            {intro.headingLine1}
            <br />
            {intro.headingLine2}
          </h2>
          <p className="mt-[clamp(9px,0.83vw,12px)] font-alexandria text-[clamp(14px,1.1vw,16px)] leading-[1.5] text-grey-primary">
            {intro.description}
          </p>
        </motion.div>

        <motion.div
          variants={REVEAL}
          className="relative mt-[clamp(28px,3vw,44px)] w-full"
          style={{ aspectRatio: `${COLLAGE_W} / ${COLLAGE_H}` }}
        >
          {PHOTOS.map((photo, index) => (
            <div
              key={photo.src}
              className="absolute overflow-hidden rounded-[6px] bg-muted"
              style={{ left: photo.left, top: photo.top, width: photo.width, height: photo.height }}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, 45vw"
                priority={index < 2}
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
