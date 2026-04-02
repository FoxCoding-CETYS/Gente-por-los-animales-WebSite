"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { colorClasses } from "@/lib/colors";
import { t, cn } from "@/lib/typography";
import { PortableText } from "@portabletext/react";
import { SanityImageObject } from "@sanity/image-url";
import { urlFor } from "@/sanity/sanityImageUrl";
import Link from "next/link";

interface SuccessStoryCardProps {
  image: SanityImageObject;
  title: string;
  story: any;
  alt?: string;
  className?: string;
  avatarClassName?: string;
  roundAvatar?: boolean;
}

const portableTextComponents = {
  marks: {
    link: ({ children, value }: any) => {
      const isExternal = value?.href?.startsWith("http");

      return (
        <a
          href={value?.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-blue-600 underline underline-offset-4 hover:text-blue-800 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

export function SuccessStoryCard({
  image,
  title,
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
            src={urlFor(image).width(300).height(300).url()}
            alt={alt}
            className={cn(
              "object-contain",
              avatarClassName,
              roundAvatar ? "rounded-full" : "rounded-xl",
            )}
          />
          <figcaption>
            <h3
              className={cn("font-bold", colorClasses.text.primary, t.subtitle)}
            >
              {title}
            </h3>
            <Link
              href="https://www.facebook.com/share/p/1ABLp9rUTC/"
              target="_blank"
            >
              <p
                className={cn(
                  t.bodySm,
                  "text-blue-600 underline underline-offset-4 hover:text-blue-800 transition-colors font-bold",
                )}
              >
                Ver Historia Completa
              </p>
            </Link>
          </figcaption>
        </figure>
        <div className={cn(colorClasses.text.secondary, t.body)}>
          <PortableText value={story} components={portableTextComponents} />
        </div>
      </CardContent>
    </Card>
  );
}
