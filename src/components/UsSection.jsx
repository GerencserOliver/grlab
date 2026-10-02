import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UsSection = () => {
  const { t } = useTranslation();

  return (
    <section className='flex items-center justify-center bg-[#102a2d] px-6 py-20 md:py-28'>
      <div className='scroll-in container mx-auto max-w-[1440px] text-white'>
        <div className='mb-12 max-w-3xl'>
          <p className='mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-300'>{t('usSection.eyebrow')}</p>
          <h2 className='font-poppins text-3xl font-extrabold leading-tight md:text-5xl'>{t('usSection.introductionTitle')}</h2>
          <p className='mt-5 font-poppins text-lg leading-relaxed text-[#dce9df] md:text-xl'>{t('usSection.introductionText')}</p>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
          <article className='rounded-2xl border border-[#426b6b] p-7'>
            <h3 className='font-poppins text-xl font-bold text-white'>{t('usSection.servicesTitle')}</h3>
            <p className='mt-3 leading-relaxed text-[#b9d0c5]'>{t('usSection.servicesText')}</p>
          </article>
          <article className='rounded-2xl border border-[#426b6b] p-7'>
            <h3 className='font-poppins text-xl font-bold text-white'>{t('usSection.point2Title')}</h3>
            <p className='mt-3 leading-relaxed text-[#b9d0c5]'>{t('usSection.point2Text')}</p>
          </article>
          <article className='rounded-2xl border border-[#426b6b] p-7'>
            <h3 className='font-poppins text-xl font-bold text-white'>{t('usSection.point3Title')}</h3>
            <p className='mt-3 leading-relaxed text-[#b9d0c5]'>{t('usSection.point3Text')}</p>
          </article>
        </div>
        <Link to='/website' className='mt-10 inline-flex font-bold text-orange-300 transition-colors hover:text-white'>{t('usSection.learnMore')} <span className='ml-2' aria-hidden='true'>→</span></Link>
      </div>
    </section>
  );
};

export default UsSection;
