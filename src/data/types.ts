import type { IconType } from "react-icons";

export interface NavItemType {
    name: string;
    path: string;
}

export interface FooterLink {
  name: string;
  path?: string;   
  value?: string;
}

export interface FooterSection {
  title?: string;
  children: FooterLink[];
}

export interface Service {
  title: string;
  description: string;
  keyOfferings: string[];
  icon: IconType
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Case {
  id: number;
  title: string;
  category: string;
  description: string;
  slug: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}