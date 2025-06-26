# Armed Exterminators – Contributor & Codex Guide

Welcome! This repo contains a **Hugo static site** deployed on Cloudflare Pages.  
Anything that builds locally with the commands below will deploy fine on Pages.

---

## 1 Directory map (TL;DR)

| Path / Glob                     | What lives here                                         | Edit frequency |
| ------------------------------- | ------------------------------------------------------- | -------------- |
| `archetypes/*.md`               | Page skeletons (cities, testimonials)                   | Rare           |
| `content/locations/**/index.md` | **City pages** (1 bundle per city)                      | Often          |
| `content/testimonials/*.md`     | Customer quotes (output via shortcode)                  | Optional       |
| `static/img/**`                 | Images (optimised; ≤ 200 KB preferred)                  | Varies         |
| `layouts/` & `themes/`          | Templates / shortcodes                                  | Occasional     |
| `scripts/*.sh`                  | Tooling — run before every commit / PR                  | Shared         |
| `.github/workflows/ci.yml`      | CI: calls `scripts/setup_codex.sh` then `check_site.sh` | Automatic      |

Codex should **treat `scripts/check_site.sh` as the ground truth for “green build”.**

---

## 2 Common tasks & where to touch

| Task category                            | Likely files / folders                                                                     |
| ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Add / update city page**               | `archetypes/locations.md`, then `content/locations/<city>/index.md`                        |
| **Change hero image / any asset**        | `static/img/**` (reference via `/img/...`)                                                 |
| **Fix performance / Google Speed Test**  | `layouts/partials/head.html`, image sizes in `static/`, run Lighthouse via `check_site.sh` |
| **Improve structured data / schema.org** | Front‑matter of pages, or `layouts/partials/jsonld.html`                                   |
| **Add testimonial**                      | `archetypes/testimonial.md` → `content/testimonials/*.md`                                  |
| **Update navigation / footer**           | `layouts/partials/nav.html`, `layouts/partials/footer.html`                                |

---

## 3 Validation (Codex _must_ run)

```bash
bash scripts/setup_codex.sh   # installs tools
bash scripts/check_site.sh    # build + quality gates
```
