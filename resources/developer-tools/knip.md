---
id: knip
title: Knip
kind: tool
source_url: https://knip.dev/
added: 2026-08-24
status: reference
topics: [developer-tools, static-analysis, javascript-typescript]
---

# Knip

## Summary

A static-analysis and cleanup tool for JavaScript and TypeScript projects. Knip
starts from project entry files, follows imports to build a reachability graph,
and reports unused files, exports, and dependencies as well as dependencies used
but missing from package metadata.

Framework and tooling plugins supply convention-specific entry points, making the
same analysis usable across applications, libraries, workspaces, and monorepos.

## Why this was saved

- Finds repository-level dead code that file-local linters do not see.
- Checks source reachability and package metadata in one pass.
- Supports gradual adoption, CI enforcement, and reviewed automatic fixes.

## Notes

### Source claims

- Knip builds its graph from entry files, resolved imports, configuration and
  shell-script references, and compiled views of non-standard files such as Vue
  and Svelte components.
- Plugins add entry points for supported frameworks and tools; the documentation
  currently lists more than 180 plugins.
- Version 6 requires Node.js 20.19 or newer, or Bun, and can be installed through
  npm, pnpm, Bun, or Yarn.
- Auto-fix can remove unused exports, dependencies, catalog entries, and other
  supported findings. File deletion additionally requires
  `--allow-remove-files`, and the documentation advises using version control to
  review and undo changes.
- Results are only as complete as the entry graph. Missing entry points, dynamic
  imports, unresolved paths, or unsupported conventions can create cascades of
  false unused findings.
- Knip is licensed under the ISC License.

### Editor synthesis

Knip is most useful as a codebase-wide complement to ESLint or Biome: run it
first as a report, correct entry-point and plugin gaps, then introduce selected
checks into CI. Its fix mode can accelerate cleanup, but deletions should follow
review and tests because static reachability cannot prove every runtime path.

## Source

[Open Knip](https://knip.dev/) ·
[Read how the analysis works](https://knip.dev/explanations/how-knip-works) ·
[View the repository](https://github.com/webpro-nl/knip)

The repository was inspected at commit
[`9f18cba`](https://github.com/webpro-nl/knip/commit/9f18cba93c91de8554636b13692d6e7a937b7697).
