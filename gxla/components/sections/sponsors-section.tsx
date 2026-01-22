"use client";

import { SponsorCard } from "@/components/ui/sponsor-card";
import { t, cn } from "@/lib/typography";

type Sponsor = { name: string; photoSrc?: string };

const sponsors: Sponsor[] = [
  { name: "El bunker colectivo", photoSrc: "/bunker.png" },
  { name: "Zayda Torres", photoSrc: "/ZaydaTorresLogo.png" },
  { name: "La Casa de Lolo Café & Matcha", photoSrc: "LaCasadeLolo.png" },
  { name: "Mega Homes", photoSrc: "/MegaHomes.png" },
  { name: "Flamingo", photoSrc: "/Flamingo.png" },
  { name: "Yadis Belleza Integral", photoSrc: "Yadiz.png" },
  {
    name: "Berenice Ramiro Hair y Makeup Artist",
    photoSrc: "/BereniceRamiro.png",
  },
  { name: "Pet Zone", photoSrc: "/PetZone.jpg" },
  { name: "Larguchonas", photoSrc: "/LarguChonas.png" },
  {
    name: "Clínica y Estética Canina",
    photoSrc: "/ClinicayEsteticaCanina.jpg",
  },
  { name: "Difosa", photoSrc: "/Difosa.jpg" },
  { name: "Bioquimia Laboratorio", photoSrc: "/Bioquimia.jpg" },
  { name: "Sacfi" },
  { name: "SUPELA Contadores Públicos" },
  { name: "Ugaldent", photoSrc: "/Ugaldent.jpg" },
  { name: "Dra. Gloria Rosas Psiquiatra", photoSrc: "/GloriaRosas.png" },
  { name: "Imperial Garden", photoSrc: "/ImperialGarden.png" },
  { name: "Grupo Financiero Monex", photoSrc: "/Monex.png" },
  { name: "Sistemas Sierra, S.A. de C.V.", photoSrc: "/Sierra.png" },
  { name: "Certuit", photoSrc: "/certuit.png" },
];

export function SponsorsSection() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={cn("font-geist text-black font-bold mt-10", t.display)}>
        PATROCINADORES
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-5 p-8 gap-10 mt-2 mb-8">
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
