# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static, opinionated practice curriculum that takes absolute beginners through tiered drills until they can sketchnote at a professional level. The site lives entirely in `docs/` and is served by GitHub Pages from `main` / `/docs`. There is intentionally no build step, no framework, no bundler, and no test suite — the site is plain HTML, CSS, and ES modules.

## Local development

```bash
# preview locally (run from repo root or docs/)
cd docs && python3 -m http.server 8000
# open http://localhost:8000/
```

There are no package.json, npm scripts, lints, or tests. Verification is done by loading pages in a browser. Pre-commit hooks: none.

To deploy, push `main`. GitHub Pages serves `/docs/` automatically; `docs/.nojekyll` disables Jekyll processing.

## Architecture

### Multi-page, hydration-on-load (not a SPA)

Every drill, tier, and main page is a real HTML file with proper `<title>`, meta tags, and deep-linkable URL. Pages are *thin shells* that JS hydrates from content modules:

- **Drill pages** (`docs/tiers/<tier-slug>/<drill-slug>/index.html`, ~37 of them) declare `<meta name="drill-key" content="<tier>/<drill>">`. `assets/js/drill.js` reads that key, looks up the drill in `content/drills.js`, and populates title, reference SVG, steps, success-criteria checkboxes, common mistakes, prev/next strip, and citation.
- **Tier pages** (`docs/tiers/<tier-slug>/index.html`, 7) declare `<meta name="tier-slug">`. `assets/js/tier.js` hydrates from `content/tiers.js` + `content/drills.js`.
- **Home, curriculum, handbook, progress, about, practice-pad** each have their own `index.html` and matching JS module under `assets/js/`.

When adding or editing drill content, **edit `content/drills.js`** — do not edit the 37 drill HTML shells. The shells are deliberately interchangeable. Tier metadata lives in `content/tiers.js` (titles, slugs, drill order, hour estimates, soft-lock thresholds).

### Reference SVGs live in content

Each drill in `content/drills.js` has a `referenceSVG` field with an inline 200×140 viewBox SVG. They use `stroke="currentColor"` so they adapt to light/dark theme, with `var(--terracotta)` for accents. **This is the most-edited file** — when a demo drawing looks wrong, fix the SVG markup here, not in any HTML file.

### Header injection and depth-aware relative paths

The site has 4 URL depths (root / 1-level / 2-level / 3-level). To keep the build portable across both `username.github.io/` and `username.github.io/repo-name/` GitHub Pages deployments, **every internal link is relative**, not absolute.

Each page has `<div id="site-header" data-depth="N" data-current="X"></div>`. `assets/js/header.js` reads `data-depth` and prepends the right number of `../` segments when building the nav. Footer is the same pattern (`#site-footer`). When you add a new page, set `data-depth` correctly:

- depth 0 → `docs/index.html`, `docs/404.html`
- depth 1 → `docs/curriculum/`, `docs/handbook/`, `docs/progress/`, `docs/about/`, `docs/practice-pad/`
- depth 2 → `docs/tiers/<slug>/`
- depth 3 → `docs/tiers/<slug>/<drill>/`

`data-current` is one of `curriculum | handbook | progress | pad | about | ''` — drives the active-link underline in nav.

To add a new top-level page to the global nav, edit the `items` array in `assets/js/header.js` and add a matching `data-current` value on the new page.

### Progress state

A single localStorage key `doodle-drills:state:v1` holds everything. Schema is versioned (the `version` field gates upgrades). All reads/writes go through `assets/js/progress.js`, which exposes:

```
getState, isDrillComplete, getDrillState, setCriterion, markDrillComplete,
unmarkDrill, setSetting, getSettings, resetState, exportState, importState,
getStreak, getCompletedCount, getTierCompletedCount, getResume, onStateChange
```

`onStateChange` listens to the cross-tab `storage` event so the progress dashboard updates if a drill is completed in another tab. There is **no backend, no auth, no cloud sync** — Export/Import JSON on the progress page is the only way to move state between devices.

### 404 is self-contained

GitHub Pages serves `404.html` from any not-found URL within the project, but the browser's location bar keeps the originally-requested path. That makes relative paths inside `404.html` resolve against the *wrong* base. So `docs/404.html` has inline CSS, no external JS imports, and a tiny inline script that detects `*.github.io` hosts to rewrite the home/curriculum links to the right repo prefix. Don't refactor it to use the shared header without re-thinking that.

## Visual and writing conventions

These are intentional. Don't drift.

- **Colors** (CSS variables in `assets/css/base.css`): `--paper #FBF7F0`, `--ink #1F1B16`, `--terracotta #C8553D`, `--teal #3A7D7B`. Light/dark via `prefers-color-scheme` plus a manual override stored in localStorage settings.
- **Type**: Fraunces (variable serif) for headings and body at multiple optical sizes; Caveat strictly for the wordmark, eyebrows ("for absolute beginners"), and occasional handwritten margin annotations. Never set body copy in Caveat.
- **Hand-drawn details**: dividers, checkmarks, prev/next arrows, and the wordmark squiggle are inline SVG with deliberately-imperfect bezier paths. Tally-mark progress (pen slashes filling in) is preferred over smooth progress bars; the markup is `.tally > .tally__mark.is-done`.
- **Tone**: warm, second-person, lightly informal. **No emojis in body copy.** **At most one exclamation point per page.** Microcopy at decision points reduces anxiety ("It doesn't have to be perfect", "Nothing here yet — go finish your first drill, I'll wait").

## Things that intentionally don't exist

- A build step, package.json, bundler, framework, or TypeScript.
- Any login, account, or backend.
- Cloud sync of progress.
- Drawing-recognition or auto-grading (the practice pad is purely a scratch surface; saved PNGs are downloads, never uploads).
- A test suite. Verify visual changes by loading the page locally; I've used Playwright (via MCP) when I needed scripted verification, but it's not part of any standard workflow.
