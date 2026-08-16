# 01 · MCP Foundations

**Time: ~30 minutes**

Before you can orchestrate agents, you need to understand how they reach outside themselves. MCP (Model Context Protocol) is the standard that lets an agent call a tool — a database, an API, a file system — without the tool needing to know anything about the agent.

> **You'll leave this page able to:** explain what an MCP server is, wire one to a Copilot agent, and verify the connection works end to end.

---

## Concept: what is MCP?

An MCP server is a small process that exposes tools as a structured interface. The agent doesn't call an API directly — it asks the MCP server, which handles authentication, rate limiting, and response formatting. The agent stays clean; the server stays reusable.

Think of it as a power strip: one plug (the agent), many outlets (tools).

## Lab 1.1 — Read the PipelineForge MCP server

PipelineForge ships with a simple MCP server in `pipelineforge/mcp/`. Open it and find:

1. The `listTools()` handler — what tools does it expose?
2. The `callTool()` handler — how does it route a tool call?
3. The schema for the `fetch_issue` tool — what does it expect as input?

> **Just read — do not edit anything yet.**

## Lab 1.2 — Connect an agent to the server

1. Open `.github/agents/researcher.md` — this is the research specialist agent.
2. Find the `mcpServers` block. Confirm it points to the local MCP server.
3. In the **Agents panel** on GitHub, select **researcher** and give it this task:

**Title**
```
Test MCP connection: fetch issue #1
```

**Body**
```markdown
## Task

Use the `fetch_issue` tool to retrieve the body of issue #1 in this repo.
Return the full issue body as your only output. Do not summarize or edit it.

## Acceptance criteria

- [ ] Tool call succeeds (no error in session log)
- [ ] Output matches the actual issue #1 body verbatim
```

4. Watch the session log. Find the moment the agent called `fetch_issue` — what did the request and response look like?

## ✅ Checkpoint

- [ ] You can explain what an MCP server does in one sentence
- [ ] The researcher agent successfully called `fetch_issue`
- [ ] You found the tool call in the session log
