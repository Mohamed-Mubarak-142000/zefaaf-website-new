"use client";

import { useLocale } from "next-intl";

import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";

import { getStartNowCopy } from "../model/copy";
import { useStartNow } from "../model/use-start-now";
import { DetailsStep, isDetailsStepValid } from "./steps/details-step";
import { GenderStep } from "./steps/gender-step";
import { LocationStep } from "./steps/location-step";
import { PaymentStep } from "./steps/payment-step";

export function StartNowDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const locale = useLocale();
  const copy = getStartNowCopy(locale);
  const { step, gender, setGender, details, patchDetails, goNext, goBack, reset } = useStartNow();

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) reset();
  }

  const title = copy[step].title;
  const canGoNext =
    step === "gender" ? gender !== null : step === "details" ? isDetailsStepValid(details) : true;

  function handleNext() {
    if (step === "location") {
      // No live WhatsApp destination or geolocation backend exists yet —
      // same placeholder convention as the header/footer/VIP CTAs — so the
      // flow simply completes and closes.
      handleOpenChange(false);
      return;
    }
    goNext();
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {step === "gender" && <GenderStep copy={copy.gender} value={gender} onChange={setGender} />}
        {step === "details" && <DetailsStep copy={copy.details} values={details} onChange={patchDetails} />}
        {step === "payment" && <PaymentStep copy={copy.payment} />}
        {step === "location" && <LocationStep copy={copy.location} />}

        <DialogFooter className={step === "gender" ? "justify-end" : "justify-between"}>
          {step === "location" ? (
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="font-alexandria text-sm text-brand"
            >
              {copy.location.skip}
            </button>
          ) : (
            step !== "gender" && (
              <button type="button" onClick={goBack} className="font-alexandria text-sm text-brand">
                {copy.actions.back}
              </button>
            )
          )}

          <Button
            type="button"
            disabled={!canGoNext}
            onClick={handleNext}
            className="h-9 rounded-lg px-2.5 font-alexandria text-[10.5px]"
          >
            {step === "location" ? copy.location.allow : copy.actions.next}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
