// Site metadata constants
import type { NavLink, SocialLink } from "./types";

export const SITE_TITLE = "francescoesposito.dev";
export const SITE_DESCRIPTION = "Personal website and portfolio";
export const SITE_URL = "https://francescoesposito.dev";

// Navigation links for the header
export const HEADER_LINKS: NavLink[] = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Projects", url: "/projects" },
  { name: "About", url: "/about" },
];

export const GITHUB_URL = "https://github.com/phoinixi";
export const LINKEDIN_URL = "https://linkedin.com/in/francescoes";
export const MENTORCRUISE_URL =
  "https://mentorcruise.com/mentor/francescoesposito/";
export const EMAIL = "hey@francescoesposito.dev";

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: GITHUB_URL, icon: "github" },
  {
    name: "LinkedIn",
    url: LINKEDIN_URL,
    icon: "linkedin",
  },
  {
    name: "MentorCruise",
    url: MENTORCRUISE_URL,
    icon: "mentorcruise",
  },
  {
    name: "Email",
    url: `mailto:${EMAIL}`,
    icon: "email",
  },
];
