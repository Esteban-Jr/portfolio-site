# Nova Web Studio

**Live site: https://esteban-jr.github.io/portfolio-site/**

A single-page marketing site for a freelance web design business — pricing tiers, sample work, process breakdown, and a contact section.

## Structure

```
index.html       Page markup and content (all sections)
css/styles.css   All styling
js/main.js       Mobile nav toggle, scroll fade-ins, footer year
```

No build step or dependencies — it's plain HTML/CSS/JS. Just open `index.html` in a browser, or serve the folder with any static file server.

## How it's built

- **Layout** — one `index.html` with sections for hero, services, work, process, about, and contact, linked via anchor nav (`#services`, `#work`, etc.).
- **Styling** (`css/styles.css`) — CSS custom properties in `:root` define the color theme (dark by default, with a `prefers-color-scheme: light` override). Uses CSS Grid/Flexbox for layout, `clamp()` for responsive type, and a mobile breakpoint at `760px` that collapses the nav into a toggleable menu.
- **Behavior** (`js/main.js`) — three small pieces of vanilla JS:
  - Toggles the mobile nav menu open/closed.
  - Uses an `IntersectionObserver` to fade in `.fade-in` elements as they scroll into view.
  - Sets the footer's copyright year dynamically.
- **Fonts** — Google Fonts (`Inter` for body text, `Space Grotesk` for headings), loaded via `<link>` in the `<head>`.

## Deployment

Hosted via GitHub Pages, serving directly from the `main` branch root. Pushing to `main` updates the live site.

## To customize

Several placeholders still need real content before this is client-ready:
- `[Your Name]` and bio text in the About section (`index.html`)
- `your.email@example.com` in the Contact section and mailto link
- Social links (`LinkedIn`, `GitHub`, `Instagram`) currently point to `#`
- "Selected work" cards are concept placeholders, not real client projects
