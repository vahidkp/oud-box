# Oud Box Perfumes — E-commerce Frontend

A 3-page luxury storefront (Home · Shop · Product Detail) for **Oud Box Perfumes
(عود بوكس)**, an Omani perfume house in Muscat. Built with **Next.js 14 App Router**,
TypeScript, Tailwind CSS, Zustand and Framer Motion, in Oud Box's black / gold / ivory
identity taken from the brand logo (`Oud_Box_22.pdf`).

The project began from an earlier perfume-storefront template; all brand, content,
currency and contact details have since been replaced for Oud Box.

## Quick start
```bash
npm install
cp .env.example .env.local   # optional for local dev
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Tech stack
| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, RSC, SSG) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + brand design tokens |
| State | Zustand (cart, wishlist, drawer) with `localStorage` persistence |
| Animation | Framer Motion + CSS keyframes |
| Carousels | Embla Carousel |
| Icons | lucide-react |
| Deploy | Vercel |

## Pages
- **`/`** — Home: hero, best-sellers carousel, value props, For Him/For Her split, scent-note
  explorer, featured grid, Omani heritage band, discovery strip, brand story, lifestyle
  banner, testimonials, contact strip.
- **`/shop`** — Catalogue with **URL-driven** collection + scent-note filters and sort
  (`/shop?collection=attar&note=frankincense&sort=price-asc`), shareable & bookmarkable,
  mobile filter drawer, empty state. Collections: `men`, `women`, `attar`.
- **`/product/[slug]`** — SSG page per SKU: gallery + thumbnails, size/qty selectors, scent
  profile, description accordion, trust badges, related-products carousel, per-product SEO.

## Project structure
```
app/            layout, home, shop, product/[slug], sitemap, robots, not-found
components/
  layout/       AnnouncementBar, Header, Footer, NewsletterForm
  sections/     Hero, ValueProps, CollectionSplit, CategoryExplorer, BestSellers,
                FeaturedGrid, HeritageStrip, BrandDiscoverStrip, BrandStoryBlock,
                LifestyleBanner, TestimonialsCarousel, ContactLocationStrip
  product/      ProductCard, ProductGrid, ProductCarousel, ProductGallery,
                ProductInfoPanel, ScentProfile, TrustBadges
  cart/         CartButtons, MiniCartDrawer
  shop/         ShopFilterBar
  ui/           Button, Badge, Accordion, Drawer, Carousel, Logo, SectionHeading, Reveal
lib/            types, utils, site config (lib/site.ts), use-mounted, store/{cart,wishlist,drawer}
data/           products.ts (12 SKUs: 4 for him, 4 for her, 4 oud & attar oils — prices in OMR)
public/images/  brand/ (Oud Box logo + emblem SVG, OG card), placeholders & interim photos
scripts/        gen-placeholders.mjs
```

## Cart & checkout (Phase 1)
Add-to-cart opens a slide-in mini-cart; checkout is a **WhatsApp order flow** — the CTA builds
a `wa.me` link pre-filled with the cart contents (number set via `NEXT_PUBLIC_WHATSAPP_NUMBER`).
Stripe/PayPal can be added in Phase 2.

## Brand assets
- `public/images/brand/oud-box-logo.svg` — full stacked logo, extracted as vector from
  `Oud_Box_22.pdf` (transparent; designed for black backgrounds).
- `public/images/brand/oud-box-mark.svg` — calligraphic emblem only.
- `app/icon.svg`, `app/apple-icon.png` — favicon / home-screen icon (emblem on black).
- `public/images/brand/og-default.jpg` — 1200×630 social share card.

## Images
Oud Box product photography has not been supplied yet. Each product currently uses a main
and a detail image (`public/images/products/ob-<slug>.jpg`, `ob-<slug>-detail.jpg`) cropped from
the AI-generated scenes in `Generate images/` — illustrative only, not the real bottles.
Replace them with Oud Box photography before launch, keeping the same file names. Never
use images showing another brand's logo or packaging. Generate real imagery
with the prompts in **[IMAGE_PROMPTS.md](./IMAGE_PROMPTS.md)** and the client's retouched
bottle/box photos for products. Regenerate placeholders any time with
`node scripts/gen-placeholders.mjs`.

## Deploy to Vercel
1. Push to GitHub and import the repo at vercel.com (framework auto-detected).
2. Set env vars `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_WHATSAPP_NUMBER` (see `.env.example`).
3. Connect the production domain and update `NEXT_PUBLIC_SITE_URL` to match.

## Notes / assumptions
- Currency displayed as **OMR** with three decimals (baisa); change in `lib/utils.ts → formatPrice`.
- **Placeholders to confirm before launch** (all in `lib/site.ts` unless noted): WhatsApp
  number (currently a non-working dummy), Instagram handle, domain, boutique address,
  delivery/exchange terms (`components/product/ProductFaq.tsx`), and the sample
  testimonials/reviews (`TestimonialsCarousel.tsx`, `ProductReviews.tsx`).
- About/Contact resolve to on-page anchors + WhatsApp; full pages are out of the 3-page scope.
