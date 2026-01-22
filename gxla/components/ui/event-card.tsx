"use client";

import { Card, CardContent } from "@/components/ui/card";
import { colorClasses } from "@/lib/colors";
import { locationToLink, shortLocation } from "@/lib/format-location";
import { t, cn } from "@/lib/typography";
import { MapPinned, Calendar } from "lucide-react";

interface EventCardProps {
  image: string;
  date: string;
  location: string;
  title: string;
  description: string;
  alt: string;
  className?: string;
}

export function EventCard({
  image,
  date,
  location,
  title,
  description,
  alt,
  className,
}: EventCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden shadow-lg",
        colorClasses.background.primary,
        className,
      )}
    >
      <CardContent className="p-6 space-y-4 w-full">
        <time
          className={cn(
            "inline-block rounded-full px-2 py-1 font-semibold w-full text-center",
            colorClasses.background.accent,
            colorClasses.text.black,
            t.bodySm,
          )}
        >
          {date}
        </time>
        <div className="flex gap-4 items-center">
          <MapPinned className="min-h-5 min-w-8" />
          <span className={cn(colorClasses.text.secondary, t.bodySm)}>
            <a
              href={locationToLink(location)}
              target="_blank"
              rel="noopener noreferrer"
              className={
                (cn("underline hover:text-primary"),
                location == "Ubicación por confirmar"
                  ? "no-underline"
                  : "underline hover:text-primary")
              }
            >
              {shortLocation(location)}
            </a>
          </span>
        </div>
        <h3 className={cn("font-bold", colorClasses.text.primary, t.subtitle)}>
          {title}
        </h3>
        <p className={cn("mt-auto", colorClasses.text.secondary, t.bodySm)}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
