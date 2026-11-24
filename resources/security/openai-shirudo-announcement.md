---
id: openai-shirudo-announcement
title: OpenAI and Cisco introduce Shirudo
kind: web
source_url: https://x.com/openai/status/2124980590717911527
added: 2026-11-24
status: reference
topics: [security, agentic-engineering, linux]
---

# OpenAI and Cisco introduce Shirudo

## Summary

An announcement of Shirudo, an open-source Linux runtime from OpenAI and Cisco
for applying temporary eBPF protections while teams prepare permanent patches.

## Why this was saved

- A reference for agent-assisted runtime defense and protecting services during
  the gap between vulnerability discovery and patch deployment.

## Notes

### Source claims

- The official companion article describes eBPF shields that protect running
  systems, with operator approval before deployment and monitoring before enforcement.
- Shields are signed and verified; TPM-backed records help operators verify
  protections being loaded or removed.
- OpenAI reports a controlled test in which a Codex-generated shield blocked a
  Java4Shell exploit attempt against Elasticsearch without restarting the service.

### Editor synthesis

Useful for studying temporary mitigation workflows. A controlled demonstration
does not establish protection for arbitrary vulnerabilities or workloads.
The runtime was not installed or tested.

### Retrieval

The submitted X post returned HTTP 403. This note uses the official companion
article, published 2026-11-23 and inspected 2026-11-24, for verified details.
Tracking parameters were removed from the submitted URL below.

## Source

[Submitted post](https://x.com/openai/status/2124980590717911527) ·
[Official companion article](https://openai.com/index/introducing-shirudo/)
