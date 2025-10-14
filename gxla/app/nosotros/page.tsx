import { CustomButton } from "@/components/ui/custom-button";
import { CustomCard } from "@/components/ui/custom-card";

export default function NosotrosPage() {
    return(
        <>
            {/* Hero Section */}
            <div className="w-screen flex flex-col items-center lg:h-[321px] sm:h-[93px] bg-[#05DF72] mt-28">
                <h1 className="font-geist text-black lg:text-[64px] sm:text-[24px] font-bold text-center mt-10">¿Quiénes somos?</h1>
                <p className="text-center lg:text-[32px] lg:pl-[67px] lg:pr-[67px] lg:w-[855px] lg:h-[84px] sm:text-[12px] sm:w-[270px] sm:h-[32px] sm:pl-[25px] sm:pr-[25px]">Conoce nuestra historia, misión y los valores que nos impulsan a trabajar por el bienestar animal.</p>
            </div>
            {/* History */}
            <div className="w-screen flex flex-col items-center text-center px-4 gap-4">
                <h2 className="pt-10 font-bold lg:text-[36px] sm:text-[24px]">Historia</h2>
                <p className="lg:w-[1161px] sm:w-[270px] lg:text-[20px] sm:text-[14px]">
                    Para muchas personas, el primer contacto consciente con el reino animal es a través de los perros y gatos con los que en algún momento convivimos. Lamentablemente, se ha vuelto común verlos en las calles, sin supervisión, hambrientos, enfermos o atropellados, exhibiendo nuestra falta de responsabilidad y poniendo a prueba la indiferencia de la gente.<br/><br/>
                    Gente por los Animales, A.C. surgió como un esfuerzo para contribuir con la protección del ambiente desde la trinchera del bienestar animal, y más específicamente, de los animales de compañía.
                </p>
                {/* Cambiar el color del boton */}
                <CustomButton size="lg" className="mb-14 mt-6">LEER HISTORIA COMPLETA</CustomButton>
            </div>
            {/* Mision and vision */}
            <div className="bg-[#F9FAFB] w-screen">
                <CustomCard variant="normal" size="lg">AAA</CustomCard>
            </div>
        </>
    );
}