import type { Variants } from "framer-motion";

// Shared reveal used by every Terms section, matching the easing/duration the
// home-page and About widgets already use so every page feels like one site.
export const REVEAL: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const REVEAL_STAGGERED: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.09,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Sections reveal once, a fraction of the way in.
export const VIEWPORT = { once: true, amount: 0.15 } as const;
