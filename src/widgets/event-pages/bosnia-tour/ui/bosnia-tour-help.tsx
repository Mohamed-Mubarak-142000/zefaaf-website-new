"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { cn } from "@/shared/lib/utils";

import { getBosniaCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// Figma stacks five circles here, but two of them are 1.15px slivers sitting
// directly behind a photo — they read as the white rim, not as extra faces. The
// three photos are what is actually visible, at a 12px step inside a 45.7px group.
const AVATARS = [
  "/images/bosnia-tour/avatar-1.webp",
  "/images/bosnia-tour/avatar-3.webp",
  "/images/bosnia-tour/avatar-5.webp",
];

/** Figma: a 30px white circle holding a 15px glyph (50%). `className` can resize it. */
function IconBadge({ icon, className }: { icon: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex size-[clamp(24px,2.1vw,30px)] items-center justify-center rounded-full bg-white shadow-[0px_3px_1.5px_0px_rgba(182,182,182,0.19)]",
        className,
      )}
    >
      <img src={icon} alt="" className="size-[50%]" />
    </div>
  );
}

export function BosniaTourHelp() {
  const { help } = getBosniaCopy(useLocale());
  const { cards } = help;

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="bosnia-tour-help-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.h2
          variants={REVEAL}
          id="bosnia-tour-help-title"
          className="flex flex-col gap-[clamp(8px,0.85vw,12px)] font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.2] font-bold text-foreground"
        >
          <span>{help.titleLine1}</span>
          <span>{help.titleLine2}</span>
        </motion.h2>

        <div className="mt-[clamp(18px,1.7vw,24px)] grid grid-cols-1 gap-[clamp(20px,2.2vw,32px)] sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          <div className="flex flex-col gap-[clamp(10px,0.94vw,13.5px)]">
            {/* flex-1 so this card absorbs the leftover height and the column ends
                flush with the two full-height cards, the way it does in Figma. */}
            <motion.article
              custom={0}
              variants={REVEAL_STAGGERED}
              className="relative flex-1 overflow-hidden rounded-[clamp(14px,1.25vw,18px)] bg-muted p-[clamp(14px,1.25vw,18px)] pb-[clamp(26px,2.4vw,34px)]"
            >
              <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.2] font-bold text-foreground">
                {cards.customPrograms.title}
              </h3>
              <p className="mt-[clamp(9px,0.89vw,12.75px)] font-alexandria text-[clamp(12px,1.05vw,15px)] leading-[1.5] text-muted-foreground">
                {cards.customPrograms.prefix}
                <span className="font-bold text-brand">{cards.customPrograms.highlight1}</span>
                {cards.customPrograms.middle}
                <span className="font-bold text-brand">{cards.customPrograms.highlight2}</span>
                {cards.customPrograms.suffix}
              </p>
              <IconBadge
                icon="/icons/bosnia-tour/icon-sticky-note.svg"
                className="absolute end-[clamp(8px,0.72vw,10.3px)] bottom-[clamp(6px,0.56vw,8px)] size-[clamp(18px,1.58vw,22.7px)]"
              />
            </motion.article>

            <motion.article
              custom={1}
              variants={REVEAL_STAGGERED}
              className="relative overflow-hidden rounded-[clamp(14px,1.25vw,18px)] bg-muted p-[clamp(14px,1.25vw,18px)]"
            >
              {/* Figma draws this one as a 48x25.5 pill, not a circle like the other three. */}
              <div className="absolute end-[clamp(12px,1.2vw,17.25px)] top-[clamp(11px,1.02vw,14.6px)] flex items-center rounded-full bg-[#f668d1] px-[clamp(12px,1.15vw,16.5px)] py-[clamp(4px,0.37vw,5.25px)]">
                <img src="/icons/bosnia-tour/icon-chatting.svg" alt="" className="size-[clamp(11px,1.05vw,15px)]" />
              </div>
              <div className="max-w-[79.5%]">
                <h3 className="font-alexandria text-[clamp(13px,1.05vw,15px)] leading-[1.2] font-bold text-foreground">
                  {cards.followUp.title}
                </h3>
                <p className="mt-[clamp(5px,0.42vw,6px)] font-alexandria text-[clamp(11px,0.9vw,12px)] leading-[1.5] text-muted-foreground">
                  {cards.followUp.description}
                </p>
              </div>
            </motion.article>
          </div>

          <motion.article
            custom={2}
            variants={REVEAL_STAGGERED}
            className="relative flex flex-col justify-end overflow-hidden rounded-[clamp(14px,1.25vw,18px)] bg-[#fccff0] p-[clamp(14px,1.25vw,18px)] pt-[clamp(56px,5.5vw,80px)] pb-[clamp(14px,1.32vw,19px)]"
          >
            {/* Decorative ribbon. Percentage offsets resolve against the card's own
                width, so it stays pinned to the same spot as the card scales. The
                numbers include the SVG's stroke bleed (a 436.7x326.6 artboard drawn
                around a 430.2x315.7 shape). */}
            <img
              src="/icons/bosnia-tour/card-help-pink-blob.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute start-[-3.6%] top-0 -mt-[17.04%] w-[107.6%] max-w-none -scale-x-100"
            />

            <div className="absolute start-[clamp(14px,1.25vw,18px)] top-[clamp(14px,1.35vw,19.5px)] flex items-center gap-[clamp(4px,0.42vw,6px)] rounded-[9px] bg-white p-[clamp(4px,0.42vw,6px)] shadow-[0px_3px_1.5px_0px_rgba(182,182,182,0.19)]">
              <p className="font-alexandria text-[clamp(8px,0.75vw,10.8px)] leading-[1.5] font-medium whitespace-nowrap text-[#090909]">
                {cards.showcasing.usersBadge}
              </p>
              <div className="flex">
                {AVATARS.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="size-[clamp(16px,1.51vw,21.7px)] rounded-full border border-white first:ms-0 -ms-[clamp(7px,0.68vw,9.7px)]"
                  />
                ))}
              </div>
            </div>

            <h3 className="relative max-w-[64%] font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.37] font-bold text-foreground">
              {cards.showcasing.title}
            </h3>
            <p className="relative mt-[clamp(9px,0.87vw,12.4px)] max-w-[88%] font-alexandria text-[clamp(12px,1.05vw,15px)] leading-[1.5] text-foreground">
              {cards.showcasing.description}
            </p>

            <IconBadge
              icon="/icons/bosnia-tour/icon-files.svg"
              className="absolute end-[clamp(8px,0.71vw,10.2px)] bottom-[clamp(8px,0.75vw,10.85px)] rotate-[31.92deg]"
            />
          </motion.article>

          {/* Figma insets this photo inside the card (12px down, ~8.6px on each side)
              rather than bleeding it to the edges. */}
          <motion.article
            custom={3}
            variants={REVEAL_STAGGERED}
            className="relative flex flex-col overflow-hidden rounded-[clamp(14px,1.25vw,18px)] bg-muted px-[clamp(7px,0.75vw,8.6px)] pt-[clamp(9px,0.83vw,12px)] pb-[clamp(14px,1.25vw,18px)]"
          >
            <div className="relative aspect-[388/146] w-full shrink-0">
              <Image
                src="/images/bosnia-tour/card-help-wave.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 27vw, 90vw"
                className="object-contain"
              />
            </div>
            <div className="mt-[clamp(9px,0.83vw,12px)] px-[clamp(7px,0.8vw,9.4px)]">
              <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.2] font-bold text-foreground">
                {cards.requests.title}
              </h3>
              <p className="mt-[clamp(8px,0.73vw,10.5px)] font-alexandria text-[clamp(12px,1.05vw,15px)] leading-[1.5] text-muted-foreground">
                {cards.requests.description}
              </p>
            </div>
            <IconBadge
              icon="/icons/bosnia-tour/icon-wedding.svg"
              className="absolute end-[clamp(6px,0.72vw,8.2px)] bottom-[clamp(6px,0.64vw,7.25px)]"
            />
          </motion.article>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
