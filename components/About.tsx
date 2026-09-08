"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-[#F7F4EE] text-[#1b1b1b] py-24 sm:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-18 lg:mb-24 pt-10 lg:pt-0"
        >
          <p className="uppercase tracking-[8px] sm:tracking-[10px] text-amber-600 text-sm">
            Nuestra esencia
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight mt-5">
            Más que montar
            <br />
            un caballo.
          </h2>
        </motion.div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/about/about-01.jpg"
              alt="HC Centro Ecuestre"
              className="
                w-full
                h-[500px]
                sm:h-[600px]
                lg:h-[700px]
                object-cover
                rounded-[28px]
                sm:rounded-[40px]
                shadow-2xl
              "
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="uppercase tracking-[6px] text-amber-600 text-sm mb-7">
              HC CENTRO ECUESTRE
            </p>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-7 sm:mb-10">
              Una experiencia
              <br />
              exclusiva alrededor
              <br />
              del Caballo Peruano
              <br />
              de Paso.
            </h3>

            <p className="text-base sm:text-lg leading-8 text-zinc-700">
              En HC Centro Ecuestre creemos que cada visita debe convertirse
              en un recuerdo inolvidable. Nuestras experiencias combinan
              naturaleza, fotografía, tradición y elegancia en un ambiente
              privado donde cada detalle ha sido cuidadosamente preparado.
            </p>
          </motion.div>
        </div>

        {/* Estadísticas */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mt-20 sm:mt-24 lg:mt-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-5xl sm:text-6xl font-light text-amber-600">
              11+
            </h3>
            <p className="uppercase tracking-[3px] sm:tracking-[4px] mt-3 sm:mt-4 text-sm text-zinc-600">
              Caballos
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl sm:text-6xl font-light text-amber-600">
              7+
            </h3>
            <p className="uppercase tracking-[3px] sm:tracking-[4px] mt-3 sm:mt-4 text-sm text-zinc-600">
              Experiencias
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl sm:text-6xl font-light text-amber-600">
              100%
            </h3>
            <p className="uppercase tracking-[3px] sm:tracking-[4px] mt-3 sm:mt-4 text-sm text-zinc-600">
              Privadas
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl sm:text-6xl font-light text-amber-600">
              1
            </h3>
            <p className="uppercase tracking-[3px] sm:tracking-[4px] mt-3 sm:mt-4 text-sm text-zinc-600">
              Tradición Peruana
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}