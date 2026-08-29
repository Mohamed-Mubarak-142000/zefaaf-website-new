"use client";

import { useLocale } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { locales, localeNames, usePathname, useRouter, type Locale } from "@/shared/i18n";

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
          <span className="relative size-(--size-fluid-icon-sm) shrink-0">
            <img src="/icons/globe.svg" alt="" className="absolute inset-0 size-full" />
          </span>
          <span className="font-almarai text-(length:--text-fluid-nav) font-bold whitespace-nowrap text-foreground">
            {localeNames[locale]}
          </span>
          {/* chevron-down.svg is 13.5×7.5 (not square) with preserveAspectRatio="none" —
              forcing it into a square box stretches it noticeably taller than the design */}
          <span className="relative w-(--size-fluid-icon-xs) aspect-9/5 shrink-0">
            <img src="/icons/chevron-down.svg" alt="" className="absolute inset-0 size-full" />
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-72 overflow-y-auto">
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            data-active={code === locale}
            onSelect={() => router.replace(pathname, { locale: code })}
          >
            {localeNames[code]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
