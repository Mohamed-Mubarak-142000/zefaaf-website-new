import { getLocale } from "next-intl/server";
import { getTopPersonalities } from "@/shared/api";

import { getInfluentialFiguresCopy } from "../model/copy";

import { InfluentialFiguresSlider } from "./influential-figures-slider";

export async function InfluentialFigures() {
  const locale = await getLocale();
  const content = getInfluentialFiguresCopy(locale);
  const personalities = await getTopPersonalities(locale).catch(() => []);
  return <InfluentialFiguresSlider content={content} personalities={personalities} locale={locale} />;
}
