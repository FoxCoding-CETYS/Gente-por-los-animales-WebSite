"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { colorClasses } from "@/lib/colors";

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "cta";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: "px-4 py-2 text-base",
  md: "px-6 sm:px-8 py-2 sm:py-3",
  lg: "px-8 sm:px-10 py-2 sm:py-5 text-base rounded-full lg:text-2xl",
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
      className={`${colorClasses.button[variant]} ${sizeClasses[size]} font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
