"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getAboutCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

export function AboutGateway() {
  const { gateway } = getAboutCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="about-gateway-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] flex-col items-center gap-[clamp(24px,2vw,29px)] px-(--space-fluid-container) lg:flex-row"
      >
        <motion.div
          variants={REVEAL}
          className="relative aspect-[755/440] w-full shrink-0 overflow-hidden rounded-[clamp(8px,0.7vw,10px)] lg:w-[58%]"
        >
          <Image
            src="/images/about/gateway-video.png"
            alt={gateway.videoAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
          <a
            href="#"
            aria-label="Play introduction video"
            className="absolute top-1/2 left-1/2 flex size-[clamp(48px,4.5vw,65px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-transform hover:scale-105"
          >
            <img src="/icons/play-ring.svg" alt="" className="absolute inset-0 size-full" />
            <img
              src="/icons/play-triangle.svg"
              alt=""
              className="relative size-[clamp(20px,1.9vw,27px)] rtl:-scale-x-100"
            />
          </a>
        </motion.div>

        <motion.div variants={REVEAL} className="flex max-w-[505px] flex-col gap-[clamp(10px,1vw,13px)]">
          <p className="font-alexandria text-[clamp(10px,0.83vw,12px)] leading-[1.5] font-bold text-brand">
            {gateway.label}
          </p>
          <h2
            id="about-gateway-title"
            className="font-alexandria text-[clamp(18px,1.67vw,24px)] leading-[1.5] font-semibold text-foreground"
          >
            {gateway.title}
          </h2>
          <p className="font-alexandria text-[clamp(14px,1.1vw,16px)] leading-[1.5] text-grey-primary">
            {gateway.description}
          </p>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
