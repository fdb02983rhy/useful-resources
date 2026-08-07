# Study Vault

A small, Git-backed library for study materials sent through chat.

The unit of storage is a **material**: one submitted URL, file, image, repository,
playlist, folder, or collection becomes one Markdown note. Collections stay whole
unless their submission explicitly asks for a breakdown.

## Materials

| Material | Kind | Topics | Status |
| --- | --- | --- | --- |
| [Ilya 30u30](materials/2026/ilya-30u30.md) | Collection | AI, deep learning | Queued |

## Workflow

1. Send a URL, image, file, repository, or rough note.
2. The source is inspected and checked for an existing canonical URL.
3. One note is created or updated under `materials/<year>/`.
4. Relevant topic pages and this index are updated.
5. `python3 scripts/validate.py` checks the repository before commit.

## Layout

```text
materials/        One note per submitted material
topics/           Lightweight navigation across materials
assets/images/    Images that belong to material notes
templates/        Note templates
scripts/          Deterministic repository checks
AGENTS.md         Durable ingestion and editing contract
```

All notes use ordinary Markdown links and a small YAML frontmatter block, keeping
the repository readable on GitHub and portable to other Markdown tools.

