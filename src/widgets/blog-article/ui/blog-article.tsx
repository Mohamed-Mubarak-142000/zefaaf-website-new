import Image from "next/image";
import { useTranslations } from "next-intl";

import { Breadcrumb } from "@/shared/ui/breadcrumb";

type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

function NewsletterMark() {
  return (
    <span
      aria-hidden="true"
      className="block h-[38px] w-[27px] shrink-0 bg-white"
      style={{
        WebkitMaskImage: "url(/icons/logo-mask.svg)",
        maskImage: "url(/icons/logo-mask.svg)",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    />
  );
}

function BlogSectionBlock({ section }: { section: BlogSection }) {
  return (
    <section className="flex flex-col items-start gap-[24px]">
      <h2 className="font-alexandria text-[clamp(19px,2vw,24px)] leading-[1.4] font-bold text-black-primary">
        {section.heading}
      </h2>

      <div className="flex flex-col font-alexandria text-[clamp(12.5px,1vw,13.5px)] leading-[1.6] text-grey-primary">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {section.list && (
          <ul className="list-disc ps-[20.25px]">
            {section.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export function BlogArticle() {
  const t = useTranslations("blogDetail");
  const leadParagraphs = t.raw("leadParagraphs") as string[];
  const sections = t.raw("sections") as BlogSection[];

  return (
    <article className="mx-auto w-full max-w-[1600px] px-(--space-fluid-container) pt-(--space-fluid-lg)">
      <Breadcrumb
        items={[
          { label: t("breadcrumb.home"), href: "/" },
          { label: t("breadcrumb.blogs"), href: "#" },
          { label: t("breadcrumb.current") },
        ]}
      />

      <header className="mt-(--space-fluid-lg) flex flex-col items-start gap-[18px]">
        <span className="rounded-[12px] bg-cta-secondary px-[12px] py-[6px] font-alexandria text-[12px] leading-[1.6] text-white">
          {t("date")}
        </span>

        <h1 className="font-alexandria text-[clamp(24px,4vw,36px)] leading-[1.4] font-semibold text-black-primary">
          {t("title")}
        </h1>

        <p className="font-alexandria text-[clamp(14px,1.1vw,16px)] leading-[1.6] text-grey-primary">
          {t("intro")}
        </p>
      </header>

      <div className="relative mt-(--space-fluid-lg) h-[clamp(220px,26vw,384px)] w-full overflow-hidden rounded-[9px] bg-[#22344c]">
        <Image
          src="/images/blog/tourism-guide-bosnia.jpg"
          alt={t("banner.imageAlt")}
          fill
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="object-cover object-[75%_30%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091b33] via-[#091b33]/85 via-35% to-[#091b33]/0 to-70%" />
        <div className="absolute inset-y-0 start-0 flex w-[60%] max-w-[420px] flex-col items-start justify-center gap-[16px] ps-(--space-fluid-container)">
          <NewsletterMark />
          <p className="font-alexandria text-[clamp(19px,2vw,24.75px)] leading-[1.4] font-bold text-white">
            {t("banner.title")}
          </p>
        </div>
      </div>

      <div className="mt-(--space-fluid-xl) flex flex-col gap-[42px] font-alexandria text-[clamp(12.5px,1vw,13.5px)] leading-[1.6] text-grey-primary">
        {leadParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-(--space-fluid-xl) flex flex-col gap-[clamp(32px,4vw,55px)] pb-(--space-fluid-xl)">
        {sections.map((section) => (
          <BlogSectionBlock key={section.heading} section={section} />
        ))}
      </div>
    </article>
  );
}
