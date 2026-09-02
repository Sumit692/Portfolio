"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Counter from "@/components/ui/Counter";

export default function About() {
  const metrics = [
    {
      value: 8.3,
      decimals: 1,
      suffix: "",
      label: "CGPA",
      sublabel: "Atria Institute / VTU",
    },
    {
      value: 5,
      decimals: 0,
      suffix: "+",
      label: "Projects",
      sublabel: "AI, 3D & Full-Stack",
    },
    {
      value: 2,
      decimals: 0,
      suffix: "×",
      label: "Football Champion",
      sublabel: "VTU Central Zone",
    },
    {
      value: 2027,
      decimals: 0,
      suffix: "",
      label: "Graduation",
      sublabel: "Bachelor of Engineering",
    },
  ];

  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-28 lg:py-36 border-t border-white/[0.07] px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header with oversized section numeral */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase block mb-3">
            01 / PHILOSOPHY & PROFILE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-[#F5F5F0] max-w-2xl leading-tight">
            A developer interested in the space between logic and experience.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#71717A] tracking-wider uppercase">
          BANGALORE · ISE · CLASS OF 2027
        </p>
      </div>

      {/* Main Grid: Portrait Left/Right, Editorial Biography & Credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
        {/* Architectural Image Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-sm lg:max-w-none rounded-2xl p-2 bg-[#121212] border border-white/[0.08] shadow-2xl group">
            {/* Corner Architectural Register Marks */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/30 z-20 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/30 z-20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/30 z-20 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/30 z-20 pointer-events-none" />

            {/* Photo Container with Monochrome Film Grading */}
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#141414] border border-white/[0.04]">
              {!imageError ? (
                <Image
                  src="/images/sumit.jpg"
                  alt="Sumit Kumar Singh portrait"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center grayscale contrast-105 brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4 bg-gradient-to-b from-[#18181B] to-[#0E0E10]">
                  <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center font-mono text-xl font-light tracking-widest text-[#F5F5F0]">
                    SKS
                  </div>
                  <div className="space-y-1 font-mono text-xs text-[#8E8E93]">
                    <div className="tracking-widest uppercase text-white/70">Sumit Kumar Singh</div>
                    <div className="text-[10px] text-[#52525B]">12.9716° N, 77.5946° E · BLR</div>
                  </div>
                </div>
              )}

              {/* Subtle film grain texture overlay */}
              <div className="absolute inset-0 film-grain pointer-events-none opacity-40 mix-blend-overlay" />

              {/* Bottom Label Bar */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between z-10 font-mono text-[10px] text-white/80">
                <span>SUMIT KUMAR SINGH</span>
                <span className="text-[#8E8E93]">BLR // IND</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Editorial Biography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <p className="text-xl sm:text-2xl text-[#E8E8E3] font-light leading-relaxed">
            Engineering student specializing in Information Science with hands-on experience building AI-powered and full-stack applications using Python, Java, JavaScript, React, Node.js, and Flask.
          </p>

          <p className="text-base text-[#8E8E93] leading-relaxed">
            Skilled in DSA, REST APIs, databases, NLP, OCR, and data processing with experience developing practical AI solutions and deploying web applications. Passionate about AI, emerging technologies, and building scalable user-focused software.
          </p>

          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-8 text-xs font-mono text-[#8E8E93]">
            <div>
              <span className="block text-[10px] uppercase text-[#52525B] mb-1">Institution</span>
              <span className="text-[#F5F5F0]">Atria Institute of Technology</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-[#52525B] mb-1">Major</span>
              <span className="text-[#F5F5F0]">Information Science & Engineering</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-[#52525B] mb-1">Status</span>
              <span className="text-blue-400">Sep 2023 – May 2027 · CGPA: 8.3/10</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Giant Typographic Numbers Grid (No boring cards) */}
      <div className="pt-16 border-t border-white/[0.07] grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {metrics.map((m, idx) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="space-y-2"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-[#F5F5F0]">
              <Counter
                value={m.value}
                decimals={m.decimals}
                suffix={m.suffix}
              />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-medium text-[#E4E4E7] tracking-wide">
                {m.label}
              </div>
              <div className="text-xs font-mono text-[#71717A]">
                {m.sublabel}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
