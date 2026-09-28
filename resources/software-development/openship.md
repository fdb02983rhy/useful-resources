---
id: openship
title: OpenShip
kind: repository
source_url: https://github.com/oblien/openship
added: 2026-09-28
status: reference
topics: [software-development, deployment, self-hosting]
---

# OpenShip

## Summary

A self-hostable deployment platform combining builds, application processes,
routing, TLS, and CI/CD through desktop, web, CLI, and programmatic interfaces.

## Why this was saved

- A reference for managing deployments on your own infrastructure with a unified
  interface rather than assembling each operational component separately.

## Notes

### Source claims

- Accepts repositories, local folders, or prebuilt artifacts; detects project
  configuration and supports container or supervised-process deployments.
- The desktop controller deploys remotely over SSH or to Cloud. Push-to-deploy
  requires an always-on server or Cloud endpoint.
- Includes deployment previews, rollbacks, database management, backups, domains,
  and automatic certificates; exposes an SDK, REST API, and permission-checked MCP tools.
- Self-hosted Docker deployment mounts the host Docker socket, giving the control
  plane host-level privileges; the README calls for a trusted host.
- Project-authored code is Apache-2.0; bundled components retain other licenses,
  including GPL-licensed iRedMail.

### Editor synthesis

Evaluate operational isolation, recovery, and component licensing before adoption.
This is a documentation review, not a deployment test or security audit.

## Source

[Repository](https://github.com/oblien/openship) ·
[Inspected README](https://github.com/oblien/openship/blob/2b28e2db82eeb6afd3b6b9238236fda7bc7e97a1/README.md)

Inspected commit: `2b28e2db82eeb6afd3b6b9238236fda7bc7e97a1`.
