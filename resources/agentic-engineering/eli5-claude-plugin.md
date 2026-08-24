---
id: eli5-claude-plugin
title: ELI5 Claude Plugin
kind: tool
source_url: https://github.com/anthropics/claude-plugins-community/tree/main/eli5
added: 2026-08-24
status: reference
topics: [agentic-engineering, agent-plugins, learning]
---

# ELI5 Claude Plugin

## Summary

A minimal community plugin for Claude Code and Claude Cowork that turns a topic
into an explain-like-I-am-five HTML artifact. Invoking `/eli5 <topic>` asks
Claude to teach someone with no prior knowledge using large pictures and very
few words.

The complete plugin consists of a manifest, a short README, and one compact skill
instruction that passes the command arguments directly into the explainer prompt.

## Why this was saved

- Provides a quick visual-explanation mode for unfamiliar concepts.
- Demonstrates how little structure a focused, single-purpose Claude plugin can
  require.
- Offers a reusable interaction pattern for reducing jargon and assumed context.

## Notes

### Source claims

- The skill is invoked with `/eli5 <topic>` and can also apply when the user asks
  for a very simple picture-based explanation.
- Its requested output is an HTML artifact with large visuals and few words,
  written for someone who knows nothing about the topic.
- The manifest identifies version 1.0.0, credits Thariq Shihipar, and declares an
  MIT license.
- The marketplace classifies it under learning. It contains no MCP server,
  executable script, external service, or additional reference material.
- The containing repository is a read-only mirror of community-contributed
  plugins, distinct from Anthropic-maintained official plugins. The repository
  states that listed submissions passed its review and automated security scan.

### Editor synthesis

ELI5 is useful both as a teaching shortcut and as a tiny example of plugin
design: one clear trigger, one output format, and almost no ceremony. Its prompt
does not require research, citations, uncertainty handling, or factual checks,
so the result should be treated as an approachable first explanation rather than
an authoritative account. The five-year-old framing can also remove important
nuance from technical or high-stakes subjects.

## Source

[Open the submitted plugin](https://github.com/anthropics/claude-plugins-community/tree/main/eli5) ·
[View the community marketplace repository](https://github.com/anthropics/claude-plugins-community)

The repository was inspected at commit
[`f4c9452`](https://github.com/anthropics/claude-plugins-community/commit/f4c9452f5ca091f1be7064d9faab1b001ea21645).
