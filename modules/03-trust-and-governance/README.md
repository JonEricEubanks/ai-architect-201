# 03 · Trust & Governance

**Time: ~30 minutes**

The more agents you run, the more important it is to define what each one is allowed to do. Governance isn't bureaucracy — it's the thing that lets you trust the output without reading every line.

> **You'll leave this page able to:** write a governance policy for a specialist agent, constrain its tool access, and verify the constraint holds under a real task.

---

## Concept: policy files and scoped permissions

Each agent in `.github/agents/` has a markdown file that defines its mandate. The `tools` block in that file is its permission scope — it can only call tools listed there. If it tries to call anything else, the request is rejected.

This is how you prevent a researcher agent from accidentally writing files, or a publisher from reading credentials it doesn't need.

## Lab 3.1 — Read the existing policies

Open each agent file in `.github/agents/`:

- `researcher.md`
- `drafter.md`
- `reviewer.md`
- `publisher.md`

For each, find:
1. The `tools` block — what is this agent allowed to call?
2. The `description` — does the permission scope match the stated role?
3. Any tools you'd want to add or remove based on what you've seen so far

## Lab 3.2 — Tighten the publisher policy

The publisher currently has write access to the entire repo. That's too broad — it should only be able to write to `output/`.

1. Edit `.github/agents/publisher.md` and restrict its file write scope to `output/` only.
2. Commit the change.
3. Assign the publisher a task that tries to write outside `output/` — verify it's rejected.
4. Then assign it a task that writes inside `output/` — verify it succeeds.

> **Write the acceptance criteria yourself** — that's the skill being trained.

## Lab 3.3 — Add a trust boundary comment

In `pipelineforge/docs/pipeline.md`, add a section called `## Trust boundaries` that documents what each agent can and cannot access. One line per agent is enough.

## ✅ Checkpoint

- [ ] You can explain why narrow tool permissions matter
- [ ] The publisher's write scope is restricted to `output/`
- [ ] The rejection and success tests both behaved as expected
- [ ] `pipeline.md` has a trust boundaries section
