import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
// Zod 4 deprecates its nested `z` re-export in favour of a namespace import.
// `astro/zod` is the exact instance Astro validates with.
import * as z from 'astro/zod'

/**
 * Every externally-facing link is validated as a real URL at build time, so a
 * typo in a DOI or an arXiv id fails the build instead of shipping a dead
 * button. Local files (PDFs served from `public/`) are checked as root-relative
 * paths instead, since they are not absolute URLs.
 */
const externalUrl = z.url()
const localPath = z.string().regex(/^\/[^\s]*$/, 'must be a root-relative path, e.g. /pdf/thesis.pdf')

const publicationLinks = z
  .object({
    arxiv: externalUrl.optional(),
    pdf: externalUrl.optional(),
    code: externalUrl.optional(),
    doi: externalUrl.optional(),
  })
  .default({})

/** Ordered loosely by how much peer review the venue implies. */
export const PUBLICATION_KINDS = ['journal', 'conference', 'workshop', 'preprint'] as const
export type PublicationKind = (typeof PUBLICATION_KINDS)[number]

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      /** Full author list, in publication order. Must include `AUTHOR_NAME` to self-highlight. */
      authors: z.array(z.string().min(1)).min(1),
      date: z.coerce.date(),
      venue: z.string().min(1),
      /** Short venue label for the compact list on the homepage. */
      venueShort: z.string().min(1).optional(),
      kind: z.enum(PUBLICATION_KINDS),
      /** Surfaced on the homepage list when true. */
      featured: z.boolean().default(false),
      summary: z.string().min(1),
      abstract: z.string().min(1),
      figure: image().optional(),
      figureCaption: z.string().min(1).optional(),
      tags: z.array(z.string().min(1)).default([]),
      links: publicationLinks,
    }),
})

export const PROJECT_KINDS = ['thesis', 'research', 'teaching'] as const
export type ProjectKind = (typeof PROJECT_KINDS)[number]

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      kind: z.enum(PROJECT_KINDS),
      date: z.coerce.date(),
      institution: z.string().min(1).optional(),
      summary: z.string().min(1),
      figure: image().optional(),
      figureCaption: z.string().min(1).optional(),
      tags: z.array(z.string().min(1)).default([]),
      links: z
        .object({
          pdf: localPath.optional(),
          code: externalUrl.optional(),
        })
        .default({}),
    }),
})

export const collections = { publications, projects }
