# Voltix Electrical Services — Website Template

A clean, professional, mobile-first electrical services website built with React and plain CSS.

---

## Tech Stack

- **React 18** — UI framework
- **Plain CSS** — per-component stylesheets, no CSS-in-JS or Tailwind
- **Google Fonts** — Bebas Neue (display) + DM Sans (body)
- **No external UI libraries** — fully self-contained

---

## Project Structure

```
voltix/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Services.jsx / Services.css
│   │   ├── About.jsx / About.css
│   │   ├── Portfolio.jsx / Portfolio.css
│   │   ├── Testimonials.jsx / Testimonials.css
│   │   ├── Contact.jsx / Contact.css
│   │   └── Footer.jsx / Footer.css
│   ├── hooks/
│   │   └── useReveal.js       ← scroll-triggered fade-in animation
│   ├── App.js
│   ├── index.js
│   └── index.css              ← global styles, CSS variables, base reset
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm v7 or higher

### Installation

```bash
# 1. Navigate to the project folder
cd voltix

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The site will open at **http://localhost:3000**

### Production Build

```bash
npm run build
```

This creates an optimised `/build` folder ready to deploy to any static host (Netlify, Vercel, GitHub Pages, etc).

---

## Color Palette

| Variable       | Hex       | Usage                          |
|----------------|-----------|--------------------------------|
| `--c1`         | `#DAD9D8` | Light gray — backgrounds       |
| `--c2`         | `#B9B8B6` | Mid gray — borders, dividers   |
| `--c3`         | `#898681` | Warm gray — secondary text     |
| `--c4`         | `#58534E` | Dark gray — body text          |
| `--c5`         | `#282623` | Near black — headings, navbar  |
| `--accent`     | `#E8593C` | Red-orange — CTAs, highlights  |
| `--accent-dark`| `#C4401F` | Darker accent — hover states   |
| `--white`      | `#FAFAF9` | Off-white — page background    |

All variables are defined in `src/index.css` and used throughout every component.

---

## Customisation Guide

### Replacing the Logo
The logo is a placeholder SVG lightning bolt in `Navbar.jsx` and `Footer.jsx`.
Replace the `<svg>` blocks with an `<img src="..." alt="Your Logo" />` tag once the client provides their logo file.

### Updating Business Details
Search the project for placeholder text and swap it out:

| Placeholder              | File              | What to replace with        |
|--------------------------|-------------------|-----------------------------|
| `VOLTIX`                 | Navbar, Footer    | Client business name        |
| `+44 (0) 123 456 7890`   | Contact, Footer   | Real phone number           |
| `info@voltix.co.uk`      | Contact, Footer   | Real email address          |
| `Greater London...`      | Contact, Footer   | Real service area           |
| `voltix.co.uk`           | Footer            | Real domain                 |
| `30+`, `4,938`, etc.     | Hero              | Real stats from client      |

### Adding Real Photos
- **About section photo** — replace the placeholder div in `About.jsx` with `<img src="..." alt="..." />`
- **Portfolio thumbnails** — replace the `.portfolio__thumb-placeholder` divs in `Portfolio.jsx` with real `<img />` tags
- Recommended size for portfolio images: **800×600px**, format: JPEG or WebP

### Adding Social Media Links
In `Footer.jsx`, update the `href` values on each `.footer__social` link with the real social profile URLs.

### Changing Services
Edit the `services` array in `Services.jsx`. Each item accepts:
```js
{
  icon: <svg ... />,   // SVG icon
  title: 'Service Name',
  desc: 'Short description.',
  tag: 'Label',
}
```

### Changing Portfolio Categories
Edit the `categories` array and `projects` array in `Portfolio.jsx`.

---

## Sections Overview

| Section       | ID               | Description                                              |
|---------------|------------------|----------------------------------------------------------|
| Navbar        | —                | Fixed, transparent → dark on scroll. Mobile drawer menu |
| Hero          | `#hero`          | Full-screen intro with headline, stats strip             |
| Services      | `#services`      | 6-card grid with hover effect                            |
| About         | `#about`         | Two-column layout with image placeholder + reasons       |
| Portfolio     | `#portfolio`     | Filterable 3-column image grid                           |
| Testimonials  | `#testimonials`  | Auto-advancing quote slider                              |
| Contact       | `#contact`       | Booking form + contact details                           |
| Footer        | —                | 4-column footer with nav, services, contact, socials     |

---

## Scroll Animation

All sections use a custom `useReveal` hook (`src/hooks/useReveal.js`) powered by the browser's `IntersectionObserver` API. Elements with the class `reveal` fade in as they enter the viewport. Staggered delays are applied using `reveal-delay-1`, `reveal-delay-2`, etc.

No external animation library is required.

---

## Responsive Breakpoints

| Breakpoint | Width    | Changes                                        |
|------------|----------|------------------------------------------------|
| Desktop    | > 900px  | Full nav, multi-column grids                   |
| Tablet     | ≤ 900px  | Hamburger menu, 2-column grids                 |
| Mobile     | ≤ 560px  | Single-column everything, reduced padding      |

---

## Deployment

The simplest options for deploying the built site:

**Netlify (recommended)**
1. Run `npm run build`
2. Drag the `/build` folder into [netlify.com/drop](https://app.netlify.com/drop)

**Vercel**
```bash
npm install -g vercel
vercel
```

**GitHub Pages**
Install `gh-pages`, add `"homepage": "https://yourusername.github.io/voltix"` to `package.json`, then run `npm run deploy`.

---

## License
Template built for client use. Replace all placeholder content before going live.
