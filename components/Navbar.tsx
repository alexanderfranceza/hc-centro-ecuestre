"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-black/55 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-black/20 backdrop-blur-md border border-white/10"
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 sm:px-7 lg:px-10 transition-all duration-500 ${
            scrolled ? "py-2" : "py-2.5"
          }`}
        >
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="flex items-center"
          >
            <img
              src="/images/logo-hc.png"
              alt="HC Centro Ecuestre"
              className="
                w-[42px]
                sm:w-[50px]
                lg:w-[58px]
                h-auto
                object-contain
              "
            />
          </a>

          {/* MENÚ DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 uppercase tracking-[3px] text-sm text-white">
            <a
              href="#inicio"
              className="hover:text-amber-300 transition"
            >
              Inicio
            </a>

            <a
              href="#nosotros"
              className="hover:text-amber-300 transition"
            >
              Nosotros
            </a>

            <a
              href="#experiencias"
              className="hover:text-amber-300 transition"
            >
              Experiencias
            </a>

            <a
              href="#galeria"
              className="hover:text-amber-300 transition"
            >
              Galería
            </a>

            <a
              href="#contacto"
              className="hover:text-amber-300 transition"
            >
              Contacto
            </a>
          </nav>

          {/* RESERVAR DESKTOP */}
          <a
            href="https://wa.me/51980621980?text=Hola%20HC%20Centro%20Ecuestre,%20quisiera%20reservar%20una%20experiencia."
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              md:inline-flex
              rounded-full
              px-7
              py-3
              bg-amber-400
              text-black
              border
              border-amber-400
              hover:bg-white
              hover:border-white
              transition-all
              duration-500
            "
          >
            Reservar
          </a>

          {/* HAMBURGUESA MÓVIL */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="
              md:hidden
              w-10
              h-10
              rounded-full
              border
              border-white/20
              text-white
              flex
              items-center
              justify-center
              hover:border-amber-400
              hover:text-amber-400
              transition-all
              duration-300
            "
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Fondo */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={closeMenu}
        />

        {/* Panel */}
        <div
          className={`absolute top-20 left-4 right-4 rounded-[32px] bg-[#111111]/95 border border-white/10 shadow-2xl px-8 py-10 transition-all duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          <nav className="flex flex-col">
            <a
              href="#inicio"
              onClick={closeMenu}
              className="py-4 text-xl font-light text-white border-b border-white/10 hover:text-amber-400 transition"
            >
              Inicio
            </a>

            <a
              href="#nosotros"
              onClick={closeMenu}
              className="py-4 text-xl font-light text-white border-b border-white/10 hover:text-amber-400 transition"
            >
              Nosotros
            </a>

            <a
              href="#experiencias"
              onClick={closeMenu}
              className="py-4 text-xl font-light text-white border-b border-white/10 hover:text-amber-400 transition"
            >
              Experiencias
            </a>

            <a
              href="#galeria"
              onClick={closeMenu}
              className="py-4 text-xl font-light text-white border-b border-white/10 hover:text-amber-400 transition"
            >
              Galería
            </a>

            <a
              href="#contacto"
              onClick={closeMenu}
              className="py-4 text-xl font-light text-white border-b border-white/10 hover:text-amber-400 transition"
            >
              Contacto
            </a>

            <a
              href="https://wa.me/51980621980?text=Hola%20HC%20Centro%20Ecuestre,%20quisiera%20reservar%20una%20experiencia."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-amber-400
                px-6
                py-4
                text-black
                font-medium
                hover:bg-white
                transition-all
                duration-500
              "
            >
              Reservar experiencia
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}