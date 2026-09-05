const READY = "REWAQ_HANDOFF_READY";
const FORM_DATA = "REWAQ_HANDOFF_FORM_DATA";
const ACK = "REWAQ_HANDOFF_ACK";

export function openRewaqVipHandoff(formData: { country_id: number; gender: "male" | "female" }, locale: string) {
  const baseUrl = process.env.NEXT_PUBLIC_REWAQ_URL ??
    (process.env.NODE_ENV === "production" ? "https://rewaq.nl" : "https://dev.rewaq.nl");
  const target = new URL(`/${locale}/`, baseUrl);
  target.searchParams.set("handoff", "partner");
  const popup = window.open(target.toString(), "_blank");
  if (!popup) return false;

  const allowedOrigin = target.origin;
  let acknowledged = false;
  const send = () => popup.postMessage({ type: FORM_DATA, formData }, allowedOrigin);
  const listener = (event: MessageEvent) => {
    if (event.source !== popup || event.origin !== allowedOrigin || !event.data || typeof event.data !== "object") return;
    const type = (event.data as { type?: string }).type;
    if (type === READY) send();
    if (type === ACK) {
      acknowledged = true;
      cleanup();
    }
  };
  const interval = window.setInterval(() => { if (!popup.closed && !acknowledged) send(); }, 500);
  const timeout = window.setTimeout(cleanup, 30 * 60 * 1000);
  function cleanup() {
    window.clearInterval(interval);
    window.clearTimeout(timeout);
    window.removeEventListener("message", listener);
  }
  window.addEventListener("message", listener);
  return true;
}
