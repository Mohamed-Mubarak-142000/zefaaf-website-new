"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CARD_VARIANTS: Variants = {
  hidden: (index: number) => {
    if (index === 2) {
      return {
        opacity: 0,
        scale: 0.45,
        y: 48,
        filter: "blur(10px)",
      };
    }

    return {
      opacity: 0,
      x: index < 2 ? -160 : 160,
      filter: "blur(5px)",
    };
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: Math.abs(index - 2) * 0.12,
      duration: index === 2 ? 1.25 : 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const SERVICE_MEDIA = [
  { image: "/images/services/image-606-5.webp", height: 376, decoration: null },
  { image: "/images/services/image-606-2.webp", height: 282, decoration: null },
  { image: "/images/services/image-606-3.webp", height: 225, decoration: null },
  {
    image: "/images/services/image-606-4.webp",
    height: 282,
    decoration: "/images/services/Group-shap.svg",
  },
  { image: "/images/services/image-606.webp", height: 376, decoration: null },
] as const;

export function Services() {
  const t = useTranslations();
  const items = t.raw("services.items") as { title: string; description: string }[];
  const SERVICES = SERVICE_MEDIA.map((media, index) => ({ ...media, ...items[index] }));

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="isolate mx-auto mt-[20px] w-full max-w-[1600px] overflow-x-clip px-(--space-fluid-container)"
    >
      <h2
        id="services-title"
        className="mb-12 font-alexandria text-[32px] leading-[1.5] font-bold text-foreground md:mb-14"
      >
        {t("nav.services")}
      </h2>

      <MotionConfig reducedMotion="user">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="flex items-end gap-[24px] overflow-x-auto pb-3 [perspective:1200px] [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:gap-[clamp(12px,1.5vw,24px)] lg:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {SERVICES.map((service, index) => (
            <motion.div
            key={service.title}
            custom={index}
            variants={CARD_VARIANTS}
            style={{ "--card-height": `${service.height}px` } as React.CSSProperties}
            className="relative h-(--card-height) w-[243px] shrink-0 will-change-transform lg:w-full lg:max-w-[243px] lg:justify-self-center"
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

            <article className="group relative z-10 h-full w-full overflow-hidden rounded-[9px] bg-[#030c17]">
              <Image
                src={service.image}
                alt=""
                fill
                quality={90}
                sizes="243px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-x-0 bottom-0 h-[148px] bg-linear-to-t from-[#030c17] via-[#14263d]/75 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-4 text-start text-white">
                <h3 className="font-alexandria text-[10.5px] leading-[1.5] font-semibold">
                  {service.title}
                </h3>
                <p className="mt-[9px] font-alexandria text-[10.5px] leading-[1.5] font-normal text-white/90">
                  {service.description}
                </p>
              </div>
            </article>
            </motion.div>
          ))}
        </motion.div>
      </MotionConfig>
    </section>
  );
}
