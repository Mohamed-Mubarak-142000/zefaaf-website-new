"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getAboutCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// The first two card icons are layered vector fragments in Figma (a colored
// disc plus 2-3 tiny glyph pieces); the last two export as a single flattened
// asset already. Insets below are copied verbatim from get_design_context —
// they're proportional (%) fragment placement inside the icon, not fixed px,
// so no fluid conversion is needed for them; only the outer circle size is.
function LoveIcon() {
  return (
    <>
      <img src="/icons/feature-circle-pink.svg" alt="" className="absolute inset-0 size-full" />
      <div className="absolute inset-[27%]">
        <img src="/icons/feature-love-1.svg" alt="" className="absolute inset-[3.82%_0_3.81%_0] size-full" />
      </div>
    </>
  );
}

function SupportIcon() {
  return (
    <>
      <img src="/icons/feature-circle-blue.svg" alt="" className="absolute inset-0 size-full" />
      <img src="/icons/feature-stop.svg" alt="" className="absolute inset-[29%]" />
    </>
  );
}

export function AboutFeatures() {
  const { features } = getAboutCopy(useLocale());
  const icons = [LoveIcon, SupportIcon, null, null] as const;
  const flatIcons = ["", "", "/icons/feature-foundations.svg", "/icons/feature-islamic-values.svg"] as const;

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="about-features-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <div className="flex flex-col gap-[clamp(16px,2vw,29px)] lg:flex-row lg:items-start lg:justify-between">
          <motion.h2
            variants={REVEAL}
            id="about-features-title"
            className="flex max-w-[615px] items-center gap-[clamp(8px,0.83vw,12px)] font-alexandria text-[clamp(22px,2.5vw,36px)] leading-[1.3] font-semibold text-foreground"
          >
            <img src="/icons/ornament-sparkle.svg" alt="" className="size-[clamp(20px,1.8vw,26px)] shrink-0" />
            {features.heading}
          </motion.h2>

          <motion.p
            variants={REVEAL}
            className="max-w-[597px] font-alexandria text-[clamp(11px,1vw,14px)] leading-[1.9] text-black-primary"
          >
            {features.description}
          </motion.p>
        </div>

        <div className="mt-[clamp(20px,2vw,29px)] grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-[clamp(16px,2vw,24px)]">
          {features.cards.map((card, index) => {
            const Icon = icons[index];
            const flat = flatIcons[index];
            return (
              <motion.article
                key={card.title}
                custom={index}
                variants={REVEAL_STAGGERED}
                className="flex min-w-0 flex-col gap-[clamp(14px,1.7vw,20px)] rounded-[9px] border border-border p-[clamp(9px,0.83vw,12px)]"
              >
                <div className="relative size-[clamp(46px,4.3vw,62px)] shrink-0">
                  {Icon ? <Icon /> : <img src={flat} alt="" className="absolute inset-0 size-full" />}
                </div>
                <div className="flex flex-col gap-[clamp(6px,0.57vw,8px)]">
                  <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.3] font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="font-alexandria text-[clamp(12px,0.94vw,13.5px)] leading-[1.3] text-grey-primary">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.section>
    </MotionConfig>
  );
}
