"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { getEventsCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

// Alternating phrase/sparkle sequence, mirroring the homepage UpcomingEvents
// ticker (same assets, same slot pattern) — reused here at a smaller banner
// scale. Icons are fixed decoration; only the text slots (index 0, 2, 4, 6, 8)
// come from `upcomingEvents.ticker`, already translated for all 33 locales.
const TICKER_SLOTS = [
  { type: "text" },
  { type: "icon", value: "/icons/event-sparkle-1.svg" },
  { type: "text" },
  { type: "icon", value: "/icons/event-sparkle-2.svg" },
  { type: "text" },
  { type: "icon", value: "/icons/event-sparkle-3.svg" },
  { type: "text" },
  { type: "icon", value: "/icons/event-sparkle-1.svg" },
  { type: "text" },
] as const;

function TickerTrack({ phrases, ariaHidden }: { phrases: string[]; ariaHidden?: boolean }) {
  let textIndex = 0;

  return (
    <div className="flex shrink-0 items-center gap-[clamp(18px,2.3vw,37px)] px-[clamp(9px,1.1vw,18.5px)]" aria-hidden={ariaHidden}>
      {TICKER_SLOTS.map((slot, index) =>
        slot.type === "text" ? (
          <span
            key={index}
            className="font-almarai text-[clamp(17px,2vw,32px)] leading-[1.4] font-bold whitespace-nowrap text-white"
          >
            {phrases[textIndex++]}
          </span>
        ) : (
          <img key={index} src={slot.value} alt="" className="size-[clamp(18px,1.8vw,27px)]" />
        ),
      )}
    </div>
  );
}

export function EventsBanner() {
  const t = useTranslations();
  const { banner } = getEventsCopy(useLocale());
  const ticker = t.raw("upcomingEvents.ticker") as string[];

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="events-banner-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-(--space-fluid-lg) w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.div
          variants={REVEAL}
          className="relative isolate flex min-h-[clamp(340px,34vw,438px)] flex-col justify-end overflow-hidden rounded-(--radius-fluid) bg-[#1a1a1a]"
        >
          <Image
            src="/images/events/events-hero-bg.webp"
            alt=""
            fill
            sizes="(min-width: 1600px) 1600px, 100vw"
            className="absolute inset-0 object-cover opacity-60 grayscale contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-x-0 bottom-0 h-[75%] bg-linear-to-t from-brand/90 to-brand/0" />

          <div className="relative flex flex-col gap-[clamp(16px,1.8vw,24px)] px-[clamp(20px,5vw,68px)] pt-[clamp(28px,5vw,68px)] text-start text-white">
            <h2
              id="events-banner-title"
              className="font-alexandria text-[clamp(28px,4vw,48px)] leading-[1.2] font-bold"
            >
              <span className="block">{banner.headingLine1}</span>
              <span className="block">{banner.headingLine2}</span>
            </h2>
            <p className="max-w-[52ch] font-alexandria text-[clamp(12px,0.9vw,14px)] leading-[1.5] text-white/90">
              {banner.description}
            </p>
          </div>

          <div className="relative mt-[clamp(28px,4vw,56px)] mb-[clamp(20px,2.6vw,32px)] w-full overflow-hidden" dir="ltr">
            <div className="flex w-max animate-marquee">
              <TickerTrack phrases={ticker} />
              <TickerTrack phrases={ticker} ariaHidden />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
