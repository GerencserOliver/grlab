import CTA from '../../components/CTA'
import ScrollAnimation from '../../components/ScrollAnimation'
import IntroAnimation from '../../components/IntroAnimation'
import JsonLd from '../../components/JsonLd'
import { getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { BUSINESS } from '../../lib/business';
import { ORGANIZATION_ID, buildPageMetadata, buildPageJsonLd } from '../../lib/seo';

const PATH = '/contact';

export async function generateMetadata() {
  return buildPageMetadata('contact', PATH);
}

const Contact = async () => {
  const [t, tn] = await Promise.all([
    getTranslations('contact'),
    getTranslations('nav'),
  ]);

  const jsonLd = await buildPageJsonLd({
    path: PATH,
    key: 'contact',
    breadcrumbLabel: tn('contact'),
    pageType: 'ContactPage',
    pageExtra: { mainEntity: { '@id': ORGANIZATION_ID } },
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
              {t('subtitle')}
            </p>
            <h1 className='mb-5 font-poppins text-4xl font-extrabold leading-tight text-ink sm:text-5xl md:text-7xl'>
              {t('title')}
            </h1>
            <p className='max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl'>{t('description')}</p>
          </div>
          <div className='w-full rounded-2xl border border-line-strong bg-white p-6 shadow-sm md:w-1/3'>
            <p className='text-sm font-bold uppercase tracking-widest text-brand-700'>{t('cardEyebrow')}</p>
            <ul className='mt-4 space-y-4'>
              <li>
                <span className='flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-muted'>
                  <FontAwesomeIcon icon={faPhone} aria-hidden='true' />
                  {t('cardPhoneLabel')}
                </span>
                <a href={BUSINESS.phoneHref} className='mt-1 block text-lg font-bold text-ink transition-colors hover:text-brand-700'>{BUSINESS.phoneDisplay}</a>
              </li>
              <li>
                <span className='flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-muted'>
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden='true' />
                  {t('cardEmailLabel')}
                </span>
                <a href={BUSINESS.emailHref} className='mt-1 block break-all text-lg font-bold text-ink transition-colors hover:text-brand-700'>{BUSINESS.email}</a>
              </li>
            </ul>
            <p className='mt-5 text-sm leading-relaxed text-ink-muted'>{t('cardText')}</p>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  )
}

export default Contact
