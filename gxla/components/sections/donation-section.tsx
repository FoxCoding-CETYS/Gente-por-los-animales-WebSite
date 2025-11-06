import { CustomButton } from "@/components/ui/custom-button";
import { SectionHeader } from "@/components/ui/section-header";
import { colorClasses } from "@/lib/colors";
import { t, cn } from "@/lib/typography";
import Link from "next/link";

export function DonationSection() {
  return (
    <section
      className={cn(
        "px-4 sm:px-6 py-8 sm:py-16",
        colorClasses.background.secondary
      )}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <SectionHeader
          title="TUS DONACIONES SALVAN VIDAS."
          subtitle="Nuestra misión es promover el bienestar animal. Aceptamos donativos en especie y económicos."
        />
        <CustomButton variant="primary" size="lg">
          <Link href="/nosotros#financiamiento">DONAR</Link>
        </CustomButton>
        <div className="pt-3 sm:pt-4">
          <p className={cn(t.bodyHero, colorClasses.text.secondary, "mb-4")}>
            ¿Tu mascota necesita asistencia médica?
          </p>
          <CustomButton variant="outline" size="lg">
            BUSCA AYUDA
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
