import { Menu } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileMenu } from '@/components/MobileMenu';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { NAV_LINKS } from '@/config';
import { useScrolledPast } from '@/hooks/useScrollState';
import { cn } from '@/lib/cn';

export function Navbar() {
  const scrolled = useScrolledPast(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-luxe',
          scrolled
            ? 'border-b border-brass/40 shadow-soft backdrop-blur-md [background-color:rgba(243,237,227,0.88)]'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-20 max-w-content items-center justify-between px-5 md:px-8 lg:h-24">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link to={`/#${link.id}`} className="link-underline py-2 text-sm font-medium tracking-wide text-matte">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button to="/#start" className="min-h-12">
              Book a Call
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="-mr-3 flex h-12 w-12 items-center justify-center rounded-md text-matte transition-colors duration-400 ease-luxe hover:text-walnut lg:hidden"
          >
            <Menu size={24} strokeWidth={1.5} aria-hidden />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
