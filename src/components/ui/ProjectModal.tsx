"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined") {
        (window as any).__lenis?.stop();
      }
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      if (typeof window !== "undefined") {
        (window as any).__lenis?.start();
      }
    }

    return () => {
      document.body.style.overflow = "auto";
      if (typeof window !== "undefined") {
        (window as any).__lenis?.start();
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 overscroll-contain"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Exhibition Modal Window */}
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[88vh] flex flex-col rounded-2xl bg-[#111111] border border-white/[0.12] shadow-2xl z-10 overflow-hidden"
          >
            {/* Pinned Sticky Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5 sm:px-8 sm:py-6 bg-[#141414] shrink-0 z-20">
              <div className="space-y-1 pr-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider">
                    PROJECT {project.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#71717A] hidden sm:inline-block">
                    {project.period}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-[#F5F5F0]">
                  {project.title} —{" "}
                  <span className="text-[#8E8E93] text-sm sm:text-base font-normal">
                    {project.subtitle}
                  </span>
                </h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Close project modal"
                className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-[#A1A1AA] hover:text-white transition-colors cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div
              data-lenis-prevent="true"
              className="overflow-y-auto overscroll-contain p-6 sm:p-8 space-y-8 flex-1 focus:outline-none"
              tabIndex={0}
            >
              {/* Narrative Overview */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono tracking-widest text-[#8E8E93] uppercase">
                  01 // PROJECT OVERVIEW
                </h3>
                <p className="text-base sm:text-lg text-[#E4E4E7] leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>

              {/* Problem & Solution Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                    THE CHALLENGE
                  </span>
                  <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-blue-950/[0.2] border border-blue-500/25 space-y-2">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">
                    ENGINEERING SOLUTION
                  </span>
                  <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Core Capabilities */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono tracking-widest text-[#8E8E93] uppercase">
                  02 // CORE CAPABILITIES & ARCHITECTURE
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-[#D4D4D8] leading-relaxed"
                    >
                      <CheckCircle2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compiled Technologies */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono tracking-widest text-[#8E8E93] uppercase">
                  03 // COMPILED TECHNOLOGIES
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
