---
id: rethinking-skills-and-prompts-for-gpt-6-astra
title: Rethinking skills and prompts for GPT-6 Astra
kind: article
source_url: https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra
added: 2026-09-13
status: reference
topics: [agentic-engineering, prompt-engineering, agent-skills]
---

# Rethinking skills and prompts for GPT-6 Astra

## Summary

OpenAI's guidance on revisiting skills, `AGENTS.md`, and task prompts for GPT-6
Astra. It advocates narrower triggers, selective context loading, and explicit
completion boundaries instead of carrying forward every instruction developed
for earlier models.

## Why this was saved

- Useful when auditing accumulated agent instructions after a model upgrade.

## Notes

### Source claims

- Long or overlapping skill descriptions can be shortened by Codex or trigger
  irrelevant workflows; keep activation conditions concise and specific.
- Use a small routing document with supporting references and scripts loaded as
  needed; rigid recipes may overconstrain newer models.
- Revisit repository-wide reading and testing rules, directing agents to documents
  according to the task and explicitly authorizing known-safe workflows.
- State the intended finish line and permission boundaries clearly: Astra may
  pause earlier than desired, while shared instructions must also accommodate
  other models.

### Editor synthesis

Audit instructions against real tasks before removing them. Preserve meaningful
safety controls; model-specific guidance is not evidence that safeguards are
unnecessary.

## Source

[Read the OpenAI article](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)

Written by Eric Provencher; published September 11, 2026.
