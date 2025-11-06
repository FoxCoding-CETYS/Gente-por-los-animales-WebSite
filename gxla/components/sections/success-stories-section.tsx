import { SuccessStoryCard } from "@/components/ui/success-story-card";
import { CustomButton } from "@/components/ui/custom-button";
import { SectionHeader } from "@/components/ui/section-header";
import { colorClasses } from "@/lib/colors";

interface SuccessStory {
  image: string;
  petName: string;
  adoptedBy: string;
  story: string;
  alt: string;
}

export function SuccessStoriesSection() {
  const stories: SuccessStory[] = [
    {
      image: "/golden-retriever-dog-on-beach-looking-happy.png",
      petName: "El nuevo comienzo de Max",
      adoptedBy: "Adoptado por la familia Johnson",
      story:
        "Max llegó asustado y desnutrido, pero con amor y cuidado, ahora es el perro más feliz de nuestro vecindario. ¡Gracias por darnos la oportunidad de salvarlo!",
      alt: "Max the rescued dog",
    },
    {
      image: "/siamese-cat-with-blue-eyes-being-petted.png",
      petName: "La recuperación de Luna",
      adoptedBy: "Adoptada por María Rodríguez",
      story:
        "Luna necesitaba una cirugía costosa que no podíamos costear. Gracias a GXLA, ahora está sana y alegra mucho a nuestra familia cada día.",
      alt: "Luna the rescued cat",
    },
  ];

  return (
    <section
      className={`px-4 sm:px-6 py-12 sm:py-16 ${colorClasses.background.secondary}`}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="HISTORIAS DE EXITO" className="mb-8 sm:mb-12" />

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {stories.map((story, index) => (
            <SuccessStoryCard
              key={index}
              image={story.image}
              petName={story.petName}
              adoptedBy={story.adoptedBy}
              story={story.story}
              alt={story.alt}
            />
          ))}
        </div>

        <div className="text-center">
          <CustomButton variant="outline" size="lg">
            Leer más historias
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
