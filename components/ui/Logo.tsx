import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Oud Box Perfumes logo, extracted as vector artwork from the supplied brand file
 * (Oud_Box_22.pdf) with the black backdrop removed. The gold gradient was designed
 * for a black ground — place it on `bg-noir` / `bg-onyx` surfaces, not on ivory, where
 * the pale-gold highlights wash out.
 *
 * - `full`: the stacked lockup — calligraphic emblem, عود بوكس, OUD BOX, PERFUMES.
 * - `mark`: the calligraphic drop emblem on its own, for tight spaces.
 */
const ART = {
  full: { src: '/images/brand/oud-box-logo.svg', width: 332, height: 381 },
  mark: { src: '/images/brand/oud-box-mark.svg', width: 135, height: 186 },
} as const;

export function Logo({
  className,
  variant = 'full',
  priority = false,
}: {
  className?: string;
  variant?: keyof typeof ART;
  priority?: boolean;
}) {
  const art = ART[variant];
  return (
    <Image
      src={art.src}
      alt="Oud Box Perfumes"
      width={art.width}
      height={art.height}
      priority={priority}
      unoptimized
      className={cn('h-14 w-auto', className)}
    />
  );
}
