import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Gallery />
      <Contact />

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-8 py-24">

          <div className="grid md:grid-cols-3 gap-16">

            {/* Marca */}
            <div>
              <p className="text-3xl font-light tracking-[6px] mb-6">
                HC
              </p>

              <p className="text-zinc-400 leading-8 max-w-sm">
                Una experiencia privada alrededor del
                Caballo Peruano de Paso, donde tradición,
                naturaleza y elegancia se encuentran.
              </p>
            </div>

            {/* Navegación */}
            <div>
              <p className="uppercase tracking-[4px] text-amber-400 text-sm mb-8">
                Explora
              </p>

              <div className="flex flex-col gap-4 text-zinc-300">
                <a href="#inicio" className="hover:text-amber-300 transition">
                  Inicio
                </a>

                <a href="#nosotros" className="hover:text-amber-300 transition">
                  Nosotros
                </a>

                <a href="#experiencias" className="hover:text-amber-300 transition">
                  Experiencias
                </a>

                <a href="#galeria" className="hover:text-amber-300 transition">
                  Galería
                </a>

                <a href="#contacto" className="hover:text-amber-300 transition">
                  Contacto
                </a>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <p className="uppercase tracking-[4px] text-amber-400 text-sm mb-8">
                Contacto
              </p>

              <div className="space-y-4 text-zinc-300">
                <p>Huánuco, Perú</p>
                <p>Experiencias privadas</p>
                <p>Previa reserva</p>
              </div>

              <a
                href="#contacto"
                className="inline-flex mt-8 rounded-full border border-amber-400 px-7 py-3 hover:bg-amber-400 hover:text-black transition-all duration-500"
              >
                Reservar experiencia
              </a>
            </div>

          </div>

          {/* Línea inferior */}
          <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-500">
            <p>
              © {new Date().getFullYear()} HC Centro Ecuestre. Todos los derechos reservados.
            </p>

            <p>
              Caballo Peruano de Paso
            </p>
          </div>

        </div>
      </footer>
    </main>
  );
}