---
id: 12-factor-agents
title: 12-Factor Agents
kind: repository
source_url: https://github.com/humanlayer/12-factor-agents
added: 2026-09-18
status: reference
topics: [agentic-engineering, software-architecture, context-engineering]
---

# 12-Factor Agents

## Summary

A repository-hosted guide to building reliable LLM applications through twelve
engineering principles. It advocates adding focused agent capabilities to
existing software while retaining explicit control over prompts, context,
execution, and state.

## Why this was saved

- A practical checklist for reviewing production agent architecture.

## Notes

### Source claims

- Translate natural-language requests into structured tool decisions; application
  code executes them and controls the workflow.
- Manage prompts and context directly, including retrieved information, history,
  memory, and compact error feedback. Experiment with application-specific formats.
- Bring execution and business state together, expose start/pause/resume APIs,
  and model requests for human input as tool calls.
- Prefer narrowly scoped agents within larger deterministic systems, support
  triggers beyond chat, and model the agent as a stateless reducer.
- Includes a context-prefetching appendix. Content and images use CC BY-SA 4.0;
  code uses Apache 2.0.

### Editor synthesis

Treat these as design heuristics, not a reliability guarantee or a requirement to
avoid frameworks. Evaluate context choices, recovery behavior, and agent scope
against the application's actual workloads.

## Source

[View the repository](https://github.com/humanlayer/12-factor-agents)

Inspected the README and context, focused-agent, and stateless-reducer chapters at
commit [`d20c728`](https://github.com/humanlayer/12-factor-agents/commit/d20c728368bf9c189d6d7aab704744decb6ec0cc).
