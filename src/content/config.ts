import { defineCollection, z } from "astro:content";

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
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
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
  projects: projectsCollection,
  pages: pagesCollection,
};
