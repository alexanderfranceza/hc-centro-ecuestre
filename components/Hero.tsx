"use client";

import { motion } from "framer-motion";
import HeroSlider from "../components/HeroSlider";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        lg:h-screen
        overflow-hidden
        flex
        items-center
      "
    >
      <HeroSlider />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.78) 0%, rgba(0,0,0,.55) 50%, rgba(0,0,0,.38) 100%)",
        }}
      />

      {/* Contenido */}
      <motion.div
        className="
          relative
          z-10
          w-full
          min-h-screen
          lg:h-screen
          flex
          items-center
        "
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <div
          className="
            w-full
            px-6
            pt-32
            pb-20
            sm:px-10
            lg:pl-32
            lg:pr-10
            lg:pt-24
            lg:pb-20
            max-w-5xl
          "
        >
          {/* Marca */}
          <p
            className="
              uppercase
              tracking-[6px]
              sm:tracking-[8px]
              text-amber-300
              text-[10px]
              sm:text-sm
              mb-5
              sm:mb-6
            "
          >
            HC CENTRO ECUESTRE
          </p>

          {/* Título */}
          <h1
            className="
              text-[2.7rem]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-light
              leading-[0.98]
              max-w-3xl
            "
          >
            Vive el
            <br />
            Caballo Peruano
            <br />
            de Paso
          </h1>

          {/* Descripción */}
          <p
            className="
              mt-7
              sm:mt-10
              max-w-xl
              text-[15px]
              sm:text-xl
              leading-7
              sm:leading-9
              text-zinc-300
            "
          >
            Descubre una experiencia privada donde la tradición,
            la naturaleza y la elegancia se unen para crear
            recuerdos inolvidables.
          </p>

          {/* Botón de reserva */}
          <div
            className="
              mt-9
              sm:mt-12
              flex
              items-start
            "
          >
            <a
              href="https://wa.me/51980621980?text=Hola%20HC%20Centro%20Ecuestre,%20quisiera%20reservar%20una%20experiencia."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-amber-400
                px-7
                py-4
                sm:px-8
                text-black
                font-medium
                text-base
                hover:bg-white
                transition-all
                duration-500
              "
            >
              Reservar experiencia
            </a>
          </div>
        </div>
      </motion.div>

      {/* Indicador solo en escritorio */}
      <div
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          z-10
          text-2xl
          text-white/80
          animate-bounce
          hidden
          lg:block
        "
      >
        ↓
      </div>
    </section>
  );
}