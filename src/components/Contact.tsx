import type { ReactNode } from 'react';
import { LeadForm } from '@/components/LeadForm';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Reveal, Section, SectionHeading } from '@/components/ui/Section';
import { AGENT, CONTACT_INTRO } from '@/config';

function ContactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="eyebrow text-brass">{label}</dt>
      <dd className="mt-2 text-lg leading-[1.5] text-cream">{children}</dd>
    </div>
  );
}

const linkClass = 'underline decoration-brass underline-offset-4 transition-colors duration-400 ease-luxe hover:text-brass';

export function Contact() {
  return (
    <Section id="start" labelledBy="contact-title" tone="dark">
      <div className="grid gap-16 md:grid-cols-12 md:gap-12">
        <div className="space-y-12 md:col-span-5">
          <SectionHeading dark id="contact-title" eyebrow={CONTACT_INTRO.eyebrow} title={CONTACT_INTRO.title}>
            <p>{CONTACT_INTRO.body}</p>
          </SectionHeading>

          <Reveal>
            <dl className="space-y-7">
              <ContactRow label="Phone">
                <a href={`tel:${AGENT.phoneTel}`} className={`${linkClass} font-serif text-3xl`}>
                  {AGENT.phone}
                </a>
              </ContactRow>
              <ContactRow label="Email">
                <a href={`mailto:${AGENT.email}`} className={`${linkClass} break-all`}>
                  {AGENT.email}
                </a>
              </ContactRow>
              <ContactRow label="Office">
                <address className="not-italic">
                  {AGENT.office.street}
                  <br />
                  {AGENT.office.city}, {AGENT.office.region} {AGENT.office.postalCode}
                </address>
              </ContactRow>
              <ContactRow label="Hours">
                {AGENT.hours.map((hours) => (
                  <span key={hours} className="block">
                    {hours}
                  </span>
                ))}
              </ContactRow>
            </dl>
          </Reveal>

          <Reveal>
            <p className="eyebrow mb-4 text-brass">Follow</p>
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal className="md:col-span-6 md:col-start-7">
          <LeadForm />
        </Reveal>
      </div>
    </Section>
  );
}
