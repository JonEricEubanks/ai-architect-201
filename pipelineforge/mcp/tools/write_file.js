// write_file — writes a file to the repository root
import { writeFile as fsWriteFile, mkdir } from "fs/promises";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const REPO_ROOT = resolve(fileURLToPath(import.meta.url), "../../../../");

export async function writeFile({ path: relativePath, content }) {
  const absolute = resolve(REPO_ROOT, relativePath);

  // Prevent path traversal above the repo root
  if (!absolute.startsWith(REPO_ROOT)) {
    throw new Error(`Access denied: '${relativePath}' resolves outside the repo root.`);
  }

  await mkdir(dirname(absolute), { recursive: true });
  await fsWriteFile(absolute, content, "utf-8");

  return { content: [{ type: "text", text: `Written: ${relativePath}` }] };
}
