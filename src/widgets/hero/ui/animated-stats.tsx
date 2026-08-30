"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

type Stat = {
  value: string;
  label: string;
};

type AnimatedStatsProps = {
  stats: Stat[];
};

const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
let hasAnimatedStats = false;

function toLatinDigits(value: string) {
  return value.replace(/[٠-٩۰-۹]/g, (digit) => {
    const arabicIndex = ARABIC_DIGITS.indexOf(digit);
    return String(arabicIndex >= 0 ? arabicIndex : PERSIAN_DIGITS.indexOf(digit));
  });
}

function getNumberParts(value: string) {
  const latinValue = toLatinDigits(value);
  const firstDigit = latinValue.search(/\d/);
  const lastDigit = Math.max(...Array.from(latinValue.matchAll(/\d/g), (match) => match.index));
  const rawNumber = latinValue.slice(firstDigit, lastDigit + 1);

  return {
    target: Number(rawNumber.replace(/\D/g, "")),
    prefix: value.slice(0, firstDigit),
    suffix: value.slice(lastDigit + 1),
    grouped: /[,٬]/.test(rawNumber),
    digitSet: /[٠-٩]/.test(value) ? ARABIC_DIGITS : /[۰-۹]/.test(value) ? PERSIAN_DIGITS : null,
  };
}

function formatNumber(value: number, grouped: boolean, digitSet: string | null) {
  const formatted = grouped ? Math.round(value).toLocaleString("en-US") : String(Math.round(value));
  return digitSet ? formatted.replace(/\d/g, (digit) => digitSet[Number(digit)]) : formatted;
}

export function AnimatedStats({ stats }: AnimatedStatsProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const counters = rootRef.current.querySelectorAll<HTMLElement>("[data-counter]");
    const context = gsap.context(() => {
      counters.forEach((counter) => {
        const originalValue = counter.dataset.counter ?? "0";
        const { target, prefix, suffix, grouped, digitSet } = getNumberParts(originalValue);

        if (hasAnimatedStats) {
          counter.textContent = originalValue;
          return;
        }

        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 2.4,
          ease: "power2.out",
          onUpdate: () => {
            counter.textContent = `${prefix}${formatNumber(state.value, grouped, digitSet)}${suffix}`;
          },
          onComplete: () => {
            hasAnimatedStats = true;
          },
        });
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="mt-8 flex items-center gap-(--space-fluid-lg)">
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex items-center gap-(--space-fluid-lg)">
          {index > 0 && <span className="h-8 w-px bg-border" aria-hidden="true" />}
          <div className="flex flex-col items-center lg:items-start" aria-label={`${stat.value} ${stat.label}`}>
            <span
              data-counter={stat.value}
              aria-hidden="true"
              className="font-alexandria text-(length:--text-fluid-xl) font-bold whitespace-nowrap text-brand tabular-nums"
            >
              0
            </span>
            <span className="font-alexandria text-(length:--text-fluid-nav) whitespace-nowrap text-muted-foreground">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
