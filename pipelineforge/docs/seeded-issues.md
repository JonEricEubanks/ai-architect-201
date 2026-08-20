# Seeded issues for PipelineForge

The labs reference issues #1 through #6+. When you create your copy of the repo, create these issues manually (or via the GitHub CLI) so the pipeline has real data to process.

## How to create them

**Option A — GitHub web UI:** go to the **Issues** tab → **New issue** — paste the title and body below.

**Option B — GitHub CLI:**

```bash
gh issue create --title "Explain the MCP handshake" --body "..."
```

---

## Issue #1 — MCP connection test

**Title:** Explain the MCP handshake

**Body:**
```
Write a short technical explainer (200–300 words) on what happens during an
MCP handshake between an agent and a server.

Cover:
- What the client sends first
- What the server advertises
- How tool calls are routed after the handshake completes

Audience: developers who understand HTTP but are new to MCP.
```

---

## Issue #2 — Multi-agent dispatch test

**Title:** Document parallel agent dispatch patterns

**Body:**
```
Produce a practical guide (300–400 words) on when and how to dispatch
multiple specialist agents in parallel vs. in sequence.

Cover:
- When parallel dispatch is safe (no shared output files)
- When sequential dispatch is required (output of stage N is input to stage N+1)
- How the orchestrator decides which pattern to use
- One real-world example of each

Audience: developers designing their first multi-agent workflow.
```

---

## Issue #3 — Governance lab content

**Title:** Write a least-privilege guide for agent tool scopes

**Body:**
```
Produce a concise guide (250–350 words) on applying least-privilege to
agent tool permissions.

Cover:
- Why broad tool access is a governance risk
- How to audit what a specialist actually needs vs. what it has
- A worked example: restricting the publisher to output/ only
- One signal that a policy is too permissive

Audience: team leads rolling out Copilot Coding Agent to a dev team.
```

---

## Issue #4 — Observability content

**Title:** How to read a multi-agent session log

**Body:**
```
Write a debugging guide (300–400 words) for engineers tracing failures
across a multi-agent pipeline.

Cover:
- Which agent's session log to start with when the pipeline fails
- The four most common failure signatures (bad input, scope violation,
  hallucinated handoff, silent truncation)
- A step-by-step trace of one failure from symptom to root cause
- How to confirm a fix actually resolved the root cause (not just the symptom)

Audience: developers on-call for a production multi-agent system.
```

---

## Issue #5 — Ship a pipeline content

**Title:** Checklist for shipping a new pipeline stage

**Body:**
```
Write a pre-ship checklist (bullet list, 8–12 items) for adding a new
specialist agent stage to an existing multi-agent pipeline.

Each item should be actionable and specific — not "test it" but
"run the full pipeline end-to-end and confirm the new stage's output
file appears in the correct location".

Audience: the architect reviewing a Copilot-built pipeline component.
```

---

## Issue #6 — Observability deliberate-failure test

**Title:** Brief explainer on silent truncation failures

**Body:**
```
Write a short explainer (150–200 words) on silent truncation in
multi-agent pipelines — what it is, why it's hard to detect,
and one mitigation strategy.

Audience: developers debugging their first pipeline failure.
```
