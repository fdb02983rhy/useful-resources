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
- The skill asks for the smallest useful change, data modeling before logic,
  validation at entry boundaries, idempotent operations, and isolated mutable
  state or a structurally enforced single writer.
- TDD guidance requires observing the expected failure before implementing a fix,
  but discourages contrived tests when an honest test is impractical. Refactoring
  should preserve behavior, checked through user-visible outcomes.
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
The skill also prescribes logging every action, careful worktree cleanup, and
pushing to the main line; these are its workflow preferences, not authorization
to override a repository's permissions or contribution rules. This note reviews
the README and SKILL.md; the skill and tools were not installed or tested.

## Source

[Repository](https://github.com/unclebob/ub-mode) ·
[Submitted skill](https://github.com/unclebob/ub-mode/blob/master/SKILL.md) ·
[Inspected skill](https://github.com/unclebob/ub-mode/blob/3da62bf3fcfd2034de41f30d920d2739e566171f/SKILL.md) ·
[Inspected README](https://github.com/unclebob/ub-mode/blob/3da62bf3fcfd2034de41f30d920d2739e566171f/README.md)

Inspected commit: `3da62bf3fcfd2034de41f30d920d2739e566171f`.
