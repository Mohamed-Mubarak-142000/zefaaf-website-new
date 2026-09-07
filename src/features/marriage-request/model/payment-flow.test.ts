import { describe, expect, it } from "vitest";

import {
  getAgentPaymentFields,
  getChatLink,
  getPaymentDialogAction,
  isMissingAgentDetails,
  TELEGRAM_LINK,
  toPaymentMethod,
  WHATSAPP_LINK,
} from "./payment-flow";

describe("toPaymentMethod", () => {
  it("records a local agent as its own method", () => {
    expect(toPaymentMethod("local_agent")).toBe("local_agent");
  });

  it("records both chat channels as manual", () => {
    expect(toPaymentMethod("whatsapp")).toBe("manual");
    expect(toPaymentMethod("telegram")).toBe("manual");
  });
});

describe("getChatLink", () => {
  it("points each chat channel at its own link", () => {
    expect(getChatLink("whatsapp")).toBe(WHATSAPP_LINK);
    expect(getChatLink("telegram")).toBe(TELEGRAM_LINK);
  });

  it("opens nothing for a local agent", () => {
    expect(getChatLink("local_agent")).toBeNull();
  });
});

describe("getAgentPaymentFields", () => {
  it("sends the agent's id and code with the request", () => {
    expect(getAgentPaymentFields("local_agent", 7, " ABC123 ")).toEqual({
      local_agent_id: 7,
      local_agent_code: "ABC123",
    });
  });

  it("sends no agent fields on the chat channels", () => {
    expect(getAgentPaymentFields("whatsapp", 7, "ABC123")).toBeNull();
    expect(getAgentPaymentFields("telegram", null, "")).toBeNull();
  });
});

describe("isMissingAgentDetails", () => {
  it("holds the request back until the agent has both an id and a code", () => {
    expect(isMissingAgentDetails("local_agent", null, "ABC123")).toBe(true);
    expect(isMissingAgentDetails("local_agent", 7, "")).toBe(true);
    expect(isMissingAgentDetails("local_agent", 7, "   ")).toBe(true);
    expect(isMissingAgentDetails("local_agent", 7, "ABC123")).toBe(false);
  });

  it("asks nothing of the chat channels", () => {
    expect(isMissingAgentDetails("whatsapp", null, "")).toBe(false);
    expect(isMissingAgentDetails("telegram", null, "")).toBe(false);
  });
});

describe("getPaymentDialogAction", () => {
  it("walks a local agent through their details, then their code, then sends", () => {
    expect(getPaymentDialogAction("local_agent", "select")).toEqual({
      type: "go-to-step",
      step: "agent-details",
    });
    expect(getPaymentDialogAction("local_agent", "agent-details")).toEqual({
      type: "go-to-step",
      step: "agent-code",
    });
    // No chat opens on this branch — the agent is contacted directly.
    expect(getPaymentDialogAction("local_agent", "agent-code")).toEqual({
      type: "submit",
      chatLink: null,
    });
  });

  it("sends on the first press for a chat channel, opening the chat with it", () => {
    expect(getPaymentDialogAction("whatsapp", "select")).toEqual({
      type: "submit",
      chatLink: WHATSAPP_LINK,
    });
    expect(getPaymentDialogAction("telegram", "select")).toEqual({
      type: "submit",
      chatLink: TELEGRAM_LINK,
    });
  });

  it("opens no chat before a channel is resolved", () => {
    // The button is disabled in this state; the request is guarded on the
    // parent's side too, which is what stops a send with no channel.
    expect(getPaymentDialogAction(null, "select")).toEqual({ type: "submit", chatLink: null });
  });
});
