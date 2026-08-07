---
id: demystifying-evals-for-ai-agents
title: Demystifying evals for AI agents
kind: article
source_url: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
added: 2026-08-08
status: reference
topics: [agentic-engineering, agent-evaluation]
---

# Demystifying evals for AI agents

## Summary

Anthropic's practical framework for evaluating multi-turn, tool-using agents. It
defines an agent eval's tasks, trials, graders, transcripts, and outcomes; compares
deterministic, model-based, and human grading; distinguishes capability from
regression suites; and gives an incremental roadmap for building and maintaining
evaluations.

## Why this was saved

- Turns agent evaluation into an implementable product-engineering practice.
- Explains how task ambiguity, harness constraints, grading bugs, and exploitable
  loopholes can invalidate a reassuring score.
- Adapts evaluation design to coding, conversational, research, and computer-use agents.

## Notes

### Source claims

- Evaluate the model and agent harness together, including transcripts and the
  final state of the environment.
- Prefer deterministic grading when outcomes permit it, and combine code, model,
  and human graders according to the task.
- Capability suites should remain difficult enough to show progress; regression
  suites should be near-perfect so they expose backsliding.
- `pass@k` measures whether at least one of several trials succeeds, while `pass^k`
  measures whether all trials succeed consistently.
- A team can begin with roughly 20–50 unambiguous tasks drawn from manual checks,
  production failures, support reports, and product requirements.
- Trials need isolated and stable environments. Grading should emphasize outcomes,
  allow useful partial credit, calibrate model judges against experts, and include
  regular transcript inspection.
- Eval suites need ongoing ownership and should be combined with production
  monitoring, experiments, user feedback, transcript review, and human studies.

### Editor synthesis

The article is especially useful for explaining why a benchmark number cannot be
separated from its tasks, harness, graders, and inspected traces. Anthropic also
describes agent evaluation as a nascent discipline, so the numerical starting
points are heuristics rather than universal requirements.

## Source

[Read the Anthropic article](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)

Published January 9, 2026.
