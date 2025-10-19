import SectionHeader from "@/components/sections/SectionHeader";
import ProgramaCard from "@/components/sections/ProgramCard";


export default function DifusionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <br>
      </br>
      <br>
      </br>
      <br></br>
      <br></br>
      <br></br>

      <SectionHeader
        title="DIFUSIÓN"
        description="Compartiendo nuestra misión a través de medios de comunicación para crear conciencia sobre el bienestar animal"
      />

      <section className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          NUESTROS PROGRAMAS DE DIFUSIÓN
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          <ProgramaCard
            title='Sección "De Mascotas y Amigos"'
            subtitle="Periódico La Crónica"
            description="Gracias a la oportunidad brindada por el periódico La Crónica, en el mes de agosto de 2011 comenzamos a publicar una sección en el periódico titulada 'De Mascotas y Amigos', a través de la cual pretendemos informar a la población sobre temas de interés relacionados con el cuidado de los animales de compañía."
            contentList={[
              "Información sobre cuidado de animales de compañía",
              "Animales en espera de adopción con fotos y descripciones",
              "Casos de éxito de animales adoptados",
              "Datos curiosos sobre perros y gatos",
              "Información sobre eventos y actividades",
            ]}
            highlightText="Publicación: Todos los domingos"
            color="yellow"
          />

          <ProgramaCard
            title='Programa "Hola Mexicali"'
            subtitle="Televisa Mexicali"
            description="Desde el 2019 nos brindan un espacio de varios minutos semanalmente en el programa de televisión 'Hola Mexicali', para promover animales en adopción."
            contentList={[
              "Presentación de animales adoptables en vivo",
              "Exhibición de fotografías de mascotas disponibles",
              "Descripción de características y personalidades",
              "Promoción de la adopción responsable",
            ]}
            highlightText="Frecuencia: Semanal desde 2019"
            color="blue"
          />
        </div>
      </section>
    </main>
  );
}
