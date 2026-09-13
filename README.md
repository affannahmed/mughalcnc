# Mughal CNC Wood Carving — Website

React + Vite website for Mughal CNC Wood Carving (Rawalpindi).

## Setup

1. Install [Node.js](https://nodejs.org/) (LTS version) if you don't have it.
2. Open this folder in VS Code.
3. In the VS Code terminal:
   ```
   npm install
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`).

## Adding your photos

Copy your images into `public/assets/`. **Extensions matter and are not
interchangeable** — `1.jpg` and `1.jpeg` are different files as far as the
browser is concerned, so use the exact filename (including extension) you
already have on disk.

`0.png` is treated as your **logo** — it's used in the navbar and as the
browser tab icon, and is deliberately left out of the gallery.

Every other file is opened through `src/data/images.js`, which lists each
number's real extension in one place:

```js
const files = {
  1: 'jpeg',
  2: 'jpg',
  3: 'jpeg',
  // ...
}
```

If you rename, add, or remove a photo, update this list to match — the
gallery, hero, about section and service thumbnails all read from it. Any
number listed here with no matching file in `public/assets` simply won't
show (no broken-image icon, the layout stays intact).

The gallery (`galleryImages` in the same file) automatically includes every
number in `files`, labelled "Custom CNC Work" by default — edit the
`category` value per photo once you know what each one actually shows.

## Editing business info

All contact details, hours, address and links live in one file:
`src/data/site.js`. Edit there and it updates everywhere on the site.

## Editing text content

- Services & process steps: `src/data/services.js`
- Everything else: directly inside the relevant component in
  `src/components/`

## Build for production

```
npm run build
```

Output goes to `dist/`. Deploy that folder to Netlify or Vercel
(or connect the whole project folder as a Git repo and let either
platform build it automatically with the `npm run build` command
and `dist` as the publish directory).

## SEO

- Title, meta description, Open Graph tags and the LocalBusiness
  JSON-LD are in `index.html` — update the `canonical` and `og:url`
  values once you have a real domain.
- `public/robots.txt` and `public/sitemap.xml` are ready; update the
  domain there too.
