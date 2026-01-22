"use client";

import * as React from "react";
import Link from "next/link";
import { t, cn } from "@/lib/typography";
import { CustomButton } from "@/components/ui/custom-button";

type CTAProps = {
  title: string;
  subtitle?: string;
  /** Button */
  buttonText: string;
  buttonHref?: string; // if provided, renders <Link> inside the button
  onButtonClick?: () => void; // use when you don't pass href
  buttonVariant?: "primary" | "secondary" | "outline" | "cta";
  buttonSize?: "sm" | "md" | "lg";
  /** Style */
  backgroundClassName?: string; // e.g. "bg-[#05DF72]"
  textColorClassName?: string; // e.g. "text-black"
  className?: string; // wrapper extra classes
};

export function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonHref,
  onButtonClick,
  buttonVariant = "secondary",
  buttonSize = "lg",
  backgroundClassName = "bg-[#05DF72]",
  textColorClassName = "text-black",
  className,
}: CTAProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-3 w-full text-center",
        backgroundClassName,
        textColorClassName,
        className
      )}
    >
      <h1
        className={cn(
          "font-geist font-bold mt-10 p-4 w-full md:w-10/12",
          t.display
        )}
      >
        {title}
      </h1>

      {subtitle && (
        <p className={cn("p-5 w-full md:w-8/12", t.bodyHero)}>{subtitle}</p>
      )}

      {buttonHref ? (
        <CustomButton
          size={buttonSize}
          variant={buttonVariant}
          className="mb-14 mt-6"
        >
          <Link href={buttonHref}>{buttonText}</Link>
        </CustomButton>
      ) : (
        <CustomButton
          size={buttonSize}
          variant={buttonVariant}
          className="mb-14 mt-6"
          onClick={() => {
            window.location.href = "/nosotros#financiamiento";
          }}
        >
          {buttonText}
        </CustomButton>
      )}
    </div>
  );
}
