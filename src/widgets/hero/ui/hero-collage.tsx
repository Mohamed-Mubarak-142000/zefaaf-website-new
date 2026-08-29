import { useTranslations } from "next-intl";
import Image from "next/image";

// Figma's frame for this collage is a fixed 1839×1080px canvas built from
// 4 solid circles, 4 masked photos, 2 direct photos, and 2 solid dots, all
// absolutely positioned. Rather than approximate that with hand-picked
// percentages (which drifted from the real design), every position/size
// below is the exact px Figma metadata gave for this frame, expressed as a
// % of that 1839×1080 canvas via container query units (cqw/cqh) on the
// outer `container-type: size` box. That keeps every element's position
// proportional to the *real* Figma layout at any rendered size, instead of
// needing hand-tuned breakpoints — cqw/cqh update continuously as
// --size-fluid-hero-collage changes, with no scale()/calc() transform
// needed (transform: scale(calc(var(--x) / 1839px)) was tried first and
// silently produced `transform: none`, because an unregistered custom
// property isn't type-checked as a <length>, so browsers reject the whole
// value — cqw/cqh sidesteps that entirely).
const CANVAS_W = 1839;
const CANVAS_H = 1080;

function cqw(px: number) {
  return `${(px / CANVAS_W) * 100}cqw`;
}
function cqh(px: number) {
  return `${(px / CANVAS_H) * 100}cqh`;
}

export function HeroCollage() {
  const t = useTranslations();

  return (
    <div
      dir="ltr"
      className="relative shrink-0 overflow-hidden"
      style={{
        width: "var(--size-fluid-hero-collage)",
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "size",
      }}
    >
      {/* Solid circle #1 — the main backdrop circle */}
      <div
        className="absolute rounded-full bg-foreground"
        style={{ left: cqw(464.8), top: cqh(341.57), width: cqw(468.543), height: cqh(454.086) }}
      />

      {/* Solid circle #2 */}
      <div
        className="absolute rounded-full bg-foreground"
        style={{ left: cqw(809.14), top: cqh(196.29), width: cqw(755.287), height: cqh(731.984) }}
      />

      {/* Direct photo: top mosque scene, full opacity */}
      <div
        className="absolute overflow-hidden rounded-full"
        style={{ left: cqw(708.7), top: cqh(186.52), width: cqw(378.543), height: cqh(366.863) }}
      >
        <Image src="/images/hero-photo-1652.png" alt="" fill sizes="20vw" className="object-cover" />
      </div>

      {/* Direct photo: bottom mosque scene, 64% opacity */}
      <div
        className="absolute overflow-hidden rounded-full opacity-[0.64]"
        style={{ left: cqw(708.7), top: cqh(564.55), width: cqw(378.543), height: cqh(366.863) }}
      >
        <Image src="/images/hero-photo-1653.png" alt="" fill sizes="20vw" className="object-cover" />
      </div>

      {/* White halo behind the small oval photo */}
      <div
        className="absolute rounded-full bg-white"
        style={{ left: cqw(360.31), top: cqh(458.66), width: cqw(232.193), height: cqh(221.955) }}
      />

      {/* Masked photo: small oval beach scene, "bitten" by circle #1's silhouette */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: cqw(360.31),
          top: cqh(459.68),
          width: cqw(267.944),
          height: cqh(221.955),
          WebkitMaskImage: "url(/images/hero-shapes/mask-1642.svg)",
          maskImage: "url(/images/hero-shapes/mask-1642.svg)",
          WebkitMaskSize: `${cqw(468.543)} ${cqh(454.086)}`,
          maskSize: `${cqw(468.543)} ${cqh(454.086)}`,
          WebkitMaskPosition: `${cqw(-304.792)} ${cqh(-117.091)}`,
          maskPosition: `${cqw(-304.792)} ${cqh(-117.091)}`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Image src="/images/hero-photo-1643.png" alt="" fill sizes="15vw" className="object-cover" />
      </div>

      {/* Tiny solid dot */}
      <div
        className="absolute rounded-full bg-foreground"
        style={{ left: cqw(236.86), top: cqh(530.55), width: cqw(75.035), height: cqh(78.173) }}
      />

      {/* Solid circle #3, 64% opacity */}
      <div
        className="absolute rounded-full bg-foreground opacity-[0.64]"
        style={{ left: cqw(816.72), top: cqh(196.29), width: cqw(706.066), height: cqh(735.116) }}
      />

      {/* Masked photo: mosque scene duplicate #1, 64% opacity */}
      <div
        className="absolute overflow-hidden opacity-[0.64]"
        style={{
          left: cqw(708.75),
          top: cqh(186.78),
          width: cqw(378.543),
          height: cqh(366.863),
          WebkitMaskImage: "url(/images/hero-shapes/mask-1645.svg)",
          maskImage: "url(/images/hero-shapes/mask-1645.svg)",
          WebkitMaskSize: `${cqw(706.066)} ${cqh(735.116)}`,
          maskSize: `${cqw(706.066)} ${cqh(735.116)}`,
          WebkitMaskPosition: `${cqw(107.969)} ${cqh(9.515)}`,
          maskPosition: `${cqw(107.969)} ${cqh(9.515)}`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Image src="/images/hero-photo-1646.png" alt="" fill sizes="20vw" className="object-cover" />
      </div>

      {/* Masked photo: mosque scene duplicate #2 */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: cqw(708.75),
          top: cqh(564.55),
          width: cqw(378.543),
          height: cqh(366.863),
          WebkitMaskImage: "url(/images/hero-shapes/mask-1650.svg)",
          maskImage: "url(/images/hero-shapes/mask-1650.svg)",
          WebkitMaskSize: `${cqw(706.066)} ${cqh(735.116)}`,
          maskSize: `${cqw(706.066)} ${cqh(735.116)}`,
          WebkitMaskPosition: `${cqw(107.969)} ${cqh(-368.252)}`,
          maskPosition: `${cqw(107.969)} ${cqh(-368.252)}`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Image src="/images/hero-photo-1651.png" alt="" fill sizes="20vw" className="object-cover" />
      </div>

      {/* Solid circle #4 — largest, backs the main photo */}
      <div
        className="absolute rounded-full bg-foreground"
        style={{ left: cqw(1099.87), top: cqh(-0.32), width: cqw(1106.307), height: cqh(1128.342) }}
      />

      {/* Masked photo: the main, most prominent beach scene */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: cqw(868.96),
          top: cqh(206.5),
          width: cqw(706.066),
          height: cqh(735.116),
          WebkitMaskImage: "url(/images/hero-shapes/mask-1649.svg)",
          maskImage: "url(/images/hero-shapes/mask-1649.svg)",
          WebkitMaskSize: `${cqw(1106.307)} ${cqh(1128.342)}`,
          maskSize: `${cqw(1106.307)} ${cqh(1128.342)}`,
          WebkitMaskPosition: `${cqw(230.912)} ${cqh(-206.822)}`,
          maskPosition: `${cqw(230.912)} ${cqh(-206.822)}`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <Image src="/images/hero-photo-1655.png" alt="" fill sizes="35vw" priority className="object-cover" />
      </div>

      {/* Rating badge — position follows the design canvas, but its own
          text/icon/padding use the site's normal readable fluid sizes
          rather than raw proportional scaling (which would shrink to
          illegible sizes at the collage's smallest rendered width). */}
      <div
        className="absolute flex items-center gap-(--space-fluid-2xs) rounded-full bg-secondary-pink px-(--space-fluid-sm) py-(--space-fluid-2xs)"
        style={{ left: cqw(552.15), top: cqh(232) }}
      >
        <span className="font-alexandria text-(length:--text-fluid-nav) whitespace-nowrap text-foreground">
          {t("hero.ratingLabel")}
        </span>
        <span className="flex items-center gap-0.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <img key={i} src="/icons/star.svg" alt="" className="size-(--size-fluid-icon-xs)" />
          ))}
        </span>
        <span className="font-alexandria text-(length:--text-fluid-nav) whitespace-nowrap text-foreground">
          {t("hero.ratingValue")}
        </span>
      </div>

      {/* Decorative pill */}
      <div
        className="absolute rounded-2xl bg-[rgba(243,242,242,0.86)]"
        style={{ left: cqw(1169.75), top: cqh(971), width: cqw(165), height: cqh(49) }}
      />
    </div>
  );
}
