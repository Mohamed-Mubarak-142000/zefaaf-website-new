"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";

import { getTermsCopy } from "../model/copy";
import { REVEAL, REVEAL_STAGGERED, VIEWPORT } from "../model/motion";

// Decorative confetti clusters, exported flattened from Figma (get_design_context
// on node 195:100242) as two single background images rather than the ~60
// individually rotated/skewed fragments Figma models them as. Positioned as a
// % of this section's own bounding box (1251.75 x 1267.84 in the design) so
// they scale continuously with the content instead of needing fixed px.
const PATTERN_TOP = { src: "/icons/terms-pattern-top.svg", left: "96.7%", top: "14.98%", width: "31.87%" };
const PATTERN_BOTTOM = { src: "/icons/terms-pattern-bottom.svg", left: "-2.2%", top: "26.81%", width: "15.38%" };

export function TermsContent() {
  const { meta, sections, conclusion } = getTermsCopy(useLocale());

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        aria-label={meta.committee}
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
              {meta.committee}
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
              {conclusion.title}
            </h2>
            <div className="flex flex-wrap gap-x-[clamp(20px,2vw,36px)] gap-y-[clamp(8px,0.7vw,12px)] font-alexandria text-[clamp(13px,0.97vw,14px)] leading-[1.9]">
              <div className="flex flex-col">
                <p className="font-semibold text-brand">{conclusion.committee.name}</p>
                {conclusion.committee.lines.map((line) => (
                  <p key={line} className="text-foreground">
                    {line}
                  </p>
                ))}
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-brand">{conclusion.platform.name}</p>
                {conclusion.platform.lines.map((line) => (
                  <p key={line} className="text-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
