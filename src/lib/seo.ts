import { AGENT, NOINDEX, SEO, SOCIAL_LINKS } from '@/config';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function buildStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: AGENT.name,
    jobTitle: AGENT.title,
    url,
    image: SEO.image,
    telephone: AGENT.phoneTel,
    email: AGENT.email,
    identifier: `TX License #${AGENT.licenseNumber}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: AGENT.office.street,
      addressLocality: AGENT.office.city,
      addressRegion: AGENT.office.region,
      postalCode: AGENT.office.postalCode,
      addressCountry: AGENT.office.country,
    },
    parentOrganization: { '@type': 'Organization', name: AGENT.brokerage },
    areaServed: AGENT.serviceAreas.map((name) => ({
      '@type': 'Place',
      name: `${name}, TX`,
    })),
    openingHours: ['Mo-Fr 08:00-19:00', 'Sa 09:00-16:00'],
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function applySeo() {
  const url = window.location.origin;

  document.title = SEO.title;
  upsertMeta('name', 'description', SEO.description);
  upsertMeta('name', 'robots', NOINDEX ? 'noindex, nofollow' : 'index, follow');

  upsertMeta('property', 'og:title', SEO.title);
  upsertMeta('property', 'og:description', SEO.description);
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:site_name', AGENT.name);
  upsertMeta('property', 'og:locale', SEO.locale);
  upsertMeta('property', 'og:image', SEO.image);
  upsertMeta('property', 'og:image:alt', SEO.imageAlt);

  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', SEO.title);
  upsertMeta('name', 'twitter:description', SEO.description);
  upsertMeta('name', 'twitter:image', SEO.image);

  let script = document.head.querySelector<HTMLScriptElement>('script#structured-data');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(buildStructuredData(url));
}
