import { cn } from "@/shared/lib/utils";

// chevron-down.svg is 13.5×7.5 (not square) with preserveAspectRatio="none" —
// forcing it into a square box stretches it noticeably taller than the design.
export function ChevronDown({ className }: { className?: string }) {
  return (
    <span className={cn("relative w-(--size-fluid-icon-xs) aspect-9/5 shrink-0", className)}>
      <img src="/icons/chevron-down.svg" alt="" className="absolute inset-0 size-full dark:invert" />
    </span>
  );
}
