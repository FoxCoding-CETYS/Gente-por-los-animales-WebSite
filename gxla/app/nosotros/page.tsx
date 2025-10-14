import { CustomButton } from "@/components/ui/custom-button";
import { CustomCard } from "@/components/ui/custom-card";

export default function NosotrosPage() {
    return(
        <>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center py-32 px-3 mt-12 w-screen bg-[#05DF72] text-black text-center">
                <h1 className="font-geist text-black text-6xl font-bold mt-10 md:text-[50px]"> ¿Quiénes somos? </h1>
                <p className="text-3xl"> Conoce nuestra historia, misión y los valores que nos impulsan a trabajar por el bienestar animal. </p>
            </div>
            {/* Historia */}
            <div className="w-screen flex flex-col items-center text-center px-4 gap-4">
                <h2 className="pt-10 font-bold lg:text-[36px] sm:text-[24px]">Historia</h2>
                <p className="lg:w-[1161px] sm:w-[270px] lg:text-[20px] sm:text-[14px]">
                    Para muchas personas, el primer contacto consciente con el reino animal es a través de los perros y gatos con los que en algún momento convivimos. Lamentablemente, se ha vuelto común verlos en las calles, sin supervisión, hambrientos, enfermos o atropellados, exhibiendo nuestra falta de responsabilidad y poniendo a prueba la indiferencia de la gente.<br/><br/>
                    Gente por los Animales, A.C. surgió como un esfuerzo para contribuir con la protección del ambiente desde la trinchera del bienestar animal, y más específicamente, de los animales de compañía.
                </p>
                {/* Cambiar el color del boton */}
                <CustomButton size="lg" className="mb-14 mt-6">LEER HISTORIA COMPLETA</CustomButton>
            </div>
            {/* Mision y vision */}
            <div className=" flex bg-[#F9FAFB] w-screen flex-row justify-center gap-10 lg:py-20 sm:py-10 lg:flex-row sm:flex-col">
                <CustomCard variant="normal" size="lg" icon="/Circle.png" title="Misión">Promover el bienestar animal mediante los programas de esterilización, adopción, educación y denuncia ciudadana; e incidir en las políticas públicas que determinen las autoridades para el control ético de la población canina y felina.</CustomCard>
                <CustomCard variant="normal" size="lg" icon="/Circle.png" title="Visión">Ser una asociación civil profesional, activa e innovadora, que contribuya al bienestar de la sociedad mediante la implementación de programas integrales en Mexicali que fomenten el bienestar animal.</CustomCard>
            </div>
            {/* Valores */}
            <div className=" flex bg-[#F9FAFB] w-screen flex-row justify-center gap-10 lg:py-20 sm:py-10 lg:flex-row sm:flex-col">
                <CustomCard variant="big"
                title1="Participación"
                text1="Aspiramos al involucramiento de la sociedad civil en estrategias que contribuyan a resolver problemáticas comunes."
                title2="Respeto"
                text2="Animamos a conducirse de manera considerada, con independencia de las diferencias que puedan llegar a surgir entre las personas."
                title3="Compromiso"
                text3="Edificamos nuestra labor sobre el compromiso individual hacia la causa, el equipo de trabajo, y los usuarios de nuestros servicios."
                title4="Responsabilidad"
                text4="Fomentamos que los voluntarios cumplan con sus obligaciones, enfrentando con inteligencia las situaciones que se le presenten."
                title5="Compasión"
                text5="Procuramos colocarnos en el lugar del otro, para entender sus necesidades y ayudarlo en la medida de nuestras posibilidades."
                title6="Apertura"
                text6="Propiciamos la consideración de ideas diversas, para el enriquecimiento de las propias."
                icon="/heart.png"
                title="Nuestros valores"
                ></CustomCard>
            </div>
            {/* Objetivos */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-geist text-black text-6xl font-bold mt-10 md:text-[50px]"> Objetivos </h1>
                <div className="flex flex-row">
                    <ul className="list-disc">
                        <li>Reubicar con familias responsables y cariñosas, a través del programa de adopción, a aquellos animales que han sido rescatados de la calle, abandonados, maltratados y/o que otras personas ya no pueden cuidar.</li>
                        <li>Incrementar la cantidad de perros y gatos esterilizados.</li>
                        <li>Concientizar sobre las necesidades de los animales de compañía y el respeto hacia los mismos.</li>
                        <li>Educar sobre bienestar animal y la importancia de la esterilización de los animales de compañía.</li>
                        <li>Promover reglas básicas para una convivencia respetuosa entre los guardianes de animales y el resto de la sociedad.</li>
                        <li>Supervisar la aplicación del marco jurídico relacionado con el bienestar animal.</li>
                    </ul>
                    <ul className="list-disc">
                        <li>Impulsar la utilización de métodos humanitarios para la captura y la matanza de animales de compañía.</li>
                        <li>Incidir en políticas públicas para el control ético de la población canina y felina.</li>
                        <li>Participar con las autoridades de los distintos órdenes de gobierno, competentes para atender asuntos de bienestar animal.</li>
                        <li>Fomentar la participación ciudadana en temas relacionados con el bienestar animal.</li>
                        <li>Vincularse con instituciones académicas, asociaciones de profesionistas y el sector empresarial.</li>
                        <li>Colaborar con organismos de la sociedad civil que promuevan valores similares a los nuestros.</li>
                    </ul>
                </div>
            </div>
            {/* Alianzas estrategicas */}
            <div className="bg-[#F9FAFB]">
                <CustomCard variant="normal" size="lg" icon="/Circle.png" title="Clínica y Estética Canina" className="w-72 h-80">Atención médica para animales en adopción y programas de esterilización</CustomCard>
            </div>
            {/* Patrocinadores */}
            <div>
            
            </div>
            {/* Financiamiento */}
            <div className="bg-[#F9FAFB]">

            </div>
            {/* Call to action */}
            <div>

            </div>
        </>
    );
}