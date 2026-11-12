export type LeadType = 'buy' | 'sell';

export type AnswerKey =
  | 'area'
  | 'budget'
  | 'timeline'
  | 'preApproval'
  | 'address'
  | 'reason'
  | 'priceExpectation';

export type Answers = Partial<Record<AnswerKey, string>>;

export interface ContactDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export type ContactErrors = Partial<Record<keyof ContactDetails, string>>;

type ChipKey = Extract<AnswerKey, 'budget' | 'timeline' | 'preApproval' | 'reason'>;
type TextKey = Extract<AnswerKey, 'area' | 'address' | 'priceExpectation'>;

export interface LeadTypeStep {
  kind: 'leadType';
  key: 'leadType';
  heading: string;
}

export interface ChipStep {
  kind: 'chips';
  key: ChipKey;
  heading: string;
  options: readonly string[];
}

export interface TextStep {
  kind: 'text';
  key: TextKey;
  heading: string;
  label: string;
  placeholder: string;
  optional: boolean;
}

export interface ContactStep {
  kind: 'contact';
  key: 'contact';
  heading: string;
}

export type LeadStep = LeadTypeStep | ChipStep | TextStep | ContactStep;

export const FLOW_LENGTH = 6;

const TIMELINE_BUY = ['Within 30 days', '1-3 months', '3-6 months', 'Just exploring'] as const;
const TIMELINE_SELL = TIMELINE_BUY;

const LEAD_TYPE_STEP: LeadTypeStep = {
  kind: 'leadType',
  key: 'leadType',
  heading: 'What brings you here today?',
};

const CONTACT_STEP: ContactStep = {
  kind: 'contact',
  key: 'contact',
  heading: "Where should I send your times?",
};

const BUYER_STEPS: LeadStep[] = [
  {
    kind: 'text',
    key: 'area',
    heading: 'Which area(s) are you interested in?',
    label: 'Area or neighborhood',
    placeholder: 'e.g. Zilker, Westlake, Round Rock',
    optional: false,
  },
  {
    kind: 'chips',
    key: 'budget',
    heading: "What's your approximate budget?",
    options: ['Under $300K', '$300-500K', '$500-750K', '$750K-1M', '$1M+'],
  },
  {
    kind: 'chips',
    key: 'timeline',
    heading: 'When are you hoping to move?',
    options: TIMELINE_BUY,
  },
  {
    kind: 'chips',
    key: 'preApproval',
    heading: 'Are you pre-approved?',
    options: ['Yes', 'In progress', 'Not yet'],
  },
];

const SELLER_STEPS: LeadStep[] = [
  {
    kind: 'text',
    key: 'address',
    heading: "What's the property address?",
    label: 'Property address',
    placeholder: 'Street address, city',
    optional: false,
  },
  {
    kind: 'chips',
    key: 'timeline',
    heading: 'When are you hoping to sell?',
    options: TIMELINE_SELL,
  },
  {
    kind: 'chips',
    key: 'reason',
    heading: "What's prompting the sale?",
    options: ['Upsizing', 'Downsizing', 'Relocating', 'Inherited', 'Other'],
  },
  {
    kind: 'text',
    key: 'priceExpectation',
    heading: 'Do you have a price in mind?',
    label: 'Expected price (optional)',
    placeholder: 'e.g. $850,000',
    optional: true,
  },
];

export function getSteps(leadType: LeadType | null): LeadStep[] {
  if (!leadType) return [LEAD_TYPE_STEP];
  const flow = leadType === 'buy' ? BUYER_STEPS : SELLER_STEPS;
  return [LEAD_TYPE_STEP, ...flow, CONTACT_STEP];
}

export function validateTextStep(step: TextStep, value: string): string | null {
  const trimmed = value.trim();
  if (step.key === 'area') {
    return trimmed.length >= 2 ? null : 'Please tell me which area you have in mind.';
  }
  if (step.key === 'address') {
    return trimmed.length >= 5 ? null : 'Please enter the property address.';
  }
  if (trimmed && !/\d/.test(trimmed)) {
    return 'Enter an approximate price, or skip this question.';
  }
  return null;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizePhone(value: string): string {
  return value.replace(/\D/g, '');
}

export function validateContact(details: ContactDetails): ContactErrors {
  const errors: ContactErrors = {};
  if (!details.firstName.trim()) errors.firstName = 'Please enter your first name.';
  if (!details.lastName.trim()) errors.lastName = 'Please enter your last name.';
  if (!EMAIL_PATTERN.test(details.email.trim())) errors.email = 'Enter a valid email address.';
  const digits = normalizePhone(details.phone);
  const validPhone = digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
  if (!validPhone) errors.phone = 'Enter a 10-digit mobile number.';
  return errors;
}

export function cleanAnswers(answers: Answers): Answers {
  return Object.fromEntries(
    Object.entries(answers).filter(([, value]) => typeof value === 'string' && value.trim() !== ''),
  );
}
