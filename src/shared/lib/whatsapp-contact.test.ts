import { describe, expect, it } from "vitest";

import { isWhatsappExcludedCountry, resolveContactMethod } from "./whatsapp-contact";

describe("isWhatsappExcludedCountry", () => {
  it("returns true for a country in the excluded list", () => {
    expect(isWhatsappExcludedCountry("EG")).toBe(true);
  });

  it("is case-insensitive and trims whitespace", () => {
    expect(isWhatsappExcludedCountry("eg")).toBe(true);
    expect(isWhatsappExcludedCountry(" eg ")).toBe(true);
  });

  it("returns false for a country not in the excluded list", () => {
    expect(isWhatsappExcludedCountry("US")).toBe(false);
    expect(isWhatsappExcludedCountry("AE")).toBe(false);
  });

  it("returns false when no country is given", () => {
    expect(isWhatsappExcludedCountry(undefined)).toBe(false);
    expect(isWhatsappExcludedCountry("")).toBe(false);
  });
});

describe("resolveContactMethod", () => {
  it("prefers the agent regardless of country", () => {
    expect(resolveContactMethod(true, "US")).toBe("agent");
    expect(resolveContactMethod(true, "EG")).toBe("agent");
    expect(resolveContactMethod(true, undefined)).toBe("agent");
  });

  it("falls back to telegram when there is no agent and the country excludes whatsapp", () => {
    expect(resolveContactMethod(false, "EG")).toBe("telegram");
  });

  it("falls back to whatsapp when there is no agent and the country allows whatsapp", () => {
    expect(resolveContactMethod(false, "US")).toBe("whatsapp");
  });

  it("falls back to whatsapp when there is no agent and no country is known", () => {
    expect(resolveContactMethod(false, undefined)).toBe("whatsapp");
  });
});
