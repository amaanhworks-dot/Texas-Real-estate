import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalDocumentProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalDocument({ title, lastUpdated, intro, sections }: LegalDocumentProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <Link
        to="/"
        className="inline-flex min-h-touch items-center gap-2 text-sm font-medium text-walnut transition-colors duration-400 ease-luxe hover:text-matte"
      >
        <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
        Back to home
      </Link>

      <header className="mt-8 border-b border-cream-deep pb-10">
        <p className="eyebrow text-walnut">Legal</p>
        <h1 className="mt-4 text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-soft-black">Last updated {lastUpdated}</p>
        <p className="mt-6 text-base leading-[1.65] text-soft-black">{intro}</p>
      </header>

      <div className="mt-12 space-y-12">
        {sections.map((section, index) => (
          <section key={section.heading} aria-labelledby={`legal-section-${index + 1}`}>
            <h2 id={`legal-section-${index + 1}`} className="text-2xl md:text-3xl">
              {index + 1}. {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-[1.65] text-soft-black">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
