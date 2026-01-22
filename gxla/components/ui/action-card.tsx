"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";
import { t, cn } from "@/lib/typography";

type ActionCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  href: string;
  accentBg: string;
  accentText: string;
};

export function ActionCard({
  icon: Icon,
  title,
  description,
  href,
  accentBg,
  accentText,
}: ActionCardProps) {
  return (
    <Card className="group hover:shadow-xl outline md:outline-white shadow-md hover:outline-yellow-400 transition-all duration-300 focus-within:ring-2 focus-within:ring-yellow-400">
      <CardContent className="md:p-6 space-y-4 text-center h-full flex flex-col">
        <div
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",
            accentBg,
          )}
          aria-hidden="true"
        >
          <Icon className={cn("w-8 h-8", accentText)} />
        </div>

        <h3
          className={cn(
            "font-bold transition-colors group-hover:text-yellow-600",
            t.subtitle,
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "flex-grow leading-relaxed text-muted-foreground",
            t.bodySm,
          )}
        >
          {description}
        </p>

        {/* <CustomButton
          variant="outline"
          className="mt-auto group-hover:bg-yellow-400 hover:bg-yellow-600 group-hover:text-black"
        >
          <Link href={href} aria-label={`${title} - Comenzar`}>
            Comenzar
          </Link>
        </CustomButton> */}
      </CardContent>
    </Card>
  );
}
