import Image from "next/image";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/utils";

import { hasValidVipPaymentDetails, type VipPrice } from "@/shared/api";
import type { VipPaymentMethod } from "../../model/payment-method";

const PAYMENT_FIELD_KEYS: Record<string, string> = {
  payment_type: "paymentType",
  agent_name: "agentName",
  payment_number: "paymentNumber",
  payment_link: "paymentLink",
  bank_name: "bankName",
  account_holder: "accountHolder",
  agent_phone: "agentPhone",
  agent_link: "paymentLink",
  instapay_phone: "paymentNumber",
  instapay_link: "paymentLink",
  link: "paymentLink",
};

const PAYMENT_FIELD_BRANDS: Record<string, string> = {
  iban: "IBAN",
  ing_iban: "ING IBAN",
  instapay_username: "InstaPay",
};

export function PaymentStep({ price, method, showAgentDetails = false, proof, reference, onProofChange, onReferenceChange, error }: { price?: VipPrice | null; method: VipPaymentMethod; showAgentDetails?: boolean; proof?: File | null; reference?: string; onProofChange?: (file: File | null) => void; onReferenceChange?: (value: string) => void; error?: string | null }) {
  const t = useTranslations("vipPayment");
  const selected = true;
  const hasTransferDetails = method === "agent" && hasValidVipPaymentDetails(price);

  return (
    <div className="flex w-full flex-col p-4">
      {hasTransferDetails && showAgentDetails && price?.payment_details && (
        <div className="mb-3 flex flex-col gap-2 rounded-xl border border-brand/30 bg-brand/5 p-3">
          {price.price != null && (
            <div className="flex items-center justify-between gap-4 font-alexandria text-xs">
              <span className="text-muted-foreground">{t("price")}</span>
              <span dir="ltr" className="font-medium text-foreground">{price.price} {price.currency}</span>
            </div>
          )}
          {Object.entries(price.payment_details).filter(([, value]) => value).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between gap-4 font-alexandria text-xs">
              <span className="text-muted-foreground">{PAYMENT_FIELD_KEYS[key] ? t(`fields.${PAYMENT_FIELD_KEYS[key]}`) : PAYMENT_FIELD_BRANDS[key] ?? key.replaceAll("_", " ")}</span>
              <span dir="ltr" className="font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>
      )}
      {hasTransferDetails && showAgentDetails && (
        <>
        <input value={reference ?? ""} onChange={(event) => onReferenceChange?.(event.target.value)} placeholder={t("transferReference")} className="mb-3 h-10 rounded-xl border border-input bg-white px-3 font-alexandria text-sm outline-none focus:border-brand" />
        <label className="mb-3 flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-brand px-4 py-3 font-alexandria text-xs text-brand">
          {proof?.name ?? t("uploadProof")}
          <input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={(event) => onProofChange?.(event.target.files?.[0] ?? null)} />
        </label>
        </>
      )}
      {error && <p role="alert" className="mb-3 text-sm text-destructive">{error}</p>}
      {(!hasTransferDetails || !showAgentDetails) && <div
        className={cn(
          "flex w-full items-center justify-between rounded-xl border p-3",
          selected ? "border-brand" : "border-[#d9d9d9]"
        )}
      >
        <div className="flex items-center gap-3">
          {method === "agent" ? (
            <Image src="/assets/agent.svg" alt="" width={39} height={39} className="size-[39px] shrink-0 object-contain" />
          ) : method === "telegram" ? (
            <Send className="size-[39px] shrink-0 text-[#229ED9]" />
          ) : (
            <Image src="/icons/start-now/whatsapp-payment.svg" alt="" width={39} height={39} className="size-[39px] shrink-0" />
          )}
          <span className="font-alexandria text-lg text-[#757575]">{method === "agent" ? t("agent") : method === "telegram" ? "Telegram" : t("whatsapp")}</span>
        </div>
        <span
          aria-hidden
          className={cn(
            "flex size-6 shrink-0 items-center justify-center rounded-full border-2",
            selected ? "border-brand" : "border-[#d9d9d9]"
          )}
        >
          {selected && <span className="size-3 rounded-full bg-brand" />}
        </span>
      </div>}
    </div>
  );
}
