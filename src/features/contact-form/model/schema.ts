import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "contactForm.validation.nameRequired"),
  email: z.email("contactForm.validation.emailInvalid"),
  message: z.string().trim().min(10, "contactForm.validation.messageMin"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
