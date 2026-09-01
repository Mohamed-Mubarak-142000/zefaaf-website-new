"use client";

import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

type FaqItem = { question: string; answer: string };

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-stroke-1 py-(--space-fluid-sm)">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-(--space-fluid-sm) text-start"
      >
        <span className="font-alexandria text-(length:--text-fluid-lg) font-bold text-black-primary">
          {item.question}
        </span>
        {isOpen ? (
          <Minus className="size-(--size-fluid-icon-sm) shrink-0 text-black-primary" />
        ) : (
          <Plus className="size-(--size-fluid-icon-sm) shrink-0 text-black-primary" />
        )}
      </button>
      {isOpen && (
        <p className="mt-(--space-fluid-xs) font-alexandria text-(length:--text-fluid-xs) text-grey-primary">
          {item.answer}
        </p>
      )}
    </div>
  );
}

function FaqIntro() {
  const t = useTranslations("contactUs.faq");

  return (
    <div className="flex flex-col items-start gap-(--space-fluid-lg) lg:pt-(--space-fluid-xl)">
      <Image
        src="/images/contact/faq-illustration.png"
        alt=""
        aria-hidden="true"
        width={94}
        height={94}
        className="size-[clamp(64px,7vw,94px)]"
      />
      <div className="flex flex-col gap-(--space-fluid-sm)">
        <h2 className="font-alexandria text-2xl font-bold text-black-primary">{t("title")}</h2>
        <p className="whitespace-pre-line font-alexandria text-(length:--text-fluid-lg) text-black-primary">
          {t("description")}
        </p>
      </div>
    </div>
  );
}

export function ContactFaq() {
  const t = useTranslations("contactUs.faq");
  const items = t.raw("items") as FaqItem[];
  const [openIndex, setOpenIndex] = useState(0);
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.question.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <section className="section-gap mx-auto grid w-full max-w-[1600px] gap-(--space-fluid-xl) px-(--space-fluid-container) lg:grid-cols-[1.15fr_1fr]">
      <div className="flex flex-col gap-(--space-fluid-lg)">
        <div className="flex flex-col gap-(--space-fluid-sm)">
          <h1 className="font-alexandria text-[clamp(28px,3.3vw,36px)] font-bold text-black-primary">
            {t("heading")}
          </h1>
          <div className="flex items-center gap-(--space-fluid-xs) rounded-lg bg-stroke-2 px-(--space-fluid-sm) py-(--space-fluid-2xs)">
            <img src="/icons/search-01.svg" alt="" className="size-(--size-fluid-icon-sm)" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full bg-transparent font-alexandria text-(length:--text-fluid-nav) text-black-primary outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex flex-col gap-(--space-fluid-xs)">
          <div className="flex flex-col">
            {filteredItems.map((item) => {
              const index = items.indexOf(item);
              return (
                <FaqRow
                  key={item.question}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-(--space-fluid-3xs)" aria-hidden="true">
            <span className="h-1.5 w-[88px] rounded-full bg-brand" />
            <span className="h-1.5 w-[28px] rounded-full bg-brand/35" />
            <span className="h-1.5 w-[28px] rounded-full bg-brand/35" />
          </div>
        </div>
      </div>

      <FaqIntro />
    </section>
  );
}
