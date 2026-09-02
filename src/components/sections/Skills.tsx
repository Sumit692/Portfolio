"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SkillItem } from "@/types";

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState("languages");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const activeCategory =
    skillCategories.find((c) => c.id === activeCategoryId) ||
    skillCategories[0];

  // Default displayed note is either hovered skill or the first skill in category
  const activeNote = hoveredSkill || activeCategory.skills[0];

  return (
    <section id="skills" className="py-28 lg:py-36 border-t border-white/[0.07] px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase block mb-3">
            04 / TOOLING & REPERTOIRE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F0]">
            Things I build with.
          </h2>
        </div>
        <p className="text-sm text-[#8E8E93] max-w-md leading-relaxed font-normal">
          An intentional selection of programming languages, graphical frameworks, AI models, and infrastructure platforms applied across real systems.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-white/[0.06]">
        {skillCategories.map((cat) => {
          const isActive = cat.id === activeCategoryId;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategoryId(cat.id);
                setHoveredSkill(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-[#F5F5F0] text-[#090909] font-semibold shadow-md"
                  : "bg-white/[0.03] text-[#8E8E93] hover:text-[#F5F5F0] hover:bg-white/[0.06] border border-white/[0.06]"
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Main Grid: Interactive Typography Cloud Left, Contextual Inspection Telemetry Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (7 Cols): Typography-Driven Skill List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-[11px] font-mono text-[#71717A] tracking-wider uppercase mb-2">
            HOVER OVER A CAPABILITY TO INSPECT CONTEXTUAL RELEVANCE
          </div>

          <div className="flex flex-wrap gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-wrap gap-3"
              >
                {activeCategory.skills.map((skill) => {
                  const isHovered = activeNote?.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onClick={() => setHoveredSkill(skill)}
                      className={`group relative px-6 py-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? "bg-white/[0.08] border-white/30 shadow-lg"
                          : "bg-[#111111] border-white/[0.07] hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base sm:text-lg font-medium tracking-tight text-[#F5F5F0]">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column (5 Cols): Contextual Engineering Description Panel */}
        <div className="lg:col-span-5">
          <motion.div
            key={activeNote?.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-8 rounded-2xl bg-[#121212] border border-white/[0.09] space-y-5 shadow-2xl min-h-[220px] flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-mono text-[#8E8E93] tracking-wider uppercase">
                  TECHNICAL APPLICATION NOTE
                </span>
                <span className="text-xs font-mono text-blue-400">
                  {activeCategory.title}
                </span>
              </div>

              <h4 className="text-2xl font-medium tracking-tight text-[#F5F5F0]">
                {activeNote?.name}
              </h4>

              <p className="text-sm text-[#A1A1AA] leading-relaxed font-normal">
                {activeNote?.context}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
              <span>VERIFIED IN PRODUCTION REPOS</span>
              <span>NO ARBITRARY METRICS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
