---
id: warp
title: Warp
kind: tool
source_url: https://www.warp.dev/
added: 2026-08-08
status: reference
topics: [agentic-engineering, developer-tools]
---

# Warp

## Summary

A cross-platform agentic development environment built around a modern terminal.
Warp combines a block-based command interface, code editing and review, built-in
local and cloud agents powered by Oz, and enhanced interfaces for third-party CLI
agents. Its client is open source, while its hosted AI and orchestration services
use Warp's separate cloud platform.

## Why this was saved

- Brings terminal commands, agent conversations, code diffs, and reviews into one
  interface.
- Provides a control surface for running and monitoring several local or cloud
  agents.
- Enhances third-party CLI agents such as Claude Code, Codex, and OpenCode without
  requiring a switch to a conventional IDE.

## Notes

### Source claims

- Warp offers terminal and agent modes, block-based command navigation, multiline
  editing, syntax highlighting, completions, a file tree, LSP-assisted editing,
  and interactive code review.
- Local agents can run terminal commands, edit code, use attached files, images,
  URLs, and selections, consult MCP servers and shared context, and surface task
  lists and diffs for review.
- Oz extends the model to programmable cloud agents that can run concurrently from
  triggers, schedules, integrations, an SDK, or a CLI, with activity tracking and
  auditability.
- Warp supports macOS, Windows, and Linux on both x86-64 and ARM64 where documented.
- AI features can be disabled, and Warp documents telemetry controls and an in-app
  network log. AI and cloud usage are credit-metered, with limits and BYOK access
  depending on the current plan.

### Editor synthesis

Warp is most useful for developers who want a terminal-first workspace that spans
manual shell work, built-in agents, third-party agent CLIs, and cloud execution.
Compared with a plain terminal or a lightweight session organizer, it introduces
more platform-specific workflow, service dependencies, and usage-policy decisions.

## Source

[Open the official site](https://www.warp.dev/) ·
[Read the official documentation](https://docs.warp.dev/) ·
[View the official client repository](https://github.com/warpdotdev/warp) ·
[Review current plans](https://www.warp.dev/pricing)
