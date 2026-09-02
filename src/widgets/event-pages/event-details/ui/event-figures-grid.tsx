"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getEventDetailsCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const CARD_COUNT = 4;

export function EventFiguresGrid() {
  const locale = useLocale();
  const { title, description, name, followers } = getEventDetailsCopy(locale).figures;

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="event-figures-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(20px,2.3vw,32px)] px-(--space-fluid-container)"
      >
        <motion.div variants={REVEAL} className="flex flex-col gap-[clamp(10px,1vw,14px)]">
          <h2
            id="event-figures-title"
            dir="auto"
            className="max-w-[62ch] whitespace-pre-line font-alexandria text-[clamp(24px,2.7vw,36px)] leading-[1.2] font-bold text-foreground"
          >
            {title}
          </h2>
          <p
            dir="auto"
            className="max-w-[70ch] font-alexandria text-[clamp(14px,1.15vw,18px)] leading-[1.5] text-muted-foreground"
          >
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-[clamp(16px,2vw,34px)]">
          {Array.from({ length: CARD_COUNT }, (_, index) => (
            <motion.article
              key={index}
              custom={index}
              variants={REVEAL_STAGGERED}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[12px] bg-person-card p-[12px]"
            >
              <div className="relative aspect-[274/297] w-full overflow-hidden rounded-[16px]">
                <Image
                  src="/images/image 568.svg"
                  alt={name}
                  fill
                  unoptimized
                  sizes="(min-width: 1280px) 304px, 45vw"
                  className="object-cover"
                />
              </div>
              <p dir="auto" className="font-alexandria text-[clamp(18px,1.8vw,24px)] leading-[1.5] font-bold text-person-card-foreground">
                {name}
              </p>
              <p dir="auto" className="font-alexandria text-[clamp(18px,1.8vw,24px)] leading-[1.5] font-medium text-person-card-foreground">
                {followers}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </MotionConfig>
  );
}
