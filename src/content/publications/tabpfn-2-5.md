---
title: 'TabPFN-2.5: Advancing the State of the Art in Tabular Foundation Models'
authors:
  - Léo Grinsztajn
  - Klemens Flöge
  - Oscar Key
  - Felix Birkel
  - Philipp Jund
  - Brendan Roof
  - Benjamin Jäger
  - Dominik Safaric
  - Simone Alessi
  - Adrian Hayler
  - Mihir Manium
  - Rosen Yu
  - Felix Jablonski
  - Shi Bin Hoo
  - Anurag Garg
  - Jake Robertson
  - Magnus Bühler
  - Vladyslav Moroshan
  - Lennart Purucker
  - Clara Cornu
  - Lilly Charlotte Wehrhahn
  - Alessandro Bonetto
  - Bernhard Schölkopf
  - Sauraj Gambhir
  - Noah Hollmann
  - Frank Hutter
date: 2025-11-11
venue: arXiv preprint
venueShort: arXiv
kind: preprint
featured: true
summary: >-
  A tabular foundation model handling 20x more data cells than TabPFNv2, leading
  TabArena, and shipping a distillation engine that compresses it into a compact
  MLP or tree ensemble for production latency.
abstract: >-
  The first tabular foundation model, TabPFN, and its successor TabPFNv2 have
  impacted tabular AI substantially, with dozens of methods building on it and
  hundreds of applications across different use cases. This report introduces
  TabPFN-2.5, the next generation of our tabular foundation model, built for
  datasets with up to 50,000 data points and 2,000 features, a 20x increase in
  data cells compared to TabPFNv2. TabPFN-2.5 is now the leading method for the
  industry standard benchmark TabArena, substantially outperforming tuned
  tree-based models and matching the accuracy of AutoGluon 1.4, a complex
  four-hour tuned ensemble that even includes the previous TabPFNv2. Remarkably,
  default TabPFN-2.5 has a 100% win rate against default XGBoost on small to
  medium-sized classification datasets and an 87% win rate on larger datasets up
  to 100K samples and 2K features. For production use cases, we introduce a new
  distillation engine that converts TabPFN-2.5 into a compact MLP or tree
  ensemble, preserving most of its accuracy while delivering orders-of-magnitude
  lower latency and plug-and-play deployment.
tags:
  - Tabular foundation models
  - Prior-data fitted networks
  - In-context learning
  - Distillation
links:
  arxiv: https://arxiv.org/abs/2511.08667
  pdf: https://arxiv.org/pdf/2511.08667
  code: https://github.com/PriorLabs/TabPFN
---

TabPFN-2.5 extends the tabular foundation model to datasets of up to 50,000 rows and
2,000 features, a twentyfold increase in data cells over TabPFNv2, and takes the top spot
on TabArena, matching a four-hour tuned AutoGluon ensemble with a single forward pass.

The part I find most useful in practice is the distillation engine: it compresses the
model into a compact MLP or tree ensemble that keeps most of the accuracy while cutting
latency by orders of magnitude, which is what makes the approach deployable rather than
merely competitive on a benchmark.
