---
id: ai-native-sdlc-playbook
title: The AI-Native SDLC Playbook
kind: article
source_url: https://claude.com/blog/the-ai-native-sdlc-playbook
added: 2026-08-26
status: reference
topics: [agentic-engineering, software-development, governance]
---

# The AI-Native SDLC Playbook

## Summary

Anthropic's stage-by-stage guide to redesigning the software development
lifecycle around AI agents. It covers planning, design, building, testing,
deployment, and maintenance, connecting the stages through version-controlled
artifacts such as `intent.md`, `spec.md`, `plan.md`, code, review findings, and
incident records.

The playbook combines agent-driven work with continuous verification,
deterministic guardrails, and explicit human approval points. Each play includes
prerequisites, implementation steps, governance considerations, and suggested
leading and lagging measures.

## Why this was saved

- Provides a concrete operating model for applying agents beyond code generation.
- Shows how instructions, skills, hooks, evals, and review agents can work as a
  connected control system.
- Treats committed artifacts as both handoffs between stages and an auditable
  record of intent, execution, and approval.

## Notes

### Source claims

- Faster code generation moves bottlenecks toward planning, testing, review,
  deployment, and governance rather than removing them.
- The proposed lifecycle is a loop: an accepted artifact triggers the next stage,
  while production findings can return to planning as a new `intent.md`.
- Planning captures an originator's problem and constraints in `intent.md`;
  design converts accepted intent into `spec.md`; build begins with an approved
  `plan.md` and keeps reusable project knowledge in `CLAUDE.md` and skills.
- Testing gives every agent a feedback loop and regression-tests agent
  configuration with continuous evals. Deployment layers agentic review with
  deterministic hooks and reserves human approval for critical or regulated
  decisions.
- Maintenance uses deterministic triggers and tiered permissions to let agents
  diagnose issues, propose changes through gated routes, and turn incidents into
  future eval cases.
- The guide recommends starting manually, adopting modular plays according to
  their prerequisites, measuring outcomes, and increasing autonomy only as the
  surrounding controls mature.

### Editor synthesis

The most reusable idea is not a particular Claude feature but the artifact chain:
each stage leaves behind a compact, reviewable input for the next one. This makes
agent work easier to inspect and govern without forcing every action through a
human. The article is also a product-specific and enterprise-oriented playbook,
so teams should adapt its file conventions, tools, and approval model rather than
treat them as universal requirements.

## Source

[Read the Claude article](https://claude.com/blog/the-ai-native-sdlc-playbook)

Written by Louis Claxton and published August 21, 2026.
