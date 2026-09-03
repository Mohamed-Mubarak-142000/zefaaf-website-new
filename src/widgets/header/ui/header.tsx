"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/features/language-switcher";
import { MarriageRequestModal } from "@/features/marriage-request";
// import { ThemeToggle } from "@/features/theme-toggle";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Logo } from "@/shared/ui/logo";

import { ChevronDown } from "./chevron-down";
import { NavLink } from "./nav-link";
import { ServicesDropdown, SERVICE_MENU_ITEMS, useMarriageFormEntry } from "./services-dropdown";

const MARRIAGE_FORM_KEY: (typeof SERVICE_MENU_ITEMS)[number]["labelKey"] = "nav.servicesMenu.marriageForm";

// DOM order follows RTL reading order (right → left): Logo+nav grouped
// together first, then the two CTA buttons, then the language switcher last
// — the ambient `dir="rtl"` on <html> for Arabic locales renders this as
// logo+links-right / buttons-then-language-switcher-left, matching the
// Figma design, and mirrors correctly for LTR locales. Logo and nav are
// grouped in one flex container (rather than 3-way justify-between) so the
// links sit immediately after the logo instead of floating in the middle.
// "#" marks the links that don't have a real page yet — Figma only specified
// the navbar itself for those. `NavLink` highlights whichever route is active.
const NAV_ITEMS = [
  { key: "home", href: "/", withChevron: false },
  { key: "services", href: "#", withChevron: true },
  { key: "successStories", href: "/success-stories", withChevron: false },
  { key: "articles", href: "/blogs", withChevron: false },
  { key: "about", href: "/about", withChevron: false },
  { key: "contact", href: "/contact-us", withChevron: false },
  { key: "vipSearch", href: "/vip", withChevron: false },
] as const;

// The full inline nav (8 links + logo + language switcher + 2 buttons) only
// fits comfortably from xl (1280px) up — English (the wordiest locale here,
// e.g. "VIP Personal Search", "Upcoming Events") still overflowed at lg
// (1024px) even at this compact size, so the breakpoint has to satisfy the
// longest-content locale, not just Arabic. Anything narrower than xl gets
// this menu instead so navigation never overflows in any locale.
function CompactNavMenu({ t }: { t: ReturnType<typeof useTranslations> }) {
  const { openTeaser, dialogs } = useMarriageFormEntry();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Menu" className="xl:hidden">
            <Menu className="size-(--size-fluid-icon-md)" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {NAV_ITEMS.map((item) =>
            item.key === "services" ? (
              <DropdownMenuSub key={item.key}>
                <DropdownMenuSubTrigger className="font-alexandria font-normal">
                  {t(`nav.${item.key}`)}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {SERVICE_MENU_ITEMS.map((sub) =>
                    sub.labelKey === MARRIAGE_FORM_KEY ? (
                      <DropdownMenuItem key={sub.labelKey} asChild>
                        <button type="button" onClick={openTeaser} className="w-full text-start font-alexandria font-normal">
                          {t(sub.labelKey)}
                        </button>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem key={sub.labelKey} asChild>
                        <NavLink href={sub.href} className="w-full font-alexandria font-normal">
                          {t(sub.labelKey)}
                        </NavLink>
                      </DropdownMenuItem>
                    ),
                  )}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem key={item.key} asChild>
                <NavLink href={item.href} className="w-full font-alexandria font-normal">
                  {t(`nav.${item.key}`)}
                </NavLink>
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {dialogs}
    </>
  );
}

export function Header({ compact = false }: { compact?: boolean }) {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMarriageRequestOpen, setIsMarriageRequestOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "top-0 z-50 isolate border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        compact ? "fixed inset-x-0" : "sticky",
        compact
          ? isScrolled
            ? "border-border bg-background"
            : "border-gray-400/60 bg-white/[0.01]"
          : isScrolled
            ? "border-border bg-background"
            : "border-border bg-background",
      )}
    >
      {compact && !isScrolled && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[173px] backdrop-blur-[24.5625px]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        >
          <img
            src="/icons/vip-navbar-blur.svg"
            alt=""
            className="absolute inset-0 size-full max-w-none"
          />
        </div>
      )}
      {compact && !isScrolled && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-px z-20 h-px bg-[#EBEDF0]"
        />
      )}
      <div
        className="relative z-10 mx-auto flex min-h-14 max-w-[1800px] items-center justify-between gap-2 px-(--space-fluid-nav-x) py-1.5"
      >
        <div className="flex items-center gap-3">
          <Logo className="w-8" />

          {/* `xl:flex` is a genuine on/off switch (full nav vs. the compact
              menu below), not a size — there's no continuous value between
              "hidden" and "visible", so this stays a hard breakpoint. */}
          <nav className="hidden items-center gap-4 xl:flex">
            {NAV_ITEMS.map((item) =>
              item.key === "services" ? (
                <ServicesDropdown key={item.key} />
              ) : (
                <NavLink
                  key={item.key}
                  href={item.href}
                  className="flex items-center gap-(--space-fluid-3xs) font-alexandria text-(length:--text-fluid-nav) font-normal whitespace-nowrap"
                >
                  {t(`nav.${item.key}`)}
                  {item.withChevron && <ChevronDown />}
                </NavLink>
              ),
            )}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <CompactNavMenu t={t} />
          {/* Dark mode is disabled; the site is currently light-only. */}
          {/* <ThemeToggle /> */}
          <Button
            variant="default"
            className="hidden h-8 rounded-[8px] px-3 font-alexandria text-(length:--text-fluid-nav) sm:inline-flex"
            onClick={() => setIsMarriageRequestOpen(true)}
          >
            {t("nav.marriageRequest")}
          </Button>
          <LanguageSwitcher />
        </div>
      </div>

      <MarriageRequestModal open={isMarriageRequestOpen} onOpenChange={setIsMarriageRequestOpen} />
    </header>
  );
}
