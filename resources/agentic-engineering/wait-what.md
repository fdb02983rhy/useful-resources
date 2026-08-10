---
id: wait-what
title: Wait What
kind: tool
source_url: https://github.com/mattpocock/skills/tree/main/skills/productivity/wait-what
added: 2026-08-11
status: reference
topics: [agentic-engineering, agent-skills]
---

# Wait What

## Summary

A small, explicitly invoked agent skill for recovering when an explanation did
not land. It asks the agent to re-pitch its previous message with enough context,
ASD-STE100 Simplified Technical English, and the project-specific vocabulary in
`CONTEXT.md`.

## Why this was saved

- Provides a reusable reset when an agent response is too compressed or assumes
  context the reader does not have.
- Requests simpler language without discarding the terminology already agreed in
  the project.
- Packages a common conversational correction into a short explicit command.

## Notes

### Source claims

- The skill is configured for explicit use rather than automatic invocation.
- Its instruction applies to the immediately preceding response and asks for a
  new explanation, not a continuation.
- The re-pitch should add context, use simplified technical English, and reuse
  the ubiquitous language recorded in `CONTEXT.md`.

### Editor synthesis

This is useful as a lightweight communication repair tool, especially in a
codebase that already maintains a domain vocabulary. It does not define a
fallback when `CONTEXT.md` is absent, and it asks for clearer presentation rather
than fact-checking or changing the underlying answer.

## Source

[Open the submitted skill](https://github.com/mattpocock/skills/tree/main/skills/productivity/wait-what)

Inspected in `mattpocock/skills` at commit
[`84fdeff`](https://github.com/mattpocock/skills/commit/84fdeffd12f2ee307994d1eb6feb48173b6e0502).
