import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    subtitle: "Core syntax & programmatic foundation",
    skills: [
      { name: "Java", context: "Object-oriented design patterns, multi-threading, algorithmic problem solving & data structures.", highlight: true },
      { name: "Python", context: "Data modeling, ML pipelines, NLP transformers, scientific computing, automation scripts.", highlight: true },
      { name: "JavaScript (ES6+)", context: "Asynchronous I/O, event loops, DOM orchestration, modern functional idioms." },
      { name: "TypeScript", context: "Strict static typing, complex interface modeling, generic types across React & Node apps." },
      { name: "SQL", context: "Relational schema design, complex joins, indexing, query optimization and ACID compliance." },
      { name: "HTML5 / CSS3", context: "Semantic architecture, accessible markup, modern layout primitives (Grid, Flexbox, Container queries)." }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "Modern client-side systems & spatial interfaces",
    skills: [
      { name: "React.js", context: "Component lifecycle, custom hooks, atomic state management, server component synergy.", highlight: true },
      { name: "Next.js", context: "App Router, SSR, incremental static regeneration, dynamic server rendering and route caching.", highlight: true },
      { name: "Three.js", context: "WebGL scene graphs, custom geometries, PBR materials, lighting configurations, camera systems.", highlight: true },
      { name: "React Three Fiber", context: "Declarative spatial 3D components, useFrame animations, Drei helpers, shader hooks." },
      { name: "Tailwind CSS", context: "Utility-first design tokens, modern micro-interactions, responsive fluid typography." },
      { name: "Framer Motion", context: "Layout animations, physics-based springs, gesture bindings, staggered viewport reveals." }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    subtitle: "Services, APIs & server runtimes",
    skills: [
      { name: "Node.js", context: "Event-driven runtime, asynchronous server backends, microservice utilities." },
      { name: "Flask", context: "Lightweight Python REST services hosting ML model inferencing and document OCR queues." },
      { name: "REST APIs", context: "Contract-first API design, idempotent endpoints, JSON payloads, structured error envelopes." },
      { name: "MySQL", context: "Database normalization, transaction isolation levels, schema migrations, query performance." }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle: "Intelligent systems, language models & computer vision",
    skills: [
      { name: "Machine Learning", context: "Supervised & unsupervised learning, classification, regression, hyperparameter tuning.", highlight: true },
      { name: "NLP & Transformers", context: "Tokenization, Hugging Face models, text summarization, sentiment extraction pipelines.", highlight: true },
      { name: "Tesseract OCR", context: "Optical character recognition, image preprocessing, bounding-box text extraction." },
      { name: "Text-to-Speech", context: "Speech synthesis, auditory streaming, accessible cadence control." }
    ]
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    subtitle: "Version control, deployment & platforms",
    skills: [
      { name: "Git & GitHub", context: "Trunk-based workflows, interactive rebasing, merge conflicts, pull request reviews.", highlight: true },
      { name: "Vercel", context: "Continuous deployment pipelines, edge functions, production analytics, custom domain setups." },
      { name: "Render", context: "Cloud container hosting, background task workers, automated build hooks." },
      { name: "AWS Springboard", context: "Fundamental cloud infrastructure, EC2 instances, S3 storage buckets, IAM security policies." }
    ]
  }
];
