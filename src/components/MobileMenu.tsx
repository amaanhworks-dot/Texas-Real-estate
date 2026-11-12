import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AGENT, NAV_LINKS } from '@/config';
import { EASE } from '@/lib/motion';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto overscroll-contain bg-matte text-cream"
        >
          <div className="flex h-20 shrink-0 items-center justify-between px-5 pt-[env(safe-area-inset-top)]">
            <span className="font-serif text-2xl font-medium">{AGENT.name}</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              autoFocus
              className="flex h-12 w-12 items-center justify-center rounded-md border border-brass text-cream transition-colors duration-400 ease-luxe hover:border-wood hover:text-brass"
            >
              <X size={20} strokeWidth={1.5} aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-5">
            <ul className="space-y-1">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + index * 0.06, duration: 0.6, ease: EASE }}
                  className="border-b border-soft-black"
                >
                  <Link
                    to={`/#${link.id}`}
                    onClick={onClose}
                    className="flex min-h-touch items-center justify-between py-3 font-serif text-4xl font-medium transition-colors duration-400 ease-luxe hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            className="space-y-4 px-5 pb-[calc(env(safe-area-inset-bottom)+2rem)]"
          >
            <Link
              to="/#start"
              onClick={onClose}
              className="flex min-h-touch w-full items-center justify-center rounded-md bg-cream text-sm font-medium tracking-wide text-matte transition-colors duration-400 ease-luxe hover:bg-cream-deep"
            >
              Book a Call
            </Link>
            <p className="text-center text-sm text-cream-deep">
              <a href={`tel:${AGENT.phoneTel}`} className="inline-flex min-h-touch items-center px-3 underline decoration-brass underline-offset-4">
                {AGENT.phone}
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
