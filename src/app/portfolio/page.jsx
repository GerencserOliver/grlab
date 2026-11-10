import CTA from '../../components/CTA';
import ScrollAnimation from '../../components/ScrollAnimation';
import IntroAnimation from '../../components/IntroAnimation';
import JsonLd from '../../components/JsonLd';
import Projects from '../../components/Portfolio/Projects';
import Reviews from '../../components/trust/Reviews';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { PROJECTS } from '../../lib/projects';
import {
  SITE_URL,
  ORGANIZATION_ID,
  buildPageMetadata,
  buildPageJsonLd,
} from '../../lib/seo';

const PATH = '/portfolio';

export async function generateMetadata() {
  return buildPageMetadata('portfolio', PATH);
}

const Portfolio = async () => {
  const [t, tp, tn] = await Promise.all([
    getTranslations('portfolio'),
    getTranslations('projects'),
    getTranslations('nav'),
  ]);

  const listId = `${SITE_URL}${PATH}#projects`;

  const jsonLd = await buildPageJsonLd({
    path: PATH,
    key: 'portfolio',
    breadcrumbLabel: tn('portfolio'),
    pageType: 'CollectionPage',
    pageExtra: { mainEntity: { '@id': listId } },
    nodes: [
      {
        '@type': 'ItemList',
        '@id': listId,
        name: t('title'),
        numberOfItems: PROJECTS.length,
        itemListElement: PROJECTS.map(({ key, url }, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: tp(`${key}.title`),
            description: tp(`${key}.description`),
            creator: { '@id': ORGANIZATION_ID },
            ...(url && { url }),
          },
        })),
      },
    ],
  });

  return (
    <div>
      <JsonLd data={jsonLd} />
      <IntroAnimation />
      <ScrollAnimation />
      <section className='border-b border-line bg-surface-alt'>
        <div className='container mx-auto flex max-w-360 flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:px-10 md:py-24'>
          <div className='scroll-in w-full md:w-2/3'>
            <p className='mb-5 text-sm font-bold uppercase tracking-[0.18em] text-brand-700'>
              {t('tagline')}
            </p>
            <h1 className='mb-5 font-poppins text-4xl font-extrabold leading-tight text-ink sm:text-5xl md:text-7xl'>
              {t('title')}
            </h1>
            <p className='max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl'>
              {t('description')}
            </p>
          </div>
          <div className='w-full md:w-1/3 md:text-right'>
            <Link 
              href='/contact' 
              className='inline-flex w-full justify-center rounded-full bg-brand-700 px-7 py-4 font-poppins text-lg font-bold text-white transition-colors hover:bg-brand-800 md:w-auto'
            >
              {t('requestQuote')}
            </Link>
          </div>
        </div>
      </section>
      <Projects />
      <Reviews />
      <CTA />
    </div>
  );
}

export default Portfolio;
