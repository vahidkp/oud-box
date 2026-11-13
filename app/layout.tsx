import type { Metadata } from 'next';
import { Amiri, Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MiniCartDrawer } from '@/components/cart/MiniCartDrawer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { SITE } from '@/lib/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

// Arabic product names and brand name (عود بوكس) — Naskh calligraphic style.
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-arabic',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'Oud Box',
    'Oud Box Perfumes',
    'عود بوكس',
    'Omani perfume',
    'Oman perfume',
    'Muscat perfume',
    'oud oil Oman',
    'frankincense perfume',
    'Dhofar luban',
    'attar',
    'mukhallat',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    locale: 'en_OM',
    images: [{ url: '/images/brand/og-default.jpg', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: ['/images/brand/og-default.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${amiri.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-noir focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MiniCartDrawer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
