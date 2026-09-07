import * as React from "react";
import { AlertCircle } from "lucide-react";

import { cn } from "@/shared/lib/utils";

function Alert({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="alert"
      data-slot="alert"
      className={cn(
        "flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 font-alexandria text-sm text-destructive",
        className,
      )}
      {...props}
    >
      <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
      <span className="flex-1">{children}</span>
    </div>
  );
}

export { Alert };
