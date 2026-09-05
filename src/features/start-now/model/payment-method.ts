import { hasValidVipPaymentDetails, type VipPrice } from "@/shared/api";

const WHATSAPP_EXCLUDED_COUNTRIES = new Set([
  "YE", "SY", "SD", "LY", "DZ", "TN", "EG", "MA", "LB", "IQ", "PS",
  "TD", "NE", "ML", "BF", "CF", "SS", "SO", "ER", "ET", "GN", "GW",
  "SL", "LR", "GM", "BJ", "TG", "CD", "CG", "BI", "MW", "MZ", "ZW",
  "MG", "AF", "PK", "BD", "MM", "KP", "IR", "TM", "CU", "VE", "HT", "NI",
]);

export type VipPaymentMethod = "agent" | "telegram" | "whatsapp";

export function isWhatsappExcludedCountry(isoCode?: string): boolean {
  return Boolean(isoCode && WHATSAPP_EXCLUDED_COUNTRIES.has(isoCode.trim().toUpperCase()));
}

export function getVipPaymentMethod(price: VipPrice | null, isoCode?: string): VipPaymentMethod {
  if (hasValidVipPaymentDetails(price)) return "agent";
  return isWhatsappExcludedCountry(isoCode) ? "telegram" : "whatsapp";
}
