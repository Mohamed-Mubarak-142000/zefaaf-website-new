import Image from "next/image";

const testimonials = [
  {
    quote:
      "A comfortable and respectful experience. I felt that the platform genuinely helps you find a suitable partner in a serious and Sharia-compliant way.",
    name: "Ahmed",
    age: 29,
    initial: "A",
    avatarClassName: "bg-light-blue",
  },
  {
    quote:
      "I loved how clear and organized every step was. The compatibility score also helped me focus on profiles that share my values and interests.",
    name: "Sara",
    age: 29,
    initial: "S",
    avatarClassName: "bg-[#DCD6FA]",
  },
  {
    quote:
      "It’s different from traditional dating apps. The purpose is clear from the beginning, building a serious relationship with marriage in mind.",
    name: "Ahmed",
    age: 29,
    initial: "A",
    avatarClassName: "bg-orange",
  },
] as const;

function Rating() {
  return (
    <div className="flex items-center gap-[2px]" aria-label="5 out of 5 stars">
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
  return (
    <section
      aria-labelledby="testimonials-title"
      className="section-gap mx-auto w-full max-w-[1600px] px-(--space-fluid-container)"
    >
      <div className="flex items-end justify-between gap-6">
        <h2
          id="testimonials-title"
          className="font-alexandria text-[clamp(26px,2.5vw,36px)] leading-[1.4] font-semibold text-black-primary"
        >
          What Our Members Are Saying
        </h2>

        <a
          href="#testimonials-list"
          className="mb-[7px] flex shrink-0 items-center gap-[10px] font-alexandria text-[12px] leading-[1.5] text-brand transition-opacity hover:opacity-70 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <span>Explore more</span>
          <Image
            src="/images/arrow-right-01.svg"
            alt=""
            width={14}
            height={14}
            unoptimized
            className="rtl:rotate-180"
          />
        </a>
      </div>

      <div id="testimonials-list" className="mt-[20px] grid gap-[20px] md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <article
            key={`${testimonial.name}-${index}`}
            className="flex min-h-[154px] flex-col rounded-[8px] border border-stroke-1 bg-white p-[14px]"
          >
            <Rating />
            <p className="mt-[7px] font-alexandria text-[10.5px] leading-[1.4] text-black-primary">
              {testimonial.quote}
            </p>

            <div className="mt-auto flex items-center gap-[10px] pt-[14px]">
              <div
                aria-hidden="true"
                className={`flex size-[38px] shrink-0 items-center justify-center rounded-full font-alexandria text-[12px] leading-none text-black-primary ${testimonial.avatarClassName}`}
              >
                {testimonial.initial}
              </div>
              <div>
                <h3 className="font-alexandria text-[16px] leading-[1.4] font-extrabold text-black-primary">
                  {testimonial.name}
                </h3>
                <p className="font-alexandria text-[12px] leading-[1.6] text-black-primary">
                  {testimonial.age} age
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
