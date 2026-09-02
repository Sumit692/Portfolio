"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import for HeroCanvas to avoid SSR issues with Three.js
const HeroCanvas = dynamic(() => import("@/components/3d/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[440px] flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border border-white/10 border-t-white/30 animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 md:pt-36 pb-10 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background radial accent glow (subtle, not loud) */}
      <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] bg-indigo-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid: Copy Left, 3D Sculpture Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
        {/* Left Column: Typography & Intent */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 z-10"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] font-mono tracking-widest text-[#A1A1A6] uppercase">
              AI ENGINEER · FULL STACK DEVELOPER · SOFTWARE DEVELOPER
            </span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-tight text-[#F5F5F0] leading-[1.08] text-balance">
            I build intelligent software <br />
            <span className="text-[#8E8E93] font-normal">with a human touch.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#8E8E93] max-w-xl leading-relaxed font-normal">
            An aspiring software engineer from Bangalore building AI systems, full-stack applications, and interactive digital experiences. Focused on clean architecture, mathematical clarity, and exceptional user craft.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="atelier-btn-primary text-sm px-6 py-3.5"
            >
              <span>Explore my work</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              className="atelier-btn-secondary text-sm px-6 py-3.5"
            >
              <span>Get in touch</span>
              <span className="text-xs">→</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Sculpture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-[400px] sm:h-[480px] lg:h-[560px] relative flex items-center justify-center"
        >
          <HeroCanvas />
        </motion.div>
      </div>

      {/* Hero Bottom Micro-Detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="pt-12 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#71717A] tracking-wider"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/40" />
          <span>BANGALORE, INDIA</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-2 hover:text-[#F5F5F0] transition-colors group"
        >
          <span className="text-[11px] uppercase tracking-widest">SCROLL TO EXPLORE</span>
          <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
