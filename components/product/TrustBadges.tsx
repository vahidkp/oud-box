import { Truck, Clock, ShieldCheck, BadgeCheck } from 'lucide-react';

const badges = [
  { icon: Truck, label: 'Delivery Across Oman', sub: 'Every governorate' },
  { icon: Clock, label: 'Long-Lasting', sub: 'Rich, aged concentrations' },
  { icon: BadgeCheck, label: 'Crafted in Oman', sub: 'Composed in Muscat' },
  { icon: ShieldCheck, label: 'Rare Ingredients', sub: 'Oud, luban & rose' },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {badges.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-2 rounded-sm border border-onyx/10 p-4 text-center"
        >
          <Icon className="h-6 w-6 text-gold" aria-hidden />
          <span className="text-xs font-medium">{label}</span>
          <span className="text-[11px] text-grey">{sub}</span>
        </div>
      ))}
    </div>
  );
}
