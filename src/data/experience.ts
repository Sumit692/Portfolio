import { Milestone, Education, Certification } from "@/types";

export const milestones: Milestone[] = [
  {
    id: "skillcraft",
    role: "Web Development Intern",
    organization: "SkillCraft Technology",
    location: "Remote / Bangalore",
    period: "September 2025 – December 2025",
    type: "internship",
    badge: "Internship",
    highlights: [
      "Developed responsive web applications using HTML, CSS, and JavaScript with focus on usability, responsive design, and user experience.",
      "Built interactive web applications including a Scientific Calculator, To-Do Web App, Tic-Tac-Toe Game, and Neon Navigation Bar.",
      "Implemented DOM manipulation, event handling, local storage, browser notifications, animations, and responsive layouts.",
      "Followed iterative development practices to build, test, debug, and improve web application features."
    ]
  },
  {
    id: "ide-bootcamp",
    role: "National Bootcamp",
    organization: "IDE Bootcamp Edition 3 (Phase 1)",
    location: "National Level",
    period: "2026",
    type: "bootcamp",
    badge: "National Bootcamp",
    highlights: [
      "Selected for national-level boot camp among 1,000+ competing engineering teams.",
      "Developed technology prototypes matching industry standards and practical constraints.",
      "Collaborated intensively with developers, mentors, and product managers to pitch validated engineering solutions."
    ]
  },
  {
    id: "toc-expo",
    role: "1st Prize Winner — Theory of Computation Expo",
    organization: "Theory of Computation Expo",
    location: "Atria Institute of Technology",
    period: "2025",
    type: "award",
    badge: "1st Prize",
    highlights: [
      "Awarded First Place at the Theory of Computation project exhibition.",
      "Engineered visual automata and state machine simulations explaining computation structures and language models."
    ]
  },
  {
    id: "ml-exhibition",
    role: "1st Prize Winner — Machine Learning Mini Project",
    organization: "Machine Learning Exhibition",
    location: "Atria Institute of Technology",
    period: "2025",
    type: "award",
    badge: "1st Prize",
    highlights: [
      "Won First Place for Machine Learning mini project implementation.",
      "Executed end-to-end model building, data pre-processing, accuracy tuning, and empirical verification."
    ]
  }
];

export const education: Education = {
  degree: "Bachelor of Engineering",
  major: "Information Science and Engineering",
  institution: "Atria Institute of Technology",
  location: "Bangalore, India",
  period: "Aug 2023 – Aug 2027",
  cgpa: "8.3 / 10",
  affiliation: "Visvesvaraya Technological University (VTU)"
};

export const certifications: Certification[] = [
  {
    title: "DSA using JAVA",
    issuer: "NPTEL",
    description: "Rigorous certification covering advanced Data Structures, Algorithmic Analysis, Graphs, Dynamic Programming, and Object-Oriented implementations in Java.",
    skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
    link: "https://drive.google.com/drive/u/1/folders/1avbLT93VktS2x68SkH30TJvWb0KaSqKH"
  },
  {
    title: "Programming in C, Software Engineering, JavaScript, AWS & Agile",
    issuer: "Infosys Springboard",
    description: "Comprehensive professional foundation spanning procedural programming in C, modern JavaScript, cloud infrastructure fundamentals on AWS, Software Development Life Cycle (SDLC), and Agile sprint methodologies.",
    skills: ["AWS", "Software Engineering", "Agile Methodology", "JavaScript", "C"],
    link: "https://drive.google.com/drive/u/1/folders/1tL80ak4_rNPoUNoAP6dDuiVMz7_Qt7cm"
  },
  {
    title: "IDE Bootcamp Edition 3 (Phase 1) — National Bootcamp",
    issuer: "Ministry of Education & AICTE",
    description: "Selected among 1,000+ national competing engineering teams to represent Atria Institute of Technology in rapid product prototyping and technology validation.",
    skills: ["Rapid Prototyping", "Design Thinking", "Product Validation"]
  },
  {
    title: "1st Prize — Theory of Computation Expo",
    issuer: "Atria Institute of Technology",
    description: "Awarded first place for excellence in finite automata modeling, grammatical compilation algorithms, and state transition machine visualization.",
    skills: ["Automata Theory", "Computation Logic", "Compiler Design"]
  },
  {
    title: "1st Prize — Machine Learning Exhibition",
    issuer: "Atria Institute of Technology",
    description: "Awarded first place for end-to-end machine learning model implementation, feature engineering, and precision evaluation.",
    skills: ["Machine Learning", "Python", "Data Processing"]
  }
];
