---
id: poteto-building-trust-in-coding-agents
title: Building Trust in Coding Agents — Lauren's Production Workflow
kind: video
source_url: https://x.com/poteto/status/2102050467505430555?s=46&t=ylgcGz4nmoG6QcDWJRetoQ
added: 2026-09-25
status: reference
topics: [agentic-engineering, software-development]
---

# Building Trust in Coding Agents — Lauren's Production Workflow

## Summary

Lauren (@poteto) explains how verification tools, reusable engineering skills,
and constrained codebase architecture make coding agents more trustworthy.
The talk connects application-level evidence and enforceable conventions with
parallel work and event-driven automation.

## Why this was saved

- A practical framework for replacing repeated agent corrections with durable
  tooling and codebase improvements before scaling autonomous development.

## Notes

### Source claims

- Verification skills combine a reusable CLI for running the application and
  collecting traces with a maintained feature map describing navigation and
  behavior. This helps agents interpret vague bug reports and test their work.
- Engineering playbooks such as PStack complement correctness checks with
  development and debugging workflows.
- Prefer preventing mistakes through architecture and data structures, then
  static analysis and CI; layer rules, review tooling, and skills on top rather
  than relying solely on human-enforced style guides.
- Agents copy existing patterns, including workarounds. A codebase “gardener”
  should remove technical debt, maintain one conventional path, and add lint
  rules to prevent bad patterns spreading.
- The internal Dune framework illustrates strict placement and import boundaries.
  An outer loop of service events can then trigger cloud agents using the same
  verification infrastructure.

### Editor synthesis

Treat the repository and its checks as persistent engineering knowledge. Scale
parallelism after improving verification and constraints, not as a substitute
for them. The post's 2,500-production-PR claim is self-reported, not an independent
quality benchmark; automatic captions render the opening count differently.

## Source

[Watch the original post and video](https://x.com/poteto/status/2102050467505430555?s=46&t=ylgcGz4nmoG6QcDWJRetoQ)

Posted September 21, 2026; approximately 38 minutes. Summary based on the video's
[English auto-generated captions](https://video.twimg.com/subtitles/amplify_video/2101938030122868736/0/WgLRQsQNJRcgqv1a.vtt).
Captions can misrecognize names and numbers. Post metadata was retrieved through
[FxTwitter](https://api.fxtwitter.com/status/2102050467505430555) because direct X
retrieval was blocked. The title above is editorial.
