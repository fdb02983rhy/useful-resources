---
id: dependencytrack
title: OWASP Dependency-Track
kind: collection
source_url: https://github.com/DependencyTrack
added: 2026-11-10
status: reference
topics: [security, software-development]
---

# OWASP Dependency-Track

## Summary

The GitHub organization for OWASP Dependency-Track, a platform for continuous
SBOM analysis intended to identify and reduce software supply-chain risk.

## Why this was saved

- A central entry point to the platform and its deployment and integration ecosystem.
- Complements SBOM generation with ongoing component-risk analysis.

## Notes

### Source claims

- The organization describes Dependency-Track as a continuous SBOM analysis platform.
- Pinned projects include the main platform, frontend, documentation, community
  resources, Helm charts, and a Go client.
- The organization also maintains a GitHub Action for uploading SBOMs.

### Editor synthesis

Kept as one organization-level collection, not split into individual repositories.
Start with the platform documentation to evaluate an adoption workflow; an SBOM
inventory alone is not assurance that an application is secure. Organization page
inspected only; no deployment or integration test performed.

## Source

[Inspected GitHub organization](https://github.com/DependencyTrack)

An organization spans multiple repositories, so no single commit SHA applies.
