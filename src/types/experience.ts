export interface Company {
  name: string;
  location: string;
}

export interface Position {
  title: string;
  description: string;
  startedAt: string;
  endedAt?: string;
  stack: string[];
  isHighlight?: boolean;
  websiteUrl?: string; // Moved here
}

export interface Experience {
  id: string;
  type: 'work' | 'internship';
  company: Company;
  positions: Position[];
}

export interface Education {
  id: string;
  type: 'degree' | 'certification' | 'course' | 'school';
  institution: string;
  location?: string;
  field?: string;
  degree?: string;
  startAt: string;
  endedAt: string;
  details: string[];
  isHighlight?: boolean;
  isFeatured?: boolean;
  score?: {
    label: string;
    value: string;
  }[];
  honors?: string;
}
