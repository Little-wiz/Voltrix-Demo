# Ehiz Mogaji Electrical — Website

Professional green energy & electrical services website built with React and plain CSS.
RC: 8171988

---

## Tech Stack

- **React 18** — UI framework
- **Plain CSS** — per-component stylesheets, no Tailwind or CSS-in-JS
- **Google Fonts** — Bebas Neue (display) + DM Sans (body)
- **No external UI libraries** — fully self-contained

---

## Project Structure

```
src/
├── assets/
│   └── logo.jpeg                  ← Client logo (replace with final file if needed)
├── components/
│   ├── Navbar.jsx / Navbar.css    ← Fixed nav, transparent → dark on scroll, mobile drawer
│   ├── Hero.jsx / Hero.css        ← Full-screen hero with animated orbs and stats strip
│   ├── Services.jsx / Services.css← 6-card service grid with hover invert effect
│   ├── About.jsx / About.css      ← Two-column about section
│   ├── Portfolio.jsx / Portfolio.css ← Filterable project grid
│   ├── Testimonials.jsx / Testimonials.css ← Auto-advancing quote slider
│   ├── Contact.jsx / Contact.css  ← Booking form with Nigerian details
│   └── Footer.jsx / Footer.css    ← 4-column footer with socials
├── hooks/
│   └── useReveal.js               ← IntersectionObserver scroll animation hook
├── App.js
├── index.js
└── index.css                      ← Global styles, CSS variables, resets, shared classes
```

---

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm v7 or higher

### Installation & Run

```bash
# 1. Navigate to the project folder
cd ehiz-mogaji-electrical

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
# Opens at http://localhost:3000
```

### Production Build

```bash
npm run build
```

Creates an optimised `/build` folder ready for deployment.

---

## Color System

All colors are defined as CSS variables in `src/index.css`:

| Variable         | Hex       | Usage                                  |
|------------------|-----------|----------------------------------------|
| `--accent`       | `#3DBE6C` | Primary green — CTAs, highlights       |
| `--accent-dark`  | `#2A9952` | Hover/active green                     |
| `--accent-light` | `#E8F7EE` | Pale green — section backgrounds       |
| `--teal`         | `#1AADA0` | Teal — from logo, secondary accent     |
| `--dark`         | `#0F1F0E` | Deep green-black — hero, footer        |
| `--dark-2`       | `#162615` | Slightly lighter dark — about section  |
| `--c5`           | `#1C2B1A` | Forest green — headings, body text     |
| `--white`        | `#F7FAF7` | Green-tinted off-white — page bg       |
| `--c1–c4`        | Grays     | Achromatic scale from original palette |

---

## Customisation Guide

### Updating the Logo
The logo file is at `src/assets/logo.jpeg`. To swap it:
1. Replace the file with the same name, or
2. Update the import path in `Navbar.jsx` and `Footer.jsx`

Both components use `filter: brightness(0) invert(1)` on the logo image to make it appear white on the dark navbar/footer. Remove this filter if you provide a full-colour version on a transparent background.

### Updating Business Details

Search the codebase for these placeholders and swap them:

| Placeholder                  | File(s)              | Replace with               |
|------------------------------|----------------------|----------------------------|
| `+234 800 000 0000`          | Contact, Footer      | Real phone number          |
| `info@ehizmogajielectrical.com` | Contact, Footer   | Real email address         |
| `Lagos · Abuja · Port Harcourt` | Contact, Footer   | Real service locations     |
| `ehizmogajielectrical.com`   | index.html           | Real domain name           |
| `500+`, `10+` (stats)        | Hero                 | Real figures from client   |

### Adding Real Photos

- **About section** — replace the placeholder `div` in `About.jsx` with:
  ```jsx
  <img src={yourPhoto} alt="Ehiz Mogaji Electrical team" />
  ```
- **Portfolio grid** — replace `.portfolio__thumb-placeholder` divs in `Portfolio.jsx` with:
  ```jsx
  <img src={projectPhoto} alt="Project title" style={{width:'100%',height:'100%',objectFit:'cover'}} />
  ```
  Recommended image size: **800×600px**, WebP or JPEG format.

### Social Media Links
Update the `href` values in the `socials` array inside `Footer.jsx` with real profile URLs. WhatsApp link format: `https://wa.me/2348000000000`.

### Changing Services
Edit the `services` array in `Services.jsx`. Each entry accepts:
```js
{ icon: <svg .../>, title: 'Service Name', desc: 'Description.', tag: 'Label' }
```

---

## SEO

The following is already implemented in `public/index.html`:

- ✅ `<title>` tag with keywords
- ✅ Meta `description` and `keywords`
- ✅ `robots` meta (index, follow)
- ✅ `canonical` URL
- ✅ Open Graph tags (Facebook, LinkedIn sharing)
- ✅ Twitter Card tags
- ✅ `LocalBusiness` JSON-LD structured data schema

**To complete SEO setup after launch:**
1. Replace all `https://ehizmogajielectrical.com` references in `index.html` with the real domain
2. Create and upload a real `og-image.jpg` (1200×630px) to the root of the site — this is the image shown when the site is shared on social media
3. Submit the sitemap to Google Search Console
4. Register and verify the site on Google Business Profile

---

## Sections

| Section       | ID               | Background       |
|---------------|------------------|------------------|
| Navbar        | —                | Transparent → `--dark` |
| Hero          | `#hero`          | `--dark`         |
| Services      | `#services`      | `--white`        |
| About         | `#about`         | `--dark-2`       |
| Portfolio     | `#portfolio`     | `--accent-light` |
| Testimonials  | `#testimonials`  | `--dark`         |
| Contact       | `#contact`       | `--white`        |
| Footer        | —                | `--dark`         |

Sections alternate between light and dark backgrounds, creating a natural visual rhythm as the user scrolls.

---

## Responsive Breakpoints

| Breakpoint | Width    | Behaviour                                      |
|------------|----------|------------------------------------------------|
| Desktop    | > 900px  | Full navbar, 3-column grids                    |
| Tablet     | ≤ 900px  | Hamburger menu, 2-column grids                 |
| Mobile     | ≤ 560px  | Single column, reduced padding, hidden extras  |

---

## Deployment (Quick Reference)

**Netlify (easiest)**
```bash
npm run build
# Drag the /build folder to app.netlify.com/drop
```

**Vercel**
```bash
npm i -g vercel && vercel
```

**cPanel / shared hosting**
```bash
npm run build
# Upload contents of /build to public_html via FTP
```
