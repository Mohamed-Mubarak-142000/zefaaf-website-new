"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

import { useSubmitContact } from "../api/use-submit-contact";
import { contactFormSchema, type ContactFormValues } from "../model/schema";

export function ContactForm() {
  const t = useTranslations();
  const { mutate, isPending, isSuccess, isError } = useSubmitContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = handleSubmit((values) => {
    mutate(values, { onSuccess: () => reset() });
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-md"
    >
      <h2 className="text-2xl font-semibold">{t("contactForm.title")}</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {t("contactForm.subtitle")}
      </p>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4" noValidate>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">{t("contactForm.nameLabel")}</Label>
          <Input
            id="name"
            placeholder={t("contactForm.namePlaceholder")}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="text-sm text-destructive">{t(errors.name.message)}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">{t("contactForm.emailLabel")}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t("contactForm.emailPlaceholder")}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-sm text-destructive">{t(errors.email.message)}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message">{t("contactForm.messageLabel")}</Label>
          <textarea
            id="message"
            placeholder={t("contactForm.messagePlaceholder")}
            aria-invalid={!!errors.message}
            rows={4}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="text-sm text-destructive">{t(errors.message.message)}</p>
          )}
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? t("contactForm.submitting") : t("contactForm.submit")}
        </Button>

        {isSuccess && (
          <p className="text-sm text-primary">{t("contactForm.success")}</p>
        )}
        {isError && (
          <p className="text-sm text-destructive">{t("contactForm.error")}</p>
        )}
      </form>
    </motion.div>
  );
}
