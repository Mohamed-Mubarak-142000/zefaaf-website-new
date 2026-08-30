"use client";

import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useCallback, useLayoutEffect, useRef } from "react";

type AnimatedHeroTitleProps = {
  children: string;
  className?: string;
};

const WORD_DELAY = 0.22;

export function AnimatedHeroTitle({ children, className }: AnimatedHeroTitleProps) {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const reduceMotion = useReducedMotion();
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
    if (!rootRef.current || reduceMotion) return;

    // Start audio immediately where the browser's autoplay policy allows it.
    // Browsers that block audible autoplay will keep the click/keyboard fallback below.
    audioContextRef.current ??= new AudioContext();
    void audioContextRef.current.resume().catch(() => undefined);

    const words = rootRef.current.querySelectorAll<HTMLElement>("[data-hero-word]");
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 0.25 });

      gsap.set(words, { autoAlpha: 0 });
      words.forEach((word, index) => {
        const revealAt = index * WORD_DELAY;

        timeline.call(playTick, [], revealAt).to(
          word,
          { autoAlpha: 1, duration: 0.01, ease: "none" },
          revealAt,
        );
      });

    }, rootRef);

    return () => {
      context.revert();
      void audioContextRef.current?.close();
      audioContextRef.current = null;
    };
  }, [children, playTick, reduceMotion]);

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
