"use client";

import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

export default function Athletics() {
  return (
    <section className="py-28 lg:py-36 border-t border-white/[0.07] px-6 md:px-12 max-w-7xl mx-auto">
      {/* Editorial Quote Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase block">
          05 / COMPETITIVE DISCIPLINES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F0]">
          Beyond the screen.
        </h2>
        <p className="text-lg sm:text-xl text-[#A1A1AA] font-light leading-relaxed">
          &ldquo;Technology isn&apos;t the only place I compete.&rdquo;
        </p>
      </div>

      {/* Grid: Football Championship & Cricket Honors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Card 1: Football */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/[0.08] shadow-xl relative overflow-hidden group space-y-6"
        >
          {/* Subtle decorative background numeral watermark */}
          <div className="absolute right-4 bottom-2 text-8xl font-black text-white/[0.02] select-none pointer-events-none font-mono">
            01
          </div>

          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Trophy size={20} />
            </div>
            <span className="text-xs font-mono text-blue-400 tracking-wider">
              2024 · 2025
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F5F5F0]">
              VTU FOOTBALL CHAMPION
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
              Varsity Central Zone Champions
            </p>
          </div>

          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Starting player for the Atria Institute of Technology football varsity team. Clinched consecutive titles across the Visvesvaraya Technological University Inter-Collegiate Central Zone championships.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#71717A]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>DISCIPLINE · HIGH-STAKES TEAMWORK · ENDURANCE</span>
          </div>
        </motion.div>

        {/* Card 2: Cricket */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/[0.08] shadow-xl relative overflow-hidden group space-y-6"
        >
          <div className="absolute right-4 bottom-2 text-8xl font-black text-white/[0.02] select-none pointer-events-none font-mono">
            02
          </div>

          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#D4D4D8]">
              <Medal size={20} />
            </div>
            <span className="text-xs font-mono text-[#8E8E93] tracking-wider">
              REGIONAL CIRCUIT
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F5F5F0]">
              CRICKET TOURNAMENT
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
              Runner-Up · Flames Invitational
            </p>
          </div>

          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Runner-up positioning in competitive regional multi-stage cricket tournaments. Demands acute tactical anticipation, split-second reflexes, and calculated composure under match pressure.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#71717A]">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>STRATEGY · CALCULATED AGILITY · RESILIENCE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
