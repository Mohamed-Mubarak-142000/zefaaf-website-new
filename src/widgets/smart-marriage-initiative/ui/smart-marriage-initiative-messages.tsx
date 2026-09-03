"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getSmartMarriageCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// Index-aligned with `messages.cards` in copy.ts (young men / fathers / young
// women) — icon + tint are visual-only details, not translated content.
const CARD_VISUALS = [
  { icon: "/icons/smart-marriage-initiative/message-icon-young-men.svg", tint: "rgba(214,195,208,0.5)" },
  { icon: "/icons/smart-marriage-initiative/message-icon-fathers.svg", tint: "rgba(210,183,179,0.5)" },
  { icon: "/icons/smart-marriage-initiative/message-icon-young-women.svg", tint: "rgba(235,210,208,0.5)" },
] as const;

export function SmartMarriageInitiativeMessages() {
  const { messages } = getSmartMarriageCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        id="initiative-messages"
        aria-labelledby="smart-marriage-messages-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] scroll-mt-24 flex-col gap-[clamp(28px,3.2vw,44px)] px-(--space-fluid-container) text-start lg:flex-row lg:items-start lg:gap-[clamp(24px,3vw,44px)]"
      >
        <motion.div variants={REVEAL} className="flex w-full max-w-[420px] shrink-0 flex-col gap-[clamp(12px,1.3vw,16px)]">
          <p className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.4] font-semibold text-brand">{messages.eyebrow}</p>
          <h2
            id="smart-marriage-messages-title"
            className="font-alexandria text-[clamp(20px,2vw,24px)] leading-[1.1] font-bold text-black-primary"
          >
            {messages.title}
          </h2>
          <p className="font-alexandria text-[clamp(13px,1.1vw,16px)] leading-[1.5] text-grey-primary">{messages.description}</p>
        </motion.div>

        <div className="flex w-full flex-1 flex-col gap-[clamp(20px,2.2vw,32px)]">
          {messages.cards.map((card, index) => {
            const visual = CARD_VISUALS[index];

            return (
              <motion.div
                key={card.title}
                custom={index}
                variants={REVEAL_STAGGERED}
                className="flex items-center gap-[clamp(16px,1.8vw,24px)]"
              >
                <div
                  className="flex size-[clamp(52px,4.8vw,78px)] shrink-0 items-center justify-center rounded-md"
                  style={{ backgroundColor: visual.tint }}
                >
                  <Image src={visual.icon} alt="" width={44} height={44} className="size-[55%] object-contain" />
                </div>
                <div className="flex flex-col gap-[clamp(4px,0.5vw,6px)]">
                  <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.1] font-bold text-black-primary">
                    {card.title}
                  </h3>
                  <p className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.9] text-grey-primary">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </MotionConfig>
  );
}
