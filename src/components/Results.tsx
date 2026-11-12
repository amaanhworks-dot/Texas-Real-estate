import { Reveal, Section, SectionHeading } from '@/components/ui/Section';
import { IMAGES, RESULTS } from '@/config';

export function Results() {
  return (
    <Section id="results" labelledBy="results-title">
      <Reveal className="mb-16 overflow-hidden rounded-card shadow-soft">
        <img
          src={IMAGES.resultsBanner.src}
          alt={IMAGES.resultsBanner.alt}
          width={1600}
          height={700}
          loading="lazy"
          className="aspect-[4/3] h-full w-full object-cover object-center md:aspect-[21/8]"
        />
      </Reveal>

      <SectionHeading id="results-title" eyebrow="Recent Results" title="Recent sales across Austin." />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {RESULTS.map((result) => (
          <Reveal
            key={result.area}
            className="flex flex-col rounded-card bg-walnut p-8 text-cream shadow-lift transition-[transform,box-shadow] duration-500 ease-luxe md:hover:-translate-y-1"
          >
            <div className="flex h-full flex-col">
              <span className="eyebrow text-brass">Sold</span>
              <h3 className="mt-3 text-4xl text-cream">{result.area}</h3>
              <div className="hairline mt-6 bg-brass" />
              <p className="mt-6 font-serif text-4xl font-medium leading-none text-cream">Sold at {result.soldAt}</p>
              <p className="mt-auto pt-8 text-sm text-cream-deep">{result.daysOnMarket} days on market</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
