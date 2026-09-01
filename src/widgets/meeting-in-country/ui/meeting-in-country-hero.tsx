"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { Button } from "@/shared/ui/button";

import { getMeetingCopy } from "../model/copy";
import { FADE, REVEAL, VIEWPORT } from "../model/motion";

// Figma's photo cluster sits on a 601×575.04 canvas: a tall street photo on
// the left and two stacked photos on the right. Every offset below is that
// exact px geometry expressed as a % of the canvas, so the composition stays
// proportional to the real Figma layout at any rendered width.
const CANVAS_W = 601;
const CANVAS_H = 575.04;

function pctW(px: number) {
  return `${(px / CANVAS_W) * 100}%`;
}
function pctH(px: number) {
  return `${(px / CANVAS_H) * 100}%`;
}

export function MeetingInCountryHero() {
  const { hero } = getMeetingCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="meeting-in-country-hero-title" className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden opacity-70 lg:block"
        >
          <Image
            src="/icons/meeting-in-country/world-map.svg"
            alt=""
            width={1355}
            height={379}
            className="h-auto w-full max-w-[1600px] mx-auto"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(28px,4vw,58px)] px-(--space-fluid-container) pt-[clamp(32px,5.7vw,82px)] pb-[clamp(40px,6vw,86px)] lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-[642px]">
            <motion.h1
              variants={REVEAL}
              id="meeting-in-country-hero-title"
              className="font-alexandria text-[clamp(28px,3.33vw,48px)] leading-[1.4] font-bold text-foreground"
            >
              {hero.title}
            </motion.h1>

            <motion.div variants={REVEAL} className="mt-[clamp(14px,1.5vw,22px)] flex flex-col gap-[clamp(10px,1vw,14px)]">
              {hero.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-alexandria text-[clamp(13px,1.15vw,16px)] leading-[1.6] text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div variants={REVEAL}>
              <Button
                asChild
                className="mt-[clamp(18px,2vw,29px)] rounded-[8px] font-alexandria text-[clamp(9px,0.88vw,10.5px)] font-normal"
              >
                <a href="#">
                  {hero.cta}
                  <Image
                    src="/icons/arrow-right-double.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="size-[clamp(14px,1.25vw,18px)] rtl:rotate-180"
                  />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={FADE}
            className="relative mx-auto w-full max-w-[500px] shrink-0 lg:mx-0 lg:w-[43%] lg:max-w-[601px]"
            style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
          >
            <div
              className="absolute overflow-hidden rounded-[9px] bg-muted"
              style={{ left: pctW(0), top: pctH(42.68), width: pctW(272), height: pctH(421) }}
            >
              <Image
                src="/images/meeting-in-country/hero-street.webp"
                alt={hero.imageAlt.street}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>

            <div
              className="absolute overflow-hidden rounded-[9px] bg-muted"
              style={{ left: pctW(337), top: pctH(0), width: pctW(260), height: pctH(296) }}
            >
              <Image
                src="/images/meeting-in-country/hero-tulips.webp"
                alt={hero.imageAlt.tulips}
                fill
                sizes="(min-width: 1024px) 19vw, 43vw"
                className="object-cover"
              />
            </div>

            <div
              className="absolute overflow-hidden rounded-[9px] bg-muted"
              style={{ left: pctW(341.02), top: pctH(339.04), width: pctW(260), height: pctH(236) }}
            >
              <Image
                src="/images/meeting-in-country/hero-canal-houses.webp"
                alt={hero.imageAlt.canal}
                fill
                sizes="(min-width: 1024px) 19vw, 43vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
