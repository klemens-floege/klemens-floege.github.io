import type { IconName } from './icons'

interface LinkSpec {
  readonly key: string
  readonly label: string
  readonly icon: IconName
}

/** Fixed display order, so every entry's link bar reads the same way. */
export const LINK_SPEC = [
  { key: 'arxiv', label: 'arXiv', icon: 'external' },
  { key: 'pdf', label: 'PDF', icon: 'pdf' },
  { key: 'code', label: 'Code', icon: 'code' },
  { key: 'doi', label: 'DOI', icon: 'external' },
] as const satisfies readonly LinkSpec[]

export type LinkKey = (typeof LINK_SPEC)[number]['key']

/**
 * Written out rather than as `Partial<Record<…>>` so that an explicitly
 * `undefined` value is accepted under `exactOptionalPropertyTypes`, which is how
 * a content entry with no `code` link arrives from the collection schema.
 */
export type LinkSet = { readonly [K in LinkKey]?: string | undefined }

export interface ResolvedLink extends LinkSpec {
  readonly href: string
}

/** Drops absent links and returns the rest in `LINK_SPEC` order. */
export function resolveLinks(links: LinkSet): readonly ResolvedLink[] {
  return LINK_SPEC.flatMap<ResolvedLink>((spec) => {
    const href = links[spec.key]
    return href === undefined ? [] : [{ ...spec, href }]
  })
}
