"use client";

import Image from "next/image";
import * as React from "react";
import { Loader2 } from "lucide-react";

import { getLocalAgent, type LocalAgent } from "@/shared/api";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";

export type SmartMarriagePaymentMethod = "local_agent" | "paypal";
type AgentStep = "select" | "agent-details" | "agent-code";

export function PaymentMethodDialog({ open, onOpenChange, locale, countryCode, method, onMethodChange, agentCode, onAgentCodeChange, submitting, error, onContinue }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale: string;
  countryCode: string;
  method: SmartMarriagePaymentMethod | null;
  onMethodChange: (method: SmartMarriagePaymentMethod, agentId?: number) => void;
  agentCode: string;
  onAgentCodeChange: (value: string) => void;
  submitting: boolean;
  error: string | null;
  onContinue: () => void;
}) {
  const isArabic = locale.startsWith("ar");
  const [agent, setAgent] = React.useState<LocalAgent | null>(null);
  const [agentCountryCode, setAgentCountryCode] = React.useState("");
  const [step, setStep] = React.useState<AgentStep>("select");

  React.useEffect(() => {
    if (!open || !countryCode) return;
    let active = true;
    void getLocalAgent(countryCode)
      .then((found) => {
        if (!active) return;
        setAgent(found);
        setAgentCountryCode(countryCode);
      })
      .catch(() => {
        if (!active) return;
        setAgent(null);
        setAgentCountryCode(countryCode);
      });
    return () => { active = false; };
  }, [countryCode, open]);

  const resolvedAgent = agentCountryCode === countryCode ? agent : null;
  const checkingAgent = Boolean(open && countryCode && agentCountryCode !== countryCode);

  function choose(selected: SmartMarriagePaymentMethod) {
    onMethodChange(selected, selected === "local_agent" ? resolvedAgent?.id : undefined);
  }

  function next() {
    if (method === "local_agent" && step === "select") return setStep("agent-details");
    if (step === "agent-details") return setStep("agent-code");
    onContinue();
  }

  const title = step === "agent-details"
    ? (isArabic ? "بيانات الوكيل" : "Agent details")
    : step === "agent-code"
      ? (isArabic ? "كود الوكيل" : "Agent code")
      : (isArabic ? "اختر طريقة الدفع" : "Choose payment method");

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
          ) : step === "select" ? (
            <div className={cn("grid grid-cols-1 gap-4", resolvedAgent && "sm:grid-cols-2")}>
              {resolvedAgent && <PaymentChoice active={method === "local_agent"} icon="/assets/agent.svg" label={isArabic ? "الدفع عن طريق وكيل" : "Local agent"} onClick={() => choose("local_agent")} />}
              <PaymentChoice active={method === "paypal"} icon="/assets/paypal.svg" label="PayPal" onClick={() => choose("paypal")} />
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

function PaymentChoice({ active, icon, label, onClick }: { active: boolean; icon: string; label: string; onClick: () => void }) {
  return <button type="button" onClick={onClick} className={cn("flex flex-col items-center gap-2 rounded-2xl border bg-white p-6 text-center transition-colors", active ? "border-brand bg-brand/5" : "border-border")}>
    <Image src={icon} alt="" width={58} height={58} className="size-14 object-contain" />
    <span className="font-alexandria font-semibold text-foreground">{label}</span>
  </button>;
}
