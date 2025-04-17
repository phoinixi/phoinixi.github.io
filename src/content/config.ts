import { defineCollection, z, reference } from "astro:content";

// Define blog schema
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

// Define notes schema
const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    relatedNotes: z.array(reference("notes")).optional(),
  }),
});

// Define projects schema
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url(),
    year: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    relatedProjects: z.array(reference("projects")).optional(),
  }),
});

// Define pages schema
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    updatedDate: z.date().optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  notes: notesCollection,
  projects: projectsCollection,
  pages: pagesCollection,
};
