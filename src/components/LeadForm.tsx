import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChipStepView,
  ContactStepView,
  LeadTypeStepView,
  TextStepView,
} from '@/components/lead/StepViews';
import { Button } from '@/components/ui/Button';
import {
  FLOW_LENGTH,
  cleanAnswers,
  getSteps,
  validateContact,
  validateTextStep,
  type AnswerKey,
  type Answers,
  type ContactDetails,
  type ContactErrors,
  type LeadStep,
  type LeadType,
  type TextStep,
} from '@/lib/leadFlow';
import { EASE } from '@/lib/motion';
import { getBookingRedirect, submitLead } from '@/lib/submitLead';

const ADVANCE_DELAY_MS = 250;
const FOCUS_DELAY_MS = 420;

const EMPTY_CONTACT: ContactDetails = { firstName: '', lastName: '', email: '', phone: '' };

const stepVariants: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: 20 * direction }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: -20 * direction }),
};

const textActionClass =
  'inline-flex min-h-touch items-center gap-2 text-sm font-medium text-walnut underline decoration-brass underline-offset-4 transition-colors duration-300 ease-luxe hover:text-matte disabled:opacity-60';

export function LeadForm() {
  const navigate = useNavigate();
  const [leadType, setLeadType] = useState<LeadType | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState<ContactDetails>(EMPTY_CONTACT);
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [textError, setTextError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const advanceTimer = useRef<number | undefined>(undefined);
  const userNavigated = useRef(false);

  const steps = useMemo(() => getSteps(leadType), [leadType]);
  const step: LeadStep = steps[stepIndex];

  useEffect(() => () => window.clearTimeout(advanceTimer.current), []);

  useEffect(() => {
    if (!userNavigated.current) return;
    const timer = window.setTimeout(() => headingRef.current?.focus({ preventScroll: true }), FOCUS_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [stepIndex]);

  const moveTo = (nextIndex: number) => {
    window.clearTimeout(advanceTimer.current);
    userNavigated.current = true;
    setDirection(nextIndex > stepIndex ? 1 : -1);
    setStepIndex(nextIndex);
    setTextError(null);
  };

  const goNext = () => moveTo(stepIndex + 1);
  const goBack = () => moveTo(stepIndex - 1);

  const scheduleNext = () => {
    window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(goNext, ADVANCE_DELAY_MS);
  };

  const selectLeadType = (type: LeadType) => {
    setLeadType(type);
    scheduleNext();
  };

  const selectChoice = (key: AnswerKey, value: string) => {
    setAnswers((previous) => ({ ...previous, [key]: value }));
    scheduleNext();
  };

  const updateText = (key: AnswerKey, value: string) => {
    setAnswers((previous) => ({ ...previous, [key]: value }));
    setTextError(null);
  };

  const continueText = (textStep: TextStep) => {
    const error = validateTextStep(textStep, answers[textStep.key] ?? '');
    if (error) {
      setTextError(error);
      return;
    }
    goNext();
  };

  const skipPrice = () => {
    setAnswers((previous) => ({ ...previous, priceExpectation: undefined }));
    goNext();
  };

  const updateContact = (field: keyof ContactDetails, value: string) => {
    setContact((previous) => ({ ...previous, [field]: value }));
    setContactErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const submitContact = async () => {
    if (!leadType || submitting) return;
    const errors = validateContact(contact);
    setContactErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    const details = {
      firstName: contact.firstName.trim(),
      lastName: contact.lastName.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),
    };
    await submitLead({
      leadType,
      answers: cleanAnswers(answers),
      ...details,
      submittedAt: new Date().toISOString(),
    });

    const bookingUrl = getBookingRedirect(`${details.firstName} ${details.lastName}`, details.email);
    if (bookingUrl) {
      window.location.assign(bookingUrl);
      return;
    }
    navigate('/confirmed');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step.kind === 'contact') {
      void submitContact();
    } else if (step.kind === 'text') {
      continueText(step);
    }
  };

  const renderStep = (): ReactNode => {
    switch (step.kind) {
      case 'leadType':
        return <LeadTypeStepView heading={step.heading} headingRef={headingRef} selected={leadType} onSelect={selectLeadType} />;
      case 'chips':
        return (
          <ChipStepView
            heading={step.heading}
            headingRef={headingRef}
            options={step.options}
            selected={answers[step.key]}
            onSelect={(value) => selectChoice(step.key, value)}
          />
        );
      case 'text':
        return (
          <TextStepView
            heading={step.heading}
            headingRef={headingRef}
            label={step.label}
            placeholder={step.placeholder}
            value={answers[step.key] ?? ''}
            error={textError}
            onChange={(value) => updateText(step.key, value)}
          />
        );
      case 'contact':
        return (
          <ContactStepView
            heading={step.heading}
            headingRef={headingRef}
            values={contact}
            errors={contactErrors}
            disabled={submitting}
            onChange={updateContact}
          />
        );
    }
  };

  const progress = ((stepIndex + 1) / FLOW_LENGTH) * 100;

  return (
    <div className="rounded-card bg-cream-light p-6 text-matte shadow-lift md:p-10">
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-walnut">
        <span>
          Step {stepIndex + 1} of {FLOW_LENGTH}
        </span>
        <span>{leadType === 'buy' ? 'Buying' : leadType === 'sell' ? 'Selling' : 'Get started'}</span>
      </div>
      <div
        role="progressbar"
        aria-label="Form progress"
        aria-valuemin={1}
        aria-valuemax={FLOW_LENGTH}
        aria-valuenow={stepIndex + 1}
        className="relative mt-4 h-[3px] overflow-hidden rounded-full bg-cream-deep"
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-wood"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: EASE }}
        />
      </div>

      <form noValidate onSubmit={handleSubmit} aria-busy={submitting} className="mt-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${stepIndex}-${step.key}`}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: EASE }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {stepIndex > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-cream-deep pt-6">
            <button type="button" onClick={goBack} disabled={submitting} className={textActionClass}>
              <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
              Back
            </button>

            {step.kind === 'text' && (
              <div className="ml-auto flex items-center gap-4">
                {step.optional && (
                  <button type="button" onClick={skipPrice} className={textActionClass}>
                    Skip
                  </button>
                )}
                <Button type="submit">
                  Continue
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
                </Button>
              </div>
            )}

            {step.kind === 'contact' && (
              <Button type="submit" disabled={submitting} className="ml-auto">
                {submitting ? (
                  <>
                    <Loader2 size={16} strokeWidth={1.75} aria-hidden className="animate-spin" />
                    Preparing your times
                  </>
                ) : (
                  'See Available Times'
                )}
              </Button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
