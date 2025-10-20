"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="sticky top-0 left-0 w-screen bg-white backdrop-blur-md z-1000 shadow-sm shadow-[#00A63E] text-black py-0.5">
            <div className="flex items-center justify-between h-full px-2 py-2 mx-5 my-4 gap-10">
                <div>
                    <Image 
                        src="/GXLA_Logo.png" 
                        alt="Logo"
                        width={164}
                        height={74}
                    />
                </div>
            <div>
                <ul className="hidden md:flex justify-center space-x-5 lg:gap-5 md:gap-2 items-center">
                    <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] transition-all duration-300 hover:scale-105 origin-center">
                        <Link href="/">Inicio</Link>
                    </li>
                    <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] transition-all duration-300 hover:scale-105 origin-center">
                        <Link href="/nosotros">¿Quienes somos?</Link>
                    </li>
                    <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] transition-all duration-300 hover:scale-105 origin-center">
                        <Link href="#Contacto">Programas</Link>
                    </li>
                    <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] transition-all duration-300 hover:scale-105 origin-center">
                        <Link href="/difusion">Difusión</Link>
                    </li>
                    <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] transition-all duration-300 hover:scale-105 origin-center">
                        <Link href="/acciones">¿Cómo ayudar?</Link>
                    </li>
                    <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] transition-all duration-300 hover:scale-105 origin-center">
                        <Link href="#Contacto">Contacto</Link>
                    </li>
                    <li className="lg:text-[20px] md:text-[14px] bg-[#06F180] shadow-lg py-2 px-4 font-bold rounded-2xl transition-all hover:scale-105 cursor-pointer">
                        <Link href="#Donar">Donar</Link>
                    </li>
                </ul>
            </div>
            

            {!isOpen && (

            <button 
            className="md:hidden text-3xl cursor-pointer text-[#00A63E] hover:scale-110 transition" 
            onClick={() => setIsOpen(!isOpen)}
            >
            ☰
            </button>
            )}
            {isOpen && (
            <button 
            className="md:hidden text-3xl cursor-pointer text-[#00A63E] hover:scale-110 transition" 
                onClick={() => setIsOpen(false)}
            >
                ✖
            </button>
            )}
            {isOpen && (
            <aside className="absolute top-full left-0 w-full bg-white shadow-md shadow-[#00A63E] px-4 py-4">

                <ul className="flex flex-col space-y-4 p-5">
                    <li
                        className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href="/">Inicio</Link>
                    </li>
                    <li
                        className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href="/nosotros">¿Quienes somos?</Link>
                    </li>
                    <li
                        className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href="#Contacto">Programas</Link>
                    </li>
                    <li
                        className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href="/difusion">Difusión</Link>
                    </li>
                    <li
                        className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href="/acciones">¿Cómo ayudar?</Link>
                    </li>
                    <li
                        className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href="#Contacto">Contacto</Link>
                    </li>
                    <li
                        className="text-[18px] bg-[#06F180] py-2 px-4 font-bold rounded-2xl transition-all cursor-pointer hover:scale-102 text-center shadow-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        <Link href="#Donar">Donar</Link>
                    </li>
                </ul>
            </aside>
            )}
            </div>
        </nav>
    );
}