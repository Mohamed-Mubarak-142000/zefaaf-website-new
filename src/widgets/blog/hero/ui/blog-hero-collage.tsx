import { useTranslations } from "next-intl";
import Image from "next/image";

// Figma's canvas for this fan of 5 rotated photo cards plus the decorative
// star-sparkle flourish is a fixed 1440-wide "Blogs" frame with everything
// absolutely positioned (cards bleed from x=-98.88 to x=1461.6, i.e. past
// both edges of the frame). As in HeroCollage, every position/size below is
// the exact px Figma metadata gave, expressed as a % of a bounding canvas
// via container query units so it scales continuously with the rendered
// width instead of needing hand-tuned breakpoints. The canvas itself is
// sized to the 5 cards only (not the confetti/star flourish, which extends
// further down) — stretching it to fit those too left a large dead gap
// below the cards before the heading. The decorations are positioned with
// the same cqh() scale and are simply allowed to bleed past the canvas's
// own bottom edge, which is fine since nothing clips it.
const CANVAS_MIN_X = -98.88;
const CANVAS_W = 1560.48;
const CANVAS_MIN_Y = 101.01;
const CANVAS_H = 395.17;

function cqw(px: number) {
  return `${((px - CANVAS_MIN_X) / CANVAS_W) * 100}cqw`;
}
function cqh(px: number) {
  return `${((px - CANVAS_MIN_Y) / CANVAS_H) * 100}cqh`;
}
function sizeW(px: number) {
  return `${(px / CANVAS_W) * 100}cqw`;
}
function sizeH(px: number) {
  return `${(px / CANVAS_H) * 100}cqh`;
}

// Figma's paint order (back to front) was: center, card2, left, card4, right —
// preserved here via zIndex so the fan overlaps exactly as designed.
const CARDS = [
  {
    image: "/images/blog/hero-card-left.png",
    x: -138.88,
    y: 284.97,
    w: 280,
    h: 264.75,
    rotate: -35.19,
    zIndex: 30,
  },
  {
    image: "/images/blog/hero-card-2.png",
    x: 189.365,
    y: 137.75,
    w: 280,
    h: 264.75,
    rotate: -14.85,
    zIndex: 20,
  },
  {
    image: "/images/blog/hero-card-center.png",
    x: 557.61,
    y: 101.01,
    w: 280,
    h: 264.75,
    rotate: 0,
    zIndex: 10,
  },
  {
    image: "/images/blog/hero-card-4.png",
    x: 925.855,
    y: 139.86,
    w: 280,
    h: 264.75,
    rotate: 14.85,
    zIndex: 40,
  },
  {
    image: "/images/blog/hero-card-right.png",
    x: 1294.1,
    y: 291.43,
    w: 280,
    h: 264.75,
    rotate: 31.41,
    zIndex: 50,
  },
] as const;

const STAR_SPARKLE = { x: 1191.768310546875, y: 513.247802734375, w: 239.10337635256474, h: 258.8707518103329 };
const CONFETTI_RIGHT = { x: 1164.3018798828125, y: 641.265869140625, w: 398.5583841190237, h: 431.5083720601542 };

export function BlogHeroCollage() {
  const t = useTranslations("blog.hero");
  const cards = t.raw("collage") as { title: string; excerpt: string }[];

  return (
    <div
      className="relative mx-auto hidden w-[clamp(56rem,4rem+90vw,110rem)] md:block"
      style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}`, containerType: "size" }}
    >
      {/* Confined to the canvas box (unlike the cards, which are meant to
          bleed past its edges): these two decorative flourishes extend
          further down than the cards do, and left unclipped they bled into
          the heading text sitting right below the collage. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/images/blog/confetti.svg"
          alt=""
          aria-hidden="true"
          className="absolute z-0 opacity-70"
          style={{
            left: cqw(CONFETTI_RIGHT.x),
            top: cqh(CONFETTI_RIGHT.y),
            width: sizeW(CONFETTI_RIGHT.w),
            height: sizeH(CONFETTI_RIGHT.h),
          }}
        />
        <img
          src="/images/blog/stars.svg"
          alt=""
          aria-hidden="true"
          className="absolute z-0"
          style={{
            left: cqw(STAR_SPARKLE.x),
            top: cqh(STAR_SPARKLE.y),
            width: sizeW(STAR_SPARKLE.w),
            height: sizeH(STAR_SPARKLE.h),
          }}
        />
      </div>

      {CARDS.map((card, index) => {
        const content = cards[index];
        return (
          <div
            key={card.image}
            className="absolute flex flex-col items-center rounded-[9px] bg-[#f3f3f3]"
            style={{
              left: cqw(card.x),
              top: cqh(card.y),
              width: sizeW(card.w),
              // `p-[5%]`-style Tailwind percentage padding resolves against
              // this element's *containing block* — for a `position: absolute`
              // box, that's the big outer canvas, not this ~250px card — so it
              // was inflating the padding to ~70px a side and squeezing the
              // image + text into a sliver. cqw() sidesteps that: it's a
              // container-query unit, not a percentage, so it always resolves
              // against the same canvas regardless of the box's own position
              // scheme. Figma's own padding (12px/12px/19.5px) was identical
              // across every card regardless of that card's size, so a single
              // canvas-relative value for all 5 cards here is the faithful
              // match, not a per-card-proportional one.
              paddingInline: "0.77cqw",
              paddingTop: "0.77cqw",
              paddingBottom: "1.25cqw",
              gap: "1.55cqw",
              zIndex: card.zIndex,
              transform: `rotate(${card.rotate}deg)`,
            }}
          >
            {/* Fixed aspect-ratio, not flex-1 inside a fixed-height card: a
                flex-1 image box previously had to fight the text block for
                whatever height was left over, and since the text used
                viewport-relative (vw) font sizes instead of scaling with the
                card, it ate the entire budget on the smaller cards and
                collapsed the image to ~0px tall. Letting the card's height
                follow its content (image aspect-ratio + text) instead of a
                forced cqh() removes that fight entirely. */}
            <div className="relative w-full shrink-0 overflow-hidden rounded-[9px] bg-white aspect-224/160">
              <Image src={card.image} alt="" fill sizes="20vw" priority className="object-cover" />
            </div>
            <div className="flex w-full shrink-0 flex-col items-start" style={{ gap: "1.03cqw" }}>
              <p
                className="font-almarai leading-[1.4] font-bold whitespace-nowrap text-[#090909]"
                style={{ fontSize: "clamp(9px, 1.22cqw, 13px)" }}
              >
                {content?.title}
              </p>
              <p
                className="font-almarai leading-[1.6] text-[rgba(27,31,38,0.72)]"
                style={{ fontSize: "clamp(7px, 0.97cqw, 10px)" }}
              >
                {content?.excerpt}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
