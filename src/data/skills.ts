import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    subtitle: "Core syntax & programmatic foundation",
    skills: [
      { name: "Java", context: "Object-oriented programming, data structures & algorithmic problem solving.", highlight: true },
      { name: "Python", context: "AI workflows, machine learning models, NLP, OCR pipelines and Flask backend services.", highlight: true },
      { name: "JavaScript", context: "Modern ES6+ asynchronous programming, DOM manipulation, reactive web utilities.", highlight: true },
      { name: "TypeScript", context: "Strict static typing, complex interface modeling, scalable frontend & backend architectures." },
      { name: "SQL", context: "Relational database schema modeling, queries, data extraction and relational integrity." }
    ]
  },
  {
    id: "web",
    title: "Web Technologies",
    subtitle: "Client-side systems & component frameworks",
    skills: [
      { name: "HTML5", context: "Semantic architecture, accessible markup, document object model standards.", highlight: true },
      { name: "CSS3", context: "Modern responsive layouts, animations, design tokens, micro-interactions.", highlight: true },
      { name: "React.js", context: "Component-driven design, custom hooks, reactive state machines, interactive SPAs.", highlight: true },
      { name: "Next.js", context: "Production App Router, SSR, dynamic rendering, high-performance static optimization.", highlight: true },
      { name: "Servlets", context: "Java server-side web controllers, HTTP request handling, session lifecycle management." }
    ]
  },
  {
    id: "backend-db",
    title: "Backend & Databases",
    subtitle: "Server services, APIs & data persistence",
    skills: [
      { name: "Flask", context: "Python lightweight web service hosting ML inference pipelines, file processing, and API routes.", highlight: true },
      { name: "MySQL", context: "Relational database administration, schema design, transactional integrity, relational tables.", highlight: true },
      { name: "REST APIs", context: "Contract-first endpoint design, JSON serialization, HTTP status conventions, secure data exchange.", highlight: true },
      { name: "Node.js", context: "Asynchronous event-driven runtime hosting web services, build tools, package management." },
      { name: "Express.js", context: "Middleware routing, server-side REST APIs, request parsing, backend architecture." }
    ]
  },
  {
    id: "ai-data",
    title: "AI & Data",
    subtitle: "Intelligent processing & analytics systems",
    skills: [
      { name: "NLP", context: "Natural Language Processing, text summarization, tokenization, semantic extraction.", highlight: true },
      { name: "OCR", context: "Optical Character Recognition, document scanning, multi-column text extraction with Tesseract.", highlight: true },
      { name: "Text-to-Speech", context: "Speech synthesis, auditory streaming, accessible cadence control and vocal narration.", highlight: true },
      { name: "Data Processing", context: "Feature extraction, data transformation, geospatial coordinate modeling, algorithmic optimization." },
      { name: "AI App Development", context: "End-to-end intelligent applications integrating ML inference into full-stack interfaces." },
      { name: "PowerBI", context: "Business intelligence dashboards, KPI visualization, data reporting and analytics." },
      { name: "Tableau", context: "Visual analytics, interactive reporting dashboards, data modeling and trend exploration." }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    subtitle: "Development environments, deployment & version control",
    skills: [
      { name: "Git", context: "Distributed version control, branching workflows, commits, rebasing and code hygiene.", highlight: true },
      { name: "GitHub", context: "Remote code repository management, collaborative development, open-source publishing.", highlight: true },
      { name: "VS Code", context: "Primary integrated development environment, debugging, linting, extensions ecosystem." },
      { name: "Render", context: "Cloud container hosting, web service deployment, background worker management." },
      { name: "Vercel", context: "Zero-configuration edge deployments, production hosting, CI/CD automation." }
    ]
  },
  {
    id: "core-concepts",
    title: "Core Concepts",
    subtitle: "Computer science foundational principles",
    skills: [
      { name: "Data Structures & Algorithms", context: "Arrays, linked lists, trees, graphs, sorting, searching, time & space complexity analysis.", highlight: true },
      { name: "Object-Oriented Programming", context: "Encapsulation, inheritance, polymorphism, abstraction, robust design patterns in Java.", highlight: true },
      { name: "Problem Solving", context: "Algorithmic thinking, edge-case mitigation, deterministic logic design.", highlight: true },
      { name: "SDLC", context: "Software Development Life Cycle, requirement analysis, agile iteration, testing, deployment." },
      { name: "REST APIs Architecture", context: "Stateless client-server architecture, standard HTTP verbs, resource identification." }
    ]
  }
];
