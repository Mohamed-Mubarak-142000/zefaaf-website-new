"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { locales, localeNames, usePathname, useRouter, type Locale } from "@/shared/i18n";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={localeNames[locale]}>
          <Languages className="size-4" />
        </Button>
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
