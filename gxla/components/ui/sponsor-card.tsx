"use client";
import { t, cn } from "@/lib/typography";

type SponsorCardProps = {
  name: string;
  photoSrc?: string;
  className?: string;
  boxClassName?: string;
};

export function SponsorCard({
  name,
  photoSrc,
  className,
  boxClassName = "lg:w-44 lg:h-44 w-36 h-36",
}: SponsorCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        boxClassName,
        className,
      )}
    >
      {photoSrc ? (
        <img
          src={photoSrc}
          alt={name}
          title={name}
          className="w-full h-full object-contain"
        />
      ) : (
        <p className={cn("font-bold text-center", t.sponsorName)} title={name}>
          {name}
        </p>
      )}
    </div>
  );
}
