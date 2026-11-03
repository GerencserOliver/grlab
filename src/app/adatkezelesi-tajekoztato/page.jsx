import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { SITE_URL, buildPageMetadata } from '../../lib/seo';
import { PRIVACY_PATH } from '../../lib/business';

export async function generateMetadata() {
  const [base, t] = await Promise.all([
    buildPageMetadata('home', PRIVACY_PATH),
    getTranslations('privacy'),
  ]);
  const title = `${t('title')} | GRLab`;
  const description = t('metaDescription');

  return {
    ...base,
    title,
    description,
    openGraph: { ...base.openGraph, title, description, url: `${SITE_URL}${PRIVACY_PATH}` },
    twitter: { ...base.twitter, title, description },
  };
}

const PrivacyPolicy = async () => {
  const t = await getTranslations('privacy');
  const sections = t.raw('sections');

  return (
    <section className='border-b border-[#dfe7e1] bg-[#f5f7f4]'>
      <article className='container mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24'>
        <header>
          <h1 className='font-poppins text-4xl font-extrabold leading-tight text-[#102a2d] md:text-6xl'>
            {t('title')}
          </h1>
          <p className='mt-4 text-sm font-semibold text-[#315b5d]'>{t('updated')}</p>
          <p className='mt-6 text-lg leading-relaxed text-[#315b5d]'>{t('intro')}</p>
        </header>
        <div className='mt-12 space-y-10'>
          {sections.map((section, index) => (
            <section key={section.heading} aria-labelledby={`privacy-section-${index}`}>
              <h2 id={`privacy-section-${index}`} className='font-poppins text-2xl font-bold text-[#102a2d] md:text-3xl'>
                {index + 1}. {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className='mt-4 leading-relaxed text-[#315b5d]'>{paragraph}</p>
              ))}
              {section.items && (
                <ul className='mt-4 list-disc space-y-2 pl-6 leading-relaxed text-[#315b5d]'>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.after?.map((paragraph) => (
                <p key={paragraph} className='mt-4 leading-relaxed text-[#315b5d]'>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
        <Link
          href='/contact'
          className='mt-12 inline-flex rounded-full bg-orange-700 px-7 py-4 font-poppins text-base font-bold text-white transition-colors hover:bg-orange-800'
        >
          {t('backToContact')}
        </Link>
      </article>
    </section>
  );
};

export default PrivacyPolicy;
