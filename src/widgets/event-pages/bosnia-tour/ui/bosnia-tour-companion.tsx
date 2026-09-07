"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getBosniaCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

const ITEM_ICONS = [
  "/icons/bosnia-tour/icon-companion-files.svg",
  "/icons/bosnia-tour/icon-companion-group.svg",
  "/icons/bosnia-tour/icon-companion-chat.svg",
  "/icons/bosnia-tour/icon-companion-party.svg",
  "/icons/bosnia-tour/icon-companion-mail.svg",
  "/icons/bosnia-tour/icon-companion-users.svg",
];

const PHOTO = "/images/bosnia-tour/companion-bg.webp";

// This band describes Zefaaf's own companion service, not the trip a visitor
// happens to be looking at, so every word and the photo are translated copy —
// nothing here reads from Rewaq. `bgAlt` describes that one photo, which is
// the other reason the picture stays fixed alongside the text.
export function BosniaTourCompanion() {
  const { companion } = getBosniaCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-labelledby="bosnia-tour-companion-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap"
      >
        {/* Figma keeps this band edge-to-edge: the photo bleeds off the inline-end
            side of the viewport and dissolves into the page background, so the copy
            reads as dark text on white rather than white text on a dark card. */}
        <motion.div variants={REVEAL} className="relative isolate overflow-hidden bg-background">
          {/* Decorative here — the same photo carries `bgAlt` in the mobile card below,
              and both copies sit in the DOM at once. */}
          <div aria-hidden className="absolute inset-y-0 end-0 -z-10 hidden w-[62%] lg:block">
            <Image src={PHOTO} alt="" fill sizes="62vw" className="object-cover" />
            {/* Figma's fade isn't a straight ramp: the photo stays untouched over its
                outer third, then washes out fast so the copy column is effectively
                solid background. The stop positions run along the gradient axis, so
                they mirror correctly for RTL. */}
            <div className="absolute inset-0 from-transparent from-55% via-background/85 via-78% to-background to-88% ltr:bg-linear-to-l rtl:bg-linear-to-r" />
          </div>

          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-[clamp(20px,2.2vw,32px)] px-(--space-fluid-container) py-[clamp(32px,4vw,64px)] text-start">
            <div className="flex flex-col gap-[clamp(10px,1vw,14px)] lg:max-w-[36vw]">
              {/* Rewaq translates a trip into some of the 33 locales only, so
                  `dir="auto"` keeps its text readable whichever direction the
                  page around it runs. */}
              <h2
                id="bosnia-tour-companion-title"
                dir="auto"
                className="font-alexandria text-[clamp(20px,2vw,30px)] leading-[1.4] font-bold text-black-primary"
              >
                {companion.title}
              </h2>
              <p className="font-alexandria text-[clamp(12px,1vw,15px)] leading-[1.6] text-grey-primary">
                {companion.description}
              </p>
            </div>

            <ul className="flex flex-col gap-[clamp(12px,1.3vw,18px)] lg:max-w-[52vw]">
              {companion.items.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={REVEAL_STAGGERED}
                  className="flex items-start gap-[clamp(10px,1vw,14px)]"
                >
                  {/* The icons ship in Figma's #545454 grey, so they need no recolour here.
                      They wrap around, so a locale whose list runs longer than
                      Figma's six still gets a glyph on every row. */}
                  <img src={ITEM_ICONS[index % ITEM_ICONS.length]} alt="" className="mt-[0.2em] size-[clamp(14px,1.1vw,16px)] shrink-0" />
                  <p dir="auto" className="font-alexandria text-[clamp(12px,0.95vw,14px)] leading-[1.5] font-medium text-black-primary">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Under lg there's no room for the bleeding photo beside the copy, so it
                becomes a card below it instead of a scrim the text has to fight. */}
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-(--radius-fluid) bg-muted lg:hidden">
              <Image
                src={PHOTO}
                alt={companion.bgAlt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </MotionConfig>
  );
}
