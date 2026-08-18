---
id: stanford-cs336-language-modeling-from-scratch
title: "Stanford CS336: Language Modeling from Scratch"
kind: course
source_url: https://cs336.stanford.edu/
added: 2026-08-18
status: reference
topics: [deep-learning, language-models, systems]
---

# Stanford CS336: Language Modeling from Scratch

## Summary

An advanced Stanford course on building language models across the full
development pipeline. The Spring 2026 offering moves from tokenization,
Transformer components, and training into GPU kernels, distributed systems,
scaling laws, inference, evaluation, pretraining data, supervised fine-tuning,
reinforcement learning, and alignment.

The public course site keeps the syllabus, lecture materials, recordings, and
five substantial programming assignments together as one implementation-driven
curriculum.

## Why this was saved

- Connects model architecture and training theory to the systems engineering
  required to run language models efficiently.
- Provides assignment code for implementing core components rather than only
  using high-level training libraries.
- Covers the complete lifecycle from raw pretraining data through evaluation and
  post-training.

## Notes

### Source claims

- Tatsunori Hashimoto and Percy Liang teach the Spring 2026 offering.
- Assignment 1 implements a tokenizer, Transformer architecture, optimizer, and
  minimal training run.
- Later assignments cover profiling and Triton FlashAttention2, memory-efficient
  distributed training, scaling laws, Common Crawl filtering and deduplication,
  and supervised fine-tuning plus reinforcement learning for math reasoning.
- The course assumes strong Python and software-engineering ability, PyTorch and
  systems-optimization experience, linear algebra, probability, and prior machine
  learning or deep-learning knowledge.
- It is a five-unit, minimally scaffolded, implementation-heavy course. Several
  assignments require GPU work, including distributed or performance-sensitive
  experiments.
- The site publishes lecture materials, assignment repositories, a recording
  playlist, and links to archived Spring 2025 and Spring 2024 offerings.

### Editor synthesis

CS336 is best suited to experienced learners who want to understand language
models by implementing and optimizing the stack themselves. It is not a gentle
introduction: completing the curriculum independently requires substantial coding
time and access to suitable GPU compute. The materials are still valuable as a
structured reading and implementation roadmap when full assignment completion is
not practical.

## Source

[Open the Spring 2026 course site](https://cs336.stanford.edu/) ·
[View the Spring 2025 archive](https://cs336.stanford.edu/spring2025/)
