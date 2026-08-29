import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import boundaries from "eslint-plugin-boundaries";

// FSD layer order, low → high. A layer may only import from layers listed
// in its own `allow` array (never sideways, never upward). `app` here is
// the Next.js routing tree at the project root (`app/**`) — it sits above
// every FSD layer, so it may import from all of them but nothing may
// import from it. Public-API / no-cross-slice-imports rules are enforced
// separately by Steiger (`pnpm lint:fsd`).
const fsdBoundaries = defineConfig([
  {
    files: ["src/**/*.{ts,tsx}", "app/**/*.{ts,tsx}"],
    plugins: { boundaries },
    settings: {
      "boundaries/include": ["src/**/*", "app/**/*"],
      // `partialMatch: false` anchors every pattern to the real project
      // root. Without it, eslint-plugin-boundaries matches patterns against
      // ANY ancestor directory (i.e. "app/**" also matches "src/app/**"),
      // which misclassifies the FSD app layer as the Next.js routing tree.
      "boundaries/elements": [
        { type: "app", pattern: "src/app/**", partialMatch: false },
        { type: "widgets", pattern: "src/widgets/**", partialMatch: false },
        { type: "features", pattern: "src/features/**", partialMatch: false },
        { type: "entities", pattern: "src/entities/**", partialMatch: false },
        { type: "shared", pattern: "src/shared/**", partialMatch: false },
        { type: "routing", pattern: "app/**", partialMatch: false },
      ],
    },
    rules: {
      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          policies: [
            {
              from: { element: { type: "routing" } },
              allow: [{ to: { element: { types: { anyOf: ["app", "widgets", "features", "entities", "shared"] } } } }],
            },
            {
              from: { element: { type: "app" } },
              allow: [{ to: { element: { types: { anyOf: ["widgets", "features", "entities", "shared"] } } } }],
            },
            {
              from: { element: { type: "widgets" } },
              allow: [{ to: { element: { types: { anyOf: ["features", "entities", "shared"] } } } }],
            },
            {
              from: { element: { type: "features" } },
              allow: [{ to: { element: { types: { anyOf: ["entities", "shared"] } } } }],
            },
            {
              from: { element: { type: "entities" } },
              allow: [{ to: { element: { type: "shared" } } }],
            },
            {
              from: { element: { type: "shared" } },
              disallow: [{ to: { element: { types: { anyOf: ["routing", "app", "widgets", "features", "entities"] } } } }],
            },
          ],
        },
      ],
      "boundaries/no-unknown-files": "error",
    },
  },
]);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...fsdBoundaries,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
