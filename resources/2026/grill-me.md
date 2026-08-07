---
id: grill-me
title: Grill Me
kind: tool
source_url: https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me
added: 2026-08-08
topics: [agentic-engineering, agent-skills]
---

# Grill Me

## Summary

A stateless agent skill for turning a loose idea, plan, or decision into an
explicit design tree. It asks dependency-aware questions in rounds, recommends an
answer for each, incorporates the user's decisions, and stops before execution
until both sides confirm shared understanding.

The skill is intended for explicit invocation and can be used for software,
products, writing, business decisions, or other planning subjects without
requiring a repository.

## Why this was saved

- Exposes assumptions and unresolved branches before implementation begins.
- Orders questions by dependency instead of presenting a generic questionnaire.
- Leaves decisions with the user while assigning environmental research to the
  agent.

## Notes

### Source claims

- Each round contains the current question frontier: all questions whose
  prerequisites are resolved. Each question includes a recommended answer.
- The wrapper delegates its interview logic to a separate `grilling` skill.
- It writes no files; the result exists in the conversation and the participants'
  shared understanding.
- Broad scopes can create long sessions, and questions requiring runnable or
  visual evidence are better handled through prototypes.

### Editor synthesis

This is useful at the earliest stage of a decision, when clarity matters more than
artifacts. Its non-mutating design limits workspace risk, but important conclusions
must be transferred elsewhere before the conversation disappears.

## Questions

- Does installation always include the delegated `grilling` dependency?
- At what scope or round count should one interview be split into several?
- How much does question quality vary across models and reasoning settings?

## Source

[Open the submitted skill](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me)

Inspected in `mattpocock/skills` at commit
[`84fdeff`](https://github.com/mattpocock/skills/commit/84fdeffd12f2ee307994d1eb6feb48173b6e0502).
