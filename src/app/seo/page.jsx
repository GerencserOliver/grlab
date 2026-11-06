import ScrollAnimation from '../../components/ScrollAnimation';
import IntroAnimation from '../../components/IntroAnimation';
import JsonLd from '../../components/JsonLd';
import Link from 'next/link';
import Business from '../../images/Business image illustrating partner.webp';
import CTA from '../../components/CTA';
import Important from '../../components/SEO/Important';
import Rivals from '../../components/SEO/Rivals';
import Services from '../../components/SEO/Services';
import SEOProcess from '../../components/SEO/SEOProcess';
import SEOQuestions from '../../components/SEO/SEOQuestions';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import {
  SITE_URL,
  ORGANIZATION_ID,
  SERVICE_AREA,
  buildPageMetadata,
  buildPageJsonLd,
} from '../../lib/seo';

const PATH = '/seo';
const SEO_SERVICE_KEYS = [
  'seoStrategy',
  'keywordResearch',
  'onPageOptimization',
  'technicalSeo',
  'linkBuilding',
  'contentMarketing',
];

export async function generateMetadata() {
  return buildPageMetadata('seo', PATH);
}

const SEO = async () => {
  const [t, tm, ts, tn] = await Promise.all([
    getTranslations('seo'),
    getTranslations('seoOptimization'),
    getTranslations('SEOservices'),
    getTranslations('nav'),
  ]);

  const serviceId = `${SITE_URL}${PATH}#service`;

  const jsonLd = await buildPageJsonLd({
    path: PATH,
    key: 'seo',
    breadcrumbLabel: tn('seo'),
    pageExtra: { mainEntity: { '@id': serviceId } },
    nodes: [
      {
        '@type': 'Service',
        '@id': serviceId,
        name: tm('seo.title'),
        description: tm('seo.description'),
        serviceType: 'Technikai SEO és Google Cégprofil',
        url: `${SITE_URL}${PATH}`,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: SERVICE_AREA,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: ts('heading'),
          itemListElement: SEO_SERVICE_KEYS.map((key) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: ts(`${key}.name`),
              description: ts(`${key}.description`),
              provider: { '@id': ORGANIZATION_ID },
            },
          })),
        },
      },
    ],
  });

  return (
    <div>
      <JsonLd data={jsonLd} />
      <IntroAnimation />
      <ScrollAnimation />
      <section className="border-b border-line bg-surface-alt">
        <div className="container mx-auto flex max-w-360 flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:px-10 md:py-24">
          <div className="scroll-in w-full md:w-2/3">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-brand-700">
              {t('subtitle')}
            </p>
            <h1 className="mb-5 font-poppins text-4xl font-extrabold leading-tight text-ink sm:text-5xl md:text-7xl">
              {t('title')}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-ink-muted md:text-xl">
              {t('description')}
            </p>
          </div>
          <div className="w-full md:w-1/3 md:text-right">
            <Link href="/contact" className="inline-flex w-full justify-center rounded-full bg-brand-700 px-7 py-4 font-poppins text-lg font-bold text-white transition-colors hover:bg-brand-800 md:w-auto">
              {t('cta')}
            </Link>
          </div>
        </div>
        <div className="mt-10 items-center space-y-4 text-ink right-0 z-10">
          <Image src={Business} alt={t('imageAlt')} sizes="100vw" className="aspect-16/7 w-full object-cover" fetchPriority="high" loading="eager" />
        </div>
      </section>
      <Important />
      <Services />
      <Rivals />
      <SEOProcess />
      <SEOQuestions />
      <CTA />
    </div>
  );
}

export default SEO;
