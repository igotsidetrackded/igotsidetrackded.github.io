# www.schauermayhew.com

Personal hub and portfolio site for Bryan Schauer and Addam Mayhew, built with Astro and Tailwind CSS.

## 🛠 Tech Stack

- **Framework**: [Astro v7](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Hosting**: GitHub Pages
- **Automation**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Custom Domain**: `www.schauermayhew.com` (configured via `public/CNAME`)

---

## 🚀 Local Development

### Prerequisites

- Node.js (v22.12.0 or higher recommended)
- `npm`

### Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/igotsidetrackded/igotsidetrackded.github.io.git
   cd igotsidetrackded.github.io
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

---

## 📂 Project Structure & Routes

```text
.
├── AGENTS.md
├── astro.config.mjs
├── CLAUDE.md -> AGENTS.md
├── package-lock.json
├── package.json
├── public
│   ├── assets
│   │   └── interior
│   │       ├── addam_avatar.jpg
│   │       └── kitchen_cad_ai_gen.png
│   ├── CNAME
│   └── favicon.png
├── README.md
├── src
│   ├── assets
│   │   ├── astro.svg
│   │   ├── background.svg
│   │   └── photography
│   │       ├── about_page.jpg
│   │       ├── arch.jpg
│   │       ├── artsy.jpg
│   │       ├── bryan_avatar.jpg
│   │       ├── bw.jpg
│   │       ├── nature.jpg
│   │       ├── portfolio_hero.jpg
│   │       └── smd_bry.jpg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   ├── about.astro
│   │   ├── alm-portfolio.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── interior.astro
│   │   ├── photo.astro
│   │   └── resume.astro
│   └── styles
│       └── global.css
└── tsconfig.json
```

### Site Routes

- **`/`**: Home page detailing DevSecOps work, background, and photography preview.
- **`/alm-portfolio/`**: Addam Mayhew's interior design portfolio slide deck and showcase.
- **Rendered Pages**: `/`, `/interior/`, `/photo/`, `/about/`, `/contact/`, `/resume/`, and `/alm-portfolio/` are implemented as Astro pages.
- **Legacy Redirect**: `/bry-resume` redirects to `/resume` in `astro.config.mjs` to preserve the old resume URL.

---

## 🎨 Styling & Tailwind CSS

This project uses **Tailwind CSS v4** configured with Vite integration.

- Tailwind is imported in `src/styles/global.css`:
  ```css
  @import "tailwindcss";
  ```
- Global styles and font setups are imported inside `src/layouts/Layout.astro`.

---

## 📦 Building & Deployment

### Manual Build Test

To verify the site compiles cleanly before pushing:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

### Automatic Deployment

Deployments are fully automated with GitHub Actions:

1. Any push or merged Pull Request to `main` triggers `.github/workflows/deploy.yml`.
2. Astro builds the production files into `dist/`.
3. GitHub Pages deploys the bundle automatically to `www.schauermayhew.com`.

> **Note**: Ensure the repository deployment source under **Settings > Pages** is set to **GitHub Actions**.
