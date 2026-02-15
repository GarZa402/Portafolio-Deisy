import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/portafolio/HeroSection";
import SobremiSection from "@/components/sections/portafolio/SobremiSection";
import ProcesoSection from "@/components/sections/portafolio/ProcesoSection";
import TestimoniosSection from "@/components/sections/portafolio/TestimoniosSection";
import ProyectosSection from "@/components/sections/portafolio/ProyectosSection";
import SkillsSection from "@/components/sections/portafolio/SkillsSection";

export default function PortfolioDeisy() {
  return (
    <div className="bg-[#22101c] text-white">
      <Navbar />
      <HeroSection />
      <SobremiSection />
      <ProcesoSection />
      <TestimoniosSection />
      <ProyectosSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}