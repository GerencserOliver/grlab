import { getLocale, getTranslations } from 'next-intl/server';

export const SITE_URL = 'https://www.grlab.hu';
export const SITE_NAME = 'GRLab';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const BUSINESS = {
  phone: '+36704316723',
  phoneDisplay: '+36 70 431 6723',
  phoneHref: 'tel:+36704316723',
  email: 'info@grlab.hu',
  streetAddress: 'Galgóczi Erzsébet utca 14',
  postalCode: '9013',
  locality: 'Győr',
  region: 'Győr-Moson-Sopron',
  country: 'HU',
};

// Expected asset: public/image/logo_social.webp (1200x630 recommended).
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/image/logo_social.webp`,
  width: 1200,
  height: 630,
  alt: 'GRLab – weboldal készítés és szoftverfejlesztés Győr',
};

/**
 * Builds complete, per-page metadata (title, description, canonical,
 * OpenGraph and Twitter). Next.js replaces nested objects shallowly, so every
 * page must provide its own openGraph/twitter, otherwise it inherits the
 * homepage title and URL from the root layout.
 *
 * @param {'home'|'website'|'seo'|'portfolio'|'contact'} key  seoOptimization.* message key
 * @param {string} path  canonical path, e.g. '/website'
 */
export async function buildPageMetadata(key, path) {
  const [t, locale] = await Promise.all([
    getTranslations('seoOptimization'),
    getLocale(),
  ]);

  const title = t(`${key}.title`);
  const description = t(`${key}.description`);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
      locale: locale === 'en' ? 'en_US' : 'hu_HU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

/**
 * Page-level JSON-LD graph: a typed WebPage (ContactPage, CollectionPage, ...)
 * linked to the site-wide Organization/WebSite nodes, a BreadcrumbList and any
 * extra nodes (e.g. Service, ItemList) supplied by the page.
 *
 * @param {object} opts
 * @param {string} opts.path            canonical path, e.g. '/website'
 * @param {'home'|'website'|'seo'|'portfolio'|'contact'} opts.key  seoOptimization.* key (name/description)
 * @param {string} opts.breadcrumbLabel visible breadcrumb label for this page
 * @param {string} [opts.pageType]      schema.org WebPage subtype
 * @param {object} [opts.pageExtra]     extra properties merged into the WebPage node (e.g. mainEntity)
 * @param {object[]} [opts.nodes]       additional @graph nodes
 */
export async function buildPageJsonLd({
  path,
  key,
  breadcrumbLabel,
  pageType = 'WebPage',
  pageExtra = {},
  nodes = [],
}) {
  const [locale, tm, tn] = await Promise.all([
    getLocale(),
    getTranslations('seoOptimization'),
    getTranslations('nav'),
  ]);

  const url = `${SITE_URL}${path}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': pageType,
        '@id': `${url}#webpage`,
        url,
        name: tm(`${key}.title`),
        description: tm(`${key}.description`),
        inLanguage: locale === 'en' ? 'en' : 'hu-HU',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORGANIZATION_ID },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        ...pageExtra,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: tn('home'), item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: breadcrumbLabel, item: url },
        ],
      },
      ...nodes,
    ],
  };
}

export const SERVICE_AREA = [
  { '@type': 'City', name: 'Győr' },
  { '@type': 'Country', name: 'Magyarország' },
];
