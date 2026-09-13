// Compresses your photos and writes the image manifest, in one step.
// Runs automatically before "npm run dev" and "npm run build" (see
// the "predev"/"prebuild" scripts in package.json) — including on
// Vercel, since it runs "npm run build" on every deploy.
//
// Just drop photos into these folders — any mix of .jpg/.jpeg/.png,
// any count — nothing else to move or edit:
//   public/assets/gallery/
//   public/assets/services/
//
// For each original photo (e.g. 3.jpg), this creates a resized,
// compressed .webp copy right next to it (3.webp) — the app only
// ever loads the .webp versions (see src/data/images.js), so the
// large originals sitting alongside them are never sent to visitors.
// A local cache file (.image-cache.json) skips re-compressing photos
// that haven't changed, so rebuilds stay fast.
//
// If you'd rather not keep both files, you can delete the original
// once its .webp copy is generated — that's optional, not required.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const ASSETS = path.join(ROOT, 'public/assets')
const MANIFEST_OUT = path.join(ROOT, 'src/data/image-manifest.json')
const CACHE_FILE = path.join(ROOT, '.image-cache.json')

const SOURCE_EXT = /\.(jpe?g|png)$/i // raw formats we compress from
const QUALITY = 78

// Gallery photos can be viewed large in the lightbox; service
// thumbnails only ever render at ~220px wide — so they don't need
// to be nearly as big.
const MAX_WIDTH = {
  gallery: 1600,
  services: 800,
}

let cache = {}
if (fs.existsSync(CACHE_FILE)) {
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'))
  } catch {
    cache = {}
  }
}

async function processFolder(folderName) {
  const dir = path.join(ASSETS, folderName)
  if (!fs.existsSync(dir)) return { results: [], processedCount: 0 }

  const allFiles = fs.readdirSync(dir)
  const sourceFiles = allFiles.filter((f) => SOURCE_EXT.test(f))
  const producedNames = new Set()
  let processedCount = 0

  // Compress every raw photo into a same-named .webp next to it.
  for (const file of sourceFiles) {
    const outName = file.replace(/\.[^.]+$/, '.webp')
    const srcPath = path.join(dir, file)
    const outPath = path.join(dir, outName)

    const stat = fs.statSync(srcPath)
    const cacheKey = `${stat.size}-${Math.floor(stat.mtimeMs)}`
    const cacheId = `${folderName}/${file}`
    const upToDate = cache[cacheId] === cacheKey && fs.existsSync(outPath)

    if (!upToDate) {
      await sharp(srcPath)
        .resize({ width: MAX_WIDTH[folderName], withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath)
      cache[cacheId] = cacheKey
      processedCount++
    }
    producedNames.add(outName)
  }

  // Any .webp already sitting in the folder (e.g. uploaded directly)
  // is used as-is, even without a matching raw source file.
  for (const file of allFiles) {
    if (file.toLowerCase().endsWith('.webp')) producedNames.add(file)
  }

  const results = [...producedNames].map((name) => {
    const match = name.match(/\d+/)
    return { file: name, url: `/assets/${folderName}/${name}`, order: match ? parseInt(match[0], 10) : 0 }
  })
  results.sort((a, b) => a.order - b.order || a.file.localeCompare(b.file))

  return { results, processedCount }
}

const [galleryOut, servicesOut] = await Promise.all([
  processFolder('gallery'),
  processFolder('services'),
])

const manifest = {
  gallery: galleryOut.results,
  services: servicesOut.results,
}

fs.mkdirSync(path.dirname(MANIFEST_OUT), { recursive: true })
fs.writeFileSync(MANIFEST_OUT, JSON.stringify(manifest, null, 2))
fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2))

console.log(
  `[build-assets] gallery: ${manifest.gallery.length} photo(s) (${galleryOut.processedCount} newly optimized) · ` +
    `services: ${manifest.services.length} photo(s) (${servicesOut.processedCount} newly optimized)`
)