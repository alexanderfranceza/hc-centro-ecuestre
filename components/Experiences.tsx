"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Sesiones Fotográficas",
    description:
      "Captura momentos inolvidables junto al Caballo Peruano de Paso en escenarios naturales únicos.",
    image: "/images/experiences/exp-01.jpg",
  },
  {
    title: "Cabalgatas Privadas",
    description:
      "Disfruta un recorrido exclusivo rodeado de naturaleza y tranquilidad.",
    image: "/images/experiences/exp-02.jpg",
  },
  {
    title: "Sesiones Pre Boda",
    description:
      "Celebra el inicio de una nueva historia con una sesión elegante e inolvidable.",
    image: "/images/experiences/exp-03.jpg",
  },
  {
    title: "Clases de Equitación",
    description:
      "Aprende a montar con seguridad acompañado por caballos entrenados.",
    image: "/images/experiences/exp-04.jpg",
  },
  {
    title: "Clases de Marinera",
    description:
      "Descubre la elegancia de la marinera, a caballo y también a pie.",
    image: "/images/experiences/exp-05.jpg",
  },
  {
    title: "Presentaciones del Caballo Peruano de Paso",
    description:
      "Disfruta la tradición y elegancia del caballo en exhibiciones especiales.",
    image: "/images/experiences/exp-06.jpg",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiencias"
      className="bg-[#111111] text-white py-24 sm:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-28"
        >
          <p className="uppercase tracking-[8px] sm:tracking-[10px] text-amber-400 text-sm">
            Experiencias
          </p>

          <h2
            className="
              text-white
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-light
              mt-5
              leading-tight
            "
          >
            Vive momentos
            <br />
            inolvidables.
          </h2>
        </motion.div>

        {/* EXPERIENCIAS */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-36">

          {experiences.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 lg:gap-16 items-center"
            >

              {/* IMAGEN */}
              <div
                className={`
                  overflow-hidden
                  rounded-[28px]
                  sm:rounded-[36px]
                  ${
                    index % 2 === 1
                      ? "lg:order-2"
                      : ""
                  }
                `}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={1600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="
                    w-full
                    h-[340px]
                    sm:h-[450px]
                    lg:h-[650px]
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* TEXTO */}
              <div
                className={`
                  pt-7
                  sm:pt-8
                  lg:pt-0
                  ${
                    index % 2 === 1
                      ? "lg:order-1"
                      : ""
                  }
                `}
              >

                {/* Número */}
                <p className="text-5xl sm:text-7xl lg:text-8xl font-light text-white/10 mb-2">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Título */}
                <h3
                  className="
                    text-white
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-light
                    leading-tight
                    max-w-xl
                  "
                >
                  {item.title}
                </h3>

                {/* Descripción */}
                <p
                  className="
                    mt-5
                    sm:mt-7
                    text-zinc-300
                    text-base
                    sm:text-lg
                    lg:text-xl
                    leading-7
                    sm:leading-9
                    max-w-lg
                  "
                >
                  {item.description}
                </p>

                {/* Reserva */}
                <a
                  href={`https://wa.me/51980621980?text=${encodeURIComponent(
                    `Hola HC Centro Ecuestre, quisiera reservar una experiencia: ${item.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    mt-7
                    sm:mt-9
                    rounded-full
                    border
                    border-amber-400
                    px-7
                    py-3.5
                    sm:px-8
                    sm:py-4
                    text-sm
                    tracking-wide
                    text-white
                    hover:bg-amber-400
                    hover:text-black
                    transition-all
                    duration-500
                  "
                >
                  Reservar experiencia →
                </a>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}