import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "solvix",
    number: "01",
    title: "SOLVIX",
    subtitle: "AI Solar Planner & Geospatial Optimizer",
    period: "Feb 2026 — June 2026",
    description:
      "An AI-powered geospatial engineering platform designed to optimize utility-scale solar deployments. Translates terrain elevation models into constraint-optimized solar layouts with real-time financial ROI simulations.",
    category: "AI & Optimization",
    tech: ["React.js", "Next.js", "Three.js", "React Three Fiber", "Leaflet", "Node.js", "Tailwind CSS"],
    features: [
      "Interactive 3D terrain elevation mesh rendered with custom normal-mapped shaders.",
      "Geospatial coordinate mapping with dynamic latitude/longitude panel orientation.",
      "Constraint-based solar array layout considering slope thresholds, azimuth, and inter-row shading.",
      "Financial analysis module estimating capital expenditure, levelized cost of energy (LCOE), and payback horizon."
    ],
    overview:
      "Solvix bridges civil engineering, geospatial data science, and web graphics to automate utility-scale photovoltaic planning. By importing raw elevation data, project planners simulate panel density and sunlight exposure in minutes rather than weeks.",
    problem:
      "Manual solar site planning requires disparate GIS tools, CAD drafting, and separate economic spreadsheets. This causes friction, miscalculated shading coefficients, and delayed feasibility studies.",
    solution:
      "A unified, browser-native 3D platform combining WebGL mesh generation, geospatial coordinate projection, algorithmic panel placement, and live financial modeling in a single high-performance canvas.",
    github: "https://github.com/Sumit692",
    demo: "https://ai-portfolio-ruby.vercel.app/",
    accentColor: "#3B82F6"
  },
  {
    id: "vaani",
    number: "02",
    title: "VAANI",
    subtitle: "AI Text Assist & Inclusive Document Narration",
    period: "March 2025 — June 2025",
    description:
      "An AI-driven accessibility pipeline that digitizes scanned textbooks, research papers, and PDFs into structured semantic formats with transformer-based summarization and neural text-to-speech.",
    category: "Accessibility & NLP",
    tech: ["Python", "Flask", "Tesseract OCR", "Hugging Face Transformers", "NLP", "Text-to-Speech", "REST APIs"],
    features: [
      "High-accuracy optical character recognition (OCR) extracting text from scanned books and multi-column research papers.",
      "Transformer-based NLP pipeline distilling dense academic prose into clear conceptual synopses.",
      "Neural text-to-speech engine producing natural synthesized audio narration.",
      "Asynchronous Python Flask microservice managing document ingestion queues and payload streaming."
    ],
    overview:
      "VAANI was engineered to make complex academic literature accessible to visually impaired students and neurodivergent learners. It handles document parsing, conceptual distillation, and auditory rendering through an integrated pipeline.",
    problem:
      "Standard PDF screen readers stumble over multi-column journal papers, footnote clutter, and convoluted jargon, leaving students with fragmented audio and zero conceptual hierarchy.",
    solution:
      "An intelligent pipeline that separates layout elements, runs context-aware neural summarization, and delivers synchronized audio playback with selectable listening cadences.",
    github: "https://github.com/Sumit692",
    accentColor: "#60A5FA"
  },
  {
    id: "skillcraft",
    number: "03",
    title: "SKILLCRAFT INTERACTIVE SUITE",
    subtitle: "Modern Web Utilities & Micro-Interactions",
    period: "Sep 2025 — Dec 2025",
    description:
      "A suite of responsive web utility applications engineered during an internship to explore deterministic state machines, DOM performance, localStorage persistence, and fluid user feedback.",
    category: "Micro-interactions",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "LocalStorage API", "Keyframe Animations", "Responsive UI"],
    features: [
      "Scientific Calculator supporting chained algebraic expressions and operator precedence parsing.",
      "State-driven To-Do application with local persistent storage and filter paradigms.",
      "Interactive Tic-Tac-Toe engine with minimax-inspired move tracking and win-state validation.",
      "Responsive navigation bar featuring dynamic indicator follow-scroll and theme coordination."
    ],
    overview:
      "Developed during a focused web development internship, this suite exemplifies core web fundamentals executed with zero dependency bloat, strict DOM event handling, and resilient state synchronization.",
    problem:
      "Modern web development often over-relies on heavy frameworks for tasks that require lightweight, rock-solid native browser execution and instant tactile feedback.",
    solution:
      "Engineered vanilla-first utility modules with custom state controllers, accessible keyboard handling, and 60fps CSS transitions.",
    github: "https://github.com/Sumit692",
    accentColor: "#818CF8"
  },
  {
    id: "lab_portfolio",
    number: "04",
    title: "AI HOLOGRAPHIC LABORATORY OS",
    subtitle: "Experimental WebGL & Audio Engineering Study",
    period: "July 2026",
    description:
      "An experimental interface study exploring interactive 3D WebGL scenes, Web Audio API synthesis, GPU-adaptive rendering tiers, and gesture-driven viewport transitions.",
    category: "3D Systems",
    tech: ["Next.js", "Three.js", "React Three Fiber", "Framer Motion", "GSAP", "Tailwind CSS", "Web Audio API"],
    features: [
      "Interactive 3D WebGL core mesh with real-time gyroscopic orientation and custom wireframe shaders.",
      "Programmatic Web Audio API audio feedback engine with frequency modulation.",
      "Adaptive GPU rendering tiers dynamically reducing geometry complexity on lower-powered devices.",
      "Hardware-accelerated viewport scroll synchronization with Lenis."
    ],
    overview:
      "A technical sandbox testing the limits of browser graphics, audio synthesis, and cinematic choreography. Demonstrates deep fluency in WebGL shaders, Three.js scene graphs, and performance optimization.",
    problem:
      "Complex 3D web experiences frequently suffer from high GPU thermal overhead, frame drops on mobile devices, and accessibility disconnects.",
    solution:
      "Built dynamic level-of-detail (LOD) toggles, decoupled animation loops, and graceful static fallbacks ensuring stability across screen form factors.",
    github: "https://github.com/Sumit692",
    demo: "https://ai-portfolio-ruby.vercel.app/",
    accentColor: "#93C5FD"
  }
];
