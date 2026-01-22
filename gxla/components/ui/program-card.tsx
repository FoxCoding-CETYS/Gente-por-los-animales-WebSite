"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";
import { colorClasses } from "@/lib/colors";
import { t, cn } from "@/lib/typography";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export function ProgramCard({ icon, title, className }: ProgramCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden shadow-lg",
        colorClasses.background.primary,
        className,
      )}
    >
      <CardContent className="p-6  sm:p-8 space-y-4 sm:space-y-5 text-center">
        <div
          className={`w-16 h-16 ${colorClasses.background.accent} rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          {icon}
        </div>
        <h3
          className={cn("font-bold", colorClasses.text.primary, t.sponsorName)}
        >
          {title}
        </h3>
      </CardContent>
    </Card>
  );
}
