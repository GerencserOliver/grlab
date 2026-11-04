import { posts } from '../../content/blog';

export const BLOG_PATH = '/blog';
const WORDS_PER_MINUTE = 200;

/**
 * Returns a post flattened for one locale. If a post has no translation for the
 * requested locale it falls back to Hungarian, so a missing English version
 * never breaks the site.
 */
export function localizePost(post, locale) {
  const content = post[locale] ?? post.hu;
  const wordCount = content.body.trim().split(/\s+/).length;

  return {
    slug: post.slug,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt ?? post.publishedAt,
    accent: post.accent ?? 'teal',
    icon: post.icon ?? 'code',
    featured: Boolean(post.featured),
    locale: post[locale] ? locale : 'hu',
    ...content,
    wordCount,
    readingMinutes: Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE)),
  };
}

// Newest first; posts with the same date keep the order of content/blog/index.js.
export function getAllPosts(locale) {
  return posts
    .map((post) => localizePost(post, locale))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug, locale) {
  const post = posts.find((item) => item.slug === slug);
  return post ? localizePost(post, locale) : null;
}

export function getRelatedPosts(slug, locale, limit = 2) {
  return getAllPosts(locale)
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}

export function formatPostDate(isoDate, locale) {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
