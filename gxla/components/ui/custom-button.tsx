"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { colorClasses } from "@/lib/colors"

interface CustomButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "cta"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 sm:px-8 py-2 sm:py-3",
  lg: "px-8 sm:px-12 py-2 sm:py-3 text-base sm:text-lg",
}

export function CustomButton({
  children,
  variant = "primary",
  size = "md",
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
  )
}
