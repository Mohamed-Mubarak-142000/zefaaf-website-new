import Image from "next/image";

import { cn } from "@/shared/lib/utils";

import type { Gender } from "../../model/types";
import type { StartNowCopy } from "../../model/copy";

const AVATARS: Record<Gender, { src: string; selectedSrc: string; alt: string }> = {
  woman: {
    src: "/icons/start-now/gender-woman.png",
    selectedSrc: "/images/image 11.svg",
    alt: "",
  },
  man: { src: "/images/image 10.svg", selectedSrc: "/images/image 1122.svg", alt: "" },
};

function GenderCard({
  gender,
  label,
  selected,
  onSelect,
}: {
  gender: Gender;
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  const avatar = AVATARS[gender];

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "flex flex-1 items-center gap-2.5 rounded-xl border px-2.5 py-2 text-start transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        selected ? "border-brand" : "border-[#d9d9d9] hover:border-brand/50"
      )}
    >
      <span className="relative size-[52px] shrink-0 overflow-hidden rounded-full border border-[#d9d9d9] bg-white">
        {/* unoptimized: Next's image optimizer produces a corrupt (blank)
            WebP/AVIF re-encode of these small illustration PNGs — serve the
            source file as-is instead. */}
        <Image
          src={selected ? avatar.selectedSrc : avatar.src}
          alt={avatar.alt}
          fill
          sizes="52px"
          unoptimized
          className={cn(
            "object-cover object-top transition-[filter] duration-300",
            selected ? "grayscale-0" : "grayscale"
          )}
        />
      </span>
      <span className={cn("font-almarai text-base font-bold", selected ? "text-brand" : "text-[#757575]")}>
        {label}
      </span>
    </button>
  );
}

export function GenderStep({
  copy,
  value,
  onChange,
}: {
  copy: StartNowCopy["gender"];
  value: Gender | null;
  onChange: (gender: Gender) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        <p className="font-alexandria text-base font-medium text-black">{copy.heading}</p>
        <p className="font-alexandria text-sm text-[#626262]">{copy.description}</p>
      </div>
      <div className="flex items-stretch gap-4">
        <GenderCard gender="woman" label={copy.woman} selected={value === "woman"} onSelect={() => onChange("woman")} />
        <GenderCard gender="man" label={copy.man} selected={value === "man"} onSelect={() => onChange("man")} />
      </div>
    </div>
  );
}
