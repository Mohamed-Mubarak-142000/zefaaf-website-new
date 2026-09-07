"use client";

import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { BookSeatDialog } from "@/features/book-seat";
import { Button } from "@/shared/ui/button";
import { getTripImages, type Trip } from "@/shared/api";

import { getBosniaCopy } from "../model/copy";
import { getDestinationContent } from "../model/trip-content";
import { FADE, REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const MAP = "/images/bosnia-tour/destination-map.webp";

// Figma's map is a photo already cut into the country's outline, and that
// outline is the file's own alpha channel — so the same webp doubles as the
// mask that cuts a trip's photo into exactly the same shape. `contain` matches
// the wrapper's 540/509 box to the file's 1080×1011, so the silhouette lands
// where the pin's percentages expect it.
const MAP_MASK = {
  WebkitMaskImage: `url(${MAP})`,
  maskImage: `url(${MAP})`,
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
} as const;

// The heading, the write-up, the goal and the photo come from the trip; the
// eyebrow, the "Goal" label and the CTA stay translated copy.
export function BosniaTourDestination({
  tripUlid,
  trip,
}: { tripUlid?: string; trip?: Trip | null } = {}) {
  const copy = getBosniaCopy(useLocale());
  const destination = getDestinationContent(trip, copy.destination);
  const [bookSeatOpen, setBookSeatOpen] = useState(false);
  // The companion band takes the trip's last photo, so this one takes the
  // second-to-last and the two sections stay different. A trip with fewer than
  // two usable photos keeps Figma's map cut-out.
  const photo = getTripImages(trip ?? null).at(-2);

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
            className="relative mx-auto w-full max-w-110 shrink-0 lg:order-2 lg:mx-0"
            style={{ aspectRatio: "540 / 509" }}
            dir="ltr"
          >
            {/* A trip photo is masked into the outline and so has to fill the
                frame; Figma's own map already carries the outline baked in and
                needs no mask, only room to fit whole. The pin sits outside the
                masked element — inside it, the mask would cut it away. */}
            <div className="absolute inset-0" style={photo ? MAP_MASK : undefined}>
              <Image
                src={photo ?? MAP}
                alt={destination.mapAlt}
                fill
                sizes="(min-width: 1024px) 37vw, 90vw"
                className={photo ? "object-cover" : "object-contain"}
              />
            </div>
            <img
              src="/icons/bosnia-tour/destination-pin.svg"
              alt=""
              className="absolute top-[51%] left-[62%] w-[clamp(20px,1.9vw,27px)] -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>

          <div className="w-full lg:order-1 lg:max-w-[685px]">
            <motion.div variants={REVEAL} className="flex flex-col gap-[3px]">
              <p className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.2] font-bold text-brand">
                {destination.eyebrow}
              </p>
              {/* Rewaq translates a trip into some of the 33 locales only, so
                  `dir="auto"` keeps its Arabic text readable on a page in a
                  left-to-right language and the other way round. */}
              <h2
                id="bosnia-tour-destination-title"
                dir="auto"
                className="font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.2] font-bold text-foreground"
              >
                {destination.title}
              </h2>
            </motion.div>

            <motion.div variants={REVEAL} className="mt-[clamp(14px,1.5vw,22px)] flex flex-col gap-[clamp(8px,0.8vw,12px)]">
              {destination.paragraphs.map((paragraph) => (
                <p key={paragraph} dir="auto" className="font-alexandria text-[clamp(12px,1.1vw,13.5px)] leading-[1.6] text-muted-foreground">
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
              <p dir="auto" className="font-alexandria text-[clamp(12px,1.1vw,13.5px)] leading-[1.8] text-muted-foreground">
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
              <BookSeatDialog open={bookSeatOpen} onOpenChange={setBookSeatOpen} tripUlid={tripUlid} />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
