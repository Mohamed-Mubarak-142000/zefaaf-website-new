"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getAboutCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

// The two carousel controls reuse the same "elements" arrow glyph Figma uses
// for both directions (node 121:30363 / 97:16728) — it points down natively,
// so `rotate-90` aims it right and the mirrored `-scale-x-100` variant aims
// it left, matching the exact transform pairing get_design_context returned.
function CarouselArrow({ variant }: { variant: "prev" | "next" }) {
  return (
    <button
      type="button"
      aria-label={variant === "prev" ? "Previous testimonial" : "Next testimonial"}
      className={`flex size-[clamp(24px,1.9vw,27px)] shrink-0 items-center justify-center rounded-[8px] rtl:-scale-x-100 ${
        variant === "prev" ? "bg-muted" : "bg-brand"
      }`}
    >
      <img
        src="/icons/arrow-right-02.svg"
        alt=""
        className={`size-[65%] ${variant === "prev" ? "-scale-x-100 rotate-90 opacity-60" : "-scale-x-100 -rotate-90 invert"}`}
      />
    </button>
  );
}

export function AboutTestimonial() {
  const { testimonial } = getAboutCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="about-testimonial-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] flex-col items-center gap-[clamp(28px,3vw,44px)] px-(--space-fluid-container) lg:flex-row lg:items-center lg:justify-between"
      >
        <motion.div variants={REVEAL} className="flex w-full max-w-[651px] flex-col gap-[clamp(24px,2.8vw,40px)]">
          <div className="flex flex-col gap-[clamp(2px,0.2vw,3px)]">
            <p className="font-alexandria text-[clamp(11px,1vw,13.5px)] leading-[1.5] font-medium text-brand">
              {testimonial.label}
            </p>
            <h2
              id="about-testimonial-title"
              className="font-alexandria text-[clamp(18px,1.67vw,24px)] leading-[1.5] font-semibold text-foreground"
            >
              {testimonial.title}
            </h2>
            <p className="font-alexandria text-[clamp(11px,0.83vw,12px)] leading-[1.5] text-grey-primary">
              {testimonial.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-[clamp(14px,1.25vw,18px)]">
            <div className="flex flex-col gap-[clamp(18px,1.9vw,27px)]">
              <p dir="auto" className="font-alexandria text-[clamp(14px,1.25vw,18px)] leading-[1.5] text-foreground">
                {testimonial.quote}
              </p>
              <div dir="auto" className="flex flex-wrap items-center gap-[clamp(12px,1.25vw,18px)]">
                {testimonial.names.map((name) => (
                  <p key={name} className="font-alexandria text-[clamp(14px,1.25vw,18px)] leading-[1.5] font-bold text-foreground">
                    {name}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-[clamp(6px,0.63vw,9px)]">
              <CarouselArrow variant="prev" />
              <CarouselArrow variant="next" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={REVEAL} className="relative w-full max-w-[648px] shrink-0">
          <div aria-hidden className="absolute top-0 left-[5.5%] h-[82%] w-[87%] rounded-[9px] bg-[#aa97a4]" />
          <div aria-hidden className="absolute top-[6%] left-[2.6%] h-[87%] w-[93%] rounded-[9px] bg-[#d6c3d0]" />
          <div className="relative aspect-[648/340] w-full overflow-hidden rounded-[9px] bg-muted" style={{ marginTop: "12%" }}>
            <Image
              src="/images/about/testimonial-photo.png"
              alt={testimonial.photoAlt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
