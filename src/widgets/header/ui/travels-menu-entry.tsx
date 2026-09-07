"use client";

import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import type { Trip } from "@/shared/api";
import { cn } from "@/shared/lib/utils";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";

import { NavLink } from "./nav-link";

/**
 * The "Travels" row of the services menu — it took over the slot Figma gave
 * to Bosnia Marriage Tour — plus the upcoming Rewaq trips it reveals, each
 * one linking to that trip's page at /travels/{ulid}.
 *
 * The trips expand in place, directly under the row, inside the same menu
 * panel. A Radix submenu can't do that (`MenuSubContent` is always positioned
 * to the side, it takes no `side` prop), so this is a plain expandable row:
 * the trigger is a menu item whose `onSelect` is prevented, which is what
 * keeps the menu open on click instead of navigating.
 *
 * The trips come from the caller (via `useUpcomingTrips`) rather than from a
 * hook here, because dropdown content unmounts while the menu is closed — the
 * fetch has to start when the header mounts so the row is already there the
 * first time the menu opens. An empty list (still loading, request failed, or
 * nothing upcoming) renders nothing, so the menu never shows a dead end.
 *
 * The class names are passed in by each caller so the row inherits the exact
 * typography of the menu it sits in — the desktop dropdown and the compact
 * menu style their items differently, and neither is changed by this addition.
 */
export function TravelsMenuEntry({
  trips,
  itemClassName,
  labelClassName,
}: {
  trips: Trip[];
  itemClassName?: string;
  labelClassName?: string;
}) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  if (trips.length === 0) return null;

  return (
    <>
      <DropdownMenuItem
        className={itemClassName}
        // Keeps the menu open so the trips below stay reachable.
        onSelect={(event) => {
          event.preventDefault();
          setIsOpen((open) => !open);
        }}
      >
        <span className={cn("flex w-full items-center justify-between gap-(--space-fluid-3xs)", labelClassName)}>
          {t("nav.servicesMenu.travels")}
          <ChevronRightIcon
            className={cn(
              "size-3.5 shrink-0 transition-transform duration-150",
              isOpen ? "rotate-90" : "rtl:rotate-180",
            )}
          />
        </span>
      </DropdownMenuItem>
      {isOpen &&
        trips.map((trip) => (
          <DropdownMenuItem key={trip.ulid} asChild className={itemClassName}>
            <NavLink href={`/travels/${trip.ulid}`} className={cn("w-full ps-(--space-fluid-sm)", labelClassName)}>
              {trip.main_title}
            </NavLink>
          </DropdownMenuItem>
        ))}
    </>
  );
}
