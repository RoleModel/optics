---
name: wrap-up
description: End-of-session skill that updates project instructions (AGENTS.md) and captures learnings. Use when finishing a work session or when the user says they're done, want to wrap up, close out, save progress, end the session, or "that's it for today."
allowed-tools: Read, Write, Edit, Glob
compatibility: Designed for Claude Code (or similar products)
metadata:
  author: rolemodel
  version: "1.0"
  triggers: "wrap up, wrap-up, wrap-up session, end session, save progress, that's it for today, close out"
license: MIT
---

# Wrap Up Session

Perform the following steps to close out the current session. Do each step in order.

## Step 1: Update AGENTS.md

Review the full conversation for any learnings, decisions, or context that should persist in the project instructions. Look for:
- New conventions or patterns established
- Workflow preferences expressed by the user
- Technical decisions made
- Any corrections to existing instructions

**What NOT to add to AGENTS.md:**
- Individual file paths or file inventories -- files move, and the agent can find them with Glob/Grep. Describe directory purposes and conventions instead.
- Information the agent can discover from the code, git history, or config files
- Anything that duplicates what linters, formatters, or config files already enforce
- Granular per-file descriptions -- if a directory's purpose is clear, individual files don't need entries

Keep AGENTS.md focused on actionable guidance: conventions, decisions, workflows, and gotchas. Aim for under 150 lines.

If `AGENTS.md` already exists, read it and edit it with any updates. If no updates are needed, say so and move on.

If `AGENTS.md` does not exist yet, create it. Draw the content from whatever is available: an existing `CLAUDE.md`, anything the user has described about the project structure and purpose during the conversation, or both. The goal is a complete, accurate set of project instructions an AI assistant would need to work effectively in this codebase.

After updating `AGENTS.md`, ensure `CLAUDE.md` exists and contains `@AGENTS.md` as its only content (so Claude Code sources the shared file). If `CLAUDE.md` already contains `@AGENTS.md`, leave it alone. Otherwise create or replace it — this is intentional migration of the instructions to `AGENTS.md` as the single source of truth.

## Step 2: Confirm completion

Summarize what was updated:
- What changed in `AGENTS.md` (or that no changes were needed)
