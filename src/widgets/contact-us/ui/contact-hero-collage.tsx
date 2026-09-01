import Image from "next/image";

// Figma frame 253:8619 lays this out on a fixed canvas built from 3 concentric
// arcs (thin rings + one blurred pink glow), a solid black dome, 3 circular
// photos, and the main photo — all absolutely positioned, with the arcs using
// Figma's "half-ellipse, rotate 180°" export trick (the visible arc is drawn
// into the *bottom* half of a box exactly 2× the artwork's real height, then
// the whole box is rotated 180° so it ends up back on top). Rather than
// re-derive that by hand, every element below keeps its exact nested
// rotate/inset structure from the Figma export and only the outer box
// (left/top/width/height) is converted from raw px to cqw/cqh — i.e. a %
// of this canvas — via the same technique as the home page's HeroCollage.
// That keeps every element proportionally exact at any rendered size.
//
// The canvas here is the union of the ring/dome/avatar group (node 253:8619,
// itself a child of the page root) and the main photo (a sibling node,
// 131:14260, positioned in the page root's own coordinate space) — both
// re-expressed in one shared local origin so the whole composition scales
// together. The two oversized ring wrapper boxes (519.809px / 623.37px tall)
// are intentionally taller than the visible canvas: half of each box is
// blank by construction (the other half of the "rotate 180°" trick), so the
// canvas height is trimmed to where the artwork is actually visible — the
// wrappers just get clipped by this container's overflow-hidden, same as
// Figma's own frame does.
const CANVAS_W = 777.39;
const CANVAS_H = 364.87;

function cqw(px: number) {
  return `${(px / CANVAS_W) * 100}cqw`;
}
function cqh(px: number) {
  return `${(px / CANVAS_H) * 100}cqh`;
}

export function ContactHeroCollage() {
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{
        width: "clamp(17.5rem, 10rem + 26vw, 30rem)",
        aspectRatio: `${CANVAS_W} / ${CANVAS_H}`,
        containerType: "size",
      }}
    >
      {/* Outermost ring — thinnest, largest */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: cqw(0), top: cqh(44.45), width: cqw(777.385), height: cqh(623.37) }}
      >
        <div className="relative size-full rotate-180">
          <div className="absolute inset-x-0 bottom-0 top-1/2">
            <Image src="/images/contact/hero-blob-outer.svg" alt="" fill unoptimized className="object-contain" />
          </div>
        </div>
      </div>

      {/* Middle ring */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: cqw(64.58), top: cqh(96.23), width: cqw(648.237), height: cqh(519.809) }}
      >
        <div className="relative size-full rotate-180">
          <div className="absolute inset-x-0 bottom-0 top-1/2">
            <Image src="/images/contact/hero-blob-mid.svg" alt="" fill unoptimized className="object-contain" />
          </div>
        </div>
      </div>

      {/* Innermost — blurred pink glow hugging the dome */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: cqw(119.65), top: cqh(140.39), width: cqw(538.094), height: cqh(431.487) }}
      >
        <div className="relative size-full rotate-180">
          <div className="absolute inset-[44.04%_-4.78%_-5.96%_-4.78%]">
            <Image src="/images/contact/hero-blob-inner.svg" alt="" fill unoptimized className="object-cover" />
          </div>
        </div>
      </div>

      {/* Solid black dome backing the main photo */}
      <div
        className="absolute"
        style={{ left: cqw(119.29), top: cqh(148.87), width: cqw(538.5), height: cqh(216) }}
      >
        <Image src="/images/contact/hero-dome.svg" alt="" fill unoptimized className="object-cover" />
      </div>

      {/* Main photo */}
      <div
        className="absolute overflow-hidden rounded-tl-[12px] rounded-tr-[12px] bg-[#e0e0e0] shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
        style={{ left: cqw(245.6), top: cqh(0), width: cqw(286.5), height: cqh(364.5) }}
      >
        <div
          className="absolute top-0"
          style={{ left: cqw(-82.42), width: cqw(616.684), height: cqh(364.5) }}
        >
          <Image
            src="/images/contact/hero-photo-main.png"
            alt=""
            fill
            sizes="300px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Floating avatar photos */}
      <div
        className="absolute overflow-hidden rounded-full ring-2 ring-white"
        style={{ left: cqw(119.65), top: cqh(55.32), width: cqw(81.823), height: cqh(81.823) }}
      >
        <Image src="/images/contact/hero-avatar-2.png" alt="" fill sizes="90px" className="object-cover" />
      </div>
      <div
        className="absolute overflow-hidden rounded-full ring-2 ring-white"
        style={{ left: cqw(638.61), top: cqh(191.81), width: cqw(60.085), height: cqh(60.085) }}
      >
        <Image src="/images/contact/hero-avatar-1.png" alt="" fill sizes="90px" className="object-cover" />
      </div>
      <div
        className="absolute overflow-hidden rounded-full ring-2 ring-white"
        style={{ left: cqw(20.75), top: cqh(279.61), width: cqw(62.549), height: cqh(62.549) }}
      >
        <Image src="/images/contact/hero-avatar-3.png" alt="" fill sizes="90px" className="object-cover" />
      </div>
    </div>
  );
}
