"use client";

import { useTranslations } from "next-intl";

import { cn } from "@/shared/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { ChevronDown } from "./chevron-down";
import { NavLink } from "./nav-link";

// Figma (node 540:416979) only gives a real destination for VIP Personal
// Search (the /vip page, reusing the existing `nav.vipSearch` label since
// it's the exact same string), Zefaaf events (the /events page, built from
// node 539:415976), and Meeting in Your Country (the /meeting-in-country
// page, built from node 539:408802); the rest don't have a page yet,
// matching the "#" placeholder convention already used for the other nav
// items in Header.
export const SERVICE_MENU_ITEMS = [
  { labelKey: "nav.servicesMenu.zefaafEvents", href: "/events" },
  { labelKey: "nav.servicesMenu.marriageForm", href: "#" },
  { labelKey: "nav.vipSearch", href: "/vip" },
  { labelKey: "nav.servicesMenu.bosniaTour", href: "#" },
  { labelKey: "nav.servicesMenu.meetingInCountry", href: "/meeting-in-country" },
] as const;

export function ServicesDropdown({ className }: { className?: string }) {
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center gap-(--space-fluid-3xs) font-alexandria text-(length:--text-fluid-nav) font-normal whitespace-nowrap text-foreground outline-none",
          className,
        )}
      >
        {t("nav.services")}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[210px] gap-0 rounded-[8px] bg-white p-(--space-fluid-xs) shadow-[0px_4px_11.2px_0px_rgba(0,0,0,0.07)] ring-0"
      >
        {SERVICE_MENU_ITEMS.map((item) => (
          <DropdownMenuItem key={item.labelKey} asChild className="px-(--space-fluid-xs) py-(--space-fluid-3xs)">
            <NavLink
              href={item.href}
              className="w-full font-alexandria text-(length:--text-fluid-xs) font-normal text-[#202022]"
            >
              {t(item.labelKey)}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
