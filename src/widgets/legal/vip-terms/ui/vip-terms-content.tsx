"use client";

import { motion, MotionConfig } from "framer-motion";
import { useTranslations } from "next-intl";

import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// Same flattened confetti clusters the Terms page uses, positioned as a % of
// this section's own bounding box so they scale with the content.
const PATTERN_TOP = { src: "/icons/terms-pattern-top.svg", left: "96.7%", top: "14.98%", width: "31.87%" };
const PATTERN_BOTTOM = { src: "/icons/terms-pattern-bottom.svg", left: "-2.2%", top: "26.81%", width: "15.38%" };

export function VipTermsContent() {
  const t = useTranslations("vipTerms");
  const bullets = t.raw("bullets") as string[];

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-label={t("serviceTitle")}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative isolate mx-auto w-full max-w-[1600px] overflow-hidden px-(--space-fluid-container) pt-[clamp(20px,2.5vw,36px)] pb-[clamp(40px,5vw,72px)]"
      >
        <img
          aria-hidden
          src={PATTERN_TOP.src}
          alt=""
          className="pointer-events-none absolute -z-10"
          style={{ left: PATTERN_TOP.left, top: PATTERN_TOP.top, width: PATTERN_TOP.width }}
        />
        <img
          aria-hidden
          src={PATTERN_BOTTOM.src}
          alt=""
          className="pointer-events-none absolute -z-10"
          style={{ left: PATTERN_BOTTOM.left, top: PATTERN_BOTTOM.top, width: PATTERN_BOTTOM.width }}
        />

        <motion.div variants={REVEAL} className="flex items-center gap-[clamp(6px,0.5vw,7px)]">
          <img src="/icons/legal-document.svg" alt="" className="size-[clamp(20px,1.6vw,24px)] shrink-0" />
          <p className="font-alexandria text-[clamp(15px,1.1vw,18px)] font-semibold text-foreground">
            <span>{t("serviceTitle")}</span> <span>{t("platformLine")}</span>
          </p>
        </motion.div>

        <div className="mt-[clamp(28px,3.2vw,53px)] flex flex-col gap-[clamp(28px,3.2vw,53px)]">
          <motion.div
            custom={0}
            variants={REVEAL_STAGGERED}
            className="flex flex-col gap-[clamp(6px,0.5vw,8px)] font-alexandria text-[clamp(13px,0.97vw,14px)] leading-[1.9] text-grey-primary"
          >
            <p>{t("intro")}</p>
            <ul className="list-disc ps-5">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </motion.div>

          <motion.p
            custom={1}
            variants={REVEAL_STAGGERED}
            className="font-alexandria text-[clamp(15px,1.05vw,16px)] font-semibold text-brand"
          >
            {t("closing")}
          </motion.p>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
