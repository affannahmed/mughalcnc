// ============================================================
// CENTRAL BUSINESS CONFIG
// Edit this file to update contact info, hours, or links
// site-wide. Nothing else in the codebase should hardcode
// these values.
// ============================================================

export const site = {
  name: 'Mughal CNC Wood Carving',
  shortName: 'Mughal CNC',
  gbpName: 'Mughal CNC WOOD works',
  tagline: 'CNC Wood Carving & Custom Woodwork',
  city: 'Rawalpindi',
  region: 'Punjab, Pakistan',

  address: {
    line1: 'Malakabad, Bhata Rd',
    line2: 'near Sector I-14',
    city: 'Rawalpindi',
    country: 'Pakistan',
    full: 'Malakabad, Bhata Rd, near Sector I-14, Rawalpindi, Pakistan',
  },

  phoneDisplay: '+92 301 9699299',
  phoneTel: '+923019699299',
  email: 'ahmedijazmughal@gmail.com',

  facebook: 'https://www.facebook.com/adullahengineeringworks/',

  hours: [
    { days: 'Monday – Thursday', time: '8:30 AM – 9:00 PM' },
    { days: 'Friday', time: '2:00 PM – 9:00 PM' },
    { days: 'Saturday – Sunday', time: '8:30 AM – 9:00 PM' },
  ],

  rating: {
    value: '5.0',
    count: '5',
  },

  // Google Maps: search/directions link (no API key required)
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Mughal CNC WOOD works, Malakabad, Bhata Rd, near Sector I-14, Rawalpindi, Pakistan'),

  // Google Maps: embeddable iframe src (no API key required, uses public embed)
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=' +
    encodeURIComponent('Malakabad, Bhata Rd, near Sector I-14, Rawalpindi, Pakistan') +
    '&t=&z=15&ie=UTF8&iwloc=&output=embed',

  whatsappNumber: '923019699299',
  whatsappMessage:
    'Assalam o Alaikum, I found Mughal CNC Wood Carving online. I would like to discuss a custom woodwork/CNC project.',
}

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
export const telUrl = `tel:${site.phoneTel}`
export const mailUrl = `mailto:${site.email}`
