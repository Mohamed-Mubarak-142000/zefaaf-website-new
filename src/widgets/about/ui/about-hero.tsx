"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { Button } from "@/shared/ui/button";

import { getAboutCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

export function AboutHero() {
  const { hero } = getAboutCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="about-hero-title" className="relative isolate overflow-hidden text-white">
        <div className="relative min-h-[clamp(320px,37vw,533px)] w-full">
          <Image
            src="/images/about/hero-bg.png"
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
          {/* Figma stacks a brand-tinted 20% overlay under a 60% grey/black
              scrim over the photo, darkening it enough for white text. */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(176,40,152,0.2) 0%, rgba(102,102,102,0.2) 35%), linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(102,102,102,0.6) 100%)",
            }}
          />

          {/* Soft fade into the page background at the bottom edge, matching
              the blurred white rectangle Figma layers under the photo. */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[clamp(60px,9vw,130px)] bg-linear-to-b from-transparent to-background"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-center gap-[clamp(20px,2.5vw,36px)] px-(--space-fluid-container) py-[clamp(32px,5vw,72px)]"
          >
            <motion.h1
              variants={REVEAL}
              id="about-hero-title"
              className="max-w-175 font-alexandria text-[clamp(28px,3.33vw,48px)] leading-normal font-semibold"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              variants={REVEAL}
              className="max-w-175 font-alexandria text-[clamp(13px,1.25vw,18px)] leading-normal"
            >
              {hero.description}
            </motion.p>

            <motion.div variants={REVEAL} className="flex flex-wrap items-center gap-[clamp(8px,0.83vw,12px)]">
              <Button asChild className="rounded-[8px] font-alexandria font-normal">
                <a href="#">{hero.ctaPrimary}</a>
              </Button>
              <Button
                asChild
                className="rounded-[8px] bg-white font-alexandria font-normal text-brand hover:bg-white/85"
              >
                <a href="#">{hero.ctaSecondary}</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
