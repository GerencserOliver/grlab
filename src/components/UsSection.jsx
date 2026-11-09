import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const UsSection = async () => {
  const t = await getTranslations('usSection');

  return (
    <section className='flex items-center justify-center bg-ink px-6 py-16 md:px-16 md:py-20'>
      <div className='scroll-in container mx-auto max-w-360 text-white'>
        <div className='mb-12 max-w-3xl'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-300'>{t('eyebrow')}</p>
          <h2 className='mb-5 font-poppins text-3xl font-extrabold leading-tight md:text-5xl'>{t('introductionTitle')}</h2>
          <p className='mb-6 font-poppins text-lg leading-relaxed text-soft md:text-xl'>{t('introductionText')}</p>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          <article className='rounded-2xl border border-line-dark p-7'>
            <h3 className='font-poppins text-xl font-bold text-white'>{t('servicesTitle')}</h3>
            <p className='mt-3 leading-relaxed text-on-dark-muted'>{t('servicesText')}</p>
          </article>
          <article className='rounded-2xl border border-line-dark p-7'>
            <h3 className='font-poppins text-xl font-bold text-white'>{t('point2Title')}</h3>
            <p className='mt-3 leading-relaxed text-on-dark-muted'>{t('point2Text')}</p>
          </article>
          <article className='rounded-2xl border border-line-dark p-7'>
            <h3 className='font-poppins text-xl font-bold text-white'>{t('point3Title')}</h3>
            <p className='mt-3 leading-relaxed text-on-dark-muted'>{t('point3Text')}</p>
          </article>
        </div>
        <Link href='/about' className='mt-10 inline-flex font-bold text-brand-300 transition-colors hover:text-white'>{t('learnMore')} <span className='ml-2' aria-hidden='true'>→</span></Link>
      </div>
    </section>
  );
};

export default UsSection;
