// read_file — reads a file from the repository root
import { readFile as fsReadFile } from "fs/promises";
import { resolve } from "path";
import { fileURLToPath } from "url";

const REPO_ROOT = resolve(fileURLToPath(import.meta.url), "../../../../");

export async function readFile({ path: relativePath }) {
  const absolute = resolve(REPO_ROOT, relativePath);

  // Prevent path traversal above the repo root
  if (!absolute.startsWith(REPO_ROOT)) {
    throw new Error(`Access denied: '${relativePath}' resolves outside the repo root.`);
  }

  const text = await fsReadFile(absolute, "utf-8");
  return { content: [{ type: "text", text }] };
}
