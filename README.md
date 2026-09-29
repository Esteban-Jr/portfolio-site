<div align="center">

# Nova Web Studio

A single-page marketing site for a freelance web design business.

**[🔗 View the live site](https://esteban-jr.github.io/portfolio-site/)**

![GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-222?style=flat-square&logo=github)
![No build step](https://img.shields.io/badge/build%20step-none-brightgreen?style=flat-square)
![HTML/CSS/JS](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-blue?style=flat-square)

</div>

---

## Overview

Pricing tiers, sample work, a process breakdown, and a contact section — built as a fast, dependency-free static site with no framework or build tooling.

| | |
|---|---|
| **Sections** | Hero · Services · Work · Process · About · Contact |
| **Theme** | Dark by default, with an automatic light mode (`prefers-color-scheme`) |
| **Responsive** | Mobile nav collapses below `760px` |

## Project structure

```
.
├── index.html       # Page markup and content (all sections)
├── css/
│   └── styles.css   # All styling
└── js/
    └── main.js      # Mobile nav toggle, scroll fade-ins, footer year
```

No dependencies, no package manager, no build step. Open `index.html` directly in a browser, or serve the folder with any static file server.

## How it's built

- **Layout** — one `index.html` with sections linked via anchor nav (`#services`, `#work`, etc.).
- **Styling** (`css/styles.css`) — CSS custom properties in `:root` drive the color theme, with CSS Grid/Flexbox for layout and `clamp()` for responsive type.
- **Behavior** (`js/main.js`) — three small pieces of vanilla JS:
  - Toggles the mobile nav menu open/closed
  - Uses an `IntersectionObserver` to fade in elements as they scroll into view
  - Sets the footer's copyright year dynamically
- **Fonts** — Google Fonts (`Inter` for body text, `Space Grotesk` for headings).

## Deployment

Hosted via **GitHub Pages**, serving directly from the `main` branch root. Pushing to `main` updates the live site automatically.

## Still to customize

- [ ] Replace `[Your Name]` and bio placeholder text in the About section
- [ ] Replace `your.email@example.com` in the Contact section and mailto link
- [ ] Point the social links (LinkedIn, GitHub, Instagram) to real profiles
- [ ] Swap the "Selected work" concept cards for real client projects
