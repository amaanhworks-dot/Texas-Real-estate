import { AGENT } from '@/config';
import { LegalDocument, type LegalSection } from '@/components/LegalDocument';

const SECTIONS: LegalSection[] = [
  {
    heading: 'Information We Collect',
    paragraphs: [
      'When you use the contact form on this website, we collect the details you choose to provide: your first and last name, email address, phone number, and the answers to the questions in the form, such as your target area, budget, timeline, or property address.',
      'We may also receive basic technical information that your browser shares with any website, such as your browser type and the pages you visit.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    paragraphs: [
      'We use the information you submit to respond to your inquiry, prepare for a consultation, and follow up about real estate services you asked about.',
      'We do not use your information for purposes unrelated to your inquiry without asking for your permission first.',
    ],
  },
  {
    heading: 'How We Share Your Information',
    paragraphs: [
      'We do not sell your personal information. We share it only with service providers that help us operate this website and respond to inquiries, and only as needed for those purposes.',
      'We may also disclose information when required by law or to protect the rights and safety of our clients and others.',
    ],
  },
  {
    heading: 'Cookies and Similar Technologies',
    paragraphs: [
      'This website may use cookies or similar technologies that help it function and remember basic preferences. You can control cookies through your browser settings, although some parts of the site may not work as intended if you disable them.',
    ],
  },
  {
    heading: 'Third-Party Services and Links',
    paragraphs: [
      'This website links to third-party sites, including social media profiles and booking tools. Those services have their own privacy practices, and we are not responsible for how they handle your information. Please review their policies before sharing personal details with them.',
    ],
  },
  {
    heading: 'Data Retention',
    paragraphs: [
      'We keep inquiry information for as long as it is needed to respond to you and to maintain a reasonable business record of our communications, after which we delete or de-identify it.',
    ],
  },
  {
    heading: 'Security',
    paragraphs: [
      'We use reasonable administrative and technical measures to protect the information you provide. No method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    heading: 'Your Choices and Rights',
    paragraphs: [
      'You may ask us to access, correct, or delete the personal information you have submitted, and you may ask us to stop contacting you at any time. To make a request, email us at the address listed below.',
    ],
  },
  {
    heading: 'Children’s Privacy',
    paragraphs: [
      'This website is intended for adults interested in real estate services. We do not knowingly collect personal information from children under the age of 13.',
    ],
  },
  {
    heading: 'Changes to This Policy and Contact',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The date at the top of this page shows when it was last revised. Questions about this policy can be sent to ' + AGENT.email + '.',
    ],
  },
];

export function Privacy() {
  return (
    <LegalDocument
      title="Privacy Policy"
      lastUpdated="November 12, 2026"
      intro={`This Privacy Policy explains how ${AGENT.name} and ${AGENT.brokerage} collect, use, and protect information when you visit this website or contact us through it.`}
      sections={SECTIONS}
    />
  );
}
