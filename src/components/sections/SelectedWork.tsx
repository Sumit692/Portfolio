"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, FileText, Cpu, Volume2 } from "lucide-react";
import dynamic from "next/dynamic";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";

const SolvixTerrain3D = dynamic(() => import("@/components/3d/SolvixTerrain3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[380px] rounded-xl bg-[#0A0D14] flex items-center justify-center border border-white/[0.08]">
      <div className="w-8 h-8 rounded-full border border-blue-500/20 border-t-blue-500 animate-spin" />
    </div>
  ),
});

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const solvix = projects.find((p) => p.id === "solvix")!;
  const vaani = projects.find((p) => p.id === "vaani")!;
  const skillcraft = projects.find((p) => p.id === "skillcraft")!;
  const aiLab = projects.find((p) => p.id === "lab_portfolio")!;

  return (
    <section id="work" className="py-28 lg:py-36 border-t border-white/[0.07] px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase block mb-3">
            02 / ENGINEERING PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F0]">
            Selected Work
          </h2>
        </div>
        <p className="text-sm text-[#8E8E93] max-w-md leading-relaxed font-normal">
          Projects built across AI, full-stack development, interactive systems, and spatial computing. Designed for technical rigor and spatial elegance.
        </p>
      </div>

      {/* Editorial Layout: Centerpiece Project 01 (Solvix) Full Width */}
      <div className="space-y-20 lg:space-y-28">
        
        {/* ================= PROJECT 01: SOLVIX ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          data-cursor="project"
          onClick={() => setSelectedProject(solvix)}
          className="group cursor-pointer rounded-2xl bg-[#111317] border border-white/[0.08] hover:border-white/[0.22] p-6 sm:p-10 transition-all duration-500 shadow-2xl space-y-8"
        >
          {/* Top Metadata Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-blue-400 font-semibold tracking-wider">
                PROJECT {solvix.number}
              </span>
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-widest">
                GEOSPATIAL AI OPTIMIZER
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#8E8E93]">
              <span>{solvix.period}</span>
              <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>

          {/* Interactive 3D Terrain Visual Stage */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden shadow-inner">
            <SolvixTerrain3D />
          </div>

          {/* Editorial Description & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-blue-400 transition-colors">
                {solvix.title} — {solvix.subtitle}
              </h3>
              <p className="text-sm sm:text-base text-[#8E8E93] leading-relaxed">
                {solvix.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {solvix.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/[0.07] text-[#D4D4D8]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-mono text-[#71717A] group-hover:text-[#F5F5F0] flex items-center gap-1.5 transition-colors">
                  <span>View Case Study</span>
                  <span>↗</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= PROJECT 02: VAANI & PROJECT 03: SKILLCRAFT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* VAANI */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            data-cursor="project"
            onClick={() => setSelectedProject(vaani)}
            className="group cursor-pointer rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.22] p-6 sm:p-8 transition-all duration-500 shadow-xl flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider">
                  PROJECT {vaani.number} · {vaani.category}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Abstract Document-Processing Architectural Visualization */}
              <div className="p-6 rounded-xl bg-[#0c0d11] border border-white/[0.06] space-y-4 font-mono text-xs">
                <div className="text-[10px] text-[#71717A] uppercase tracking-widest pb-2 border-b border-white/[0.04] flex items-center justify-between">
                  <span>PIPELINE ARCHITECTURE</span>
                  <span className="text-emerald-400">STATUS: VERIFIED</span>
                </div>

                {/* 4-Step Abstract Flow */}
                <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                  {/* Step 1: Input Document */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5 flex flex-col items-center justify-center">
                    <FileText size={16} className="text-[#8E8E93]" />
                    <span className="text-[#8E8E93]">PDF/Scan</span>
                  </div>

                  {/* Step 2: OCR */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5 flex flex-col items-center justify-center">
                    <Sparkles size={16} className="text-blue-400" />
                    <span className="text-[#8E8E93]">Tesseract</span>
                  </div>

                  {/* Step 3: NLP Transformer */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5 flex flex-col items-center justify-center">
                    <Cpu size={16} className="text-indigo-400" />
                    <span className="text-[#8E8E93]">Summary</span>
                  </div>

                  {/* Step 4: TTS */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1.5 flex flex-col items-center justify-center">
                    <Volume2 size={16} className="text-emerald-400" />
                    <span className="text-[#8E8E93]">Narration</span>
                  </div>
                </div>

                {/* Simulated Audio Cadence Bars */}
                <div className="pt-2 flex items-center justify-center gap-1 h-8">
                  {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 35, 85, 50, 90, 30].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1 bg-gradient-to-t from-blue-600 to-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-blue-400 transition-colors">
                  {vaani.title} — {vaani.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {vaani.description}
                </p>
              </div>
            </div>

            {/* Tech Footer */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
              {vaani.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* SKILLCRAFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            data-cursor="project"
            onClick={() => setSelectedProject(skillcraft)}
            className="group cursor-pointer rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.22] p-6 sm:p-8 transition-all duration-500 shadow-xl flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="text-xs font-mono text-indigo-400 font-semibold tracking-wider">
                  PROJECT {skillcraft.number} · {skillcraft.category}
                </span>
                <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Interface Fragment Collage */}
              <div className="p-6 rounded-xl bg-[#0c0d11] border border-white/[0.06] space-y-4 font-mono text-xs">
                <div className="text-[10px] text-[#71717A] uppercase tracking-widest pb-2 border-b border-white/[0.04] flex items-center justify-between">
                  <span>INTERFACE MICRO-INTERACTIONS</span>
                  <span className="text-indigo-400">VANILLA DOM // 60 FPS</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {/* Fragment 1: Calculator LCD */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <span className="text-[9px] text-[#71717A] uppercase">CALCULATOR</span>
                    <div className="text-sm text-right text-emerald-400 font-mono tracking-wider">
                      π · r² = 314.15
                    </div>
                  </div>

                  {/* Fragment 2: Task Check state */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <span className="text-[9px] text-[#71717A] uppercase">LOCALSTORAGE</span>
                    <div className="text-[11px] text-[#E4E4E7] flex items-center gap-1">
                      <span className="text-blue-400">✓</span>
                      <span>Task Synced</span>
                    </div>
                  </div>

                  {/* Fragment 3: TicTacToe State */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <span className="text-[9px] text-[#71717A] uppercase">STATE MACHINE</span>
                    <div className="text-[11px] text-[#A1A1AA] flex justify-center gap-1 font-bold">
                      <span className="text-indigo-400">X</span>
                      <span>|</span>
                      <span className="text-emerald-400">O</span>
                      <span>|</span>
                      <span className="text-indigo-400">X</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-indigo-400 transition-colors">
                  {skillcraft.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {skillcraft.description}
                </p>
              </div>
            </div>

            {/* Tech Footer */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
              {skillcraft.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= PROJECT 04: AI HOLOGRAPHIC LAB OS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          data-cursor="project"
          onClick={() => setSelectedProject(aiLab)}
          className="group cursor-pointer rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.22] p-6 sm:p-10 transition-all duration-500 shadow-xl space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                PROJECT {aiLab.number} · {aiLab.category}
              </span>
              <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider">
                EXPERIMENTAL SYSTEM STUDY
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#8E8E93]">
              <span>{aiLab.period}</span>
              <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-cyan-400 transition-colors">
                {aiLab.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                {aiLab.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
              {aiLab.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.07] text-[#D4D4D8]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Exhibition Modal for Detailed Case Studies */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
