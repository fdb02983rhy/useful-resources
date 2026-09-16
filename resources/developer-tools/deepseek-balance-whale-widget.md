---
id: deepseek-balance-whale-widget
title: DeepSeek Balance Whale Widget
kind: tool
source_url: https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget
added: 2026-09-17
status: reference
topics: [developer-tools, usage-monitoring, agentic-engineering]
---

# DeepSeek Balance Whale Widget

## Summary

A DeepSeek Harness (DSH) web plugin that displays API balances, usage history,
and per-turn cost estimates through an animated whale widget. It includes
customizable bubbles, characters, sounds, dragging, and edge snapping.

## Why this was saved

- Keeps spending feedback visible alongside agent conversations.

## Notes

### Source claims

- Refreshes DeepSeek balances every 60 seconds or on demand, with low-balance,
  daily-budget, and per-turn spending notifications.
- Separates account-level balance observations from local token-based estimates;
  recharges and other adjustments can require explicit reconciliation.
- Supports provider templates and custom balance or quota endpoints, using DSH's
  credential service. Providers without balance endpoints use local usage
  estimates instead.
- Can read local Codex session logs, but remains a DSH plugin, not a Codex plugin.
  The README marks Codex support partial and subscription-window handling as
  unverified against real subscription samples.

### Editor synthesis

Useful for awareness, not authoritative billing. Check observation coverage and
pricing before relying on totals. Code is MIT-licensed; bundled art and audio
have separate restrictions and should not be assumed freely reusable.

## Source

[View the repository](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget)

Inspected README and package metadata for version `0.3.2` at commit
[`47468f7`](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget/commit/47468f71613fe63f1f809ee1be1fb37e4d703c3b).
Not installed or runtime-tested.
