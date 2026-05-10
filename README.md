# Doodle Drills

A free, opinionated practice curriculum that takes someone who has never drawn before and walks them — drill by drill — to a level you could call professional sketchnoting.

**Live site:** [mikersays.github.io/doodle-drills](https://mikersays.github.io/doodle-drills/)

Forty drills, organized into seven tiers. Each tier earns the next. The whole arc — from "I can't draw a straight line" to live event sketchnoting — is roughly fifty hours of practice at fifteen minutes a day.

## What's in it

| Tier | Skill | Drills | Hours |
| --- | --- | --- | --- |
| 1 | **Foundations** — the confident line | 5 | ~6 |
| 2 | **Forms & Volume** — flat to solid | 5 | ~7 |
| 3 | **The Visual Alphabet** — the doodler's vocabulary | 5 | ~10 |
| 4 | **Faces & Figures** — people with pulse | 6 | ~8 |
| 5 | **Lettering & Hierarchy** — words that pop | 4 | ~5 |
| 6 | **Composition** — whole-page sketchnotes | 6 | ~10 |
| 7 | **Personal Style & Mastery** | 6 | open-ended |

Plus a [Handbook](https://mikersays.github.io/doodle-drills/handbook/) view that puts every drill on a single page for reading or printing, and a [Practice Pad](https://mikersays.github.io/doodle-drills/practice-pad/) — a no-stakes browser canvas for warming up the wrist.

## Standing on shoulders

The curriculum is original but synthesized from teachers who built this field — Mike Rohde (*The Sketchnote Handbook*), Sunni Brown (*The Doodle Revolution*), Dan Roam (*The Back of the Napkin*), Betty Edwards (*Drawing on the Right Side of the Brain*), Lynda Barry (*Syllabus*), and Eva-Lotta Lamm. See the [About page](https://mikersays.github.io/doodle-drills/about/) for proper credit.

## Tech

Plain HTML, CSS, and ES modules. No framework, no bundler, no build step. The whole site is in `docs/` and is served by GitHub Pages. Progress is purely client-side via localStorage; there is no backend or account.

```bash
git clone git@github.com:mikersays/doodle-drills.git
cd doodle-drills/docs
python3 -m http.server 8000
# http://localhost:8000
```

That's the whole development setup.

## Editing the curriculum

All drill content (steps, success criteria, common mistakes, reference SVGs) lives in [`docs/content/drills.js`](docs/content/drills.js). Tier metadata is in [`docs/content/tiers.js`](docs/content/tiers.js). The 37 drill HTML files are thin shells the JS hydrates from those modules, so editing a drill means editing one entry in `drills.js`.

If you're working in this repo with [Claude Code](https://claude.ai/code), see [`CLAUDE.md`](CLAUDE.md) for the architecture quick-tour.

## License

The text and curriculum are released under [CC0](https://creativecommons.org/publicdomain/zero/1.0/). Use it, remix it, teach with it.
