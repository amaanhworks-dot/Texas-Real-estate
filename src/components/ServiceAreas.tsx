import { Reveal, Section, SectionHeading } from '@/components/ui/Section';
import { AGENT, IMAGES } from '@/config';

export function ServiceAreas() {
  return (
    <Section
      id="areas"
      labelledBy="areas-title"
      tone="charcoal"
      backdrop={
        <>
          <img
            src={IMAGES.skyline.src}
            alt={IMAGES.skyline.alt}
            width={2000}
            height={1300}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
          />
          <div aria-hidden className="absolute inset-0 bg-[rgba(27,27,25,0.84)]" />
        </>
      }
    >
      <SectionHeading dark id="areas-title" eyebrow="Service Areas" title="Austin and the communities around it.">
        <p>Eight neighborhoods and cities where I know the streets, the schools, and the pricing.</p>
      </SectionHeading>

      <Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-brass pt-12 md:grid-cols-4">
          {AGENT.serviceAreas.map((area) => (
            <li key={area} className="flex items-center gap-4 font-serif text-2xl text-cream md:text-3xl">
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-wood" />
              {area}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
