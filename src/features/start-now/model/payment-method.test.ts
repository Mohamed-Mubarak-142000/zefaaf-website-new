import { describe, expect, it } from "vitest";

import type { VipPrice } from "@/shared/api";
import { getVipPaymentMethod } from "./payment-method";

const priceWithDetails: VipPrice = {
  price: 100,
  currency: "USD",
  payment_details: { bank_name: "Test Bank" },
};

const priceWithoutDetails: VipPrice = {
  price: 100,
  currency: "USD",
  payment_details: {},
};

describe("getVipPaymentMethod", () => {
  it("returns agent when the price carries valid payment details", () => {
    expect(getVipPaymentMethod(priceWithDetails, "US")).toBe("agent");
  });

  it("returns telegram when there are no payment details and the country excludes whatsapp", () => {
    expect(getVipPaymentMethod(priceWithoutDetails, "EG")).toBe("telegram");
  });

  it("returns whatsapp when there are no payment details and the country allows whatsapp", () => {
    expect(getVipPaymentMethod(priceWithoutDetails, "US")).toBe("whatsapp");
  });

  it("returns whatsapp for a null price and no country", () => {
    expect(getVipPaymentMethod(null)).toBe("whatsapp");
  });
});
