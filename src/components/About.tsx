import { Reveal, Section, SectionHeading } from '@/components/ui/Section';
import { AGENT, BIO_PARAGRAPHS, CREDENTIALS, IMAGES, PULL_QUOTE } from '@/config';

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid items-center gap-16 md:grid-cols-12 md:gap-12">
        <Reveal className="relative mx-auto w-full max-w-[460px] md:col-span-5 md:max-w-none">
          <div aria-hidden className="absolute -bottom-4 -left-4 h-full w-full rounded-card bg-walnut md:-bottom-6 md:-left-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-lift">
            <img
              src={IMAGES.aboutPortrait.src}
              alt={IMAGES.aboutPortrait.alt}
              width={800}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover object-[center_30%]"
            />
          </div>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <SectionHeading id="about-title" eyebrow={`About ${AGENT.name.split(' ')[0]}`} title="Local roots, financial discipline, and a steady hand." />

          <div className="mt-8 space-y-5">
            {BIO_PARAGRAPHS.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)}>
                <p className="leading-[1.65] text-soft-black">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <blockquote className="mt-10 border-l border-wood pl-6">
              <p className="font-serif text-2xl italic leading-[1.3] text-matte md:text-3xl">{PULL_QUOTE}</p>
            </blockquote>
          </Reveal>

          <Reveal>
            <ul className="mt-10 flex flex-wrap gap-3">
              {CREDENTIALS.map((credential) => (
                <li
                  key={credential}
                  className="rounded-full border border-wood bg-cream-light px-4 py-2 text-xs font-medium tracking-wide text-walnut"
                >
                  {credential}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
