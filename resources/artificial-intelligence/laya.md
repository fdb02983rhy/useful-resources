---
id: laya
title: Laya
kind: tool
source_url: https://huggingface.co/convaiinnovations/laya
added: 2026-09-25
status: reference
topics: [artificial-intelligence, structured-prediction, model-evaluation]
---

# Laya

## Summary

An Apache-2.0 model family for classification, routing, and scoring. It answers
typed questions about supplied text or state in a batched forward pass, returning
choices and probabilities. The model hub includes English, multilingual, and
task-specific checkpoints.

## Why this was saved

- A self-hostable option for experimenting with structured decision models.

## Notes

### Source claims

- The root checkpoint uses ModernBERT-large; the multilingual variant uses
  mmBERT-base. The SDK routes English and other languages to different checkpoints.
- Training uses Reinforcement Learning for Calibrated Decisions. The card also
  reports overconfidence and recommends fitting calibration temperatures on
  domain data.
- Strong typed-decision results come from a specialized fine-tuned checkpoint;
  base checkpoints fall below the majority-class baseline on that benchmark.
- Context and option-token budgets constrain long inputs and large label sets.
  Reported Jev comparisons use external results with different prompts and samples.

### Editor synthesis

Typed outputs still require accuracy checks. Select the checkpoint deliberately
and validate calibration, truncation, and latency on representative inputs.
No model weights were downloaded or evaluated here.

## Source

[View the model card](https://huggingface.co/convaiinnovations/laya)

Inspected model-card revision
[`55cf4c4`](https://huggingface.co/convaiinnovations/laya/tree/55cf4c4ebb4ebe31b2550e8bdf3bd21b99753851).
