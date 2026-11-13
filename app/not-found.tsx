import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="bg-lattice flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 py-20 text-center text-ivory">
      <Logo className="h-32 w-auto" />
      <h1 className="font-display text-4xl">Page Not Found</h1>
      <p className="max-w-sm text-sm text-ivory/65">
        The page you&apos;re looking for has drifted away like a fading scent. Let&apos;s
        get you back to the collection.
      </p>
      <Button href="/" variant="light">
        Return Home
      </Button>
    </div>
  );
}
