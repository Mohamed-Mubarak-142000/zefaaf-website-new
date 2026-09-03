"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { Button } from "@/shared/ui/button";

import { getSmartMarriageCopy } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

// The photo collage is a fixed 681×584px canvas in Figma (one taller portrait
// photo straddling two side-by-side photos beneath it) — expressed here as a
// % of that canvas (same technique as the Why-Choose-Zefaaf widget) so the
// composition stays proportional to the real design at any rendered size.
const CANVAS_W = 681;
const CANVAS_H = 584;

function pctW(px: number) {
  return `${(px / CANVAS_W) * 100}%`;
}
function pctH(px: number) {
  return `${(px / CANVAS_H) * 100}%`;
}

function PhotoCollage({ photoAlts }: { photoAlts: { cliff: string; lake: string; blossom: string } }) {
  return (
    <motion.div
      variants={REVEAL}
      className="relative mx-auto w-full max-w-[380px] shrink-0 lg:mx-0 lg:w-[42%] lg:max-w-[500px]"
      style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
    >
      <div
        className="absolute overflow-hidden rounded-lg bg-muted"
        style={{ left: pctW(0), top: pctH(44), width: pctW(342), height: pctH(457) }}
      >
        <Image src="/images/smart-marriage-initiative/hero-photo-2-lake-couple.webp" alt={photoAlts.lake} fill sizes="(min-width: 1024px) 24vw, 45vw" className="object-cover" />
      </div>
      <div
        className="absolute overflow-hidden rounded-lg bg-muted"
        style={{ left: pctW(339), top: pctH(44), width: pctW(342), height: pctH(457) }}
      >
        <Image src="/images/smart-marriage-initiative/hero-photo-3-blossom-couple.webp" alt={photoAlts.blossom} fill sizes="(min-width: 1024px) 24vw, 45vw" className="object-cover" />
      </div>
      <div
        className="absolute overflow-hidden rounded-lg bg-muted shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
        style={{ left: pctW(180), top: pctH(0), width: pctW(390), height: pctH(584) }}
      >
        <Image src="/images/smart-marriage-initiative/hero-photo-1-cliff-couple.webp" alt={photoAlts.cliff} fill sizes="(min-width: 1024px) 27vw, 55vw" className="object-cover" />
      </div>
    </motion.div>
  );
}

export function SmartMarriageInitiativeHero() {
  const { hero } = getSmartMarriageCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="smart-marriage-hero-title" className="relative isolate overflow-hidden">
        <Image
          aria-hidden
          src="/images/smart-marriage-initiative/decorative-flower-top-right.webp"
          alt=""
          width={467}
          height={707}
          className="pointer-events-none absolute -top-[60px] end-[6%] hidden w-[240px] opacity-90 lg:block xl:w-[300px]"
        />
        <Image
          aria-hidden
          src="/images/smart-marriage-initiative/decorative-flower-bouquet.webp"
          alt=""
          width={595}
          height={772}
          className="pointer-events-none absolute top-[40px] end-[2%] hidden w-[280px] opacity-90 lg:block xl:w-[360px]"
        />
        <Image
          aria-hidden
          src="/images/smart-marriage-initiative/decorative-swirl-small.webp"
          alt=""
          width={136}
          height={172}
          className="pointer-events-none absolute bottom-[6%] start-[1%] hidden w-[80px] opacity-80 lg:block"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-start gap-[clamp(28px,3.5vw,50px)] px-(--space-fluid-container) pt-[clamp(28px,4vw,58px)] pb-[clamp(40px,5vw,72px)] lg:flex-row lg:items-center lg:justify-between"
        >
          <motion.div variants={REVEAL} className="flex w-full max-w-[595px] flex-col items-start gap-[clamp(14px,1.7vw,24px)] text-start">
            <h1 id="smart-marriage-hero-title" className="font-alexandria text-[clamp(28px,3.3vw,44px)] leading-[1.2] font-bold text-black-primary">
              {hero.title}
            </h1>
            <p className="font-alexandria text-[clamp(14px,1.1vw,16px)] leading-[1.6] text-grey-primary">{hero.description}</p>
            <Button asChild className="mt-[clamp(4px,0.6vw,8px)] h-auto rounded-md bg-brand px-[clamp(16px,1.5vw,22px)] py-[clamp(9px,0.9vw,13px)] font-alexandria text-[clamp(13px,1vw,15px)] font-normal text-white hover:bg-brand/90">
              <a href="#what-is-the-initiative">
                {hero.cta}
                <Image
                  src="/icons/arrow-right-double.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[clamp(14px,1.2vw,18px)] shrink-0 rtl:rotate-180"
                />
              </a>
            </Button>
          </motion.div>

          <PhotoCollage photoAlts={hero.photoAlts} />
        </motion.div>
      </section>
    </MotionConfig>
  );
}
