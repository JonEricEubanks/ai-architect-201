# 00 · Environment Setup

**Time: ~15 minutes**

## Prerequisites

- Completed **AI Teammate 101** (or equivalent experience delegating to Copilot)
- GitHub account with an active Copilot license
- Node.js 18+ installed locally

## Step 1 — Create your copy

1. Go to [github.com/JonEricEubanks/ai-architect-201](https://github.com/JonEricEubanks/ai-architect-201)
2. Click **Use this template → Create a new repository**
3. Name it whatever you like — `ai-architect-201` works fine
4. Set visibility to **Public** (required for free CodeQL and GitHub Pages)
5. Click **Create repository**

## Step 2 — Enable GitHub Pages

1. In your new repo: **Settings → Pages**
2. Source: **Deploy from a branch** → branch: `main`, folder: `/ (root)`
3. Click **Save**

Your workshop site will be live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

## Step 3 — Enable GitHub Actions for Copilot PRs

1. **Settings → Actions → General**
2. Under "Fork pull request workflows from outside collaborators" select **"Require approval for first-time contributors who are new to GitHub"**
3. Click **Save**

This prevents the workflow approval gate from blocking every Copilot PR.

## Step 4 — Clone locally

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

## ✅ You're ready

Move on to [Module 01 →](../modules/01-mcp-foundations/README.md)
