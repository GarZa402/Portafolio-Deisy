import Reveal from "@/components/animations/Reveal";
export default function TestimoniosSection() {
  return (
    <section
      id="testimonios"
      className="pdf-page py-32 px-8 lg:px-20 bg-[#fbef2c] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal animation="fadeUp" delay={200}>
          <h2 className="text-[#22101c] text-5xl md:text-6xl font-black tracking-tighter transform -skew-x-12 mb-20 text-center">
            TESTIMONIOS
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonio 1 */}
          <Reveal animation="slideLeft" delay={100}>
          <div className="bg-white p-8 rounded-xl border-4 border-[#22101c] relative">
            <svg
              className="w-12 h-12 text-[#f425af]/20 absolute top-4 right-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
            </svg>
            <p className="text-[#22101c] text-lg mb-6 italic">
              "Deisy transformó completamente la imagen de mi marca. Su
              creatividad y profesionalismo son excepcionales."
            </p>
          </div>
          </Reveal>

          {/* Testimonio 2 */}
          <Reveal animation="slideLeft" delay={300}>
          <div className="bg-[#22101c] p-8 rounded-xl border-4 border-[#f425af] relative">
            <svg
              className="w-12 h-12 text-[#f425af]/20 absolute top-4 right-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
            </svg>
            <p className="text-white text-lg mb-6 italic">
              "Su atención al detalle y capacidad para entender nuestra visión
              fue impresionante. ¡Resultados increíbles!"
            </p>
          </div>
          </Reveal>

          {/* Testimonio 3 */}
          <Reveal animation="slideLeft" delay={500}>
          <div className="bg-white p-8 rounded-xl border-4 border-[#22101c] relative">
            <svg
              className="w-12 h-12 text-[#f425af]/20 absolute top-4 right-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
            </svg>
            <p className="text-[#22101c] text-lg mb-6 italic">
              "Trabajar con Deisy fue una experiencia fantástica. Entrega
              puntual y diseños que superaron expectativas."
            </p>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
