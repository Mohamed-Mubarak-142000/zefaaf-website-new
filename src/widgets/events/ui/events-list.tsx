"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/shared/i18n";
import { Button } from "@/shared/ui/button";

import { getEventsCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const CARD_IMAGES = [
  "/images/events/event-card-1.webp",
  "/images/events/event-card-2.webp",
  "/images/events/event-card-3.webp",
  "/images/events/event-card-4.webp",
  "/images/events/event-card-5.webp",
  "/images/events/event-card-6.webp",
] as const;

// Only the Bosnia gathering (2nd event, every locale) has a dedicated
// details page so far — same pattern as the blog list, where only one
// article has a real route and the rest stay plain cards.
const BOSNIA_EVENT_INDEX = 1;
const BOSNIA_EVENT_PATH = "/events/bosnia-islamic-marriage-gathering";

type Event = {
  date: string;
  time: string;
  title: string;
  location: string;
  price: string;
};

export function EventsList() {
  const t = useTranslations();
  const { buyTicketsCta } = getEventsCopy(useLocale());
  const events = t.raw("upcomingEvents.events") as Event[];

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="events-list-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto mt-[clamp(40px,5vw,72px)] w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.h2
          variants={REVEAL}
          id="events-list-title"
          className="font-alexandria text-[clamp(22px,2.8vw,36px)] leading-[1.2] font-bold text-foreground"
        >
          {t("nav.upcomingEvents")}
        </motion.h2>

        <ul className="mt-[clamp(20px,2.6vw,32px)] grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-[clamp(16px,2.1vw,32px)]">
          {events.map((event, index) => (
            <motion.li
              key={event.title}
              custom={index}
              variants={REVEAL_STAGGERED}
              className="flex min-w-0 flex-col overflow-hidden rounded-(--radius-fluid) border border-border bg-white/90 p-[clamp(10px,1vw,13px)] dark:bg-card"
            >
              <div className="relative h-[clamp(120px,13vw,152px)] w-full shrink-0 overflow-hidden rounded-[6px]">
                <Image
                  src={CARD_IMAGES[index % CARD_IMAGES.length]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-[clamp(14px,1.6vw,18px)] flex flex-col gap-[clamp(10px,1.1vw,12px)] text-start">
                <h3 className="font-alexandria text-[clamp(15px,1.1vw,18px)] leading-[1.4] font-bold text-foreground">
                  {event.title}
                </h3>
                <p className="font-alexandria text-[clamp(11px,0.8vw,12px)] leading-[1.4] text-grey-primary">
                  {event.location}
                </p>
              </div>

              <div className="mt-[clamp(16px,1.9vw,24px)] flex flex-wrap items-center gap-[clamp(20px,2.3vw,32px)]">
                <span className="flex items-center gap-[5px]">
                  <img src="/icons/event-money.svg" alt="" className="size-[18px]" />
                  <span className="font-alexandria text-[clamp(14px,1vw,16px)] leading-[1.4] text-foreground">
                    {event.price}
                  </span>
                </span>
                <span className="flex items-center gap-[5px]">
                  <img src="/icons/event-date-time.svg" alt="" className="size-[18px]" />
                  <span className="font-alexandria text-[clamp(14px,1vw,16px)] leading-[1.4] text-foreground">
                    {event.date} {event.time}
                  </span>
                </span>
              </div>

              {index === BOSNIA_EVENT_INDEX ? (
                <Button
                  asChild
                  variant="default"
                  className="mt-[clamp(14px,1.6vw,18px)] h-auto w-full gap-3 rounded-[6px] py-[13.5px] font-almarai text-[18px] font-bold"
                >
                  <Link href={BOSNIA_EVENT_PATH}>
                    {buyTicketsCta}
                    <img src="/icons/event-arrow-up-right.svg" alt="" className="size-[18px]" />
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="default"
                  className="mt-[clamp(14px,1.6vw,18px)] h-auto w-full gap-3 rounded-[6px] py-[13.5px] font-almarai text-[18px] font-bold"
                  icon={<img src="/icons/event-arrow-up-right.svg" alt="" className="size-[18px]" />}
                  iconPosition="end"
                >
                  {buyTicketsCta}
                </Button>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </MotionConfig>
  );
}
