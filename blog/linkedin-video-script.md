# 🎬 LinkedIn Video Demo Script — "Watch Four AI Agents Pass Work to Each Other"

**Target length:** 2:30–3:00 · **Format:** screen recording + voiceover
**Recording prep:** fresh workshop copy with all six seeded issues created, run the pipeline for issue #1 ahead of time so the output files exist — don't record the waiting. Stage all tabs.

---

## Cold open (0:00–0:15) — on camera or title card

> "I just built a pipeline where four AI agents pass work to each other, each one only allowed to touch what its job description says. Nobody touches application code. I'm just the architect. Let me show you."

**B-roll:** fast montage — orchestrator session log dispatching → researcher commits notes → drafter commits draft → publisher writes to `output/`.

## Beat 1 — The context (0:15–0:35)

> "In AI Teammate 101, you learn to delegate one task to one agent. Great skill. But the real shift is when you have *systems* of agents — pipelines where specialist agents hand work to each other, constrained by governance policies. That's **AI Architect 201**."

**Show:** the README pipeline diagram. Scroll slowly through it. Land on the module map.

## Beat 2 — The infrastructure (0:35–1:10)

> "Every agent in this workshop has a job description — a markdown file in `.github/agents/`. The researcher can fetch issues and read files. The publisher can *only* write to `output/`. That constraint isn't a comment in the code. It's enforced."

**Show (live or recorded):**
1. `researcher.md` — the tools block (5s)
2. `publisher.md` — the tools block: `write_file` scoped to `output/` (5s, this is the key moment — linger on it)
3. The rejection: assign the publisher a task that tries to write outside `output/` — watch the session log refuse it

## Beat 3 — The pipeline run (1:10–1:50)

> "Here's what orchestrating a four-agent pipeline actually looks like. One issue, four specialists, four committed files, zero lines of application code written by me."

**Show:**
1. The seeded issue body (3s)
2. Dispatching the orchestrator
3. `research_notes.md` appearing in the repo
4. `draft.md` appearing
5. `review_comments.md` appearing
6. `output/published.md` appearing
7. Linger on the final output — "That's four agents handing off to each other. I reviewed the commits. That's my job now."

## Beat 4 — The observability hook (1:50–2:20)

> "Here's my favorite part. I introduced a bug — three lines that made `fetch_issue` return an empty string for any issue number over 5. The pipeline 'succeeded.' Four files were committed. All wrong. This is why you need to trace session logs, not just check that files exist."

**Show:** the broken drafter output (plausible-looking but completely fabricated) + the session log showing the empty tool response + the root-cause line.

> "Four agents means four places to look. The framework: bad input, scope violation, hallucinated handoff, silent truncation. You'll learn all four in Module 04."

## Beat 5 — The close (2:20–2:45) — back on camera

> "This is free, open source, and runs on your own Copilot license. It's the direct sequel to AI Teammate 101 — same repo template, same auto-graded certificate, but now you're designing the system, not just delegating the task. Link below."

**End card:** repo URL + `#AIArchitect201`

---

## Production checklist

- [ ] Record at 1080p; GitHub UI at 110% zoom
- [ ] The publisher rejection and the silent-truncation failure are your two "rewatch" moments — don't rush them
- [ ] Show the four committed files appearing in sequence — the visual of "agents handing off" is the emotional payoff
- [ ] Post natively to LinkedIn
- [ ] Caption text: hook line + 3 bullets + repo link + `#GitHubCopilot #MultiAgent #AIArchitect201`

## Companion text post (paste-ready)

> The next step after "delegating tasks to an AI" is "designing systems of AI agents."
>
> 🔌 You wire four specialist agents to an MCP server
> 📋 Each agent has a governance policy in version control
> 🔍 You trace a deliberately broken pipeline to its root cause
> 🏆 Auto-graded certificate — same format as AI Teammate 101
>
> Free, open source, your own Copilot license.
> The sequel: github.com/JonEricEubanks/ai-architect-201
