---
id: claude-security-plugin
title: Claude Security Plugin
kind: repository
source_url: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security
added: 2026-11-10
status: reference
topics: [security, agentic-engineering, software-development]
---

# Claude Security Plugin

## Summary

A Claude Code plugin for in-session security research: mapping architecture,
building a threat model, hunting vulnerabilities, independently verifying
candidates, and optionally preparing patches for human review.

## Why this was saved

- A reference for evidence-based agent security reviews of codebases or changes.
- Shows how independent verification and reviewable artifacts fit into an audit.

## Notes

### Source claims

- Supports codebase and change-focused reviews; produces Markdown, JSONL, and
  SARIF reports with revision information, confidence, and exploitation conditions.
- Independent verifiers try to disprove candidate findings before reporting them.
- Optional patches are prepared and reviewed separately, not automatically applied,
  committed, or pushed. Reports note when project tests did not exercise a patch.
- Runs under existing session permissions and adds no isolation. Repository hooks,
  settings, and instructions remain active. Credential redaction is best effort.
- Requires Claude Code and Python 3.9+; Git is needed for diff and patch workflows.

### Editor synthesis

Useful alongside deterministic scanners and human review, not proof that a
repository is secure. Review reports before sharing and isolate untrusted code.
Documentation inspected only; the plugin was not installed or tested.

## Source

[Plugin](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security) ·
[Inspected README](https://github.com/anthropics/claude-plugins-official/blob/dceb15d50832e6adf380bedc26dde03d251324b9/plugins/claude-security/README.md)

Inspected parent repository commit: `dceb15d50832e6adf380bedc26dde03d251324b9`.
