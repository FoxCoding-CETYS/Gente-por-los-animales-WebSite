"use client";

import { CustomButton } from "@/components/ui/custom-button";
import { CustomCard } from "@/components/ui/custom-card";
import React from "react";
import { t, cn } from "@/lib/typography";
import { SponsorsAlliesSection } from "@/components/sections/sponsors-allies-section";
import { CTABanner } from "@/components/sections/cta-banner";
import { Eye, Heart, Leaf, PawPrint, Star, Target } from "lucide-react";

export default function NosotrosPage() {
  const [completo, setCompleto] = React.useState(false);
  const HistoriaCompleta = () => setCompleto(!completo);

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center lg:py-16 py-8 w-full bg-[#05DF72] text-black text-center gap-6">
        <h1 className={cn("font-geist text-black font-bold", t.display)}>
          ¿QUIÉNES SOMOS?
        </h1>
        <p className={cn("w-11/12 lg:w-6/12", t.bodyHero)}>
          Conoce nuestra historia, misión y los valores que nos impulsan a
          trabajar por el bienestar animal.
        </p>
      </div>

      {/* Historia */}
      <div className="w-full flex flex-col items-center text-center px-4 gap-4">
        <h2 className={cn("pt-10 font-bold", t.subtitle)}>HISTORIA</h2>

        <p className={cn("lg:w-9/12 text-left leading-9", t.body)}>
          Para muchas personas, el primer contacto consciente con el reino
          animal es a través de los perros y gatos con los que en algún momento
          convivimos. Lamentablemente, se ha vuelto común verlos en las calles,
          sin supervisión, hambrientos, enfermos o atropellados, exhibiendo
          nuestra falta de responsabilidad y poniendo a prueba la indiferencia
          de la gente.
          <br />
          <br /> Gente por los Animales, A.C. surgió como un esfuerzo para
          contribuir con la protección del ambiente desde la trinchera del
          bienestar animal, y más específicamente, de los animales de compañía.
        </p>

        {completo && (
          <p className={cn("lg:w-9/12 text-left leading-9", t.body)}>
            La apertura del Centro Municipal de Control Animal de Mexicali en el
            año 2006, detonó nuestra intención de hacer algo, obligándonos a
            actuar para brindarles una segunda oportunidad a estos animales, que
            de otra manera serían capturados y sacrificados. <br />
            <br /> A través de un correo electrónico, nos pusimos en contacto
            varias personas con una visión similar sobre la forma de trabajo
            para ayudar a estos animales. Así, Patricia Torres e Ivonne Cannett,
            definieron en primera instancia el que sería nuestro programa de
            adopciones, basado en un sistema de casas puente y hogares
            temporales. <br />
            <br /> Dos perros rescatados del Centro Municipal de Control Animal
            – Stuart y Brandy – fueron los primeros animales ingresados al
            programa de adopción. Sus fotos e historias se publicaron en la
            primera página de internet, elaborada por Alberto Mexía. <br />
            <br /> El 28 de julio de 2006 se publicó una nota en un importante
            diario de nuestra comunidad, en la cual se expuso brevemente el
            propósito del programa de adopciones de Gente por los Animales. A
            raíz del mismo, varias personas se comunicaron con la intención de
            participar. <br />
            <br /> Tras casi un año de actividades y con grupo más consolidado,
            el 5 de junio del año 2007 firmamos el acta constitutiva mediante la
            cual Gente por los Animales adquirió personalidad jurídica como una
            asociación civil sin fines de lucro. <br />
            <br />{" "}
            <b>
              Fundadores: Patricia Torres, Yazmin Valdez, Isela Landeros, Yissel
              Vidal, Ivonne Cannet, Thelma Gutiérrez, Claudia Mora, Karina
              Cázarez, Paloma Ponce, Julio Guerrero, Brenda López, David
              Esparza, Michelle Esparza y Mónica Acosta.
            </b>
            <br />
            <br /> En abril del 2009 Gente por los Animales fue reconocido con
            el Premio UVM por el Desarrollo Social auspiciado por la
            International Youth Foundation. Un año después nos convertimos en
            donataria autorizada por el SAT. <br />
            <br />
          </p>
        )}

        <CustomButton
          size="lg"
          className="mb-14 mt-6 shadow-lg"
          variant="outline"
          onClick={HistoriaCompleta}
        >
          {completo ? "OCULTAR" : "LEER HISTORIA COMPLETA"}
        </CustomButton>
      </div>

      {/* Misión y Visión */}
      <div className="w-full bg-[#F9FAFB] ">
        <div className="flex w-11/12 md:w-9/12 mx-auto flex-col justify-center">
          <div className="flex lg:flex-row justify-center items-center gap-12 lg:mt-20 flex-col mt-12">
            <CustomCard
              variant="normal"
              size="lg"
              icon={<Target className="w-10 h-10" color="#05c665" />}
              title="MISIÓN"
            >
              <p className={t.body}>
                Promover el bienestar animal mediante los programas de
                esterilización, adopción, educación y denuncia ciudadana; e
                incidir en las políticas públicas que determinen las autoridades
                para el control ético de la población canina y felina.
              </p>
            </CustomCard>
            <CustomCard
              variant="normal"
              size="lg"
              icon={<Eye className="w-10 h-10" color="#05c665" />}
              title="VISIÓN"
            >
              <p className={t.body}>
                Ser una asociación civil profesional, activa e innovadora, que
                contribuya al bienestar de la sociedad mediante la
                implementación de programas integrales en Mexicali que fomenten
                el bienestar animal.
              </p>
            </CustomCard>
          </div>

          {/* Valores */}
          <div className="flex bg-[#F9FAFB] w-full mx-auto flex-row justify-center items-center gap-10 lg:my-20 my-10 lg:flex-row sm:flex-col">
            <CustomCard
              variant="big"
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
              icon={
                <div className="mb-3">
                  <Leaf className="w-10 h-10" color="#05c665" />
                </div>
              }
              title="VALORES"
            />
          </div>
        </div>
      </div>

      {/* Objetivos */}
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <h1 className={cn("font-geist text-black font-bold mt-10", t.display)}>
          OBJETIVOS
        </h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center mt-8 mb-5 px-6">
          <ul className="list-disc w-10/12 marker:text-[#05c665]">
            <li className={t.body}>
              Reubicar con familias responsables y cariñosas, a través del
              programa de adopción, a aquellos animales que han sido rescatados
              de la calle, abandonados, maltratados y/o que otras personas ya no
              pueden cuidar.{" "}
            </li>
            <br />
            <li className={t.body}>
              Incrementar la cantidad de perros y gatos esterilizados.{" "}
            </li>
            <br />
            <li className={t.body}>
              Concientizar sobre las necesidades de los animales de compañía y
              el respeto hacia los mismos.{" "}
            </li>
            <br />
            <li className={t.body}>
              Educar sobre bienestar animal y la importancia de la
              esterilización de los animales de compañía.{" "}
            </li>
            <br />
            <li className={t.body}>
              Promover reglas básicas para una convivencia respetuosa entre los
              guardianes de animales y el resto de la sociedad.{" "}
            </li>
            <br />
            <li className={t.body}>
              Supervisar la aplicación del marco jurídico relacionado con el
              bienestar animal.
            </li>
            <br />
          </ul>

          <ul className="list-disc w-10/12 marker:text-[#05c665]">
            <li className={t.body}>
              Impulsar la utilización de métodos humanitarios para la captura y
              la matanza de animales de compañía.{" "}
            </li>
            <br />
            <li className={t.body}>
              Incidir en políticas públicas para el control ético de la
              población canina y felina.{" "}
            </li>
            <br />
            <li className={t.body}>
              Participar con las autoridades de los distintos órdenes de
              gobierno, competentes para atender asuntos de bienestar
              animal.{" "}
            </li>
            <br />
            <li className={t.body}>
              Fomentar la participación ciudadana en temas relacionados con el
              bienestar animal.
            </li>
            <br />
            <li className={t.body}>
              Vincularse con instituciones académicas, asociaciones de
              profesionistas y el sector empresarial.
            </li>
            <br />
            <li className={t.body}>
              Colaborar con organismos de la sociedad civil que promuevan
              valores similares a los nuestros.{" "}
            </li>
            <br />
          </ul>
        </div>
      </div>

      {/* Alianzas estratégicas */}
      <SponsorsAlliesSection />

      {/* Financiamiento */}
      <div id="financiamiento" className="bg-[#F9FAFB] w-full">
        <div className="w-10/12 flex flex-col mx-auto justify-center items-center pb-12">
          <h1 className={cn("font-geist text-black font-bold p-10", t.display)}>
            FINANCIAMIENTO
          </h1>

          <div className="flex lg:flex-row flex-col justify-center gap-10 items-center">
            <CustomCard
              variant="vertical"
              size="lg"
              icon={
                <div className="bg-blue-100 p-3 rounded-full">
                  <PawPrint className="w-10 h-10" color="blue" />
                </div>
              }
              title="CUOTAS DE RECUPERACIÓN"
              className="w-11/12"
            >
              <p className={cn("text-left", t.body)}>
                Al prestar algunos de los servicios de la organización, se
                requieren cuotas de recuperación que ayuden a solventar en todo
                o en parte el costo que esto representa. <br />
                <br /> Por ejemplo, al adoptar un perro o un gato, se solicita
                una cuota de recuperación que, si bien no solventa en su
                totalidad la inversión que la asociación realiza en cada uno de
                los animales, resulta de ayuda para compensar una parte.
              </p>
            </CustomCard>

            <CustomCard
              variant="vertical"
              size="lg"
              icon={
                <div className="bg-red-100 p-3 rounded-full">
                  <Heart className="w-10 h-10" color="red" />
                </div>
              }
              title="DONATIVOS"
              className="w-11/12"
            >
              <p className="text-left text-base sm:text-lg lg:text-xl">
                {" "}
                <b className="font-bold">Donativos en especie:</b> <br />{" "}
                Alimento para perro o gato sellado y vigente, arena para gato,
                transportadoras, jaulas, cercos, correas, collares, shampoos,
                cepillos, entre otros. <br />
                <br /> <b className="font-bold">
                  Donativos económicos:
                </b> <br /> <b className="font-bold">Cuenta BBVA:</b> 0197361246{" "}
                <br /> <b className="font-bold">CLABE:</b> 021020040411774038{" "}
                <br /> <b className="font-bold">PayPal:</b>{" "}
                <a
                  href="https://www.paypal.me/genteporlosanimales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 hover:text-blue-800 transition-colors"
                >
                  paypal.me/genteporlosanimales
                </a>{" "}
              </p>
            </CustomCard>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <CTABanner
        title="¿Quieres ser parte del cambio?"
        subtitle="Únete a nuestra misión de promover el bienestar animal en nuestra comunidad."
        buttonText="Voluntariado"
        buttonVariant="secondary"
        buttonSize="lg"
        buttonHref="mailto:genteporlosanimales@gmail.com"
        backgroundClassName="bg-[#05DF72]"
        textColorClassName="text-black"
      />
    </>
  );
}
