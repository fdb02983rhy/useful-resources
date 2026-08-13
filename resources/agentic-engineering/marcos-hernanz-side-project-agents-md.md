---
id: marcos-hernanz-side-project-agents-md
title: Marcos Hernanz's Side-Project AGENTS.md
kind: web
source_url: https://x.com/MarcosHernanz/status/2083954734487212511
added: 2026-08-13
status: reference
topics: [agentic-engineering, agent-instructions, software-design]
---

# Marcos Hernanz's Side-Project AGENTS.md

## Summary

An X post in which Marcos Hernanz shares a compact `AGENTS.md` developed after
extensive agent use. Its rules favor simple implementations for current needs,
incremental end-to-end development, modular components, established libraries,
existing project dependencies, durable architecture, and learning from proven
products before designing a new solution.

The post also takes a deliberately aggressive stance against
backward-compatibility layers. Hernanz adds an explicit follow-up warning that he uses
these instructions only for side projects and does not recommend applying them
uncritically in production.

## Why this was saved

- Offers a short example of encoding software-design preferences in
  repository-level agent instructions.
- Provides useful prompts for discussing simplicity, reuse, modularity, and
  incremental delivery with coding agents.
- Includes an important reminder that effective instructions are contextual and
  can become destructive when copied into a different environment.

## Notes

### Source claims

- Hernanz says the shared file reflects experience from roughly 60 billion
  tokens of agent use.
- The attached instructions emphasize the simplest complete solution, growing a
  working system in layers, clear separation of concerns, and established
  dependencies over unnecessary custom code.
- A follow-up adds the principle of studying how established products solve a
  problem and adopting proven patterns where appropriate.
- The author explicitly limits this setup to side projects and warns against
  treating it as production guidance.

### Editor synthesis

This is best treated as a design-opinion checklist, not a universal
`AGENTS.md`. Removing compatibility paths can be valuable in an unconstrained
prototype but dangerous for public APIs, persisted data, migrations, or users
who depend on existing behavior. Each rule should therefore be adapted to the
repository's lifecycle, risk, and compatibility obligations.

## Source

[Open the X post](https://x.com/MarcosHernanz/status/2083954734487212511)
