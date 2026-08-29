import { useTranslations } from "next-intl";

import { siteConfig } from "@/shared/config";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
        © {year} {siteConfig.name}. {t("footer.rights")}
      </div>
    </footer>
  );
}
