import { describe, expect, it } from "vitest";

import { toInternationalPhone } from "./phone";

describe("toInternationalPhone", () => {
  it("prefixes the country's dialing code and drops the trunk zero", () => {
    expect(toInternationalPhone("01012345678", "20")).toBe("+201012345678");
    expect(toInternationalPhone(" 612345678 ", "31")).toBe("+31612345678");
  });

  it("leaves a number the user already wrote in international form alone", () => {
    expect(toInternationalPhone("+201012345678", "20")).toBe("+201012345678");
  });

  it("returns the number untouched when there is no dialing code to add", () => {
    expect(toInternationalPhone("01012345678")).toBe("01012345678");
  });

  it("stays empty rather than becoming a bare dialing code", () => {
    expect(toInternationalPhone("", "20")).toBe("");
    expect(toInternationalPhone("   ", "20")).toBe("");
  });
});
