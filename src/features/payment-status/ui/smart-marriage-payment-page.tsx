"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import { PaymentStatusDialog, type PaymentStatus } from "./payment-status-dialog";

export function SmartMarriagePaymentPage({ status }: { status: PaymentStatus }) {
  const locale = useLocale();
  const router = useRouter();

  function goHome() {
    router.replace(`/${locale}/`);
  }

  return (
    <main className="min-h-svh bg-white" aria-label={status}>
      <PaymentStatusDialog
        status={status}
        open
        onOpenChange={(open) => { if (!open) goHome(); }}
        onBackToHome={goHome}
        onTryAgain={goHome}
      />
    </main>
  );
}
