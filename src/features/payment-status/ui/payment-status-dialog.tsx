"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/shared/ui/dialog";

import { STATUS_ICON_POP, STATUS_ICON_PULSE } from "../model/motion";

export type PaymentStatus = "success" | "fail";

const STATUS_ICON = {
  success: Check,
  fail: X,
} as const satisfies Record<PaymentStatus, typeof Check>;

const STATUS_TONE = {
  success: { ring: "bg-green-500/15", solid: "bg-green-500" },
  fail: { ring: "bg-destructive/15", solid: "bg-destructive" },
} as const satisfies Record<PaymentStatus, { ring: string; solid: string }>;

export interface PaymentStatusDialogProps {
  status: PaymentStatus;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBackToHome?: () => void;
  onTryAgain?: () => void;
}

export function PaymentStatusDialog({
  status,
  open,
  onOpenChange,
  onBackToHome,
  onTryAgain,
}: PaymentStatusDialogProps) {
  const t = useTranslations("paymentStatus");
  const Icon = STATUS_ICON[status];
  const { ring, solid } = STATUS_TONE[status];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        closeLabel={t("close")}
        className={
          status === "success" ? "w-[min(92vw,42rem)]" : "w-[min(92vw,35rem)]"
        }
      >
        <div className="h-13 shrink-0" />

        <div className="flex flex-col items-center gap-(--space-fluid-md) px-(--space-fluid-sm) pt-(--space-fluid-2xs) pb-(--space-fluid-lg) text-center">
          <div className="flex flex-col items-center gap-(--space-fluid-sm)">
            <p className="font-almarai text-sm text-black-primary">
              {t(`${status}.eyebrow`)}
            </p>

            <div className="relative flex size-(--size-fluid-status-icon) shrink-0 items-center justify-center">
              <motion.span
                aria-hidden
                className={cn("absolute inset-[15%] rounded-full", ring)}
                variants={STATUS_ICON_PULSE}
                animate="animate"
              />
              <span
                aria-hidden
                className={cn("absolute inset-[22%] rounded-full", ring)}
              />
              <motion.span
                initial="hidden"
                animate="visible"
                variants={STATUS_ICON_POP}
                className={cn(
                  "relative flex size-[62%] items-center justify-center rounded-full text-white",
                  solid
                )}
              >
                <Icon className="size-[45%]" strokeWidth={3} />
              </motion.span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-(--space-fluid-2xs)">
            <DialogTitle className="flex-none font-almarai text-2xl font-bold text-black-primary">
              {t(`${status}.title`)}
            </DialogTitle>
            <DialogDescription className="max-w-92 font-almarai text-(length:--text-fluid-nav) text-grey-primary">
              {t(`${status}.description`)}
            </DialogDescription>
          </div>

          <div className="flex items-center gap-(--space-fluid-sm)">
            <Button
              variant="ghost"
              className="bg-primary/10 font-alexandria text-primary hover:bg-primary/15"
              onClick={onBackToHome}
            >
              {t("backToHome")}
            </Button>
            {status === "fail" && (
              <Button
                variant="default"
                className="font-alexandria"
                onClick={onTryAgain}
              >
                {t("tryAgain")}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
