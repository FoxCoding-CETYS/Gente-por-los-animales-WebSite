"use client";

import { useEffect, useState } from "react";

interface PawPrintProps {
  className?: string;
  delay?: number;
  rotation?: number;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

export function PawPrint({
  className = "",
  delay = 0,
  rotation = 0,
  size = "md",
}: PawPrintProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      } ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <img
        src="DogFootprints.svg"
        alt="dog footprint"
        className={sizeClasses[size]}
      />
    </div>
  );
}
