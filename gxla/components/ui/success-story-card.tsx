"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { colorClasses } from "@/lib/colors";
import { t, cn } from "@/lib/typography";

interface SuccessStoryCardProps {
  image?: string;
  petName: string;
  adoptedBy: string;
  story: string;
  alt?: string;
  className?: string;

  avatarClassName?: string;
  roundAvatar?: boolean;
}

export function SuccessStoryCard({
  image,
  petName,
  adoptedBy,
  story,
  alt = "Pet profile photo",
  className,
  avatarClassName = "w-20 h-20 md:w-30 md:h-30",
  roundAvatar = true,
}: SuccessStoryCardProps) {
  return (
    <Card
      className={cn("shadow-lg", colorClasses.background.primary, className)}
    >
      <CardContent className="p-6 space-y-4">
        <figure className="flex items-center gap-4">
          <img
            src={image || "/placeholder.svg"}
            alt={alt}
            className={cn(
              "object-cover",
              avatarClassName,
              roundAvatar ? "rounded-full" : "rounded-xl"
            )}
          />
          <figcaption>
            <h3
              className={cn("font-bold", colorClasses.text.primary, t.subtitle)}
            >
              {petName}
            </h3>
            <p className={cn(colorClasses.text.secondary, t.bodySm)}>
              {adoptedBy}
            </p>
          </figcaption>
        </figure>

        <p className={cn(colorClasses.text.secondary, t.body)}>{story}</p>
      </CardContent>
    </Card>
  );
}
