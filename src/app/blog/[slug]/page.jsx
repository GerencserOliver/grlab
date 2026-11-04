import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLocale, getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import JsonLd from '../../../components/JsonLd';
import CTA from '../../../components/CTA';
import PostBody from '../../../components/blog/PostBody';
import PostToc from '../../../components/blog/PostToc';
import PostCard from '../../../components/blog/PostCard';
import ReadingProgress from '../../../components/blog/ReadingProgress';
import { ACCENTS } from '../../../components/blog/PostCover';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, buildPageMetadata } from '../../../lib/seo';
import { BUSINESS } from '../../../lib/business';
import { BLOG_PATH, getPostBySlug, getRelatedPosts, formatPostDate } from '../../../lib/blog';
import { parseMarkdown, extractHeadings } from '../../../lib/markdown';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const locale = await getLocale();
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return { title: '404', robots: { index: false, follow: false } };
  }

  const path = `${BLOG_PATH}/${slug}`;
  const base = await buildPageMetadata('home', path);
  const title = `${post.title} | ${SITE_NAME}`;

  return {
    ...base,
    title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: path },
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    openGraph: {
      ...base.openGraph,
      type: 'article',
      title,
      description: post.description,
      url: `${SITE_URL}${path}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [SITE_NAME],
      tags: post.tags,
    },
    twitter: { ...base.twitter, title, description: post.description },
  };
}

const BlogPost = async ({ params }) => {
  const { slug } = await params;
  const [t, tn, locale] = await Promise.all([
    getTranslations('blog'),
    getTranslations('nav'),
    getLocale(),
  ]);

  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  const url = `${SITE_URL}${BLOG_PATH}/${post.slug}`;
  const headings = extractHeadings(parseMarkdown(post.body));
  const related = getRelatedPosts(post.slug, locale, 2);
  const dateLabel = formatPostDate(post.publishedAt, locale);
  const isUpdated = post.updatedAt !== post.publishedAt;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        inLanguage: post.locale === 'en' ? 'en' : 'hu-HU',
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        image: [DEFAULT_OG_IMAGE.url],
        keywords: post.keywords?.join(', '),
        articleSection: post.tags?.[0],
        wordCount: post.wordCount,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
        },
        isPartOf: { '@type': 'Blog', '@id': `${SITE_URL}${BLOG_PATH}#blog` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: tn('home'), item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: t('navLabel'), item: `${SITE_URL}${BLOG_PATH}` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <ReadingProgress />

      <header className={`relative overflow-hidden ${ACCENTS[post.accent] ?? ACCENTS.teal}`}>
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.18),transparent_45%)]' aria-hidden='true' />
        <div className='pointer-events-none absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,#fff_1.5px,transparent_1.5px)] bg-size-[24px_24px]' aria-hidden='true' />
        <div className='relative mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-24'>
          <nav aria-label={t('breadcrumbLabel')}>
            <ol className='flex flex-wrap items-center gap-2 text-sm font-semibold text-white/85'>
              <li><Link href='/' className='hover:text-white hover:underline'>{tn('home')}</Link></li>
              <li aria-hidden='true'>/</li>
              <li><Link href={BLOG_PATH} className='hover:text-white hover:underline'>{t('navLabel')}</Link></li>
            </ol>
          </nav>
          <ul className='mt-8 flex flex-wrap gap-2' aria-label='Tags'>
            {post.tags?.map((tag) => (
              <li key={tag} className='rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white'>{tag}</li>
            ))}
          </ul>
          <h1 className='mt-5 font-poppins text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl'>
            {post.title}
          </h1>
          <p className='mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl'>{post.excerpt}</p>
          <p className='mt-8 text-sm font-semibold text-white/90'>
            {t('authorName')}
            <span aria-hidden='true'> · </span>
            <time dateTime={post.publishedAt}>{dateLabel}</time>
            {isUpdated && (
              <>
                <span aria-hidden='true'> · </span>
                {t('updatedOn')}: <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt, locale)}</time>
              </>
            )}
            <span aria-hidden='true'> · </span>
            {t('minRead', { minutes: post.readingMinutes })}
          </p>
        </div>
      </header>

      <section className='bg-white'>
        <div className='mx-auto grid max-w-6xl gap-12 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[18rem_minmax(0,1fr)]'>
          <aside className='order-first'>
            <PostToc headings={headings} />
          </aside>
          <article id='post-article' className='min-w-0 max-w-3xl'>
            <PostBody body={post.body} />

            <div className='mt-14 flex items-center gap-4 rounded-2xl border border-[#dfe7e1] bg-[#f5f7f4] p-5'>
              <span aria-hidden='true' className='flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#102a2d] font-poppins text-lg font-extrabold text-white'>GR</span>
              <div>
                <p className='font-poppins text-base font-bold text-[#102a2d]'>{t('authorName')}</p>
                <p className='text-sm text-[#315b5d]'>{t('authorRole')}</p>
              </div>
            </div>

            <aside className='mt-10 overflow-hidden rounded-3xl bg-[#102a2d] p-8 text-white md:p-10'>
              <h2 className='font-poppins text-2xl font-extrabold leading-tight md:text-3xl'>{t('ctaTitle')}</h2>
              <p className='mt-4 text-lg leading-relaxed text-[#dce9df]'>{t('ctaText')}</p>
              <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center'>
                <Link
                  href='/contact'
                  className='inline-flex items-center justify-center gap-3 rounded-full bg-orange-700 px-7 py-4 font-poppins text-base font-bold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-300'
                >
                  {t('ctaButton')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className='inline-flex items-center justify-center gap-2 px-3 py-3 font-bold text-orange-300 underline decoration-orange-300/50 underline-offset-4 transition-colors hover:text-white'
                >
                  <FontAwesomeIcon icon={faPhone} aria-hidden='true' /> {BUSINESS.phoneDisplay}
                </a>
              </div>
            </aside>
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className='border-t border-[#dfe7e1] bg-[#f5f7f4]'>
          <div className='mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20'>
            <h2 className='font-poppins text-2xl font-extrabold text-[#102a2d] md:text-4xl'>{t('related')}</h2>
            <ul className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
              {related.map((item) => (
                <li key={item.slug}>
                  <PostCard post={item} locale={locale} headingLevel='h3' />
                </li>
              ))}
            </ul>
            <Link
              href={BLOG_PATH}
              className='mt-10 inline-flex items-center gap-3 font-poppins font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-900'
            >
              {t('backToBlog')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
            </Link>
          </div>
        </section>
      )}
      <CTA />
    </div>
  );
};

export default BlogPost;
