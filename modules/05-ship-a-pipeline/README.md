# 05 · Ship a Pipeline

**Time: ~40 minutes**

You've wired the tools, defined the roles, and traced a failure. Now do the whole thing as an architect: design a new pipeline stage, write the spec, delegate the implementation, and review the result.

> **You'll leave this page able to:** design a new agent stage from scratch, write a spec precise enough for Copilot to implement it correctly, and review an agent-built pipeline component with confidence.

---

## The task: add a summarizer stage

The current pipeline ends at `published.md`. Add a **summarizer** stage that runs after publishing and produces a `summary.md` — a three-sentence executive summary of the published content, suitable for a Slack message or tweet thread.

## Lab 5.1 — Design the stage

Before writing any issues, answer these questions in a new GitHub issue titled `Design: summarizer stage`:

1. What is the exact input to the summarizer?
2. What is the exact output format? (be specific — length, structure, tone)
3. What tools does the summarizer need? What should it NOT have access to?
4. Where in the pipeline does it run? Can it run in parallel with anything?
5. What does failure look like, and how would you detect it?

This is the spec. Copilot will implement from this.

## Lab 5.2 — Delegate the implementation

Create a second issue for the implementation itself. Use your design issue as the spec — link to it in the body. Assign it to Copilot.

The implementation should include:
- A new `.github/agents/summarizer.md` with appropriate scope
- The summarizer logic wired into the pipeline
- A test that verifies the output format

## Lab 5.3 — Review and ship

Review the PR using the Module 03 rubric from AI Teammate 101, plus:

- [ ] **Scoped correctly**: does the summarizer's tool list match what you designed?
- [ ] **Format verified**: does the output actually match the spec?
- [ ] **Pipeline intact**: did adding this stage break anything upstream?

Merge it. Run the full pipeline end to end and confirm `summary.md` appears.

## ✅ Checkpoint

- [ ] Design issue written with all five questions answered
- [ ] Implementation delegated to Copilot and reviewed
- [ ] Full pipeline runs end to end and produces `summary.md`
