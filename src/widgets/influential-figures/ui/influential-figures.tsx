import { getLocale } from "next-intl/server";

import { getInfluentialFiguresCopy } from "../model/copy";

import { InfluentialFiguresSlider } from "./influential-figures-slider";

export async function InfluentialFigures() {
  const locale = await getLocale();
  const content = getInfluentialFiguresCopy(locale);
  return <InfluentialFiguresSlider content={content} />;
}
