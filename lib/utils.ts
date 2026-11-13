import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Collection, Product, ScentNote } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a numeric price in Omani rials. OMR is conventionally shown with three
 * decimals (1 rial = 1,000 baisa), e.g. "OMR 28.000".
 */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'OMR',
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(value);
}

/**
 * Price for a chosen size. `product.price` is the price of the smallest size;
 * larger sizes scale by volume with a discount (each doubling adds ~70%, not
 * 100%), rounded to the nearest half rial. An explicit `pricesByMl` entry overrides this.
 */
const VOLUME_FACTOR = 0.7;

export function priceForSize(product: Product, sizeMl?: number): number {
  const sizes = product.sizesMl;
  if (!sizeMl || !sizes?.length) return product.price;

  const exact = product.pricesByMl?.[sizeMl];
  if (exact != null) return exact;

  const base = Math.min(...sizes);
  if (sizeMl <= base) return product.price;

  const ratio = sizeMl / base;
  const raw = product.price * (1 + (ratio - 1) * VOLUME_FACTOR);
  return Math.round(raw * 2) / 2;
}

export const COLLECTION_LABELS: Record<Collection, string> = {
  men: 'Perfumes for Him',
  women: 'Perfumes for Her',
  attar: 'Oud & Attar Oils',
};

export const COLLECTION_BADGE_LABELS: Record<Collection, string> = {
  men: 'FOR HIM',
  women: 'FOR HER',
  attar: 'OUD & ATTAR',
};

export const SCENT_NOTE_LABELS: Record<ScentNote, string> = {
  oud: 'Oud',
  frankincense: 'Frankincense',
  musk: 'Musk',
  floral: 'Floral',
  citrus: 'Citrus',
  woody: 'Woody',
  fresh: 'Fresh',
  amber: 'Amber',
};

export function uniqueNotes(notes: {
  top: ScentNote[];
  middle: ScentNote[];
  base: ScentNote[];
}): ScentNote[] {
  return Array.from(new Set([...notes.top, ...notes.middle, ...notes.base]));
}
