import { Palette } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function ProcesoSection() {
  return (
    <section id="proceso" className="py-32 px-8 bg-[#1a0a15]">
      <div className="max-w-7xl mx-auto">
        <Reveal animation="fadeUp">
        <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter transform -skew-x-12 mb-20 text-center">
          MI_PROCESO
        </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Reveal animation="slideRight" delay={100}>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#f425af] rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a7 7 0 00-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 00-7-7zM9 21a1 1 0 001 1h4a1 1 0 001-1v-1H9v1z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-white mb-3">
              1. DESCUBRIR
            </h3>
            <p className="text-gray-400">
              Investigacion profunda del proyecto, audiencia y objetivos.
            </p>
          </div>
          </Reveal>

          <Reveal animation="slideRight" delay={300}>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#fbef2c] rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[#22101c]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-white mb-3">2. DEFINIR</h3>
            <p className="text-gray-400">
              Establecer la estrategia visual y conceptos clave.
            </p>
          </div>
          </Reveal>

          <Reveal animation="slideRight" delay={500}>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              <Palette className="w-12 h-12 text-[#22101c]" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">3. DISENAR</h3>
            <p className="text-gray-400">
              Crear propuestas visuales innovadoras y funcionales.
            </p>
          </div>
          </Reveal>

          <Reveal animation="slideRight" delay={600}>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#f425af] rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-white mb-3">4. ENTREGAR</h3>
            <p className="text-gray-400">
              Finalizar detalles y lanzar el proyecto al mundo.
            </p>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
