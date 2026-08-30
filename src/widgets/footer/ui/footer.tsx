import { useTranslations } from "next-intl";

import { Link } from "@/shared/i18n";
import { Logo } from "@/shared/ui/logo";

import { NewsletterForm } from "./newsletter-form";

const DEVELOPER_NAME = "Tech-flow";

// Column/link keys mirror the messages/*.json `footer.columns` shape —
// content and hrefs aren't real pages yet (only the Figma footer itself was
// specified), same placeholder approach as the header's NAV_ITEMS.
const FOOTER_COLUMNS = [
  { key: "about", links: ["about", "contact", "testimonials", "successStories", "businessLicense"] },
  { key: "account", links: ["manage", "safetyTips", "delete", "security", "membership"] },
  { key: "help", links: ["helpCenter", "faq", "quickStart", "tutorials", "partnersBlog"] },
  { key: "legal", links: ["privacy", "terms", "refund", "cookies", "reportAbuse"] },
] as const;

const SOCIAL_LINKS = [
  { key: "instagram", label: "Instagram", icon: "/icons/social-instagram.svg" },
  { key: "facebook", label: "Facebook", icon: "/icons/social-facebook.svg" },
  { key: "linkedin", label: "LinkedIn", icon: "/icons/social-linkedin.svg" },
  { key: "x", label: "X", icon: "/icons/social-x.svg" },
  { key: "youtube", label: "YouTube", icon: "/icons/social-youtube.svg" },
  { key: "tiktok", label: "TikTok", icon: "/icons/social-tiktok.svg" },
] as const;

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-[50px] bg-[#181818] text-white">
      <div className="mx-auto max-w-[1800px] px-(--space-fluid-container) pt-(--space-fluid-xl) pb-(--space-fluid-md)">
        <div className="flex flex-wrap items-start gap-(--space-fluid-md)">
          <Logo className="h-auto w-(--size-fluid-logo-footer-w) shrink-0" />

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.key} className="flex min-w-32 flex-1 flex-col gap-(--space-fluid-xs)">
              <p className="font-alexandria text-(length:--text-fluid-nav) font-normal text-white">
                {t(`footer.columns.${column.key}.title`)}
              </p>
              <ul className="flex flex-col gap-(--space-fluid-3xs)">
                {column.links.map((linkKey) => (
                  <li key={linkKey}>
                    <Link
                      href="#"
                      className="inline-block font-alexandria text-(length:--text-fluid-xs) text-white/80 hover:text-white"
                    >
                      {t(`footer.columns.${column.key}.links.${linkKey}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <NewsletterForm className="min-w-52 flex-[1.5_1_200px]" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-(--space-fluid-sm) pt-(--space-fluid-md)">
          <div className="flex items-center gap-(--space-fluid-sm) font-alexandria text-(length:--text-fluid-xs) text-white">
            <span>{t("footer.bottom.developedBy", { brand: DEVELOPER_NAME })}</span>
            <span className="h-3 w-px bg-white/40" aria-hidden="true" />
            <span>{t("footer.bottom.copyright", { year })}</span>
          </div>

          <div className="flex items-center gap-(--space-fluid-sm)">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.key} href="#" aria-label={social.label} className="shrink-0">
                <img src={social.icon} alt="" className="size-(--size-fluid-icon-lg)" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
