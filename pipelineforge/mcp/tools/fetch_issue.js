// fetch_issue — retrieves a GitHub issue from the workshop repo
//
// Reads GITHUB_TOKEN and GITHUB_REPOSITORY from the environment so
// students don't have to hardcode credentials anywhere in the codebase.

export async function fetchIssue({ issue_number }) {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;

  if (!repository) {
    throw new Error(
      "GITHUB_REPOSITORY env var is not set. Set it to 'owner/repo' of your workshop copy."
    );
  }

  const url = `https://api.github.com/repos/${repository}/issues/${issue_number}`;
  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "pipelineforge-mcp/1.0",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(url, { headers });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API responded ${res.status}: ${body}`);
  }

  const issue = await res.json();

  const text = [
    `# Issue #${issue.number}: ${issue.title}`,
    `**State:** ${issue.state}`,
    issue.body ?? "(no body)",
  ].join("\n\n");

  return { content: [{ type: "text", text }] };
}
