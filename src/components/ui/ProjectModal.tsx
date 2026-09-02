"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
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
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Exhibition Modal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#111111] border border-white/[0.12] p-6 sm:p-10 shadow-2xl z-10 space-y-10"
          >
            {/* Header: Number, Title, Close */}
            <div className="flex items-start justify-between border-b border-white/[0.08] pb-6 gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase">
                    PROJECT {project.number} · {project.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F5F5F0]">
                  {project.title}
                </h2>
                <p className="text-sm text-[#8E8E93] font-normal">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close project modal"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#8E8E93] hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Links CTA */}
            <div className="flex flex-wrap gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="atelier-btn-primary text-xs px-5 py-2.5"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="atelier-btn-secondary text-xs px-5 py-2.5"
                >
                  <GithubIcon size={14} />
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>

            {/* Narrative Overview */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono tracking-widest text-[#8E8E93] uppercase">
                01 // PROJECT OVERVIEW
              </h3>
              <p className="text-base sm:text-lg text-[#E4E4E7] leading-relaxed font-light">
                {project.overview}
              </p>
            </div>

            {/* Problem & Solution Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06]">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                  THE CHALLENGE
                </span>
                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-blue-950/[0.15] border border-blue-500/20 space-y-2">
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">
                  ENGINEERING SOLUTION
                </span>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Integrated Engineering Features */}
            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <h3 className="text-xs font-mono tracking-widest text-[#8E8E93] uppercase">
                02 // CORE CAPABILITIES & ARCHITECTURE
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-[#D4D4D8] leading-relaxed"
                  >
                    <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
