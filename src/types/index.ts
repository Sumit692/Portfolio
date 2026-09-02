export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  category: string;
  image?: string;
  tech: string[];
  features: string[];
  overview: string;
  problem: string;
  solution: string;
  github: string;
  demo?: string;
  accentColor: string;
}

export interface Milestone {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "internship" | "bootcamp" | "award";
  badge?: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  affiliation?: string;
}

export interface SkillItem {
  name: string;
  context: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  skills: string[];
  link?: string;
}
