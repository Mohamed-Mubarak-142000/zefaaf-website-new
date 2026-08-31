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
        <p className="font-alexandria text-(length:--text-fluid-nav) font-normal text-white">
          {t("title")}
        </p>
        <p className="font-alexandria text-(length:--text-fluid-xs) text-white/80">
          {t("description")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-(--space-fluid-xs)">
        <Input
          type="email"
          dir="ltr"
          required
          placeholder={t("placeholder")}
          className="h-9 min-w-0 flex-1 rounded-full border-none bg-white px-(--space-fluid-sm) text-(length:--text-fluid-xs) text-black placeholder:text-muted-foreground"
        />
        <Button
          type="submit"
          variant="outline"
          className="w-fit rounded-full border-2 border-stroke-1 bg-white bg-[linear-gradient(191.74deg,#FFC643_0%,#F668D1_50.884%,#8539F7_100%)] bg-clip-text px-(--space-fluid-md) py-(--space-fluid-2xs) font-alexandria text-(length:--text-fluid-xs) font-bold text-transparent transition-opacity hover:bg-white hover:text-transparent hover:opacity-90"
        >
          {t("subscribe")}
        </Button>
      </form>

      <p className="font-alexandria text-(length:--text-fluid-xs) text-white/70">
        {t("privacyNote")}
      </p>
    </div>
  );
}
