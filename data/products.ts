import type { Product } from '@/lib/types';

/**
 * Oud Box catalogue — 4 perfumes for him, 4 for her, 4 oud & attar oils. Prices in OMR.
 *
 * Images: each product has a main shot and a close-up detail shot (used for the card
 * hover and the PDP gallery) at public/images/products/ob-<slug>.jpg and ob-<slug>-detail.jpg.
 * They are crops of the AI-generated scenes in "Generate images/" — some mirrored and
 * colour-shifted (glass only, gold untouched) so every SKU has its own look. They are
 * illustrative, not photos of real Oud Box bottles: replace them with Oud Box product
 * photography before launch, keeping the same file names.
 */

// The `ob-` prefix keeps these URLs distinct from the previous template's photo paths,
// so no browser/CDN image cache can serve a stale image for an Oud Box product.
const photos = (slug: string) => [
  `/images/products/ob-${slug}.jpg`,
  `/images/products/ob-${slug}-detail.jpg`,
];

export const products: Product[] = [
  // ---------------- For Him ----------------
  {
    id: 'ob01',
    slug: 'oud-muscat',
    name: 'Oud Muscat',
    nameAr: 'عود مسقط',
    subtitle: 'Eau de Parfum · Oud & Saffron',
    collection: 'men',
    scentNotes: {
      top: ['citrus', 'amber'],
      middle: ['oud', 'woody'],
      base: ['oud', 'musk'],
    },
    price: 28,
    sizesMl: [50, 100],
    images: photos('oud-muscat'),
    description:
      'Our signature. Smoky oud and glowing saffron, softened by a whisper of bergamot and settling into warm woods and musk — the scent of a Muscat majlis at dusk.',
    badges: ['Bestseller'],
  },
  {
    id: 'ob02',
    slug: 'luban-dhofar',
    name: 'Luban Dhofar',
    nameAr: 'لبان ظفار',
    subtitle: 'Eau de Parfum · Hojari Frankincense',
    collection: 'men',
    scentNotes: {
      top: ['citrus', 'frankincense'],
      middle: ['frankincense', 'woody'],
      base: ['oud', 'musk'],
    },
    price: 26,
    sizesMl: [50, 100],
    images: photos('luban-dhofar'),
    description:
      'A tribute to the Land of Frankincense. Silvery Hojari luban from the Dhofar mountains rises over lemon peel and cedar, drying down to a resinous, softly smoky trail.',
    badges: ['Bestseller', 'New'],
  },
  {
    id: 'ob03',
    slug: 'jabal-shams',
    name: 'Jabal Shams',
    nameAr: 'جبل شمس',
    subtitle: 'Eau de Parfum · Citrus & Vetiver',
    collection: 'men',
    scentNotes: {
      top: ['citrus', 'fresh'],
      middle: ['woody'],
      base: ['musk', 'amber'],
    },
    price: 22,
    sizesMl: [50, 100],
    images: photos('jabal-shams'),
    description:
      'Named for Oman’s highest peak. Cool mountain air, Omani lime and green vetiver over a clean musky base — fresh, confident and made for the Muscat heat.',
  },
  {
    id: 'ob04',
    slug: 'layali-nizwa',
    name: 'Layali Nizwa',
    nameAr: 'ليالي نزوى',
    subtitle: 'Eau de Parfum · Oud & Leather',
    collection: 'men',
    scentNotes: {
      top: ['woody'],
      middle: ['oud', 'amber'],
      base: ['oud', 'musk'],
    },
    price: 24,
    sizesMl: [50, 100],
    images: photos('layali-nizwa'),
    description:
      'Evening in the old souq of Nizwa: dark oud, supple leather and dates warmed by amber. Deep, resinous and enduring — a fragrance for the connoisseur.',
  },

  // ---------------- For Her ----------------
  {
    id: 'ob05',
    slug: 'ward-al-jabal',
    name: 'Ward Al Jabal',
    nameAr: 'ورد الجبل',
    subtitle: 'Eau de Parfum · Jebel Akhdar Rose',
    collection: 'women',
    scentNotes: {
      top: ['floral', 'citrus'],
      middle: ['floral'],
      base: ['oud', 'musk'],
    },
    price: 27,
    sizesMl: [50, 100],
    images: photos('ward-al-jabal'),
    description:
      'Inspired by the damask rose terraces of Al Jabal Al Akhdar, distilled each spring into rosewater. Dewy rose petals over a soft veil of oud and white musk.',
    badges: ['Bestseller'],
  },
  {
    id: 'ob06',
    slug: 'khareef-salalah',
    name: 'Khareef Salalah',
    nameAr: 'خريف صلالة',
    subtitle: 'Eau de Parfum · Green Florals & Musk',
    collection: 'women',
    scentNotes: {
      top: ['fresh', 'citrus'],
      middle: ['floral'],
      base: ['musk', 'woody'],
    },
    price: 23,
    sizesMl: [50, 100],
    images: photos('khareef-salalah'),
    description:
      'The monsoon mists of Salalah in a bottle — misty greens, jasmine and coconut blossom over a tender, skin-soft musk. Light, luminous and joyful.',
    badges: ['New'],
  },
  {
    id: 'ob07',
    slug: 'durrat-muscat',
    name: 'Durrat Muscat',
    nameAr: 'درّة مسقط',
    subtitle: 'Eau de Parfum · White Florals & Amber',
    collection: 'women',
    scentNotes: {
      top: ['floral', 'citrus'],
      middle: ['floral'],
      base: ['amber', 'musk'],
    },
    price: 25,
    sizesMl: [50, 100],
    images: photos('durrat-muscat'),
    description:
      'The pearl of Muscat. Arabian jasmine and orange blossom glow over creamy sandalwood and golden amber — elegant, radiant and made for celebrations.',
    badges: ['Bestseller'],
  },
  {
    id: 'ob08',
    slug: 'rimal-wahiba',
    name: 'Rimal Wahiba',
    nameAr: 'رمال وهيبة',
    subtitle: 'Eau de Parfum · Saffron Rose & Vanilla',
    collection: 'women',
    scentNotes: {
      top: ['floral'],
      middle: ['amber', 'floral'],
      base: ['woody', 'musk'],
    },
    price: 24,
    sizesMl: [50, 100],
    images: photos('rimal-wahiba'),
    description:
      'Golden dunes of the Wahiba Sands at sunset. Saffron-kissed rose melts into warm vanilla and soft woods — an enveloping, sensual amber.',
  },

  // ---------------- Oud & Attar Oils ----------------
  {
    id: 'ob09',
    slug: 'dahn-al-oud-malaki',
    name: 'Dahn Al Oud Malaki',
    nameAr: 'دهن العود الملكي',
    subtitle: 'Pure Oud Oil',
    collection: 'attar',
    scentNotes: {
      top: ['oud'],
      middle: ['oud', 'woody'],
      base: ['oud', 'amber'],
    },
    price: 35,
    sizesMl: [3, 12],
    pricesByMl: { 12: 120 },
    images: photos('dahn-al-oud-malaki'),
    description:
      'Royal oud oil, aged for depth. Pure, alcohol-free and intensely long-lasting — a single drop carries the noble, honeyed warmth of oud from morning prayer until evening.',
    badges: ['Bestseller'],
  },
  {
    id: 'ob10',
    slug: 'misk-al-tahara',
    name: 'Misk Al Tahara',
    nameAr: 'مسك الطهارة',
    subtitle: 'White Musk Attar',
    collection: 'attar',
    scentNotes: {
      top: ['musk'],
      middle: ['floral', 'musk'],
      base: ['musk'],
    },
    price: 8,
    sizesMl: [12],
    images: photos('misk-al-tahara'),
    description:
      'A pure white musk attar — clean, soft and powdery. Treasured for its purity, this gentle alcohol-free oil leaves a delicate, comforting trail.',
    badges: ['New'],
  },
  {
    id: 'ob11',
    slug: 'attar-al-luban',
    name: 'Attar Al Luban',
    nameAr: 'عطر اللبان',
    subtitle: 'Dhofari Frankincense Attar',
    collection: 'attar',
    scentNotes: {
      top: ['frankincense', 'citrus'],
      middle: ['frankincense'],
      base: ['woody', 'musk'],
    },
    price: 14,
    sizesMl: [12],
    images: photos('attar-al-luban'),
    description:
      'Oman’s most treasured resin, captured as an attar. Bright, lemony frankincense with a calm, meditative depth — worn on its own or layered beneath oud.',
  },
  {
    id: 'ob12',
    slug: 'mukhallat-oud-box',
    name: 'Mukhallat Oud Box',
    nameAr: 'مخلّط عود بوكس',
    subtitle: 'Signature Perfume Oil Blend',
    collection: 'attar',
    scentNotes: {
      top: ['floral', 'amber'],
      middle: ['oud', 'frankincense'],
      base: ['musk', 'woody'],
    },
    price: 19,
    sizesMl: [12],
    images: photos('mukhallat-oud-box'),
    description:
      'Our house mukhallat: oud, frankincense, rose and musk blended in the traditional Omani way. Rich, rounded and beautiful on skin, dishdasha or abaya.',
    badges: ['New'],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 6): Product[] {
  const sameCollection = products.filter(
    (p) => p.collection === product.collection && p.id !== product.id
  );
  if (sameCollection.length >= limit) return sameCollection.slice(0, limit);
  const others = products.filter(
    (p) => p.collection !== product.collection && p.id !== product.id
  );
  return [...sameCollection, ...others].slice(0, limit);
}
