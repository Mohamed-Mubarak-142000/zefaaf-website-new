"use client";

import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";

interface FieldShellProps {
  label: string;
  htmlFor?: string;
  className?: string;
  error?: string;
  children: React.ReactNode;
}

function FieldShell({ label, htmlFor, className, error, children }: FieldShellProps) {
  return (
    <div className={cn("flex min-w-0 flex-1 flex-col gap-(--space-fluid-xs)", className)}>
      <Label htmlFor={htmlFor} className="font-alexandria text-(length:--text-fluid-nav) font-normal text-foreground">
        {label}
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
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
  className?: string;
}) {
  return (
    <FieldShell label={label} htmlFor={id} error={error} className={className}>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
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
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  className?: string;
}) {
  return (
    <FieldShell label={label} htmlFor={id} className={className}>
      <Select value={value || undefined} onValueChange={onChange}>
        <SelectTrigger id={id}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldShell>
  );
}

export function TextareaField({
  id,
  label,
  value,
  onChange,
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <FieldShell label={label} htmlFor={id} className={className}>
      <Textarea id={id} value={value} onChange={(event) => onChange(event.target.value)} />
    </FieldShell>
  );
}

export function PhoneField({
  id,
  label,
  value,
  onChange,
  placeholder,
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}) {
  return (
    <FieldShell label={label} htmlFor={id} className={className}>
      <div className="flex h-(--size-fluid-field-h) items-center gap-(--space-fluid-2xs) rounded-xl border border-input bg-white px-(--space-fluid-sm)">
        <div className="flex shrink-0 items-center gap-(--space-fluid-2xs)">
          <img
            src="/icons/marriage-request/flag-placeholder.png"
            alt=""
            className="size-(--size-fluid-icon-md) shrink-0 rounded-full object-cover"
          />
          <span className="font-alexandria text-(length:--text-fluid-nav) text-foreground">+244</span>
          <span aria-hidden className="h-(--size-fluid-icon-sm) w-px shrink-0 bg-border" />
        </div>
        <input
          id={id}
          type="tel"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent font-alexandria text-(length:--text-fluid-nav) text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
    </FieldShell>
  );
}
