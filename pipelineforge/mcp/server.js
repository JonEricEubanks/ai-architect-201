// PipelineForge MCP server
// Exposes tools that the researcher, drafter, reviewer, publisher, and
// orchestrator agents use to read/write files and fetch GitHub issues.

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { fetchIssue } from "./tools/fetch_issue.js";
import { readFile } from "./tools/read_file.js";
import { writeFile } from "./tools/write_file.js";

const server = new McpServer({
  name: "pipelineforge",
  version: "1.0.0",
});

// ------------------------------------------------------------------
// Tool: fetch_issue
// Retrieves a GitHub issue by number from the workshop repo.
// ------------------------------------------------------------------
server.tool(
  "fetch_issue",
  "Retrieve a GitHub issue by number. Returns the issue title and body.",
  { issue_number: z.number().int().positive().describe("The issue number to fetch") },
  fetchIssue
);

// ------------------------------------------------------------------
// Tool: read_file
// Reads a repo file relative to the project root.
// ------------------------------------------------------------------
server.tool(
  "read_file",
  "Read a file from the repository. Path is relative to the repo root.",
  { path: z.string().describe("Relative file path, e.g. 'pipelineforge/docs/pipeline.md'") },
  readFile
);

// ------------------------------------------------------------------
// Tool: write_file
// Writes content to a repo file relative to the project root.
// ------------------------------------------------------------------
server.tool(
  "write_file",
  "Write content to a file in the repository. Creates directories as needed.",
  {
    path: z.string().describe("Relative file path to write"),
    content: z.string().describe("Full file content to write"),
  },
  writeFile
);

// Connect over stdio (agents use type: stdio in mcpServers config)
const transport = new StdioServerTransport();
await server.connect(transport);
