---
id: lieflat-less-ai-tone
title: Lieflat Less AI Tone
kind: tool
source_url: https://github.com/larashero3-dotcom/lieflat-less-ai-tone
added: 2026-09-16
status: reference
topics: [agentic-engineering, agent-skills, writing]
---

# Lieflat Less AI Tone

## Summary

An agent skill for revising Chinese drafts to reduce formulaic AI-style phrasing.
The repository combines an eleven-rule editing prompt, bilingual research notes,
and scripts for measuring candidate style features on supplied corpora.

## Why this was saved

- Offers a concrete editing checklist with explicit preservation rules and
  documented measurement limitations.

## Notes

### Source claims

- Reports comparing 300 model-generated and 329 human-written articles, totaling
  about 2.83 million Chinese characters, and retaining eleven of 26 candidate
  features.
- Targets patterns such as repeated contrast formulas, adjacent sentence
  structures, punctuation overuse, translationese, and paragraph-opening comments
  with unclear referents.
- Requires minimal edits to matching passages while preserving facts, qualifiers,
  unmatched text, and document structure; a supplied author-style guide takes
  precedence.
- Rejects blanket removal of questions or metaphors and artificial sentence-length
  variation. Findings vary by model and genre; regex-based measurements have
  documented errors and corrections.

### Editor synthesis

Treat this as an editing aid, not proof of authorship. The corpus is withheld for
copyright and privacy reasons, preventing independent verification of the reported
statistics. Review changes for lost distinctions: concise rewrites can still alter
meaning despite preservation instructions.

## Source

[View the repository](https://github.com/larashero3-dotcom/lieflat-less-ai-tone)

Inspected `README.en.md` and `SKILL.md` at commit
[`27d2923`](https://github.com/larashero3-dotcom/lieflat-less-ai-tone/commit/27d29232f10124db904ca9c0536d0b67cb3b2833).
