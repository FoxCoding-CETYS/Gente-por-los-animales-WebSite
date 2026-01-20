"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ActionCard } from "@/components/ui/action-card";
import {
  Heart,
  Shield,
  Users,
  BookOpen,
  AlertTriangle,
  Search,
  HandHeart,
  DollarSign,
} from "lucide-react";
import { colorClasses } from "@/lib/colors";
import { CustomButton } from "@/components/ui/custom-button";
import { t, cn } from "@/lib/typography";

export default function Acciones() {
  const actionItems = [
    {
      icon: Heart,
      title: "Quiero Adoptar",
      description:
        "Encuentra tu compañero perfecto y dale un hogar lleno de amor.",
      href: "/adopt",
      accentBg: "bg-pink-100",
      accentText: "text-pink-600",
    },
    {
      icon: HandHeart,
      title: "Quiero Dar en Adopción",
      description:
        "Ayuda a encontrar un nuevo hogar para una mascota que necesita cuidados.",
      href: "/surrender",
      accentBg: "bg-blue-100",
      accentText: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Quiero Esterilizar",
      description:
        "Accede a nuestros programas de esterilización gratuita o de bajo costo.",
      href: "/spay-neuter",
      accentBg: "bg-green-100",
      accentText: "text-green-600",
    },
    {
      icon: BookOpen,
      title: "Quiero Aprender / Educar",
      description:
        "Participa en programas educativos sobre tenencia responsable.",
      href: "/education",
      accentBg: "bg-purple-100",
      accentText: "text-purple-600",
    },
    {
      icon: AlertTriangle,
      title: "Quiero Reportar Maltrato",
      description: "Denuncia casos de maltrato animal para que podamos actuar.",
      href: "/report-abuse",
      accentBg: "bg-red-100",
      accentText: "text-red-600",
    },
    {
      icon: Search,
      title: "Quiero Reportar Animal Perdido",
      description: "Ayuda a reunir mascotas perdidas con sus familias.",
      href: "/lost-pet",
      accentBg: "bg-orange-100",
      accentText: "text-orange-600",
    },
    {
      icon: Users,
      title: "Quiero Ser Voluntario",
      description: "Únete a nuestro equipo y marca la diferencia.",
      href: "/volunteer",
      accentBg: "bg-teal-100",
      accentText: "text-teal-600",
    },
    {
      icon: DollarSign,
      title: "Quiero Donar",
      description: "Tu donación salva vidas y apoya nuestros programas.",
      href: "/donate",
      accentBg: "bg-yellow-100",
      accentText: "text-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className={cn(
          "px-4 sm:px-6 py-12 sm:py-16",
          colorClasses.background.accent,
        )}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1
            className={cn("font-bold leading-tight", t.display, "text-black")}
          >
            ¿CÓMO PUEDES AYUDAR?
          </h1>
          <p className={cn("max-w-2xl mx-auto", t.bodyHero, "text-black/80")}>
            Elige la forma en que quieres contribuir al bienestar animal en
            nuestra comunidad.
          </p>
        </div>
      </section>

      {/* Action grid */}
      <section
        className={cn(
          "px-4 sm:px-6 py-12 sm:py-16",
          colorClasses.background.primary,
        )}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {actionItems.map((item) => (
              <ActionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section
        className={cn(
          "px-4 sm:px-6 py-12 sm:py-16",
          colorClasses.background.secondary,
        )}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SectionHeader title="¿Necesitas más información?" />
          <p
            className={cn(
              "max-w-2xl mx-auto leading-relaxed text-muted-foreground",
              t.body,
            )}
          >
            Si tienes dudas sobre cualquiera de nuestros servicios o no estás
            seguro de cuál opción es la mejor para tu situación, contáctanos.
            Nuestro equipo estará encantado de ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <CustomButton variant="primary" size="lg">
              <a
                href="https://wa.me/52XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </CustomButton> */}
            <CustomButton variant="outline" size="lg">
              <a href="mailto:genteporlosanimales@gmail.com">Enviar Email</a>
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="px-4 sm:px-6 py-8 bg-red-50 border-l-4 border-red-400">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <AlertTriangle
              className="w-6 h-6 text-red-600 flex-shrink-0 mt-1"
              aria-hidden="true"
            />
            <div>
              <h3 className={cn("mb-2 text-red-800 font-bold", t.subtitle)}>
                ¿Es una emergencia?
              </h3>
              <p className={cn("mb-3 text-red-700", t.bodySm)}>
                Si encuentras un animal en peligro inmediato o presencias
                maltrato, contacta a las autoridades locales o llama a nuestra
                línea de emergencia.
              </p>
              <CustomButton
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white"
                aria-label="Llamar a la línea de emergencia"
              >
                Línea de Emergencia
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
