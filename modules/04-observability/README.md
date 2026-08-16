# 04 · Observability

**Time: ~25 minutes**

When a single agent fails, the session log tells you exactly where. When a multi-agent pipeline fails, you need to trace the failure across multiple sessions. This module is about developing that skill.

> **You'll leave this page able to:** read a multi-agent session log, identify where a handoff broke down, and write a targeted fix that addresses the root cause — not just the symptom.

---

## Concept: tracing a pipeline

Each agent session produces its own log. A pipeline failure usually looks like one of these:

- **Bad input** — the upstream agent produced output in the wrong format
- **Scope violation** — an agent tried to call a tool it's not allowed to use
- **Hallucinated handoff** — the orchestrator passed an input that didn't match reality
- **Silent truncation** — an agent hit a token limit mid-output and the downstream agent got a partial result

The first thing to check: *which agent's output does the failure trace back to?*

## Lab 4.1 — Introduce a deliberate failure

1. Open `pipelineforge/mcp/tools/fetch_issue.js` and add a bug: make `fetch_issue` return an empty string instead of the issue body when the issue number is greater than 5.
2. Commit the change.
3. Run the full pipeline for issue #6.
4. Find the failure in the session logs — which agent first produced wrong output, and why?

## Lab 4.2 — Fix and trace

1. Revert the bug you introduced in Lab 4.1.
2. Run the pipeline for issue #6 again — confirm it succeeds end to end.
3. In your local notes (not committed), write one sentence for each stage: what evidence in the session log tells you that stage succeeded?

## Lab 4.3 — Add a health check

Add a `health_check` tool to the MCP server that returns:
- Current timestamp
- List of available tools
- Status: `ok`

Verify the orchestrator can call it.

## ✅ Checkpoint

- [ ] You found the failure trace in Lab 4.1 before looking at the source code
- [ ] The pipeline ran clean after the fix
- [ ] The `health_check` tool is implemented and callable
