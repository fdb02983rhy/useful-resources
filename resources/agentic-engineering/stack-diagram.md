---
id: stack-diagram
title: stack-diagram
kind: repository
source_url: https://github.com/caru-ini/stack-diagram
added: 2026-11-04
status: reference
topics: [agentic-engineering, visualization, system-design]
---

# stack-diagram

## Summary

An agent skill for turning natural-language descriptions of technology stacks
into architecture diagrams with brand logos, grouped components, and connections.
Examples cover application infrastructure, developer tooling, and cloud services.

## Why this was saved

- A reference for producing portable architecture illustrations from a concise
  description, with consistent light and dark versions.

## Notes

### Source claims

- Default output is self-contained HTML with embedded fonts and logos. PNG,
  dependency-free React components, and artifact workflows are also supported.
- Logos are fetched from icon collections or vendor sources, without recoloring
  or redrawing. AWS, Google Cloud, and Azure use vendor icon packages.
- The workflow routes lines around labels and renders the diagram for inspection.
  It requires Python 3.9+ and network access for logos; PNG export uses Playwright
  with Chromium.
- Optional public-gallery submission requires two confirmations and publishes
  images, a title, stack details, and a display name. The README says the prompt
  is not sent. Code and documentation are MIT-licensed; other assets have their
  own licensing and trademark conditions.

### Editor synthesis

Useful for communicating a stack, but verify inferred connections and deployment
boundaries against the real system. Review diagrams for confidential architecture
before public sharing. Documentation was inspected; the skill was not installed,
and rendering or gallery behavior was not tested.

## Source

[Repository](https://github.com/caru-ini/stack-diagram) ·
[README at inspected HEAD](https://github.com/caru-ini/stack-diagram/blob/1ed53e3e9525364ae5d82e0430f2bb3f7ef4c838/README.md)

Inspected repository HEAD: `1ed53e3e9525364ae5d82e0430f2bb3f7ef4c838`.
