import { AnimatePresence, motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AGENT } from '@/config';
import { useElementInView } from '@/hooks/useScrollState';
import { EASE } from '@/lib/motion';

export function MobileActionBar() {
  const heroInView = useElementInView('top');
  const formInView = useElementInView('start');
  const visible = !heroInView && !formInView;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="mobile-action-bar"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-brass bg-matte pb-[env(safe-area-inset-bottom)] text-cream shadow-lift md:hidden"
        >
          <div className="grid grid-cols-2 gap-3 px-4 py-3">
            <a
              href={`tel:${AGENT.phoneTel}`}
              className="flex min-h-touch items-center justify-center gap-2 rounded-md border border-brass text-sm font-medium tracking-wide transition-colors duration-400 ease-luxe hover:border-wood"
            >
              <Phone size={16} strokeWidth={1.5} aria-hidden />
              Call
            </a>
            <Link
              to="/#start"
              className="flex min-h-touch items-center justify-center rounded-md bg-cream text-sm font-medium tracking-wide text-matte transition-colors duration-400 ease-luxe hover:bg-cream-deep"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
