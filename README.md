# Useful Resources

A small, Git-backed library for useful tools, references, and study materials
sent through chat.

The unit of storage is a **resource**: one submitted URL, file, image, repository,
playlist, folder, or collection becomes one Markdown note. Collections stay whole
unless their submission explicitly asks for a breakdown.

## Resources

| Resource | Kind | Topics |
| --- | --- | --- |
| [Ilya 30u30](resources/artificial-intelligence/ilya-30u30.md) | Collection | AI, deep learning |
| [L8 Principal's Agentic Engineering Workflow](resources/agentic-engineering/l8-principals-agentic-engineering-workflow.md) | Video | Agentic engineering |
| [git push no-mistakes](resources/agentic-engineering/no-mistakes.md) | Tool | Agentic engineering, developer tools |
| [cmux](resources/agentic-engineering/cmux.md) | Tool | Agentic engineering, developer tools |
| [Warp](resources/agentic-engineering/warp.md) | Tool | Agentic engineering, developer tools |
| [Grill Me](resources/agentic-engineering/grill-me.md) | Tool | Agentic engineering, agent skills |
| [Grill with Docs](resources/agentic-engineering/grill-with-docs.md) | Tool | Agentic engineering, agent skills |
| [Ponytail](resources/agentic-engineering/ponytail.md) | Tool | Agentic engineering, agent skills, developer tools |
| [AI Agent Workshop Tokyo 2026, Part 1: Agentic RL](resources/agentic-engineering/agentic-rl-workshop-part-1.md) | Note | Agentic engineering, reinforcement learning |
| [AI Agent Workshop Tokyo — AI Agent Auto Improvement](resources/agentic-engineering/ai-agent-workshop-tokyo-auto-improvement.md) | Note | Agentic engineering, agent evaluation |
| [The Smol Training Playbook](resources/deep-learning/smol-training-playbook.md) | Web | Deep learning, model training |
| [The LLM Evaluation Guidebook](resources/model-evaluation/llm-evaluation-guidebook.md) | Web | Model evaluation |
| [Let's reproduce GPT-2 (124M)](resources/deep-learning/lets-reproduce-gpt-2-124m.md) | Video | Deep learning, model training |
| [Database Design Course](resources/databases/database-design-course.md) | Video | Databases |
| [Inside OpenAI's in-house data agent](resources/agentic-engineering/inside-openais-in-house-data-agent.md) | Article | Agentic engineering, agent evaluation |
| [Demystifying evals for AI agents](resources/agentic-engineering/demystifying-evals-for-ai-agents.md) | Article | Agentic engineering, agent evaluation |
| [Agentic Design Patterns](resources/agentic-engineering/agentic-design-patterns.md) | Repository | Agentic engineering |
| [The Hitchhiker's Guide to Agentic AI](resources/agentic-engineering/hitchhikers-guide-to-agentic-ai.md) | Paper | Agentic engineering, reinforcement learning, model training, model evaluation |

## Workflow

1. Send a URL, image, file, repository, or rough note.
2. The source is inspected and checked for an existing canonical URL.
3. One note is created or updated under `resources/<primary-topic>/`.
4. This index and the generated frontend data are updated.
5. `python3 scripts/validate.py` checks the repository before commit.

## Layout

```text
resources/        Notes grouped by their primary topic
assets/images/    Images that belong to resource notes
assets/pdfs/      Submitted PDFs stored with explicit permission
templates/        Note templates
scripts/          Deterministic repository checks
AGENTS.md         Durable ingestion and editing contract
```

All notes use ordinary Markdown links and a small YAML frontmatter block, keeping
the repository readable on GitHub and portable to other Markdown tools.

## Frontend

The searchable frontend lives under [`site/`](site/). It supports full-text
search, format and topic filters, sorting, and expanded note details. Run
`npm --prefix site run sync` after resource notes change to refresh its generated data.
