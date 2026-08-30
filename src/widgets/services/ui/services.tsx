import Image from "next/image";
import { useTranslations } from "next-intl";

const SERVICES = [
  {
    image: "/images/services/image-606-5.webp",
    height: 376,
    title: "ملتقى الزواج الإسلامي",
    description:
      "ملتقى الزواج الإسلامي فعاليات منظمة تجمع بين المسلمين الباحثين عن الزواج وعائلاتهم",
    decoration: null,
  },
  {
    image: "/images/services/image-606-2.webp",
    height: 282,
    title: "استمارة الزواج",
    description: "ابحث عن شريك حياتك المثالي من مختلف البلدان.",
    decoration: null,
  },
  {
    image: "/images/services/image-606-3.webp",
    height: 225,
    title: "البحث الشخصي VIP",
    description:
      "خدمة مخصصة يبحث فيها مستشارو زفاف عن شركاء حياة مناسبين",
    decoration: null,
  },
  {
    image: "/images/services/image-606-4.webp",
    height: 282,
    title: "مرافقة فريقنا في البوسنة",
    description:
      "برنامج موجه يرافق فيه فريق زفاف العملاء للقاء العائلات والزواج الجاد",
    decoration: "/images/services/Group-shap.svg",
  },
  {
    image: "/images/services/image-606.webp",
    height: 376,
    title: "لقاء أون لاين",
    description: "ابدأ بجلسة مع مستشار أسري لفهم شخصيتك واحتياجاتك",
    decoration: null,
  },
] as const;

export function Services() {
  const t = useTranslations("nav");

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="isolate mx-auto mt-[20px] w-full max-w-[1600px] px-(--space-fluid-container)"
    >
      <h2
        id="services-title"
        className="mb-12 font-alexandria text-[32px] leading-[1.5] font-bold text-foreground md:mb-14"
      >
        {t("services")}
      </h2>

      <div className="flex items-end gap-[24px] overflow-x-auto pb-3 [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:gap-[clamp(12px,1.5vw,24px)] lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            style={{ "--card-height": `${service.height}px` } as React.CSSProperties}
            className="relative h-(--card-height) w-[243px] shrink-0 lg:w-full lg:max-w-[243px] lg:justify-self-center"
          >
            {service.decoration && (
              <Image
                src={service.decoration}
                alt=""
                width={339}
                height={344}
                unoptimized
                className="pointer-events-none absolute bottom-[96px] left-[calc(50%+24px)] z-0 w-[339px] max-w-none -translate-x-1/2"
              />
            )}

            <article
              dir="rtl"
              className="group relative z-10 h-full w-full overflow-hidden rounded-[9px] bg-[#030c17]"
            >
              <Image
                src={service.image}
                alt=""
                fill
                quality={90}
                sizes="243px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-x-0 bottom-0 h-[148px] bg-linear-to-t from-[#030c17] via-[#14263d]/75 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-4 text-right text-white">
                <h3 className="font-alexandria text-[10.5px] leading-[1.5] font-semibold">
                  {service.title}
                </h3>
                <p className="mt-[9px] font-alexandria text-[10.5px] leading-[1.5] font-normal text-white/90">
                  {service.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
