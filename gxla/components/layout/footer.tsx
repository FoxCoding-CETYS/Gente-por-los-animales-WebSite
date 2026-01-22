import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <>
      <div
        id="contacto"
        className="flex flex-col md:flex-row justify-center gap-8 lg:gap-[20%] md:gap-[12%] sm:gap-8 bg-[#1E2939] text-white px-10 py-10 w-full"
      >
        <div className="md:w-1/3">
          <Image src="/GXLA_Logo.png" alt="Logo" width={195} height={74} />
          <p className="mt-3 text-base md:text-md lg:text-lg">
            Nuestra misión es promover el bienestar animal mediante los
            programas de esterilización, adopción, educación y denuncia
            ciudadana; e incidir en las políticas públicas que determinen las
            autoridades para el control ético de la población canina y felina.
          </p>
        </div>

        <div>
          <h1 className="font-bold text-4xl mb-2"> Contacto </h1>
          <a
            className="text-base md:text-lg lg:text-xl"
            href="mailto:genteporlosanimales@gmail.com"
          >
            genteporlosanimales@gmail.com
          </a>
        </div>

        <div className="flex flex-col md:mx-auto md:text-center md:items-center">
          <h1 className="font-bold text-4xl mb-5"> Síguenos </h1>
          <div className="flex gap-5">
            <Link
              href="https://www.facebook.com/genteporlosanimales"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Facebook className="w-10 h-10 border rounded-md p-1" />
            </Link>
            <Link
              href="https://www.instagram.com/genteporlosanimales/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Instagram className="w-11 h-11" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
