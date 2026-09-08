---
id: show-me
title: Show Me
kind: tool
source_url: https://github.com/humanlayer/skills/tree/main/plugins/show-me/skills/show-me
added: 2026-09-08
status: reference
topics: [agentic-engineering, agent-skills, visualization]
---

# Show Me

## Summary

HumanLayer's agent skill for explaining the current conversation topic visually.
It selects a compact representation, from pseudocode and structural trees to
Mermaid, diffs, or a focused HTML artifact, while keeping prose brief.

## Why this was saved

- Makes architecture, execution flow, and proposed changes easier to discuss.
- Chooses the representation around the question rather than prescribing one
  diagram format.

## Notes

### Source claims

- Maps algorithms to pseudocode, runtime flow to call trees, UI boundaries to
  component trees, and file responsibilities to shallow file trees.
- Uses Mermaid for interactions and flows, and diffs for changes to an existing
  structure. Shows complete blocks when context or a copyable target matters.
- For denser concepts or visual UI work, creates and opens one HTML diagram,
  infographic, or short slide deck using product styling and responsive layouts.
- Keeps visuals beside their explanations and limits detail to the calls,
  files, states, and boundaries needed for the current question.

### Editor synthesis

Useful as a communication aid, but inferred architecture still needs checking
against source code. The HTML option writes and opens a local file. This entry
is based on inspection; the skill was not installed or executed.

## Source

[Open the submitted skill](https://github.com/humanlayer/skills/tree/main/plugins/show-me/skills/show-me) ·
[Read the inspected instructions](https://github.com/humanlayer/skills/blob/3c2629142c5d437428269b1b722b08c0b87f574d/plugins/show-me/skills/show-me/SKILL.md)

Inspected in `humanlayer/skills` at commit
[`3c26291`](https://github.com/humanlayer/skills/commit/3c2629142c5d437428269b1b722b08c0b87f574d).
