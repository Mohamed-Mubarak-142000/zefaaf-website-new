"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { BookSeatDialog } from "@/features/book-seat";
import { Button } from "@/shared/ui/button";
import type { PublicEvent } from "@/shared/api";

import { getEventDetailsCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

const AVATARS = [
  "/images/events/avatar-1.webp",
  "/images/events/avatar-2.webp",
  "/images/events/avatar-3.webp",
] as const;

const HERO_IMAGES = [
  "/images/events/bosnia-gathering.webp",
  "/images/bosnia-tour/hero-collage-main.webp",
  "/images/bosnia-tour/hero-canyon.webp",
] as const;

const INFO_ITEMS = [
  { icon: "/icons/event-date-time.svg", key: "date" as const },
  { icon: "/icons/event-money.svg", key: "payment" as const },
  { icon: "/icons/event-timer.svg", key: "duration" as const },
  { icon: "/icons/event-location.svg", key: "location" as const },
];

export function EventDetailsHero({ event }: { event?: PublicEvent | null }) {
  const locale = useLocale();
  const copy = getEventDetailsCopy(locale);
  const { stats } = copy;
  const [bookSeatOpen, setBookSeatOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const reduceMotion = useReducedMotion();
  const heroImages = event?.banner_urls?.length ? event.banner_urls : [...HERO_IMAGES];
  const info = {
    date: event?.date ? `${event.date}${event.start_time ? ` ${event.start_time.slice(0, 5)}` : ""}` : copy.info.date,
    payment: event?.ticket_price != null ? `${event.ticket_price} ${event.currency ?? ""}` : copy.info.payment,
    duration: event?.duration_hours ? `${event.duration_hours}` : copy.info.duration,
    location: event?.location ?? copy.info.location,
  };

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [reduceMotion, heroImages.length]);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="event-details-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="mx-auto grid w-full max-w-[1600px] items-center gap-[clamp(32px,4vw,64px)] px-(--space-fluid-container) pt-(--space-fluid-xl) xl:grid-cols-[minmax(0,1fr)_clamp(320px,34vw,513px)]"
      >
        <div className="flex flex-col items-start gap-[clamp(18px,2vw,23px)]">
          <motion.p
            variants={REVEAL}
            className="w-fit rounded-[12px] bg-secondary-pink px-[clamp(10px,1vw,12px)] py-[clamp(6px,0.7vw,8px)] font-alexandria text-[clamp(12px,1vw,14px)] leading-[1.5] text-foreground"
          >
            {copy.badge}
          </motion.p>

          <motion.div variants={REVEAL} className="flex flex-col gap-[clamp(18px,2vw,23px)]">
            <h1
              id="event-details-title"
              dir="auto"
              className="font-alexandria text-[clamp(20px,2.1vw,26px)] leading-[1.2] font-bold text-foreground"
            >
              {event?.name ?? <>{copy.titleLine1}<br />{copy.titleLine2}</>}
            </h1>
            <p
              dir="auto"
              className="max-w-[62ch] font-alexandria text-[clamp(14px,1.15vw,16px)] leading-[1.5] text-muted-foreground"
            >
              {event?.description ?? copy.description}
            </p>
          </motion.div>

          <motion.div
            variants={REVEAL}
            className="flex flex-wrap items-stretch gap-1 rounded-[9px] border border-border p-[clamp(8px,1vw,12px)]"
          >
            {INFO_ITEMS.map((item) => (
              <div
                key={item.key}
                className="flex flex-col items-center gap-[clamp(6px,0.7vw,9px)] px-[clamp(8px,0.9vw,10.5px)] py-[clamp(6px,0.7vw,8.25px)]"
              >
                <img src={item.icon} alt="" className="size-[clamp(16px,1.4vw,20px)]" />
                <p className="text-center font-alexandria text-[clamp(12px,1vw,14px)] font-medium whitespace-nowrap text-foreground">
                  {info[item.key]}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={REVEAL} className="flex flex-wrap items-center gap-[clamp(28px,3.7vw,53px)]">
            <div className="flex items-center gap-[clamp(14px,1.9vw,27px)]">
              <div className="flex items-center">
                {AVATARS.map((src, index) => (
                  <div
                    key={src}
                    style={{ marginInlineStart: index === 0 ? 0 : "clamp(-14px,-1vw,-10px)" }}
                    className="relative size-[clamp(34px,2.9vw,46px)] shrink-0 overflow-hidden rounded-full ring-2 ring-white"
                  >
                    <Image src={src} alt={stats.avatarAlt} fill sizes="46px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start font-alexandria text-foreground">
                <p className="text-[clamp(16px,1.4vw,20px)] font-bold">{stats.customersValue}</p>
                <p className="text-[clamp(14px,1.25vw,18px)] font-normal">{stats.customersLabel}</p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="font-alexandria text-[clamp(16px,1.4vw,20px)] font-bold text-foreground">
                {stats.ratingValue}
              </p>
              <div className="flex items-center gap-2">
                <p className="font-alexandria text-[clamp(14px,1.25vw,18px)] whitespace-nowrap text-foreground">
                  {stats.ratingLabel}
                </p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 4 }, (_, index) => (
                    <img key={index} src="/icons/event-star-gold.svg" alt="" className="size-[clamp(14px,1.25vw,18px)]" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={REVEAL}>
            <Button
              type="button"
              onClick={() => setBookSeatOpen(true)}
              className="h-9 gap-2 rounded-[8px] px-6 font-alexandria text-[13px] font-normal"
            >
              {copy.cta}
            </Button>
            <BookSeatDialog open={bookSeatOpen} onOpenChange={setBookSeatOpen} eventUlid={event?.ulid} />
          </motion.div>
        </div>

        <motion.div variants={REVEAL} className="relative mx-auto aspect-[513/347] w-full max-w-[513px]">
          <motion.div
            key={`back-${activeImage}`}
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 rotate-[4.17deg] overflow-hidden rounded-[12px] bg-grey-primary"
          >
            <Image
              src={heroImages[(activeImage + 1) % heroImages.length]}
              alt=""
              fill
              sizes="(min-width: 1280px) 513px, 90vw"
              className="object-cover"
            />
          </motion.div>

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={heroImages[activeImage]}
              initial={{ opacity: 0, x: 28, scale: 0.97, rotate: 1.5 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, x: -28, scale: 0.97, rotate: -1.5 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 overflow-hidden rounded-[12px] shadow-lg"
            >
              <Image
                src={heroImages[activeImage]}
                alt={copy.imageAlt}
                fill
                priority={activeImage === 0}
                sizes="(min-width: 1280px) 513px, 90vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
