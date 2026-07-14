# Portfolio

A single-page, bilingual (FR/EN) portfolio built with **React + Vite + Tailwind CSS**.
It has two main sections you scroll through: **Projects** (web/visual work) and
**Studies** (ML & systems research).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

## Editing your content

Everything is in one file: [`src/content.js`](src/content.js).

- **`profile`** — your name, role, tagline, about text, photo and links (GitHub, LinkedIn, email, CV).
  Every text field is a `{ fr, en }` pair for the language switch.
- **`projects`** — the list of projects (Polymatic, Trackmania, chatbot, Snake…).
- **`studies`** — the research/benchmark studies (FSDP, NVFP4 quantization, LLMs, CUDA matmul).
- **`ui`** — labels used in the navigation, buttons and section headers.

To **add** a project or study, copy one object in the array and change the fields.

### Adding your photo and CV

Drop the files in the `public/` folder, then reference them in `src/content.js`:

```js
photo: "/photo.jpg",   // public/photo.jpg
links: { cv: "/cv.pdf" } // public/cv.pdf
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** → import the GitHub repo.
3. Vercel auto-detects Vite (config is in `vercel.json`). Click **Deploy**.
4. Every future `git push` redeploys automatically.

You can later add a custom domain (including an OVH-registered one) in the Vercel
project settings under **Domains**.

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
