"use client";

import * as React from "react";
import { t, cn } from "@/lib/typography";

type Variant = "normal" | "vertical" | "big";
type Size = "sm" | "md" | "lg";

export interface CustomCardProps {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: string | React.ReactNode;
  title?: string;

  // Big variant fields (optional)
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  title5?: string;
  title6?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;

  onClick?: () => void;
}

const padBySize: Record<Size, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const gapBySize: Record<Size, string> = {
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-5",
};

function renderIcon(icon?: string | React.ReactNode, className?: string) {
  return <div className={cn(className)}>{icon}</div>;
}

export function CustomCard({
  children,
  variant = "normal",
  size = "lg",
  className = "",
  icon,
  title,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  onClick,
}: CustomCardProps) {
  const pad = padBySize[size];
  const gap = gapBySize[size];

  if (variant === "normal") {
    return (
      <div
        onClick={onClick}
        className={cn(
          "flex flex-col items-start lg:items-center text-left lg:text-center",
          "rounded-2xl border border-gray-200 bg-white shadow-md",
          pad,
          gap,
          className,
        )}
      >
        <div className="flex flex-row lg:flex-col items-center lg:justify-center gap-3">
          {renderIcon(icon, "lg:mt-1 lg:mb-2")}
          {title && <h3 className={cn("font-bold", t.subtitle)}>{title}</h3>}
        </div>

        {children && (
          <div className={cn("font-light w-11/12 pt-2", t.body)}>
            {children}
          </div>
        )}
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div
        onClick={onClick}
        className={cn(
          "flex flex-col items-center text-center",
          "rounded-2xl border border-gray-200 bg-white shadow-md",
          pad,
          gap,
          className,
        )}
      >
        {renderIcon(icon)}
        {title && (
          <h3 className={cn("font-bold text-center", t.subtitle)}>{title}</h3>
        )}
        {children && (
          <div className={cn("font-light w-11/12 pt-2 text-center", t.body)}>
            {children}
          </div>
        )}
      </div>
    );
  }

  // BIG
  const pairs = [
    { title: title1, text: text1 },
    { title: title2, text: text2 },
    { title: title3, text: text3 },
    { title: title4, text: text4 },
    { title: title5, text: text5 },
    { title: title6, text: text6 },
  ].filter((p) => p.title || p.text);

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "rounded-2xl border border-gray-200 bg-white shadow-md",
        pad,
        className,
      )}
    >
      {renderIcon(icon, "hidden lg:block mx-auto mb-2")}
      {title && <h3 className={cn("font-bold", t.subtitle)}>{title}</h3>}

      <div
        className={cn(
          "w-11/12 mx-auto mt-6 mb-8",
          "grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4",
        )}
      >
        {pairs.map((p, i) => (
          <div key={i}>
            {p.title && <h4 className={cn("font-bold", t.body)}>{p.title}</h4>}
            {p.text && (
              <p className={cn("pt-2 font-light", t.bodySm)}>{p.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
