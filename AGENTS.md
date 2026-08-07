# Useful Resources operating contract

## Purpose

Maintain this repository as a trustworthy, compact library of useful resources,
including tools, references, and study materials. Optimize for traceability,
accurate synthesis, useful retrieval, and readable Git history.

## Unit of storage

- Treat one user submission as exactly one resource unless the user explicitly
  asks to split it.
- A folder, playlist, reading list, course, collection, or repository is one
  resource. Do not turn its children into separate resource notes by default.
- Several URLs sent together are separate resources only when they are independent
  submissions. A single container URL remains one resource.
- Updating a previously submitted canonical URL updates its existing note instead
  of creating a duplicate.

## Resource files

- Store notes at `resources/<added-year>/<slug>.md`.
- Use lowercase ASCII slugs with hyphens.
- Every resource must have these frontmatter fields:
  `id`, `title`, `kind`, `source_url`, `added`, and `topics`.
- Prefer these kinds: `article`, `book`, `collection`, `course`, `image`, `note`,
  `paper`, `repository`, `tool`, `video`, and `web`.
- Preserve the submitted URL in `source_url`. Mention redirects or a normalized
  identity in the note only when useful.
- Use standard Markdown links rather than tool-specific wiki-link syntax.

## Note content

- Provide a concise summary of the resource as a whole.
- Preserve why it may be useful, key themes, notes, and open questions.
- Distinguish source claims from editor synthesis.
- Never invent quotations, timestamps, page numbers, authors, results, or access
  dates. State when content could not be retrieved.
- Do not copy full copyrighted articles, transcripts, books, or papers. Store the
  source link and concise notes.
- A collection note may describe its scope without enumerating or separately
  summarizing every child resource.

## Source-specific handling

- YouTube: use captions when available; cite timestamps only when verified.
- arXiv or papers: record the paper identity and version; summarize claims,
  methods, results, and limitations only after inspecting the source.
- Images: save an authorized copy in `assets/images/`, then describe or transcribe
  only what is visible.
- Repositories: record the inspected repository URL and commit SHA when available;
  do not vendor or clone it into this repository.
- Collections: keep the collection intact as one resource unless breakdown is
  explicitly requested.

## Navigation

- Update the resources table in `README.md` for every new resource.
- Link each resource from one or more relevant files under `topics/`.
- Keep topic pages lightweight. They are navigation, not duplicate summaries.

## Verification and Git

1. Inspect `git status` before editing.
2. Check for the canonical URL in existing resource frontmatter.
3. Make the smallest coherent update for the submitted resource.
4. Run `python3 scripts/validate.py`.
5. Review `git diff` for unsupported claims and unrelated changes.
6. Commit one ingestion request atomically with a subject such as
   `add: ilya 30u30 collection`.
7. Do not push unless a remote exists and the user has asked for remote updates.
