---
id: vulture
title: Vulture
kind: tool
source_url: https://github.com/jendrikseipp/vulture
added: 2026-08-24
status: reference
topics: [developer-tools, static-analysis, python]
---

# Vulture

## Summary

A static analyzer for finding unused and unreachable code in Python projects.
Vulture parses the supplied files into abstract syntax trees, records defined and
used names, and reports likely dead functions, classes, methods, imports,
variables, attributes, properties, and code paths with a confidence score.

## Why this was saved

- Surfaces dead Python code beyond unused imports and local variables.
- Ranks findings by confidence so cleanup can begin with safer candidates.
- Supports reusable project configuration, whitelists, pre-commit, and CI
  workflows.

## Notes

### Source claims

- Vulture scans Python files or directories and can analyze application and test
  code together to help reveal untested code.
- It detects unused definitions and unreachable statements, including code after
  `return`, `break`, `continue`, or `raise`, and some unsatisfiable conditions.
- Findings receive confidence values from 60% to 100%; imports are assigned 90%,
  while arguments and unreachable code receive 100%. `--min-confidence` filters
  the report.
- Configuration can live under `[tool.vulture]` in `pyproject.toml`. Findings can
  be suppressed with whitelists, exclusions, ignored names or decorators, and
  supported `noqa` comments.
- The analysis is name-based and ignores scopes. Python's dynamic behavior means
  Vulture can miss dead code and can report implicitly invoked code as unused.
- Vulture is MIT-licensed and can also run through pre-commit, a GitHub Action, or
  its Python API.

### Editor synthesis

Vulture works best as a source of reviewable cleanup candidates, not as proof
that code is safe to delete. Start with high-confidence findings, analyze the
test suite alongside the library, and use explicit whitelists for framework or
reflection-driven entry points. Runtime coverage complements Vulture when
dynamic dispatch makes static name analysis incomplete.

## Source

[Open the Vulture repository](https://github.com/jendrikseipp/vulture)

The repository was inspected at commit
[`2c21cb0`](https://github.com/jendrikseipp/vulture/commit/2c21cb0ae2afa657e36f6a397cb573608a65d79e).
