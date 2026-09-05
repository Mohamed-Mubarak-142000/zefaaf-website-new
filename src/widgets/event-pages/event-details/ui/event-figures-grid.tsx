"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getEventDetailsCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";
import type { PublicEvent } from "@/shared/api";

const CARD_COUNT = 4;

export function EventFiguresGrid({ event }: { event?: PublicEvent | null }) {
  const locale = useLocale();
  const { title, description, name, followers } = getEventDetailsCopy(locale).figures;
  const speakers: NonNullable<PublicEvent["speakers"]> = event?.speakers?.length
    ? event.speakers
    : Array.from({ length: CARD_COUNT }, (_, index) => ({
        id: index,
        name,
        description: undefined,
        followers_count: undefined,
        image_url: "/images/image 568.svg",
      }));
  const [activeIndex, setActiveIndex] = useState(speakers.length);
  const [cardStep, setCardStep] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [instantMove, setInstantMove] = useState(true);
  const viewportRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const carouselSpeakers = [...speakers, ...speakers, ...speakers];

  function showNext() {
    setActiveIndex((current) => current + 1);
  }

  function showPrevious() {
    setActiveIndex((current) => current - 1);
  }

  useEffect(() => {
    if (reduceMotion || speakers.length < 2) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, 2800);
    return () => window.clearInterval(interval);
  }, [reduceMotion, speakers.length]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const updateMeasurements = () => {
      const width = viewport.clientWidth;
      const visibleCount = width >= 1024 ? 4 : width >= 640 ? 2 : 1;
      const gap = width >= 1024 ? 34 : 16;
      const nextCardWidth = (width - gap * (visibleCount - 1)) / visibleCount;
      setCardWidth(nextCardWidth);
      setCardStep(nextCardWidth + gap);
      requestAnimationFrame(() => setInstantMove(false));
    };
    updateMeasurements();
    const observer = new ResizeObserver(updateMeasurements);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  function finishSlide() {
    if (activeIndex >= speakers.length * 2) {
      setInstantMove(true);
      setActiveIndex(speakers.length);
      requestAnimationFrame(() => requestAnimationFrame(() => setInstantMove(false)));
    } else if (activeIndex <= 0) {
      setInstantMove(true);
      setActiveIndex(speakers.length);
      requestAnimationFrame(() => requestAnimationFrame(() => setInstantMove(false)));
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="event-figures-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(20px,2.3vw,32px)] px-(--space-fluid-container) pt-[clamp(100px,9vw,130px)]"
      >
        <motion.div variants={REVEAL} className="flex flex-col gap-[clamp(10px,1vw,14px)]">
          <h2
            id="event-figures-title"
            dir="auto"
            className="max-w-[62ch] whitespace-pre-line font-alexandria text-[clamp(24px,2.7vw,36px)] leading-[1.2] font-bold text-foreground"
          >
            {title}
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p
              dir="auto"
              className="max-w-[70ch] font-alexandria text-[clamp(14px,1.15vw,18px)] leading-[1.5] text-muted-foreground"
            >
              {description}
            </p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={showPrevious} aria-label="Previous speakers" className="flex size-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-brand hover:bg-brand hover:text-white">
                <ChevronRight className="size-5 rtl:hidden" />
                <ChevronLeft className="hidden size-5 rtl:block" />
              </button>
              <button type="button" onClick={showNext} aria-label="Next speakers" className="flex size-10 items-center justify-center rounded-full bg-brand text-white transition-opacity hover:opacity-85">
                <ChevronLeft className="size-5 rtl:hidden" />
                <ChevronRight className="hidden size-5 rtl:block" />
              </button>
            </div>
          </div>
        </motion.div>

        <div ref={viewportRef} className="overflow-hidden" dir="ltr">
          <motion.div
            animate={{ x: -(activeIndex * cardStep) }}
            transition={instantMove || reduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={finishSlide}
            className="flex w-max flex-nowrap gap-4 lg:gap-[34px]"
          >
          {carouselSpeakers.map((speaker, index) => (
            <motion.article
              key={`${Math.floor(index / speakers.length)}-${speaker.id}`}
              style={{ width: cardWidth || undefined }}
              className="flex shrink-0 flex-col gap-[8px] overflow-hidden rounded-[12px] bg-person-card p-[12px] pb-[16px]"
            >
              <div className="relative aspect-[274/325] w-full overflow-hidden rounded-[16px]">
                <Image
                  src={speaker.image_url ?? "/images/image 568.svg"}
                  alt={speaker.name}
                  fill
                  unoptimized
                  sizes="(min-width: 1280px) 304px, 45vw"
                  className="object-cover"
                />
              </div>
              <p dir="auto" className="font-alexandria text-[clamp(14px,1.3vw,18px)] leading-[1.5] font-bold text-person-card-foreground">
                {speaker.name}
              </p>
              {speaker.description && (
                <p dir="auto" className="line-clamp-2 w-full text-center font-alexandria text-[clamp(11px,0.9vw,13px)] leading-[1.6] text-muted-foreground">
                  {speaker.description}
                </p>
              )}
              {(speaker.followers_count == null || speaker.followers_count > 0) && (
                <p dir="auto" className="w-full text-center font-alexandria text-[clamp(11px,0.9vw,13px)] leading-[1.5] font-medium text-person-card-foreground">
                  {speaker.followers_count != null
                    ? `${new Intl.NumberFormat(locale, { notation: "compact", maximumFractionDigits: 1 }).format(speaker.followers_count)} ${followers.trim().split(/\s+/).at(-1) ?? ""}`
                    : followers}
                </p>
              )}
            </motion.article>
          ))}
          </motion.div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
