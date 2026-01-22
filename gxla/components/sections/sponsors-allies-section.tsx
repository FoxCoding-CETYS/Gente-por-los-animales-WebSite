import { AlliancesSection } from "@/components/sections/alliances-section";
import { SponsorsSection } from "./sponsors-section";

export function SponsorsAlliesSection() {
  const alliances = [
    {
      name: "Clínica y Estética Canina",
      description:
        "Atención médica para animales en adopción y programas de esterilización",
    },
    {
      name: "Pet Zone",
      description:
        "Clínica veterinaria participante en programas de esterilización",
    },
    {
      name: "DIFOSA",
      description:
        "Facilita almacén para resguardo y distribución de donativos",
    },
    {
      name: "Spay México",
      description: "Coorganizadora de campañas de esterilización",
    },
  ];
  return (
    <>
      <AlliancesSection items={alliances} />
      <SponsorsSection />
    </>
  );
}
