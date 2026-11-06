import ScrollAnimation from '../../components/ScrollAnimation';
import IntroAnimation from '../../components/IntroAnimation';
import JsonLd from '../../components/JsonLd';
import CTA from '../../components/CTA';
import PostCard from '../../components/blog/PostCard';
import { getLocale, getTranslations } from 'next-intl/server';
import { SITE_URL, SITE_NAME, ORGANIZATION_ID, buildPageMetadata } from '../../lib/seo';
import { BLOG_PATH, getAllPosts } from '../../lib/blog';

export async function generateMetadata() {
  const [base, t] = await Promise.all([
    buildPageMetadata('home', BLOG_PATH),
    getTranslations('blog'),
  ]);
  const title = t('metaTitle');
  const description = t('metaDescription');

  return {
    ...base,
    title,
    description,
    openGraph: { ...base.openGraph, title, description, url: `${SITE_URL}${BLOG_PATH}` },
    twitter: { ...base.twitter, title, description },
  };
}

const BlogIndex = async () => {
  const [t, tn, locale] = await Promise.all([
    getTranslations('blog'),
    getTranslations('nav'),
    getLocale(),
  ]);

  const posts = getAllPosts(locale);
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post !== featured);
  const url = `${SITE_URL}${BLOG_PATH}`;
  const dateToFormat = (date) => new Date(date).toISOString();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        url,
        name: `${SITE_NAME} ${t('navLabel')}`,
        description: t('metaDescription'),
        inLanguage: locale === 'en' ? 'en' : 'hu-HU',
        publisher: { '@id': ORGANIZATION_ID },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          author: { '@id': ORGANIZATION_ID },
          headline: post.title,
          url: `${url}/${post.slug}`,
          datePublished: dateToFormat(post.publishedAt),
          dateModified: dateToFormat(post.updatedAt),
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: tn('home'), item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: t('navLabel'), item: url },
        ],
      },
    ],
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <IntroAnimation />
      <ScrollAnimation />
      <section className='relative overflow-hidden border-b border-line bg-surface-alt'>
        <div className='pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-soft blur-3xl' aria-hidden='true' />
        <div className='container relative mx-auto max-w-360 px-6 py-16 md:px-10 md:py-24'>
          <div className='scroll-in max-w-4xl'>
            <p className='mb-5 text-sm font-bold uppercase tracking-[0.18em] text-brand-700'>{t('eyebrow')}</p>
            <h1 className='mb-5 font-poppins text-4xl font-extrabold leading-tight text-ink sm:text-5xl md:text-7xl'>
              {t('title')}
            </h1>
            <p className='max-w-3xl text-lg leading-relaxed text-ink-muted md:text-xl'>{t('subtitle')}</p>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='container mx-auto max-w-360 px-6 py-16 md:px-10 md:py-20'>
          {featured ? (
            <>
              <div className='scroll-in'>
                <PostCard post={featured} locale={locale} variant='featured' headingLevel='h2' />
              </div>
              {rest.length > 0 && (
                <>
                  <h2 className='scroll-in mt-16 font-poppins text-2xl font-bold text-ink md:text-3xl'>{t('latest')}</h2>
                  <ul className='scroll-in mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {rest.map((post) => (
                      <li key={post.slug}>
                        <PostCard post={post} locale={locale} headingLevel='h3' />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <p className='text-lg text-ink-muted'>{t('empty')}</p>
          )}
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default BlogIndex;
