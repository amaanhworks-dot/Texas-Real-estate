import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Logo } from '@/components/ui/Logo';
import { AGENT, NAV_LINKS } from '@/config';

function EqualHousingMark() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden className="shrink-0 text-cream">
      <path d="M20 4 L37 18 H32 V36 H8 V18 H3 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 20 H26 M14 25 H26" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const linkClass = 'link-underline py-1 text-sm text-cream-deep transition-colors duration-400 ease-luxe hover:text-brass';

export function Footer() {
  return (
    <footer className="bg-charcoal pb-32 pt-18 text-cream md:pb-12 md:pt-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="space-y-6 md:col-span-4">
            <Logo />
            <p className="max-w-xs text-sm leading-[1.65] text-cream-deep">
              Quiet, precise real estate representation for Austin homeowners and buyers.
            </p>
            <SocialLinks />
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className="eyebrow text-brass">Explore</h2>
            <ul className="mt-5 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link to={`/#${link.id}`} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="eyebrow text-brass">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-cream-deep">
              <li className="flex gap-3">
                <Phone size={16} strokeWidth={1.5} aria-hidden className="mt-1 shrink-0 text-brass" />
                <a href={`tel:${AGENT.phoneTel}`} className={linkClass}>
                  {AGENT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} strokeWidth={1.5} aria-hidden className="mt-1 shrink-0 text-brass" />
                <a href={`mailto:${AGENT.email}`} className={`${linkClass} break-all`}>
                  {AGENT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} strokeWidth={1.5} aria-hidden className="mt-1 shrink-0 text-brass" />
                <span>
                  {AGENT.office.street}
                  <br />
                  {AGENT.office.city}, {AGENT.office.region} {AGENT.office.postalCode}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={16} strokeWidth={1.5} aria-hidden className="mt-1 shrink-0 text-brass" />
                <span>
                  {AGENT.hours.map((hours) => (
                    <span key={hours} className="block">
                      {hours}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-5 md:col-span-3">
            <h2 className="eyebrow text-brass">Brokerage</h2>
            <p className="text-sm leading-[1.65] text-cream-deep">
              {AGENT.brokerage}
              <br />
              TX License #{AGENT.licenseNumber}
            </p>
            <div className="flex items-start gap-4 rounded-md border border-brass p-4">
              <EqualHousingMark />
              <p className="text-xs leading-[1.5] text-cream-deep">
                <span className="font-medium uppercase tracking-[0.12em] text-cream">Equal Housing Opportunity</span>
                <br />
                We are committed to providing equal housing opportunity to all.
              </p>
            </div>
          </div>
        </div>

        <div className="hairline mt-16 opacity-50 md:mt-20" />
        <div className="flex flex-col gap-4 pt-8 text-sm text-cream-deep md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sarah Mitchell. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            <li>
              <Link to="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className={linkClass}>
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
