import { Milestone, Education } from "@/types";

export const milestones: Milestone[] = [
  {
    id: "skillcraft",
    role: "Web Development Intern",
    organization: "SkillCraft Technology",
    location: "Remote / Bangalore",
    period: "September 2025 — December 2025",
    type: "internship",
    badge: "Internship",
    highlights: [
      "Engineered responsive client-side web utility architectures using semantic HTML5, modern CSS3, and ES6+ JavaScript.",
      "Built production-ready utility modules including a scientific calculator, an offline-capable LocalStorage To-Do tracker, and a responsive state-driven game engine.",
      "Implemented reactive layouts, dark/light theme systems, custom event listeners, and performant DOM updates.",
      "Conducted rigorous cross-browser testing and responsive viewport optimization across desktop, tablet, and mobile devices."
    ]
  },
  {
    id: "ide-bootcamp",
    role: "National Bootcamp Finalist",
    organization: "IDE Bootcamp Edition 3 — Phase 1",
    location: "National Level",
    period: "Early 2026",
    type: "bootcamp",
    badge: "National Finalist",
    highlights: [
      "Selected among 1,000+ competing engineering teams nationwide to represent Atria Institute of Technology.",
      "Rapidly prototyped functional software solutions adhering to strict industry engineering benchmarks.",
      "Collaborated intensively with developers, technical mentors, and product managers to pitch validated engineering prototypes."
    ]
  },
  {
    id: "toc-expo",
    role: "1st Prize Winner — Theory of Computation",
    organization: "Theory of Computation Project Expo",
    location: "Atria Institute of Technology",
    period: "2025",
    type: "award",
    badge: "1st Prize",
    highlights: [
      "Awarded First Place out of multiple competing departmental engineering projects.",
      "Architected visual finite automata simulation software demonstrating state transition machines, non-deterministic transitions, and grammatical parsers."
    ]
  },
  {
    id: "ml-exhibition",
    role: "1st Prize Winner — Machine Learning Mini Project",
    organization: "Machine Learning Technical Exhibition",
    location: "Atria Institute of Technology",
    period: "2025",
    type: "award",
    badge: "1st Prize",
    highlights: [
      "Won First Place for outstanding machine learning workflow implementation.",
      "Executed end-to-end data pre-processing pipelines, algorithmic feature engineering, precision tuning, and empirical model validation."
    ]
  }
];

export const education: Education = {
  degree: "Bachelor of Engineering",
  major: "Information Science & Engineering (ISE)",
  institution: "Atria Institute of Technology",
  location: "Bangalore, India",
  period: "2023 — 2027",
  cgpa: "8.3 / 10",
  affiliation: "Visvesvaraya Technological University (VTU)"
};
