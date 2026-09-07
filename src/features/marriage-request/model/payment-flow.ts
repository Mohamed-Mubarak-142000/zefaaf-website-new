// The decisions behind the payment dialog, kept out of the components so they
// can be tested directly: what the backend records as the payment method,
// which chat opens, and what the dialog's one button does next.

/**
 * How the applicant arranges paying — resolved from their country, never
 * picked by hand (a local agent wins; otherwise WhatsApp, or Telegram where
 * WhatsApp is unreliable). It is the contact channel, which is not the same
 * as what the backend records: see `toPaymentMethod`.
 */
export type SmartMarriagePaymentMethod = "local_agent" | "whatsapp" | "telegram";

export type PaymentDialogStep = "select" | "agent-details" | "agent-code";

export const WHATSAPP_LINK = "https://wa.me/31683834839";
export const TELEGRAM_LINK = "https://t.me/zefaaf";

/**
 * A local agent is the one arrangement the backend records as its own method.
 * Paying over WhatsApp or Telegram is manual as far as it's concerned — the
 * channel is only how the applicant reaches us, so it isn't sent.
 */
export function toPaymentMethod(channel: SmartMarriagePaymentMethod): "local_agent" | "manual" {
  return channel === "local_agent" ? "local_agent" : "manual";
}

/**
 * The chat to open for a channel; `null` for the agent, who is called.
 *
 * Both clients read `text` off the deep link and drop it into the composer,
 * so the whole request arrives with the chat and nobody has to retype it. A
 * client that ignores the parameter just opens the chat, as it did before.
 */
export function getChatLink(channel: SmartMarriagePaymentMethod, message?: string): string | null {
  const base = channel === "whatsapp" ? WHATSAPP_LINK : channel === "telegram" ? TELEGRAM_LINK : null;
  if (!base) return null;
  const text = message?.trim();
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * The agent's id and code ride along with the request, so both are needed
 * before it can be sent. Nothing to check on the chat channels.
 */
export function isMissingAgentDetails(
  channel: SmartMarriagePaymentMethod | null,
  agentId: number | null,
  agentCode: string,
): boolean {
  return channel === "local_agent" && (!agentId || !agentCode.trim());
}

/** The two agent fields, or nothing at all on the chat channels. */
export function getAgentPaymentFields(
  channel: SmartMarriagePaymentMethod,
  agentId: number | null,
  agentCode: string,
): { local_agent_id: number | null; local_agent_code: string } | null {
  if (channel !== "local_agent") return null;
  return { local_agent_id: agentId, local_agent_code: agentCode.trim() };
}

export type PaymentDialogAction =
  | { type: "go-to-step"; step: PaymentDialogStep }
  // `chatLink` opens in the same click that sends the request, so the chat and
  // the request leave together — and so the browser doesn't block the tab as a
  // popup, which is what happens to a tab opened after awaiting the request.
  | { type: "submit"; chatLink: string | null };

/**
 * What the dialog's primary button does, given the resolved channel and the
 * step it's on. The agent walks through their details and code before the
 * request is sent; a chat channel sends on the first press, opening the chat
 * with `message` — the request summary — already in its composer.
 */
export function getPaymentDialogAction(
  channel: SmartMarriagePaymentMethod | null,
  step: PaymentDialogStep,
  message?: string,
): PaymentDialogAction {
  if (channel === "local_agent" && step === "select") return { type: "go-to-step", step: "agent-details" };
  if (step === "agent-details") return { type: "go-to-step", step: "agent-code" };
  return { type: "submit", chatLink: channel ? getChatLink(channel, message) : null };
}
