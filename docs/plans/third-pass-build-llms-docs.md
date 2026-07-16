# Plan: Third cleanup pass of `tools/build-llms-docs.mjs`

Follow-up pass on top of the [simplify pass](simplify-build-llms-docs.md) and the
[OO cleanup pass](oo-cleanup-build-llms-docs.md). Another `/simplify` run (reuse,
simplification, efficiency, altitude reviews in parallel) against the class-based file —
same hard constraint: **the generated output must be byte-identical before and after.**

## Phase 1 — Capture baseline

- [x] Run `yarn build-docs:llms`, copy `llms-docs/` to the scratchpad as
      `pass3-baseline-llms-docs/`, save console output as `pass3-baseline-stdout.txt`.

**Result:** 73 pages, no warnings — matches the prior pass's final state.

## Phase 2 — Review and apply

- [x] Run 4 parallel `/simplify` review agents (reuse, simplification, efficiency,
      altitude) against the file, each briefed on the byte-identical constraint and the
      prior passes' already-rejected ideas.
- [x] Dedup and apply the surviving findings.

**Applied:**

- **Resolve-hook altitude fix** — `loadStoryModules`' `if (!fs.existsSync(modulePath))
  modulePath += '.js'` re-implemented the extensionless-import rule that
  `tools/llms-resolve-hooks.mjs` already generalizes (the hook just didn't fire for the
  converter's absolute `file:` URLs). Widened the hook's guard to cover extensionless
  `file:` specifiers and deleted the `existsSync` special case, so the resolution rule
  lives in one place.
- **`TokenCatalog.table(categoryName)` de-threading** (flagged by both simplification and
  altitude) — the catalog no longer takes the referencing page's `file` and the warning
  collector; it returns the table or `null`, and `replaceTokenDocBlocks` owns the warning
  and the `_No tokens found..._` fallback prose. Same warning text/order (single call site).
- **Shared `resolveStory(storiesModule, storyName)` helper** — the story-module
  interpretation (`default` meta, story lookup, `{ ...meta.args, ...story.args }` merge)
  was duplicated between `StoryRenderer.render` and `controlsTable`; both now call one
  module-level helper.
- **Explicit `document` dependency** — `replaceAlertBlocks` used the bare global
  `document` that `StoryRenderer`'s constructor happens to install, a hidden ordering
  dependency. `StoryRenderer` now exposes `this.document` and the converter uses
  `this.storyRenderer.document` (the injected dependency it already has).
- **Dropped `DocsBuilder`'s `storiesDir`/`outDir` fields** — redundant aliases of the
  `STORIES_DIR`/`OUT_DIR` module constants; use sites reference the constants directly.
- **Dropped dead `return pages` from `sortBySection`** — the caller relies on in-place
  mutation; the return value misleadingly suggested a non-mutating API.
- **`storybookSlug` replaced with Storybook's own `sanitize`** (reuse) — imported from
  `storybook/internal/csf` (already a devDependency; loads in plain Node). The hand-rolled
  function only approximated Storybook's slugs; verified identical over all current page
  titles, and `sanitize` stays correct for titles (e.g. non-ASCII) where the approximation
  would drift from the real docs-site URLs.

**Skipped:**

- Efficiency review returned no findings above the cost/benefit bar (one-shot build
  script; the only real duplicate work — `indexLines.join('\n')` computed twice — saves
  microseconds at the cost of worse method signatures).
- ColorPalette replacement hardcoding the `scale_color_tokens.css` link (single-page
  knowledge in a global transform) — low confidence, fix space is speculative; noted as a
  known trade-off.
- `SECTION_ORDER` duplicating `.storybook/preview.js`'s `storySort.order`, and
  `SOURCE_URL` duplicating the literal in `src/stories/helpers/sourceCodeLink.js` —
  drift risks, but no importable shared source exists (preview.js needs the browser
  runtime); fixing means new shared-constants modules, out of scope for a pure refactor.

## Phase 2b — TokenCatalog readability rework (user-directed)

- [x] `TokenCatalog`'s constructor was one nested parsing blob with inline regexes and an
      undocumented `categories` shape. Reworked: the three regexes are named module
      constants (`DOC_COMMENT_OPENER`, `TOKEN_CATEGORY_ANNOTATION`,
      `CUSTOM_PROPERTY_DECLARATION`), the `categories` class field documents its shape at
      the declaration, and parsing is decomposed into `parseTokenCss(css)` (doc-comment
      segmentation) and `addTokens(category, declarations)` (declaration matching +
      cross-comment append), leaving the constructor as file iteration only. Re-verified
      byte-identical after the change.

- [x] Introduced the `Token` value object the catalog's structure was implying: it owns
      its name, the whitespace normalization of its value (previously done inline at
      parse time), and its own `markdownRow()` rendering (previously inlined in
      `table()`). `categories` is now documented as `category name -> Token[]`.
      Re-verified byte-identical.

## Phase 2c — Class-by-class readability pass (user-directed)

Applied the same lens as the `TokenCatalog` rework to every other class:

- [x] **Hidden objects surfaced:** `Page` value object (was an anonymous literal from
      `toPage()` that `DocsBuilder` mutated `.section` onto and formatted index/full-doc
      entries from) — now owns slug/section/description plus `indexEntry()` and
      `fullDocEntry()`. Dropped the literal's unused `file` field. `packageVersion()`
      names the package.json read hidden in `buildIndexLines`; `WarningCollector.report()`
      owns warning output instead of `DocsBuilder` reaching into `.list`.
- [x] **Named regexes:** every pattern is a `static` field on the class that uses it
      (user-directed follow-up: class statics rather than module constants, so patterns
      are organized with their consumers) — 16 on `MdxPageConverter`
      (`STORY_MODULE_IMPORT`, `META_BLOCK`, `ALERT_BLOCK`, `CANVAS_BLOCK`,
      `TOKEN_DOC_BLOCK`, `UNHANDLED_JSX_BLOCK`, `EXCESS_BLANK_LINES`, ...), 3 on
      `TokenCatalog` (`DOC_COMMENT_OPENER`, `TOKEN_CATEGORY_ANNOTATION`,
      `CUSTOM_PROPERTY_DECLARATION`), and `UNDEFINED_MODIFIER_CLASS` + `PRETTIER_HTML`
      on `StoryRenderer`.
- [x] **No work in initializers:** `StoryRenderer`'s JSDOM/global setup moved from its
      constructor to an explicit `installDomGlobals()` called at the top of
      `DocsBuilder.run()` (ordering is now a visible call, not a construction
      side-effect); `innerText` shim extracted to `shimInnerText(window)`.
      `DocsBuilder`'s constructor is wiring-only.
- [x] **Nested callbacks decomposed:** alert conversion split into `alertBlockquote()` +
      `blockquoteText()`; canvas conversion into `canvasCodeBlock()`; prettier fallback
      into `StoryRenderer.prettyPrint()`; `buildIndexLines` header extracted to
      `indexHeader()`; `sortBySection`'s mutation loop gone (Page computes its section).
- [x] Updated `tools/build-llms-docs.md` diagrams (Page class, installDomGlobals
      ordering, warnings.report(), named-regex note).
- [x] Re-verified byte-identical (diff + stdout), same 3 pre-existing lint errors.

## Phase 2d — Final `/simplify` re-run

- [x] Re-ran the 4-angle review against the reworked file. Reuse and efficiency came
      back clean (the efficiency agent explicitly verified the shared static `/g`
      regexes are hazard-free: `replace` resets `lastIndex`, `matchAll` iterates a
      clone, no `.exec()`/`.test()` on shared globals).
- [x] Applied: `StoryRenderer.render(storiesModule, storyName)` no longer takes
      `(file, warnings)` — it returns `{ html }` or `{ failure }` and
      `canvasCodeBlock` records the failure against its own file (same warning text
      and order); `installDomGlobals` unified to one assignment loop including
      `window`/`document` (drops the pre-existing eslint `no-undef` errors from 3 to
      1); `walk` renamed `mdxFiles` (the generic name hid the `.mdx` filter); unused
      `whole` replacer param renamed `_` for consistency.
- [x] Skipped: dropping `StoryRenderer.document`/moving DOM install to module level —
      re-litigates the deliberate explicit-dependency design from Phase 2c.
- [x] Re-verified byte-identical (diff + stdout).

## Phase 2e — JSDoc conversion (user-directed)

- [x] Converted the prose comments to typed JSDoc across every class and helper:
      `@param`/`@returns` on all methods and functions, `@type` on class fields
      (`WarningCollector.list`, `TokenCatalog.categories`), and a `StoriesModule`
      typedef for the story-module shape threaded through
      `resolveStory`/`StoryRenderer.render`/`controlsTable`/`loadStoryModules`.
      Example-output snippets kept, folded into the relevant JSDoc blocks (the
      token-CSS example's inner comment terminators escaped as `*\/`). Also
      preserved an external edit: `TokenCatalog` now reads `TOKENS_DIR` directly
      (no-arg constructor).
- [x] Re-verified byte-identical (diff + stdout); eslint unchanged (1 pre-existing
      `global` error).

## Phase 3 — Verify output is unchanged

- [x] Re-run `yarn build-docs:llms`; `diff -r pass3-baseline-llms-docs/ llms-docs/` empty.
- [x] Console output matches `pass3-baseline-stdout.txt` verbatim.
- [x] `eslint` on both files: same 3 pre-existing `no-undef` errors on `global`
      (same lines as prior passes), no new errors; the hook file is clean.

## Constraints

- No behavior changes: same files, same bytes, same warnings, same ordering. (The
  `sanitize` swap is byte-identical for every current title; it changes only what a
  hypothetical future non-ASCII title would slug to — matching the real docs-site URL.)
- No new dependencies (`storybook` was already a devDependency).
