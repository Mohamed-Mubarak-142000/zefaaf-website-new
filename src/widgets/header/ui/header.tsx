import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/features/language-switcher";
import { Button } from "@/shared/ui/button";
import { Logo } from "@/shared/ui/logo";
import { cn } from "@/shared/lib/utils";
import { Link } from "@/shared/i18n";

// DOM order follows RTL reading order (right → left): Logo first, then nav,
// then the language switcher + CTAs — the ambient `dir="rtl"` on <html> for
// Arabic locales renders this as logo-right / links-center / actions-left,
// matching the Figma design, and mirrors correctly for LTR locales.
const NAV_ITEMS = [
  { key: "home", href: "/", withChevron: false },
  { key: "services", href: "#services", withChevron: true },
  // These four don't have a page yet — Figma only specified the navbar itself.
  { key: "successStories", href: "#", withChevron: false },
  { key: "upcomingEvents", href: "#", withChevron: true },
  { key: "articles", href: "#", withChevron: false },
  { key: "about", href: "#", withChevron: false },
  { key: "contact", href: "#contact", withChevron: false },
  { key: "vipSearch", href: "#", withChevron: false },
] as const;

function ChevronDown() {
  return (
    <span className="relative size-6 shrink-0">
      <img src="/icons/chevron-down.svg" alt="" className="absolute inset-0 size-full" />
    </span>
  );
}

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 lg:px-20">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                "flex items-center gap-1.5 font-alexandria text-base whitespace-nowrap",
                item.key === "home" ? "text-brand" : "text-foreground",
              )}
            >
              {t(`nav.${item.key}`)}
              {item.withChevron && <ChevronDown />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button className="hidden h-12 rounded-lg px-3 font-alexandria text-sm font-normal sm:inline-flex">
            {t("nav.registerNow")}
          </Button>
          <Button className="hidden h-12 rounded-lg bg-cta-secondary px-3 font-alexandria text-sm font-normal hover:bg-cta-secondary/90 sm:inline-flex">
            {t("nav.marriageRequest")}
          </Button>
        </div>
      </div>
    </header>
  );
}
