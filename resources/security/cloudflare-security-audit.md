---
id: cloudflare-security-audit
title: Cloudflare Security Audit Skill
kind: repository
source_url: https://github.com/cloudflare/security-audit-skill
added: 2026-11-10
status: reference
topics: [security, agentic-engineering, software-development]
---

# Cloudflare Security Audit Skill

## Summary

A coding-agent skill for structured repository security audits, combining
reconnaissance, coverage-led investigation, candidate validation, independent
verification, and structured reporting.

## Why this was saved

- A concrete design for tracking audit coverage and evidence across repeated runs.
- Separates confirmed vulnerabilities from unresolved leads and rejected candidates.

## Notes

### Source claims

- Derived from Cloudflare's vulnerability-discovery harness as a single-repository
  starting point, rather than the complete fleet-scale harness.
- Records architecture and a coverage ledger; subsequent runs target gaps and
  revalidate changed code rather than counting stale work as covered.
- Fresh verification attempts to disprove candidates. Confirmed findings require
  a complete source trace and bounded observed result; unresolved candidates use
  `needs_validation` without severity.
- Produces schema-validated findings and separate report, finding-detail, and
  needs-validation documents. Output defaults outside the audited repository.
- Expects an agent with tool use and parallel subagents, plus Node.js validators.

### Editor synthesis

Useful as an audit-process reference, especially for evidence discipline. Coverage
records and agent verification do not establish completeness or eliminate false
positives. Documentation inspected only; no skill installation or audit performed.

## Source

[Repository](https://github.com/cloudflare/security-audit-skill) ·
[Inspected README](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/README.md)

Inspected commit: `c1c8a8c1471069fb0e188eeaff69b8e8db6564a8`.
