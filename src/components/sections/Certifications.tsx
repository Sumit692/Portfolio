"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, Trophy, BookOpen } from "lucide-react";
import { certifications } from "@/data/experience";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 lg:py-36 border-t border-white/[0.07] px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase block mb-3">
            06 / CREDENTIALS & ACADEMIC RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F0]">
            Achievements & Certifications.
          </h2>
        </div>

        <p className="text-sm text-[#8E8E93] max-w-md leading-relaxed font-normal">
          Formal accreditations, competitive distinctions, and engineering recognitions awarded by national programs and institutions.
        </p>
      </div>

      {/* Editorial Accreditation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="p-8 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    {idx === 0 ? (
                      <BookOpen size={16} />
                    ) : idx === 1 ? (
                      <ShieldCheck size={16} />
                    ) : idx === 2 ? (
                      <Trophy size={16} />
                    ) : (
                      <Award size={16} />
                    )}
                  </div>
                  <span className="text-xs font-mono text-blue-400 font-medium tracking-wider">
                    {cert.issuer}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">
                  VERIFIED
                </span>
              </div>

              <h3 className="text-xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Skills Tag Pills */}
            <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
              {cert.skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
