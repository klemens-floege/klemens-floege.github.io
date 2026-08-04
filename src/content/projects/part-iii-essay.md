---
title: Meta-Learning within the PAC-Bayesian Framework
kind: thesis
date: 2023-05-04
institution: University of Cambridge
summary: >-
  Master's thesis (Part III of the Mathematical Tripos) placing meta-learning on
  PAC-Bayesian foundations, analysing the PACOH algorithm as a class of
  meta-learners that come with probabilistic performance guarantees.
figure: ../../assets/projects/part-iii-essay.jpg
figureCaption: >-
  Meta-learning on the sinusoids example, meta-learning a prior over Bayesian
  neural networks.
tags:
  - Meta-learning
  - PAC-Bayes
  - Bayesian neural networks
links:
  pdf: /pdf/part-iii-essay.pdf
---

Meta-learning research is overwhelmingly empirical: algorithms that work, with little
said about *why* or under what conditions. This thesis approaches the field through a
PAC-Bayesian lens, which turns "it works on these benchmarks" into bounds you can state.

The centrepiece is the **PACOH** algorithm, treated as a class of meta-learners with
probabilistic performance guarantees. From there the essay reads optimisation-based
meta-learners — MAML and REPTILE among them — through the same framework, showing how
existing algorithms can be contextualised and theoretically supported rather than merely
benchmarked. Numerical experiments accompany the theory throughout.
