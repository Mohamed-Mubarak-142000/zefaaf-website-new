"use client";

import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { BookSeatDialog } from "@/features/book-seat";
import { Button } from "@/shared/ui/button";

import { getBosniaCopy } from "../model/copy";
import { FADE, REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

export function BosniaTourDestination() {
  const { destination } = getBosniaCopy(useLocale());
  const [bookSeatOpen, setBookSeatOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="bosnia-tour-destination-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <div className="flex flex-col gap-[clamp(28px,3.5vw,50px)] lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            variants={FADE}
            className="relative mx-auto w-full max-w-[540px] shrink-0 lg:mx-0"
            style={{ aspectRatio: "540 / 509" }}
            dir="ltr"
          >
            <Image
              src="/images/bosnia-tour/destination-map.webp"
              alt={destination.mapAlt}
              fill
              sizes="(min-width: 1024px) 37vw, 90vw"
              className="object-contain"
            />
            <img
              src="/icons/bosnia-tour/destination-pin.svg"
              alt=""
              className="absolute top-[51%] left-[62%] w-[clamp(20px,1.9vw,27px)] -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>

          <div className="w-full lg:max-w-[685px]">
            <motion.div variants={REVEAL} className="flex flex-col gap-[3px]">
              <p className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.2] font-bold text-brand">
                {destination.eyebrow}
              </p>
              <h2
                id="bosnia-tour-destination-title"
                className="font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.2] font-bold text-foreground"
              >
                {destination.title}
              </h2>
            </motion.div>

            <motion.div variants={REVEAL} className="mt-[clamp(14px,1.5vw,22px)] flex flex-col gap-[clamp(8px,0.8vw,12px)]">
              {destination.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-alexandria text-[clamp(12px,1.1vw,13.5px)] leading-[1.6] text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div variants={REVEAL_STAGGERED} custom={1} className="mt-[clamp(20px,2vw,29px)] flex flex-col gap-[clamp(10px,1vw,14px)]">
              <div className="flex items-center gap-[clamp(8px,0.83vw,12px)]">
                <img src="/icons/bosnia-tour/goal.svg" alt="" className="size-[clamp(16px,1.5vw,22px)]" />
                <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.2] font-bold text-brand">
                  {destination.goal.title}
                </h3>
              </div>
              <p className="font-alexandria text-[clamp(12px,1.1vw,13.5px)] leading-[1.8] text-muted-foreground">
                {destination.goal.description}
              </p>
            </motion.div>

            <motion.div variants={REVEAL}>
              <Button
                type="button"
                onClick={() => setBookSeatOpen(true)}
                className="mt-[clamp(18px,2vw,29px)] rounded-[8px] font-alexandria text-[clamp(9px,0.88vw,10.5px)] font-normal"
              >
                {destination.cta}
              </Button>
              <BookSeatDialog open={bookSeatOpen} onOpenChange={setBookSeatOpen} />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
