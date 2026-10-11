---
id: anatomy
title: Anatomy
kind: tool
source_url: https://skills.wheresryan.sh/anatomy
added: 2026-10-11
status: reference
topics: [agentic-engineering, visualization, software-development]
---

# Anatomy

## Summary

Ryan's Claude Code skill turns an idea into an isometric machine whose behavior
explains the concept. It produces code-based illustrations and interactive
explainers using SVG, with optional WebGL effects and rotating 3D parts.

## Why this was saved

- A reference for explaining technical concepts through working visual analogies,
  rather than static boxes and arrows.
- Connects visual behavior, numeric readouts, and accessibility text to one model.

## Notes

### Source claims

- Prompts name the concept; explicit interactive, WebGL, and 3D requests select
  richer behavior. Examples include queues, caches, hashing, and physical machines.
- The workflow establishes facts and a shared model before geometry, then builds
  solid parts, depth ordering, interactions, and visual checks.
- Output can be framework-free TypeScript generating SVG and HTML, or React
  components. The companion anatomy-figures package also offers custom elements.
- Figures support keyboard interaction, reduced motion, and pausing off screen.
- Detailed work can take hours; 3D remains beta, and the author recommends
  inspecting and refining the first result. References guide appearance rather
  than faithful copying. The skill and figures are MIT-licensed.

### Editor synthesis

Useful for educational interfaces where interacting with a mechanism clarifies
behavior. Keep the analogy's assumptions explicit and budget for visual review;
a convincing machine is not automatically a faithful model of every detail.

## Source

[Anatomy guide and demonstrations](https://skills.wheresryan.sh/anatomy)

By Ryan (@wheresryan22), dated October 9, 2026.
