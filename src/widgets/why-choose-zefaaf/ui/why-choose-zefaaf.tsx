"use client";

import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/shared/lib/utils";

type Feature = { title: string; description: string };

const HEADER_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const COLLAGE_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const WHEEL_VARIANTS: Variants = {
  enter: (direction: number) => ({
    y: `${direction * 100}%`,
    rotateX: direction * -10,
  }),
  center: {
    y: 0,
    rotateX: 0,
  },
  exit: (direction: number) => ({
    y: `${direction * -100}%`,
    rotateX: direction * 10,
  }),
};

const FEATURES_PER_PAGE = 5;

// Figma's frame for the photo collage is a fixed 676.243×426.473px canvas
// built from two rotated, overlapping photo cards. Every position/size below
// is that exact px geometry expressed as a % of the canvas (each card's
// rotation center as left/top, its un-rotated size as width/height, then
// centered + rotated via transform) so the composition stays proportional to
// the real Figma layout at any rendered size instead of needing hand-tuned
// breakpoints.
const CANVAS_W = 676.243;
const CANVAS_H = 426.473;

function pctW(px: number) {
  return `${(px / CANVAS_W) * 100}%`;
}
function pctH(px: number) {
  return `${(px / CANVAS_H) * 100}%`;
}

function PhotoCollage() {
  return (
    <motion.div
      variants={COLLAGE_VARIANTS}
      className="relative mx-auto w-full max-w-[480px] shrink-0 will-change-transform lg:mx-0 lg:w-[44%] lg:max-w-[560px]"
      style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
    >
      {/* Back card — mosque prayer scene, rotated -5.56deg */}
      <div
        className="absolute overflow-hidden rounded-[clamp(6px,1vw,9.5px)] bg-black/5"
        style={{
          left: pctW(274.554),
          top: pctH(200.849),
          width: pctW(517.33),
          height: pctH(353.26),
          transform: "translate(-50%, -50%) rotate(-5.56deg)",
        }}
      >
        <Image
          src="/images/why-choose/mosque-prayer.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, 60vw"
          className="object-cover"
        />
      </div>

      {/* Front card — couple portrait, rotated 11.05deg, white border */}
      <div
        className="absolute overflow-hidden rounded-[clamp(6px,1vw,9.5px)] border-white bg-black/5"
        style={{
          left: pctW(529.965),
          top: pctH(278.955),
          width: pctW(248.852),
          height: pctH(251.992),
          borderWidth: "clamp(4px,0.9vw,6.5px)",
          transform: "translate(-50%, -50%) rotate(11.05deg)",
        }}
      >
        <Image
          src="/images/why-choose/couple-portrait.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 16vw, 32vw"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

function FeaturesList({ features }: { features: Feature[] }) {
  const [[page, direction], setPage] = useState([0, 1]);
  const pageCount = Math.ceil(features.length / FEATURES_PER_PAGE);
  const visibleFeatures = features.slice(page * FEATURES_PER_PAGE, (page + 1) * FEATURES_PER_PAGE);

  function selectPage(nextPage: number) {
    if (nextPage === page) return;
    setPage([nextPage, nextPage > page ? 1 : -1]);
  }

  return (
    <div className="w-full lg:max-w-[560px]">
      <div className="relative overflow-hidden [perspective:1000px]">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={WHEEL_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex w-full origin-center flex-col gap-[clamp(18px,2.2vw,27px)] transform-3d"
          >
            {visibleFeatures.map((feature, index) => {
              const featureNumber = page * FEATURES_PER_PAGE + index;

              return (
                <div key={feature.title} className="flex items-start gap-[12px]">
                  {/* Keeping the marker in the same row as its content prevents
                      variable description heights from shifting their alignment. */}
                  <div className="relative z-10 mt-[5px] flex w-[52px] shrink-0 items-center justify-between">
                    <span
                      className={cn(
                        "size-[12px] shrink-0 rounded-full",
                        featureNumber === 0 ? "bg-brand" : "bg-muted-foreground/45",
                      )}
                    />
                    <span className="font-alexandria text-[12px] leading-none font-semibold text-foreground">
                      {String(featureNumber + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute top-[12px] start-[5.5px] h-[38px] w-px bg-foreground/25" />
                  </div>

                  <div className="flex flex-1 flex-col gap-[9px] text-start">
                    <h3 className="font-almarai text-[16px] leading-[1.4] font-extrabold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-almarai text-[12px] leading-[1.6] text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-[clamp(20px,2.4vw,32px)] flex items-center justify-start gap-[6px]">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show features ${index * FEATURES_PER_PAGE + 1}–${Math.min((index + 1) * FEATURES_PER_PAGE, features.length)}`}
            aria-current={page === index ? "page" : undefined}
            onClick={() => selectPage(index)}
            className={cn(
              "h-[9px] rounded-full bg-brand transition-[width,opacity] duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand",
              page === index ? "w-[88px] opacity-100" : "w-[28px] opacity-35 hover:opacity-60",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function WhyChooseZefaaf() {
  const t = useTranslations();
  const features = t.raw("whyChoose.features") as Feature[];

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="why-choose-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.div variants={HEADER_VARIANTS} className="flex flex-col items-start gap-[18px] text-start">
          <h2
            id="why-choose-title"
            className="font-almarai text-[clamp(24px,2.5vw,30px)] leading-[1.4] font-extrabold text-brand"
          >
            {t("whyChoose.title")}
          </h2>
          <p className="max-w-[720px] font-almarai text-[clamp(14px,1.1vw,16px)] leading-[1.6] text-muted-foreground">
            {t("whyChoose.description")}
          </p>
        </motion.div>

        <div className="mt-[clamp(32px,4vw,60px)] flex flex-col items-center gap-[clamp(32px,4vw,60px)] lg:flex-row-reverse lg:items-center lg:justify-between">
          <PhotoCollage />
          <FeaturesList features={features} />
        </div>
      </motion.section>
    </MotionConfig>
  );
}
