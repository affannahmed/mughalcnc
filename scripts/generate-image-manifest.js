import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const ASSETS = path.join(ROOT, 'public/assets')
const OUT = path.join(ROOT, 'src/data/image-manifest.json')

const VALID_EXT = /\.(jpe?g|png|webp)$/i

function listFolder(folderName) {
  const dir = path.join(ASSETS, folderName)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((file) => VALID_EXT.test(file))
    .map((file) => {
      const match = file.match(/\d+/)
      return {
        file,
        url: `/assets/${folderName}/${file}`,
        order: match ? parseInt(match[0], 10) : 0,
      }
    })
    .sort((a, b) => a.order - b.order || a.file.localeCompare(b.file))
}

const manifest = {
  gallery: listFolder('gallery'),
  services: listFolder('services'),
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2))

console.log(
  `[image-manifest] ${manifest.gallery.length} gallery photo(s), ${manifest.services.length} service photo(s).`
)