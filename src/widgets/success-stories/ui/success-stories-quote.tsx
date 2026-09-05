"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getSuccessStoriesCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";
import { getSuccessStories } from "@/shared/api";

const QUOTE_IMAGES = [
  "/images/success-stories/quote-photo.png",
  "/images/success-stories/gallery-live-better.png",
  "/images/success-stories/journey-photo-main.png",
] as const;

// Same "elements" arrow glyph used by the About-page testimonial carousel
// (node 121:30363 / 97:16728) — it points down natively, so `rotate-90` aims
// it right and the mirrored `-scale-x-100` variant aims it left.
function CarouselArrow({ variant, onClick }: { variant: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
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

export function SuccessStoriesQuote() {
  const { quote } = getSuccessStoriesCopy(useLocale());
  const [activeImage, setActiveImage] = useState(0);
  const [remoteStories, setRemoteStories] = useState<Array<{ image: string; text: string; names: string[] }>>([]);
  const fallbackSlides = QUOTE_IMAGES.map((image) => ({ image, text: quote.quote, names: [...quote.names] }));
  const slides = remoteStories.length > 1 ? remoteStories : fallbackSlides;
  const activeSlide = slides[activeImage % slides.length];

  useEffect(() => {
    void getSuccessStories().then((stories) => {
      const normalized = stories.map((story) => {
        let image: string | null = null;
        for (const key of ["image_url", "image", "photo", "imageUrl"]) {
          if (typeof story[key] === "string") image = story[key];
        }
        const text = ["quote", "story", "content", "description", "testimonial"]
          .map((key) => story[key]).find((value): value is string => typeof value === "string") ?? "";
        const names = ["couple_name", "name", "names", "user_name", "partner_name"]
          .flatMap((key) => Array.isArray(story[key]) ? story[key] as string[] : typeof story[key] === "string" ? [story[key] as string] : []);
        return image && text ? { image, text, names } : null;
      }).filter((story): story is { image: string; text: string; names: string[] } => Boolean(story));
      if (normalized.length) setRemoteStories(normalized);
    }).catch(() => undefined);
  }, []);

  const showPrevious = () => {
    setActiveImage((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveImage((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="success-stories-quote-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-[clamp(28px,3vw,44px)] px-(--space-fluid-container) pt-[clamp(70px,6.5vw,90px)] lg:flex-row lg:items-center lg:justify-between"
      >
        <motion.div variants={REVEAL} className="flex w-full max-w-[651px] flex-col gap-[clamp(24px,2.8vw,40px)]">
          <div className="flex flex-col gap-[clamp(2px,0.2vw,3px)]">
            <p className="font-alexandria text-[clamp(11px,1vw,13.5px)] leading-[1.5] font-medium text-brand">
              {quote.label}
            </p>
            <h2
              id="success-stories-quote-title"
              className="font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.4] font-semibold text-foreground"
            >
              {quote.title}
            </h2>
            <p className="font-alexandria text-[clamp(14px,1.1vw,18px)] leading-[1.4] text-grey-primary">
              {quote.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-[clamp(14px,1.25vw,18px)]">
            <div className="flex flex-col gap-[clamp(18px,1.9vw,27px)]">
              <p dir="auto" className="font-alexandria text-[clamp(14px,1.25vw,18px)] leading-[1.5] text-foreground">
                {activeSlide.text}
              </p>
              <div dir="auto" className="flex flex-wrap items-center gap-[clamp(12px,1.25vw,18px)]">
                {(activeSlide.names.length ? activeSlide.names : quote.names).map((name) => (
                  <p key={name} className="font-alexandria text-[clamp(14px,1.25vw,18px)] leading-[1.5] font-bold text-foreground">
                    {name}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-[clamp(6px,0.63vw,9px)]">
              <CarouselArrow variant="prev" onClick={showPrevious} />
              <CarouselArrow variant="next" onClick={showNext} />
            </div>
          </div>
        </motion.div>

        <motion.div variants={REVEAL} className="relative w-full max-w-[648px] shrink-0">
          <div aria-hidden className="absolute top-0 left-[5.5%] h-[82%] w-[87%] rounded-[9px] bg-[#aa97a4]" />
          <div aria-hidden className="absolute top-[6%] left-[2.6%] h-[87%] w-[93%] rounded-[9px] bg-[#d6c3d0]" />
          <div className="relative aspect-[648/340] w-full overflow-hidden rounded-[9px] bg-muted" style={{ marginTop: "12%" }}>
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={activeSlide.image}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeSlide.image}
                  alt={quote.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
