"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

import { subscribeToNewsletter } from "@/shared/api";
import { getDirection, type Locale } from "@/shared/i18n";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const t = useTranslations("footer.newsletter");
  const locale = useLocale() as Locale;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    setStatus("loading");
    try {
      await subscribeToNewsletter(email);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={cn("flex flex-col gap-(--space-fluid-sm)", className)}>
      <div className="flex flex-col gap-(--space-fluid-2xs)">
        <p className="font-alexandria text-(length:--text-fluid-xs) font-normal text-white">
          {t("title")}
        </p>
        <p className="font-alexandria text-[10px] text-white/80 sm:text-[11px]">
          {t("description")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-(--space-fluid-xs)">
        <Input
          name="email"
          type="email"
          dir={getDirection(locale)}
          required
          placeholder={t("placeholder")}
          className="h-8 min-w-0 flex-1 rounded-full border-none bg-white px-(--space-fluid-sm) text-start text-[10px] text-black placeholder:text-muted-foreground sm:text-[11px]"
        />
        <Button
          disabled={status === "loading"}
          type="submit"
          variant="outline"
          className="h-8 w-fit rounded-full border-0 bg-white px-(--space-fluid-md) font-alexandria text-[10px] font-bold text-[#B02898] transition-opacity hover:bg-white hover:text-[#B02898] hover:opacity-90 sm:text-[11px]"
        >
          {status === "loading" ? <Loader2 className="size-4 animate-spin" aria-label="Subscribing" /> : t("subscribe")}
        </Button>
      </form>

      {status === "success" && <p role="status" className="font-alexandria text-[10px] text-white">Subscribed successfully.</p>}
      {status === "error" && <p role="alert" className="font-alexandria text-[10px] text-red-200">Subscription failed. Please try again.</p>}

      <p className="font-alexandria text-[9px] text-white/70 sm:text-[10px]">
        {t("privacyNote")}
      </p>
    </div>
  );
}
