"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { BookSeatDialog } from "@/features/book-seat";
import { Button } from "@/shared/ui/button";
import { getTripImages, type Trip } from "@/shared/api";

import { getBosniaCopy } from "../model/copy";
import { getHeroPills } from "../model/trip-content";
import { FADE, REVEAL, VIEWPORT } from "../model/motion";

// Figma's photo collage sits on a 394.726×330.77 canvas: a tall card on top
// and a smaller card overlapping its bottom-right corner. Every offset below
// is that exact px geometry expressed as a % of the canvas, so the
// composition stays proportional to the real Figma layout at any width.
const CANVAS_W = 394.726;
const CANVAS_H = 330.77;

function pctW(px: number) {
  return `${(px / CANVAS_W) * 100}%`;
}
function pctH(px: number) {
  return `${(px / CANVAS_H) * 100}%`;
}

function InfoPill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-[clamp(6px,0.6vw,9px)] px-[clamp(8px,0.9vw,12.5px)] py-[clamp(6px,0.55vw,8px)]">
      <img src={icon} alt="" className="size-[clamp(14px,1.1vw,16px)]" />
      <p className="font-alexandria text-[clamp(10px,0.85vw,12px)] leading-[1.5] font-medium whitespace-nowrap text-white">
        {label}
      </p>
    </div>
  );
}

// `tripUlid` only decides where the "book your seat" CTA hands the visitor
// over to, and is set on a Rewaq trip page (/travels/{ulid}). `trip` is the
// Rewaq trip this hero illustrates — its own trip on the trip page, the next
// upcoming one on standalone /bosnia-tour — and everything in the hero comes
// from it: the headline, the description, the four facts in the info bar, and
// the banner photos. `copy.ts` only supplies what Rewaq leaves empty, and the
// layout is identical either way.
export function BosniaTourHero({ tripUlid, trip }: { tripUlid?: string; trip?: Trip | null } = {}) {
  const locale = useLocale();
  const { hero } = getBosniaCopy(locale);
  // Only the trip's own photos — there are no built-in ones to fall back on.
  // The backdrop and the two collage cards read one image each and the indices
  // below wrap around, so a trip with fewer than three repeats a photo rather
  // than leaving a slot blank; a trip with none shows no photos at all.
  const heroImages = getTripImages(trip ?? null);
  const [bookSeatOpen, setBookSeatOpen] = useState(false);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const reduceMotion = useReducedMotion();
  // Wrapped on read as well as on advance, so a shorter trip banner list can
  // never index past the end. `|| 1` keeps the modulo defined when the trip
  // has no photos at all, in which case nothing below renders anyway.
  const imageAt = (offset: number) => heroImages[(activeHeroImage + offset) % (heroImages.length || 1)];
  const backdrop = imageAt(0);

  useEffect(() => {
    if (reduceMotion || heroImages.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [reduceMotion, heroImages.length]);

  // Headline, description, and the date/price/duration/destination facts all
  // come from the trip; each one Rewaq leaves empty keeps its translated
  // placeholder from `copy.ts`.
  const title = trip?.main_title?.trim() || hero.title;
  const description = trip?.main_description?.trim() || hero.description;
  const pillValues = getHeroPills(trip, locale, hero.pills);
  const pills = [
    { icon: "/icons/bosnia-tour/icon-pill-calendar.svg", label: pillValues.date },
    { icon: "/icons/bosnia-tour/icon-pill-payment.svg", label: pillValues.payment },
    { icon: "/icons/bosnia-tour/icon-pill-duration.svg", label: pillValues.duration },
    { icon: "/icons/bosnia-tour/icon-pill-location.svg", label: pillValues.location },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="bosnia-tour-hero-title" className="relative isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <AnimatePresence initial={false}>
            {backdrop && (
              <motion.div
                key={backdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Always `priority`: this is the page's LCP image, and the
                    trip banners are large photos coming off Rewaq, so waiting
                    for lazy-loading to notice them is what left the hero
                    empty for seconds. */}
                <Image
                  src={backdrop}
                  alt=""
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover object-[center_45%]"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/30" />
          {/* Two stacked washes from Figma: a black scrim over the top that
              carries the white headline, then a pink tint over the rest.

              Figma sizes the scrim at 57% of the hero and puts the gradient's
              transparent stop at 130.62% of that — past the rect, so it is
              still ~21% black where it ends, and that clipped edge is the seam
              that showed across the photo. Both washes are stretched here to
              where their own gradient actually finishes (57% × 1.3062 ≈ 74.5%,
              and the full height for the tint), which keeps every colour above
              identical to Figma and lets each one fade out to nothing instead
              of being cut off mid-fade. */}
          <div className="absolute inset-x-0 top-0 h-[74.45%] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,rgba(44,44,44,0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(210,96,221,0.1)_39.658%)]" />
        </div>

        {/* The torn white rock edge that dissolves the photo into the page. Its
            bottom rows are solid white, so it butts straight onto the section
            below with no seam. Full-bleed, unlike the max-w'd content. */}
        <Image
          src="/images/bosnia-tour/hero-torn-edge.webp"
          alt=""
          width={2878}
          height={302}
          priority
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-auto w-full select-none"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative z-10 mx-auto w-full max-w-[1600px] px-(--space-fluid-container) pt-[clamp(56px,10.65vw,153px)] pb-[clamp(84px,13.45vw,194px)]"
        >
          {/* Rewaq translates a trip's title and description into some of the
              33 locales only, so `dir="auto"` keeps an Arabic title readable on
              an English page and the other way round. */}
          <motion.h1
            variants={REVEAL}
            id="bosnia-tour-hero-title"
            dir="auto"
            className="max-w-[846px] font-alexandria text-[clamp(24px,2.5vw,36px)] leading-[1.2] font-bold text-white"
          >
            {title}
          </motion.h1>

          {/* Figma's 997px box is ~128 characters per line at this font size,
              which reads as a wall — and a trip's own description from Rewaq
              runs longer than the placeholder copy did. The cap is whichever
              is narrower: that box, or a readable 70-character measure. */}
          <motion.p
            variants={REVEAL}
            dir="auto"
            className="mt-[clamp(4px,0.42vw,6px)] max-w-[min(997px,70ch)] font-alexandria text-[clamp(12px,0.94vw,13.5px)] leading-[clamp(20px,2vw,28.8px)] text-white"
          >
            {description}
          </motion.p>

          {/* Figma's button instance reports its library default of 10.5px, but the
              frame it renders in is 155px wide — the label is really set at 14px,
              same as the info-bar labels below it. */}
          <motion.div variants={REVEAL}>
            <Button
              type="button"
              onClick={() => setBookSeatOpen(true)}
              className="mt-[clamp(18px,2.24vw,32px)] h-[clamp(32px,2.5vw,36px)] rounded-[8px] px-[clamp(8px,0.73vw,10.5px)] font-alexandria text-[clamp(11px,0.97vw,14px)] font-normal"
            >
              {hero.cta}
            </Button>
            <BookSeatDialog open={bookSeatOpen} onOpenChange={setBookSeatOpen} tripUlid={tripUlid} />
          </motion.div>

          {/* 708×70 in Figma: a translucent wash blurred over the photo, with
              the four facts laid out inside it.

              Figma's wash is white at 15%, which only reads because the mockup
              sits on a dark canyon photo. A trip's own banner can be anything —
              a bright Nile sunset made the bar vanish — so the wash is a dark
              scrim instead: it keeps the frosted look on a dark photo and still
              holds the white labels on a light one. */}
          <motion.div
            variants={REVEAL}
            className="mt-[clamp(18px,2.22vw,32px)] flex w-full max-w-160 flex-wrap items-center justify-between gap-x-[clamp(4px,0.5vw,6px)] gap-y-[clamp(6px,0.6vw,9px)] rounded-[clamp(24px,2.6vw,37px)] bg-black/25 px-[clamp(12px,1.3vw,18px)] py-[clamp(10px,1.1vw,16px)] backdrop-blur-md"
          >
            {pills.map((pill) => (
              <InfoPill key={pill.icon} icon={pill.icon} label={pill.label} />
            ))}
          </motion.div>

          {/* Below xl the bar still needs the full content width, so the collage
              stacks underneath instead of colliding with it; from xl it takes
              its Figma spot, bottom-right and overlapping the torn edge. With
              no trip photos there is nothing to put in it, so it goes rather
              than showing two empty frames. */}
          {heroImages.length > 0 && (
          <motion.div
            variants={FADE}
            className="relative mx-auto mt-[clamp(24px,4vw,40px)] w-full max-w-95 xl:absolute xl:bottom-0.75 xl:inset-e-(--space-fluid-container) xl:mt-0 xl:w-[clamp(280px,27.4vw,395px)] xl:max-w-none"
            style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
          >
            <div
              className="absolute overflow-hidden rounded-[8px] border-[5px] border-white bg-muted shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{ left: pctW(6), top: pctH(7), width: pctW(290.798), height: pctH(279.805) }}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={imageAt(1)}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  {/* Both cards sit above the fold beside the headline, so they
                      load eagerly — lazy-loading them is what left them as
                      empty white frames while the page was already up. */}
                  <Image
                    src={imageAt(1)}
                    alt={hero.imageAlt.collageMain}
                    fill
                    loading="eager"
                    sizes="(min-width: 1280px) 20vw, 45vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="absolute overflow-hidden rounded-[8px] border-[5px] border-white bg-muted shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{ left: pctW(200.86), top: pctH(95.93), width: pctW(193.865), height: pctH(231.839) }}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={imageAt(2)}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={imageAt(2)}
                    alt={hero.imageAlt.collageSecondary}
                    fill
                    loading="eager"
                    sizes="(min-width: 1280px) 14vw, 32vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          )}
        </motion.div>
      </section>
    </MotionConfig>
  );
}
