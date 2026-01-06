import { EventCard } from "@/components/ui/event-card";
import { CustomButton } from "@/components/ui/custom-button";
import { SectionHeader } from "@/components/ui/section-header";
import { colorClasses } from "@/lib/colors";
import { getPublicEvents } from "@/lib/google-calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

interface Event {
  image: string;
  date: string;
  location: string;
  title: string;
  description: string;
  alt: string;
}

function formatDate(event: { date?: string; dateTime?: string }) {
  const raw = event.dateTime ?? event.date;
  if (!raw) return "";

  return new Date(raw).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function EventsSection() {
  const googleEvents = await getPublicEvents();

  const events: Event[] = googleEvents.map((event) => ({
    image: "/default-event.png", // imagen por defecto
    date: formatDate(event.start),
    location: event.location ?? "Ubicación por confirmar",
    title: event.summary ?? "Evento",
    description: event.description ?? "",
    alt: event.summary ?? "Evento",
  }));

  return (
    <section
      className={`px-4 sm:px-6 py-12 sm:py-16 ${colorClasses.background.primary}`}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="EVENTOS & NOTICIAS" className="mb-8 sm:mb-12" />

        <Carousel className="w-full max-w-4xl mx-auto overflow-hidden md:overflow-visible items-center mb-5">
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <EventCard
                    key={index}
                    image={event.image}
                    date={event.date}
                    location={event.location}
                    title={event.title}
                    description={event.description}
                    alt={event.alt}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center">
          <CustomButton variant="primary" size="lg">
            <a href="https://calendar.google.com/calendar/u/0?cid=ZTI2ZWNmMzZmYzJlMzQ2MjUwYTk4NDNiYzJjNTc1YmJlYWFiMGZmODlmMDRlMGQ2NjQyODczZDQ5OGNlZmEyNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
              {" "}
              Calendario Completo
            </a>
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
