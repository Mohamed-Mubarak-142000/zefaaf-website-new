"use client";

import { AnimatePresence, motion, MotionConfig, type Variants } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/shared/ui/button";
import { getDirection, type Locale } from "@/shared/i18n";

const TITLE_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
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

const EVENTS_PER_PAGE = 2;

// Alternating phrase/sparkle sequence for the bottom ribbon, taken straight
// from the Figma ticker. Rendered twice back-to-back (see the track below) so
// the `animate-marquee` -50% loop has no visible seam. Icons are fixed
// decoration; only the text slots (index 0, 2, 4, 6, 8) come from
// `upcomingEvents.ticker`.
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
    <div className="flex shrink-0 items-center gap-[clamp(24px,3vw,49px)] px-[clamp(12px,1.5vw,24.5px)]" aria-hidden={ariaHidden}>
      {TICKER_SLOTS.map((slot, index) =>
        slot.type === "text" ? (
          <span
            key={index}
            className="font-almarai text-[clamp(22px,2.7vw,42.75px)] leading-[1.4] font-bold whitespace-nowrap text-white"
          >
            {phrases[textIndex++]}
          </span>
        ) : (
          <img key={index} src={slot.value} alt="" className="size-[clamp(24px,2.4vw,36px)]" />
        ),
      )}
    </div>
  );
}

export function UpcomingEvents() {
  const t = useTranslations();
  const direction = getDirection(useLocale() as Locale);
  const events = t.raw("upcomingEvents.events") as {
    date: string;
    time: string;
    title: string;
    location: string;
    price: string;
  }[];
  const ticker = t.raw("upcomingEvents.ticker") as string[];
  const [[page, wheelDirection], setPage] = useState([0, 1]);
  const pageCount = Math.ceil(events.length / EVENTS_PER_PAGE);
  const visibleEvents = events.slice(page * EVENTS_PER_PAGE, (page + 1) * EVENTS_PER_PAGE);

  function selectPage(nextPage: number) {
    if (nextPage === page) return;
    setPage([nextPage, nextPage > page ? 1 : -1]);
  }

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="upcoming-events-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="section-gap relative isolate mt-(--space-fluid-xl) overflow-hidden bg-[#1a1a1a] pb-[clamp(28px,3.5vw,48px)] text-white"
      >
        <Image
          src="/images/events/events-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 object-cover object-bottom opacity-60 grayscale contrast-125 brightness-75 dark:opacity-45 dark:brightness-50"
        />
        <div className="absolute inset-0 bg-black/20 dark:bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-linear-to-t from-brand/90 to-brand/0 dark:from-brand/70" />
        <img
          src="/images/events/glow-top.svg"
          alt=""
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[clamp(90px,12.4vw,179px)] w-full -translate-y-1/2 opacity-100 dark:opacity-30"
        />

        <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(28px,3.5vw,44px)] px-(--space-fluid-container) lg:flex-row lg:items-center lg:justify-between lg:gap-[clamp(32px,4vw,64px)]">
          {/* DOM order follows RTL reading order: heading/description first,
             then the event list — ambient dir="rtl" renders this as
             text-right / list-left, matching the Figma design. */}
          <motion.div
            variants={TITLE_VARIANTS}
            className="flex w-full flex-col items-start text-start lg:max-w-[380px] lg:shrink-0"
          >
            <h2
              id="upcoming-events-title"
              className="font-almarai text-[clamp(32px,5.2vw,64px)] leading-[1.15] font-bold"
            >
              {t("nav.upcomingEvents")}
            </h2>
            <p className="mt-[clamp(16px,1.8vw,24px)] font-almarai text-[clamp(13px,1vw,16px)] leading-[1.6] text-white/85">
              {t("upcomingEvents.description")}
            </p>
            <div className="mt-[clamp(20px,2.2vw,28px)] flex items-center gap-[5px]">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show events ${index * EVENTS_PER_PAGE + 1}–${Math.min((index + 1) * EVENTS_PER_PAGE, events.length)}`}
                  aria-current={page === index ? "page" : undefined}
                  onClick={() => selectPage(index)}
                  className={`h-[6px] rounded-full bg-white transition-[width,opacity] duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white ${
                    page === index ? "w-[86px] opacity-100" : "w-[27px] opacity-55 hover:opacity-80"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <div className="relative w-full overflow-hidden [perspective:1000px] lg:max-w-[680px]">
            <AnimatePresence initial={false} mode="popLayout" custom={wheelDirection}>
              <motion.div
                key={page}
                custom={wheelDirection}
                variants={WHEEL_VARIANTS}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                className="flex w-full origin-center flex-col gap-[clamp(16px,1.6vw,22.5px)] transform-3d"
              >
                {visibleEvents.map((event) => (
                  <article
                    key={event.title}
                dir={direction}
                className="flex flex-col gap-3 rounded-[10.5px] bg-white p-[clamp(10px,1vw,12px)] text-[#090909] sm:grid sm:grid-cols-[76px_110px_minmax(0,1fr)_148px] sm:items-center sm:gap-[clamp(12px,1.6vw,18px)] dark:bg-card dark:text-card-foreground"
              >
                <div dir={direction} className="flex flex-col items-center gap-1 text-center sm:col-start-1 sm:row-start-1">
                  <span className="font-almarai text-[20px] leading-[1.35] font-extrabold whitespace-nowrap">
                    {event.date}
                  </span>
                  <span className="font-almarai text-[14px] leading-[1.35] whitespace-nowrap">
                    {event.time}
                  </span>
                </div>

                <div className="relative h-[111.75px] w-[109.5px] shrink-0 overflow-hidden rounded-[6px] sm:col-start-2 sm:row-start-1">
                  <Image
                    src="/images/events/event-thumb.webp"
                    alt=""
                    fill
                    sizes="110px"
                    className="object-cover"
                  />
                </div>

                <div dir={direction} className="flex min-w-0 flex-col gap-2 text-start sm:col-start-3 sm:row-start-1">
                  <h3 className="font-almarai text-[16px] leading-[1.4] font-bold">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-[5px]">
                    <img src="/icons/event-location.svg" alt="" className="size-[15px] dark:invert" />
                    <span className="font-almarai text-[14px] leading-[1.4]">
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <img src="/icons/event-money.svg" alt="" className="size-[15px] dark:invert" />
                    <span className="font-almarai text-[14px] leading-[1.4]">
                      {event.price}
                    </span>
                  </div>
                </div>

                <Button
                  variant="default"
                  className="h-auto w-full shrink-0 gap-2 rounded-[7px] px-[11px] py-[9px] font-almarai text-[14px] font-bold sm:col-start-4 sm:row-start-1"
                  icon={
                    <img
                      src="/icons/event-arrow-up-right.svg"
                      alt=""
                      className="size-[14px]"
                    />
                  }
                  iconPosition="end"
                >
                  {t("upcomingEvents.bookCta")}
                </Button>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative mt-[clamp(24px,3vw,40px)] w-full overflow-hidden" dir="ltr">
          <div className="flex w-max animate-marquee">
            <TickerTrack phrases={ticker} />
            <TickerTrack phrases={ticker} ariaHidden />
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
