---
id: no-mistakes
title: git push no-mistakes
kind: tool
source_url: https://github.com/kunchenguid/no-mistakes
added: 2026-08-08
topics: [agentic-engineering, developer-tools]
---

# git push no-mistakes

## Summary

An open-source local Git quality gate for agent-generated changes. Instead of
pushing directly to the real remote, a branch is sent through a proxy remote that
runs review, tests, documentation, and lint checks in a disposable worktree. It
forwards the branch and opens a pull request only after the configured gates pass.

The same pipeline can be driven through Git, an interactive TUI, or a coding-agent
skill. Mechanical fixes can be applied automatically, while findings that affect
intent remain human decisions.

## Why this was saved

- Adds a repeatable quality boundary between coding agents and the remote branch.
- Keeps validation and repair work isolated from the active checkout.
- Offers a concrete model for automating routine review without delegating product
  judgment.

## Notes

### Source claims

- The pipeline covers review, testing, documentation, linting, push, pull-request
  creation, and CI monitoring in a disposable worktree.
- Entry points are `git push no-mistakes`, the `no-mistakes` TUI, and a
  `/no-mistakes` agent skill. Several coding-agent runners are supported.
- A runnable agent and provider-specific tooling or credentials are required for
  the complete workflow. Installation also runs a background daemon.
- Official release binaries enable the project's self-hosted telemetry by default;
  it can be disabled with `NO_MISTAKES_TELEMETRY=0`.

### Editor synthesis

The isolation and escalation boundaries are the most reusable ideas. The tradeoff
is additional local machinery, model/API cost, and a longer delivery path whose
reliability depends on project checks and the selected agent.

## Questions

- What repository content reaches external agent backends during review?
- How do latency, cost, and false positives compare with conventional hooks plus CI?
- How much configuration is needed for projects with unusual validation commands?

## Source

[Open the repository](https://github.com/kunchenguid/no-mistakes)

Inspected at commit
[`d37d9cc`](https://github.com/kunchenguid/no-mistakes/commit/d37d9cc440d382542cc225c8dc2f290643d6e5e6).
