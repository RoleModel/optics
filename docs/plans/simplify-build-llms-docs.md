# Plan: Simplify `tools/build-llms-docs.mjs`

Refactor the llms-docs build script for readability and lower complexity, with a hard constraint: **the generated output must be byte-identical before and after**. Only the way the output is created changes.

## Phase 1 — Capture baseline

The tool's output is the generated `llms-docs/` directory (`llms.txt`, `llms-full.txt`, `llms/<slug>.md`); that directory is the baseline.

- [x] Run the tool: `yarn build-docs:llms`.
- [x] Confirm the tool is deterministic: run it a second time and `diff -r` the two outputs. If they differ, stop — a byte-identical comparison can't work until the nondeterminism is understood.
- [x] Copy the generated `llms-docs/` directory to the scratchpad as `baseline-llms-docs/` (it is git-ignored, so git can't serve as the baseline).
- [x] Also save the tool's console output (page count + warnings list) as `baseline-stdout.txt` — a secondary sanity check only.

**Result:** 73 pages, no warnings. Two consecutive runs diffed identical — build is deterministic. Baseline saved in scratchpad at `baseline-llms-docs/` and `baseline-stdout.txt`.

## Phase 2 — Simplify

- [x] Run `/simplify` targeting `tools/build-llms-docs.mjs`, focusing on:
  - Intention-revealing names for regex-heavy transforms and intermediate values.
  - Decomposing `convertMdx` (~130 lines of sequential replacements) into small named transform functions (e.g. source-code-link replacement, alert-to-blockquote, canvas-to-html-block, controls table, token table, link rewriting, leftover-JSX cleanup, description extraction).
  - Extracting the top-level build section into named steps (render pages → sort by section → write per-page files → write `llms.txt` index → write `llms-full.txt`).
  - Isolating the JSDOM/global setup into its own function.
  - Reducing nesting/complexity anywhere a name or early return makes intent clearer.
- [x] Keep the existing explanatory comments that show example output — they document *why/what shape*, which the code can't.
- [x] Update this plan file after the step completes.

**Result:** Ran 4 parallel `/simplify` review agents (reuse, simplification, efficiency, altitude) against the whole file (working tree was clean, so the file itself was the review target). Applied:
- `setupDomGlobals()` extracted, called immediately (preserves before-any-import ordering).
- `convertMdx` decomposed into named transforms: `loadStoryModules`, `findTitle`, `stripImportsAndMeta`, `replaceSourceCodeLink`, `replaceAlertBlocks`, `replaceCanvasBlocks`, `replaceControlsBlocks`, `replaceTokenDocBlocks`, `replaceColorPalette`, `rewriteStorybookLinks`, `replaceClassNameAttr`, `dropLeftoverJsx`, `extractDescription` — applied in the original sequence.
- Build section decomposed into `renderPages`, `sortBySection`, `writePages`, `buildIndexLines`, `writeIndex`, `writeFullDoc`.
- Shared `markdownTable(headers, rows)` helper for `tokenTable`/`controlsTable` (reuse finding).
- `sectionOf` hoisted onto `page.section` once instead of recomputed per sort-comparison and per index-loop iteration (simplification finding, order-preserving since `sectionOf` is pure).
- Story-module dynamic imports in `loadStoryModules` run via `Promise.all` instead of a sequential `await`-in-loop (efficiency finding; safe since `storyModules` is a keyed lookup with no order/warning dependency).

Skipped (risk to the byte-identical constraint or out of scope):
- Unifying `createSourceCodeLink`/`createAlert` regexes into one dispatch mechanism — the two regexes tolerate subtly different trailing syntax; unifying them risks changing matched spans.
- Broadening the leftover-JSX warning to also catch open/close tag pairs — would change what's warned/dropped today, a behavior change.
- Switching `walk()` to `fs.readdirSync(..., { recursive: true })` and importing `package.json` via `with { type: 'json' }` — valid modernizations but not requested by the plan and added risk for no readability gain proportional to the risk.
- Parallelizing `<Canvas>` story rendering across a page — would scramble per-page warning order (load-bearing).

## Phase 3 — Verify output is unchanged

- [x] Re-run `yarn build-docs:llms`.
- [x] **Primary check:** `diff -r baseline-llms-docs/ llms-docs/` — must be empty (byte-identical).
- [x] Secondary check: compare console output against `baseline-stdout.txt` (same page count and warnings).
- [x] Run `eslint` on the file.
- [x] If any diff appears, fix the refactor (never the baseline) and re-verify.

**Result:** `diff -r` empty — byte-identical output (73 pages, no warnings, matches baseline exactly). Console output matches baseline verbatim. `eslint` reports the same 3 pre-existing `no-undef` errors on `global` (confirmed identical on the pre-refactor file via `git stash`) — not introduced by this refactor, left as-is.

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
