"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { completeSplashScreen } from "@/shared/lib/splash-screen-state";
import { Logo } from "@/shared/ui/logo";

const DISPLAY_DURATION = 2200;

export function SplashScreen() {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(
      () => setIsVisible(false),
      prefersReducedMotion ? 500 : DISPLAY_DURATION,
    );

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <AnimatePresence onExitComplete={completeSplashScreen}>
      {isVisible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#110b12]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-2%" }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(176,40,152,0.24),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(227,171,114,0.12),transparent_28%)]" />

          <motion.div
            className="absolute size-[min(72vw,32rem)] rounded-full border border-white/[0.06]"
            initial={{ scale: 0.72, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          />
          <motion.div
            className="absolute size-[min(54vw,24rem)] rounded-full border border-[#e3ab72]/10"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
          />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.65, rotate: -8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo className="w-14 sm:w-[4.5rem]" />
            </motion.div>

            <div className="mt-7 overflow-hidden">
              <motion.p
                className="font-alexandria text-lg font-medium tracking-[0.55em] text-white sm:text-xl"
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                ZEFAAF
              </motion.p>
            </div>

            <motion.div
              className="mt-6 h-px w-28 overflow-hidden bg-white/10 sm:w-36"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-[#e3ab72] via-[#ffc643] to-[#f668d1]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.25, delay: 0.65, ease: [0.65, 0, 0.35, 1] }}
              />
            </motion.div>
          </div>

          <motion.p
            className="absolute bottom-8 max-w-[min(88vw,26rem)] px-4 text-center font-almarai text-lg leading-[1.7] font-bold whitespace-pre-line text-white/60 sm:bottom-10 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {t("hero.title")}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
