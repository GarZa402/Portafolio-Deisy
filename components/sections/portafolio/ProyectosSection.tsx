"use client";
import Reveal from "@/components/animations/Reveal";
import { Share2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function ProyectosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll infinito
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isDragging) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Touch/Mouse handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !scrollRef.current) return;
    const x = clientX;
    const walk = (startX - x) * 2;
    scrollRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="proyectos" className="py-32 bg-[#22101c]">
      <div className="px-6 md:px-10 mb-20">
        <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter transform -skew-x-12">
          PROYECTOS
        </h2>
      </div>

      {/* Carrusel Container */}
      <div
        ref={scrollRef}
        className="flex gap-20 overflow-x-auto overflow-y-visible scrollbar-hide cursor-grab active:cursor-grabbing px-10"
        style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {/* Proyectos - Set 1 */}
        <ProjectCard
          num="01"
          image="/images/4.jpg"
          title="INFOGRAFIA"
          subtitle="Diseño de Informacion"
          numBg="white"
          numColor="#22101c"
          border="#fbef2c"
          titleColor="white"
          subtitleColor="#fbef2c"
        />

        <ProjectCard
          num="02"
          image="/images/2.jpg"
          title="FOTOGRAFIA"
          subtitle="Arte Visual"
          numBg="#f425af"
          numColor="white"
          border="white"
          titleColor="white"
          subtitleColor="#f425af"
          vertical
        />

        <ProjectCard
          num="03"
          image="/images/1.jpg"
          title="Light Painting"
          subtitle="Imagenes Vibrantes"
          numBg="#fbef2c"
          numColor="#22101c"
          border="#f425af"
          titleColor="#fbef2c"
          subtitleColor="white"
          overlay
        />

        {/* Proyectos - Set 2 (duplicado para loop infinito) */}
        <ProjectCard
          num="01"
          image="/images/4.jpg"
          title="INFOGRAFIA"
          subtitle="Diseño de Informacion"
          numBg="white"
          numColor="#22101c"
          border="#fbef2c"
          titleColor="white"
          subtitleColor="#fbef2c"
        />

        <ProjectCard
          num="02"
          image="/images/2.jpg"
          title="FOTOGRAFIA"
          subtitle="Arte Visual"
          numBg="#f425af"
          numColor="white"
          border="white"
          titleColor="white"
          subtitleColor="#f425af"
          vertical
        />

        <ProjectCard
          num="03"
          image="/images/1.jpg"
          title="Light Painting"
          subtitle="Imagenes Vibrantes"
          numBg="#fbef2c"
          numColor="#22101c"
          border="#f425af"
          titleColor="#fbef2c"
          subtitleColor="white"
          overlay
        />
      </div>

        <Reveal animation="fadeUp" delay={200}>
       <div className="mt-24 text-center relative z-20 px-4">
        <a
          href="https://drive.google.com/drive/folders/1U_e3FvGSoTCAhFtjQvQwH73jEXDPk-07?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#fbef2c] text-[#22101c] px-8 py-4 text-xl md:text-2xl font-black uppercase hover:scale-105 transition-transform border-4 border-white shadow-[8px_8px_0px_0px_#f425af] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
        >
          <Share2 className="w-6 h-6 md:w-8 md:h-8" />
          Mira todos mis proyectos en este link
        </a>
      </div>
      </Reveal>
    </section>
  );
}

// Componente de tarjeta de proyecto
function ProjectCard({
  num,
  image,
  title,
  subtitle,
  numBg,
  numColor,
  border,
  titleColor,
  subtitleColor,
  vertical = false,
  overlay = false,
}: {
  num: string;
  image: string;
  title: string;
  subtitle: string;
  numBg: string;
  numColor: string;
  border: string;
  titleColor: string;
  subtitleColor: string;
  vertical?: boolean;
  overlay?: boolean;
}) {
  return (
    <div className="flex-none w-[450px] relative">
      {/* Badge del número */}
      <div
        className={`absolute ${
          vertical ? "top-1/2 -translate-y-1/2 -left-6 rotate-90" : "-top-6 -right-6"
        } z-10 px-4 py-2 font-black text-2xl`}
        style={{
          backgroundColor: numBg,
          color: numColor,
          boxShadow: "-6px 6px 0px 0px " + border,
        }}
      >
        {num}
      </div>

      {/* Imagen */}
      <div
        className="relative border-4"
        style={{
          borderColor: border,
          boxShadow: vertical
            ? "8px 8px 0px 0px " + border
            : "-6px 6px 0px 0px " + border,
        }}
      >
        <img
          src={image}
          alt={title}
          className={`w-full object-cover select-none pointer-events-none ${
            vertical ? "h-96" : "h-64"
          }`}
          draggable="false"
        />
        {overlay && (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: border + "33" }}
          />
        )}
      </div>

      {/* Título */}
      <div className={`mt-6 ${vertical ? "" : "text-right"}`}>
        <h3
          className="text-4xl font-bold tracking-tighter uppercase"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <p
          className="font-medium uppercase tracking-widest mt-2"
          style={{ color: subtitleColor }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}