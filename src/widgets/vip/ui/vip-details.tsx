"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getVipCopy } from "../model/copy";
import { FADE, REVEAL, VIEWPORT } from "../model/motion";

// Both photos fill the same 534×232.5 window in Figma; `objectPosition`
// reproduces where that window sits over each source image.
const PHOTOS = [
  {
    src: "/images/vip/match-search-mosque.webp",
    objectPosition: "center 52%",
    // Figma alternates the layout: photo leads the first row, copy the second.
    photoFirst: true,
  },
  {
    src: "/images/vip/match-search-couple.webp",
    objectPosition: "center 33%",
    photoFirst: false,
  },
] as const;

export function VipDetails() {
  const { details } = getVipCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <div className="section-gap mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(32px,2.97vw,43px)] px-(--space-fluid-container)">
        {details.map((detail, index) => {
          const photo = PHOTOS[index] ?? PHOTOS[0];
          const titleId = `vip-detail-${index}-title`;

          const photoColumn = (
            <motion.div
              variants={FADE}
              className="relative w-full shrink-0 overflow-hidden rounded-[9px] bg-muted lg:basis-[40.5%]"
              style={{ aspectRatio: "534 / 232.5" }}
            >
              <Image
                src={photo.src}
                alt={detail.imageAlt}
                fill
                sizes="(min-width: 1024px) 41vw, 100vw"
                style={{ objectPosition: photo.objectPosition }}
                className="object-cover"
              />
            </motion.div>
          );

          const copyColumn = (
            <motion.div variants={REVEAL} className="w-full lg:basis-[57.8%]">
              <h2
                id={titleId}
                className="font-alexandria text-[clamp(19px,1.67vw,24px)] leading-normal font-semibold text-foreground"
              >
                {detail.title}
              </h2>

              <ul className="mt-[clamp(16px,1.67vw,24px)] flex flex-col gap-[clamp(4px,0.42vw,6px)]">
                {detail.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-[clamp(6px,0.63vw,9px)] font-alexandria text-[clamp(13px,1.04vw,15px)] leading-[1.5] font-medium text-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.45em] size-[clamp(7px,0.66vw,9.5px)] shrink-0 rounded-full bg-lavender"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-[clamp(6px,0.63vw,9px)] max-w-[706px] font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.5] text-muted-foreground">
                {detail.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          );

          return (
            <motion.section
              key={titleId}
              aria-labelledby={titleId}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex flex-col gap-[clamp(16px,2vw,29px)] lg:flex-row lg:items-center lg:justify-between lg:gap-[clamp(16px,1.6vw,23px)]"
            >
              {photo.photoFirst ? photoColumn : copyColumn}
              {photo.photoFirst ? copyColumn : photoColumn}
            </motion.section>
          );
        })}
      </div>
    </MotionConfig>
  );
}
