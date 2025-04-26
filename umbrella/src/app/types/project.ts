// src/types/project.ts
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string; // Ensure images are stored in /public or use a full URL if hosted externally
  description: string;
  status: string;
  year: number;
  location: string;
  link:string;
}
