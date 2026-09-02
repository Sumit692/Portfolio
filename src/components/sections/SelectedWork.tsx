"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Database, Server, Workflow, Activity } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";
import { GithubIcon } from "@/components/ui/Icons";

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const ramayana = projects[0]; // RamayanaVerse
  const vaani = projects[1]; // VAANI
  const housePrice = projects[2]; // House Price
  const lumi = projects[3]; // LUMI
  const musicCatalog = projects[4]; // Music Catalog
  const simpleTodo = projects[5]; // Java TODO
  const covid = projects[6]; // Covid-19

  return (
    <section id="work" className="py-28 lg:py-36 border-t border-white/[0.07] px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase block mb-3">
            02 / ENGINEERING REPERTOIRE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F5F5F0]">
            Selected Work
          </h2>
        </div>
        <p className="text-sm text-[#8E8E93] max-w-md leading-relaxed font-normal">
          Authentic applications spanning Next.js, full-stack architectures, multimodal AI, machine learning, and enterprise backend systems.
        </p>
      </div>

      <div className="space-y-16 lg:space-y-24">
        {/* ================= 01: RAMAYANAVERSE (HERO CENTERPIECE) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          data-cursor="project"
          className="group rounded-2xl bg-[#111215] border border-white/[0.08] hover:border-amber-500/30 p-6 sm:p-10 transition-all duration-500 shadow-2xl space-y-8 relative overflow-hidden"
        >
          {/* Metadata Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-mono text-amber-400 font-semibold tracking-wider">
                PROJECT {ramayana.number}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {ramayana.category}
              </span>
              <span className="text-xs font-mono text-[#71717A]">
                {ramayana.period}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {ramayana.demo && (
                <a
                  href={ramayana.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-mono text-amber-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>Live Demo</span>
                  <ExternalLink size={12} />
                </a>
              )}
              <a
                href={ramayana.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                title="Inspect Source Code"
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>

          {/* Large Visual Showcase */}
          <div
            onClick={() => setSelectedProject(ramayana)}
            className="cursor-pointer relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#161616] group/img"
          >
            {ramayana.image && (
              <Image
                src={ramayana.image}
                alt={ramayana.title}
                fill
                unoptimized
                className="object-cover object-center group-hover/img:scale-[1.02] transition-transform duration-700 ease-out brightness-90 contrast-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex items-center justify-between pointer-events-none">
              <span className="text-xs font-mono text-amber-200/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/20">
                Click for Architecture Breakdown
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>

          {/* Narrative & Tech */}
          <div
            onClick={() => setSelectedProject(ramayana)}
            className="cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2"
          >
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-amber-400 transition-colors">
                {ramayana.title} — <span className="text-[#8E8E93] text-lg font-normal">{ramayana.subtitle}</span>
              </h3>
              <p className="text-sm sm:text-base text-[#8E8E93] leading-relaxed max-w-3xl">
                {ramayana.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
              {ramayana.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= 02 & 03: VAANI & BANGALORE REAL ESTATE (2 COLS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* VAANI */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            data-cursor="project"
            className="group rounded-2xl bg-[#111113] border border-white/[0.08] hover:border-blue-500/30 p-6 sm:p-8 transition-all duration-500 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider">
                    PROJECT {vaani.number}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {vaani.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {vaani.demo && (
                    <a
                      href={vaani.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/25 text-[11px] font-mono text-blue-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span>Live</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                  <a
                    href={vaani.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>

              <div
                onClick={() => setSelectedProject(vaani)}
                className="cursor-pointer relative aspect-video w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#161616] group/vimg"
              >
                {vaani.image && (
                  <Image
                    src={vaani.image}
                    alt={vaani.title}
                    fill
                    unoptimized
                    className="object-cover object-top group-hover/vimg:scale-[1.03] transition-transform duration-700 ease-out brightness-95"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              <div onClick={() => setSelectedProject(vaani)} className="cursor-pointer space-y-2">
                <h3 className="text-xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-blue-400 transition-colors">
                  {vaani.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {vaani.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
              {vaani.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* BANGALORE REAL ESTATE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-cursor="project"
            className="group rounded-2xl bg-[#111113] border border-white/[0.08] hover:border-emerald-500/30 p-6 sm:p-8 transition-all duration-500 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                    PROJECT {housePrice.number}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {housePrice.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {housePrice.demo && (
                    <a
                      href={housePrice.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-[11px] font-mono text-emerald-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                  <a
                    href={housePrice.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>

              <div
                onClick={() => setSelectedProject(housePrice)}
                className="cursor-pointer relative aspect-video w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#161616] group/himg"
              >
                {housePrice.image && (
                  <Image
                    src={housePrice.image}
                    alt={housePrice.title}
                    fill
                    unoptimized
                    className="object-cover object-top group-hover/himg:scale-[1.03] transition-transform duration-700 ease-out brightness-95"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              <div onClick={() => setSelectedProject(housePrice)} className="cursor-pointer space-y-2">
                <h3 className="text-xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-emerald-400 transition-colors">
                  {housePrice.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {housePrice.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
              {housePrice.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= 04 & 05: LUMI & MUSIC CATALOG (2 COLS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LUMI AI CHATBOT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            data-cursor="project"
            className="group rounded-2xl bg-[#111113] border border-white/[0.08] hover:border-purple-500/30 p-6 sm:p-8 transition-all duration-500 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-purple-400 font-semibold tracking-wider">
                    PROJECT {lumi.number}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    {lumi.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {lumi.demo && (
                    <a
                      href={lumi.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/25 text-[11px] font-mono text-purple-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      <span>Live</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                  <a
                    href={lumi.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>

              <div
                onClick={() => setSelectedProject(lumi)}
                className="cursor-pointer relative aspect-video w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#161616] group/limg"
              >
                {lumi.image && (
                  <Image
                    src={lumi.image}
                    alt={lumi.title}
                    fill
                    unoptimized
                    className="object-cover object-top group-hover/limg:scale-[1.03] transition-transform duration-700 ease-out brightness-95"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              <div onClick={() => setSelectedProject(lumi)} className="cursor-pointer space-y-2">
                <h3 className="text-xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-purple-400 transition-colors">
                  {lumi.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {lumi.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
              {lumi.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* MUSIC CATALOG */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-cursor="project"
            className="group rounded-2xl bg-[#111113] border border-white/[0.08] hover:border-pink-500/30 p-6 sm:p-8 transition-all duration-500 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-pink-400 font-semibold tracking-wider">
                    PROJECT {musicCatalog.number}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    {musicCatalog.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {musicCatalog.demo && (
                    <a
                      href={musicCatalog.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/25 text-[11px] font-mono text-pink-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                      <span>Live</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                  <a
                    href={musicCatalog.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>

              <div
                onClick={() => setSelectedProject(musicCatalog)}
                className="cursor-pointer relative aspect-video w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#161616] group/mimg flex items-center justify-center"
              >
                {musicCatalog.image && (
                  <Image
                    src={musicCatalog.image}
                    alt={musicCatalog.title}
                    fill
                    unoptimized
                    className="object-contain p-6 group-hover/mimg:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              <div onClick={() => setSelectedProject(musicCatalog)} className="cursor-pointer space-y-2">
                <h3 className="text-xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-pink-400 transition-colors">
                  {musicCatalog.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {musicCatalog.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
              {musicCatalog.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= 06 & 07: ENTERPRISE & CLINICAL SYSTEMS (ARCHITECTURAL CARDS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* TASKFLOW (JAVA / MYSQL) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            data-cursor="project"
            className="group rounded-2xl bg-[#111113] border border-white/[0.08] hover:border-orange-500/30 p-6 sm:p-8 transition-all duration-500 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-orange-400 font-semibold tracking-wider">
                    PROJECT {simpleTodo.number}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {simpleTodo.category}
                  </span>
                </div>

                <a
                  href={simpleTodo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[11px] font-mono text-[#D4D4D8] hover:text-white transition-colors"
                >
                  <GithubIcon size={13} />
                  <span>GitHub Repo</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Architectural Blueprint Visual Card */}
              <div
                onClick={() => setSelectedProject(simpleTodo)}
                className="cursor-pointer relative aspect-video w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#0E1015] p-6 flex flex-col justify-between group/arch"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#71717A]">
                  <span className="flex items-center gap-1.5 text-orange-400/90">
                    <Database size={13} />
                    <span>MVC + JDBC CONNECTION POOL</span>
                  </span>
                  <span>ACID TRANSACTIONS</span>
                </div>

                <div className="grid grid-cols-3 gap-2 my-auto text-center font-mono text-xs">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] text-[#71717A] block">VIEW</span>
                    <span className="text-[#F5F5F0]">JSP / DOM</span>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <span className="text-[10px] text-orange-400 block">CONTROLLER</span>
                    <span className="text-[#F5F5F0]">Java Servlets</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[10px] text-[#71717A] block">MODEL</span>
                    <span className="text-[#F5F5F0]">MySQL / DAO</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#52525B]">
                  <span>TOMCAT CONTAINER</span>
                  <span className="text-orange-400/80">CLICK FOR CASE STUDY →</span>
                </div>
              </div>

              <div onClick={() => setSelectedProject(simpleTodo)} className="cursor-pointer space-y-2">
                <h3 className="text-xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-orange-400 transition-colors">
                  {simpleTodo.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {simpleTodo.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
              {simpleTodo.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* COVID-19 DIAGNOSTIC SYSTEM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-cursor="project"
            className="group rounded-2xl bg-[#111113] border border-white/[0.08] hover:border-cyan-500/30 p-6 sm:p-8 transition-all duration-500 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                    PROJECT {covid.number}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {covid.category}
                  </span>
                </div>

                <a
                  href={covid.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-[11px] font-mono text-[#D4D4D8] hover:text-white transition-colors"
                >
                  <GithubIcon size={13} />
                  <span>GitHub Repo</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Clinical Workflow Blueprint Card */}
              <div
                onClick={() => setSelectedProject(covid)}
                className="cursor-pointer relative aspect-video w-full rounded-xl overflow-hidden border border-white/[0.06] bg-[#0A1214] p-6 flex flex-col justify-between group/clinic"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#71717A]">
                  <span className="flex items-center gap-1.5 text-cyan-400/90">
                    <Activity size={13} />
                    <span>DIAGNOSTIC SAMPLE PIPELINE</span>
                  </span>
                  <span>PHP / RELATIONAL SQL</span>
                </div>

                <div className="grid grid-cols-4 gap-1.5 my-auto text-center font-mono text-[10px]">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[#71717A] block">1. REG</span>
                    <span className="text-[#D4D4D8]">Patient</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[#71717A] block">2. SAMPLE</span>
                    <span className="text-[#D4D4D8]">Collected</span>
                  </div>
                  <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/25">
                    <span className="text-cyan-400 block">3. LAB</span>
                    <span className="text-[#F5F5F0]">Processing</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[#71717A] block">4. REPORT</span>
                    <span className="text-[#D4D4D8]">Delivered</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#52525B]">
                  <span>ROLE-BASED RBAC SECURITY</span>
                  <span className="text-cyan-400/80">CLICK FOR CASE STUDY →</span>
                </div>
              </div>

              <div onClick={() => setSelectedProject(covid)} className="cursor-pointer space-y-2">
                <h3 className="text-xl font-medium tracking-tight text-[#F5F5F0] group-hover:text-cyan-400 transition-colors">
                  {covid.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                  {covid.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.05] flex flex-wrap gap-2">
              {covid.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-[#A1A1AA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Deep Inspection Exhibition Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
