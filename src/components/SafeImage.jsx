import { useState } from 'react'

// Renders an <img>, but hides its wrapper entirely if the file 404s.
// This lets the layout stay intact even before all asset numbers exist.
export default function SafeImage({ src, alt, className, wrapperClassName, loading = 'lazy', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return wrapperClassName ? <div className={`${wrapperClassName} hide-broken-img`} /> : null
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
