import { Fragment } from "react";

import { Link } from "@/shared/i18n";
import { cn } from "@/shared/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

const CRUMB_CLASSES =
  "font-alexandria text-[12px] leading-[1.5] text-grey-primary underline decoration-solid whitespace-nowrap";

export function Breadcrumb({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-3", className)}>
      <img src="/icons/breadcrumb-home.svg" alt="" className="h-4 w-auto shrink-0" />

      {items.map((item, index) => (
        <Fragment key={item.label}>
          <span className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className={CRUMB_CLASSES}>
                {item.label}
              </Link>
            ) : (
              <span className={CRUMB_CLASSES}>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <img
                src="/icons/breadcrumb-arrow.svg"
                alt=""
                className="h-1.5 w-auto shrink-0 rtl:-scale-x-100"
              />
            )}
          </span>
        </Fragment>
      ))}
    </nav>
  );
}
