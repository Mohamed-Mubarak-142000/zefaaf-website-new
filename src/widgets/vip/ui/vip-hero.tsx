"use client";

import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { StartNowDialog } from "@/features/start-now";
import { Button } from "@/shared/ui/button";
import { getDirection, type Locale } from "@/shared/i18n";

import { getVipCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

export function VipHero() {
  const locale = useLocale();
  const { hero } = getVipCopy(locale);
  const isRtl = getDirection(locale as Locale) === "rtl";
  const [startNowOpen, setStartNowOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="vip-hero-title"
        className="relative isolate flex min-h-[clamp(540px,45.5vw,652px)] flex-col overflow-hidden text-white"
      >
        <Image
          src="/images/vip/hero-street.webp"
          alt={hero.imageAlt}
          fill
          preload
          sizes="100vw"
          className="-z-30 object-cover object-bottom"
        />
        {/* Figma stacks a 35% black scrim under a 28% white haze over the photo
            — together they flatten the street scene into the pale backdrop the
            white headline sits on. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-3 -z-20"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 72% at 52% 50%, transparent 0%, transparent 55%, black 100%)",
            maskImage:
              "radial-gradient(ellipse 65% 72% at 52% 50%, transparent 0%, transparent 55%, black 100%)",
          }}
        >
          <Image
            src="/images/vip/hero-street.webp"
            alt=""
            fill
            sizes="100vw"
            className="scale-[1.02] object-cover object-bottom blur-[22.13px]"
          />
        </div>

        <div aria-hidden className="absolute inset-0 -z-10 bg-black/20" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-white/10" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.12)_0%,transparent_62%,rgba(0,0,0,0.04)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 start-0 z-0 h-[65%] w-[85%] bg-white/[0.01] backdrop-blur-[24.5625px]"
          style={{
            WebkitMaskImage: `radial-gradient(ellipse 105% 105% at ${isRtl ? "100%" : "0%"} 100%, black 0%, black 65%, transparent 100%)`,
            maskImage: `radial-gradient(ellipse 105% 105% at ${isRtl ? "100%" : "0%"} 100%, black 0%, black 65%, transparent 100%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute end-0 bottom-0 z-0 h-[48%] w-[38%] bg-white/[0.01] backdrop-blur-[24.5625px]"
          style={{
            WebkitMaskImage: `radial-gradient(ellipse 100% 110% at ${isRtl ? "0%" : "100%"} 100%, black 0%, black 62%, transparent 100%)`,
            maskImage: `radial-gradient(ellipse 100% 110% at ${isRtl ? "0%" : "100%"} 100%, black 0%, black 62%, transparent 100%)`,
          }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-(--space-fluid-container) pt-[clamp(28px,4.9vw,71px)] pb-[clamp(36px,4.85vw,70px)]"
        >
          <motion.p
            variants={REVEAL}
            className="mt-20 mb-auto inline-flex w-fit items-center gap-[clamp(6px,0.7vw,10px)] rounded-[36px] bg-white/72 px-[clamp(10px,1.1vw,16px)] py-[clamp(6px,0.63vw,9px)] font-alexandria text-[clamp(10px,0.83vw,12px)] leading-none font-medium text-black-primary"
          >
            <Image
              src="/icons/vip-whatsapp.svg"
              alt=""
              width={24}
              height={24}
              className="size-[clamp(16px,1.67vw,24px)] shrink-0"
            />
            {hero.badge}
          </motion.p>

          <div className="mt-[clamp(32px,7vw,101px)] translate-y-[20px] flex flex-col gap-[clamp(24px,3vw,44px)] lg:flex-row lg:items-end lg:justify-between lg:gap-[clamp(32px,4vw,64px)]">
            <motion.div variants={REVEAL} className="max-w-[805px]">
              <h1
                id="vip-hero-title"
                className="max-w-[720px] font-alexandria text-[clamp(26px,3.05vw,44px)] leading-[1.25] font-medium"
              >
                {hero.titleBefore}
                <br />
                <span className="sm:whitespace-nowrap">
                  {hero.titleSecondBefore}
                  <span className="text-brand">{hero.titleHighlight}</span>
                  {hero.titleAfter}
                </span>
              </h1>

              <p className="mt-[clamp(16px,2vw,29px)] font-alexandria text-[clamp(12px,1.04vw,15px)] leading-normal font-light">
                {hero.description}
              </p>
            </motion.div>

            <motion.div variants={REVEAL} className="shrink-0">
              <p className="font-alexandria text-[clamp(14px,1.25vw,18px)] leading-none font-medium">
                {hero.feeLabel}
              </p>

              <p className="mt-[clamp(8px,0.9vw,13px)] flex items-center gap-[clamp(5px,0.47vw,7px)] font-alexandria text-[clamp(19px,1.67vw,24px)] leading-none font-semibold">
                <Image
                  src="/images/money_6040928%201.svg"
                  alt=""
                  width={120}
                  height={120}
                  className="size-[clamp(22px,2.07vw,30px)] shrink-0"
                />
                {hero.price}
              </p>

              <Button
                type="button"
                onClick={() => setStartNowOpen(true)}
                className="mt-[clamp(12px,1.3vw,19px)] rounded-[6px] bg-white font-alexandria font-normal text-black-primary hover:bg-white/85"
              >
                {hero.cta}
                <Image
                  src="/icons/arrow-right-dark.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[clamp(14px,1.25vw,18px)] rtl:rotate-180"
                />
              </Button>
              <StartNowDialog open={startNowOpen} onOpenChange={setStartNowOpen} />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
