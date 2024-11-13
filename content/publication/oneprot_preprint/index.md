---
title: "OneProt: Towards Multi-Modal Protein Foundation Models"
authors:
- Klemens Flöge
- Srisruthi Udayakumar
- Johanna Sommer
- Marie Piraud
- Stefan Kesselheim
- Vincent Fortuin
- Stephan Günneman
- Karel J van der Weg
- Holger Gohlke
- Alina Bazarova
- Erinc Merdivan
date: "2024-11-07"
doi: "10.48550/arXiv.2411.04863"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-11-07"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["preprint"]

# Publication name and optional abbreviated publication name.
publication: "arXiv"
publication_short: "arXiv"

abstract: >
  Recent AI advances have enabled multi-modal systems to model and translate diverse information spaces. Extending beyond text and vision, we introduce OneProt, a multi-modal AI for proteins that integrates structural, sequence, alignment, and binding site data. Using the ImageBind framework, OneProt aligns the latent spaces of modality encoders along protein sequences. It demonstrates strong performance in retrieval tasks and surpasses state-of-the-art methods in various downstream tasks, including metal ion binding classification, gene-ontology annotation, and enzyme function prediction. This work expands multi-modal capabilities in protein models, paving the way for applications in drug discovery, biocatalytic reaction planning, and protein engineering.

# Summary. An optional shortened abstract.
summary: >
  OneProt, a multi-modal AI for proteins, integrates sequence, structure, alignment, and binding site data using the ImageBind framework. It achieves strong performance on retrieval and downstream tasks, advancing protein-related applications.

tags:
- Multi-modal AI
- Protein modeling
- Deep learning
- Drug discovery
- Protein engineering
featured: true

links:
- name: Custom Link
  url: http://example.org
url_pdf: http://arxiv.org/pdf/1512.04133v1
url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
#url_dataset: '#'
#url_poster: '#'
#url_project: ''
#url_slides: ''
#url_source: '#'
#url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Overview of the OneProt model. The model aligns multiple modalities, including primary protein sequence, 3D protein structure, binding pockets and text annotations. Each modality is processed by its respective encoder, generating embeddings that are then aligned in a shared latent space, facilitating cross-modal learning and integration.'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
#projects:
#- oneprot

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
#slides: example
---

The OneProt project demonstrates how multi-modal protein data—spanning sequences, structures, binding sites, and text annotations—can be integrated into a cohesive latent space using the ImageBind framework. This preprint details OneProt's architecture, its alignment strategy, and its performance across tasks like enzyme function prediction and gene ontology annotation.

View the paper on [arXiv](https://arxiv.org/abs/2411.04863) or explore the [OneProt code repository](https://github.com/klemens-floege/oneprot.git) for implementation details.
