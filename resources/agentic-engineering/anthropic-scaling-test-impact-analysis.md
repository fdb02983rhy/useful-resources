---
id: anthropic-scaling-test-impact-analysis
title: "Agentic coding is straining CI. Here’s how we scaled test impact analysis at Anthropic"
kind: article
source_url: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic
added: 2026-09-15
status: reference
topics: [agentic-engineering, continuous-integration, testing]
---

# Agentic coding is straining CI. Here’s how we scaled test impact analysis at Anthropic

## Summary

Anthropic's account of scaling deterministic test selection as agent-written code
increased CI load. It follows temporary fixes through a redesign that separates
result ingestion, shared storage, history aggregation, and test selection.

## Why this was saved

- Shows how downstream infrastructure becomes a bottleneck as coding and review
  accelerate.

## Notes

### Source claims

- CI jobs grew 25-fold over six months. Listener lag made test selection rely on
  stale results; this did not mean CI stopped running or untested code reached
  production.
- Larger machines, per-package worker shards, and restarts provided progressively
  shorter relief while state remained in the process.
- Stateless listeners now append results to a shared in-memory journal; a separate
  consumer aggregates per-test history for the selector, enabling horizontal
  scaling.
- One engineer completed the redesign in three weeks. Anthropic reports stability
  after tuning, at higher running cost, and recommends measuring incoming versus
  processed jobs and keeping state outside workers.

### Editor synthesis

Monitor selection freshness as well as test duration. The reported scale and
delivery gains are case-specific; size capacity from measured demand rather than
treating the article's growth projections as universal.

## Source

[Read the Anthropic article](https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic)

Published September 14, 2026.
