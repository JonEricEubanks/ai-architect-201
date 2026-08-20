# Blog Series: "I Stopped Being a Developer and Started Being an Architect"

Three posts derived from the workshop. Each stands alone; each links the repo; each positions this as the natural sequel to AI Teammate 101. Target: dev.to + personal blog (canonical link). Cross-post to LinkedIn as summaries.

**Series-wide voice rules:**
- First-person, practitioner, zero marketing speak. "Here's what I built, here's where I got it wrong, here's why it matters."
- Every post opens with a concrete decision, not a definition.
- Every post ends with the same CTA: *"Run the workshop yourself: [repo link] — it's the next step after AI Teammate 101."*
- Screenshots are your own, from your own workshop run.

---

## Post 1 — "I wired an AI agent to a tool it had never heard of, and watched it figure out the rest"

**Maps to:** Module 01 · **Target length:** 1,100–1,400 words

**Hook:** A screenshot of the session log the moment `fetch_issue` was called. "The agent didn't know what GitHub was. It just knew it had a tool called `fetch_issue`. That's the whole idea."

**Outline:**
1. The problem with "just use Copilot": agents are blind to anything outside their context window unless you explicitly hand them a tool
2. What MCP actually is — the power-strip metaphor: one agent, many outlets, the agent stays clean
3. Wiring it up: three fields in a markdown file (mcpServers block), a `node` process, and the agent suddenly has a new capability
4. The session log read: what the tool call looked like, what the response looked like, what the agent *did* with it
5. The conceptual shift: you're not configuring autocomplete anymore — you're designing what an agent is allowed to know
6. CTA + teaser for post 2

**Screenshot wishlist:** the mcpServers block in researcher.md, the fetch_issue call in the session log, the resulting research_notes.md.

---

## Post 2 — "I built a four-agent pipeline. The orchestrator was the hardest agent to write."

**Maps to:** Modules 02–03 · **Target length:** 1,300–1,600 words

**Hook:** "The specialist agents were easy. Researcher reads a GitHub issue. Drafter turns notes into prose. Publisher writes to `output/`. The orchestrator had to decide when to stop — and that was the hard part."

**Outline:**
1. Why orchestration is a design problem, not a coding problem: handoff contracts, failure isolation, "who owns what"
2. The four-stage pipeline: drawing it before writing it (the actual diagram from pipeline.md)
3. The governance insight: every agent has a job description in version control now — it's not "use the AI," it's "this agent can read files; this one can only write to `output/`"
4. The moment I got it wrong: why "dispatcher" agents end up too broad unless you enforce narrow mandates upfront
5. Testing the constraint: assign the publisher a task that tries to write outside `output/` — watching it get rejected
6. CTA + teaser for post 3

**Screenshot wishlist:** pipeline diagram, the publisher's tools block before and after the governance lab, the rejection in the session log.

---

## Post 3 — "I introduced a bug into my own pipeline on purpose. Here's how I found it."

**Maps to:** Module 04 + Capstone · **Target length:** 1,400–1,700 words

**Hook:** "I changed three lines in `fetch_issue.js`: if the issue number was greater than 5, return an empty string instead of the issue body. Then I ran the pipeline for issue #6. The researcher succeeded. The drafter produced 400 words about nothing. The reviewer approved it. The pipeline 'worked.' That's the thing about observability — you don't know you need it until the wrong thing succeeds silently."

**Outline:**
1. The failure I designed: what I changed, what I expected to happen vs. what actually happened
2. Tracing a multi-agent failure: you have four session logs — which one to start with?
3. The four failure signatures (bad input, scope violation, hallucinated handoff, silent truncation) — the framework I use now before reading a single log line
4. Finding it: the exact moment in the researcher's session log where the wrong output was produced
5. The fix and the verify: reverting the bug isn't enough — you need to confirm the root cause, not just that the pipeline runs again
6. The capstone: what I shipped as my architecture addition (the summarizer stage), why I designed it the way I did, and what Copilot built wrong on the first PR
7. CTA + full series wrap

**Screenshot wishlist:** the three-line bug, the downstream drafter producing plausible-sounding garbage, the session log showing the empty tool response, the root-cause line.

---

## Distribution checklist (per post)

- [ ] Publish on dev.to (tags: githubcopilot, ai, github, multiagent) + personal blog with canonical URL
- [ ] LinkedIn summary post with the strongest screenshot
- [ ] Link the specific workshop module, not just the repo root
- [ ] Note the "sequel to AI Teammate 101" angle in every post header
- [ ] Record view counts + repo traffic (Insights → Traffic) weekly for evidence
