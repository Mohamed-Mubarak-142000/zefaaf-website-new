"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { cn } from "@/shared/lib/utils";

import { getBosniaCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const AVATARS = [
  "/images/bosnia-tour/avatar-1.webp",
  "/icons/bosnia-tour/avatar-2.svg",
  "/images/bosnia-tour/avatar-3.webp",
  "/icons/bosnia-tour/avatar-2.svg",
  "/images/bosnia-tour/avatar-5.webp",
];

function IconBadge({ icon, className }: { icon: string; className?: string }) {
  return (
    <div className={cn("flex size-[clamp(24px,2.2vw,32px)] items-center justify-center rounded-full bg-white shadow-[0px_3px_1.5px_0px_rgba(182,182,182,0.19)]", className)}>
      <img src={icon} alt="" className="size-[45%]" />
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
          className="font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.2] font-bold text-foreground"
        >
          <span className="block">{help.titleLine1}</span>
          <span className="block">{help.titleLine2}</span>
        </motion.h2>

        <div className="mt-[clamp(24px,2.2vw,32px)] grid grid-cols-1 gap-[clamp(20px,2.2vw,32px)] sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          <div className="flex flex-col gap-[clamp(10px,1vw,13.5px)]">
            <motion.article
              custom={0}
              variants={REVEAL_STAGGERED}
              className="relative overflow-hidden rounded-[18px] bg-muted p-[clamp(14px,1.25vw,18px)] pt-[clamp(15px,1.3vw,18.4px)] pb-[clamp(46px,4.3vw,62px)]"
            >
              <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.2] font-bold text-foreground">
                {cards.customPrograms.title}
              </h3>
              <p className="mt-[clamp(9px,0.9vw,13px)] font-alexandria text-[clamp(12px,1.05vw,15px)] leading-[1.5] text-muted-foreground">
                {cards.customPrograms.prefix}
                <span className="font-bold text-brand">{cards.customPrograms.highlight1}</span>
                {cards.customPrograms.middle}
                <span className="font-bold text-brand">{cards.customPrograms.highlight2}</span>
                {cards.customPrograms.suffix}
              </p>
              <IconBadge icon="/icons/bosnia-tour/icon-sticky-note.svg" className="absolute end-[clamp(14px,1.25vw,18px)] bottom-[clamp(14px,1.25vw,18px)]" />
            </motion.article>

            <motion.article
              custom={1}
              variants={REVEAL_STAGGERED}
              className="relative overflow-hidden rounded-[18px] bg-muted p-[clamp(14px,1.25vw,18px)] pt-[clamp(15px,1.3vw,18.4px)]"
            >
              <IconBadge icon="/icons/bosnia-tour/icon-chatting.svg" className="absolute end-[clamp(14px,1.25vw,18px)] top-[clamp(14px,1.25vw,18px)] bg-[#f668d1]" />
              <div className="max-w-[85%]">
                <h3 className="font-alexandria text-[clamp(13px,1.05vw,15px)] leading-[1.2] font-bold text-foreground">
                  {cards.followUp.title}
                </h3>
                <p className="mt-[clamp(6px,0.6vw,8px)] font-alexandria text-[clamp(11px,0.9vw,12px)] leading-[1.5] text-muted-foreground">
                  {cards.followUp.description}
                </p>
              </div>
            </motion.article>
          </div>

          <motion.article
            custom={2}
            variants={REVEAL_STAGGERED}
            className="relative flex flex-col justify-end overflow-hidden rounded-[18px] bg-[#fccff0] p-[clamp(14px,1.6vw,24px)] pt-[clamp(60px,6vw,90px)]"
          >
            <div className="absolute top-[clamp(14px,1.4vw,20px)] start-[clamp(14px,1.4vw,20px)] flex items-center gap-[clamp(4px,0.4vw,6px)] rounded-[9px] bg-white p-[clamp(4px,0.4vw,6px)] shadow-[0px_3px_1.5px_0px_rgba(182,182,182,0.19)]">
              <div className="flex">
                {AVATARS.map((src, index) => (
                  <img
                    key={`${src}-${index}`}
                    src={src}
                    alt=""
                    className="size-[clamp(16px,1.5vw,22px)] rounded-full border border-white first:ms-0 -ms-[clamp(6px,0.55vw,8px)]"
                  />
                ))}
              </div>
              <p className="font-alexandria text-[clamp(8px,0.7vw,10.8px)] leading-[1.5] font-medium whitespace-nowrap text-[#090909]">
                {cards.showcasing.usersBadge}
              </p>
            </div>

            <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.35] font-bold text-foreground">
              {cards.showcasing.title}
            </h3>
            <p className="mt-[clamp(9px,0.9vw,13px)] font-alexandria text-[clamp(12px,1.05vw,15px)] leading-[1.5] text-foreground">
              {cards.showcasing.description}
            </p>

            <IconBadge icon="/icons/bosnia-tour/icon-files.svg" className="absolute end-[clamp(14px,1.25vw,18px)] bottom-[clamp(14px,1.25vw,18px)] rotate-[32deg]" />
          </motion.article>

          <motion.article
            custom={3}
            variants={REVEAL_STAGGERED}
            className="relative flex flex-col overflow-hidden rounded-[18px] bg-muted p-[clamp(14px,1.25vw,18px)]"
          >
            <div className="relative -mx-[clamp(14px,1.25vw,18px)] -mt-[clamp(14px,1.25vw,18px)] aspect-[388/146] shrink-0 overflow-hidden">
              <Image
                src="/images/bosnia-tour/card-help-wave.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 27vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="mt-[clamp(12px,1.1vw,16px)] max-w-[90%]">
              <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.2] font-bold text-foreground">
                {cards.requests.title}
              </h3>
              <p className="mt-[clamp(9px,0.9vw,13px)] font-alexandria text-[clamp(12px,1.05vw,15px)] leading-[1.5] text-muted-foreground">
                {cards.requests.description}
              </p>
            </div>
            <IconBadge icon="/icons/bosnia-tour/icon-wedding.svg" className="absolute end-[clamp(14px,1.25vw,18px)] bottom-[clamp(14px,1.25vw,18px)]" />
          </motion.article>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
