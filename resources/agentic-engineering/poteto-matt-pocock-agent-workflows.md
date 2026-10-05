---
id: poteto-matt-pocock-agent-workflows
title: Poteto and Matt Pocock on Scaling Agent Workflows
kind: video
source_url: https://www.youtube.com/live/MN9dGgmLyso?si=lZnoAJPimdk3FLq6
added: 2026-10-05
status: reference
topics: [agentic-engineering, software-development]
---

# Poteto and Matt Pocock on Scaling Agent Workflows

## Summary

Matt Pocock interviews Lauren Tan (Poteto), creator of pstack, about moving from
micromanaging coding agents to coordinated workflows. They discuss verification
tools, deterministic scripts, constrained architecture, external feedback,
review practices, and deriving reusable skills from real work.

## Why this was saved

- A practical follow-up to Poteto's earlier talk, explaining the coordination and
  review processes behind her reported pull-request volume.
- Distinguishes reusable tooling from judgment that still belongs to engineers.

## Notes

### Source claims

- Verification gives agents the ability to run applications, inspect behavior,
  and collect performance evidence rather than relying on a human intermediary.
- Put mechanical work into reusable CLIs and scripts; reserve agent reasoning
  for decisions instead of rebuilding disposable verification tools each run.
- Conventions, feature directories, types, and lint rules constrain recurring
  mistakes. Improve the environment when multiple agents repeat a bad pattern.
- External feedback feeds coordinator agents that delegate related tasks;
  grouping reports helps avoid duplicate fixes and reveal shared causes.
- Gardening routines can collect findings for later pattern analysis rather
  than immediately launching a fix for every observation.
- Tan describes verifier agents, autonomous merges, and subsequent human sampling.
  She emphasizes the setup effort, token cost, and dependence on verifiability;
  the discussion does not resolve risks from irreversible changes.
- Both speakers recommend mining past corrections for reusable skills and
  adapting skill collections to one's own workflow.

### Editor synthesis

The transferable lesson is to improve evidence and constraints before increasing
autonomy. Reported PR counts are self-reported and include maintenance, not just
features; they are not a quality benchmark or a reason to waive review everywhere.

## Source

[Watch the interview](https://www.youtube.com/live/MN9dGgmLyso?si=lZnoAJPimdk3FLq6)

Published by Matt Pocock. YouTube metadata lists October 3, 2026 and approximately
66 minutes. Summarized from English auto-generated captions retrieved through
the transcript tool's fallback; names and wording may contain recognition errors.
The title above is editorial. This is a separate interview from the
[earlier Poteto talk](poteto-building-trust-in-coding-agents.md).
