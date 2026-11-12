import { Check, House, KeyRound, type LucideIcon } from 'lucide-react';
import type { RefObject } from 'react';
import { cn } from '@/lib/cn';
import type { ContactDetails, ContactErrors, LeadType } from '@/lib/leadFlow';

export const LEAD_HEADING_ID = 'lead-step-heading';

interface StepHeadingProps {
  heading: string;
  headingRef: RefObject<HTMLHeadingElement>;
}

function StepHeading({ heading, headingRef }: StepHeadingProps) {
  return (
    <h3 ref={headingRef} id={LEAD_HEADING_ID} tabIndex={-1} className="text-3xl leading-[1.2] focus:outline-none md:text-4xl">
      {heading}
    </h3>
  );
}

const LEAD_TYPE_OPTIONS: { value: LeadType; label: string; icon: LucideIcon }[] = [
  { value: 'buy', label: 'I want to buy', icon: KeyRound },
  { value: 'sell', label: 'I want to sell', icon: House },
];

interface LeadTypeStepViewProps extends StepHeadingProps {
  selected: LeadType | null;
  onSelect: (value: LeadType) => void;
}

export function LeadTypeStepView({ heading, headingRef, selected, onSelect }: LeadTypeStepViewProps) {
  return (
    <div>
      <StepHeading heading={heading} headingRef={headingRef} />
      <div role="group" aria-labelledby={LEAD_HEADING_ID} className="mt-8 grid gap-4 md:grid-cols-2">
        {LEAD_TYPE_OPTIONS.map(({ value, label, icon: Icon }) => {
          const active = selected === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(value)}
              className={cn(
                'group relative flex min-h-[10rem] flex-col justify-between rounded-card border p-6 text-left transition-[border-color,box-shadow,background-color] duration-400 ease-luxe',
                active ? 'border-wood bg-cream shadow-soft' : 'border-cream-deep bg-off-white hover:border-oak hover:shadow-soft',
              )}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream-deep text-walnut">
                <Icon size={20} strokeWidth={1.5} aria-hidden />
              </span>
              <span className="mt-8 font-serif text-2xl font-medium">{label}</span>
              <span
                aria-hidden
                className={cn(
                  'absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-400 ease-luxe',
                  active ? 'border-wood bg-wood text-cream' : 'border-cream-deep text-transparent',
                )}
              >
                <Check size={14} strokeWidth={2} />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface ChipStepViewProps extends StepHeadingProps {
  options: readonly string[];
  selected: string | undefined;
  onSelect: (value: string) => void;
}

export function ChipStepView({ heading, headingRef, options, selected, onSelect }: ChipStepViewProps) {
  return (
    <div>
      <StepHeading heading={heading} headingRef={headingRef} />
      <div role="group" aria-labelledby={LEAD_HEADING_ID} className="mt-8 flex flex-wrap gap-3">
        {options.map((option) => {
          const active = selected === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(option)}
              className={cn(
                'min-h-touch rounded-full border px-6 text-sm font-medium transition-colors duration-300 ease-luxe',
                active ? 'border-matte bg-matte text-cream' : 'border-cream-deep bg-off-white text-matte hover:border-wood',
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function TextField({ id, label, value, onChange, error, type = 'text', autoComplete, placeholder, disabled }: TextFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-matte">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="field"
      />
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

interface TextStepViewProps extends StepHeadingProps {
  label: string;
  placeholder: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;
}

export function TextStepView({ heading, headingRef, label, placeholder, value, error, onChange }: TextStepViewProps) {
  return (
    <div>
      <StepHeading heading={heading} headingRef={headingRef} />
      <div className="mt-8">
        <TextField id="lead-answer" label={label} placeholder={placeholder} value={value} error={error} onChange={onChange} />
      </div>
    </div>
  );
}

interface ContactStepViewProps extends StepHeadingProps {
  values: ContactDetails;
  errors: ContactErrors;
  disabled: boolean;
  onChange: (field: keyof ContactDetails, value: string) => void;
}

export function ContactStepView({ heading, headingRef, values, errors, disabled, onChange }: ContactStepViewProps) {
  return (
    <div>
      <StepHeading heading={heading} headingRef={headingRef} />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <TextField id="firstName" label="First name" value={values.firstName} error={errors.firstName} autoComplete="given-name" disabled={disabled} onChange={(v) => onChange('firstName', v)} />
        <TextField id="lastName" label="Last name" value={values.lastName} error={errors.lastName} autoComplete="family-name" disabled={disabled} onChange={(v) => onChange('lastName', v)} />
        <TextField id="email" label="Email" type="email" value={values.email} error={errors.email} autoComplete="email" disabled={disabled} onChange={(v) => onChange('email', v)} />
        <TextField id="phone" label="Mobile number" type="tel" value={values.phone} error={errors.phone} autoComplete="tel" disabled={disabled} onChange={(v) => onChange('phone', v)} />
      </div>
      <p className="mt-8 text-sm leading-[1.65] text-soft-black">By submitting, you agree to be contacted about your inquiry.</p>
    </div>
  );
}
