---
id: uber-efficient-software-factory
title: Running a Software Factory Efficiently at Uber Scale
kind: article
source_url: https://www.uber.com/gb/en/blog/efficient-software-factory/
added: 2026-09-08
status: reference
topics: [agentic-engineering, software-development, cost-optimization]
---

# Running a Software Factory Efficiently at Uber Scale

## Summary

Uber describes how it measures and reduces agent costs across software development:
workload-specific model benchmarks, context limits, prompt caching, on-demand tool
discovery, scripted tool orchestration, graph-grounded context, and session analytics.

## Why this was saved

- Provides a practical framework for diagnosing agent spending.
- Connects efficiency measurements with completed outcomes and quality.

## Notes

### Source claims

- Spend is decomposed into users, sessions per user, turns per session, requests
  per turn, tokens per request, and token price.
- Holding a model fixed, Uber reports costs per 1,000 requests falling almost 34%
  and costs per session falling 52% from their respective peaks.
- Model selection weighs task quality, reliability, and completion cost. Tool
  discovery and code-mode scripts reduce schema, polling, and response overhead.
- Context graphs reduce information searches; live cost counters and trace
  analysis expose waste. Automated skill improvement remains ongoing work.

### Editor synthesis

Use this as an optimization checklist, with local measurements deciding priorities.
Aggregate trends and selected examples do not establish each intervention's causal
effect or predict savings for another organization.

## Source

[Read the Uber article](https://www.uber.com/gb/en/blog/efficient-software-factory/)

Written by Uday Kiran Medisetty; published August 27, 2026.
