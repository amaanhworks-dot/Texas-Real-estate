import { Reveal, Section, SectionHeading } from '@/components/ui/Section';
import { TESTIMONIALS } from '@/config';

export function Testimonials() {
  return (
    <Section id="reviews" labelledBy="reviews-title" tone="deep">
      <SectionHeading id="reviews-title" eyebrow="Client Reviews" title="In their words." />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Reveal key={testimonial.name} className="flex flex-col rounded-card bg-cream-light p-8 shadow-soft md:p-10">
            <span aria-hidden className="font-serif text-7xl leading-none text-wood">
              &ldquo;
            </span>
            <blockquote className="mt-4 flex-1">
              <p className="font-serif text-2xl leading-[1.35] text-matte">{testimonial.quote}</p>
            </blockquote>
            <figcaption className="mt-8 border-t border-cream-deep pt-6">
              <cite className="not-italic">
                <span className="block font-medium text-matte">{testimonial.name}</span>
                <span className="mt-1 block text-sm text-walnut">{testimonial.neighborhood}</span>
              </cite>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
