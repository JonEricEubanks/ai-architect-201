# 02 · Multi-Agent Dispatch

**Time: ~35 minutes**

One agent is a contractor. Multiple agents with defined handoffs is a team. This module is about building the team structure: an orchestrator that reads a spec, breaks it into jobs, and dispatches each to the right specialist.

> **You'll leave this page able to:** design a multi-agent workflow with clear handoff points, dispatch work from an orchestrator agent, and verify each agent received the right input.

---

## Concept: orchestrators and specialists

An **orchestrator** agent's job is coordination, not execution. It reads the high-level goal, decides who should do what, and passes structured inputs to each specialist. It does not write code, research topics, or draft content — that's what specialists are for.

A **specialist** agent has a narrow mandate. It receives a single, well-defined input and produces a single, well-defined output. Narrow mandate = predictable behavior = easier to review.

## Lab 2.1 — Map the pipeline

Open `pipelineforge/docs/pipeline.md`. It describes the four-stage pipeline:

```
Issue → [researcher] → research_notes.md
research_notes.md → [drafter] → draft.md
draft.md → [reviewer] → review_comments.md
review_comments.md + draft.md → [publisher] → published.md
```

For each stage, answer:
- What is the exact input?
- What is the exact output?
- What could go wrong at this handoff?

Write your answers as comments directly in `pipeline.md`.

## Lab 2.2 — Run the first two stages

1. In the Agents panel, select **orchestrator** and give it this task:

**Title**
```
Run pipeline stages 1-2 for issue #2
```

**Body**
```markdown
## Task

Run the first two stages of the PipelineForge pipeline for issue #2:
1. Use the researcher agent to produce `research_notes.md`
2. Use the drafter agent to produce `draft.md` from the research notes

## Acceptance criteria

- [ ] `research_notes.md` committed to the repo
- [ ] `draft.md` committed to the repo
- [ ] Each file was produced by the correct specialist (check session log)
```

2. Watch the orchestrator's session log. Find the moment it dispatched to the researcher — what was the handoff payload?

## ✅ Checkpoint

- [ ] You can explain the difference between an orchestrator and a specialist
- [ ] Both `research_notes.md` and `draft.md` were committed by the correct agents
- [ ] You identified the handoff payload in the session log
