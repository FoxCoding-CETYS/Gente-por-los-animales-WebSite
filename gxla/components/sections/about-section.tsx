import { CustomButton } from "@/components/ui/custom-button";
import { SectionHeader } from "@/components/ui/section-header";
import { colorClasses } from "@/lib/colors";
import { t, cn } from "@/lib/typography";
import Link from "next/link";

interface MissionVisionCardProps {
  title: string;
  content: string;
}

function MissionVisionCard({ title, content }: MissionVisionCardProps) {
  return (
    <div className="space-y-4">
      <h2
        className={cn(
          "font-bold text-center mb-8 sm:mb-5",
          colorClasses.text.primary,
          t.subtitle
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          colorClasses.text.secondary,
          t.bodyHero,
          "text-center sm:text-left"
        )}
      >
        {content}
      </p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      className={`px-4 sm:px-6 py-12 sm:py-16 ${colorClasses.background.primary}`}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-1 gap-8 lg:gap-10 items-center">
        <SectionHeader title="¿QUIENES SOMOS?" className="mb-8 sm:mb-12" />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <MissionVisionCard
            title="MISION"
            content="Promover el bienestar animal mediante los programas de esterilización, adopción, educación y denuncia ciudadana; e incidir en las políticas públicas que determinen las autoridades para el control ético de la población canina y felina."
          />
          <MissionVisionCard
            title="VISION"
            content="Ser una asociación civil profesional, activa e innovadora, que contribuya al bienestar de la sociedad mediante la implementación de programas integrales en Mexicali que fomenten el bienestar animal."
          />
        </div>
        <div className="text-center">
          <CustomButton variant="outline" size="lg">
            <Link href="/nosotros"> Conoce Nuestra Historia </Link>
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
