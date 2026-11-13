import { HeroBanner } from '@/components/sections/HeroBanner';
import { BestSellers } from '@/components/sections/BestSellers';
import { ValuePropsRow } from '@/components/sections/ValuePropsRow';
import { CollectionSplit } from '@/components/sections/CollectionSplit';
import { CategoryExplorer } from '@/components/sections/CategoryExplorer';
import { FeaturedGrid } from '@/components/sections/FeaturedGrid';
import { HeritageStrip } from '@/components/sections/HeritageStrip';
import { BrandDiscoverStrip } from '@/components/sections/BrandDiscoverStrip';
import { BrandStoryBlock } from '@/components/sections/BrandStoryBlock';
import { LifestyleBanner } from '@/components/sections/LifestyleBanner';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { ContactLocationStrip } from '@/components/sections/ContactLocationStrip';
import { Reveal } from '@/components/ui/Reveal';

export default function HomePage() {
  return (
    <>
      <HeroBanner
        image="/images/hero/hero-arch.jpg"
        imageAlt="Attar bottles, oud wood and rosebuds beside a brass perfumer's scale"
        eyebrow="Crafted in Muscat · Sultanate of Oman"
        heading="The Scent of Omani Heritage"
        headingAr="عبق التراث العُماني"
        subheading="Rare oud, Dhofari frankincense and Jebel Akhdar rose — composed into perfumes, oud oils and attars worthy of Omani hospitality."
        ctaLabel="Discover the Collection"
        ctaHref="/shop"
        secondaryLabel="Our Story"
        secondaryHref="/#about"
      />
      <Reveal>
        <BestSellers />
      </Reveal>
      <ValuePropsRow />
      <Reveal>
        <CollectionSplit />
      </Reveal>
      <CategoryExplorer />
      <Reveal>
        <FeaturedGrid />
      </Reveal>
      <HeritageStrip />
      <Reveal>
        <BrandDiscoverStrip />
      </Reveal>
      <BrandStoryBlock />
      <LifestyleBanner />
      <TestimonialsCarousel />
      <ContactLocationStrip />
    </>
  );
}
