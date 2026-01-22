"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { NavLink } from "../nav-link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full h-full bg-white backdrop-blur-md z-1000 shadow-sm shadow-green-600 text-black">
      <div className="flex items-center justify-between h-full px-2 py-6 mx-5 gap-10">
        <div>
          <Image src="/GXLA_Logo.png" alt="Logo" width={164} height={74} />
        </div>
        <div>
          <ul className="hidden md:flex justify-center space-x-5 lg:gap-5 md:gap-2 items-center">
            <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-green-500 transition-all duration-300 hover:scale-105 origin-center">
              <NavLink href="/">Inicio</NavLink>
            </li>
            <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-green-500 transition-all duration-300 hover:scale-105 origin-center">
              <NavLink href="/nosotros">¿Quienes somos?</NavLink>
            </li>
            {/*<li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-green-500 transition-all duration-300 hover:scale-105 origin-center">
              <NavLink href="/programas">Programas</NavLink>
            </li>*/}
            <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-green-500 transition-all duration-300 hover:scale-105 origin-center">
              <NavLink href="/difusion">Difusión</NavLink>
            </li>
            <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-green-500 transition-all duration-300 hover:scale-105 origin-center">
              <NavLink href="/acciones">¿Cómo ayudar?</NavLink>
            </li>
            <li className="lg:text-[20px] md:text-[14px] hover:underline hover:underline-offset-4 hover:decoration-green-500 transition-all duration-300 hover:scale-105 origin-center">
              <NavLink href="#contacto">Contacto</NavLink>
            </li>
            <li>
              <NavLink
                href="/nosotros#financiamiento"
                aria-label="Ir a Financiamiento"
              >
                <CustomButton
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  DONAR
                </CustomButton>
              </NavLink>
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
                <NavLink href="/">Inicio</NavLink>
              </li>
              <li
                className="text-[18px] hover:underline hover:underline-aoffset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <NavLink href="/nosotros">¿Quienes somos?</NavLink>
              </li>
              {/* <li
                className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <NavLink href="#Contacto">Programas</NavLink>
              </li> */}
              <li
                className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <NavLink href="/difusion">Difusión</NavLink>
              </li>
              <li
                className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <NavLink href="/acciones">¿Cómo ayudar?</NavLink>
              </li>
              <li
                className="text-[18px] hover:underline hover:underline-offset-4 hover:decoration-[#06F180] hover:scale-102 transition-all duration-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <NavLink href="#contacto">Contacto</NavLink>
              </li>
              <li
                className="text-[18px] bg-[#06F180] py-2 px-4 font-bold rounded-2xl transition-all cursor-pointer hover:scale-102 text-center shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <NavLink
                  href="/nosotros#financiamiento"
                  aria-label="Ir a Financiamiento"
                >
                  Donar
                </NavLink>
              </li>
            </ul>
          </aside>
        )}
      </div>
    </nav>
  );
}
