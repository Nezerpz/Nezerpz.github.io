# Nezerpz.github.io

This repository now contains a minimal React + Vite site configured for GitHub Pages.

Quick start

- Install dependencies:

  ```powershell
  npm install
  ```

- Run a dev server:

  ```powershell
  npm run dev
  ```

- Build for production (this writes output to the `docs/` folder):

  ```powershell
  npm run build
  ```

Deployment options

- Automatic (recommended): a GitHub Actions workflow is included at `.github/workflows/pages.yml`. Pushing to `main` will run the build and publish the `docs/` output to GitHub Pages.
- Manual: run `npm run build`, commit the generated `docs/` folder to `main`, then set the repository's Pages source to `main` branch and the `/docs` folder.

Notes

- Vite is configured to output to `docs/` and uses `base: './'` in `vite.config.ts` so assets are relative and compatible with Pages.
- If you plan to use client-side routes, prefer hash-based routing (e.g. React Router's `HashRouter`) or add a `404.html` that redirects to `index.html` to avoid 404s on refresh.

Files added/changed

- `package.json`, `vite.config.ts`, `index.html`, `src/` (React app), `.github/workflows/pages.yml`.

If you want I can also:

- Commit and push these changes for you.
- Add a small example component or migrate existing pages into React components.
