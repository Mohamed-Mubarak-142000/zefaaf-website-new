import { defineConfig } from "steiger";
import fsd from "@feature-sliced/steiger-plugin";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    ignores: ["**/.next/**", "**/node_modules/**"],
  },
  {
    // Next.js requires routing (page.tsx/layout.tsx) to live in the root
    // `app/` directory, outside the `src/` tree Steiger is run against
    // (`pnpm lint:fsd` → `steiger ./src`). That means every slice consumed
    // only by a route — which is most entities/widgets — looks unreferenced
    // to Steiger even though `app/**` genuinely imports them. Disabled here
    // rather than left as permanent noise; real same-layer duplication is
    // still caught by `fsd/forbidden-imports` and `fsd/public-api`.
    rules: {
      "fsd/insignificant-slice": "off",
    },
  },
]);
