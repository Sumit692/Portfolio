import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ramayana-verse",
    number: "01",
    title: "RamayanaVerse",
    subtitle: "Cinematic & Interactive Epic Digital Journey",
    period: "2026",
    category: "Full-Stack & Cultural Tech",
    image: "/images/projects/ramayana.jpg",
    demo: "https://ramayana-verse.vercel.app/",
    github: "https://github.com/Sumit692/ramayana-verse",
    accentColor: "#F59E0B",
    description:
      "An immersive, cinematic, AI-powered platform transforming the Ramayana into an interactive digital journey through stories, characters, chronological timelines, sacred geography, and ancient philosophy.",
    overview:
      "RamayanaVerse combines modern web engineering (Next.js 16, React 19, Tailwind CSS v4, Framer Motion, and Prisma) with classical storytelling. The platform replaces static text with interactive spatial cartography, genealogical relationship graphs, and chronological Kandas exploration.",
    problem:
      "Classical cultural narratives and foundational epics are traditionally locked in dense, non-interactive textual formats that struggle to engage younger digital-native generations and global audiences.",
    solution:
      "Engineered an interactive spatial web platform featuring chronological timeline scrubbing, genealogical relationship graphs, location exploration from Ayodhya to Lanka, and fluid viewport choreography.",
    features: [
      "Interactive Chronological Timeline exploring the Bala, Ayodhya, Aranya, Kishkindha, Sundara, and Yuddha Kandas.",
      "Spatial Ancient Cartography tracking sacred geolocations from Ayodhya to Lanka with historical context.",
      "Character Genealogy & Relationship Graphs mapping lineages, virtues, and allegiances.",
      "Cinematic Audio-Visual Soundscapes and fluid Framer Motion viewport transitions."
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma", "PostgreSQL", "Framer Motion"]
  },
  {
    id: "vaani-ai",
    number: "02",
    title: "VAANI AI — TextAssist",
    subtitle: "Multimodal AI Accessibility & Document Narration",
    period: "March 2025 – June 2025",
    category: "Multimodal AI & OCR",
    image: "/images/projects/vaani.png",
    demo: "https://vaani-ai-textassist-1.onrender.com/",
    github: "https://github.com/Sumit692/Vaani-AI-TextAssist",
    accentColor: "#3B82F6",
    description:
      "An AI-powered accessibility platform utilizing Google Gemini, Tesseract OCR, and neural text-to-speech to convert scanned textbooks, academic papers, and PDFs into structured summaries and auditory narration.",
    overview:
      "VAANI is engineered to democratize academic learning for visually impaired students and auditory learners. The system accepts raw document uploads, processes degraded scans through Tesseract OCR, extracts structured sections, invokes Google Gemini for contextual simplification, and synthesizes clear vocal playback.",
    problem:
      "Academic textbooks and research papers are frequently published in scanned or non-accessible formats, presenting high barriers for visually impaired students and non-native readers.",
    solution:
      "Architected an end-to-end processing pipeline in Python and Flask combining multi-column OCR extraction, Gemini-driven text simplification, key-point extraction, and gTTS auditory playback.",
    features: [
      "Multimodal document ingestion accepting scanned JPGs, PNGs, and multi-page PDFs.",
      "Tesseract OCR pipeline with OpenCV preprocessing for noise reduction and contrast normalization.",
      "Contextual summarization powered by Google Gemini AI with customizable reading difficulty tiers.",
      "Neural Text-to-Speech audio streaming with play, pause, seek, and playback rate controls."
    ],
    tech: ["Python", "Flask", "Google Gemini AI", "Tesseract OCR", "gTTS", "PyPDF2", "JavaScript"]
  },
  {
    id: "house-price-prediction",
    number: "03",
    title: "Bangalore Real Estate Valuation",
    subtitle: "AI Machine Learning Price Prediction & Voice Analytics",
    period: "2026",
    category: "Machine Learning & GIS",
    image: "/images/projects/house_price.png",
    demo: "https://house-price-prediction-model-xi.vercel.app/",
    github: "https://github.com/Sumit692/House-Price-prediction-model-",
    accentColor: "#10B981",
    description:
      "Full-stack real estate valuation platform featuring supervised machine learning regression, interactive Leaflet location mapping, voice assistant queries, investment analytics, and market trends.",
    overview:
      "Developed a machine learning valuation system trained on thousands of Bangalore residential property transactions. Features rigorous feature engineering, outlier mitigation, and cross-validated regression models served via a Flask REST API to a responsive dashboard with interactive Leaflet maps and voice recognition.",
    problem:
      "Bangalore real estate pricing exhibits extreme volatility across micro-markets, making manual appraisals inaccurate and lacking transparent geospatial context.",
    solution:
      "Trained Scikit-Learn regression pipelines served via Flask REST endpoints to a responsive frontend featuring voice search, Leaflet interactive mapping, and financial amortization calculators.",
    features: [
      "Supervised ML Regression estimating residential property valuations with high predictive accuracy (R²).",
      "Voice-Enabled Assistant integrating Web Speech API for hands-free natural voice queries.",
      "Geospatial Leaflet Mapping pinpointing over 100+ Bangalore neighborhoods with price heatmaps.",
      "Investment Analytics calculating estimated rental yield, capital appreciation, and loan EMI breakdown."
    ],
    tech: ["Python", "Scikit-Learn", "Flask", "Pandas", "NumPy", "JavaScript", "Leaflet", "Vercel", "Render"]
  },
  {
    id: "lumi-chatbot",
    number: "04",
    title: "LUMI — AI Multi-Subject CS Tutor",
    subtitle: "Intelligent Educational Dialogue & Practice Engine",
    period: "2025",
    category: "AI & Education",
    image: "/images/projects/lumi.png",
    demo: "https://lumi-ai-chatbot.onrender.com/",
    github: "https://github.com/Sumit692/Lumi-AI-Chatbot",
    accentColor: "#8B5CF6",
    description:
      "An intelligent conversational tutor built with Google Gemini API and Flask to assist computer science students in mastering complex technical subjects through dialogue, code examples, and practice drills.",
    overview:
      "LUMI serves as an on-demand personal academic mentor. It uses specialized prompt engineering and conversational context tracking to teach foundational CS topics (DSA, OOP, Database Systems, Computer Networks, and Web Development) with step-by-step Socratic guidance.",
    problem:
      "Computer science students frequently encounter conceptual roadblocks when learning abstract data structures and debugging syntax late at night when instructors are unavailable.",
    solution:
      "Engineered a responsive conversational agent powered by Google Gemini with subject-tuned system directives, markdown code block rendering, and auto-generated practice challenges.",
    features: [
      "Multi-Domain CS Reasoning covering Data Structures, Algorithms, SQL, Java, and Python.",
      "Syntactic Code Rendering with syntax highlighting and step-by-step logic annotations.",
      "Interactive Practice Mode auto-generating conceptual flash-quizzes and debugging puzzles.",
      "Responsive chat interface with lightweight asynchronous streaming over Flask backend."
    ],
    tech: ["Python", "Flask", "Google Gemini API", "JavaScript", "HTML5", "CSS3", "Render"]
  },
  {
    id: "music-catalog",
    number: "05",
    title: "Music Catalog Insights Platform",
    subtitle: "Full-Stack Library Engine with AI Taste Analytics",
    period: "2026",
    category: "Full-Stack & Cloud",
    image: "/images/projects/music_catalog.png",
    demo: "https://music-catalog-platform.vercel.app/",
    github: "https://github.com/Sumit692/Music-catalog-platform",
    accentColor: "#EC4899",
    description:
      "End-to-end full-stack music curation and discovery platform with iTunes Search API integration, personal library cataloging, custom track ratings, and AI-generated listening profile insights.",
    overview:
      "A modern full-stack web application that empowers music enthusiasts to search, catalog, rate, and analyze their favorite songs. Includes a secured backend API, MongoDB database persistence, library analytics, and an integrated AI recommendation engine that summarizes listening patterns.",
    problem:
      "Commercial streaming algorithms often promote sponsored tracks rather than giving listeners transparent ownership, personal notes, and analytical insights over their collections.",
    solution:
      "Created a unified MERN architecture (React frontend + Express/Node REST backend + MongoDB) featuring audio sample playback, custom rating scales, personal notes, and LLM-generated taste profiles.",
    features: [
      "Global Catalog Discovery integrating an iTunes Search API proxy for real-time metadata & audio previews.",
      "Personal Library Persistence supporting full CRUD: save songs, assign 1-5 star ratings, and write personal notes.",
      "AI-Powered Taste Analytics generating narrative listening profile summaries and curated recommendations.",
      "Library Telemetry displaying top genres, average track ratings, and collection growth trends."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Vercel", "Render"]
  },
  {
    id: "simple-todo",
    number: "06",
    title: "TaskFlow — Enterprise Task Manager",
    subtitle: "Robust Java Servlets, JSP & Relational Database System",
    period: "September 2025 – December 2025",
    category: "Enterprise Systems",
    github: "https://github.com/Sumit692/Simple-TODO-Application",
    accentColor: "#F97316",
    description:
      "Multi-user enterprise task management web application engineered with Java Servlets, JSP, JDBC, and MySQL following classical MVC architecture, session authentication, and transactional integrity.",
    overview:
      "Developed to demonstrate foundational enterprise software principles. Features strict separation of concerns with Model-View-Controller patterns, connection-pooled JDBC access, password hashing, user session lifecycle management, and relational database operations.",
    problem:
      "Building resilient enterprise web backends requires deep adherence to stateless request handling, thread-safe database connection pooling, and multi-tenant session isolation.",
    solution:
      "Implemented Java Servlets as HTTP controllers, JSP templates for dynamic view rendering, JDBC DAO classes for SQL operations, and MySQL for relational task storage.",
    features: [
      "Full MVC Architecture separating business entities, servlet controllers, and presentation JSPs.",
      "Session-Based Authentication managing secure user logins, logout timeouts, and access-control filters.",
      "Transactional Relational Database implementing ACID-compliant CRUD operations in MySQL.",
      "Custom Exception Envelopes and validation layers ensuring clean database states."
    ],
    tech: ["Java Servlets", "JSP", "JDBC", "MySQL", "Apache Tomcat", "HTML5", "CSS3", "MVC"]
  },
  {
    id: "covid-management",
    number: "07",
    title: "COVID-19 Clinical Diagnostic System",
    subtitle: "Healthcare Diagnostic Workflow & Laboratory Operations",
    period: "2025",
    category: "Healthcare Informatics",
    github: "https://github.com/Sumit692/Covid19-Testing-Management-System",
    accentColor: "#06B6D4",
    description:
      "Web-based diagnostic workflow system built with PHP and MySQL to streamline clinical patient registration, sample collection tracking, laboratory status reporting, and administrative dashboards.",
    overview:
      "A clinical information system designed for diagnostic testing centers. Tracks patient samples through five distinct operational stages: patient registration, phlebotomist sample collection, laboratory analysis, result generation, and digital report delivery.",
    problem:
      "High-throughput diagnostic testing centers experience severe administrative bottlenecks and tracking errors when relying on fragmented manual spreadsheets.",
    solution:
      "Constructed a centralized PHP/MySQL platform providing role-based workflows for administrators, lab technicians, and patients, with real-time test tracking and statistical reporting.",
    features: [
      "Complete Sample Lifecycle tracking tests across registered, collected, sent-to-lab, and reported states.",
      "Role-Based Security & Admin Dashboard monitoring daily testing volumes and positive/negative ratios.",
      "Public Tracking Portal allowing patients to check diagnostic status and download official test reports.",
      "Relational MySQL Schema designed with foreign key constraints, indexes, and optimized query joins."
    ],
    tech: ["PHP", "MySQL", "Apache", "Bootstrap", "Chart.js", "JavaScript", "SQL"]
  }
];
