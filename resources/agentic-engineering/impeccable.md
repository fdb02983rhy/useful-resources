---
id: impeccable
title: Impeccable
kind: repository
source_url: https://github.com/pbakaus/impeccable
added: 2026-10-29
status: reference
topics: [agentic-engineering, frontend-development, design]
---

# Impeccable

## Summary

Design guidance and tooling for AI coding agents, combining a reusable skill,
focused design commands, browser iteration, and deterministic frontend checks.

## Why this was saved

- A reference for turning design critique into targeted changes and repeatable
  checks across an agent-assisted frontend workflow.

## Notes

### Source claims

- The inspected README lists one skill, 24 commands, and 62 deterministic
  detector rules. Commands cover planning, critique, polish, layout, typography,
  accessibility audits, and edge-case handling.
- Setup records product context in PRODUCT.md separately from visual-system
  decisions in DESIGN.md. Deterministic detection needs no LLM or API key.
- Live editing works against local projects, not deployed production sites;
  production URLs can be inspected without writing back to source.
- Hooks can run detectors after edits and download an engine on first use.
  Design-roll telemetry has opt-outs through `DO_NOT_TRACK=1`,
  `IMPECCABLE_NO_TELEMETRY=1`, or project configuration. The license is Apache-2.0.

### Editor synthesis

Useful for combining visual review with mechanical checks, but a clean scan is
not proof of usability or accessibility. Review hook behavior, network access,
and telemetry settings before adoption. This note reviews documentation only;
the skill and engine were not installed or tested.

## Source

[Repository](https://github.com/pbakaus/impeccable) ·
[Inspected README](https://github.com/pbakaus/impeccable/blob/7510e233b228864606888d252abacf5e7148bf87/README.md)

Inspected commit: `7510e233b228864606888d252abacf5e7148bf87`.
