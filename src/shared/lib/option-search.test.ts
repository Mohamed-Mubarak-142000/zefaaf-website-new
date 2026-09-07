import { describe, expect, it } from "vitest";

import { matchesSearch, normalizeForSearch } from "./option-search";

describe("normalizeForSearch", () => {
  it("folds the alef, ya, waw and ta-marbuta variants onto one form", () => {
    expect(normalizeForSearch("الإمارات")).toBe(normalizeForSearch("الامارات"));
    expect(normalizeForSearch("مُصْطَفى")).toBe(normalizeForSearch("مصطفي"));
    expect(normalizeForSearch("السعوديّة")).toBe(normalizeForSearch("السعوديه"));
    expect(normalizeForSearch("مسؤول")).toBe(normalizeForSearch("مسوول"));
  });

  it("strips tashkeel and the tatweel", () => {
    expect(normalizeForSearch("مَـــصْر")).toBe("مصر");
  });

  it("lowercases Latin text and collapses surrounding whitespace", () => {
    expect(normalizeForSearch("  Bosnia   and Herzegovina ")).toBe("bosnia and herzegovina");
  });
});

describe("matchesSearch", () => {
  it("matches a query typed without the hamza", () => {
    expect(matchesSearch("الإمارات العربية المتحدة", "الامارات")).toBe(true);
  });

  it("matches on any part of the label, not just its start", () => {
    expect(matchesSearch("Bosnia and Herzegovina", "herzeg")).toBe(true);
    expect(matchesSearch("جمهورية مصر العربية", "مصر")).toBe(true);
  });

  it("ignores the case of a Latin query", () => {
    expect(matchesSearch("Greenland", "GREEN")).toBe(true);
  });

  it("keeps every option for an empty or whitespace-only query", () => {
    expect(matchesSearch("مصر", "")).toBe(true);
    expect(matchesSearch("مصر", "   ")).toBe(true);
  });

  it("rejects a label the query does not appear in", () => {
    expect(matchesSearch("مصر", "المغرب")).toBe(false);
    expect(matchesSearch("Ghana", "ghost")).toBe(false);
  });
});
