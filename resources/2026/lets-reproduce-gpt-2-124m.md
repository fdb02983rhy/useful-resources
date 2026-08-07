---
id: lets-reproduce-gpt-2-124m
title: "Let's reproduce GPT-2 (124M)"
kind: video
source_url: https://www.youtube.com/watch?v=l8pRSuU81PU&ab_channel=AndrejKarpathy
added: 2026-08-08
topics: [deep-learning, model-training]
---

# Let's reproduce GPT-2 (124M)

## Summary

Andrej Karpathy implements and trains the 124-million-parameter GPT-2 model from
scratch. The four-hour walkthrough moves from reconstructing the architecture and
loading the published checkpoint through GPU optimization, training configuration,
distributed execution, validation, and comparison with the original model.

## Why this was saved

- Connects transformer equations and model structure to working PyTorch code.
- Shows how mixed precision, compilation, fused operations, Flash Attention, and
  distributed training change a real training loop.
- Treats validation and HellaSwag evaluation as part of the build, not an afterthought.

## Notes

### Source claims

- The implementation covers embeddings, transformer blocks, parameter sharing,
  initialization, batching, cross-entropy loss, and autoregressive sampling.
- The optimization section discusses Tensor Cores, TF32, bfloat16,
  `torch.compile`, kernel fusion, Flash Attention, and vocabulary-size alignment.
- The training section derives choices such as AdamW, gradient clipping, warmup
  plus cosine decay, gradient accumulation, and distributed data parallelism from
  the GPT-2 and GPT-3 setup.
- The run uses FineWeb EDU data, a held-out validation split, and HellaSwag before
  comparing the resulting model with the published GPT-2 checkpoint.

### Editor synthesis

This is most useful as an end-to-end systems lesson: each modeling decision is
followed into its implementation, performance consequences, and evaluation. It
assumes some familiarity with transformers and builds on Karpathy's earlier
Zero-to-Hero material.

## Selected chapters

- [00:13:47 — implement the GPT-2 module](https://www.youtube.com/watch?v=l8pRSuU81PU&t=827s)
- [01:22:18 — make training fast](https://www.youtube.com/watch?v=l8pRSuU81PU&t=4938s)
- [02:14:55 — training hyperparameters](https://www.youtube.com/watch?v=l8pRSuU81PU&t=8095s)
- [02:46:52 — distributed data parallel](https://www.youtube.com/watch?v=l8pRSuU81PU&t=10012s)
- [03:28:23 — HellaSwag evaluation and the run](https://www.youtube.com/watch?v=l8pRSuU81PU&t=12503s)
- [03:43:05 — results](https://www.youtube.com/watch?v=l8pRSuU81PU&t=13385s)

## Source

[Watch on YouTube](https://www.youtube.com/watch?v=l8pRSuU81PU&ab_channel=AndrejKarpathy) ·
[Browse the companion repository](https://github.com/karpathy/build-nanogpt)

The notes use the video's authored chapter markers and its auto-generated English
captions; exact wording may contain transcription errors.
