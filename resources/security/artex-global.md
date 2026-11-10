---
id: artex-global
title: ARTEX — Global Edition
kind: repository
source_url: https://github.com/jiwoochris/artex-global
added: 2026-11-10
status: reference
topics: [security, agentic-engineering]
---

# ARTEX — Global Edition

## Summary

A multilingual edition of ARTEX, an LLM multi-agent penetration-testing system
with a Go backend, embedded Next.js interface, and PostgreSQL storage.

## Why this was saved

- An architecture reference for agent planning, tool execution, evidence graphs,
  and human oversight in security testing.
- Includes defensive and detection material alongside the testing platform.

## Notes

### Source claims

- Agents decompose goals, execute tools, and accumulate discovered assets and
  findings in graphs, with human-in-the-loop interaction.
- Separates a shared asset graph from per-task exploration graphs, connecting
  assets to goals, evidence, and findings.
- Supports English, Korean, Chinese, Spanish, and Japanese user-facing output
  while retaining the original internal reasoning prompts.
- Includes a traffic-recording proxy, tool approval gate, and reporting features.
- The README restricts use to authorized environments and emphasizes isolated
  learning, research, and defensive detection. It identifies the license as AGPL-3.0.

### Editor synthesis

This is an active tool-execution platform, not a passive source-code scanner.
Authorization boundaries, isolation, traffic retention, and model-provider data
handling need scrutiny before use. The documentation does not establish safety or
effectiveness. No installation, target scanning, or execution was performed.

## Source

[Repository](https://github.com/jiwoochris/artex-global) ·
[Inspected README](https://github.com/jiwoochris/artex-global/blob/133f3cf97f2d153227a1a95d3c4b7cd5b72020a6/README.md)

Inspected commit: `133f3cf97f2d153227a1a95d3c4b7cd5b72020a6`.
