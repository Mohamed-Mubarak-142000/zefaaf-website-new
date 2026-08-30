import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/features/language-switcher";
import { ThemeToggle } from "@/features/theme-toggle";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Logo } from "@/shared/ui/logo";
import { cn } from "@/shared/lib/utils";
import { Link } from "@/shared/i18n";

// DOM order follows RTL reading order (right → left): Logo+nav grouped
// together first, then the two CTA buttons, then the language switcher last
// — the ambient `dir="rtl"` on <html> for Arabic locales renders this as
// logo+links-right / buttons-then-language-switcher-left, matching the
// Figma design, and mirrors correctly for LTR locales. Logo and nav are
// grouped in one flex container (rather than 3-way justify-between) so the
// links sit immediately after the logo instead of floating in the middle.
// None of these have a real page yet — Figma only specified the navbar itself.
const NAV_ITEMS = [
  { key: "home", href: "/", withChevron: false },
  { key: "services", href: "#", withChevron: true },
  { key: "successStories", href: "#", withChevron: false },
  { key: "upcomingEvents", href: "#", withChevron: true },
  { key: "articles", href: "#", withChevron: false },
  { key: "about", href: "#", withChevron: false },
  { key: "contact", href: "#", withChevron: false },
  { key: "vipSearch", href: "#", withChevron: false },
] as const;

function ChevronDown() {
  // chevron-down.svg is 13.5×7.5 (not square) with preserveAspectRatio="none" —
  // forcing it into a square box stretches it noticeably taller than the design.
  return (
    <span className="relative w-(--size-fluid-icon-xs) aspect-9/5 shrink-0">
      <img src="/icons/chevron-down.svg" alt="" className="absolute inset-0 size-full dark:invert" />
    </span>
  );
}

// The full inline nav (8 links + logo + language switcher + 2 buttons) only
// fits comfortably from xl (1280px) up — English (the wordiest locale here,
// e.g. "VIP Personal Search", "Upcoming Events") still overflowed at lg
// (1024px) even at this compact size, so the breakpoint has to satisfy the
// longest-content locale, not just Arabic. Anything narrower than xl gets
// this menu instead so navigation never overflows in any locale.
function CompactNavMenu({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menu" className="xl:hidden">
          <Menu className="size-(--size-fluid-icon-md)" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {NAV_ITEMS.map((item) => (
          <DropdownMenuItem key={item.key} asChild>
            <Link
              href={item.href}
              className={cn(
                "w-full font-alexandria font-normal",
                item.key === "home" ? "text-brand" : "text-foreground",
              )}
            >
              {t(`nav.${item.key}`)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-(--space-fluid-xs) px-(--space-fluid-nav-x) py-(--space-fluid-2xs)">
        <div className="flex items-center gap-(--space-fluid-sm)">
          <Logo />

          {/* `xl:flex` is a genuine on/off switch (full nav vs. the compact
              menu below), not a size — there's no continuous value between
              "hidden" and "visible", so this stays a hard breakpoint. */}
          <nav className="hidden items-center gap-(--space-fluid-sm) xl:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "flex items-center gap-(--space-fluid-3xs) font-alexandria font-normal text-(length:--text-fluid-nav) whitespace-nowrap",
                  item.key === "home" ? "text-brand" : "text-foreground",
                )}
              >
                {t(`nav.${item.key}`)}
                {item.withChevron && <ChevronDown />}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-(--space-fluid-xs)">
          <CompactNavMenu t={t} />
          <ThemeToggle />
          <Button variant="default" className="hidden rounded-[8px] font-alexandria sm:inline-flex">
            {t("nav.marriageRequest")}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
