// Matching a typed query against a dropdown label. The labels come off the
// Rewaq lookups in the visitor's own language, so this has to work for Arabic
// as well as it does for Latin text — and Arabic is written loosely: the hamza
// is routinely dropped ("الامارات" for "الإمارات"), ة and ه are swapped at the
// end of a word, ى and ي are used interchangeably, and a label may carry
// tashkeel or a tatweel the visitor will never type. So both sides are folded
// to one plain form before they are compared, rather than asking the visitor
// to reproduce a label's exact orthography.

// Harakat and the superscript alef (064B–0652, 0670), plus the tatweel (0640),
// which is decoration rather than a letter.
const DIACRITICS = /[ً-ْٰـ]/g;

const FOLDED_LETTERS: Array<[RegExp, string]> = [
  [/[أإآٱ]/g, "ا"], // أ إ آ ٱ → ا
  [/ى/g, "ي"], // ى → ي
  [/ئ/g, "ي"], // ئ → ي
  [/ؤ/g, "و"], // ؤ → و
  [/ة/g, "ه"], // ة → ه
];

export function normalizeForSearch(text: string): string {
  let output = text.toLowerCase().replace(DIACRITICS, "");
  for (const [pattern, replacement] of FOLDED_LETTERS) {
    output = output.replace(pattern, replacement);
  }
  return output.replace(/\s+/g, " ").trim();
}

/**
 * True when `label` should stay in the list for `query`. An empty or
 * whitespace-only query matches everything, so a cleared box shows the full
 * list rather than nothing.
 */
export function matchesSearch(label: string, query: string): boolean {
  const needle = normalizeForSearch(query);
  return needle === "" || normalizeForSearch(label).includes(needle);
}
