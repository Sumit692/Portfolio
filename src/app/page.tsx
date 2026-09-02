import HeaderNav from "@/components/navigation/HeaderNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SelectedWork from "@/components/sections/SelectedWork";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Athletics from "@/components/sections/Athletics";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#F5F5F0] relative selection:bg-blue-600/30 selection:text-white">
      {/* Sticky Minimal Navigation */}
      <HeaderNav />

      {/* Fluid Editorial Narrative */}
      <Hero />
      <About />
      <SelectedWork />
      <Experience />
      <Skills />
      <Athletics />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
