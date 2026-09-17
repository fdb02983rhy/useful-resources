---
id: bend
title: Bend 2
kind: tool
source_url: https://github.com/bendlang/bend
added: 2026-09-18
status: reference
topics: [software-development, programming-languages, formal-verification, parallel-computing]
---

# Bend 2

## Summary

A young programming language combining dependent types, checked proofs, and
CPU/GPU parallel execution. It proposes expressing application requirements as
laws that AI-written code must satisfy.

## Why this was saved

- Explores machine-checked specifications as a safeguard for AI-assisted coding.

## Notes

### Source claims

- `LAWS.bend` declares properties; `PROOF.bend` supplies proofs for the compiler
  to check.
- Targets C, Metal, CUDA, and JavaScript. Parallel execution currently requires
  balanced calls; JavaScript is single-core. Performance claims are project-reported.
- Bend 2 is incompatible with Bend 1/HVM. It requires explicit annotations,
  lacks automated proof search, and has a small library and tooling ecosystem.
- The README warns that the compiler is not fully audited, its Lean formalization
  differs from the implementation, and consistency bugs may exist. Floating-point
  reasoning is unsupported; `@unsafe` can disable termination checking.

### Editor synthesis

Treat this as experimental, not a blanket guarantee of bug-free programs.
Confidence depends on adequate specifications, sound checking, and trusted
implementation boundaries. Not installed, benchmarked, or independently audited.

## Source

[View the repository](https://github.com/bendlang/bend)

Inspected the README at commit
[`8008146`](https://github.com/bendlang/bend/commit/8008146ab90abb98b496fa2a6ffe555da7fb0dd5).
