"use client";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";

import { getSmartMarriageCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

function PhotoCollage({ photoAlts }: { photoAlts: { mosque: string; car: string } }) {
  return (
    <div className="relative mx-auto aspect-[506/425] w-full max-w-[360px] shrink-0 lg:mx-0 lg:w-[42%] lg:max-w-[440px]">
      <div
        className="absolute h-[72%] w-[68%] overflow-hidden rounded-lg border-[5px] border-white bg-muted shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
        style={{ left: "6%", top: "6%", transform: "rotate(7.79deg)" }}
      >
        <Image src="/images/smart-marriage-initiative/companion-couple-mosque.webp" alt={photoAlts.mosque} fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
      </div>
      <div
        className="absolute h-[58%] w-[52%] overflow-hidden rounded-lg border-[5px] border-white bg-muted shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
        style={{ left: "40%", top: "38%", transform: "rotate(-8.9deg)" }}
      >
        <Image src="/images/smart-marriage-initiative/companion-couple-vintage-car.webp" alt={photoAlts.car} fill sizes="(min-width: 1024px) 16vw, 32vw" className="object-cover" />
      </div>
    </div>
  );
}

export function SmartMarriageInitiativeCompanion() {
  const { companion } = getSmartMarriageCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        id="about-zefaaf"
        aria-labelledby="smart-marriage-companion-title"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="section-gap mx-auto flex w-full max-w-[1600px] scroll-mt-24 flex-col gap-[clamp(24px,3vw,44px)] px-(--space-fluid-container) pb-[clamp(40px,5vw,72px)] text-start"
      >
        <motion.div variants={REVEAL} className="flex max-w-[720px] flex-col gap-[clamp(12px,1.3vw,16px)]">
          <p className="font-alexandria text-[clamp(11px,0.9vw,12px)] leading-[1.4] font-bold text-brand">{companion.eyebrow}</p>
          <h2
            id="smart-marriage-companion-title"
            className="font-alexandria text-[clamp(20px,2vw,24px)] leading-[1.4] font-bold text-black-primary"
          >
            {companion.title}
          </h2>
          <p className="font-alexandria text-[clamp(13px,1.1vw,18px)] leading-[1.6] text-grey-primary">{companion.description}</p>
        </motion.div>

        <div className="flex flex-col items-center gap-[clamp(28px,3.5vw,50px)] lg:flex-row lg:items-center lg:justify-between">
          <PhotoCollage photoAlts={companion.photoAlts} />

          <ul className="flex w-full flex-col gap-[clamp(12px,1.3vw,16px)] lg:max-w-[600px]">
            {companion.features.map((feature, index) => (
              <motion.li key={feature.title} custom={index} variants={REVEAL_STAGGERED} className="flex flex-col gap-[clamp(3px,0.3vw,4px)]">
                <h3 className="font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.3] font-bold text-black-primary">{feature.title}</h3>
                <p className="font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.6] text-grey-primary">{feature.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
