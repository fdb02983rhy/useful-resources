---
id: smol-training-playbook
title: "The Smol Training Playbook: The Secrets to Building World-Class LLMs"
kind: web
source_url: https://huggingface.co/spaces/HuggingFaceTB/smol-training-playbook
added: 2026-08-08
status: reference
topics: [deep-learning, model-training]
---

# The Smol Training Playbook

## Summary

A Hugging Face case study and practical guide to developing SmolLM3, a
three-billion-parameter multilingual reasoning model trained on 11 trillion tokens.
It spans the decision to train, architecture and data experiments, small-scale
ablations, long-running pretraining, post-training, evaluation, and GPU-cluster
operations.

## Why this was saved

- Connects model-training recipes to the failed experiments, restarts, debugging,
  and infrastructure work usually absent from papers.
- Gives concrete criteria for designing and interpreting small-scale ablations.
- Treats evaluation, telemetry, checkpointing, and recovery as part of the training system.

## Notes

### Source claims

- Before training from scratch, the guide recommends testing whether prompting or
  fine-tuning an existing open model can satisfy the use case.
- Architecture choices should begin from a documented design supported by both the
  intended training and inference frameworks.
- Ablations should be fast but discriminative, change one variable at a time, keep
  parameter counts comparable, and validate promising proxy results at a larger or
  more production-like scale.
- Post-training begins by defining evaluations, then iterates through supervised
  fine-tuning, preference optimization, and, where useful, on-policy reinforcement learning.
- Long training runs need hardware stress tests, telemetry, automated checkpoint
  and resume behavior, backups, and evaluation at checkpoints.
- The infrastructure case study estimates capacity from measured throughput and
  tests topology-aware parallelism configurations instead of relying on peak FLOPS.

### Editor synthesis

The playbook is strongest as a record of empirical decision-making across the
whole training lifecycle. Its SmolLM3, Nanotron, H100, and cluster-scale specifics
are examples rather than a universal recipe; framework and accelerator tradeoffs
will also change over time. The guide excludes pruning and distillation.

## Source

[Open the submitted Hugging Face Space](https://huggingface.co/spaces/HuggingFaceTB/smol-training-playbook) ·
[Inspect the reviewed source revision](https://huggingface.co/spaces/HuggingFaceTB/smol-training-playbook/tree/179c71bb4a1c10c8be98768dea04fbc2cfc8e9f9)

Published October 30, 2025. The Space was inspected at commit `179c71b`.
