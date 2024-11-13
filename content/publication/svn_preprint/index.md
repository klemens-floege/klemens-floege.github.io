---
title: "Stein Variational Newton Neural Network Ensembles"
authors:
- Klemens Flöge
- Mohammed Abdul Moeed
- Vincent Fortuin
date: "2024-11-04"
doi: "10.48550/arXiv.2411.01887"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-11-07"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["conference-paper"]

# Publication name and optional abbreviated publication name.
publication: "ICML 2024 Workshop on Structured Probabilistic Inference & Generative Modeling"
publication_short: "ICML 2024 Workshop"

abstract: >
  Deep neural network ensembles are powerful tools for uncertainty quantification, which have recently been re-interpreted from a Bayesian perspective. However, current methods inadequately leverage second-order information of the loss landscape, despite the recent availability of efficient Hessian approximations. We propose a novel approximate Bayesian inference method that modifies deep ensembles to incorporate Stein Variational Newton updates. Our approach uniquely integrates scalable modern Hessian approximations, achieving faster convergence and more accurate posterior distribution approximations. We validate the effectiveness of our method on diverse regression and classification tasks, demonstrating superior performance with a significantly reduced number of training epochs compared to existing ensemble-based methods, while enhancing uncertainty quantification and robustness against overfitting.

# Summary. An optional shortened abstract.
summary: >
  A novel method for Bayesian inference in deep ensembles using Stein Variational Newton updates, leveraging scalable Hessian approximations to improve uncertainty quantification, training efficiency, and robustness.

tags:
- Bayesian inference
- Neural networks
- Uncertainty quantification
- Deep ensembles
- Machine learning
featured: true

links:
- name: View Paper
  url: https://arxiv.org/abs/2411.01887
url_pdf: https://arxiv.org/pdf/2411.01887
url_code: 'https://github.com/klemens-floege/svn_ensembles.git'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Conceptual overview of the SVN method. The green curvature-informed SVN updates are much higher
quality and require fewer steps than the corresponding blue SVGD ones.'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
#projects:
#- stein-variational-newton

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
#slides: example
---

This paper introduces the Stein Variational Newton Ensemble method, a novel approach to Bayesian inference in deep learning. By integrating scalable second-order information through Hessian approximations, this method enhances the training efficiency and uncertainty quantification of neural network ensembles. Experiments demonstrate its superiority over existing methods in regression and classification tasks, offering a promising direction for robust and efficient deep learning.

View the paper on [arXiv](https://arxiv.org/abs/2411.01887) or explore the [GitHub repository](https://github.com/klemens-floege/stein-variational-newton) for implementation details.
