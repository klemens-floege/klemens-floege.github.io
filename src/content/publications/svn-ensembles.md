---
title: Stein Variational Newton Neural Network Ensembles
authors:
  - Klemens Flöge
  - Mohammed Abdul Moeed
  - Vincent Fortuin
date: 2024-11-04
venue: ICML 2024 Workshop on Structured Probabilistic Inference & Generative Modeling
venueShort: ICML 2024 Workshop
kind: workshop
featured: true
summary: >-
  Deep ensembles rewritten as Stein Variational Newton updates, using scalable
  Hessian approximations to reach better posterior approximations in far fewer
  epochs.
abstract: >-
  Deep neural network ensembles are powerful tools for uncertainty
  quantification, which have recently been re-interpreted from a Bayesian
  perspective. However, current methods inadequately leverage second-order
  information of the loss landscape, despite the recent availability of efficient
  Hessian approximations. We propose a novel approximate Bayesian inference
  method that modifies deep ensembles to incorporate Stein Variational Newton
  updates. Our approach uniquely integrates scalable modern Hessian
  approximations, achieving faster convergence and more accurate posterior
  distribution approximations. We validate the effectiveness of our method on
  diverse regression and classification tasks, demonstrating superior performance
  with a significantly reduced number of training epochs compared to existing
  ensemble-based methods, while enhancing uncertainty quantification and
  robustness against overfitting.
figure: ../../assets/publications/svn.png
figureCaption: >-
  Conceptual overview of the SVN method. The curvature-informed SVN updates
  (green) are higher quality and need fewer steps than the corresponding SVGD
  updates (blue).
tags:
  - Bayesian inference
  - Uncertainty quantification
  - Deep ensembles
  - Second-order optimisation
links:
  arxiv: https://arxiv.org/abs/2411.01887
  pdf: https://arxiv.org/pdf/2411.01887
  code: https://github.com/klemens-floege/svn_ensembles
---

Deep ensembles are one of the most reliable tools for uncertainty quantification, and
they have a clean Bayesian reading — but standard training throws away the second-order
structure of the loss landscape entirely. Now that scalable Hessian approximations are
practical, that is a waste.

This work modifies deep ensembles to take **Stein Variational Newton** steps instead of
first-order ones. The curvature information sharpens the posterior approximation and cuts
the number of training epochs substantially, while improving calibration and robustness
to overfitting across regression and classification benchmarks.
