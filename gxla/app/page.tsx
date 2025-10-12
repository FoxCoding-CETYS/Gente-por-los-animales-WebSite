"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { DonationSection } from "@/components/sections/donation-section"
import { AboutSection } from "@/components/sections/about-section"
import { WhatWeDoSection } from "@/components/sections/what-we-do-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { EventsSection } from "@/components/sections/events-section"
import { SuccessStoriesSection } from "@/components/sections/success-stories-section"
import { SponsorsSection } from "@/components/sections/sponsors-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Face4PetsPage() {
  return (
    <div className="min-h-screen bg-white">

      <HeroSection />

      <DonationSection />

      <AboutSection />

      <WhatWeDoSection />

      <ProgramsSection />

      <EventsSection />

      <SuccessStoriesSection />

      <SponsorsSection />

      <CTASection
        //title="Tu ayuda salva vidas. Cada donación marca la diferencia."
        //subtitle="Juntos, podemos garantizar que ninguna mascota sufra por dificultades económicas. Su generosidad transforma vidas."
        //buttonText="Dona Ahora"
      />

    </div>
  )
}
