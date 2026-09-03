import { ChevronDownIcon } from "lucide-react";

import { COUNTRIES, countryFlagEmoji } from "@/shared/config";
import { cn } from "@/shared/lib/utils";

import type { DetailsFormValues } from "../../model/types";
import type { StartNowCopy } from "../../model/copy";

const fieldClassName =
  "h-10 w-full rounded-xl border border-[#e3e3e3] bg-white px-4 text-sm text-[#393a3b] outline-none placeholder:text-[#757575] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

const selectClassName = cn(fieldClassName, "appearance-none pe-9");

function SelectChevron() {
  return (
    <ChevronDownIcon className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-[#393a3b]" />
  );
}

export function DetailsStep({
  copy,
  values,
  onChange,
}: {
  copy: StartNowCopy["details"];
  values: DetailsFormValues;
  onChange: (patch: Partial<DetailsFormValues>) => void;
}) {
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
        <div className="relative">
          <select
            id="start-now-country"
            className={selectClassName}
            value={values.countryIso2}
            onChange={(event) => onChange({ countryIso2: event.target.value })}
          >
            <option value="" disabled>
              {copy.countryPlaceholder}
            </option>
            {COUNTRIES.map((country) => (
              <option key={country.iso2} value={country.iso2}>
                {countryFlagEmoji(country.iso2)} {country.name}
              </option>
            ))}
          </select>
          <SelectChevron />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="start-now-gender" className="font-alexandria text-sm text-[#393a3b]">
          {copy.genderLabel}
        </label>
        <div className="relative">
          <select
            id="start-now-gender"
            className={selectClassName}
            value={values.gender}
            onChange={(event) => onChange({ gender: event.target.value as DetailsFormValues["gender"] })}
          >
            <option value="" disabled>
              {copy.genderPlaceholder}
            </option>
            <option value="female">{copy.genderFemale}</option>
            <option value="male">{copy.genderMale}</option>
          </select>
          <SelectChevron />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="start-now-phone" className="font-alexandria text-[13.5px] text-[#202022]">
          {copy.phoneLabel}
        </label>
        <div className="flex h-10 w-full items-center gap-3 rounded-xl border border-[#e3e3e3] bg-white ps-4 pe-3 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
          <div className="relative shrink-0">
            <select
              aria-label={copy.phoneLabel}
              className="appearance-none bg-transparent pe-5 font-alexandria text-base text-black-primary outline-none"
              value={values.phoneDialIso2}
              onChange={(event) => onChange({ phoneDialIso2: event.target.value })}
            >
              {COUNTRIES.map((country) => (
                <option key={country.iso2} value={country.iso2}>
                  {countryFlagEmoji(country.iso2)} +{country.dialCode}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute end-0 top-1/2 size-3.5 -translate-y-1/2 text-[#393a3b]" />
          </div>
          <span className="h-4 w-px shrink-0 bg-[#e3e3e3]" aria-hidden />
          <input
            id="start-now-phone"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            placeholder={copy.phonePlaceholder}
            className="h-full w-full bg-transparent font-alexandria text-base text-[#393a3b] outline-none placeholder:text-[#393a3b]"
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
          {copy.agreePrefix} <span className="underline">{copy.agreeLink}</span>
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
