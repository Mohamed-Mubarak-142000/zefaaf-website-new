let isComplete = false;
const listeners = new Set<() => void>();

export function getSplashScreenState() {
  return isComplete;
}

export function completeSplashScreen() {
  if (isComplete) return;

  isComplete = true;
  listeners.forEach((listener) => listener());
}

export function subscribeToSplashScreen(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
