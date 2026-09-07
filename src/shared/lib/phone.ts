/**
 * Puts a locally-typed number into international form using the dialing code
 * of the country picked alongside it: a number the user already typed with a
 * `+` is left as-is, and a leading trunk zero is dropped before the code.
 */
export function toInternationalPhone(phone: string, dialingCode?: string): string {
  const local = phone.trim();
  if (!local || local.startsWith("+") || !dialingCode) return local;
  return `+${dialingCode}${local.replace(/^0+/, "")}`;
}
