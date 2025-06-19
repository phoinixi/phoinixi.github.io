// Shared types for the entire application

// Social link types
export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mentorcruise" | "email";
}

// Navigation link types
export interface NavLink {
  name: string;
  url: string;
}

// Blog post metadata
export interface BlogPostMeta {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
  featured: boolean;
  tags: string[];
}

// Project metadata
export interface ProjectMeta {
  title: string;
  description: string;
  link: string;
  year: string;
  tags: string[];
  featured: boolean;
  draft?: boolean;
}
