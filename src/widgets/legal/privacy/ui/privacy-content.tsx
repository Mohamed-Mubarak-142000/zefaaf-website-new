"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getPrivacyCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// Decorative confetti clusters, exported flattened from Figma (get_design_context
// on node 195:99621) as two single background images rather than the ~40
// individually rotated/skewed fragments Figma models them as. This page
// reuses the exact same two assets the Terms widget exports at
// public/icons/terms-pattern-top.svg / -bottom.svg — the Figma node bounding
// boxes for both pages resolve to nearly identical percentages of their own
// content section, confirming it's the same design-system decoration.
// Positioned as a % of this section's own bounding box (1251.75 x 1611.59 in
// the design) so it scales continuously with the content instead of needing
// fixed px.
const PATTERN_TOP = { src: "/icons/terms-pattern-top.svg", left: "96.9%", top: "16.8%", width: "31.53%" };
const PATTERN_BOTTOM = { src: "/icons/terms-pattern-bottom.svg", left: "-2.14%", top: "27.03%", width: "15.27%" };

const CONTACT_ICON = {
  mail: "/icons/privacy-contact-mail.svg",
  globe: "/icons/privacy-contact-globe.svg",
} as const;

export function PrivacyContent() {
  const { meta, sections, contact } = getPrivacyCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-label={meta.tagline}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative isolate mx-auto w-full max-w-[1600px] overflow-hidden px-(--space-fluid-container) pt-[clamp(20px,2.5vw,36px)] pb-[clamp(40px,5vw,72px)]"
      >
        <img
          aria-hidden
          src={PATTERN_TOP.src}
          alt=""
          className="pointer-events-none absolute -z-10"
          style={{ left: PATTERN_TOP.left, top: PATTERN_TOP.top, width: PATTERN_TOP.width }}
        />
        <img
          aria-hidden
          src={PATTERN_BOTTOM.src}
          alt=""
          className="pointer-events-none absolute -z-10"
          style={{ left: PATTERN_BOTTOM.left, top: PATTERN_BOTTOM.top, width: PATTERN_BOTTOM.width }}
        />

        <motion.div variants={REVEAL} className="flex flex-col gap-[clamp(12px,1vw,14px)]">
          <p className="font-alexandria text-[clamp(12px,0.85vw,14px)] text-[#7f7f7f]">{meta.lastUpdated}</p>
          <div className="flex items-center gap-[clamp(6px,0.5vw,7px)]">
            <img src="/icons/legal-document.svg" alt="" className="size-[clamp(20px,1.6vw,24px)] shrink-0" />
            <p className="font-alexandria text-[clamp(15px,1.1vw,18px)] font-semibold text-foreground">
              {meta.tagline}
            </p>
          </div>
        </motion.div>

        <div className="mt-[clamp(28px,3.2vw,53px)] flex flex-col gap-[clamp(28px,3.2vw,53px)]">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              custom={index}
              variants={REVEAL_STAGGERED}
              className="flex flex-col gap-[clamp(12px,1vw,18px)]"
            >
              <h2 className="font-alexandria text-[clamp(15px,1.05vw,16px)] font-semibold text-foreground">
                {section.title}
              </h2>

              <div className="flex flex-col gap-[clamp(6px,0.5vw,8px)] font-alexandria text-[clamp(13px,0.97vw,14px)] leading-[1.9] text-grey-primary">
                {section.intro && <p>{section.intro}</p>}

                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

                {section.bullets && (
                  <ul className="list-disc ps-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.outro && <p>{section.outro}</p>}
              </div>
            </motion.div>
          ))}

          <motion.div
            custom={sections.length}
            variants={REVEAL_STAGGERED}
            className="flex flex-col gap-[clamp(12px,1vw,18px)]"
          >
            <h2 className="font-alexandria text-[clamp(15px,1.05vw,16px)] font-semibold text-foreground">
              {contact.title}
            </h2>
            <p className="font-alexandria text-[clamp(13px,0.97vw,14px)] leading-[1.9] text-grey-primary">
              {contact.intro}
            </p>
            <div className="flex flex-wrap gap-[clamp(14px,1.3vw,18px)]">
              {contact.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-[clamp(7px,0.65vw,9px)] font-alexandria text-[clamp(13px,0.97vw,14px)] text-[#1d79dc] hover:underline"
                >
                  <img src={CONTACT_ICON[item.icon]} alt="" className="size-[clamp(18px,1.5vw,21px)] shrink-0" />
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
