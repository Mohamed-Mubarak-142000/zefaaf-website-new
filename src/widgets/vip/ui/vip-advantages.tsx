"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getVipCopy } from "../model/copy";
import { FADE, REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// Figma composes the right-hand cluster inside a 546.45×367.72 box: two
// irregularly-clipped photos with the note card layered on top. Every offset
// below is that px geometry as a % of the box, so the composition stays
// proportional at any width instead of needing per-breakpoint nudges. Below
// `md` the box collapses and the pieces stack in normal flow.
const CLUSTER_ASPECT = "546.45 / 367.72";

export function VipAdvantages() {
  const { advantages } = getVipCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="vip-advantages-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative isolate mt-[clamp(72px,10.5vw,151px)] overflow-hidden text-white"
      >
        <Image
          src="/images/vip/sunset-sky.webp"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />

        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(32px,3.5vw,50px)] px-(--space-fluid-container) pt-[clamp(48px,10.5vw,151px)] pb-[clamp(40px,5.9vw,85px)] lg:flex-row lg:items-start lg:justify-between lg:gap-[clamp(24px,2.6vw,38px)]">
          <div className="lg:basis-[52.9%]">
            <motion.h2
              id="vip-advantages-title"
              variants={REVEAL}
              className="max-w-[543px] font-alexandria text-[clamp(20px,1.67vw,24px)] leading-[1.2] font-semibold"
            >
              {advantages.title}
            </motion.h2>

            <ul className="mt-[clamp(24px,2.5vw,36px)] flex flex-col gap-[clamp(14px,1.25vw,18px)]">
              {advantages.items.map((item, index) => (
                <motion.li
                  key={item.title}
                  custom={index}
                  variants={REVEAL_STAGGERED}
                  className="flex items-start gap-[clamp(6px,0.63vw,9px)]"
                >
                  <span
                    aria-hidden
                    className="mt-[0.5em] size-[clamp(7px,0.66vw,9.5px)] shrink-0 rounded-full bg-white"
                  />
                  <div className="flex flex-col gap-[clamp(2px,0.21vw,3px)]">
                    <h3 className="font-alexandria text-[clamp(14px,1.11vw,16px)] leading-[1.5] font-medium">
                      {item.title}
                    </h3>
                    <p className="max-w-[681px] font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.5]">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            variants={FADE}
            className="flex w-full flex-col gap-[clamp(16px,2vw,24px)] md:relative md:block lg:basis-[38%]"
            style={{ aspectRatio: CLUSTER_ASPECT }}
          >
            {/* `md:contents` dissolves this wrapper on desktop so both photos
                position against the aspect box above; below md it keeps them
                side by side in a simple row. */}
            <div className="flex items-end gap-[4%] md:contents">
              <Image
                src="/images/image%20679.svg"
                alt={advantages.advisorAlt}
                width={321}
                height={306}
                sizes="(min-width: 1024px) 23vw, 45vw"
                className="h-auto w-[52%] -rotate-[12deg] rounded-[16px] md:absolute md:-top-[23%] md:left-0 md:h-[83.18%] md:w-[58.61%] md:object-contain"
              />
              <Image
                src="/images/image%20680.svg"
                alt={advantages.coupleAlt}
                width={223}
                height={207}
                sizes="(min-width: 1024px) 16vw, 32vw"
                className="h-auto w-[38%] rotate-[6deg] rounded-[16px] md:absolute md:top-[69%] md:left-[7%] md:h-[56.1%] md:w-[41.06%] md:object-contain"
              />
            </div>

            {/* The note card sits on top of a photograph in both themes, so its
                cream/blue pairing is fixed rather than theme-derived. */}
            <div className="rounded-[18px] bg-vip-note p-[clamp(14px,1.25vw,18px)] pt-[clamp(20px,3.5vw,50px)] text-vip-note-foreground md:absolute md:top-[9.65%] md:left-[30.28%] md:min-h-[90.35%] md:w-[69.72%]">
              <Image
                src="/icons/vip-collaboration.svg"
                alt=""
                width={60}
                height={59}
                className="w-[clamp(38px,4.17vw,60px)]"
              />

              <h3 className="mt-[clamp(9px,0.94vw,13.5px)] font-alexandria text-[clamp(14px,1.25vw,18px)] leading-[1.5] font-semibold">
                {advantages.note.title}
              </h3>

              <p className="mt-[clamp(10px,1.04vw,15px)] font-alexandria text-[clamp(10px,0.83vw,12px)] leading-[1.5]">
                {advantages.note.description}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
