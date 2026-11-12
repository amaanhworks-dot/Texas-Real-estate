import { AGENT } from '@/config';
import { LegalDocument, type LegalSection } from '@/components/LegalDocument';

const SECTIONS: LegalSection[] = [
  {
    heading: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using this website, you agree to these Terms of Use. If you do not agree, please do not use the site.',
    ],
  },
  {
    heading: 'Informational Purpose',
    paragraphs: [
      'The content on this website is provided for general information about real estate services in the Austin, Texas area. It is not legal, tax, financial, or investment advice.',
    ],
  },
  {
    heading: 'No Agency or Offer',
    paragraphs: [
      'Submitting an inquiry or booking a consultation does not create an agency, brokerage, or client relationship. A representation agreement is formed only when both parties sign a written agreement.',
    ],
  },
  {
    heading: 'Property and Market Information',
    paragraphs: [
      'Listing details, sale results, days on market, neighborhood information, and statistics shown on this website are believed to be accurate but are not guaranteed. Verify any information independently before making a decision.',
    ],
  },
  {
    heading: 'Intellectual Property',
    paragraphs: [
      'The text, photographs, design, and other content on this website are owned by or licensed to Sarah Mitchell and may not be copied, reproduced, or distributed for commercial purposes without written permission.',
    ],
  },
  {
    heading: 'Acceptable Use',
    paragraphs: [
      'You agree to use this website only for lawful purposes. You may not attempt to interfere with the site, submit false information, or use the site to send unsolicited messages or harmful content.',
    ],
  },
  {
    heading: 'Third-Party Links',
    paragraphs: [
      'This website links to third-party services, such as social media profiles and booking tools. We do not control those services and are not responsible for their content or practices.',
    ],
  },
  {
    heading: 'Disclaimer of Warranties',
    paragraphs: [
      'This website is provided on an “as is” and “as available” basis. We make no warranties, express or implied, about the operation or availability of the site.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, Sarah Mitchell and Lakeline Realty Group are not liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.',
    ],
  },
  {
    heading: 'Governing Law and Changes',
    paragraphs: [
      'These terms are governed by the laws of the State of Texas. We may update these terms at any time, and the date at the top of this page shows when they were last revised. Questions can be sent to ' +
        AGENT.email +
        '.',
    ],
  },
];

export function Terms() {
  return (
    <LegalDocument
      title="Terms of Use"
      lastUpdated="November 12, 2026"
      intro={`These Terms of Use govern your use of this website operated by ${AGENT.name}, ${AGENT.title}, with ${AGENT.brokerage}.`}
      sections={SECTIONS}
    />
  );
}
