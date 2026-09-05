"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

const CONTENT_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const COLLAGE_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

// The two phone mockups overlap and bleed above the card. Geometry below is
// the exact Figma px layout (get_metadata on node 520:208532) re-expressed as
// a % of their shared bounding box, so the collage stays proportional at any
// rendered size instead of needing hand-tuned breakpoints — same technique as
// the why-choose-zefaaf PhotoCollage.
const COLLAGE_W = 426;
const COLLAGE_H = 555.75;
const PHONE_W = 267.66;
const PHONE_H = 490.24;

function pctW(px: number) {
  return `${(px / COLLAGE_W) * 100}%`;
}
function pctH(px: number) {
  return `${(px / COLLAGE_H) * 100}%`;
}

function PhoneMock({
  photo,
  overlayDark,
  foreground,
}: {
  photo: string;
  overlayDark?: boolean;
  foreground?: string;
}) {
  return (
    <div className="relative size-full">
      <div
        className="absolute overflow-hidden rounded-[12%]"
        style={{ left: "9.15%", top: "1.65%", width: "81.7%", height: "96.75%" }}
      >
        <Image src={photo} alt="" fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
        {overlayDark && <div className="absolute inset-0 bg-black/30" />}
        {foreground && (
          <Image src={foreground} alt="" fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
        )}
      </div>
      <Image
        src="/images/download-app/phone-frame.png"
        alt=""
        fill
        sizes="(min-width: 1024px) 20vw, 44vw"
        className="pointer-events-none object-contain"
      />
    </div>
  );
}

function PhoneCollage() {
  return (
    <motion.div
      variants={COLLAGE_VARIANTS}
      className="relative mx-auto -mt-[clamp(90px,11.5vw,164px)] w-[74%] max-w-[330px] shrink-0 will-change-transform sm:w-[56%] lg:mx-0 lg:-mt-[clamp(114px,14.5vw,205px)] lg:w-[40%] lg:max-w-[365px]"
      style={{ aspectRatio: `${COLLAGE_W} / ${COLLAGE_H}` }}
    >
      <div
        className="absolute drop-shadow-[0_20px_40px_rgba(12,12,13,0.15)]"
        style={{ left: pctW(0), top: pctH(65.51), width: pctW(PHONE_W), height: pctH(PHONE_H) }}
      >
        <PhoneMock photo="/images/download-app/phone-1-photo.png" />
      </div>
      <div
        className="absolute drop-shadow-[0_20px_40px_rgba(12,12,13,0.2)]"
        style={{ left: pctW(159), top: pctH(0), width: pctW(PHONE_W), height: pctH(PHONE_H) }}
      >
        <PhoneMock
          photo="/images/download-app/phone-2-bg.png"
          overlayDark
          foreground="/images/download-app/phone-2-screenshot.png"
        />
      </div>
    </motion.div>
  );
}

// Figma spec for all three badges (node values at the 1440 desktop end):
// 31.24px tall, 3.75px radius, 0.75px border, 11.25px side padding, 6px gap —
// all fluid via the --*-store-badge-* tokens. The 4.5px top/bottom padding
// falls out of capping the inner artwork at --size-fluid-store-mark. Figma's
// Gray/300 border and Gray/100 fill map onto this palette's neutral pair:
// border-border (--stroke-1) and bg-muted (--stroke-2). Width stays hug.
const BADGE_FRAME =
  "flex h-(--size-fluid-store-badge-h) items-center gap-(--space-fluid-store-badge-gap) rounded-(--radius-fluid-store-badge) border-[0.75px] border-border bg-muted px-(--space-fluid-store-badge-x)";

function AppGalleryBadge() {
  return (
    <div className={BADGE_FRAME}>
      <span className="relative block size-(--size-fluid-store-mark) shrink-0">
        <Image src="/icons/stores/appgallery-mark.svg" alt="" fill unoptimized className="object-contain" />
        <Image
          src="/icons/stores/appgallery-mark-2.svg"
          alt=""
          width={15}
          height={9}
          unoptimized
          className="absolute top-1/2 left-1/2 h-[42%] w-[78%] -translate-x-1/2 -translate-y-1/2"
        />
      </span>
      <span className="flex flex-col items-start gap-0.5">
        <Image
          src="/icons/stores/appgallery-text-2.svg"
          alt=""
          width={48}
          height={5}
          unoptimized
          className="h-[clamp(4.5px,0.45vw,5.5px)] w-auto"
        />
        <Image
          src="/icons/stores/appgallery-text.svg"
          alt="AppGallery"
          width={65}
          height={13}
          unoptimized
          className="h-[clamp(11px,1.05vw,13px)] w-auto"
        />
      </span>
    </div>
  );
}

function AppStoreBadge() {
  return (
    <div className={BADGE_FRAME}>
      <Image
        src="/icons/stores/apple-mark.svg"
        alt=""
        width={15}
        height={18}
        unoptimized
        className="h-(--size-fluid-store-mark) w-auto"
      />
      <span className="flex flex-col items-start">
        <span className="font-alexandria text-[clamp(6px,0.57vw,7px)] leading-none text-black">Download on the</span>
        <span className="font-alexandria text-[clamp(11px,1.09vw,13.5px)] leading-none font-semibold tracking-tight text-black">
          App Store
        </span>
      </span>
    </div>
  );
}

function GooglePlayBadge() {
  return (
    <div className={BADGE_FRAME}>
      <Image
        src="/icons/stores/playstore-mark.svg"
        alt=""
        width={16}
        height={18}
        unoptimized
        className="h-(--size-fluid-store-mark) w-auto"
      />
      <span className="flex flex-col items-start gap-0.5">
        <span className="font-alexandria text-[clamp(6px,0.57vw,7px)] leading-none tracking-wide text-black uppercase">
          Get it on
        </span>
        <Image
          src="/icons/stores/googleplay-text.svg"
          alt="Google Play"
          width={56}
          height={11}
          unoptimized
          className="h-[clamp(9px,0.94vw,11px)] w-auto -scale-y-100"
        />
      </span>
    </div>
  );
}

const STORE_LINKS = {
  appGallery: "https://appgallery.huawei.com/app/C115428359",
  googlePlay: "https://play.google.com/store/apps/details?id=com.zefaaf.zefaaf",
  appStore: "https://apps.apple.com/app/6747707022",
} as const;

const STORE_LINK = "transition-opacity hover:opacity-75";

// dir="ltr" is deliberate and must not be dropped: the page flips to RTL on
// Arabic/Farsi/Urdu/etc., which would mirror each badge's lockup (mark to the
// right of the text). All three stores treat the badge as fixed artwork, so it
// keeps its LTR layout — and its left-to-right order — in every locale.
function StoreButtons() {
  return (
    <div dir="ltr" className="flex flex-wrap items-start gap-[clamp(8px,1vw,12px)]">
      <a
        href={STORE_LINKS.appGallery}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="AppGallery"
        className={STORE_LINK}
      >
        <AppGalleryBadge />
      </a>
      <a
        href={STORE_LINKS.appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App Store"
        className={STORE_LINK}
      >
        <AppStoreBadge />
      </a>
      <a
        href={STORE_LINKS.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play"
        className={STORE_LINK}
      >
        <GooglePlayBadge />
      </a>
    </div>
  );
}

function FeatureItem({ children }: { children: ReactNode }) {
  return (
    <p className="font-alexandria text-[clamp(11px,0.95vw,14px)] leading-normal text-foreground">{children}</p>
  );
}

export function DownloadApp() {
  const t = useTranslations();
  const features = t.raw("downloadApp.features") as string[];

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="download-app-title"
        className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative isolate mt-[clamp(104px,13vw,185px)] overflow-visible rounded-(--radius-fluid) px-(--space-fluid-container) py-[clamp(20px,3vw,44px)] shadow-[0_3px_16px_rgba(12,12,13,0.07),0_-3px_8px_rgba(12,12,13,0.07)]"
          style={{
            backgroundImage:
              "linear-gradient(196.36deg, rgba(255, 198, 67, 0.02) 0%, rgba(246, 104, 209, 0.02) 50.884%, rgba(133, 57, 247, 0.02) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
          }}
        >
          <div className="flex flex-col items-center gap-[clamp(32px,4vw,60px)] lg:flex-row lg:items-center lg:justify-between">
            <PhoneCollage />

            <motion.div
              variants={CONTENT_VARIANTS}
              className="flex w-full max-w-[715px] flex-col items-end gap-[clamp(24px,3vw,39px)] text-end"
            >
              <div className="flex flex-col items-end gap-[clamp(18px,2.2vw,30px)]">
                <h2
                  id="download-app-title"
                  className="font-alexandria text-[clamp(18px,1.8vw,25px)] leading-normal font-bold whitespace-pre-line text-brand"
                >
                  {t("downloadApp.title")}
                </h2>

                <div className="flex flex-col items-end gap-[clamp(6px,0.7vw,9px)]">
                  {features.map((feature) => (
                    <FeatureItem key={feature}>{feature}</FeatureItem>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end gap-[clamp(9px,1vw,12px)]">
                <p className="font-alexandria text-[clamp(11px,0.95vw,14px)] leading-normal text-foreground">
                  {t("downloadApp.description")}
                </p>
                <StoreButtons />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
