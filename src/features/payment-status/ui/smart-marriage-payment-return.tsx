"use client";

import * as React from "react";

import { PaymentStatusDialog, type PaymentStatus } from "./payment-status-dialog";

export function SmartMarriagePaymentReturn() {
  const [status, setStatus] = React.useState<PaymentStatus | null>(null);

  React.useEffect(() => {
    const url = new URL(window.location.href);
    const value = url.searchParams.get("smart_marriage_payment");
    // Some payment callbacks append the profile id with a second `?`, e.g.
    // `smart_marriage_payment=success?smart_marriage_profile_id=105`.
    // Accept that response while still treating success and cancel separately.
    const paymentStatus = value?.split("?")[0];
    if (paymentStatus === "success" || paymentStatus === "fail") {
      queueMicrotask(() => setStatus(paymentStatus));
    }
  }, []);

  function close() {
    setStatus(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("smart_marriage_payment");
    url.searchParams.delete("smart_marriage_profile_id");
    window.history.replaceState(null, "", url);
  }

  if (!status) return null;
  return (
    <PaymentStatusDialog
      status={status}
      open
      onOpenChange={(open) => {
        if (!open) close();
      }}
      onBackToHome={close}
      onTryAgain={close}
    />
  );
}
