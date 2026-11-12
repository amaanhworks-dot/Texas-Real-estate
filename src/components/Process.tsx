import { Reveal, Section, SectionHeading } from '@/components/ui/Section';
import { PROCESS_STEPS } from '@/config';

export function Process() {
  return (
    <Section id="process" labelledBy="process-title" tone="light">
      <SectionHeading id="process-title" eyebrow="The Process" title="Three steps, no guesswork." />

      <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
        {PROCESS_STEPS.map((step, index) => (
          <li key={step} className="list-none">
            <Reveal className="flex flex-col">
              <span aria-hidden className="font-serif text-7xl leading-none text-wood md:text-8xl">
                0{index + 1}
              </span>
              <div className="hairline mt-6 bg-brass" />
              <h3 className="mt-6 text-2xl leading-[1.25] md:text-3xl">{step}</h3>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
