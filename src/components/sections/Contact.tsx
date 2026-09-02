"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 border-t border-white/[0.07] px-6 md:px-12 max-w-7xl mx-auto">
      {/* Editorial Contact Header */}
      <div className="max-w-4xl mb-20 space-y-6">
        <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase block">
          07 / INITIATE DIALOGUE
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium tracking-tight text-[#F5F5F0] leading-tight text-balance">
          Have something worth building?
        </h2>
        <p className="text-lg sm:text-xl text-[#8E8E93] max-w-2xl font-light leading-relaxed">
          Whether it&apos;s an internship, full-time engineering opportunity, collaboration, product idea, or an interesting technical challenge — let&apos;s talk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (5 Cols): Direct Communications Dossier */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:sumitkumarsingh7502@gmail.com"
              className="p-5 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] transition-colors flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
                  DIRECT EMAIL
                </span>
                <span className="text-sm sm:text-base font-medium text-[#F5F5F0] group-hover:text-blue-400 transition-colors">
                  sumitkumarsingh7502@gmail.com
                </span>
              </div>
              <Mail size={18} className="text-[#8E8E93] group-hover:text-[#F5F5F0] transition-colors" />
            </a>

            {/* Phone */}
            <a
              href="tel:+917483372183"
              className="p-5 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] transition-colors flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
                  TELEPHONE / WHATSAPP
                </span>
                <span className="text-sm sm:text-base font-medium text-[#F5F5F0] group-hover:text-blue-400 transition-colors">
                  +91 7483372183
                </span>
              </div>
              <Phone size={18} className="text-[#8E8E93] group-hover:text-[#F5F5F0] transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Sumit692"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] transition-colors flex items-center justify-between group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
                  GITHUB PROFILE
                </span>
                <span className="text-sm sm:text-base font-medium text-[#F5F5F0] group-hover:text-blue-400 transition-colors">
                  github.com/Sumit692
                </span>
              </div>
              <ArrowUpRight size={18} className="text-[#8E8E93] group-hover:text-[#F5F5F0] transition-colors" />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>TYPICAL RESPONSE TIME</span>
            </div>
            <p className="text-xs text-[#8E8E93] leading-relaxed font-mono">
              Usually replies within 12–24 hours. Based in Indian Standard Time (UTC+5:30).
            </p>
          </div>
        </div>

        {/* Right Column (7 Cols): Architectural Contact Form */}
        <div className="lg:col-span-7">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 sm:p-14 rounded-2xl bg-[#121212] border border-white/[0.1] text-center space-y-6 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
                <CheckCircle2 size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-medium text-[#F5F5F0]">
                  Message received.
                </h3>
                <p className="text-sm text-[#8E8E93] max-w-sm mx-auto leading-relaxed">
                  Thank you, {name}. I will review your note and respond to <span className="text-white">{email}</span> shortly.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                className="atelier-btn-secondary text-xs px-6 py-2.5"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-2xl bg-[#111111] border border-white/[0.08] shadow-xl space-y-6"
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-[#8E8E93] tracking-wider uppercase"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 text-sm text-[#F5F5F0] placeholder-[#52525B] transition-all outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-[#8E8E93] tracking-wider uppercase"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 text-sm text-[#F5F5F0] placeholder-[#52525B] transition-all outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-[#8E8E93] tracking-wider uppercase"
                >
                  Message / Project Scope
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your product, engineering challenge, or timeline..."
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 text-sm text-[#F5F5F0] placeholder-[#52525B] transition-all outline-none resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full atelier-btn-primary text-sm py-4 justify-center"
              >
                <span>Start a conversation</span>
                <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
