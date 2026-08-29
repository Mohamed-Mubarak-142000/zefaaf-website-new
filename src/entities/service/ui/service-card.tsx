import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import type { Service } from "../model/types";

export function ServiceCard({ service }: { service: Service }) {
  const t = useTranslations();
  const Icon = service.icon;

  return (
    <Card>
      <CardHeader>
        <Icon className="size-6 text-primary" aria-hidden />
        <CardTitle>{t(service.titleKey)}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {t(service.descriptionKey)}
      </CardContent>
    </Card>
  );
}
