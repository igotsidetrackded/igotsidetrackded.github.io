# www.schauermayhew.com

Personal hub and portfolio site for Bryan Schauer and Addam Mayhew, built with Astro and Tailwind CSS.

## 🛠 Tech Stack

- **Framework**: [Astro v5](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Hosting**: GitHub Pages
- **Automation**: GitHub Actions (`.github/workflows/deploy.yml`)
- **Custom Domain**: `www.schauermayhew.com` (configured via `public/CNAME`)

---

## 🚀 Local Development

### Prerequisites

- Node.js (v18.x or higher recommended)
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
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── assets/                 # Static assets (images, direct downloads)
│   ├── favicon.svg
│   └── CNAME                   # Custom domain setting for GitHub Pages
├── src/
│   ├── assets/                 # Processed images (handled by Astro <Image/>)
│   ├── layouts/
│   │   └── Layout.astro        # Main site shell and global metadata
│   ├── pages/
│   │   ├── index.astro         # Main landing page (DevSecOps hub & photo preview)
│   │   └── alm-portfolio.astro # Addam Mayhew's interior design portfolio
│   └── styles/
│       └── global.css          # Tailwind CSS v4 import directive
├── astro.config.mjs            # Astro configuration & redirect rules
├── jekyll_backup/              # Legacy Jekyll site archive
├── package.json
└── README.md
```

### Site Routes

- **`/`**: Home page detailing DevSecOps work, background, and photography preview.
- **`/alm-portfolio/`**: Addam Mayhew's interior design portfolio slide deck and showcase.
- **Legacy Redirects**: Legacy routes (`/projects`, `/photo`, `/about`, `/contact`, `/bry-resume`) are handled via Astro redirects in `astro.config.mjs` to maintain SEO parity and prevent broken links.

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
