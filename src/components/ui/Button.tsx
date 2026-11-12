import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'outline' | 'text';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const base =
  'group inline-flex min-h-touch items-center justify-center gap-2 rounded-md text-sm font-medium tracking-wide transition-[background-color,box-shadow,color,border-color] duration-400 ease-luxe disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'px-7 bg-matte text-cream hover:bg-soft-black hover:shadow-wood',
  outline: 'px-7 border border-brass text-cream hover:bg-charcoal hover:shadow-wood',
  text: 'px-0 text-matte underline decoration-brass underline-offset-8 hover:text-walnut hover:decoration-wood',
};

const interaction = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export function Button({
  children,
  variant = 'primary',
  arrow = false,
  className,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          strokeWidth={1.75}
          aria-hidden
          className="transition-transform duration-400 ease-luxe group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <motion.div {...interaction} className="inline-flex">
        <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    const external = href.startsWith('http');
    return (
      <motion.div {...interaction} className="inline-flex">
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...interaction}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
