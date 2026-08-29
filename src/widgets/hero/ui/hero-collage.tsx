import { useTranslations } from "next-intl";
import Image from "next/image";

// Figma's version of this collage is built from ~8 pixel-positioned ellipses
// plus 4 custom mask shapes to fake circles "biting into" each other. Instead
// of replicating those exact masks, the same bitten-circle look comes from
// plain layering: the solid backdrop circle sits in front of (later in DOM
// than) the photo behind it, so it naturally covers part of it. Every
// position/size below is a % of the square container, so the whole thing
// scales with --size-fluid-hero-collage instead of needing its own
// breakpoints.
export function HeroCollage() {
  const t = useTranslations();

  return (
    <div className="relative mx-auto aspect-square w-(--size-fluid-hero-collage) shrink-0">
      {/* Top mosque photo, drawn first so the backdrop circle below can overlap its bottom-left edge */}
      <div className="absolute top-[6%] left-[42%] aspect-square w-[36%] overflow-hidden rounded-full">
        <Image src="/images/hero-photo-1652.png" alt="" fill sizes="20vw" className="object-cover" />
      </div>

      {/* Bottom mosque photo */}
      <div className="absolute top-[46%] left-[42%] aspect-square w-[36%] overflow-hidden rounded-full">
        <Image src="/images/hero-photo-1653.png" alt="" fill sizes="20vw" className="object-cover" />
      </div>

      {/* Solid backdrop circle — drawn after the mosque photos so it overlaps
          their left edges, and after the beach photo below is drawn on top
          of *this*, so this in turn gets partially covered too. */}
      <div className="absolute top-[8%] left-0 aspect-square w-[58%] rounded-full bg-foreground" />

      {/* Main beach photo — the largest, most prominent element, drawn last (on top) */}
      <div className="absolute top-[22%] left-[1%] aspect-[268/222] w-[54%] overflow-hidden rounded-[50%]">
        <Image src="/images/hero-photo-1643.png" alt="" fill sizes="30vw" priority className="object-cover" />
      </div>

      {/* Rating badge */}
      <div className="absolute top-[-2%] left-[34%] flex items-center gap-(--space-fluid-2xs) rounded-full bg-secondary-pink px-(--space-fluid-sm) py-(--space-fluid-2xs) shadow-sm">
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

      {/* Small decorative pill, bottom-left of the beach photo */}
      <div className="absolute top-[80%] left-[8%] h-[8%] w-[26%] rounded-2xl bg-muted/80" />

      {/* Detached small circle — the same beach photo, reused at a smaller size off to the side */}
      <div className="absolute top-[36%] left-[76%] aspect-square w-[17%] overflow-hidden rounded-full">
        <Image src="/images/hero-photo-1655.png" alt="" fill sizes="10vw" className="object-cover" />
      </div>

      {/* Small accent dot */}
      <div className="absolute top-[40%] left-[97%] aspect-square w-[8%] rounded-full bg-foreground" />
    </div>
  );
}
