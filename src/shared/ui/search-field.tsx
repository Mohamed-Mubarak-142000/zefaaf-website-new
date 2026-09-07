"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { cn } from "@/shared/lib/utils"

// Radix owns the keyboard inside an open Select or DropdownMenu: it focuses a
// list item on open and reads every printable key as typeahead, which would
// jump the highlight around instead of typing into this box. So the printable
// keys are swallowed here and only these are let through to Radix, keeping the
// list navigable straight from the box.
const PASS_THROUGH_KEYS = new Set(["ArrowDown", "ArrowUp", "Home", "End", "Enter", "Escape", "Tab"])

/**
 * The filter box that sits above a long option list. Drop it in as the first
 * child of a `SelectContent` (via its `search` prop) or a
 * `DropdownMenuContent`; it is a plain controlled input otherwise.
 */
function SearchField({
  className,
  autoFocus = true,
  ...props
}: React.ComponentProps<"input">) {
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (!autoFocus) return
    // Radix focuses the checked item from an effect of its own after mount, so
    // focusing on the next frame is what puts the caret in the box instead of
    // having it pulled straight back out.
    const frame = requestAnimationFrame(() => ref.current?.focus())
    return () => cancelAnimationFrame(frame)
  }, [autoFocus])

  return (
    <div className="shrink-0 p-1">
      <div className="flex items-center gap-2 rounded-md border border-input bg-white px-2 focus-within:border-ring">
        <Search aria-hidden className="size-3.5 shrink-0 text-muted-foreground" />
        <input
          ref={ref}
          type="text"
          autoComplete="off"
          spellCheck={false}
          className={cn(
            "h-8 w-full min-w-0 bg-transparent font-alexandria text-sm text-foreground outline-none placeholder:text-muted-foreground",
            className
          )}
          onKeyDown={(event) => {
            if (!PASS_THROUGH_KEYS.has(event.key)) event.stopPropagation()
          }}
          {...props}
        />
      </div>
    </div>
  )
}

export { SearchField }
