---
id: red-green-stacked-pr
title: 不具合はCIに刻もう。「Red-Green Stacked PR」のすすめ
kind: article
source_url: https://zenn.dev/bmth/articles/red-green-stacked-pr
added: 2026-09-08
status: reference
topics: [software-development, testing, code-review]
---

# 不具合はCIに刻もう。「Red-Green Stacked PR」のすすめ

## Summary

A Japanese article proposing two stacked PRs for a bug fix: one records a failing
reproduction test using an expected-failure marker; the other removes that marker
and fixes the implementation. Both CI runs stay green while documenting the
test's failure-before and success-after transition.

## Why this was saved

- Makes regression-test evidence visible during review.
- Offers a focused workflow for important fixes whose causal link needs scrutiny.

## Notes

### Source claims

- PR 1 changes only tests, using Vitest's `test.fails` and documenting when to
  remove it. PR 2 adds the fix and removes the marker and comment without changing
  the test name or assertions.
- Expected failure does not establish the failure's cause: a broken test can also
  pass this check. Reviewers must still inspect the reproduction.
- The article demonstrates `gh stack` for submitting and merging the pair,
  describes squash merging as one commit per PR, and notes that the feature is
  in public preview as of September 2026.
- Two PRs add overhead. The author recommends the pattern for important or
  complex fixes with stable reproductions, not trivial changes or flaky tests.

### Editor synthesis

Treat the paired CI results as review evidence, not proof of correctness. Confirm
that the first failure targets the intended bug and that no expected-failure
marker is left behind after the fix.

## Source

[Read the Zenn article](https://zenn.dev/bmth/articles/red-green-stacked-pr)

Written by じょうげん (`bmth`); published September 7, 2026. The author coined
“Red-Green Stacked PR” for this article.
