import ActionsCard from "@/components/ui/actions";


export default function AccionesPage() {
    return(
    <div className="">

        <div className="flex flex-col items-center justify-center py-32 px-3 mt-12 w-screen bg-[#05DF72] text-black text-center">
            <h1 className="text-6xl font-bold"> ¿CÓMO PUEDES AYUDAR?</h1>
            <p className="text-3xl">Elige la forma en que quieres contribuir al bienestar animal en nuestra comunidad.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 p-7 lg:px-9">
            <ActionsCard 
                imagePath="/actionsIcons/corazon.svg"
                imageAlt="Corazón"
                title="Quiero Adoptar"
                text="Encuentra tu compañero perfecto y dale un hogar lleno de amor."
            />
            <ActionsCard 
                imagePath="/actionsIcons/adopt.svg"
                imageAlt="Adoptar"
                title="Quiero Dar en Adopción"
                text="Ayuda a encontrar un nuevo hogar para una mascota que necesita cuidados."
            />
            <ActionsCard 
                imagePath="/actionsIcons/shield.svg"
                imageAlt="Esterilizar"
                title="Quiero Esterilizar"
                text="Accede a nuestros programas de esterilización gratuita o de bajo costo."
            />
            <ActionsCard 
                imagePath="/actionsIcons/learn.svg"
                imageAlt="Aprender"
                title="Quiero Aprender/Educar"
                text="Participa en nuestros programas educativos sobre tenencia responsable."
            />
            <ActionsCard 
                imagePath="/actionsIcons/report.svg"
                imageAlt="Reportar"
                title="Quiero Reportar Maltrato"
                text="Denuncia casos de maltrato animal para que podamos actuar."
            />
            <ActionsCard 
                imagePath="/actionsIcons/search.svg"
                imageAlt="Buscar"
                title="Quiero Reportar Animal Perdido"
                text="Ayuda a reunir mascotas perdidas con sus familias."
            />
            <ActionsCard 
                imagePath="/actionsIcons/volunteer.svg"
                imageAlt="Voluntariado"
                title="Quiero Ser Voluntario"
                text="Únete a nuestro equipo y marca la diferencia en la vida de los animales."
            />
            <ActionsCard 
                imagePath="/actionsIcons/donate.svg"
                imageAlt="Donar"
                title="Quiero Donar"
                text="Tu donación salva vidas y apoya nuestros programas de bienestar animal."
            />
        </div>

        <div className="flex flex-col items-center justify-center py-26 px-3 gap-6 mt-12 w-screen bg-[#F9FAFB] text-black text-center">
            <h1 className="text-4xl font-bold">¿Necesitas Más Información?</h1>
            <p className="text-xl w-3/4 md:w-2/3 lg:w-1/2">Si tienes dudas sobre cualquiera de nuestros servicios o no estás seguro de cuál opción es la mejor para tu situación, no dudes en contactarnos. Nuestro equipo estará encantado de ayudarte.</p>
        
            <div className="flex flex-row justify-between gap-y-2 font-bold items-center w-4/5 lg:w-2/5 text-[14px] lg:text-[20px] md:text-[14px]">
                <button className="bg-[#06F180] flex flex-row shadow-lg py-2 px-4 rounded-2xl transition-all hover:scale-105 cursor-pointer">
                    Contactar por WhatsApp
                </button>
                <button className='text-[#00A63E] bg-[#F9FAFB] rounded-2xl shadow-lg px-4 py-3 cursor-pointer hover:scale-105'>
                    Enviar Email
                </button>  
            </div>
        </div>

    </div>
    );
}