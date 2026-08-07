---
id: grill-with-docs
title: Grill with Docs
kind: tool
source_url: https://github.com/mattpocock/skills/tree/main/skills/engineering/grill-with-docs
added: 2026-08-08
topics: [agentic-engineering, agent-skills]
---

# Grill with Docs

## Summary

A stateful planning skill that combines a dependency-aware grilling interview
with repository-aware domain modeling. As terminology and consequential choices
become clear, it checks them against the codebase and records canonical vocabulary
in `CONTEXT.md` files and qualifying architectural decisions in ADRs.

It is designed for planning that should leave a narrow, durable paper trail rather
than only conversational agreement.

## Why this was saved

- Keeps planning vocabulary aligned with the repository being changed.
- Preserves settled domain language for future collaborators and agents.
- Uses a high threshold for ADRs so ordinary implementation choices do not become
  permanent documentation.

## Notes

### Source claims

- The wrapper depends on separate `grilling` and `domain-modeling` skills; installing
  the wrapper alone does not provide a working workflow.
- Vocabulary is written as it is resolved. ADRs are offered only for decisions
  that are hard to reverse, surprising without context, and genuine tradeoffs.
- It mutates the repository and is intended for work resolvable in one session.
- The documentation warns about drift with multiple curators and a failure mode in
  some orchestration contexts where the interview runs but writes do not occur.

### Editor synthesis

Compared with Grill Me, this skill trades a non-mutating, portable workflow for
durable context. It is a better fit once a real codebase exists, provided
dependency loading and expected file writes are verified.

## Source

[Open the submitted skill](https://github.com/mattpocock/skills/tree/main/skills/engineering/grill-with-docs)

Inspected in `mattpocock/skills` at commit
[`84fdeff`](https://github.com/mattpocock/skills/commit/84fdeffd12f2ee307994d1eb6feb48173b6e0502).
