---
id: cmux
title: cmux
kind: tool
source_url: https://cmux.com/
added: 2026-08-08
topics: [agentic-engineering, developer-tools]
---

# cmux

## Summary

A free, open-source native macOS terminal designed for multitasking across coding
agents. Built with Swift, AppKit, and libghostty, it combines vertical workspaces,
split panes, contextual notifications, an embedded programmable browser, remote
workflows, and a CLI and Unix-socket API.

cmux presents these as composable terminal primitives rather than prescribing one
agent orchestrator, so existing command-line agents and Ghostty configuration can
remain part of the workflow.

## Why this was saved

- Makes parallel agent sessions visible and shows which pane needs attention.
- Places a scriptable browser beside the terminal for web-development verification.
- Exposes workspace, pane, terminal, and browser operations to automation.

## Notes

### Source claims

- Workspaces can display Git branch, pull-request state, working directory, ports,
  and recent notification text; attention signals come from terminal escape
  sequences, the cmux CLI, or agent hooks.
- Its browser API supports navigation, DOM snapshots, interaction, JavaScript
  evaluation, and console and network inspection.
- It supports SSH workspaces and remote tmux attachment, though the latter is
  labeled beta.
- cmux currently requires macOS 14 or later. Session restore preserves app-owned
  layout and metadata but does not checkpoint arbitrary live processes; the iOS
  companion is also beta.

### Editor synthesis

cmux is most compelling as an attention and organization layer for several live
agent sessions. Its main constraint is platform scope, and durable processes may
still need tmux or an agent's native resume mechanism.

## Questions

- How reliable are notification and resume hooks across different agent versions?
- Can its embedded browser replace a Chrome or Playwright workflow for real projects?
- Is restored layout sufficient for long-running sessions without tmux?

## Source

[Open the official site](https://cmux.com/) ·
[View the official repository](https://github.com/manaflow-ai/cmux)

The linked repository was inspected at commit
[`6089fa0`](https://github.com/manaflow-ai/cmux/commit/6089fa04d3effd27e43c5c6104a4eada62fe859f).
