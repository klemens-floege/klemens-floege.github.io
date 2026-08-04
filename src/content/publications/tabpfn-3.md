---
title: 'TabPFN-3: Technical Report'
authors:
  - Léo Grinsztajn
  - Klemens Flöge
  - Oscar Key
  - Felix Birkel
  - Philipp Jund
  - Brendan Roof
  - Mihir Manium
  - Shi Bin Hoo
  - Magnus Bühler
  - Anurag Garg
  - Dominik Safaric
  - Jake Robertson
  - Benjamin Jäger
  - Simone Alessi
  - Adrian Hayler
  - Vladyslav Moroshan
  - Lennart Purucker
  - Philipp Singer
  - Alan Arazi
  - Julien Siems
  - Jan Hendrik Metzen
  - Georg Grab
  - Nick Erickson
  - Siyuan Guo
  - Eliott Kalfon
  - Simon Bing
  - David Salinas
  - Clara Cornu
  - Lilly Charlotte Wehrhahn
  - Diana Kriuchkova
  - Kursat Kaya
  - Lydia Sidhoum
  - Marie Salmon
  - Jerry Chen
  - Madelon Hulsebos
  - Yann LeCun
  - Samuel Müller
  - Bernhard Schölkopf
  - Sauraj Gambhir
  - Noah Hollmann
  - Frank Hutter
date: 2026-05-13
venue: arXiv preprint
venueShort: arXiv
kind: preprint
featured: true
summary: >-
  The third generation of the TabPFN tabular foundation model. Pretrained purely
  on synthetic data, it scales to a million training rows, introduces test-time
  compute scaling, and extends to relational and tabular-text data.
abstract: >-
  Tabular data underpins most high-value prediction problems in science and
  industry, and TabPFN has driven the foundation model revolution for this
  modality. Designed with feedback from our users, TabPFN-3 builds on this
  foundation to scale state-of-the-art performance to datasets with 1M training
  rows and substantially reduce training and inference time. Pretrained
  exclusively on synthetic data from our prior, TabPFN-3 dramatically pushes the
  frontier of tabular prediction and brings substantial gains on time series,
  relational, and tabular-text data. On the standard tabular benchmark TabArena,
  a forward pass of TabPFN-3 outperforms all other models, including tuned and
  ensembled baselines, by a significant margin, and pareto-dominates the
  speed/performance frontier. TabPFN-3 introduces test-time compute scaling to
  tabular foundation models. Our API offering TabPFN-3-Plus (Thinking) exploits
  this to beat all non-TabPFN models by over 200 Elo on TabArena, rising to 420
  Elo on the largest data subset, and outperforms AutoGluon 1.5 extreme while
  being 10x faster, without using LLMs, real data, internet search or any other
  model besides TabPFN. TabPFN-3 achieves this performance while being up to 20x
  faster than TabPFN-2.5.
tags:
  - Tabular foundation models
  - Prior-data fitted networks
  - Synthetic data
  - In-context learning
links:
  arxiv: https://arxiv.org/abs/2605.13986
  pdf: https://arxiv.org/pdf/2605.13986
  code: https://github.com/PriorLabs/TabPFN
---

TabPFN-3 is the clearest expression of the idea that drew me to Prior Labs: rather than
writing down a prior over a network's parameters, you specify it in function space by
describing what tabular data ought to look like, sample datasets from that prior, and
train a model to do the inference in a single forward pass.

The practical consequences are large. TabPFN-3 scales to a million training rows, runs up
to 20x faster than TabPFN-2.5, and a single forward pass outperforms tuned and ensembled
baselines on TabArena. It also brings test-time compute scaling to tabular models, and
extends beyond flat tables to relational and tabular-text data.
