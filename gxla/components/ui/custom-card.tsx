"use client"

import type React from "react"

interface CustomCardProps {
  children: React.ReactNode
  variant?: "normal" | "big"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 sm:px-8 py-2 sm:py-3",
  lg: "lg:h-[407px] lg:w-[545px]",
}

export function CustomCard({
  children,
  variant = "normal",
  size = "lg",
  className = "",
  onClick,
}: CustomCardProps) {
  if (variant === "normal") {
    return (
      <div
        className={`flex flex-col items-center text-center shadow-md rounded-[10px] border border-gray-200 bg-white ${sizeClasses[size]} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }
  return (
    <div
      className={`${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
