---
id: vercel-ui-sdk
title: Vercel UI SDK
kind: repository
source_url: https://github.com/vercel-labs/ui
added: 2026-11-23
status: reference
topics: [frontend-development, agentic-engineering, accessibility]
---

# Vercel UI SDK

## Summary

A library of reusable interface behaviors intended for agents building user
interfaces, with a shared core and adapters for multiple frontend frameworks.

## Why this was saved

- A reference for composing interactive UI primitives with keyboard and focus
  behavior across frameworks in an agent-assisted development workflow.

## Notes

### Source claims

- `@ui-sdk/core` provides keyboard navigation, focus, selection, dismissal,
  popups, drag and drop, and associated ARIA behavior.
- Adapters support React, Vue, Svelte, Solid, and Web Components. Primitives
  combine behaviors and expose renderable parts through `createParts`.
- The README documents installation of the core and framework adapter, plus
  an agent skill via `npx skills@latest add vercel-labs/ui --skill ui-sdk`.
- The project is in beta; APIs, documentation, and behavior may change.

### Editor synthesis

Useful when evaluating shared interaction logic for custom components. This
note inspects documentation; examples and accessibility behavior were not tested.

## Source

[Repository](https://github.com/vercel-labs/ui) ·
[Inspected README](https://github.com/vercel-labs/ui/blob/926dab872d1f2aa23df4bd9b5cf21c879c9abac9/README.md) ·
[Documentation](https://ui-sdk.dev/docs)

Inspected commit: `926dab872d1f2aa23df4bd9b5cf21c879c9abac9`.
