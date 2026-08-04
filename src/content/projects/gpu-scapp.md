---
title: GPU-Based Real-Time Data Processing for Ultrafast Laser Applications
kind: research
date: 2021-12-20
institution: ETH Zürich
summary: >-
  A real-time acquisition pipeline built on a Spectrum M4i.4420-x8 digitizer and
  the SCAPP framework, moving high-resolution spectroscopy and pump-probe data
  processing onto the GPU.
figure: ../../assets/projects/gpu-scapp.jpg
figureCaption: >-
  The real-time data processing setup, combining the Spectrum digitizer with GPU
  acceleration.
tags:
  - High-performance computing
  - CUDA
  - Data acquisition
  - Laser spectroscopy
links:
  pdf: /pdf/gpu-scapp.pdf
---

Ultrafast laser experiments produce data faster than conventional CPU pipelines can
absorb it, which forces a choice between throwing measurements away and processing them
offline.

This project builds the alternative: a real-time system pairing the Spectrum
M4i.4420-x8 digitizer card with the SCAPP framework so that acquired data is streamed
directly to the GPU. Processing high-resolution spectroscopy and rapid pump-probe
measurements on-device proves substantially faster than the traditional approach, and
considerably more flexible in what analysis can be run live.
