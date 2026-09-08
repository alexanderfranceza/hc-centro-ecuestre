<footer className="bg-[#111111] text-white">

  <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 lg:py-24">

    <div className="grid md:grid-cols-3 gap-12 lg:gap-20">

      {/* MARCA */}
      <div>
        <img
          src="/images/logo-hc.png"
          alt="HC Centro Ecuestre"
          className="w-12 sm:w-14 h-auto object-contain mb-6"
        />

        <p className="text-zinc-400 text-sm sm:text-base leading-7 max-w-sm">
          Una experiencia privada alrededor del Caballo Peruano de Paso,
          donde tradición, naturaleza y elegancia se encuentran.
        </p>
      </div>

      {/* NAVEGACIÓN */}
      <div>
        <p className="uppercase tracking-[4px] text-amber-400 text-xs mb-6">
          Explora
        </p>

        <div className="flex flex-col gap-3 text-sm sm:text-base text-zinc-300">

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

        </div>
      </div>

      {/* CONTACTO */}
      <div>
        <p className="uppercase tracking-[4px] text-amber-400 text-xs mb-6">
          Contacto
        </p>

        <div className="space-y-3 text-sm sm:text-base text-zinc-300">
          <p>Huánuco, Perú</p>
          <p>Experiencias privadas</p>
          <p>Previa reserva</p>
        </div>

        <a
          href="https://wa.me/51980621980?text=Hola%20HC%20Centro%20Ecuestre,%20quisiera%20reservar%20una%20experiencia."
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            mt-7
            rounded-full
            border
            border-amber-400
            px-6
            py-3
            text-sm
            hover:bg-amber-400
            hover:text-black
            transition-all
            duration-500
          "
        >
          Reservar experiencia
        </a>
      </div>

    </div>

    {/* PIE */}
    <div className="border-t border-white/10 mt-14 sm:mt-18 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs sm:text-sm text-zinc-500">

      <p>
        © {new Date().getFullYear()} HC Centro Ecuestre.
      </p>

      <p>
        Caballo Peruano de Paso
      </p>

    </div>

  </div>

</footer>