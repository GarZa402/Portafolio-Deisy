import { Palette, Globe, Camera } from "lucide-react";
import Reveal from "@/components/animations/Reveal";


export default function SkillsSection() {
  return (
    <section id="services" className="pdf-page py-32 px-10 bg-[#fbef2c]">
        <Reveal animation="fadeUp">
        <h2 className="text-[#22101c] text-5xl md:text-6xl font-black tracking-tighter transform -skew-x-12 mb-20 text-center">
          MIS_SKILLS
        </h2>
        </Reveal>
        <Reveal animation="fadeUp" delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-[#22101c]">
          <div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-[#22101c] hover:bg-[#22101c] hover:text-white transition-colors group">
            <Palette className="w-16 h-16 text-[#22101c] group-hover:text-[#f425af] mb-6" />
            <h2 className="text-4xl font-black mb-4 uppercase transform -skew-x-12">
              Diseño Gráfico
            </h2>
            <p className="text-xl font-bold leading-tight">
              Creación de identidades visuales que comunican y conectan con tu
              audiencia.
            </p>
          </div>
          <div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-[#22101c] bg-[#22101c] text-white hover:bg-white hover:text-[#22101c] transition-colors group">
            <Globe className="w-16 h-16 text-[#f425af] group-hover:text-[#fbef2c] mb-6" />
            <h2 className="text-4xl font-black mb-4 uppercase transform -skew-x-12">
              Diseño Web
            </h2>
            <p className="text-xl font-bold leading-tight">
              Experiencias digitales intuitivas y visualmente impactantes para
              tu marca.
            </p>
          </div>
          <div className="p-10 hover:bg-[#f425af] transition-colors group">
            <Camera className="w-16 h-16 text-[#22101c] group-hover:text-white mb-6" />
            <h2 className="text-4xl font-black mb-4 uppercase transform -skew-x-12">
              Fotografía
            </h2>
            <p className="text-xl font-bold leading-tight">
              Capturando momentos y creando narrativas visuales únicas y
              memorables.
            </p>
          </div>
        </div>
        </Reveal>
    </section>
  );
}
