# PipelineForge

A lightweight, four-stage content automation pipeline that you orchestrate and govern in [AI Architect 201](https://github.com/JonEricEubanks/ai-architect-201).

```
Issue → [researcher] → research_notes.md
research_notes.md → [drafter] → draft.md
draft.md → [reviewer] → review_comments.md
review_comments.md + draft.md → [publisher] → output/published.md
```

## Structure

```
pipelineforge/
  mcp/
    server.js          ← MCP server entry point (agents connect here)
    tools/
      fetch_issue.js   ← reads a GitHub issue via the API
      read_file.js     ← reads a file from the repo
      write_file.js    ← writes a file to the repo
  docs/
    pipeline.md        ← pipeline spec (you annotate this in Module 02)
    seeded-issues.md   ← sample issues to create in your copy
output/                ← publisher writes here (scope-restricted in Module 03)
```

## Quick start

```bash
cd pipelineforge
npm install
```

The MCP server communicates over stdio — agents connect to it automatically when you configure the `mcpServers` block in `.github/agents/`.

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | Yes | Personal access token or Actions token — needs `issues: read` |
| `GITHUB_REPOSITORY` | Yes | `owner/repo` of the workshop copy (e.g. `alice/my-ai-architect-workshop`) |

In GitHub Codespaces both are set automatically. Locally, create a `.env` file (already in `.gitignore`):

```
GITHUB_TOKEN=ghp_...
GITHUB_REPOSITORY=your-username/your-repo
```
