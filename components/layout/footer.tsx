import { MessageCircle, Mail, Zap, Palette } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer
        id="contacto"
        className="relative bg-[#22101c] py-16 md:py-24 px-6 md:px-10"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-[#f425af]"></div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 max-w-7xl mx-auto">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-6 md:mb-8">
              TRABAJEMOS
              <br />
              <span className="text-[#f425af]">JUNTOS</span>
              <br />
              <span className="text-[#fbef2c]">HOY</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl lg:text-2xl font-bold italic border-l-4 md:border-l-8 border-[#f425af] pl-4 md:pl-6 text-left">
              Disponible para proyectos freelance y colaboraciones creativas.
              ¡Hagamos algo increíble!
            </p>
          </div>
          <div className="flex flex-col gap-6 items-center md:items-end w-full md:w-auto">
            <div className="flex gap-4">
              <a
                href="https://wa.me/573112967238"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 bg-[#f425af] text-white flex items-center justify-center rounded-none shadow-[-6px_6px_0px_0px_#fbef2c] hover:-translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all active:scale-95"
              >
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="mailto:deisy.lopezlo@amigo.edu.co"
                className="w-14 h-14 md:w-16 md:h-16 bg-[#fbef2c] text-[#22101c] flex items-center justify-center rounded-none shadow-[8px_8px_0px_0px_#f425af] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all active:scale-95"
              >
                <Mail className="w-7 h-7 md:w-8 md:h-8" />
              </a>
            </div>
            <div className="text-center md:text-right w-full">
              <p className="text-white font-black text-xl md:text-2xl mb-2">
                CONTACTO_
              </p>
              <a
                className="text-[#f425af] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold hover:text-[#fbef2c] underline break-all md:break-normal"
                href="mailto:deisy.lopezlo@amigo.edu.co"
              >
                DEISY.LOPEZLO@AMIGO.EDU.CO
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32 pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center text-white/40 text-xs md:text-sm font-bold tracking-widest uppercase gap-4 text-center md:text-left">
          <div>© 2026 DEISY YURANY LÓPEZ</div>
          <div>CREATIVIDAD / PASIÓN / DISEÑO</div>
          <div className="flex gap-4 items-center">
            <Zap className="w-4 h-4" />
            <span>SIEMPRE CREANDO</span>
          </div>
        </div>
        <p className="mt-4 text-xs text-white/40 text-center md:text-left">
          Desarrollado por:{" "}
          <a
            href="https://juanjosegarcia.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f425af] hover:text-[yellow] transition-colors"
          >
            Juan José García
          </a>
        </p>
      </footer>
      {/* Bottom Marquee */}
      <div className="bg-[#f425af] py-6 md:py-8 border-t-4 md:border-t-8 border-white overflow-hidden">
        <div className="flex gap-6 md:gap-10 items-center animate-marquee-infinite-slow">
          {/* Set 1 */}
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase italic text-white whitespace-nowrap flex items-center gap-3 md:gap-4">
            Hablemos <Zap className="w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase italic text-white whitespace-nowrap flex items-center gap-3 md:gap-4">
            Diseno con Deisy{" "}
            <Palette className="w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase italic text-white whitespace-nowrap flex items-center gap-3 md:gap-4">
            Disponible para Proyectos{" "}
            <Zap className="w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
          </span>

          {/* Set 2 - Duplicado para loop infinito */}
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase italic text-white whitespace-nowrap flex items-center gap-3 md:gap-4">
            Hablemos <Zap className="w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase italic text-white whitespace-nowrap flex items-center gap-3 md:gap-4">
            Diseno con Deisy{" "}
            <Palette className="w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase italic text-white whitespace-nowrap flex items-center gap-3 md:gap-4">
            Disponible para Proyectos{" "}
            <Zap className="w-6 h-6 md:w-10 md:h-10 flex-shrink-0" />
          </span>
        </div>
      </div>
    </>
  );
}
