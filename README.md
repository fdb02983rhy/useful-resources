# Useful Resources

A small, Git-backed library for useful tools, references, and study materials
sent through chat.

The unit of storage is a **resource**: one submitted URL, file, image, repository,
playlist, folder, or collection becomes one Markdown note. Collections stay whole
unless their submission explicitly asks for a breakdown.

## Resources

| Resource | Kind | Topics |
| --- | --- | --- |
| [Ilya 30u30](resources/2026/ilya-30u30.md) | Collection | AI, deep learning |
| [L8 Principal's Agentic Engineering Workflow](resources/2026/l8-principals-agentic-engineering-workflow.md) | Video | Agentic engineering |
| [git push no-mistakes](resources/2026/no-mistakes.md) | Tool | Agentic engineering, developer tools |
| [cmux](resources/2026/cmux.md) | Tool | Agentic engineering, developer tools |
| [Grill Me](resources/2026/grill-me.md) | Tool | Agentic engineering, agent skills |
| [Grill with Docs](resources/2026/grill-with-docs.md) | Tool | Agentic engineering, agent skills |
| [Ponytail](resources/2026/ponytail.md) | Tool | Agentic engineering, agent skills, developer tools |
| [AI Agent Workshop Tokyo 2026, Part 1: Agentic RL](resources/2026/agentic-rl-workshop-part-1.md) | Note | Agentic engineering, reinforcement learning |
| [AI Agent Workshop Tokyo — AI Agent Auto Improvement](resources/2026/ai-agent-workshop-tokyo-auto-improvement.md) | Note | Agentic engineering, agent evaluation |
| [The Smol Training Playbook](resources/2026/smol-training-playbook.md) | Web | Deep learning, model training |
| [The LLM Evaluation Guidebook](resources/2026/llm-evaluation-guidebook.md) | Web | Model evaluation |
| [Let's reproduce GPT-2 (124M)](resources/2026/lets-reproduce-gpt-2-124m.md) | Video | Deep learning, model training |
| [Database Design Course](resources/2026/database-design-course.md) | Video | Databases |
| [Inside OpenAI's in-house data agent](resources/2026/inside-openais-in-house-data-agent.md) | Article | Agentic engineering, agent evaluation |
| [Demystifying evals for AI agents](resources/2026/demystifying-evals-for-ai-agents.md) | Article | Agentic engineering, agent evaluation |
| [Agentic Design Patterns](resources/2026/agentic-design-patterns.md) | Repository | Agentic engineering |

## Workflow

1. Send a URL, image, file, repository, or rough note.
2. The source is inspected and checked for an existing canonical URL.
3. One note is created or updated under `resources/<year>/`.
4. Relevant topic pages and this index are updated.
5. `python3 scripts/validate.py` checks the repository before commit.

## Layout

```text
resources/        One note per submitted resource
topics/           Lightweight navigation across resources
assets/images/    Images that belong to resource notes
templates/        Note templates
scripts/          Deterministic repository checks
AGENTS.md         Durable ingestion and editing contract
```

All notes use ordinary Markdown links and a small YAML frontmatter block, keeping
the repository readable on GitHub and portable to other Markdown tools.
