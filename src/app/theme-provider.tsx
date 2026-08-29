"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      // React 19 warns whenever a component renders a <script> tag, since a
      // client-side re-render of one is a no-op (browsers only execute a
      // script inserted this way when it arrives as part of the initial
      // HTML). next-themes' inline theme script only ever needs that
      // initial-parse execution, so it's marked non-executable ("text/plain")
      // once we're actually running in the browser — the server-rendered
      // "text/javascript" copy has already run by then. See:
      // https://nextjs.org/docs/app/guides/preventing-flash-before-hydration#themes
      scriptProps={{ type: typeof window === "undefined" ? "text/javascript" : "text/plain" }}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
