import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/features/language-switcher";
import { ThemeToggle } from "@/features/theme-toggle";
import { siteConfig } from "@/shared/config";
import { Link } from "@/shared/i18n";

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">
          {siteConfig.name}
        </Link>

        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/">{t("nav.home")}</Link>
          <Link href="#services">{t("nav.services")}</Link>
          <Link href="#contact">{t("nav.contact")}</Link>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
