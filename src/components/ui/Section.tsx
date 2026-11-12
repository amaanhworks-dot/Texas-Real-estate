import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { VIEWPORT, fadeUp, staggerContainer } from '@/lib/motion';

type Tone = 'cream' | 'light' | 'deep' | 'dark' | 'charcoal';

const toneClasses: Record<Tone, string> = {
  cream: 'bg-cream text-matte',
  light: 'bg-cream-light text-matte',
  deep: 'bg-cream-deep text-matte',
  dark: 'bg-matte text-cream',
  charcoal: 'bg-charcoal text-cream',
};

interface SectionProps {
  id?: string;
  labelledBy?: string;
  tone?: Tone;
  className?: string;
  backdrop?: ReactNode;
  children: ReactNode;
}

export function Section({ id, labelledBy, tone = 'cream', className, backdrop, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      aria-labelledby={labelledBy}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={staggerContainer}
      className={cn('relative overflow-hidden py-18 md:py-30', toneClasses[tone], className)}
    >
      {backdrop}
      <div className="relative mx-auto w-full max-w-content px-5 md:px-8">{children}</div>
    </motion.section>
  );
}

export function Reveal({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id: string;
  dark?: boolean;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, title, id, dark = false, align = 'left', children }: SectionHeadingProps) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className={cn('eyebrow', dark && 'text-brass')}>{eyebrow}</p>
      <h2 id={id} className={cn('mt-4 text-4xl md:text-5xl', dark && 'text-cream')}>
        {title}
      </h2>
      {children && (
        <div className={cn('mt-6 text-base leading-[1.65]', dark ? 'text-cream-deep' : 'text-soft-black')}>{children}</div>
      )}
    </Reveal>
  );
}
