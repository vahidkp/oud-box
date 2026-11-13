import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface HeroBannerProps {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  heading: string;
  /** Arabic line shown under the heading (Amiri). */
  headingAr?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/**
 * Light editorial split hero: copy on warm sand (with a faint gold lattice from the
 * logo artwork) beside the product image framed in an Omani arch. Sits under the black
 * header so the page opens bright rather than black-on-black.
 */
export function HeroBanner({
  image,
  imageAlt = 'Oud Box perfumes',
  eyebrow,
  heading,
  headingAr,
  subheading,
  ctaLabel = 'Shop the Collection',
  ctaHref = '/shop',
  secondaryLabel,
  secondaryHref,
}: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#f1ead9]">
      {/* faint gold diamond lattice, fading out toward the copy */}
      <div
        aria-hidden
        className="bg-lattice-light absolute inset-0 [mask-image:linear-gradient(to_right,transparent_0%,black_55%)]"
      />
      {/* warm glow behind the arch */}
      <div
        aria-hidden
        className="absolute -right-[15%] top-1/2 h-[130%] w-[70%] -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(212,175,55,0.28),transparent)] lg:-right-[5%] lg:w-[55%]"
      />

      <div className="container-px relative grid items-center gap-12 py-12 sm:py-16 lg:min-h-[calc(88vh_-_11rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12 xl:py-16">
        {/* Copy */}
        <div className="max-w-xl">
          {eyebrow && (
            <p
              className="label-caps mb-5 flex items-center gap-3 text-gold animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="h-px w-10 bg-gold/70" aria-hidden />
              {eyebrow}
            </p>
          )}
          <h1
            className="font-display text-4xl font-normal leading-[1.08] text-onyx animate-fade-up xs:text-[2.6rem] sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: '0.2s' }}
          >
            {heading}
          </h1>
          {headingAr && (
            <p
              lang="ar"
              dir="rtl"
              className="mt-3 text-left font-arabic text-2xl text-gold animate-fade-up sm:text-3xl"
              style={{ animationDelay: '0.25s' }}
            >
              {headingAr}
            </p>
          )}
          {subheading && (
            <p
              className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-onyx/70 animate-fade-up sm:text-base"
              style={{ animationDelay: '0.3s' }}
            >
              {subheading}
            </p>
          )}
          <div
            className="mt-9 flex flex-col gap-3 animate-fade-up sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            style={{ animationDelay: '0.4s' }}
          >
            <Button href={ctaHref} size="lg">
              {ctaLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="dark" size="lg" className="group">
                {secondaryLabel}
                <ArrowRight
                  className="h-4 w-4 text-gold-light transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Button>
            )}
          </div>
        </div>

        {/* Arch-framed image — on desktop its width tracks viewport height so the whole
            arch stays above the fold on shorter laptop screens */}
        <div
          className="relative mx-auto w-full max-w-[19rem] animate-fade-up xs:max-w-[21rem] sm:max-w-sm lg:mr-0 lg:max-w-[min(30rem,calc((100vh_-_17rem)_*_0.8))]"
          style={{ animationDelay: '0.3s' }}
        >
          {/* offset gold arch outline */}
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full border border-gold/60 sm:translate-x-5 sm:translate-y-5"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-noir shadow-[0_30px_60px_-20px_rgba(26,26,26,0.45)]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 24rem, 30rem"
              // expects a 4:5 portrait image, art-directed for the arch
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
