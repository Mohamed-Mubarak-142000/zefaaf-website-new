"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getSmartMarriageCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

export function SmartMarriageInitiativeWhy() {
  const { why } = getSmartMarriageCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        id="why-smart-marriage"
        aria-labelledby="smart-marriage-why-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] scroll-mt-24 flex-col items-end gap-[clamp(24px,2.8vw,40px)] px-(--space-fluid-container) text-start"
      >
        <motion.div variants={REVEAL} className="flex w-full flex-col gap-[clamp(12px,1.3vw,16px)]">
          <p id="smart-marriage-why-title" className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.4] font-semibold text-brand">
            {why.eyebrow}
          </p>
          <p className="max-w-240 font-alexandria text-[clamp(18px,1.9vw,24px)] leading-[1.6] font-medium text-black-primary">
            {why.description}
          </p>
        </motion.div>

        {/* Figma lays these out as a 3-card row then a 2-card row (each card
            sharing its row equally) rather than a uniform grid — reproduced
            as two flex-wrap rows so 4-and-5 stay paired instead of an
            auto-fit grid stranding them one-per-row. */}
        {[why.cards.slice(0, 3), why.cards.slice(3)].map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full flex-wrap gap-[clamp(12px,1.1vw,16px)]">
            {row.map((card, indexInRow) => {
              const index = rowIndex * 3 + indexInRow;

              return (
                <motion.div
                  key={card.title}
                  custom={index}
                  variants={REVEAL_STAGGERED}
                  className="flex min-w-60 flex-1 basis-70 flex-col gap-[clamp(8px,0.83vw,12px)] rounded-lg border border-stroke-1 p-[clamp(12px,1.1vw,16px)]"
                >
                  <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.3] font-bold text-black-primary">
                    {card.title}
                  </h3>
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.9] text-grey-primary">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        ))}
      </motion.section>
    </MotionConfig>
  );
}
