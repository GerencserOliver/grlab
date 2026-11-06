import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PostCover from './PostCover';
import { BLOG_PATH, formatPostDate } from '../../lib/blog';

/**
 * Blog card. `variant='featured'` renders the large two-column hero card.
 * `headingLevel` keeps the document outline valid wherever the card is used.
 */
const PostCard = async ({ post, locale, variant = 'default', headingLevel = 'h3', className = '' }) => {
  const t = await getTranslations('blog');
  const Heading = headingLevel;
  const isFeatured = variant === 'featured';
  const href = `${BLOG_PATH}/${post.slug}`;

  const meta = (
    <p className='text-sm font-semibold text-ink-muted'>
      <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, locale)}</time>
      <span aria-hidden='true'> · </span>
      {t('minRead', { minutes: post.readingMinutes })}
    </p>
  );

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition duration-300 focus-within:ring-2 focus-within:ring-brand-700 hover:-translate-y-1 hover:shadow-xl ${
        isFeatured ? 'grid md:grid-cols-2' : 'flex h-full flex-col'
      } ${className}`}
    >
      <PostCover
        accent={post.accent}
        icon={post.icon}
        className={isFeatured ? 'min-h-64 md:min-h-96' : 'aspect-16/9 w-full'}
      />
      <div className={`flex flex-1 flex-col ${isFeatured ? 'justify-center p-8 md:p-12' : 'p-6'}`}>
        <p className='flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-700'>
          {isFeatured && (
            <span className='rounded-full bg-brand-700 px-3 py-1 tracking-wider text-white'>{t('featured')}</span>
          )}
          {post.tags?.[0] && <span>{post.tags[0]}</span>}
        </p>
        <Heading
          className={`mt-3 font-poppins font-bold leading-snug text-ink ${
            isFeatured ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'
          }`}
        >
          {/* The pseudo-element stretches this link over the whole card, so the card is one big click target with a single tab stop. */}
          <Link href={href} className='outline-none after:absolute after:inset-0'>
            {post.title}
          </Link>
        </Heading>
        <p className={`mt-3 flex-1 leading-relaxed text-ink-muted ${isFeatured ? 'text-lg' : ''}`}>{post.excerpt}</p>
        <div className='mt-5 flex items-center justify-between gap-4'>
          {meta}
          <span className='inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors group-hover:text-brand-900'>
            {t('readMore')}
            <FontAwesomeIcon icon={faArrowRight} className='transition-transform group-hover:translate-x-1' aria-hidden='true' />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
