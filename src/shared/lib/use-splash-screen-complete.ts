"use client";

import { useSyncExternalStore } from "react";

import {
  getSplashScreenState,
  subscribeToSplashScreen,
} from "./splash-screen-state";

export function useSplashScreenComplete() {
  return useSyncExternalStore(
    subscribeToSplashScreen,
    getSplashScreenState,
    () => false,
  );
}
