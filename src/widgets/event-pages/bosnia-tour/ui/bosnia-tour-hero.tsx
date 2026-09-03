"use client";

import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { BookSeatDialog } from "@/features/book-seat";
import { Button } from "@/shared/ui/button";

import { getBosniaCopy } from "../model/copy";
import { FADE, REVEAL, VIEWPORT } from "../model/motion";

// Figma's photo collage sits on a 394.726×330.77 canvas: a tall card on top
// and a smaller card overlapping its bottom-right corner. Every offset below
// is that exact px geometry expressed as a % of the canvas, so the
// composition stays proportional to the real Figma layout at any width.
const CANVAS_W = 394.726;
const CANVAS_H = 330.77;

function pctW(px: number) {
  return `${(px / CANVAS_W) * 100}%`;
}
function pctH(px: number) {
  return `${(px / CANVAS_H) * 100}%`;
}

function InfoPill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-[clamp(6px,0.6vw,9px)] px-[clamp(8px,0.9vw,12.5px)] py-[clamp(6px,0.55vw,8px)]">
      <img src={icon} alt="" className="size-[clamp(14px,1.1vw,16px)]" />
      <p className="font-alexandria text-[clamp(10px,0.85vw,12px)] leading-[1.5] font-medium whitespace-nowrap text-white">
        {label}
      </p>
    </div>
  );
}

export function BosniaTourHero() {
  const { hero } = getBosniaCopy(useLocale());
  const [bookSeatOpen, setBookSeatOpen] = useState(false);

  const pills = [
    { icon: "/icons/bosnia-tour/icon-pill-calendar.svg", label: hero.pills.date },
    { icon: "/icons/bosnia-tour/icon-pill-payment.svg", label: hero.pills.payment },
    { icon: "/icons/bosnia-tour/icon-pill-duration.svg", label: hero.pills.duration },
    { icon: "/icons/bosnia-tour/icon-pill-location.svg", label: hero.pills.location },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="bosnia-tour-hero-title" className="relative isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/bosnia-tour/hero-canyon.webp"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent to-70%" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(28px,3.5vw,50px)] px-(--space-fluid-container) pt-[clamp(96px,14vw,200px)] pb-[clamp(140px,16vw,230px)]"
        >
          <div className="max-w-[705px]">
            <motion.h1
              variants={REVEAL}
              id="bosnia-tour-hero-title"
              className="font-alexandria text-[clamp(28px,3.33vw,48px)] leading-[1.2] font-bold text-white"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              variants={REVEAL}
              className="mt-[clamp(10px,1.1vw,16px)] font-alexandria text-[clamp(13px,1.15vw,16px)] leading-[1.6] text-white/85"
            >
              {hero.description}
            </motion.p>

            <motion.div variants={REVEAL}>
              <Button
                type="button"
                onClick={() => setBookSeatOpen(true)}
                className="mt-[clamp(18px,2vw,29px)] rounded-[8px] font-alexandria text-[clamp(9px,0.88vw,10.5px)] font-normal"
              >
                {hero.cta}
              </Button>
              <BookSeatDialog open={bookSeatOpen} onOpenChange={setBookSeatOpen} />
            </motion.div>
          </div>

          <motion.div
            variants={REVEAL}
            className="flex w-full max-w-[708px] flex-wrap gap-x-[clamp(4px,0.5vw,6px)] gap-y-[clamp(6px,0.6vw,9px)] rounded-[clamp(24px,2.6vw,37px)] bg-white/15 px-[clamp(12px,1.3vw,18px)] py-[clamp(10px,1.1vw,16px)] backdrop-blur-md"
          >
            {pills.map((pill) => (
              <InfoPill key={pill.label} icon={pill.icon} label={pill.label} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="absolute bottom-0 end-(--space-fluid-container) w-full max-w-[380px] shrink-0 translate-y-1/2"
          style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
        >
          <div
            className="absolute overflow-hidden rounded-[9px] border-[5px] border-white bg-muted shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            style={{ left: pctW(6), top: pctH(7), width: pctW(290.798), height: pctH(279.805) }}
          >
            <Image
              src="/images/bosnia-tour/hero-collage-main.webp"
              alt={hero.imageAlt.collageMain}
              fill
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover"
            />
          </div>

          <div
            className="absolute overflow-hidden rounded-[9px] border-[5px] border-white bg-muted shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            style={{ left: pctW(200.86), top: pctH(95.93), width: pctW(193.865), height: pctH(231.839) }}
          >
            <Image
              src="/images/bosnia-tour/hero-collage-secondary.webp"
              alt={hero.imageAlt.collageSecondary}
              fill
              sizes="(min-width: 1024px) 14vw, 32vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
