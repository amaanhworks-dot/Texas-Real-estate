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

export function getBookingRedirect(name: string, email: string): string | null {
  if (!BOOKING_URL) return null;
  const url = new URL(BOOKING_URL);
  url.searchParams.set('name', name);
  url.searchParams.set('email', email);
  return url.toString();
}
