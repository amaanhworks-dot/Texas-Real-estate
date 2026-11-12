import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EASE } from '@/lib/motion';

function CheckMark() {
  return (
    <motion.svg
      viewBox="0 0 96 96"
      width="96"
      height="96"
      aria-hidden
      fill="none"
      className="text-brass"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <motion.path
        d="M30 50 L43 63 L67 36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
      />
    </motion.svg>
  );
}

export function Confirmed() {
  return (
    <section
      aria-labelledby="confirmed-title"
      className="mx-auto flex min-h-[80vh] w-full max-w-content flex-col items-center justify-center px-5 py-32 text-center md:px-8"
    >
      <CheckMark />
      <p className="eyebrow mt-10 text-walnut">Consultation requested</p>
      <h1 id="confirmed-title" className="mt-4 text-4xl md:text-5xl">
        You&rsquo;re booked.
      </h1>
      <p className="mt-6 max-w-md text-base leading-[1.65] text-soft-black">
        Thank you for reaching out. Sarah has received your details and will be in touch shortly to confirm your
        consultation.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex min-h-touch items-center gap-2 text-sm font-medium text-matte underline decoration-brass underline-offset-8 transition-colors duration-400 ease-luxe hover:text-walnut"
      >
        <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
        Return to home
      </Link>
    </section>
  );
}
