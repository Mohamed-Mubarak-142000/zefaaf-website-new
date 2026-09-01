"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getVipCopy } from "../model/copy";
import { FADE, REVEAL, VIEWPORT } from "../model/motion";

export function VipIntro() {
  const { intro } = getVipCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="vip-intro-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto w-full max-w-[1600px] px-(--space-fluid-container) pt-[clamp(64px,7.7vw,111px)]"
      >
        <div className="relative mx-auto max-w-[805px] text-center">
          {/* Two pastel discs bracketing the heading — decorative only, so they
              sit behind the copy and out of the accessibility tree. */}
          <span
            aria-hidden
            className="absolute -z-10 size-[clamp(44px,6.2vw,89px)] rounded-full bg-light-blue start-[calc(clamp(16px,2.3vw,33px)*-1)] top-[calc(clamp(30px,4.2vw,61px)*-1)]"
          />
          <span
            aria-hidden
            className="absolute -z-10 size-[clamp(44px,6.2vw,89px)] rounded-full bg-lavender end-[calc(clamp(24px,3.47vw,50px)*-1)] bottom-[calc(clamp(44px,6.2vw,90px)*-1)]"
          />

          <motion.h2
            id="vip-intro-title"
            variants={REVEAL}
            className="mx-auto max-w-[520px] font-alexandria text-[clamp(22px,2.1vw,30px)] leading-[1.3] font-medium text-foreground"
          >
            {intro.title}
          </motion.h2>

          <motion.p
            variants={FADE}
            className="mt-[clamp(9px,0.89vw,13px)] font-alexandria text-[clamp(13px,1.04vw,15px)] leading-[1.3] text-foreground"
          >
            {intro.description}
          </motion.p>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
