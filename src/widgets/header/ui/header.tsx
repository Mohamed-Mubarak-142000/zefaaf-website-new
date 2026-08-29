import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/features/language-switcher";
import { ThemeToggle } from "@/features/theme-toggle";
import { siteConfig } from "@/shared/config";
import { Link } from "@/shared/i18n";

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="shrink-0 font-semibold">
          {siteConfig.name}
        </Link>

        {/* Hidden below sm (640px): a 3-link nav plus 2 icon buttons doesn't
            fit a phone-width row — the page is a single scrollable one-pager
            anyway, so the anchors aren't needed to navigate it on mobile. */}
        <nav className="hidden items-center gap-4 text-sm text-muted-foreground sm:flex">
          <Link href="/">{t("nav.home")}</Link>
          <Link href="#services">{t("nav.services")}</Link>
          <Link href="#contact">{t("nav.contact")}</Link>
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
