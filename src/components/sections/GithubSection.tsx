"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork, Star, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { repositories } from "@/data/repositories";

export default function GithubSection() {
  return (
    <section className="py-28 lg:py-36 border-t border-white/[0.07] px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase block mb-3">
            06 / OPEN SOURCE & LAB NOTES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F0]">
            Open source, experiments & code.
          </h2>
        </div>

        <a
          href="https://github.com/Sumit692"
          target="_blank"
          rel="noreferrer"
          className="atelier-btn-secondary text-xs px-5 py-2.5 self-start md:self-auto"
        >
          <GithubIcon size={14} />
          <span>Explore GitHub</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Repositories 2x2 Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {repositories.map((repo, idx) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group p-6 sm:p-8 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-sm font-medium text-[#F5F5F0] group-hover:text-blue-400 transition-colors">
                  <Code2 size={16} className="text-blue-400" />
                  <span>Sumit692 / {repo.name}</span>
                </div>
                <ArrowUpRight size={16} className="text-[#71717A] group-hover:text-[#F5F5F0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                {repo.description}
              </p>
            </div>

            {/* Repo Meta Footer */}
            <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-[#71717A]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[#A1A1AA]">{repo.language}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 hover:text-white transition-colors">
                  <Star size={13} className="text-amber-400" />
                  <span>{repo.stars}</span>
                </span>
                <span className="flex items-center gap-1 hover:text-white transition-colors">
                  <GitFork size={13} />
                  <span>{repo.forks}</span>
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
