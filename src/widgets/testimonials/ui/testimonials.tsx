import Image from "next/image";
import { useTranslations } from "next-intl";

type Testimonial = {
  quote: string;
  name: string;
  ageLabel: string;
};

const avatarClassNames = ["bg-chart-2", "bg-chart-3/25", "bg-chart-4"] as const;

function Rating({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[2px]" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <Image
          key={index}
          src="/images/star.svg"
          alt=""
          width={14}
          height={14}
          unoptimized
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const t = useTranslations();
  const testimonials = t.raw("testimonials.items") as Testimonial[];
  const ratingLabel = t("testimonials.ratingLabel");

  return (
    <section
      aria-labelledby="testimonials-title"
      className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
    >
      <h2
        id="testimonials-title"
        className="font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.4] font-semibold text-foreground"
      >
        {t("testimonials.title")}
      </h2>

      <div id="testimonials-list" className="mt-[20px] grid gap-[20px] md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <article
            key={`${testimonial.name}-${index}`}
            className="flex min-h-[154px] flex-col rounded-[8px] border border-border bg-card p-[14px] text-card-foreground"
          >
            <Rating label={ratingLabel} />
            <p className="mt-[7px] font-alexandria text-[10.5px] leading-[1.4] text-card-foreground">
              {testimonial.quote}
            </p>

            <div className="mt-auto flex items-center gap-[10px] pt-[14px]">
              <div
                aria-hidden="true"
                className={`flex size-[38px] shrink-0 items-center justify-center rounded-full font-alexandria text-[12px] leading-none text-card-foreground ${
                  avatarClassNames[index % avatarClassNames.length]
                }`}
              >
                {[...testimonial.name][0]}
              </div>
              <div>
                <h3 className="font-alexandria text-[16px] leading-[1.4] font-extrabold text-card-foreground">
                  {testimonial.name}
                </h3>
                <p className="font-alexandria text-[14px] leading-[1.6] text-muted-foreground">
                  {testimonial.ageLabel}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
