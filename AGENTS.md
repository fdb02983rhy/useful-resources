# Useful Resources contract

Keep this repository a compact, trustworthy library of tools, references, and
study resources.

## Ingestion

- One submission is one resource. Keep containers such as collections, courses,
  playlists, and repositories intact unless the user asks to split them. Treat
  independent URLs submitted together as separate resources.
- Update an existing note when its canonical URL matches; do not duplicate it.
- Store notes at `resources/<added-year>/<lowercase-ascii-slug>.md` with `id`,
  `title`, `kind`, `source_url`, `added`, and `topics` frontmatter. Preserve the
  submitted URL. Use a kind accepted by `scripts/validate.py`.

## Notes

- Summarize the whole resource concisely. Record why it is useful, key notes, and
  open questions. Separate source claims from editor synthesis.
- Never invent quotations, timestamps, page numbers, authors, results, or dates.
  Say when the source could not be retrieved. Do not copy full copyrighted works.
- YouTube: use captions when available and cite only verified timestamps.
- Papers: inspect the source and record its identity and version.
- Images: save only authorized copies under `assets/images/` and describe only
  what is visible.
- Repositories: record the inspected URL and commit SHA when available; do not
  clone or vendor them into this repository.

## Finish

1. Inspect `git status` and check for an existing canonical URL before editing.
2. Update the `README.md` resource table and lightweight topic navigation.
3. Run `python3 scripts/validate.py` and review the diff for unsupported claims or
   unrelated changes.
4. Commit each ingestion request atomically. Push only when the user asks.
