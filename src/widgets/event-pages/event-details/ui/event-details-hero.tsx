"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { Button } from "@/shared/ui/button";

import { getEventDetailsCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

const AVATARS = [
  "/images/events/avatar-1.webp",
  "/images/events/avatar-2.webp",
  "/images/events/avatar-3.webp",
] as const;

const INFO_ITEMS = [
  { icon: "/icons/event-date-time.svg", key: "date" as const },
  { icon: "/icons/event-money.svg", key: "payment" as const },
  { icon: "/icons/event-timer.svg", key: "duration" as const },
  { icon: "/icons/event-location.svg", key: "location" as const },
];

export function EventDetailsHero() {
  const locale = useLocale();
  const copy = getEventDetailsCopy(locale);
  const { stats } = copy;

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
              className="font-alexandria text-[clamp(26px,3vw,36px)] leading-[1.2] font-bold text-foreground"
            >
              {copy.titleLine1}
              <br />
              {copy.titleLine2}
            </h1>
            <p
              dir="auto"
              className="max-w-[62ch] font-alexandria text-[clamp(14px,1.15vw,16px)] leading-[1.5] text-muted-foreground"
            >
              {copy.description}
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
                  {copy.info[item.key]}
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
            <Button className="h-9 gap-2 rounded-[8px] px-6 font-alexandria text-[13px] font-normal">
              {copy.cta}
            </Button>
          </motion.div>
        </div>

        <motion.div variants={REVEAL} className="relative mx-auto w-full max-w-[513px]">
          <div aria-hidden className="absolute inset-0 rotate-[4.17deg] overflow-hidden rounded-[12px] bg-grey-primary">
            <Image
              src="/images/events/bosnia-gathering.webp"
              alt=""
              fill
              sizes="(min-width: 1280px) 513px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[513/347] w-full overflow-hidden rounded-[12px] shadow-lg">
            <Image
              src="/images/events/bosnia-gathering.webp"
              alt={copy.imageAlt}
              fill
              sizes="(min-width: 1280px) 513px, 90vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
