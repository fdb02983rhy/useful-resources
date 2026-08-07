---
id: agentic-rl-workshop-part-1
title: "AI Agent Workshop Tokyo 2026, Part 1: Agentic RL"
kind: note
source_url: https://github.com/nejumi/art-e-nano
added: 2026-08-08
topics: [agentic-engineering, reinforcement-learning]
---

# AI Agent Workshop Tokyo 2026, Part 1: Agentic RL

## Summary

An 84-page Japanese workshop deck that connects Agentic RL concepts to a lab for
training an email-search agent over Enron mail. It frames an agent in terms of
observations, actions, tools, rewards, and trajectories; develops an outcome-led
reward design; and uses OpenPipe ART, W&B Serverless RL, W&B Training, and Weave
for training and trace inspection.

The later sections introduce GRPO and GSPO, rollout infrastructure, reward-hacking
diagnosis, safety controls, checkpoint selection, and a staged adoption roadmap.

## Why this was saved

- Bridges reinforcement-learning terminology and an executable agent environment.
- Uses trace-level debugging to explain IDK escape and reward hacking.
- Provides practical checklists for reward contracts, checkpoint gates, rollout
  observability, and tool safety.

## Notes

### Source claims

- Agentic RL optimizes a trajectory or way of working rather than only the quality
  of one response.
- Suitable tasks have tools, verifiable outcomes, reproducible environments, and
  obtainable failure logs. A full setup covers environment, tools, reward,
  rollout collection, and observability.
- Final-answer and source correctness should anchor reward; partial credit,
  penalties, and model judges should remain subordinate to the main outcome signal.
- The lab exposes `search_emails`, `read_email`, and `return_final_answer`; a result
  includes a source message ID or an explicit “I don't know.”
- The lightweight configuration uses `OpenPipe/Qwen3-14B-Instruct`, 48 rollouts per
  step, 30 maximum steps, and a fixed 96-question validation set with seed 42.
- GRPO compares several rollouts for one scenario without a critic; GSPO applies
  the update ratio at sequence level for long or tool-heavy trajectories.
- W&B supplies aggregate training history, while Weave exposes individual traces.
- The deck recommends choosing checkpoints with fresh held-out evaluation and
  trace inspection instead of maximum training reward.
- Its safety checklist includes sandboxing write tools, validating arguments,
  redaction, least privilege, human approval for irreversible actions, and
  held-out and negative tests.

### Editor synthesis

The deck is strongest as a practical loop from environment design through training
to trace diagnosis. Some quantitative and causal claims are illustrative rather
than documented experiments: the serverless cost, runtime, and accuracy comparison
has no provenance or statistical detail, and the IDK-penalty fix has no numerical
before-and-after results. Dataset versioning, split construction, contamination
controls, and several cited references are also incomplete.

## Questions

- How were the 96 validation questions generated and checked for contamination?
- Does the proposed reward contract remain robust when search tools or data change?
- Who authored the deck, and is there a versioned public release?

## Source

[Open the submitted PDF](../../assets/pdfs/agentic-rl-workshop-part-1.pdf) ·
[Open the workshop's embedded companion repository](https://github.com/nejumi/art-e-nano)

The inspected local deck is titled “AI AGENT WORKSHOP TOKYO 2026 — 第一部 —
Agentic RLの基礎からハンズオン,” with the subtitle “OpenPipe ART × W&B Training ×
Weave で、メール検索エージェントを強化学習する.” No author, public deck URL,
version, or source-provided redistribution license was visible. The submitted copy
is stored here with the submitter's explicit permission. The companion repository
is the only public link embedded in the deck and is not the source of the PDF.
The inspected file's SHA-256 is
`641fe062e4cf914fb2f2394bb622a5df90544b7dd47147fbb9577ca664904666`.
