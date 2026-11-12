import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/config';
import { EASE, VIEWPORT } from '@/lib/motion';

type Stat = (typeof STATS)[number];

function CountUp({ value, prefix, suffix, decimals }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Track record" className="border-y border-brass bg-cream-light">
      <div className="mx-auto grid max-w-content grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE, delay: index * 0.1 }}
            className="flex flex-col items-center gap-3 border-brass px-4 py-10 text-center max-md:[&:nth-child(odd)]:border-r max-md:[&:nth-child(-n+2)]:border-b md:border-r md:py-14 md:last:border-r-0"
          >
            <span className="font-serif text-5xl font-medium leading-none text-matte md:text-6xl">
              <CountUp {...stat} />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-soft-black">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
