import type React from "react";
import { Heart, Syringe, BookOpen, ShieldPlus } from "lucide-react";
import { ProgramCard } from "@/components/ui/program-card";
import { SectionHeader } from "@/components/ui/section-header";
import { colorClasses } from "@/lib/colors";

interface Program {
  icon: React.ReactNode;
  title: string;
}

export function ProgramsSection() {
  const programs: Program[] = [
    {
      icon: <Heart className="w-8 h-8 text-black" />,
      title: "Adopciones",
    },
    {
      icon: <ShieldPlus className="w-8 h-8 text-black" />,
      title: "Esterilización",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-black" />,
      title: "Educación",
    },
    {
      icon: <Syringe className="w-8 h-8 text-black" />,
      title: "Vacunación",
    },
  ];

  return (
    <section
      className={`px-4 sm:px-6 py-12 sm:py-16 ${colorClasses.background.secondary}`}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="NUESTROS PROGRAMAS" className="mb-8 sm:mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
