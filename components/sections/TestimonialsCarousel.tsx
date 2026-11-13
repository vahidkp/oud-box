'use client';

import { Star } from 'lucide-react';
import { Carousel } from '@/components/ui/Carousel';
import { SectionHeading } from '@/components/ui/SectionHeading';

// TODO(client): placeholder testimonials — replace with genuine Oud Box customer reviews before launch.
const testimonials = [
  {
    quote:
      'Luban Dhofar smells like the frankincense souq in Salalah — warm, smoky and elegant. It lasts all day on my dishdasha.',
    name: 'Salim A.',
    location: 'Salalah',
  },
  {
    quote:
      'Ward Al Jabal is the most beautiful rose I have worn — soft, rich and so Omani. It made the perfect Eid gift.',
    name: 'Muna R.',
    location: 'Muscat',
  },
  {
    quote:
      'The Dahn Al Oud Malaki is deep and smooth. One drop before Friday prayer and the scent stays until evening.',
    name: 'Hilal K.',
    location: 'Nizwa',
  },
  {
    quote:
      'Easy ordering on WhatsApp and quick delivery to Sohar. The complimentary sample was a lovely touch — I ordered it next.',
    name: 'Aisha B.',
    location: 'Sohar',
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="bg-ivory">
      <div className="container-px py-14 sm:py-20">
        <SectionHeading eyebrow="Loved by Our Customers" title="Testimonials" />
        <Carousel
          slideClassName="basis-[88%] sm:basis-[48%] lg:basis-[32%]"
          showArrows={false}
          showDots
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col items-center border border-onyx/10 bg-[#fbf8f1] p-8 text-center"
            >
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" aria-hidden />
                ))}
              </div>
              <blockquote className="flex-1 font-display text-lg italic leading-relaxed text-onyx/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="label-caps text-onyx">{t.name}</span>
                <span className="mt-1 block text-xs text-grey">{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
