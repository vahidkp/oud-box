import { Accordion } from '@/components/ui/Accordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SITE } from '@/lib/site';

// TODO(client): confirm delivery and exchange terms before launch.
const faqs: { q: string; a: string }[] = [
  {
    q: 'What is the difference between an eau de parfum and an attar?',
    a: 'Our eaux de parfum are alcohol-based sprays with a radiant trail, made for everyday wear. Attars and oud oils are concentrated, alcohol-free perfume oils applied with the dipstick to the pulse points — intimate, very long-lasting, and traditionally worn to prayer and gatherings.',
  },
  {
    q: 'How do I wear oud oil?',
    a: 'A little goes a long way. Warm a single drop between your wrists, then touch it behind the ears and onto the collar. For the classic Omani way, layer it under one of our perfumes or over the smoke of bakhoor.',
  },
  {
    q: 'How long does the fragrance last?',
    a: 'Our perfumes are blended at rich concentrations for strong projection and all-day longevity — typically 6–10 hours on skin, and noticeably longer on the dishdasha, abaya or shayla. Oud oils last longer still.',
  },
  {
    q: "What's the difference between the 50ml and 100ml?",
    a: 'Only the volume — the formula is identical. The 100ml offers better value per millilitre and is ideal once a scent has become your signature.',
  },
  {
    q: 'Do you deliver across Oman?',
    a: `Yes — we deliver to every governorate, from Muscat and Sohar to Nizwa, Sur and Salalah, dispatched from Muscat. For delivery elsewhere in the GCC, message us on WhatsApp at ${SITE.phoneDisplay}.`,
  },
  {
    q: 'Can I return or exchange my order?',
    a: `Yes — if something isn’t right, message us on WhatsApp at ${SITE.phoneDisplay} and our team will help arrange an exchange or guide you to your perfect match.`,
  },
];

export function ProductFaq() {
  return (
    <div>
      <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl">
        <Accordion
          variant="plain"
          defaultOpen={null}
          items={faqs.map((f) => ({ title: f.q, content: <p>{f.a}</p> }))}
        />
      </div>
    </div>
  );
}
