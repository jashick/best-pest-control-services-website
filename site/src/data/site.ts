// Single source of truth for the business. Every page, the schema and llms.txt read from here.
// Replace every value marked TODO before launch (`python3 check.py` lists any that are left).
// Keep NAP (name, address, phone) identical to the Google Business Profile.

export const site = {
  name: 'B.E.S.T. Pest Control Services',   // exactly as on the GBP (copied 2026-11-25)
  shortName: 'B.E.S.T. Pest Control',
  url: 'https://www.bestpestkillerservice.com',
  phone: '(920) 698-9933',
  phoneIntl: '+1-920-698-9933',
  email: 'support@akillerservice.com',
  city: 'Sheboygan Falls',
  region: 'WI',
  regionName: 'Wisconsin',
  postalCode: '53085',
  streetAddress: '904A Monroe St',          // GBP format ("St", not "Street")
  founded: '2018',
  geo: { lat: 43.7243219, lng: -87.8212924 } as undefined | { lat: number; lng: number },
  owner: 'Trish Yost',
  schemaType: 'LocalBusiness',
  additionalType: 'https://en.wikipedia.org/wiki/Pest_control',
  description:
    'B.E.S.T. Pest Control Services (Bug Extermination Services by Trish) is a family-owned pest control and wildlife company in Sheboygan Falls, Wisconsin. Founded in 2018 by Trish Yost and run with her husband Jason, it handles insects, stinging insects, bed bugs, rodents and wildlife for homes and businesses across Sheboygan County and nearby counties.',
  tagline: 'Family-owned pest & wildlife control in Sheboygan County since 2018',
  serviceArea: 'Sheboygan County and parts of Fond du Lac, Manitowoc, Calumet, Ozaukee and Washington counties',
  hours: 'Mon–Fri 8am–5pm · Sat–Sun 10am–3pm',
  openingHours: ['Mo-Fr 08:00-17:00', 'Sa-Su 10:00-15:00'],
  priceRange: '$$',
  license: '',
  licenseName: '',
  licenseBy: '',
  payments: '',
  social: {
    facebook: 'https://www.facebook.com/bestpestkillerservice',
    instagram: 'https://www.instagram.com/akillerservice',
    youtube: '',
    google: 'https://maps.google.com/?cid=5042748085270380587',
  } as Record<string, string>,
  portal: 'https://portal.gorilladesk.com/bestpestkillerservice',   // existing customer portal (GorillaDesk)
  rating: { value: '5.0', count: 185, asOf: 'November 2026' },     // Google rating, update now and then
  quoteUrl: '/get-a-quote/',
  ctaLabel: 'Get a Free Quote',
  ctaShort: 'Get a Quote',
  ga4: '',
};

// GoHighLevel quote form. Paste the form's iframe src (e.g. https://api.leadconnectorhq.com/widget/form/XXXX
// or the white-label domain version). Empty = a "call us" card shows instead of the form.
// In GHL, set the form's on-submit redirect to <site.url>/thank-you/ for clean conversion tracking.
export const ghl = {
  embedScript: 'https://link.msgsndr.com/js/form_embed.js',
  quoteForm: 'https://form.jotform.com/241428861171052',   // client's existing JotForm; swap for a GHL form when ready
  quoteFormHeight: 1200,
};

// Photos live in public/images/photos/<name>.webp plus <name>-800w.webp (python3 scripts/convert_photos.py).
// Where the important part of a photo sits (CSS object-position), used when a hero or CTA crops it.
// People photos: keep heads in frame. Photos not listed are centered.
export const focus: Record<string, string> = {
  'best-pest-control-team-sheboygan-falls': '50% 22%',
  'best-pest-control-crew-four': '50% 4%',
  'best-pest-control-team-wide': '50% 20%',
  'best-pest-control-technicians-three': '50% 10%',
  'best-pest-control-crew-sheboygan-river': '50% 22%',
  'best-pest-control-team-park-bench': '50% 35%',
  'owners-with-service-truck-bw': '50% 30%',
  'trish-and-jason-yost-owners': '50% 15%',
  'trish-and-jason-yost-river': '50% 20%',
  'best-pest-truck-family-owned': '50% 45%',
};
export const pos = (name: string) => focus[name] || '50% 50%';
export const img = (name: string) => `/images/photos/${name}.webp`;
export const img800 = (name: string) => `/images/photos/${name}-800w.webp`;

// Videos (Loom or YouTube embed URL). Vertical clips: ratio '9/16'; landscape: '16/9'.
export type VideoInfo = { title: string; description: string; caption: string; embedUrl: string; thumbnail: string; uploadDate: string; duration: string; ratio: string };
export const videos: Record<string, VideoInfo> = {
  // promo: { title: '', description: '', caption: '', embedUrl: 'https://www.loom.com/embed/ID', thumbnail: '', uploadDate: '2026-01-01', duration: 'PT30S', ratio: '16/9' },
};
