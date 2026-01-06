"use client";

import { Card, CardContent } from "@/components/ui/card";
import { t, cn } from "@/lib/typography";

type Bullet = { text: string; dotClass?: string };

type MediaCardProps = {
  accentColor: "yellow" | "blue" | "green";
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  body: string;
  sectionTitle: string;
  bullets: Bullet[];
  footerIcon?: React.ReactNode;
  footerText?: string;
  className?: string;
};

const accentMap = {
  yellow: {
    border: "border-l-4 border-yellow-400",
    bgIcon: "bg-yellow-100",
    dot: "bg-yellow-400",
    footerBg: "bg-yellow-50",
  },
  blue: {
    border: "border-l-4 border-blue-400",
    bgIcon: "bg-blue-100",
    dot: "bg-blue-400",
    footerBg: "bg-blue-50",
  },
  green: {
    border: "border-l-4 border-green-400",
    bgIcon: "bg-green-100",
    dot: "bg-green-400",
    footerBg: "bg-green-50",
  },
};

export function MediaCard({
  accentColor,
  icon,
  title,
  subtitle,
  body,
  sectionTitle,
  bullets,
  footerIcon,
  footerText,
  className,
}: MediaCardProps) {
  const acc = accentMap[accentColor];

  return (
    <Card className={cn("shadow-lg", acc.border, "bg-white", className)}>
      <CardContent className="p-8 space-y-6">
        <div className="flex items-center gap-4 mb-2">
          <div
            className={cn(
              "w-20 h-20 rounded-full flex items-center justify-center",
              acc.bgIcon
            )}
          >
            {icon}
          </div>
          <div>
            <h3 className={cn("font-bold", t.subtitle)}>{title}</h3>
            <p className={cn(t.bodySm, "text-muted-foreground")}>{subtitle}</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className={cn(t.bodySm, "leading-relaxed text-muted-foreground")}>
            {body}
          </p>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className={cn("font-semibold mb-2", t.body)}>{sectionTitle}</h4>
            <ul className="space-y-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                      b.dotClass ?? acc.dot
                    )}
                    aria-hidden="true"
                  />
                  <span className={cn(t.bodySm, "text-muted-foreground")}>
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {footerText && (
            <div
              className={cn(
                "flex items-center gap-2 p-3 rounded-lg",
                acc.footerBg
              )}
            >
              {footerIcon}
              <span className={cn("font-semibold", t.bodySm)}>
                {footerText}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
