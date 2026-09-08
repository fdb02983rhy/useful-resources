---
id: teamai-cli
title: TeamAI CLI
kind: tool
source_url: https://github.com/Tencent/teamai-cli
added: 2026-09-08
status: reference
topics: [agentic-engineering, developer-tools, knowledge-management]
---

# TeamAI CLI

## Summary

Tencent's CLI for distributing shared agent configurations and team knowledge
through Git. It combines skills, rules, hooks, and MCP configuration management
with knowledge retrieval, codebase graphs, session summaries, and team dashboards
across multiple coding-agent tools.

## Why this was saved

- Provides a reviewable workflow for keeping team agent setups consistent.
- Connects reusable configuration with accumulated engineering knowledge.

## Notes

### Source claims

- Resource changes follow a push, review, merge, and pull workflow. Session-start
  hooks pull approved updates into local agent configurations.
- Project and user scopes, role and tag filtering, and additional skill-repository
  subscriptions control distribution. Feature coverage differs by agent host.
- Automatic knowledge recall is disabled by default. When enabled, it searches
  team knowledge; imported codebase graphs enrich retrieval with structural links.
- Session friction can prompt learning-sharing suggestions. Session summaries,
  usage digests, and dashboards expose activity and knowledge-base health.

### Editor synthesis

Worth evaluating when configuration drift and repeated rediscovery slow a team
down. Review executable hooks, MCP access, and session-sharing policies before
adoption. This entry reflects documentation inspection, not installation or
runtime testing.

## Source

[View the repository](https://github.com/Tencent/teamai-cli) ·
[Read the inspected README](https://github.com/Tencent/teamai-cli/blob/0ec7b77b3663b9f72bb8b0b4532e722be6c1c159/README.md)

The repository was inspected at commit
[`0ec7b77`](https://github.com/Tencent/teamai-cli/commit/0ec7b77b3663b9f72bb8b0b4532e722be6c1c159).
