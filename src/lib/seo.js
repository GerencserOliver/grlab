import { getLocale, getTranslations } from 'next-intl/server';

export const SITE_URL = 'https://www.grlab.hu';
export const SITE_NAME = 'GRLab';

// TODO: replace with a dedicated 1200x630 social card (see PR notes).
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/logo.png`,
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
