<div align="center">

# Conecta2

A single-page marketing site for a freelance web design business.

**[🔗 View the live site](https://esteban-jr.github.io/portfolio-site/)**

![GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-222?style=flat-square&logo=github)
![No build step](https://img.shields.io/badge/build%20step-none-brightgreen?style=flat-square)
![HTML/CSS/JS](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-blue?style=flat-square)

</div>

---

## Overview

Service breakdown, a real project portfolio, a process walkthrough, and a contact section — built as a fast, dependency-free static site with no framework or build tooling.

| | |
|---|---|
| **Sections** | Hero · Services · Work · Process · About · Contact |
| **Language** | Spanish by default, with an EN/ES toggle in the header (persisted via `localStorage`) |
| **Theme** | Always-light "pearl white" background with a blue → purple accent gradient; alternating sections use the full gradient as their background |
| **Responsive** | Mobile nav collapses below `760px` |

## Project structure

```
.
├── index.html       # Page markup and content (all sections)
├── css/
│   └── styles.css   # All styling
├── js/
│   └── main.js      # Mobile nav, scroll fade-ins, footer year, EN/ES translations
└── img/
    └── work-*.jpg   # Screenshots of live portfolio projects
```

No dependencies, no package manager, no build step. Open `index.html` directly in a browser, or serve the folder with any static file server.

## How it's built

- **Layout** — one `index.html` with sections linked via anchor nav (`#services`, `#work`, etc.).
- **Styling** (`css/styles.css`) — CSS custom properties in `:root` drive the color theme (pearl white background, dark navy text, light-blue/purple accents), with CSS Grid/Flexbox for layout, `clamp()` for responsive type, a faint dot-grid texture on the body, and soft blurred color blobs behind each section.
- **Internationalization** (`js/main.js`) — every translatable element is marked with a `data-i18n` key. The page ships with Spanish copy baked into the HTML; on load/toggle, `main.js` swaps text (or the `content` attribute, for `<meta>`) using an English dictionary, and remembers the choice in `localStorage`.
- **Behavior** (`js/main.js`) — also handles:
  - Mobile nav open/close
  - An `IntersectionObserver` that fades in `.fade-in` elements as they scroll into view
  - The footer's copyright year
- **Work section** — each card links directly to a live, real project (not a mockup) and opens it in a new tab. Thumbnails are static screenshots stored in `img/`, not live embeds (the linked sites send `X-Frame-Options: DENY`, so iframes wouldn't render) — on hover, the image zooms slightly and the card lifts.
- **Fonts** — Google Fonts (`Inter` for body text, `Space Grotesk` for headings).

## Deployment

Hosted via **GitHub Pages**, serving directly from the `main` branch root. Pushing to `main` updates the live site automatically.

## Still to customize

- [ ] Pick a final business name/logo (currently "Conecta2" as a placeholder)
- [ ] Replace the contact email (`estebangonzalezjr07@gmail.com`, a personal address used as a temporary stand-in) once a business email exists
- [ ] Consider swapping the `mailto:` contact button for a real form (e.g. Formspree) for more reliable lead capture
- [ ] Add a real headshot/photo to the About section
- [ ] Add genuine client testimonials once available — none are shown rather than fabricating any
- [ ] Re-screenshot `img/work-*.jpg` if the linked live projects get redesigned (they're static snapshots, not live previews)
- [ ] Consider a custom domain instead of the `github.io` subpath
