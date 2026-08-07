---
id: ai-agent-workshop-tokyo-auto-improvement
title: AI Agent Workshop Tokyo — AI Agent Auto Improvement
kind: note
source_url: https://wandb.ai/site/resources/events/ai-agent-workshop-tokyo/
added: 2026-08-08
topics: [agentic-engineering, agent-evaluation]
---

# AI Agent Workshop Tokyo — AI Agent Auto Improvement

## Summary

A 38-page Japanese workshop deck presenting a W&B Weave-centered loop for
continuously improving AI agents. It progresses from tracing and versioning a
Discovery Agent through human annotation and coding-agent-assisted prompt changes,
offline evaluation, production monitoring, trace analysis, and isolated execution.

## Why this was saved

- Gives a concrete path from manual judgments to repeatable offline evaluation
  and production signals.
- Shows how a coding agent can consume traces and eval evidence before revising a prompt.
- Treats prompts, datasets, scorers, agent versions, and monitoring as connected artifacts.

## Notes

### Source claims

- W&B Skills and MCP can connect coding agents such as Claude Code and Codex to
  stored agent versions, evaluations, and usage data.
- The deck positions Weave as a harness for observability, versioning, offline
  evaluation, feedback, online evaluation, and deployment, with versioned Prompt,
  Dataset, Scorer, and Model objects.
- Agent evaluation should grow from initial human judgments because early systems
  may lack data and clear criteria.
- Human feedback from an annotation queue can become input to a skill that revises
  an agent prompt.
- Offline evaluation combines versioned datasets, scorers, applications, and
  multiple metrics to detect regressions. `Weave.Evaluate` supports structured
  comparison, while `EvaluationLogger` records scores inside more complex flows.
- Since fixed test sets cannot cover unbounded production inputs, the deck proposes
  built-in or custom model-judge signals and alerts for online monitoring.
- Weave uses OpenTelemetry GenAI semantic conventions to present framework-independent
  traces; W&B Sandbox provides isolated filesystem, network, and process spaces.

### Editor synthesis

The workshop is a useful blueprint for evidence-led improvement, but it is
vendor-authored and the exercises depend on live W&B projects, queues, scripts, and
local skills. It reports no completed before-and-after improvement experiment.
Exclusivity, scale, accuracy, and token-waste claims are not supported by comparative
benchmarks or documented methods, and time-sensitive forthcoming features need rechecking.

## Questions

- What exact Discovery Agent revision and evaluation set were used in the exercises?
- How are online judge signals calibrated and protected from drift?
- Which event speaker authored or presented this particular deck?

## Source

[Open the official W&B event page](https://wandb.ai/site/resources/events/ai-agent-workshop-tokyo/)

The inspected local artifact is an attendee workshop deck dated June 2026, not a
public download from the event page. It names Weights & Biases by CoreWeave but no
individual author. No public deck URL, license, or redistribution permission was visible.
The inspected file's SHA-256 is
`243e2ac04f2e424925ecd9902ad6cf79da5b7b9cc75b3164805dcfbadfa6988f`.
