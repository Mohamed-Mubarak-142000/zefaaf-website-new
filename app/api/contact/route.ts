import { NextResponse } from "next/server";
import { z } from "zod";

import { contactFormSchema } from "@/features/contact-form";

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: z.treeifyError(result.error) },
      { status: 400 }
    );
  }

  // TODO: forward result.data to an email service / CRM.

  return NextResponse.json({ ok: true });
}
