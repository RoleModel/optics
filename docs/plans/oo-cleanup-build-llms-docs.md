# Plan: OO cleanup of `tools/build-llms-docs.mjs`

Follow-up pass on top of the [prior simplify pass](simplify-build-llms-docs.md), which
decomposed the file into named functions. This pass restructures those functions into
classes so the state each piece owns, and the exact process each class runs, are visible
at a glance — same hard constraint as before: **the generated output must be
byte-identical before and after.** Only the way the output is created changes.

## Target class structure

- **`WarningCollector`** — replaces the bare `warnings` array + `warn` closure.
  `add(file, message)`, exposes the list for the final console report. Passed by
  reference into the other classes below (constructor injection) so everything still
  warns through one collector, preserving today's warning order.
- **`TokenCatalog`** — wraps `parseTokenCategories` + `tokenTable`. Parses once in the
  constructor (`new TokenCatalog(TOKENS_DIR)`), exposes `table(categoryName, warnings)`.
- **`StoryRenderer`** — owns the JSDOM/global setup (constructor) and `render(storiesModule, storyName, file, warnings)`
  (today's `renderStory`). Must be constructed before any story module is dynamically
  imported — see Handoff notes.
- **`MdxPageConverter`** — one instance per `.mdx` file. Constructor takes
  `(file, tokenCatalog, storyRenderer, warnings)`. A single `convert()` method calls
  today's transform functions as named methods, in today's exact order, e.g.:

  ```js
  async convert() {
    this.text = fs.readFileSync(this.file, 'utf8')
    this.storyModules = await this.loadStoryModules()
    this.title = this.findTitle()
    if (!this.title) { this.warnings.add(this.file, 'could not determine title; skipped'); return null }

    this.stripImportsAndMeta()
    this.replaceSourceCodeLink()
    this.replaceAlertBlocks()
    await this.replaceCanvasBlocks()
    this.replaceControlsBlocks()
    this.replaceTokenDocBlocks()
    this.replaceColorPalette()
    this.rewriteStorybookLinks()
    this.replaceClassNameAttr()
    this.dropLeftoverJsx()

    return this.toPage()
  }
  ```

  Reading `convert()` top-to-bottom is the whole process — no need to open every
  method to know what happens and in what order.
- **`DocsBuilder`** — top-level orchestrator, owns `STORIES_DIR`/`OUT_DIR`, one
  `TokenCatalog`, one `StoryRenderer`, one `WarningCollector`. A single `run()` method
  calls named methods in sequence:

  ```js
  async run() {
    const pages = await this.renderPages()
    this.sortBySection(pages)
    this.writePages(pages)
    const indexLines = this.buildIndexLines(pages)
    this.writeIndex(indexLines)
    this.writeFullDoc(indexLines, pages)
    this.report(pages)
  }
  ```

  Invoked once at the bottom of the module: `await new DocsBuilder().run()`.

### What stays a plain function

Not everything becomes a class — only pieces with real state or a clear multi-step
process do. Stateless, pure helpers stay as module-level functions: `escapeCell`,
`markdownTable`, `storybookSlug`, `walk`, `replaceAsync`, and the `SECTION_ORDER`/
`sectionOf`/`sectionRank` helpers (used by, but not owned exclusively by, `DocsBuilder`).
Forcing these into classes would add ceremony without adding clarity — flag it in review
if a class-ification attempt does this.

## Phase 1 — Capture baseline

- [x] Run `yarn build-docs:llms`, copy `llms-docs/` to the scratchpad as
      `oo-baseline-llms-docs/` (fresh copy for *this* pass — don't reuse a previous
      session's scratchpad path).
- [x] Save console output as `oo-baseline-stdout.txt`.
- [x] (Determinism was already confirmed in the prior pass; no need to re-check unless
      this baseline looks different from that pass's final output.)

**Result:** 73 pages, no warnings — matches the prior pass's final state. Baseline saved
in scratchpad at `oo-baseline-llms-docs/` and `oo-baseline-stdout.txt`.

## Phase 2 — Restructure into classes

- [x] Introduce `WarningCollector`, `TokenCatalog`, `StoryRenderer`, `MdxPageConverter`,
      `DocsBuilder` per the target structure above.
- [x] Wire constructor injection for `warnings` (and `tokenCatalog`/`storyRenderer` where
      needed) instead of closing over module-level state.
- [x] Keep every transform method's logic byte-for-byte the same as today's function
      bodies — this pass changes *organization*, not the regexes/logic themselves.
- [x] Keep the existing explanatory comments (they document shape/why, not restructured
      by this pass) — move them to sit above the method they now describe.
- [x] Leave the stateless helpers listed above as plain functions.
- [x] Update this plan file after the step completes.

**Result:** Restructured per the target class structure. One deviation from the plan's
illustrative signature: `TokenCatalog#table` takes `(categoryName, file, warnings)` rather
than `(categoryName, warnings)` — the original `tokenTable` needed `file` to build the
warning message (`warnings.add(file, message)`), so dropping it would have broken warning
output. `extractDescription` stayed a plain module function (pure, no state) alongside
`storybookSlug`/`walk`/`replaceAsync`, since the plan didn't require it to become a method
and forcing it onto `MdxPageConverter` would add ceremony without clarity. Everything else
matches the plan's target structure and method-call order exactly.

## Phase 3 — Verify output is unchanged

- [x] Re-run `yarn build-docs:llms`.
- [x] **Primary check:** `diff -r oo-baseline-llms-docs/ llms-docs/` — must be empty.
- [x] Secondary check: compare console output against `oo-baseline-stdout.txt`.
- [x] Run `eslint` on the file — compare error count/lines against the 3 pre-existing
      `global`-related `no-undef` errors from the prior pass (see that plan's Phase 3) so
      no new lint errors are mistaken for pre-existing ones.
- [x] If any diff appears, fix the refactor (never the baseline) and re-verify.

**Result:** `diff -r` empty — byte-identical output (73 pages, no warnings, matches
baseline exactly). Console output matches baseline verbatim. `eslint` reports the same 3
pre-existing `no-undef` errors on `global` (same lines as the prior pass) — no new lint
errors introduced by the class restructure.

## Constraints

- No behavior changes: same files, same bytes, same warnings, same ordering.
- Pure refactor — no new dependencies, no output-format "improvements".
- Don't force stateless helpers into classes just to raise the class count.

## Handoff notes

- Work happens on the existing branch `simplify-llms-txt-generation`.
- Order-sensitive setup: `StoryRenderer`'s JSDOM/global setup must run — and complete —
  before any story module is dynamically imported. Since `MdxPageConverter.loadStoryModules()`
  does that import, `DocsBuilder` must construct its `StoryRenderer` instance before it
  constructs/runs the first `MdxPageConverter`. This is the same ordering constraint
  the prior pass's `setupDomGlobals()` preserved — moving it into a class constructor
  doesn't remove the constraint, it just changes where the "run first" guarantee lives
  (the `DocsBuilder` constructor, or the top of `run()`, before `renderPages()`).
- Output ordering is still load-bearing in the same three places as the prior pass: the
  sorted `walk()` file order (drives warning order), the section-rank + title sort of
  `pages`, and `Object.keys` insertion order in `TokenCatalog`'s parsing /
  `MdxPageConverter`'s controls-table building. Moving this logic into methods must not
  change iteration order.
- Prettier formatting options (`{ parser: 'html', printWidth: 110 }`) and version stay
  exactly as-is — no dependency changes.
- `register('./llms-resolve-hooks.mjs', ...)` still needs to run at true module-load
  time, before any dynamic `import()` — it isn't part of any class, and shouldn't
  become one.
- Scratchpad baseline paths are session-specific; capture the baseline in the executing
  session (Phase 1), don't reuse the prior pass's scratchpad path.
