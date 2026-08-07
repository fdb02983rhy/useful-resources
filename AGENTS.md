# Study Vault operating contract

## Purpose

Maintain this repository as a trustworthy, compact library of study materials.
Optimize for traceability, accurate synthesis, useful retrieval, and readable
Git history.

## Unit of storage

- Treat one user submission as exactly one material unless the user explicitly
  asks to split it.
- A folder, playlist, reading list, course, collection, or repository is one
  material. Do not turn its children into separate material notes by default.
- Several URLs sent together are separate materials only when they are independent
  submissions. A single container URL remains one material.
- Updating a previously submitted canonical URL updates its existing note instead
  of creating a duplicate.

## Material files

- Store notes at `materials/<added-year>/<slug>.md`.
- Use lowercase ASCII slugs with hyphens.
- Every material must have these frontmatter fields:
  `id`, `title`, `kind`, `source_url`, `added`, `retrieved_at`, `status`, and
  `topics`.
- Allowed statuses are `queued`, `studying`, `completed`, and `reference`.
- Prefer these kinds: `article`, `book`, `collection`, `course`, `image`, `note`,
  `paper`, `repository`, `video`, and `web`.
- Preserve the submitted URL in `source_url`. Mention redirects or a normalized
  identity in the note only when useful.
- Use standard Markdown links rather than tool-specific wiki-link syntax.

## Note content

- Provide a concise summary of the material as a whole.
- Preserve why it may be useful, key themes, study notes, and open questions.
- Distinguish source claims from editor synthesis.
- Never invent quotations, timestamps, page numbers, authors, results, or access
  dates. State when content could not be retrieved.
- Do not copy full copyrighted articles, transcripts, books, or papers. Store the
  source link and concise notes.
- A collection note may describe its scope without enumerating or separately
  summarizing every child item.

## Source-specific handling

- YouTube: use captions when available; cite timestamps only when verified.
- arXiv or papers: record the paper identity and version; summarize claims,
  methods, results, and limitations only after inspecting the source.
- Images: save an authorized copy in `assets/images/`, then describe or transcribe
  only what is visible.
- Repositories: record the inspected repository URL and commit SHA when available;
  do not vendor or clone it into this repository.
- Collections: keep the collection intact as one material unless breakdown is
  explicitly requested.

## Navigation

- Update the materials table in `README.md` for every new material.
- Link each material from one or more relevant files under `topics/`.
- Keep topic pages lightweight. They are navigation, not duplicate summaries.

## Verification and Git

1. Inspect `git status` before editing.
2. Check for the canonical URL in existing material frontmatter.
3. Make the smallest coherent update for the submitted material.
4. Run `python3 scripts/validate.py`.
5. Review `git diff` for unsupported claims and unrelated changes.
6. Commit one ingestion request atomically with a subject such as
   `add: ilya 30u30 collection`.
7. Do not push unless a remote exists and the user has asked for remote updates.

