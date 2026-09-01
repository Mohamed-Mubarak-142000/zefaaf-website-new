"use client";

import { Link, usePathname } from "@/shared/i18n";
import { cn } from "@/shared/lib/utils";

/**
 * A nav link that colours itself brand-pink while its route is the one being
 * viewed. `usePathname` from `@/shared/i18n` returns the locale-less path, so
 * the comparison is the same in all 33 locales. This is the only reason the
 * component is a client component — the Header itself stays on the server.
 */
export function NavLink({
  href,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const target = String(href);
  // "#" placeholders point at no route yet, so they are never active.
  const isActive =
    target !== "#" &&
    (target === "/" ? pathname === "/" : pathname.startsWith(target));

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(isActive ? "text-brand" : "text-foreground", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
