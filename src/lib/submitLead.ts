import { BOOKING_URL, WEBHOOK_URL } from '@/config';
import type { Answers, ContactDetails, LeadType } from '@/lib/leadFlow';

export interface LeadPayload extends ContactDetails {
  leadType: LeadType;
  answers: Answers;
  submittedAt: string;
}

const WEBHOOK_TIMEOUT_MS = 8000;
const MIN_LOADING_MS = 800;

async function sendWebhook(payload: LeadPayload): Promise<void> {
  if (!WEBHOOK_URL) return;
  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });
  } catch {
    // A failed webhook must never block the visitor from reaching their booking step.
  }
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  await Promise.all([
    sendWebhook(payload),
    new Promise((resolve) => setTimeout(resolve, MIN_LOADING_MS)),
  ]);
}

function buildNotes(leadType: LeadType, answers: Answers): string {
  const parts: string[] = [];

  if (leadType === 'sell') {
    const property = answers.address ? `my property at ${answers.address}` : 'my home';
    let sentence = `Thinking of selling ${property}`;
    if (answers.timeline) sentence += `, likely in ${answers.timeline.toLowerCase()}`;
    if (answers.reason) sentence += ` (${answers.reason.toLowerCase()})`;
    if (answers.priceExpectation) sentence += `. Hoping for around ${answers.priceExpectation}`;
    parts.push(sentence + '.');
  } else {
    const where = answers.area ? `in ${answers.area}` : 'in the area';
    let sentence = `Looking to buy ${where}`;
    if (answers.budget) sentence += `, budget ${answers.budget}`;
    if (answers.timeline) sentence += `, hoping to move ${answers.timeline.toLowerCase()}`;
    if (answers.preApproval === 'Yes') sentence += '. Already pre-approved';
    else if (answers.preApproval === 'In progress') sentence += '. Pre-approval in progress';
    else if (answers.preApproval === 'Not yet') sentence += '. Not yet pre-approved';
    parts.push(sentence + '.');
  }

  return parts.join(' ');
}

export function getBookingRedirect(
  name: string,
  email: string,
  leadType: LeadType,
  answers: Answers,
  phone: string,
): string | null {
  if (!BOOKING_URL) return null;
  const url = new URL(BOOKING_URL);
  url.searchParams.set('name', name);
  url.searchParams.set('email', email);
  url.searchParams.set('notes', buildNotes(leadType, answers));
  url.searchParams.set('attendeePhoneNumber', phone);
  return url.toString();
}
