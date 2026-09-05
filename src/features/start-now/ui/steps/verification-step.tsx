import type { StartNowCopy } from "../../model/copy";

export function VerificationStep({ copy }: { copy: StartNowCopy["verification"] }) {
  return (
    <div className="flex flex-col items-center gap-3 p-8 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-brand/10 text-2xl text-brand">✓</span>
      <p className="font-alexandria text-lg font-semibold">{copy.heading}</p>
      <p className="max-w-md font-alexandria text-sm text-muted-foreground">{copy.description}</p>
    </div>
  );
}
