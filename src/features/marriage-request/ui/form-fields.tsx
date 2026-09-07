"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";

import { cn } from "@/shared/lib/utils";
import { matchesSearch } from "@/shared/lib/option-search";
import { countryFlagEmoji } from "@/shared/config";
import type { Country } from "@/shared/api";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { SearchField } from "@/shared/ui/search-field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/shared/ui/dialog";

interface FieldShellProps {
  label: string;
  htmlFor?: string;
  className?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

type SelectOption = string | { value: string; label: string; flagUrl?: string; isoCode?: string };

type NormalizedOption = Exclude<SelectOption, string>;

// The lookups run from four entries (dowry, gold) to a couple of hundred
// (countries, nationalities). A filter box on a four-item list is noise, so it
// only appears once scrolling is the alternative.
const SEARCH_MIN_OPTIONS = 8;

function normalizeOptions(options: readonly SelectOption[]): NormalizedOption[] {
  return options.map((option) => (typeof option === "string" ? { value: option, label: option } : option));
}

// The rest of this file writes its two non-lookup strings the same way: Rewaq
// carries no translation for them, and the marriage form is only reachable in
// Arabic or English.
function useFieldLabels() {
  const isArabic = useLocale().startsWith("ar");

  return {
    isArabic,
    search: isArabic ? "ابحث…" : "Search…",
    noResults: isArabic ? "لا توجد نتائج" : "No results",
    selectAll: isArabic ? "تحديد الكل" : "Select all",
    close: isArabic ? "إغلاق" : "Close",
    done: isArabic ? "تم" : "Done",
  };
}

/**
 * Holds the query for one open dropdown. `visible` is what the list should
 * render, `searchable` whether the box is worth showing at all, and `reset` is
 * called when the dropdown closes so the next open starts on the full list
 * rather than on the last visitor's leftover filter.
 */
function useOptionSearch(options: readonly SelectOption[]) {
  const [query, setQuery] = React.useState("");
  const normalized = React.useMemo(() => normalizeOptions(options), [options]);
  const visible = React.useMemo(
    () => (query ? normalized.filter((option) => matchesSearch(option.label, query)) : normalized),
    [normalized, query],
  );

  return {
    query,
    setQuery,
    normalized,
    visible,
    searchable: normalized.length >= SEARCH_MIN_OPTIONS,
    reset: () => setQuery(""),
  };
}

function OptionFlag({ option }: { option: Exclude<SelectOption, string> }) {
  if (option.flagUrl) {
    return <Image unoptimized src={option.flagUrl} alt="" width={22} height={22} className="size-[22px] shrink-0 rounded-full object-cover" />;
  }
  if (option.isoCode) {
    return <span aria-hidden className="w-[22px] shrink-0 text-lg leading-none">{countryFlagEmoji(option.isoCode)}</span>;
  }
  return null;
}

function FieldShell({ label, htmlFor, className, error, required, children }: FieldShellProps) {
  return (
    <div className={cn("flex min-w-0 flex-1 flex-col gap-(--space-fluid-xs)", className)}>
      <Label htmlFor={htmlFor} className="gap-0 font-alexandria text-(length:--text-fluid-nav) font-normal text-foreground">
        {label}{required && <span aria-hidden className="ms-0.5 text-lg leading-none text-destructive">*</span>}
      </Label>
      {children}
      {error && <p className="font-alexandria text-(length:--text-fluid-xs) text-destructive">{error}</p>}
    </div>
  );
}

export function TextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  className,
  placeholder,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <FieldShell label={label} htmlFor={id} error={error} required={required} className={className}>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder ?? label}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-required={required}
        className="h-(--size-fluid-field-h) rounded-xl"
      />
    </FieldShell>
  );
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  className,
  disabled = false,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly SelectOption[];
  className?: string;
  disabled?: boolean;
  required?: boolean;
}) {
  const labels = useFieldLabels();
  const { query, setQuery, normalized, visible, searchable, reset } = useOptionSearch(options);
  const selectedOption = normalized.find((option) => option.value === value);

  return (
    <FieldShell label={label} htmlFor={id} required={required} className={className}>
      {/* The trigger keeps showing the picked option while the list is
          filtered, so a query that hides it never blanks the field. */}
      <Select
        value={value || undefined}
        onValueChange={onChange}
        onOpenChange={(open) => !open && reset()}
        disabled={disabled}
      >
        <SelectTrigger id={id} aria-required={required}>
          {selectedOption ? (
            <span className="flex min-w-0 flex-1 items-center justify-start gap-2 text-start">
              <OptionFlag option={selectedOption} />
              <span className="truncate">{selectedOption.label}</span>
            </span>
          ) : <SelectValue placeholder={label} />}
        </SelectTrigger>
        <SelectContent
          search={searchable && (
            <SearchField
              value={query}
              placeholder={labels.search}
              aria-label={`${labels.search} ${label}`}
              onChange={(event) => setQuery(event.target.value)}
            />
          )}
        >
          {visible.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="flex min-w-0 items-center gap-2">
                <OptionFlag option={item} />
                <span className="truncate">{item.label}</span>
              </span>
            </SelectItem>
          ))}
          {visible.length === 0 && (
            <p className="px-3 py-6 text-center font-alexandria text-sm text-muted-foreground">{labels.noResults}</p>
          )}
        </SelectContent>
      </Select>
    </FieldShell>
  );
}

export function MultiSelectField({
  id,
  label,
  values,
  onChange,
  options,
  className,
  required = false,
}: {
  id: string;
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  options: readonly SelectOption[];
  className?: string;
  required?: boolean;
}) {
  const labels = useFieldLabels();
  const [allOptionsOpen, setAllOptionsOpen] = React.useState(false);
  const menuSearch = useOptionSearch(options);
  // The dialog keeps its own query: it is a separate list on screen, and the
  // menu it was opened from has already closed and cleared.
  const dialogSearch = useOptionSearch(options);
  const normalizedOptions = menuSearch.normalized;
  const selected = normalizedOptions.filter((option) => values.includes(option.value));
  const allSelected = normalizedOptions.length > 0 && normalizedOptions.every((option) => values.includes(option.value));

  // "Select all" always means every option, never just the filtered ones — a
  // half-typed query shouldn't quietly decide what "all" covers.
  function toggleAll(checked: boolean) {
    onChange(checked ? normalizedOptions.map((option) => option.value) : []);
  }

  function toggleOption(optionValue: string, checked: boolean) {
    onChange(checked ? [...values, optionValue] : values.filter((value) => value !== optionValue));
  }

  return (
    <FieldShell label={label} htmlFor={id} required={required} className={className}>
      <div className="flex h-(--size-fluid-field-h) w-full items-center rounded-xl border border-input bg-white px-(--space-fluid-sm) focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50">
        <DropdownMenu onOpenChange={(open) => !open && menuSearch.reset()}>
          <DropdownMenuTrigger asChild>
            <button id={id} type="button" className="flex min-w-0 flex-1 items-center gap-2 text-(length:--text-fluid-nav) outline-none">
              {selected.length ? (
                <span className="flex min-w-0 flex-1 items-center gap-1 overflow-hidden text-start">
                  {selected.slice(0, 2).map((option) => (
                    <span key={option.value} className="flex min-w-0 items-center gap-1 rounded-md bg-brand/10 px-2 py-1 text-brand">
                      <OptionFlag option={option} />
                      <span className="truncate">{option.label}</span>
                    </span>
                  ))}
                </span>
              ) : <span className="truncate text-muted-foreground">{label}</span>}
              <ChevronDown className="size-(--size-fluid-icon-xs) shrink-0 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          {/* The search box is pinned and only the options below it scroll, so
              the content stops scrolling as a whole and the list gets its own
              overflow. */}
          <DropdownMenuContent align="start" className="z-[60] flex max-h-72 min-w-[var(--radix-dropdown-menu-trigger-width)] flex-col overflow-hidden p-0">
            {menuSearch.searchable && (
              <SearchField
                value={menuSearch.query}
                placeholder={labels.search}
                aria-label={`${labels.search} ${label}`}
                onChange={(event) => menuSearch.setQuery(event.target.value)}
              />
            )}
            <div className="min-h-0 flex-1 overflow-y-auto p-1">
              <DropdownMenuCheckboxItem checked={allSelected} onCheckedChange={toggleAll} onSelect={(event) => event.preventDefault()} className="py-2 font-medium">
                {labels.selectAll}
              </DropdownMenuCheckboxItem>
              {menuSearch.visible.map((option) => (
                <DropdownMenuCheckboxItem
                  key={option.value}
                  checked={values.includes(option.value)}
                  onCheckedChange={(checked) => toggleOption(option.value, checked)}
                  onSelect={(event) => event.preventDefault()}
                  className="py-2"
                >
                  <OptionFlag option={option} />
                  <span className="truncate">{option.label}</span>
                </DropdownMenuCheckboxItem>
              ))}
              {menuSearch.visible.length === 0 && (
                <p className="px-3 py-6 text-center font-alexandria text-sm text-muted-foreground">{labels.noResults}</p>
              )}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        {selected.length > 2 && (
          <button type="button" onClick={() => setAllOptionsOpen(true)} className="ms-2 shrink-0 border-s border-border ps-2 font-alexandria text-xs font-medium text-brand hover:underline">
            {labels.isArabic ? `المزيد (${selected.length - 2})` : `More (${selected.length - 2})`}
          </button>
        )}
      </div>

      <Dialog open={allOptionsOpen} onOpenChange={(open) => { setAllOptionsOpen(open); if (!open) dialogSearch.reset(); }}>
        <DialogContent className="w-[min(92vw,34rem)]" closeLabel={labels.close}>
          <DialogHeader><DialogTitle>{label}</DialogTitle></DialogHeader>
          <div className="max-h-[60vh] overflow-y-auto p-4">
            {dialogSearch.searchable && (
              <SearchField
                value={dialogSearch.query}
                placeholder={labels.search}
                aria-label={`${labels.search} ${label}`}
                autoFocus={false}
                className="h-9"
                onChange={(event) => dialogSearch.setQuery(event.target.value)}
              />
            )}
            <label className="mb-2 flex cursor-pointer items-center gap-3 rounded-lg bg-muted px-3 py-2 font-alexandria text-sm font-medium">
              <input type="checkbox" checked={allSelected} onChange={(event) => toggleAll(event.target.checked)} className="size-4 accent-brand" />
              {labels.selectAll}
            </label>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {dialogSearch.visible.map((option) => (
                <label key={option.value} className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-alexandria text-sm hover:bg-muted">
                  <input type="checkbox" checked={values.includes(option.value)} onChange={(event) => toggleOption(option.value, event.target.checked)} className="size-4 shrink-0 accent-brand" />
                  <OptionFlag option={option} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            {dialogSearch.visible.length === 0 && (
              <p className="px-3 py-6 text-center font-alexandria text-sm text-muted-foreground">{labels.noResults}</p>
            )}
          </div>
          <DialogFooter className="justify-end">
            <Button type="button" onClick={() => setAllOptionsOpen(false)}>{labels.done}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </FieldShell>
  );
}

export function TextareaField({
  id,
  label,
  value,
  onChange,
  className,
  placeholder,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <FieldShell label={label} htmlFor={id} required={required} className={className}>
      <Textarea id={id} value={value} placeholder={placeholder ?? label} aria-required={required} onChange={(event) => onChange(event.target.value)} />
    </FieldShell>
  );
}

export function PhoneField({
  id,
  label,
  value,
  onChange,
  placeholder,
  countries,
  countryId,
  onCountryChange,
  className,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  countries: Country[];
  countryId: string;
  onCountryChange: (countryId: string) => void;
  className?: string;
  required?: boolean;
}) {
  const labels = useFieldLabels();
  const [query, setQuery] = React.useState("");
  const selectedCountry = countries.find((country) => String(country.id) === countryId);
  const dialable = countries.filter((country) => country.isoCode && country.dialingCode);
  // The name or the dialing code both find a country here, so a visitor who
  // knows their own "+20" doesn't have to remember what the list calls Egypt.
  const visibleCountries = query
    ? dialable.filter((country) => matchesSearch(`${country.name} +${country.dialingCode}`, query))
    : dialable;

  return (
    <FieldShell label={label} htmlFor={id} required={required} className={className}>
      <div className="flex h-(--size-fluid-field-h) items-center gap-(--space-fluid-2xs) rounded-xl border border-input bg-white px-(--space-fluid-sm)">
        <Select
          value={countryId || undefined}
          onValueChange={onCountryChange}
          onOpenChange={(open) => !open && setQuery("")}
        >
          <SelectTrigger
            aria-label={label}
            className="h-8 w-auto min-w-[88px] shrink-0 border-0 bg-transparent px-1 shadow-none focus-visible:ring-0 [&>span]:!flex [&>span]:items-center"
          >
            {selectedCountry ? (
              <span className="flex items-center gap-(--space-fluid-2xs) whitespace-nowrap">
                {selectedCountry.flagUrl ? (
                  <Image unoptimized src={selectedCountry.flagUrl} alt="" width={22} height={22} className="size-[22px] shrink-0 rounded-full object-cover" />
                ) : (
                  <span aria-hidden className="text-lg leading-none">{countryFlagEmoji(selectedCountry.isoCode)}</span>
                )}
                <span dir="ltr" className="font-alexandria text-(length:--text-fluid-nav) text-foreground">+{selectedCountry.dialingCode}</span>
              </span>
            ) : <SelectValue placeholder="+" />}
          </SelectTrigger>
          <SelectContent
            className="max-h-72 min-w-[240px] rounded-xl"
            search={dialable.length >= SEARCH_MIN_OPTIONS && (
              <SearchField
                value={query}
                placeholder={labels.search}
                aria-label={`${labels.search} ${label}`}
                onChange={(event) => setQuery(event.target.value)}
              />
            )}
          >
            {visibleCountries.map((country) => (
              <SelectItem key={country.id} value={String(country.id)} className="rounded-lg py-2.5">
                <span className="flex w-full items-center gap-2">
                  {country.flagUrl ? (
                    <Image unoptimized src={country.flagUrl} alt="" width={22} height={22} className="size-[22px] shrink-0 rounded-full object-cover" />
                  ) : (
                    <span aria-hidden className="text-lg leading-none">{countryFlagEmoji(country.isoCode)}</span>
                  )}
                  <span className="flex-1">{country.name}</span>
                  <span dir="ltr">+{country.dialingCode}</span>
                </span>
              </SelectItem>
            ))}
            {visibleCountries.length === 0 && (
              <p className="px-3 py-6 text-center font-alexandria text-sm text-muted-foreground">{labels.noResults}</p>
            )}
          </SelectContent>
        </Select>
        <span aria-hidden className="h-(--size-fluid-icon-sm) w-px shrink-0 bg-border" />
        <input
          id={id}
          type="tel"
          value={value}
          aria-required={required}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent font-alexandria text-(length:--text-fluid-nav) text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
    </FieldShell>
  );
}
