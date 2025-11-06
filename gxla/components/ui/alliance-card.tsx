"use client";

import { CustomCard } from "@/components/ui/custom-card";
import { t, cn } from "@/lib/typography";

type AllianceCardProps = {
  name: string;
  description: string;
  /** opcional: cambia el icono si quieres */
  iconSrc?: string;
  className?: string;
};

export function AllianceCard({
  name,
  description,
  iconSrc = "/Circle.png",
  className,
}: AllianceCardProps) {
  return (
    <CustomCard
      variant="vertical"
      size="md"
      icon={iconSrc}
      title={name}
      className={className}
    >
      <p className={cn(t.bodySm)}>{description}</p>
    </CustomCard>
  );
}
