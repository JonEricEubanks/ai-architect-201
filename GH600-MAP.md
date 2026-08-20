# AI Architect 201 — GH-600 Certification Map

This workshop is not affiliated with the exam — but it *deliberately trains*
the skills GH-600 ("GitHub Certified: Agentic AI Developer") assesses.
Here's the honest mapping.

| GH-600 domain | Weight | Where you practice it here |
|---|---|---|
| **1. Agent architecture & SDLC processes** | 15–20% | Module 00 (repo as control plane) · Module 05 (spec → delegate → review → ship full loop) · Capstone (solo architect cycle) |
| **2. Tool use & environment interaction** | 20–25% | Module 01 (MCP server wiring, tool call inspection) · Module 04 (tracing tool calls in session logs) · Module 05 (health_check tool implementation) |
| **3. Memory, state & execution** | 10–15% | Module 02 (committed files as durable pipeline state) · Module 04 (session logs as execution trace) · Capstone retro (PR + issue + checks as the source of truth) |
| **4. Evaluation, error analysis & tuning** | 15–20% | Module 04 (deliberate failure injection and root-cause tracing) · Module 05 (reviewing an agent-built pipeline component) · Capstone (live end-to-end verification) |
| **5. Multi-agent coordination** | 15–20% | Module 02 (orchestrator + specialists, handoff contracts) · Module 03 (scoped permissions per agent) · Module 05 (full pipeline assembly) |
| **6. Guardrails & accountability** | 10–15% | Module 03 (least-privilege tool scopes, policy files, rejection testing) · Module 05 (governance rubric for new pipeline stages) |

---

## The exam vocabulary, translated to what your hands did

| Exam term | What you literally did in this workshop |
|---|---|
| plan → act → evaluate | wrote the spec issue → orchestrator dispatched → you traced the session log |
| system of record | your repo: issue, handoff files, session logs, PR, checks — all in one place |
| control plane | `.github/agents/` + `.github/workflows/` — governance lives in the repo |
| contributor model | Module 05 rubric — you judged the agent-built PR against your own spec |
| hidden reasoning | Module 04 — you read the session log to find the failure, not just the diff |
| blind trust in automation | Module 04 — you introduced a bug, traced it, and verified the fix root-to-tip |
| risk-based autonomy | Module 03 — you restricted the publisher to `output/` only and tested the boundary |
| escalation | Module 02 — orchestrator stops the pipeline if a handoff file is missing |
| least privilege | Module 03 — each specialist has only the tools its mandate actually requires |

---

## Recommended study path

1. **AI Teammate 101** — build the issue → agent → PR → review muscle memory first
2. **This workshop, Modules 00–05 + Capstone** — apply that muscle memory at pipeline scale
3. **Microsoft Learn: Developing in Agentic AI Systems parts 1 & 2** — theory depth on MCP, hook configuration, and multi-agent safety
4. **Re-run your capstone** with the full governance rubric from Module 05 and explain every control out loud — if you can teach it, you can pass it
