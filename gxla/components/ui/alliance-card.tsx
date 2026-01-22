"use client";

import { CustomCard } from "@/components/ui/custom-card";
import { t, cn } from "@/lib/typography";
import { Handshake } from "lucide-react";

type AllianceCardProps = {
  name: string;
  description: string;
  className?: string;
};

export function AllianceCard({
  name,
  description,
  className,
}: AllianceCardProps) {
  return (
    <CustomCard
      variant="vertical"
      size="md"
      icon={
        <div className="bg-green-400 p-3 rounded-full">
          <Handshake className="w-10 h-10 mx-auto" color="black" />
        </div>
      }
      title={name}
      className={className}
    >
      <p className={cn(t.bodySm)}>{description}</p>
    </CustomCard>
  );
}
