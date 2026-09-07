"use client";

import Image from "next/image";
import * as React from "react";
import { Loader2, Send } from "lucide-react";

import { getLocalAgent, type LocalAgent } from "@/shared/api";
import { Alert } from "@/shared/ui/alert";
import { cn } from "@/shared/lib/utils";
import { resolveContactMethod } from "@/shared/lib/whatsapp-contact";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";

import {
  getPaymentDialogAction,
  type PaymentDialogStep,
  type SmartMarriagePaymentMethod,
} from "../model/payment-flow";

export type { SmartMarriagePaymentMethod };

export function PaymentMethodDialog({ open, onOpenChange, locale, countryCode, method, onMethodChange, agentCode, onAgentCodeChange, chatMessage, submitting, error, onContinue }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale: string;
  countryCode: string;
  method: SmartMarriagePaymentMethod | null;
  onMethodChange: (method: SmartMarriagePaymentMethod, agentId?: number) => void;
  agentCode: string;
  onAgentCodeChange: (value: string) => void;
  /** The request summary the WhatsApp/Telegram chat opens pre-filled with. */
  chatMessage: string;
  submitting: boolean;
  error: string | null;
  onContinue: () => void;
}) {
  const isArabic = locale.startsWith("ar");
  const [agent, setAgent] = React.useState<LocalAgent | null>(null);
  const [agentCountryCode, setAgentCountryCode] = React.useState("");
  // Holds `${countryCode}:${retryKey}` for whichever attempt last failed, so
  // a country change or a retry click naturally invalidates a stale error
  // just by changing what this is compared against below — no need to
  // reset it imperatively (which would run afoul of react-hooks/set-state-in-effect).
  const [failedAttempt, setFailedAttempt] = React.useState<string | null>(null);
  const [retryKey, setRetryKey] = React.useState(0);
  const [step, setStep] = React.useState<PaymentDialogStep>("select");

  React.useEffect(() => {
    if (!open || !countryCode) return;
    let active = true;
    const attempt = `${countryCode}:${retryKey}`;
    void getLocalAgent(countryCode)
      .then((found) => {
        if (!active) return;
        setAgent(found);
        setAgentCountryCode(countryCode);
      })
      .catch(() => {
        // A failed lookup is NOT the same as "no local agent for this
        // country" — silently treating it that way used to route the user
        // to WhatsApp/Telegram as if that were a real business decision.
        if (!active) return;
        setFailedAttempt(attempt);
      });
    return () => { active = false; };
  }, [countryCode, open, retryKey]);

  const agentError = failedAttempt === `${countryCode}:${retryKey}`;

  const resolvedAgent = agentCountryCode === countryCode ? agent : null;
  const checkingAgent = Boolean(open && countryCode && agentCountryCode !== countryCode && !agentError);
  // Same precedence VIP uses for its single auto-picked row: a resolved
  // local agent wins, otherwise WhatsApp/Telegram is chosen by country.
  const resolved = resolveContactMethod(Boolean(resolvedAgent), countryCode);
  const contactMethod: SmartMarriagePaymentMethod = resolved === "agent" ? "local_agent" : resolved;

  // There is only ever one method now (like VIP, nothing to pick between),
  // so it's reported to the parent as soon as it's resolved instead of
  // waiting for a click. The ref sidesteps onMethodChange's identity
  // changing every parent render, which would otherwise refire this.
  const onMethodChangeRef = React.useRef(onMethodChange);
  React.useEffect(() => {
    onMethodChangeRef.current = onMethodChange;
  });
  React.useEffect(() => {
    if (!open || checkingAgent || agentError) return;
    onMethodChangeRef.current(contactMethod, contactMethod === "local_agent" ? resolvedAgent?.id : undefined);
  }, [open, checkingAgent, agentError, contactMethod, resolvedAgent?.id]);

  function next() {
    const action = getPaymentDialogAction(method, step, chatMessage);
    if (action.type === "go-to-step") return setStep(action.step);
    // The chat opens straight out of this click and `onContinue` sends the
    // request alongside it, so the two leave together — and the tab stays
    // inside the user gesture, which is what keeps the browser from blocking
    // it as a popup (awaiting the request first would not).
    if (action.chatLink) window.open(action.chatLink, "_blank", "noopener,noreferrer");
    onContinue();
  }

  const title = step === "agent-details"
    ? (isArabic ? "بيانات الوكيل" : "Agent details")
    : step === "agent-code"
      ? (isArabic ? "كود الوكيل" : "Agent code")
      : (isArabic ? "طريقة الدفع" : "Payment method");

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => {
      if (!nextOpen) {
        setStep("select");
        setAgent(null);
        setAgentCountryCode("");
        onAgentCodeChange("");
      }
      onOpenChange(nextOpen);
    }}>
      <DialogContent className="w-[min(92vw,32rem)]" closeLabel={isArabic ? "إغلاق" : "Close"}>
        <DialogHeader><DialogTitle className="text-center">{title}</DialogTitle></DialogHeader>
        <div className="flex flex-col gap-3 p-4">
          {checkingAgent && step === "select" ? (
            <div className="flex items-center justify-center gap-2 py-12 text-grey-primary">
              <Loader2 className="size-6 animate-spin" />
              <span>{isArabic ? "جارٍ التحقق من الوكيل..." : "Checking local agent..."}</span>
            </div>
          ) : agentError && step === "select" ? (
            <div className="flex flex-col gap-3">
              <Alert>{isArabic ? "تعذر التحقق من الوكيل المحلي لهذه الدولة." : "Could not check for a local agent in this country."}</Alert>
              <Button type="button" variant="outline" onClick={() => setRetryKey((key) => key + 1)} className="font-alexandria">
                {isArabic ? "إعادة المحاولة" : "Retry"}
              </Button>
            </div>
          ) : step === "select" ? (
            <div className="flex flex-col gap-3">
              <PaymentChoice
                active
                icon={contactMethod === "local_agent"
                  ? <Image src="/assets/agent.svg" alt="" width={39} height={39} className="size-[39px] shrink-0 object-contain" />
                  : contactMethod === "telegram"
                    ? <Send className="size-[39px] shrink-0 text-[#229ED9]" />
                    : <Image src="/icons/start-now/whatsapp-payment.svg" alt="" width={39} height={39} className="size-[39px] shrink-0 object-contain" />}
                label={contactMethod === "local_agent"
                  ? (isArabic ? "الدفع عن طريق وكيل" : "Local agent")
                  : contactMethod === "telegram" ? "Telegram" : (isArabic ? "واتساب" : "WhatsApp")}
              />
            </div>
          ) : step === "agent-details" && resolvedAgent ? (
            <div className="rounded-2xl border border-border bg-white p-4 text-start">
              <p className="font-alexandria font-semibold text-foreground">{resolvedAgent.name}</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-grey-primary">
                {resolvedAgent.phone && <p>{isArabic ? "الهاتف" : "Phone"}: <span dir="ltr">{resolvedAgent.phone}</span></p>}
                {resolvedAgent.whatsapp_number && <p>{isArabic ? "واتساب" : "WhatsApp"}: <span dir="ltr">{resolvedAgent.whatsapp_number}</span></p>}
                {resolvedAgent.email && <p>{isArabic ? "البريد الإلكتروني" : "Email"}: {resolvedAgent.email}</p>}
              </div>
            </div>
          ) : (
            <Input id="smart-marriage-agent-code" autoComplete="off" required value={agentCode} onChange={(event) => onAgentCodeChange(event.target.value)} placeholder={isArabic ? "أدخل كود الوكيل" : "Enter agent code"} className="rounded-2xl py-6 text-center text-lg font-semibold" />
          )}
          {error && <p role="alert" className="font-alexandria text-sm text-destructive">{error}</p>}
        </div>
        <DialogFooter className="flex-row justify-between gap-3">
          {step !== "select" && <Button type="button" variant="outline" disabled={submitting} onClick={() => setStep(step === "agent-code" ? "agent-details" : "select")} className="font-alexandria">{isArabic ? "رجوع" : "Back"}</Button>}
          <Button type="button" disabled={!method || submitting || checkingAgent || (step === "agent-code" && !agentCode.trim())} onClick={next} className="ms-auto font-alexandria">
            {submitting
              ? <Loader2 className="size-5 animate-spin" aria-label={isArabic ? "جارٍ الإرسال" : "Submitting"} />
              : step === "agent-code" ? (isArabic ? "تأكيد الكود" : "Confirm code") : (isArabic ? "التالي" : "Next")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function PaymentChoice({ active, icon, label }: { active: boolean; icon: React.ReactNode; label: string }) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between rounded-xl border p-3",
        active ? "border-brand" : "border-[#d9d9d9]"
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-alexandria text-lg text-[#757575]">{label}</span>
      </div>
      <span
        aria-hidden
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full border-2",
          active ? "border-brand" : "border-[#d9d9d9]"
        )}
      >
        {active && <span className="size-3 rounded-full bg-brand" />}
      </span>
    </div>
  );
}
