"use client";

import { Card, CardContent } from "@/components/ui/card";
import { t, cn } from "@/lib/typography";

type ImpactStatProps = {
  icon: React.ReactNode;
  accentBgClass: string;
  title: string;
  text: string;
};

export function ImpactStat({
  icon,
  accentBgClass,
  title,
  text,
}: ImpactStatProps) {
  return (
    <Card className="shadow-lg bg-white">
      <CardContent className="p-6 text-center space-y-4">
        <div
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mx-auto",
            accentBgClass
          )}
        >
          {icon}
        </div>
        <h3 className={cn("font-bold", t.subtitle)}>{title}</h3>
        <p className={cn(t.bodySm, "text-muted-foreground")}>{text}</p>
      </CardContent>
    </Card>
  );
}
