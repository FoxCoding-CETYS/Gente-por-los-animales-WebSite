"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { MediaCard } from "@/components/ui/media-card";
import { ImpactStat } from "@/components/ui/impact-stat";
import { Newspaper, Tv, Calendar, Users } from "lucide-react";
import { t, cn } from "@/lib/typography";

export default function DifusionPage() {
  const mediaPrograms = [
    {
      accentColor: "yellow" as const,
      icon: <Newspaper className="w-8 h-8 text-yellow-600" />,
      title: 'Sección "De Mascotas y Amigos"',
      subtitle: "Periódico La Crónica",
      body: 'Gracias a la oportunidad brindada por el periódico La Crónica, en el mes de agosto de 2011 comenzamos a publicar una sección en el periódico titulada "De Mascotas y Amigos", a través de la cual pretendemos informar a la población sobre temas de interés relacionados con el cuidado de los animales de compañía.',
      sectionTitle: "Contenido de la sección:",
      bullets: [
        { text: "Información sobre cuidado de animales de compañía" },
        { text: "Animales en espera de adopción con fotos y descripciones" },
        { text: "Casos de éxito de animales adoptados" },
        { text: "Datos curiosos sobre perros y gatos" },
        { text: "Información sobre eventos y actividades" },
      ],
      footerIcon: <Calendar className="w-5 h-5 text-yellow-600" />,
      footerText: "Publicación: Todos los domingos",
    },
    {
      accentColor: "blue" as const,
      icon: <Tv className="w-8 h-8 text-blue-600" />,
      title: 'Programa "Hola Mexicali"',
      subtitle: "Televisa Mexicali",
      body: 'Desde el 2019 nos brindan un espacio de varios minutos semanalmente en el programa de televisión "Hola Mexicali", para promover animales en adopción.',
      sectionTitle: "Formato del programa:",
      bullets: [
        { text: "Presentación de animales adoptables en vivo" },
        { text: "Exhibición de fotografías de mascotas disponibles" },
        { text: "Descripción de características y personalidades" },
        { text: "Promoción de la adopción responsable" },
      ],
      footerIcon: <Users className="w-5 h-5 text-blue-600" />,
      footerText: "Frecuencia: Semanal desde 2019",
    },
  ];

  const impactStats = [
    {
      icon: <Newspaper className="w-8 h-8 text-yellow-600" />,
      accentBgClass: "bg-yellow-100",
      title: "13+ Años",
      text: "De presencia continua en La Crónica educando sobre bienestar animal",
    },
    {
      icon: <Tv className="w-8 h-8 text-blue-600" />,
      accentBgClass: "bg-blue-100",
      title: "5+ Años",
      text: "Promoviendo adopciones en televisión local cada semana",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      accentBgClass: "bg-green-100",
      title: "Miles",
      text: "De personas alcanzadas con mensajes de tenencia responsable",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className={cn("font-bold leading-tight", t.display)}>DIFUSIÓN</h1>
          <p
            className={cn(
              "max-w-3xl mx-auto",
              t.bodyHero,
              "text-muted-foreground"
            )}
          >
            Compartiendo nuestra misión a través de medios de comunicación para
            crear conciencia sobre el bienestar animal.
          </p>
        </div>
      </section>

      {/* Media Programs */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="NUESTROS PROGRAMAS DE DIFUSIÓN"
            className="mb-12"
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {mediaPrograms.map((m, i) => (
              <MediaCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SectionHeader title="IMPACTO DE NUESTROS MEDIOS" />

          <div className="grid md:grid-cols-3 gap-6">
            {impactStats.map((s, i) => (
              <ImpactStat key={i} {...s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
