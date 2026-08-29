import { cn } from "@/shared/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Zefaaf"
      className={cn("h-[62px] w-[46px] shrink-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(234deg, #FFC643 0%, #F668D1 50.884%, #8539F7 100%)",
        WebkitMaskImage: "url(/icons/logo-mask.svg)",
        maskImage: "url(/icons/logo-mask.svg)",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    />
  );
}
