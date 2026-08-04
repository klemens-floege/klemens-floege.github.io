type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'

/**
 * A calendar month, e.g. `'2025-04'`. Typing this as a template literal rather
 * than `string` means a transposed month (`'2025-13'`) is a compile error, not
 * an off-by-one in the rendered timeline.
 */
export type YearMonth = `${number}-${Month}`

export interface Role {
  readonly title: string
  readonly org: string
  readonly href?: string
  readonly location: string
  readonly start: YearMonth
  /** `'present'` renders as an open-ended range. */
  readonly end: YearMonth | 'present'
  readonly description: string
}

/** Reverse-chronological; the current role is first. */
export const experience: readonly Role[] = [
  {
    title: 'Applied AI Scientist',
    org: 'Prior Labs',
    href: 'https://priorlabs.ai',
    location: 'Berlin, Germany',
    start: '2025-04',
    end: 'present',
    description: 'Building and training foundation models for tabular data.',
  },
  {
    title: 'ML Researcher',
    org: 'Helmholtz AI',
    href: 'https://www.helmholtz.ai',
    location: 'Munich, Germany',
    start: '2023-11',
    end: '2024-10',
    description:
      'Enhanced Bayesian particle-based inference through Hessian computations, incorporated topological priors into diffusion models, built multi-modal protein transformers, and worked on uncertainty quantification for low-rank adapted LLMs.',
  },
  {
    title: 'Data Science Intern',
    org: 'BASF SE',
    location: 'Schwarzheide, Germany',
    start: '2023-07',
    end: '2023-09',
    description:
      'Worked in the Digitalisation service unit on sensor data analysis and malfunction prediction for a chemical adhesives plant, using autoencoders, CNNs, RNNs and LSTMs in Python, Pandas and TensorFlow.',
  },
  {
    title: 'Teaching Assistant',
    org: 'ETH Zürich',
    href: 'https://ethz.ch',
    location: 'Zürich, Switzerland',
    start: '2020-09',
    end: '2021-12',
    description:
      'Taught Digital Circuits Laboratory, Real Analysis, Engineering Mechanics and Multivariable Calculus — preparing and delivering example classes and marking exercises.',
  },
  {
    title: 'Intern',
    org: 'DrSmile',
    location: 'Berlin, Germany',
    start: '2017-10',
    end: '2017-12',
    description:
      'Supported internal operations, tracking product delivery and customer procedure progress, and helped set up the first retail location.',
  },
]

export interface Degree {
  readonly qualification: string
  readonly field: string
  readonly institution: string
  readonly href: string
  readonly year: number
  readonly note?: string
}

export const education: readonly Degree[] = [
  {
    qualification: 'MASt',
    field: 'Applied Mathematics',
    institution: 'University of Cambridge',
    href: 'https://www.maths.cam.ac.uk',
    year: 2023,
    note: 'Part III of the Mathematical Tripos — statistics and probability.',
  },
  {
    qualification: 'BSc',
    field: 'Electrical Engineering and Information Technology',
    institution: 'ETH Zürich',
    href: 'https://ethz.ch',
    year: 2022,
    note: 'Specialisation in quantum photonics and control.',
  },
]

export interface Certification {
  readonly title: string
  readonly organization: string
  readonly organizationHref: string
  readonly date: YearMonth
  readonly certificateUrl?: string
}

export const certifications: readonly Certification[] = [
  {
    title: 'Introduction to Supercomputing at JSC: Theory & Practice',
    organization: 'Forschungszentrum Jülich',
    organizationHref: 'https://www.fz-juelich.de/en/ias/jsc',
    date: '2024-11',
  },
  {
    title: 'Generative AI with Diffusion Models',
    organization: 'NVIDIA',
    organizationHref: 'https://www.nvidia.com/en-us/training/',
    date: '2024-02',
    certificateUrl: 'https://courses.nvidia.com/certificates/f8a9af2f4003411d87878bb653afadaf/',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    organizationHref: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    date: '2023-09',
    certificateUrl: 'https://www.credly.com/badges/78ce308b-e0d4-4336-b1f7-210fd4aeea77',
  },
]
