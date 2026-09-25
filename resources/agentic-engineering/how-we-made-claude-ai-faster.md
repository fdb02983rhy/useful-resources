---
id: how-we-made-claude-ai-faster
title: How we made claude.ai 3x faster in two weeks
kind: article
source_url: https://claude.dev/blog/how-we-made-claude-ai-faster/
added: 2026-09-25
status: reference
topics: [agentic-engineering, performance-engineering, testing]
---

# How we made claude.ai 3x faster in two weeks

## Summary

Anthropic's account of a performance sprint across Claude's web and desktop
apps. Engineers used Claude to investigate bottlenecks, build benchmarks, propose
changes, and monitor deployments, with humans directing work and approving changes.

## Why this was saved

- Shows how measurable feedback and regression checks support sustained agent work.

## Notes

### Source claims

- Thirteen p75 measurements across four user journeys improved by a geometric
  mean of 3.1x. Fresh web loading fell from 3,085 to 550 milliseconds.
- Deterministic instruction, render, and DOM counts became CI limits only after
  demonstrating a relationship to user-perceived latency. Limits tightened as
  improvements landed.
- Work followed a repeated cycle: reproduce, benchmark, review, deploy behind a
  flag, inspect real-user data, and preserve confirmed gains in CI.
- Optimizations included an immediately typeable static composer, session
  prefetching, fewer re-renders, and incremental streaming work. Human ownership,
  approvals, and staged rollouts remained central.

### Editor synthesis

The reusable practice is linking optimization metrics to actual user journeys
and protecting verified improvements. The reported gains describe this sprint;
they are not predictions for another application.

## Source

[Read the Claude developer article](https://claude.dev/blog/how-we-made-claude-ai-faster/)

By Raymond Wang, Sam Attard, and Issac G., published September 23, 2026.
