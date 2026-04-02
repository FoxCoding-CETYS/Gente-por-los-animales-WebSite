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
import { cn } from "@/lib/utils";

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
  const itemsCount = events.length;
  const lessThanThree = itemsCount < 3;

  return (
    <section
      className={`px-4 sm:px-6 py-12 sm:py-14 ${colorClasses.background.primary}`}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="EVENTOS & NOTICIAS" className="mb-4" />
        {events.length > 0 ? (
          <Carousel className="w-full max-w-4xl mx-auto items-center mb-10">
            <CarouselContent
              className={cn("ml-0", lessThanThree ? "justify-center" : "")}
            >
              {events.map((event, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "flex justify-center",
                    "basis-full",
                    "sm:basis-4/5",
                    "md:basis-1/3",
                  )}
                >
                  <div className="p-2 h-full w-full max-w-sm">
                    <EventCard
                      className="w-full"
                      image={event.image}
                      date={event.date}
                      location={event.location}
                      title={event.title}
                      description={
                        event.description || "Sin descripción disponible"
                      }
                      alt={event.alt}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              {!lessThanThree && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </div>
          </Carousel>
        ) : (
          <div className="w-full text-center mb-10">
            <h1 className="text-xl">
              No hay eventos para mostrar, vuelve mas tarde o revisa el
              calendario completo
            </h1>
          </div>
        )}

        <div className="text-center">
          <CustomButton variant="primary" size="lg">
            <a href="https://calendar.google.com/calendar/embed?src=e26ecf36fc2e346250a9843bc2c575bbeaab0ff89f04e0d6642873d498cefa24%40group.calendar.google.com&ctz=America%2FTijuana">
              {" "}
              Calendario Completo
            </a>
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
