import { apiClient } from "./axios-instance";
import { findCountry } from "@/shared/config";

export type Country = {
  id: number;
  name: string;
  isoCode: string;
  dialingCode: string;
  flagUrl?: string;
};

export type LookupOption = { value: string; label: string; flagUrl?: string; isoCode?: string };

type ApiCountry = {
  id: number | string;
  name: string;
  iso_code?: string;
  iso2?: string;
  dialing_code?: string;
  flag_url?: string;
};

function unwrapArray<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) return payload as T[];
  if (payload && typeof payload === "object" && Array.isArray((payload as { data?: unknown }).data)) {
    return (payload as { data: T[] }).data;
  }
  return [];
}

function optionsFromRecord(value: unknown): LookupOption[] {
  if (!value || typeof value !== "object" || Array.isArray(value)) return [];
  return Object.entries(value).map(([optionValue, label]) => ({ value: optionValue, label: String(label) }));
}

export async function getCountries(): Promise<Country[]> {
  const { data } = await apiClient.get("/api/getAllCountries");
  return unwrapArray<ApiCountry>(data).map((country) => {
    const isoCode = (country.iso_code ?? country.iso2 ?? "").toUpperCase();
    return {
      id: Number(country.id),
      name: country.name,
      isoCode,
      dialingCode: String(country.dialing_code ?? findCountry(isoCode)?.dialCode ?? "").replace(/^\+/, ""),
      flagUrl: country.flag_url,
    };
  });
}

export async function getNationalities(): Promise<LookupOption[]> {
  const { data } = await apiClient.get("/api/getAllNationalities");
  return unwrapArray<{
    id: number | string;
    name?: string | null;
    country_name?: string | null;
    flag_url?: string;
  }>(data)
    .map((item) => ({
      value: String(item.id),
      label: item.name?.trim() || item.country_name?.trim() || "",
      flagUrl: item.flag_url,
    }))
    .filter((item) => item.label);
}

export async function getGovernorates(countryId: number | string): Promise<LookupOption[]> {
  const { data } = await apiClient.get(`/api/country-governorates/${countryId}`);
  const payload = data && typeof data === "object" && "governorates" in data
    ? (data as { governorates: unknown }).governorates
    : data;
  return unwrapArray<{ id: number | string; name: string }>(payload).map((item) => ({
    value: String(item.id),
    label: item.name,
  }));
}

export async function getUserOptions() {
  const { data } = await apiClient.get("/api/get-user-options");
  return data && typeof data === "object" && "data" in data ? (data as { data: Record<string, unknown> }).data : data;
}

export async function getBadWords(): Promise<string[]> {
  const { data } = await apiClient.get("/api/bad-words");
  return unwrapArray<string>(data).map((word) => word.trim().toLowerCase()).filter(Boolean);
}

export function readOptions(source: Record<string, unknown> | null, keys: string[], gender?: "male" | "female") {
  const raw = keys.map((key) => source?.[key]).find(Boolean);
  if (gender && raw && typeof raw === "object" && gender in raw) {
    return optionsFromRecord((raw as Record<string, unknown>)[gender]);
  }
  return optionsFromRecord(raw);
}

export async function getSuccessStories<T = Record<string, unknown>>(): Promise<T[]> {
  const { data } = await apiClient.get("/api/success-stories");
  return unwrapArray<T>(data);
}

export async function sendContactMessage(payload: { name: string; email: string; message: string }) {
  await apiClient.post("/api/contact-us", payload);
}

export async function subscribeToNewsletter(email: string) {
  await apiClient.post("/api/newsletter/subscribe", { email });
}

export type VipPrice = {
  price?: number | string;
  currency?: string;
  payment_details?: Record<string, string | null | undefined>;
};

const VIP_PAYMENT_VALUE_KEYS = ["bank_name", "account_holder", "iban", "ing_iban", "instapay_username", "instapay_phone", "instapay_link", "agent_name", "agent_phone", "agent_link", "payment_number", "payment_link", "link"];

export function hasValidVipPaymentDetails(price?: VipPrice | null): boolean {
  return Boolean(price?.payment_details && VIP_PAYMENT_VALUE_KEYS.some((key) => price.payment_details?.[key]?.trim()));
}

export async function getVipPrice(countryId: number, gender: "male" | "female"): Promise<VipPrice> {
  const { data } = await apiClient.get("/api/website/vip-personal-search/price", {
    params: { country_id: countryId, gender },
  });
  return data?.data ?? data;
}

export async function getVipWhatsappLink(): Promise<string | null> {
  const { data } = await apiClient.get("/api/vip-personal-search/whatsapp");
  if (data?.success !== true) return null;
  return data?.data?.whatsapp_link ?? null;
}

export async function submitVipTransferProof(payload: FormData) {
  return apiClient.post("/api/vip-personal-search/transfer-proof", payload, {
    headers: { "Content-Type": "multipart/form-data" },
    validateStatus: () => true,
  });
}

export async function createSmartMarriage(payload: Record<string, unknown>) {
  const { data } = await apiClient.post("/api/smart-marriage/create", payload);
  return data;
}

export type LocalAgent = {
  id: number;
  name: string;
  phone?: string;
  whatsapp_number?: string;
  email?: string;
};

export async function getLocalAgent(countryCode: string): Promise<LocalAgent | null> {
  const { data } = await apiClient.get(`/api/local-agents/${encodeURIComponent(countryCode)}`);
  return unwrapArray<LocalAgent>(data)[0] ?? null;
}

export type PublicEvent = {
  id: number | string;
  ulid: string;
  status?: string;
  name: string;
  description?: string;
  banner_urls?: string[];
  date?: string;
  start_time?: string;
  end_time?: string;
  duration_hours?: number;
  location?: string;
  ticket_price?: string | number;
  currency?: string;
  accepting_registrations?: boolean;
  availability?: { state?: string; remaining?: number };
  speakers?: Array<{ id: number | string; name: string; description?: string; image_url?: string; followers_count?: number; role?: string }>;
};

export async function getPublicEvents(locale?: string): Promise<PublicEvent[]> {
  const { data } = await apiClient.get("/api/events", {
    headers: locale ? { "Accept-Language": locale } : undefined,
  });
  return unwrapArray<PublicEvent>(data);
}

export async function getPublicEvent(ulid: string, locale?: string): Promise<PublicEvent | null> {
  const { data } = await apiClient.get(`/api/events/${encodeURIComponent(ulid)}`, {
    headers: locale ? { "Accept-Language": locale } : undefined,
  });
  return data?.data ?? data ?? null;
}

export async function getEventRegistrationStatus(registrationId: string | number) {
  const { data } = await apiClient.get(`/api/events/registrations/${encodeURIComponent(registrationId)}/status`);
  return data?.data ?? data;
}
