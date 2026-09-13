import manifest from './image-manifest.json'

export const LOGO = '/assets/0.png'

export const galleryImages = manifest.gallery.map((f) => ({
  src: f.url,
  category: 'Custom CNC Work',
}))

export const serviceImageList = manifest.services.map((f) => f.url)

export const aboutImage = '/assets/gallery/2.jpg'