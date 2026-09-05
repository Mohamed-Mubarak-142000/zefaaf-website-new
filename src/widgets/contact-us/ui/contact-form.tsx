"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

import { sendContactMessage } from "@/shared/api";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

const SOCIAL_LINKS = [
  { key: "instagram", label: "Instagram", icon: "/icons/social-instagram.svg" },
  { key: "facebook", label: "Facebook", icon: "/icons/social-facebook.svg" },
  { key: "linkedin", label: "LinkedIn", icon: "/icons/social-linkedin.svg" },
  { key: "x", label: "X", icon: "/icons/social-x.svg" },
  { key: "youtube", label: "YouTube", icon: "/icons/social-youtube.svg" },
  { key: "tiktok", label: "TikTok", icon: "/icons/social-tiktok.svg" },
] as const;

export function ContactForm() {
  const t = useTranslations("contactUs.form");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    try {
      await sendContactMessage({
        name: String(formData.get("fullName") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto mt-(--space-fluid-xl) grid w-full max-w-[1600px] items-center gap-0 px-(--space-fluid-container) md:grid-cols-[1fr_1.5fr]">
      <div className="flex h-[270px] flex-col justify-between gap-(--space-fluid-md) rounded-lg rounded-e-none bg-cta-secondary p-(--space-fluid-md) text-white">
        <div className="flex flex-col gap-(--space-fluid-2xs)">
          <p className="font-alexandria text-2xl font-bold">{t("card.title")}</p>
          <p className="font-alexandria text-(length:--text-fluid-lg)">{t("card.subtitle")}</p>
        </div>

        <div className="flex flex-col gap-(--space-fluid-sm)">
          <p className="font-alexandria text-(length:--text-fluid-xs)">{t("card.followUs")}</p>
          <div className="flex flex-wrap items-center gap-(--space-fluid-sm)">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.key}
                href="#"
                aria-label={social.label}
                className="flex size-[clamp(36px,3.4vw,49px)] shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <img src={social.icon} alt="" className="size-(--size-fluid-icon-md)" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-(--space-fluid-sm) rounded-lg bg-white p-(--space-fluid-md) shadow-[0_1px_12px_rgba(155,155,155,0.15)]">
        <p className="font-alexandria text-2xl font-bold text-cta-secondary">{t("heading")}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-(--space-fluid-sm)">
          <div className="grid gap-(--space-fluid-md) sm:grid-cols-2">
            <div className="flex flex-col gap-(--space-fluid-3xs)">
              <Label htmlFor="contact-full-name" className="font-alexandria text-(length:--text-fluid-xs) font-normal text-muted-foreground">
                {t("fields.fullName")}
              </Label>
              <Input id="contact-full-name" name="fullName" required className="h-[clamp(38px,3.5vw,43px)] rounded-xl" />
            </div>
            <div className="flex flex-col gap-(--space-fluid-3xs)">
              <Label htmlFor="contact-email" className="font-alexandria text-(length:--text-fluid-xs) font-normal text-muted-foreground">
                {t("fields.email")}
              </Label>
              <Input id="contact-email" name="email" type="email" required className="h-[clamp(38px,3.5vw,43px)] rounded-xl" />
            </div>
          </div>

          <div className="flex flex-col gap-(--space-fluid-3xs)">
            <Label htmlFor="contact-message" className="font-alexandria text-(length:--text-fluid-xs) font-normal text-muted-foreground">
              {t("fields.message")}
            </Label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={3}
              className="w-full rounded-xl border border-input bg-transparent px-2.5 py-2 text-base outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
            />
          </div>

          <Button disabled={status === "loading"} type="submit" className="w-fit rounded-md font-alexandria text-(length:--text-fluid-xs)">
            {status === "loading" ? <Loader2 className="size-5 animate-spin" aria-label="Sending" /> : t("send")}
          </Button>
          {status === "success" && <p role="status" className="font-alexandria text-sm text-emerald-600">Message sent successfully.</p>}
          {status === "error" && <p role="alert" className="font-alexandria text-sm text-destructive">Could not send your message. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
