---
id: shadcn-lint
title: "@shadcn/lint"
kind: tool
source_url: https://github.com/shadcn-ui/lint
added: 2026-09-15
status: reference
topics: [developer-tools, web-development, static-analysis]
---

# @shadcn/lint

## Summary

A linter for Tailwind design systems that turns component and theme policies into
checks coding agents can run. Diagnostics explain violations and suggest repairs
using the project's components, variants, and theme, without changing component
APIs.

## Why this was saved

- Makes design-system conventions executable and gives agents targeted feedback
  when generated UI drifts from them.

## Notes

### Source claims

- Supports Tailwind v4 with ESLint or Oxlint; shadcn/ui is optional. Requires
  Node.js 20.19+, ESLint 9.30+ or Oxlint 1.80+; Oxlint's JavaScript plugin API is
  currently alpha.
- Rules cover component restyling, raw colors, arbitrary values, inline styles,
  unknown classes, and classes that cannot be statically read.
- Per-component contracts define allowed overrides; custom diagnostics can refer
  to available variants, sizes, and source files.
- Discovers shadcn/ui components and themes through `components.json`, with
  configurable recognition for custom components and monorepos.

### Editor synthesis

Useful for enforcing an agreed design system, not proving visual quality or
accessibility. Start with deliberate contracts and review exceptions. The
repository's agent-performance results are maintainer-reported, not independent
validation.

## Source

[View the repository](https://github.com/shadcn-ui/lint)

Inspected README at commit
[`53de86f`](https://github.com/shadcn-ui/lint/commit/53de86f0e7dcc341a9cb45c383a9f2c454d1e958).
