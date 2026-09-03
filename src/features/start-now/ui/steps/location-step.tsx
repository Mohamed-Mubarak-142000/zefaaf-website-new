import Image from "next/image";

import type { StartNowCopy } from "../../model/copy";

export function LocationStep({ copy }: { copy: StartNowCopy["location"] }) {
  return (
    <div className="flex w-full flex-col items-center gap-4 p-4">
      <Image
        src="/icons/start-now/location-illustration.svg"
        alt=""
        width={122}
        height={91}
        className="h-auto w-[122px]"
      />
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="font-alexandria text-base font-medium text-black">{copy.heading}</p>
        <p className="max-w-[492px] font-alexandria text-sm text-[#393a3b]">{copy.description}</p>
      </div>
    </div>
  );
}
