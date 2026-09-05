"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useState } from "react";

import { StartNowDialog } from "@/features/start-now";
import { Button } from "@/shared/ui/button";

import { getVipCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const GALLERY = [1, 2, 3, 4, 5, 6] as const;

export function VipEurope() {
  const { europe } = getVipCopy(useLocale());
  const [startNowOpen, setStartNowOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="vip-europe-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(24px,2.5vw,36px)] px-(--space-fluid-container)"
      >
        <div className="flex flex-col gap-[clamp(20px,2vw,29px)] lg:flex-row lg:items-end lg:justify-between lg:gap-[clamp(24px,2.6vw,38px)]">
          <motion.div variants={REVEAL} className="max-w-[861px]">
            <h2
              id="vip-europe-title"
              className="font-alexandria text-[clamp(24px,2.5vw,36px)] leading-normal font-semibold text-foreground"
            >
              {europe.title}
            </h2>

            <p className="mt-[clamp(12px,1.25vw,18px)] font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.5] text-muted-foreground">
              {europe.description}
            </p>
          </motion.div>

          <motion.div variants={REVEAL} className="shrink-0">
            <Button type="button" onClick={() => setStartNowOpen(true)} className="rounded-[6px] font-alexandria font-normal">
              {europe.cta}
              <Image
                src="/icons/arrow-right-white.svg"
                alt=""
                width={18}
                height={18}
                className="size-[clamp(14px,1.25vw,18px)] rtl:rotate-180"
              />
            </Button>
            <StartNowDialog open={startNowOpen} onOpenChange={setStartNowOpen} />
          </motion.div>
        </div>

        <ul
          aria-label={europe.galleryLabel}
          className="grid grid-cols-3 gap-[clamp(12px,2.1vw,30px)] sm:grid-cols-6"
        >
          {GALLERY.map((index) => (
            <motion.li
              key={index}
              custom={index - 1}
              variants={REVEAL_STAGGERED}
              className="relative aspect-square"
            >
              <Image
                src={`/images/vip/europe-${index}.webp`}
                alt=""
                fill
                sizes="(min-width: 640px) 14vw, 30vw"
                className="object-contain"
              />
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </MotionConfig>
  );
}
