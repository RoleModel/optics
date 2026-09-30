---
name: github-release
description: Draft, write, and publish an Optics release on GitHub — checks the version bump, resolves the previous tag, generates notes from the release.yml categories, adds a plain-language line under each PR, and publishes, which ships the package to npm and GitHub Packages and redeploys the docs site. Use this whenever the user mentions cutting a release, bumping the version, drafting or writing release notes, publishing to npm, "what's going out", or updating the CHANGELOG for a release — even if they don't say the words "release notes".
---

# Optics Release

Adapted from the `github-release` skill in RoleModel/bgea_volunteer_care.

A release is two steps, with a person in between:

1. **Draft** — check the version, write the notes, save an unpublished draft.
2. **Publish** — only once the user says go. Publishing ships the package.

Keep them apart. Publishing a release fires `deploy-to-npm.yml` and `deploy-to-ghp.yml`, which
publish `@rolemodel/optics` to npm and GitHub Packages. An npm version number can never be
reused, so a mistake means another release.

|          |                                                                 |
| -------- | --------------------------------------------------------------- |
| Tag      | `v2.5.0` (semver, lowercase `v`)                                |
| Title    | Same as the tag                                                 |
| Baseline | The latest published release                                    |
| Ships    | The tip of `main`                                               |
| Notes    | The categories in `.github/release.yml`, one line under each PR |

---

## Phase 1 — Draft

### 1. Check the version bump is on main

The version is bumped in a pull request, not at release time. Before drafting, `main` must have:

- `package.json` `"version"` set to the new number
- The three `.storybook/assets/*.html` example pages pointing at the new CDN version
- A `## [X.Y.Z] - YYYY-MM-DD` section at the top of `CHANGELOG.md`

```bash
git fetch origin --tags
git show origin/main:package.json | grep '"version"'
grep -o 'optics@[0-9.]*' .storybook/assets/*.html
gh release list --limit 3
```

If the version on `main` is not higher than the latest release, stop. Offer to open the bump PR
instead. Pick the number from what changed: breaking changes are a major bump, anything new is a
minor bump, and fixes only are a patch.

### 2. Get the change list

```bash
gh api repos/RoleModel/optics/releases/generate-notes \
  -f tag_name=v<new> -f target_commitish=main -f previous_tag_name=<latest release tag> \
  --jq .body
```

GitHub sorts PRs into the `.github/release.yml` categories by label. Act on:

- **Unlabeled Changes (please categorize these)** — label each PR on GitHub, then generate again.
  Don't ship this heading.
- **A PR listed twice** — GitHub puts a PR in the first category that matches. Move it only if
  that category is wrong for what it did.
- **Commits with no PR** — `git log <latest tag>..origin/main --oneline` shows them. Mention one
  only if it changed the shipped CSS.

Report what you found, for example "6 PRs: 1 component, 1 dependency, 4 docs; 1 unlabeled".

### 3. Write a line under each PR

The readers are developers who use Optics in their apps. Under each PR, add one indented line
that says what changed for them: the class, token, or variable name, and what it now does. The
PR body's **Why?** and **What Changed** sections are the best source.

| Weak                   | Strong                                                                                       |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| Update icon libraries  | The icon library addons point at the latest versions, so every icon in each set is available |
| Fix documentation site | Fixed the sidebar examples and the switch syntax example on the documentation site           |

- Dependency PRs: say whether they change the shipped CSS. They usually don't.
- A PR with nothing to explain (an admin or repo setting) can stand without a line.
- Keep GitHub's **New Contributors** and **Full Changelog** lines.

### 4. Match the CHANGELOG

The `CHANGELOG.md` section for this version should list the same PRs in the same categories.
If it is missing one, say so. The fix is a follow-up PR, not an edit during the release.

### 5. Create the draft

```bash
gh release create v<new> --draft --title "v<new>" --notes-file <path> --target main
```

A draft creates no tag and fires no workflow, so it is safe to redo (`gh release edit`,
`gh release delete`). Show the user the URL and print the full notes in the chat. Then stop.

---

## Phase 2 — Publish

Only after the user says to publish.

```bash
gh release edit v<new> --draft=false --latest
```

Then check the three release workflows:

```bash
gh run list --workflow deploy-to-npm.yml --limit 1
gh run list --workflow deploy-to-ghp.yml --limit 1
gh run list --workflow publish-storybook.yml --limit 1
```

- `publish-storybook.yml` runs on `release: created`. GitHub does not send `created` when a
  draft is published, so the docs site likely did not redeploy. Run it:
  `gh workflow run publish-storybook.yml --ref main`
- If `deploy-to-npm.yml` failed, read the log first, then re-run it with
  `gh workflow run deploy-to-npm.yml --ref main`. This builds the current `main`, so only do it
  if nothing has merged since the tag.

Confirm the package is out:

```bash
npm view @rolemodel/optics version
```

Finally, give the user the notes as a copyable block for Slack, without the Full Changelog link.

---

## Guardrails

- **Never publish without the user's go-ahead.** It ships a package version that can't be taken
  back.
- **Never release from a branch.** The target is always `main`, after the bump PR has merged.
- **Never invent a PR or what it did.** If a PR body is thin, say the line is a guess and ask.
