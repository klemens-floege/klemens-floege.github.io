---
title: Gaussian Stochastic Weight Averaging for Bayesian Low-Rank Adaptation of Large Language Models
authors:
  - Emre Onal
  - Klemens Flöge
  - Emma Caldwell
  - Arsen Sheverdin
  - Vincent Fortuin
date: 2024-07-20
venue: 6th Symposium on Advances in Approximate Bayesian Inference (non-archival workshop)
venueShort: AABI 2024 Workshop
kind: workshop
featured: true
summary: >-
  Combining LoRA with Gaussian SWAG gives cheap approximate Bayesian inference in
  fine-tuned LLMs, improving calibration and out-of-distribution robustness at a
  fraction of the usual cost.
abstract: >-
  Fine-tuned Large Language Models (LLMs) often suffer from overconfidence and
  poor calibration, particularly when fine-tuned on small datasets. To address
  these challenges, we propose a simple combination of Low-Rank Adaptation (LoRA)
  with Gaussian Stochastic Weight Averaging (SWAG), facilitating approximate
  Bayesian inference in LLMs. Through extensive testing across several Natural
  Language Processing (NLP) benchmarks, we demonstrate that our straightforward
  and computationally efficient approach improves model generalization and
  calibration competitively with comparable, more sophisticated methods for
  Bayesian inference in LLMs. We further show that our method exhibits greater
  robustness against distribution shift, as reflected in its improved performance
  on out-of-distribution tasks.
figure: ../../assets/publications/swag-lora.png
figureCaption: >-
  The SWAG-LoRA training and inference process. Left: the LLM with LoRA
  fine-tuning. Middle and top right: SWAG training, collecting weight samples
  across SGD iterations to estimate the mean and an approximate covariance of the
  posterior. Bottom right: forming the inference ensemble by sampling from the
  learned SWAG posterior.
tags:
  - Bayesian inference
  - Large language models
  - Low-rank adaptation
  - Calibration
links:
  arxiv: https://arxiv.org/abs/2405.03425
  pdf: https://arxiv.org/pdf/2405.03425
  code: https://github.com/fortuinlab/swag-lora
---

Fine-tuned LLMs are badly calibrated, especially on small datasets — they are confidently
wrong. Full Bayesian treatment is out of reach at this scale, so the question is how much
you can recover cheaply.

The answer here is: quite a lot. Stacking **Gaussian SWAG** on top of **LoRA** yields an
approximate posterior over the adapter weights at almost no extra cost, and matches far
more sophisticated Bayesian methods on NLP benchmarks. The gap widens under distribution
shift, where the ensemble's calibration advantage shows up most clearly.
