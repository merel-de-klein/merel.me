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
