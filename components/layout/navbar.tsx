import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-start mix-blend-difference pointer-events-none">
      <div className="pointer-events-auto flex items-start gap-2 md:gap-4 flex-wrap max-w-[45%] md:max-w-none">
        <h2 className="text-[#f425af] text-2xl md:text-4xl font-bold leading-none tracking-tighter transform -skew-x-12 scale-y-110 whitespace-nowrap">
          DEISY
          <br />
          LÓPEZ
        </h2>
        <a
          href="/Deisy_Lopez_CV.pdf"
          download
          className="inline-flex items-center gap-1 md:gap-2 bg-white text-[#22101c] px-2 md:px-4 py-1 text-xs md:text-sm font-bold -rotate-1 hover:rotate-0 transition-transform cursor-pointer border-2 border-[#22101c] whitespace-nowrap"
          aria-label="Descarga aquí mi CV en PDF"
        >
          <Download className="w-3 h-3 md:w-4 md:h-4" />
          <span className="hidden sm:inline">DESCARGA AQUÍ MI CV</span>
          <span className="sm:hidden">PORTAFOLIO</span>
        </a>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 pointer-events-auto items-end">
        <a
          className="bg-[#fbef2c] text-[#22101c] px-3 md:px-4 py-1 text-sm md:text-xl font-bold -rotate-3 hover:rotate-0 transition-transform cursor-pointer whitespace-nowrap"
          href="#proyectos"
        >
          PROYECTOS
        </a>
        <a
          className="bg-[#f425af] text-white px-3 md:px-4 py-1 text-sm md:text-xl font-bold rotate-2 hover:rotate-0 transition-transform cursor-pointer whitespace-nowrap"
          href="#bio"
        >
          BIO
        </a>
        <a
          className="bg-white text-[#22101c] px-3 md:px-4 py-1 text-sm md:text-xl font-bold -rotate-1 hover:rotate-0 transition-transform cursor-pointer whitespace-nowrap"
          href="#contacto"
        >
          CONTACTO
        </a>
      </div>
    </nav>
  );
}