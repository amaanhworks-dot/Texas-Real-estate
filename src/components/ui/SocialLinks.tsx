import { Facebook, House, Instagram, Linkedin } from 'lucide-react';
import { AGENT, SOCIAL_LINKS } from '@/config';

const ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  zillow: House,
} as const;

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3">
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${AGENT.name} on ${link.label} (opens in a new tab)`}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-brass text-cream transition-all duration-400 ease-luxe hover:-translate-y-0.5 hover:border-wood hover:text-brass hover:shadow-wood"
            >
              <Icon size={18} strokeWidth={1.5} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
