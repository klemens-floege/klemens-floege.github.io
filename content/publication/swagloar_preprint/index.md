---
title: "Gaussian Stochastic Weight Averaging for Bayesian Low-Rank Adaptation of Large Language Models"
authors:
- Emre Onal
- Klemens Flöge
- Emma Caldwell
- Arsen Sheverdin
- Vincent Fortuin
date: "2024-07-20"
#doi: "10.48550/arXiv.2405.03425"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-07-20"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["workshop-paper"]

# Publication name and optional abbreviated publication name.
publication: "Workshop at the 6th Symposium on Advances in Approximate Bayesian Inference (non-archival), 2024"
publication_short: "AABI 2024 Workshop"


abstract: >
  Fine-tuned Large Language Models (LLMs) often suffer from overconfidence and poor calibration, particularly when fine-tuned on small datasets. To address these challenges, we propose a simple combination of Low-Rank Adaptation (LoRA) with Gaussian Stochastic Weight Averaging (SWAG), facilitating approximate Bayesian inference in LLMs. Through extensive testing across several Natural Language Processing (NLP) benchmarks, we demonstrate that our straightforward and computationally efficient approach improves model generalization and calibration competitively with comparable, more sophisticated methods for Bayesian inference in LLMs. We further show that our method exhibits greater robustness against distribution shift, as reflected in its improved performance on out-of-distribution tasks.

# Summary. An optional shortened abstract.
summary: >
  A combination of Low-Rank Adaptation (LoRA) and Gaussian Stochastic Weight Averaging (SWAG) improves calibration, generalization, and robustness in Large Language Models with efficient approximate Bayesian inference.

tags:
- Bayesian inference
- Large Language Models
- Low-Rank Adaptation
- NLP
- Calibration
featured: true

links:
- name: View Paper
  url: https://arxiv.org/abs/2405.03425
url_pdf: https://arxiv.org/pdf/2405.03425
url_code: 'https://github.com/fortuinlab/swag-lora'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Outline of the SWAG-LoRA training and inference process. The left panel shows the LLM architecture with LoRA fine-tuning. The middle and upper right panel depict the SWAG training process, where weight samples are collected across iterations of SGD to calculate the mean and an approximate covariance of the posterior over network weights. The lower right panel demonstrates how we form our ensemble of weights for inference by sampling from the learned SWAG posterior.'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
#projects:
#- gaussian-swag-lora

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
#slides: example
---

This paper presents a novel approach to improving the calibration and generalization of Large Language Models by integrating Gaussian Stochastic Weight Averaging with Low-Rank Adaptation. Extensive evaluations on NLP benchmarks highlight its effectiveness in addressing overconfidence and distribution shifts. The method provides a computationally efficient and robust alternative to existing Bayesian inference techniques for fine-tuned LLMs.

View the paper on [arXiv](https://arxiv.org/pdf/2405.03425) or explore the [GitHub repository](https://github.com/fortuinlab/swag-lora) for implementation details.
