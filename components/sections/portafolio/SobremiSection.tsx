import Reveal from "@/components/animations/Reveal";

export default function SobremiSection() {
  return (
    <section id="bio" className="py-20 px-8 bg-[#22101c]">
      <div className="max-w-6xl mx-auto">
        <Reveal animation="slideRight">
          <h2 className="text-white text-6xl font-black mb-12">SOBRE MI</h2>
        </Reveal>
        <Reveal animation="fadeUp">
        <div className="max-w-3xl bg-white/5 p-8 border-l-4 border-[#f425af]">
          <p className="text-lg text-gray-300 mb-6">
            Soy{" "}
            <span className="text-[#f425af] font-bold">Deisy Yurany Lopez</span>
            , estudiante de Diseño Grafico en la Universidad Catolica Luis
            Amigo.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Persona con capacidad para trabajar en equipo, alta adaptacion al
            cambio y excelentes relaciones interpersonales. Cuento con
            experiencia en{" "}
            <span className="text-[#fbef2c] font-bold">
              Diseño e ilustracion
            </span>
            , destacandome por el cumplimiento de tareas y trabajos
            preestablecidos.
          </p>
          <p className="text-lg text-gray-300">
            Me caracterizo por mi buen sentido del humor, facilidad de
            integracion y valores como la responsabilidad y el respeto.
          </p>

          <div className="mt-8 p-6 bg-[#f425af]/10 border-l-4 border-[#fbef2c] rounded-r-lg">
            <p className="text-[#fbef2c] font-bold text-lg mb-2 flex items-center gap-2">
              <span className="w-6 h-6"></span> Mi inspiración
            </p>
            <p className="text-gray-300 italic">
              "Me inspira transformar conceptos abstractos en experiencias
              visuales que cuenten historias. Amo diseñar identidades de marca
              que realmente conecten con las personas y crear universos visuales
              que transmitan emociones genuinas."
            </p>
          </div>
        </div>
        </Reveal>
        <Reveal animation="fadeUp">
        <div
          id="skills"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16"
        >
          <div className="bg-black/40 border-4 border-[#f425af]/30 p-10 md:rotate-1 flex flex-col gap-2 rounded-xl">
            <p className="text-[#f425af] text-sm font-bold uppercase tracking-widest">
              Herramientas
            </p>
            <h3 className="text-4xl font-black italic text-white">Adobe</h3>
            <p className="text-gray-400">
              Illustrator, Photoshop, Premiere, InDesign
            </p>
          </div>

          <div className="bg-white text-black p-10 md:-rotate-2 flex flex-col gap-2 rounded-xl md:translate-y-8">
            <p className="text-[#f425af] text-sm font-bold uppercase tracking-widest">
              Diseño UI/UX
            </p>
            <h3 className="text-4xl font-black">Figma</h3>
            <p className="text-gray-600">Prototipos y diseño de interfaces</p>
          </div>

          <div className="bg-[#f425af] text-white p-10 md:rotate-1 flex flex-col gap-2 rounded-xl">
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest">
              Especialidades
            </p>
            <h3 className="text-3xl font-black italic">Multi</h3>
            <p className="text-white/70">
              Fotografía, Arte Digital, Diseño Web
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
