"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/utils";

import type { MarriageRequestStep } from "../model/types";

const STEPS = [
  { number: 1, labelKey: "steps.personalInfo" },
  { number: 2, labelKey: "steps.financialLifestyle" },
  { number: 3, labelKey: "steps.partnerSpecs" },
] as const;

// The connector between step 1↔2 is always the brand dotted line and the one
// between 2↔3 is always the plain gray line — verified against all three
// Figma frames (steps 1, 2 and 3 active), where only the first segment ever
// switches style regardless of progress.
export function MarriageRequestStepper({ currentStep }: { currentStep: MarriageRequestStep }) {
  const t = useTranslations("marriageRequest");

  return (
    <div className="flex w-full items-start">
      {STEPS.map((step, index) => {
        const isDone = step.number < currentStep;
        const isActive = step.number === currentStep;

        return (
          <React.Fragment key={step.number}>
            <div className="flex shrink-0 flex-col items-center gap-(--space-fluid-3xs)">
              <span
                className={cn(
                  "flex size-(--size-fluid-icon-md) shrink-0 items-center justify-center rounded-full border-2 font-almarai text-xs tracking-[0.2px]",
                  isDone && "border-primary bg-primary text-white",
                  isActive && "border-primary bg-white text-foreground",
                  !isDone && !isActive && "border-border bg-white text-foreground",
                )}
              >
                {isDone ? <Check className="size-3" strokeWidth={3} /> : String(step.number).padStart(2, "0")}
              </span>
              <span className="max-w-24 text-center font-alexandria text-(length:--text-fluid-xs) text-foreground/90">
                {t(step.labelKey)}
              </span>
            </div>

            {index < STEPS.length - 1 && (
              <span
                aria-hidden
                className={cn(
                  "mt-[calc(var(--size-fluid-icon-md)/2)] h-0 flex-1 shrink border-t-2",
                  index === 0 ? "border-dotted border-primary" : "border-solid border-border",
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
