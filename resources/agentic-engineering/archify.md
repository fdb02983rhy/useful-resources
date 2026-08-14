---
id: archify
title: Archify
kind: tool
source_url: https://tt-a1i.github.io/archify/
added: 2026-08-14
status: reference
topics: [agentic-engineering, developer-tools, visualization]
---

# Archify

## Summary

An agent skill and local renderer for turning a system description or codebase
analysis into an interactive technical diagram. Archify supports architecture,
workflow, sequence, data-flow, and lifecycle views using typed JSON source,
deterministic validation, and self-contained HTML output.

The generated viewer can expose authored routes, reachability, guided stories,
and source evidence, with static and motion export formats for sharing or review.

## Why this was saved

- Produces inspectable diagram source and validation results rather than only a
  generated image.
- Covers several technical storytelling modes with one agent-facing workflow.
- Creates portable HTML artifacts that can be refined conversationally and
  shared without a hosted service.

## Notes

### Source claims

- The skill supports Raven, Cursor, Claude Code, Codex CLI, and OpenCode.
- Its five diagram modes are Architecture, Workflow, Sequence, Data Flow, and
  Lifecycle; Architecture Delta can compare validated before-and-after sources.
- Schema, layout, HTML/SVG, route, and label-clearance checks run before a
  showcase artifact replaces the last verified output.
- Generated artifacts can include semantic search, exact authored route and
  reachability inspection, guided views, themes, and finite motion.
- Output is self-contained HTML, with PNG, SVG, WebM, and share-card exports.
  Source-linked evidence is optional and tied to revision-verified public files.
- Archify is MIT-licensed. Automatic Mermaid parsing, general-purpose
  auto-layout, hosted sharing, and WYSIWYG editing are outside its stated scope.

### Editor synthesis

Archify is useful when an architecture diagram should remain both presentable
and auditable. The typed intermediate representation and checks make iteration
more disciplined than free-form image generation, but they validate the authored
model—not the runtime system itself. Diagram accuracy still depends on the
quality and scope of the agent's source analysis.

## Source

[Open Archify](https://tt-a1i.github.io/archify/) ·
[View the repository](https://github.com/tt-a1i/archify)

The repository was inspected at commit
[`fc6e8ac`](https://github.com/tt-a1i/archify/commit/fc6e8aca1829a02af0f0efdc193a87c3754d373c).
