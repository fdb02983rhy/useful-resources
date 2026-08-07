# Useful Resources

A small, Git-backed library for useful tools, references, and study materials
sent through chat.

The unit of storage is a **resource**: one submitted URL, file, image, repository,
playlist, folder, or collection becomes one Markdown note. Collections stay whole
unless their submission explicitly asks for a breakdown.

## Workflow

1. Send a URL, image, file, repository, or rough note.
2. The source is inspected and checked for an existing canonical URL.
3. One note is created or updated under `resources/<primary-topic>/`.
4. The generated frontend data is updated.
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
