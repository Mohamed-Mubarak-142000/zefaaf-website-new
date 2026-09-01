"use client";

import { useLocale } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { locales, localeNames, usePathname, useRouter, type Locale } from "@/shared/i18n";

const LOCALE_FLAGS: Record<Locale, string> = {
  ar: "🇸🇦", en: "🇬🇧", nl: "🇳🇱", fr: "🇫🇷", de: "🇩🇪", tr: "🇹🇷",
  ru: "🇷🇺", id: "🇮🇩", zh: "🇨🇳", bn: "🇧🇩", bs: "🇧🇦", es: "🇪🇸",
  fa: "🇮🇷", pt: "🇵🇹", ja: "🇯🇵", ko: "🇰🇷", it: "🇮🇹", ur: "🇵🇰",
  ta: "🇮🇳", am: "🇪🇹", sv: "🇸🇪", da: "🇩🇰", sq: "🇦🇱", uz: "🇺🇿",
  az: "🇦🇿", fil: "🇵🇭", hi: "🇮🇳", kk: "🇰🇿", ms: "🇲🇾", pa: "🇮🇳",
  ps: "🇦🇫", sw: "🇰🇪", th: "🇹🇭",
};

const FLAG_COUNTRY_CODES: Record<Locale, string> = {
  ar: "sa", en: "gb", nl: "nl", fr: "fr", de: "de", tr: "tr",
  ru: "ru", id: "id", zh: "cn", bn: "bd", bs: "ba", es: "es",
  fa: "ir", pt: "pt", ja: "jp", ko: "kr", it: "it", ur: "pk",
  ta: "in", am: "et", sv: "se", da: "dk", sq: "al", uz: "uz",
  az: "az", fil: "ph", hi: "in", kk: "kz", ms: "my", pa: "in",
  ps: "af", sw: "ke", th: "th",
};

function flagUrl(locale: Locale) {
  return `https://flagcdn.com/24x18/${FLAG_COUNTRY_CODES[locale]}.png`;
}

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          dir="ltr"
          aria-label={localeNames[locale]}
          className="flex items-center gap-1 rounded-md px-1 py-1 outline-none hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <span className="relative size-(--size-fluid-icon-sm) shrink-0" aria-hidden="true">
            {/* globe.svg is a solid #090909 fill with no way to recolor it via
                CSS (it's an <img>, not inline markup) — dark:invert flips it
                to near-white so it stays visible against a dark header. */}
            <img
              src="/icons/globe.svg"
              alt=""
              width={24}
              height={24}
              className="absolute inset-0 size-full dark:invert"
            />
          </span>
          <span className="font-almarai text-(length:--text-fluid-nav) font-bold whitespace-nowrap text-foreground">
            {localeNames[locale]}
          </span>
          {/* chevron-down.svg is 13.5×7.5 (not square) with preserveAspectRatio="none" —
              forcing it into a square box stretches it noticeably taller than the design */}
          <span className="relative w-(--size-fluid-icon-xs) aspect-9/5 shrink-0">
            <img src="/icons/chevron-down.svg" alt="" className="absolute inset-0 size-full dark:invert" />
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        collisionPadding={12}
        className="max-h-72 w-[180px] overflow-y-auto rounded-[8px] ring-0"
      >
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            data-active={code === locale}
            onSelect={() => router.replace(pathname, { locale: code })}
            className="px-3"
          >
            <img
              src={flagUrl(code)}
              alt={LOCALE_FLAGS[code]}
              width={24}
              height={18}
              loading="lazy"
              className="h-[15px] w-[20px] shrink-0 rounded-[2px] object-cover"
            />
            <span>{localeNames[code]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
