"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { Link } from "@/shared/i18n";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";

import { getMarriageFormCopy } from "../model/copy";

export function MarriageFormDialog({
  open,
  onOpenChange,
  onRequestMarriage,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called when the primary CTA is pressed, e.g. to open the full marriage
   * request form. Defaults to just closing this dialog when omitted. */
  onRequestMarriage?: () => void;
}) {
  const locale = useLocale();
  const copy = getMarriageFormCopy(locale);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
        </DialogHeader>

        <div className="flex w-full flex-col items-center gap-4 p-4">
          <Image
            src="/icons/start-now/marriage-form-illustration.svg"
            alt=""
            width={122}
            height={126}
            className="h-auto w-[122px] [clip-path:inset(2px_0)]"
          />
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-alexandria text-base font-medium text-black">{copy.heading}</p>
            <p className="max-w-[492px] font-alexandria text-sm text-[#393a3b]">{copy.description}</p>
          </div>
        </div>

        <DialogFooter className="justify-end">
          {/* No "read more" article destination exists yet — same placeholder
              convention as the header/footer/VIP CTAs. */}
          <Button asChild variant="secondary" className="h-9 rounded-lg bg-[#fbeef7] px-2.5 font-alexandria text-[10.5px] text-brand hover:bg-[#fbeef7]/80">
            <Link href="/smart-marriage-initiative">{copy.readMore}</Link>
          </Button>
          <Button
            type="button"
            onClick={() => (onRequestMarriage ? onRequestMarriage() : onOpenChange(false))}
            className="h-9 rounded-lg px-2.5 font-alexandria text-[10.5px]"
          >
            {copy.cta}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
