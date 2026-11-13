/**
 * "Oman's Heritage of Scent" — a dark lattice band (echoing the logo artwork) with a
 * bilingual ingredient marquee and four heritage pillars.
 * The marquee set is duplicated and the track translates -50% for a seamless loop;
 * padding-right equals the gap so the seam is invisible.
 */
const ingredients = [
  { en: 'Frankincense', ar: 'لبان' },
  { en: 'Oud', ar: 'عود' },
  { en: 'Rose', ar: 'ورد' },
  { en: 'Musk', ar: 'مسك' },
  { en: 'Saffron', ar: 'زعفران' },
  { en: 'Amber', ar: 'عنبر' },
  { en: 'Bakhoor', ar: 'بخور' },
];

const pillars = [
  {
    numeral: '١',
    title: 'Dhofari Frankincense',
    body: 'Hojari luban from the Dhofar mountains — the resin that travelled the ancient Incense Route from Oman to the world.',
  },
  {
    numeral: '٢',
    title: 'Jebel Akhdar Rose',
    body: 'Each spring, damask roses on the terraces of Al Jabal Al Akhdar are hand-picked and distilled into precious rosewater.',
  },
  {
    numeral: '٣',
    title: 'Oud & Bakhoor',
    body: 'In Omani homes every guest is welcomed with oud smoke from the mabkhara — a ritual of hospitality we bottle.',
  },
  {
    numeral: '٤',
    title: 'Composed in Muscat',
    body: 'Each Oud Box blend is composed in Muscat, marrying time-honoured Omani tradition with modern perfumery.',
  },
];

export function HeritageStrip() {
  return (
    <section className="bg-lattice border-y border-gold/25 text-ivory">
      {/* Ingredient marquee */}
      <div className="relative overflow-hidden border-b border-ivory/10 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-noir to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-noir to-transparent sm:w-24" />
        <ul className="flex w-max animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused] sm:gap-16 sm:pr-16">
          {[...ingredients, ...ingredients].map((item, i) => (
            <li
              key={`${item.en}-${i}`}
              aria-hidden={i >= ingredients.length}
              className="flex shrink-0 items-baseline gap-3"
            >
              <span className="label-caps text-ivory/70">{item.en}</span>
              <span lang="ar" dir="rtl" className="font-arabic text-xl text-gold-light">
                {item.ar}
              </span>
              {/* margin + the li's gap-3 equals the track gap, centring the diamond */}
              <span className="ml-9 h-1.5 w-1.5 rotate-45 bg-gold/60 sm:ml-[3.25rem]" aria-hidden />
            </li>
          ))}
        </ul>
      </div>

      <div className="container-px py-14 sm:py-20">
        <p className="label-caps mb-3 text-center text-gold-light">From the Land of Frankincense</p>
        <h2 className="mb-12 text-center font-display text-3xl tracking-wide sm:mb-14 sm:text-[2.5rem]">
          Oman&apos;s Heritage of Scent
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center">
              <span
                lang="ar"
                className="mb-5 flex h-14 w-14 rotate-45 items-center justify-center border border-gold/50"
                aria-hidden
              >
                <span className="-rotate-45 font-arabic text-2xl leading-none text-gold-light">
                  {p.numeral}
                </span>
              </span>
              <h3 className="font-display text-lg tracking-wide">{p.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/65">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
