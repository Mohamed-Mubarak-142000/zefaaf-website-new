"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getSuccessStoriesCopy } from "../model/copy";
import { REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const PHOTOS: readonly { src: string; overlay: string; large?: boolean }[] = [
  { src: "/images/success-stories/gallery-life-partner.png", overlay: "bg-black/20" },
  { src: "/images/success-stories/gallery-healthy-choices.png", overlay: "bg-black/35" },
  { src: "/images/success-stories/gallery-live-better.png", overlay: "bg-black/35", large: true },
  { src: "/images/success-stories/gallery-healthy-journey.png", overlay: "bg-black/35" },
  { src: "/images/success-stories/gallery-happy-life.png", overlay: "bg-black/20" },
];

export function SuccessStoriesGallery() {
  const { gallery } = getSuccessStoriesCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-[clamp(24px,3vw,42px)] flex w-full max-w-[1600px] gap-[clamp(12px,1.5vw,21px)] overflow-x-auto px-(--space-fluid-container) pb-[clamp(4px,0.5vw,8px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PHOTOS.map((photo, index) => (
          <motion.div
            key={photo.src}
            custom={index}
            variants={REVEAL_STAGGERED}
            className={`relative shrink-0 overflow-hidden rounded-[clamp(24px,3vw,43px)] ${
              photo.large ? "w-[clamp(220px,42vw,611px)]" : "w-[clamp(96px,11vw,157px)]"
            } h-[clamp(280px,33vw,471px)]`}
          >
            <Image
              src={photo.src}
              alt={gallery[index].alt}
              fill
              sizes={photo.large ? "(min-width: 1024px) 42vw, 60vw" : "(min-width: 1024px) 11vw, 25vw"}
              className="object-cover"
            />
            <div aria-hidden className={`absolute inset-0 ${photo.overlay}`} />
            <p className="absolute bottom-6 left-6 origin-bottom-left -rotate-90 font-alexandria text-[clamp(16px,1.6vw,24px)] leading-[1.4] font-bold whitespace-nowrap text-white">
              {gallery[index].label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </MotionConfig>
  );
}
