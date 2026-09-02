"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { milestones, education } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 lg:py-36 border-t border-white/[0.07] px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase block mb-3">
            03 / TRAJECTORY & RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F0]">
            Experience & Milestones
          </h2>
        </div>
        <p className="text-sm text-[#8E8E93] max-w-md leading-relaxed font-normal">
          A chronology of software engineering internships, national-level bootcamps, academic accolades, and foundational computing education.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column (7 Cols): Experience Timeline */}
        <div className="lg:col-span-7 space-y-12 relative">
          <div className="border-l border-white/[0.1] pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12 relative">
            {milestones.map((m, idx) => {
              const Icon =
                m.type === "internship"
                  ? Briefcase
                  : m.type === "bootcamp"
                  ? Trophy
                  : Award;

              const badgeBg =
                m.type === "internship"
                  ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                  : m.type === "bootcamp"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#111111] border-2 border-white/30 group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300" />

                  {/* Header Row */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${badgeBg}`}>
                        {m.badge}
                      </span>
                      <span className="text-xs font-mono text-[#71717A]">
                        {m.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-[#F5F5F0] flex items-center gap-2">
                      <span>{m.role}</span>
                    </h3>

                    <div className="text-xs font-mono text-[#8E8E93] uppercase tracking-wider">
                      {m.organization} · {m.location}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-2 mt-3">
                    {m.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed flex items-start gap-2.5">
                        <span className="text-white/40 select-none mt-1">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column (5 Cols): Academic Dossier & Education */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-[#111111] border border-white/[0.08] shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase flex items-center gap-2">
                <GraduationCap size={16} className="text-blue-400" />
                ACADEMIC DOSSIER
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#E4E4E7]">
                {education.period}
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg sm:text-xl font-medium tracking-tight text-[#F5F5F0]">
                {education.degree}
              </h4>
              <p className="text-sm text-blue-400 font-mono">
                {education.major}
              </p>
              <p className="text-xs text-[#8E8E93] uppercase tracking-wider font-mono">
                {education.institution} · {education.location}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono text-[#71717A] uppercase">Cumulative GPA</span>
                <span className="text-2xl font-medium text-[#F5F5F0]">
                  {education.cgpa}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pt-2 border-t border-white/[0.04]">
                <span>State University</span>
                <span className="text-[#D4D4D8] font-sans text-[11px] text-right">
                  {education.affiliation}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-[#8E8E93] leading-relaxed">
              Coursework emphasizes Data Structures & Algorithms, Object-Oriented Analysis & Design, Database Management Systems, Theory of Computation, Computer Networks, and Machine Learning architectures.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
