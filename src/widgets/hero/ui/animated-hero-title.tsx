"use client";

import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useCallback, useLayoutEffect, useRef } from "react";

import { useSplashScreenComplete } from "@/shared/lib/use-splash-screen-complete";

type AnimatedHeroTitleProps = {
  children: string;
  className?: string;
};

const LETTER_DELAY = 0.14;

export function AnimatedHeroTitle({ children, className }: AnimatedHeroTitleProps) {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const reduceMotion = useReducedMotion();
  const splashScreenComplete = useSplashScreenComplete();
  const tokens = children.split(/(\s+)/);

  const playTick = useCallback(() => {
    const audioContext = audioContextRef.current;

    if (!audioContext || audioContext.state !== "running") return;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(1100, now);
    oscillator.frequency.exponentialRampToValueAtTime(650, now + 0.025);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.04);
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current || reduceMotion || !splashScreenComplete) return;

    // Start audio immediately where the browser's autoplay policy allows it.
    // Browsers that block audible autoplay will keep the click/keyboard fallback below.
    audioContextRef.current ??= new AudioContext();
    void audioContextRef.current.resume().catch(() => undefined);

    const words = rootRef.current.querySelectorAll<HTMLElement>("[data-hero-word]");
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 0.25 });
      const isRtl = getComputedStyle(rootRef.current!).direction === "rtl";
      let revealAt = 0;

      gsap.set(words, {
        clipPath: isRtl ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
      });
      words.forEach((word) => {
        const textNode = word.firstChild;
        const letters = Array.from(word.textContent ?? "");
        const wordWidth = word.getBoundingClientRect().width;
        let textOffset = 0;

        if (!textNode || wordWidth === 0) return;

        letters.forEach((letter, index) => {
          const range = document.createRange();
          textOffset += letter.length;
          range.setStart(textNode, 0);
          range.setEnd(textNode, textOffset);

          const revealedPercent = Math.min(
            100,
            (range.getBoundingClientRect().width / wordWidth) * 100,
          );
          const hiddenPercent = 100 - revealedPercent;
          const clipPath = isRtl
            ? `inset(0 0 0 ${hiddenPercent}%)`
            : `inset(0 ${hiddenPercent}% 0 0)`;
          const letterRevealAt = revealAt + index * LETTER_DELAY;

          timeline.call(playTick, [], letterRevealAt).set(
            word,
            { clipPath },
            letterRevealAt,
          );
        });

        revealAt += letters.length * LETTER_DELAY;

        if (letters.length > 0) {
          timeline.set(word, { clipPath: "inset(0 0 0 0)" }, revealAt);
        }
      });

    }, rootRef);

    return () => {
      context.revert();
      void audioContextRef.current?.close();
      audioContextRef.current = null;
    };
  }, [children, playTick, reduceMotion, splashScreenComplete]);

  return (
    <h1
      ref={rootRef}
      className={className}
      aria-label={children.replaceAll("\n", " ")}
    >
      {tokens.map((token, index) => {
        if (token === "\n") return <br key={`break-${index}`} />;

        if (/^\s+$/.test(token)) {
          return <span key={`space-${index}`}>{token}</span>;
        }

        return (
          <motion.span
            key={`${token}-${index}`}
            data-hero-word=""
            aria-hidden="true"
            className="inline-block"
          >
            {token}
          </motion.span>
        );
      })}
    </h1>
  );
}
