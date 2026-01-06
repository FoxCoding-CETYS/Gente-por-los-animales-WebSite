"use client";

import { Card, CardContent } from "@/components/ui/card";
import { colorClasses } from "@/lib/colors";
import { locationToLink, shortLocation } from "@/lib/format-location";
import { t, cn } from "@/lib/typography";

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
        "overflow-hidden shadow-lg min-h-[30rem] max-h-[30rem]",
        colorClasses.background.primary,
        className
      )}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={alt}
        className="w-full h-38 md:h-48 object-cover"
      />
      <CardContent className="p-6 space-y-4">
        <div className="flex flex-col md:flex-row items-start gap-5 md:gap-1 md:items-center justify-between">
          <time
            className={cn(
              "inline-block rounded-full px-2 py-1 font-semibold",
              colorClasses.background.accent,
              colorClasses.text.black,
              t.bodySm
            )}
          >
            {date}
          </time>
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
