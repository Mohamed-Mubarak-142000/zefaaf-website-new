"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog";

import { useMarriageRequestForm } from "../model/use-marriage-request-form";
import { StepFinancialLifestyle } from "./step-financial-lifestyle";
import { StepPartnerSpecifications } from "./step-partner-specifications";
import { StepPersonalInfo } from "./step-personal-info";
import { MarriageRequestStepper } from "./stepper";

export interface MarriageRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MarriageRequestModal({ open, onOpenChange }: MarriageRequestModalProps) {
  const t = useTranslations("marriageRequest");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        closeLabel={t("close")}
        className="grid w-[min(94vw,55rem)] max-h-[90vh] grid-rows-[auto_1fr_auto] gap-0"
      >
        <DialogHeader className="border-b border-border">
          <DialogTitle className="flex-1 font-alexandria text-(length:--text-fluid-lg) font-semibold text-foreground">
            {t("modalTitle")}
          </DialogTitle>
        </DialogHeader>

        {/* A separate component so its wizard state (from useMarriageRequestForm)
            lives inside the subtree Radix unmounts on close — every reopen
            starts fresh without any manual reset logic. */}
        <MarriageRequestWizard onSubmitted={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}

function MarriageRequestWizard({ onSubmitted }: { onSubmitted: () => void }) {
  const t = useTranslations("marriageRequest");
  const { step, data, setField, goNext, goBack } = useMarriageRequestForm();
  const [emailError, setEmailError] = React.useState<string | null>(null);

  function handleNext() {
    if (step === 1 && !data.email.trim()) {
      setEmailError(t("step1.emailRequired"));
      return;
    }
    setEmailError(null);
    goNext();
  }

  function handleBack() {
    setEmailError(null);
    goBack();
  }

  // Both actions are plain type="button" handlers rather than a native
  // form submit: the button in this slot switches from "Next" to "Submit"
  // as `step` advances, and mutating a live button's type to "submit"
  // from inside its own click handler lets the browser's default action
  // fire on the just-mutated node — submitting (and closing) the dialog
  // one step early. Explicit handlers sidestep that entirely.
  function handleFinish() {
    onSubmitted();
  }

  return (
    <div className="contents">
      <div className="flex min-h-0 flex-col items-center gap-(--space-fluid-lg) overflow-y-auto p-(--space-fluid-md)">
        <MarriageRequestStepper currentStep={step} />

        {step === 1 && <StepPersonalInfo data={data} setField={setField} emailError={emailError} />}
        {step === 2 && <StepFinancialLifestyle data={data} setField={setField} />}
        {step === 3 && <StepPartnerSpecifications data={data} setField={setField} />}
      </div>

      <div className="flex items-center justify-between gap-(--space-fluid-xs) border-t border-border px-(--space-fluid-md) py-(--space-fluid-sm)">
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="cursor-pointer font-alexandria text-(length:--text-fluid-nav) text-grey-primary transition-colors hover:text-foreground"
          >
            {t("actions.back")}
          </button>
        ) : (
          <span aria-hidden />
        )}

        {step < 3 ? (
          <Button type="button" onClick={handleNext} size="sm" className="font-alexandria">
            {t("actions.next")}
          </Button>
        ) : (
          <Button type="button" onClick={handleFinish} size="sm" className="font-alexandria">
            {t("actions.submit")}
          </Button>
        )}
      </div>
    </div>
  );
}
