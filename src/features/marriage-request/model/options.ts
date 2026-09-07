// Figma didn't specify a real enumeration for contact methods, and there is
// no backend lookup for it (unlike every other select field in this wizard,
// which is always sourced from useMarriageLookups — no static fallback).
export const CONTACT_METHODS = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "telegram", label: "Telegram" },
  { value: "email", label: "Email" },
] as const;
