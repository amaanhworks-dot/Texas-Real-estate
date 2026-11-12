import { Button } from '@/components/ui/Button';
import { Reveal, Section, SectionHeading } from '@/components/ui/Section';
import { HOW_I_HELP, IMAGES } from '@/config';

export function Services() {
  return (
    <Section id="help" labelledBy="help-title" tone="deep">
      <Reveal className="mb-16 overflow-hidden rounded-card shadow-soft">
        <img
          src={IMAGES.servicesBanner.src}
          alt={IMAGES.servicesBanner.alt}
          width={1600}
          height={700}
          loading="lazy"
          className="aspect-[4/3] h-full w-full object-cover object-center md:aspect-[21/8]"
        />
      </Reveal>

      <SectionHeading id="help-title" eyebrow="How I Help" title="Representation shaped around your goal." />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {HOW_I_HELP.map((card) => (
          <Reveal
            key={card.id}
            className="flex flex-col rounded-card bg-cream-light p-8 shadow-soft transition-[transform,box-shadow] duration-500 ease-luxe md:p-10 md:hover:-translate-y-1 md:hover:shadow-lift"
          >
            <h3 className="text-3xl md:text-4xl">{card.title}</h3>
            <ul className="mt-8 flex-1">
              {card.points.map((point, index) => (
                <li key={point} className="flex items-center gap-5 border-t border-cream-deep py-4">
                  <span className="font-serif text-xl text-wood">0{index + 1}</span>
                  <span className="text-base text-matte">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button variant="text" to="/#start" arrow>
                {card.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
