"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { Button } from "@/shared/ui/button";
import type { MeetingBullet } from "../model/copy";
import { getMeetingCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// The badge's windmill glyph is 5 layered vector fragments in Figma (a
// vertical post "Vector" plus 4 diagonal blade "Group"s) rather than a single
// flattened asset — a flattened screenshot of just this fragment came back
// blank (Figma renders it against the parent's dark circle, which an
// isolated node capture doesn't have), so it's reproduced the same way the
// About widget composites its multi-fragment icons: each fragment placed by
// its exact % position within the glyph's own bounding box.
const WINDMILL_PIECES = [
  { src: "/icons/meeting-in-country/badge-icon-parts/outline.svg", left: 32.38, top: 29.59, width: 34.49, height: 70.41 },
  { src: "/icons/meeting-in-country/badge-icon-parts/blade-1.svg", left: 3.68, top: 0, width: 45.23, height: 36.92 },
  { src: "/icons/meeting-in-country/badge-icon-parts/blade-2.svg", left: 50.04, top: 2.67, width: 49.96, height: 33.43 },
  { src: "/icons/meeting-in-country/badge-icon-parts/blade-3.svg", left: 51.16, top: 36.92, width: 45.23, height: 36.98 },
  { src: "/icons/meeting-in-country/badge-icon-parts/blade-4.svg", left: 0, top: 37.81, width: 50.04, height: 33.43 },
] as const;

function WindmillIcon() {
  return (
    <div className="relative w-[clamp(9px,0.93vw,13.3px)]" style={{ aspectRatio: "22.18 / 30.02" }}>
      {WINDMILL_PIECES.map((piece) => (
        <img
          key={piece.src}
          src={piece.src}
          alt=""
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: `${piece.top}%`,
            width: `${piece.width}%`,
            height: `${piece.height}%`,
          }}
        />
      ))}
    </div>
  );
}

function BulletList({ bullets, align }: { bullets: readonly MeetingBullet[]; align: "start" | "end" }) {
  return (
    <ul className={`flex w-full max-w-[418px] flex-col gap-[clamp(14px,1.4vw,20px)] ${align === "end" ? "lg:items-end lg:text-end" : ""}`}>
      {bullets.map((bullet, index) => (
        <motion.li
          key={bullet.title}
          custom={index}
          variants={REVEAL_STAGGERED}
          className={`flex items-start gap-[clamp(8px,0.83vw,12px)] ${align === "end" ? "lg:flex-row-reverse" : ""}`}
        >
          <Image
            src="/icons/meeting-in-country/bullet-arrow.svg"
            alt=""
            width={30}
            height={12}
            className="mt-[0.5em] w-[clamp(18px,1.5vw,21px)] shrink-0 rtl:-scale-x-100"
          />
          <div className="flex flex-col gap-[clamp(2px,0.3vw,4px)]">
            <h3 className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.6] font-semibold text-foreground">
              {bullet.title}
            </h3>
            <p className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.6] text-muted-foreground">
              {bullet.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

export function MeetingInCountryWhy() {
  const { why } = getMeetingCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="meeting-in-country-why-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.div variants={REVEAL} className="flex max-w-[620px] flex-col gap-[clamp(10px,1vw,14px)] text-start">
          <h2
            id="meeting-in-country-why-title"
            className="font-alexandria text-[clamp(24px,2.5vw,36px)] leading-[1.4] font-bold text-foreground"
          >
            {why.title}
          </h2>
          <p className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.6] text-muted-foreground">
            {why.description}
          </p>
        </motion.div>

        <div className="mt-[clamp(28px,3.5vw,50px)] flex flex-col items-center gap-[clamp(32px,4vw,58px)] lg:flex-row lg:items-stretch lg:justify-between">
          <div className="flex w-full flex-col items-start gap-[clamp(24px,3vw,44px)] lg:w-auto">
            <BulletList bullets={why.leftBullets} align="start" />

            <motion.div variants={REVEAL}>
              <Button
                asChild
                className="h-auto justify-between gap-3 rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[8px] bg-foreground px-[clamp(24px,2.3vw,33px)] py-[clamp(20px,2.4vw,35px)] font-alexandria text-[clamp(15px,1.4vw,20px)] leading-[1.35] font-extrabold whitespace-normal text-white hover:bg-foreground/90"
              >
                <a href="#" className="max-w-[230px] text-start">
                  {why.cta}
                  <Image
                    src="/icons/arrow-right-double.svg"
                    alt=""
                    width={25}
                    height={25}
                    className="size-[clamp(18px,1.8vw,25px)] shrink-0 rtl:rotate-180"
                  />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={REVEAL}
            className="relative mx-auto w-full max-w-[391px] shrink-0"
            style={{ aspectRatio: "391 / 609" }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-[195px] bg-muted">
              <Image
                src="/images/meeting-in-country/why-choose-couple.webp"
                alt={why.photoAlt}
                fill
                sizes="(min-width: 1024px) 27vw, 80vw"
                className="object-cover"
              />
            </div>

            <div className="absolute start-[64.1%] top-[-8.1%] flex aspect-square w-[42.6%] flex-col items-center justify-center gap-[clamp(6px,0.7vw,10px)] rounded-full bg-foreground p-[clamp(12px,1.4vw,20px)] text-center text-white">
              <WindmillIcon />
              <p className="font-alexandria text-[clamp(9px,0.83vw,12px)] leading-[1.4] font-extrabold">
                {why.badge}
              </p>
            </div>

            <Image
              src="/icons/meeting-in-country/windmill-outline.svg"
              alt=""
              width={112}
              height={145}
              className="pointer-events-none absolute end-[-8%] bottom-[-2%] w-[27%] opacity-70 rtl:-scale-x-100"
            />
          </motion.div>

          <BulletList bullets={why.rightBullets} align="end" />
        </div>
      </motion.section>
    </MotionConfig>
  );
}
