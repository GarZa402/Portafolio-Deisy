import { Camera, Palette, Globe } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export default function HeroSection() {
  return (
    <>
      <section className="hero pdf-page relative h-screen flex items-center justify-center overflow-hidden pb-12 md:pb-0">
        <div className="absolute -left-10 top-20 text-[#f425af]/10 text-[25vw] font-bold leading-none select-none pointer-events-none transform -skew-x-12">
          CREATIVA
        </div>
        <div className="relative z-10 px-6 max-w-7xl w-full">
          <Reveal animation="fadeIn" delay={200}>
            <h1 className="text-white text-5xl md:text-8xl font-bold leading-tight tracking-tighter">
              DISEÑO / <span className="text-[#f425af] italic">VISUAL</span> /{" "}
              <br />
              <span className="text-[#fbef2c] border-4 border-[#fbef2c] px-4 inline-block">
                PORTFOLIO
              </span>
            </h1>
          </Reveal>
          <Reveal animation="fadeUp" delay={400}>
            <p className="mt-8 text-[#f425af] text-xl md:text-2xl font-medium max-w-md bg-[#22101c] p-4 border-2 border-[#f425af] shadow-[8px_8px_0px_0px_#f425af]">
              Creando experiencias visuales unicas desde 2022. Transformando ideas en arte digital vibrante.
            </p>
          </Reveal>
        </div>
        <div className="absolute right-10 bottom-20 text-[#fbef2c] font-bold text-xl md:text-2xl tracking-widest writing-mode-vertical">
          DESCUBRE MAS →
        </div>
      </section>

      <div className="bg-[#f425af] py-4 border-y-4 border-[#22101c] overflow-hidden transform rotate-1">
        <div className="flex gap-8 items-center animate-marquee-infinite">
          <span className="text-3xl md:text-4xl font-black uppercase italic text-[#22101c] whitespace-nowrap">
            Diseño Grafico
          </span>
          <Camera className="w-12 h-12 text-[#22101c] flex-shrink-0" />
          <span className="text-3xl md:text-4xl font-black uppercase italic text-[#22101c] whitespace-nowrap">
            Arte Digital
          </span>
          <Palette className="w-12 h-12 text-[#22101c] flex-shrink-0" />
          <span className="text-3xl md:text-4xl font-black uppercase italic text-[#22101c] whitespace-nowrap">
            Diseño Web
          </span>
          <Globe className="w-12 h-12 text-[#22101c] flex-shrink-0" />
          <span className="text-3xl md:text-4xl font-black uppercase italic text-[#22101c] whitespace-nowrap">
            Fotografia
          </span>
          <Camera className="w-12 h-12 text-[#22101c] flex-shrink-0" />

          <span className="text-3xl md:text-4xl font-black uppercase italic text-[#22101c] whitespace-nowrap">
            Diseño Grafico
          </span>
          <Camera className="w-12 h-12 text-[#22101c] flex-shrink-0" />
          <span className="text-3xl md:text-4xl font-black uppercase italic text-[#22101c] whitespace-nowrap">
            Arte Digital
          </span>
          <Palette className="w-12 h-12 text-[#22101c] flex-shrink-0" />
          <span className="text-3xl md:text-4xl font-black uppercase italic text-[#22101c] whitespace-nowrap">
            Diseño Web
          </span>
          <Globe className="w-12 h-12 text-[#22101c] flex-shrink-0" />
          <span className="text-3xl md:text-4xl font-black uppercase italic text-[#22101c] whitespace-nowrap">
            Fotografia
          </span>
          <Camera className="w-12 h-12 text-[#22101c] flex-shrink-0" />
        </div>
      </div>
    </>
  );
}