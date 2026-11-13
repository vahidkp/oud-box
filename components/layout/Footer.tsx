import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { NewsletterForm } from './NewsletterForm';
import { SITE, whatsappLink } from '@/lib/site';

/** Flag of Oman — white / red / green bands with the red hoist band (emblem omitted at this size). */
function OmanFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 300" role="img" aria-label="Flag of Oman" className={className}>
      <rect width="600" height="300" fill="#DB161B" />
      <rect x="150" width="450" height="100" fill="#FFF" />
      <rect x="150" y="200" width="450" height="100" fill="#008000" />
    </svg>
  );
}

const legal = ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Refund Policy'];
const service = ['Contact Us', 'My Account', 'FAQ', 'Order via WhatsApp'];
const about = ['Our Story', 'Omani Heritage', 'Oud & Attar Oils', 'Gifting'];

function ColumnLinks({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="label-caps mb-5 text-gold-light">{title}</h4>
      <ul className="space-y-3 text-sm text-ivory/60">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="transition-colors hover:text-gold-light">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-lattice border-t border-gold/25 text-ivory">
      <div className="container-px py-12 sm:py-16">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1.5fr] lg:gap-x-10 lg:gap-y-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="h-28 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              An Omani perfume house blending rare oud, Dhofari frankincense and Jebel
              Akhdar rose — composed in Muscat for those who carry Oman&apos;s heritage of
              scent.
            </p>
          </div>

          <ColumnLinks title="Legal" items={legal} />
          <ColumnLinks title="Customer Service" items={service} />
          <ColumnLinks title="About" items={about} />

          <div>
            <h4 className="label-caps mb-5 text-gold-light">Join the Oud Box Circle</h4>
            <NewsletterForm />
            <div className="mt-6 flex items-center gap-4 text-ivory/80">
              <a href={SITE.instagramUrl} aria-label="Instagram" className="hover:text-gold-light">
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gold-light">
                <Facebook className="h-5 w-5" aria-hidden />
              </a>
              <a href={whatsappLink()} aria-label="WhatsApp" className="hover:text-gold-light">
                <MessageCircle className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 bg-black/40 text-ivory/60">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-4 text-center text-xs sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.name} ·{' '}
            <span lang="ar" dir="rtl" className="font-arabic text-sm">
              {SITE.nameAr}
            </span>
          </p>
          <p className="inline-flex items-start justify-center gap-2 sm:items-center">
            <OmanFlag className="mt-0.5 h-3.5 w-7 shrink-0 rounded-[2px] ring-1 ring-white/20 sm:mt-0" />
            <span>
              Crafted in Oman · {SITE.location} · {SITE.phoneDisplay}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
