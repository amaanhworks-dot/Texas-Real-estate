import { House } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AGENT } from '@/config';
import { cn } from '@/lib/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${AGENT.name}, back to homepage`}
      className={cn('group inline-flex items-center gap-3 rounded-md', className)}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-brass text-wood transition-colors duration-400 ease-luxe group-hover:border-wood">
        <House size={18} strokeWidth={1.5} aria-hidden />
      </span>
      <span className="font-serif text-2xl font-medium leading-none tracking-tight">{AGENT.name}</span>
    </Link>
  );
}
