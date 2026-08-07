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
