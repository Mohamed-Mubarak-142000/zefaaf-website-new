import { cn } from "@/shared/lib/utils";

export function Logo({
  className,
  variant = "brand",
}: {
  className?: string;
  variant?: "brand" | "white";
}) {
  return (
    <div
      role="img"
      aria-label="Zefaaf"
      className={cn("h-auto w-(--size-fluid-logo-w) shrink-0", className)}
      style={{
        aspectRatio: "46.207 / 62.515",
        background:
          variant === "white"
            ? "#FFFFFF"
            : "linear-gradient(234deg, #FFC643 0%, #F668D1 50.884%, #8539F7 100%)",
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
