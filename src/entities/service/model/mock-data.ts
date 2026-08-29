import { Palette, Rocket, Code2 } from "lucide-react";

import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "design",
    icon: Palette,
    titleKey: "services.items.design.title",
    descriptionKey: "services.items.design.description",
  },
  {
    id: "development",
    icon: Code2,
    titleKey: "services.items.development.title",
    descriptionKey: "services.items.development.description",
  },
  {
    id: "growth",
    icon: Rocket,
    titleKey: "services.items.growth.title",
    descriptionKey: "services.items.growth.description",
  },
];
