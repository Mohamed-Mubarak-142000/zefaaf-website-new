import { hasValidVipPaymentDetails, type VipPrice } from "@/shared/api";
import { isWhatsappExcludedCountry, resolveContactMethod } from "@/shared/lib/whatsapp-contact";

export type VipPaymentMethod = "agent" | "telegram" | "whatsapp";

export { isWhatsappExcludedCountry };

export function getVipPaymentMethod(price: VipPrice | null, isoCode?: string): VipPaymentMethod {
  return resolveContactMethod(hasValidVipPaymentDetails(price), isoCode);
}
