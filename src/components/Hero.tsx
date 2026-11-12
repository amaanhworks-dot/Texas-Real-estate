import { motion, type Variants } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AGENT, HERO, IMAGES } from '@/config';
import { EASE } from '@/lib/motion';

const WORDS = HERO.headline.split(' ');

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.1 + index * 0.06 },
  }),
};

const groupVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: 0.7 + index * 0.15 },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-cream pb-18 pt-32 md:flex md:min-h-[100svh] md:items-center md:pb-24 md:pt-36"
    >
      <div className="mx-auto grid w-full max-w-content gap-14 px-5 md:grid-cols-12 md:items-center md:gap-12 md:px-8">
        <motion.div initial="hidden" animate="show" className="md:col-span-6">
          <motion.p custom={0} variants={groupVariants} className="eyebrow">
            {HERO.eyebrow}
          </motion.p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.25rem,7vw,4.75rem)] leading-[1.15] tracking-[-0.015em]"
          >
            {WORDS.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                custom={index}
                variants={wordVariants}
                className="inline-block pr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p custom={1} variants={groupVariants} className="mt-6 max-w-md text-lg leading-[1.65] text-soft-black">
            {HERO.subheading}
          </motion.p>

          <motion.div custom={2} variants={groupVariants} className="mt-10 flex flex-col items-start gap-4">
            <Button to="/#start" arrow className="w-full sm:w-auto">
              {HERO.cta}
            </Button>
            <p className="text-sm text-soft-black">{HERO.support}</p>
          </motion.div>

          <motion.p custom={3} variants={groupVariants} className="mt-10 border-t border-brass pt-5 text-xs uppercase tracking-[0.14em] text-walnut">
            Licensed in Texas · License #{AGENT.licenseNumber} · {AGENT.brokerage}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="relative mx-auto w-full max-w-[420px] md:col-span-6 md:max-w-none"
        >
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-card border border-brass md:translate-x-6 md:translate-y-6"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-card bg-cream-deep shadow-lift">
            <img
              src={IMAGES.heroPortrait.src}
              alt={IMAGES.heroPortrait.alt}
              width={800}
              height={1000}
              fetchPriority="high"
              className="h-full w-full object-cover object-[center_20%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
