"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { MarriageFormDialog } from "@/features/marriage-form";
import { MarriageRequestModal } from "@/features/marriage-request";
import { cn } from "@/shared/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { useUpcomingTrips } from "../model/use-upcoming-trips";

import { ChevronDown } from "./chevron-down";
import { NavLink } from "./nav-link";
import { TravelsMenuEntry } from "./travels-menu-entry";

// Figma (node 540:416979) only gives a real destination for VIP Personal
// Search (the /vip page, reusing the existing `nav.vipSearch` label since
// it's the exact same string), Zefaaf events (the /events page, built from
// node 539:415976) and Meeting in Your Country (the /meeting-in-country page,
// built from node 539:408802). Marriage form (node 622:108667) opens the
// "Complete Your Booking via Rewaq" teaser dialog, whose own CTA opens the
// full marriage request form; the rest don't have a page yet, matching the
// "#" placeholder convention already used for the other nav items in Header.
//
// Travels took over the slot Figma gave to Bosnia Marriage Tour: instead of
// one hardcoded link to /bosnia-tour it opens a list of the upcoming Rewaq
// trips, each on its own /travels/{ulid} page (same UI as /bosnia-tour, which
// still exists as its own route). Its "#" href is never used — the row is an
// expandable trigger, rendered by `TravelsMenuEntry` — but keeping it in this
// array is what places it at Figma's position in the menu.
export const SERVICE_MENU_ITEMS = [
  { labelKey: "nav.servicesMenu.zefaafEvents", href: "/events" },
  { labelKey: "nav.servicesMenu.marriageForm", href: "#" },
  { labelKey: "nav.vipSearch", href: "/vip" },
  { labelKey: "nav.servicesMenu.travels", href: "#" },
  { labelKey: "nav.servicesMenu.meetingInCountry", href: "/meeting-in-country" },
] as const;

const MARRIAGE_FORM_KEY: (typeof SERVICE_MENU_ITEMS)[number]["labelKey"] = "nav.servicesMenu.marriageForm";
export const TRAVELS_KEY: (typeof SERVICE_MENU_ITEMS)[number]["labelKey"] = "nav.servicesMenu.travels";

/**
 * Shared state + dialogs for the "Marriage form" service menu entry. Kept in
 * the parent of the dropdown (not inside DropdownMenuContent, which unmounts
 * on close) so opening the teaser survives the menu closing right after the
 * item is clicked.
 */
export function useMarriageFormEntry() {
  const [teaserOpen, setTeaserOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const dialogs = (
    <>
      <MarriageFormDialog
        open={teaserOpen}
        onOpenChange={setTeaserOpen}
        onRequestMarriage={() => {
          setTeaserOpen(false);
          setFormOpen(true);
        }}
      />
      <MarriageRequestModal open={formOpen} onOpenChange={setFormOpen} />
    </>
  );

  return { openTeaser: () => setTeaserOpen(true), dialogs };
}

export function ServicesDropdown({ className }: { className?: string }) {
  const t = useTranslations();
  const { openTeaser, dialogs } = useMarriageFormEntry();
  const trips = useUpcomingTrips();

  return (
    <>
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
          className="w-52.5 gap-0 rounded-[8px] bg-white p-(--space-fluid-xs) shadow-[0px_4px_11.2px_0px_rgba(0,0,0,0.07)] ring-0"
        >
          {SERVICE_MENU_ITEMS.map((item) =>
            item.labelKey === TRAVELS_KEY ? (
              <TravelsMenuEntry
                key={item.labelKey}
                trips={trips}
                itemClassName="px-(--space-fluid-xs) py-(--space-fluid-3xs)"
                labelClassName="font-alexandria text-(length:--text-fluid-xs) font-normal text-[#202022]"
              />
            ) : item.labelKey === MARRIAGE_FORM_KEY ? (
              <DropdownMenuItem key={item.labelKey} asChild className="px-(--space-fluid-xs) py-(--space-fluid-3xs)">
                <button
                  type="button"
                  onClick={openTeaser}
                  className="w-full text-start font-alexandria text-(length:--text-fluid-xs) font-normal text-[#202022]"
                >
                  {t(item.labelKey)}
                </button>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem key={item.labelKey} asChild className="px-(--space-fluid-xs) py-(--space-fluid-3xs)">
                <NavLink
                  href={item.href}
                  className="w-full font-alexandria text-(length:--text-fluid-xs) font-normal text-[#202022]"
                >
                  {t(item.labelKey)}
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
