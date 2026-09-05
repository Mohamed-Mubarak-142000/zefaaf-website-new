"use client";

import Image from "next/image";
import { useState } from "react";
import type { Personality } from "@/shared/api";

type SliderContent = {
  title: string;
  description: string;
  name: string;
  followers: string;
  secondName: string;
  secondFollowers: string;
};

type Props = {
  content: SliderContent;
  personalities: Personality[];
  locale: string;
};

export function InfluentialFiguresSlider({ content, personalities, locale }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const fallbackFigures = [
    { name: content.name, description: "", followers: content.followers, imageUrl: "/images/image 568.svg" },
    { name: content.secondName, description: "", followers: content.secondFollowers, imageUrl: "/images/image 568.svg" },
  ];
  const followersLabel = content.followers.trim().split(/\s+/).at(-1) ?? "";
  const figures = personalities.length === 2
    ? personalities.map((personality) => ({
        name: personality.name,
        description: personality.description,
        followers: `${new Intl.NumberFormat(locale, { notation: "compact", maximumFractionDigits: 1 }).format(personality.followers_count)} ${followersLabel}`,
        imageUrl: personality.image_url || "/images/image 568.svg",
      }))
    : fallbackFigures;

  return (
    <section aria-labelledby="influential-figures-title" className="overflow-x-clip [--figures-top:clamp(110px,10vw,145px)] pt-(--figures-top)">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-14 px-(--space-fluid-container) xl:grid-cols-[minmax(0,1fr)_560px] xl:gap-[32px]">
        <div className="relative z-10 max-w-[653px]">
          <div aria-hidden="true" className="pointer-events-none absolute end-[50px] top-[-72px] z-0 h-[132px] w-[320px] max-w-[54vw] overflow-hidden max-sm:end-0 rtl:-top-[84px]">
            <Image src="/images/Frame 2147226794.svg" alt="" width={412} height={373} unoptimized className="absolute end-0 top-[-125px] h-auto w-[320px] max-w-none rtl:scale-x-[-1]" />
          </div>

          <h2 id="influential-figures-title" className="relative z-10 max-w-[636.48px] whitespace-pre-line font-alexandria text-[clamp(26px,2.2vw,32px)] leading-[1.2] font-bold tracking-normal text-foreground">
            {content.title}
          </h2>
          <p className="relative z-10 mt-6 max-w-[652.95px] font-alexandria text-[clamp(15px,1.25vw,18px)] leading-[1.5] font-normal tracking-normal text-muted-foreground">
            {content.description}
          </p>

          <div className="mt-8 flex gap-[10px]" role="group" aria-label="Choose slide">
            {[0, 1].map((slide) => (
              <button
                key={slide}
                type="button"
                onClick={() => setActiveSlide(slide)}
                aria-label={`Show slide ${slide + 1}`}
                aria-pressed={activeSlide === slide}
                className={`h-[7px] rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${activeSlide === slide ? "w-[98px] bg-secondary-pink" : "w-[30px] bg-stroke-1"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto min-h-[355px] w-full max-w-[560px]">
          <div className={`absolute inset-0 flex flex-nowrap items-center justify-center gap-5 py-[64px] transition-all duration-500 max-sm:gap-3 ${activeSlide === 0 ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-6 opacity-0 rtl:translate-x-6"}`} aria-hidden={activeSlide !== 0}>
            <Image src="/images/Ellipse 1630.svg" alt="" width={74} height={74} unoptimized aria-hidden="true" className="absolute start-1/2 top-[-12px] z-20 size-[58px] -translate-x-1/2 rtl:translate-x-1/2" />

            {figures.map((figure, index) => (
              <article key={figure.name} className="relative flex h-[278px] min-w-0 basis-[calc((100%_-_20px)/2)] flex-col overflow-hidden rounded-[15px] bg-person-card max-sm:basis-[calc((100%_-_12px)/2)]">
                <div className="absolute inset-[8px] overflow-hidden rounded-[10px]">
                  <Image src={figure.imageUrl} alt={figure.name} fill unoptimized sizes="294px" className={index === 1 ? "scale-x-[-1] object-cover" : "object-cover"} />
                </div>
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-[8px] bottom-[8px] h-[35%] rounded-b-[10px] bg-person-card" />
                <Image src="/images/Group-shap78.svg" alt="" width={199} height={141} unoptimized aria-hidden="true" className="pointer-events-none absolute bottom-[-52px] start-[34%] h-[220px] w-[155px] -translate-x-1/2 rotate-[31.52deg] opacity-70 rtl:translate-x-1/2" />
                <div className="relative z-10 mt-auto mb-[8px] flex h-[97px] flex-col items-center justify-center px-4 py-2 text-center font-cairo text-person-card-foreground">
                  <h3 className="text-[19px] leading-[1.4] font-bold tracking-normal max-sm:text-[16px]">{figure.name}</h3>
                  {figure.description && <p className="line-clamp-2 text-[12px] leading-[1.4] font-medium">{figure.description}</p>}
                  <p className="text-[16px] leading-[1.4] font-medium tracking-normal max-sm:text-[14px]">{figure.followers}</p>
                </div>
              </article>
            ))}

            <Image src="/images/Ellipse 16302.svg" alt="" width={53} height={53} unoptimized aria-hidden="true" className="absolute end-0 bottom-[4px] size-[46px]" />
          </div>

          <div className={`absolute inset-0 flex items-center py-[24px] transition-all duration-500 ${activeSlide === 1 ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0 rtl:-translate-x-6"}`} aria-hidden={activeSlide !== 1}>
            <div className="relative w-full">
              <div className="relative w-full">
                <div aria-hidden="true" className="absolute inset-0 translate-x-[14px] translate-y-[12px] overflow-hidden rounded-[15px] rtl:-translate-x-[14px]">
                  <Image src="/images/image 563.svg" alt="" fill unoptimized className="object-cover" />
                </div>
                <div className="relative aspect-[576/308] w-full overflow-hidden rounded-[15px]">
                  <Image src="/images/image 56478.svg" alt="A couple sharing a meaningful moment in a mosque" fill unoptimized sizes="(min-width: 1280px) 560px, 90vw" className="object-cover" />
                </div>
              </div>

              <Image src="/images/Ellipse 1630.svg" alt="" width={74} height={74} unoptimized aria-hidden="true" className="absolute start-1/2 top-[-68px] z-20 size-[64px] -translate-x-1/2 rtl:translate-x-1/2" />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute end-[114px] z-[19] w-[2px] bg-foreground"
                style={{
                  top: "calc(0px - var(--figures-top) - 27px)",
                  height: "calc(var(--figures-top) + 23px)",
                }}
              />

              <aside className="absolute end-[-40px] bottom-[44px] z-20 w-[145px] rounded-[17px] border border-border bg-card px-[15px] py-[17px] font-alexandria shadow-sm">
                <Image src="/images/Frame-stars.svg" alt="" width={16} height={16} unoptimized aria-hidden="true" className="mb-[5px] size-[16px]" />
                <span aria-hidden="true" className="absolute end-[6px] top-[19px] size-[46px] overflow-hidden rounded-full">
                  <Image src="/images/fec3793f96ef66e43faf3899834959e925f08b5d.gif" alt="" width={150} height={150} unoptimized className="absolute start-1/2 top-1/2 size-[68px] max-w-none -translate-x-1/2 -translate-y-1/2" />
                </span>
                <h3 className="max-w-[86px] text-[14px] leading-[1.35] font-bold text-primary">
                  Memories That Last Forever
                </h3>
                <p className="mt-[5px] text-[11px] leading-[1.4] text-muted-foreground">
                  Join us and share unforgettable moments
                </p>
              </aside>
              <Image src="/images/31c66566-5d11-4ed1-b844-6bb34dab51d6 1.svg" alt="" width={141} height={141} unoptimized aria-hidden="true" className="absolute end-[68px] top-[-16px] z-20 size-[92px]" />
              <Image src="/images/Ellipse 16302.svg" alt="" width={53} height={53} unoptimized aria-hidden="true" className="absolute end-[-26px] bottom-[-32px] z-0 size-[58px] rounded-full ring-[6px] ring-card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
