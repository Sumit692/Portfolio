"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-16 px-6 md:px-12 max-w-7xl mx-auto text-xs font-mono text-[#71717A]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.05]">
        <div className="space-y-1">
          <span className="text-sm font-semibold tracking-[0.2em] text-[#F5F5F0] uppercase">
            SUMIT KUMAR SINGH
          </span>
          <p className="text-xs text-[#8E8E93] font-sans">
            AI Engineer · Software Developer · Bangalore, India
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/Sumit692"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F5F0] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sumitkumarsingh24/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F5F0] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sumitkumarsingh7502@gmail.com"
            className="hover:text-[#F5F5F0] transition-colors"
          >
            Email
          </a>
          <a
            href="#work"
            className="hover:text-[#F5F5F0] transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-[#F5F5F0] transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[#F5F5F0] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#52525B]">
        <span>© 2026 Sumit Kumar Singh. All rights reserved.</span>
        <span className="text-[#8E8E93] italic font-sans text-xs">
          Built with curiosity.
        </span>
      </div>
    </footer>
  );
}
