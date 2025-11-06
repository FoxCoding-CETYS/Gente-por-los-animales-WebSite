"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { colorClasses } from "@/lib/colors";
import { t, cn } from "@/lib/typography";

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "cta";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const padClasses = {
  sm: "px-4 py-4 rounded-full",
  md: "px-6 sm:px-8 py-2 sm:py-3 rounded-xl",
  lg: "px-8 sm:px-10 py-2 sm:py-5 rounded-full",
};

const textClasses = {
  sm: t.body,
  md: t.body,
  lg: t.bodyHero,
};

export function CustomButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        "font-semibold transition-colors",
        colorClasses.button[variant],
        padClasses[size],
        textClasses[size],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
