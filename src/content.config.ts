import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title:    z.string(),
    date:     z.string(),
    category: z.enum(['Sociology', 'Marketing']),
    cover:    z.string().optional(),
    selected: z.boolean().optional().default(false),
    type:     z.enum(['text', 'project']).optional().default('text'),
    linkedin: z.string().optional(),
  }),
});

export const collections = { blog };
