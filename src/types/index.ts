export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'data' | 'ai' | 'devops' | 'other';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  appUrl?: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface ProfileData {
  contactInfo: ContactInfo;
  profile: string;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}

export interface ThemeColors {
  background: string;
  foreground: string;
  accent: string;
  sidebar: string;
  editor: string;
  terminal: string;
  statusBar: string;
  activityBar: string;
  titleBar: string;
} 