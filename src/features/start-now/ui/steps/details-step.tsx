import Image from "next/image";
import { useLocale } from "next-intl";

import { COUNTRIES, countryFlagEmoji } from "@/shared/config";
import type { Country } from "@/shared/api";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

import type { DetailsFormValues } from "../../model/types";
import type { StartNowCopy } from "../../model/copy";

const fieldClassName =
  "h-10 w-full rounded-xl border border-[#e3e3e3] bg-white px-4 text-sm text-[#393a3b] outline-none placeholder:text-[#757575] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

type CountryOption = { iso2: string; name: string; dialCode: string; flagUrl?: string };

function CountryFlag({ country }: { country: CountryOption }) {
  return country.flagUrl ? (
    <Image src={country.flagUrl} alt="" width={20} height={20} className="size-5 rounded-full object-cover" />
  ) : (
    <span aria-hidden className="text-base leading-none">{countryFlagEmoji(country.iso2)}</span>
  );
}

export function DetailsStep({
  copy,
  values,
  onChange,
  countries,
}: {
  copy: StartNowCopy["details"];
  values: DetailsFormValues;
  onChange: (patch: Partial<DetailsFormValues>) => void;
  countries?: Country[];
}) {
  const locale = useLocale();
  const rawCountryOptions: CountryOption[] = countries?.length
    ? countries.map((country) => ({ iso2: country.isoCode, name: country.name, dialCode: country.dialingCode, flagUrl: country.flagUrl }))
    : COUNTRIES.map((country) => ({ ...country, flagUrl: undefined }));
  const countryOptions = Array.from(
    new Map(
      rawCountryOptions
        .filter((country) => country.iso2.trim())
        .map((country) => {
          const normalizedIso2 = country.iso2.trim().toUpperCase();
          return [normalizedIso2, { ...country, iso2: normalizedIso2 }] as const;
        }),
    ).values(),
  );
  const selectedCountry = countryOptions.find((country) => country.iso2 === values.countryIso2);
  const selectedDialCountry = countryOptions.find((country) => country.iso2 === values.phoneDialIso2);
  return (
    <div className="flex w-full flex-col gap-3 p-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="start-now-full-name" className="font-alexandria text-[13.5px] text-[#202022]">
          {copy.fullNameLabel}
        </label>
        <input
          id="start-now-full-name"
          name="fullName"
          autoComplete="name"
          className={fieldClassName}
          value={values.fullName}
          onChange={(event) => onChange({ fullName: event.target.value })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="start-now-email" className="font-alexandria text-[13.5px] text-[#202022]">
          {copy.emailLabel}
        </label>
        <input
          id="start-now-email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClassName}
          value={values.email}
          onChange={(event) => onChange({ email: event.target.value })}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="start-now-country" className="font-alexandria text-sm text-[#393a3b]">
          {copy.countryLabel}
        </label>
        <Select
          value={values.countryIso2 || undefined}
          onValueChange={(value) => onChange({ countryIso2: value, phoneDialIso2: value })}
        >
          <SelectTrigger id="start-now-country" className="h-10 w-full rounded-xl px-4 [&>span]:!flex [&>span]:items-center">
            {selectedCountry ? <span className="flex min-w-0 flex-1 flex-row items-center gap-2 whitespace-nowrap"><CountryFlag country={selectedCountry} /><span className="truncate">{selectedCountry.name}</span></span> : <SelectValue placeholder={copy.countryPlaceholder} />}
          </SelectTrigger>
          <SelectContent className="max-h-72 rounded-xl">
            {countryOptions.map((country) => (
              <SelectItem key={country.iso2} value={country.iso2} className="rounded-lg py-2.5">
                <span className="flex items-center gap-2"><CountryFlag country={country} />{country.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="start-now-phone" className="font-alexandria text-[13.5px] text-[#202022]">
          {copy.phoneLabel}
        </label>
        <div className="flex h-10 w-full items-center gap-3 rounded-xl border border-[#e3e3e3] bg-white ps-4 pe-3 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
          <Select value={values.phoneDialIso2} onValueChange={(value) => onChange({ phoneDialIso2: value })}>
            <SelectTrigger aria-label={copy.phoneLabel} className="h-8 w-auto min-w-[108px] border-0 bg-transparent px-1 shadow-none focus-visible:ring-0 [&>span]:!flex [&>span]:items-center">
              {selectedDialCountry && <span className="flex flex-row items-center gap-2 whitespace-nowrap"><CountryFlag country={selectedDialCountry} /><span dir="ltr">+{selectedDialCountry.dialCode}</span></span>}
            </SelectTrigger>
            <SelectContent className="max-h-72 min-w-[220px] rounded-xl">
              {countryOptions.map((country) => (
                <SelectItem key={country.iso2} value={country.iso2} className="rounded-lg py-2.5">
                  <span className="flex w-full items-center gap-2"><CountryFlag country={country} /><span className="flex-1">{country.name}</span><span dir="ltr">+{country.dialCode}</span></span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="h-4 w-px shrink-0 bg-[#e3e3e3]" aria-hidden />
          <input
            id="start-now-phone"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            placeholder={copy.phonePlaceholder}
            className="h-full w-full bg-transparent font-alexandria text-base text-[#393a3b] outline-none placeholder:text-[#393a3b]"
            style={{ direction: "inherit", textAlign: "start" }}
            value={values.phoneNumber}
            onChange={(event) => onChange({ phoneNumber: event.target.value })}
          />
        </div>
      </div>

      <label htmlFor="start-now-agree" className="flex items-center gap-3">
        <input
          id="start-now-agree"
          type="checkbox"
          className="size-[18px] shrink-0 rounded-[3px] border border-[#727272] accent-brand"
          checked={values.agreeToTerms}
          onChange={(event) => onChange({ agreeToTerms: event.target.checked })}
        />
        <span className="font-alexandria text-sm text-[#393a3b]">
          {copy.agreePrefix}{" "}
          <a
            href={`/${locale}/vip-terms`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            onClick={(event) => event.stopPropagation()}
          >
            {copy.agreeLink}
          </a>
        </span>
      </label>
    </div>
  );
}

export function isDetailsStepValid(values: DetailsFormValues): boolean {
  return (
    values.fullName.trim().length > 0 &&
    /^\S+@\S+\.\S+$/.test(values.email) &&
    values.countryIso2.length > 0 &&
    values.gender.length > 0 &&
    values.phoneNumber.trim().length > 0 &&
    values.agreeToTerms
  );
}
