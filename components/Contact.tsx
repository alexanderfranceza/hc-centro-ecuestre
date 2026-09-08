export default function Contact() {
  return (
    <section
      id="contacto"
      className="bg-[#F7F4EE] text-[#1b1b1b] py-24 sm:py-28 lg:py-36"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">

        {/* Encabezado */}
        <div className="text-center pt-10 sm:pt-6 lg:pt-0">
          <p className="uppercase tracking-[7px] sm:tracking-[10px] text-amber-600 text-xs sm:text-sm">
            Reservaciones
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-light mt-5 leading-tight">
            Tu próxima experiencia
            <br />
            comienza aquí.
          </h2>

          <p className="max-w-2xl mx-auto mt-7 text-zinc-600 text-sm sm:text-lg leading-7 sm:leading-8">
            Permítenos preparar una experiencia especial alrededor
            del Caballo Peruano de Paso.
          </p>
        </div>

        {/* Contenido */}
        <div className="max-w-3xl mx-auto mt-14 sm:mt-20 text-center">

          <p className="uppercase tracking-[5px] sm:tracking-[6px] text-amber-600 text-xs sm:text-sm mb-6">
            HC CENTRO ECUESTRE
          </p>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            Vive la tradición
            <br />
            de una manera diferente.
          </h3>

          {/* Información */}
          <div className="grid sm:grid-cols-3 gap-8 mt-12 sm:mt-14">

            <div>
              <p className="uppercase tracking-[3px] text-[10px] sm:text-xs text-zinc-500 mb-2">
                Ubicación
              </p>

              <p className="text-sm sm:text-base">
                Hacienda Cachigaga - 
                 carretera central km 16.5 Las Pampas, Tomyakichwa - Huánuco, Perú
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[3px] text-[10px] sm:text-xs text-zinc-500 mb-2">
                Atención
              </p>

              <p className="text-sm sm:text-base">
                Experiencias privadas
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[3px] text-[10px] sm:text-xs text-zinc-500 mb-2">
                Reserva
              </p>

              <p className="text-sm sm:text-base">
                Previa coordinación
              </p>
            </div>

          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 sm:mt-12">

            <a
              href="https://wa.me/51980621980?text=Hola%20HC%20Centro%20Ecuestre,%20quisiera%20reservar%20una%20experiencia."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#111111]
                px-8
                py-4
                text-sm
                sm:text-base
                text-white
                hover:bg-amber-400
                hover:text-black
                transition-all
                duration-500
              "
            >
              Reservar por WhatsApp
            </a>

            <a
              href="https://www.instagram.com/criadero.dc/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-[#111111]
                px-8
                py-4
                text-sm
                sm:text-base
                hover:bg-[#111111]
                hover:text-white
                transition-all
                duration-500
              "
            >
              Instagram
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}