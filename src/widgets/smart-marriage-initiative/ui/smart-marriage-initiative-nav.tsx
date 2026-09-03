"use client";

import { motion, MotionConfig } from "framer-motion";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/shared/lib/utils";

import { getSmartMarriageCopy, SMART_MARRIAGE_SECTION_IDS } from "../model/copy";
import { REVEAL, VIEWPORT } from "../model/motion";

// Figma clips this row with an edge-fade, implying it scrolls horizontally
// once the (fairly long) tab labels don't all fit — reproduced here as a
// real horizontally-scrollable row instead of forcing 6 labels to wrap.
export function SmartMarriageInitiativeNav() {
  const { nav } = getSmartMarriageCopy(useLocale());
  const [activeId, setActiveId] = useState<string>(SMART_MARRIAGE_SECTION_IDS[0]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = SMART_MARRIAGE_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b));
        setActiveId(topMost.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    for (const section of sections) observerRef.current.observe(section);
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <motion.nav
        aria-label="Page sections"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={REVEAL}
        className="mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
      >
        <div className="relative">
          <div className="flex w-full items-center gap-[clamp(8px,0.9vw,12px)] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {nav.items.map((label, index) => {
              const id = SMART_MARRIAGE_SECTION_IDS[index];
              const isActive = id === activeId;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "shrink-0 rounded-md border px-[clamp(12px,1.25vw,18px)] py-[clamp(6px,0.63vw,9px)] font-alexandria text-[clamp(12px,0.97vw,14px)] leading-[1.3] font-semibold whitespace-nowrap transition-colors",
                    isActive ? "border-brand text-brand" : "border-stroke-1 text-[#969696] hover:text-grey-primary",
                  )}
                >
                  {label}
                </a>
              );
            })}
          </div>
          {/* Fade hints that the row scrolls further — matches Figma's edge treatment. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 end-0 w-[clamp(24px,3vw,42px)] bg-gradient-to-l from-background to-transparent rtl:bg-gradient-to-r"
          />
        </div>
      </motion.nav>
    </MotionConfig>
  );
}
