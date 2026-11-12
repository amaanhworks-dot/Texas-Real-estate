import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Reveal, Section, SectionHeading } from '@/components/ui/Section';
import { FAQS } from '@/config';
import { cn } from '@/lib/cn';
import { EASE } from '@/lib/motion';

interface FAQItemProps {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

function FAQItem({ index, question, answer, open, onToggle }: FAQItemProps) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <li className="border-b border-brass">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex min-h-touch w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-serif text-2xl leading-[1.25] text-matte transition-colors duration-400 ease-luxe group-hover:text-walnut md:text-3xl">
            {question}
          </span>
          <span
            aria-hidden
            className={cn(
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wood text-walnut transition-[transform,background-color] duration-400 ease-luxe group-hover:bg-cream-deep',
              open && 'rotate-45 bg-cream-deep',
            )}
          >
            <Plus size={18} strokeWidth={1.5} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-7 leading-[1.65] text-soft-black">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" labelledBy="faq-title">
      <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions, answered plainly." />

      <Reveal>
        <ul className="mt-12 border-t border-brass">
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.question}
              index={index}
              question={item.question}
              answer={item.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
