# Website Content Update Guide

This guide is a practical map for updating your website content quickly, without re-learning the repo each time.

## 1) Quick map: what to edit

| What you want to update | File(s) to edit |
|---|---|
| Site title, favicon, analytics, global options | `_config.yml` |
| Home page bio and hero/profile block | `_pages/about.md` |
| Social links/icons | `_data/socials.yml` |
| Publications list | `_bibliography/papers.bib` |
| Publication venue links/colors | `_data/venues.yml` |
| Coauthor links in publication author list | `_data/coauthors.yml` |
| News items | `_news/*.md` |
| Projects page cards and project detail pages | `_projects/*.md` |
| Blog posts | `_posts/*.md` |
| CV page content | `assets/json/resume.json` (primary), `_data/cv.yml` (fallback) |
| CV downloadable PDF | `assets/pdf/...` + `_pages/cv.md` (`cv_pdf`) |
| Bookshelf and book reviews | `_books/*.md` |
| People/profiles page | `_pages/profiles.md` + `_pages/about_*.md` |
| Repositories page content | `_data/repositories.yml` |
| Teaching page | `_pages/teaching.md` |
| Images / PDF / video / audio assets | `assets/img`, `assets/pdf`, `assets/video`, `assets/audio` |

## 2) Global site settings (`_config.yml`)

Common fields:

- `title`, `first_name`, `middle_name`, `last_name`
- `email`
- `icon` (favicon filename under `assets/img/`, e.g. `icon: UMD_Terp.jpeg`)
- `url`, `baseurl`
- `google_analytics`, verification IDs
- `enable_*` feature toggles

Notes:

- Favicon images are loaded from `assets/img/`.
- If `icon` is a short string (<=4 chars), it is treated like an emoji.

## 3) Home page (`_pages/about.md`)

Main intro text is just Markdown below front matter.

Key front matter:

- `subtitle`
- `profile.image` (filename in `assets/img/`)
- `selected_papers: true` (shows papers with `selected={true}` in bib)
- `social: true`
- `announcements.enabled` and `announcements.limit`

Example:

```yaml
---
layout: about
title: about
permalink: /
subtitle: PhD Student in Computer Engineering, University of Maryland
profile:
  align: right
  image: profile_pic.jpeg
  image_circular: false
selected_papers: true
social: true
announcements:
  enabled: true
  limit: 5
---
```

## 4) Social links (`_data/socials.yml`)

Set your IDs/usernames here. Uncomment and fill only the ones you use.

Example:

```yaml
email: your_email@domain.com
github_username: your-github
linkedin_username: your-linkedin-id
scholar_userid: your-google-scholar-id
```

## 5) News (`_news/*.md`)

Create a new file, e.g. `_news/announcement_2026_02_24.md`.

Recommended front matter:

```yaml
---
layout: post
date: 2026-02-24 09:00:00-0500
inline: true
related_posts: false
---
```

Then add one line/body content.

Tips:

- `inline: true` shows news content directly in the news table.
- `inline: false` makes the item a clickable post page.

## 6) Publications (`_bibliography/papers.bib`)

Add/update BibTeX entries in `_bibliography/papers.bib`.

Your site uses custom fields in entries. Most important ones:

- `abbr` (venue badge, can map to `_data/venues.yml`)
- `pdf`, `slides`, `poster`, `video`, `code`, `website`, `blog`
- `preview` (thumbnail under `assets/img/publication_preview/`)
- `selected={true}` (shows under "selected publications" on home page)
- `abstract`, `award`, `award_name`
- `google_scholar_id`, `inspirehep_id`, `altmetric`, `dimensions`

Asset path behavior in bib entries:

- If value contains `://`, it is treated as external URL.
- If value is relative for `slides/poster/pdf`, it is resolved under `assets/pdf/`.
  - Example: `slides={ICCAD2024/talk.pdf}` maps to `assets/pdf/ICCAD2024/talk.pdf`.

Minimal example:

```bibtex
@inproceedings{liu2026example,
  abbr={DAC},
  title={Example Paper},
  author={Liu, Yu-Tung and Coauthor, A.},
  booktitle={Design Automation Conference},
  year={2026},
  pdf={https://doi.org/...},
  slides={DAC2026/example_slides.pdf},
  selected={true}
}
```

## 7) Projects (`_projects/*.md`)

Each project is one Markdown file in `_projects/`.

Required-ish fields:

- `layout: page`
- `title`
- `description`
- `importance` (ordering)
- `category` (if using category sections)

Optional:

- `img` (card image path, e.g. `assets/img/your-image.jpg`)
- `github`, `github_stars`
- `redirect` (external page)
- `related_publications: true` (if you cite bib entries in project content)

Template:

```yaml
---
layout: page
title: My Project
description: One-line summary
img: assets/img/my_project.jpg
importance: 1
category: work
related_publications: true
---
```

## 8) Blog posts (`_posts/*.md`)

Filename must be:

- `YYYY-MM-DD-title.md`

Common front matter:

- `layout: post`
- `title`, `date`, `description`
- `tags`, `categories`
- `thumbnail`
- `featured: true`
- `toc`, `citation`, `related_publications`, `giscus_comments`
- feature toggles like `chart`, `map`, `mermaid`, `tabs`, `images`, `tikzjax`, `pseudocode`

Minimal template:

```yaml
---
layout: post
title: Post title
date: 2026-02-24 10:00:00
description: One-line description
tags: [eda, ai]
categories: [research]
---
```

## 9) CV (`_pages/cv.md`, `assets/json/resume.json`, `_data/cv.yml`)

Important behavior:

- If `site.data.resume` exists, CV uses resume mode.
- In this repo, `assets/json/resume.json` is loaded by `jekyll_get_json` in `_config.yml`, so this is your primary CV content source.

What to edit:

- CV page settings: `_pages/cv.md`
  - `cv_pdf: Yu_Tung_Liu_Curriculum_Vitae.pdf`
- Resume data: `assets/json/resume.json`
  - Sections like `basics`, `education`, `experience`, `awards`, etc.
- PDF file: place under `assets/pdf/`.

Fallback:

- `_data/cv.yml` is used only when resume JSON is not loaded.

## 10) Bookshelf (`_books/*.md`)

Each book review is one file in `_books/`.

Useful fields:

- `layout: book-review`
- `title`, `author`
- `cover` (local image path), or `olid`, or `isbn`
- `categories`, `tags`
- `started`, `finished`, `released`
- `stars`, `goodreads_review`, `buy_link`, `status`

Template:

```yaml
---
layout: book-review
title: Book Title
author: Author Name
cover: assets/img/book_covers/book.jpg
categories: [non-fiction]
tags: [reading-list]
started: 2026-01-10
finished: 2026-01-20
stars: 5
status: Finished
---
```

Note:

- Add `date:` if you want strict control over year grouping in `/books/`.

## 11) People page (`_pages/profiles.md`)

Set each profile card in front matter `profiles:` list.

Fields per profile:

- `align`
- `image` (from `assets/img/`)
- `content` (markdown file in `_pages/`, e.g. `about_someone.md`)
- `image_circular`
- `more_info` (HTML snippet)

## 12) Repositories page (`_data/repositories.yml`)

Edit:

- `github_users`
- `github_repos`

Example:

```yaml
github_users:
  - yt-tony-liu

github_repos:
  - yt-tony-liu/your-repo
```

## 13) Navbar and page visibility

Per page front matter (in `_pages/*.md`):

- `nav: true` to show in top navbar
- `nav_order: N` for order
- `permalink` for URL

Dropdown menu page example is `_pages/dropdown.md` with:

- `dropdown: true`
- `children:` entries

## 14) Assets: where files go

- Images: `assets/img/`
- Publication thumbnails: `assets/img/publication_preview/`
- Book covers: `assets/img/book_covers/`
- PDFs: `assets/pdf/` (you can create subfolders)
- Videos: `assets/video/`
- Audio: `assets/audio/`
- Jupyter notebooks: `assets/jupyter/`
- HTML embeds: `assets/html/`

## 15) Add a new page quickly

1. Create `_pages/your-page.md`
2. Add front matter:

```yaml
---
layout: page
title: your page
permalink: /your-page/
nav: true
nav_order: 9
---
```

3. Write Markdown content.

## 16) Local preview

### Option A: Docker (usually easiest)

```bash
docker compose up
```

Then open `http://localhost:8080`.

### Option B: Ruby local toolchain

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## 17) Publish workflow

If GitHub Pages deploy workflow is enabled in this repo:

1. Commit changes
2. Push to `main`
3. GitHub Actions deploys automatically

## 18) Fast checklist before pushing

1. New image/PDF/video files are under `assets/...` and paths match exact filename/case.
2. New posts use `YYYY-MM-DD-title.md`.
3. New publication has valid BibTeX syntax.
4. `nav` and `nav_order` are set correctly for pages that should appear in navbar.
5. Preview locally once.

## 19) Common mistakes

- Wrong filename case in image/PDF paths.
- Forgetting `selected={true}` for home-page selected papers.
- Putting project/blog assets outside `assets/`.
- Expecting `_data/cv.yml` changes to show while `assets/json/resume.json` is active.
- Forgetting front matter `---` blocks.

