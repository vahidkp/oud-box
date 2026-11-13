export type Collection = 'men' | 'women' | 'attar';

export type ScentNote =
  | 'oud'
  | 'frankincense'
  | 'musk'
  | 'floral'
  | 'citrus'
  | 'woody'
  | 'fresh'
  | 'amber';

export type Badge = 'New' | 'Bestseller';

export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Arabic name, shown alongside the English name. */
  nameAr?: string;
  /** Short descriptor under the name, e.g. "Eau de Parfum · Oud & Saffron". */
  subtitle: string;
  collection: Collection;
  scentNotes: {
    top: ScentNote[];
    middle: ScentNote[];
    base: ScentNote[];
  };
  /** Headline price in OMR — treated as the price of the smallest size in `sizesMl`. */
  price: number;
  sizesMl?: number[];
  /** Optional exact per-size prices (ml → price). Overrides the derived value. */
  pricesByMl?: Record<number, number>;
  images: string[];
  description: string;
  badges?: Badge[];
}
