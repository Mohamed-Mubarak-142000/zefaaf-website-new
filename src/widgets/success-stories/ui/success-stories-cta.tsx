"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { Button } from "@/shared/ui/button";

import { getSuccessStoriesCopy, type SuccessStoriesCard } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// Matches the avatar-tint mapping the home-page Testimonials widget already
// uses for these same three quotes (Ahmed/teal, Sara/purple, Ahmed/brown).
const AVATAR_STYLES = [
  { className: "bg-chart-2", textClassName: "text-[#37646c]" },
  { className: "bg-chart-3/25", textClassName: "text-[#524eb4]" },
  { className: "bg-chart-4", textClassName: "text-[#65492d]" },
] as const;

function Rating() {
  return (
    <div className="flex items-center gap-[2px]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Image key={index} src="/images/star.svg" alt="" width={12} height={12} unoptimized />
      ))}
    </div>
  );
}

function TestimonialCard({ card, styleIndex }: { card: SuccessStoriesCard; styleIndex: number }) {
  const avatar = AVATAR_STYLES[styleIndex];

  return (
    <div className="flex w-full max-w-[255px] shrink-0 flex-col gap-[clamp(14px,1.3vw,18px)] rounded-[9px] border border-[#d6d6d6] bg-white p-[clamp(10px,0.85vw,12px)]">
      <div className="flex flex-col gap-[clamp(7px,0.7vw,10px)]">
        <Rating />
        <p className="font-alexandria text-[clamp(11px,0.85vw,12px)] leading-[1.4] text-foreground">{card.quote}</p>
      </div>
      <div className="flex items-center gap-[clamp(8px,0.75vw,10.5px)]">
        <div
          aria-hidden
          className={`flex size-[clamp(30px,2.5vw,36px)] shrink-0 items-center justify-center rounded-full font-alexandria text-[clamp(11px,0.9vw,13px)] font-extrabold ${avatar.className} ${avatar.textClassName}`}
        >
          {card.name.charAt(0)}
        </div>
        <div className="flex flex-col gap-[clamp(4px,0.4vw,6px)]">
          <p className="font-alexandria text-[clamp(14px,1.1vw,16px)] leading-[1.4] font-extrabold text-foreground">
            {card.name}
          </p>
          <p className="font-alexandria text-[clamp(11px,0.85vw,12px)] leading-[1.6] text-grey-primary">
            {card.ageLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SuccessStoriesCta() {
  const { cta, cards } = getSuccessStoriesCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="success-stories-cta-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] flex-col items-start gap-[clamp(32px,4vw,58px)] px-(--space-fluid-container) lg:flex-row lg:items-center lg:justify-between"
      >
        <motion.div variants={REVEAL} className="flex w-full max-w-[650px] flex-col gap-[clamp(16px,1.7vw,24px)]">
          <div className="flex flex-col gap-[clamp(2px,0.2vw,3px)]">
            <p className="font-alexandria text-[clamp(10px,0.83vw,12px)] leading-[1.5] font-medium text-foreground">
              {cta.eyebrow}
            </p>
            <h2
              id="success-stories-cta-title"
              className="font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.4] font-semibold text-foreground"
            >
              {cta.title}
            </h2>
            <p className="font-alexandria text-[clamp(14px,1.1vw,18px)] leading-[1.4] text-grey-primary">
              {cta.description}
            </p>
          </div>

          <Button asChild className="w-fit gap-2.25 rounded-[8px] font-alexandria font-normal">
            <a href="#">
              {cta.button}
              <img src="/icons/arrow-right-white.svg" alt="" className="size-[clamp(14px,1.2vw,18px)] rtl:-scale-x-100" />
            </a>
          </Button>
        </motion.div>

        {/* Desktop: two staggered floating columns, matching the Figma layout. */}
        <div className="hidden w-full max-w-[650px] items-start gap-[clamp(16px,1.8vw,26px)] lg:flex">
          <div className="flex flex-1 flex-col gap-[clamp(16px,1.8vw,26px)] pt-[clamp(48px,5vw,72px)]">
            {cards.map((card, index) => (
              <motion.div key={`a-${card.name}-${index}`} custom={index} variants={REVEAL_STAGGERED}>
                <TestimonialCard card={card} styleIndex={index} />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-[clamp(16px,1.8vw,26px)]">
            {cards.map((card, index) => (
              <motion.div key={`b-${card.name}-${index}`} custom={index + 1} variants={REVEAL_STAGGERED}>
                <TestimonialCard card={card} styleIndex={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: a simple stacked list instead of the floating columns. */}
        <div className="flex w-full max-w-[420px] flex-col gap-[clamp(14px,1.6vw,20px)] lg:hidden">
          {cards.map((card, index) => (
            <motion.div key={`m-${card.name}-${index}`} custom={index} variants={REVEAL_STAGGERED}>
              <TestimonialCard card={card} styleIndex={index} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </MotionConfig>
  );
}
