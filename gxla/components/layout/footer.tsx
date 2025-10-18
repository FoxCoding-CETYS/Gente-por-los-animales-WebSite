import Link from "next/link";
import Image from "next/image";

export function Footer(){
    return(
        <>
        <div className="flex flex-col md:flex-row justify-center lg:gap-[20%] md:gap-[12%] sm:gap-8 bg-[#1E2939] text-white px-10 py-10 w-full">
            <div className="md:w-1/3">
                <Image 
                src="/GXLA_Logo.png" 
                alt="Logo"
                width={195}
                height={74}
                />
                <p className="mt-3">
                    Nuestra misión es promover el bienestar animal mediante los programas de esterilización, adopción, 
                    educación y denuncia ciudadana; e incidir en las políticas públicas que determinen las autoridades 
                    para el control ético de la población canina y felina.
                </p>
            </div>

            <div>
                <h1 className="font-bold text-3xl mb-2"> Contacto </h1>
                <p>genteporlosanimales@gmail.com</p>
            </div>

            <div>
                <h1 className="font-bold text-3xl mb-2"> Siguenos </h1>
                <div className="flex gap-6.5">
                    <Link href="" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <Image 
                        src="/redes/facebook.png" 
                        alt="Facebook"
                        width={55}
                        height={55}
                        />
                    </Link>
                    <Link href="" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <Image 
                        src="/redes/insta.png" 
                        alt="Instagram"
                        width={55}
                        height={55}
                        />
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}