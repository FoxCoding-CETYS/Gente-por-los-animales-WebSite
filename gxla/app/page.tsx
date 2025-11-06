"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { DonationSection } from "@/components/sections/donation-section";
import { AboutSection } from "@/components/sections/about-section";
import { WhatWeDoSection } from "@/components/sections/what-we-do-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { EventsSection } from "@/components/sections/events-section";
import { SuccessStoriesSection } from "@/components/sections/success-stories-section";
import { SponsorsAlliesSection } from "@/components/sections/sponsors-allies-section";
import { CTABanner } from "@/components/sections/cta-banner";

export default function GxlaPage() {
  return (
    <div className="h-fit bg-white">
      <HeroSection />

      <DonationSection />

      <AboutSection />

      <WhatWeDoSection />

      <ProgramsSection />

      <EventsSection />

      <SuccessStoriesSection />

      <SponsorsAlliesSection />

      <CTABanner
        title="Tu ayuda salva vidas. Cada donación marca la diferencia."
        subtitle="Juntos, podemos garantizar que ninguna mascota sufra por dificultades económicas. Su generosidad transforma vidas."
        buttonText="Dona Ahora"
        buttonVariant="secondary"
        buttonSize="lg"
        onButtonClick={() => {
          window.location.href = "/nosotros#financiamiento";
        }}
        backgroundClassName="bg-[#05DF72]"
        textColorClassName="text-black"
      />
    </div>
  );
}
