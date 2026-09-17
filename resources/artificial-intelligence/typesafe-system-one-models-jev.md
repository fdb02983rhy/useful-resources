---
id: typesafe-system-one-models-jev
title: Introducing System One Models & Jev
kind: article
source_url: https://typesafe.ai/blog/introducing-system-one-models-and-jev
added: 2026-09-17
status: reference
topics: [artificial-intelligence, structured-prediction, model-evaluation]
---

# Introducing System One Models & Jev

## Summary

TypeSafe introduces Jev, an early-access model for fast, typed probabilistic
decisions rather than free-form text. The announcement covers its training
approach, parallel sampling, workflow evaluations, and real-time demonstrations.

## Why this was saved

- Explores embedding uncertain decisions into ordinary software workflows.

## Notes

### Source claims

- Reinforcement Learning for Calibrated Decisions (RLCD) targets calibrated
  probabilities; outputs follow predefined schemas and are sampled in parallel.
- Suggested uses include classification, routing, scoring, and verification.
  Doom and Wikipedia-navigation demos illustrate latency-sensitive decisions.
- TypeSafe reports substantial speed and cost gains, but its workflow evaluations
  compare against reference-model probabilities rather than ground-truth labels.
  Team-authored workflows, comparison settings, and input length affect results.
- The article's zero-type-error claim rests on guaranteed schema matching, not
  empirical proof that every decision is correct.

### Editor synthesis

Useful as an alternative interface to generative chat. Schema validity is not
semantic correctness; independently test accuracy, calibration, and latency on
representative workloads before automating consequential decisions. Reported
performance has not been independently verified here.

## Source

[Read the TypeSafe article](https://typesafe.ai/blog/introducing-system-one-models-and-jev)

By Diogo Almeida, published September 15, 2026.
