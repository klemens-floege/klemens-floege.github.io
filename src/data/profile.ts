import type { IconName } from '~/lib/icons'

export interface SocialLink {
  readonly label: string
  readonly href: string
  readonly icon: IconName
}

export interface Profile {
  readonly name: string
  readonly role: string
  readonly org: { readonly name: string; readonly href: string }
  readonly location: string
  /** One-sentence summary used for `<meta name="description">` and social cards. */
  readonly tagline: string
  readonly email: string
  readonly bio: readonly string[]
  readonly interests: readonly string[]
  readonly languages: readonly string[]
  readonly socials: readonly SocialLink[]
}

/**
 * The name to highlight wherever an author list is rendered. Kept here rather
 * than hard-coded in the component so the site stays forkable.
 */
export const AUTHOR_NAME = 'Klemens Flöge'

export const profile = {
  name: AUTHOR_NAME,
  role: 'AI Researcher',
  org: { name: 'Prior Labs', href: 'https://priorlabs.ai' },
  location: 'Berlin, Germany',
  tagline:
    'AI researcher at Prior Labs working on tabular foundation models. Trained in electrical engineering and mathematics, working at the intersection of Bayesian methods and deep learning.',
  email: 'klemens.floege@gmail.com',
  bio: [
    'I am an AI researcher at Prior Labs in Berlin, where I build and train foundation models for tabular data.',
    'My background is in electrical engineering and mathematics. I studied Electrical Engineering and Information Technology at ETH Zürich, then took Part III of the Mathematical Tripos at Cambridge, concentrating on statistics and probability. Part III is what set my direction: after a year spent on probability theory, I wanted to find out how far Bayesian and probabilistic methods could actually be pushed inside modern deep learning systems.',
    'I went looking for the answer at Helmholtz AI, working with Vincent Fortuin on curvature-aware particle methods for approximate Bayesian inference, uncertainty quantification for low-rank adapted language models, and multi-modal protein models. Deep networks are far too large to treat exactly, and the question that kept me busy was how much principled uncertainty survives at that scale, and what it costs to keep.',
    'As much as I loved that work, in the end my engineer’s heart got the better of me. I care most about making things actually work. Defining an explicit probability distribution over the parameter space of a large network is elegant, but deriving it and performing inference under it is largely impractical. What excites me far more is specifying the prior implicitly, in function space: asking what properties the data itself ought to have, modelling that distribution directly and generating datasets synthetically from it, rather than routing everything through parameter space. The network then amortises the inference, and what once demanded a costly posterior approximation happens in a single forward pass. That is what brought me to Prior Labs.',
    'Outside of research you will usually find me doing calisthenics, travelling, or arguing about films.',
  ],
  interests: [
    'Foundation models',
    'Bayesian deep learning',
    'Uncertainty quantification',
    'Probabilistic inference',
    'Multimodality',
  ],
  languages: ['German (native)', 'English (fluent)', 'French (B1–B2)'],
  socials: [
    { label: 'Email', href: 'mailto:klemens.floege@gmail.com', icon: 'mail' },
    { label: 'GitHub', href: 'https://github.com/klemens-floege', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/klemens-flöge-884123a0',
      icon: 'linkedin',
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=XhyfDk8AAAAJ&hl=en',
      icon: 'scholar',
    },
  ],
} as const satisfies Profile
