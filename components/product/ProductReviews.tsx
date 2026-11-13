import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Review {
  name: string;
  location: string;
  date: string;
  rating: number;
  body: string;
}

// TODO(client): placeholder reviews — replace with genuine verified Oud Box reviews before launch.
const reviews: Review[] = [
  {
    name: 'Maryam S.',
    location: 'Muscat',
    date: 'October 2026',
    rating: 5,
    body: 'Rich, elegant and it lasts the whole day — I still smell it on my shayla the next morning. Beautifully presented too. This is my third order from Oud Box.',
  },
  {
    name: 'Khalfan H.',
    location: 'Barka',
    date: 'September 2026',
    rating: 5,
    body: 'Real Omani character — you can smell the quality of the oud and luban. Projection is excellent and I get compliments at every majlis.',
  },
  {
    name: 'Badriya M.',
    location: 'Sur',
    date: 'September 2026',
    rating: 4,
    body: 'Lovely, refined fragrance and quick delivery to Sur. I would have liked it a touch sweeter, but the quality is clearly there.',
  },
  {
    name: 'Ahmed R.',
    location: 'Seeb',
    date: 'August 2026',
    rating: 5,
    body: 'The complimentary sample sealed the deal — I ended up ordering two more. Very smooth WhatsApp ordering.',
  },
];

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn('inline-flex gap-0.5 text-gold', className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn('h-4 w-4', i < Math.round(rating) ? 'fill-gold' : 'fill-none text-onyx/20')}
        />
      ))}
    </span>
  );
}

export function ProductReviews({ productName }: { productName: string }) {
  const count = reviews.length;
  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / count;

  return (
    <div>
      {/* Summary */}
      <div className="flex flex-col items-start gap-4 border-b border-onyx/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="label-caps mb-2 text-gold">Customer Reviews</p>
          <h2 className="font-display text-2xl sm:text-3xl">What People Are Saying</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl leading-none text-onyx">
            {average.toFixed(1)}
          </span>
          <span className="flex flex-col">
            <Stars rating={average} />
            <span className="mt-1 text-xs text-grey">
              Based on {count} review{count === 1 ? '' : 's'}
            </span>
          </span>
        </div>
      </div>

      {/* Review cards */}
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {reviews.map((review, i) => (
          <li
            key={`${review.name}-${i}`}
            className="flex min-w-0 flex-col rounded-sm border border-onyx/10 bg-[#fbf8f1] p-6"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <Stars rating={review.rating} />
              <span className="text-xs text-grey">{review.date}</span>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-onyx/80">“{review.body}”</p>
            <p className="mt-4 text-xs text-grey">
              <span className="label-caps text-onyx">{review.name}</span> · {review.location}
              <span className="ml-1 text-gold">· Verified buyer</span>
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-grey">
        Reviews reflect customer experiences with {productName} and other Oud Box fragrances.
      </p>
    </div>
  );
}
