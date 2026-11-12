export const NOINDEX = true;

// Leave empty to skip the webhook request silently.
export const WEBHOOK_URL = '';
// Leave empty to send visitors to the confirmation page instead.
export const BOOKING_URL = 'https://cal.com/amaan-hussain-l2wbqq/mitchell';

export const AGENT = {
  name: 'Sarah Mitchell',
  title: 'Realtor®, Luxury & Residential Specialist',
  brokerage: 'Lakeline Realty Group',
  licenseNumber: '0712345',
  phone: '(512) 555-0147',
  phoneTel: '+15125550147',
  email: 'sarah@sarahmitchellhomes.com',
  office: {
    street: '2200 Barton Springs Rd, Suite 410',
    city: 'Austin',
    region: 'TX',
    postalCode: '78704',
    country: 'US',
  },
  hours: ['Mon-Fri 8am-7pm', 'Sat 9am-4pm'],
  yearsExperience: 12,
  serviceAreas: [
    'Zilker',
    'Barton Hills',
    'Tarrytown',
    'Mueller',
    'Westlake',
    'Bee Cave',
    'Round Rock',
    'Cedar Park',
  ],
} as const;

export const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { id: 'zillow', label: 'Zillow', href: 'https://www.zillow.com/' },
] as const;

export const IMAGES = {
  heroPortrait: {
    src: 'https://images.pexels.com/photos/30781748/pexels-photo-30781748.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Sarah Mitchell, Austin real estate advisor, smiling in a tailored suit',
  },
  aboutPortrait: {
    src: 'https://images.pexels.com/photos/7642003/pexels-photo-7642003.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Sarah Mitchell holding a sold sign, representing her Austin closings',
  },
  servicesBanner: {
    src: 'https://images.pexels.com/photos/8092427/pexels-photo-8092427.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Spacious luxury living and dining room with warm wood furnishings and soft ambient light',
  },
  resultsBanner: {
    src: 'https://images.pexels.com/photos/11578141/pexels-photo-11578141.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Architectural facade with black-framed windows and textured concrete',
  },
  skyline: {
    src: 'https://images.pexels.com/photos/20185085/pexels-photo-20185085.jpeg?auto=compress&cs=tinysrgb&w=2000',
    alt: 'Illuminated downtown Austin skyline reflected on the river at night',
  },
} as const;

export const SEO = {
  title: 'Sarah Mitchell | Austin Real Estate Agent | Lakeline Realty Group',
  description:
    'Sarah Mitchell is an Austin, Texas Realtor with Lakeline Realty Group, offering luxury and residential representation with clear communication, accurate pricing, and skilled negotiation.',
  image: IMAGES.skyline.src,
  imageAlt: IMAGES.skyline.alt,
  locale: 'en_US',
} as const;

export const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Results', id: 'results' },
  { label: 'Process', id: 'process' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'Contact', id: 'start' },
] as const;

export const HERO = {
  eyebrow: 'Austin, Texas Real Estate',
  headline: "Buying or selling in Austin? Let's talk.",
  subheading: 'Straight answers, honest pricing, and a plan built around your timeline.',
  cta: 'Get Started',
  support: 'Takes about 60 seconds. Pick a time that suits you.',
} as const;

export const STATS = [
  { value: AGENT.yearsExperience, prefix: '', suffix: '', decimals: 0, label: 'Years in Austin real estate' },
  { value: 186, prefix: '$', suffix: 'M+', decimals: 0, label: 'Closed sales' },
  { value: 340, prefix: '', suffix: '+', decimals: 0, label: 'Families served' },
  { value: 4.9, prefix: '', suffix: '', decimals: 1, label: 'Average client rating' },
] as const;

export const BIO_PARAGRAPHS = [
  'I was raised in Austin, and I have watched this city change street by street, from the older neighborhoods near the lake to the newer communities on its edges. That long view shapes how I work. I know what a home is worth in its immediate context, not just on a spreadsheet.',
  'I spent years in finance before I came to real estate, and that background still shows. I read contracts closely, I respect a clear timeline, and I would rather give you a hard truth about pricing on day one than a comfortable one on closing day. Clear communication, accurate pricing, and well-prepared negotiation are the parts of this work I care about most.',
  "I take on a small number of clients at a time, on purpose. When you work with me, you get my full attention, direct answers, and a plan built around your timeline rather than a schedule set by volume.",
] as const;

export const PULL_QUOTE = 'Good representation is quiet, precise, and always a step ahead.';

export const CREDENTIALS = [
  'Licensed in Texas',
  'Member, Austin Board of REALTORS®',
  "Accredited Buyer's Representative",
] as const;

export const HOW_I_HELP = [
  {
    id: 'sellers',
    title: 'For Sellers',
    points: ['Pricing strategy', 'Preparation and marketing', 'Negotiation'],
    cta: 'Plan my sale',
  },
  {
    id: 'buyers',
    title: 'For Buyers',
    points: ['Search strategy', 'Offer strategy', 'Closing guidance'],
    cta: 'Start my search',
  },
] as const;

export const RESULTS = [
  { area: 'Tarrytown', soldAt: '$1.42M', daysOnMarket: 9 },
  { area: 'Mueller', soldAt: '$685K', daysOnMarket: 6 },
  { area: 'Westlake', soldAt: '$2.15M', daysOnMarket: 18 },
] as const;

export const PROCESS_STEPS = [
  "Tell me what you're looking for.",
  'Pick a time that fits your schedule.',
  "We talk, and I come prepared.",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'Sarah priced our home perfectly and we had three offers in the first weekend. Calm, sharp, and always one step ahead.',
    name: 'Daniel & Priya',
    neighborhood: 'Tarrytown',
  },
  {
    quote:
      'As first-time buyers we were nervous. She explained every step and never once made us feel rushed.',
    name: 'Marcus',
    neighborhood: 'Mueller',
  },
  {
    quote:
      'We relocated from Chicago and she handled everything. We closed in 31 days and loved every moment.',
    name: 'The Hendersons',
    neighborhood: 'Westlake',
  },
] as const;

export const FAQS = [
  {
    question: 'How quickly will you respond?',
    answer:
      'Sarah aims to respond to inquiries within one business day. If you reach out during business hours, she will do her best to get back to you sooner.',
  },
  {
    question: 'What does it cost to work with you?',
    answer:
      'The cost of representation depends on the services involved and the details of your transaction. Sarah will explain any applicable fees and compensation arrangements clearly before you make a commitment.',
  },
  {
    question: 'How do you price a home?',
    answer:
      'Sarah reviews recent comparable sales, current competition, neighborhood trends, property condition, and buyer demand to develop a pricing strategy suited to your home and timeline.',
  },
  {
    question: 'Do you work with first-time buyers?',
    answer:
      'Absolutely. Sarah guides first-time buyers through each stage, from understanding the market and preparing an offer to inspections, negotiations, and closing.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'Sarah works across Austin and surrounding communities, including Zilker, Barton Hills, Tarrytown, Mueller, Westlake, Bee Cave, Round Rock, and Cedar Park.',
  },
] as const;

export const CONTACT_INTRO = {
  eyebrow: 'Contact',
  title: "Let's find your next step.",
  body: 'Answer a few quick questions and choose a time to talk. Sarah reviews every inquiry personally.',
} as const;
