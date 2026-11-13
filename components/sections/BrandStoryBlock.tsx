import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function BrandStoryBlock() {
  return (
    <section id="about" className="scroll-mt-28 border-y border-onyx/10 bg-[#f1ead9]">
      <div className="container-px py-14 sm:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 min-w-0 md:order-1">
            <p className="label-caps mb-4 text-gold">Our Story</p>
            <h2 className="font-display text-3xl tracking-wide sm:text-[2.5rem]">
              Born in Muscat, Rooted in Heritage
            </h2>
            <p lang="ar" dir="rtl" className="mt-2 text-left font-arabic text-2xl text-gold">
              عود بوكس
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-grey">
              <p>
                For thousands of years, Oman has perfumed the world. Frankincense from Dhofar
                travelled the Incense Route to distant empires, roses from Al Jabal Al Akhdar
                were distilled into rosewater, and in every Omani home guests were — and still
                are — welcomed with the smoke of oud.
              </p>
              <p>
                Oud Box was born in Muscat to carry that heritage into every day. Like a
                treasure box of scent, each perfume, oud oil and attar is composed from
                carefully chosen oud, luban, rose and musk, and finished with the patience
                Omani perfumery has always demanded.
              </p>
            </div>
            <Button href="/shop" variant="dark" className="mt-8">
              Explore the Collection
            </Button>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden md:order-2">
            <Image
              src="/images/hero/hero.jpg"
              alt="Oud Box perfume bottle on dark marble in warm golden light"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              // bottle sits right-of-centre in the wide source image
              className="object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
