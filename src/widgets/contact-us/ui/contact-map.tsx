import Image from "next/image";
import { useTranslations } from "next-intl";

export function ContactMap() {
  const t = useTranslations("contactUs");

  return (
    <section className="mx-auto mt-(--space-fluid-xl) w-full max-w-[1600px] px-(--space-fluid-container)">
      <div className="relative h-[clamp(220px,25vw,360px)] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src="/images/contact/map.png"
          alt={t("mapAlt")}
          fill
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
