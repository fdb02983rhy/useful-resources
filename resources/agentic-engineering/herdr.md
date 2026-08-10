---
id: herdr
title: Herdr
kind: tool
source_url: https://herdr.dev/
added: 2026-08-11
status: reference
topics: [agentic-engineering, developer-tools]
---

# Herdr

## Summary

An open-source, terminal-native multiplexer for running several coding agents at
once. Herdr keeps real terminal processes alive in a background server, organizes
them into workspaces, tabs, and panes, tracks agent state, and supports local,
SSH, and thin-client attachment without replacing the user's terminal emulator.

It also exposes CLI and local socket APIs so scripts or other agents can create
layouts, control panes, prompt recognized agents, inspect output, and wait for
lifecycle changes.

## Why this was saved

- Keeps agent sessions and their processes running across terminal disconnects.
- Makes blocked, working, done, and idle agents visible across several projects.
- Supports remote and phone-sized terminal workflows without a browser dashboard
  or hosted control plane.
- Gives agents a structured automation surface instead of relying only on raw
  keystrokes.

## Notes

### Source claims

- A background server owns persistent PTYs while one or more terminal clients can
  attach, detach, and reconnect locally or over SSH.
- Agent state rolls up from panes to tabs and workspaces, helping users jump to the
  session that needs attention.
- The CLI and JSON socket API distinguish layout management, raw pane control, and
  recognized-agent operations such as start, prompt, send keys, and wait.
- Herdr detects common agent CLIs including Claude Code, Codex, OpenCode, Cursor,
  Copilot, and others. Unsupported agents still run as terminal processes, but
  richer state and session behavior may require a supported integration.
- Stable releases target macOS and Linux. Windows support is currently described
  as preview beta. The project states that it requires no account, sends no
  telemetry, and is licensed under Apache 2.0.
- Detection does not look through a nested tmux session, and adding detection for
  an entirely new agent currently requires a Herdr binary update.

### Editor synthesis

Herdr is most compelling when the work should remain on a remote machine or
survive client disconnects while several agents run in parallel. Its terminal-
native model is lighter than adopting a desktop agent manager, but it still asks
users to learn multiplexer concepts and to verify the quality of agent-state
detection for their particular CLI versions.

## Source

[Open the official site](https://herdr.dev/) ·
[Read the official documentation](https://herdr.dev/docs/) ·
[View the official repository](https://github.com/herdrdev/herdr)

The repository was inspected at commit
[`bbd7c20`](https://github.com/herdrdev/herdr/commit/bbd7c2094a44fcbcc4a3a3aedef236c4d697d793).
