---
id: inside-openais-in-house-data-agent
title: Inside OpenAI's in-house data agent
kind: article
source_url: https://openai.com/index/inside-our-in-house-data-agent/
added: 2026-08-08
topics: [agentic-engineering, agent-evaluation]
---

# Inside OpenAI's in-house data agent

## Summary

OpenAI describes an internal data agent that turns natural-language questions into
data discovery, warehouse queries, analysis, and cited results. The article focuses
less on model prompting than on the surrounding context system: schemas, query
history, human annotations, code, company knowledge, memory, live runtime state,
permissions, and evaluation.

## Why this was saved

- Shows the context infrastructure behind a production data agent.
- Gives a concrete example of evaluating generated SQL by executing it and grading
  both the query and returned data.
- Records design lessons about tool count, goal-oriented guidance, permissions,
  transparency, and learning meaning from code.

## Notes

### Source claims

- OpenAI reports that its internal data platform serves about 3,500 users across
  roughly 600 petabytes and 70,000 datasets.
- The GPT-5.2-powered agent is exposed through Slack, the web, IDEs, Codex CLI via
  MCP, and an MCP connector in OpenAI's internal ChatGPT.
- Its context combines platform metadata and historical queries, human annotations,
  code-derived knowledge, permission-aware institutional knowledge, memory, and
  live runtime state. Offline context is normalized and indexed; warehouse data is
  queried live when needed.
- Evals use curated questions with reference SQL. The system executes generated SQL
  and compares both the SQL and result data with the reference using an eval grader.
- Access follows existing user permissions, while intermediate steps and outputs
  remain visible for inspection.
- The authors' lessons include reducing overlapping tools, guiding the goal rather
  than prescribing a fixed path, and treating code as an important source of meaning.

### Editor synthesis

The article's central idea is that a useful enterprise data agent is a context and
governance system around a model. The scale, adoption, and performance statements
are OpenAI's own reports, and the described agent is an internal tool rather than a
public product blueprint.

## Source

[Read the OpenAI article](https://openai.com/index/inside-our-in-house-data-agent/)

Published January 29, 2026, by Bonnie Xu, Aravind Suresh, and Emma Tang.
