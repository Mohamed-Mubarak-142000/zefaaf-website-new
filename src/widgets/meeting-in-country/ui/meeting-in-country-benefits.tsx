"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getMeetingCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const DOT_COLORS = ["bg-light-blue", "bg-lavender", "bg-star-orange", "bg-orange", "bg-secondary-pink"] as const;

export function MeetingInCountryBenefits() {
  const { benefits } = getMeetingCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="meeting-in-country-benefits-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <div className="flex flex-col gap-[clamp(24px,3vw,44px)] lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            variants={REVEAL}
            className="relative aspect-[624/353] w-full shrink-0 overflow-hidden rounded-[12px] bg-muted lg:max-w-[624px]"
          >
            <Image
              src="/images/meeting-in-country/benefits-canal.webp"
              alt={benefits.imageAlt}
              fill
              sizes="(min-width: 1024px) 43vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="w-full lg:max-w-[619px]">
            <motion.h2
              variants={REVEAL}
              id="meeting-in-country-benefits-title"
              className="font-alexandria text-[clamp(24px,2.5vw,36px)] leading-[1.4] font-bold text-foreground"
            >
              {benefits.title}
            </motion.h2>

            <ul className="mt-[clamp(20px,2.2vw,32px)] flex flex-col gap-[clamp(10px,1vw,14px)]">
              {benefits.items.map((item, index) => (
                <motion.li
                  key={item.title}
                  custom={index}
                  variants={REVEAL_STAGGERED}
                  className="flex items-start gap-[clamp(12px,1.25vw,18px)]"
                >
                  <span
                    aria-hidden
                    className={`mt-[0.55em] size-[clamp(11px,1.06vw,15px)] shrink-0 rounded-full ${DOT_COLORS[index] ?? "bg-lavender"}`}
                  />
                  <p className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.6] text-muted-foreground">
                    <span className="font-semibold text-foreground">{item.title}:</span> {item.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
