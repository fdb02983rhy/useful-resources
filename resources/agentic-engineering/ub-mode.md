---
id: ub-mode
title: ub-mode
kind: repository
source_url: https://github.com/unclebob/ub-mode
added: 2026-10-28
status: reference
topics: [agentic-engineering, software-development, testing]
---

# ub-mode

## Summary

An agent skill that combines software-engineering practices with deterministic
quality checks. Its workflow moves from making code work to improving its design
and tests, with small, verifiable changes and ongoing operational discipline.

## Why this was saved

- A reference for connecting coding-agent instructions to measurable quality
  checks rather than relying only on prose guidelines.

## Notes

### Source claims

- The rules are loosely adapted from parts of poteto-mode / pstack and emphasize
  TDD, questioning assumptions, domain modeling, boundaries, and refactoring.
- Crapper measures complexity and coverage to target a per-function CRAP score
  below 10. Dryer flags structurally similar code at a similarity of 0.8 or above.
- Mutator uses mutation testing to identify uncovered code and surviving mutants;
  UML Viewer visualizes components, quality metrics, and dependency directions.
- Practice guidance includes logging, context management, worktree cleanup, and
  small ordered commits. The README describes installing the skill by copying
  its SKILL.md into an agent's skills directory.

### Editor synthesis

Useful as an opinionated quality-control checklist. Metric thresholds are this
project's policy, not proof of correctness or suitable universal targets. Check
companion-tool support and test cost for the intended language and codebase.
This note reviews the README; the skill and tools were not installed or tested.

## Source

[Repository](https://github.com/unclebob/ub-mode) ·
[Inspected README](https://github.com/unclebob/ub-mode/blob/57a8bdd28e45ed41900ace0bafa2ff76dd9ed70f/README.md)

Inspected commit: `57a8bdd28e45ed41900ace0bafa2ff76dd9ed70f`.
