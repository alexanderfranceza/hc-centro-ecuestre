"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/hero/hero-01.jpg",
  "/images/hero/hero-02.jpg",
  "/images/hero/hero-03.jpg",
  "/images/hero/hero-04.jpg",
  "/images/hero/hero-05.jpg",
  "/images/hero/hero-06.jpg",
  "/images/hero/hero-07.jpg",
  "/images/hero/hero-08.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState(0);

  const previousImage = () => {
    setSelected((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setSelected((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <section
        id="galeria"
        className="bg-[#111111] py-32"
      >
        <div className="max-w-7xl mx-auto px-8">

          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[10px] text-amber-400 text-sm">
              Galería
            </p>

            <h2 className="text-5xl md:text-7xl font-light mt-6 leading-tight">
              Cada momento
              <br />
              merece ser recordado.
            </h2>
          </motion.div>

          {/* Fotografía principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div
              className="relative overflow-hidden rounded-[40px] cursor-pointer"
              onClick={() => setSelected(selected)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selected}
                  src={images[selected]}
                  alt="HC Centro Ecuestre"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="
                    w-full
                    h-[520px]
                    md:h-[680px]
                    object-cover
                  "
                />
              </AnimatePresence>

              {/* Zoom */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

              {/* Número */}
              <div className="absolute bottom-8 right-8 text-white/70 text-sm tracking-[4px]">
                {String(selected + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </div>
            </div>

            {/* Flechas */}
            <button
              onClick={previousImage}
              aria-label="Fotografía anterior"
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-black/30
                backdrop-blur-md
                border
                border-white/20
                text-white
                text-xl
                opacity-0
                group-hover:opacity-100
                hover:bg-amber-400
                hover:text-black
                transition-all
                duration-500
              "
            >
              ←
            </button>

            <button
              onClick={nextImage}
              aria-label="Siguiente fotografía"
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                w-12
                h-12
                rounded-full
                bg-black/30
                backdrop-blur-md
                border
                border-white/20
                text-white
                text-xl
                opacity-0
                group-hover:opacity-100
                hover:bg-amber-400
                hover:text-black
                transition-all
                duration-500
              "
            >
              →
            </button>
          </motion.div>

          {/* Miniaturas */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mt-5">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => setSelected(index)}
                className={`
                  relative
                  overflow-hidden
                  rounded-2xl
                  h-20
                  md:h-24
                  transition-all
                  duration-500
                  ${
                    selected === index
                      ? "ring-2 ring-amber-400 opacity-100"
                      : "opacity-50 hover:opacity-100"
                  }
                `}
              >
                <img
                  src={image}
                  alt="Miniatura HC Centro Ecuestre"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}