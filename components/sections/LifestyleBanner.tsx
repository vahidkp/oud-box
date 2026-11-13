import Image from 'next/image';

export function LifestyleBanner() {
  return (
    <section className="relative h-[44vh] min-h-[340px] w-full overflow-hidden">
      <Image
        src="/images/sections/lifestyle.jpg"
        alt="Smoke rising from a mabkhara incense burner over the desert at dusk"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-onyx/35" />
      <div className="container-px relative flex h-full flex-col items-center justify-center text-center text-ivory">
        <p className="label-caps mb-4 text-gold-light">Omani Hospitality</p>
        <h2 className="max-w-2xl font-display text-3xl font-normal leading-tight sm:text-5xl">
          Where Every Welcome Begins with Oud
        </h2>
      </div>
    </section>
  );
}
