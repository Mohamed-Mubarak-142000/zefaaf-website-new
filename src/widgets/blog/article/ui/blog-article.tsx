import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Alert } from "@/shared/ui/alert";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import type { SeoBlog } from "@/shared/api";

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

export function BlogArticle({ blog, error }: { blog?: SeoBlog | null; error?: boolean }) {
  const t = useTranslations("blogDetail");
  const locale = useLocale();
  const isArabic = locale.startsWith("ar");

  if (!blog) {
    return (
      <article className="mx-auto w-full max-w-[1600px] px-(--space-fluid-container) py-(--space-fluid-lg)">
        <Alert>
          {error
            ? (isArabic ? "تعذر تحميل هذا المقال." : "Could not load this article.")
            : (isArabic ? "هذا المقال غير موجود." : "This article was not found.")}
        </Alert>
      </article>
    );
  }

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
          {blog.publishedAt ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(blog.publishedAt)) : t("date")}
        </span>

        <h1 className="font-alexandria text-[clamp(24px,4vw,36px)] leading-[1.4] font-semibold text-black-primary">
          {blog.title}
        </h1>

        <p className="font-alexandria text-[clamp(14px,1.1vw,16px)] leading-[1.6] text-grey-primary">
          {blog.description ?? t("intro")}
        </p>
      </header>

      <div className="relative mt-(--space-fluid-lg) h-[clamp(220px,26vw,384px)] w-full overflow-hidden rounded-[9px] bg-[#22344c]">
        <Image
          src={blog.featuredImage ?? "/images/blog/tourism-guide-bosnia.jpg"}
          alt={blog.featuredImageAlt ?? t("banner.imageAlt")}
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

      {blog.content && (
        <div className="mt-(--space-fluid-xl) flex flex-col gap-[42px] pb-(--space-fluid-xl) whitespace-pre-wrap font-alexandria text-[clamp(12.5px,1vw,13.5px)] leading-[1.8] text-grey-primary">
          <p>{blog.content}</p>
        </div>
      )}
    </article>
  );
}
