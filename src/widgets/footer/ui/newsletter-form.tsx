"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const t = useTranslations("footer.newsletter");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
          type="email"
          dir="ltr"
          required
          placeholder={t("placeholder")}
          className="h-8 min-w-0 flex-1 rounded-full border-none bg-white px-(--space-fluid-sm) text-[10px] text-black placeholder:text-muted-foreground sm:text-[11px]"
        />
        <Button
          type="submit"
          variant="outline"
          className="h-8 w-fit rounded-full border-0 bg-white px-(--space-fluid-md) font-alexandria text-[10px] font-bold text-[#B02898] transition-opacity hover:bg-white hover:text-[#B02898] hover:opacity-90 sm:text-[11px]"
        >
          {t("subscribe")}
        </Button>
      </form>

      <p className="font-alexandria text-[9px] text-white/70 sm:text-[10px]">
        {t("privacyNote")}
      </p>
    </div>
  );
}
