import type { Variants } from "framer-motion";

// Pulsing halo behind the status icon. Ratios and keyframe times are taken
// directly from the Figma prototype's ellipse animation (220→280→213→280→204,
// re-expressed as a relative scale so it works at any icon size instead of
// the design's fixed 220px canvas).
export const STATUS_ICON_PULSE: Variants = {
  animate: {
    scale: [1, 1.2727, 0.9682, 1.2727, 0.9273, 0.9273],
    opacity: [1, 1, 0.5, 0, 0],
    transition: {
      scale: {
        duration: 2,
        times: [0, 0.2345, 0.4406, 0.5943, 0.7445, 1],
        ease: "linear",
        repeat: Infinity,
      },
      opacity: {
        duration: 2,
        times: [0, 0.2345, 0.5943, 0.9487, 1],
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
};

export const STATUS_ICON_POP: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
