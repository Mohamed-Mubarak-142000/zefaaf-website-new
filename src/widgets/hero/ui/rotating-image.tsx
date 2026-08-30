"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

type RotatingImageProps = {
  sources: readonly string[];
  initialIndex?: number;
  interval?: number;
  sizes: string;
  className?: string;
  imageStyle?: CSSProperties;
  preload?: boolean;
};

export function RotatingImage({
  sources,
  initialIndex = 0,
  interval = 8000,
  sizes,
  className,
  imageStyle,
  preload = false,
}: RotatingImageProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex % sources.length);

  useEffect(() => {
    if (sources.length < 2) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % sources.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, sources.length]);

  return sources.map((src, index) => (
    <Image
      key={src}
      src={src}
      alt=""
      fill
      sizes={sizes}
      preload={preload && index === initialIndex}
      aria-hidden={index !== currentIndex}
      className={`${className ?? ""} transition-opacity duration-[2400ms] ease-in-out motion-reduce:transition-none ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
      style={imageStyle}
    />
  ));
}
