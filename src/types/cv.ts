export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  thesis?: string;
  advisors?: string[];
  gpa?: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: string;
  doi?: string;
  abstract?: string;
  impact_factor?: string;
  citations?: number;
}

export interface Patent {
  title: string;
  inventors: string[];
  patentNumber: string;
  filingDate: string;
  issueDate?: string;
  status: 'Pending' | 'Granted' | 'Published';
  jurisdiction: string;
  abstract?: string;
}

export interface ResearchProject {
  title: string;
  period: string;
  role: string;
  description: string;
  technologies?: string[];
  funding?: string;
  collaborators?: string[];
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface CVData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    googleScholar?: string;
    orcid?: string;
  };
  summary: string;
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  patents: Patent[];
  researchProjects: ResearchProject[];
  awards: Award[];
  skills: Skill[];
  languages?: string[];
  certifications?: {
    name: string;
    issuer: string;
    date: string;
    id?: string;
  }[];
}