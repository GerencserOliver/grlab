import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PostCard from './PostCard';
import { BLOG_PATH, getAllPosts } from '../../lib/blog';

/**
 * Homepage teaser: a CSS scroll-snap carousel on phones (swipe / keyboard focus
 * scrolls it) that becomes a three-column grid from the md breakpoint.
 */
const BlogPreview = async () => {
  const [t, locale] = await Promise.all([getTranslations('blog'), getLocale()]);
  const latest = getAllPosts(locale).slice(0, 3);

  if (!latest.length) return null;

  return (
    <section className='bg-white' aria-labelledby='blog-preview-heading'>
      <div className='container mx-auto max-w-360 px-6 py-20 md:px-10 md:py-24'>
        <div className='scroll-in flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-3xl'>
            <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-700'>{t('homeEyebrow')}</p>
            <h2 id='blog-preview-heading' className='font-poppins text-3xl font-extrabold leading-tight text-ink md:text-5xl'>
              {t('homeTitle')}
            </h2>
            <p className='mt-5 text-lg leading-relaxed text-ink-muted md:text-xl'>{t('homeText')}</p>
          </div>
          <Link
            href={BLOG_PATH}
            className='inline-flex items-center gap-3 self-start rounded-full border-2 border-ink px-6 py-3 font-poppins text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white md:self-auto'
          >
            {t('homeAll')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
          </Link>
        </div>
        <ul
          aria-label={t('carouselLabel')}
          className='scroll-in -mx-6 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0'
        >
          {latest.map((post) => (
            <li key={post.slug} className='w-[85%] shrink-0 snap-start sm:w-[60%] md:w-auto'>
              <PostCard post={post} locale={locale} headingLevel='h3' />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogPreview;
