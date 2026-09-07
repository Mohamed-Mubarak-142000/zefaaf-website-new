"use client";

import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

import { getTrips, isUpcomingTrip, type Trip } from "@/shared/api";

/**
 * The upcoming trips shown inside the "Travels" service menu entry.
 *
 * `Header` remounts on every navigation, so this goes through React Query
 * (already wired up in `AppProviders`) to keep one cached list per session
 * instead of re-hitting Rewaq on each page. A failed fetch resolves to an
 * empty list, which simply hides the entry — the nav never shows an error.
 *
 * Rewaq returns each trip's title in the requested locale, so the locale is
 * part of the cache key: switching language re-fetches rather than reusing the
 * previous language's titles.
 */
export function useUpcomingTrips(): Trip[] {
  const locale = useLocale();
  const { data } = useQuery({
    queryKey: ["rewaq", "trips", locale],
    queryFn: () => getTrips(locale),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return (data ?? []).filter(isUpcomingTrip);
}
