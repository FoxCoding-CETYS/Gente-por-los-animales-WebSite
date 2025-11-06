import { Heart, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { colorClasses } from "@/lib/colors";
import { t, cn } from "@/lib/typography";

interface ServiceListProps {
  items: string[];
  type: "do" | "dont";
  title?: string;
}

function ServiceList({ items, type, title }: ServiceListProps) {
  const isDo = type === "do";
  const iconColor = isDo ? "text-green-600" : "text-red-600";
  const dotColor = isDo ? "bg-green-500" : "bg-red-500";
  const bgColor = isDo ? "bg-green-100" : "bg-red-100";
  const Icon = isDo ? Heart : X;

  return (
    <Card className={cn(colorClasses.background.primary, "shadow-lg")}>
      <CardContent className="p-8 space-y-6">
        <div className="text-center">
          <div
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
              bgColor
            )}
          >
            <Icon className={cn("w-8 h-8", iconColor)} />
          </div>
          <h3
            className={cn(
              "font-bold mb-6",
              colorClasses.text.primary,
              t.subtitle
            )}
          >
            {title ?? (isDo ? "QUÉ SÍ HACEMOS" : "QUÉ NO HACEMOS")}
          </h3>
        </div>

        <ul className={cn("space-y-4", colorClasses.text.secondary, t.body)}>
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={cn(
                  "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                  dotColor
                )}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function WhatWeDoSection() {
  const whatWeDo = [
    "Programas de esterilización gratuita y de bajo costo",
    "Facilitar adopciones responsables",
    "Educación sobre tenencia responsable de mascotas",
    "Atención de denuncias de maltrato animal",
    "Apoyo en casos de animales perdidos",
    "Promoción de políticas públicas pro-animal",
  ];

  const whatWeDont = [
    "No somos un refugio o albergue de animales",
    "No recogemos animales de la calle",
    "No proporcionamos atención veterinaria directa",
    "No vendemos animales",
    "No ofrecemos servicios de pensión o guardería",
    "No manejamos casos fuera de nuestra jurisdicción",
  ];

  return (
    <section
      className={cn(
        "px-4 sm:px-6 py-8 sm:py-16",
        colorClasses.background.secondary
      )}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="QUÉ HACEMOS / QUÉ NO HACEMOS"
          className="mb-5 sm:mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <ServiceList items={whatWeDo} type="do" />
          <ServiceList items={whatWeDont} type="dont" />
        </div>
      </div>
    </section>
  );
}
