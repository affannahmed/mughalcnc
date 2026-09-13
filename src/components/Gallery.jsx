import { useCallback, useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryImages } from '../data/images'
import { useReveal } from '../hooks'

export default function Gallery() {
  const headRef = useReveal()
  const [activeIndex, setActiveIndex] = useState(null)
  const [broken, setBroken] = useState({})

  const visibleImages = galleryImages.filter((_, i) => !broken[i])

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + visibleImages.length) % visibleImages.length)),
    [visibleImages.length]
  )
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % visibleImages.length)),
    [visibleImages.length]
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, showPrev, showNext])

  const active = activeIndex !== null ? visibleImages[activeIndex] : null

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <p className="eyebrow-label">Our work</p>
          <h2>Featured Work / Gallery</h2>
          <p>A look at recent CNC carving, doors, panels and jali work from the workshop.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item, i) =>
            broken[i] ? null : (
              <button
                key={i}
                type="button"
                className="gallery-tile"
                onClick={() => setActiveIndex(visibleImages.findIndex((v) => v === item))}
                aria-label="View photo, full size"
              >
                <img
                  src={item.src}
                  alt="Custom CNC wood carving — Mughal CNC Wood Carving, Rawalpindi"
                  loading="lazy"
                  onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                />
              </button>
            )
          )}
        </div>
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="lightbox__close" onClick={close} aria-label="Close">
            <X size={20} />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={showPrev} aria-label="Previous image">
            <ChevronLeft size={22} />
          </button>
          <img src={active.src} alt="Custom CNC wood carving — Mughal CNC Wood Carving" />
          <button className="lightbox__nav lightbox__nav--next" onClick={showNext} aria-label="Next image">
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  )
}