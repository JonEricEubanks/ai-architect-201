# Capstone: Architect a Pipeline Solo

**Time: ~45 minutes**

No guided steps. You're the architect. Design and ship a complete multi-agent pipeline improvement — start to finish.

## The assignment

Ship **one meaningful improvement** to the PipelineForge pipeline, end to end:

1. **Identify a real gap** — a missing stage, a broken handoff, a policy that's too permissive, or a failure mode with no detection. Find it yourself.
2. **Write the full design spec** — as a GitHub issue, with enough precision that Copilot can implement it without guessing.
3. **Delegate it** — assign to Copilot, watch the session, review the PR with your rubric.
4. **Verify end to end** — run the full pipeline after merging and confirm nothing regressed.

## The rules

- You may not edit application code directly
- The design issue must exist before the implementation issue
- At least one review round with `@copilot` feedback
- Full pipeline must pass after merge

## The deliverable: a pipeline retro

When the PR is merged, create `PIPELINE-RETRO.md` in the repo root. Navigate to your repo's **Code** tab → confirm you're at the root → **Add file → Create new file** → type `PIPELINE-RETRO.md` → fill in the template → **Commit changes**.

> **How to link to a PR:** copy the URL from your browser address bar and paste it where it says `<link to PR>`.

```markdown
# PipelineForge retro

## What I shipped
<link to PR> — merged after <n> review rounds

## The gap I found
What was broken or missing, and how did you identify it?

## Design decisions
What tradeoffs did you make in the spec? What did you leave out on purpose?

## What Copilot got right
What did it implement better than you expected?

## What Copilot got wrong
What did you catch in review that would have broken the pipeline?

## My governance instinct going forward
For multi-agent systems, I will always ______ and never ______.
```

<details><summary><strong>See a finished example</strong></summary>

```markdown
# PipelineForge retro

## What I shipped
https://github.com/example/ai-architect-201/pull/7 — merged after 2 review rounds

## The gap I found
The reviewer agent had write access to the entire repo. I found it while
auditing the trust boundaries in Module 03 — the policy file was copied
from the publisher without being scoped down.

## Design decisions
I restricted write access to `output/review/` only. I considered also
restricting read access but decided the reviewer needs to read the full
draft to do its job properly.

## What Copilot got right
It updated the agent policy file correctly and added a test that verifies
the write restriction is enforced.

## What Copilot got wrong
It didn't update the orchestrator's dispatch logic to pass the correct
input path after the scope change — I caught it in review.

## My governance instinct going forward
For multi-agent systems, I will always document trust boundaries before
implementation and never give an agent broader access than its stated role requires.
```

</details>

> ⚠️ **Your scorecard won't update until you approve the progress bot workflow.** After committing `PIPELINE-RETRO.md`, go to **Actions** → click the pending **Workshop Progress Bot** run → click **Approve and run**.

## 🎉 You're done

You've designed, delegated, governed, debugged, and shipped a multi-agent pipeline. That's a different skill level than Module 1.

**What's next:** apply this to a real problem in your own codebase — or watch for AI Architect 301 (agent networks, cross-repo orchestration, and production observability).
