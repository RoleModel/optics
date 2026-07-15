# Plan: Simplify `tools/build-llms-docs.mjs`

Refactor the llms-docs build script for readability and lower complexity, with a hard constraint: **the generated output must be byte-identical before and after**. Only the way the output is created changes.

## Phase 1 — Capture baseline

The tool's output is the generated `llms-docs/` directory (`llms.txt`, `llms-full.txt`, `llms/<slug>.md`); that directory is the baseline.

- [ ] Run the tool: `yarn build-docs:llms`.
- [ ] Confirm the tool is deterministic: run it a second time and `diff -r` the two outputs. If they differ, stop — a byte-identical comparison can't work until the nondeterminism is understood.
- [ ] Copy the generated `llms-docs/` directory to the scratchpad as `baseline-llms-docs/` (it is git-ignored, so git can't serve as the baseline).
- [ ] Also save the tool's console output (page count + warnings list) as `baseline-stdout.txt` — a secondary sanity check only.

## Phase 2 — Simplify

- [ ] Run `/simplify` targeting `tools/build-llms-docs.mjs`, focusing on:
  - Intention-revealing names for regex-heavy transforms and intermediate values.
  - Decomposing `convertMdx` (~130 lines of sequential replacements) into small named transform functions (e.g. source-code-link replacement, alert-to-blockquote, canvas-to-html-block, controls table, token table, link rewriting, leftover-JSX cleanup, description extraction).
  - Extracting the top-level build section into named steps (render pages → sort by section → write per-page files → write `llms.txt` index → write `llms-full.txt`).
  - Isolating the JSDOM/global setup into its own function.
  - Reducing nesting/complexity anywhere a name or early return makes intent clearer.
- [ ] Keep the existing explanatory comments that show example output — they document *why/what shape*, which the code can't.
- [ ] Update this plan file after the step completes.

## Phase 3 — Verify output is unchanged

- [ ] Re-run `yarn build-docs:llms`.
- [ ] **Primary check:** `diff -r baseline-llms-docs/ llms-docs/` — must be empty (byte-identical).
- [ ] Secondary check: compare console output against `baseline-stdout.txt` (same page count and warnings).
- [ ] Run `eslint` on the file.
- [ ] If any diff appears, fix the refactor (never the baseline) and re-verify.

## Constraints

- No behavior changes: same files, same bytes, same warnings, same ordering.
- Pure refactor — no new dependencies, no output-format "improvements".

## Handoff notes

- Work happens on the existing branch `simplify-llms-txt-generation` (clean at plan time).
- `/simplify` reviews the working diff, which is clean — invoke it with the file path as its argument (`/simplify tools/build-llms-docs.mjs`) so it targets the file, not a diff.
- Order-sensitive setup at the top of the script: `register('./llms-resolve-hooks.mjs', ...)` and the JSDOM global assignments (`window`, `document`, `HTMLElement`, the `innerText` shim) must all run **before** any story module is dynamically imported. If extracted into functions, they must still execute first — moving them later breaks story rendering.
- Output ordering is load-bearing in three places: the sorted `walk()` file order (drives warning order), the section-rank + title sort of `pages`, and `Object.keys` insertion order in `parseTokenCategories`/`controlsTable`. A refactor that changes any iteration order changes bytes.
- Prettier formatting of rendered story HTML uses `{ parser: 'html', printWidth: 110 }` — keep it, and keep the same prettier version (no dependency changes).
- The warn/fallback branches in `renderStory` and `convertMdx` may be exercised by real stories — the baseline console output (Phase 1) shows which fire. Don't remove a branch because it looks dead; check the baseline warnings first.
- Scratchpad baseline paths are session-specific; capture the baseline in the executing session (Phase 1), don't reuse paths from a previous one.
