---
id: aws-reverse-spec-flow
title: AWS Reverse Spec Flow introduction
kind: article
source_url: https://aws.amazon.com/jp/blogs/news/aidm-introducing-reverse-spec-flow/
added: 2026-11-23
status: reference
topics: [agentic-engineering, software-development, modernization]
---

# AWS Reverse Spec Flow introduction

## Summary

An AWS Japan article introducing Reverse Spec Flow (RSF), a workflow for turning
existing application code into specifications that AI agents can use for
maintenance and rebuilding.

## Why this was saved

- A reference for recovering business rules from legacy systems while keeping
  specification claims traceable to source code.

## Notes

### Source claims

- Five phases cover intake at a fixed commit, code graph creation, analysis,
  specification writing, and independent auditing, with human checkpoints.
- Claims link to code locations and are checked by a separate AI verifier;
  unverified behavior remains UNKNOWN. Coverage checks use the code graph and
  `gates.sh` rather than relying on an agent's completion statement.
- Specifications separate implementation facts from technology-independent
  business behavior and include indexes for targeted agent retrieval.
- Analysis is static: runtime behavior still needs acceptance and regression
  testing, and audits do not guarantee error-free specifications.

### Editor synthesis

A useful workflow reference for legacy discovery before a rewrite. Treat its
generated specifications as evidence to review, with runtime validation still
needed. The workflow was not executed for this note.

## Source

[Original AWS article](https://aws.amazon.com/jp/blogs/news/aidm-introducing-reverse-spec-flow/) ·
[Linked implementation](https://github.com/aws-samples/sample-reverse-spec-flow)

Article by Satoshi Koyama, published 2026-11-21; inspected 2026-11-23.
