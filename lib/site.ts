/** Central brand / contact configuration used across header, footer, cart, SEO. */

// TODO(client): confirm Oud Box's WhatsApp Business number, Instagram handle, domain
// and boutique address. Until then these are placeholders — the number below is a
// non-working dummy so no real person receives orders. Set the real number via
// NEXT_PUBLIC_WHATSAPP_NUMBER (international format, digits only, e.g. 968XXXXXXXX).
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '96800000000';

/** "96891234567" → "+968 9123 4567" (Omani numbers are 8 digits after the 968 code). */
function formatOmanPhone(digits: string): string {
  const local = digits.replace(/^968/, '');
  return `+968 ${local.slice(0, 4)} ${local.slice(4)}`.trim();
}

export const SITE = {
  name: 'Oud Box Perfumes',
  shortName: 'Oud Box',
  nameAr: 'عود بوكس',
  tagline: 'Omani Oud & Fine Perfumes',
  description:
    'Oud Box is an Omani perfume house from Muscat — blending rare oud, Dhofari frankincense and Jebel Akhdar rose into perfumes, oud oils and attars rooted in Oman’s centuries-old heritage of scent.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://oudbox.om',
  whatsappNumber: WHATSAPP_NUMBER,
  phoneDisplay: formatOmanPhone(WHATSAPP_NUMBER),
  instagram: 'oudbox.om',
  instagramUrl: 'https://instagram.com/oudbox.om',
  location: 'Muscat, Sultanate of Oman',
  mapsQuery: 'Muscat, Oman',
  announcement: 'Complimentary sample with every order · Delivery across all governorates of Oman',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'For Him', href: '/shop?collection=men' },
  { label: 'For Her', href: '/shop?collection=women' },
  { label: 'Oud & Attar Oils', href: '/shop?collection=attar' },
  { label: 'Our Story', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
