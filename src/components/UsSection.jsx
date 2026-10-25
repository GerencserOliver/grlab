import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const UsSection = async () => {
  const t = await getTranslations('usSection');

  return (
    <section className='flex items-center justify-center bg-[#102a2d] px-8 py-8 md:py-16 md:px-16'>
      <div className='scroll-in container mx-auto max-w-360 text-white'>
        <div className='mb-12 max-w-3xl'>
          <p className='mb-10 text-sm font-bold uppercase tracking-[0.18em] text-orange-300 md:mb-5'>{t('eyebrow')}</p>
          <h2 className='md:mt-5 mt-10 mb-5 font-poppins text-3xl font-extrabold leading-tight md:text-5xl'>{t('introductionTitle')}</h2>
          <p className='mb-6 font-poppins text-lg leading-relaxed text-[#dce9df] md:text-xl'>{t('introductionText')}</p>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          <article className='rounded-2xl border border-[#426b6b] p-7'>
            <h3 className='font-poppins text-xl font-bold text-white'>{t('servicesTitle')}</h3>
            <p className='mt-3 leading-relaxed text-[#b9d0c5]'>{t('servicesText')}</p>
          </article>
          <article className='rounded-2xl border border-[#426b6b] p-7'>
            <h3 className='font-poppins text-xl font-bold text-white'>{t('point2Title')}</h3>
            <p className='mt-3 leading-relaxed text-[#b9d0c5]'>{t('point2Text')}</p>
          </article>
          <article className='rounded-2xl border border-[#426b6b] p-7'>
            <h3 className='font-poppins text-xl font-bold text-white'>{t('point3Title')}</h3>
            <p className='mt-3 leading-relaxed text-[#b9d0c5]'>{t('point3Text')}</p>
          </article>
        </div>
        <Link href='/website' className='mt-10 inline-flex font-bold text-orange-300 transition-colors hover:text-white'>{t('learnMore')} <span className='ml-2' aria-hidden='true'>→</span></Link>
      </div>
    </section>
  );
};

export default UsSection;
