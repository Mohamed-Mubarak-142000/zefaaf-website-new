"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";

import { getBookSeatCopy } from "../model/copy";

export function BookSeatDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const locale = useLocale();
  const copy = getBookSeatCopy(locale);

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
          {/* No live Rewaq destination exists yet — same placeholder
              convention as the header/footer/VIP CTAs. */}
          <Button asChild className="h-9 rounded-lg px-2.5 font-alexandria text-[10.5px]">
            <a href="#">{copy.cta}</a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
