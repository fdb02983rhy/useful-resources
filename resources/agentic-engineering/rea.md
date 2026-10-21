---
id: rea
title: REA Reverse Engineer Anything
kind: repository
source_url: https://github.com/morluto/rea
added: 2026-10-13
status: reference
topics: [agentic-engineering, reverse-engineering, software-development]
---

# REA Reverse Engineer Anything

## Summary

REA connects agents to local reverse-engineering tools through MCP and a CLI.
It returns findings, evidence, and limitations across native binaries,
JavaScript and Electron apps, managed code, websites, and runtime observations.

## Why this was saved

- A unified interface for investigating application behavior and tracing it
  through code, artifacts, and runtime evidence.

## Notes

### Source claims

- Native analysis uses Hopper, Ghidra, or IDA. Static JavaScript and .NET
  inspection do not require a native analysis engine.
- Additional workflows cover Android, firmware, Go and WASM artifacts,
  databases, saved network captures, and process behavior; prerequisites vary.
- The inspected revision also documents static inspection of GPU code objects,
  model-artifact headers, Rust dependency metadata, and packaged Python apps.
- Setup registers the MCP server and matching workflow instructions with
  supported agents. Installing only the skill does not register the server.
- Static JavaScript and .NET inspection read files without executing the app;
  runtime capture runs or interacts with targets using the user's permissions.
- Analysis is local, but tool results reach the agent and are subject to its
  model provider's data policy. The repository is MIT-licensed.

### Editor synthesis

Useful for authorized investigations where conclusions need traceable evidence.
Choose static inspection first when execution is unnecessary, and isolate
untrusted targets before runtime analysis.

## Source

[Repository](https://github.com/morluto/rea) ·
[README](https://github.com/morluto/rea/blob/6d356b84344659085f2b912857b5e27fe0160c9b/README.md)

Inspected commit: `6d356b84344659085f2b912857b5e27fe0160c9b`.
