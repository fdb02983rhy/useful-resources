---
id: syft
title: Syft
kind: repository
source_url: https://github.com/anchore/syft
added: 2026-11-10
status: reference
topics: [security, developer-tools]
---

# Syft

## Summary

Anchore's CLI and Go library for generating software bills of materials (SBOMs)
from container images, filesystems, and archives.

## Why this was saved

- Creates a portable inventory of software components for supply-chain workflows.
- Provides standard outputs that can feed downstream analysis and scanning tools.

## Notes

### Source claims

- Supports numerous operating-system and language package ecosystems, including
  Debian, RPM, Go, Python, JavaScript, Java, and Rust.
- Exports CycloneDX, SPDX, and Syft JSON, with format conversion and multiple
  outputs per invocation.
- Supports signed SBOM attestations using the in-toto specification.
- Integrates with Grype for vulnerability scanning; released under Apache-2.0.

### Editor synthesis

Syft inventories components; vulnerability assessment is a separate downstream
step. Inventory quality depends on the target and detectable package metadata.
Documentation inspected only; no installation or scan performed.

## Source

[Repository](https://github.com/anchore/syft) ·
[Inspected README](https://github.com/anchore/syft/blob/a0c0d3890a9d79421c403e8fcadec50a2e55bf21/README.md)

Inspected commit: `a0c0d3890a9d79421c403e8fcadec50a2e55bf21`.
