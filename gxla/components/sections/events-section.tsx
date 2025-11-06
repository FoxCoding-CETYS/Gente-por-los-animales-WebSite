import { EventCard } from "@/components/ui/event-card";
import { CustomButton } from "@/components/ui/custom-button";
import { SectionHeader } from "@/components/ui/section-header";
import { colorClasses } from "@/lib/colors";

interface Event {
  image: string;
  date: string;
  location: string;
  title: string;
  description: string;
  alt: string;
}

export function EventsSection() {
  const events: Event[] = [
    {
      image: "/charity-golf-tournament-poster-with-pets.png",
      date: "Marzo 15, 2025",
      location: "Centro Cívico, Mexicali, BC",
      title: "Carrera Atlética Guardián Responsable",
      description:
        "Acompáñenos a nuestra carrera/caminata anual de 5 km para promover la tenencia responsable de mascotas. Traiga a sus amigos peludos para un día de diversión y comunidad.",
      alt: "Carrera Atlética Guardián Responsable",
    },
    {
      image: "/pet-walk-fundraising-event-with-happy-dogs.png",
      date: "Abril 8, 2025",
      location: "Centro Comunitario",
      title: "Venta de pasteles comunitarios",
      description:
        "Deliciosas golosinas caseras y productos horneados para apoyar nuestra misión. Todos los ingresos se destinan directamente a ayudar a las mascotas que necesitan atención médica.",
      alt: "Venta de pasteles comunitarios",
    },
  ];

  return (
    <section
      className={`px-4 sm:px-6 py-12 sm:py-16 ${colorClasses.background.primary}`}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="EVENTOS & NOTICIAS" className="mb-8 sm:mb-12" />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              date={event.date}
              location={event.location}
              title={event.title}
              description={event.description}
              alt={event.alt}
            />
          ))}
        </div>

        <div className="text-center">
          <CustomButton variant="primary" size="lg">
            Calendario Completo
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
