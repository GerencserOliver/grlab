import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck, faGraduationCap, faRocket, faHandshake, faCode } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from '../../components/ScrollAnimation';
import IntroAnimation from '../../components/IntroAnimation';
import JsonLd from '../../components/JsonLd';
import CTA from '../../components/CTA';
import TeamSection from '../../components/trust/TeamSection';
import Reviews from '../../components/trust/Reviews';
import { TEAM } from '../../../content/team';
import { ABOUT_PATH } from '../../lib/business';
import { SITE_URL, SITE_NAME, ORGANIZATION_ID, buildPageMetadata, buildPageJsonLd } from '../../lib/seo';

export async function generateMetadata() {
  const [base, t] = await Promise.all([
    buildPageMetadata('home', ABOUT_PATH),
    getTranslations('about'),
  ]);
  const title = t('metaTitle');
  const description = t('metaDescription');

  return {
    ...base,
    title,
    description,
    openGraph: { ...base.openGraph, title, description, url: `${SITE_URL}${ABOUT_PATH}` },
    twitter: { ...base.twitter, title, description },
  };
}

const VALUE_ICONS = [faCode, faRocket, faHandshake];

const About = async () => {
  const t = await getTranslations('about');
  const education = t.raw('education');
  const values = t.raw('values');

  const people = TEAM.map((member) => ({
    '@type': 'Person',
    '@id': `${SITE_URL}${ABOUT_PATH}#${member.id}`,
    name: t(`team.${member.id}.name`),
    jobTitle: t(`team.${member.id}.role`),
    worksFor: { '@id': ORGANIZATION_ID },
    knowsAbout: t.raw(`team.${member.id}.focus`),
    sameAs: [member.github, member.linkedin],
  }));

  const jsonLd = await buildPageJsonLd({
    path: ABOUT_PATH,
    name: t('metaTitle'),
    description: t('metaDescription'),
    breadcrumbLabel: t('navLabel'),
    pageType: 'AboutPage',
    pageExtra: { mainEntity: { '@id': ORGANIZATION_ID }, about: { '@id': ORGANIZATION_ID } },
    nodes: [
      ...people,
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: SITE_NAME,
        founder: people.map((person) => ({ '@id': person['@id'] })),
      },
    ],
  });

  return (
    <div>
      <JsonLd data={jsonLd} />
      <IntroAnimation />
      <ScrollAnimation />

      <section className='border-b border-line bg-surface-alt'>
        <div className='container mx-auto max-w-360 px-6 py-16 md:px-10 md:py-24'>
          <div className='scroll-in max-w-4xl'>
            <p className='mb-5 text-sm font-bold uppercase tracking-[0.18em] text-brand-700'>{t('eyebrow')}</p>
            <h1 className='mb-6 font-poppins text-4xl font-extrabold leading-tight text-ink sm:text-5xl md:text-7xl'>{t('title')}</h1>
            <p className='max-w-3xl text-lg leading-relaxed text-ink-muted md:text-xl'>{t('intro')}</p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center gap-3 rounded-full bg-brand-700 px-7 py-4 font-poppins text-base font-bold text-white transition-colors hover:bg-brand-800'
              >
                {t('ctaPrimary')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
              </Link>
              <Link
                href='/website#pricing'
                className='inline-flex items-center justify-center rounded-full border-2 border-ink px-7 py-4 font-poppins text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white'
              >
                {t('ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='container mx-auto grid max-w-360 gap-5 px-6 py-20 md:px-10 md:py-24 lg:grid-cols-2'>
          <div className='scroll-in rounded-3xl bg-ink p-8 text-white md:p-10'>
            <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-300'>{t('storyEyebrow')}</p>
            <h2 className='font-poppins text-3xl font-extrabold leading-tight md:text-4xl'>{t('storyTitle')}</h2>
            <p className='mt-5 text-lg leading-relaxed text-soft'>{t('storyText')}</p>
          </div>
          <div className='scroll-in rounded-3xl border border-line bg-surface-alt p-8 md:p-10'>
            <h2 className='flex items-center gap-3 font-poppins text-2xl font-extrabold text-ink'>
              <FontAwesomeIcon icon={faGraduationCap} className='text-brand-700' aria-hidden='true' />
              {t('educationTitle')}
            </h2>
            <ul className='mt-6 space-y-5'>
              {Array.isArray(education) &&
                education.map((item) => (
                  <li key={item.school} className='flex gap-3'>
                    <FontAwesomeIcon icon={faCheck} className='mt-1.5 shrink-0 text-brand-green-700' aria-hidden='true' />
                    <div>
                      <p className='font-poppins text-lg font-bold text-ink'>{item.school}</p>
                      <p className='text-base text-ink-muted'>{item.detail}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className='border-y border-line bg-surface-alt'>
        <div className='container mx-auto max-w-360 px-6 py-20 md:px-10 md:py-24'>
          <div className='scroll-in max-w-3xl'>
            <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-700'>{t('valuesEyebrow')}</p>
            <h2 className='font-poppins text-3xl font-extrabold leading-tight text-ink md:text-5xl'>{t('valuesTitle')}</h2>
          </div>
          <ul className='scroll-in mt-12 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {Array.isArray(values) &&
              values.map((value, index) => (
                <li key={value.title} className='rounded-2xl border border-line bg-white p-7'>
                  <span className='flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-brand-700'>
                    <FontAwesomeIcon icon={VALUE_ICONS[index] ?? faCheck} aria-hidden='true' />
                  </span>
                  <h3 className='mt-6 font-poppins text-2xl font-bold text-ink'>{value.title}</h3>
                  <p className='mt-3 leading-relaxed text-ink-muted'>{value.text}</p>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <Reviews />
      <CTA />
    </div>
  );
};

export default About;
