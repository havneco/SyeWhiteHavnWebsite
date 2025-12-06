import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  description?: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  link?: string;
  image?: string;
}

export interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  tech?: string[];
}

export interface ChartData {
  name: string;
  value: number;
  fill?: string;
}

export interface BrandValue {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface CaseStudy {
  title: string;
  description: string;
  impact: string;
  tags: string[];
}

export interface AppTool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: "Real Estate" | "Fintech" | "AI Utility" | "Hospitality" | "HealthTech" | "Other";
  status: "Live" | "Beta" | "Internal" | "Proprietary";
}