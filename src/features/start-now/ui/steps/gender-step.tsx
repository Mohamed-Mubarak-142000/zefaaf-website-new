import Image from "next/image";

import { cn } from "@/shared/lib/utils";

import type { Gender } from "../../model/types";
import type { StartNowCopy } from "../../model/copy";

const AVATARS: Record<Gender, { src: string; alt: string }> = {
  woman: { src: "/icons/start-now/gender-woman.png", alt: "" },
  man: { src: "/icons/start-now/gender-man.png", alt: "" },
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
        "flex flex-1 items-center gap-3 rounded-xl border p-3 text-start transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        selected ? "border-brand" : "border-[#d9d9d9] hover:border-brand/50"
      )}
    >
      <span className="relative size-[60px] shrink-0 overflow-hidden rounded-full border border-[#d9d9d9] bg-white">
        {/* unoptimized: Next's image optimizer produces a corrupt (blank)
            WebP/AVIF re-encode of these small illustration PNGs — serve the
            source file as-is instead. */}
        <Image src={avatar.src} alt={avatar.alt} fill sizes="60px" unoptimized className="object-cover object-top" />
      </span>
      <span className={cn("font-almarai text-lg font-bold", selected ? "text-brand" : "text-[#757575]")}>
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
      <div className="flex items-stretch gap-6">
        <GenderCard gender="woman" label={copy.woman} selected={value === "woman"} onSelect={() => onChange("woman")} />
        <GenderCard gender="man" label={copy.man} selected={value === "man"} onSelect={() => onChange("man")} />
      </div>
    </div>
  );
}
