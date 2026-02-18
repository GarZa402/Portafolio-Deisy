import { Palette, Globe, Camera } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function SkillsSection() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-10 bg-[#fbef2c]">
      <Reveal animation="fadeUp">
        <h2 className="text-[#22101c] text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter transform -skew-x-12 mb-12 md:mb-20 text-center">
          MIS_SKILLS
        </h2>
      </Reveal>
      
      <Reveal animation="fadeUp" delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-[#22101c] max-w-7xl mx-auto">
          {/* Diseño Gráfico */}
          <div className="p-6 sm:p-8 md:p-10 border-b-4 md:border-b-0 md:border-r-4 border-[#22101c] hover:bg-[#22101c] hover:text-white transition-colors group">
            <Palette className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#22101c] group-hover:text-[#f425af] mb-4 md:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 uppercase transform -skew-x-6 md:-skew-x-12 break-words">
              Diseño Gráfico
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold leading-tight">
              Creación de identidades visuales que comunican y conectan con tu audiencia.
            </p>
          </div>

          {/* Diseño Web */}
          <div className="p-6 sm:p-8 md:p-10 border-b-4 md:border-b-0 md:border-r-4 border-[#22101c] bg-[#22101c] text-white hover:bg-white hover:text-[#22101c] transition-colors group">
            <Globe className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#f425af] group-hover:text-[#fbef2c] mb-4 md:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 uppercase transform -skew-x-6 md:-skew-x-12 break-words">
              Diseño Web
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold leading-tight">
              Experiencias digitales intuitivas y visualmente impactantes para tu marca.
            </p>
          </div>

          {/* Fotografía */}
          <div className="p-6 sm:p-8 md:p-10 hover:bg-[#f425af] transition-colors group">
            <Camera className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#22101c] group-hover:text-white mb-4 md:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 md:mb-4 uppercase transform -skew-x-6 md:-skew-x-12 break-words">
              Fotografía
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-bold leading-tight">
              Capturando momentos y creando narrativas visuales únicas y memorables.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}