---
id: temporal
title: Temporal
kind: repository
source_url: https://github.com/temporalio/temporal
added: 2026-10-14
status: reference
topics: [software-development, distributed-systems, workflow-orchestration]
---

# Temporal

## Summary

Temporal is a durable execution platform for resilient application workflows.
It handles intermittent failures and retries failed operations. This repository
contains the Temporal server, while application Workflows, Activities, and Workers
are implemented with supported language SDKs.

## Why this was saved

- A reference for coordinating application work that must survive failures
  without rebuilding all recovery logic in application code.

## Notes

### Source claims

- Originated as a fork of Uber's Cadence and is developed by Temporal Technologies.
- The Temporal CLI can start a local development server and inspect namespaces
  and workflows; the Web UI provides workflow visibility.
- The README links SDK guidance, Go and Java samples, server architecture,
  contribution instructions, and testing documentation.
- The server repository is MIT-licensed.

### Editor synthesis

Useful when evaluating durable orchestration for multi-step services or agent
workflows. Treat the local development server as an entry point, not a complete
production deployment plan.

## Source

[Repository](https://github.com/temporalio/temporal) ·
[README](https://github.com/temporalio/temporal/blob/2ac4e9b64260a835a938dd379b18bcecfad13d4e/README.md)

Inspected commit: `2ac4e9b64260a835a938dd379b18bcecfad13d4e`.
