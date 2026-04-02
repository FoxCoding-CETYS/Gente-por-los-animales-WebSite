import { HeroSection } from "@/components/sections/hero-section";
import { DonationSection } from "@/components/sections/donation-section";
import { AboutSection } from "@/components/sections/about-section";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import EventsClient from "@/components/sections/events-section-client";
import { SuccessStoriesSection } from "@/components/sections/success-stories-section";
import { SponsorsAlliesSection } from "@/components/sections/sponsors-allies-section";
import { CTABanner } from "@/components/sections/cta-banner";
import { Reveal } from "@/components/ui/reveal";

export default function GxlaPage() {
  return (
    <div className="h-fit bg-white">
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal>
        <DonationSection />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <WhatWeDoSection />
      </Reveal>
      <Reveal>
        <ProgramsSection />
      </Reveal>
      <Reveal>
        <EventsClient />
      </Reveal>
      <Reveal>
        <SuccessStoriesSection />
      </Reveal>
      <SponsorsAlliesSection />
      <Reveal>
        <CTABanner
          title="Tu ayuda salva vidas. Cada donación marca la diferencia."
          subtitle="Juntos, podemos garantizar que ninguna mascota sufra por dificultades económicas. Su generosidad transforma vidas."
          buttonText="Dona Ahora"
          buttonVariant="secondary"
          buttonSize="lg"
          backgroundClassName="bg-[#05DF72]"
          textColorClassName="text-black"
        />
      </Reveal>
    </div>
  );
}
