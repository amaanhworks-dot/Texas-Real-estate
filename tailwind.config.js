/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        'cream-light': 'var(--color-cream-light)',
        'cream-deep': 'var(--color-cream-deep)',
        wood: 'var(--color-warm-wood)',
        walnut: 'var(--color-walnut)',
        oak: 'var(--color-oak)',
        matte: 'var(--color-matte-black)',
        charcoal: 'var(--color-charcoal)',
        'soft-black': 'var(--color-soft-black)',
        brass: 'var(--color-brass)',
        muted: 'var(--color-muted-text)',
        'off-white': 'var(--color-off-white)',
        error: 'var(--color-error)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        base: ['17px', { lineHeight: '1.65' }],
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        touch: '3rem',
      },
      maxWidth: {
        content: '1140px',
      },
      borderRadius: {
        card: '16px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(27,27,25,0.04), 0 8px 24px -8px rgba(27,27,25,0.12), 0 24px 56px -24px rgba(27,27,25,0.18)',
        lift: '0 2px 4px rgba(27,27,25,0.04), 0 18px 40px -16px rgba(27,27,25,0.22), 0 32px 64px -32px rgba(91,64,48,0.28)',
        wood: '0 14px 30px -12px rgba(139,104,73,0.55)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
