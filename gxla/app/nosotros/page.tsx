'use client';

import { CustomButton } from "@/components/ui/custom-button";
import { CustomCard } from "@/components/ui/custom-card";
import React from "react";

export default function NosotrosPage() {
    const [completo, setCompleto] = React.useState(false);
    const HistoriaCompleta = () => {
        setCompleto(!completo);
    }
    return(
        <>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center lg:py-24 py-24 px-3 w-screen lg:bg-[#05DF72] md:bg-amber-200 bg-amber-600 text-black text-center gap-6">
                <h1 className="font-geist text-black lg:text-[64px] font-bold md:text-[50px] text-[32px]"> ¿QUIÉNES SOMOS? </h1>
                <p className="lg:text-3xl lg:w-6/12 w-11/12 text-[20px]"> Conoce nuestra historia, misión y los valores que nos impulsan a trabajar por el bienestar animal. </p>
            </div>
            {/* Historia */}
            <div className="w-screen flex flex-col items-center text-center px-4 gap-4">
                <h2 className="pt-10 font-bold lg:text-[36px] text-[32px]">HISTORIA</h2>
                <p className="lg:w-9/12 lg:text-[20px] sm:text-[14px] text-left leading-9">
                    Para muchas personas, el primer contacto consciente con el reino animal es a través de los perros y gatos con los que en algún momento convivimos. Lamentablemente, se ha vuelto común verlos en las calles, sin supervisión, hambrientos, enfermos o atropellados, exhibiendo nuestra falta de responsabilidad y poniendo a prueba la indiferencia de la gente.<br/><br/>
                    Gente por los Animales, A.C. surgió como un esfuerzo para contribuir con la protección del ambiente desde la trinchera del bienestar animal, y más específicamente, de los animales de compañía.
                </p>
                { completo && <p className="lg:w-9/12 lg:text-[20px] sm:text-[14px] text-left leading-9">La apertura del Centro Municipal de Control Animal de Mexicali en el año 2006, detonó nuestra intención de hacer algo, obligándonos a actuar para brindarles una segunda oportunidad a estos animales, que de otra manera serían capturados y sacrificados. <br /><br />
                                A través de un correo electrónico, nos pusimos en contacto varias personas con una visión similar sobre la forma de trabajo para ayudar a estos animales. Así, Patricia Torres e Ivonne Cannett, definieron en primera instancia el que sería nuestro programa de adopciones, basado en un sistema de casas puente y hogares temporales. <br /><br />
                                Dos perros rescatados del Centro Municipal de Control Animal – Stuart y Brandy – fueron los primeros animales ingresados al programa de adopción. Sus fotos e historias se publicaron en la primera página de internet, elaborada por Alberto Mexía. <br /><br />
                                El 28 de julio de 2006 se publicó una nota en un importante diario de nuestra comunidad, en la cual se expuso brevemente el propósito del programa de adopciones de Gente por los Animales. A raíz del mismo, varias personas se comunicaron con la intención de participar. <br /><br />
                                Tras casi un año de actividades y con grupo más consolidado, el 5 de junio del año 2007 firmamos el acta constitutiva mediante la cual Gente por los Animales adquirió personalidad jurídica como una asociación civil sin fines de lucro. <br /><br />
                                <b>Fundadores: Patricia Torres, Yazmin Valdez, Isela Landeros, Yissel Vidal, Ivonne Cannet, Thelma Gutiérrez, Claudia Mora, Karina Cázarez, Paloma Ponce, Julio Guerrero, Brenda López, David Esparza, Michelle Esparza y Mónica Acosta.</b><br /><br />
                            En abril del 2009 Gente por los Animales fue reconocido con el Premio UVM por el Desarrollo Social auspiciado por la International Youth Foundation. Un año después nos convertimos en donataria autorizada por el SAT. <br /><br /></p> }
                {/* Cambiar el color del boton */}
                <CustomButton size="lg" className="mb-14 mt-6 shadow-lg" variant="outline" onClick={HistoriaCompleta}>LEER HISTORIA COMPLETA</CustomButton>
            </div>
            {/* Mision y vision */}
            <div className=" flex bg-[#F9FAFB] w-screen flex-col justify-center">
                <div className="flex lg:flex-row justify-center items-center gap-12 lg:mt-20 flex-col mt-12">
                    <CustomCard variant="normal" size="lg" icon="/Circle.png" title="MISIÓN">Promover el bienestar animal mediante los programas de esterilización, adopción, educación y denuncia ciudadana; e incidir en las políticas públicas que determinen las autoridades para el control ético de la población canina y felina.</CustomCard>
                    <CustomCard variant="normal" size="lg" icon="/Circle.png" title="VISIÓN">Ser una asociación civil profesional, activa e innovadora, que contribuya al bienestar de la sociedad mediante la implementación de programas integrales en Mexicali que fomenten el bienestar animal.</CustomCard>
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
                    title="VALORES"
                    ></CustomCard>
                </div>
            </div>
            {/* Objetivos */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-geist text-black text-6xl font-bold mt-10 md:text-[50px]"> OBJETIVOS </h1>
                <div className="flex flex-row mr-24 ml-24 mt-8 mb-8 gap-20 w-10/12">
                    <ul className="list-disc w-8/12">
                        <li className="text-[20px]">Reubicar con familias responsables y cariñosas, a través del programa de adopción, a aquellos animales que han sido rescatados de la calle, abandonados, maltratados y/o que otras personas ya no pueden cuidar.</li>
                        <li className="text-[20px]">Incrementar la cantidad de perros y gatos esterilizados.</li>
                        <li className="text-[20px]">Concientizar sobre las necesidades de los animales de compañía y el respeto hacia los mismos.</li>
                        <li className="text-[20px]">Educar sobre bienestar animal y la importancia de la esterilización de los animales de compañía.</li>
                        <li className="text-[20px]">Promover reglas básicas para una convivencia respetuosa entre los guardianes de animales y el resto de la sociedad.</li>
                        <li className="text-[20px]">Supervisar la aplicación del marco jurídico relacionado con el bienestar animal.</li>
                    </ul>
                    <ul className="list-disc w-8/12">
                        <li className="text-[20px]">Impulsar la utilización de métodos humanitarios para la captura y la matanza de animales de compañía.</li>
                        <li className="text-[20px]">Incidir en políticas públicas para el control ético de la población canina y felina.</li>
                        <li className="text-[20px]">Participar con las autoridades de los distintos órdenes de gobierno, competentes para atender asuntos de bienestar animal.</li>
                        <li className="text-[20px]">Fomentar la participación ciudadana en temas relacionados con el bienestar animal.</li>
                        <li className="text-[20px]">Vincularse con instituciones académicas, asociaciones de profesionistas y el sector empresarial.</li>
                        <li className="text-[20px]">Colaborar con organismos de la sociedad civil que promuevan valores similares a los nuestros.</li>
                    </ul>
                </div>
            </div>
            {/* Alianzas estrategicas */}
            <div className="bg-[#F9FAFB] flex flex-col justify-center items-center">
                <h1 className="font-geist text-black text-6xl font-bold mt-10 md:text-[36px] text-center"> ALIANZAS ESTRATÉGICAS </h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 p-8 gap-20 justify-center">
                    <CustomCard variant="normal" size="md" icon="/Circle.png" title="Clínica y Estética Canina">Atención médica para animales en adopción y programas de esterilización</CustomCard>
                    <CustomCard variant="normal" size="md" icon="/Circle.png" title="Pet Zone">Clínica veterinaria participante en programas de esterilización</CustomCard>
                    <CustomCard variant="normal" size="md" icon="/Circle.png" title="DIFOSA">Facilita almacén para resguardo y distribución de donativos</CustomCard>
                    <CustomCard variant="normal" size="md" icon="/Circle.png" title="Spay México">Coorganizadora de campañas de esterilización</CustomCard>
                </div>
            </div>
            {/* Patrocinadores */}
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-geist text-black text-6xl font-bold mt-10 text-[36px]"> PATROCINADORES </h1>
                <div className="flex flex-row p-8 gap-10 mt-2 mb-8">
                    <div >
                        <img src="/bunker.png" alt="El bunker colectivo" className="w-44 h-44"/>
                    </div>
                    <div className="w-44 h-44 bg-[#F2F2F2] flex items-center justify-center">
                        <p className="font-bold text-[32px] text-center">Zayda Torres</p>
                    </div>
                    <div className="w-44 h-44 bg-[#F2F2F2] flex items-center justify-center">
                        <p className="font-bold text-[32px] text-center">La Casa de Lolo Café & Matcha</p>
                    </div>
                    <div className="w-44 h-44 bg-[#F2F2F2] flex items-center justify-center">
                        <p className="font-bold text-[32px] text-center">Mega Homes</p>
                    </div>
                </div>
            </div>
            {/* Financiamiento */}
            <div className="bg-[#F9FAFB] flex flex-col justify-center items-center">
                <h1 className="font-geist text-black text-6xl font-bold p-10 md:text-[36px]"> FINANCIAMIENTO </h1>
                <div className="flex flex-row justify-center gap-10">
                    <CustomCard variant="normal" size="lg" icon="/heartblue.png" title="CUOTAS DE RECUPERACIÓN" className="w-11/12">
                        <p className="text-left">
                            Al prestar algunos de los servicios de la organización, se requieren cuotas de recuperación que ayuden a solventar en todo o en parte el costo que esto representa.
                            <br /><br />
                            Por ejemplo, al adoptar un perro o un gato, se solicita una cuota de recuperación que, si bien no solventa en su totalidad la inversión que la asociación realiza en cada uno de los animales, resulta de ayuda para compensar una parte.
                        </p>
                    </CustomCard>
                    <CustomCard variant="normal" size="lg" icon="/heartblue.png" title="DONATIVOS" className="w-11/12">
                        <p className="text-left">
                            <b className="font-bold">Donativos en especie:</b>
                            <br />
                            Alimento para perro o gato sellado y vigente, arena para gato, transportadoras, jaulas, cercos, correas, collares, shampoos, cepillos, entre otros.
                            <br /><br />
                            <b className="font-bold">Donativos económicos:</b>
                            <br />
                            <b className="font-bold">Cuenta BBVA:</b> 0197361246
                            <br />
                            <b className="font-bold">CLABE:</b> 021020040411774038
                            <br />
                            <b className="font-bold">PayPal:</b> paypal.me/genteporlosanimales
                        </p>
                    </CustomCard>
                </div>
            </div>
            {/* Call to action */}
            <div className="flex flex-col items-center justify-center px-3 mt-12 w-screen bg-[#05DF72] text-black text-center">
                <h1 className="font-geist text-black text-3xl font-bold mt-10 md:text-[36px] p-4"> ¿Quiéres ser parte del cambio? </h1>
                <p className="text-[20px] p-5"> Únete a nuestra misión de promover el bienestar animal en nuestra comunidad.</p>
                <CustomButton size="lg" className="mb-14 mt-6" variant="secondary">Voluntariado</CustomButton>
            </div>
        </>
    );
}