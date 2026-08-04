---
title: 'OneProt: Towards Multi-Modal Protein Foundation Models'
authors:
  - Klemens Flöge
  - Srisruthi Udayakumar
  - Johanna Sommer
  - Marie Piraud
  - Stefan Kesselheim
  - Vincent Fortuin
  - Stephan Günnemann
  - Karel J. van der Weg
  - Holger Gohlke
  - Alina Bazarova
  - Erinc Merdivan
date: 2024-11-07
venue: arXiv preprint
venueShort: arXiv
kind: preprint
featured: true
summary: >-
  A multi-modal protein model that aligns sequence, structure, binding-site and
  text representations in a shared latent space, improving retrieval and a range
  of downstream function-prediction tasks.
abstract: >-
  Recent AI advances have enabled multi-modal systems to model and translate
  diverse information spaces. Extending beyond text and vision, we introduce
  OneProt, a multi-modal AI for proteins that integrates structural, sequence,
  alignment, and binding site data. Using the ImageBind framework, OneProt aligns
  the latent spaces of modality encoders along protein sequences. It demonstrates
  strong performance in retrieval tasks and surpasses state-of-the-art methods in
  various downstream tasks, including metal ion binding classification,
  gene-ontology annotation, and enzyme function prediction. This work expands
  multi-modal capabilities in protein models, paving the way for applications in
  drug discovery, biocatalytic reaction planning, and protein engineering.
figure: ../../assets/publications/oneprot.png
figureCaption: >-
  Overview of the OneProt model. Primary sequence, 3D structure, binding pockets
  and text annotations are each processed by their own encoder, producing
  embeddings that are aligned in a shared latent space for cross-modal learning.
tags:
  - Multi-modal learning
  - Protein modelling
  - Representation learning
  - Drug discovery
links:
  arxiv: https://arxiv.org/abs/2411.04863
  pdf: https://arxiv.org/pdf/2411.04863
  code: https://github.com/klemens-floege/oneprot
---

OneProt shows how multi-modal protein data — sequences, 3D structures, binding sites and
text annotations — can be folded into a single coherent latent space using the ImageBind
framework. Each modality keeps its own encoder; alignment happens along the primary
protein sequence, which acts as the anchor modality.

The result is a model that retrieves across modalities and transfers well: it beats
state-of-the-art baselines on metal ion binding classification, gene-ontology annotation
and enzyme function prediction, without task-specific architectures.
