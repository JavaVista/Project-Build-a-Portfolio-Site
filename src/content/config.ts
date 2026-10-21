import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    author: z.string().default('Javier Carrion'),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTime: z.string().default('5 min read'),
    canonicalUrl: z.string().url().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    coverImage: z.string(),
    tags: z.array(z.string()).default([]),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

const speakingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.string(),
    description: z.string(),
    youtubeId: z.string().optional(),
    channelName: z.string().optional(),
    role: z.string().default('Speaker'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  speaking: speakingCollection,
};
