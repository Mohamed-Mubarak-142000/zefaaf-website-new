"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";

import { getBookSeatCopy } from "../model/copy";

export function BookSeatDialog({ open, onOpenChange, eventUlid, tripUlid }: { open: boolean; onOpenChange: (open: boolean) => void; eventUlid?: string; tripUlid?: string }) {
  const locale = useLocale();
  const copy = getBookSeatCopy(locale);
  const rewaqBaseUrl = (process.env.NEXT_PUBLIC_REWAQ_URL ??
    (process.env.NODE_ENV === "production" ? "https://rewaq.nl" : "https://dev.rewaq.nl")).replace(/\/$/, "");
  // A trip hands the visitor over to Rewaq's trip details page, an event to
  // its event page; with neither (the standalone /bosnia-tour page) the CTA
  // still just opens Rewaq's home.
  const rewaqUrl = tripUlid
    ? `${rewaqBaseUrl}/${locale}/travel-details/${encodeURIComponent(tripUlid)}`
    : eventUlid
      ? `${rewaqBaseUrl}/${locale}/events/${encodeURIComponent(eventUlid)}`
      : rewaqBaseUrl;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
        </DialogHeader>

        <div className="flex w-full flex-col items-center gap-4 p-4">
          <Image
            src="/icons/start-now/book-seat-illustration.svg"
            alt=""
            width={111}
            height={117}
            className="h-auto w-[111px]"
          />
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-alexandria text-base font-medium text-black">{copy.heading}</p>
            <p className="max-w-[492px] font-alexandria text-sm text-[#393a3b]">{copy.description}</p>
          </div>
        </div>

        <DialogFooter className="justify-end">
          <Button asChild className="h-9 rounded-lg px-2.5 font-alexandria text-[10.5px]">
            <a href={rewaqUrl} target="_blank" rel="noopener noreferrer">{copy.cta}</a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
