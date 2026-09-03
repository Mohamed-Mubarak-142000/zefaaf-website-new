import Image from "next/image";

import { cn } from "@/shared/lib/utils";

import type { StartNowCopy } from "../../model/copy";

export function PaymentStep({ copy }: { copy: StartNowCopy["payment"] }) {
  // WhatsApp is the only payment option in the design; it's pre-selected
  // since there's nothing else to choose between.
  const selected = true;

  return (
    <div className="flex w-full flex-col p-4">
      <div
        className={cn(
          "flex w-full items-center justify-between rounded-xl border p-3",
          selected ? "border-brand" : "border-[#d9d9d9]"
        )}
      >
        <div className="flex items-center gap-3">
          <Image src="/icons/start-now/whatsapp-payment.svg" alt="" width={39} height={39} className="size-[39px] shrink-0" />
          <span className="font-alexandria text-lg text-[#757575]">{copy.whatsapp}</span>
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
      </div>
    </div>
  );
}
