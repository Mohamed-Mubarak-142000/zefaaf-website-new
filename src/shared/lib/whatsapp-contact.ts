const WHATSAPP_EXCLUDED_COUNTRIES = new Set([
  "YE", "SY", "SD", "LY", "DZ", "TN", "EG", "MA", "LB", "IQ", "PS",
  "TD", "NE", "ML", "BF", "CF", "SS", "SO", "ER", "ET", "GN", "GW",
  "SL", "LR", "GM", "BJ", "TG", "CD", "CG", "BI", "MW", "MZ", "ZW",
  "MG", "AF", "PK", "BD", "MM", "KP", "IR", "TM", "CU", "VE", "HT", "NI",
]);

export function isWhatsappExcludedCountry(isoCode?: string): boolean {
  return Boolean(isoCode && WHATSAPP_EXCLUDED_COUNTRIES.has(isoCode.trim().toUpperCase()));
}

/**
 * The VIP contact-method precedence: an agent takes priority over chat, and
 * between the two chat apps, WhatsApp loses to Telegram in countries where
 * WhatsApp is unreliable/blocked.
 */
export function resolveContactMethod(hasAgent: boolean, isoCode?: string): "agent" | "telegram" | "whatsapp" {
  if (hasAgent) return "agent";
  return isWhatsappExcludedCountry(isoCode) ? "telegram" : "whatsapp";
}
