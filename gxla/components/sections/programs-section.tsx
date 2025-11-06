import type React from "react"
import { Heart, Star, Menu } from "lucide-react"
import { ProgramCard } from "@/components/ui/program-card"
import { SectionHeader } from "@/components/ui/section-header"
import { colorClasses } from "@/lib/colors"

interface Program {
  icon: React.ReactNode
  title: string
  description: string
  buttonText?: string
}

export function ProgramsSection() {
  const programs: Program[] = [
    {
      icon: <Heart className="w-8 h-8 text-black" />,
      title: "Adopciones",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat ea, vel officia nostrum maiores consequatur, molestiae asperiores molestias ipsam ex recusandae in animi fugit.",
    },
    {
      icon: <Star className="w-8 h-8 text-black" />,
      title: "Esterilización",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat ea, vel officia nostrum maiores consequatur, molestiae asperiores molestias ipsam ex recusandae in animi fugit.",
    },
    {
      icon: <Menu className="w-8 h-8 text-black" />,
      title: "Educación",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat ea, vel officia nostrum maiores consequatur, molestiae asperiores molestias ipsam ex recusandae in animi fugit.",
    },
  ]

  return (
    <section className={`px-4 sm:px-6 py-12 sm:py-16 ${colorClasses.background.secondary}`}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="NUESTROS PROGRAMAS" className="mb-8 sm:mb-12" />

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              buttonText={program.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
