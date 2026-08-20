# PipelineForge — Pipeline Spec

This document is the living spec for the four-stage content pipeline. You will annotate it in **Module 02** and add a trust-boundaries section in **Module 03**.

---

## Architecture

```
┌─────────┐    research_notes.md    ┌─────────┐    draft.md    ┌──────────┐    review_comments.md    ┌───────────┐    output/published.md
│  Issue  │ ──────────────────────► │ drafter │ ──────────────► │ reviewer │ ───────────────────────► │ publisher │ ──────────────────────►
└─────────┘                         └─────────┘                 └──────────┘                          └───────────┘
               researcher
```

## Stage definitions

| Stage | Agent | Input | Output | Can fail when… |
|---|---|---|---|---|
| 1 — Research | `researcher` | Issue number | `research_notes.md` | Issue doesn't exist · API rate limit · empty body |
| 2 — Draft | `drafter` | `research_notes.md` | `draft.md` | Notes file missing · notes too short to draft from |
| 3 — Review | `reviewer` | `draft.md` | `review_comments.md` | Draft file missing · draft is empty |
| 4 — Publish | `publisher` | `draft.md` + `review_comments.md` | `output/published.md` | Either input file missing · write scope violation |

---

## Handoff contracts

Each handoff is a file on disk. The upstream agent commits the file; the downstream agent reads it. **Never pass data through agent memory** — if the file isn't committed, the handoff didn't happen.

### research_notes.md (Stage 1 → 2)

```
# Research notes — Issue #<n>

## Source issue
<verbatim issue title and body>

## Key points
- <bullet list of facts, constraints, and decisions from the issue>

## Open questions
- <anything the drafter will need to resolve>
```

### draft.md (Stage 2 → 3)

```
# Draft — Issue #<n>

<prose content derived from research notes>
```

### review_comments.md (Stage 3 → 4)

```
# Review — Issue #<n>

## Verdict
APPROVE | REQUEST_CHANGES

## Comments
- <one comment per line — specific, actionable>
```

### output/published.md (Stage 4 — final output)

```
# <title>

<final published content after incorporating reviewer comments>
```

---

## Trust boundaries

<!-- Module 03 lab 3.3: fill this in after completing the governance lab -->
<!-- One line per agent: what it can and cannot access -->
