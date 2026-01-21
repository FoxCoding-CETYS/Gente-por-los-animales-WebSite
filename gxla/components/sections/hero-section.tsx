"use client";

import { useEffect, useState } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { PawPrint } from "@/components/ui/paw-print";
import { colorClasses } from "@/lib/colors";
import { t, cn } from "@/lib/typography";

interface CircularImageProps {
  src: string;
  alt: string;
  className: string;
  delay: number;
  gradientFrom: string;
  gradientTo: string;
  size: string;
}

function CircularImage({
  src,
  alt,
  className,
  delay,
  gradientFrom,
  gradientTo,
  size,
}: CircularImageProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute rounded-full overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientTo} ${size} transition-all duration-1000 ease-out ${
        isImageLoaded
          ? "transform scale-100 opacity-100"
          : "transform scale-75 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

interface PawPrintTrailProps {
  positions: Array<{
    className: string;
    delay: number;
    rotation: number;
  }>;
}

function PawPrintTrail({ positions }: PawPrintTrailProps) {
  return (
    <>
      {positions.map((position, index) => (
        <PawPrint
          key={index}
          className={position.className}
          delay={position.delay}
          rotation={position.rotation}
          size="md"
        />
      ))}
    </>
  );
}

export function HeroSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const pawPrintPositions = [
    // Paw prints for medium screens
    {
      className:
        "absolute top-35 left-4 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 100,
      rotation: 110,
    },
    {
      className:
        "absolute top-37 left-12 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 200,
      rotation: 100,
    },
    {
      className:
        "absolute top-34 left-19 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 400,
      rotation: 90,
    },
    {
      className:
        "absolute top-32 left-26 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 600,
      rotation: 80,
    },
    {
      className:
        "absolute top-28 left-32 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 800,
      rotation: 70,
    },
    {
      className:
        "absolute top-8 left-73 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 1800,
      rotation: 70,
    },
    {
      className:
        "absolute top-5 left-83 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 2000,
      rotation: 80,
    },
    {
      className:
        "absolute top-3 left-93 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 2200,
      rotation: 90,
    },
    {
      className:
        "absolute top-5 left-103 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 2400,
      rotation: 100,
    },
    {
      className:
        "absolute top-6 left-113 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 2600,
      rotation: 110,
    },
    {
      className:
        "absolute top-13 left-123 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 2800,
      rotation: 120,
    },
    {
      className:
        "absolute top-55 right-38 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 3000,
      rotation: 140,
    },
    {
      className:
        "absolute top-60 right-32 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 3200,
      rotation: 140,
    },
    {
      className:
        "absolute top-66 right-25 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 3400,
      rotation: 130,
    },
    {
      className:
        "absolute top-68 right-18 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 3600,
      rotation: 120,
    },
    {
      className:
        "absolute top-64 right-10 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 3800,
      rotation: 90,
    },
    {
      className:
        "absolute top-58 right-4 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 4000,
      rotation: 60,
    },
    {
      className:
        "absolute top-52 right-0 invisible md:visible lg:invisible transform xl:scale-125",
      delay: 4200,
      rotation: 60,
    },
    // Paw prints for desktop screens
    {
      className:
        "absolute top-30 left-4 invisible xl:visible transform xl:scale-125",
      delay: 200,
      rotation: 50,
    },
    {
      className:
        "absolute top-23 left-16 invisible xl:visible transform xl:scale-125",
      delay: 400,
      rotation: 55,
    },
    {
      className:
        "absolute top-15 left-28 invisible xl:visible transform xl:scale-125",
      delay: 600,
      rotation: 60,
    },
    {
      className:
        "absolute top-10 left-40 invisible xl:visible transform xl:scale-125",
      delay: 800,
      rotation: 65,
    },
    {
      className:
        "absolute top-9 left-52 invisible xl:visible transform xl:scale-125",
      delay: 1000,
      rotation: 70,
    },
    //aqui empieza
    {
      className:
        "absolute top-35 left-100 invisible xl:visible 2xl:invisible transform xl:scale-125",
      delay: 1200,
      rotation: 110,
    },
    {
      className:
        "absolute top-40 left-112 invisible xl:visible 2xl:invisible transform xl:scale-125",
      delay: 1400,
      rotation: 105,
    },
    {
      className:
        "absolute top-38 left-124 invisible xl:visible 2xl:invisible transform xl:scale-125",
      delay: 1600,
      rotation: 85,
    },
    {
      className:
        "absolute top-34 left-136 invisible xl:visible 2xl:invisible transform xl:scale-125",
      delay: 1800,
      rotation: 80,
    },
    {
      className:
        "absolute top-32 left-148 invisible xl:visible 2xl:invisible transform xl:scale-125",
      delay: 2000,
      rotation: 75,
    },
    //acaba aca
    {
      className:
        "absolute top-12 left-65 invisible 2xl:visible transform xl:scale-125",
      delay: 1200,
      rotation: 110,
    },
    {
      className:
        "absolute top-17 left-76 invisible 2xl:visible transform xl:scale-125",
      delay: 1400,
      rotation: 105,
    },
    {
      className:
        "absolute top-24 left-86 invisible 2xl:visible transform xl:scale-125",
      delay: 1600,
      rotation: 125,
    },
    //estas 2
    {
      className:
        "absolute top-18 left-184 invisible xl:visible 2xl:invisible transform xl:scale-125",
      delay: 2200,
      rotation: 60,
    },
    {
      className:
        "absolute top-14 left-196 invisible xl:visible 2xl:invisible transform xl:scale-125",
      delay: 2400,
      rotation: 55,
    },
    //Otra vez grandes pantallas
    {
      className:
        "absolute top-18 left-232 invisible 2xl:visible transform xl:scale-125",
      delay: 2200,
      rotation: 60,
    },
    {
      className:
        "absolute top-14 left-242 invisible 2xl:visible transform xl:scale-125",
      delay: 2400,
      rotation: 90,
    },
    {
      className:
        "absolute top-15 left-252 invisible 2xl:visible transform scale-125",
      delay: 2500,
      rotation: 120,
    },
    //estas tres
    {
      className:
        "absolute top-85 right-93 invisible 2xl:visible transform scale-125",
      delay: 2700,
      rotation: 85,
    },
    {
      className:
        "absolute top-80 right-84 invisible 2xl:visible transform scale-125",
      delay: 2800,
      rotation: 60,
    },
    {
      className:
        "absolute top-74 right-75 invisible 2xl:visible transform scale-125",
      delay: 2900,
      rotation: 65,
    },
    {
      className:
        "absolute top-68 right-67 invisible 2xl:visible transform scale-125",
      delay: 3000,
      rotation: 75,
    },
    {
      className:
        "absolute top-64 right-58 invisible 2xl:visible transform scale-125",
      delay: 3100,
      rotation: 100,
    },
    {
      className:
        "absolute top-70 right-45 invisible 2xl:visible transform scale-125",
      delay: 3200,
      rotation: 120,
    },
    {
      className:
        "absolute top-76 right-32 invisible xl:visible transform xl:scale-125",
      delay: 3400,
      rotation: 120,
    },
    {
      className:
        "absolute top-84 right-20 invisible xl:visible transform xl:scale-125",
      delay: 3800,
      rotation: 130,
    },
    {
      className:
        "absolute top-90 right-8 invisible xl:visible transform xl:scale-125",
      delay: 4000,
      rotation: 120,
    },
  ];

  return (
    <section
      className={cn(
        "relative px-4 sm:px-6 py-8 sm:py-12 lg:py-16 overflow-hidden",
        colorClasses.background.primary,
      )}
    >
      <PawPrintTrail positions={pawPrintPositions} />

      <div className="max-w-lg sm:max-w-2xl lg:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 order-1 z-99">
          <h1
            className={cn(
              "text-center sm:text-left font-bold leading-tight",
              colorClasses.text.primary,
              t.display,
            )}
          >
            COMPROMETIDOS CON EL BIENESTAR ANIMAL Y UNA SOCIEDAD MAS HUMANA.
          </h1>
          {/* Desktop / large screens button */}
          <div className="hidden lg:block">
            <CustomButton
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              AYÚDANOS
            </CustomButton>
          </div>
        </div>

        <div className="relative order-2">
          <div className="relative flex justify-center items-center">
            {/* Main golden retriever image */}
            <div
              className={`rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 aspect-square w-64 h-64 sm:w-80 sm:h-80 lg:w-125 lg:h-125 transition-all duration-1000 ease-out ${
                isImageLoaded
                  ? "transform scale-100 opacity-100"
                  : "transform scale-75 opacity-0"
              }`}
            >
              <img
                src="/GatoPortada2.jpg"
                alt="Happy golden retriever on beach"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Additional circular images positioned around the main image */}
            <CircularImage
              src="/GatoPortada.jpg"
              alt="Gatito"
              className="-top-3 left-10 sm:-top-2 sm:left-10 md:-top-3 md:left-50  lg:-top-3 lg:left-20"
              delay={500}
              gradientFrom="from-pink-100"
              gradientTo="to-pink-200"
              size="w-25 h-25 sm:w-15 sm:h-15 md:w-25 md:h-25"
            />

            <CircularImage
              src="/PerroPortada.jpg"
              alt="French bulldog"
              className="top-0 right-15 sm:-top-9 sm:right-1 md:-top-5 md:right-60 lg:top-0 lg:right-15"
              delay={700}
              gradientFrom="from-green-100"
              gradientTo="to-green-200"
              size="w-20 h-20 sm:w-25 sm:h-25 md:w-20 md:h-20"
            />

            <CircularImage
              src="/PerroPortada2.jpg"
              alt="Senior dog"
              className="-bottom-1 right-15 sm:-bottom-1 sm:right-1 md:-bottom-5 md:right-60 lg:-bottom-1 lg:right-10"
              delay={900}
              gradientFrom="from-purple-100"
              gradientTo="to-purple-200"
              size="w-25 h-25 sm:w-15 sm:h-15 md:w-30 md:h-30"
            />

            <CircularImage
              src="/PerroPortada3.jpg"
              alt="Small dog"
              className="-bottom-4 left-15 sm:-bottom-4 sm:left-8 md:-bottom-5 md:left-60 lg:-bottom-4 lg:left-18"
              delay={1100}
              gradientFrom="from-orange-100"
              gradientTo="to-orange-200"
              size="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20"
            />
          </div>
        </div>
      </div>
      {/* Mobile / tablet button (below images) */}
      <div className="block lg:hidden mt-10 flex justify-center">
        <CustomButton variant="secondary" size="lg">
          AYÚDANOS
        </CustomButton>
      </div>
    </section>
  );
}
