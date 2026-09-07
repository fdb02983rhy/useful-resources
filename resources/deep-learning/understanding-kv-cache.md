---
id: understanding-kv-cache
title: Understanding KV Cache
kind: book
source_url: https://drive.google.com/file/d/12KlRm0YLYrfpLF2q3_tBDNMMkJ7_bYNF/view
added: 2026-09-07
status: reference
topics: [deep-learning, model-inference, systems]
---

# Understanding KV Cache

## Summary

A 33-page handbook by @techNmak explaining KV caching from causal attention
through production LLM serving. It covers prefill and decoding, per-layer tensor
shapes, cache-memory calculations, MHA/MQA/GQA and MLA, positional information,
PagedAttention, prefix reuse, isolation, eviction, offloading, and quantization.

## Why this was saved

- Connects attention mechanics to memory capacity, bandwidth, and serving costs.
- Provides worked cache-size examples and compact comparisons of architectural
  and runtime choices.
- Gives a practical checklist for understanding what a cache stores, where it
  lives, when it can be reused, and which resource limits performance.

## Notes

### Source claims

- In ordinary causal attention, future tokens do not change earlier layer states,
  so previous keys and values can be reused. Dense decoding still attends over
  the cached history; caching does not make it constant-time.
- For a uniform conventional attention stack, ideal per-sequence cache payload is
  `2 × layers × cached_tokens × kv_heads × head_dimension × bytes_per_element`.
  Actual allocation also includes runtime overhead and model-specific details.
- MQA and GQA reduce the number of KV heads; MLA uses a compressed latent
  representation with separate positional considerations.
- PagedAttention manages cache placement in blocks. Prefix caching reuses
  compatible prefill state across requests; offloading trades transfers against
  recomputation; quantization trades numerical precision for smaller state.
- Cross-request reuse needs appropriate cache identities and trust boundaries.
  The handbook also distinguishes eviction of reusable prefixes from removal of
  state required by an active sequence.

### Editor synthesis

A useful conceptual reference with illustrative calculations, rather than a new
experimental study. It assumes familiarity with attention and Q/K/V. Its runtime
feature descriptions cite documentation consulted in September 2026 without
pinning software versions, so consult current implementation documentation before
using those details in a deployment.

## Source

[Read the stored PDF](../../assets/pdfs/understanding-kv-cache.pdf) ·
[Original submitted file](https://drive.google.com/file/d/12KlRm0YLYrfpLF2q3_tBDNMMkJ7_bYNF/view)

The cover credits @techNmak and identifies this as Handbook 02 of the
Understanding AI Series, subtitled "From Autoregressive Decoding to Modern LLM
Inference." No explicit revision identifier or redistribution license is stated.
The original 33-page PDF is stored unchanged at the user's request. SHA-256:
`fef00b35d82ca9ffa0d1d8b89b2d0d8a76ffdaf76b21a683b0883f4f38776202`.
