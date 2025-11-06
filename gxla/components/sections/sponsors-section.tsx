"use client";

import { SponsorCard } from "@/components/ui/sponsor-card";
import { t, cn } from "@/lib/typography";

type Sponsor = { name: string; photoSrc?: string };

const sponsors: Sponsor[] = [
  { name: "El bunker colectivo", photoSrc: "/bunker.png" },
  { name: "Zayda Torres" },
  { name: "La Casa de Lolo Café & Matcha" },
  { name: "Mega Homes" },
];

export function SponsorsSection() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={cn("font-geist text-black font-bold mt-10", t.display)}>
        PATROCINADORES
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 p-8 gap-10 mt-2 mb-8">
        {sponsors.map((s) => (
          <SponsorCard
            key={s.name}
            name={s.name}
            photoSrc={s.photoSrc}
            className={cn(!s.photoSrc && "bg-[#F2F2F2]")}
          />
        ))}
      </div>
    </div>
  );
}
