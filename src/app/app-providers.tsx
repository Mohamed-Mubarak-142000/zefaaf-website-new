"use client";

import type { ReactNode } from "react";
import { useLocale } from "next-intl";
import { Direction } from "radix-ui";

import { getDirection, type Locale } from "@/shared/i18n";

import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

// Radix's Popper-based components (dropdown menu, select, etc.) don't read
// the ambient `dir` attribute on <html> — they default to ltr positioning
// unless told otherwise via this provider, which is why RTL locales were
// getting dropdowns that opened/aligned as if the page were still ltr.
export function AppProviders({ children }: { children: ReactNode }) {
  const locale = useLocale() as Locale;

  return (
    <Direction.Provider dir={getDirection(locale)}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        forcedTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <QueryProvider>{children}</QueryProvider>
      </ThemeProvider>
    </Direction.Provider>
  );
}
