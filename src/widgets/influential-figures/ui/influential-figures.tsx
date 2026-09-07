import { getLocale } from "next-intl/server";
import { getTopPersonalities, type Personality } from "@/shared/api";

import { getInfluentialFiguresCopy } from "../model/copy";

import { InfluentialFiguresSlider } from "./influential-figures-slider";

export async function InfluentialFigures() {
  const locale = await getLocale();
  const content = getInfluentialFiguresCopy(locale);

  let personalities: Personality[] = [];
  let hasError = false;
  try {
    personalities = await getTopPersonalities(locale);
  } catch {
    hasError = true;
  }

  return (
    <InfluentialFiguresSlider
      content={content}
      personalities={personalities}
      locale={locale}
      hasError={hasError}
    />
  );
}
